import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { PORSCHE_MODELS } from "../data/porscheData";
import { LAMBORGHINI_MODELS } from "../data/lamborghiniData";
import { BENTLEY_MODELS } from "../data/bentleyData";
import { SEAT_MODELS } from "../data/seatData";
import { SCANIA_MODELS } from "../data/scaniaData";
import { peakPowerHp, bootLitres, groundClearanceMm, hashString } from "./carInsights";
import { getRaceRoster } from "./raceRoster";

const CATALOG_BY_BRAND = { skoda: SKODA_MODELS, volkswagen: VW_MODELS, audi: AUDI_MODELS, porsche: PORSCHE_MODELS, lamborghini: LAMBORGHINI_MODELS, bentley: BENTLEY_MODELS, seat: SEAT_MODELS, scania: SCANIA_MODELS };

function peakTorqueNm(model) {
  const torques = (model.engines || [])
    .map((e) => e.match(/\/\s*([\d,]+)\s*Nm/i)?.[1])
    .filter(Boolean)
    .map((t) => parseFloat(t.replace(/,/g, "")));
  return torques.length ? Math.max(...torques) : 200;
}

// A plausible weight estimate for regular catalogue models (which don't
// carry a real power-to-weight spec like the RS performance roster does) —
// a base figure per body segment, nudged by length. Clearly an estimate,
// same spirit as the app's existing TCO/quarter-mile estimates.
function estimateWeightKg(model) {
  const body = (model.bodyType || "").toLowerCase();
  const lengthMm = parseFloat((model.dimensions?.length || "").replace(/[^\d]/g, "")) || 4200;
  let base = 1150;
  if (/luxury 4x4 suv|midsize suv/.test(body)) base = 1750;
  else if (/compact suv/.test(body)) base = 1300;
  else if (/executive sedan/.test(body)) base = 1550;
  else if (/premium sedan|compact sedan/.test(body)) base = 1250;
  else if (/hatchback/.test(body)) base = 1150;
  else if (/estate/.test(body)) base = 1400;
  const lengthAdjust = Math.round((lengthMm - 4200) * 0.18);
  return Math.max(950, base + lengthAdjust);
}

// A rough 0-100 km/h estimate for regular catalogue models from their peak
// power — the RS/GT/vRS performance roster already carries real accelSeconds
// figures and is used as-is.
function estimateAccelSeconds(model, weightKg) {
  const power = peakPowerHp(model);
  const powerToWeight = power / (weightKg / 1000);
  // Calibrated so ~115 PS / 1150 kg (Kylaq-class) lands near ~10.8s and
  // ~340 PS / 1900 kg (Q7-class) lands near ~6.0s, matching real-world feel.
  return Math.max(3.5, Math.round((1450 / powerToWeight) * 10) / 10);
}

const SOURCE_CATALOG = "catalog";
const SOURCE_PERFORMANCE = "performance";

function normalizeCatalogItem(model, brand) {
  const weightKg = estimateWeightKg(model);
  return {
    uid: `${SOURCE_CATALOG}-${brand}-${model.id}`,
    source: SOURCE_CATALOG,
    brand,
    id: model.id,
    name: model.name,
    bodyType: model.bodyType,
    image: model.image,
    powerHp: peakPowerHp(model),
    torqueNm: peakTorqueNm(model),
    accelSeconds: estimateAccelSeconds(model, weightKg),
    accelIsEstimated: true,
    weightKg,
    weightIsEstimated: true,
    bootLitres: bootLitres(model),
    groundClearanceMm: groundClearanceMm(model),
    priceINR: model.startingExShowroom || 0,
    priceLabel: model.startingPrice,
    notSoldInIndia: model.notSoldInIndia || false,
  };
}

function normalizeRacerItem(racer) {
  return {
    uid: `${SOURCE_PERFORMANCE}-${racer.id}`,
    source: SOURCE_PERFORMANCE,
    brand: racer.brand,
    id: racer.id,
    name: racer.name,
    bodyType: racer.category,
    image: null,
    powerHp: racer.powerHp,
    torqueNm: racer.torqueNm,
    accelSeconds: racer.accelSeconds,
    accelIsEstimated: false,
    weightKg: racer.weightKg,
    weightIsEstimated: false,
    bootLitres: null,
    groundClearanceMm: null,
    priceINR: racer.priceNumeric || null,
    priceLabel: racer.expectedPrice || racer.badge,
    heroColorHex: racer.heroColorHex,
  };
}

/**
 * The full pool of cars a visitor can add to their garage: every catalogue
 * model across all three brands, plus the vRS/GTI/RS performance icons
 * (Golf GTI, Audi RS5, ...) that aren't part of the regular catalogue.
 */
export function getGarageablePool() {
  const catalogItems = Object.entries(CATALOG_BY_BRAND).flatMap(([brand, models]) =>
    models.map((m) => normalizeCatalogItem(m, brand)),
  );
  const performanceItems = getRaceRoster().map(normalizeRacerItem);
  return [...catalogItems, ...performanceItems];
}

export function computeGarageStats(items) {
  if (!items.length) return null;
  const totalPower = items.reduce((s, i) => s + i.powerHp, 0);
  const totalTorque = items.reduce((s, i) => s + i.torqueNm, 0);
  const fastest = [...items].sort((a, b) => a.accelSeconds - b.accelSeconds)[0];
  const lightest = [...items].sort((a, b) => a.weightKg - b.weightKg)[0];
  const mostPractical = [...items]
    .filter((i) => i.bootLitres !== null)
    .sort((a, b) => b.bootLitres + b.groundClearanceMm / 10 - (a.bootLitres + a.groundClearanceMm / 10))[0];
  const priced = items.filter((i) => i.priceINR);
  const mostExpensive = priced.length ? [...priced].sort((a, b) => b.priceINR - a.priceINR)[0] : null;
  const avgPowerToWeight = items.reduce((s, i) => s + i.powerHp / (i.weightKg / 1000), 0) / items.length;

  // A simulated percentile against a typical-garage distribution (mean
  // ~550 combined PS for a 3-car garage, roughly bell-shaped) — an
  // estimate for fun, not a real cross-user comparison.
  const typicalMean = 180 * items.length;
  const typicalStdDev = 90 * Math.sqrt(items.length);
  const z = (totalPower - typicalMean) / typicalStdDev;
  const percentile = Math.round(clampPercentile(50 + z * 22));

  return {
    totalPower,
    totalTorque,
    fastest,
    lightest,
    mostPractical: mostPractical || null,
    mostExpensive,
    avgPowerToWeight: Math.round(avgPowerToWeight),
    outrunPercentile: percentile,
  };
}

function clampPercentile(v) {
  return Math.max(1, Math.min(99, v));
}

const STORAGE_KEY = "enthusiast_garage_v1";

export function loadGarage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveGarage(uids) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(uids));
  } catch {
    // localStorage unavailable — silently skip persistence
  }
}
