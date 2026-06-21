const keyboardRows = [
  [
    { code: "Backquote", label: "`" },
    { code: "Digit1", label: "1" },
    { code: "Digit2", label: "2" },
    { code: "Digit3", label: "3" },
    { code: "Digit4", label: "4" },
    { code: "Digit5", label: "5" },
    { code: "Digit6", label: "6" },
    { code: "Digit7", label: "7" },
    { code: "Digit8", label: "8" },
    { code: "Digit9", label: "9" },
    { code: "Digit0", label: "0" },
    { code: "Backspace", label: "Back", wide: 2 }
  ],
  [
    { code: "Tab", label: "Tab", wide: 1.5 },
    { code: "KeyQ", label: "Q" },
    { code: "KeyW", label: "W" },
    { code: "KeyE", label: "E" },
    { code: "KeyR", label: "R" },
    { code: "KeyT", label: "T" },
    { code: "KeyY", label: "Y" },
    { code: "KeyU", label: "U" },
    { code: "KeyI", label: "I" },
    { code: "KeyO", label: "O" },
    { code: "KeyP", label: "P" },
    { code: "Enter", label: "Enter", wide: 1.5 }
  ],
  [
    { code: "CapsLock", label: "Caps", wide: 1.8 },
    { code: "KeyA", label: "A" },
    { code: "KeyS", label: "S" },
    { code: "KeyD", label: "D" },
    { code: "KeyF", label: "F" },
    { code: "KeyG", label: "G" },
    { code: "KeyH", label: "H" },
    { code: "KeyJ", label: "J" },
    { code: "KeyK", label: "K" },
    { code: "KeyL", label: "L" },
    { code: "Semicolon", label: ";" },
    { code: "Quote", label: "'" }
  ],
  [
    { code: "ShiftLeft", label: "Shift", wide: 2.2 },
    { code: "KeyZ", label: "Z" },
    { code: "KeyX", label: "X" },
    { code: "KeyC", label: "C" },
    { code: "KeyV", label: "V" },
    { code: "KeyB", label: "B" },
    { code: "KeyN", label: "N" },
    { code: "KeyM", label: "M" },
    { code: "Comma", label: "," },
    { code: "Period", label: "." },
    { code: "Slash", label: "/" },
    { code: "ShiftRight", label: "Shift", wide: 2.2 }
  ],
  [
    { code: "ControlLeft", label: "Ctrl", wide: 1.4 },
    { code: "AltLeft", label: "Alt", wide: 1.4 },
    { code: "Space", label: "Space", wide: 6 },
    { code: "AltRight", label: "Alt", wide: 1.4 },
    { code: "ControlRight", label: "Ctrl", wide: 1.4 }
  ]
];

const upgrades = [
  { id: "fingers", icon: "F1", name: "Dedos rapidos", desc: "+1 por tecla", bonus: 1, base: 25, owned: 0 },
  { id: "switches", icon: "SW", name: "Switches mecanicos", desc: "+6 por tecla", bonus: 6, base: 180, owned: 0 },
  { id: "rgb", icon: "RGB", name: "RGB gamer", desc: "+28 por tecla", bonus: 28, base: 1200, owned: 0 },
  { id: "premium", icon: "PRO", name: "Teclado premium", desc: "+140 por tecla", bonus: 140, base: 9000, owned: 0 },
  { id: "mainframe", icon: "CPU", name: "Superordenador", desc: "+700 por tecla", bonus: 700, base: 68000, owned: 0 }
];

const machines = [
  { id: "monkey", icon: "MK", name: "Mono escribiendo", rate: 1, base: 80, owned: 0 },
  { id: "secretary", icon: "SC", name: "Secretario", rate: 8, base: 520, owned: 0 },
  { id: "coder", icon: "DEV", name: "Programador", rate: 42, base: 3200, owned: 0 },
  { id: "hacker", icon: "HK", name: "Hacker", rate: 240, base: 24000, owned: 0 },
  { id: "ai", icon: "AI", name: "IA", rate: 1500, base: 180000, owned: 0 }
];

const parts = [
  { icon: "KB", name: "Teclado de oficina", at: 0 },
  { icon: "ME", name: "Mecanico azul", at: 500 },
  { icon: "RG", name: "RGB gamer", at: 2500 },
  { icon: "OP", name: "Optico", at: 12000 },
  { icon: "CU", name: "Cuantico", at: 60000 },
  { icon: "GA", name: "Galaxia", at: 240000 }
];

