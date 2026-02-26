const API_KEY = "28cfbd62909153830f6ff76f5e28cc0b";

// ── MOOD MAP ──────────────────────────────────────────────────────────────────
const moods = {
  rain: {
    label: "Melancholic",
    gradient: "linear-gradient(135deg, #1c2e4a, #3a5068, #7a9eb5)",
    poem: "Even the sky cries sometimes. You are allowed to.",
    food: "Warm lentil soup or rooibos tea with honey",
    outfit: "Soft oversized knit, cosy socks, something that hugs you back",
    affirmation: "Healing is not linear. Rest is resistance.",
  },
  drizzle: {
    label: "Wistful",
    gradient: "linear-gradient(135deg, #2d4a5e, #4a7a8a, #8ab4b8)",
    poem: "A gentle ache — proof that you have loved deeply.",
    food: "Cinnamon oats or a warm golden latte",
    outfit: "Earth tones, a light trench, something grounding",
    affirmation: "What passes through you does not define you.",
  },
  thunderstorm: {
    label: "Turbulent",
    gradient: "linear-gradient(135deg, #0d0d1a, #1a1a3a, #2d2d5e)",
    poem: "The storm is not your home. It is just passing through.",
    food: "Dark chocolate, spicy noodles, something bold",
    outfit: "All black. Armour. You are powerful even now.",
    affirmation: "This intensity is temporary. Your strength is permanent.",
  },
  clear: {
    label: "Radiant",
    gradient: "linear-gradient(135deg, #f6a623, #f7d16a, #fff4d6)",
    poem: "You are the light you have been waiting for.",
    food: "Fresh fruit bowl, açaí, something alive and bright",
    outfit: "Yellows, whites, something that lets you be seen",
    affirmation: "Claim this joy. It is yours and you earned it.",
  },
  clouds: {
    label: "Reflective",
    gradient: "linear-gradient(135deg, #4a4e6b, #7b7f9e, #b5b8cc)",
    poem: "Even covered skies hold light. So do you.",
    food: "Avocado toast or a warm grain bowl",
    outfit: "Soft greys, linen, something effortless",
    affirmation: "Stillness is not stagnation. You are processing.",
  },
  mist: {
    label: "Mystical",
    gradient: "linear-gradient(135deg, #3d5a4f, #6b9e8a, #a8ccb8)",
    poem: "Not all things are meant to be seen clearly yet.",
    food: "Herbal tea, cucumber water, something cleansing",
    outfit: "Sage greens, soft layers, something that feels like forest",
    affirmation: "Trust what you cannot yet see fully.",
  },
  fog: {
    label: "Foggy",
    gradient: "linear-gradient(135deg, #5a5a5a, #8a8a8a, #c0c0c0)",
    poem: "Clarity will come. For now, one step is enough.",
    food: "Simple warm porridge, something grounding and familiar",
    outfit: "Neutral layers, comfort over statement",
    affirmation: "You do not need the whole staircase. Just the next step.",
  },
  snow: {
    label: "Still",
    gradient: "linear-gradient(135deg, #c9d6e8, #e8eff8, #f5f8fc)",
    poem: "The world grows quiet so you can hear yourself.",
    food: "Hot chocolate, cinnamon tea, something warming from the inside",
    outfit: "Cream, ivory, soft textures — wrap yourself in peace",
    affirmation: "In stillness, you remember who you are.",
  },
};

// ── HELPERS ───────────────────────────────────────────────────────────────────
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
  return "clouds"; // default
}

function applyMood(moodKey) {
  const mood = moods[moodKey];
  const app = document.getElementById("app");

  // Background
  app.style.background = mood.gradient;

  // Text content
  document.getElementById("poem-line").textContent = mood.poem;
  document.getElementById("mood-label").textContent = `✦ ${mood.label}`;
  document.getElementById("food-suggestion").textContent = mood.food;
  document.getElementById("outfit-suggestion").textContent = mood.outfit;
  document.getElementById("affirmation").textContent = mood.affirmation;

  // Text colour based on mood brightness
  const lightMoods = ["clear", "snow"];
  app.style.color = lightMoods.includes(moodKey) ? "#1a1a1a" : "#f0ede8";
}

// ── MAIN FETCH ────────────────────────────────────────────────────────────────
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

    // Populate weather data
    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("weather-desc").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `🌬 Wind: ${(data.wind.speed * 3.6).toFixed(1)} km/h`;

    // Show card + suggestions
    document.getElementById("weather-card").style.display = "block";
    document.getElementById("suggestions").style.display = "grid";

    // Apply mood
    applyMood(moodKey);

  } catch (err) {
    alert("Something went wrong. Check your API key or connection.");
    console.error(err);
  }
}

// Allow Enter key to trigger search
document.getElementById("city-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchCity();
});
