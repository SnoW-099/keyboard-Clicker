const keyboardRows = [
  [
    { code: "Escape", label: "Esc", wide: 1 },
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
    { code: "F11", label: "F11" },
    { code: "F12", label: "F12" },
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
    { code: "Backslash", label: "^`" },
    { code: "Equal", label: "+*" }
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
    { code: "Quote", label: "'" },
    { code: "Enter", label: "Enter", wide: 1.5 }
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
    { code: "Minus", label: "-_" },
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
  { id: "switches", icon: "IMG:upgrade-mechanical-switch-clean.png", name: "Switches mecanicos", desc: "+6 por tecla", bonus: 6, base: 180, owned: 0 },
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

const keyboards = [
  {
    id: "office",
    icon: "KB",
    name: "Teclado de oficina",
    rarity: "Comun",
    unlockAt: 0,
    className: "skin-office",
    passive: "Estable: +5% a todos los clics.",
    clickMult: 1.05,
    autoMult: 1,
    comboEase: 0,
    favorite: "KeyE",
    favoriteMult: 1.1
  },
  {
    id: "mechanical",
    icon: "ME",
    name: "Mecanico azul",
    rarity: "Raro",
    unlockAt: 500,
    className: "skin-mechanical",
    passive: "Clicky: combos x2 empiezan antes y Enter/Shift pegan mas fuerte.",
    clickMult: 1.18,
    autoMult: 1,
    comboEase: 2,
    favorite: "Enter",
    favoriteMult: 1.6
  },
  {
    id: "rgb",
    icon: "RG",
    name: "RGB gamer",
    rarity: "Epico",
    unlockAt: 2500,
    className: "skin-rgb",
    passive: "Overdrive: cada combo alto gana brillo y +35% por tecla.",
    clickMult: 1.15,
    autoMult: 1.1,
    comboEase: 1,
    favorite: "Space",
    favoriteMult: 1.45
  },
  {
    id: "hacker",
    icon: "HK",
    name: "Hacker verde",
    rarity: "Epico",
    unlockAt: 12000,
    className: "skin-hacker",
    passive: "Secuencia: alternar letras y numeros aumenta el valor.",
    clickMult: 1.25,
    autoMult: 1.25,
    comboEase: 0,
    favorite: "Digit0",
    favoriteMult: 1.7
  },
  {
    id: "cursed",
    icon: "??",
    name: "Teclado roto",
    rarity: "Corrupto",
    unlockAt: 60000,
    className: "skin-cursed",
    passive: "Riesgo: 15% de fallo, 12% de golpe critico x8.",
    clickMult: 1.4,
    autoMult: 0.9,
    comboEase: -1,
    favorite: "Backspace",
    favoriteMult: 2.2
  },
  {
    id: "galaxy",
    icon: "GA",
    name: "Galaxia",
    rarity: "Legendario",
    unlockAt: 240000,
    className: "skin-galaxy",
    passive: "Constelacion: Space repite el ultimo golpe y auto x2.",
    clickMult: 1.8,
    autoMult: 2,
    comboEase: 2,
    favorite: "Space",
    favoriteMult: 2
  }
];

const cardPool = [
  {
    id: "clicker-joker",
    name: "Clicker Joker",
    rarity: "common",
    tag: "COMUN",
    desc: "Cada 7 pulsaciones, la siguiente tecla vale x3.",
    effect: "septimo"
  },
  {
    id: "spacebar-titan",
    name: "Spacebar Titan",
    rarity: "rare",
    tag: "RARO",
    desc: "Space vale x2.5 adicional.",
    effect: "space"
  },
  {
    id: "combo-dealer",
    name: "Combo Dealer",
    rarity: "rare",
    tag: "RARO",
    desc: "Los combos suben un escalon antes.",
    effect: "combo"
  },
  {
    id: "ghost-typist",
    name: "Ghost Typist",
    rarity: "epic",
    tag: "EPICO",
    desc: "El ultimo golpe se repite al 18% cada segundo.",
    effect: "ghost"
  },
  {
    id: "rgb-overdrive",
    name: "RGB Overdrive",
    rarity: "epic",
    tag: "EPICO",
    desc: "Con combo x4 o mas, todas las teclas ganan +60%.",
    effect: "rgb"
  },
  {
    id: "broken-firmware",
    name: "Broken Firmware",
    rarity: "legendary",
    tag: "LEGEND",
    desc: "10% de probabilidad de critico x10.",
    effect: "crit"
  }
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
  sound: true,
  equippedKeyboard: "office",
  ownedKeyboards: ["office"],
  activeCards: [],
  cardChoices: [],
  lastCode: "",
  clickCount: 0,
  lastGain: 0
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
    "toasts", "soundButton", "resetButton", "cardChoices", "activeCards", "deckCount"
  ].forEach(id => els[id] = $(id));

  load();
  buildKeyboard();
  bind();
  setView("play");
  render();
  setInterval(tick, 1000);
  setInterval(spawnEvent, 18000);
  setInterval(save, 5000);
});

