const API_KEY = "28cfbd62909153830f6ff76f5e28cc0b";

// ── MOOD DATA ──────────────────────────────────────────────────────────────────
const moods = {
  clear: {
    label: "Radiant",
    colors: ["#8B2500","#C44A00","#E87020","#F49830","#F4C040","#E87020","#8B2500"],
    quotes: [
      "You are the light you have been waiting for.",
      "Even the sun rises for you.",
      "Shine not to outshine — shine because you cannot help it.",
      "This is your golden hour. Step fully into it.",
      "The African sun asks nothing of you. It simply gives.",
      "Your brightness is not borrowed. It belongs to you."
    ],
    eat: [
      "Juicy mango with chili salt — sweet, bold, alive",
      "Fresh papaya with lime and a pinch of ginger",
      "Bunny chow filled with golden Durban curry",
      "Watermelon slices cold from the shade",
      "Maize porridge with roasted groundnuts and honey",
      "Spit-roasted sweet potato with herb butter"
    ],
    wear: [
      "Bold kente cloth — every colour has been earned",
      "A flowing kaftan in sunrise orange, sun-kissed shoulders",
      "Ankara print, head high, unapologetically seen",
      "Shweshwe blue — pattern is your power",
      "White linen, effortless, luminous in the light",
      "Gold jewellery, warm skin — a whole sunset in yourself"
    ],
    remember: [
      "Ubuntu — I am because we are.",
      "The African sun never sets on what is meant to shine.",
      "Joy is resistance. Choose it anyway.",
      "You were made in the image of the sunrise.",
      "Claim this. You did not survive this far to play small.",
      "Your light does not dim anyone else's. Blaze."
    ],
    particles: "sparkle",
    textDark: true
  },

  clouds: {
    label: "Reflective",
    colors: ["#1a1408","#282010","#362c18","#443820","#52462a","#443820","#1a1408"],
    quotes: [
      "Even covered skies hold light. So do you.",
      "In stillness, the deepest clarity finds you.",
      "Not every quiet is emptiness. Some silences are full.",
      "You are gathering yourself. That is enough.",
      "The baobab does not rush. Neither must you.",
      "The savanna breathes slowly. Breathe with it."
    ],
    eat: [
      "Slow stew of black-eyed peas with tomato and thyme",
      "Millet porridge with wild honey and toasted sesame",
      "A quiet bowl of groundnut soup, fragrant and grounding",
      "Herbed flatbread with hummus and smoky harissa",
      "Coconut rice, fragrant, unhurried — exactly like you",
      "Plantain chips with tamarind dipping sauce"
    ],
    wear: [
      "Greyed-out wax print — subdued but still beautiful",
      "Simple linen agbada — you need not explain yourself today",
      "Earth-tone wrap dress, honest, grounded, enough",
      "Oversized bubu in clay brown — room to breathe",
      "Soft cotton, worn-in, familiar as your mother's voice",
      "The colour of soil after rain. That is you today."
    ],
    remember: [
      "Even overcast skies are still sky.",
      "You do not owe anyone your brightness today.",
      "Reflection is the beginning of all wisdom.",
      "The baobab stores water for the dry season. So do you.",
      "Patience is the practice of the highlands.",
      "Your stillness has intelligence. Trust it."
    ],
    particles: "none",
    textDark: false
  },

  rain: {
    label: "Melancholic",
    colors: ["#040c14","#081620","#0c202e","#102a3e","#16364e","#102a3e","#040c14"],
    quotes: [
      "Even the sky cries sometimes. You are allowed to.",
      "Rain is just the sky loving the earth a little too hard.",
      "Let it pass through you. You are not the storm.",
      "Grief is love with nowhere to go — for now.",
      "The rains come to heal what the sun has dried.",
      "In Africa, rain is a blessing. So is your release."
    ],
    eat: [
      "Peanut soup steaming in a clay pot",
      "Jollof rice, slow-cooked, smoky, deep as memory",
      "Kenyan chai spiced with cardamom and black pepper",
      "Warm fufu with a rich groundnut stew",
      "Roasted plantain, soft and sweet and honest",
      "Ugali with sukuma wiki and slow-fried onions"
    ],
    wear: [
      "Heavy mud-cloth wrap — wide, grounding, warrior-made",
      "Dark indigo dashiki — dignified even in grief",
      "Oversized wax-print coat — rain cannot reach you",
      "Thick woven shawl from the highlands, heavy with love",
      "Soft earth-toned kaftan, slow and intentional",
      "Your grandmother's fabric. It remembers. So can you."
    ],
    remember: [
      "The rain came before you and will stay after. You are the in-between.",
      "Crying is sacred here. The land understands.",
      "Healing has its own rhythm. Respect it.",
      "Even the Nile floods before it nourishes the earth.",
      "You are allowed to be heavy today.",
      "Rest is an act of radical, revolutionary self-love."
    ],
    particles: "rain",
    textDark: false
  },

  drizzle: {
    label: "Wistful",
    colors: ["#0a1408","#12200e","#1a2c18","#223820","#2a4428","#223820","#0a1408"],
    quotes: [
      "A gentle ache — proof that you have loved deeply.",
      "Wistfulness is memory wrapped in softness.",
      "Some feelings are not meant to be fixed. Just felt.",
      "You carry more tenderness than you know.",
      "The drizzle does not know it is healing the earth. Neither do you.",
      "Longing is love with no address yet."
    ],
    eat: [
      "Sweet potato fritters with ginger chutney",
      "Rooibos tea with a slow spoon of wild honey",
      "Groundnut biscuits from your grandmother's recipe",
      "Soft chapati, warm, torn by hand, simple",
      "Coconut mandazi — light and sweet like early memory",
      "Masala chai, this time slower, this time for you"
    ],
    wear: [
      "Dusty rose kanga, ocean-soft and slow",
      "Sage green linen — something that breathes with you",
      "A light kikoi in earth tones, Swahili coast morning",
      "Boho Swahili beads on warm brown skin",
      "The fabric your aunt brought back from the market",
      "Layers, because wistfulness deserves depth"
    ],
    remember: [
      "You have outgrown some things. That is growth, not loss.",
      "Tenderness is strength with a softer name.",
      "You are allowed to miss what no longer fits.",
      "Something beautiful is composting in you right now.",
      "Gentle does not mean weak. The drizzle fills the river.",
      "What you feel is valid. Let it move through you."
    ],
    particles: "drizzle",
    textDark: false
  },

  thunderstorm: {
    label: "Turbulent",
    colors: ["#030308","#08080f","#0e0e1a","#141425","#1c1c30","#141425","#030308"],
    quotes: [
      "The storm is not your home. It is just passing through.",
      "Even lightning has to touch ground to release its power.",
      "Turbulence is proof you are not stagnant.",
      "After every storm, the air is cleaner. So will you be.",
      "African storms do not apologise for their thunder.",
      "You were built for pressure. Diamonds are."
    ],
    eat: [
      "Spiced lamb with berbere — bold, warming, unapologetic",
      "Dark Ethiopian coffee, thick and slow and ancient",
      "Smoked catfish and scotch bonnet pepper stew",
      "Injera topped with fiery misir wot — fire meets fire",
      "Suya on a skewer — smoke, heat, no apologies",
      "Boiled plantain with pepper sauce. Power food."
    ],
    wear: [
      "All black. Agbada energy. Untouchable and free.",
      "Deep indigo bogolan — warrior cloth, warrior day",
      "Your heaviest fabric. You are armour today.",
      "Leather and beads — you were built for exactly this",
      "Dark kente — even in chaos, there is always pattern",
      "Wrap yourself in midnight. The stars come later."
    ],
    remember: [
      "The storm is proof the atmosphere has power. So do you.",
      "Lightning never strikes the same place twice. You are transforming.",
      "Even Victoria Falls had to fall to reach its greatness.",
      "Turbulence is the price of altitude. Keep climbing.",
      "After this — stillness. After this — bloom.",
      "You have survived every hard day until now. This is no different."
    ],
    particles: "storm",
    textDark: false
  },

  snow: {
    label: "Still",
    colors: ["#07101e","#0f1a2c","#17243c","#1f2e4c","#27385c","#1f2e4c","#07101e"],
    quotes: [
      "The world grows quiet so you can hear yourself.",
      "In the silence of snow, everything softens.",
      "Rest is not laziness. It is winter preparing for spring.",
      "You are allowed to be as still as snowfall.",
      "Kilimanjaro wears snow at the equator. You are allowed contradictions.",
      "Peace is not the absence of noise. It is a choice you make."
    ],
    eat: [
      "Spiced milk with cardamom and dried rose petals",
      "Warm injera with slow dark honey from the highlands",
      "Ethiopian highland barley stew — ancient, grounding, true",
      "Hot hibiscus tea, deep red as a remembered sunset",
      "Slow-cooked lentils with clarified butter and spice",
      "Smoky black beans with ginger and lemon"
    ],
    wear: [
      "White cotton, clean as Kilimanjaro at dawn",
      "Ivory shawl from the Ethiopian highlands, unhurried",
      "Cream and bone — stripped back, essential, honest",
      "Heavy blanket fabric, highland weave, full of warmth",
      "Simple white kanga — the answer today is peace",
      "Undyed linen. Nothing to prove. Everything to feel."
    ],
    remember: [
      "Kilimanjaro wears snow at the equator. Contradictions are allowed.",
      "Stillness is the loudest kind of courage.",
      "The seed does nothing visible in winter — but it is not nothing.",
      "Your silence is not absence. It is depth.",
      "Peace is a practice, not a destination.",
      "In stillness, you remember who you were before the noise."
    ],
    particles: "snow",
    textDark: false
  },

  mist: {
    label: "Mystical",
    colors: ["#070e07","#0f1a0f","#162418","#1e3020","#263c28","#1e3020","#070e07"],
    quotes: [
      "Not all things are meant to be seen clearly yet.",
      "The mist keeps secrets you are not ready for. Trust it.",
      "Mystery is just truth in its oldest form.",
      "Stand at the edge of what you know. The rest is magic.",
      "The healer waits until the plant is ready to be harvested.",
      "African forests hold their secrets gently. So can you."
    ],
    eat: [
      "Forest mushroom soup with wild herbs and dark stock",
      "Moringa leaf stew — ancient medicine, ancient wisdom",
      "Dark fermented sorghum porridge, thick with history",
      "Jungle fruits — guava, soursop, starfruit, alive with magic",
      "Dried baobab powder in warm water with lemon and ginger",
      "Hibiscus and ginger brew — sacred, slow, ceremonial"
    ],
    wear: [
      "Sage and moss tones — dress like the forest today",
      "Hand-dyed indigo — the colour of deep water and old sky",
      "Flowing layers in forest green, movement like mist",
      "Batik patterned wrap — organic, alive, speaking softly",
      "Reed and earth jewellery — adorned from the ground up",
      "Adire fabric, the colour of sacred secrets"
    ],
    remember: [
      "The forest does not explain its shadows.",
      "Not all answers arrive quickly. Sit in the not-knowing.",
      "Your intuition is older than your fear. Trust it.",
      "Mystery is sacred in African tradition. So are you.",
      "Some things reveal themselves only in stillness.",
      "The ancestors whisper in the mist. You are not alone."
    ],
    particles: "mist",
    textDark: false
  },

  fog: {
    label: "Uncertain",
    colors: ["#0a0a0a","#141414","#1e1e1e","#282828","#323232","#242424","#0a0a0a"],
    quotes: [
      "Clarity will come. For now, one step is enough.",
      "Fog is not the end of the road. You just cannot see it yet.",
      "Uncertainty is not failure. It is the beginning of knowing.",
      "Walk slowly. The path will reveal itself.",
      "The griot says: even the lost find their way home.",
      "You do not need to see the whole staircase. Just the next step."
    ],
    eat: [
      "Plain ugali — simple, honest, grounding, enough",
      "Salted groundnuts and a long glass of cool water",
      "Millet flatbread with shea butter, slow and nourishing",
      "Slow black tea — no sugar today, just warmth",
      "Roasted maize on the side of the road, familiar",
      "Fermented milk — sharp, clarifying, ancestral"
    ],
    wear: [
      "Grey linen, uncomplicated, no performance required",
      "Whatever makes you feel held today. That is enough.",
      "A simple cotton wrap — nothing to prove",
      "The familiar. The safe. The known. The true.",
      "Neutral tones — you are conserving energy wisely",
      "Comfortable fabric like a second skin — rest inside it"
    ],
    remember: [
      "The road is there even when you cannot see it.",
      "Uncertainty is the soil of every great beginning.",
      "The griot says: even the lost find their way home.",
      "Breathe. Africa has survived everything. So will you.",
      "One honest step forward is always enough.",
      "You are not lost. You are between chapters."
    ],
    particles: "fog",
    textDark: false
  }
};

