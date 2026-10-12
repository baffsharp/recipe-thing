"use strict";
/* ---------- icons ---------- */
const I = {
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.7A8 8 0 1 1 21 12z"/><path d="M9 11h.01M12 11h.01M15 11h.01"/></svg>',
  pan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h13a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z"/><path d="M16 13h5M7 8c0-1 1-1.5 1-2.5S7 4 7 3M11 8c0-1 1-1.5 1-2.5S11 4 11 3"/></svg>',
  kdial:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="6.5"/><path d="M12 13l3-3"/><path d="M4 7.5l1 .6M20 7.5l-1 .6M12 2.5v1.2M7 4l.6 1M17 4l-.6 1"/></svg>',
  kflame:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2.5c.8 3.6 5.5 5.6 5.5 11a5.5 5.5 0 0 1-11 0c0-2.6 1.3-4.3 2.5-5.4.1 1.7.8 2.9 2 3.5-.5-3.2.1-6.1 1-9.1z"/></svg>',
  kfan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.6"/><path d="M12 10.4c-1-3.4.4-6.4 3-6.4 2.3 0 2.6 3.2-1.5 6.2M13.6 12c3.4-1 6.4.4 6.4 3 0 2.3-3.2 2.6-6.2-1.5M12 13.6c1 3.4-.4 6.4-3 6.4-2.3 0-2.6-3.2 1.5-6.2M10.4 12C7 13 4 11.6 4 9c0-2.3 3.2-2.6 6.2 1.5"/></svg>',
  knofan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7 9h10M7 15h10"/></svg>',
  kno:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M6 6l12 12"/></svg>',
  kq:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4M12 16.5h.01"/></svg>',
  logo:'<span class="lg" aria-hidden="true"><b>rt</b><i></i></span>',
  flame:'<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="flg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb347"/><stop offset=".55" stop-color="#ff7a3d"/><stop offset="1" stop-color="#ff4a43"/></linearGradient></defs><path fill="url(#flg)" d="M12 1.8c.7 3.4 5.3 5.5 5.3 10.8a5.3 5.3 0 0 1-10.6 0c0-2.5 1.2-4.2 2.4-5.3.1 1.6.8 2.8 1.9 3.4-.5-3.1.1-6 1-8.9z"/><path fill="#fff" opacity=".92" d="M12 13.1c1 1.1 2 2.1 2 3.5a2 2 0 0 1-4 0c0-1.3.9-2.4 2-3.5z"/></svg>',
  sparkle:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 2.5l2 5.9 5.9 2-5.9 2-2 5.9-2-5.9-5.9-2 5.9-2z"/><path d="M19 14.5l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9z"/></svg>',
  fork:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v7a2 2 0 0 0 4 0V3M9 10v11M17 21V3c-2 1.5-3 4-3 7h3"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20s-7.5-4.6-9.3-9.4C1.5 7.4 3.6 4.5 6.7 4.5c2 0 3.6 1.2 4.3 2.7l1 .1c.7-1.6 2.3-2.8 4.3-2.8 3.1 0 5.2 2.9 4 6.1C19.5 15.4 12 20 12 20z"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4-4"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.4-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5z"/></svg>',
  magic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 15 9M14 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z"/></svg>',
  timer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/></svg>',
  camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/></svg>',
  pdf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
  paste:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/></svg>',
  pen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  stop:'<svg viewBox="0 0 24 24" fill="#fff"><rect x="7" y="7" width="10" height="10" rx="2"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  tick:'<svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3M7.5 7.5 12 3l4.5 4.5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
  swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13l-3-3M20 16H7l3 3"/></svg>',
  fridge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M5 10h14M8.5 6v1.5M8.5 13v3"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const newId = () => "r-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const clone = o => JSON.parse(JSON.stringify(o));
const LS_KEY = "recipe-thing-v1", LS_CHAT = "recipe-thing-chat-v2";
const lsGet = k => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
function mins(m) { if (!m) return ""; m = Math.round(m); if (m < 60) return m + " min"; const h = Math.floor(m / 60), r = m % 60; return h + " h" + (r ? " " + r : ""); }
const totalMins = r => (r.prepMinutes || 0) + (r.cookMinutes || 0);
function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = () => rej(new Error("load")); document.head.appendChild(s); }); }

const UF = { "½": .5, "¼": .25, "¾": .75, "⅓": 1 / 3, "⅔": 2 / 3, "⅛": .125 };
function parseQty(str) {
  str = String(str || "").trim(); if (!str) return null;
  let total = 0, any = false;
  for (const [ch, v] of Object.entries(UF)) if (str.includes(ch)) { total += v; any = true; str = str.split(ch).join(" "); }
  for (const part of str.split(/\s+/).filter(Boolean)) {
    if (part.includes("/")) { const [a, b] = part.split("/").map(Number); if (b) { total += a / b; any = true; } }
    else { const n = Number(part.replace(",", ".")); if (isFinite(n)) { total += n; any = true; } }
  }
  return any && total > 0 ? total : null;
}
function frac(q) {
  if (q >= 10) return String(Math.round(q));
  const whole = Math.floor(q + 1e-9), r = q - whole;
  const opts = [[0, ""], [.125, "⅛"], [.25, "¼"], [1 / 3, "⅓"], [.5, "½"], [2 / 3, "⅔"], [.75, "¾"], [1, ""]];
  let best = opts[0]; for (const o of opts) if (Math.abs(o[0] - r) < Math.abs(best[0] - r)) best = o;
  const w = best[0] === 1 ? whole + 1 : whole;
  return ((w ? String(w) : "") + best[1]) || (q > 0 ? String(Math.round(q * 100) / 100) : "0");
}
function fmtQty(q, unit) {
  if (q == null || !isFinite(q)) return "";
  const u = String(unit || "").toLowerCase();
  if (u === "g" || u === "ml") return q >= 100 ? String(Math.round(q / 5) * 5) : String(Math.round(q * 10) / 10);
  if (u === "kg" || u === "l") return String(Math.round(q * 100) / 100);
  return frac(q);
}
const UNIT_RX = /^((?:\d+(?:[.,]\d+)?)?\s*(?:\d+\/\d+)?\s*[½¼¾⅓⅔⅛]?)\s*(kg|g|ml|l|tsp|tbsp|cups?|oz|lb|pinch(?:es)?)?\.?\s+(.+)$/i;
function parseIngredientLine(line) {
  const s = String(line || "").trim().replace(/^[-•*]\s*/, ""); if (!s) return null;
  const m = s.match(UNIT_RX);
  let qty = null, unit = "", rest = s;
  if (m && (m[1].trim() || m[2])) { qty = parseQty(m[1]); unit = (m[2] || "").toLowerCase().replace(/^cups$/, "cup").replace(/^pinches$/, "pinch"); rest = m[3]; }
  const ci = rest.indexOf(",");
  return { qty, unit, item: (ci > -1 ? rest.slice(0, ci) : rest).trim(), note: ci > -1 ? rest.slice(ci + 1).trim() : "", group: "" };
}
function ingLine(i, f = 1) {
  const q = i.qty != null ? fmtQty(i.qty * f, i.unit) : "";
  return [q, q ? i.unit : "", i.item].filter(Boolean).join(" ") + (i.note ? ", " + i.note : "");
}
function md(t) {
  const lines = String(t || "").split("\n"); let out = "", list = null;
  const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<i>$2</i>");
  const close = () => { if (list) { out += `</${list}>`; list = null; } };
  for (const raw of lines) {
    const l = raw.trim(); let m;
    if ((m = l.match(/^[-*•]\s+(.*)$/))) { if (list !== "ul") { close(); out += "<ul>"; list = "ul"; } out += `<li>${inline(m[1])}</li>`; }
    else if ((m = l.match(/^\d+[.)]\s+(.*)$/))) { if (list !== "ol") { close(); out += "<ol>"; list = "ol"; } out += `<li>${inline(m[1])}</li>`; }
    else if (!l) close();
    else { close(); out += `<p>${inline(l.replace(/^#+\s*/, ""))}</p>`; }
  }
  close(); return out;
}

/* ---------- categories ---------- */
const CATS = { dinner: "Meals", dessert: "Desserts", snack: "Snacks" };
const CAT1 = { dinner: "Meal", dessert: "Dessert", snack: "Snack" };
function catOf(r) {
  if (r.category && CATS[r.category]) return r.category;
  const t = (r.tags || []).join(" ") + " " + r.title;
  if (/dessert|cake|cookie|brownie|pudding|tart|sweet|ice cream|biscuit|muffin|pastel|mousse|crumble/i.test(t)) return "dessert";
  if (/snack|dip|side|starter|bites|smoothie|toast/i.test(t)) return "snack";
  return "dinner";
}
const EMOJI_RULES = [
  [/pancake|crepe|waffle/, "🥞"], [/pizza/, "🍕"], [/burger/, "🍔"], [/taco|burrito|fajita|quesadilla|nacho/, "🌮"], [/sushi/, "🍣"],
  [/ramen|noodle|pho|udon|stir.?fry/, "🍜"], [/spaghetti|pasta|lasagn|penne|macaroni|tagliatelle|gnocchi|carbonara|bolognese|ravioli/, "🍝"],
  [/curry|tikka|korma|dal|dhal/, "🍛"], [/risotto|paella|fried rice|rice/, "🍚"], [/soup|stew|chowder|broth|caldo/, "🍲"], [/salad/, "🥗"], [/hummus|falafel/, "🧆"],
  [/sandwich|toastie|wrap|panini|bifana|prego/, "🥪"], [/hot ?dog|sausage/, "🌭"], [/omelet|frittata|scrambled|egg/, "🍳"],
  [/bread|loaf|focaccia|toast/, "🍞"], [/croissant|pastry/, "🥐"], [/chocolate|brownie/, "🍫"], [/cookie|biscuit/, "🍪"],
  [/cupcake|muffin/, "🧁"], [/cake|pastel|tart/, "🍰"], [/pie/, "🥧"], [/ice cream|gelato|sorbet/, "🍨"], [/pudding|custard|flan|mousse/, "🍮"],
  [/smoothie|shake|juice/, "🥤"], [/donut|doughnut/, "🍩"], [/shrimp|prawn/, "🍤"], [/fish|salmon|cod|bacalhau|tuna|sardine/, "🐟"],
  [/chicken|frango|wing|drumstick/, "🍗"], [/steak|beef|bife/, "🥩"], [/bacon|pork|ham|ribs/, "🥓"], [/lamb/, "🍖"],
  [/potato|chips|fries|wedges/, "🥔"], [/cheese/, "🧀"], [/apple/, "🍎"], [/banana/, "🍌"], [/strawberr/, "🍓"], [/lemon/, "🍋"],
  [/avocado|guacamole/, "🥑"], [/mushroom/, "🍄"], [/corn/, "🌽"], [/carrot/, "🥕"], [/tomato/, "🍅"], [/popcorn/, "🍿"]
];
function emojiOf(r) {
  if (r.emoji) return r.emoji;
  const title = String(r.title || "").toLowerCase();
  for (const [rx, e] of EMOJI_RULES) if (rx.test(title)) return e;
  const ings = (r.ingredients || []).slice(0, 4).map(i => i.item).join(" ").toLowerCase();
  for (const [rx, e] of EMOJI_RULES) if (rx.test(ings)) return e;
  return "";
}
function artHtml(r) { const e = emojiOf(r); return e ? `<span class="emo" aria-hidden="true">${esc(e)}</span>` : `<span class="mono" aria-hidden="true">${esc((String(r.title || "?").trim()[0] || "?").toUpperCase())}</span>`; }
const BANNED_TAGS = /^(easy|quick|simple|family|healthy|delicious|tasty|homemade|weeknight|comfort food|classic|dinner|lunch|dessert|snack|main|mains|meal|recipe|kids|budget)$/;

/* ---------- kitchen ---------- */
const APPL_CHIPS = ["Air fryer", "Microwave", "Food processor", "Stand mixer", "Hand mixer", "Blender", "Slow cooker", "Pressure cooker"];
const APPL = { oven: "Oven", airfryer: "Air fryer", microwave: "Microwave", foodprocessor: "Food processor", mixer: "Mixer", standmixer: "Stand mixer", handmixer: "Hand mixer", blender: "Blender", stickblender: "Stick blender", slowcooker: "Slow cooker", pressurecooker: "Pressure cooker", toaster: "Toaster", grill: "Grill", thermo: "Thermomix-style" };
const HOBS = { gas: "Gas hob", induction: "Induction hob", electric: "Electric hob", numbered: "Hob with numbered controls", unsure: "Hob" };
const OVENS = { fan: "Fan oven", conventional: "Conventional oven", gas: "Gas oven", unsure: "Oven (type not sure)", none: "No oven" };
const DEFAULT_KITCHEN = { type: "kitchen", setup: false, appliancesText: "", hobType: "", hobModel: "", dial: "numbers", stoveMax: 9, ovenType: "", weight: "g", liquid: "ml", spoons: true, people: 2, avoid: "", profile: null };
function heatOf(k) {
  const p = k.profile && k.profile.heat; if (p && p.low && (k.dial === "numbers" || !k.dial) && p.numbered !== false) return p;
  if (p && p.low && p.numbered === false && !/\d/.test(p.low)) return p;
  if (k.dial && k.dial !== "numbers") return { numbered: false, low: "low", mediumLow: "medium-low", medium: "medium", mediumHigh: "medium-high", high: "high" };
  const n = Number(k.stoveMax) || 9;
  if (k.low && k.med && k.high) return { numbered: true, low: String(k.low), mediumLow: String(Math.round((k.low + k.med) / 2)), medium: String(k.med), mediumHigh: String(Math.round((k.med + k.high) / 2)), high: String(k.high) };
  const f = x => String(Math.max(1, Math.min(n, Math.round(n * x))));
  return { numbered: true, low: f(.3), mediumLow: f(.45), medium: f(.6), mediumHigh: f(.75), high: f(.9) };
}
function oldAppliancesText(k) {
  return [...(k.appliances || []).filter(a => a !== "oven").map(a => APPL[a] || a), ...(k.other ? [k.other] : [])].join(", ");
}
function applianceList(k) {
  if (k.profile && Array.isArray(k.profile.appliances) && k.profile.appliances.length) return k.profile.appliances;
  const txt = k.appliancesText || oldAppliancesText(k);
  return txt ? [{ name: txt, uses: "" }] : [];
}
const hobDesc = k => (k.hobType ? [HOBS[k.hobType], k.hobModel, k.dial === "numbers" && k.stoveMax ? "1 to " + k.stoveMax : ""].filter(Boolean).join(", ") : "") || (k.profile && k.profile.hob) || k.hob || (k.stoveType ? k.stoveType[0].toUpperCase() + k.stoveType.slice(1) + " hob" : "");
function ovenType(k) { if (k.ovenType) return k.ovenType; if (k.oven === "fan" || /fan/i.test(k.ovenText || "")) return "fan"; if (k.oven === "conventional" || /conventional/i.test(k.ovenText || "")) return "conventional"; if (/gas/i.test(k.ovenText || "")) return "gas"; if (/^no /i.test(k.ovenText || "")) return "none"; return "unsure"; }
function unitsOf(k) { if (k.units === "us" && !k.weight) return { weight: "oz", liquid: "cup", spoons: true }; return { weight: k.weight || "g", liquid: k.liquid || "ml", spoons: k.spoons !== false }; }
function kitchenRules(k) {
  const h = heatOf(k), apps = applianceList(k), ov = ovenType(k), u = unitsOf(k);
  const ovenLine = { fan: 'fan oven. Give oven temperatures in °C for a fan oven, written like "180°C (fan)".', conventional: "conventional oven (no fan). Give oven temperatures in °C for a conventional oven.", gas: 'gas oven. Give the gas mark with °C, like "gas mark 4 (180°C)".', unsure: 'they are not sure which type, so give both, like "200°C (180°C fan)".', none: "they have NO oven, so use the hob or their appliances instead." }[ov];
  return `THE COOK'S KITCHEN (write the method for it):
- Hob: ${hobDesc(k) || "a standard hob"}. ${h.numbered ? `Heat is set with numbers${k.stoveMax ? " 1 to " + k.stoveMax : ""}. Always give hob heat as the number, like "Fry the onions on ${h.mediumLow} for 8 minutes". Low = ${h.low}, medium-low = ${h.mediumLow}, medium = ${h.medium}, medium-high = ${h.mediumHigh}, high = ${h.high}.` : `No numbers on the controls, so describe heat in plain words (${h.low}, ${h.medium}, ${h.high}).`}
- Oven: ${ovenLine}
- Appliances (besides hob and oven): ${apps.length ? apps.map(a => a.uses ? `${a.name} (${a.uses})` : a.name).join("; ") : "none, only basic tools"}. Use them where they really save time or effort, with that appliance's own settings and times. Never require one they don't have; describe the by-hand way instead.
- Measurements: weights in ${u.weight === "oz" ? "ounces and pounds" : "grams and kilograms"}; liquids in ${u.liquid === "cup" ? "cups" : "millilitres and litres"}; ${u.spoons ? "teaspoons and tablespoons are fine for small amounts (spices, oil, sauces)" : "do not use teaspoons or tablespoons, use " + (u.weight === "oz" ? "ounces" : "grams or ml") + " even for small amounts"}.${u.weight === "g" && u.liquid === "ml" ? " Never use cups or ounces." : ""}${k.avoid ? `
- Allergies and foods they avoid: ${k.avoid}. If the recipe has any, suggest a swap in that ingredient's note and warn in tips.` : ""}`;
}