function buildKeyboard() {
  els.keyboard.innerHTML = "";
  const layoutMap = {
    Escape: { col: "1 / span 2", row: "1" },
    Digit1: { col: "3 / span 2", row: "1" },
    Digit2: { col: "5 / span 2", row: "1" },
    Digit3: { col: "7 / span 2", row: "1" },
    Digit4: { col: "9 / span 2", row: "1" },
    Digit5: { col: "11 / span 2", row: "1" },
    Digit6: { col: "13 / span 2", row: "1" },
    Digit7: { col: "15 / span 2", row: "1" },
    Digit8: { col: "17 / span 2", row: "1" },
    Digit9: { col: "19 / span 2", row: "1" },
    Digit0: { col: "21 / span 2", row: "1" },
    F11: { col: "23 / span 2", row: "1" },
    F12: { col: "25 / span 2", row: "1" },
    Backspace: { col: "27 / span 5", row: "1" },
    Tab: { col: "1 / span 4", row: "2" },
    KeyQ: { col: "5 / span 2", row: "2" },
    KeyW: { col: "7 / span 2", row: "2" },
    KeyE: { col: "9 / span 2", row: "2" },
    KeyR: { col: "11 / span 2", row: "2" },
    KeyT: { col: "13 / span 2", row: "2" },
    KeyY: { col: "15 / span 2", row: "2" },
    KeyU: { col: "17 / span 2", row: "2" },
    KeyI: { col: "19 / span 2", row: "2" },
    KeyO: { col: "21 / span 2", row: "2" },
    KeyP: { col: "23 / span 2", row: "2" },
    Backslash: { col: "25 / span 2", row: "2" },
    Equal: { col: "27 / span 2", row: "2" },
    Quote: { col: "29 / span 2", row: "2" },
    CapsLock: { col: "1 / span 5", row: "3" },
    KeyA: { col: "6 / span 2", row: "3" },
    KeyS: { col: "8 / span 2", row: "3" },
    KeyD: { col: "10 / span 2", row: "3" },
    KeyF: { col: "12 / span 2", row: "3" },
    KeyG: { col: "14 / span 2", row: "3" },
    KeyH: { col: "16 / span 2", row: "3" },
    KeyJ: { col: "18 / span 2", row: "3" },
    KeyK: { col: "20 / span 2", row: "3" },
    KeyL: { col: "22 / span 2", row: "3" },
    Semicolon: { col: "24 / span 2", row: "3" },
    Enter: { col: "26 / span 6", row: "3" },
    ShiftLeft: { col: "1 / span 4", row: "4" },
    KeyZ: { col: "5 / span 2", row: "4" },
    KeyX: { col: "7 / span 2", row: "4" },
    KeyC: { col: "9 / span 2", row: "4" },
    KeyV: { col: "11 / span 2", row: "4" },
    KeyB: { col: "13 / span 2", row: "4" },
    KeyN: { col: "15 / span 2", row: "4" },
    KeyM: { col: "17 / span 2", row: "4" },
    Comma: { col: "19 / span 2", row: "4" },
    Period: { col: "21 / span 2", row: "4" },
    Minus: { col: "23 / span 2", row: "4" },
    ShiftRight: { col: "25 / span 7", row: "4" },
    ControlLeft: { col: "1 / span 4", row: "5" },
    AltLeft: { col: "5 / span 4", row: "5" },
    Space: { col: "9 / span 14", row: "5" },
    AltRight: { col: "23 / span 4", row: "5" },
    ControlRight: { col: "27 / span 4", row: "5" }
  };

  keyboardRows.forEach(row => {
    row.forEach(keyData => {
      const key = document.createElement("button");
      key.type = "button";
      key.className = `keycap ${keyData.code === "Space" ? "space-key" : keyData.wide || keyData.code === "Escape" ? "special-key" : ""}`;
      if (keyData.wide === 1.4) key.classList.add("special-w14");
      if (keyData.wide === 1.5) key.classList.add("special-w15");
      if (keyData.wide === 1.8) key.classList.add("special-w18");
      if (keyData.code === "Enter") key.classList.add("enter-key");
      if (keyData.code === "Backspace") key.classList.add("back-key");
      if (keyData.code === "ShiftLeft" || keyData.code === "ShiftRight") key.classList.add("shift-key");
      const layout = layoutMap[keyData.code];

      key.dataset.code = keyData.code;
      key.style.setProperty("--span", keyData.wide || 1);
      if (layout) {
        key.style.gridColumn = layout.col;
        key.style.gridRow = layout.row;
      }
      key.innerHTML = `<span>${keyData.label}</span>`;
      key.addEventListener("pointerdown", event => {
        event.preventDefault();
        hit(keyData.code, key, event.clientX, event.clientY);
      });
      els.keyboard.appendChild(key);
    });
  });
}