// ── SVG WEATHER ICONS ──────────────────────────────────────────────────────────
const weatherIcons = {
  clear: `<svg viewBox="0 0 120 120" class="weather-svg" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="46" fill="rgba(246,166,35,0.07)" class="sun-aura2"/>
    <circle cx="60" cy="60" r="33" fill="rgba(246,166,35,0.13)" class="sun-aura"/>
    <circle cx="60" cy="60" r="20" fill="#f6a623" class="sun-core"/>
    <circle cx="60" cy="60" r="14" fill="#fff7a0" opacity="0.5" class="sun-inner"/>
    <g class="sun-rays" stroke="#f6a623" stroke-width="3" stroke-linecap="round">
      <line x1="60" y1="6" x2="60" y2="20"/><line x1="60" y1="100" x2="60" y2="114"/>
      <line x1="6" y1="60" x2="20" y2="60"/><line x1="100" y1="60" x2="114" y2="60"/>
      <line x1="19" y1="19" x2="29" y2="29"/><line x1="91" y1="91" x2="101" y2="101"/>
      <line x1="101" y1="19" x2="91" y2="29"/><line x1="19" y1="101" x2="29" y2="91"/>
    </g>
  </svg>`,

  clouds: `<svg viewBox="0 0 150 100" class="weather-svg" xmlns="http://www.w3.org/2000/svg">
    <path class="cloud-back" d="M62,76 Q44,76 44,61 Q44,46 58,46 Q60,33 74,31 Q86,21 100,29 Q112,21 120,31 Q134,31 134,46 Q142,49 140,61 Q138,76 122,76 Z" fill="#5a5c72" opacity="0.55"/>
    <path class="cloud-front" d="M12,84 Q0,84 0,70 Q0,56 14,56 Q16,42 30,40 Q42,30 56,38 Q66,30 76,38 Q88,38 88,52 Q98,54 96,68 Q94,82 78,82 Z" fill="#888aaa"/>
  </svg>`,

  rain: `<svg viewBox="0 0 130 115" class="weather-svg" xmlns="http://www.w3.org/2000/svg">
    <path class="cloud-body" d="M18,62 Q6,62 6,50 Q6,36 20,36 Q22,23 38,21 Q50,10 66,17 Q76,10 86,19 Q100,19 100,34 Q110,37 108,50 Q106,62 90,62 Z" fill="#3a5870"/>
    <line class="drop d1" x1="32" y1="70" x2="22" y2="92" stroke="#88b4d4" stroke-width="2.5" stroke-linecap="round"/>
    <line class="drop d2" x1="52" y1="70" x2="42" y2="92" stroke="#88b4d4" stroke-width="2.5" stroke-linecap="round"/>
    <line class="drop d3" x1="72" y1="70" x2="62" y2="92" stroke="#88b4d4" stroke-width="2.5" stroke-linecap="round"/>
    <line class="drop d4" x1="90" y1="70" x2="80" y2="92" stroke="#88b4d4" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  drizzle: `<svg viewBox="0 0 130 115" class="weather-svg" xmlns="http://www.w3.org/2000/svg">
    <path class="cloud-body" d="M18,60 Q6,60 6,48 Q6,35 20,35 Q22,22 38,20 Q50,10 66,17 Q76,10 86,19 Q100,19 100,33 Q110,36 108,49 Q106,60 90,60 Z" fill="#3a6055"/>
    <circle class="drop d1" cx="30" cy="73" r="3.5" fill="#88c4aa"/>
    <circle class="drop d2" cx="52" cy="80" r="3.5" fill="#88c4aa"/>
    <circle class="drop d3" cx="72" cy="73" r="3.5" fill="#88c4aa"/>
    <circle class="drop d4" cx="92" cy="80" r="3.5" fill="#88c4aa"/>
    <circle class="drop d5" cx="40" cy="94" r="2.5" fill="#88c4aa" opacity="0.7"/>
    <circle class="drop d6" cx="62" cy="98" r="2.5" fill="#88c4aa" opacity="0.7"/>
    <circle class="drop d7" cx="82" cy="94" r="2.5" fill="#88c4aa" opacity="0.7"/>
  </svg>`,

  thunderstorm: `<svg viewBox="0 0 130 125" class="weather-svg" xmlns="http://www.w3.org/2000/svg">
    <path class="cloud-body" d="M16,65 Q4,65 4,52 Q4,38 18,38 Q20,24 36,22 Q50,10 66,18 Q78,10 88,20 Q102,20 102,34 Q112,37 110,52 Q108,65 92,65 Z" fill="#1a1a38"/>
    <polygon class="lightning" points="62,68 52,94 64,88 55,118 78,84 64,91" fill="#f4e03c"/>
  </svg>`,

  snow: `<svg viewBox="0 0 130 120" class="weather-svg" xmlns="http://www.w3.org/2000/svg">
    <path class="cloud-body" d="M18,58 Q6,58 6,46 Q6,34 20,34 Q22,21 36,20 Q48,10 62,16 Q72,10 82,18 Q94,18 94,31 Q104,34 102,47 Q100,58 88,58 Z" fill="#7898c8"/>
    <text class="flake f1" x="26" y="84" font-size="20" fill="white" text-anchor="middle">❄</text>
    <text class="flake f2" x="50" y="93" font-size="14" fill="white" text-anchor="middle" opacity="0.8">❄</text>
    <text class="flake f3" x="76" y="84" font-size="20" fill="white" text-anchor="middle">❄</text>
    <text class="flake f4" x="100" y="93" font-size="14" fill="white" text-anchor="middle" opacity="0.8">❄</text>
  </svg>`,

  mist: `<svg viewBox="0 0 150 110" class="weather-svg" xmlns="http://www.w3.org/2000/svg">
    <path class="mist-line ml1" d="M6,20 Q37,13 75,20 Q113,27 144,20" stroke="#7ab893" stroke-width="5.5" fill="none" stroke-linecap="round"/>
    <path class="mist-line ml2" d="M14,40 Q45,33 75,40 Q105,47 136,40" stroke="#7ab893" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path class="mist-line ml3" d="M4,60 Q37,53 75,60 Q113,67 146,60" stroke="#7ab893" stroke-width="4.5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path class="mist-line ml4" d="M10,80 Q43,73 75,80 Q107,87 140,80" stroke="#7ab893" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path class="mist-line ml5" d="M6,100 Q40,93 75,100 Q110,107 144,100" stroke="#7ab893" stroke-width="3.5" fill="none" stroke-linecap="round" opacity="0.4"/>
  </svg>`,

  fog: `<svg viewBox="0 0 150 110" class="weather-svg" xmlns="http://www.w3.org/2000/svg">
    <path class="fog-line fl1" d="M4,16 Q37,9 75,16 Q113,23 146,16" stroke="#999" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path class="fog-line fl2" d="M8,36 Q40,29 75,36 Q110,43 142,36" stroke="#999" stroke-width="6.5" fill="none" stroke-linecap="round" opacity="0.9"/>
    <path class="fog-line fl3" d="M4,56 Q37,49 75,56 Q113,63 146,56" stroke="#999" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path class="fog-line fl4" d="M8,76 Q40,69 75,76 Q110,83 142,76" stroke="#999" stroke-width="5.5" fill="none" stroke-linecap="round" opacity="0.55"/>
    <path class="fog-line fl5" d="M4,96 Q37,89 75,96 Q113,103 146,96" stroke="#999" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.35"/>
  </svg>`
};

// ── HELPERS ────────────────────────────────────────────────────────────────────
function getMoodKey(w) {
  w = w.toLowerCase();
  if (w.includes("thunderstorm")) return "thunderstorm";
  if (w.includes("drizzle"))      return "drizzle";
  if (w.includes("rain"))         return "rain";
  if (w.includes("snow"))         return "snow";
  if (w.includes("mist") || w.includes("haze")) return "mist";
  if (w.includes("fog"))          return "fog";
  if (w.includes("cloud"))        return "clouds";
  if (w.includes("clear"))        return "clear";
  return "clouds";
}

function formatDate(date) {
  const days   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const h = String(date.getHours()).padStart(2,"0");
  const m = String(date.getMinutes()).padStart(2,"0");
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} · ${h}:${m}`;
}