/* ---------- example ---------- */
const EXAMPLE = {
  id: "example", example: true, type: "recipe", title: "Lemon garlic chicken traybake", description: "Crispy chicken thighs roasted with potatoes, lemon and garlic, all in one tray.",
  category: "dinner", emoji: "🍗", servings: 4, prepMinutes: 15, cookMinutes: 45, tags: ["chicken", "potatoes", "lemon", "traybake"],
  ingredients: [
    { qty: 8, unit: "", item: "chicken thighs", note: "bone-in, skin on", group: "" },
    { qty: 800, unit: "g", item: "baby potatoes", note: "halved", group: "" },
    { qty: 1, unit: "", item: "lemon", note: "cut into wedges", group: "" },
    { qty: 6, unit: "", item: "garlic cloves", note: "lightly crushed", group: "" },
    { qty: 3, unit: "tbsp", item: "olive oil", note: "", group: "" },
    { qty: 1, unit: "tsp", item: "dried oregano", note: "", group: "" },
    { qty: 1, unit: "tsp", item: "salt", note: "", group: "" },
    { qty: null, unit: "", item: "black pepper", note: "to taste", group: "" }],
  steps: [
    { text: "Heat the oven to 180°C (fan).", minutes: null },
    { text: "Toss the potatoes, garlic, lemon wedges, oil, oregano, salt and pepper in a large roasting tray.", minutes: null },
    { text: "Nestle the chicken thighs on top, skin side up, and season the skin.", minutes: null },
    { text: "Roast until the skin is crisp and the potatoes are golden.", minutes: 45 },
    { text: "Squeeze the roasted lemon over everything and rest before serving.", minutes: 5 }],
  tips: "", source: { kind: "example", label: "Example" }, fav: false, createdAt: 0
};

/* ---------- state ---------- */
const S = {
  tab: "recipes", openId: null, search: "", filter: "all", servings: {}, checked: {},
  selecting: false, selected: new Set(),
  photos: [], pdf: null, note: "",
  chat: (lsGet(LS_CHAT) || []).filter(m => m && m.content).slice(-30), chatBusy: false, chatOpen: false,
  q: null, cook: null, busy: null, timers: [], pendingRender: false, sheet: null
};

/* ---------- server ---------- */
async function api(method, path, body) {
  let res;
  try {
    res = await fetch(path, { method, credentials: "same-origin", headers: { "content-type": "application/json" }, body: body !== undefined ? JSON.stringify(body) : undefined });
  } catch { throw { code: "offline", message: "You seem to be offline. Check your connection and try again." }; }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const e = data.error || {};
    if (res.status === 401 && e.code === "signed_out") onSignedOut();
    throw { code: e.code || "error", message: e.message || "Something went wrong. Try again.", status: res.status };
  }
  return data;
}

/* ---------- storage: your account on the server, cached on this phone ---------- */
const Store = {
  mode: "loading", db: true, canWrite: true, queue: {},
  data: { recipes: {}, kitchen: null },
  recipes() { return Object.values(this.data.recipes).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)); },
  kitchen() { return Object.assign({}, DEFAULT_KITCHEN, this.data.kitchen || {}); },
  get(id) { return id === "example" ? EXAMPLE : this.data.recipes[id] || null; },
  cacheKey() { return LS_KEY + ":" + (S.user || ""); },
  saveCache() { lsSet(this.cacheKey(), this.data); },
  async load() {
    const cached = lsGet(this.cacheKey());
    if (cached && cached.recipes) { this.data = { recipes: cached.recipes, kitchen: cached.kitchen || null }; this.mode = "cloud"; scheduleRender(); }
    try {
      const r = await api("GET", "/api/docs");
      const next = { recipes: {}, kitchen: null };
      for (const d of r.docs) {
        if (d.key === "kitchen") next.kitchen = d.data;
        else if (d.data && d.data.type === "recipe") next.recipes[d.key] = Object.assign({}, d.data, { id: d.key });
      }
      this.data = next; this.mode = "cloud"; this.saveCache();
      for (const r of Object.values(next.recipes)) if (r.photoCredit && r.photoUrl) this.put(r.id, Object.assign({}, r, { photoUrl: "", photoCredit: "", photoLink: "" }));
    } catch (e) {
      this.mode = "cloud";
      if (e.code !== "signed_out") toast(cached ? "You're offline, so you're seeing your saved copy." : e.message, 4000);
    }
    scheduleRender();
  },
  put(key, body) {
    body = clone(body); delete body.id; delete body.example;
    if (key === "kitchen") this.data.kitchen = body; else this.data.recipes[key] = Object.assign({}, body, { id: key });
    this.saveCache(); scheduleRender();
    this.queue[key] = (this.queue[key] || Promise.resolve()).then(() => api("PUT", "/api/docs/" + encodeURIComponent(key), body)).catch(e => this.writeFailed(e));
    return this.queue[key];
  },
  remove(key) {
    delete this.data.recipes[key]; this.saveCache(); scheduleRender();
    this.queue[key] = (this.queue[key] || Promise.resolve()).then(() => api("DELETE", "/api/docs/" + encodeURIComponent(key))).catch(e => this.writeFailed(e));
  },
  writeFailed(e) { if (e && e.code !== "signed_out") toast((e && e.message) || "Couldn't save that change. Check your connection and try again.", 4500); }
};

/* ---------- AI (Claude Haiku, through our server) ---------- */
const AI = { fn: null, caps: { maxPromptBytes: 262144, images: { maxCount: 4 } }, ready: false, dl: null };
function loadImage(url) { return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; }); }
async function imageForAI(file) {
  const url = URL.createObjectURL(file);
  try {
    const img = await loadImage(url);
    const s = Math.min(1, 1568 / Math.max(img.naturalWidth, img.naturalHeight));
    const c = document.createElement("canvas"); c.width = Math.round(img.naturalWidth * s); c.height = Math.round(img.naturalHeight * s);
    c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
    const dataUrl = c.toDataURL("image/jpeg", .85);
    return { type: "image/jpeg", data: dataUrl.split(",")[1] };
  } catch { throw { code: "image_rejected" }; }
  finally { URL.revokeObjectURL(url); }
}
async function callAI({ messages, images, json, signal, onText, maxTokens, kind }) {
  const imgs = images && images.length ? await Promise.all([...images].slice(0, 4).map(imageForAI)) : [];
  if (signal && signal.aborted) throw { code: "cancelled" };
  let res;
  try {
    res = await fetch("/api/ai", { method: "POST", credentials: "same-origin", signal, headers: { "content-type": "application/json" }, body: JSON.stringify({ messages, images: imgs, json: !!json, maxTokens, kind: kind || "" }) });
  } catch { throw { code: signal && signal.aborted ? "cancelled" : "offline" }; }
  if (!res.ok) {
    const e = (await res.json().catch(() => ({}))).error || {};
    if (res.status === 401) onSignedOut();
    throw { code: e.code || "upstream_error", message: e.message };
  }
  const reader = res.body.getReader(), dec = new TextDecoder();
  let text = "";
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      const d = dec.decode(value, { stream: true });
      if (d.includes("\u0000ERROR")) throw { code: "upstream_error", text };
      if (!d) continue;
      text += d;
      onText && onText({ text, delta: d });
    }
  } catch (e) { throw signal && signal.aborted ? { code: "cancelled", text } : (e && e.code ? e : { code: "upstream_error", text }); }
  if (!text.trim()) throw { code: "empty_completion" };
  return text;
}
function parseJsonLoose(t) {
  t = String(t || "").trim();
  try { return JSON.parse(t); } catch {}
  const f = t.match(/```(?:json)?\s*([\s\S]*?)```/); if (f) { try { return JSON.parse(f[1]); } catch {} }
  const a = Math.min(...["{", "["].map(c => { const i = t.indexOf(c); return i < 0 ? Infinity : i; })), b = Math.max(t.lastIndexOf("}"), t.lastIndexOf("]"));
  if (a < Infinity && b > a) { try { return JSON.parse(t.slice(a, b + 1)); } catch {} }
  return undefined;
}
const toMessages = input => typeof input === "string" ? [{ role: "user", content: input }] : input;
const sample = async (input, opts = {}) => ({ text: await callAI({ messages: toMessages(input), images: opts.images, signal: opts.signal, onText: opts.onText, kind: opts.kind }), truncated: false });
sample.json = async (input, opts = {}) => {
  const text = await callAI({ messages: toMessages(input), images: opts.images, signal: opts.signal, onText: opts.onText, json: true, maxTokens: 6000, kind: opts.kind });
  const v = parseJsonLoose(text);
  if (v === undefined) throw { code: "invalid_json", text };
  return v;
};
sample.limits = async () => AI.caps;
AI.fn = sample; AI.ready = true;
AI.dl = {
  async save({ filename, data }) {
    const file = new File([data], filename, { type: data.type || "application/pdf" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: filename.replace(/\.\w+$/, "") }); return { status: "saved" }; }
      catch (e) { if (e && e.name === "AbortError") throw { code: "cancelled" }; }
    }
    const url = URL.createObjectURL(file), a = document.createElement("a");
    a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    return { status: "saved" };
  }
};
function aiCopy(e) {
  const c = e && e.code;
  return ({
    rate_limited: (e && e.message) || "You've used the AI a lot today. Try again tomorrow.",
    image_rejected: "That photo couldn't be read. Try a clearer JPEG or PNG.",
    invalid_json: "The answer came back jumbled. Try again.",
    empty_completion: "Nothing came back. Try again with a little more detail.",
    upstream_error: "The AI couldn't answer. Try again.",
    offline: "You seem to be offline. Check your connection and try again.",
    not_recipe: (e && e.message) || "That doesn't look like a recipe."
  })[c] || (e && e.message) || "Something went wrong. Try again.";
}
const BUSY_LINES = {
  import: ["Reading your recipe", "Picking out the ingredients", "Fitting it to your kitchen", "Working out the timings", "Nearly there"],
  invent: ["Thinking up a recipe", "Balancing the flavours", "Fitting it to your kitchen", "Writing the steps", "Nearly there"],
  adjust: ["Reworking the recipe", "Checking the amounts", "Fitting it to your kitchen", "Nearly there"],
  kitchen: ["Looking up your appliances", "Working out your hob numbers", "Nearly there"]
};
async function runAI(kind, label, task) {
  if (S.busy) return null;
  const ctl = new AbortController(), lines = BUSY_LINES[kind];
  S.busy = { label, line: lines[0], ctl, writing: false };
  let n = 0; const tick = setInterval(() => { if (S.busy && !S.busy.writing) { n = Math.min(n + 1, lines.length - 1); S.busy.line = lines[n]; renderBusy(); } }, 6500);
  renderBusy();
  try { return await task(ctl.signal, () => { if (S.busy && !S.busy.writing) { S.busy.writing = true; S.busy.line = "Writing it up"; renderBusy(); } }); }
  catch (e) { if (!e || e.code !== "cancelled") toast(aiCopy(e), 5200); return null; }
  finally { clearInterval(tick); S.busy = null; renderBusy(); }
}
const SHAPE = `Reply with ONLY one JSON object, no other text, in exactly this shape:
{"title": string, "description": "one short sentence", "category": "dinner" | "dessert" | "snack", "emoji": "one food emoji that best shows this dish",
 "servings": number, "prepMinutes": number or null, "cookMinutes": number or null, "tags": [strings],
 "ingredients": [{"qty": number or null, "unit": string, "item": string, "note": string, "group": string}],
 "steps": [{"text": string, "minutes": number or null}], "tips": string, "changes": string, "photoQuery": string}
Rules:
- category: "dinner" for any proper meal (breakfast, lunch or dinner mains, soups, big salads); "dessert" for sweet things, cakes and baking; "snack" for snacks, sides, dips, drinks and small bites.
- tags: 2 to 5 lowercase words someone might search for, all clearly true for this recipe: main ingredients, cuisine, type of dish, appliance used (e.g. "chicken", "rice", "portuguese", "curry", "air fryer"). Never vague words like easy, quick, family, healthy, delicious, dinner.
- qty is a plain number (0.5, not "1/2"). unit is one of g, kg, ml, l, tsp, tbsp, cup, oz, lb, pinch, or "" for things you count (then qty is the count: qty 2, unit "", item "eggs").
- group is a section name like "For the sauce" when the recipe has sections, otherwise "".
- steps: one clear action per step, in order, written for this cook's kitchen. minutes is the cooking, baking, resting or waiting time in that step (for a timer), otherwise null.
- tips: 1 or 2 short, genuinely useful sentences (storing, making ahead, an allergy warning), or "" if there is nothing worth saying.
- photoQuery: 2 to 4 English words naming the finished dish for a photo search (e.g. "chicken tikka masala", "chocolate mug cake").
- changes: one sentence on what you adapted for their kitchen or request, or "".
- LANGUAGE: the source may be in Portuguese (Portugal or Brazil), Spanish or another language. Always write the recipe in clear English. Keep a traditional dish name as it is (e.g. "Bacalhau à Brás", "Pão de Queijo", "Brigadeiro", "Arroz de Pato") and you may add the English in description. Translate every ingredient, note and step into English. Apart from the dish name, NO Portuguese or Spanish words may remain anywhere (not "copo", "xícara", "colher", "q.b.", "pitada", "lata", "dente", "gramas", ingredient names or cooking words).
- READ CAREFULLY: copy every quantity from the source exactly (only converting units); never invent, drop or merge ingredients; keep the steps in the source's order; if the source gives a time or temperature, use it.
- PORTUGUESE MEASURES, convert them to the cook's measurement preferences: xícara (chá) = 240 ml (Brazil); chávena = 250 ml (Portugal); copo = a glass, about 200 ml (copo americano 190 ml, copo de requeijão 250 ml); colher de sopa = 1 tbsp; colher de sobremesa = 2 tsp; colher de chá = 1 tsp; colher de café = ½ tsp; pitada = pinch; q.b., a gosto = to taste; dente de alho = garlic clove; lata = a tin (e.g. leite condensado 395 g, creme de leite 200 g); pacote = packet. For dry ingredients in cups, give grams when they use grams (1 xícara: farinha de trigo 120 g, açúcar 180 g, arroz 185 g, chocolate em pó 90 g).
- COMMON TERMS: farinha de trigo = plain flour; fermento em pó / fermento químico = baking powder; fermento biológico = yeast; creme de leite = single cream (Brazil); natas = cream (Portugal); manteiga = butter; requeijão = cream cheese spread; polvilho = tapioca starch; gema / clara = egg yolk / white; forno pré-aquecido = preheated oven; banho-maria = bain-marie; refogar = sauté gently.
- If the content is not a recipe at all, reply {"error": "short reason"}.`;
function recipeText(r, f = 1, opts = {}) {
  const sv = Math.round(r.servings * f);
  return `${r.title} (${CAT1[catOf(r)]}, serves ${sv}${totalMins(r) ? ", " + mins(totalMins(r)) : ""})${r.description ? "\n" + r.description : ""}
Ingredients:
${r.ingredients.map(i => (i.group ? "[" + i.group + "] " : "") + "- " + ingLine(i, f)).join("\n")}
Method:
${r.steps.map((s, n) => (n + 1) + ". " + s.text + (opts.step === n ? "   <-- THEY ARE ON THIS STEP NOW" : "")).join("\n")}${r.tips ? "\nTips: " + r.tips : ""}`;
}
function normalizeRecipe(o) {
  if (!o || typeof o !== "object" || Array.isArray(o)) throw { code: "invalid_json" };
  if (o.error && !o.ingredients) throw { code: "not_recipe", message: "That doesn't look like a recipe: " + String(o.error).slice(0, 140) };
  const num = v => { const n = typeof v === "string" ? parseQty(v) : Number(v); return isFinite(n) && n > 0 ? n : null; };
  const ings = (Array.isArray(o.ingredients) ? o.ingredients : []).map(i => typeof i === "string" ? parseIngredientLine(i) : i && ({
    qty: num(i.qty), unit: String(i.unit || "").trim().toLowerCase(), item: String(i.item || i.name || "").trim(), note: String(i.note || "").trim(), group: String(i.group || "").trim()
  })).filter(i => i && i.item);
  const steps = (Array.isArray(o.steps) ? o.steps : []).map(s => typeof s === "string" ? { text: s.trim(), minutes: null } : s && { text: String(s.text || "").trim(), minutes: num(s.minutes) }).filter(s => s && s.text);
  if (!ings.length && !steps.length) throw { code: "not_recipe", message: "Couldn't find a recipe in that. Try a clearer photo or paste the text." };
  const emoji = String(o.emoji || "").trim();
  return {
    type: "recipe", title: String(o.title || "Untitled recipe").trim().slice(0, 120), description: String(o.description || "").trim().slice(0, 300),
    category: CATS[o.category] ? o.category : "dinner", emoji: emoji && emoji.length <= 8 && !/[a-z0-9]/i.test(emoji) ? emoji : "",
    servings: Math.max(1, Math.round(num(o.servings) || 4)), prepMinutes: num(o.prepMinutes), cookMinutes: num(o.cookMinutes),
    tags: [...new Set((Array.isArray(o.tags) ? o.tags : []).map(t => String(t).toLowerCase().trim()).filter(t => t && !BANNED_TAGS.test(t)))].slice(0, 5),
    ingredients: ings, steps, tips: String(o.tips || "").trim(), changes: String(o.changes || "").trim(), photoQuery: String(o.photoQuery || "").trim().slice(0, 60)
  };
}
const UNITS_OK = new Set(["", "g", "kg", "ml", "l", "tsp", "tbsp", "cup", "oz", "lb", "pinch"]);
const FOREIGN_RX = /\b(copos?|x[ií]caras?|ch[áa]venas?|colher(es)?|q\.?\s?b\.?|pitadas?|latas?|dentes?|gramas|farinha|a[çc][úu]car|ovos?|leite|manteiga|azeite|[áa]gua|forno|minutos|sal\b|cebolas?|alho|tomates?|feij[ãa]o|arroz|bacalhau(?! à)|natas|fermento|massa|carne|frango|queijo|picad[oa]|cozinhar|misture|adicione|deixe)\b/i;
function recipeProblems(r) {
  const p = [];
  r.ingredients.forEach(i => {
    if (!UNITS_OK.has(i.unit)) p.push(`ingredient "${i.item}" uses unit "${i.unit}", which isn't allowed`);
    if (FOREIGN_RX.test(i.item + " " + i.note)) p.push(`ingredient "${i.item}${i.note ? ", " + i.note : ""}" isn't fully in English`);
  });
  r.steps.forEach((s, n) => { if (FOREIGN_RX.test(s.text)) p.push(`step ${n + 1} isn't fully in English`); });
  if (r.ingredients.length && r.ingredients.filter(i => i.qty == null && !/to taste|optional|for (serving|frying|greasing)/i.test(i.note + " " + i.item)).length > r.ingredients.length / 2) p.push("most ingredients have no amount");
  if (!r.steps.length) p.push("there are no steps");
  return p.slice(0, 12);
}
async function aiRecipe(args, signal, onStart) {
  const first = await aiRecipeOnce(args, signal, onStart);
  const problems = recipeProblems(first);
  if (!problems.length || signal.aborted) return first;
  const fixPrompt = `Here is a recipe as JSON, written for a recipe app. Fix ONLY these problems and keep everything else exactly the same:
- ${problems.join("\n- ")}

${kitchenRules(Store.kitchen())}

${SHAPE}

RECIPE:
${JSON.stringify(first)}${args.content ? `\n\nTHE ORIGINAL SOURCE (for checking amounts):\n${String(args.content).slice(0, 20000)}` : ""}`;
  try { const fixed = normalizeRecipe(await AI.fn.json(fixPrompt, { signal, kind: "check" })); return Object.assign(fixed, { photoQuery: first.photoQuery }); }
  catch (e) { if (e && e.code === "cancelled") throw e; return first; }
}
async function aiRecipeOnce({ task, content = "", images, extra = "", fresh = false }, signal, onStart) {
  const prompt = `You turn recipes into clean structured data for a personal recipe-book app.

TASK: ${task}${extra ? `\nExtra request from the cook: ${extra}` : ""}

${kitchenRules(Store.kitchen())}

${SHAPE}${content ? `\n\nCONTENT:\n${content}` : ""}`;
  const opts = { signal, onText: onStart, kind: images && images.length ? "photo" : "recipe" };
  if (images && images.length) opts.images = images;
  if (fresh) opts.cache = false;
  return normalizeRecipe(await AI.fn.json(prompt, opts));
}