function bind() {
  document.querySelectorAll(".dock-item[data-view]").forEach(button => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

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

function setView(view) {
  document.body.dataset.view = view;
  document.querySelectorAll(".dock-item[data-view]").forEach(button => {
    button.classList.toggle("active", button.dataset.view === view);
  });
}

function findKey(code) {
  return els.keyboard.querySelector(`[data-code="${code}"]`);
}

function hit(code, key, x, y) {
  const now = Date.now();
  const gap = now - state.lastClick;
  const board = equippedKeyboard();
  state.lastClick = now;
  state.combo = gap < 190 ? Math.min(30, state.combo + 1 + Math.max(0, board.comboEase) * 0.15) : gap < 360 ? Math.min(30, state.combo + 0.35) : 1;
  state.bestCombo = Math.max(state.bestCombo, Math.floor(state.combo));
  state.clickCount += 1;

  const result = calculateGain(code);
  addScrap(result.gained);
  state.lastGain = result.gained;
  state.manualClicks += 1;
  state.xp += 5 + Math.floor(state.combo);
  levelUp();
  unlockKeyboards();

  key.classList.add("pressed");
  if (result.critical) key.classList.add("critical");
  setTimeout(() => key.classList.remove("pressed", "critical"), 120);
  if (state.combo >= 14) {
    els.scrapZone.classList.add("shake");
    setTimeout(() => els.scrapZone.classList.remove("shake"), 180);
  }

  floatText(result.miss ? "MISS" : `+${fmt(result.gained)}`, x, y, result.critical);
  sparks(x, y, result.critical);
  keySound(code, board);
  state.lastCode = code;
  render();
}

function calculateGain(code) {
  const board = equippedKeyboard();
  if (board.id === "cursed" && Math.random() < 0.15) return { gained: 0, miss: true, critical: false };

  let multiplier = keyValue(code) * board.clickMult * comboMultiplier() * globalMultiplier() * cardMultiplier(code);
  if (code === board.favorite) multiplier *= board.favoriteMult;
  if (board.id === "hacker" && state.lastCode && codeType(state.lastCode) !== codeType(code)) multiplier *= 1.55;
  if (board.id === "rgb" && comboMultiplier() >= 4) multiplier *= 1.35;
  if (board.id === "galaxy" && code === "Space" && state.lastGain > 0) {
    addScrap(Math.ceil(state.lastGain * 0.5));
  }

  let critical = false;
  const critChance = hasCard("broken-firmware") ? 0.1 : board.id === "cursed" ? 0.12 : 0;
  if (critChance > 0 && Math.random() < critChance) {
    multiplier *= hasCard("broken-firmware") ? 10 : 8;
    critical = true;
  }

  return { gained: Math.ceil(state.perClick * multiplier), miss: false, critical };
}

function keyValue(code) {
  if (code === "Space") return 1.8;
  if (code.includes("Shift") || code === "Enter" || code === "Backspace") return 1.35;
  if (code.includes("Digit")) return 1.15;
  return 1;
}

function cardMultiplier(code) {
  let mult = 1;
  if (hasCard("spacebar-titan") && code === "Space") mult *= 2.5;
  if (hasCard("rgb-overdrive") && comboMultiplier() >= 4) mult *= 1.6;
  if (hasCard("clicker-joker") && state.clickCount > 0 && state.clickCount % 7 === 0) mult *= 3;
  return mult;
}

function codeType(code) {
  if (code.includes("Digit")) return "number";
  if (code.includes("Key")) return "letter";
  return "special";
}

function addScrap(amount) {
  state.scrap += amount;
  state.lifetime += amount;
}

function levelUp() {
  let leveled = false;
  while (state.xp >= xpNeed()) {
    state.xp -= xpNeed();
    state.level += 1;
    leveled = true;
  }
  if (leveled) {
    toast(`Nivel ${state.level}`);
    beep(640, 0.12, "triangle");
    if (state.level % 3 === 0 && state.cardChoices.length === 0) dealCards();
  }
}

function xpNeed() {
  return Math.floor(160 + state.level * 42);
}

function comboMultiplier() {
  const ease = equippedKeyboard().comboEase + (hasCard("combo-dealer") ? 2 : 0);
  if (state.combo >= 24 - ease) return 8;
  if (state.combo >= 15 - ease) return 4;
  if (state.combo >= 7 - ease) return 2;
  return 1;
}

function globalMultiplier() {
  return 1 + state.shards * 0.08;
}

function equippedKeyboard() {
  return keyboards.find(board => board.id === state.equippedKeyboard) || keyboards[0];
}

function hasCard(id) {
  return state.activeCards.includes(id);
}

function autoRate() {
  return machines.reduce((sum, item) => sum + item.rate * item.owned, 0);
}

function autoMultiplier() {
  return equippedKeyboard().autoMult * globalMultiplier() * (hasCard("ghost-typist") ? 1.18 : 1);
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

function equipKeyboard(id) {
  if (!state.ownedKeyboards.includes(id)) return;
  state.equippedKeyboard = id;
  toast(`${equippedKeyboard().name} equipado`);
  render();
  save();
}

function unlockKeyboards() {
  keyboards.forEach(board => {
    if (state.lifetime >= board.unlockAt && !state.ownedKeyboards.includes(board.id)) {
      state.ownedKeyboards.push(board.id);
      toast(`Nuevo teclado: ${board.name}`);
    }
  });
}

function dealCards() {
  const available = cardPool.filter(card => !state.activeCards.includes(card.id));
  state.cardChoices = shuffle(available).slice(0, 3).map(card => card.id);
  if (state.cardChoices.length > 0) toast("Elige una carta de build");
}

function pickCard(id) {
  if (!state.cardChoices.includes(id)) return;
  state.activeCards.push(id);
  state.cardChoices = [];
  const card = cardPool.find(item => item.id === id);
  toast(`Carta activa: ${card.name}`);
  beep(560, 0.14, "triangle");
  render();
  save();
}

function tick() {
  const amount = Math.ceil(autoRate() * autoMultiplier());
  if (amount > 0) addScrap(amount);
  if (hasCard("ghost-typist") && state.lastGain > 0) addScrap(Math.ceil(state.lastGain * 0.18));
  unlockKeyboards();
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
  state.cardChoices = [];
  state.activeCards = [];
  state.equippedKeyboard = "office";
  state.ownedKeyboards = ["office"];
  upgrades.forEach(item => item.owned = 0);
  machines.forEach(item => item.owned = 0);
  toast(`Renacimiento: +${earned} chips`);
  beep(760, 0.18, "triangle");
  render();
  save();
}

function spawnEvent() {
  const labels = [
    { text: "Tecla dorada", reward: 900, asset: "powerup-golden-key-clean.png" },
    { text: "Cofre de switches", reward: 2200, asset: "upgrade-mechanical-switch-clean.png" },
    { text: "Lluvia de teclas", reward: 5400, asset: "powerup-key-rain-clean.png" }
  ];
  const event = labels[Math.floor(Math.random() * labels.length)];
  const chip = document.createElement("button");
  chip.className = "event-chip";
  chip.type = "button";
  chip.innerHTML = `<img src="/Assets/clean/${event.asset}" alt="" /><span>${event.text}</span>`;
  chip.style.left = `${12 + Math.random() * 68}%`;
  chip.style.top = `${18 + Math.random() * 54}%`;
  chip.addEventListener("click", () => {
    const reward = Math.ceil(event.reward * globalMultiplier());
    addScrap(reward);
    floatText(`+${fmt(reward)}`, window.innerWidth / 2, window.innerHeight / 2, true);
    toast(event.text);
    beep(700, 0.12, "triangle");
    chip.remove();
    unlockKeyboards();
    render();
  });
  els.eventLayer.appendChild(chip);
  setTimeout(() => chip.remove(), 8500);
}

function render() {
  const board = equippedKeyboard();
  document.body.dataset.keyboard = board.id;
  els.scrap.textContent = fmt(state.scrap);
  els.perClick.textContent = fmt(Math.ceil(state.perClick * comboMultiplier() * globalMultiplier() * board.clickMult));
  els.level.textContent = state.level;
  els.xpBar.style.width = `${Math.min(100, state.xp / xpNeed() * 100)}%`;
  els.xpText.textContent = `${fmt(state.xp)} / ${fmt(xpNeed())} reputacion`;
  els.combo.textContent = `Combo x${comboMultiplier()}`;
  els.yardTier.textContent = board.name;
  els.yardBonus.textContent = board.passive;
  els.stars.textContent = `${board.rarity} - ${"*".repeat(Math.min(5, 1 + Math.floor(state.level / 12))).padEnd(5, "-")}`;
  els.rebirths.textContent = state.rebirths;
  els.globalMultiplier.textContent = `x${globalMultiplier().toFixed(2)}`;
  els.rebirthBar.style.width = `${Math.min(100, state.scrap / 50000 * 100)}%`;
  els.rebirthText.textContent = state.scrap >= 50000 ? "Listo para renacer" : `Necesitas ${fmt(50000 - state.scrap)} clics`;
  els.rebirthButton.disabled = state.scrap < 50000;
  els.lifetime.textContent = fmt(state.lifetime);
  els.manualClicks.textContent = fmt(state.manualClicks);
  els.autoRate.textContent = `${fmt(Math.ceil(autoRate() * autoMultiplier()))}/s`;
  els.bestCombo.textContent = `x${state.bestCombo}`;
  els.soundButton.textContent = `Sonido: ${state.sound ? "si" : "no"}`;
  renderShop();
  renderMachines();
  renderKeyboards();
  renderCards();
}

function renderShop() {
  els.upgradeCount.textContent = `${upgrades.filter(item => item.owned > 0).length}/${upgrades.length}`;
  els.upgradeList.innerHTML = upgrades.map(item => shopHtml(item, "buyUpgrade")).join("");
}

function renderMachines() {
  els.machineCount.textContent = `${machines.filter(item => item.owned > 0).length}/${machines.length}`;
  els.machineList.innerHTML = machines.map(item => shopHtml(item, "buyMachine", `${fmt(item.rate)}/s - Nv ${item.owned}`)).join("");
}

function renderKeyboards() {
  const unlocked = keyboards.filter(board => state.ownedKeyboards.includes(board.id)).length;
  els.collectionCount.textContent = `${unlocked}/${keyboards.length}`;
  els.parts.innerHTML = keyboards.map(board => {
    const open = state.ownedKeyboards.includes(board.id);
    const active = state.equippedKeyboard === board.id;
    return `<article class="part-card ${open ? "" : "locked"} ${active ? "active" : ""}">
      <span class="part-icon">${open ? board.icon : "LOCK"}</span>
      <strong>${open ? board.name : "Bloqueado"}</strong>
      <small>${open ? board.passive : `${fmt(board.unlockAt)} clics`}</small>
      <button type="button" onclick="equipKeyboard('${board.id}')" ${open && !active ? "" : "disabled"}>${active ? "Activo" : "Equipar"}</button>
    </article>`;
  }).join("");
}

function renderCards() {
  els.deckCount.textContent = `${state.activeCards.length} cartas`;
  els.cardChoices.innerHTML = state.cardChoices.length === 0
    ? `<p class="empty-card-text">Sube cada 3 niveles para elegir una carta.</p>`
    : state.cardChoices.map(id => cardHtml(cardPool.find(card => card.id === id), true)).join("");
  els.activeCards.innerHTML = state.activeCards.length === 0
    ? `<p class="empty-card-text">Sin cartas activas todavia.</p>`
    : state.activeCards.map(id => cardHtml(cardPool.find(card => card.id === id), false)).join("");
}

function cardHtml(card, pickable) {
  return `<article class="build-card ${card.rarity}">
    <span>${card.tag}</span>
    <strong>${card.name}</strong>
    <p>${card.desc}</p>
    ${pickable ? `<button type="button" onclick="pickCard('${card.id}')">Elegir</button>` : ""}
  </article>`;
}

function shopHtml(item, fn, meta = item.desc) {
  const price = cost(item);
  return `<article class="shop-item">
    <span class="shop-icon">${iconHtml(item.icon)}</span>
    <div><strong>${item.name}</strong><small>${meta} - Nv ${item.owned}</small></div>
    <button class="buy" type="button" onclick="${fn}('${item.id}')" ${state.scrap >= price ? "" : "disabled"}>${fmt(price)}</button>
  </article>`;
}

function iconHtml(icon) {
  if (icon.startsWith("IMG:")) {
    return `<img src="/Assets/clean/${icon.replace("IMG:", "")}" alt="" />`;
  }
  return icon;
}

function floatText(text, x, y, critical = false) {
  const zone = els.scrapZone.getBoundingClientRect();
  const el = document.createElement("div");
  el.className = `float ${critical ? "critical" : ""}`;
  el.textContent = text;
  el.style.left = `${Math.max(20, Math.min(zone.width - 120, x - zone.left - 45))}px`;
  el.style.top = `${Math.max(20, Math.min(zone.height - 60, y - zone.top - 20))}px`;
  els.scrapZone.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function sparks(x, y, critical = false) {
  const zone = els.scrapZone.getBoundingClientRect();
  for (let i = 0; i < (critical ? 18 : 8); i++) {
    const spark = document.createElement("i");
    spark.className = `spark ${critical ? "critical" : ""}`;
    spark.style.left = `${x - zone.left}px`;
    spark.style.top = `${y - zone.top}px`;
    spark.style.setProperty("--x", `${-70 + Math.random() * 140}px`);
    spark.style.setProperty("--y", `${-80 + Math.random() * 130}px`);
    els.scrapZone.appendChild(spark);
    setTimeout(() => spark.remove(), 680);
  }
}

function keySound(code, board) {
  const skinOffset = keyboards.findIndex(item => item.id === board.id) * 18;
  const base = code === "Space" ? 150 : code.includes("Shift") || code === "Enter" || code === "Backspace" ? 190 : 235;
  const variation = [...code].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 70;
  beep(base + variation + skinOffset, 0.018, "square");
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

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
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
    state.ownedKeyboards ||= ["office"];
    state.equippedKeyboard ||= "office";
    state.activeCards ||= [];
    state.cardChoices ||= [];
    saved.upgrades?.forEach((owned, index) => upgrades[index].owned = owned);
    saved.machines?.forEach((owned, index) => machines[index].owned = owned);
    unlockKeyboards();
  } catch {
    localStorage.removeItem("keyboard-clicker-save");
  }
}

window.buyUpgrade = buyUpgrade;
window.buyMachine = buyMachine;
window.equipKeyboard = equipKeyboard;
window.pickCard = pickCard;