// ── ROTATION HELPERS ───────────────────────────────────────────────────────────
let quoteInterval = null;
let suggestionIntervals = [];

function fadeText(el, newText) {
  el.classList.add("fading");
  setTimeout(() => {
    el.textContent = newText;
    el.classList.remove("fading");
  }, 480);
}

function startRotation(elementId, items, intervalMs) {
  const el = document.getElementById(elementId);
  if (!el) return null;
  let idx = 0;
  el.textContent = items[0];
  return setInterval(() => {
    idx = (idx + 1) % items.length;
    fadeText(el, items[idx]);
  }, intervalMs);
}

function clearAllIntervals() {
  clearInterval(quoteInterval);
  suggestionIntervals.forEach(id => clearInterval(id));
  suggestionIntervals = [];
}

// ── PARTICLES ──────────────────────────────────────────────────────────────────
function createParticles(type) {
  const container = document.getElementById("particles");
  container.innerHTML = "";
  if (type === "none") return;

  const configs = {
    rain:    { count: 38, cls: "p-rain"    },
    drizzle: { count: 24, cls: "p-drizzle" },
    snow:    { count: 28, cls: "p-snow"    },
    storm:   { count: 44, cls: "p-storm"   },
    sparkle: { count: 22, cls: "p-sparkle" },
    mist:    { count: 9,  cls: "p-mist"    },
    fog:     { count: 11, cls: "p-fog"     },
    stars:   { count: 70, cls: "p-star"    }
  };

  const cfg = configs[type];
  if (!cfg) return;

  for (let i = 0; i < cfg.count; i++) {
    const p = document.createElement("div");
    p.className = `particle ${cfg.cls}`;
    p.style.left = (Math.random() * 100) + "%";
    p.style.animationDelay    = (Math.random() * 6) + "s";
    p.style.animationDuration = (Math.random() * 2 + 1.5) + "s";

    if (type === "stars") {
      p.style.top = (Math.random() * 72) + "%";
      p.style.animationDuration = (Math.random() * 4 + 2) + "s";
      // vary star sizes
      const size = (Math.random() * 2.5 + 1).toFixed(1) + "px";
      p.style.width  = size;
      p.style.height = size;
    } else if (type === "sparkle") {
      p.style.top = (25 + Math.random() * 55) + "%";
      p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    } else if (type === "mist" || type === "fog") {
      p.style.top = (5 + Math.random() * 80) + "%";
      p.style.animationDuration = (Math.random() * 8 + 7) + "s";
    }

    container.appendChild(p);
  }

  // Shooting star — only on clear/sparkle
  if (type === "sparkle") {
    spawnShootingStar();
    setInterval(spawnShootingStar, 7000);
  }
}