/* ---------- PDF reading ---------- */
const PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
let pdfLib = null;
function getPdf() {
  if (!pdfLib) pdfLib = (async () => { await loadScript(PDFJS + "pdf.min.js"); await loadScript(PDFJS + "pdf.worker.min.js"); const L = window.pdfjsLib; L.GlobalWorkerOptions.workerSrc = PDFJS + "pdf.worker.min.js"; return L; })().catch(e => { pdfLib = null; throw e; });
  return pdfLib;
}
async function readPdf(file) {
  const L = await getPdf();
  const doc = await L.getDocument({ data: new Uint8Array(await file.arrayBuffer()), isEvalSupported: false }).promise;
  let text = "";
  for (let p = 1; p <= Math.min(doc.numPages, 12); p++) {
    const page = await doc.getPage(p); const tc = await page.getTextContent();
    text += tc.items.map(it => it.str + (it.hasEOL ? "\n" : " ")).join("") + "\n\n";
  }
  text = text.replace(/[ \t]+/g, " ").trim();
  const images = [];
  if (text.length < 150) {
    const maxImg = Math.min(3, (AI.caps && AI.caps.images && AI.caps.images.maxCount) || 3, doc.numPages);
    for (let p = 1; p <= maxImg; p++) {
      const page = await doc.getPage(p); const vp = page.getViewport({ scale: 1.6 });
      const c = document.createElement("canvas"); c.width = vp.width; c.height = vp.height;
      await page.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
      images.push(await new Promise(r => c.toBlob(r, "image/jpeg", .85)));
    }
  }
  return { text: text.slice(0, 60000), images };
}
async function compressImage(file, max = 720, q = .74) {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
    const s = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
    const c = document.createElement("canvas"); c.width = Math.round(img.naturalWidth * s); c.height = Math.round(img.naturalHeight * s);
    c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
    return c.toDataURL("image/jpeg", q);
  } finally { URL.revokeObjectURL(url); }
}

/* ---------- wake lock & timers ---------- */
const Wake = {
  lock: null, want: false,
  async set(on) {
    this.want = on;
    if (on && !this.lock && "wakeLock" in navigator) { try { this.lock = await navigator.wakeLock.request("screen"); this.lock.addEventListener("release", () => { this.lock = null; paintWake(); }); } catch {} }
    if (!on && this.lock) { try { await this.lock.release(); } catch {} this.lock = null; }
    paintWake();
  }
};
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && Wake.want) Wake.set(true); });
function paintWake() { const el = $("#wake"); if (el) el.hidden = !Wake.lock; const c = $("#cookwake"); if (c) c.hidden = !Wake.lock; }
let audioCtx = null;
function beep() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const t0 = audioCtx.currentTime;
    for (let i = 0; i < 3; i++) { const o = audioCtx.createOscillator(), g = audioCtx.createGain(); o.frequency.value = 880; o.connect(g); g.connect(audioCtx.destination); g.gain.setValueAtTime(.0001, t0 + i * .45); g.gain.exponentialRampToValueAtTime(.3, t0 + i * .45 + .02); g.gain.exponentialRampToValueAtTime(.0001, t0 + i * .45 + .32); o.start(t0 + i * .45); o.stop(t0 + i * .45 + .34); }
  } catch {}
  try { navigator.vibrate && navigator.vibrate([300, 150, 300]); } catch {}
}
let timerTick = null;
function startTimer(minutes, label) {
  try { audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)(); audioCtx.resume && audioCtx.resume(); } catch {}
  S.timers.push({ id: newId(), label, end: Date.now() + minutes * 60000, done: false });
  if (!timerTick) timerTick = setInterval(paintTimers, 1000);
  paintTimers(); toast(`Timer set for ${mins(minutes)}`);
}
function paintTimers() {
  const now = Date.now();
  for (const t of S.timers) if (!t.done && t.end <= now) { t.done = true; beep(); toast(`${t.label}: time's up`, 6000); }
  if (!S.timers.length && timerTick) { clearInterval(timerTick); timerTick = null; }
  $("#timers").innerHTML = S.timers.map(t => {
    const left = Math.max(0, Math.round((t.end - now) / 1000));
    return `<div class="timer ${t.done ? "done" : ""}"><span class="lbl">${esc(t.label)}</span><span class="tnum">${t.done ? "Done" : Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0")}</span><button data-act="timer-x" data-id="${t.id}" aria-label="Dismiss timer">${I.x}</button></div>`;
  }).join("");
}

/* ---------- toast ---------- */
let toastT = null;
function toast(msg, ms = 2600) {
  $("#toastbox").innerHTML = `<div class="toast" role="status">${esc(msg)}</div>`;
  clearTimeout(toastT); toastT = setTimeout(() => { $("#toastbox").innerHTML = ""; }, ms);
}

/* ---------- render plumbing ---------- */
function editing() { const a = document.activeElement; return a && $("#view").contains(a) && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName) && a.type !== "checkbox"; }
let rq = false;
function scheduleRender() { if (rq) return; rq = true; requestAnimationFrame(() => { rq = false; render(); }); }
document.addEventListener("focusout", () => setTimeout(() => { if (S.pendingRender && !editing()) { S.pendingRender = false; render(); } }, 0));
function render() {
  const signedIn = !!S.user;
  $("#top").hidden = !signedIn; $(".tabs").hidden = !signedIn;
  if (!signedIn) {
    $("#fab").hidden = true; $("#selbar").hidden = true;
    if (editing()) { S.pendingRender = true; return; }
    $("#view").innerHTML = S.booting ? `<div class="splash">${I.logo}</div>` : S.landing ? viewLanding() : viewAuth();
    return;
  }
  renderTop(); renderTabs(); renderFab(); renderSelbar();
  if (editing()) { S.pendingRender = true; return; }
  const v = $("#view");
  if (S.tab === "recipes") v.innerHTML = S.openId ? viewDetail() : viewRecipes();
  else if (S.tab === "add") v.innerHTML = viewAdd();
  else if (S.tab === "library") v.innerHTML = viewLibrary();
  else v.innerHTML = viewKitchen();
  paintWake();
  if ($("#creditpanel")) paintCredit();
}
let creditCache = null, creditAt = 0;
async function paintCredit() {
  if (!creditCache || Date.now() - creditAt > 30000) {
    try { creditCache = await api("GET", "/api/credit"); creditAt = Date.now(); } catch { return; }
  }
  const el = $("#creditpanel"); if (!el || !creditCache.budget) return;
  const { spent, budget } = creditCache, left = Math.max(0, budget - spent), pct = Math.min(100, (spent / budget) * 100), low = left < budget * 0.2;
  el.hidden = false;
  el.innerHTML = `<b>AI credit</b><div class="meter${low ? " low" : ""}" aria-hidden="true"><i style="width:${Math.max(2, pct)}%"></i></div>
    ${(creditCache.byKind || []).length ? `<div class="usage tnum">${creditCache.byKind.map(k => `<span>${esc((({ recipe: "Reading recipes", photo: "Reading photos", check: "Checking recipes", ask: "Ask", kitchen: "Kitchen setup", "": "Other", other: "Other" })[k.kind]) || k.kind)} <b>${k.n}×</b> $${k.usd.toFixed(3)}</span>`).join("")}</div>` : ""}
    <p class="hint tnum">$${spent.toFixed(2)} of $${budget.toFixed(2)} used${low ? ". Running low: top up at console.anthropic.com, then raise AI_BUDGET_USD in Cloudflare." : ", about $" + left.toFixed(2) + " left."}</p>`;
}
function renderTop() {
  const r = S.tab === "recipes" && S.openId ? Store.get(S.openId) : null;
  let html;
  if (S.tab === "library") html = `<button class="iconbtn" data-act="tab" data-tab="add" aria-label="Back">${I.back}</button><div class="spacer"></div>`;
  else if (r) html = `<button class="iconbtn" data-act="close-recipe" aria-label="Back to recipes">${I.back}</button><div class="spacer"></div>`
    + (r.example ? "" : `<button class="iconbtn ${r.fav ? "on" : ""}" data-act="fav" data-id="${r.id}" aria-label="${r.fav ? "Remove from favourites" : "Add to favourites"}">${I.heart}</button><button class="iconbtn" data-act="edit" data-id="${r.id}" aria-label="Edit recipe">${I.edit}</button>`);
  else if (S.selecting) html = `<div class="brand"><h1 class="tnum">${S.selected.size ? S.selected.size + " selected" : "Pick recipes to share"}</h1></div><div class="spacer"></div><button class="textbtn" data-act="sel-cancel">Cancel</button>`;
  else html = `<div class="wm">${I.logo}<span>recipe thing<i class="wdot"></i></span></div><div class="spacer"></div>`
    + (S.tab === "recipes" && Store.recipes().length ? `<button class="iconbtn" data-act="sel-start" aria-label="Share recipes">${I.share}</button>` : "");
  $("#topin").innerHTML = html;
}
function renderTabs() {
  const cur = S.tab === "library" ? "add" : S.tab;
  $("#tabs").innerHTML = `<button class="tab" data-act="tab" data-tab="recipes" ${cur === "recipes" ? 'aria-current="page"' : ""}>${I.book}<span>Recipes</span></button>
    <button class="tab add" data-act="tab" data-tab="add" aria-label="Add a recipe" ${cur === "add" ? 'aria-current="page"' : ""}><span class="plus">${I.plus}</span></button>
    <button class="tab" data-act="tab" data-tab="kitchen" ${cur === "kitchen" ? 'aria-current="page"' : ""}>${I.pan}<span>Kitchen</span></button>`;
}
function renderFab() {
  const f = $("#fab");
  f.hidden = S.chatOpen || S.selecting || !!S.cook || S.tab === "kitchen";
  f.innerHTML = `${I.sparkle}<span>Ask</span>`;
}
function renderSelbar() {
  const b = $("#selbar");
  b.hidden = !S.selecting || S.tab !== "recipes";
  if (!b.hidden) b.innerHTML = `<div><button class="btn primary block" data-act="sel-share" ${S.selected.size ? "" : "disabled"}>${I.share} ${S.selected.size > 1 ? `Share ${S.selected.size} recipes` : "Share recipe"}</button></div>`;
}
function renderBusy() {
  const b = $("#busy");
  if (!S.busy) { b.hidden = true; b.innerHTML = ""; return; }
  b.hidden = false;
  b.innerHTML = `<div><span class="spin" aria-hidden="true"></span><div class="t"><b>${esc(S.busy.line)}…</b><small>${esc(S.busy.label)}</small></div><button data-act="busy-stop">Stop</button></div>`;
}

