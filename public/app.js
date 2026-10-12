"use strict";
/* ---------- icons ---------- */
const I = {
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.7A8 8 0 1 1 21 12z"/><path d="M9 11h.01M12 11h.01M15 11h.01"/></svg>',
  pan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h13a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z"/><path d="M16 13h5M7 8c0-1 1-1.5 1-2.5S7 4 7 3M11 8c0-1 1-1.5 1-2.5S11 4 11 3"/></svg>',
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
const HOBS = { gas: "Gas hob", induction: "Induction hob", electric: "Electric hob", unsure: "Hob" };
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
async function callAI({ messages, images, json, signal, onText, maxTokens }) {
  const imgs = images && images.length ? await Promise.all([...images].slice(0, 4).map(imageForAI)) : [];
  if (signal && signal.aborted) throw { code: "cancelled" };
  let res;
  try {
    res = await fetch("/api/ai", { method: "POST", credentials: "same-origin", signal, headers: { "content-type": "application/json" }, body: JSON.stringify({ messages, images: imgs, json: !!json, maxTokens }) });
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
const sample = async (input, opts = {}) => ({ text: await callAI({ messages: toMessages(input), images: opts.images, signal: opts.signal, onText: opts.onText }), truncated: false });
sample.json = async (input, opts = {}) => {
  const text = await callAI({ messages: toMessages(input), images: opts.images, signal: opts.signal, onText: opts.onText, json: true, maxTokens: 6000 });
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
 "steps": [{"text": string, "minutes": number or null}], "tips": string, "changes": string}
Rules:
- category: "dinner" for any proper meal (breakfast, lunch or dinner mains, soups, big salads); "dessert" for sweet things, cakes and baking; "snack" for snacks, sides, dips, drinks and small bites.
- tags: 2 to 5 lowercase words someone might search for, all clearly true for this recipe: main ingredients, cuisine, type of dish, appliance used (e.g. "chicken", "rice", "portuguese", "curry", "air fryer"). Never vague words like easy, quick, family, healthy, delicious, dinner.
- qty is a plain number (0.5, not "1/2"). unit is one of g, kg, ml, l, tsp, tbsp, cup, oz, lb, pinch, or "" for things you count (then qty is the count: qty 2, unit "", item "eggs").
- group is a section name like "For the sauce" when the recipe has sections, otherwise "".
- steps: one clear action per step, in order, written for this cook's kitchen. minutes is the cooking, baking, resting or waiting time in that step (for a timer), otherwise null.
- tips: 1 or 2 short, genuinely useful sentences (storing, making ahead, an allergy warning), or "" if there is nothing worth saying.
- changes: one sentence on what you adapted for their kitchen or request, or "".
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
    ingredients: ings, steps, tips: String(o.tips || "").trim(), changes: String(o.changes || "").trim()
  };
}
async function aiRecipe({ task, content = "", images, extra = "", fresh = false }, signal, onStart) {
  const prompt = `You turn recipes into clean structured data for a personal recipe-book app.

TASK: ${task}${extra ? `\nExtra request from the cook: ${extra}` : ""}

${kitchenRules(Store.kitchen())}

${SHAPE}${content ? `\n\nCONTENT:\n${content}` : ""}`;
  const opts = { signal, onText: onStart, modelTier: "default" };
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
    $("#view").innerHTML = S.booting ? `<div class="splash">${I.logo}</div>` : viewAuth();
    return;
  }
  renderTop(); renderTabs(); renderFab(); renderSelbar();
  if (editing()) { S.pendingRender = true; return; }
  const v = $("#view");
  if (S.tab === "recipes") v.innerHTML = S.openId ? viewDetail() : viewRecipes();
  else if (S.tab === "add") v.innerHTML = viewAdd();
  else v.innerHTML = viewKitchen();
  paintWake();
}
function renderTop() {
  const r = S.tab === "recipes" && S.openId ? Store.get(S.openId) : null;
  let html;
  if (r) html = `<button class="iconbtn" data-act="close-recipe" aria-label="Back to recipes">${I.back}</button><div class="spacer"></div>`
    + (r.example ? "" : `<button class="iconbtn ${r.fav ? "on" : ""}" data-act="fav" data-id="${r.id}" aria-label="${r.fav ? "Remove from favourites" : "Add to favourites"}">${I.heart}</button><button class="iconbtn" data-act="edit" data-id="${r.id}" aria-label="Edit recipe">${I.edit}</button>`);
  else if (S.selecting) html = `<div class="brand"><h1 class="tnum">${S.selected.size ? S.selected.size + " selected" : "Pick recipes to share"}</h1></div><div class="spacer"></div><button class="textbtn" data-act="sel-cancel">Cancel</button>`;
  else html = `<div class="wm">${I.logo}<span>recipe thing<i class="wdot"></i></span></div><div class="spacer"></div>`
    + (S.tab === "recipes" && Store.recipes().length ? `<button class="iconbtn" data-act="sel-start" aria-label="Share recipes">${I.share}</button>` : "");
  $("#topin").innerHTML = html;
}
function renderTabs() {
  const cur = S.tab;
  $("#tabs").innerHTML = `<button class="tab" data-act="tab" data-tab="recipes" ${cur === "recipes" ? 'aria-current="page"' : ""}>${I.book}<span>Recipes</span></button>
    <button class="tab add" data-act="tab" data-tab="add" aria-label="Add a recipe" ${cur === "add" ? 'aria-current="page"' : ""}><span class="plus">${I.plus}</span></button>
    <button class="tab" data-act="tab" data-tab="kitchen" ${cur === "kitchen" ? 'aria-current="page"' : ""}>${I.pan}<span>Kitchen</span></button>`;
}
function renderFab() {
  const f = $("#fab");
  f.hidden = S.chatOpen || S.selecting || !!S.cook || !!S.q || (S.tab === "kitchen" && (!Store.kitchen().setup || !!S.kc));
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
function card(r) {
  const meta = [mins(totalMins(r)), r.servings ? "Serves " + r.servings : ""].filter(Boolean).join(" · ");
  const sel = S.selecting && S.selected.has(r.id);
  return `<button class="card ${sel ? "sel" : ""}" data-act="open" data-id="${esc(r.id)}" ${S.selecting ? `aria-pressed="${sel}"` : ""}>
    <div class="thumb cat-${catOf(r)}">${r.photo ? `<img src="${esc(r.photo)}" alt="" loading="lazy">` : artHtml(r)}
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
  if (!all.length) return `<div class="grid">${card(EXAMPLE)}</div><div class="empty"><h3>Your recipe book is empty</h3><p>Snap a cookbook page, import a PDF, paste a recipe or let the AI invent one. The example shows how recipes look.</p><button class="btn primary" data-act="tab" data-tab="add">${I.plus} Add your first recipe</button></div>`;
  const list = filtered();
  if (!list.length) return `<div class="empty"><h3>${S.filter === "fav" && !S.search ? "No favourites yet" : "No matches"}</h3><p>${S.filter === "fav" && !S.search ? "Tap the heart on a recipe to keep it here." : "Try another word, or ask the cook to invent a recipe for it."}</p><button class="btn" data-act="clear-filters">Show all recipes</button></div>`;
  return `<div class="grid">${list.map(card).join("")}</div>`;
}
function viewRecipes() {
  const k = Store.kitchen(), all = Store.recipes();
  const f = (id, l) => `<button class="chip" data-act="filter" data-f="${id}" aria-pressed="${S.filter === id}">${l}</button>`;
  return `<div class="wrap stack" style="padding-block:6px 0">
    ${S.selecting ? "" : `<header class="pagehead"><h1>What are we <em>cooking?</em></h1>${all.length ? `<p class="tnum">${all.length} recipe${all.length === 1 ? "" : "s"} in your book</p>` : ""}</header>`}
    ${!k.setup && Store.mode !== "loading" && !S.selecting ? `<button class="banner slim" data-act="tab" data-tab="kitchen"><span class="b-ico">${I.pan}</span><span class="b-txt"><b>Set up your kitchen</b><p>So recipes use your hob numbers and appliances</p></span><span class="chev">${I.chev}</span></button>` : ""}
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
    ${r.photo ? `<img class="dish" src="${esc(r.photo)}" alt="${esc(r.title)}">` : ""}
    <section class="hero">
      <div class="toprow"><span class="cat">${esc(r.example ? "Example" : CAT1[catOf(r)])}</span>${!r.photo && emojiOf(r) ? `<span class="hemo" aria-hidden="true">${esc(emojiOf(r))}</span>` : ""}</div>
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
      ${row("add-manual", I.pen, "Write it myself", "Type in a family recipe")}
      ${row("get-friend", I.share, "Get recipes from someone", "Type the code they sent you")}
    </div>
  </div>`;
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

/* ---------- kitchen ---------- */
const Q_STEPS = 7;
function answersFrom(k) {
  const u = unitsOf(k), oldHob = String(k.hob || k.stoveType || "").toLowerCase();
  return {
    appliancesText: k.appliancesText || oldAppliancesText(k),
    hobType: k.hobType || (/induct/.test(oldHob) ? "induction" : /gas/.test(oldHob) ? "gas" : /electric|ceramic/.test(oldHob) ? "electric" : ""),
    hobModel: k.hobModel || "", dial: k.dial === "none" || k.dial === "unsure" ? k.dial : "numbers", max: Number(k.stoveMax) || 9,
    ovenType: k.ovenType || (k.setup ? ovenType(k) : ""), weight: u.weight, liquid: u.liquid, spoons: u.spoons, people: k.people || 2, avoid: k.avoid || "" };
}
const STALE_KEYS = ["appliancesText", "hobType", "hobModel", "dial", "max"];
function startQuestions() {
  S.q = { view: "step", mode: "quiz", steps: [0, 1, 2, 3, 4, 5, 6], i: 0, a: answersFrom(Store.kitchen()), profile: null, stale: true };
  render(); window.scrollTo(0, 0);
}
function startReview() {
  const k = Store.kitchen();
  S.q = { view: "review", mode: "review", steps: [], i: 0, a: answersFrom(k), profile: k.profile || null, stale: !k.profile };
  render(); window.scrollTo(0, 0);
}
function draftKitchen() {
  const a = S.q.a;
  return { type: "kitchen", setup: true, appliancesText: a.appliancesText.trim(), hobType: a.hobType || "unsure", hobModel: a.hobModel.trim(), dial: a.dial || "unsure", stoveMax: a.dial === "numbers" ? a.max : null,
    ovenType: a.ovenType || "unsure", weight: a.weight, liquid: a.liquid, spoons: a.spoons, people: a.people, avoid: a.avoid.trim(), profile: S.q.stale ? null : S.q.profile };
}
async function parseKitchen(text, label) {
  const prompt = `Read how someone describes their kitchen and fill in this JSON for a cooking app. Only fill in what they said or what clearly follows from it; use null for anything they didn't mention.
DESCRIPTION: """${text.slice(0, 4000)}"""
Reply with ONLY this JSON:
{"appliancesText": "their appliances besides the hob and oven, as a short plain list, or null",
 "appliances": [{"name": "short name, e.g. Ninja Speedi", "uses": "what it can do, under 12 words"}],
 "hobType": "gas" | "induction" | "electric" | null,
 "hobModel": "brand or model, or null",
 "dial": "numbers" | "none" | null,
 "stoveMax": highest number on the hob controls, or null,
 "heat": {"low": "", "mediumLow": "", "medium": "", "mediumHigh": "", "high": ""} or null,
 "ovenType": "fan" | "conventional" | "gas" | "none" | null,
 "weight": "g" | "oz" | null, "liquid": "ml" | "cup" | null, "spoons": true | false | null,
 "people": number or null, "avoid": "allergies or foods they won't eat, or null"}
Rules: one appliance entry per separate machine; a multi-cooker is ONE entry listing everything it does (a "Ninja Speedi" air fries, steams, bakes, slow cooks and makes one-pot "rapid" meals with grains and protein together). Recognise brand names. A ceramic or glass hob with rings that glow is "electric". "heat" only when dial is "numbers" and you know stoveMax: each value is the number to use, as text, suited to that hob type (induction heats fast, so medium sits lower). A gas hob usually has no numbers unless they say so.`;
  const o = await runAI("kitchen", label || "Reading your kitchen", (signal, onStart) => AI.fn.json(prompt, { signal, onText: onStart, modelTier: "default", cache: false }));
  return o && typeof o === "object" && !Array.isArray(o) ? o : null;
}
function applyParsed(o) {
  const a = answersFrom({}), pick = (v, ok) => v != null && v !== "" && (!ok || ok.includes(v));
  if (pick(o.appliancesText)) a.appliancesText = String(o.appliancesText);
  if (pick(o.hobType, ["gas", "induction", "electric"])) a.hobType = o.hobType;
  if (pick(o.hobModel)) a.hobModel = String(o.hobModel);
  a.dial = pick(o.dial, ["numbers", "none"]) ? o.dial : "";
  if (Number(o.stoveMax) > 1) a.max = Math.min(20, Math.round(Number(o.stoveMax)));
  if (pick(o.ovenType, ["fan", "conventional", "gas", "none"])) a.ovenType = o.ovenType;
  if (pick(o.weight, ["g", "oz"])) a.weight = o.weight;
  if (pick(o.liquid, ["ml", "cup"])) a.liquid = o.liquid;
  if (typeof o.spoons === "boolean") a.spoons = o.spoons;
  if (Number(o.people) > 0) a.people = Math.min(20, Math.round(Number(o.people)));
  if (pick(o.avoid) && !/^(none|nothing|no)$/i.test(o.avoid)) a.avoid = String(o.avoid);
  const missing = [];
  if (!pick(o.hobType, ["gas", "induction", "electric"])) missing.push(1);
  if (!pick(o.dial, ["numbers", "none"]) || (o.dial === "numbers" && !(Number(o.stoveMax) > 1))) missing.push(2);
  if (!pick(o.ovenType, ["fan", "conventional", "gas", "none"])) missing.push(3);
  let profile = null;
  try { profile = normProfile({ appliances: o.appliances, hob: "", heat: o.heat && o.dial === "numbers" ? Object.assign({ numbered: true }, o.heat) : null }); } catch {}
  const stale = !profile || missing.includes(1) || missing.includes(2) || (!profile.heat && a.dial === "numbers");
  return { a, missing, profile, stale };
}

/* ---------- kitchen setup chat ---------- */
const KQ = {
  appliances: { q: "First up: what appliances do you have, besides the hob and oven?", help: "Brands are fine. If one machine does lots of jobs, like a Ninja Speedi, just say so.", multi: true,
    chips: ["Air fryer", "Microwave", "Food processor", "Stand mixer", "Hand mixer", "Blender", "Slow cooker", "Pressure cooker"], none: "None of these" },
  hob: { q: "What kind of hob do you have?", help: "The top part where the pans go.", chips: [["Gas", "gas"], ["Induction", "induction"], ["Electric (glass or rings)", "electric"], ["Not sure", "unsure"]] },
  dial: { q: "How do you set the heat on it?", help: "If it has numbers, recipes can tell you exactly what to turn it to.", chips: [["Numbers 1 to 9", "n9"], ["Numbers 1 to 6", "n6"], ["Numbers 1 to 12", "n12"], ["No numbers", "none"], ["Not sure", "unsure"]] },
  oven: { q: "And your oven?", help: "A gas hob doesn't always mean a gas oven. If you light the oven with a flame, it's gas.", chips: [["Fan oven", "fan"], ["Conventional, no fan", "conventional"], ["Gas oven", "gas"], ["Not sure", "unsure"], ["No oven", "none"]] },
  measure: { q: "How do you like to measure things?", chips: [["Grams, ml and spoons", "gms"], ["Grams and ml, no spoons", "gm"], ["Cups and ounces", "us"]] },
  people: { q: "How many people do you usually cook for?", chips: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"]] },
  avoid: { q: "Last one: anything you can't or won't eat?", help: "Allergies, or foods you just don't like.", chips: [["Nothing", "nothing"]] }
};
const KQ_ORDER = ["appliances", "hob", "dial", "oven", "measure", "people", "avoid"];
const KQ_AGAIN = { 1: "hob", 2: "dial", 3: "oven" };
function startKChat() {
  S.kc = { msgs: [{ from: "bot", text: "Hi! A few quick questions about your kitchen, so every recipe gets written for what you actually have." }], queue: [...KQ_ORDER], answers: {}, asked: {}, picks: [], busy: false };
  askNext();
}
function askNext() {
  const c = S.kc, key = c.queue[0]; if (!key) return;
  c.asked[key] = (c.asked[key] || 0) + 1;
  c.msgs.push({ from: "bot", text: c.asked[key] > 1 ? "Sorry, I didn't quite catch that one. " + KQ[key].q : KQ[key].q, help: KQ[key].help });
  c.picks = [];
}
function kchipsHtml() {
  const c = S.kc; if (!c || c.busy || !c.queue.length) return "";
  const q = KQ[c.queue[0]];
  if (q.multi) return q.chips.map(t => `<button class="chip" data-act="kc-tog" data-v="${esc(t)}" aria-pressed="${c.picks.includes(t)}">${esc(t)}</button>`).join("") + `<button class="chip" data-act="kc-send" data-v="none" data-t="${esc(q.none)}">${esc(q.none)}</button>`;
  return q.chips.map(([t, v]) => `<button class="chip" data-act="kc-send" data-v="${esc(v)}" data-t="${esc(t)}">${esc(t)}</button>`).join("");
}
function kmsgsHtml() {
  const c = S.kc;
  return c.msgs.map(m => m.from === "bot"
    ? `<div class="kmsg bot"><span class="kav">${I.logo}</span><div class="bub">${esc(m.text)}${m.help ? `<small>${esc(m.help)}</small>` : ""}</div></div>`
    : `<div class="kmsg me"><div class="bub">${esc(m.text)}</div></div>`).join("")
    + (c.busy ? `<div class="kmsg bot"><span class="kav">${I.logo}</span><div class="bub typing"><i></i><i></i><i></i></div></div>` : "");
}
function viewKChat() {
  const c = S.kc;
  return `<div class="wrap stack" style="padding-block:6px 0">
    <header class="pagehead"><h1>My <em>kitchen</em></h1></header>
    <div class="kmsgs" id="kmsgs">${kmsgsHtml()}</div>
    <div class="chips wrapit kchips" id="kchips">${kchipsHtml()}</div>
    <form class="chatform kform" id="kform"><textarea id="kin" rows="1" placeholder="Type your answer…" aria-label="Your answer"></textarea><button class="send" type="submit" aria-label="Send">${I.send}</button></form>
  </div>`;
}
function paintKChat() {
  if (!S.kc || !$("#kmsgs")) { render(); return; }
  $("#kmsgs").innerHTML = kmsgsHtml(); $("#kchips").innerHTML = kchipsHtml();
  const kin = $("#kin"); if (kin) kin.disabled = !!S.kc.busy;
  requestAnimationFrame(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
}
async function kcAnswer(text, value) {
  const c = S.kc; text = String(text || "").trim();
  if (!c || c.busy || !text || !c.queue.length) return;
  const key = c.queue.shift();
  c.msgs.push({ from: "me", text }); c.answers[key] = { text, value: value || null };
  const kin = $("#kin"); if (kin && !value) { kin.value = ""; kin.style.height = ""; }
  if (c.queue.length) { askNext(); paintKChat(); return; }
  c.busy = true; paintKChat();
  const transcript = KQ_ORDER.filter(k => c.answers[k]).map(k => `Q: ${KQ[k].q}\nA: ${c.answers[k].text}`).join("\n");
  const o = AI.fn ? await parseKitchen(transcript, "Putting your kitchen together") : null;
  if (!S.kc) return;
  c.busy = false;
  const res = applyParsed(o || {});
  applyChips(res.a, c.answers);
  const still = [];
  if (!res.a.hobType) still.push(1);
  if (!res.a.dial) still.push(2);
  if (!res.a.ovenType) still.push(3);
  const again = still.map(n => KQ_AGAIN[n]).filter(k => (c.asked[k] || 0) < 2);
  if (again.length && o) { c.queue = again; askNext(); paintKChat(); return; }
  const chipHeat = c.answers.dial && c.answers.dial.value;
  if (chipHeat || (c.answers.hob && c.answers.hob.value)) res.stale = true;
  S.kc = null; if (document.activeElement) document.activeElement.blur();
  S.q = { view: "review", mode: "review", steps: [], i: 0, a: res.a, profile: res.profile, stale: res.stale || !o };
  render(); window.scrollTo(0, 0);
}
function applyChips(a, ans) {
  const v = k => ans[k] && ans[k].value;
  if (ans.appliances) { if (v("appliances") === "none") a.appliancesText = ""; else if (!a.appliancesText) a.appliancesText = ans.appliances.text; }
  if (v("hob")) a.hobType = v("hob") === "unsure" ? "unsure" : v("hob");
  const d = v("dial"); if (d) { if (d[0] === "n" && d !== "none") { a.dial = "numbers"; a.max = Number(d.slice(1)); } else a.dial = d; }
  if (v("oven")) a.ovenType = v("oven");
  const m = v("measure"); if (m) Object.assign(a, m === "us" ? { weight: "oz", liquid: "cup", spoons: true } : { weight: "g", liquid: "ml", spoons: m === "gms" });
  if (v("people")) a.people = Number(v("people"));
  if (v("avoid") === "nothing") a.avoid = "";
  else if (ans.avoid && !a.avoid && !/^(no|none|nothing|nope|nada)\.?$/i.test(ans.avoid.text)) a.avoid = ans.avoid.text;
}
function viewQuestion() {
  const a = S.q.a, step = S.q.steps[S.q.i];
  const choice = (key, v, title, sub) => `<button class="choice" data-act="kq-pick" data-key="${key}" data-v="${v}" aria-pressed="${String(a[key]) === String(v)}"><span class="rad"></span><span>${title}${sub ? `<small>${sub}</small>` : ""}</span></button>`;
  const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([v, l]) => `<button data-act="kq-pick" data-key="${key}" data-v="${v}" aria-pressed="${String(a[key]) === String(v)}">${l}</button>`).join("")}</div>`;
  let h = "", body = "";
  if (step === 0) {
    h = `<h2 class="qh">What appliances do you have?</h2><p class="hint">Not counting the hob and oven. Do you have an air fryer, microwave, food processor, mixer, blender, slow cooker or pressure cooker? Tell us in your own words, including brands. If one machine does several jobs, just say so.</p>`;
    body = `<textarea class="input" id="kq-appliancesText" rows="4" placeholder="e.g. A Ninja Speedi, which air fries, steams and slow cooks. Also a microwave and a hand mixer.">${esc(a.appliancesText)}</textarea>
      <div class="field"><span class="hint">Or tap to add:</span><div class="chips wrapit">${APPL_CHIPS.map(c => `<button class="chip" data-act="kq-add" data-v="${c}">${I.plus.replace("<svg", '<svg style="width:14px;height:14px"')} ${c}</button>`).join("")}</div></div>`;
  } else if (step === 1) {
    h = `<h2 class="qh">What kind of hob do you have?</h2><p class="hint">The hob is the top part where you put pans.</p>`;
    body = `<div class="choices">${choice("hobType", "gas", "Gas", "You cook over real flames")}${choice("hobType", "induction", "Induction", "Flat black glass that only heats pans, and heats up very fast")}${choice("hobType", "electric", "Electric", "Glass top with rings that glow red (sometimes called ceramic), or metal plates")}${choice("hobType", "unsure", "Not sure")}</div>
      <div class="field"><label for="kq-hobModel">Brand or model <span class="muted">(optional)</span></label><input class="input" id="kq-hobModel" value="${esc(a.hobModel)}" placeholder="e.g. Bosch" autocomplete="off"></div>`;
  } else if (step === 2) {
    h = `<h2 class="qh">How do you set the heat on your hob?</h2><p class="hint">So recipes can tell you exactly what to turn it to, like “fry on 6”.</p>`;
    body = `<div class="choices">${choice("dial", "numbers", "Numbers", "A dial or touch buttons, like 1 to 9")}${choice("dial", "none", "No numbers", "A knob you turn between small and big flame")}${choice("dial", "unsure", "Not sure")}</div>
      ${a.dial === "numbers" ? `<div class="field"><span class="label">What's the highest number?</span><div class="chips wrapit">${[6, 9, 10, 12, 15].map(n => `<button class="chip tnum" data-act="kq-pick" data-key="max" data-v="${n}" aria-pressed="${a.max === n}">${n}</button>`).join("")}</div><span class="hint">We work out which numbers mean low, medium and high for your hob.</span></div>` : ""}`;
  } else if (step === 3) {
    h = `<h2 class="qh">What kind of oven do you have?</h2><p class="hint">A gas hob doesn't always mean a gas oven. If you light the oven with a flame, it's gas.</p>`;
    body = `<div class="choices">${choice("ovenType", "fan", "Fan oven", "Has a fan at the back, and a fan symbol on the dial")}${choice("ovenType", "conventional", "Conventional", "Electric with no fan, heats from the top and bottom")}${choice("ovenType", "gas", "Gas oven", "Has a flame inside and a gas mark dial")}${choice("ovenType", "unsure", "Not sure", "Recipes will give the temperature for both")}${choice("ovenType", "none", "No oven")}</div>`;
  } else if (step === 4) {
    h = `<h2 class="qh">How do you like to measure?</h2>`;
    body = `<div class="field"><span class="label">Weight</span>${seg("weight", [["g", "Grams"], ["oz", "Ounces"]])}</div>
      <div class="field"><span class="label">Liquids</span>${seg("liquid", [["ml", "Millilitres"], ["cup", "Cups"]])}</div>
      <div class="field"><span class="label">Teaspoons and tablespoons for small amounts?</span>${seg("spoons", [["true", "Yes"], ["false", "No"]])}<span class="hint">Like 1 tsp salt or 2 tbsp oil.</span></div>`;
  } else if (step === 5) {
    h = `<h2 class="qh">How many people do you usually cook for?</h2><p class="hint">New recipes start at this number. You can always change servings on a recipe.</p>`;
    body = `<div class="bignum"><button data-act="kq-people" data-d="-1" aria-label="Fewer">−</button><span class="tnum">${a.people}</span><button data-act="kq-people" data-d="1" aria-label="More">+</button></div>`;
  } else {
    h = `<h2 class="qh">Anything you can't or won't eat?</h2><p class="hint">Allergies or foods you don't like. Leave it empty if there's nothing.</p>`;
    body = `<input class="input" id="kq-avoid" value="${esc(a.avoid)}" placeholder="e.g. nuts, mushrooms" autocomplete="off">`;
  }
  const n = S.q.steps.length, i = S.q.i, edit = S.q.mode === "edit";
  return `<div class="wrap stack" style="padding-block:8px 0">
    ${edit ? "" : `<div class="qprog" aria-hidden="true"><i style="width:${((i + 1) / n) * 100}%"></i></div>
    <span class="eyebrow tnum">${S.q.mode === "follow" ? (n === 1 ? "One quick question" : `Just ${n} quick questions · ${i + 1} of ${n}`) : `Question ${i + 1} of ${n}`}</span>`}
    ${h}${body}
    <div class="qnav"><button class="btn" data-act="kq-back">${edit || i === 0 ? "Cancel" : "Back"}</button><button class="btn primary" data-act="kq-next">${edit ? "Done" : i === n - 1 ? (S.q.mode === "quiz" ? "Next" : "Next") : "Next"}</button></div>
  </div>`;
}
function reviewHtml() {
  const k = draftKitchen(), h = heatOf(k), u = unitsOf(k), apps = applianceList(k);
  const row = (step, label, value, extra = "") => `<button class="rv" data-act="kq-edit" data-step="${step}"><span class="tx"><span class="eyebrow">${label}</span><b>${value}</b>${extra}</span><span class="chg">Change</span></button>`;
  return `<div class="wrap stack" style="padding-block:6px 0">
    <header class="pagehead"><h1>Your <em>kitchen</em></h1><p>${S.q.mode === "review" && Store.kitchen().setup ? "Tap anything to change it." : "Check this looks right. Tap anything to change it."}</p></header>
    <div class="rvlist">
      ${row(0, "Appliances", apps.length ? esc(apps.map(x => x.name).join(", ")) : "Just the hob and oven", apps.some(x => x.uses) ? `<small>${esc(apps.filter(x => x.uses).map(x => x.name + ": " + x.uses).join(" · "))}</small>` : "")}
      ${row(1, "Hob", esc(HOBS[k.hobType] + (k.hobModel ? ", " + k.hobModel : "")))}
      ${row(2, "Hob heat", h.numbered ? `Numbers 1 to ${k.stoveMax}` : "No numbers", h.numbered ? `<div class="heat tnum"><span>Low <b>${esc(h.low)}</b></span><span>Medium <b>${esc(h.medium)}</b></span><span>High <b>${esc(h.high)}</b></span></div>` : "")}
      ${row(3, "Oven", esc(OVENS[k.ovenType]))}
      ${row(4, "Measurements", `${u.weight === "oz" ? "Ounces" : "Grams"}, ${u.liquid === "cup" ? "cups" : "millilitres"}${u.spoons ? ", tsp and tbsp" : ""}`)}
      ${row(5, "Cooking for", `${k.people} ${k.people === 1 ? "person" : "people"}`)}
      ${row(6, "Avoid", esc(k.avoid || "Nothing"))}
    </div>
    <div class="btnrow"><button class="btn" data-act="kq-cancel">Cancel</button><button class="btn primary" data-act="kq-save">Save my kitchen</button></div>
  </div>`;
}
function viewKitchen() {
  if (S.q && S.q.view === "review") return reviewHtml();
  if (S.q) return viewQuestion();
  const k = Store.kitchen();
  if (!k.setup && AI.fn) { if (!S.kc) startKChat(); return viewKChat(); }
  if (!k.setup) {
    if (AI.ready && !AI.fn) return `<div class="wrap stack" style="padding-block:8px 0"><header class="pagehead"><h1>My <em>kitchen</em></h1><p>A few quick questions so recipes are written for your kitchen.</p></header><button class="btn primary block" data-act="kq-start">Start</button></div>`;
    return `<div class="wrap stack" style="padding-block:8px 0">
    <header class="pagehead"><h1>My <em>kitchen</em></h1><p>Tell us about it in your own words, like you'd tell a friend. Recipes then get written for exactly what you have.</p></header>
    <textarea class="input kd" id="kd-text" rows="7" placeholder="e.g. I have a gas hob, the knobs don't have numbers. A fan oven. A Ninja Speedi that air fries and slow cooks, and a hand mixer. I like grams and ml but also teaspoons. Usually cooking for 4, no mushrooms.">${esc(S.kdText || "")}</textarea>
    <div class="mention"><span class="eyebrow">Try to mention</span><ul><li>Your appliances, brands are fine</li><li>Your hob, and if the heat has numbers</li><li>Your oven</li><li>How you measure, how many you cook for, and anything you avoid</li></ul></div>
    <button class="btn primary block" data-act="kd-go">${I.magic} Set up my kitchen</button>
    <button class="btn ghost" data-act="kq-start" style="align-self:center">Answer questions one by one instead</button>
  </div>`;
  }
  const h = heatOf(k), apps = applianceList(k), u = unitsOf(k), n = Store.recipes().length;
  return `<div class="wrap stack" style="padding-block:6px 0">
    <header class="pagehead"><h1>My <em>kitchen</em></h1><p>Every recipe gets written for this.</p></header>
    <section class="panel"><dl class="sum">
      <div><dt>Appliances</dt><dd>${apps.length ? apps.map(a => `<span style="display:block">${esc(a.name)}${a.uses ? `<small>${esc(a.uses)}</small>` : ""}</span>`).join("") : "Just the hob and oven"}</dd></div>
      <div><dt>Hob</dt><dd>${esc(hobDesc(k) || "Not set")}${h.numbered ? `<div class="heat tnum"><span>Low <b>${esc(h.low)}</b></span><span>Medium <b>${esc(h.medium)}</b></span><span>High <b>${esc(h.high)}</b></span></div>` : `<small>No numbers, so recipes say low, medium or high heat</small>`}</dd></div>
      <div><dt>Oven</dt><dd>${esc(OVENS[ovenType(k)])}</dd></div>
      <div><dt>Measurements</dt><dd>${u.weight === "oz" ? "Ounces" : "Grams"}, ${u.liquid === "cup" ? "cups" : "millilitres"}${u.spoons ? ", teaspoons and tablespoons" : ""}</dd></div>
      <div><dt>Usually cooking for</dt><dd class="tnum">${k.people} ${k.people === 1 ? "person" : "people"}</dd></div>
      <div><dt>Avoid</dt><dd>${esc(k.avoid || "Nothing")}</dd></div>
    </dl></section>
    <button class="btn block" data-act="kq-review">${I.edit} Change something</button>
    <button class="btn ghost" data-act="kreset-ask" style="align-self:center">Start again from scratch</button>
    <section class="panel"><b>Your account</b><p class="hint">Signed in as <b>${esc(S.user || "")}</b>. Your recipes are saved to your account, so they're on any phone you sign in on.</p>
      <div class="btnrow"><button class="btn" data-act="backup-pick">${I.pdf} Import a backup</button><button class="btn" data-act="signout">Sign out</button></div></section>
    ${n ? `<section class="panel"><b>Update my recipes</b><p class="hint">Rewrite the method of all ${n} recipe${n === 1 ? "" : "s"} for this kitchen: your hob numbers, oven, appliances and measurements. The dishes stay the same.</p><button class="btn primary block" data-act="update-all-ask">${I.magic} Update all ${n} recipe${n === 1 ? "" : "s"}</button></section>` : ""}
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
  const a = S.q.a, base = draftKitchen();
  if (AI.fn && (S.q.stale || !S.q.profile)) {
    const prompt = `You're setting up a cooking app's kitchen profile from someone's answers. Work out what their equipment can do so recipes can be written for it.
ANSWERS:
- Appliances besides hob and oven, in their words: "${base.appliancesText || "none"}"
- Hob type: ${HOBS[base.hobType]}${base.hobModel ? " (" + base.hobModel + ")" : ""}
- How they set hob heat: ${a.dial === "numbers" ? "numbers 1 to " + a.max : a.dial === "none" ? "no numbers" : "not sure"}
Reply with ONLY this JSON:
{"appliances": [{"name": "short name, e.g. Ninja Speedi", "uses": "what it can do, under 12 words"}],
 "hob": "short plain description, e.g. Induction hob, 1 to 9",
 "heat": {"numbered": true or false, "low": "", "mediumLow": "", "medium": "", "mediumHigh": "", "high": ""}}
Rules: one entry per separate machine they mention (a multi-cooker is ONE entry listing everything it does; a "Ninja Speedi" air fries, steams, bakes, slow cooks and makes one-pot "rapid" meals with grains and protein together). Recognise brand and model names; if unsure what something is, give your best guess. Empty list if they have none. For numbers, each heat value is just the number to use, as text (e.g. "3"), chosen for that type of hob (induction gets hot fast, so medium sits lower). With no numbers or not sure, use short words like "low flame" or "medium heat" and set numbered to false.`;
    const prof = await runAI("kitchen", "Saving your kitchen", (signal, onStart) => AI.fn.json(prompt, { signal, onText: onStart, modelTier: "quick", cache: false }).then(normProfile));
    if (prof) base.profile = prof;
  }
  if (base.profile && base.profile.heat && base.dial !== "numbers") base.profile.heat.numbered = false;
  const first = !Store.kitchen().setup;
  Store.put("kitchen", base); S.q = null; S.kdText = ""; render(); window.scrollTo(0, 0);
  toast(first ? "Kitchen saved. New recipes will be written for it." : "Kitchen updated");
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
  S.sheet = { kind: "edit", id: isNew ? null : r.id, cat: catOf(r), photo: r.photo || "" };
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
    title, category: S.sheet.cat, photo: S.sheet.photo || "", servings: n($("#e-serv").value) || 1, prepMinutes: n($("#e-prep").value), cookMinutes: n($("#e-cook").value), ingredients, steps
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
  S.sheet = { kind: "share", ids: rs.map(r => r.id) };
  const canApp = !!S.user;
  openSheet(`<h2>${rs.length === 1 ? "Share “" + esc(rs[0].title) + "”" : "Share " + rs.length + " recipes"}</h2>
    ${rs.length > 1 ? `<p class="hint">${esc(rs.map(r => r.title).join(", "))}</p>` : ""}
    <div id="sharebody" class="stack" style="gap:10px">
    ${canApp ? `<button class="btn primary block" data-act="share-app">${I.book} Send to someone's app</button><p class="hint" style="margin-top:-4px">They get the recipes straight into their own recipe book.</p>` : ""}
    ${AI.dl ? `<button class="btn ${canApp ? "" : "primary "}block" data-act="share-pdf">${I.pdf} Send as PDF</button>` : ""}
    <button class="btn block" data-act="share-copy">${I.copy} Copy as text</button>
    </div>`);
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
function chatRules(ctx) {
  const k = Store.kitchen(), rs = Store.recipes();
  let lib = "", used = 0;
  for (const r of rs) { const t = recipeText(r); if (used + t.length < 90000) { lib += "\n\n" + t; used += t.length; } else lib += `\n\n${r.title} (${CAT1[catOf(r)]}; ingredients: ${r.ingredients.map(i => i.item).join(", ")})`; }
  return `You are the cooking helper inside "The Recipe Thing", someone's personal recipe-book app on their phone. Answer like a friendly, practical cook: short and specific, a few sentences or a short "- " list. No headings, no tables. When you mention a recipe from their book, use its exact name. Give hob heat with their dial numbers and use their appliances where it helps.

${kitchenRules(k)}

THEIR RECIPE BOOK (${rs.length} recipe${rs.length === 1 ? "" : "s"}):${lib || "\n(empty so far)"}
${ctx && ctx.r ? `\nRIGHT NOW THEY ARE LOOKING AT THIS RECIPE${ctx.step != null ? " IN COOKING MODE" : ""} (scaled to ${Math.round(ctx.r.servings * ctx.f)} servings). If they say "this", "it" or "this step", they mean this:\n${recipeText(ctx.r, ctx.f, { step: ctx.step })}\n` : ctx && ctx.kitchen ? "\nRIGHT NOW THEY ARE LOOKING AT THEIR KITCHEN SETTINGS.\n" : ""}
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
    const { text: out } = await AI.fn([{ role: "user", content: chatRules(ctx) }, ...hist], {
      cache: false, signal: chatCtl.signal, modelTier: "default",
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
    if (S.tab !== "kitchen") S.q = null;
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
  async "share-app"(t) {
    const rs = S.sheet.ids.map(id => Store.get(id)).filter(Boolean);
    t.disabled = true; t.innerHTML = `<span class="spin" style="width:20px;height:20px" aria-hidden="true"></span> Making a code…`;
    let code; try { code = await createShare(rs); } catch (e) { if (e && e.code === "signed_out") return; t.disabled = false; t.innerHTML = `${I.book} Send to someone's app`; toast("Couldn't create a code. Check your connection and try again."); return; }
    const link = APP_URL + "#get-" + code;
    S.sheet.link = link; S.sheet.code = code;
    $("#sharebody").innerHTML = `<div class="sharebox"><span class="label">Send them this link</span><span class="linkline">${esc(link)}</span>
      <button class="btn primary block" data-act="copy-link">${I.copy} Copy link</button>
      <span class="hint" style="text-align:center">or they can type this code in Add → Get recipes from someone</span><span class="code">${code}</span></div>
      <p class="hint">If they're new, the link asks them to make a free account first, then the recipes appear.</p><button class="btn block" data-act="sheet-close">Done</button>`;
    if (S.selecting) { S.selecting = false; S.selected.clear(); render(); }
  },
  "copy-link"() { navigator.clipboard.writeText(S.sheet.link).then(() => toast("Link copied. Paste it into a message.")).catch(() => toast("Couldn't copy here. Press and hold the link to copy it.")); },
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
  "kq-add"(t) {
    const ta = $("#kq-appliancesText"), v = t.dataset.v, cur = ta.value.trim();
    if (new RegExp("\\b" + v + "\\b", "i").test(cur)) return;
    ta.value = cur ? cur.replace(/[.,\s]*$/, "") + ", " + v.toLowerCase() : v;
    S.q.a.appliancesText = ta.value; S.q.stale = true; t.setAttribute("aria-pressed", "true");
  },
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
      let pageUrl = link;
      const nr = await runAI("import", "From " + (host || "the link"), async (signal, onStart) => {
        const page = await api("POST", "/api/fetch-url", { url: link });
        if (signal.aborted) throw { code: "cancelled" };
        pageUrl = page.url || link;
        return aiRecipe({ task: `Extract the recipe from this ${page.structured ? "recipe data taken from a web page" : "web page or video description"}. Ignore adverts, life stories, comments and links. Copy amounts faithfully. If it's a video with no written amounts, use sensible amounts and say so in tips.${stripped ? " The person also wrote: " + stripped : ""}`, content: (page.title ? "Page title: " + page.title + "\n\n" : "") + page.text, extra: note }, signal, onStart);
      });
      if (nr) { S.note = ""; saveNewRecipe(nr, host || "Link", "link", { url: pageUrl }); } else pasteSheet(txt);
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
  "kq-start"() { startQuestions(); },
  "kq-fill"(t) { S.q.a[t.dataset.key] = t.dataset.v; render(); },
  "kq-pick"(t) { const key = t.dataset.key, v = t.dataset.v; S.q.a[key] = key === "max" ? Number(v) : key === "spoons" ? v === "true" : v; if (STALE_KEYS.includes(key)) S.q.stale = true; render(); },
  "kq-people"(t) { S.q.a.people = Math.max(1, Math.min(20, S.q.a.people + Number(t.dataset.d))); render(); },
  "kq-back"() {
    const q = S.q;
    if (q.mode === "edit") { q.a = q.snap; q.stale = q.snapStale; q.view = "review"; q.mode = "review"; }
    else if (q.i > 0) q.i--;
    else if (q.mode === "follow") { S.q = null; }
    else S.q = null;
    render(); window.scrollTo(0, 0);
  },
  "kq-next"() {
    const q = S.q;
    if (q.mode === "edit" || q.i >= q.steps.length - 1) { q.view = "review"; q.mode = "review"; }
    else q.i++;
    render(); window.scrollTo(0, 0);
  },
  "kq-edit"(t) { const q = S.q; q.snap = clone(q.a); q.snapStale = q.stale; q.mode = "edit"; q.view = "step"; q.steps = [Number(t.dataset.step)]; q.i = 0; render(); window.scrollTo(0, 0); },
  "kq-review"() { startReview(); },
  "auth-toggle"() { S.authMode = S.authMode === "signup" ? "login" : "signup"; render(); },
  signout() { signOut(); },
  "backup-pick"() { $("#f-backup").click(); },
  "kreset-ask"() { S.sheet = { kind: "kreset" }; openSheet(`<h2>Start your kitchen again?</h2><p class="muted">This clears your kitchen answers so you can describe it from scratch. Your recipes stay exactly as they are.</p><div class="btnrow"><button class="btn" data-act="sheet-close">Keep it</button><button class="btn primary" data-act="kreset-go">Start again</button></div>`); },
  "kreset-go"() { closeSheet(); Store.put("kitchen", Object.assign({}, DEFAULT_KITCHEN)); S.q = null; S.kc = null; S.kdText = ""; render(); window.scrollTo(0, 0); },
  "kq-cancel"() { S.q = null; render(); window.scrollTo(0, 0); },
  "kq-save"() { saveKitchen(); },
  "kc-tog"(t) {
    const c = S.kc, v = t.dataset.v; c.picks = c.picks.includes(v) ? c.picks.filter(x => x !== v) : [...c.picks, v];
    t.setAttribute("aria-pressed", String(c.picks.includes(v)));
    const kin = $("#kin"); const typed = kin.value.split(",").map(x => x.trim()).filter(x => x && !KQ.appliances.chips.includes(x));
    kin.value = [...c.picks, ...typed].join(", ");
  },
  "kc-send"(t) { kcAnswer(t.dataset.t, t.dataset.v); },
  "kd-go"() { if (!AI.fn) { startQuestions(); return; } describeKitchen(); }
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
  else if (t.id === "f-dish") {
    const f = t.files[0]; t.value = ""; if (!f || !S.sheet || S.sheet.kind !== "edit") return;
    try { S.sheet.photo = await compressImage(f); $("#e-pv").innerHTML = `<img src="${S.sheet.photo}" alt="">`; } catch { toast("Couldn't open that photo. Try a JPEG or PNG."); }
  }
});
document.addEventListener("input", e => {
  const t = e.target;
  if (t.id === "q") { S.search = t.value; $("#grid").innerHTML = gridHtml(); }
  else if (t.id === "chatin" || t.id === "kin") { t.style.height = "auto"; t.style.height = Math.min(120, t.scrollHeight) + "px"; }
  else if (S.q && /^kq-/.test(t.id)) { const key = t.id.slice(3); S.q.a[key] = t.value; if (STALE_KEYS.includes(key)) S.q.stale = true; }
  else if (t.id === "kd-text") S.kdText = t.value;
});
document.addEventListener("submit", e => {
  e.preventDefault();
  if (e.target.id === "authform") { doAuth(); return; }
  if (e.target.id === "kform") { kcAnswer($("#kin").value); return; }
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
  if (e.key === "Enter" && S.q && /^kq-/.test(e.target.id) && e.target.tagName === "INPUT") { e.preventDefault(); e.target.blur(); A["kq-next"](); }
});
window.addEventListener("scroll", () => $("#top").classList.toggle("scrolled", window.scrollY > 4), { passive: true });

/* ---------- accounts ---------- */
function viewAuth() {
  const signup = S.authMode === "signup", shared = /^#get-/.test(location.hash);
  return `<div class="auth">
    <div class="authlogo">${I.logo}</div>
    <h1 class="authname">recipe thing<i class="wdot"></i></h1>
    <p class="authtag">${shared ? "Someone shared recipes with you. " + (signup ? "Make a free account to get them." : "Sign in to get them.") : "All your recipes in one place, written for your kitchen."}</p>
    <form id="authform" class="stack" style="gap:12px" novalidate>
      <div class="field"><label for="au-user">Username</label><input class="input" id="au-user" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="${signup ? "Pick one, e.g. luca" : ""}"></div>
      <div class="field"><label for="au-pass">Password</label><input class="input" id="au-pass" type="password" autocomplete="${signup ? "new-password" : "current-password"}" placeholder="${signup ? "At least 6 characters" : ""}"></div>
      ${signup && S.needCode ? `<div class="field"><label for="au-code">Invite code</label><input class="input" id="au-code" autocomplete="off" autocapitalize="none" placeholder="Ask whoever sent you the app"></div>` : ""}
      <p class="autherr" id="autherr" role="alert"></p>
      <button class="btn primary block" type="submit" id="au-go">${signup ? "Create account" : "Sign in"}</button>
    </form>
    <button class="btn ghost" data-act="auth-toggle">${signup ? "I already have an account" : "New here? Create an account"}</button>
  </div>`;
}
async function doAuth() {
  const btn = $("#au-go"), err = $("#autherr"), signup = S.authMode === "signup";
  const body = { username: $("#au-user").value.trim(), password: $("#au-pass").value, code: $("#au-code") ? $("#au-code").value.trim() : "" };
  if (!body.username || !body.password) { err.textContent = "Fill in your username and password."; return; }
  btn.disabled = true; err.textContent = "";
  try {
    const r = await api("POST", signup ? "/api/signup" : "/api/login", body);
    lsSet("rt-has-account", 1);
    if (document.activeElement) document.activeElement.blur();
    signedIn(r.username);
    if (signup) toast("Welcome! Your recipe book is ready.");
  } catch (e) { err.textContent = e.message || "Couldn't sign in. Try again."; btn.disabled = false; }
}
function signedIn(name) {
  S.user = name; lsSet("rt-last-user", name);
  S.tab = "recipes"; S.openId = null;
  render(); window.scrollTo(0, 0);
  Store.load().then(() => {
    const m = String(location.hash || "").match(/^#get-([A-Za-z0-9]{6})$/);
    if (m) { try { history.replaceState(null, "", location.pathname); } catch {} setTimeout(() => openReceive(m[1]), 300); }
  });
}
function onSignedOut() {
  if (!S.user) return;
  S.user = null; Store.data = { recipes: {}, kitchen: null }; Store.mode = "loading";
  S.authMode = "login"; closeSheet(); S.cook = null; renderCook(); render();
  toast("Please sign in again.");
}
async function signOut() {
  try { await api("POST", "/api/logout", {}); } catch {}
  lsSet(Store.cacheKey(), null); lsSet(LS_CHAT, []); lsSet("rt-last-user", null);
  S.chat = []; S.user = null; S.q = null; S.kc = null; S.authMode = "login";
  Store.data = { recipes: {}, kitchen: null }; Store.mode = "loading";
  closeSheet(); render(); window.scrollTo(0, 0);
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
S.booting = true;
render();
(async () => {
  try { const c = await fetch("/api/config").then(r => r.json()); S.needCode = !!c.signupCode; } catch {}
  try {
    const me = await api("GET", "/api/me");
    S.booting = false; signedIn(me.username);
  } catch (e) {
    S.booting = false;
    const last = lsGet("rt-last-user");
    if (e.code === "offline" && last) { S.user = last; render(); Store.load(); return; }
    S.authMode = lsGet("rt-has-account") && !/^#get-/.test(location.hash) ? "login" : "signup";
    render();
  }
})();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
