/* VerseType shared widget. Clean room implementation, written from scratch.
   No code borrowed from any existing typing site. */
"use strict";

const VERSES = [
  { ref: "John 3:16", text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." },
  { ref: "Psalm 23:1", text: "The LORD is my shepherd; I shall not want." },
  { ref: "Proverbs 3:5", text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding." },
  { ref: "Romans 8:28", text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." },
  { ref: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me." },
  { ref: "Genesis 1:1", text: "In the beginning God created the heaven and the earth." },
  { ref: "Psalm 46:10", text: "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth." },
  { ref: "John 1:1", text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
  { ref: "Romans 3:23", text: "For all have sinned, and come short of the glory of God;" },
  { ref: "Romans 6:23", text: "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord." },
  { ref: "Jeremiah 29:11", text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end." },
  { ref: "Isaiah 40:31", text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint." },
  { ref: "Psalm 23:4", text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me." },
  { ref: "Matthew 11:28", text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest." },
  { ref: "John 14:6", text: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me." },
  { ref: "Romans 10:9", text: "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved." },
  { ref: "Ephesians 2:8", text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:" },
  { ref: "Philippians 4:6", text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God." },
  { ref: "1 Corinthians 13:4", text: "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up," },
  { ref: "1 Corinthians 13:13", text: "And now abideth faith, hope, charity, these three; but the greatest of these is charity." },
  { ref: "Galatians 5:22", text: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith," },
  { ref: "Joshua 1:9", text: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest." },
  { ref: "Psalm 119:105", text: "Thy word is a lamp unto my feet, and a light unto my path." },
  { ref: "Proverbs 3:6", text: "In all thy ways acknowledge him, and he shall direct thy paths." },
  { ref: "Matthew 6:33", text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you." },
  { ref: "Romans 12:2", text: "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God." },
  { ref: "2 Timothy 1:7", text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind." },
  { ref: "Hebrews 11:1", text: "Now faith is the substance of things hoped for, the evidence of things not seen." },
  { ref: "James 1:5", text: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him." },
  { ref: "1 Peter 5:7", text: "Casting all your care upon him; for he careth for you." },
  { ref: "Psalm 37:4", text: "Delight thyself also in the LORD; and he shall give thee the desires of thine heart." },
  { ref: "Proverbs 16:3", text: "Commit thy works unto the LORD, and thy thoughts shall be established." },
  { ref: "Isaiah 41:10", text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness." },
  { ref: "Micah 6:8", text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?" },
  { ref: "Matthew 5:16", text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven." },
  { ref: "Matthew 28:19", text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:" },
  { ref: "Mark 12:30", text: "And thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength: this is the first commandment." },
  { ref: "Luke 6:31", text: "And as ye would that men should do to you, do ye also to them likewise." },
  { ref: "John 8:12", text: "Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life." },
  { ref: "John 10:10", text: "The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly." },
  { ref: "John 15:13", text: "Greater love hath no man than this, that a man lay down his life for his friends." },
  { ref: "Acts 1:8", text: "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth." },
  { ref: "Romans 5:8", text: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us." },
  { ref: "1 Corinthians 10:13", text: "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it." },
  { ref: "2 Corinthians 5:17", text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new." },
  { ref: "Galatians 2:20", text: "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me." },
  { ref: "Ephesians 6:11", text: "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil." },
  { ref: "Philippians 4:19", text: "But my God shall supply all your need according to his riches in glory by Christ Jesus." },
  { ref: "Colossians 3:23", text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;" },
  { ref: "Psalm 1:1", text: "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful." }
];

/* ---------- helpers ---------- */
function $(sel, root) { return (root || document).querySelector(sel); }
function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function store(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
}
function read(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch (e) { return fallback; }
}
function todayStr() {
  const d = new Date();
  return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
}
function prettyDate() {
  const d = new Date();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

/* ---------- theme ---------- */
function applyTheme() {
  const t = read("versetype_theme", "dark");
  document.documentElement.setAttribute("data-theme", t === "light" ? "light" : "dark");
  const btn = $("#theme-toggle");
  if (btn) btn.textContent = (t === "light") ? "Dark mode" : "Light mode";
}
function toggleTheme() {
  const t = read("versetype_theme", "dark");
  store("versetype_theme", t === "light" ? "dark" : "light");
  applyTheme();
}

/* ---------- badges ---------- */
const BADGES = [
  { id: "first",   icon: "\u2726", name: "First Test",  desc: "Finished your first typing test" },
  { id: "wpm40",   icon: "40",     name: "40 WPM",      desc: "Reached 40 words per minute" },
  { id: "wpm60",   icon: "60",     name: "60 WPM",      desc: "Reached 60 words per minute" },
  { id: "wpm80",   icon: "80",     name: "80 WPM",      desc: "Reached 80 words per minute" },
  { id: "streak7", icon: "\u2605", name: "7 Day Streak", desc: "Typed 7 days in a row" },
  { id: "tests100",icon: "100",    name: "100 Tests",   desc: "Completed 100 typing tests" }
];
function earnedBadges() { return read("versetype_badges", {}); }
function awardBadge(id) {
  const b = earnedBadges();
  if (!b[id]) { b[id] = todayStr(); store("versetype_badges", b); }
}

/* ---------- streaks ---------- */
function recordDay() {
  const today = todayStr();
  const y = new Date(Date.now() - 86400000);
  const yest = y.getFullYear() + "-" + ("0" + (y.getMonth() + 1)).slice(-2) + "-" + ("0" + y.getDate()).slice(-2);
  let s = read("versetype_streak", { last: "", count: 0 });
  if (s.last === today) return s.count;
  s.count = (s.last === yest) ? s.count + 1 : 1;
  s.last = today;
  store("versetype_streak", s);
  if (s.count >= 7) awardBadge("streak7");
  return s.count;
}
function streakCount() { return read("versetype_streak", { last: "", count: 0 }).count; }

/* ---------- share link compression (custom tests) ---------- */
function b64urlEncode(bytes) {
  let s = "";
  const CH = 8192;
  for (let i = 0; i < bytes.length; i += CH) {
    s += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
  }
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64urlDecode(str) {
  let s = str.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}
async function encodeShareText(text) {
  const raw = new TextEncoder().encode(text);
  try {
    if (typeof CompressionStream !== "undefined") {
      const cs = new CompressionStream("deflate");
      const writer = cs.writable.getWriter();
      writer.write(raw);
      writer.close();
      const buf = await new Response(cs.readable).arrayBuffer();
      return "z" + b64urlEncode(new Uint8Array(buf));
    }
  } catch (e) {}
  return "r" + b64urlEncode(raw);
}
async function decodeShareText(payload) {
  const kind = payload.charAt(0);
  const bytes = b64urlDecode(payload.slice(1));
  try {
    if (kind === "z" && typeof DecompressionStream !== "undefined") {
      const ds = new DecompressionStream("deflate");
      const writer = ds.writable.getWriter();
      writer.write(bytes);
      writer.close();
      const buf = await new Response(ds.readable).arrayBuffer();
      return new TextDecoder().decode(buf);
    }
  } catch (e) {}
  return new TextDecoder().decode(bytes);
}

/* ---------- widget ---------- */
const widgets = [];

function buildContent(widget) {
  if (widget.mode === "custom" && widget.customText) {
    widget.chunks = [{ ref: "Your text", text: widget.customText.replace(/\s+/g, " ").trim() }];
  } else {
    widget.chunks = shuffle(VERSES).map(function(v) { return { ref: v.ref, text: v.text }; });
  }
  widget.full = "";
  widget.bounds = [];
  widget.chunks.forEach(function(c) {
    const start = widget.full.length;
    widget.full += (widget.full ? " " : "") + c.text;
    widget.bounds.push({ start: start, end: widget.full.length, ref: c.ref });
  });
}

function currentRef(widget, pos) {
  for (let i = widget.bounds.length - 1; i >= 0; i--) {
    if (pos >= widget.bounds[i].start) return widget.bounds[i].ref;
  }
  return widget.bounds[0].ref;
}

function renderText(widget) {
  const box = widget.textEl;
  box.innerHTML = "";
  const frag = document.createDocumentFragment();
  for (let i = 0; i < widget.full.length; i++) {
    const sp = document.createElement("span");
    sp.textContent = widget.full[i];
    frag.appendChild(sp);
  }
  box.appendChild(frag);
  const caret = document.createElement("div");
  caret.className = "vt-caret";
  box.appendChild(caret);
  widget.caretEl = caret;
  widget.spans = $all("span", box);
}

function moveCaret(widget) {
  const pos = Math.min(widget.typed.length, widget.spans.length - 1);
  const sp = widget.spans[pos];
  if (!sp) return;
  const box = widget.textEl;
  let left = sp.offsetLeft, top = sp.offsetTop, h = sp.offsetHeight;
  if (widget.typed.length >= widget.spans.length && widget.spans.length) {
    const last = widget.spans[widget.spans.length - 1];
    left = last.offsetLeft + last.offsetWidth;
    top = last.offsetTop;
    h = last.offsetHeight;
  }
  widget.caretEl.style.left = left + "px";
  widget.caretEl.style.top = top + "px";
  widget.caretEl.style.height = h + "px";
  if (top < box.scrollTop) box.scrollTop = top;
  else if (top + h > box.scrollTop + box.clientHeight) box.scrollTop = top + h - box.clientHeight;
}

function paintChars(widget) {
  const typed = widget.typed;
  for (let i = 0; i < widget.paintUpTo; i++) { /* already painted */ }
  const n = Math.min(typed.length, widget.spans.length);
  for (let i = 0; i < n; i++) {
    const sp = widget.spans[i];
    const ok = typed[i] === widget.full[i];
    const want = ok ? "ok" : "bad";
    if (sp._cls !== want) { sp._cls = want; sp.className = want; }
  }
  for (let i = n; i < widget.clearedUpTo; i++) {
    const sp = widget.spans[i];
    if (sp && sp._cls) { sp._cls = ""; sp.className = ""; }
  }
  widget.clearedUpTo = n;
}

function liveStats(widget) {
  const elapsed = (Date.now() - widget.startTime) / 1000;
  const mins = elapsed / 60;
  let correct = 0;
  const n = Math.min(widget.typed.length, widget.full.length);
  for (let i = 0; i < n; i++) if (widget.typed[i] === widget.full[i]) correct++;
  const wpm = mins > 0 ? Math.round((correct / 5) / mins) : 0;
  const acc = widget.typed.length ? Math.round((correct / widget.typed.length) * 100) : 100;
  return { wpm: wpm, acc: acc, correct: correct, typed: widget.typed.length, elapsed: elapsed };
}

function updateLive(widget) {
  const s = liveStats(widget);
  widget.wpmEl.textContent = s.wpm;
  widget.accEl.textContent = s.acc + "%";
  const remain = Math.max(0, Math.ceil(widget.duration - s.elapsed));
  widget.timeEl.textContent = remain + "s";
}

function ensureContent(widget) {
  if (widget.typed.length >= widget.full.length - 50) {
    const more = shuffle(VERSES).map(function(v) { return { ref: v.ref, text: v.text }; });
    more.forEach(function(c) {
      const start = widget.full.length;
      widget.full += " " + c.text;
      widget.bounds.push({ start: start, end: widget.full.length, ref: c.ref });
    });
    renderText(widget);
    paintChars(widget);
  }
}

function onInput(widget) {
  let v = widget.inputEl.value;
  if (v.length > widget.full.length) { v = v.slice(0, widget.full.length); widget.inputEl.value = v; }
  widget.typed = v;
  if (!widget.running && v.length > 0) {
    widget.running = true;
    widget.startTime = Date.now();
    widget.timer = setInterval(function() {
      updateLive(widget);
      if ((Date.now() - widget.startTime) / 1000 >= widget.duration) finish(widget);
    }, 250);
    widget.hintEl.style.display = "none";
  }
  if (widget.running) {
    ensureContent(widget);
    paintChars(widget);
    moveCaret(widget);
    widget.refEl.textContent = currentRef(widget, v.length);
    updateLive(widget);
  }
}

function trickyKeys(widget) {
  const misses = {};
  const n = Math.min(widget.typed.length, widget.full.length);
  for (let i = 0; i < n; i++) {
    if (widget.typed[i] !== widget.full[i]) {
      const k = widget.full[i].toLowerCase();
      if (/[a-z]/.test(k)) misses[k] = (misses[k] || 0) + 1;
    }
  }
  return Object.keys(misses).sort(function(a, b) { return misses[b] - misses[a]; }).slice(0, 3);
}

function finish(widget) {
  if (!widget.running) return;
  widget.running = false;
  clearInterval(widget.timer);
  const s = liveStats(widget);
  const wpm = s.wpm, acc = s.acc;

  /* records */
  const count = read("versetype_tests", 0) + 1;
  store("versetype_tests", count);
  awardBadge("first");
  if (wpm >= 40) awardBadge("wpm40");
  if (wpm >= 60) awardBadge("wpm60");
  if (wpm >= 80) awardBadge("wpm80");
  if (count >= 100) awardBadge("tests100");
  const streak = recordDay();
  const bkey = "versetype_best_" + widget.duration;
  const prev = read(bkey, null);
  if (!prev || wpm > prev.wpm) store(bkey, { wpm: wpm, acc: acc, date: todayStr() });

  /* results UI */
  widget.resultsEl.hidden = false;
  widget.blurWpm.textContent = wpm;
  widget.blurAcc.textContent = acc + "%";
  widget.veiled.classList.remove("revealed");
  widget.blurBox.classList.add("vt-score-blurred");
  widget.veil.style.display = "flex";
  widget.statWpm.textContent = wpm;
  widget.statAcc.textContent = acc + "%";
  widget.statChars.textContent = s.typed;
  widget.statTime.textContent = widget.duration + "s";

  const tricky = trickyKeys(widget);
  widget.trickyEl.innerHTML = tricky.length
    ? "Trickiest keys this round: <strong>" + tricky.join(" ").toUpperCase() + "</strong>"
    : "Clean round. No key gave you trouble.";

  /* certificate */
  const pos = Math.min(widget.typed.length, widget.full.length - 1);
  const ref = currentRef(widget, pos);
  let verseText = "";
  for (let i = 0; i < widget.bounds.length; i++) {
    if (pos >= widget.bounds[i].start && pos < widget.bounds[i].end) {
      const c = widget.chunks[i];
      verseText = "\u201C" + c.text + "\u201D";
      break;
    }
  }
  widget.certWpm.textContent = wpm;
  widget.certAcc.textContent = "Accuracy " + acc + "%";
  widget.certVerse.textContent = verseText;
  widget.certRef.textContent = ref + " \u00B7 King James Version";
  widget.certDate.textContent = prettyDate();

  widget.resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
  if (typeof VT_refreshHomepage === "function") { try { VT_refreshHomepage(); } catch (e) {} }
}

function revealScore(widget) {
  /* FUTURE AD: full-screen ad trigger goes here, on score reveal click. */
  widget.blurBox.classList.remove("vt-score-blurred");
  widget.veil.style.display = "none";
  widget.veiled.classList.add("revealed");
}

function restart(widget) {
  clearInterval(widget.timer);
  widget.running = false;
  widget.typed = "";
  widget.inputEl.value = "";
  widget.clearedUpTo = 0;
  buildContent(widget);
  renderText(widget);
  widget.refEl.textContent = widget.bounds[0].ref;
  widget.resultsEl.hidden = true;
  widget.hintEl.style.display = "";
  widget.wpmEl.textContent = "0";
  widget.accEl.textContent = "100%";
  widget.timeEl.textContent = widget.duration + "s";
  moveCaret(widget);
  showBest(widget);
  widget.inputEl.focus();
}

function showBest(widget) {
  const b = read("versetype_best_" + widget.duration, null);
  widget.bestEl.innerHTML = b
    ? "Your best: <strong>" + b.wpm + " WPM</strong> at " + b.acc + "%"
    : "No score yet. Type your first verse.";
}

function initWidget(el) {
  const widget = {
    el: el,
    duration: parseInt(el.getAttribute("data-duration") || "60", 10),
    mode: el.getAttribute("data-mode") || "verses",
    customText: el._customText || "",
    running: false,
    typed: "",
    clearedUpTo: 0
  };
  widget.refEl = $(".vt-ref", el);
  widget.textEl = $(".vt-text", el);
  widget.inputEl = $(".vt-input", el);
  widget.wpmEl = $(".vt-wpm", el);
  widget.accEl = $(".vt-acc", el);
  widget.timeEl = $(".vt-time", el);
  widget.bestEl = $(".vt-best", el);
  widget.hintEl = $(".vt-focus-hint", el);
  widget.resultsEl = $(".vt-results", el);
  widget.blurBox = $(".vt-blur-box", el);
  widget.blurWpm = $(".vt-blur-wpm", el);
  widget.blurAcc = $(".vt-blur-acc", el);
  widget.veil = $(".vt-reveal-veil", el);
  widget.veiled = $(".vt-blur-wrap", el);
  widget.statWpm = $(".vt-stat-wpm", el);
  widget.statAcc = $(".vt-stat-acc", el);
  widget.statChars = $(".vt-stat-chars", el);
  widget.statTime = $(".vt-stat-time", el);
  widget.trickyEl = $(".vt-tricky", el);
  widget.certWpm = $(".vt-cert-wpm", el);
  widget.certAcc = $(".vt-cert-acc", el);
  widget.certVerse = $(".vt-cert-verse", el);
  widget.certRef = $(".vt-cert-ref", el);
  widget.certDate = $(".vt-cert-date", el);

  buildContent(widget);
  renderText(widget);
  widget.refEl.textContent = widget.bounds[0].ref;
  moveCaret(widget);
  showBest(widget);

  widget.textEl.addEventListener("click", function() { widget.inputEl.focus(); });
  widget.inputEl.addEventListener("input", function() { onInput(widget); });
  widget.inputEl.addEventListener("focus", function() { widget.hintEl.style.display = "none"; });
  $(".vt-restart", el).addEventListener("click", function() { restart(widget); });
  $(".vt-again", el).addEventListener("click", function() { restart(widget); });
  $(".vt-reveal", el).addEventListener("click", function() { revealScore(widget); });
  $(".vt-print", el).addEventListener("click", function() {
    document.body.classList.add("print-cert");
    window.print();
  });

  el.addEventListener("keydown", function(e) {
    if (e.key === "Tab") { e.preventDefault(); restart(widget); }
  });

  widgets.push(widget);
  return widget;
}

function initAll() {
  applyTheme();
  const t = $("#theme-toggle");
  if (t) t.addEventListener("click", toggleTheme);
  $all(".vt-widget").forEach(initWidget);
  window.addEventListener("afterprint", function() {
    document.body.classList.remove("print-cert");
  });
  if (typeof VT_renderHomepage === "function") { try { VT_renderHomepage(); } catch (e) {} }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}

/* homepage extras, defined by page when needed */
function VT_refreshHomepage() {}
function VT_renderHomepage() {}