/* ---------- recipes ---------- */
const photoOf = r => r.photo || r.photoUrl || "";
function card(r) {
  const meta = [mins(totalMins(r)), r.servings ? "Serves " + r.servings : ""].filter(Boolean).join(" · ");
  const sel = S.selecting && S.selected.has(r.id);
  return `<button class="card ${sel ? "sel" : ""}" data-act="open" data-id="${esc(r.id)}" ${S.selecting ? `aria-pressed="${sel}"` : ""}>
    <div class="thumb cat-${catOf(r)}">${artHtml(r)}${photoOf(r) ? `<img src="${esc(photoOf(r))}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}
      ${r.fav && !S.selecting ? `<span class="fav" aria-label="Favourite">${I.heart}</span>` : ""}${S.selecting ? `<span class="check">${I.tick}</span>` : ""}</div>
    <div class="body"><h3>${esc(r.title)}</h3><span class="meta tnum">${esc(r.example ? "Example · " + meta : meta)}</span></div></button>`;
}
function filtered() {
  const q = S.search.trim().toLowerCase();
  return Store.recipes().filter(r => (S.filter === "all" || (S.filter === "fav" ? r.fav : catOf(r) === S.filter)) &&
    (!q || [r.title, r.description, CAT1[catOf(r)], (r.tags || []).join(" "), r.ingredients.map(i => i.item).join(" ")].join(" ").toLowerCase().includes(q)));
}
function gridHtml() {
  const all = Store.recipes();
  if (Store.mode === "loading") return `<div class="grid">${"<div class='skel'></div>".repeat(4)}</div>`;
  if (!all.length) return `<section class="emptybook"><h3>No recipes yet</h3><p>Add your first one. You can:</p>${waysHtml()}<button class="btn primary block" data-act="tab" data-tab="add">${I.plus} Add a recipe</button></section>`;
  const list = filtered();
  if (!list.length) return `<div class="empty"><h3>${S.filter === "fav" && !S.search ? "No favourites yet" : "No matches"}</h3><p>${S.filter === "fav" && !S.search ? "Tap the heart on a recipe to keep it here." : "Try another word, or ask the cook to invent a recipe for it."}</p><button class="btn" data-act="clear-filters">Show all recipes</button></div>`;
  return `<div class="grid">${list.map(card).join("")}</div>`;
}
function waysHtml() {
  const w = (icon, b, t) => `<li><span class="i">${icon}</span><span><b>${b}</b> ${t}</span></li>`;
  return `<ul class="ways">${w(I.camera, "Snap a photo", "of a cookbook page or recipe card")}${w(I.paste, "Paste a link", "to any recipe website or video")}${w(I.pdf, "Import a PDF", "recipe file")}${w(I.magic, "Invent one with AI", "by saying what you fancy")}${w(I.search, "Browse the library", "of recipes other people added")}</ul>`;
}
function viewRecipes() {
  const k = Store.kitchen(), all = Store.recipes();
  const f = (id, l) => `<button class="chip" data-act="filter" data-f="${id}" aria-pressed="${S.filter === id}">${l}</button>`;
  return `<div class="wrap stack" style="padding-block:6px 0">
    ${S.selecting ? "" : `<header class="pagehead"><h1>What are we <em>cooking?</em></h1>${all.length ? `<p class="tnum">${all.length} recipe${all.length === 1 ? "" : "s"} in your book</p>` : ""}</header>`}
    ${!k.setup && Store.mode !== "loading" && !S.selecting ? `<button class="banner slim" data-act="tab" data-tab="kitchen"><span class="b-ico">${I.pan}</span><span class="b-txt"><b>Set up your kitchen</b><p>5 quick taps, so recipes say things like “fry on 6”</p></span><span class="chev">${I.chev}</span></button>` : ""}
    ${all.length ? `<div class="search">${I.search}<input class="input" id="q" type="search" placeholder="Search recipes or ingredients" value="${esc(S.search)}" autocomplete="off" enterkeyhint="search"></div>
    <div class="chips" role="group" aria-label="Show">${f("all", "All")}${f("fav", "Favourites")}${f("dinner", "Meals")}${f("dessert", "Desserts")}${f("snack", "Snacks")}</div>` : ""}
    <div id="grid">${gridHtml()}</div>
  </div>`;
}
function viewDetail() {
  const r = Store.get(S.openId);
  if (!r) { S.openId = null; return viewRecipes(); }
  const sv = S.servings[r.id] || r.servings, f = sv / r.servings;
  const checked = S.checked[r.id] || (S.checked[r.id] = {});
  let lastGroup = "";
  const ings = r.ingredients.map((i, n) => {
    let g = ""; if (i.group && i.group !== lastGroup) { lastGroup = i.group; g = `<li class="grp">${esc(i.group)}</li>`; }
    const q = i.qty != null ? fmtQty(i.qty * f, i.unit) : "";
    return g + `<li><label><input type="checkbox" data-act="ing" data-n="${n}" ${checked[n] ? "checked" : ""}><span>${q ? `<b class="tnum">${esc(q)}${i.unit ? " " + esc(i.unit) : ""}</b> ` : ""}${esc(i.item)}${i.note ? `<span class="note">, ${esc(i.note)}</span>` : ""}</span></label></li>`;
  }).join("");
  const steps = r.steps.map((s, n) => `<li><div class="st"><p>${esc(s.text)}</p>${s.minutes ? `<button class="tbtn" data-act="timer" data-min="${s.minutes}" data-label="Step ${n + 1}">${I.timer} ${esc(mins(s.minutes))} timer</button>` : ""}</div></li>`).join("");
  return `<div class="wrap stack" style="padding-block:4px 0">
    ${photoOf(r) ? `<img class="dish" src="${esc(photoOf(r))}" alt="${esc(r.title)}" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}
    <section class="hero">
      <div class="toprow"><span class="cat">${esc(r.example ? "Example" : CAT1[catOf(r)])}</span>${!photoOf(r) && emojiOf(r) ? `<span class="hemo" aria-hidden="true">${esc(emojiOf(r))}</span>` : ""}</div>
      <h2>${esc(r.title)}</h2>${r.description ? `<p>${esc(r.description)}</p>` : ""}
      <div class="facts tnum"><div><small>Prep</small><b>${esc(mins(r.prepMinutes) || "–")}</b></div><div><small>Cook</small><b>${esc(mins(r.cookMinutes) || "–")}</b></div><div><small>Total</small><b>${esc(mins(totalMins(r)) || "–")}</b></div></div>
    </section>
    <div class="serv"><span class="label">Servings</span><div class="ctl"><button data-act="serv" data-d="-1" aria-label="Fewer servings">−</button><span class="num tnum" aria-live="polite">${sv}</span><button data-act="serv" data-d="1" aria-label="More servings">+</button></div></div>
    <div class="acts">
      <button class="act main" data-act="cook">${I.play}Cook</button>
      <button class="act" data-act="adjust">${I.magic}Adjust</button>
      <button class="act" data-act="share-one">${I.share}Share</button>
    </div>
    <span class="awake" id="wake" hidden>Screen stays on while this recipe is open</span>
    <section class="section"><h2>Ingredients</h2><ul class="ings">${ings}</ul></section>
    <section class="section"><h2>Method</h2><ol class="steps">${steps}</ol></section>
    ${r.tips ? `<section class="panel"><span class="eyebrow">Good to know</span><p>${esc(r.tips)}</p></section>` : ""}
    ${r.example ? `<button class="btn primary block" data-act="tab" data-tab="add">${I.plus} Add your own recipe</button>` : `
    ${r.source && r.source.url ? `<a class="btn ghost" style="align-self:center" href="${esc(r.source.url)}" target="_blank" rel="noopener">Open the original page</a>` : ""}
    ${!photoOf(r) && !r.example ? `<button class="btn ghost" style="align-self:center" data-act="dish-photo">${I.camera} Add a photo of your dish</button>` : ""}
    ${r.photoCredit || (r.photoUrl && r.source && r.source.kind === "link") ? `<p class="foot">Photo${r.photoCredit ? ": " + esc(r.photoCredit) : " from the original page"}${r.photoLink ? ` · <a href="${esc(r.photoLink)}" target="_blank" rel="noopener">source</a>` : ""}</p>` : ""}
    <p class="foot">${esc(r.source && r.source.label ? "Added from " + (r.source.kind === "link" || r.source.kind === "friend" ? r.source.label : r.source.label.toLowerCase()) : "")}${r.createdAt ? " · " + new Date(r.createdAt).toLocaleDateString() : ""}</p>
    <button class="btn danger block" data-act="delete-ask">Delete recipe</button>`}
  </div>`;
}

/* ---------- add ---------- */
function viewAdd() {
  const tile = (act, icon, title) => `<button class="tile" data-act="${act}"><span class="o-ico">${icon}</span>${title}</button>`;
  const row = (act, icon, title, sub) => `<button class="addrow" data-act="${act}"><span class="o-ico">${icon}</span><span class="tx"><b>${title}</b><small>${sub}</small></span><span class="chev">${I.chev}</span></button>`;
  return `<div class="wrap stack" style="padding-block:6px 0">
    <header class="pagehead"><h1>Add a <em>recipe</em></h1><p>Snap it, drop it in, paste it, or dream it up.</p></header>
    <div class="trio">${tile("add-photo", I.camera, "Photo")}${tile("add-pdf", I.pdf, "PDF")}${tile("add-paste", I.paste, "Link or text")}</div>
    <button class="aicard" data-act="add-invent"><span class="o-ico">${I.magic}</span><span class="tx"><b>Invent with AI</b><small>Describe what you fancy and get a full recipe written for your kitchen</small></span><span class="chev" style="width:18px;height:18px;color:var(--accent)">${I.chev}</span></button>
    <div class="addlist">
      ${row("open-library", I.search, "Recipe library", "Search recipes everyone has added")}
      ${row("get-friend", I.share, "Get recipes from someone", "Type the code they sent you")}
    </div>
  </div>`;
}
function libCard(x) {
  const r = { title: x.title, category: x.category, emoji: x.emoji, ingredients: x.ingredients || [] };
  const meta = [mins(x.mins), x.author ? "by " + x.author : ""].filter(Boolean).join(" · ");
  return `<button class="card" data-act="lib-open" data-id="${esc(x.id)}"><div class="thumb cat-${catOf(r)}">${artHtml(r)}${x.photoUrl ? `<img src="${esc(x.photoUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}</div>
    <div class="body"><h3>${esc(x.title)}</h3><span class="meta tnum">${esc(meta)}</span></div></button>`;
}
function libResultsHtml() {
  const L = S.lib;
  if (!L.results) return `<div class="grid">${"<div class='skel'></div>".repeat(4)}</div>`;
  const shared = L.shared ? `<button class="banner" data-act="lib-code"><span class="b-ico">${I.share}</span><span class="b-txt"><b>${L.shared.recipes.length === 1 ? "1 recipe" : L.shared.recipes.length + " recipes"} for code ${esc(L.shared.code)}</b><p>${esc(L.shared.recipes.map(r => r.title).join(", "))}</p></span><span class="chev" style="width:18px;height:18px;color:var(--accent)">${I.chev}</span></button>` : "";
  if (shared && !L.results.length) return shared;
  if (shared) return shared + `<div class="grid" style="margin-top:12px">${L.results.map(libCard).join("")}</div>`;
  if (!L.results.length) return `<div class="empty"><h3>Nothing found</h3><p>${L.q ? "Try another word, or invent it with AI." : "No one has added recipes yet. Yours will appear here too."}</p></div>`;
  return `<div class="grid">${L.results.map(libCard).join("")}</div>`;
}
function viewLibrary() {
  const L = S.lib, f = (id, l) => `<button class="chip" data-act="lib-cat" data-f="${id}" aria-pressed="${L.cat === id}">${l}</button>`;
  return `<div class="wrap stack" style="padding-block:6px 0">
    <header class="pagehead"><h1>Recipe <em>library</em></h1><p>Recipes everyone has added. Tap one to put it in your book.</p></header>
    <div class="search">${I.search}<input class="input" id="libq" type="search" placeholder="Search a recipe, or type a code" value="${esc(L.q)}" autocomplete="off" enterkeyhint="search"></div>
    <div class="chips" role="group" aria-label="Show">${f("", "All")}${f("dinner", "Meals")}${f("dessert", "Desserts")}${f("snack", "Snacks")}</div>
    <div id="libgrid">${libResultsHtml()}</div>
  </div>`;
}
let libT = null, libSeq = 0;
async function loadLibrary() {
  const L = S.lib, seq = ++libSeq, q = String(L.q || "").trim();
  L.shared = null;
  if (/^[A-Za-z0-9]{6}$/.test(q)) { try { const d = await api("GET", "/api/shares/" + q.toUpperCase()); if (seq === libSeq) L.shared = { code: q.toUpperCase(), sender: d.sender, recipes: d.recipes }; } catch {} }
  try {
    const r = await api("GET", "/api/library?q=" + encodeURIComponent(L.q || "") + "&cat=" + encodeURIComponent(L.cat || ""));
    if (seq !== libSeq) return;
    L.results = r.results;
  } catch (e) { if (seq !== libSeq) return; L.results = []; if (e.code !== "signed_out") toast(e.message); }
  const g = $("#libgrid"); if (g) g.innerHTML = libResultsHtml();
}
async function openLibRecipe(id) {
  let d; try { d = await api("GET", "/api/library/" + encodeURIComponent(id)); } catch (e) { toast(e.message); return; }
  const r = d.recipe;
  S.sheet = { kind: "lib", recipe: r, author: d.author };
  openSheet(`${r.photoUrl ? `<img class="dish" src="${esc(r.photoUrl)}" alt="" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}
    <span class="eyebrow">${esc(CAT1[catOf(r)])}${d.author ? " · by " + esc(d.author) : ""}</span><h2>${esc(r.title)}</h2>${r.description ? `<p class="muted">${esc(r.description)}</p>` : ""}
    <div class="section"><span class="label">Ingredients</span><ul class="ings">${(r.ingredients || []).map(i => `<li class="plain">${esc(ingLine(i))}</li>`).join("")}</ul></div>
    <div class="section"><span class="label">Method</span><ol class="steps">${(r.steps || []).map(s => `<li><div class="st"><p>${esc(s.text)}</p></div></li>`).join("")}</ol></div>
    <button class="btn primary block" data-act="lib-add">${I.plus} Add to my recipes</button>`);
}
const noteField = () => `<div class="field"><label for="addnote">Anything to change? <span class="muted">(optional)</span></label><input class="input" id="addnote" placeholder="e.g. make it for 2, no mushrooms" value="${esc(S.note)}"></div>`;
function photoSheet() {
  const max = (AI.caps && AI.caps.images && AI.caps.images.maxCount) || 4;
  S.sheet = { kind: "photo" };
  openSheet(`<h2>Read a recipe photo</h2><p class="hint">Add every page of the recipe, in order.</p>
    <div class="thumbs">${S.photos.map((p, n) => `<div><img src="${p.url}" alt="Page ${n + 1}"><button data-act="rm-photo" data-n="${n}" aria-label="Remove photo">×</button></div>`).join("")}${S.photos.length < max ? `<button class="more" data-act="add-photo" aria-label="Add another photo">${I.plus}</button>` : ""}</div>
    ${noteField()}
    <button class="btn primary block" data-act="go-photo" ${S.photos.length ? "" : "disabled"}>${I.magic} Read recipe</button>`);
}
function pdfSheet() {
  S.sheet = { kind: "pdf" };
  openSheet(`<h2>Import a PDF</h2>
    <div class="filecard">${I.pdf}<div><b>${esc(S.pdf.name)}</b><span class="hint tnum">${Math.max(1, Math.round(S.pdf.size / 1024))} KB</span></div><button class="textbtn" data-act="add-pdf">Change</button></div>
    ${noteField()}
    <button class="btn primary block" data-act="go-pdf">${I.magic} Read recipe</button>`);
}
function pasteSheet(text = "") {
  S.sheet = { kind: "paste" };
  openSheet(`<h2>Add from a link or text</h2>
    <div class="field"><label for="pastetext">Link or recipe text</label><textarea class="input" id="pastetext" rows="7" placeholder="Paste a link to a recipe page or video, or the recipe itself">${esc(text)}</textarea>
    <span class="hint">Most recipe websites work with just the link. For a video, the link works if the recipe is in its description. Adverts and stories get ignored.</span></div>
    ${noteField()}
    <button class="btn primary block" data-act="go-paste">${I.magic} Add recipe</button>`);
}
function inventSheet() {
  S.sheet = { kind: "invent" };
  openSheet(`<h2>Invent a recipe</h2>
    <div class="field"><label for="invent">What do you fancy?</label><textarea class="input" id="invent" rows="4" placeholder="e.g. A cheesy pasta bake that's ready in 30 minutes"></textarea>
    <span class="hint">Say as much or as little as you like: ingredients you have, how long you've got, who it's for.</span></div>
    <button class="btn primary block" data-act="go-invent">${I.magic} Create recipe</button>`);
}

/* ---------- kitchen: one simple page ---------- */
const GADGETS = ["Air fryer", "Microwave", "Food processor", "Mixer", "Blender", "Slow cooker", "Pressure cooker"];
function kitchenForm(k) {
  const u = unitsOf(k), txt = k.appliancesText || oldAppliancesText(k);
  const parts = txt.split(/,\s*/).map(x => x.trim()).filter(Boolean);
  const gadgets = GADGETS.filter(g => parts.some(p => p.toLowerCase() === g.toLowerCase() || (g === "Mixer" && /mixer/i.test(p))));
  const other = parts.filter(p => !gadgets.some(g => g.toLowerCase() === p.toLowerCase()) && !(/mixer/i.test(p) && gadgets.includes("Mixer"))).join(", ");
  return {
    heat: !k.setup ? "" : k.dial === "numbers" ? "numbers" : (k.dial === "none" || k.hobType === "gas") ? "gas" : "unsure",
    max: Number(k.stoveMax) || 9, oven: k.setup ? ovenType(k) : "",
    gadgets, other, people: k.people || 4, avoid: k.avoid || "",
    units: u.weight === "oz" ? "us" : u.spoons ? "gms" : "gm"
  };
}
function kfToKitchen(f, profile) {
  const appliancesText = [...f.gadgets, ...(f.other.trim() ? [f.other.trim()] : [])].join(", ");
  return { type: "kitchen", setup: true, appliancesText, hobType: f.heat === "gas" ? "gas" : f.heat === "numbers" ? "numbered" : "unsure", hobModel: "",
    dial: f.heat === "numbers" ? "numbers" : f.heat === "gas" ? "none" : "unsure", stoveMax: f.heat === "numbers" ? f.max : null, ovenType: f.oven || "unsure",
    weight: f.units === "us" ? "oz" : "g", liquid: f.units === "us" ? "cup" : "ml", spoons: f.units !== "gm", people: f.people, avoid: f.avoid.trim(), profile: profile || null };
}
/* The questions: only what changes how a recipe is written. One per screen, tap to answer. */
const KW = {
  heat: { q: "How do you turn your hob up and down?", hint: "The hob is where the pans go.", opts: [["numbers", "With numbers", "a knob or buttons, like 1 to 9", "kdial"], ["gas", "Gas flame, no numbers", "you just turn the knob", "kflame"], ["unsure", "Not sure", "", "kq"]] },
  max: { q: "What's the biggest number?", hint: "Look at the knob or the buttons.", big: true, opts: [["6", "6"], ["9", "9"], ["10", "10"], ["12", "12"]] },
  oven: { q: "Does your oven have a fan?", hint: "Look for a little fan symbol on the knob.", opts: [["fan", "Yes, it has a fan", "", "kfan"], ["conventional", "No fan", "", "knofan"], ["gas", "It's a gas oven", "you light it with a flame", "kflame"], ["none", "I don't have an oven", "", "kno"], ["unsure", "Not sure", "", "kq"]] },
  gadgets: { q: "Do you have any of these?", hint: "Tap all you have. Recipes will use them when it helps." },
  people: { q: "How many people do you usually cook for?", hint: "New recipes start with this many servings.", big: true, opts: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6+"]] },
  avoid: { q: "Anything you can't or won't eat?", hint: "Like allergies, or foods you don't like." },
  units: { q: "How do you like to measure?", opts: [["gms", "Grams and spoons", "like 200 g flour, 1 tsp salt"], ["gm", "Grams only", "even for small amounts"], ["us", "Cups", "American style"]] }
};
function kwSteps(a) { return ["heat", ...(a.heat === "numbers" ? ["max"] : []), "oven", "gadgets", "people", "avoid"]; }
function startKitchenSetup() { S.kw = { a: kitchenForm(Store.kitchen()), i: 0, single: false }; render(); window.scrollTo(0, 0); }
function viewKitchenStep() {
  const w = S.kw, a = w.a, steps = w.single ? [w.single] : kwSteps(a), key = steps[w.i], Q = KW[key];
  const cur = key === "max" ? String(a.max) : key === "people" ? String(Math.min(6, a.people)) : a[key];
  let body = "";
  if (Q.opts) body = `<div class="ktiles${Q.big ? " big" : ""}">${Q.opts.map(([v, l, sub, ic]) => `<button class="ktile" data-act="kw-pick" data-v="${v}" aria-pressed="${cur === v}">${ic ? `<span class="ki">${I[ic]}</span>` : ""}<span class="kt"><b>${l}</b>${sub ? `<small>${sub}</small>` : ""}</span></button>`).join("")}</div>`;
  else if (key === "gadgets") body = `<div class="ktiles two">${GADGETS.map(g => `<button class="ktile" data-act="kw-gadget" data-v="${g}" aria-pressed="${a.gadgets.includes(g)}"><span class="kt"><b>${g}</b></span><span class="kcheck">${I.tick}</span></button>`).join("")}</div>
    <input class="input" id="kw-other" value="${esc(a.other)}" placeholder="Something else? e.g. Ninja Speedi" autocomplete="off">
    <button class="btn primary block" data-act="kw-next" id="kw-gnext">${a.gadgets.length || a.other.trim() ? "Next" : "I don't have any of these"}</button>`;
  else body = `<input class="input" id="kw-avoid" value="${esc(a.avoid)}" placeholder="e.g. nuts, mushrooms" autocomplete="off">
    <button class="btn primary block" data-act="kw-next">${w.single ? "Save" : "Finish"}</button>
    ${a.avoid ? "" : `<button class="btn block" data-act="kw-nothing">Nothing, I eat everything</button>`}`;
  const n = steps.length;
  return `<div class="wrap stack" style="padding-block:6px 0">
    <div class="kwtop"><button class="iconbtn" data-act="kw-back" aria-label="Back">${I.back}</button>${w.single ? "" : `<div class="kdots" aria-label="Question ${w.i + 1} of ${n}">${steps.map((_, j) => `<i class="${j < w.i ? "done" : j === w.i ? "on" : ""}"></i>`).join("")}</div>`}<span style="width:42px"></span></div>
    <header class="pagehead"><h1 class="kwq">${Q.q}</h1>${Q.hint ? `<p>${Q.hint}</p>` : ""}</header>
    ${body}
  </div>`;
}
function kwAdvance() {
  const w = S.kw;
  if (w.single) { saveKitchen(); return; }
  const steps = kwSteps(w.a);
  if (w.i < steps.length - 1) { w.i++; render(); window.scrollTo(0, 0); } else saveKitchen();
}
function viewKitchen() {
  const k = Store.kitchen();
  if (!k.setup && !S.kw) S.kw = { a: kitchenForm(k), i: 0, single: false };
  if (S.kw) return viewKitchenStep();
  const a = kitchenForm(k), h = heatOf(k), apps = applianceList(k), n = Store.recipes().length;
  const row = (step, label, value, extra = "") => `<button class="rv" data-act="kw-edit" data-step="${step}"><span class="tx"><span class="eyebrow">${label}</span><b>${value}</b>${extra}</span><span class="chg">Change</span></button>`;
  const ovenTxt = { fan: "Fan oven", conventional: "Oven without a fan", gas: "Gas oven", none: "No oven", unsure: "Not sure what kind" }[a.oven];
  return `<div class="wrap stack" style="padding-block:6px 0">
    <header class="pagehead"><h1>My <em>kitchen</em></h1><p>Every recipe gets written for this. Tap anything to change it.</p></header>
    <div class="rvlist">
      ${row("heat", "Hob", a.heat === "numbers" ? `Numbers 1 to ${a.max}` : a.heat === "gas" ? "Gas flame, no numbers" : "Not sure", h.numbered ? `<div class="heat tnum"><span>Low <b>${esc(h.low)}</b></span><span>Medium <b>${esc(h.medium)}</b></span><span>High <b>${esc(h.high)}</b></span></div>` : "")}
      ${row("oven", "Oven", ovenTxt)}
      ${row("gadgets", "Gadgets", apps.length ? esc(apps.map(x => x.name).join(", ")) : "None")}
      ${row("people", "Cooking for", `${k.people} ${k.people === 1 ? "person" : "people"}`)}
      ${row("avoid", "Doesn't eat", esc(k.avoid || "Eats everything"))}
      ${row("units", "Measurements", { gms: "Grams and spoons", gm: "Grams only", us: "Cups" }[a.units])}
    </div>
    ${n ? `<section class="panel"><b>Update my recipes</b><p class="hint">Rewrite all ${n} recipe${n === 1 ? "" : "s"} for this kitchen. The dishes stay the same.</p><button class="btn block" data-act="update-all-ask">${I.magic} Update all ${n}</button></section>` : ""}
    <section class="panel" id="creditpanel" hidden></section>
    <section class="panel"><b>Your account</b><p class="hint">Signed in as <b>${esc(S.user || "")}</b>. Sign in with the same username on any phone to see your recipes.</p>
      <div class="btnrow"><button class="btn" data-act="backup-pick">Import a backup</button><button class="btn" data-act="signout">Sign out</button></div></section>
  </div>`;
}
function normProfile(o) {
  if (!o || typeof o !== "object") throw { code: "invalid_json" };
  const h = o.heat || {}, s = v => String(v ?? "").trim().slice(0, 24);
  return {
    appliances: (Array.isArray(o.appliances) ? o.appliances : []).filter(x => x && x.name).slice(0, 20).map(x => ({ name: String(x.name).slice(0, 40), uses: String(x.uses || "").slice(0, 90) })),
    hob: String(o.hob || "").slice(0, 80),
    heat: h.low ? { numbered: !!h.numbered, low: s(h.low), mediumLow: s(h.mediumLow || h.low), medium: s(h.medium), mediumHigh: s(h.mediumHigh || h.high), high: s(h.high) } : null
  };
}
async function saveKitchen() {
  const f = S.kw.a, base = kfToKitchen(f, null);
  const old = Store.kitchen();
  const needProfile = base.appliancesText && (base.appliancesText !== old.appliancesText || !old.profile);
  if (needProfile) {
    const prompt = `List what each kitchen appliance can do, for a cooking app. Appliances, in the person's words: "${base.appliancesText}"
Reply with ONLY this JSON: {"appliances": [{"name": "short name, e.g. Ninja Speedi", "uses": "what it can do, under 12 words"}]}
One entry per separate machine; a multi-cooker is ONE entry listing everything it does (a "Ninja Speedi" air fries, steams, bakes, slow cooks and makes one-pot "rapid" meals). Recognise brand names; if unsure, give your best guess.`;
    const prof = await runAI("kitchen", "Saving your kitchen", (signal, onStart) => AI.fn.json(prompt, { signal, onText: onStart, kind: "kitchen" }).then(normProfile));
    base.profile = prof ? { appliances: prof.appliances, hob: "", heat: null } : null;
  } else if (old.profile && old.profile.appliances) base.profile = { appliances: old.profile.appliances, hob: "", heat: null };
  Store.put("kitchen", base); S.kw = null; render(); window.scrollTo(0, 0);
  toast(old.setup ? "Kitchen updated" : "All set! New recipes will be written for your kitchen.");
}
async function updateAll() {
  const rs = Store.recipes();
  if (S.busy || !rs.length) return;
  const ctl = new AbortController();
  S.busy = { label: "", line: "", ctl, writing: true };
  let done = 0, failed = 0, stopMsg = "";
  for (const r of rs) {
    if (ctl.signal.aborted) break;
    S.busy.line = `Updating ${done + failed + 1} of ${rs.length}`; S.busy.label = r.title; renderBusy();
    try {
      const nr = await aiRecipe({ task: "Rewrite this recipe's method for this cook's kitchen: their hob numbers, oven, appliances and measurement preferences. It must stay the same dish: keep the same ingredients, amounts (only convert units if their measurement preferences need it), servings, category and title.", content: recipeText(r), fresh: true }, ctl.signal, () => {});
      const body = Object.assign({}, r, { ingredients: nr.ingredients, steps: nr.steps, prepMinutes: nr.prepMinutes || r.prepMinutes, cookMinutes: nr.cookMinutes || r.cookMinutes,
        tips: nr.tips, tags: r.tags && r.tags.length ? r.tags : nr.tags, emoji: r.emoji || nr.emoji, category: r.category || nr.category });
      Store.put(r.id, body); delete S.servings[r.id]; S.checked[r.id] = {}; done++;
    } catch (e) {
      const c = e && e.code;
      if (c === "cancelled") break;
      if (c === "rate_limited" || c === "not_granted" || c === "sampling_disabled" || c === "session_expired") { stopMsg = aiCopy(e); break; }
      failed++;
    }
  }
  S.busy = null; renderBusy();
  toast(stopMsg || `Updated ${done} recipe${done === 1 ? "" : "s"}${failed ? `. ${failed} couldn't be updated, try those with Adjust.` : "."}`, 5000);
}

/* ---------- sheets ---------- */
function openSheet(html, cls = "") {
  $("#layer").innerHTML = `<div class="scrim" data-act="scrim"><div class="sheet ${cls}" role="dialog" aria-modal="true"><span class="grab"></span>${html}</div></div>`;
  document.body.style.overflow = "hidden";
  const f = $("#layer .sheet textarea, #layer .sheet input"); if (f && matchMedia("(pointer:fine)").matches) f.focus();
  renderFab();
}
function closeSheet() { $("#layer").innerHTML = ""; document.body.style.overflow = S.cook ? "hidden" : ""; S.sheet = null; S.chatOpen = false; renderFab(); }
function adjustSheet(r) {
  S.sheet = { kind: "adjust", id: r.id };
  openSheet(`<h2>Adjust this recipe</h2><p class="hint">Say what you'd like changed. You'll see the new version before anything is replaced.</p>
    <textarea class="input" id="adjtext" rows="4" placeholder="e.g. I don't have cream, use milk instead"></textarea>
    <div class="btnrow"><button class="btn" data-act="sheet-close">Cancel</button><button class="btn primary" data-act="adj-go">${I.magic} Adjust</button></div>`);
}
function previewSheet(nr, origId) {
  S.sheet = { kind: "preview", recipe: nr, origId };
  const canReplace = origId && origId !== "example";
  openSheet(`<span class="eyebrow">New version</span><h2>${esc(nr.title)}</h2>
    ${nr.changes ? `<div class="panel"><span class="eyebrow">What changed</span><p>${esc(nr.changes)}</p></div>` : ""}
    <div class="section"><span class="label">Ingredients</span><ul class="ings">${nr.ingredients.map(i => `<li class="plain">${esc(ingLine(i))}</li>`).join("")}</ul></div>
    <div class="section"><span class="label">Method</span><ol class="steps">${nr.steps.map(s => `<li><div class="st"><p>${esc(s.text)}</p></div></li>`).join("")}</ol></div>
    <div class="btnrow">${canReplace ? `<button class="btn" data-act="prev-new">Save as new</button><button class="btn primary" data-act="prev-replace">Replace original</button>` : `<button class="btn primary" data-act="prev-new">Save recipe</button>`}</div>
    <button class="btn ghost" data-act="sheet-close">Discard</button>`);
}
function editSheet(r) {
  const isNew = !r;
  r = r || { title: "", description: "", category: "dinner", servings: Store.kitchen().people || 2, prepMinutes: null, cookMinutes: null, ingredients: [], steps: [], photo: "" };
  S.sheet = { kind: "edit", id: isNew ? null : r.id, cat: catOf(r), photo: r.photo || r.photoUrl || "" };
  let g = "";
  const ingText = r.ingredients.map(i => { let p = ""; if (i.group && i.group !== g) { g = i.group; p = "# " + i.group + "\n"; } return p + ingLine(i); }).join("\n");
  openSheet(`<h2>${isNew ? "Write a recipe" : "Edit recipe"}</h2>
    <div class="field"><label for="e-title">Name</label><input class="input" id="e-title" value="${esc(r.title)}" placeholder="Grandma's bolognese"></div>
    <div class="field"><span class="label">Type</span><div class="seg" id="e-cat">${Object.entries(CAT1).map(([k, l]) => `<button data-act="ecat" data-v="${k}" aria-pressed="${S.sheet.cat === k}">${l}</button>`).join("")}</div></div>
    <div class="field"><span class="label">Photo of the dish <span class="muted">(optional)</span></span><div class="photofield"><span class="pv" id="e-pv">${S.sheet.photo ? `<img src="${esc(S.sheet.photo)}" alt="">` : artHtml(r)}</span><div class="btnrow" style="flex:1"><button class="btn" data-act="dish-pick">${I.camera} ${S.sheet.photo ? "Change" : "Add photo"}</button>${S.sheet.photo ? `<button class="btn ghost" data-act="dish-rm">Remove</button>` : ""}</div></div></div>
    <div class="three">
      <div class="field"><label for="e-serv">Serves</label><input class="input tnum" id="e-serv" type="number" inputmode="numeric" min="1" value="${r.servings || ""}"></div>
      <div class="field"><label for="e-prep">Prep min</label><input class="input tnum" id="e-prep" type="number" inputmode="numeric" min="0" value="${r.prepMinutes || ""}"></div>
      <div class="field"><label for="e-cook">Cook min</label><input class="input tnum" id="e-cook" type="number" inputmode="numeric" min="0" value="${r.cookMinutes || ""}"></div>
    </div>
    <div class="field"><label for="e-ings">Ingredients <span class="muted">(one per line)</span></label><textarea class="input" id="e-ings" rows="7" placeholder="200 g spaghetti&#10;2 garlic cloves, sliced&#10;1 tbsp olive oil">${esc(ingText)}</textarea><span class="hint">Start a line with # for a section, like “# For the sauce”.</span></div>
    <div class="field"><label for="e-steps">Method <span class="muted">(one step per line)</span></label><textarea class="input" id="e-steps" rows="7" placeholder="Boil the pasta for 10 minutes.">${esc(r.steps.map(s => s.text).join("\n"))}</textarea><span class="hint">Mention a time like “10 minutes” and that step gets a timer button.</span></div>
    <label class="checkrow"><input type="checkbox" id="e-public" ${r.private || (r.source && (r.source.kind === "library" || r.source.kind === "friend")) ? "" : "checked"} ${r.source && (r.source.kind === "library" || r.source.kind === "friend") ? "disabled" : ""}><span><b>Show in the recipe library</b><small>${r.source && (r.source.kind === "library" || r.source.kind === "friend") ? "This came from someone else, so it stays out of the library." : "Other people can find it and add it to their book."}</small></span></label>
    <div class="btnrow"><button class="btn" data-act="sheet-close">Cancel</button><button class="btn primary" data-act="edit-save">Save</button></div>`);
}
function saveEdit() {
  const old = S.sheet.id ? Store.get(S.sheet.id) : null;
  const title = $("#e-title").value.trim(); if (!title) { toast("Give the recipe a name first."); $("#e-title").focus(); return; }
  let group = ""; const ingredients = [];
  for (const line of $("#e-ings").value.split("\n")) { const l = line.trim(); if (!l) continue; if (l.startsWith("#")) { group = l.replace(/^#+\s*/, ""); continue; } const p = parseIngredientLine(l); if (p) { p.group = group; ingredients.push(p); } }
  const oldSteps = old ? old.steps : [];
  const steps = $("#e-steps").value.split("\n").map(s => s.trim().replace(/^\d+[.)]\s*/, "")).filter(Boolean).map(text => {
    const prev = oldSteps.find(s => s.text === text); if (prev) return prev;
    const m = text.match(/(\d+(?:[.,]\d+)?)\s*(?:-\s*\d+\s*)?(min|minutes|mins|hour|hours|hr|hrs)\b/i);
    return { text, minutes: m ? Number(m[1].replace(",", ".")) * (/^h/i.test(m[2]) ? 60 : 1) : null };
  });
  const n = v => { const x = Number(v); return isFinite(x) && x > 0 ? Math.round(x) : null; };
  const rec = Object.assign({}, old || { type: "recipe", createdAt: Date.now(), source: { kind: "manual", label: "Written by hand" }, fav: false, tips: "", tags: [], description: "" }, {
    title, category: S.sheet.cat, photo: /^data:/.test(S.sheet.photo || "") ? S.sheet.photo : "", photoUrl: /^https?:/.test(S.sheet.photo || "") ? S.sheet.photo : "",
    private: !$("#e-public").checked, servings: n($("#e-serv").value) || 1, prepMinutes: n($("#e-prep").value), cookMinutes: n($("#e-cook").value), ingredients, steps
  });
    const id = old ? old.id : newId();
  Store.put(id, rec); closeSheet();
  S.tab = "recipes"; S.openId = id; delete S.servings[id]; render(); window.scrollTo(0, 0);
  toast(old ? "Recipe updated" : "Recipe saved");
}
function saveNewRecipe(rec, sourceLabel, kind, extra) {
  const id = newId();
  const body = Object.assign({}, rec, { type: "recipe", createdAt: Date.now(), source: Object.assign({ kind, label: sourceLabel }, extra || {}), fav: false });
  delete body.changes;
  Store.put(id, body);
  S.tab = "recipes"; S.openId = id; render(); window.scrollTo(0, 0);
  Wake.set(true); toast("Added to your recipes");
  return id;
}
async function findPhoto(id, q, quiet) {
  let p; try { p = await api("GET", "/api/photo?q=" + encodeURIComponent(q || "")); } catch { if (!quiet) toast("Couldn't find a photo for this one. You can add your own with the pencil."); return; }
  const r = Store.get(id); if (!r || r.photo || r.photoUrl) return;
  Store.put(id, Object.assign({}, r, { photoUrl: p.url, photoCredit: p.credit, photoLink: p.link }));
  if (!quiet) toast("Photo added");
}

/* ---------- sharing ---------- */
function shareText(rs) {
  return rs.map(r => {
    const sv = S.servings[r.id] || r.servings, f = sv / r.servings;
    return `${r.title.toUpperCase()}\nServes ${sv}${totalMins(r) ? " · " + mins(totalMins(r)) : ""}${r.description ? "\n" + r.description : ""}\n\nIngredients\n${r.ingredients.map(i => "• " + ingLine(i, f)).join("\n")}\n\nMethod\n${r.steps.map((s, n) => (n + 1) + ". " + s.text).join("\n")}${r.tips ? "\n\nGood to know: " + r.tips : ""}`;
  }).join("\n\n— — —\n\n");
}
const APP_URL = location.origin + "/";
const CODE_ABC = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
function shareSheet(rs) {
  S.sheet = { kind: "share", ids: rs.map(r => r.id), code: "" };
  openSheet(`<h2>${rs.length === 1 ? "Share “" + esc(rs[0].title) + "”" : "Share " + rs.length + " recipes"}</h2>
    <div class="sharebox" id="sharebox"><span class="hint" style="text-align:center">Send them this code</span><span class="code" id="sharecode"><span class="spin" style="width:26px;height:26px;display:inline-block" aria-hidden="true"></span></span>
      <span class="hint" style="text-align:center">They type it in their app: <b>+ → Get recipes from someone</b>, or in the <b>library</b> search.</span>
      <div class="btnrow"><button class="btn primary" data-act="send-code" disabled>${I.share} Send code</button><button class="btn" data-act="copy-code" disabled>${I.copy} Copy code</button></div></div>
    <span class="eyebrow" style="text-align:center">Or send the recipe itself</span>
    <div class="btnrow">${AI.dl ? `<button class="btn" data-act="share-pdf">${I.pdf} PDF</button>` : ""}<button class="btn" data-act="share-copy">${I.copy} Text</button></div>`);
  createShare(rs).then(code => {
    if (!S.sheet || S.sheet.kind !== "share") return;
    S.sheet.code = code; $("#sharecode").textContent = code;
    document.querySelectorAll('[data-act="send-code"],[data-act="copy-code"]').forEach(b => b.disabled = false);
    if (S.selecting) { S.selecting = false; S.selected.clear(); render(); }
  }).catch(e => { if (S.sheet && S.sheet.kind === "share" && $("#sharecode")) $("#sharecode").innerHTML = `<span class="hint">${esc(e.message || "Couldn't make a code.")}</span>`; });
}
async function createShare(rs) {
  const recipes = rs.map(r => { const c = clone(r); delete c.id; delete c.fav; delete c.example; return c; });
  let body = { type: "share", count: recipes.length, recipes };
  if (JSON.stringify(body).length > 800000) body.recipes = recipes.map(r => Object.assign(r, { photo: "" }));
  return (await api("POST", "/api/shares", body)).code;
}
async function openReceive(code) {
  code = String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (code.length !== 6) { toast("Codes are 6 letters and numbers. Check it and try again."); return; }
  let d; try { d = await api("GET", "/api/shares/" + code); } catch (e) { if (e.code !== "signed_out") toast(e.code === "not_found" ? "No recipes found for that code. Check it and try again." : e.message, 4000); return; }
  if (!d || !Array.isArray(d.recipes) || !d.recipes.length) { toast("No recipes found for that code. Check it and try again.", 4000); return; }
  if (/^book-/.test(d.sender || "")) d.sender = "";
  S.sheet = { kind: "receive", recipes: d.recipes, sender: d.sender };
  openSheet(`<h2>${d.recipes.length === 1 ? "A recipe for you" : d.recipes.length + " recipes for you"}</h2><p class="hint">${esc(d.sender || "Someone")} shared ${d.recipes.length === 1 ? "this" : "these"} with you. Untick any you don't want.</p>
    <ul class="pick">${d.recipes.map((r, n) => `<li><label><input type="checkbox" checked data-n="${n}"><span class="e">${esc(emojiOf(r) || "🍽️")}</span><span><b>${esc(r.title)}</b><small class="tnum">${esc([CAT1[catOf(r)], totalMins(r) ? mins(totalMins(r)) : ""].filter(Boolean).join(" · "))}</small></span></label></li>`).join("")}</ul>
    <button class="btn primary block" data-act="receive-go">${I.plus} Add to my recipes</button>
    <p class="hint">They were written for the other person's kitchen. To fit them to yours, go to Kitchen and tap Update all recipes.</p>`);
}
function friendSheet() {
  S.sheet = { kind: "friend" };
  openSheet(`<h2>Get recipes from someone</h2><p class="hint">When someone shares recipes with “Send to someone's app”, they get a 6-letter code. If they sent you a link, just open it.</p>
    <input class="input tnum" id="friendcode" placeholder="e.g. K7P2QX" autocomplete="off" autocapitalize="characters" maxlength="8" style="font-size:22px;letter-spacing:.12em;text-align:center;font-weight:700">
    <button class="btn primary block" data-act="friend-go">Find recipes</button>`);
}
const pdfSafe = s => String(s ?? "").replace(/⅓/g, "1/3").replace(/⅔/g, "2/3").replace(/⅛/g, "1/8").replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/[–—−]/g, "-").replace(/•/g, "-").replace(/…/g, "...").replace(/[^\u0000-ÿ]/g, "");
async function makePdf(rs) {
  if (!window.jspdf) await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
  const { jsPDF } = window.jspdf; const doc = new jsPDF({ unit: "mm", format: "a4" });
  const M = 18, CW = 210 - 2 * M, BOTTOM = 297 - 16; let y = M;
  const need = h => { if (y + h > BOTTOM) { doc.addPage(); y = M; } };
  const write = (txt, size, style, color, opts = {}) => {
    doc.setFont("helvetica", style); doc.setFontSize(size); doc.setTextColor(...color);
    const indent = opts.indent || 0, lines = doc.splitTextToSize(pdfSafe(txt), CW - indent), lh = size * .3528 * 1.4;
    lines.forEach((l, n) => { need(lh); if (n === 0 && opts.marker) doc.text(opts.marker, M, y + lh * .78); doc.text(l, M + indent, y + lh * .78); y += lh; });
    y += opts.gap || 0;
  };
  const ink = [43, 22, 16], muted = [135, 103, 93], accent = [229, 67, 45];
  rs.forEach((r, idx) => {
    if (idx) { doc.addPage(); y = M; }
    const sv = S.servings[r.id] || r.servings, f = sv / r.servings;
    doc.setFillColor(...accent); doc.roundedRect(M, y, 22, 2, 1, 1, "F"); y += 7;
    write(r.title, 22, "bold", ink, { gap: 1.5 });
    write([CAT1[catOf(r)], "Serves " + sv, totalMins(r) ? mins(totalMins(r)) : ""].filter(Boolean).join("  ·  ").replace(/·/g, "·"), 10.5, "normal", muted, { gap: 2 });
    if (r.description) write(r.description, 11.5, "normal", ink, { gap: 3 });
    write("Ingredients", 14, "bold", accent, { gap: 1 });
    let g = "";
    r.ingredients.forEach(i => { if (i.group && i.group !== g) { g = i.group; y += 1; write(i.group, 11, "bold", ink); } write(ingLine(i, f), 11, "normal", ink, { indent: 5, marker: "-", gap: .6 }); });
    y += 4; write("Method", 14, "bold", accent, { gap: 1 });
    r.steps.forEach((s, n) => write(s.text, 11, "normal", ink, { indent: 7, marker: (n + 1) + ".", gap: 1.6 }));
    if (r.tips) { y += 3; write("Good to know", 11, "bold", ink); write(r.tips, 10.5, "normal", muted); }
  });
  const pages = doc.getNumberOfPages();
  for (let p = 1; p <= pages; p++) { doc.setPage(p); doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); doc.setTextColor(...muted); doc.text("Made with The Recipe Thing", M, 297 - 9); if (pages > 1) doc.text(p + " / " + pages, 210 - M, 297 - 9, { align: "right" }); }
  return doc.output("blob");
}

/* ---------- cook mode ---------- */
function openCook(r) {
  const sv = S.servings[r.id] || r.servings;
  S.cook = { id: r.id, step: 0, f: sv / r.servings, drawer: false };
  Wake.set(true); renderCook(); renderFab();
}
function renderCook() {
  const c = S.cook; let el = $("#cookel");
  if (!c) { if (el) el.remove(); document.body.style.overflow = ""; return; }
  const r = Store.get(c.id); if (!r) { S.cook = null; return renderCook(); }
  if (!el) { el = document.createElement("div"); el.id = "cookel"; el.className = "cook"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Cooking mode"); document.body.appendChild(el); document.body.style.overflow = "hidden"; }
  const s = r.steps[c.step], total = r.steps.length, last = c.step === total - 1;
  const words = s ? s.text.toLowerCase() : "";
  const uses = r.ingredients.filter(i => i.item.toLowerCase().split(/\s+/).filter(x => x.length > 3).some(x => words.includes(x.replace(/(es|s)$/, ""))));
  el.innerHTML = `<div class="bar"><button class="iconbtn" data-act="cook-x" aria-label="Leave cooking mode">${I.x}</button><span class="t">${esc(r.title)}</span>
      <button class="iconbtn" data-act="chat-open" aria-label="Ask about this step">${I.chat}</button><button class="btn" data-act="cook-ings">${I.list} ${c.drawer ? "Hide" : "Ingredients"}</button></div>
    <div class="prog" aria-hidden="true"><i style="width:${((c.step + 1) / total) * 100}%"></i></div>
    ${c.drawer ? `<div class="drawer"><ul class="ings">${r.ingredients.map(i => `<li class="plain">${esc(ingLine(i, c.f))}</li>`).join("")}</ul></div>` : ""}
    <div class="stage" id="stage"><span class="stepno tnum">Step ${c.step + 1} of ${total}</span><p class="steptext">${esc(s ? s.text : "")}</p>
      ${uses.length ? `<div class="uses">${uses.map(i => `<span>${esc(ingLine(i, c.f))}</span>`).join("")}</div>` : ""}
      ${s && s.minutes ? `<button class="btn primary" data-act="timer" data-min="${s.minutes}" data-label="Step ${c.step + 1}" style="align-self:flex-start;min-height:54px;font-size:17px">${I.timer} Start ${esc(mins(s.minutes))} timer</button>` : ""}
      <span class="awake" id="cookwake" ${Wake.lock ? "" : "hidden"}>Screen stays on</span></div>
    <div class="nav"><button class="btn" data-act="cook-prev" ${c.step === 0 ? "disabled" : ""}>Back</button><button class="btn primary" data-act="${last ? "cook-x" : "cook-next"}">${last ? "Finish" : "Next step"}</button></div>`;
}
let touchX = null;
document.addEventListener("touchstart", e => { if (S.cook && e.target.closest("#stage")) touchX = e.touches[0].clientX; }, { passive: true });
document.addEventListener("touchend", e => {
  if (touchX == null || !S.cook) return; const dx = e.changedTouches[0].clientX - touchX; touchX = null;
  const r = Store.get(S.cook.id); if (!r) return;
  if (dx < -60 && S.cook.step < r.steps.length - 1) { S.cook.step++; renderCook(); }
  else if (dx > 60 && S.cook.step > 0) { S.cook.step--; renderCook(); }
}, { passive: true });

/* ---------- Ask (floating, knows what you're looking at) ---------- */
let chatCtl = null;
function chatContext() {
  if (S.cook) { const r = Store.get(S.cook.id); if (r) return { r, step: S.cook.step, f: S.cook.f, label: `${r.title} · step ${S.cook.step + 1}` }; }
  if (S.tab === "recipes" && S.openId) { const r = Store.get(S.openId); if (r) return { r, f: (S.servings[r.id] || r.servings) / r.servings, label: r.title }; }
  if (S.tab === "kitchen") return { kitchen: true, label: "Your kitchen settings" };
  return null;
}
function chatRules(ctx, question) {
  const k = Store.kitchen(), rs = Store.recipes(), q = String(question || "").toLowerCase();
  const mentioned = rs.filter(r => r.title.toLowerCase().split(/\s+/).filter(w => w.length > 3).some(w => q.includes(w))).slice(0, 3);
  let lib = rs.map(r => `\n- ${r.title} (${CAT1[catOf(r)]}${totalMins(r) ? ", " + mins(totalMins(r)) : ""}; ${r.ingredients.slice(0, 8).map(i => i.item).join(", ")})`).join("").slice(0, 12000);
  if (mentioned.length) lib += "\n\nFULL TEXT OF RECIPES THEY MENTIONED:" + mentioned.map(r => "\n\n" + recipeText(r)).join("");
  return `You are the cooking helper inside "The Recipe Thing", someone's personal recipe-book app on their phone. Answer like a friendly, practical cook: short and specific, a few sentences or a short "- " list. No headings, no tables. When you mention a recipe from their book, use its exact name. Give hob heat with their dial numbers and use their appliances where it helps.

${kitchenRules(k)}

THEIR RECIPE BOOK (${rs.length} recipe${rs.length === 1 ? "" : "s"}):${lib || "\n(empty so far)"}
${ctx && ctx.r ? `\nRIGHT NOW THEY ARE LOOKING AT THIS RECIPE${ctx.step != null ? " IN COOKING MODE" : ""} (scaled to ${Math.round(ctx.r.servings * ctx.f)} servings). If they say "this", "it" or "this step", they mean this:\n${recipeText(ctx.r, ctx.f, { step: ctx.step })}\n` : ctx && ctx.kitchen ? "\nRIGHT NOW THEY ARE LOOKING AT THEIR KITCHEN SETTINGS.\n" : ""}
Reply in the language they write in (Portuguese from Portugal or Brazil is common: match it). You understand Portuguese cooking terms and measures (xícara = 240 ml, chávena = 250 ml, copo ≈ 200 ml, colher de sopa = tbsp, q.b. = to taste).
If they ask for a recipe that isn't in their book, write it out with a title line, an "Ingredients" list with amounts, then numbered steps. The app shows a button to save it.`;
}
function canAskHtml() {
  const item = (icon, t, s) => `<li><span class="i">${icon}</span><div><b>${t}</b><span>${s}</span></div></li>`;
  return `<div class="canask"><h3>Ask anything while you cook</h3><p class="hint">I know every recipe in your book, your kitchen, and what's on your screen.</p><ul>
    ${item(I.book, "Your recipes", "“Which of my recipes use the air fryer?”")}
    ${item(I.eye, "What you're looking at", "“Can I make this the day before?”")}
    ${item(I.swap, "Swaps", "“I'm out of cream. What can I use instead?”")}
    ${item(I.fridge, "Ideas", "“What can I make with chicken, rice and peppers?”")}
  </ul></div>`;
}
function chatMsgsHtml() {
  if (!S.chat.length) return canAskHtml();
  return S.chat.map((m, n) => m.role === "user" ? `<div class="msg user">${esc(m.content)}</div>`
    : `<div class="msg ai"><div class="md" ${m.pending ? 'id="streaming"' : ""}>${m.pending && !m.content ? '<span class="muted">Thinking…</span>' : md(m.content)}</div>${!m.pending && m.content.length > 250 && /ingredient/i.test(m.content) && /\n\s*1[.)]/.test(m.content) ? `<button class="btn" data-act="chat-save" data-n="${n}">${I.plus} Save as recipe</button>` : ""}</div>`).join("")
    + (S.chatBusy ? "" : `<button class="btn ghost" data-act="chat-clear" style="align-self:center">Start a new chat</button>`);
}
function openChat() {
  S.chatOpen = true; S.sheet = { kind: "chat" };
  const ctx = chatContext();
  openSheet(`<div class="sheethead"><div><h2>Ask</h2>${ctx ? `<span class="ctx">${I.eye}<span>${esc(ctx.label)}</span></span>` : ""}</div><button class="iconbtn" data-act="sheet-close" aria-label="Close">${I.x}</button></div>
    <div class="chatbody" id="chatbody">${chatMsgsHtml()}</div>
    <form class="chatform" id="chatform"><textarea id="chatin" rows="1" placeholder="${ctx && ctx.r ? "Ask about this recipe…" : "Ask the cook…"}" aria-label="Message"></textarea><button class="send" type="submit" id="chatsend" aria-label="Send">${I.send}</button></form>`, "chat");
  scrollChat();
}
function paintChat() {
  const b = $("#chatbody"); if (!b) return;
  b.innerHTML = chatMsgsHtml();
  const s = $("#chatsend"); if (s) { s.innerHTML = S.chatBusy ? I.stop : I.send; s.setAttribute("aria-label", S.chatBusy ? "Stop" : "Send"); }
  scrollChat();
}
function scrollChat() { requestAnimationFrame(() => { const b = $("#chatbody"); if (b) b.scrollTop = b.scrollHeight; }); }
async function sendChat(text) {
  text = String(text || "").trim();
  if (!text || S.chatBusy) return;
  const ctx = chatContext();
  S.chat.push({ role: "user", content: text });
  let hist = S.chat.filter(m => !m.pending && m.content).slice(-14).map(m => ({ role: m.role, content: m.content }));
  while (hist.length && hist[0].role !== "user") hist.shift();
  const msg = { role: "assistant", content: "", pending: true };
  S.chat.push(msg);
  const ci = $("#chatin"); if (ci) { ci.value = ""; ci.style.height = ""; }
  chatCtl = new AbortController(); S.chatBusy = true; paintChat();
  try {
    const { text: out } = await AI.fn([{ role: "user", content: chatRules(ctx, text) }, ...hist], {
      cache: false, signal: chatCtl.signal, kind: "ask",
      onText: ({ text: t }) => { msg.content = t; const el = $("#streaming"); if (el) { el.innerHTML = md(t); scrollChat(); } }
    });
    msg.content = out;
  } catch (e) {
    msg.content = (e && e.text) || "";
    if (!e || e.code !== "cancelled") msg.content = msg.content ? msg.content + "\n\n(Stopped early.)" : aiCopy(e);
    if (!msg.content) S.chat.splice(S.chat.indexOf(msg), 1);
  } finally {
    msg.pending = false; S.chatBusy = false; chatCtl = null;
    lsSet(LS_CHAT, S.chat.filter(m => !m.pending).slice(-30));
    paintChat();
  }
}

/* ---------- actions ---------- */
function fileToPhotos(files) {
  const max = (AI.caps && AI.caps.images && AI.caps.images.maxCount) || 4;
  for (const f of files) { if (S.photos.length >= max) { toast(`Up to ${max} photos at once.`); break; } if (f.type.startsWith("image/") || !f.type) S.photos.push({ file: f, url: URL.createObjectURL(f) }); }
}
const keepNote = () => { const n = $("#addnote"); if (n) S.note = n.value; };
const A = {
  tab(t) {
    S.tab = t.dataset.tab; S.openId = null; S.selecting = false; S.selected.clear(); Wake.set(false);
    S.kw = null;
    closeSheet(); render(); window.scrollTo(0, 0);
  },
  open(t) {
    const id = t.dataset.id;
    if (S.selecting) { if (id === "example") return; S.selected.has(id) ? S.selected.delete(id) : S.selected.add(id); render(); return; }
    S.openId = id; render(); window.scrollTo(0, 0); Wake.set(true);
  },
  "close-recipe"() { S.openId = null; Wake.set(false); render(); },
  filter(t) { S.filter = t.dataset.f; render(); },
  "clear-filters"() { S.search = ""; S.filter = "all"; render(); },
  "sel-start"() { S.selecting = true; S.selected.clear(); render(); },
  "sel-cancel"() { S.selecting = false; S.selected.clear(); render(); },
  "sel-share"() { const rs = [...S.selected].map(id => Store.get(id)).filter(Boolean); if (rs.length) shareSheet(rs); },
  async "send-code"() {
    const code = S.sheet.code, n = S.sheet.ids.length;
    const text = `${n === 1 ? "Here's a recipe" : "Here are " + n + " recipes"} for you on recipe thing. In the app, tap + then "Get recipes from someone" and type: ${code}`;
    if (navigator.share) { try { await navigator.share({ text }); return; } catch (e) { if (e && e.name === "AbortError") return; } }
    navigator.clipboard.writeText(text).then(() => toast("Copied. Paste it into a message.")).catch(() => toast("Couldn't copy here. The code is " + code));
  },
  "copy-code"() { navigator.clipboard.writeText(S.sheet.code).then(() => toast("Code copied")).catch(() => toast("Couldn't copy here. The code is " + S.sheet.code)); },
  "get-friend"() { friendSheet(); },
  "friend-go"() { const c = $("#friendcode").value; closeSheet(); openReceive(c); },
  "receive-go"() {
    const picks = [...document.querySelectorAll('.pick input:checked')].map(i => S.sheet.recipes[Number(i.dataset.n)]).filter(Boolean);
    if (!picks.length) { toast("Tick at least one recipe."); return; }
    picks.forEach((r, n) => Store.put(newId(), Object.assign({}, r, { type: "recipe", createdAt: Date.now() + n, fav: false, source: { kind: "friend", label: S.sheet.sender ? "@" + S.sheet.sender : "Someone who shared it" } })));
    closeSheet(); S.tab = "recipes"; S.openId = null; S.filter = "all"; render(); window.scrollTo(0, 0);
    toast(picks.length === 1 ? "Recipe added" : picks.length + " recipes added");
  },
  "update-all-ask"() {
    const n = Store.recipes().length; S.sheet = { kind: "updateall" };
    openSheet(`<h2>Update all ${n} recipe${n === 1 ? "" : "s"}?</h2><p>Each recipe's method gets rewritten for your kitchen: your hob numbers, oven, appliances and measurements. The dishes, ingredients and amounts stay the same.</p><p class="hint">This can take a few minutes. You can keep using the app, and stop it any time.</p>
      <div class="btnrow"><button class="btn" data-act="sheet-close">Not now</button><button class="btn primary" data-act="update-all-go">${I.magic} Update</button></div>`);
  },
  "update-all-go"() { closeSheet(); updateAll(); },
  "share-one"() { const r = Store.get(S.openId); if (r) shareSheet([r]); },
  "share-copy"() {
    const rs = S.sheet.ids.map(id => Store.get(id)).filter(Boolean), txt = shareText(rs);
    navigator.clipboard.writeText(txt).then(() => { toast(rs.length > 1 ? "Recipes copied. Paste them into a message." : "Recipe copied. Paste it into a message."); closeSheet(); if (S.selecting) A["sel-cancel"](); })
      .catch(() => { const ta = document.createElement("textarea"); ta.className = "input"; ta.rows = 8; ta.value = txt; ta.readOnly = true; $("#layer .sheet").appendChild(ta); ta.focus(); ta.select(); toast("Couldn't copy here. The text is selected below, so copy it from there."); });
  },
  async "share-pdf"(t) {
    const rs = S.sheet.ids.map(id => Store.get(id)).filter(Boolean);
    t.disabled = true; t.innerHTML = `<span class="spin" style="width:20px;height:20px" aria-hidden="true"></span> Making PDF…`;
    try {
      const blob = await makePdf(rs);
      const name = (rs.length === 1 ? rs[0].title : "Recipes").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").toLowerCase().slice(0, 60) || "recipes";
      const res = await AI.dl.save({ filename: name + ".pdf", data: blob });
      closeSheet(); if (S.selecting) A["sel-cancel"]();
      if (res && res.status === "saved") toast("PDF ready to send");
    } catch (e) {
      t.disabled = false; t.innerHTML = `${I.pdf} Send as PDF`;
      if (!e || (e.code !== "cancelled" && e.code !== "declined")) toast(e && e.code === "unavailable" ? "PDFs can't be saved here. Use Copy as text." : "Couldn't make the PDF. Try Copy as text.", 4500);
    }
  },
  fav(t) { const r = Store.get(t.dataset.id); if (r) Store.put(r.id, Object.assign({}, r, { fav: !r.fav })); },
  edit(t) { const r = Store.get(t.dataset.id); if (r) editSheet(r); },
  serv(t) { const r = Store.get(S.openId); const cur = S.servings[r.id] || r.servings; S.servings[r.id] = Math.max(1, Math.min(60, cur + Number(t.dataset.d))); render(); },
  ing(t) { const c = S.checked[S.openId] || (S.checked[S.openId] = {}); c[t.dataset.n] = t.checked; },
  timer(t) { const r = Store.get(S.cook ? S.cook.id : S.openId); startTimer(Number(t.dataset.min), (r ? r.title.split(" ").slice(0, 3).join(" ") + " · " : "") + t.dataset.label); },
  "timer-x"(t) { S.timers = S.timers.filter(x => x.id !== t.dataset.id); paintTimers(); },
  cook() { const r = Store.get(S.openId); if (r && r.steps.length) openCook(r); else toast("This recipe has no steps yet."); },
  "cook-next"() { S.cook.step++; renderCook(); },
  "cook-prev"() { S.cook.step = Math.max(0, S.cook.step - 1); renderCook(); },
  "cook-ings"() { S.cook.drawer = !S.cook.drawer; renderCook(); },
  "cook-x"() { S.cook = null; renderCook(); renderFab(); if (!S.openId) Wake.set(false); },
  adjust() { const r = Store.get(S.openId); if (r) adjustSheet(r); },
  async "adj-go"() {
    const want = $("#adjtext").value.trim(); if (!want) { toast("Say what you'd like changed."); $("#adjtext").focus(); return; }
    const r = Store.get(S.sheet.id), f = (S.servings[r.id] || r.servings) / r.servings; closeSheet();
    const nr = await runAI("adjust", "Adjusting " + r.title, (signal, onStart) => aiRecipe({ task: `Rewrite this recipe with this change: ${want}. Keep everything else the same, keep the category, and put a one-sentence summary of what changed in "changes".`, content: recipeText(r, f), fresh: true }, signal, onStart));
    if (nr) { if (r.photo) nr.photo = r.photo; previewSheet(nr, r.id); }
  },
  "prev-replace"() { const { recipe, origId } = S.sheet; const old = Store.get(origId); const body = Object.assign({}, old, recipe); delete body.changes; Store.put(origId, body); delete S.servings[origId]; S.checked[origId] = {}; closeSheet(); toast("Recipe updated"); },
  "prev-new"() { const { recipe } = S.sheet; closeSheet(); saveNewRecipe(recipe, "AI adjusted", "ai"); },
  "delete-ask"() { S.sheet = { kind: "delete", id: S.openId }; openSheet(`<h2>Delete this recipe?</h2><p class="muted">“${esc(Store.get(S.openId).title)}” will be removed from your recipe book. This can't be undone.</p><div class="btnrow"><button class="btn" data-act="sheet-close">Keep it</button><button class="btn primary" data-act="delete-go" style="background:var(--danger)">Delete</button></div>`); },
  "delete-go"() { const id = S.sheet.id; closeSheet(); Store.remove(id); S.openId = null; Wake.set(false); render(); toast("Recipe deleted"); },
  scrim(t, e) { if (e.target === t && !S.chatBusy) closeSheet(); },
  "sheet-close"() { if (S.chatBusy && chatCtl) chatCtl.abort(); closeSheet(); },
  "edit-save"() { saveEdit(); },
  ecat(t) { S.sheet.cat = t.dataset.v; t.parentElement.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b === t))); },
  "dish-pick"() { $("#f-dish").click(); },
  "dish-rm"(t) { S.sheet.photo = ""; const r = S.sheet.id ? Store.get(S.sheet.id) : { title: $("#e-title").value, ingredients: [] }; $("#e-pv").innerHTML = artHtml(r); t.remove(); },
  "busy-stop"() { if (S.busy) S.busy.ctl.abort(); },
  "add-photo"() { keepNote(); $("#f-photo").click(); },
  "add-pdf"() { keepNote(); $("#f-pdf").click(); },
  "add-paste"() { S.note = ""; pasteSheet(); },
  "add-invent"() { inventSheet(); },
  "add-manual"() { editSheet(null); },
  "rm-photo"(t) { keepNote(); const p = S.photos.splice(Number(t.dataset.n), 1)[0]; if (p) URL.revokeObjectURL(p.url); if (S.photos.length) photoSheet(); else closeSheet(); },
  async "go-photo"() {
    keepNote(); const files = S.photos.map(p => p.file), note = S.note; closeSheet();
    const nr = await runAI("import", "From your photo", (signal, onStart) => aiRecipe({ task: "Read the recipe in the attached photo(s). It may be a cookbook page, a handwritten card or a screenshot; several photos are pages in order. Copy it faithfully and don't invent ingredients that aren't there. If a quantity is unreadable, make a sensible guess and say so in tips.", images: files, extra: note }, signal, onStart));
    if (nr) { S.photos.forEach(p => URL.revokeObjectURL(p.url)); S.photos = []; S.note = ""; saveNewRecipe(nr, "Photo", "photo"); }
    else if (S.photos.length) toast("Your photos are still there. Tap Photo to try again.", 3500);
  },
  async "go-pdf"() {
    keepNote(); const file = S.pdf, note = S.note; closeSheet();
    const nr = await runAI("import", "From " + file.name, async (signal, onStart) => {
      let got; try { got = await readPdf(file); } catch { throw { code: "not_recipe", message: "Couldn't open that PDF. Try a screenshot of the page with Photo instead." }; }
      if (signal.aborted) throw { code: "cancelled" };
      if (!got.text && !got.images.length) throw { code: "not_recipe", message: "That PDF looks empty." };
      return aiRecipe(got.text.length >= 150
        ? { task: "Extract the recipe from this PDF text. If there are several recipes, take the first main one and mention the others in tips.", content: got.text, extra: note }
        : { task: "Read the recipe in these PDF page images. Copy it faithfully.", images: got.images, extra: note }, signal, onStart);
    });
    if (nr) { S.pdf = null; S.note = ""; saveNewRecipe(nr, "PDF", "pdf"); }
  },
  async "go-paste"() {
    const txt = ($("#pastetext").value || "").trim(); keepNote();
    if (!txt) { toast("Paste a recipe first."); return; }
    const stripped = txt.replace(/https?:\/\/\S+/g, "").trim(), link = (txt.match(/https?:\/\/\S+/) || [])[0];
    if (stripped.length < 40 && link) {
      const note = S.note; closeSheet();
      let host = ""; try { host = new URL(link).hostname.replace(/^www\./, ""); } catch {}
      let pageUrl = link, pageImg = "";
      const nr = await runAI("import", "From " + (host || "the link"), async (signal, onStart) => {
        const page = await api("POST", "/api/fetch-url", { url: link });
        if (signal.aborted) throw { code: "cancelled" };
        pageUrl = page.url || link; pageImg = page.image || "";
        return aiRecipe({ task: `Extract the recipe from this ${page.structured ? "recipe data taken from a web page" : "web page or video description"}. Ignore adverts, life stories, comments and links. Copy amounts faithfully. If it's a video with no written amounts, use sensible amounts and say so in tips.${stripped ? " The person also wrote: " + stripped : ""}`, content: (page.title ? "Page title: " + page.title + "\n\n" : "") + page.text, extra: note }, signal, onStart);
      });
      if (nr) { S.note = ""; if (pageImg) nr.photoUrl = pageImg; saveNewRecipe(nr, host || "Link", "link", { url: pageUrl }); } else pasteSheet(txt);
      return;
    }
    if (stripped.length < 40) { toast("That's a bit short. Paste the whole recipe, or a link to it.", 4500); return; }
    const note = S.note; closeSheet();
    const nr = await runAI("import", "From pasted text", (signal, onStart) => aiRecipe({ task: "Extract the recipe from this pasted text. It may be copied from a website or a video description: ignore adverts, life stories, comments and links. Copy amounts faithfully.", content: txt.slice(0, 60000), extra: note }, signal, onStart));
    if (nr) { S.note = ""; saveNewRecipe(nr, "Pasted text", "paste"); } else pasteSheet(txt);
  },
  async "go-invent"() {
    const txt = ($("#invent").value || "").trim();
    if (!txt) { toast("Describe what you'd like to make."); $("#invent").focus(); return; }
    closeSheet(); const k = Store.kitchen();
    const nr = await runAI("invent", txt, (signal, onStart) => aiRecipe({ task: `Create an original, reliable home recipe for: ${txt}. Use realistic quantities and timings. Make it for ${k.people} people unless the request says otherwise.`, fresh: true }, signal, onStart));
    if (nr) saveNewRecipe(nr, "AI", "ai");
  },
  "chat-open"() { openChat(); },
  "chat-clear"() { if (chatCtl) chatCtl.abort(); S.chat = []; lsSet(LS_CHAT, []); paintChat(); },
  async "chat-save"(t) {
    const m = S.chat[Number(t.dataset.n)]; if (!m) return; closeSheet();
    const nr = await runAI("import", "Saving from Ask", (signal, onStart) => aiRecipe({ task: "Turn this recipe suggestion into a full recipe. Keep its ingredients and method.", content: m.content }, signal, onStart));
    if (nr) saveNewRecipe(nr, "Ask", "ai");
  },
  "kw-pick"(t) {
    const w = S.kw, key = (w.single ? [w.single] : kwSteps(w.a))[w.i], v = t.dataset.v;
    if (key === "max") w.a.max = Number(v); else if (key === "people") w.a.people = Number(v); else w.a[key] = v;
    if (key === "heat" && v === "numbers" && w.single) { w.single = false; w.i = 1; w.editHeat = true; render(); return; }
    if (key === "max" && w.editHeat) { w.single = "max"; w.i = 0; }
    t.parentElement.querySelectorAll(".ktile").forEach(b => b.setAttribute("aria-pressed", String(b === t)));
    setTimeout(kwAdvance, 180);
  },
  "kw-gadget"(t) {
    const g = t.dataset.v, a = S.kw.a; a.gadgets = a.gadgets.includes(g) ? a.gadgets.filter(x => x !== g) : [...a.gadgets, g];
    t.setAttribute("aria-pressed", String(a.gadgets.includes(g)));
    const nb = $("#kw-gnext"); if (nb) nb.textContent = a.gadgets.length || a.other.trim() ? "Next" : "I don't have any of these";
  },
  "kw-next"() { if (document.activeElement) document.activeElement.blur(); kwAdvance(); },
  "kw-nothing"() { S.kw.a.avoid = ""; kwAdvance(); },
  "kw-back"() { const w = S.kw; if (w.single || w.i === 0) { S.kw = Store.kitchen().setup ? null : (S.tab = "recipes", null); } else w.i--; render(); window.scrollTo(0, 0); },
  "kw-edit"(t) { S.kw = { a: kitchenForm(Store.kitchen()), i: 0, single: t.dataset.step }; render(); window.scrollTo(0, 0); },
  "kf-save"() { saveKitchen(); },
  "backup-pick"() { $("#f-backup").click(); },
  "auth-toggle"() { S.authMode = S.authMode === "signup" ? "login" : "signup"; render(); },
  "landing-go"() { S.landing = null; render(); },
  signout() { signOut(); },
  "open-library"() { S.tab = "library"; S.lib = S.lib || { q: "", cat: "", results: null }; render(); window.scrollTo(0, 0); loadLibrary(); },
  "lib-cat"(t) { S.lib.cat = t.dataset.f; S.lib.results = null; render(); loadLibrary(); },
  "lib-code"() { openReceive(S.lib.shared.code); },
  "lib-open"(t) { openLibRecipe(t.dataset.id); },
  "lib-add"() { const { recipe, author } = S.sheet; closeSheet(); const c = clone(recipe); delete c.private; saveNewRecipe(c, author ? "@" + author : "the recipe library", "library"); },
  "dish-photo"() { S.dishFor = S.openId; $("#f-dish").click(); }
};
document.addEventListener("click", e => {
  const t = e.target.closest("[data-act]"); if (!t) return;
  if (t.dataset.act === "scrim" && e.target !== t) return;
  const a = A[t.dataset.act]; if (!a) return;
  if (t.tagName !== "INPUT") e.preventDefault();
  if (document.activeElement && document.activeElement !== t && t.tagName !== "INPUT" && $("#view").contains(document.activeElement)) document.activeElement.blur();
  a(t, e);
});
document.addEventListener("change", async e => {
  const t = e.target;
  if (t.id === "f-photo") { fileToPhotos([...t.files]); t.value = ""; if (S.photos.length) photoSheet(); }
  else if (t.id === "f-pdf") { const f = t.files[0]; t.value = ""; if (f) { S.pdf = f; pdfSheet(); } }
  else if (t.id === "f-backup") { const f = t.files[0]; t.value = ""; if (f) importBackup(f); }
  else if (t.id === "f-dish" && S.dishFor && !(S.sheet && S.sheet.kind === "edit")) {
    const f = t.files[0], id = S.dishFor; t.value = ""; S.dishFor = null; if (!f) return;
    try { const photo = await compressImage(f); const r = Store.get(id); if (r) { Store.put(id, Object.assign({}, r, { photo, photoUrl: "", photoCredit: "", photoLink: "" })); toast("Photo added"); } }
    catch { toast("Couldn't open that photo. Try a JPEG or PNG."); }
  }
  else if (t.id === "f-dish") {
    const f = t.files[0]; t.value = ""; if (!f || !S.sheet || S.sheet.kind !== "edit") return;
    try { S.sheet.photo = await compressImage(f); $("#e-pv").innerHTML = `<img src="${S.sheet.photo}" alt="">`; } catch { toast("Couldn't open that photo. Try a JPEG or PNG."); }
  }
});
document.addEventListener("input", e => {
  const t = e.target;
  if (t.id === "q") { S.search = t.value; $("#grid").innerHTML = gridHtml(); }
  else if (t.id === "libq") { S.lib.q = t.value; clearTimeout(libT); libT = setTimeout(loadLibrary, 350); }
  else if (t.id === "chatin" || t.id === "kin") { t.style.height = "auto"; t.style.height = Math.min(120, t.scrollHeight) + "px"; }
  else if (S.kw && (t.id === "kw-other" || t.id === "kw-avoid")) { S.kw.a[t.id.slice(3)] = t.value; const nb = $("#kw-gnext"); if (nb) nb.textContent = S.kw.a.gadgets.length || S.kw.a.other.trim() ? "Next" : "I don't have any of these"; }
});
document.addEventListener("submit", e => {
  e.preventDefault();
  if (e.target.id === "authform") { doAuth(); return; }
  if (e.target.id === "chatform") { if (S.chatBusy) { chatCtl && chatCtl.abort(); return; } sendChat($("#chatin").value); }
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { if ($("#layer").innerHTML) A["sheet-close"](); else if (S.cook) A["cook-x"](); }
  if (S.cook && !$("#layer").innerHTML) {
    const r = Store.get(S.cook.id);
    if (e.key === "ArrowRight" && S.cook.step < r.steps.length - 1) { S.cook.step++; renderCook(); }
    if (e.key === "ArrowLeft" && S.cook.step > 0) { S.cook.step--; renderCook(); }
  }
  if (e.key === "Enter" && e.target.id === "friendcode") { e.preventDefault(); A["friend-go"](); }
  if (e.key === "Enter" && !e.shiftKey && e.target.id === "kin") { e.preventDefault(); kcAnswer(e.target.value); }
  if (e.key === "Enter" && !e.shiftKey && e.target.id === "chatin" && matchMedia("(pointer:fine)").matches) { e.preventDefault(); sendChat(e.target.value); }
  if (e.key === "Enter" && /^kw-/.test(e.target.id)) { e.preventDefault(); e.target.blur(); kwAdvance(); }
});
window.addEventListener("scroll", () => $("#top").classList.toggle("scrolled", window.scrollY > 4), { passive: true });

/* ---------- welcome, accounts and shared links ---------- */
const shareCodeInHash = () => (String(location.hash || "").match(/^#get-([A-Za-z0-9]{6})$/) || [])[1] || "";
function viewAuth() {
  const signup = S.authMode === "signup", keep = S.anonCount;
  const w = (icon, b, t) => `<li><span class="i">${icon}</span><span><b>${b}</b> ${t}</span></li>`;
  return `<div class="auth">
    <div class="authlogo">${I.logo}</div>
    <h1 class="authname">recipe thing<i class="wdot"></i></h1>
    ${signup ? `<p class="authtag">Your recipes in one place, written for your kitchen.</p>
    <ul class="ways">${w(I.camera, "Add recipes", "from a photo, PDF, link or text")}${w(I.magic, "Invent new ones", "with AI")}${w(I.play, "Cook step by step", "with timers and the screen kept on")}${w(I.search, "Find and share", "recipes with everyone using the app")}</ul>` : `<p class="authtag">Welcome back. Sign in to see your recipes.</p>`}
    <form id="authform" class="stack" style="gap:12px" novalidate>
      <h2 class="authh">${signup ? "Make your account" : "Sign in"}</h2>
      ${keep && signup ? `<p class="hint">Your ${keep} recipe${keep === 1 ? "" : "s"} on this phone will be kept.</p>` : ""}
      <div class="field"><label for="au-user">Username</label><input class="input" id="au-user" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="${signup ? "Pick one, e.g. luca" : ""}"></div>
      <div class="field"><label for="au-pass">Password</label><input class="input" id="au-pass" type="password" autocomplete="${signup ? "new-password" : "current-password"}" placeholder="${signup ? "At least 6 letters or numbers" : ""}"></div>
      <p class="autherr" id="autherr" role="alert"></p>
      <button class="btn primary block" type="submit" id="au-go">${signup ? "Create account" : "Sign in"}</button>
    </form>
    <button class="btn ghost" data-act="auth-toggle">${signup ? "I already have an account" : "New here? Make an account"}</button>
  </div>`;
}
function viewLanding() {
  const L = S.landing, d = L.data, n = d.recipes.length;
  return `<div class="auth">
    <div class="authlogo">${I.logo}</div>
    <h1 class="authname">${n === 1 ? "A recipe" : n + " recipes"} for you</h1>
    <p class="authtag">${esc(d.sender || "Someone")} shared ${n === 1 ? "this" : "these"} with you on recipe thing.</p>
    <ul class="pick">${d.recipes.slice(0, 8).map(r => `<li><label><span class="e">${esc(emojiOf(r) || "🍽️")}</span><span><b>${esc(r.title)}</b><small>${esc(CAT1[catOf(r)])}</small></span></label></li>`).join("")}</ul>
    <div class="sharebox"><b style="text-align:center">Have the app on your phone?</b><span class="hint" style="text-align:center">Open it, tap <b>+</b>, then <b>Get recipes from someone</b>, and type:</span><span class="code">${esc(L.code)}</span></div>
    <button class="btn primary block" data-act="landing-go">Open them here instead</button>
    <p class="hint" style="text-align:center">To get the app: in Safari tap Share, then Add to Home Screen.</p>
  </div>`;
}
async function doAuth() {
  const btn = $("#au-go"), err = $("#autherr"), signup = S.authMode === "signup";
  const body = { username: $("#au-user").value.trim(), password: $("#au-pass").value };
  if (!body.username || !body.password) { err.textContent = "Fill in a username and password."; return; }
  btn.disabled = true; err.textContent = "";
  try {
    let keep = [];
    if (S.anon && !signup) { try { keep = (await api("GET", "/api/docs")).docs.filter(d => d.key !== "kitchen").map(d => d.data); } catch {} }
    const r = await api("POST", S.anon && signup ? "/api/claim" : signup ? "/api/signup" : "/api/login", body);
    lsSet("rt-has-account", 1); S.anon = false;
    if (document.activeElement) document.activeElement.blur();
    await signedIn(r.username);
    if (keep.length) { keep.forEach(d => Store.put(newId(), d)); toast(`Added your ${keep.length} recipe${keep.length === 1 ? "" : "s"} from this phone`); }
    else if (signup) toast("Welcome! Your recipe book is ready.");
  } catch (e) { err.textContent = e.message || "Couldn't sign in. Try again."; btn.disabled = false; }
}
async function boot() {
  S.booting = true; S.user = null; render();
  let me = null;
  try { me = await api("GET", "/api/me"); }
  catch (e) {
    if (e.code === "offline") { const last = lsGet("rt-last-user"); S.booting = false; if (last) { S.user = last; render(); Store.load(); } else { render(); toast("You seem to be offline. Check your connection.", 5000); } return; }
  }
  if (me && !me.anonymous) { S.booting = false; signedIn(me.username); return; }
  if (me && me.anonymous) { S.anon = true; try { S.anonCount = (await api("GET", "/api/docs")).docs.filter(d => d.key !== "kitchen").length; } catch {} }
  S.authMode = !S.anon && lsGet("rt-has-account") ? "login" : "signup";
  S.booting = false; render();
}
async function signedIn(name) {
  S.user = name; S.landing = null; lsSet("rt-last-user", name);
  S.tab = "recipes"; S.openId = null;
  render(); window.scrollTo(0, 0);
  await Store.load();
}
let rebooting = false;
function onSignedOut() {
  if (!S.user || rebooting) return;
  rebooting = true; closeSheet(); S.cook = null; renderCook();
  boot().finally(() => { rebooting = false; });
}
async function signOut() {
  try { await api("POST", "/api/logout", {}); } catch {}
  lsSet(Store.cacheKey(), null); lsSet(LS_CHAT, []); lsSet("rt-last-user", null);
  S.chat = []; S.kw = null; S.anon = false; S.anonCount = 0;
  Store.data = { recipes: {}, kitchen: null }; Store.mode = "loading";
  closeSheet(); S.user = null; S.authMode = "login"; render(); window.scrollTo(0, 0);
}
async function importBackup(file) {
  let data; try { data = JSON.parse(await file.text()); } catch { toast("That file isn't a recipe backup."); return; }
  const list = Array.isArray(data) ? data : Array.isArray(data.recipes) ? data.recipes : [];
  const ok = list.filter(r => r && r.title && Array.isArray(r.ingredients) && Array.isArray(r.steps));
  if (!ok.length) { toast("No recipes found in that file."); return; }
  ok.forEach((r, n) => { const c = clone(r); delete c.id; Store.put(newId(), Object.assign(c, { type: "recipe", createdAt: c.createdAt || Date.now() + n })); });
  if (data.kitchen && !Store.kitchen().setup) Store.put("kitchen", data.kitchen);
  S.tab = "recipes"; S.openId = null; render(); window.scrollTo(0, 0);
  toast(`Imported ${ok.length} recipe${ok.length === 1 ? "" : "s"}`);
}

/* ---------- boot ---------- */
boot();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
