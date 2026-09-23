import { EngineSpec } from '../types';

function parseRange(range: string): { min: number; max: number; avg: number } {
  const nums = (range.match(/\d+(\.\d+)?/g) || ['0']).map(Number);
  const min = nums[0] || 0;
  const max = nums[1] ?? min;
  return { min, max, avg: (min + max) / 2 };
}

// Model `engines` fields are free-text labels like "1.0L TSI (115 PS / 178 Nm)".
// Engine spec catalogs key mileage data by displacement + fuel-type keyword, so
// this pulls out that signature to find the best matching EngineSpec.
function engineSignature(text: string): { displacement: string | null; keyword: string | null } {
  const dispMatch = text.match(/(\d\.\d)\s*L?/) || text.match(/\b(\d+)L\b/i);
  const keywordMatch = text.match(/TSI|TDI|TFSI|MPI/i);
  return {
    displacement: dispMatch ? dispMatch[1] : null,
    keyword: keywordMatch ? keywordMatch[0].toUpperCase() : null,
  };
}

export function matchEngineSpecs(modelEngines: string[], allSpecs: EngineSpec[]): EngineSpec[] {
  const matched: EngineSpec[] = [];
  modelEngines.forEach((label) => {
    const sig = engineSignature(label);
    const found = allSpecs.find((spec) => {
      const specSig = engineSignature(`${spec.displacement} ${spec.name}`);
      const dispOk = sig.displacement && specSig.displacement === sig.displacement;
      const keywordOk = sig.keyword && (spec.name + spec.badge).toUpperCase().includes(sig.keyword);
      return dispOk && (sig.keyword ? keywordOk : true);
    });
    if (found && !matched.some((m) => m.id === found.id)) matched.push(found);
  });
  if (matched.length === 0 && allSpecs.length > 0) matched.push(allSpecs[0]);
  return matched;
}

export interface FuelSimInputs {
  cityBias: number; // 0 = pure highway, 100 = pure city
  traffic: number; // 0 = low, 100 = heavy
  drivingStyle: number; // 0 = eco, 100 = enthusiast
  ac: 'off' | 'moderate' | 'max';
}

export interface FuelSimResult {
  estimatedKmpl: number;
  baseCity: number;
  baseHighway: number;
  trafficMultiplier: number;
  styleMultiplier: number;
  acMultiplier: number;
}

export function estimateFuelEconomy(spec: EngineSpec, inputs: FuelSimInputs): FuelSimResult {
  const city = parseRange(spec.realWorldCity).avg;
  const highway = parseRange(spec.realWorldHighway).avg;
  const cityWeight = inputs.cityBias / 100;
  const baseBlend = city * cityWeight + highway * (1 - cityWeight);

  // Heavier traffic costs more efficiency in city-biased driving than on the highway.
  const trafficPenaltyRange = 0.1 + cityWeight * 0.3; // up to 40% swing in pure city traffic
  const trafficMultiplier = 1 + trafficPenaltyRange * 0.5 - (inputs.traffic / 100) * trafficPenaltyRange;

  const styleMultiplier = 1.15 - (inputs.drivingStyle / 100) * 0.4;

  const acMultiplier = inputs.ac === 'off' ? 1 : inputs.ac === 'moderate' ? 0.93 : 0.85;

  const estimatedKmpl = Math.max(3, baseBlend * trafficMultiplier * styleMultiplier * acMultiplier);

  return {
    estimatedKmpl: Math.round(estimatedKmpl * 10) / 10,
    baseCity: city,
    baseHighway: highway,
    trafficMultiplier,
    styleMultiplier,
    acMultiplier,
  };
}
