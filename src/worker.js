// The Recipe Thing — server.
// One Cloudflare Worker: serves the app from /public and answers /api/* requests.
// Recipe books, recipes and shares are stored in a SQLite database inside one Durable Object ("Store").
import { DurableObject } from "cloudflare:workers";

/* ---------------- helpers ---------------- */
const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json", "cache-control": "no-store", ...headers } });
const fail = (code, message, status = 400) => json({ error: { code, message } }, status);
const SESSION_COOKIE = "rt_session";
const YEAR = 60 * 60 * 24 * 365;
const sessionCookie = (token, maxAge) => `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
function readCookie(req, name) {
  for (const part of (req.headers.get("cookie") || "").split(/;\s*/)) {
    const i = part.indexOf("=");
    if (i > 0 && part.slice(0, i) === name) return decodeURIComponent(part.slice(i + 1));
  }
  return null;
}
const b64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf)));
const randomToken = (bytes = 32) => b64(crypto.getRandomValues(new Uint8Array(bytes))).replace(/[+/=]/g, c => ({ "+": "-", "/": "_", "=": "" })[c]);
const CODE_ABC = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const today = () => new Date().toISOString().slice(0, 10);

async function hashPassword(password, saltB64) {
  const salt = saltB64 ? Uint8Array.from(atob(saltB64), c => c.charCodeAt(0)) : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt, iterations: 100000 }, key, 256);
  return { hash: b64(bits), salt: b64(salt) };
}
function sameString(a, b) {
  if (a.length !== b.length) return false;
  let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

/* ---------------- database (Durable Object) ---------------- */
export class Store extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = ctx.storage.sql;
    this.sql.exec(`CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, username TEXT UNIQUE NOT NULL, hash TEXT NOT NULL, salt TEXT NOT NULL, created INTEGER NOT NULL)`);
    this.sql.exec(`CREATE TABLE IF NOT EXISTS sessions (token TEXT PRIMARY KEY, user_id TEXT NOT NULL, created INTEGER NOT NULL)`);
    this.sql.exec(`CREATE TABLE IF NOT EXISTS docs (user_id TEXT NOT NULL, key TEXT NOT NULL, data TEXT NOT NULL, updated INTEGER NOT NULL, PRIMARY KEY (user_id, key))`);
    this.sql.exec(`CREATE TABLE IF NOT EXISTS shares (code TEXT PRIMARY KEY, user_id TEXT NOT NULL, data TEXT NOT NULL, created INTEGER NOT NULL)`);
    this.sql.exec(`CREATE TABLE IF NOT EXISTS usage (user_id TEXT NOT NULL, day TEXT NOT NULL, count INTEGER NOT NULL, PRIMARY KEY (user_id, day))`);
    this.sql.exec(`CREATE TABLE IF NOT EXISTS spend (id INTEGER PRIMARY KEY CHECK (id = 1), usd REAL NOT NULL)`);
    this.sql.exec(`CREATE TABLE IF NOT EXISTS library (id TEXT PRIMARY KEY, user_id TEXT NOT NULL, title TEXT NOT NULL, cat TEXT NOT NULL, search TEXT NOT NULL, data TEXT NOT NULL, updated INTEGER NOT NULL)`);
    this.sql.exec(`CREATE TABLE IF NOT EXISTS links (code TEXT PRIMARY KEY, user_id TEXT NOT NULL, expires INTEGER NOT NULL)`);
    this.sql.exec(`CREATE TABLE IF NOT EXISTS attempts (username TEXT PRIMARY KEY, fails INTEGER NOT NULL, until INTEGER NOT NULL)`);
  }
  // First run with the library: add recipes that were saved before it existed.
  backfill() {
    if (this.backfilled) return; this.backfilled = true;
    if (this.one(`SELECT COUNT(*) AS n FROM library`).n > 0) return;
    for (const d of this.sql.exec(`SELECT user_id, key, data FROM docs WHERE key != 'kitchen'`).toArray()) this.publish(d.user_id, d.key, d.data);
  }
  one(q, ...args) { const rows = this.sql.exec(q, ...args).toArray(); return rows[0] || null; }

  newSession(userId) {
    const token = randomToken();
    this.sql.exec(`INSERT INTO sessions (token, user_id, created) VALUES (?, ?, ?)`, token, userId, Date.now());
    return token;
  }
  async signup(username, password) {
    if (this.one(`SELECT id FROM users WHERE username = ?`, username)) return { error: "taken" };
    const { hash, salt } = await hashPassword(password);
    const id = "u_" + randomToken(12);
    this.sql.exec(`INSERT INTO users (id, username, hash, salt, created) VALUES (?, ?, ?, ?, ?)`, id, username, hash, salt, Date.now());
    return { token: this.newSession(id), username };
  }
  async login(username, password) {
    const lock = this.one(`SELECT fails, until FROM attempts WHERE username = ?`, username);
    if (lock && lock.until > Date.now()) return { error: "locked" };
    const u = this.one(`SELECT id, hash, salt FROM users WHERE username = ?`, username);
    const ok = u && u.hash && sameString((await hashPassword(password, u.salt)).hash, u.hash);
    if (!ok) {
      const fails = (lock ? lock.fails : 0) + 1;
      const until = fails >= 8 ? Date.now() + 10 * 60 * 1000 : 0;
      this.sql.exec(`INSERT INTO attempts (username, fails, until) VALUES (?, ?, ?) ON CONFLICT(username) DO UPDATE SET fails = ?, until = ?`, username, fails >= 8 ? 0 : fails, until, fails >= 8 ? 0 : fails, until);
      return { error: "wrong" };
    }
    this.sql.exec(`DELETE FROM attempts WHERE username = ?`, username);
    return { token: this.newSession(u.id), username };
  }
  // A recipe book with no username or password: the phone keeps a private key (a cookie).
  startBook() {
    const id = "u_" + randomToken(12);
    this.sql.exec(`INSERT INTO users (id, username, hash, salt, created) VALUES (?, ?, '', '', ?)`, id, "book-" + id.slice(2, 10).toLowerCase(), Date.now());
    return { token: this.newSession(id) };
  }
  // Turn a book with no name into a proper account, keeping its recipes.
  async claim(userId, username, password) {
    const u = this.one(`SELECT hash FROM users WHERE id = ?`, userId);
    if (!u || u.hash) return { error: "already" };
    if (this.one(`SELECT id FROM users WHERE username = ?`, username)) return { error: "taken" };
    const { hash, salt } = await hashPassword(password);
    this.sql.exec(`UPDATE users SET username = ?, hash = ?, salt = ? WHERE id = ?`, username, hash, salt, userId);
    return { username };
  }
  // A short code to open the same book on another phone. Lasts 1 hour.
  createLink(userId) {
    this.sql.exec(`DELETE FROM links WHERE expires < ?`, Date.now());
    for (let tries = 0; tries < 5; tries++) {
      let code = ""; for (const b of crypto.getRandomValues(new Uint8Array(6))) code += CODE_ABC[b % CODE_ABC.length];
      if (this.one(`SELECT 1 AS x FROM links WHERE code = ?`, code)) continue;
      this.sql.exec(`INSERT INTO links (code, user_id, expires) VALUES (?, ?, ?)`, code, userId, Date.now() + 60 * 60 * 1000);
      return { code };
    }
    return { error: "busy" };
  }
  useLink(code, key) {
    const lock = this.one(`SELECT fails, until FROM attempts WHERE username = ?`, "link:" + key);
    if (lock && lock.until > Date.now()) return { error: "locked" };
    const row = this.one(`SELECT user_id FROM links WHERE code = ? AND expires > ?`, code, Date.now());
    if (!row) {
      const fails = (lock ? lock.fails : 0) + 1, until = fails >= 10 ? Date.now() + 15 * 60 * 1000 : 0;
      this.sql.exec(`INSERT INTO attempts (username, fails, until) VALUES (?, ?, ?) ON CONFLICT(username) DO UPDATE SET fails = ?, until = ?`, "link:" + key, fails >= 10 ? 0 : fails, until, fails >= 10 ? 0 : fails, until);
      return { error: "wrong" };
    }
    return { token: this.newSession(row.user_id) };
  }
  session(token) {
    if (!token) return null;
    return this.one(`SELECT u.id AS id, u.username AS username, (u.hash = '') AS anon FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = ?`, token);
  }
  logout(token) { this.sql.exec(`DELETE FROM sessions WHERE token = ?`, token); }
  listDocs(userId) { return this.sql.exec(`SELECT key, data, updated FROM docs WHERE user_id = ?`, userId).toArray(); }
  putDoc(userId, key, data) {
    const count = this.one(`SELECT COUNT(*) AS n FROM docs WHERE user_id = ?`, userId).n;
    const exists = this.one(`SELECT 1 AS x FROM docs WHERE user_id = ? AND key = ?`, userId, key);
    if (!exists && count >= 2000) return { error: "full" };
    this.sql.exec(`INSERT INTO docs (user_id, key, data, updated) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, key) DO UPDATE SET data = excluded.data, updated = excluded.updated`, userId, key, data, Date.now());
    this.publish(userId, key, data);
    return { ok: true };
  }
  deleteDoc(userId, key) {
    this.sql.exec(`DELETE FROM docs WHERE user_id = ? AND key = ?`, userId, key);
    this.sql.exec(`DELETE FROM library WHERE id = ?`, userId + ":" + key);
  }
  // Recipes go into the shared library unless they're private or copies of someone else's.
  publish(userId, key, text) {
    const id = userId + ":" + key;
    let r; try { r = JSON.parse(text); } catch { return; }
    const kind = r && r.source && r.source.kind;
    if (!r || r.type !== "recipe" || r.private || kind === "library" || kind === "friend" || !r.title) { this.sql.exec(`DELETE FROM library WHERE id = ?`, id); return; }
    const copy = Object.assign({}, r); delete copy.photo; delete copy.fav; delete copy.notes;
    const search = [r.title, r.description, (r.tags || []).join(" "), (r.ingredients || []).map(i => i && i.item).join(" ")].join(" ").toLowerCase();
    this.sql.exec(`INSERT INTO library (id, user_id, title, cat, search, data, updated) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET title = excluded.title, cat = excluded.cat, search = excluded.search, data = excluded.data, updated = excluded.updated`,
      id, userId, String(r.title).slice(0, 200), String(r.category || "dinner"), search.slice(0, 4000), JSON.stringify(copy), Date.now());
  }
  searchLibrary(q, cat) {
    this.backfill();
    const words = String(q || "").toLowerCase().split(/\s+/).filter(Boolean).slice(0, 5);
    let sql = `SELECT l.id AS id, l.data AS data, u.username AS author, (u.hash = '') AS anon FROM library l JOIN users u ON u.id = l.user_id WHERE 1 = 1`;
    const args = [];
    for (const w of words) { sql += ` AND l.search LIKE ?`; args.push("%" + w.replace(/[%_]/g, "") + "%"); }
    if (cat) { sql += ` AND l.cat = ?`; args.push(cat); }
    sql += ` ORDER BY l.updated DESC LIMIT 60`;
    return this.sql.exec(sql, ...args).toArray();
  }
  getLibrary(id) {
    return this.one(`SELECT l.data AS data, u.username AS author, (u.hash = '') AS anon FROM library l JOIN users u ON u.id = l.user_id WHERE l.id = ?`, id);
  }
  createShare(userId, data) {
    for (let tries = 0; tries < 5; tries++) {
      let code = ""; for (const b of crypto.getRandomValues(new Uint8Array(6))) code += CODE_ABC[b % CODE_ABC.length];
      if (this.one(`SELECT 1 AS x FROM shares WHERE code = ?`, code)) continue;
      this.sql.exec(`INSERT INTO shares (code, user_id, data, created) VALUES (?, ?, ?, ?)`, code, userId, data, Date.now());
      return { code };
    }
    return { error: "busy" };
  }
  getShare(code) {
    const row = this.one(`SELECT s.data AS data, u.username AS sender FROM shares s JOIN users u ON u.id = s.user_id WHERE s.code = ?`, code);
    return row ? { data: row.data, sender: row.sender } : null;
  }
  addSpend(usd) {
    if (!(usd > 0)) return;
    this.sql.exec(`INSERT INTO spend (id, usd) VALUES (1, ?) ON CONFLICT(id) DO UPDATE SET usd = usd + ?`, usd, usd);
  }
  getSpend() { const r = this.one(`SELECT usd FROM spend WHERE id = 1`); return r ? r.usd : 0; }
  useAI(userId, perUser, total) {
    const day = today();
    const mine = this.one(`SELECT count FROM usage WHERE user_id = ? AND day = ?`, userId, day);
    const all = this.one(`SELECT COALESCE(SUM(count), 0) AS n FROM usage WHERE day = ?`, day).n;
    if ((mine ? mine.count : 0) >= perUser) return { ok: false, why: "you" };
    if (all >= total) return { ok: false, why: "everyone" };
    this.sql.exec(`INSERT INTO usage (user_id, day, count) VALUES (?, ?, 1) ON CONFLICT(user_id, day) DO UPDATE SET count = count + 1`, userId, day);
    return { ok: true };
  }
}

/* ---------------- AI (Claude Haiku via the Anthropic API) ---------------- */
async function handleAI(req, env, user, stub, ctx) {
  if (!env.ANTHROPIC_API_KEY) return fail("ai_not_configured", "The AI isn't set up yet. Add ANTHROPIC_API_KEY in Cloudflare.", 503);
  const body = await req.json().catch(() => null);
  if (!body || !Array.isArray(body.messages) || !body.messages.length) return fail("bad_request", "Nothing to send.");
  const msgs = body.messages.slice(-30).map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: String(m.content || "").slice(0, 300000) })).filter(m => m.content);
  while (msgs.length && msgs[0].role !== "user") msgs.shift();
  for (let i = msgs.length - 1; i > 0; i--) if (msgs[i].role === msgs[i - 1].role) { msgs[i - 1].content += "\n\n" + msgs[i].content; msgs.splice(i, 1); }
  if (!msgs.length || msgs[msgs.length - 1].role !== "user") return fail("bad_request", "The last message must be from you.");
  const images = Array.isArray(body.images) ? body.images.slice(0, 4) : [];
  for (const im of images) {
    if (!/^image\/(jpeg|png|webp|gif)$/.test(im.type || "") || typeof im.data !== "string" || im.data.length > 8_000_000) return fail("image_rejected", "That photo couldn't be read.");
  }
  if (images.length) {
    const last = msgs[msgs.length - 1];
    last.content = [...images.map(im => ({ type: "image", source: { type: "base64", media_type: im.type, data: im.data } })), { type: "text", text: last.content }];
  }
  const limit = await stub.useAI(user.id, Number(env.AI_DAILY_PER_USER) || 80, Number(env.AI_DAILY_TOTAL) || 400);
  if (!limit.ok) return fail("rate_limited", limit.why === "you" ? "You've used the AI a lot today. Try again tomorrow." : "The app has used its AI for today. Try again tomorrow.", 429);

  const system = [String(body.system || ""), body.json ? "Reply with only valid JSON. No other text, no code fences." : ""].filter(Boolean).join("\n\n") || undefined;
  const upstream = await fetch((env.ANTHROPIC_BASE_URL || "https://api.anthropic.com") + "/v1/messages", {
    method: "POST",
    headers: { "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: env.AI_MODEL || "claude-haiku-5-5", max_tokens: Math.min(Number(body.maxTokens) || 4096, 8192), system, messages: msgs, stream: true })
  });
  if (!upstream.ok) {
    const text = await upstream.text().catch(() => "");
    console.log("Anthropic error", upstream.status, text.slice(0, 500));
    if (upstream.status === 401 || upstream.status === 403) return fail("ai_not_configured", "The AI key isn't working. Check ANTHROPIC_API_KEY in Cloudflare.", 503);
    if (upstream.status === 429 || upstream.status === 529) return fail("busy", "The AI is busy right now. Try again in a minute.", 503);
    if (/credit balance/i.test(text)) return fail("no_credit", "The AI account has run out of credit.", 503);
    return fail("upstream_error", "The AI couldn't answer. Try again.", 502);
  }
  // Turn Anthropic's event stream into plain text as it arrives.
  const enc = new TextEncoder(), dec = new TextDecoder();
  let buf = "", inTok = 0, outTok = 0;
  const priceIn = Number(env.PRICE_IN_PER_MILLION) || 0.1, priceOut = Number(env.PRICE_OUT_PER_MILLION) || 0.5;
  const stream = new TransformStream({
    flush() { ctx.waitUntil(stub.addSpend((inTok * priceIn + outTok * priceOut) / 1e6)); },
    transform(chunk, ctrl) {
      buf += dec.decode(chunk, { stream: true });
      let i;
      while ((i = buf.indexOf("\n\n")) >= 0) {
        const block = buf.slice(0, i); buf = buf.slice(i + 2);
        const data = block.split("\n").filter(l => l.startsWith("data:")).map(l => l.slice(5).trim()).join("");
        if (!data) continue;
        let ev; try { ev = JSON.parse(data); } catch { continue; }
        if (ev.type === "content_block_delta" && ev.delta && ev.delta.type === "text_delta") ctrl.enqueue(enc.encode(ev.delta.text));
        else if (ev.type === "error") ctrl.enqueue(enc.encode("\u0000ERROR"));
        else if (ev.type === "message_start" && ev.message && ev.message.usage) { const u = ev.message.usage; inTok += (u.input_tokens || 0) + (u.cache_creation_input_tokens || 0) + (u.cache_read_input_tokens || 0); outTok += u.output_tokens || 0; }
        else if (ev.type === "message_delta" && ev.usage) outTok = Math.max(outTok, ev.usage.output_tokens || 0);
      }
    }
  });
  return new Response(upstream.body.pipeThrough(stream), { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" } });
}

/* ---------------- opening recipe links ---------------- */
function isoMinutes(v) {
  const m = String(v || "").match(/P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?/i);
  if (!m) return "";
  const n = (Number(m[1] || 0) * 1440) + (Number(m[2] || 0) * 60) + Number(m[3] || 0);
  return n ? n + " minutes" : "";
}
function findRecipe(node) {
  if (!node || typeof node !== "object") return null;
  if (Array.isArray(node)) { for (const n of node) { const r = findRecipe(n); if (r) return r; } return null; }
  const t = node["@type"]; if (t === "Recipe" || (Array.isArray(t) && t.includes("Recipe"))) return node;
  return findRecipe(node["@graph"]) || findRecipe(node.mainEntity) || null;
}
const decodeEntities = s => String(s || "").replace(/&deg;/g, "°").replace(/&frac12;/g, "½").replace(/&frac14;/g, "¼").replace(/&frac34;/g, "¾").replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16))).replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
function instructionsText(ins) {
  const out = [];
  const walk = x => {
    if (!x) return;
    if (typeof x === "string") out.push(x);
    else if (Array.isArray(x)) x.forEach(walk);
    else if (x["@type"] === "HowToSection") { if (x.name) out.push("## " + x.name); walk(x.itemListElement); }
    else if (x.text) out.push(x.text);
    else if (x.name) out.push(x.name);
  };
  walk(ins);
  let n = 0;
  return out.map(s => (s.startsWith("## ") ? s.slice(3) + ":" : (++n) + ". " + decodeEntities(s).replace(/<[^>]+>/g, "").trim())).join("\n");
}
async function handleFetchUrl(req) {
  const body = await req.json().catch(() => null);
  let url; try { url = new URL(String(body && body.url || "").trim()); } catch { return fail("bad_url", "That doesn't look like a link."); }
  if (!/^https?:$/.test(url.protocol) || /^(localhost|127\.|10\.|192\.168\.|169\.254\.|0\.|\[)/.test(url.hostname) || /^172\.(1[6-9]|2\d|3[01])\./.test(url.hostname) || !url.hostname.includes(".")) return fail("bad_url", "That link can't be opened.");
  let res;
  try {
    res = await fetch(url.toString(), { redirect: "follow", signal: AbortSignal.timeout(12000), headers: { "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1", "accept-language": "en-GB,en;q=0.9,pt;q=0.8" } });
  } catch { return fail("fetch_failed", "Couldn't open that link. Check it and try again."); }
  if (!res.ok) return fail("fetch_failed", `That website said no (error ${res.status}). Try copying the recipe text instead.`);
  const html = (await res.text()).slice(0, 3_000_000);
  const title = decodeEntities((html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']*)/i) || html.match(/<title[^>]*>([^<]*)/i) || [])[1] || "").trim();
  // 1) Most recipe websites include the recipe as structured data.
  for (const m of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    let data; try { data = JSON.parse(m[1].trim()); } catch { continue; }
    const r = findRecipe(data);
    if (r) {
      const ings = (r.recipeIngredient || r.ingredients || []).map(s => "- " + decodeEntities(s)).join("\n");
      const text = [`${decodeEntities(r.name || title)}`, r.description ? decodeEntities(r.description).replace(/<[^>]+>/g, "") : "",
        r.recipeYield ? "Serves/makes: " + [].concat(r.recipeYield).join(", ") : "",
        isoMinutes(r.prepTime) ? "Prep: " + isoMinutes(r.prepTime) : "", isoMinutes(r.cookTime) ? "Cook: " + isoMinutes(r.cookTime) : "",
        "Ingredients:\n" + ings, "Method:\n" + instructionsText(r.recipeInstructions)].filter(Boolean).join("\n");
      return json({ title: decodeEntities(r.name || title), text, structured: true, url: res.url, image: pageImage(html, r, res.url) });
    }
  }
  // 2) Video pages: use the description.
  const yt = html.match(/"shortDescription":"((?:[^"\\]|\\.)*)"/);
  const meta = (html.match(/<meta[^>]+(?:name|property)=["'](?:og:)?description["'][^>]+content=["']([^"']*)/i) || [])[1] || "";
  let text = "";
  if (yt) { try { text = JSON.parse('"' + yt[1] + '"'); } catch {} }
  // 3) Otherwise, the readable text of the page.
  if (!text || text.length < 200) {
    const page = html.replace(/<(script|style|noscript|svg|nav|footer|header|form|iframe)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<(br|\/p|\/li|\/h\d|\/div|\/tr)[^>]*>/gi, "\n").replace(/<li[^>]*>/gi, "\n- ").replace(/<[^>]+>/g, " ");
    text = [text, decodeEntities(meta), decodeEntities(page)].filter(Boolean).join("\n");
  }
  text = text.replace(/[ \t ]+/g, " ").replace(/\n\s*\n+/g, "\n").trim().slice(0, 50000);
  if (text.length < 80) return fail("no_recipe", "Couldn't find a recipe on that page. Try copying the recipe text instead.");
  return json({ title, text, structured: false, url: res.url, image: pageImage(html, null, res.url) });
}

/* ---------------- food photos ---------------- */
// Finds a free-to-use photo of a dish: Openverse first, then Wikimedia Commons.
const UA = { "user-agent": "recipe-thing/1.0 (family recipe app; https://github.com/baffsharp/recipe-thing)" };
async function openversePhoto(q) {
  const res = await fetch("https://api.openverse.org/v1/images/?page_size=8&mature=false&q=" + encodeURIComponent(q), { headers: UA, signal: AbortSignal.timeout(7000) });
  if (!res.ok) return null;
  const data = await res.json();
  const p = (data.results || []).find(r => r.thumbnail && (!r.width || r.width >= 400));
  if (!p) return null;
  const lic = p.license ? (["cc0", "pdm"].includes(p.license) ? "" : "CC " + p.license.toUpperCase() + (p.license_version ? " " + p.license_version : "")) : "";
  return { url: p.thumbnail, credit: [p.creator, lic].filter(Boolean).join(", ") || "Openverse", link: p.foreign_landing_url || "" };
}
async function commonsPhoto(q) {
  const api = "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|mime&iiurlwidth=900&gsrsearch=" + encodeURIComponent(q);
  const res = await fetch(api, { headers: UA, signal: AbortSignal.timeout(7000) });
  if (!res.ok) return null;
  const pages = Object.values(((await res.json()).query || {}).pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
  const p = pages.find(x => x.imageinfo && x.imageinfo[0] && /image\/(jpeg|png|webp)/.test(x.imageinfo[0].mime || "") && x.imageinfo[0].thumburl);
  if (!p) return null;
  return { url: p.imageinfo[0].thumburl, credit: "Wikimedia Commons", link: p.imageinfo[0].descriptionurl || "" };
}
async function handlePhoto(url) {
  const q = String(url.searchParams.get("q") || "").trim().slice(0, 80);
  if (!q) return fail("bad_request", "Nothing to search for.");
  for (const find of [() => openversePhoto(q + " food"), () => openversePhoto(q), () => commonsPhoto(q)]) {
    try { const r = await find(); if (r) return json(r); } catch {}
  }
  return fail("not_found", "No photo found.", 404);
}
function pageImage(html, recipe, base) {
  let img = recipe && recipe.image;
  if (Array.isArray(img)) img = img[0];
  if (img && typeof img === "object") img = img.url || img.contentUrl;
  if (!img) img = (html.match(/<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)/i) || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i) || [])[1];
  if (!img) return "";
  try { const u = new URL(decodeEntities(img), base); return /^https?:$/.test(u.protocol) ? u.toString() : ""; } catch { return ""; }
}

/* ---------------- routes ---------------- */
const USERNAME_RX = /^[a-z0-9_.-]{3,24}$/;
const KEY_RX = /^[A-Za-z0-9_.:-]{1,80}$/;
async function api(req, env, url, ctx) {
  const stub = env.STORE.get(env.STORE.idFromName("main"));
  const path = url.pathname, method = req.method;
  if ((method === "POST" || method === "PUT") && !(req.headers.get("content-type") || "").includes("application/json")) return fail("bad_request", "Expected JSON.", 415);

  if (path === "/api/config") return json({ signupCode: !!env.SIGNUP_CODE, ai: !!env.ANTHROPIC_API_KEY });

  if (path === "/api/signup" || path === "/api/login") {
    if (method !== "POST") return fail("bad_request", "Use POST.", 405);
    const b = await req.json().catch(() => ({}));
    const username = String(b.username || "").trim().toLowerCase(), password = String(b.password || "");
    if (!USERNAME_RX.test(username)) return fail("bad_username", "Usernames are 3 to 24 letters or numbers, no spaces.");
    if (password.length < 6 || password.length > 200) return fail("bad_password", "Passwords need at least 6 characters.");
    let r;
    if (path === "/api/signup") {
      if (env.SIGNUP_CODE && String(b.code || "").trim() !== env.SIGNUP_CODE) return fail("bad_code", "That invite code isn't right. Ask whoever gave you the app.", 403);
      r = await stub.signup(username, password);
      if (r.error === "taken") return fail("taken", "That username is taken. Try another.", 409);
    } else {
      r = await stub.login(username, password);
      if (r.error === "locked") return fail("locked", "Too many wrong tries. Wait 10 minutes and try again.", 429);
      if (r.error) return fail("wrong", "That username or password isn't right.", 401);
    }
    return json({ username: r.username }, 200, { "set-cookie": sessionCookie(r.token, YEAR) });
  }

  if (path === "/api/start" && method === "POST") {
    const r = await stub.startBook();
    return json({ ok: true }, 200, { "set-cookie": sessionCookie(r.token, YEAR * 5) });
  }
  if (path === "/api/link" && method === "POST") {
    const b = await req.json().catch(() => ({}));
    const code = String(b.code || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (code.length !== 6) return fail("wrong", "Codes are 6 letters and numbers.");
    const r = await stub.useLink(code, req.headers.get("cf-connecting-ip") || "local");
    if (r.error === "locked") return fail("locked", "Too many wrong codes. Wait 15 minutes and try again.", 429);
    if (r.error) return fail("wrong", "That code isn't right, or it's more than an hour old. Get a new one.", 400);
    return json({ ok: true }, 200, { "set-cookie": sessionCookie(r.token, YEAR * 5) });
  }

  const shareM = path.match(/^\/api\/shares\/([A-Za-z0-9]{6})$/);
  if (shareM && method === "GET") {
    const r = await stub.getShare(shareM[1].toUpperCase());
    if (!r) return fail("not_found", "No recipes found for that code.", 404);
    return json({ sender: /^book-/.test(r.sender) ? "" : r.sender, ...JSON.parse(r.data) });
  }

  const token = readCookie(req, SESSION_COOKIE);
  const user = await stub.session(token);
  if (path === "/api/logout") { if (token) await stub.logout(token); return json({ ok: true }, 200, { "set-cookie": sessionCookie("", 0) }); }
  if (!user) return fail("signed_out", "Please sign in.", 401);

  if (path === "/api/me") return json({ username: user.username, anonymous: !!user.anon });
  if (path === "/api/claim" && method === "POST") {
    const b = await req.json().catch(() => ({}));
    const username = String(b.username || "").trim().toLowerCase(), password = String(b.password || "");
    if (!USERNAME_RX.test(username)) return fail("bad_username", "Usernames are 3 to 24 letters or numbers, no spaces.");
    if (password.length < 6 || password.length > 200) return fail("bad_password", "Passwords need at least 6 characters.");
    const r = await stub.claim(user.id, username, password);
    if (r.error === "taken") return fail("taken", "That username is taken. Try another.", 409);
    if (r.error) return fail("already", "You already have an account.", 400);
    return json({ username });
  }
  if (path === "/api/library" && method === "GET") {
    const cat = url.searchParams.get("cat");
    const rows = await stub.searchLibrary(url.searchParams.get("q"), ["dinner", "dessert", "snack"].includes(cat) ? cat : "");
    return json({ results: rows.map(r => {
      const d = JSON.parse(r.data);
      return { id: r.id, title: d.title, category: d.category, emoji: d.emoji || "", photoUrl: d.photoUrl || "", servings: d.servings, mins: (d.prepMinutes || 0) + (d.cookMinutes || 0), author: r.anon ? "" : r.author, ingredients: (d.ingredients || []).slice(0, 4).map(i => ({ item: i.item })) };
    }) });
  }
  const libM = path.match(/^\/api\/library\/([A-Za-z0-9_.:%-]+)$/);
  if (libM && method === "GET") {
    const r = await stub.getLibrary(decodeURIComponent(libM[1]));
    if (!r) return fail("not_found", "That recipe isn't in the library any more.", 404);
    return json({ recipe: JSON.parse(r.data), author: r.anon ? "" : r.author });
  }
  if (path === "/api/photo" && method === "GET") return handlePhoto(url);
  if (path === "/api/link-code" && method === "POST") {
    const r = await stub.createLink(user.id);
    if (r.error) return fail("busy", "Couldn't make a code. Try again.", 503);
    return json({ code: r.code });
  }

  if (path === "/api/docs" && method === "GET") {
    const rows = await stub.listDocs(user.id);
    return json({ docs: rows.map(r => ({ key: r.key, data: JSON.parse(r.data), updated: r.updated })) });
  }
  const docM = path.match(/^\/api\/docs\/([^/]+)$/);
  if (docM) {
    const key = decodeURIComponent(docM[1]);
    if (!KEY_RX.test(key)) return fail("bad_request", "Bad key.");
    if (method === "PUT") {
      const text = await req.text();
      if (text.length > 600_000) return fail("too_big", "That recipe is too big to save. Try a smaller photo.", 413);
      try { const v = JSON.parse(text); if (!v || typeof v !== "object" || Array.isArray(v)) throw 0; } catch { return fail("bad_request", "Bad data."); }
      const r = await stub.putDoc(user.id, key, text);
      if (r.error) return fail("full", "Your recipe book is full.", 413);
      return json({ ok: true });
    }
    if (method === "DELETE") { await stub.deleteDoc(user.id, key); return json({ ok: true }); }
  }

  if (path === "/api/shares" && method === "POST") {
    const text = await req.text();
    if (text.length > 900_000) return fail("too_big", "That's too much to share at once. Pick fewer recipes.", 413);
    const r = await stub.createShare(user.id, text);
    if (r.error) return fail("busy", "Couldn't create a code. Try again.", 503);
    return json({ code: r.code });
  }

  if (path === "/api/ai" && method === "POST") return handleAI(req, env, user, stub, ctx);
  if (path === "/api/credit") return json({ spent: await stub.getSpend(), budget: Number(env.AI_BUDGET_USD) || 0 });
  if (path === "/api/fetch-url" && method === "POST") return handleFetchUrl(req);

  return fail("not_found", "Not found.", 404);
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(req);
    try { return await api(req, env, url, ctx); }
    catch (e) { console.log("API error", e && e.stack || e); return fail("server_error", "Something went wrong. Try again.", 500); }
  }
};
