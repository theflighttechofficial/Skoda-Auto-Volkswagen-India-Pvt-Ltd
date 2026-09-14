import { RS_MODELS } from "../data/rsPerformanceData";
import { VW_GT_MODELS } from "../data/vwPerformanceData";
import { AUDI_RS_MODELS } from "../data/audiPerformanceData";

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function deriveWeightKg(powerHp, powerToWeight) {
  const match = (powerToWeight || "").match(/([\d.]+)\s*PS\s*\/\s*Tonne/i);
  const ratio = match ? parseFloat(match[1]) : 150;
  return Math.round((powerHp / ratio) * 1000);
}

function normalize(model, brand) {
  const isSedan = !/suv|4x4|estate/i.test(model.category || "");
  return {
    id: `${brand}-${slugify(model.name)}`,
    brand,
    name: model.name,
    category: model.category,
    badge: model.badge,
    powerHp: model.powerHp,
    torqueNm: model.torqueNm,
    accelSeconds: model.accelSeconds,
    topSpeedKmh: model.topSpeedKmh,
    drivetrain: model.tractionType,
    transmission: model.transmission,
    weightKg: deriveWeightKg(model.powerHp, model.trackTelemetry?.powerToWeight),
    powerToWeight: model.trackTelemetry?.powerToWeight,
    heroColorHex: model.heroColorHex,
    isSedan,
    priceNumeric: model.priceNumeric,
    expectedPrice: model.expectedPrice,
  };
}

/**
 * Builds the full cross-brand "Race the Group" roster from the existing
 * vRS/GTI/RS performance datasets — reusing their real accelSeconds,
 * topSpeedKmh, power, torque and drivetrain figures rather than inventing
 * new numbers. Ids are re-slugged from each car's name because the source
 * arrays reuse a couple of shared literal ids ('octavia-vrs'/'kodiaq-vrs')
 * across brands as internal tab keys, which would otherwise collide here.
 */
export function getRaceRoster() {
  return [
    ...RS_MODELS.map((m) => normalize(m, "skoda")),
    ...VW_GT_MODELS.map((m) => normalize(m, "volkswagen")),
    ...AUDI_RS_MODELS.map((m) => normalize(m, "audi")),
  ];
}