const yards = [
  { name: "Teclado de oficina", at: 0, bonus: 0 },
  { name: "Teclado mecanico", at: 8, bonus: 0.15 },
  { name: "RGB gamer", at: 18, bonus: 0.35 },
  { name: "Teclado optico", at: 34, bonus: 0.75 },
  { name: "Teclado legendario", at: 55, bonus: 1.4 }
];

const state = {
  scrap: 0,
  lifetime: 0,
  manualClicks: 0,
  perClick: 1,
  level: 1,
  xp: 0,
  combo: 1,
  bestCombo: 1,
  lastClick: 0,
  rebirths: 0,
  shards: 0,
  sound: true
};

const $ = id => document.getElementById(id);
const els = {};
let audioCtx;

document.addEventListener("DOMContentLoaded", () => {
  [
    "level", "xpBar", "xpText", "yardTier", "yardBonus", "stars", "upgradeCount", "upgradeList",
    "scrap", "perClick", "scrapZone", "keyboard", "combo", "eventLayer", "collectionCount",
    "parts", "rebirths", "globalMultiplier", "rebirthBar", "rebirthText", "rebirthButton",
    "lifetime", "manualClicks", "autoRate", "bestCombo", "machineCount", "machineList",
    "toasts", "soundButton", "resetButton"
  ].forEach(id => els[id] = $(id));

  load();
  buildKeyboard();
  bind();
  render();
  setInterval(tick, 1000);
  setInterval(spawnEvent, 18000);
  setInterval(save, 5000);
});

function buildKeyboard() {
  els.keyboard.innerHTML = "";
  keyboardRows.forEach(row => {
    const rowEl = document.createElement("div");
    rowEl.className = "key-row";
    row.forEach(keyData => {
      const key = document.createElement("button");
      key.type = "button";
      key.className = "keycap";
      key.dataset.code = keyData.code;
      key.style.setProperty("--span", keyData.wide || 1);
      key.innerHTML = `<span>${keyData.label}</span>`;
      key.addEventListener("pointerdown", event => {
        event.preventDefault();
        hit(keyData.code, key, event.clientX, event.clientY);
      });
      rowEl.appendChild(key);
    });
    els.keyboard.appendChild(rowEl);
  });
}

function bind() {
  window.addEventListener("keydown", event => {
    if (event.repeat) return;
    if (event.target.closest("button") && !event.target.classList.contains("keycap")) return;
    const key = findKey(event.code);
    if (!key) return;
    event.preventDefault();
    const rect = key.getBoundingClientRect();
    hit(event.code, key, rect.left + rect.width / 2, rect.top + rect.height / 2);
  });

  els.rebirthButton.addEventListener("click", rebirth);
  els.soundButton.addEventListener("click", () => {
    state.sound = !state.sound;
    render();
  });
  els.resetButton.addEventListener("click", () => {
    if (confirm("Borrar toda la partida?")) {
      localStorage.removeItem("keyboard-clicker-save");
      location.reload();
    }
  });
}

function findKey(code) {
  return els.keyboard.querySelector(`[data-code="${code}"]`);
}

function hit(code, key, x, y) {
  const now = Date.now();
  const gap = now - state.lastClick;
  state.lastClick = now;
  state.combo = gap < 190 ? Math.min(30, state.combo + 1) : gap < 360 ? Math.min(30, state.combo + 0.35) : 1;
  state.bestCombo = Math.max(state.bestCombo, Math.floor(state.combo));

  const gained = Math.ceil(state.perClick * comboMultiplier() * globalMultiplier() * yard().multiplier * keyValue(code));
  addScrap(gained);
  state.manualClicks += 1;
  state.xp += 5 + Math.floor(state.combo);
  levelUp();

  key.classList.add("pressed");
  setTimeout(() => key.classList.remove("pressed"), 110);
  if (state.combo >= 14) {
    els.scrapZone.classList.add("shake");
    setTimeout(() => els.scrapZone.classList.remove("shake"), 180);
  }

  floatText(`+${fmt(gained)}`, x, y);
  sparks(x, y);
  keySound(code);
  render();
}

function keyValue(code) {
  if (code === "Space") return 1.8;
  if (code.includes("Shift") || code === "Enter" || code === "Backspace") return 1.35;
  if (code.includes("Digit")) return 1.15;
  return 1;
}

function addScrap(amount) {
  state.scrap += amount;
  state.lifetime += amount;
}

