const API_KEY = "28cfbd62909153830f6ff76f5e28cc0b";

// ── MOOD DATA ──────────────────────────────────────────────────────────────────
const moods = {
  clear: {
    label: "Radiant",
    colors: ["#7B2D00", "#B84A00", "#D97020", "#F4A623", "#FFD166", "#D97020", "#7B2D00"],
    quotes: [
      "You are the light you have been waiting for.",
      "Even the sun rises for you.",
      "Shine not to outshine — shine because you cannot help it.",
      "This is your golden hour. Step fully into it."
    ],
    food: "Fresh fruit bowl, açaí, something alive and bright",
    outfit: "Yellows, whites, something that lets you be seen",
    affirmation: "Claim this joy. It is yours and you earned it.",
    particles: "sparkle",
    textDark: true
  },
  clouds: {
    label: "Reflective",
    colors: ["#1a1d2e", "#252840", "#323655", "#41466a", "#545880", "#41466a", "#1a1d2e"],
    quotes: [
      "Even covered skies hold light. So do you.",
      "In stillness, the deepest clarity finds you.",
      "Not every quiet is emptiness. Some silences are full.",
      "You are gathering yourself. That is enough."
    ],
    food: "Avocado toast, a warm grain bowl, something nourishing",
    outfit: "Soft greys, linen, something effortless and unhurried",
    affirmation: "Stillness is not stagnation. You are processing.",
    particles: "none",
    textDark: false
  },
  rain: {
    label: "Melancholic",
    colors: ["#060f1c", "#0c1a30", "#122545", "#183059", "#1e3b6e", "#183059", "#060f1c"],
    quotes: [
      "Even the sky cries sometimes. You are allowed to.",
      "Rain is just the sky loving the earth a little too hard.",
      "Let it pass through you. You are not the storm.",
      "Grief is love with nowhere to go — for now."
    ],
    food: "Warm lentil soup or rooibos tea with honey",
    outfit: "Soft oversized knit, cosy socks, something that hugs you back",
    affirmation: "Healing is not linear. Rest is resistance.",
    particles: "rain",
    textDark: false
  },
  drizzle: {
    label: "Wistful",
    colors: ["#0a1a16", "#112420", "#182f29", "#1f3b32", "#26483c", "#1f3b32", "#0a1a16"],
    quotes: [
      "A gentle ache — proof that you have loved deeply.",
      "Wistfulness is memory wrapped in softness.",
      "Some feelings are not meant to be fixed. Just felt.",
      "You carry more tenderness than you know."
    ],
    food: "Cinnamon oats, a warm golden latte, something that holds you",
    outfit: "Earth tones, a light trench, something grounding and real",
    affirmation: "What passes through you does not define you.",
    particles: "drizzle",
    textDark: false
  },
  thunderstorm: {
    label: "Turbulent",
    colors: ["#03030c", "#07071a", "#0b0b26", "#100f32", "#16143e", "#100f32", "#03030c"],
    quotes: [
      "The storm is not your home. It is just passing through.",
      "Even lightning has to touch ground to release its power.",
      "Turbulence is proof you are not stagnant.",
      "After every storm, the air is cleaner. So will you be."
    ],
    food: "Dark chocolate, spicy noodles, something bold and grounding",
    outfit: "All black. Armour. You are powerful even now.",
    affirmation: "This intensity is temporary. Your strength is permanent.",
    particles: "storm",
    textDark: false
  },
  snow: {
    label: "Still",
    colors: ["#091422", "#0f1e35", "#152948", "#1b345a", "#223f6e", "#1b345a", "#091422"],
    quotes: [
      "The world grows quiet so you can hear yourself.",
      "In the silence of snow, everything softens.",
      "Rest is not laziness. It is winter preparing for spring.",
      "You are allowed to be as still as snowfall."
    ],
    food: "Hot chocolate, cinnamon tea, something warming from the inside",
    outfit: "Cream, ivory, soft textures — wrap yourself in peace",
    affirmation: "In stillness, you remember who you are.",
    particles: "snow",
    textDark: false
  },
  mist: {
    label: "Mystical",
    colors: ["#091510", "#101e17", "#17281e", "#1e3225", "#263d2d", "#1e3225", "#091510"],
    quotes: [
      "Not all things are meant to be seen clearly yet.",
      "The mist keeps secrets you are not ready for. Trust it.",
      "Mystery is just truth in its oldest form.",
      "Stand at the edge of what you know. The rest is magic."
    ],
    food: "Herbal tea, cucumber water, something cleansing and light",
    outfit: "Sage greens, soft layers, something that feels like forest",
    affirmation: "Trust what you cannot yet see fully.",
    particles: "mist",
    textDark: false
  },
  fog: {
    label: "Uncertain",
    colors: ["#111111", "#1a1a1a", "#232323", "#2d2d2d", "#383838", "#2d2d2d", "#111111"],
    quotes: [
      "Clarity will come. For now, one step is enough.",
      "Fog is not the end of the road. You just cannot see it yet.",
      "Uncertainty is not failure. It is the beginning of knowing.",
      "Walk slowly. The path will reveal itself."
    ],
    food: "Simple warm porridge, something grounding and familiar",
    outfit: "Neutral layers, comfort over statement today",
    affirmation: "You do not need the whole staircase. Just the next step.",
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
      <line x1="60" y1="6" x2="60" y2="20"/>
      <line x1="60" y1="100" x2="60" y2="114"/>
      <line x1="6" y1="60" x2="20" y2="60"/>
      <line x1="100" y1="60" x2="114" y2="60"/>
      <line x1="19" y1="19" x2="29" y2="29"/>
      <line x1="91" y1="91" x2="101" y2="101"/>
      <line x1="101" y1="19" x2="91" y2="29"/>
      <line x1="19" y1="101" x2="29" y2="91"/>
    </g>
  </svg>`,

  clouds: `<svg viewBox="0 0 150 100" class="weather-svg" xmlns="http://www.w3.org/2000/svg">
    <path class="cloud-back" d="M62,76 Q44,76 44,61 Q44,46 58,46 Q60,33 74,31 Q86,21 100,29 Q112,21 120,31 Q134,31 134,46 Q142,49 140,61 Q138,76 122,76 Z" fill="#5a6080" opacity="0.55"/>
    <path class="cloud-front" d="M12,84 Q0,84 0,70 Q0,56 14,56 Q16,42 30,40 Q42,30 56,38 Q66,30 76,38 Q88,38 88,52 Q98,54 96,68 Q94,82 78,82 Z" fill="#8a90b8"/>
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
function getMoodKey(weatherMain) {
  const w = weatherMain.toLowerCase();
  if (w.includes("thunderstorm")) return "thunderstorm";
  if (w.includes("drizzle")) return "drizzle";
  if (w.includes("rain")) return "rain";
  if (w.includes("snow")) return "snow";
  if (w.includes("mist") || w.includes("haze")) return "mist";
  if (w.includes("fog")) return "fog";
  if (w.includes("cloud")) return "clouds";
  if (w.includes("clear")) return "clear";
  return "clouds";
}

function formatDate(date) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const h = String(date.getHours()).padStart(2,"0");
  const m = String(date.getMinutes()).padStart(2,"0");
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} · ${h}:${m}`;
}

// ── QUOTE ROTATION ─────────────────────────────────────────────────────────────
let quoteInterval = null;

function startQuoteRotation(quotes) {
  clearInterval(quoteInterval);
  let idx = 0;
  const el = document.getElementById("poem-line");
  el.classList.remove("fading");
  el.textContent = quotes[0];

  quoteInterval = setInterval(() => {
    idx = (idx + 1) % quotes.length;
    el.classList.add("fading");
    setTimeout(() => {
      el.textContent = quotes[idx];
      el.classList.remove("fading");
    }, 500);
  }, 5000);
}

// ── PARTICLES ──────────────────────────────────────────────────────────────────
function createParticles(type) {
  const container = document.getElementById("particles");
  container.innerHTML = "";
  if (type === "none") return;

  const configs = {
    rain:    { count: 38, cls: "p-rain" },
    drizzle: { count: 24, cls: "p-drizzle" },
    snow:    { count: 28, cls: "p-snow" },
    storm:   { count: 44, cls: "p-storm" },
    sparkle: { count: 20, cls: "p-sparkle" },
    mist:    { count: 9,  cls: "p-mist" },
    fog:     { count: 11, cls: "p-fog" }
  };

  const cfg = configs[type];
  if (!cfg) return;

  for (let i = 0; i < cfg.count; i++) {
    const p = document.createElement("div");
    p.className = `particle ${cfg.cls}`;
    p.style.left = (Math.random() * 100) + "%";
    p.style.animationDelay = (Math.random() * 5) + "s";
    p.style.animationDuration = (Math.random() * 2 + 1.5) + "s";

    if (type === "sparkle") {
      p.style.top = (30 + Math.random() * 55) + "%";
      p.style.animationDuration = (Math.random() * 3 + 2) + "s";
    } else if (type === "mist" || type === "fog") {
      p.style.top = (5 + Math.random() * 85) + "%";
      p.style.animationDuration = (Math.random() * 8 + 7) + "s";
    }
    container.appendChild(p);
  }
}

// ── APPLY MOOD ─────────────────────────────────────────────────────────────────
function applyMood(moodKey) {
  const mood = moods[moodKey];
  const app = document.getElementById("app");
  const c = mood.colors;

  // Animated gradient background
  app.style.backgroundImage =
    `linear-gradient(135deg, ${c[0]} 0%, ${c[1]} 17%, ${c[2]} 34%, ${c[3]} 50%, ${c[4]} 67%, ${c[5]} 84%, ${c[6]} 100%)`;

  // Text colour
  app.style.color = mood.textDark ? "#1a0f00" : "#f0ede8";

  // SVG icon
  document.getElementById("icon-wrap").innerHTML = weatherIcons[moodKey] || weatherIcons.clouds;

  // Mood label
  document.getElementById("mood-label").textContent = `✦ ${mood.label}`;

  // Suggestions
  document.getElementById("food-suggestion").textContent = mood.food;
  document.getElementById("outfit-suggestion").textContent = mood.outfit;
  document.getElementById("affirmation").textContent = mood.affirmation;

  // Rotating quotes
  startQuoteRotation(mood.quotes);

  // Particles
  createParticles(mood.particles);
}

// ── FETCH ──────────────────────────────────────────────────────────────────────
async function searchCity() {
  const city = document.getElementById("city-input").value.trim();
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      alert("City not found. Try again.");
      return;
    }

    const weatherMain = data.weather[0].main;
    const moodKey = getMoodKey(weatherMain);

    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("weather-desc").textContent =
      data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    document.getElementById("humidity").textContent = `💧 ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `🌬 ${(data.wind.speed * 3.6).toFixed(1)} km/h`;
    document.getElementById("current-date").textContent = formatDate(new Date());

    document.getElementById("weather-card").style.display = "block";
    document.getElementById("suggestions").style.display = "grid";

    applyMood(moodKey);

  } catch (err) {
    alert("Something went wrong. Check your connection.");
    console.error(err);
  }
}

document.getElementById("city-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchCity();
});

// ── INIT: warm default landing ─────────────────────────────────────────────────
(function init() {
  document.getElementById("icon-wrap").innerHTML = weatherIcons.clouds;
  startQuoteRotation([
    "The sky holds stories. Ask it one.",
    "Weather is the world's oldest poem.",
    "Every city has its own kind of sky.",
    "What does your sky feel like today?"
  ]);
})();
