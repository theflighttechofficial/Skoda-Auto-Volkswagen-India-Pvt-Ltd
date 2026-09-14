import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { peakPowerHp, hashString } from "./carInsights";
import { derivePlatform } from "./underTheSkin";

const CATALOG_BY_BRAND = { skoda: SKODA_MODELS, volkswagen: VW_MODELS, audi: AUDI_MODELS };

function isLegacyOrImport(model) {
  return /hall of fame|cbu import/i.test(model.badge || "");
}

function buildPuzzle(model, brand) {
  const engineStr = model.engines?.[0] || "";
  const engineShort = engineStr.split("(")[0].trim() || "Engine data unavailable";
  const gearbox = model.variants?.[0]?.transmissions?.[0] || "Transmission data unavailable";
  const platform = derivePlatform(model, brand);
  const power = peakPowerHp(model);

  return {
    uid: `${brand}-${model.id}`,
    brand,
    id: model.id,
    name: model.name,
    bodyType: model.bodyType,
    image: model.image,
    clues: [
      { label: "Engine", value: engineShort },
      { label: "Gearbox", value: gearbox },
      { label: "Platform", value: platform },
      { label: "Power", value: `${power} PS` },
    ],
    hint: `${/^[aeiou]/i.test(model.bodyType || "") ? "An" : "A"} ${model.bodyType} from ${brand === "audi" ? "Audi" : brand === "volkswagen" ? "Volkswagen" : "Škoda"}`,
  };
}

export function getAllPuzzles() {
  return Object.entries(CATALOG_BY_BRAND).flatMap(([brand, models]) => models.map((m) => buildPuzzle(m, brand)));
}

export function getPuzzlePool(difficulty) {
  const all = getAllPuzzles();
  const allModels = Object.entries(CATALOG_BY_BRAND).flatMap(([brand, models]) => models.map((m) => ({ m, brand })));
  if (difficulty === "easy") {
    const easyIds = new Set(allModels.filter(({ m }) => !isLegacyOrImport(m)).map(({ m, brand }) => `${brand}-${m.id}`));
    return all.filter((p) => easyIds.has(p.uid));
  }
  if (difficulty === "hard") {
    const hardIds = new Set(allModels.filter(({ m }) => isLegacyOrImport(m)).map(({ m, brand }) => `${brand}-${m.id}`));
    return all.filter((p) => hardIds.has(p.uid));
  }
  return all;
}

export function getRandomPuzzle(difficulty, excludeUid) {
  const pool = getPuzzlePool(difficulty).filter((p) => p.uid !== excludeUid);
  const source = pool.length ? pool : getPuzzlePool(difficulty);
  return source[Math.floor(Math.random() * source.length)];
}

// Deterministic "car of the day" — every visitor on the same calendar date
// gets the same puzzle, picked from the full medium pool for fairness.
export function getDailyPuzzle(dateStr = new Date().toISOString().slice(0, 10)) {
  const pool = getAllPuzzles();
  const idx = hashString(dateStr) % pool.length;
  return { ...pool[idx], dateStr };
}

// Clues available before a guess is required, and the score multiplier,
// per difficulty. Hard cuts off after 2 clues (higher risk, higher reward);
// Easy adds a free bonus hint (brand + body type) before the real clues.
export const DIFFICULTY_SETTINGS = {
  easy: { maxClues: 4, bonusHint: true, multiplier: 0.75, label: "Easy" },
  medium: { maxClues: 4, bonusHint: false, multiplier: 1, label: "Medium" },
  hard: { maxClues: 2, bonusHint: false, multiplier: 1.5, label: "Hard" },
};

export function scoreForRound(cluesUsed, difficulty) {
  const base = Math.max(10, 100 - (cluesUsed - 1) * 25);
  return Math.round(base * (DIFFICULTY_SETTINGS[difficulty]?.multiplier || 1));
}

// Fuzzy-ish match: strip brand prefixes/punctuation/case so "golf gti",
// "Golf GTI", "VW Golf GTI" all match "Volkswagen Golf GTI".
export function normalizeGuess(str) {
  return (str || "")
    .toLowerCase()
    .replace(/škoda|skoda|volkswagen|audi|vw/gi, "")
    .replace(/[^a-z0-9]/gi, "")
    .trim();
}

export function isCorrectGuess(guess, puzzle) {
  const g = normalizeGuess(guess);
  const target = normalizeGuess(puzzle.name);
  if (!g || !target) return false;
  if (g === target) return true;
  // Forgive a partial-but-unambiguous guess (e.g. "rs5" for "Audi RS5",
  // "golfgti" for "Volkswagen Golf GTI") as long as it's a meaningful
  // fragment, not a trivial 1-2 character match.
  return g.length >= 3 && (target.includes(g) || g.includes(target));
}

const STATS_KEY = "guess_the_car_stats_v1";

export function loadGameStats() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    return raw
      ? JSON.parse(raw)
      : { totalScore: 0, currentStreak: 0, bestStreak: 0, gamesPlayed: 0, gamesWon: 0, daily: null };
  } catch {
    return { totalScore: 0, currentStreak: 0, bestStreak: 0, gamesPlayed: 0, gamesWon: 0, daily: null };
  }
}

export function saveGameStats(stats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // localStorage unavailable — silently skip persistence
  }
}