function levelUp() {
  while (state.xp >= xpNeed()) {
    state.xp -= xpNeed();
    state.level += 1;
    toast(`Nivel ${state.level}`);
    beep(640, 0.12, "triangle");
  }
}

function xpNeed() {
  return Math.floor(160 + state.level * 42);
}

function comboMultiplier() {
  if (state.combo >= 24) return 8;
  if (state.combo >= 15) return 4;
  if (state.combo >= 7) return 2;
  return 1;
}

function globalMultiplier() {
  return 1 + state.shards * 0.08;
}

function yard() {
  let current = yards[0];
  yards.forEach(y => {
    if (state.level >= y.at) current = y;
  });
  return { ...current, multiplier: 1 + current.bonus };
}

function autoRate() {
  return machines.reduce((sum, item) => sum + item.rate * item.owned, 0);
}

function cost(item) {
  return Math.floor(item.base * Math.pow(1.72, item.owned));
}

function buyUpgrade(id) {
  const item = upgrades.find(upgrade => upgrade.id === id);
  const price = cost(item);
  if (state.scrap < price) return;
  state.scrap -= price;
  item.owned += 1;
  state.perClick += item.bonus;
  toast(`${item.name} comprado`);
  beep(520, 0.09, "triangle");
  render();
}

function buyMachine(id) {
  const item = machines.find(machine => machine.id === id);
  const price = cost(item);
  if (state.scrap < price) return;
  state.scrap -= price;
  item.owned += 1;
  toast(`${item.name} activo`);
  beep(420, 0.09, "sawtooth");
  render();
}

function tick() {
  const amount = Math.ceil(autoRate() * globalMultiplier() * yard().multiplier);
  if (amount > 0) addScrap(amount);
  render();
}

function rebirth() {
  if (state.scrap < 50000) return;
  const earned = Math.max(1, Math.floor(Math.sqrt(state.scrap / 50000)));
  state.shards += earned;
  state.rebirths += 1;
  state.scrap = 0;
  state.perClick = 1;
  state.level = 1;
  state.xp = 0;
  state.combo = 1;
  upgrades.forEach(item => item.owned = 0);
  machines.forEach(item => item.owned = 0);
  toast(`Renacimiento: +${earned} chips`);
  beep(760, 0.18, "triangle");
  render();
  save();
}

function spawnEvent() {
  const labels = [
    { text: "Tecla dorada", reward: 900 },
    { text: "Cofre de switches", reward: 2200 },
    { text: "Lluvia de teclas", reward: 5400 }
  ];
  const event = labels[Math.floor(Math.random() * labels.length)];
  const chip = document.createElement("button");
  chip.className = "event-chip";
  chip.type = "button";
  chip.textContent = event.text;
  chip.style.left = `${12 + Math.random() * 68}%`;
  chip.style.top = `${18 + Math.random() * 54}%`;
  chip.addEventListener("click", () => {
    const reward = Math.ceil(event.reward * globalMultiplier());
    addScrap(reward);
    floatText(`+${fmt(reward)}`, window.innerWidth / 2, window.innerHeight / 2);
    toast(event.text);
    beep(700, 0.12, "triangle");
    chip.remove();
    render();
  });
  els.eventLayer.appendChild(chip);
  setTimeout(() => chip.remove(), 8500);
}

function render() {
  els.scrap.textContent = fmt(state.scrap);
  els.perClick.textContent = fmt(Math.ceil(state.perClick * comboMultiplier() * globalMultiplier() * yard().multiplier));
  els.level.textContent = state.level;
  els.xpBar.style.width = `${Math.min(100, state.xp / xpNeed() * 100)}%`;
  els.xpText.textContent = `${fmt(state.xp)} / ${fmt(xpNeed())} reputacion`;
  els.combo.textContent = `Combo x${comboMultiplier()}`;
  els.yardTier.textContent = yard().name;
  els.yardBonus.textContent = `Bonus de escritura: +${Math.round(yard().bonus * 100)}%`;
  els.stars.textContent = "*****".slice(0, Math.min(5, 1 + Math.floor(state.level / 12))).padEnd(5, "-");
  els.rebirths.textContent = state.rebirths;
  els.globalMultiplier.textContent = `x${globalMultiplier().toFixed(2)}`;
  els.rebirthBar.style.width = `${Math.min(100, state.scrap / 50000 * 100)}%`;
  els.rebirthText.textContent = state.scrap >= 50000 ? "Listo para renacer" : `Necesitas ${fmt(50000 - state.scrap)} clics`;
  els.rebirthButton.disabled = state.scrap < 50000;
  els.lifetime.textContent = fmt(state.lifetime);
  els.manualClicks.textContent = fmt(state.manualClicks);
  els.autoRate.textContent = `${fmt(autoRate())}/s`;
  els.bestCombo.textContent = `x${state.bestCombo}`;
  els.soundButton.textContent = `Sonido: ${state.sound ? "si" : "no"}`;
  renderShop();
  renderMachines();
  renderParts();
}