function spawnShootingStar() {
  const container = document.getElementById("particles");
  const s = document.createElement("div");
  s.className = "shooting-star";
  s.style.top  = (5 + Math.random() * 30) + "%";
  s.style.left = (Math.random() * 60) + "%";
  s.style.animationDuration = (Math.random() * 0.8 + 0.6) + "s";
  container.appendChild(s);
  setTimeout(() => s.remove(), 2000);
}

// ── APPLY MOOD ─────────────────────────────────────────────────────────────────
function applyMood(moodKey) {
  const mood = moods[moodKey];
  const app  = document.getElementById("app");
  const c    = mood.colors;

  clearAllIntervals();

  // Animated gradient
  app.style.backgroundImage =
    `linear-gradient(135deg, ${c[0]} 0%, ${c[1]} 17%, ${c[2]} 34%, ${c[3]} 50%, ${c[4]} 67%, ${c[5]} 84%, ${c[6]} 100%)`;
  app.style.color = mood.textDark ? "#1a0a00" : "#f0ede8";

  // Icon
  document.getElementById("icon-wrap").innerHTML = weatherIcons[moodKey] || weatherIcons.clouds;

  // Mood label
  document.getElementById("mood-label").textContent = `✦ ${mood.label}`;

  // Main quote rotation (6s)
  quoteInterval = startRotation("poem-line", mood.quotes, 6000);

  // Suggestion rotations (staggered offsets: 4s, 4.5s, 5s)
  suggestionIntervals.push(startRotation("food-suggestion",    mood.eat,      4000));
  suggestionIntervals.push(startRotation("outfit-suggestion",  mood.wear,     4500));
  suggestionIntervals.push(startRotation("affirmation",        mood.remember, 5000));

  // Particles
  createParticles(mood.particles);
}