function renderShop() {
  els.upgradeCount.textContent = `${upgrades.filter(item => item.owned > 0).length}/${upgrades.length}`;
  els.upgradeList.innerHTML = upgrades.map(item => shopHtml(item, "buyUpgrade")).join("");
}

function renderMachines() {
  els.machineCount.textContent = `${machines.filter(item => item.owned > 0).length}/${machines.length}`;
  els.machineList.innerHTML = machines.map(item => shopHtml(item, "buyMachine", `${fmt(item.rate)}/s`)).join("");
}

function renderParts() {
  const unlocked = parts.filter(part => state.lifetime >= part.at).length;
  els.collectionCount.textContent = `${unlocked}/${parts.length}`;
  els.parts.innerHTML = parts.map(part => {
    const open = state.lifetime >= part.at;
    return `<article class="part-card ${open ? "" : "locked"}">
      <span class="part-icon">${open ? part.icon : "LOCK"}</span>
      <strong>${open ? part.name : "Bloqueado"}</strong>
      <small>${fmt(part.at)} clics</small>
    </article>`;
  }).join("");
}

function shopHtml(item, fn, meta = item.desc) {
  const price = cost(item);
  return `<article class="shop-item">
    <span class="shop-icon">${item.icon}</span>
    <div><strong>${item.name}</strong><small>${meta} - Nv ${item.owned}</small></div>
    <button class="buy" type="button" onclick="${fn}('${item.id}')" ${state.scrap >= price ? "" : "disabled"}>${fmt(price)}</button>
  </article>`;
}

function floatText(text, x, y) {
  const zone = els.scrapZone.getBoundingClientRect();
  const el = document.createElement("div");
  el.className = "float";
  el.textContent = text;
  el.style.left = `${Math.max(20, Math.min(zone.width - 120, x - zone.left - 45))}px`;
  el.style.top = `${Math.max(20, Math.min(zone.height - 60, y - zone.top - 20))}px`;
  els.scrapZone.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function sparks(x, y) {
  const zone = els.scrapZone.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    const spark = document.createElement("i");
    spark.className = "spark";
    spark.style.left = `${x - zone.left}px`;
    spark.style.top = `${y - zone.top}px`;
    spark.style.setProperty("--x", `${-70 + Math.random() * 140}px`);
    spark.style.setProperty("--y", `${-80 + Math.random() * 130}px`);
    els.scrapZone.appendChild(spark);
    setTimeout(() => spark.remove(), 680);
  }
}

function keySound(code) {
  const base = code === "Space" ? 150 : code.includes("Shift") || code === "Enter" || code === "Backspace" ? 190 : 235;
  const variation = [...code].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 70;
  beep(base + variation, 0.018, "square");
  setTimeout(() => beep(base * 0.45 + variation, 0.012, "triangle"), 22);
}

function beep(freq, duration, type = "square") {
  if (!state.sound) return;
  try {
    audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = 0.032;
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {}
}

function toast(text) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = text;
  els.toasts.appendChild(el);
  setTimeout(() => el.remove(), 3300);
}

function fmt(value) {
  return Math.floor(value).toLocaleString("es-ES");
}

function save() {
  localStorage.setItem("keyboard-clicker-save", JSON.stringify({
    state,
    upgrades: upgrades.map(item => item.owned),
    machines: machines.map(item => item.owned)
  }));
}

function load() {
  const raw = localStorage.getItem("keyboard-clicker-save") || localStorage.getItem("chatarra-clicker-save");
  if (!raw) return;
  try {
    const saved = JSON.parse(raw);
    Object.assign(state, saved.state);
    saved.upgrades?.forEach((owned, index) => upgrades[index].owned = owned);
    saved.machines?.forEach((owned, index) => machines[index].owned = owned);
  } catch {
    localStorage.removeItem("keyboard-clicker-save");
  }
}

window.buyUpgrade = buyUpgrade;
window.buyMachine = buyMachine;