// ── FETCH ──────────────────────────────────────────────────────────────────────
async function searchCity() {
  const city = document.getElementById("city-input").value.trim();
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  const card = document.getElementById("weather-card");
  card.classList.add("loading");

  try {
    const res  = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      alert("City not found. Try again.");
      card.classList.remove("loading");
      return;
    }

    const moodKey = getMoodKey(data.weather[0].main);

    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("weather-desc").textContent =
      data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    document.getElementById("humidity").textContent = `💧 ${data.main.humidity}%`;
    document.getElementById("wind").textContent     = `🌬 ${(data.wind.speed * 3.6).toFixed(1)} km/h`;
    document.getElementById("current-date").textContent = formatDate(new Date());

    card.style.display = "block";
    card.classList.remove("loading");
    document.getElementById("suggestions").style.display = "grid";

    applyMood(moodKey);

  } catch (err) {
    alert("Something went wrong. Check your connection.");
    card.classList.remove("loading");
    console.error(err);
  }
}

document.getElementById("city-input").addEventListener("keypress", e => {
  if (e.key === "Enter") searchCity();
});

// ── INIT: warm African night sky landing ───────────────────────────────────────
(function init() {
  document.getElementById("icon-wrap").innerHTML = weatherIcons.clouds;
  createParticles("stars");
  quoteInterval = startRotation("poem-line", [
    "The sky holds stories. Ask it one.",
    "Weather is the world's oldest poem.",
    "Every city has its own kind of sky.",
    "Somewhere in Africa, the sun is rising right now.",
    "The stars have always known your name.",
    "What does your sky feel like today?"
  ], 5000);
})();
