export interface DynoPoint {
  rpm: number;
  powerHp: number;
  torqueNm: number;
  boostBar: number;
}

export interface AccelerationPoint {
  timeSec: number;
  speedKmh: number;
  gForce: number;
  gear: number;
}

export interface GearRatioSpeed {
  gear: string;
  ratio: string;
  speedAt1000Rpm: number; // km/h
  speedAt3000Rpm: number; // km/h
  speedAt6000Rpm: number; // km/h
  redlineSpeed: number; // km/h
}

export interface SpeedEfficiencyPoint {
  speedKmh: number;
  fuelConsumptionKmpl: number;
  engineRpm: number;
  activeCylinders?: number;
}

export interface EngineGraphProfile {
  id: string;
  name: string;
  badge: string;
  displacement: string;
  cylinders: string;
  fuelType: 'Petrol' | 'Diesel';
  peakPowerStr: string;
  peakTorqueStr: string;
  maxPowerHp: number;
  maxTorqueNm: number;
  powerRpmRange: string;
  torqueRpmRange: string;
  redlineRpm: number;
  idleRpm: number;
  dynoCurve: DynoPoint[];
  accelerationCurve: AccelerationPoint[];
  gearRatios: GearRatioSpeed[];
  efficiencyCurve: SpeedEfficiencyPoint[];
  technicalFeatures: string[];
  highwayCruiseRpm100Kmh: number;
  highwayCruiseRpm120Kmh: number;
}

export interface ModelPerformanceProfile {
  id: string;
  name: string;
  tagline: string;
  category: string;
  primaryEngineId: string;
  availableEngineIds: string[];
  weightKg: number;
  dragCoefficient: string;
  braking100to0DistMeters: number;
  corneringGForce: number;
  powerToWeightRatio: string; // PS/tonne
  sprint0to100: string;
  topSpeed: string;
  suspensionType: string;
  aerodynamicHighlights: string[];
}

export const ENGINE_GRAPH_PROFILES: Record<string, EngineGraphProfile> = {
  '1.0-tsi': {
    id: '1.0-tsi',
    name: '1.0L TSI 3-Cylinder Turbo-Petrol',
    badge: '1.0 TSI (115 PS / 178 Nm)',
    displacement: '999 cc',
    cylinders: '3 Cylinders (4 valves/cyl)',
    fuelType: 'Petrol',
    peakPowerStr: '115 PS @ 5,000–5,500 RPM',
    peakTorqueStr: '178 Nm @ 1,750–4,500 RPM',
    maxPowerHp: 115,
    maxTorqueNm: 178,
    powerRpmRange: '5,000 – 5,500 RPM',
    torqueRpmRange: '1,750 – 4,500 RPM',
    redlineRpm: 6500,
    idleRpm: 900,
    highwayCruiseRpm100Kmh: 2150,
    highwayCruiseRpm120Kmh: 2600,
    dynoCurve: [
      { rpm: 1000, powerHp: 22, torqueNm: 125, boostBar: 0.2 },
      { rpm: 1500, powerHp: 38, torqueNm: 158, boostBar: 0.6 },
      { rpm: 1750, powerHp: 44, torqueNm: 178, boostBar: 1.1 },
      { rpm: 2000, powerHp: 51, torqueNm: 178, boostBar: 1.2 },
      { rpm: 2500, powerHp: 63, torqueNm: 178, boostBar: 1.2 },
      { rpm: 3000, powerHp: 76, torqueNm: 178, boostBar: 1.2 },
      { rpm: 3500, powerHp: 89, torqueNm: 178, boostBar: 1.2 },
      { rpm: 4000, powerHp: 101, torqueNm: 178, boostBar: 1.2 },
      { rpm: 4500, powerHp: 112, torqueNm: 175, boostBar: 1.1 },
      { rpm: 5000, powerHp: 115, torqueNm: 161, boostBar: 1.0 },
      { rpm: 5500, powerHp: 115, torqueNm: 147, boostBar: 0.9 },
      { rpm: 6000, powerHp: 108, torqueNm: 126, boostBar: 0.7 },
      { rpm: 6500, powerHp: 96, torqueNm: 104, boostBar: 0.5 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.2, speedKmh: 24, gForce: 0.48, gear: 1 },
      { timeSec: 2.4, speedKmh: 42, gForce: 0.42, gear: 1 },
      { timeSec: 3.5, speedKmh: 54, gForce: 0.38, gear: 2 },
      { timeSec: 5.0, speedKmh: 69, gForce: 0.33, gear: 2 },
      { timeSec: 6.8, speedKmh: 82, gForce: 0.28, gear: 2 },
      { timeSec: 8.5, speedKmh: 92, gForce: 0.24, gear: 3 },
      { timeSec: 10.5, speedKmh: 100, gForce: 0.21, gear: 3 },
      { timeSec: 13.0, speedKmh: 115, gForce: 0.17, gear: 3 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.62', speedAt1000Rpm: 8.2, speedAt3000Rpm: 24.6, speedAt6000Rpm: 49.2, redlineSpeed: 53 },
      { gear: '2nd', ratio: '1.95', speedAt1000Rpm: 15.2, speedAt3000Rpm: 45.6, speedAt6000Rpm: 91.2, redlineSpeed: 96 },
      { gear: '3rd', ratio: '1.28', speedAt1000Rpm: 23.1, speedAt3000Rpm: 69.3, speedAt6000Rpm: 138.6, redlineSpeed: 145 },
      { gear: '4th', ratio: '0.97', speedAt1000Rpm: 30.5, speedAt3000Rpm: 91.5, speedAt6000Rpm: 183.0, redlineSpeed: 188 },
      { gear: '5th', ratio: '0.78', speedAt1000Rpm: 37.9, speedAt3000Rpm: 113.7, speedAt6000Rpm: 227.4, redlineSpeed: 190 },
      { gear: '6th', ratio: '0.64', speedAt1000Rpm: 46.2, speedAt3000Rpm: 138.6, speedAt6000Rpm: 277.2, redlineSpeed: 190 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 11.2, engineRpm: 1700 },
      { speedKmh: 40, fuelConsumptionKmpl: 14.8, engineRpm: 1600 },
      { speedKmh: 60, fuelConsumptionKmpl: 18.6, engineRpm: 1550 },
      { speedKmh: 80, fuelConsumptionKmpl: 21.4, engineRpm: 1750 },
      { speedKmh: 100, fuelConsumptionKmpl: 18.2, engineRpm: 2150 },
      { speedKmh: 120, fuelConsumptionKmpl: 15.1, engineRpm: 2600 },
      { speedKmh: 140, fuelConsumptionKmpl: 12.3, engineRpm: 3100 }
    ],
    technicalFeatures: [
      'Mono-scroll lightweight turbocharger spooling at 1,750 RPM',
      'Dual overhead camshafts with variable valve timing on intake and exhaust',
      'Integrated exhaust manifold within cylinder head for rapid engine warm-up',
      'High-pressure direct injection delivering up to 350 bar rail pressure'
    ]
  },

  '1.5-tsi': {
    id: '1.5-tsi',
    name: '1.5L TSI EVO Turbo-Petrol with ACT',
    badge: '1.5 TSI EVO (150 PS / 250 Nm)',
    displacement: '1,498 cc',
    cylinders: '4 Cylinders with Active Cylinder Deactivation (ACT)',
    fuelType: 'Petrol',
    peakPowerStr: '150 PS @ 5,000–6,000 RPM',
    peakTorqueStr: '250 Nm @ 1,600–3,500 RPM',
    maxPowerHp: 150,
    maxTorqueNm: 250,
    powerRpmRange: '5,000 – 6,000 RPM',
    torqueRpmRange: '1,600 – 3,500 RPM',
    redlineRpm: 6500,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 1850,
    highwayCruiseRpm120Kmh: 2200,
    dynoCurve: [
      { rpm: 1000, powerHp: 28, torqueNm: 160, boostBar: 0.3 },
      { rpm: 1400, powerHp: 44, torqueNm: 220, boostBar: 0.8 },
      { rpm: 1600, powerHp: 56, torqueNm: 250, boostBar: 1.3 },
      { rpm: 2000, powerHp: 70, torqueNm: 250, boostBar: 1.3 },
      { rpm: 2500, powerHp: 88, torqueNm: 250, boostBar: 1.3 },
      { rpm: 3000, powerHp: 106, torqueNm: 250, boostBar: 1.3 },
      { rpm: 3500, powerHp: 123, torqueNm: 250, boostBar: 1.3 },
      { rpm: 4000, powerHp: 138, torqueNm: 242, boostBar: 1.25 },
      { rpm: 4500, powerHp: 146, torqueNm: 228, boostBar: 1.2 },
      { rpm: 5000, powerHp: 150, torqueNm: 211, boostBar: 1.1 },
      { rpm: 5500, powerHp: 150, torqueNm: 192, boostBar: 1.0 },
      { rpm: 6000, powerHp: 150, torqueNm: 176, boostBar: 0.9 },
      { rpm: 6500, powerHp: 135, torqueNm: 145, boostBar: 0.7 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.0, speedKmh: 28, gForce: 0.62, gear: 1 },
      { timeSec: 2.0, speedKmh: 48, gForce: 0.54, gear: 1 },
      { timeSec: 3.2, speedKmh: 64, gForce: 0.44, gear: 2 },
      { timeSec: 4.8, speedKmh: 80, gForce: 0.38, gear: 2 },
      { timeSec: 6.6, speedKmh: 92, gForce: 0.32, gear: 3 },
      { timeSec: 8.6, speedKmh: 100, gForce: 0.28, gear: 3 },
      { timeSec: 11.2, speedKmh: 120, gForce: 0.22, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.76', speedAt1000Rpm: 8.1, speedAt3000Rpm: 24.3, speedAt6000Rpm: 48.6, redlineSpeed: 51 },
      { gear: '2nd', ratio: '2.08', speedAt1000Rpm: 14.6, speedAt3000Rpm: 43.8, speedAt6000Rpm: 87.6, redlineSpeed: 92 },
      { gear: '3rd', ratio: '1.34', speedAt1000Rpm: 22.7, speedAt3000Rpm: 68.1, speedAt6000Rpm: 136.2, redlineSpeed: 142 },
      { gear: '4th', ratio: '0.98', speedAt1000Rpm: 31.0, speedAt3000Rpm: 93.0, speedAt6000Rpm: 186.0, redlineSpeed: 190 },
      { gear: '5th', ratio: '0.80', speedAt1000Rpm: 38.0, speedAt3000Rpm: 114.0, speedAt6000Rpm: 228.0, redlineSpeed: 205 },
      { gear: '6th', ratio: '0.66', speedAt1000Rpm: 46.1, speedAt3000Rpm: 138.3, speedAt6000Rpm: 276.6, redlineSpeed: 205 },
      { gear: '7th (DSG)', ratio: '0.54', speedAt1000Rpm: 54.0, speedAt3000Rpm: 162.0, speedAt6000Rpm: 324.0, redlineSpeed: 205 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 10.5, engineRpm: 1600, activeCylinders: 4 },
      { speedKmh: 40, fuelConsumptionKmpl: 13.9, engineRpm: 1500, activeCylinders: 4 },
      { speedKmh: 60, fuelConsumptionKmpl: 19.8, engineRpm: 1400, activeCylinders: 2 },
      { speedKmh: 80, fuelConsumptionKmpl: 22.4, engineRpm: 1600, activeCylinders: 2 },
      { speedKmh: 100, fuelConsumptionKmpl: 19.2, engineRpm: 1850, activeCylinders: 2 },
      { speedKmh: 120, fuelConsumptionKmpl: 16.5, engineRpm: 2200, activeCylinders: 4 },
      { speedKmh: 140, fuelConsumptionKmpl: 13.2, engineRpm: 2650, activeCylinders: 4 }
    ],
    technicalFeatures: [
      'Active Cylinder Technology (ACT): shuts off cylinders 2 & 3 between 1,400–4,000 RPM under light loads',
      'Miller combustion cycle with higher 12.5:1 compression ratio for thermodynamic efficiency',
      'Variable Turbine Geometry (VTG) turbocharger delivering instant boost response',
      'Plasma-coated cylinder liners (APS) for reduced internal friction and zero oil consumption'
    ]
  },

  '2.0-tsi': {
    id: '2.0-tsi',
    name: '2.0L TSI EA888 4-Cylinder Turbo-Petrol',
    badge: '2.0 TSI (190 PS / 320 Nm)',
    displacement: '1,984 cc',
    cylinders: '4 Cylinders (16 valves)',
    fuelType: 'Petrol',
    peakPowerStr: '190 PS @ 4,200–6,000 RPM',
    peakTorqueStr: '320 Nm @ 1,500–4,100 RPM',
    maxPowerHp: 190,
    maxTorqueNm: 320,
    powerRpmRange: '4,200 – 6,000 RPM',
    torqueRpmRange: '1,500 – 4,100 RPM',
    redlineRpm: 6600,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1650,
    highwayCruiseRpm120Kmh: 1980,
    dynoCurve: [
      { rpm: 1000, powerHp: 38, torqueNm: 220, boostBar: 0.4 },
      { rpm: 1500, powerHp: 68, torqueNm: 320, boostBar: 1.4 },
      { rpm: 2000, powerHp: 90, torqueNm: 320, boostBar: 1.4 },
      { rpm: 2500, powerHp: 113, torqueNm: 320, boostBar: 1.4 },
      { rpm: 3000, powerHp: 135, torqueNm: 320, boostBar: 1.4 },
      { rpm: 3500, powerHp: 158, torqueNm: 320, boostBar: 1.4 },
      { rpm: 4000, powerHp: 180, torqueNm: 320, boostBar: 1.35 },
      { rpm: 4200, powerHp: 190, torqueNm: 318, boostBar: 1.3 },
      { rpm: 5000, powerHp: 190, torqueNm: 267, boostBar: 1.2 },
      { rpm: 5500, powerHp: 190, torqueNm: 243, boostBar: 1.1 },
      { rpm: 6000, powerHp: 190, torqueNm: 223, boostBar: 1.0 },
      { rpm: 6500, powerHp: 175, torqueNm: 190, boostBar: 0.8 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.9, speedKmh: 30, gForce: 0.68, gear: 1 },
      { timeSec: 1.8, speedKmh: 52, gForce: 0.58, gear: 1 },
      { timeSec: 2.8, speedKmh: 72, gForce: 0.48, gear: 2 },
      { timeSec: 4.5, speedKmh: 88, gForce: 0.40, gear: 2 },
      { timeSec: 6.0, speedKmh: 96, gForce: 0.35, gear: 3 },
      { timeSec: 7.7, speedKmh: 100, gForce: 0.32, gear: 3 },
      { timeSec: 10.2, speedKmh: 125, gForce: 0.25, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.56', speedAt1000Rpm: 8.9, speedAt3000Rpm: 26.7, speedAt6000Rpm: 53.4, redlineSpeed: 57 },
      { gear: '2nd', ratio: '2.14', speedAt1000Rpm: 14.8, speedAt3000Rpm: 44.4, speedAt6000Rpm: 88.8, redlineSpeed: 95 },
      { gear: '3rd', ratio: '1.42', speedAt1000Rpm: 22.3, speedAt3000Rpm: 66.9, speedAt6000Rpm: 133.8, redlineSpeed: 142 },
      { gear: '4th', ratio: '1.03', speedAt1000Rpm: 30.7, speedAt3000Rpm: 92.1, speedAt6000Rpm: 184.2, redlineSpeed: 195 },
      { gear: '5th', ratio: '0.81', speedAt1000Rpm: 39.1, speedAt3000Rpm: 117.3, speedAt6000Rpm: 234.6, redlineSpeed: 215 },
      { gear: '6th', ratio: '0.67', speedAt1000Rpm: 47.3, speedAt3000Rpm: 141.9, speedAt6000Rpm: 283.8, redlineSpeed: 215 },
      { gear: '7th', ratio: '0.52', speedAt1000Rpm: 60.6, speedAt3000Rpm: 181.8, speedAt6000Rpm: 363.6, redlineSpeed: 215 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 8.4, engineRpm: 1450 },
      { speedKmh: 40, fuelConsumptionKmpl: 10.9, engineRpm: 1400 },
      { speedKmh: 60, fuelConsumptionKmpl: 14.8, engineRpm: 1350 },
      { speedKmh: 80, fuelConsumptionKmpl: 17.2, engineRpm: 1450 },
      { speedKmh: 100, fuelConsumptionKmpl: 15.6, engineRpm: 1650 },
      { speedKmh: 120, fuelConsumptionKmpl: 13.8, engineRpm: 1980 },
      { speedKmh: 140, fuelConsumptionKmpl: 11.2, engineRpm: 2350 }
    ],
    technicalFeatures: [
      'B-cycle combustion system: early intake valve closure for supreme thermal efficiency',
      'Dual direct and manifold indirect fuel injection (FSI + MPI) for zero carbon build-up',
      'Electronically controlled wastegate actuator with twin-scroll turbocharging',
      'Integrated water-cooled exhaust manifold inside cylinder head'
    ]
  },

  '2.0-tsi-vrs': {
    id: '2.0-tsi-vrs',
    name: '2.0L TSI EA888 EVO4 (vRS Performance)',
    badge: '2.0 TSI vRS (265 PS / 370–400 Nm)',
    displacement: '1,984 cc',
    cylinders: '4 Cylinders Motorsport Tuned',
    fuelType: 'Petrol',
    peakPowerStr: '265 PS @ 5,250–6,500 RPM',
    peakTorqueStr: '370–400 Nm @ 1,600–4,300 RPM',
    maxPowerHp: 265,
    maxTorqueNm: 400,
    powerRpmRange: '5,250 – 6,500 RPM',
    torqueRpmRange: '1,600 – 4,300 RPM',
    redlineRpm: 6800,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1650,
    highwayCruiseRpm120Kmh: 1950,
    dynoCurve: [
      { rpm: 1000, powerHp: 45, torqueNm: 260, boostBar: 0.5 },
      { rpm: 1600, powerHp: 90, torqueNm: 395, boostBar: 1.6 },
      { rpm: 2000, powerHp: 112, torqueNm: 400, boostBar: 1.7 },
      { rpm: 2500, powerHp: 140, torqueNm: 400, boostBar: 1.7 },
      { rpm: 3000, powerHp: 169, torqueNm: 400, boostBar: 1.7 },
      { rpm: 3500, powerHp: 197, torqueNm: 400, boostBar: 1.7 },
      { rpm: 4000, powerHp: 225, torqueNm: 400, boostBar: 1.7 },
      { rpm: 4300, powerHp: 242, torqueNm: 398, boostBar: 1.65 },
      { rpm: 5000, powerHp: 260, torqueNm: 368, boostBar: 1.5 },
      { rpm: 5250, powerHp: 265, torqueNm: 355, boostBar: 1.45 },
      { rpm: 6000, powerHp: 265, torqueNm: 311, boostBar: 1.35 },
      { rpm: 6500, powerHp: 265, torqueNm: 287, boostBar: 1.2 },
      { rpm: 6800, powerHp: 248, torqueNm: 257, boostBar: 1.0 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.8, speedKmh: 34, gForce: 0.74, gear: 1 },
      { timeSec: 1.5, speedKmh: 56, gForce: 0.65, gear: 1 },
      { timeSec: 2.4, speedKmh: 76, gForce: 0.55, gear: 2 },
      { timeSec: 3.6, speedKmh: 92, gForce: 0.46, gear: 2 },
      { timeSec: 4.8, speedKmh: 100, gForce: 0.40, gear: 3 },
      { timeSec: 6.4, speedKmh: 118, gForce: 0.35, gear: 3 },
      { timeSec: 8.8, speedKmh: 140, gForce: 0.28, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.56', speedAt1000Rpm: 9.2, speedAt3000Rpm: 27.6, speedAt6000Rpm: 55.2, redlineSpeed: 62 },
      { gear: '2nd', ratio: '2.14', speedAt1000Rpm: 15.3, speedAt3000Rpm: 45.9, speedAt6000Rpm: 91.8, redlineSpeed: 102 },
      { gear: '3rd', ratio: '1.42', speedAt1000Rpm: 23.1, speedAt3000Rpm: 69.3, speedAt6000Rpm: 138.6, redlineSpeed: 155 },
      { gear: '4th', ratio: '1.03', speedAt1000Rpm: 31.8, speedAt3000Rpm: 95.4, speedAt6000Rpm: 190.8, redlineSpeed: 212 },
      { gear: '5th', ratio: '0.81', speedAt1000Rpm: 40.5, speedAt3000Rpm: 121.5, speedAt6000Rpm: 243.0, redlineSpeed: 250 },
      { gear: '6th', ratio: '0.67', speedAt1000Rpm: 48.9, speedAt3000Rpm: 146.7, speedAt6000Rpm: 293.4, redlineSpeed: 250 },
      { gear: '7th (DSG)', ratio: '0.52', speedAt1000Rpm: 61.2, speedAt3000Rpm: 183.6, speedAt6000Rpm: 367.2, redlineSpeed: 250 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 7.6, engineRpm: 1400 },
      { speedKmh: 40, fuelConsumptionKmpl: 9.8, engineRpm: 1350 },
      { speedKmh: 60, fuelConsumptionKmpl: 13.5, engineRpm: 1300 },
      { speedKmh: 80, fuelConsumptionKmpl: 16.2, engineRpm: 1450 },
      { speedKmh: 100, fuelConsumptionKmpl: 14.8, engineRpm: 1650 },
      { speedKmh: 120, fuelConsumptionKmpl: 12.6, engineRpm: 1950 },
      { speedKmh: 140, fuelConsumptionKmpl: 10.4, engineRpm: 2300 }
    ],
    technicalFeatures: [
      'High-output Continental turbocharger operating at 1.7 bar boost pressure',
      'VAQ multi-plate electro-mechanical limited slip differential with 100% lock capability',
      'Dynamic Sound Actuator with quad-tip acoustic exhaust system',
      'Reinforced crankshaft, forged connecting rods, and sodium-filled exhaust valves'
    ]
  },

  '1.8-tdi': {
    id: '1.8-tdi',
    name: '1.8L TDI CR Turbo-Diesel',
    badge: '1.8 TDI (140 PS / 320 Nm)',
    displacement: '1,798 cc',
    cylinders: '4 Cylinders Common Rail',
    fuelType: 'Diesel',
    peakPowerStr: '140 PS @ 4,000 RPM',
    peakTorqueStr: '320 Nm @ 1,750–2,500 RPM',
    maxPowerHp: 140,
    maxTorqueNm: 320,
    powerRpmRange: '4,000 RPM',
    torqueRpmRange: '1,750 – 2,500 RPM',
    redlineRpm: 5000,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1700,
    highwayCruiseRpm120Kmh: 2050,
    dynoCurve: [
      { rpm: 1000, powerHp: 32, torqueNm: 210, boostBar: 0.6 },
      { rpm: 1500, powerHp: 58, torqueNm: 280, boostBar: 1.2 },
      { rpm: 1750, powerHp: 79, torqueNm: 320, boostBar: 1.6 },
      { rpm: 2000, powerHp: 90, torqueNm: 320, boostBar: 1.6 },
      { rpm: 2500, powerHp: 113, torqueNm: 320, boostBar: 1.6 },
      { rpm: 3000, powerHp: 128, torqueNm: 300, boostBar: 1.5 },
      { rpm: 3500, powerHp: 137, torqueNm: 275, boostBar: 1.4 },
      { rpm: 4000, powerHp: 140, torqueNm: 247, boostBar: 1.2 },
      { rpm: 4500, powerHp: 130, torqueNm: 205, boostBar: 0.9 },
      { rpm: 5000, powerHp: 110, torqueNm: 155, boostBar: 0.6 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.1, speedKmh: 26, gForce: 0.52, gear: 1 },
      { timeSec: 2.3, speedKmh: 46, gForce: 0.44, gear: 1 },
      { timeSec: 3.8, speedKmh: 65, gForce: 0.38, gear: 2 },
      { timeSec: 5.6, speedKmh: 81, gForce: 0.32, gear: 3 },
      { timeSec: 7.4, speedKmh: 92, gForce: 0.27, gear: 3 },
      { timeSec: 9.2, speedKmh: 100, gForce: 0.23, gear: 3 },
      { timeSec: 12.0, speedKmh: 120, gForce: 0.18, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.77', speedAt1000Rpm: 8.5, speedAt3000Rpm: 25.5, speedAt6000Rpm: 42.5, redlineSpeed: 42 },
      { gear: '2nd', ratio: '1.96', speedAt1000Rpm: 16.3, speedAt3000Rpm: 48.9, speedAt6000Rpm: 81.5, redlineSpeed: 81 },
      { gear: '3rd', ratio: '1.26', speedAt1000Rpm: 25.4, speedAt3000Rpm: 76.2, speedAt6000Rpm: 127.0, redlineSpeed: 127 },
      { gear: '4th', ratio: '0.87', speedAt1000Rpm: 36.8, speedAt3000Rpm: 110.4, speedAt6000Rpm: 184.0, redlineSpeed: 184 },
      { gear: '5th', ratio: '0.67', speedAt1000Rpm: 47.8, speedAt3000Rpm: 143.4, speedAt6000Rpm: 210.0, redlineSpeed: 210 },
      { gear: '6th', ratio: '0.54', speedAt1000Rpm: 59.3, speedAt3000Rpm: 177.9, speedAt6000Rpm: 210.0, redlineSpeed: 210 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 13.5, engineRpm: 1400 },
      { speedKmh: 40, fuelConsumptionKmpl: 17.2, engineRpm: 1350 },
      { speedKmh: 60, fuelConsumptionKmpl: 21.8, engineRpm: 1300 },
      { speedKmh: 80, fuelConsumptionKmpl: 24.5, engineRpm: 1400 },
      { speedKmh: 100, fuelConsumptionKmpl: 21.8, engineRpm: 1700 },
      { speedKmh: 120, fuelConsumptionKmpl: 18.6, engineRpm: 2050 },
      { speedKmh: 140, fuelConsumptionKmpl: 15.2, engineRpm: 2400 }
    ],
    technicalFeatures: [
      'Bosch Piezo common rail diesel direct injection with 1,800 bar rail pressure',
      'Variable Nozzle Turbine (VNT) turbocharger eliminating turbo lag from 1,750 RPM',
      'Low-friction balance shafts for hushed vibration-free highway cruising',
      'Over 1,100 km touring range on a single full tank of fuel'
    ]
  },

  '2.0-tdi': {
    id: '2.0-tdi',
    name: '2.0L TDI CR EVO Turbo-Diesel',
    badge: '2.0 TDI EVO (190 PS / 400 Nm)',
    displacement: '1,968 cc',
    cylinders: '4 Cylinders High-Pressure Direct Injection',
    fuelType: 'Diesel',
    peakPowerStr: '190 PS @ 3,500–4,000 RPM',
    peakTorqueStr: '400 Nm @ 1,750–3,000 RPM',
    maxPowerHp: 190,
    maxTorqueNm: 400,
    powerRpmRange: '3,500 – 4,000 RPM',
    torqueRpmRange: '1,750 – 3,000 RPM',
    redlineRpm: 5000,
    idleRpm: 750,
    highwayCruiseRpm100Kmh: 1550,
    highwayCruiseRpm120Kmh: 1850,
    dynoCurve: [
      { rpm: 1000, powerHp: 44, torqueNm: 280, boostBar: 0.8 },
      { rpm: 1500, powerHp: 78, torqueNm: 370, boostBar: 1.7 },
      { rpm: 1750, powerHp: 99, torqueNm: 400, boostBar: 2.1 },
      { rpm: 2000, powerHp: 113, torqueNm: 400, boostBar: 2.1 },
      { rpm: 2500, powerHp: 142, torqueNm: 400, boostBar: 2.1 },
      { rpm: 3000, powerHp: 170, torqueNm: 400, boostBar: 2.1 },
      { rpm: 3500, powerHp: 190, torqueNm: 384, boostBar: 1.9 },
      { rpm: 4000, powerHp: 190, torqueNm: 336, boostBar: 1.7 },
      { rpm: 4500, powerHp: 172, torqueNm: 270, boostBar: 1.3 },
      { rpm: 5000, powerHp: 145, torqueNm: 205, boostBar: 0.9 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.9, speedKmh: 30, gForce: 0.66, gear: 1 },
      { timeSec: 1.8, speedKmh: 52, gForce: 0.58, gear: 1 },
      { timeSec: 3.0, speedKmh: 72, gForce: 0.48, gear: 2 },
      { timeSec: 4.7, speedKmh: 88, gForce: 0.40, gear: 2 },
      { timeSec: 6.2, speedKmh: 96, gForce: 0.35, gear: 3 },
      { timeSec: 7.9, speedKmh: 100, gForce: 0.32, gear: 3 },
      { timeSec: 10.4, speedKmh: 125, gForce: 0.25, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.56', speedAt1000Rpm: 9.4, speedAt3000Rpm: 28.2, speedAt6000Rpm: 47.0, redlineSpeed: 47 },
      { gear: '2nd', ratio: '2.14', speedAt1000Rpm: 15.6, speedAt3000Rpm: 46.8, speedAt6000Rpm: 78.0, redlineSpeed: 78 },
      { gear: '3rd', ratio: '1.42', speedAt1000Rpm: 23.5, speedAt3000Rpm: 70.5, speedAt6000Rpm: 117.5, redlineSpeed: 118 },
      { gear: '4th', ratio: '1.03', speedAt1000Rpm: 32.4, speedAt3000Rpm: 97.2, speedAt6000Rpm: 162.0, redlineSpeed: 162 },
      { gear: '5th', ratio: '0.81', speedAt1000Rpm: 41.2, speedAt3000Rpm: 123.6, speedAt6000Rpm: 206.0, redlineSpeed: 206 },
      { gear: '6th', ratio: '0.67', speedAt1000Rpm: 49.8, speedAt3000Rpm: 149.4, speedAt6000Rpm: 235.0, redlineSpeed: 235 },
      { gear: '7th (Wet DSG)', ratio: '0.52', speedAt1000Rpm: 64.5, speedAt3000Rpm: 193.5, speedAt6000Rpm: 235.0, redlineSpeed: 235 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 13.0, engineRpm: 1350 },
      { speedKmh: 40, fuelConsumptionKmpl: 16.5, engineRpm: 1300 },
      { speedKmh: 60, fuelConsumptionKmpl: 21.0, engineRpm: 1250 },
      { speedKmh: 80, fuelConsumptionKmpl: 23.8, engineRpm: 1350 },
      { speedKmh: 100, fuelConsumptionKmpl: 21.2, engineRpm: 1550 },
      { speedKmh: 120, fuelConsumptionKmpl: 18.1, engineRpm: 1850 },
      { speedKmh: 140, fuelConsumptionKmpl: 14.8, engineRpm: 2180 }
    ],
    technicalFeatures: [
      'Massive 400 Nm torque plateau available from 1,750 to 3,000 RPM for effortless overtakes',
      'Dual-dosing SCR exhaust cleaning with tandem AdBlue injectors reducing NOx by up to 80%',
      'Aluminum engine block shaving 20 kg over preceding iron diesel engines',
      'Heavy-duty DQ381 7-speed wet-clutch transmission capable of withstanding 420 Nm torque'
    ]
  },

  '1.0-tsi-rapid': {
    id: '1.0-tsi-rapid',
    name: '1.0L TSI 3-Cylinder Turbo-Petrol (Rapid Tune)',
    badge: '1.0 TSI (110 PS / 175 Nm)',
    displacement: '999 cc',
    cylinders: '3 Cylinders (4 valves/cyl)',
    fuelType: 'Petrol',
    peakPowerStr: '110 PS @ 5,000–5,500 RPM',
    peakTorqueStr: '175 Nm @ 1,750–4,000 RPM',
    maxPowerHp: 110,
    maxTorqueNm: 175,
    powerRpmRange: '5,000 – 5,500 RPM',
    torqueRpmRange: '1,750 – 4,000 RPM',
    redlineRpm: 6500,
    idleRpm: 900,
    highwayCruiseRpm100Kmh: 2200,
    highwayCruiseRpm120Kmh: 2650,
    dynoCurve: [
      { rpm: 1000, powerHp: 21, torqueNm: 122, boostBar: 0.2 },
      { rpm: 1500, powerHp: 36, torqueNm: 155, boostBar: 0.6 },
      { rpm: 1750, powerHp: 43, torqueNm: 175, boostBar: 1.0 },
      { rpm: 2000, powerHp: 49, torqueNm: 175, boostBar: 1.1 },
      { rpm: 2500, powerHp: 61, torqueNm: 175, boostBar: 1.1 },
      { rpm: 3000, powerHp: 73, torqueNm: 175, boostBar: 1.1 },
      { rpm: 3500, powerHp: 85, torqueNm: 175, boostBar: 1.1 },
      { rpm: 4000, powerHp: 97, torqueNm: 175, boostBar: 1.1 },
      { rpm: 4500, powerHp: 107, torqueNm: 170, boostBar: 1.0 },
      { rpm: 5000, powerHp: 110, torqueNm: 154, boostBar: 0.9 },
      { rpm: 5500, powerHp: 110, torqueNm: 140, boostBar: 0.8 },
      { rpm: 6000, powerHp: 103, torqueNm: 120, boostBar: 0.6 },
      { rpm: 6500, powerHp: 91, torqueNm: 99, boostBar: 0.4 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.3, speedKmh: 22, gForce: 0.44, gear: 1 },
      { timeSec: 2.6, speedKmh: 40, gForce: 0.39, gear: 1 },
      { timeSec: 3.8, speedKmh: 51, gForce: 0.35, gear: 2 },
      { timeSec: 5.5, speedKmh: 66, gForce: 0.30, gear: 2 },
      { timeSec: 7.4, speedKmh: 79, gForce: 0.26, gear: 2 },
      { timeSec: 9.2, speedKmh: 89, gForce: 0.22, gear: 3 },
      { timeSec: 11.4, speedKmh: 100, gForce: 0.19, gear: 3 },
      { timeSec: 14.5, speedKmh: 115, gForce: 0.15, gear: 3 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.62', speedAt1000Rpm: 8.0, speedAt3000Rpm: 24.0, speedAt6000Rpm: 48.0, redlineSpeed: 52 },
      { gear: '2nd', ratio: '1.95', speedAt1000Rpm: 14.8, speedAt3000Rpm: 44.4, speedAt6000Rpm: 88.8, redlineSpeed: 94 },
      { gear: '3rd', ratio: '1.28', speedAt1000Rpm: 22.5, speedAt3000Rpm: 67.5, speedAt6000Rpm: 135.0, redlineSpeed: 142 },
      { gear: '4th', ratio: '0.97', speedAt1000Rpm: 29.7, speedAt3000Rpm: 89.1, speedAt6000Rpm: 178.2, redlineSpeed: 184 },
      { gear: '5th', ratio: '0.78', speedAt1000Rpm: 36.9, speedAt3000Rpm: 110.7, speedAt6000Rpm: 221.4, redlineSpeed: 186 },
      { gear: '6th', ratio: '0.64', speedAt1000Rpm: 45.0, speedAt3000Rpm: 135.0, speedAt6000Rpm: 270.0, redlineSpeed: 186 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 12.0, engineRpm: 1750 },
      { speedKmh: 40, fuelConsumptionKmpl: 15.5, engineRpm: 1650 },
      { speedKmh: 60, fuelConsumptionKmpl: 19.2, engineRpm: 1600 },
      { speedKmh: 80, fuelConsumptionKmpl: 21.8, engineRpm: 1800 },
      { speedKmh: 100, fuelConsumptionKmpl: 18.8, engineRpm: 2200 },
      { speedKmh: 120, fuelConsumptionKmpl: 15.6, engineRpm: 2650 },
      { speedKmh: 140, fuelConsumptionKmpl: 12.8, engineRpm: 3150 }
    ],
    technicalFeatures: [
      'Detuned 1.0 TSI 3-cylinder replacing the naturally aspirated 1.6 MPI in the 2019 Rapid facelift',
      'Mono-scroll turbocharger with a lower 175 Nm torque calibration for the PQ25 platform',
      'Paired with Rapid’s well-proven 6-speed torque converter automatic',
      'Shared core architecture with the Kylaq/Slavia 1.0 TSI but tuned for lower output'
    ]
  },

  '1.6-mpi': {
    id: '1.6-mpi',
    name: '1.6L MPI Naturally Aspirated Petrol',
    badge: '1.6 MPI (105 PS / 153 Nm)',
    displacement: '1,598 cc',
    cylinders: '4 Cylinders (Naturally Aspirated)',
    fuelType: 'Petrol',
    peakPowerStr: '105 PS @ 5,250 RPM',
    peakTorqueStr: '153 Nm @ 3,800 RPM',
    maxPowerHp: 105,
    maxTorqueNm: 153,
    powerRpmRange: '5,250 RPM',
    torqueRpmRange: '3,800 RPM',
    redlineRpm: 6400,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 2600,
    highwayCruiseRpm120Kmh: 3150,
    dynoCurve: [
      { rpm: 1000, powerHp: 12, torqueNm: 88, boostBar: 0 },
      { rpm: 1500, powerHp: 20, torqueNm: 105, boostBar: 0 },
      { rpm: 2000, powerHp: 30, torqueNm: 118, boostBar: 0 },
      { rpm: 2500, powerHp: 41, torqueNm: 130, boostBar: 0 },
      { rpm: 3000, powerHp: 53, torqueNm: 140, boostBar: 0 },
      { rpm: 3500, powerHp: 66, torqueNm: 148, boostBar: 0 },
      { rpm: 3800, powerHp: 74, torqueNm: 153, boostBar: 0 },
      { rpm: 4500, powerHp: 90, torqueNm: 150, boostBar: 0 },
      { rpm: 5250, powerHp: 105, torqueNm: 143, boostBar: 0 },
      { rpm: 5800, powerHp: 103, torqueNm: 132, boostBar: 0 },
      { rpm: 6400, powerHp: 92, torqueNm: 110, boostBar: 0 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.6, speedKmh: 20, gForce: 0.36, gear: 1 },
      { timeSec: 3.2, speedKmh: 36, gForce: 0.30, gear: 1 },
      { timeSec: 4.8, speedKmh: 47, gForce: 0.26, gear: 2 },
      { timeSec: 7.0, speedKmh: 62, gForce: 0.22, gear: 2 },
      { timeSec: 9.6, speedKmh: 76, gForce: 0.19, gear: 3 },
      { timeSec: 12.5, speedKmh: 88, gForce: 0.16, gear: 3 },
      { timeSec: 15.8, speedKmh: 100, gForce: 0.13, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.78', speedAt1000Rpm: 7.6, speedAt3000Rpm: 22.8, speedAt6000Rpm: 45.6, redlineSpeed: 49 },
      { gear: '2nd', ratio: '2.12', speedAt1000Rpm: 13.6, speedAt3000Rpm: 40.8, speedAt6000Rpm: 81.6, redlineSpeed: 87 },
      { gear: '3rd', ratio: '1.36', speedAt1000Rpm: 21.2, speedAt3000Rpm: 63.6, speedAt6000Rpm: 127.2, redlineSpeed: 135 },
      { gear: '4th', ratio: '0.97', speedAt1000Rpm: 29.7, speedAt3000Rpm: 89.1, speedAt6000Rpm: 178.2, redlineSpeed: 182 },
      { gear: '5th', ratio: '0.76', speedAt1000Rpm: 37.9, speedAt3000Rpm: 113.7, speedAt6000Rpm: 227.4, redlineSpeed: 175 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 10.8, engineRpm: 2000 },
      { speedKmh: 40, fuelConsumptionKmpl: 13.5, engineRpm: 1900 },
      { speedKmh: 60, fuelConsumptionKmpl: 16.2, engineRpm: 1950 },
      { speedKmh: 80, fuelConsumptionKmpl: 17.8, engineRpm: 2200 },
      { speedKmh: 100, fuelConsumptionKmpl: 15.2, engineRpm: 2600 },
      { speedKmh: 120, fuelConsumptionKmpl: 12.6, engineRpm: 3150 }
    ],
    technicalFeatures: [
      'Naturally aspirated multi-point fuel injection with no turbocharger or forced induction',
      'Simple, low-maintenance timing belt-driven valvetrain used across pre-2019 PQ25 models',
      'Powered the original Rapid (pre-facelift) and the Fabia hatchback',
      'Linear, lag-free throttle response favored for its mechanical simplicity'
    ]
  },

  '1.2-tdi-cr': {
    id: '1.2-tdi-cr',
    name: '1.2L TDI CR 3-Cylinder Turbo-Diesel',
    badge: '1.2 TDI CR (75 PS / 180 Nm)',
    displacement: '1,199 cc',
    cylinders: '3 Cylinders Common Rail',
    fuelType: 'Diesel',
    peakPowerStr: '75 PS @ 4,200 RPM',
    peakTorqueStr: '180 Nm @ 2,000 RPM',
    maxPowerHp: 75,
    maxTorqueNm: 180,
    powerRpmRange: '4,200 RPM',
    torqueRpmRange: '2,000 RPM',
    redlineRpm: 4800,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 2400,
    highwayCruiseRpm120Kmh: 2900,
    dynoCurve: [
      { rpm: 1000, powerHp: 18, torqueNm: 120, boostBar: 0.4 },
      { rpm: 1500, powerHp: 32, torqueNm: 160, boostBar: 0.9 },
      { rpm: 2000, powerHp: 46, torqueNm: 180, boostBar: 1.1 },
      { rpm: 2500, powerHp: 56, torqueNm: 172, boostBar: 1.1 },
      { rpm: 3000, powerHp: 64, torqueNm: 158, boostBar: 1.0 },
      { rpm: 3500, powerHp: 70, torqueNm: 144, boostBar: 0.9 },
      { rpm: 4200, powerHp: 75, torqueNm: 128, boostBar: 0.8 },
      { rpm: 4800, powerHp: 68, torqueNm: 105, boostBar: 0.6 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 2.0, speedKmh: 20, gForce: 0.28, gear: 1 },
      { timeSec: 4.2, speedKmh: 36, gForce: 0.24, gear: 2 },
      { timeSec: 6.8, speedKmh: 50, gForce: 0.20, gear: 2 },
      { timeSec: 9.8, speedKmh: 63, gForce: 0.17, gear: 3 },
      { timeSec: 13.5, speedKmh: 78, gForce: 0.14, gear: 4 },
      { timeSec: 17.5, speedKmh: 90, gForce: 0.11, gear: 4 },
      { timeSec: 21.0, speedKmh: 100, gForce: 0.09, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.31', speedAt1000Rpm: 8.6, speedAt3000Rpm: 25.8, speedAt6000Rpm: 40.0, redlineSpeed: 40 },
      { gear: '2nd', ratio: '1.85', speedAt1000Rpm: 15.4, speedAt3000Rpm: 46.2, speedAt6000Rpm: 74.0, redlineSpeed: 74 },
      { gear: '3rd', ratio: '1.21', speedAt1000Rpm: 23.5, speedAt3000Rpm: 70.5, speedAt6000Rpm: 113.0, redlineSpeed: 113 },
      { gear: '4th', ratio: '0.89', speedAt1000Rpm: 32.0, speedAt3000Rpm: 96.0, speedAt6000Rpm: 154.0, redlineSpeed: 154 },
      { gear: '5th', ratio: '0.72', speedAt1000Rpm: 39.5, speedAt3000Rpm: 118.5, speedAt6000Rpm: 165.0, redlineSpeed: 165 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 16.5, engineRpm: 1650 },
      { speedKmh: 40, fuelConsumptionKmpl: 20.8, engineRpm: 1550 },
      { speedKmh: 60, fuelConsumptionKmpl: 24.5, engineRpm: 1500 },
      { speedKmh: 80, fuelConsumptionKmpl: 26.2, engineRpm: 1650 },
      { speedKmh: 100, fuelConsumptionKmpl: 22.8, engineRpm: 2000 },
      { speedKmh: 120, fuelConsumptionKmpl: 18.4, engineRpm: 2400 }
    ],
    technicalFeatures: [
      'Compact 3-cylinder common rail direct injection diesel shared with the Volkswagen Polo/Fabia platform',
      'Exceptional low-end torque delivery from just 2,000 RPM for city drivability',
      'Renowned for 21+ km/l real-world fuel efficiency in the Fabia hatchback',
      'Discontinued in India after BS-IV to BS-VI transition made small diesels commercially unviable'
    ]
  },

  '1.4-tsi-twincharger': {
    id: '1.4-tsi-twincharger',
    name: '1.4L TSI Twincharger (Supercharged + Turbocharged) Petrol',
    badge: '1.4 TSI Twincharger (122 PS / 160 Nm)',
    displacement: '1,390 cc',
    cylinders: '4 Cylinders (Supercharged + Turbocharged)',
    fuelType: 'Petrol',
    peakPowerStr: '122 PS @ 5,000–6,000 RPM',
    peakTorqueStr: '160 Nm @ 1,500–4,000 RPM',
    maxPowerHp: 122,
    maxTorqueNm: 160,
    powerRpmRange: '5,000 – 6,000 RPM',
    torqueRpmRange: '1,500 – 4,000 RPM',
    redlineRpm: 6800,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 2300,
    highwayCruiseRpm120Kmh: 2750,
    dynoCurve: [
      { rpm: 1000, powerHp: 24, torqueNm: 110, boostBar: 0.5 },
      { rpm: 1500, powerHp: 34, torqueNm: 160, boostBar: 1.4 },
      { rpm: 2000, powerHp: 45, torqueNm: 160, boostBar: 1.3 },
      { rpm: 2500, powerHp: 56, torqueNm: 160, boostBar: 1.2 },
      { rpm: 3000, powerHp: 68, torqueNm: 160, boostBar: 1.1 },
      { rpm: 3500, powerHp: 80, torqueNm: 160, boostBar: 1.0 },
      { rpm: 4000, powerHp: 92, torqueNm: 160, boostBar: 0.9 },
      { rpm: 5000, powerHp: 122, torqueNm: 152, boostBar: 0.8 },
      { rpm: 6000, powerHp: 122, torqueNm: 127, boostBar: 0.7 },
      { rpm: 6800, powerHp: 108, torqueNm: 100, boostBar: 0.5 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.2, speedKmh: 25, gForce: 0.50, gear: 1 },
      { timeSec: 2.5, speedKmh: 43, gForce: 0.43, gear: 1 },
      { timeSec: 3.9, speedKmh: 57, gForce: 0.37, gear: 2 },
      { timeSec: 5.8, speedKmh: 72, gForce: 0.31, gear: 2 },
      { timeSec: 8.0, speedKmh: 85, gForce: 0.26, gear: 3 },
      { timeSec: 10.2, speedKmh: 95, gForce: 0.23, gear: 3 },
      { timeSec: 12.6, speedKmh: 105, gForce: 0.20, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.46', speedAt1000Rpm: 8.6, speedAt3000Rpm: 25.8, speedAt6000Rpm: 51.6, redlineSpeed: 58 },
      { gear: '2nd', ratio: '1.94', speedAt1000Rpm: 15.4, speedAt3000Rpm: 46.2, speedAt6000Rpm: 92.4, redlineSpeed: 104 },
      { gear: '3rd', ratio: '1.29', speedAt1000Rpm: 23.2, speedAt3000Rpm: 69.6, speedAt6000Rpm: 139.2, redlineSpeed: 157 },
      { gear: '4th', ratio: '0.97', speedAt1000Rpm: 30.8, speedAt3000Rpm: 92.4, speedAt6000Rpm: 184.8, redlineSpeed: 195 },
      { gear: '5th', ratio: '0.78', speedAt1000Rpm: 38.4, speedAt3000Rpm: 115.2, speedAt6000Rpm: 230.4, redlineSpeed: 195 },
      { gear: '6th', ratio: '0.65', speedAt1000Rpm: 46.1, speedAt3000Rpm: 138.3, speedAt6000Rpm: 276.6, redlineSpeed: 195 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 10.5, engineRpm: 1800 },
      { speedKmh: 40, fuelConsumptionKmpl: 13.6, engineRpm: 1700 },
      { speedKmh: 60, fuelConsumptionKmpl: 16.8, engineRpm: 1650 },
      { speedKmh: 80, fuelConsumptionKmpl: 18.4, engineRpm: 1850 },
      { speedKmh: 100, fuelConsumptionKmpl: 15.6, engineRpm: 2300 },
      { speedKmh: 120, fuelConsumptionKmpl: 12.8, engineRpm: 2750 }
    ],
    technicalFeatures: [
      'Unique dual-charged setup: Roots-type supercharger for low-RPM response plus turbocharger for top-end power',
      'Supercharger clutch disengages above ~3,500 RPM once the turbocharger fully spools',
      'Powered the CKD-assembled Jetta sedan at Volkswagen’s Pune plant (2008–2013)',
      'Complex forced-induction system eventually phased out in favor of simpler single-turbo TSI engines'
    ]
  },

  '1.2-tsi-polo': {
    id: '1.2-tsi-polo',
    name: '1.2L TSI 4-Cylinder Turbo-Petrol (Polo GT Legend)',
    badge: '1.2 TSI (105 PS / 175 Nm)',
    displacement: '1,197 cc',
    cylinders: '4 Cylinders Turbocharged',
    fuelType: 'Petrol',
    peakPowerStr: '105 PS @ 5,000 RPM',
    peakTorqueStr: '175 Nm @ 1,500–4,100 RPM',
    maxPowerHp: 105,
    maxTorqueNm: 175,
    powerRpmRange: '5,000 RPM',
    torqueRpmRange: '1,500 – 4,100 RPM',
    redlineRpm: 6300,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 2350,
    highwayCruiseRpm120Kmh: 2800,
    dynoCurve: [
      { rpm: 1000, powerHp: 22, torqueNm: 118, boostBar: 0.4 },
      { rpm: 1500, powerHp: 35, torqueNm: 175, boostBar: 1.1 },
      { rpm: 2000, powerHp: 46, torqueNm: 175, boostBar: 1.1 },
      { rpm: 2500, powerHp: 58, torqueNm: 175, boostBar: 1.1 },
      { rpm: 3000, powerHp: 69, torqueNm: 175, boostBar: 1.0 },
      { rpm: 3500, powerHp: 81, torqueNm: 175, boostBar: 1.0 },
      { rpm: 4100, powerHp: 95, torqueNm: 175, boostBar: 0.9 },
      { rpm: 5000, powerHp: 105, torqueNm: 150, boostBar: 0.8 },
      { rpm: 5500, powerHp: 102, torqueNm: 133, boostBar: 0.7 },
      { rpm: 6300, powerHp: 90, torqueNm: 108, boostBar: 0.5 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.3, speedKmh: 24, gForce: 0.46, gear: 1 },
      { timeSec: 2.6, speedKmh: 42, gForce: 0.40, gear: 1 },
      { timeSec: 4.0, speedKmh: 55, gForce: 0.35, gear: 2 },
      { timeSec: 5.8, speedKmh: 69, gForce: 0.30, gear: 2 },
      { timeSec: 7.8, speedKmh: 82, gForce: 0.25, gear: 3 },
      { timeSec: 9.7, speedKmh: 100, gForce: 0.21, gear: 3 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.31', speedAt1000Rpm: 8.4, speedAt3000Rpm: 25.2, speedAt6000Rpm: 50.4, redlineSpeed: 53 },
      { gear: '2nd', ratio: '1.94', speedAt1000Rpm: 14.7, speedAt3000Rpm: 44.1, speedAt6000Rpm: 88.2, redlineSpeed: 93 },
      { gear: '3rd', ratio: '1.32', speedAt1000Rpm: 21.6, speedAt3000Rpm: 64.8, speedAt6000Rpm: 129.6, redlineSpeed: 136 },
      { gear: '4th', ratio: '0.97', speedAt1000Rpm: 29.4, speedAt3000Rpm: 88.2, speedAt6000Rpm: 176.4, redlineSpeed: 185 },
      { gear: '5th', ratio: '0.76', speedAt1000Rpm: 37.5, speedAt3000Rpm: 112.5, speedAt6000Rpm: 225.0, redlineSpeed: 190 },
      { gear: '6th (DSG)', ratio: '0.65', speedAt1000Rpm: 43.8, speedAt3000Rpm: 131.4, speedAt6000Rpm: 262.8, redlineSpeed: 190 },
      { gear: '7th (DSG)', ratio: '0.56', speedAt1000Rpm: 50.9, speedAt3000Rpm: 152.7, speedAt6000Rpm: 305.4, redlineSpeed: 190 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 12.2, engineRpm: 1750 },
      { speedKmh: 40, fuelConsumptionKmpl: 15.6, engineRpm: 1650 },
      { speedKmh: 60, fuelConsumptionKmpl: 18.4, engineRpm: 1600 },
      { speedKmh: 80, fuelConsumptionKmpl: 19.8, engineRpm: 1800 },
      { speedKmh: 100, fuelConsumptionKmpl: 17.2, engineRpm: 2350 },
      { speedKmh: 120, fuelConsumptionKmpl: 14.5, engineRpm: 2800 }
    ],
    technicalFeatures: [
      'First mass-market Indian car paired with a 7-speed DSG dual-clutch gearbox (2013)',
      'Founded India’s modern turbo-petrol hot-hatch tuning culture with widespread Stage 1/2 remaps',
      '4-cylinder smoothness rare in the sub-1.2L turbo-petrol segment of its era',
      'Discontinued from India in 2022 after a decade-long production run'
    ]
  },

  '2.0-tdi-177': {
    id: '2.0-tdi-177',
    name: '2.0L TDI CR Turbo-Diesel (Heritage 177 PS Tune)',
    badge: '2.0 TDI (177 PS / 350 Nm)',
    displacement: '1,968 cc',
    cylinders: '4 Cylinders Common Rail',
    fuelType: 'Diesel',
    peakPowerStr: '177 PS @ 4,000 RPM',
    peakTorqueStr: '350 Nm @ 1,750–2,500 RPM',
    maxPowerHp: 177,
    maxTorqueNm: 350,
    powerRpmRange: '4,000 RPM',
    torqueRpmRange: '1,750 – 2,500 RPM',
    redlineRpm: 4800,
    idleRpm: 780,
    highwayCruiseRpm100Kmh: 1650,
    highwayCruiseRpm120Kmh: 1980,
    dynoCurve: [
      { rpm: 1000, powerHp: 40, torqueNm: 250, boostBar: 0.7 },
      { rpm: 1500, powerHp: 72, torqueNm: 330, boostBar: 1.5 },
      { rpm: 1750, powerHp: 92, torqueNm: 350, boostBar: 1.8 },
      { rpm: 2000, powerHp: 105, torqueNm: 350, boostBar: 1.8 },
      { rpm: 2500, powerHp: 131, torqueNm: 350, boostBar: 1.8 },
      { rpm: 3000, powerHp: 158, torqueNm: 340, boostBar: 1.7 },
      { rpm: 3500, powerHp: 172, torqueNm: 312, boostBar: 1.5 },
      { rpm: 4000, powerHp: 177, torqueNm: 280, boostBar: 1.3 },
      { rpm: 4500, powerHp: 160, torqueNm: 225, boostBar: 1.0 },
      { rpm: 4800, powerHp: 142, torqueNm: 187, boostBar: 0.8 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.9, speedKmh: 28, gForce: 0.64, gear: 1 },
      { timeSec: 1.9, speedKmh: 48, gForce: 0.56, gear: 1 },
      { timeSec: 3.1, speedKmh: 67, gForce: 0.46, gear: 2 },
      { timeSec: 4.7, speedKmh: 84, gForce: 0.38, gear: 2 },
      { timeSec: 6.3, speedKmh: 94, gForce: 0.33, gear: 3 },
      { timeSec: 8.2, speedKmh: 100, gForce: 0.29, gear: 3 },
      { timeSec: 10.7, speedKmh: 125, gForce: 0.23, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.56', speedAt1000Rpm: 9.1, speedAt3000Rpm: 27.3, speedAt6000Rpm: 43.7, redlineSpeed: 44 },
      { gear: '2nd', ratio: '2.09', speedAt1000Rpm: 15.5, speedAt3000Rpm: 46.5, speedAt6000Rpm: 74.4, redlineSpeed: 74 },
      { gear: '3rd', ratio: '1.36', speedAt1000Rpm: 23.8, speedAt3000Rpm: 71.4, speedAt6000Rpm: 114.2, redlineSpeed: 114 },
      { gear: '4th', ratio: '0.98', speedAt1000Rpm: 33.0, speedAt3000Rpm: 99.0, speedAt6000Rpm: 158.4, redlineSpeed: 158 },
      { gear: '5th', ratio: '0.76', speedAt1000Rpm: 42.6, speedAt3000Rpm: 127.8, speedAt6000Rpm: 204.5, redlineSpeed: 204 },
      { gear: '6th', ratio: '0.65', speedAt1000Rpm: 49.8, speedAt3000Rpm: 149.4, speedAt6000Rpm: 220.0, redlineSpeed: 220 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 14.8, engineRpm: 1350 },
      { speedKmh: 40, fuelConsumptionKmpl: 18.5, engineRpm: 1300 },
      { speedKmh: 60, fuelConsumptionKmpl: 23.2, engineRpm: 1280 },
      { speedKmh: 80, fuelConsumptionKmpl: 25.8, engineRpm: 1400 },
      { speedKmh: 100, fuelConsumptionKmpl: 22.6, engineRpm: 1650 },
      { speedKmh: 120, fuelConsumptionKmpl: 19.2, engineRpm: 1980 },
      { speedKmh: 140, fuelConsumptionKmpl: 15.8, engineRpm: 2300 }
    ],
    technicalFeatures: [
      'The definitive Volkswagen India CBU heritage diesel powering the Jetta and Passat flagship sedans',
      'Common rail direct injection with variable geometry turbocharger and intercooling',
      'Paired with heavy-duty 6-speed DSG DQ250 wet-clutch transmission rated for high torque loads',
      'Delivered class-leading 1,200 km highway touring range on a single diesel tank'
    ]
  },

  '2.0-tsi-204': {
    id: '2.0-tsi-204',
    name: '2.0L TSI EA888 EVO4 4MOTION Turbo-Petrol',
    badge: '2.0 TSI (204 PS / 320 Nm)',
    displacement: '1,984 cc',
    cylinders: '4 Cylinders (16 valves)',
    fuelType: 'Petrol',
    peakPowerStr: '204 PS @ 4,300–6,000 RPM',
    peakTorqueStr: '320 Nm @ 1,500–4,200 RPM',
    maxPowerHp: 204,
    maxTorqueNm: 320,
    powerRpmRange: '4,300 – 6,000 RPM',
    torqueRpmRange: '1,500 – 4,200 RPM',
    redlineRpm: 6600,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1600,
    highwayCruiseRpm120Kmh: 1920,
    dynoCurve: [
      { rpm: 1000, powerHp: 41, torqueNm: 225, boostBar: 0.5 },
      { rpm: 1500, powerHp: 73, torqueNm: 320, boostBar: 1.5 },
      { rpm: 2000, powerHp: 97, torqueNm: 320, boostBar: 1.5 },
      { rpm: 2500, powerHp: 121, torqueNm: 320, boostBar: 1.5 },
      { rpm: 3000, powerHp: 146, torqueNm: 320, boostBar: 1.5 },
      { rpm: 3500, powerHp: 170, torqueNm: 320, boostBar: 1.45 },
      { rpm: 4000, powerHp: 193, torqueNm: 320, boostBar: 1.4 },
      { rpm: 4300, powerHp: 204, torqueNm: 318, boostBar: 1.35 },
      { rpm: 5000, powerHp: 204, torqueNm: 273, boostBar: 1.25 },
      { rpm: 5500, powerHp: 204, torqueNm: 248, boostBar: 1.15 },
      { rpm: 6000, powerHp: 204, torqueNm: 227, boostBar: 1.05 },
      { rpm: 6600, powerHp: 188, torqueNm: 192, boostBar: 0.85 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.9, speedKmh: 31, gForce: 0.70, gear: 1 },
      { timeSec: 1.8, speedKmh: 54, gForce: 0.60, gear: 1 },
      { timeSec: 2.8, speedKmh: 74, gForce: 0.50, gear: 2 },
      { timeSec: 4.3, speedKmh: 90, gForce: 0.42, gear: 2 },
      { timeSec: 5.7, speedKmh: 98, gForce: 0.37, gear: 3 },
      { timeSec: 7.3, speedKmh: 100, gForce: 0.34, gear: 3 },
      { timeSec: 9.6, speedKmh: 128, gForce: 0.27, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.56', speedAt1000Rpm: 9.0, speedAt3000Rpm: 27.0, speedAt6000Rpm: 54.0, redlineSpeed: 59 },
      { gear: '2nd', ratio: '2.14', speedAt1000Rpm: 15.0, speedAt3000Rpm: 45.0, speedAt6000Rpm: 90.0, redlineSpeed: 98 },
      { gear: '3rd', ratio: '1.42', speedAt1000Rpm: 22.6, speedAt3000Rpm: 67.8, speedAt6000Rpm: 135.6, redlineSpeed: 148 },
      { gear: '4th', ratio: '1.03', speedAt1000Rpm: 31.1, speedAt3000Rpm: 93.3, speedAt6000Rpm: 186.6, redlineSpeed: 203 },
      { gear: '5th', ratio: '0.81', speedAt1000Rpm: 39.6, speedAt3000Rpm: 118.8, speedAt6000Rpm: 237.6, redlineSpeed: 217 },
      { gear: '6th', ratio: '0.67', speedAt1000Rpm: 47.9, speedAt3000Rpm: 143.7, speedAt6000Rpm: 287.4, redlineSpeed: 217 },
      { gear: '7th', ratio: '0.52', speedAt1000Rpm: 61.3, speedAt3000Rpm: 183.9, speedAt6000Rpm: 367.8, redlineSpeed: 217 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 8.0, engineRpm: 1400 },
      { speedKmh: 40, fuelConsumptionKmpl: 10.5, engineRpm: 1350 },
      { speedKmh: 60, fuelConsumptionKmpl: 14.2, engineRpm: 1300 },
      { speedKmh: 80, fuelConsumptionKmpl: 16.6, engineRpm: 1400 },
      { speedKmh: 100, fuelConsumptionKmpl: 15.0, engineRpm: 1600 },
      { speedKmh: 120, fuelConsumptionKmpl: 13.2, engineRpm: 1920 },
      { speedKmh: 140, fuelConsumptionKmpl: 10.8, engineRpm: 2280 }
    ],
    technicalFeatures: [
      'Latest EA888 EVO4 tune developed for the MQB Evo-based Tayron with 14 PS more than the standard 190 PS unit',
      'Twin-scroll turbocharger with electronically controlled wastegate for reduced turbo lag',
      'Combined with 7-speed DSG and 4MOTION all-wheel drive for confident 3-row family towing capability',
      'Meets latest RDE (Real Driving Emissions) regulations with a close-coupled particulate filter'
    ]
  },

  '1.8-tsi-160': {
    id: '1.8-tsi-160',
    name: '1.8L TSI EA888 Turbo-Petrol',
    badge: '1.8 TSI (160 PS / 250 Nm)',
    displacement: '1,798 cc',
    cylinders: '4 Cylinders',
    fuelType: 'Petrol',
    peakPowerStr: '160 PS @ 4,500–6,200 RPM',
    peakTorqueStr: '250 Nm @ 1,500–4,200 RPM',
    maxPowerHp: 160,
    maxTorqueNm: 250,
    powerRpmRange: '4,500 – 6,200 RPM',
    torqueRpmRange: '1,500 – 4,200 RPM',
    redlineRpm: 6500,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 2050,
    highwayCruiseRpm120Kmh: 2450,
    dynoCurve: [
      { rpm: 1000, powerHp: 26, torqueNm: 150, boostBar: 0.4 },
      { rpm: 1500, powerHp: 44, torqueNm: 250, boostBar: 1.1 },
      { rpm: 2000, powerHp: 59, torqueNm: 250, boostBar: 1.1 },
      { rpm: 2500, powerHp: 73, torqueNm: 250, boostBar: 1.1 },
      { rpm: 3000, powerHp: 88, torqueNm: 250, boostBar: 1.05 },
      { rpm: 3500, powerHp: 103, torqueNm: 250, boostBar: 1.0 },
      { rpm: 4200, powerHp: 130, torqueNm: 248, boostBar: 0.95 },
      { rpm: 4500, powerHp: 143, torqueNm: 240, boostBar: 0.9 },
      { rpm: 5000, powerHp: 155, torqueNm: 222, boostBar: 0.85 },
      { rpm: 5500, powerHp: 160, torqueNm: 204, boostBar: 0.8 },
      { rpm: 6200, powerHp: 158, torqueNm: 178, boostBar: 0.65 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.2, speedKmh: 26, gForce: 0.48, gear: 1 },
      { timeSec: 2.4, speedKmh: 44, gForce: 0.42, gear: 1 },
      { timeSec: 3.7, speedKmh: 58, gForce: 0.36, gear: 2 },
      { timeSec: 5.4, speedKmh: 73, gForce: 0.31, gear: 2 },
      { timeSec: 7.4, speedKmh: 86, gForce: 0.26, gear: 3 },
      { timeSec: 9.1, speedKmh: 100, gForce: 0.23, gear: 3 },
      { timeSec: 11.8, speedKmh: 120, gForce: 0.19, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.78', speedAt1000Rpm: 7.8, speedAt3000Rpm: 23.4, speedAt6000Rpm: 46.8, redlineSpeed: 51 },
      { gear: '2nd', ratio: '2.12', speedAt1000Rpm: 13.9, speedAt3000Rpm: 41.7, speedAt6000Rpm: 83.4, redlineSpeed: 90 },
      { gear: '3rd', ratio: '1.36', speedAt1000Rpm: 21.7, speedAt3000Rpm: 65.1, speedAt6000Rpm: 130.2, redlineSpeed: 141 },
      { gear: '4th', ratio: '0.97', speedAt1000Rpm: 30.4, speedAt3000Rpm: 91.2, speedAt6000Rpm: 182.4, redlineSpeed: 195 },
      { gear: '5th', ratio: '0.78', speedAt1000Rpm: 37.8, speedAt3000Rpm: 113.4, speedAt6000Rpm: 226.8, redlineSpeed: 203 },
      { gear: '6th', ratio: '0.63', speedAt1000Rpm: 46.8, speedAt3000Rpm: 140.4, speedAt6000Rpm: 280.8, redlineSpeed: 203 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 9.8, engineRpm: 1750 },
      { speedKmh: 40, fuelConsumptionKmpl: 12.6, engineRpm: 1650 },
      { speedKmh: 60, fuelConsumptionKmpl: 15.8, engineRpm: 1600 },
      { speedKmh: 80, fuelConsumptionKmpl: 17.2, engineRpm: 1800 },
      { speedKmh: 100, fuelConsumptionKmpl: 14.8, engineRpm: 2050 },
      { speedKmh: 120, fuelConsumptionKmpl: 12.4, engineRpm: 2450 }
    ],
    technicalFeatures: [
      'EA888 turbo-petrol architecture with fully variable intake and exhaust valve timing',
      'Powered both the Škoda Laura sedan and the Yeti 4x4 Monte Carlo edition',
      'Strong mid-range torque plateau from 1,500 RPM for confident overtaking',
      'Renowned for smooth, refined power delivery relative to period diesels'
    ]
  },

  '1.8-tsi-combi': {
    id: '1.8-tsi-combi',
    name: '1.8L Turbo-Petrol (EA827 Lineage)',
    badge: '1.8 Turbo (150 PS / 210 Nm)',
    displacement: '1,781 cc',
    cylinders: '4 Cylinders',
    fuelType: 'Petrol',
    peakPowerStr: '150 PS @ 4,000 RPM',
    peakTorqueStr: '210 Nm @ 1,750–4,600 RPM',
    maxPowerHp: 150,
    maxTorqueNm: 210,
    powerRpmRange: '4,000 RPM',
    torqueRpmRange: '1,750 – 4,600 RPM',
    redlineRpm: 6200,
    idleRpm: 900,
    highwayCruiseRpm100Kmh: 2350,
    highwayCruiseRpm120Kmh: 2800,
    dynoCurve: [
      { rpm: 1000, powerHp: 24, torqueNm: 130, boostBar: 0.3 },
      { rpm: 1750, powerHp: 51, torqueNm: 210, boostBar: 0.9 },
      { rpm: 2000, powerHp: 58, torqueNm: 210, boostBar: 0.9 },
      { rpm: 2500, powerHp: 73, torqueNm: 210, boostBar: 0.9 },
      { rpm: 3000, powerHp: 87, torqueNm: 210, boostBar: 0.85 },
      { rpm: 3500, powerHp: 102, torqueNm: 210, boostBar: 0.8 },
      { rpm: 4000, powerHp: 150, torqueNm: 208, boostBar: 0.8 },
      { rpm: 4600, powerHp: 145, torqueNm: 195, boostBar: 0.7 },
      { rpm: 5500, powerHp: 130, torqueNm: 158, boostBar: 0.55 },
      { rpm: 6200, powerHp: 112, torqueNm: 128, boostBar: 0.4 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.4, speedKmh: 24, gForce: 0.42, gear: 1 },
      { timeSec: 2.9, speedKmh: 40, gForce: 0.36, gear: 1 },
      { timeSec: 4.4, speedKmh: 53, gForce: 0.31, gear: 2 },
      { timeSec: 6.4, speedKmh: 68, gForce: 0.27, gear: 2 },
      { timeSec: 8.6, speedKmh: 82, gForce: 0.23, gear: 3 },
      { timeSec: 9.5, speedKmh: 100, gForce: 0.21, gear: 3 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.45', speedAt1000Rpm: 8.3, speedAt3000Rpm: 24.9, speedAt6000Rpm: 49.8, redlineSpeed: 51 },
      { gear: '2nd', ratio: '1.94', speedAt1000Rpm: 14.8, speedAt3000Rpm: 44.4, speedAt6000Rpm: 88.8, redlineSpeed: 92 },
      { gear: '3rd', ratio: '1.29', speedAt1000Rpm: 22.2, speedAt3000Rpm: 66.6, speedAt6000Rpm: 133.2, redlineSpeed: 138 },
      { gear: '4th', ratio: '0.94', speedAt1000Rpm: 30.5, speedAt3000Rpm: 91.5, speedAt6000Rpm: 183.0, redlineSpeed: 189 },
      { gear: '5th', ratio: '0.75', speedAt1000Rpm: 38.2, speedAt3000Rpm: 114.6, speedAt6000Rpm: 229.2, redlineSpeed: 212 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 9.2, engineRpm: 1850 },
      { speedKmh: 40, fuelConsumptionKmpl: 11.6, engineRpm: 1750 },
      { speedKmh: 60, fuelConsumptionKmpl: 14.5, engineRpm: 1700 },
      { speedKmh: 80, fuelConsumptionKmpl: 15.8, engineRpm: 1900 },
      { speedKmh: 100, fuelConsumptionKmpl: 13.5, engineRpm: 2350 },
      { speedKmh: 120, fuelConsumptionKmpl: 11.2, engineRpm: 2800 }
    ],
    technicalFeatures: [
      'Classic 20-valve turbocharged inline-4 from the Volkswagen Group EA827 lineage',
      'Powered the original India-market Octavia Combi vRS estate',
      'Broad, usable torque band ideal for fully-loaded estate-car cruising',
      'Built an early enthusiast following for turbo-petrol performance in Škoda India'
    ]
  },

  '1.9-tdi-pd90': {
    id: '1.9-tdi-pd90',
    name: '1.9L TDI PD Turbo-Diesel',
    badge: '1.9 TDI (90 PS / 210 Nm)',
    displacement: '1,896 cc',
    cylinders: '4 Cylinders Pump-Duse',
    fuelType: 'Diesel',
    peakPowerStr: '90 PS @ 4,000 RPM',
    peakTorqueStr: '210 Nm @ 1,900 RPM',
    maxPowerHp: 90,
    maxTorqueNm: 210,
    powerRpmRange: '4,000 RPM',
    torqueRpmRange: '1,900 RPM',
    redlineRpm: 4800,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 2250,
    highwayCruiseRpm120Kmh: 2700,
    dynoCurve: [
      { rpm: 1000, powerHp: 20, torqueNm: 140, boostBar: 0.5 },
      { rpm: 1500, powerHp: 34, torqueNm: 195, boostBar: 1.0 },
      { rpm: 1900, powerHp: 44, torqueNm: 210, boostBar: 1.2 },
      { rpm: 2500, powerHp: 55, torqueNm: 208, boostBar: 1.1 },
      { rpm: 3000, powerHp: 63, torqueNm: 195, boostBar: 1.0 },
      { rpm: 3500, powerHp: 72, torqueNm: 180, boostBar: 0.9 },
      { rpm: 4000, powerHp: 90, torqueNm: 165, boostBar: 0.8 },
      { rpm: 4800, powerHp: 78, torqueNm: 132, boostBar: 0.6 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 2.2, speedKmh: 20, gForce: 0.26, gear: 1 },
      { timeSec: 4.5, speedKmh: 36, gForce: 0.22, gear: 2 },
      { timeSec: 7.2, speedKmh: 50, gForce: 0.19, gear: 2 },
      { timeSec: 10.3, speedKmh: 63, gForce: 0.16, gear: 3 },
      { timeSec: 14.0, speedKmh: 78, gForce: 0.13, gear: 4 },
      { timeSec: 18.5, speedKmh: 90, gForce: 0.10, gear: 4 },
      { timeSec: 24.0, speedKmh: 100, gForce: 0.08, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.45', speedAt1000Rpm: 8.0, speedAt3000Rpm: 24.0, speedAt6000Rpm: 38.0, redlineSpeed: 38 },
      { gear: '2nd', ratio: '1.94', speedAt1000Rpm: 14.2, speedAt3000Rpm: 42.6, speedAt6000Rpm: 68.0, redlineSpeed: 68 },
      { gear: '3rd', ratio: '1.29', speedAt1000Rpm: 21.5, speedAt3000Rpm: 64.5, speedAt6000Rpm: 103.0, redlineSpeed: 103 },
      { gear: '4th', ratio: '0.94', speedAt1000Rpm: 29.5, speedAt3000Rpm: 88.5, speedAt6000Rpm: 141.0, redlineSpeed: 141 },
      { gear: '5th', ratio: '0.75', speedAt1000Rpm: 37.0, speedAt3000Rpm: 111.0, speedAt6000Rpm: 178.0, redlineSpeed: 178 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 15.2, engineRpm: 1550 },
      { speedKmh: 40, fuelConsumptionKmpl: 18.5, engineRpm: 1450 },
      { speedKmh: 60, fuelConsumptionKmpl: 21.8, engineRpm: 1400 },
      { speedKmh: 80, fuelConsumptionKmpl: 23.5, engineRpm: 1550 },
      { speedKmh: 100, fuelConsumptionKmpl: 20.2, engineRpm: 2250 },
      { speedKmh: 120, fuelConsumptionKmpl: 16.8, engineRpm: 2700 }
    ],
    technicalFeatures: [
      'Pump-Duse (PD) unit-injector diesel technology for high per-cylinder injection pressure',
      'Base engine option for the India-market Octavia Combi estate',
      'Renowned across the Volkswagen Group for reliability and long service intervals',
      'Modest output prioritizes efficiency and low-end drivability over outright pace'
    ]
  },

  '1.9-tdi-pd105': {
    id: '1.9-tdi-pd105',
    name: '1.9L TDI PD Turbo-Diesel',
    badge: '1.9 TDI (105 PS / 250 Nm)',
    displacement: '1,896 cc',
    cylinders: '4 Cylinders Pump-Duse',
    fuelType: 'Diesel',
    peakPowerStr: '105 PS @ 4,000 RPM',
    peakTorqueStr: '250 Nm @ 1,900 RPM',
    maxPowerHp: 105,
    maxTorqueNm: 250,
    powerRpmRange: '4,000 RPM',
    torqueRpmRange: '1,900 RPM',
    redlineRpm: 4900,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 2150,
    highwayCruiseRpm120Kmh: 2600,
    dynoCurve: [
      { rpm: 1000, powerHp: 24, torqueNm: 165, boostBar: 0.6 },
      { rpm: 1500, powerHp: 40, torqueNm: 230, boostBar: 1.2 },
      { rpm: 1900, powerHp: 52, torqueNm: 250, boostBar: 1.4 },
      { rpm: 2500, powerHp: 65, torqueNm: 245, boostBar: 1.3 },
      { rpm: 3000, powerHp: 75, torqueNm: 230, boostBar: 1.2 },
      { rpm: 3500, powerHp: 85, torqueNm: 210, boostBar: 1.05 },
      { rpm: 4000, powerHp: 105, torqueNm: 195, boostBar: 0.9 },
      { rpm: 4900, powerHp: 92, torqueNm: 155, boostBar: 0.7 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.8, speedKmh: 22, gForce: 0.32, gear: 1 },
      { timeSec: 3.8, speedKmh: 40, gForce: 0.28, gear: 2 },
      { timeSec: 6.0, speedKmh: 55, gForce: 0.24, gear: 2 },
      { timeSec: 8.6, speedKmh: 70, gForce: 0.20, gear: 3 },
      { timeSec: 11.8, speedKmh: 85, gForce: 0.17, gear: 4 },
      { timeSec: 15.5, speedKmh: 100, gForce: 0.14, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.45', speedAt1000Rpm: 8.4, speedAt3000Rpm: 25.2, speedAt6000Rpm: 42.0, redlineSpeed: 42 },
      { gear: '2nd', ratio: '1.94', speedAt1000Rpm: 15.0, speedAt3000Rpm: 45.0, speedAt6000Rpm: 75.0, redlineSpeed: 75 },
      { gear: '3rd', ratio: '1.29', speedAt1000Rpm: 22.7, speedAt3000Rpm: 68.1, speedAt6000Rpm: 113.5, redlineSpeed: 113 },
      { gear: '4th', ratio: '0.94', speedAt1000Rpm: 31.2, speedAt3000Rpm: 93.6, speedAt6000Rpm: 156.0, redlineSpeed: 156 },
      { gear: '5th', ratio: '0.75', speedAt1000Rpm: 39.0, speedAt3000Rpm: 117.0, speedAt6000Rpm: 185.0, redlineSpeed: 185 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 14.5, engineRpm: 1500 },
      { speedKmh: 40, fuelConsumptionKmpl: 17.8, engineRpm: 1400 },
      { speedKmh: 60, fuelConsumptionKmpl: 21.2, engineRpm: 1350 },
      { speedKmh: 80, fuelConsumptionKmpl: 22.8, engineRpm: 1500 },
      { speedKmh: 100, fuelConsumptionKmpl: 19.5, engineRpm: 2150 },
      { speedKmh: 120, fuelConsumptionKmpl: 16.2, engineRpm: 2600 }
    ],
    technicalFeatures: [
      'Base diesel option across the Škoda Laura sedan lineup',
      'Pump-Duse (PD) unit-injector technology delivering strong low-end torque',
      'One of the most trusted and durable diesel engines of its generation',
      'Favored for reliability across hundreds of thousands of kilometers'
    ]
  },

  '2.0-tdi-140': {
    id: '2.0-tdi-140',
    name: '2.0L TDI CR Turbo-Diesel',
    badge: '2.0 TDI CR (140 PS / 320 Nm)',
    displacement: '1,968 cc',
    cylinders: '4 Cylinders Common Rail',
    fuelType: 'Diesel',
    peakPowerStr: '140 PS @ 4,200 RPM',
    peakTorqueStr: '320 Nm @ 1,750–2,500 RPM',
    maxPowerHp: 140,
    maxTorqueNm: 320,
    powerRpmRange: '4,200 RPM',
    torqueRpmRange: '1,750 – 2,500 RPM',
    redlineRpm: 5000,
    idleRpm: 820,
    highwayCruiseRpm100Kmh: 1850,
    highwayCruiseRpm120Kmh: 2250,
    dynoCurve: [
      { rpm: 1000, powerHp: 32, torqueNm: 220, boostBar: 0.8 },
      { rpm: 1500, powerHp: 56, torqueNm: 300, boostBar: 1.5 },
      { rpm: 1750, powerHp: 72, torqueNm: 320, boostBar: 1.7 },
      { rpm: 2000, powerHp: 82, torqueNm: 320, boostBar: 1.7 },
      { rpm: 2500, powerHp: 103, torqueNm: 320, boostBar: 1.65 },
      { rpm: 3000, powerHp: 122, torqueNm: 300, boostBar: 1.5 },
      { rpm: 3500, powerHp: 133, torqueNm: 270, boostBar: 1.3 },
      { rpm: 4200, powerHp: 140, torqueNm: 227, boostBar: 1.05 },
      { rpm: 5000, powerHp: 118, torqueNm: 172, boostBar: 0.75 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.3, speedKmh: 26, gForce: 0.46, gear: 1 },
      { timeSec: 2.7, speedKmh: 44, gForce: 0.40, gear: 1 },
      { timeSec: 4.2, speedKmh: 58, gForce: 0.34, gear: 2 },
      { timeSec: 6.1, speedKmh: 72, gForce: 0.29, gear: 2 },
      { timeSec: 8.2, speedKmh: 86, gForce: 0.24, gear: 3 },
      { timeSec: 9.8, speedKmh: 100, gForce: 0.21, gear: 3 },
      { timeSec: 12.8, speedKmh: 120, gForce: 0.17, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.68', speedAt1000Rpm: 7.9, speedAt3000Rpm: 23.7, speedAt6000Rpm: 47.4, redlineSpeed: 48 },
      { gear: '2nd', ratio: '2.06', speedAt1000Rpm: 14.1, speedAt3000Rpm: 42.3, speedAt6000Rpm: 84.6, redlineSpeed: 86 },
      { gear: '3rd', ratio: '1.36', speedAt1000Rpm: 21.4, speedAt3000Rpm: 64.2, speedAt6000Rpm: 128.4, redlineSpeed: 130 },
      { gear: '4th', ratio: '0.97', speedAt1000Rpm: 30.0, speedAt3000Rpm: 90.0, speedAt6000Rpm: 180.0, redlineSpeed: 182 },
      { gear: '5th', ratio: '0.78', speedAt1000Rpm: 37.3, speedAt3000Rpm: 111.9, speedAt6000Rpm: 223.8, redlineSpeed: 198 },
      { gear: '6th (DSG)', ratio: '0.65', speedAt1000Rpm: 44.8, speedAt3000Rpm: 134.4, speedAt6000Rpm: 268.8, redlineSpeed: 198 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 13.8, engineRpm: 1450 },
      { speedKmh: 40, fuelConsumptionKmpl: 17.2, engineRpm: 1350 },
      { speedKmh: 60, fuelConsumptionKmpl: 20.5, engineRpm: 1300 },
      { speedKmh: 80, fuelConsumptionKmpl: 22.4, engineRpm: 1450 },
      { speedKmh: 100, fuelConsumptionKmpl: 19.2, engineRpm: 1850 },
      { speedKmh: 120, fuelConsumptionKmpl: 16.0, engineRpm: 2250 }
    ],
    technicalFeatures: [
      'Powered the flagship Laura 2.0 TDI AT L&K sedan and the Yeti 4x4 Elegance',
      'Common-rail direct injection replacing earlier pump-duse units for cleaner combustion',
      'Strong 320 Nm torque plateau ideal for 4x4 traction and confident overtaking',
      'Paired with Škoda’s proven 6-speed DSG automatic transmission'
    ]
  },

  '2.0-tdi-110': {
    id: '2.0-tdi-110',
    name: '2.0L TDI CR Turbo-Diesel',
    badge: '2.0 TDI CR (110 PS / 250 Nm)',
    displacement: '1,968 cc',
    cylinders: '4 Cylinders Common Rail',
    fuelType: 'Diesel',
    peakPowerStr: '110 PS @ 4,200 RPM',
    peakTorqueStr: '250 Nm @ 1,500–2,500 RPM',
    maxPowerHp: 110,
    maxTorqueNm: 250,
    powerRpmRange: '4,200 RPM',
    torqueRpmRange: '1,500 – 2,500 RPM',
    redlineRpm: 4900,
    idleRpm: 820,
    highwayCruiseRpm100Kmh: 1950,
    highwayCruiseRpm120Kmh: 2350,
    dynoCurve: [
      { rpm: 1000, powerHp: 26, torqueNm: 185, boostBar: 0.7 },
      { rpm: 1500, powerHp: 44, torqueNm: 250, boostBar: 1.4 },
      { rpm: 2000, powerHp: 58, torqueNm: 250, boostBar: 1.35 },
      { rpm: 2500, powerHp: 72, torqueNm: 245, boostBar: 1.25 },
      { rpm: 3000, powerHp: 85, torqueNm: 225, boostBar: 1.1 },
      { rpm: 3500, powerHp: 95, torqueNm: 205, boostBar: 0.95 },
      { rpm: 4200, powerHp: 110, torqueNm: 178, boostBar: 0.8 },
      { rpm: 4900, powerHp: 96, torqueNm: 140, boostBar: 0.6 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.7, speedKmh: 24, gForce: 0.36, gear: 1 },
      { timeSec: 3.5, speedKmh: 41, gForce: 0.31, gear: 2 },
      { timeSec: 5.6, speedKmh: 56, gForce: 0.26, gear: 2 },
      { timeSec: 8.0, speedKmh: 70, gForce: 0.22, gear: 3 },
      { timeSec: 11.0, speedKmh: 85, gForce: 0.18, gear: 4 },
      { timeSec: 14.5, speedKmh: 100, gForce: 0.15, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.68', speedAt1000Rpm: 7.7, speedAt3000Rpm: 23.1, speedAt6000Rpm: 46.2, redlineSpeed: 47 },
      { gear: '2nd', ratio: '2.06', speedAt1000Rpm: 13.8, speedAt3000Rpm: 41.4, speedAt6000Rpm: 82.8, redlineSpeed: 84 },
      { gear: '3rd', ratio: '1.36', speedAt1000Rpm: 21.0, speedAt3000Rpm: 63.0, speedAt6000Rpm: 126.0, redlineSpeed: 128 },
      { gear: '4th', ratio: '0.97', speedAt1000Rpm: 29.4, speedAt3000Rpm: 88.2, speedAt6000Rpm: 176.4, redlineSpeed: 178 },
      { gear: '5th', ratio: '0.78', speedAt1000Rpm: 36.6, speedAt3000Rpm: 109.8, speedAt6000Rpm: 219.6, redlineSpeed: 175 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 15.5, engineRpm: 1400 },
      { speedKmh: 40, fuelConsumptionKmpl: 18.8, engineRpm: 1300 },
      { speedKmh: 60, fuelConsumptionKmpl: 22.0, engineRpm: 1250 },
      { speedKmh: 80, fuelConsumptionKmpl: 23.8, engineRpm: 1400 },
      { speedKmh: 100, fuelConsumptionKmpl: 20.8, engineRpm: 1950 },
      { speedKmh: 120, fuelConsumptionKmpl: 17.2, engineRpm: 2350 }
    ],
    technicalFeatures: [
      'Entry-level 4x2 diesel option across the Škoda Yeti Ambition and Elegance trims',
      'High-pressure common-rail direct injection for cleaner, quieter combustion',
      'ARAI-tested mileage of up to 17.7 km/l in the related 4x4 configuration',
      'Favored for low running costs among compact SUV buyers of its era'
    ]
  },

  '1.4-tsi-beetle': {
    id: '1.4-tsi-beetle',
    name: '1.4L TSI Turbo-Petrol (EA211)',
    badge: '1.4 TSI (150 PS / 250 Nm)',
    displacement: '1,395 cc',
    cylinders: '4 Cylinders',
    fuelType: 'Petrol',
    peakPowerStr: '150 PS @ 5,000–6,000 RPM',
    peakTorqueStr: '250 Nm @ 1,500–3,500 RPM',
    maxPowerHp: 150,
    maxTorqueNm: 250,
    powerRpmRange: '5,000 – 6,000 RPM',
    torqueRpmRange: '1,500 – 3,500 RPM',
    redlineRpm: 6500,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 1900,
    highwayCruiseRpm120Kmh: 2300,
    dynoCurve: [
      { rpm: 1000, powerHp: 27, torqueNm: 155, boostBar: 0.3 },
      { rpm: 1500, powerHp: 45, torqueNm: 250, boostBar: 1.2 },
      { rpm: 2000, powerHp: 61, torqueNm: 250, boostBar: 1.2 },
      { rpm: 2500, powerHp: 77, torqueNm: 250, boostBar: 1.2 },
      { rpm: 3000, powerHp: 92, torqueNm: 250, boostBar: 1.15 },
      { rpm: 3500, powerHp: 108, torqueNm: 250, boostBar: 1.1 },
      { rpm: 4000, powerHp: 122, torqueNm: 240, boostBar: 1.0 },
      { rpm: 5000, powerHp: 150, torqueNm: 210, boostBar: 0.9 },
      { rpm: 5500, powerHp: 150, torqueNm: 191, boostBar: 0.8 },
      { rpm: 6000, powerHp: 150, torqueNm: 175, boostBar: 0.7 },
      { rpm: 6500, powerHp: 136, torqueNm: 146, boostBar: 0.55 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.0, speedKmh: 28, gForce: 0.60, gear: 1 },
      { timeSec: 2.1, speedKmh: 48, gForce: 0.52, gear: 1 },
      { timeSec: 3.4, speedKmh: 64, gForce: 0.43, gear: 2 },
      { timeSec: 5.1, speedKmh: 80, gForce: 0.37, gear: 2 },
      { timeSec: 6.9, speedKmh: 92, gForce: 0.31, gear: 3 },
      { timeSec: 8.4, speedKmh: 100, gForce: 0.27, gear: 3 },
      { timeSec: 10.9, speedKmh: 120, gForce: 0.21, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.76', speedAt1000Rpm: 8.0, speedAt3000Rpm: 24.0, speedAt6000Rpm: 48.0, redlineSpeed: 52 },
      { gear: '2nd', ratio: '2.08', speedAt1000Rpm: 14.4, speedAt3000Rpm: 43.2, speedAt6000Rpm: 86.4, redlineSpeed: 94 },
      { gear: '3rd', ratio: '1.34', speedAt1000Rpm: 22.4, speedAt3000Rpm: 67.2, speedAt6000Rpm: 134.4, redlineSpeed: 145 },
      { gear: '4th', ratio: '0.98', speedAt1000Rpm: 30.6, speedAt3000Rpm: 91.8, speedAt6000Rpm: 183.6, redlineSpeed: 195 },
      { gear: '5th', ratio: '0.80', speedAt1000Rpm: 37.5, speedAt3000Rpm: 112.5, speedAt6000Rpm: 225.0, redlineSpeed: 204 },
      { gear: '6th', ratio: '0.66', speedAt1000Rpm: 45.5, speedAt3000Rpm: 136.5, speedAt6000Rpm: 273.0, redlineSpeed: 204 },
      { gear: '7th (DSG)', ratio: '0.54', speedAt1000Rpm: 53.3, speedAt3000Rpm: 159.9, speedAt6000Rpm: 319.8, redlineSpeed: 204 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 10.8, engineRpm: 1650 },
      { speedKmh: 40, fuelConsumptionKmpl: 14.2, engineRpm: 1550 },
      { speedKmh: 60, fuelConsumptionKmpl: 18.8, engineRpm: 1500 },
      { speedKmh: 80, fuelConsumptionKmpl: 20.6, engineRpm: 1650 },
      { speedKmh: 100, fuelConsumptionKmpl: 17.5, engineRpm: 1900 },
      { speedKmh: 120, fuelConsumptionKmpl: 14.8, engineRpm: 2300 }
    ],
    technicalFeatures: [
      'Exclusive CBU import engine for the third-generation Volkswagen Beetle in India',
      '4-cylinder EA211 turbo-petrol with fully variable valve timing',
      'Paired exclusively with a smooth 7-speed DSG dual-clutch automatic',
      'Delivered spirited performance befitting the Beetle’s sporty coupe character'
    ]
  },

  '3.0-tdi-v6': {
    id: '3.0-tdi-v6',
    name: '3.0L TDI V6 Turbo-Diesel',
    badge: '3.0 TDI V6 (245 PS / 550 Nm)',
    displacement: '2,967 cc',
    cylinders: '6 Cylinders (V6 Configuration)',
    fuelType: 'Diesel',
    peakPowerStr: '245 PS @ 3,800–4,400 RPM',
    peakTorqueStr: '550 Nm @ 1,750–2,750 RPM',
    maxPowerHp: 245,
    maxTorqueNm: 550,
    powerRpmRange: '3,800 – 4,400 RPM',
    torqueRpmRange: '1,750 – 2,750 RPM',
    redlineRpm: 4800,
    idleRpm: 750,
    highwayCruiseRpm100Kmh: 1450,
    highwayCruiseRpm120Kmh: 1750,
    dynoCurve: [
      { rpm: 1000, powerHp: 55, torqueNm: 380, boostBar: 0.9 },
      { rpm: 1500, powerHp: 92, torqueNm: 500, boostBar: 1.6 },
      { rpm: 1750, powerHp: 115, torqueNm: 550, boostBar: 1.9 },
      { rpm: 2000, powerHp: 132, torqueNm: 550, boostBar: 1.9 },
      { rpm: 2500, powerHp: 165, torqueNm: 550, boostBar: 1.85 },
      { rpm: 2750, powerHp: 182, torqueNm: 550, boostBar: 1.8 },
      { rpm: 3000, powerHp: 198, torqueNm: 540, boostBar: 1.7 },
      { rpm: 3500, powerHp: 225, torqueNm: 500, boostBar: 1.5 },
      { rpm: 3800, powerHp: 245, torqueNm: 462, boostBar: 1.35 },
      { rpm: 4400, powerHp: 245, torqueNm: 400, boostBar: 1.1 },
      { rpm: 4800, powerHp: 220, torqueNm: 330, boostBar: 0.85 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.9, speedKmh: 30, gForce: 0.62, gear: 1 },
      { timeSec: 1.9, speedKmh: 52, gForce: 0.54, gear: 2 },
      { timeSec: 3.2, speedKmh: 72, gForce: 0.44, gear: 2 },
      { timeSec: 4.9, speedKmh: 90, gForce: 0.36, gear: 3 },
      { timeSec: 6.6, speedKmh: 100, gForce: 0.31, gear: 3 },
      { timeSec: 8.8, speedKmh: 125, gForce: 0.24, gear: 4 },
      { timeSec: 12.5, speedKmh: 150, gForce: 0.17, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '4.71', speedAt1000Rpm: 7.4, speedAt3000Rpm: 22.2, speedAt6000Rpm: 44.4, redlineSpeed: 36 },
      { gear: '2nd', ratio: '3.14', speedAt1000Rpm: 11.1, speedAt3000Rpm: 33.3, speedAt6000Rpm: 66.6, redlineSpeed: 53 },
      { gear: '3rd', ratio: '2.11', speedAt1000Rpm: 16.5, speedAt3000Rpm: 49.5, speedAt6000Rpm: 99.0, redlineSpeed: 79 },
      { gear: '4th', ratio: '1.67', speedAt1000Rpm: 20.9, speedAt3000Rpm: 62.7, speedAt6000Rpm: 125.4, redlineSpeed: 100 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 27.0, speedAt3000Rpm: 81.0, speedAt6000Rpm: 162.0, redlineSpeed: 130 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 34.9, speedAt3000Rpm: 104.7, speedAt6000Rpm: 209.4, redlineSpeed: 167 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 41.5, speedAt3000Rpm: 124.5, speedAt6000Rpm: 249.0, redlineSpeed: 199 },
      { gear: '8th', ratio: '0.67', speedAt1000Rpm: 52.1, speedAt3000Rpm: 156.3, speedAt6000Rpm: 312.6, redlineSpeed: 234 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 9.5, engineRpm: 1150 },
      { speedKmh: 40, fuelConsumptionKmpl: 11.8, engineRpm: 1050 },
      { speedKmh: 60, fuelConsumptionKmpl: 13.5, engineRpm: 1000 },
      { speedKmh: 80, fuelConsumptionKmpl: 14.2, engineRpm: 1100 },
      { speedKmh: 100, fuelConsumptionKmpl: 12.5, engineRpm: 1450 },
      { speedKmh: 120, fuelConsumptionKmpl: 10.8, engineRpm: 1750 },
      { speedKmh: 140, fuelConsumptionKmpl: 9.0, engineRpm: 2050 }
    ],
    technicalFeatures: [
      'Flagship V6 diesel shared across the Volkswagen Touareg SUV and Phaeton luxury sedan',
      'Massive 550 Nm torque plateau for effortless high-speed cruising and towing',
      '4MOTION permanent all-wheel drive standard on the Touareg application',
      'Renowned for silent, refined operation befitting flagship luxury vehicles'
    ]
  },

  '1.5-tdi': {
    id: '1.5-tdi',
    name: '1.5L TDI Turbo-Diesel',
    badge: '1.5 TDI (110 PS / 250 Nm)',
    displacement: '1,498 cc',
    cylinders: '4 Cylinders Common Rail',
    fuelType: 'Diesel',
    peakPowerStr: '110 PS @ 4,000 RPM',
    peakTorqueStr: '250 Nm @ 1,500–2,500 RPM',
    maxPowerHp: 110,
    maxTorqueNm: 250,
    powerRpmRange: '4,000 RPM',
    torqueRpmRange: '1,500 – 2,500 RPM',
    redlineRpm: 4900,
    idleRpm: 820,
    highwayCruiseRpm100Kmh: 1900,
    highwayCruiseRpm120Kmh: 2300,
    dynoCurve: [
      { rpm: 1000, powerHp: 25, torqueNm: 180, boostBar: 0.7 },
      { rpm: 1500, powerHp: 43, torqueNm: 250, boostBar: 1.4 },
      { rpm: 2000, powerHp: 57, torqueNm: 250, boostBar: 1.35 },
      { rpm: 2500, powerHp: 71, torqueNm: 248, boostBar: 1.25 },
      { rpm: 3000, powerHp: 84, torqueNm: 228, boostBar: 1.1 },
      { rpm: 3500, powerHp: 94, torqueNm: 206, boostBar: 0.95 },
      { rpm: 4000, powerHp: 110, torqueNm: 178, boostBar: 0.8 },
      { rpm: 4900, powerHp: 95, torqueNm: 139, boostBar: 0.6 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.6, speedKmh: 24, gForce: 0.38, gear: 1 },
      { timeSec: 3.3, speedKmh: 42, gForce: 0.33, gear: 2 },
      { timeSec: 5.2, speedKmh: 58, gForce: 0.28, gear: 2 },
      { timeSec: 7.5, speedKmh: 73, gForce: 0.23, gear: 3 },
      { timeSec: 10.2, speedKmh: 88, gForce: 0.19, gear: 4 },
      { timeSec: 10.7, speedKmh: 100, gForce: 0.18, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.45', speedAt1000Rpm: 8.2, speedAt3000Rpm: 24.6, speedAt6000Rpm: 49.2, redlineSpeed: 50 },
      { gear: '2nd', ratio: '1.94', speedAt1000Rpm: 14.6, speedAt3000Rpm: 43.8, speedAt6000Rpm: 87.6, redlineSpeed: 89 },
      { gear: '3rd', ratio: '1.29', speedAt1000Rpm: 22.0, speedAt3000Rpm: 66.0, speedAt6000Rpm: 132.0, redlineSpeed: 134 },
      { gear: '4th', ratio: '0.94', speedAt1000Rpm: 30.2, speedAt3000Rpm: 90.6, speedAt6000Rpm: 181.2, redlineSpeed: 183 },
      { gear: '5th', ratio: '0.75', speedAt1000Rpm: 37.8, speedAt3000Rpm: 113.4, speedAt6000Rpm: 226.8, redlineSpeed: 182 },
      { gear: '6th (DSG)', ratio: '0.62', speedAt1000Rpm: 45.7, speedAt3000Rpm: 137.1, speedAt6000Rpm: 274.2, redlineSpeed: 182 },
      { gear: '7th (DSG)', ratio: '0.52', speedAt1000Rpm: 54.5, speedAt3000Rpm: 163.5, speedAt6000Rpm: 327.0, redlineSpeed: 182 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 16.5, engineRpm: 1400 },
      { speedKmh: 40, fuelConsumptionKmpl: 20.2, engineRpm: 1300 },
      { speedKmh: 60, fuelConsumptionKmpl: 23.8, engineRpm: 1250 },
      { speedKmh: 80, fuelConsumptionKmpl: 25.5, engineRpm: 1400 },
      { speedKmh: 100, fuelConsumptionKmpl: 21.8, engineRpm: 1900 },
      { speedKmh: 120, fuelConsumptionKmpl: 18.2, engineRpm: 2300 }
    ],
    technicalFeatures: [
      'Shared diesel engine across the Vento sedan and Ameo compact sedan',
      'Common-rail direct injection with a compact, efficient 4-cylinder layout',
      'Among the most fuel-efficient diesels ever sold by Volkswagen in India',
      'Available with Volkswagen’s smooth 7-speed DSG dual-clutch automatic'
    ]
  },

  '1.2-mpi-75': {
    id: '1.2-mpi-75',
    name: '1.2L MPI Naturally Aspirated Petrol',
    badge: '1.2 MPI (75 PS / 110 Nm)',
    displacement: '1,198 cc',
    cylinders: '3 Cylinders (Naturally Aspirated)',
    fuelType: 'Petrol',
    peakPowerStr: '75 PS @ 5,400 RPM',
    peakTorqueStr: '110 Nm @ 3,750 RPM',
    maxPowerHp: 75,
    maxTorqueNm: 110,
    powerRpmRange: '5,400 RPM',
    torqueRpmRange: '3,750 RPM',
    redlineRpm: 6200,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 2700,
    highwayCruiseRpm120Kmh: 3250,
    dynoCurve: [
      { rpm: 1000, powerHp: 9, torqueNm: 62, boostBar: 0 },
      { rpm: 1500, powerHp: 15, torqueNm: 75, boostBar: 0 },
      { rpm: 2000, powerHp: 22, torqueNm: 85, boostBar: 0 },
      { rpm: 2500, powerHp: 29, torqueNm: 92, boostBar: 0 },
      { rpm: 3000, powerHp: 37, torqueNm: 100, boostBar: 0 },
      { rpm: 3750, powerHp: 47, torqueNm: 110, boostBar: 0 },
      { rpm: 4500, powerHp: 62, torqueNm: 107, boostBar: 0 },
      { rpm: 5400, powerHp: 75, torqueNm: 100, boostBar: 0 },
      { rpm: 6200, powerHp: 67, torqueNm: 82, boostBar: 0 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 2.5, speedKmh: 20, gForce: 0.24, gear: 1 },
      { timeSec: 5.2, speedKmh: 36, gForce: 0.20, gear: 2 },
      { timeSec: 8.5, speedKmh: 50, gForce: 0.17, gear: 2 },
      { timeSec: 12.5, speedKmh: 63, gForce: 0.14, gear: 3 },
      { timeSec: 16.5, speedKmh: 100, gForce: 0.09, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.94', speedAt1000Rpm: 7.2, speedAt3000Rpm: 21.6, speedAt6000Rpm: 43.2, redlineSpeed: 45 },
      { gear: '2nd', ratio: '2.13', speedAt1000Rpm: 13.3, speedAt3000Rpm: 39.9, speedAt6000Rpm: 79.8, redlineSpeed: 82 },
      { gear: '3rd', ratio: '1.36', speedAt1000Rpm: 20.9, speedAt3000Rpm: 62.7, speedAt6000Rpm: 125.4, redlineSpeed: 129 },
      { gear: '4th', ratio: '0.97', speedAt1000Rpm: 29.3, speedAt3000Rpm: 87.9, speedAt6000Rpm: 175.8, redlineSpeed: 160 },
      { gear: '5th', ratio: '0.78', speedAt1000Rpm: 36.5, speedAt3000Rpm: 109.5, speedAt6000Rpm: 219.0, redlineSpeed: 160 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 11.5, engineRpm: 2100 },
      { speedKmh: 40, fuelConsumptionKmpl: 14.8, engineRpm: 2000 },
      { speedKmh: 60, fuelConsumptionKmpl: 17.5, engineRpm: 2050 },
      { speedKmh: 80, fuelConsumptionKmpl: 18.8, engineRpm: 2300 },
      { speedKmh: 100, fuelConsumptionKmpl: 15.6, engineRpm: 2700 },
      { speedKmh: 120, fuelConsumptionKmpl: 12.8, engineRpm: 3250 }
    ],
    technicalFeatures: [
      'Entry-level naturally aspirated engine for the sub-4-metre Ameo compact sedan',
      'Simple, low-maintenance 3-cylinder architecture with no turbocharger',
      'Prioritizes affordability and low running costs over outright performance',
      'Shared with the international Volkswagen Polo/Vento small-car range'
    ]
  },

  '2.0-tfsi-190': {
    id: '2.0-tfsi-190',
    name: '2.0L TFSI Turbo-Petrol',
    badge: '2.0 TFSI (190 PS / 320 Nm)',
    displacement: '1,984 cc',
    cylinders: '4 Cylinders',
    fuelType: 'Petrol',
    peakPowerStr: '190 PS @ 4,200–6,000 RPM',
    peakTorqueStr: '320 Nm @ 1,500–4,180 RPM',
    maxPowerHp: 190,
    maxTorqueNm: 320,
    powerRpmRange: '4,200 – 6,000 RPM',
    torqueRpmRange: '1,500 – 4,180 RPM',
    redlineRpm: 6600,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1700,
    highwayCruiseRpm120Kmh: 2050,
    dynoCurve: [
      { rpm: 1000, powerHp: 38, torqueNm: 220, boostBar: 0.5 },
      { rpm: 1500, powerHp: 68, torqueNm: 320, boostBar: 1.3 },
      { rpm: 2000, powerHp: 90, torqueNm: 320, boostBar: 1.3 },
      { rpm: 2500, powerHp: 113, torqueNm: 320, boostBar: 1.3 },
      { rpm: 3000, powerHp: 135, torqueNm: 320, boostBar: 1.25 },
      { rpm: 3500, powerHp: 158, torqueNm: 320, boostBar: 1.2 },
      { rpm: 4200, powerHp: 190, torqueNm: 318, boostBar: 1.15 },
      { rpm: 5000, powerHp: 190, torqueNm: 267, boostBar: 1.05 },
      { rpm: 5500, powerHp: 190, torqueNm: 243, boostBar: 0.95 },
      { rpm: 6000, powerHp: 190, torqueNm: 223, boostBar: 0.85 },
      { rpm: 6600, powerHp: 172, torqueNm: 187, boostBar: 0.65 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.9, speedKmh: 30, gForce: 0.66, gear: 1 },
      { timeSec: 1.9, speedKmh: 52, gForce: 0.56, gear: 1 },
      { timeSec: 3.0, speedKmh: 72, gForce: 0.47, gear: 2 },
      { timeSec: 4.6, speedKmh: 88, gForce: 0.39, gear: 2 },
      { timeSec: 6.1, speedKmh: 96, gForce: 0.34, gear: 3 },
      { timeSec: 7.8, speedKmh: 100, gForce: 0.31, gear: 3 },
      { timeSec: 10.3, speedKmh: 125, gForce: 0.24, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.56', speedAt1000Rpm: 8.8, speedAt3000Rpm: 26.4, speedAt6000Rpm: 52.8, redlineSpeed: 58 },
      { gear: '2nd', ratio: '2.14', speedAt1000Rpm: 14.6, speedAt3000Rpm: 43.8, speedAt6000Rpm: 87.6, redlineSpeed: 96 },
      { gear: '3rd', ratio: '1.42', speedAt1000Rpm: 22.0, speedAt3000Rpm: 66.0, speedAt6000Rpm: 132.0, redlineSpeed: 145 },
      { gear: '4th', ratio: '1.03', speedAt1000Rpm: 30.3, speedAt3000Rpm: 90.9, speedAt6000Rpm: 181.8, redlineSpeed: 200 },
      { gear: '5th', ratio: '0.81', speedAt1000Rpm: 38.5, speedAt3000Rpm: 115.5, speedAt6000Rpm: 231.0, redlineSpeed: 220 },
      { gear: '6th', ratio: '0.67', speedAt1000Rpm: 46.6, speedAt3000Rpm: 139.8, speedAt6000Rpm: 279.6, redlineSpeed: 237 },
      { gear: '7th', ratio: '0.52', speedAt1000Rpm: 59.7, speedAt3000Rpm: 179.1, speedAt6000Rpm: 358.2, redlineSpeed: 237 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 8.6, engineRpm: 1400 },
      { speedKmh: 40, fuelConsumptionKmpl: 11.2, engineRpm: 1350 },
      { speedKmh: 60, fuelConsumptionKmpl: 15.0, engineRpm: 1300 },
      { speedKmh: 80, fuelConsumptionKmpl: 17.4, engineRpm: 1400 },
      { speedKmh: 100, fuelConsumptionKmpl: 15.8, engineRpm: 1700 },
      { speedKmh: 120, fuelConsumptionKmpl: 13.9, engineRpm: 2050 },
      { speedKmh: 140, fuelConsumptionKmpl: 11.4, engineRpm: 2400 }
    ],
    technicalFeatures: [
      'Entry powertrain for the Audi A4 sedan and Q3 compact SUV in India',
      'EA888 turbo-petrol architecture shared across the Volkswagen Group',
      'Progressive Steering and Audi Drive Select with adjustable driving modes',
      'Front-wheel drive configuration for the A4, quattro-optional on the Q3'
    ]
  },

  '2.0-tfsi-249-quattro': {
    id: '2.0-tfsi-249-quattro',
    name: '2.0L TFSI Turbo-Petrol quattro',
    badge: '2.0 TFSI quattro (249 PS / 370 Nm)',
    displacement: '1,984 cc',
    cylinders: '4 Cylinders',
    fuelType: 'Petrol',
    peakPowerStr: '249 PS @ 4,200–6,000 RPM',
    peakTorqueStr: '370 Nm @ 1,600–4,500 RPM',
    maxPowerHp: 249,
    maxTorqueNm: 370,
    powerRpmRange: '4,200 – 6,000 RPM',
    torqueRpmRange: '1,600 – 4,500 RPM',
    redlineRpm: 6700,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1650,
    highwayCruiseRpm120Kmh: 1980,
    dynoCurve: [
      { rpm: 1000, powerHp: 46, torqueNm: 255, boostBar: 0.6 },
      { rpm: 1600, powerHp: 82, torqueNm: 370, boostBar: 1.5 },
      { rpm: 2000, powerHp: 103, torqueNm: 370, boostBar: 1.5 },
      { rpm: 2500, powerHp: 129, torqueNm: 370, boostBar: 1.45 },
      { rpm: 3000, powerHp: 155, torqueNm: 370, boostBar: 1.4 },
      { rpm: 3500, powerHp: 181, torqueNm: 370, boostBar: 1.35 },
      { rpm: 4200, powerHp: 249, torqueNm: 366, boostBar: 1.3 },
      { rpm: 5000, powerHp: 249, torqueNm: 308, boostBar: 1.15 },
      { rpm: 5500, powerHp: 249, torqueNm: 280, boostBar: 1.05 },
      { rpm: 6000, powerHp: 249, torqueNm: 257, boostBar: 0.95 },
      { rpm: 6700, powerHp: 225, torqueNm: 215, boostBar: 0.75 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.7, speedKmh: 32, gForce: 0.76, gear: 1 },
      { timeSec: 1.5, speedKmh: 56, gForce: 0.66, gear: 1 },
      { timeSec: 2.4, speedKmh: 76, gForce: 0.55, gear: 2 },
      { timeSec: 3.7, speedKmh: 92, gForce: 0.46, gear: 2 },
      { timeSec: 4.9, speedKmh: 100, gForce: 0.41, gear: 3 },
      { timeSec: 6.2, speedKmh: 120, gForce: 0.35, gear: 3 },
      { timeSec: 8.5, speedKmh: 145, gForce: 0.27, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.56', speedAt1000Rpm: 9.1, speedAt3000Rpm: 27.3, speedAt6000Rpm: 54.6, redlineSpeed: 61 },
      { gear: '2nd', ratio: '2.14', speedAt1000Rpm: 15.1, speedAt3000Rpm: 45.3, speedAt6000Rpm: 90.6, redlineSpeed: 101 },
      { gear: '3rd', ratio: '1.42', speedAt1000Rpm: 22.8, speedAt3000Rpm: 68.4, speedAt6000Rpm: 136.8, redlineSpeed: 153 },
      { gear: '4th', ratio: '1.03', speedAt1000Rpm: 31.4, speedAt3000Rpm: 94.2, speedAt6000Rpm: 188.4, redlineSpeed: 210 },
      { gear: '5th', ratio: '0.81', speedAt1000Rpm: 39.9, speedAt3000Rpm: 119.7, speedAt6000Rpm: 239.4, redlineSpeed: 245 },
      { gear: '6th', ratio: '0.67', speedAt1000Rpm: 48.3, speedAt3000Rpm: 144.9, speedAt6000Rpm: 289.8, redlineSpeed: 245 },
      { gear: '7th', ratio: '0.52', speedAt1000Rpm: 62.0, speedAt3000Rpm: 186.0, speedAt6000Rpm: 372.0, redlineSpeed: 245 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 7.0, engineRpm: 1450 },
      { speedKmh: 40, fuelConsumptionKmpl: 9.2, engineRpm: 1400 },
      { speedKmh: 60, fuelConsumptionKmpl: 12.5, engineRpm: 1350 },
      { speedKmh: 80, fuelConsumptionKmpl: 14.4, engineRpm: 1450 },
      { speedKmh: 100, fuelConsumptionKmpl: 12.9, engineRpm: 1650 },
      { speedKmh: 120, fuelConsumptionKmpl: 11.2, engineRpm: 1980 },
      { speedKmh: 140, fuelConsumptionKmpl: 9.4, engineRpm: 2320 }
    ],
    technicalFeatures: [
      'High-output tune of the EA888 engine powering the A6 sedan and Q5 SUV',
      'Permanent quattro all-wheel drive for confident all-weather traction',
      'Paired exclusively with the ultra-fast 7-speed S tronic dual-clutch gearbox',
      'Progressive Dynamic steering rack sharpens response at low speeds'
    ]
  },

  '3.0-tfsi-v6-340': {
    id: '3.0-tfsi-v6-340',
    name: '3.0L TFSI V6 Turbo-Petrol quattro',
    badge: '3.0 TFSI V6 quattro (340 PS / 500 Nm)',
    displacement: '2,995 cc',
    cylinders: '6 Cylinders (V6 Configuration)',
    fuelType: 'Petrol',
    peakPowerStr: '340 PS @ 5,200–6,400 RPM',
    peakTorqueStr: '500 Nm @ 1,370–4,500 RPM',
    maxPowerHp: 340,
    maxTorqueNm: 500,
    powerRpmRange: '5,200 – 6,400 RPM',
    torqueRpmRange: '1,370 – 4,500 RPM',
    redlineRpm: 6800,
    idleRpm: 780,
    highwayCruiseRpm100Kmh: 1500,
    highwayCruiseRpm120Kmh: 1800,
    dynoCurve: [
      { rpm: 1000, powerHp: 62, torqueNm: 340, boostBar: 0.7 },
      { rpm: 1370, powerHp: 90, torqueNm: 500, boostBar: 1.4 },
      { rpm: 2000, powerHp: 131, torqueNm: 500, boostBar: 1.4 },
      { rpm: 2500, powerHp: 164, torqueNm: 500, boostBar: 1.35 },
      { rpm: 3000, powerHp: 197, torqueNm: 500, boostBar: 1.3 },
      { rpm: 3500, powerHp: 230, torqueNm: 500, boostBar: 1.25 },
      { rpm: 4500, powerHp: 296, torqueNm: 495, boostBar: 1.2 },
      { rpm: 5200, powerHp: 340, torqueNm: 460, boostBar: 1.1 },
      { rpm: 6000, powerHp: 340, torqueNm: 398, boostBar: 0.95 },
      { rpm: 6400, powerHp: 340, torqueNm: 373, boostBar: 0.9 },
      { rpm: 6800, powerHp: 305, torqueNm: 320, boostBar: 0.7 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.7, speedKmh: 34, gForce: 0.82, gear: 1 },
      { timeSec: 1.4, speedKmh: 58, gForce: 0.71, gear: 2 },
      { timeSec: 2.2, speedKmh: 78, gForce: 0.58, gear: 2 },
      { timeSec: 3.4, speedKmh: 96, gForce: 0.48, gear: 3 },
      { timeSec: 4.5, speedKmh: 100, gForce: 0.44, gear: 3 },
      { timeSec: 5.9, speedKmh: 130, gForce: 0.34, gear: 4 },
      { timeSec: 8.2, speedKmh: 160, gForce: 0.25, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '4.71', speedAt1000Rpm: 8.4, speedAt3000Rpm: 25.2, speedAt6000Rpm: 50.4, redlineSpeed: 57 },
      { gear: '2nd', ratio: '3.14', speedAt1000Rpm: 12.6, speedAt3000Rpm: 37.8, speedAt6000Rpm: 75.6, redlineSpeed: 85 },
      { gear: '3rd', ratio: '2.11', speedAt1000Rpm: 18.7, speedAt3000Rpm: 56.1, speedAt6000Rpm: 112.2, redlineSpeed: 127 },
      { gear: '4th', ratio: '1.67', speedAt1000Rpm: 23.7, speedAt3000Rpm: 71.1, speedAt6000Rpm: 142.2, redlineSpeed: 161 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 30.7, speedAt3000Rpm: 92.1, speedAt6000Rpm: 184.2, redlineSpeed: 208 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 39.6, speedAt3000Rpm: 118.8, speedAt6000Rpm: 237.6, redlineSpeed: 250 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 47.1, speedAt3000Rpm: 141.3, speedAt6000Rpm: 282.6, redlineSpeed: 250 },
      { gear: '8th', ratio: '0.67', speedAt1000Rpm: 59.1, speedAt3000Rpm: 177.3, speedAt6000Rpm: 354.6, redlineSpeed: 250 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 6.2, engineRpm: 1150 },
      { speedKmh: 40, fuelConsumptionKmpl: 7.8, engineRpm: 1050 },
      { speedKmh: 60, fuelConsumptionKmpl: 9.6, engineRpm: 1000 },
      { speedKmh: 80, fuelConsumptionKmpl: 10.8, engineRpm: 1100 },
      { speedKmh: 100, fuelConsumptionKmpl: 10.0, engineRpm: 1500 },
      { speedKmh: 120, fuelConsumptionKmpl: 8.8, engineRpm: 1800 },
      { speedKmh: 140, fuelConsumptionKmpl: 7.4, engineRpm: 2100 }
    ],
    technicalFeatures: [
      'Flagship non-RS V6 turbo-petrol powering the Q7 and Q8 luxury SUVs',
      'Permanent quattro all-wheel drive with a self-locking center differential',
      'Massive 500 Nm torque plateau available from just 1,370 RPM',
      'Paired with Audi’s smooth 8-speed Tiptronic torque-converter automatic'
    ]
  },

  '2.9-tfsi-v6-rs': {
    id: '2.9-tfsi-v6-rs',
    name: '2.9L TFSI Twin-Turbo V6 (Audi Sport)',
    badge: '2.9 TFSI V6 Bi-Turbo (450 PS / 600 Nm)',
    displacement: '2,894 cc',
    cylinders: '6 Cylinders (Twin-Turbo V6)',
    fuelType: 'Petrol',
    peakPowerStr: '450 PS @ 5,700–6,700 RPM',
    peakTorqueStr: '600 Nm @ 1,900–5,000 RPM',
    maxPowerHp: 450,
    maxTorqueNm: 600,
    powerRpmRange: '5,700 – 6,700 RPM',
    torqueRpmRange: '1,900 – 5,000 RPM',
    redlineRpm: 7000,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1550,
    highwayCruiseRpm120Kmh: 1850,
    dynoCurve: [
      { rpm: 1000, powerHp: 75, torqueNm: 420, boostBar: 0.9 },
      { rpm: 1900, powerHp: 145, torqueNm: 600, boostBar: 1.8 },
      { rpm: 2500, powerHp: 190, torqueNm: 600, boostBar: 1.8 },
      { rpm: 3000, powerHp: 228, torqueNm: 600, boostBar: 1.75 },
      { rpm: 3500, powerHp: 266, torqueNm: 600, boostBar: 1.7 },
      { rpm: 4000, powerHp: 304, torqueNm: 600, boostBar: 1.65 },
      { rpm: 5000, powerHp: 380, torqueNm: 597, boostBar: 1.55 },
      { rpm: 5700, powerHp: 450, torqueNm: 566, boostBar: 1.45 },
      { rpm: 6700, powerHp: 450, torqueNm: 482, boostBar: 1.25 },
      { rpm: 7000, powerHp: 410, torqueNm: 430, boostBar: 1.05 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.6, speedKmh: 36, gForce: 0.95, gear: 1 },
      { timeSec: 1.2, speedKmh: 62, gForce: 0.82, gear: 2 },
      { timeSec: 1.9, speedKmh: 86, gForce: 0.68, gear: 2 },
      { timeSec: 2.8, speedKmh: 100, gForce: 0.58, gear: 3 },
      { timeSec: 3.9, speedKmh: 130, gForce: 0.46, gear: 3 },
      { timeSec: 5.4, speedKmh: 160, gForce: 0.34, gear: 4 },
      { timeSec: 7.6, speedKmh: 200, gForce: 0.24, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '4.71', speedAt1000Rpm: 9.0, speedAt3000Rpm: 27.0, speedAt6000Rpm: 54.0, redlineSpeed: 63 },
      { gear: '2nd', ratio: '3.14', speedAt1000Rpm: 13.5, speedAt3000Rpm: 40.5, speedAt6000Rpm: 81.0, redlineSpeed: 95 },
      { gear: '3rd', ratio: '2.11', speedAt1000Rpm: 20.0, speedAt3000Rpm: 60.0, speedAt6000Rpm: 120.0, redlineSpeed: 140 },
      { gear: '4th', ratio: '1.67', speedAt1000Rpm: 25.4, speedAt3000Rpm: 76.2, speedAt6000Rpm: 152.4, redlineSpeed: 178 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 32.9, speedAt3000Rpm: 98.7, speedAt6000Rpm: 197.4, redlineSpeed: 230 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 42.4, speedAt3000Rpm: 127.2, speedAt6000Rpm: 254.4, redlineSpeed: 280 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 50.5, speedAt3000Rpm: 151.5, speedAt6000Rpm: 303.0, redlineSpeed: 280 },
      { gear: '8th', ratio: '0.67', speedAt1000Rpm: 63.3, speedAt3000Rpm: 189.9, speedAt6000Rpm: 379.8, redlineSpeed: 280 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 5.5, engineRpm: 1200 },
      { speedKmh: 40, fuelConsumptionKmpl: 6.8, engineRpm: 1100 },
      { speedKmh: 60, fuelConsumptionKmpl: 8.2, engineRpm: 1050 },
      { speedKmh: 80, fuelConsumptionKmpl: 9.2, engineRpm: 1150 },
      { speedKmh: 100, fuelConsumptionKmpl: 8.6, engineRpm: 1550 },
      { speedKmh: 120, fuelConsumptionKmpl: 7.5, engineRpm: 1850 },
      { speedKmh: 140, fuelConsumptionKmpl: 6.3, engineRpm: 2150 }
    ],
    technicalFeatures: [
      'Hand-assembled twin-turbo V6 developed by Audi Sport in Neckarsulm',
      'Powers the RS5 Coupé and RS5 Sportback performance flagships',
      'quattro all-wheel drive with a sport rear differential for torque vectoring',
      'Broad 600 Nm torque plateau from just 1,900 RPM for relentless mid-range punch'
    ]
  },

  '4.0-tfsi-v8-rs': {
    id: '4.0-tfsi-v8-rs',
    name: '4.0L TFSI Twin-Turbo V8 (Audi Sport)',
    badge: '4.0 TFSI V8 Bi-Turbo (600 PS / 800 Nm)',
    displacement: '3,996 cc',
    cylinders: '8 Cylinders (Twin-Turbo V8)',
    fuelType: 'Petrol',
    peakPowerStr: '600 PS @ 6,000 RPM',
    peakTorqueStr: '800 Nm @ 2,200–4,500 RPM',
    maxPowerHp: 600,
    maxTorqueNm: 800,
    powerRpmRange: '6,000 RPM',
    torqueRpmRange: '2,200 – 4,500 RPM',
    redlineRpm: 6800,
    idleRpm: 750,
    highwayCruiseRpm100Kmh: 1400,
    highwayCruiseRpm120Kmh: 1700,
    dynoCurve: [
      { rpm: 1000, powerHp: 95, torqueNm: 560, boostBar: 1.0 },
      { rpm: 2200, powerHp: 225, torqueNm: 800, boostBar: 1.9 },
      { rpm: 2800, powerHp: 280, torqueNm: 800, boostBar: 1.9 },
      { rpm: 3400, powerHp: 340, torqueNm: 800, boostBar: 1.85 },
      { rpm: 4000, powerHp: 410, torqueNm: 800, boostBar: 1.8 },
      { rpm: 4500, powerHp: 470, torqueNm: 800, boostBar: 1.75 },
      { rpm: 5200, powerHp: 545, torqueNm: 780, boostBar: 1.6 },
      { rpm: 6000, powerHp: 600, torqueNm: 716, boostBar: 1.45 },
      { rpm: 6800, powerHp: 560, torqueNm: 625, boostBar: 1.2 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.5, speedKmh: 38, gForce: 1.05, gear: 1 },
      { timeSec: 1.1, speedKmh: 66, gForce: 0.90, gear: 2 },
      { timeSec: 1.8, speedKmh: 90, gForce: 0.74, gear: 2 },
      { timeSec: 2.7, speedKmh: 100, gForce: 0.64, gear: 3 },
      { timeSec: 3.8, speedKmh: 140, gForce: 0.50, gear: 3 },
      { timeSec: 5.2, speedKmh: 170, gForce: 0.38, gear: 4 },
      { timeSec: 7.5, speedKmh: 210, gForce: 0.27, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '4.71', speedAt1000Rpm: 9.4, speedAt3000Rpm: 28.2, speedAt6000Rpm: 56.4, redlineSpeed: 64 },
      { gear: '2nd', ratio: '3.14', speedAt1000Rpm: 14.1, speedAt3000Rpm: 42.3, speedAt6000Rpm: 84.6, redlineSpeed: 96 },
      { gear: '3rd', ratio: '2.11', speedAt1000Rpm: 20.9, speedAt3000Rpm: 62.7, speedAt6000Rpm: 125.4, redlineSpeed: 143 },
      { gear: '4th', ratio: '1.67', speedAt1000Rpm: 26.4, speedAt3000Rpm: 79.2, speedAt6000Rpm: 158.4, redlineSpeed: 181 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 34.2, speedAt3000Rpm: 102.6, speedAt6000Rpm: 205.2, redlineSpeed: 234 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 44.1, speedAt3000Rpm: 132.3, speedAt6000Rpm: 264.6, redlineSpeed: 250 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 52.5, speedAt3000Rpm: 157.5, speedAt6000Rpm: 315.0, redlineSpeed: 250 },
      { gear: '8th', ratio: '0.67', speedAt1000Rpm: 65.8, speedAt3000Rpm: 197.4, speedAt6000Rpm: 394.8, redlineSpeed: 250 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 4.5, engineRpm: 1100 },
      { speedKmh: 40, fuelConsumptionKmpl: 5.6, engineRpm: 1000 },
      { speedKmh: 60, fuelConsumptionKmpl: 6.8, engineRpm: 950 },
      { speedKmh: 80, fuelConsumptionKmpl: 7.6, engineRpm: 1050 },
      { speedKmh: 100, fuelConsumptionKmpl: 7.0, engineRpm: 1400 },
      { speedKmh: 120, fuelConsumptionKmpl: 6.1, engineRpm: 1700 },
      { speedKmh: 140, fuelConsumptionKmpl: 5.2, engineRpm: 1980 }
    ],
    technicalFeatures: [
      'Hand-built twin-turbo V8 shared with the Lamborghini Urus and Porsche Cayenne Turbo',
      'Powers both the RS Q8 SUV and the RS6 Avant performance estate',
      'Massive 800 Nm torque plateau from just 2,200 RPM',
      'Electromechanical active roll stabilization for flat, composed high-speed cornering'
    ]
  },

  '1.4-tfsi-150': {
    id: '1.4-tfsi-150',
    name: '1.4L TFSI Turbo-Petrol',
    badge: '1.4 TFSI (150 PS / 250 Nm)',
    displacement: '1,395 cc',
    cylinders: '4 Cylinders',
    fuelType: 'Petrol',
    peakPowerStr: '150 PS @ 5,000–6,000 RPM',
    peakTorqueStr: '250 Nm @ 1,500–3,500 RPM',
    maxPowerHp: 150,
    maxTorqueNm: 250,
    powerRpmRange: '5,000 – 6,000 RPM',
    torqueRpmRange: '1,500 – 3,500 RPM',
    redlineRpm: 6500,
    idleRpm: 850,
    highwayCruiseRpm100Kmh: 1900,
    highwayCruiseRpm120Kmh: 2300,
    dynoCurve: [
      { rpm: 1000, powerHp: 27, torqueNm: 155, boostBar: 0.3 },
      { rpm: 1500, powerHp: 45, torqueNm: 250, boostBar: 1.2 },
      { rpm: 2000, powerHp: 61, torqueNm: 250, boostBar: 1.2 },
      { rpm: 2500, powerHp: 77, torqueNm: 250, boostBar: 1.2 },
      { rpm: 3000, powerHp: 92, torqueNm: 250, boostBar: 1.15 },
      { rpm: 3500, powerHp: 108, torqueNm: 250, boostBar: 1.1 },
      { rpm: 4000, powerHp: 122, torqueNm: 240, boostBar: 1.0 },
      { rpm: 5000, powerHp: 150, torqueNm: 210, boostBar: 0.9 },
      { rpm: 5500, powerHp: 150, torqueNm: 191, boostBar: 0.8 },
      { rpm: 6000, powerHp: 150, torqueNm: 175, boostBar: 0.7 },
      { rpm: 6500, powerHp: 136, torqueNm: 146, boostBar: 0.55 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.0, speedKmh: 28, gForce: 0.60, gear: 1 },
      { timeSec: 2.1, speedKmh: 48, gForce: 0.52, gear: 1 },
      { timeSec: 3.4, speedKmh: 64, gForce: 0.43, gear: 2 },
      { timeSec: 5.1, speedKmh: 80, gForce: 0.37, gear: 2 },
      { timeSec: 6.9, speedKmh: 92, gForce: 0.31, gear: 3 },
      { timeSec: 8.4, speedKmh: 100, gForce: 0.27, gear: 3 },
      { timeSec: 11.5, speedKmh: 120, gForce: 0.20, gear: 4 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.76', speedAt1000Rpm: 8.0, speedAt3000Rpm: 24.0, speedAt6000Rpm: 48.0, redlineSpeed: 52 },
      { gear: '2nd', ratio: '2.08', speedAt1000Rpm: 14.4, speedAt3000Rpm: 43.2, speedAt6000Rpm: 86.4, redlineSpeed: 94 },
      { gear: '3rd', ratio: '1.34', speedAt1000Rpm: 22.4, speedAt3000Rpm: 67.2, speedAt6000Rpm: 134.4, redlineSpeed: 145 },
      { gear: '4th', ratio: '0.98', speedAt1000Rpm: 30.6, speedAt3000Rpm: 91.8, speedAt6000Rpm: 183.6, redlineSpeed: 195 },
      { gear: '5th', ratio: '0.80', speedAt1000Rpm: 37.5, speedAt3000Rpm: 112.5, speedAt6000Rpm: 225.0, redlineSpeed: 204 },
      { gear: '6th', ratio: '0.66', speedAt1000Rpm: 45.5, speedAt3000Rpm: 136.5, speedAt6000Rpm: 273.0, redlineSpeed: 216 },
      { gear: '7th (S tronic)', ratio: '0.54', speedAt1000Rpm: 53.3, speedAt3000Rpm: 159.9, speedAt6000Rpm: 319.8, redlineSpeed: 216 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 10.8, engineRpm: 1650 },
      { speedKmh: 40, fuelConsumptionKmpl: 14.2, engineRpm: 1550 },
      { speedKmh: 60, fuelConsumptionKmpl: 18.4, engineRpm: 1500 },
      { speedKmh: 80, fuelConsumptionKmpl: 20.2, engineRpm: 1650 },
      { speedKmh: 100, fuelConsumptionKmpl: 17.6, engineRpm: 1900 },
      { speedKmh: 120, fuelConsumptionKmpl: 14.8, engineRpm: 2300 }
    ],
    technicalFeatures: [
      'Exclusive CBU/CKD import engine for the compact Audi A3 sedan in India',
      'EA211 turbo-petrol architecture shared across the Volkswagen Group',
      'Paired exclusively with a smooth 7-speed S tronic dual-clutch transmission',
      'Front-wheel drive configuration for agile, efficient compact-luxury motoring'
    ]
  },

  '3.0-twin-turbo-flat6-carrera': {
    id: '3.0-twin-turbo-flat6-carrera',
    name: '3.0L Twin-Turbo Flat-6',
    badge: '3.0 Twin-Turbo Flat-6 (385 PS / 450 Nm)',
    displacement: '2,981 cc',
    cylinders: '6 Cylinders (Rear-Mounted Twin-Turbo Flat-6)',
    fuelType: 'Petrol',
    peakPowerStr: '385 PS @ 6,500 RPM',
    peakTorqueStr: '450 Nm @ 1,950–5,000 RPM',
    maxPowerHp: 385,
    maxTorqueNm: 450,
    powerRpmRange: '6,500 RPM',
    torqueRpmRange: '1,950 – 5,000 RPM',
    redlineRpm: 7500,
    idleRpm: 750,
    highwayCruiseRpm100Kmh: 1600,
    highwayCruiseRpm120Kmh: 1950,
    dynoCurve: [
      { rpm: 1000, powerHp: 55, torqueNm: 260, boostBar: 0.7 },
      { rpm: 1950, powerHp: 118, torqueNm: 450, boostBar: 1.3 },
      { rpm: 2500, powerHp: 155, torqueNm: 450, boostBar: 1.3 },
      { rpm: 3000, powerHp: 192, torqueNm: 450, boostBar: 1.25 },
      { rpm: 3500, powerHp: 228, torqueNm: 450, boostBar: 1.2 },
      { rpm: 4500, powerHp: 300, torqueNm: 450, boostBar: 1.15 },
      { rpm: 5500, powerHp: 355, torqueNm: 440, boostBar: 1.05 },
      { rpm: 6500, powerHp: 385, torqueNm: 400, boostBar: 0.95 },
      { rpm: 7500, powerHp: 360, torqueNm: 330, boostBar: 0.7 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.6, speedKmh: 40, gForce: 1.0, gear: 1 },
      { timeSec: 1.2, speedKmh: 68, gForce: 0.86, gear: 2 },
      { timeSec: 1.9, speedKmh: 92, gForce: 0.72, gear: 2 },
      { timeSec: 2.7, speedKmh: 100, gForce: 0.62, gear: 3 },
      { timeSec: 3.8, speedKmh: 130, gForce: 0.48, gear: 3 },
      { timeSec: 5.3, speedKmh: 160, gForce: 0.36, gear: 4 },
      { timeSec: 7.6, speedKmh: 200, gForce: 0.25, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '4.29', speedAt1000Rpm: 9.5, speedAt3000Rpm: 28.5, speedAt6000Rpm: 57.0, redlineSpeed: 67 },
      { gear: '2nd', ratio: '2.71', speedAt1000Rpm: 15.0, speedAt3000Rpm: 45.0, speedAt6000Rpm: 90.0, redlineSpeed: 106 },
      { gear: '3rd', ratio: '1.85', speedAt1000Rpm: 22.0, speedAt3000Rpm: 66.0, speedAt6000Rpm: 132.0, redlineSpeed: 155 },
      { gear: '4th', ratio: '1.41', speedAt1000Rpm: 28.9, speedAt3000Rpm: 86.7, speedAt6000Rpm: 173.4, redlineSpeed: 204 },
      { gear: '5th', ratio: '1.14', speedAt1000Rpm: 35.7, speedAt3000Rpm: 107.1, speedAt6000Rpm: 214.2, redlineSpeed: 252 },
      { gear: '6th', ratio: '0.92', speedAt1000Rpm: 44.3, speedAt3000Rpm: 132.9, speedAt6000Rpm: 265.8, redlineSpeed: 280 },
      { gear: '7th', ratio: '0.76', speedAt1000Rpm: 53.6, speedAt3000Rpm: 160.8, speedAt6000Rpm: 293.0, redlineSpeed: 293 },
      { gear: '8th', ratio: '0.63', speedAt1000Rpm: 64.7, speedAt3000Rpm: 194.1, speedAt6000Rpm: 293.0, redlineSpeed: 293 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 6.0, engineRpm: 1300 },
      { speedKmh: 40, fuelConsumptionKmpl: 7.4, engineRpm: 1200 },
      { speedKmh: 60, fuelConsumptionKmpl: 9.0, engineRpm: 1150 },
      { speedKmh: 80, fuelConsumptionKmpl: 10.2, engineRpm: 1250 },
      { speedKmh: 100, fuelConsumptionKmpl: 9.6, engineRpm: 1600 },
      { speedKmh: 120, fuelConsumptionKmpl: 8.4, engineRpm: 1950 },
      { speedKmh: 140, fuelConsumptionKmpl: 7.1, engineRpm: 2300 }
    ],
    technicalFeatures: [
      'Rear-mounted, twin-turbocharged flat-6 layout unchanged in concept since 1963',
      'Powers the entry 911 Carrera, with a 7-speed manual still on offer alongside PDK',
      'Porsche Active Suspension Management (PASM) with adaptive damping standard',
      'Signature flat-6 exhaust note tuned by Porsche Motorsport'
    ]
  },

  '2.0-turbo-flat4-718': {
    id: '2.0-turbo-flat4-718',
    name: '2.0L Turbo-Petrol Flat-4',
    badge: '2.0 Turbo Flat-4 (300 PS / 380 Nm)',
    displacement: '1,988 cc',
    cylinders: '4 Cylinders (Mid-Mounted Turbo Flat-4)',
    fuelType: 'Petrol',
    peakPowerStr: '300 PS @ 6,500 RPM',
    peakTorqueStr: '380 Nm @ 1,950–4,500 RPM',
    maxPowerHp: 300,
    maxTorqueNm: 380,
    powerRpmRange: '6,500 RPM',
    torqueRpmRange: '1,950 – 4,500 RPM',
    redlineRpm: 7500,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1700,
    highwayCruiseRpm120Kmh: 2050,
    dynoCurve: [
      { rpm: 1000, powerHp: 42, torqueNm: 220, boostBar: 0.7 },
      { rpm: 1950, powerHp: 98, torqueNm: 380, boostBar: 1.3 },
      { rpm: 2500, powerHp: 126, torqueNm: 380, boostBar: 1.3 },
      { rpm: 3000, powerHp: 151, torqueNm: 380, boostBar: 1.25 },
      { rpm: 4000, powerHp: 202, torqueNm: 380, boostBar: 1.2 },
      { rpm: 4500, powerHp: 227, torqueNm: 380, boostBar: 1.15 },
      { rpm: 5500, powerHp: 277, torqueNm: 360, boostBar: 1.0 },
      { rpm: 6500, powerHp: 300, torqueNm: 320, boostBar: 0.85 },
      { rpm: 7500, powerHp: 275, torqueNm: 262, boostBar: 0.6 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.7, speedKmh: 36, gForce: 0.9, gear: 1 },
      { timeSec: 1.4, speedKmh: 60, gForce: 0.75, gear: 2 },
      { timeSec: 2.2, speedKmh: 82, gForce: 0.6, gear: 2 },
      { timeSec: 3.2, speedKmh: 100, gForce: 0.5, gear: 3 },
      { timeSec: 4.6, speedKmh: 130, gForce: 0.38, gear: 4 },
      { timeSec: 6.5, speedKmh: 160, gForce: 0.28, gear: 5 },
      { timeSec: 9.5, speedKmh: 200, gForce: 0.19, gear: 6 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.91', speedAt1000Rpm: 8.8, speedAt3000Rpm: 26.4, speedAt6000Rpm: 52.8, redlineSpeed: 62 },
      { gear: '2nd', ratio: '2.29', speedAt1000Rpm: 14.4, speedAt3000Rpm: 43.2, speedAt6000Rpm: 86.4, redlineSpeed: 100 },
      { gear: '3rd', ratio: '1.58', speedAt1000Rpm: 20.7, speedAt3000Rpm: 62.1, speedAt6000Rpm: 124.2, redlineSpeed: 145 },
      { gear: '4th', ratio: '1.19', speedAt1000Rpm: 27.6, speedAt3000Rpm: 82.8, speedAt6000Rpm: 165.6, redlineSpeed: 193 },
      { gear: '5th', ratio: '0.97', speedAt1000Rpm: 33.7, speedAt3000Rpm: 101.1, speedAt6000Rpm: 202.2, redlineSpeed: 236 },
      { gear: '6th', ratio: '0.79', speedAt1000Rpm: 41.4, speedAt3000Rpm: 124.2, speedAt6000Rpm: 248.4, redlineSpeed: 275 },
      { gear: '7th', ratio: '0.65', speedAt1000Rpm: 50.3, speedAt3000Rpm: 150.9, speedAt6000Rpm: 275.0, redlineSpeed: 275 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 7.5, engineRpm: 1400 },
      { speedKmh: 40, fuelConsumptionKmpl: 9.2, engineRpm: 1300 },
      { speedKmh: 60, fuelConsumptionKmpl: 11.0, engineRpm: 1250 },
      { speedKmh: 80, fuelConsumptionKmpl: 12.4, engineRpm: 1350 },
      { speedKmh: 100, fuelConsumptionKmpl: 11.6, engineRpm: 1700 },
      { speedKmh: 120, fuelConsumptionKmpl: 10.2, engineRpm: 2050 },
      { speedKmh: 140, fuelConsumptionKmpl: 8.7, engineRpm: 2400 }
    ],
    technicalFeatures: [
      'Mid-engine, rear-wheel-drive layout for near-perfect 45:55 weight balance',
      'Powers the entry 718 Cayman and Boxster',
      'Distinctive flat-4 turbo exhaust note unlike any rival inline engine',
      'Available with a 6-speed manual for purists'
    ]
  },

  '2.0-turbo-macan': {
    id: '2.0-turbo-macan',
    name: '2.0L Turbo-Petrol Flat/Inline-4',
    badge: '2.0 Turbo (265 PS / 400 Nm)',
    displacement: '1,984 cc',
    cylinders: '4 Cylinders',
    fuelType: 'Petrol',
    peakPowerStr: '265 PS @ 5,000–6,500 RPM',
    peakTorqueStr: '400 Nm @ 1,800–4,500 RPM',
    maxPowerHp: 265,
    maxTorqueNm: 400,
    powerRpmRange: '5,000 – 6,500 RPM',
    torqueRpmRange: '1,800 – 4,500 RPM',
    redlineRpm: 7000,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1650,
    highwayCruiseRpm120Kmh: 2000,
    dynoCurve: [
      { rpm: 1000, powerHp: 38, torqueNm: 230, boostBar: 0.7 },
      { rpm: 1800, powerHp: 92, torqueNm: 400, boostBar: 1.3 },
      { rpm: 2500, powerHp: 128, torqueNm: 400, boostBar: 1.3 },
      { rpm: 3000, powerHp: 154, torqueNm: 400, boostBar: 1.25 },
      { rpm: 4000, powerHp: 205, torqueNm: 400, boostBar: 1.2 },
      { rpm: 4500, powerHp: 231, torqueNm: 400, boostBar: 1.15 },
      { rpm: 5000, powerHp: 265, torqueNm: 396, boostBar: 1.1 },
      { rpm: 6500, powerHp: 265, torqueNm: 305, boostBar: 0.9 },
      { rpm: 7000, powerHp: 245, torqueNm: 265, boostBar: 0.7 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.9, speedKmh: 32, gForce: 0.78, gear: 1 },
      { timeSec: 1.8, speedKmh: 54, gForce: 0.66, gear: 2 },
      { timeSec: 2.9, speedKmh: 78, gForce: 0.54, gear: 2 },
      { timeSec: 4.1, speedKmh: 100, gForce: 0.44, gear: 3 },
      { timeSec: 6.0, speedKmh: 130, gForce: 0.32, gear: 4 },
      { timeSec: 8.4, speedKmh: 160, gForce: 0.23, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '4.71', speedAt1000Rpm: 8.4, speedAt3000Rpm: 25.2, speedAt6000Rpm: 50.4, redlineSpeed: 59 },
      { gear: '2nd', ratio: '3.14', speedAt1000Rpm: 12.6, speedAt3000Rpm: 37.8, speedAt6000Rpm: 75.6, redlineSpeed: 88 },
      { gear: '3rd', ratio: '2.11', speedAt1000Rpm: 18.7, speedAt3000Rpm: 56.1, speedAt6000Rpm: 112.2, redlineSpeed: 131 },
      { gear: '4th', ratio: '1.67', speedAt1000Rpm: 23.7, speedAt3000Rpm: 71.1, speedAt6000Rpm: 142.2, redlineSpeed: 166 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 30.7, speedAt3000Rpm: 92.1, speedAt6000Rpm: 184.2, redlineSpeed: 215 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 39.6, speedAt3000Rpm: 118.8, speedAt6000Rpm: 232.0, redlineSpeed: 232 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 47.1, speedAt3000Rpm: 141.3, speedAt6000Rpm: 232.0, redlineSpeed: 232 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 6.8, engineRpm: 1350 },
      { speedKmh: 40, fuelConsumptionKmpl: 8.4, engineRpm: 1250 },
      { speedKmh: 60, fuelConsumptionKmpl: 10.0, engineRpm: 1200 },
      { speedKmh: 80, fuelConsumptionKmpl: 11.2, engineRpm: 1300 },
      { speedKmh: 100, fuelConsumptionKmpl: 10.5, engineRpm: 1650 },
      { speedKmh: 120, fuelConsumptionKmpl: 9.2, engineRpm: 2000 },
      { speedKmh: 140, fuelConsumptionKmpl: 7.8, engineRpm: 2350 }
    ],
    technicalFeatures: [
      'Entry powertrain for the Macan compact luxury SUV',
      'Shared turbocharged architecture across the Volkswagen Group premium range',
      'Porsche Active Suspension Management (PASM) standard',
      'Available exclusively in the Macan'
    ]
  },

  '3.0-turbo-v6-cayenne': {
    id: '3.0-turbo-v6-cayenne',
    name: '3.0L Turbo-Petrol V6',
    badge: '3.0 Turbo V6 (353 PS / 500 Nm)',
    displacement: '2,995 cc',
    cylinders: '6 Cylinders (Turbo V6)',
    fuelType: 'Petrol',
    peakPowerStr: '353 PS @ 5,300–6,400 RPM',
    peakTorqueStr: '500 Nm @ 1,340–5,300 RPM',
    maxPowerHp: 353,
    maxTorqueNm: 500,
    powerRpmRange: '5,300 – 6,400 RPM',
    torqueRpmRange: '1,340 – 5,300 RPM',
    redlineRpm: 6800,
    idleRpm: 750,
    highwayCruiseRpm100Kmh: 1500,
    highwayCruiseRpm120Kmh: 1800,
    dynoCurve: [
      { rpm: 1000, powerHp: 60, torqueNm: 340, boostBar: 0.9 },
      { rpm: 1340, powerHp: 82, torqueNm: 500, boostBar: 1.5 },
      { rpm: 2500, powerHp: 150, torqueNm: 500, boostBar: 1.5 },
      { rpm: 3000, powerHp: 180, torqueNm: 500, boostBar: 1.45 },
      { rpm: 4000, powerHp: 240, torqueNm: 500, boostBar: 1.4 },
      { rpm: 5300, powerHp: 353, torqueNm: 480, boostBar: 1.25 },
      { rpm: 6400, powerHp: 353, torqueNm: 397, boostBar: 1.05 },
      { rpm: 6800, powerHp: 330, torqueNm: 360, boostBar: 0.9 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.0, speedKmh: 30, gForce: 0.68, gear: 1 },
      { timeSec: 2.1, speedKmh: 52, gForce: 0.56, gear: 2 },
      { timeSec: 3.4, speedKmh: 76, gForce: 0.46, gear: 2 },
      { timeSec: 4.9, speedKmh: 100, gForce: 0.38, gear: 3 },
      { timeSec: 7.2, speedKmh: 130, gForce: 0.27, gear: 4 },
      { timeSec: 10.5, speedKmh: 160, gForce: 0.19, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '5.25', speedAt1000Rpm: 7.6, speedAt3000Rpm: 22.8, speedAt6000Rpm: 45.6, redlineSpeed: 51 },
      { gear: '2nd', ratio: '3.29', speedAt1000Rpm: 12.1, speedAt3000Rpm: 36.3, speedAt6000Rpm: 72.6, redlineSpeed: 82 },
      { gear: '3rd', ratio: '2.16', speedAt1000Rpm: 18.4, speedAt3000Rpm: 55.2, speedAt6000Rpm: 110.4, redlineSpeed: 124 },
      { gear: '4th', ratio: '1.62', speedAt1000Rpm: 24.6, speedAt3000Rpm: 73.8, speedAt6000Rpm: 147.6, redlineSpeed: 166 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 30.9, speedAt3000Rpm: 92.7, speedAt6000Rpm: 185.4, redlineSpeed: 209 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 39.8, speedAt3000Rpm: 119.4, speedAt6000Rpm: 238.8, redlineSpeed: 245 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 47.4, speedAt3000Rpm: 142.2, speedAt6000Rpm: 245.0, redlineSpeed: 245 },
      { gear: '8th', ratio: '0.67', speedAt1000Rpm: 59.4, speedAt3000Rpm: 178.2, speedAt6000Rpm: 245.0, redlineSpeed: 245 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 5.6, engineRpm: 1150 },
      { speedKmh: 40, fuelConsumptionKmpl: 6.9, engineRpm: 1050 },
      { speedKmh: 60, fuelConsumptionKmpl: 8.3, engineRpm: 1000 },
      { speedKmh: 80, fuelConsumptionKmpl: 9.3, engineRpm: 1100 },
      { speedKmh: 100, fuelConsumptionKmpl: 8.7, engineRpm: 1500 },
      { speedKmh: 120, fuelConsumptionKmpl: 7.6, engineRpm: 1800 },
      { speedKmh: 140, fuelConsumptionKmpl: 6.4, engineRpm: 2100 }
    ],
    technicalFeatures: [
      'The core Cayenne engine, sourced from the same block family as the Audi/Bentley 3.0 V6',
      'Standard Porsche Traction Management (PTM) all-wheel drive',
      'Air suspension available for a further ride-height range',
      'Tuned for effortless triple-digit highway cruising'
    ]
  },

  '2.9-twin-turbo-v6-panamera': {
    id: '2.9-twin-turbo-v6-panamera',
    name: '2.9L Twin-Turbo V6',
    badge: '2.9 Twin-Turbo V6 (330 PS / 450 Nm)',
    displacement: '2,894 cc',
    cylinders: '6 Cylinders (Twin-Turbo V6)',
    fuelType: 'Petrol',
    peakPowerStr: '330 PS @ 5,250–6,000 RPM',
    peakTorqueStr: '450 Nm @ 1,750–5,000 RPM',
    maxPowerHp: 330,
    maxTorqueNm: 450,
    powerRpmRange: '5,250 – 6,000 RPM',
    torqueRpmRange: '1,750 – 5,000 RPM',
    redlineRpm: 6800,
    idleRpm: 750,
    highwayCruiseRpm100Kmh: 1500,
    highwayCruiseRpm120Kmh: 1800,
    dynoCurve: [
      { rpm: 1000, powerHp: 58, torqueNm: 300, boostBar: 0.9 },
      { rpm: 1750, powerHp: 100, torqueNm: 450, boostBar: 1.4 },
      { rpm: 2500, powerHp: 143, torqueNm: 450, boostBar: 1.4 },
      { rpm: 3000, powerHp: 171, torqueNm: 450, boostBar: 1.35 },
      { rpm: 4000, powerHp: 228, torqueNm: 450, boostBar: 1.3 },
      { rpm: 5250, powerHp: 330, torqueNm: 432, boostBar: 1.15 },
      { rpm: 6000, powerHp: 330, torqueNm: 378, boostBar: 1.0 },
      { rpm: 6800, powerHp: 300, torqueNm: 330, boostBar: 0.85 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.0, speedKmh: 32, gForce: 0.72, gear: 1 },
      { timeSec: 2.0, speedKmh: 55, gForce: 0.6, gear: 2 },
      { timeSec: 3.2, speedKmh: 80, gForce: 0.49, gear: 2 },
      { timeSec: 4.6, speedKmh: 100, gForce: 0.41, gear: 3 },
      { timeSec: 6.7, speedKmh: 130, gForce: 0.3, gear: 4 },
      { timeSec: 9.6, speedKmh: 160, gForce: 0.21, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '4.71', speedAt1000Rpm: 8.6, speedAt3000Rpm: 25.8, speedAt6000Rpm: 51.6, redlineSpeed: 58 },
      { gear: '2nd', ratio: '3.14', speedAt1000Rpm: 12.9, speedAt3000Rpm: 38.7, speedAt6000Rpm: 77.4, redlineSpeed: 87 },
      { gear: '3rd', ratio: '2.11', speedAt1000Rpm: 19.2, speedAt3000Rpm: 57.6, speedAt6000Rpm: 115.2, redlineSpeed: 130 },
      { gear: '4th', ratio: '1.67', speedAt1000Rpm: 24.3, speedAt3000Rpm: 72.9, speedAt6000Rpm: 145.8, redlineSpeed: 165 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 31.5, speedAt3000Rpm: 94.5, speedAt6000Rpm: 189.0, redlineSpeed: 213 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 40.6, speedAt3000Rpm: 121.8, speedAt6000Rpm: 243.6, redlineSpeed: 259 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 48.3, speedAt3000Rpm: 144.9, speedAt6000Rpm: 259.0, redlineSpeed: 259 },
      { gear: '8th', ratio: '0.67', speedAt1000Rpm: 60.6, speedAt3000Rpm: 181.8, speedAt6000Rpm: 259.0, redlineSpeed: 259 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 6.6, engineRpm: 1150 },
      { speedKmh: 40, fuelConsumptionKmpl: 8.1, engineRpm: 1050 },
      { speedKmh: 60, fuelConsumptionKmpl: 9.8, engineRpm: 1000 },
      { speedKmh: 80, fuelConsumptionKmpl: 11.0, engineRpm: 1100 },
      { speedKmh: 100, fuelConsumptionKmpl: 10.3, engineRpm: 1500 },
      { speedKmh: 120, fuelConsumptionKmpl: 9.0, engineRpm: 1800 },
      { speedKmh: 140, fuelConsumptionKmpl: 7.6, engineRpm: 2100 }
    ],
    technicalFeatures: [
      'Entry engine for the Panamera grand-touring liftback',
      'Adaptive air suspension with three-chamber technology standard',
      'Rear-wheel drive on the base Panamera, 4 and 4S add all-wheel drive',
      'Same V6 family that powers the base Cayenne'
    ]
  },

  '4.0-na-flat6-gt3': {
    id: '4.0-na-flat6-gt3',
    name: '4.0L Naturally-Aspirated Flat-6 (Motorsport-Derived)',
    badge: '4.0 NA Flat-6 GT3 (510 PS / 470 Nm)',
    displacement: '3,996 cc',
    cylinders: '6 Cylinders (Naturally-Aspirated Flat-6)',
    fuelType: 'Petrol',
    peakPowerStr: '510 PS @ 8,400 RPM',
    peakTorqueStr: '470 Nm @ 6,100 RPM',
    maxPowerHp: 510,
    maxTorqueNm: 470,
    powerRpmRange: '8,400 RPM',
    torqueRpmRange: '6,100 RPM',
    redlineRpm: 9000,
    idleRpm: 900,
    highwayCruiseRpm100Kmh: 2100,
    highwayCruiseRpm120Kmh: 2500,
    dynoCurve: [
      { rpm: 1000, powerHp: 30, torqueNm: 210, boostBar: 0.0 },
      { rpm: 2000, powerHp: 75, torqueNm: 340, boostBar: 0.0 },
      { rpm: 3000, powerHp: 130, torqueNm: 400, boostBar: 0.0 },
      { rpm: 4000, powerHp: 195, torqueNm: 440, boostBar: 0.0 },
      { rpm: 5000, powerHp: 270, torqueNm: 460, boostBar: 0.0 },
      { rpm: 6100, powerHp: 350, torqueNm: 470, boostBar: 0.0 },
      { rpm: 7200, powerHp: 435, torqueNm: 465, boostBar: 0.0 },
      { rpm: 8400, powerHp: 510, torqueNm: 430, boostBar: 0.0 },
      { rpm: 9000, powerHp: 480, torqueNm: 385, boostBar: 0.0 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.5, speedKmh: 42, gForce: 1.1, gear: 1 },
      { timeSec: 1.0, speedKmh: 72, gForce: 0.95, gear: 2 },
      { timeSec: 1.6, speedKmh: 96, gForce: 0.8, gear: 2 },
      { timeSec: 2.3, speedKmh: 100, gForce: 0.75, gear: 3 },
      { timeSec: 3.4, speedKmh: 140, gForce: 0.6, gear: 3 },
      { timeSec: 4.8, speedKmh: 180, gForce: 0.44, gear: 4 },
      { timeSec: 7.0, speedKmh: 220, gForce: 0.3, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.75', speedAt1000Rpm: 10.5, speedAt3000Rpm: 31.5, speedAt6000Rpm: 63.0, redlineSpeed: 71 },
      { gear: '2nd', ratio: '2.20', speedAt1000Rpm: 16.9, speedAt3000Rpm: 50.7, speedAt6000Rpm: 101.4, redlineSpeed: 114 },
      { gear: '3rd', ratio: '1.52', speedAt1000Rpm: 24.5, speedAt3000Rpm: 73.5, speedAt6000Rpm: 147.0, redlineSpeed: 165 },
      { gear: '4th', ratio: '1.19', speedAt1000Rpm: 31.3, speedAt3000Rpm: 93.9, speedAt6000Rpm: 187.8, redlineSpeed: 211 },
      { gear: '5th', ratio: '0.97', speedAt1000Rpm: 38.4, speedAt3000Rpm: 115.2, speedAt6000Rpm: 230.4, redlineSpeed: 259 },
      { gear: '6th', ratio: '0.80', speedAt1000Rpm: 46.6, speedAt3000Rpm: 139.8, speedAt6000Rpm: 279.6, redlineSpeed: 314 },
      { gear: '7th', ratio: '0.67', speedAt1000Rpm: 55.7, speedAt3000Rpm: 167.1, speedAt6000Rpm: 318.0, redlineSpeed: 318 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 4.8, engineRpm: 1700 },
      { speedKmh: 40, fuelConsumptionKmpl: 5.9, engineRpm: 1600 },
      { speedKmh: 60, fuelConsumptionKmpl: 7.1, engineRpm: 1550 },
      { speedKmh: 80, fuelConsumptionKmpl: 7.9, engineRpm: 1700 },
      { speedKmh: 100, fuelConsumptionKmpl: 7.3, engineRpm: 2100 },
      { speedKmh: 120, fuelConsumptionKmpl: 6.3, engineRpm: 2500 },
      { speedKmh: 140, fuelConsumptionKmpl: 5.3, engineRpm: 2900 }
    ],
    technicalFeatures: [
      'Derived from the 911 RSR race engine, revving to a screaming 9,000 RPM redline with zero turbo lag',
      'Double-wishbone front suspension borrowed directly from the 911 RSR race car',
      'Fully variable rear-axle limited-slip differential with rear-axle steering',
      'Titanium sport exhaust with a motorsport-tuned flat-6 wail'
    ]
  },

  '3.7-twin-turbo-flat6-turbo-s': {
    id: '3.7-twin-turbo-flat6-turbo-s',
    name: '3.7L Twin-Turbo Flat-6',
    badge: '3.7 Twin-Turbo Flat-6 Turbo S (650 PS / 800 Nm)',
    displacement: '3,745 cc',
    cylinders: '6 Cylinders (Twin-Turbo Flat-6)',
    fuelType: 'Petrol',
    peakPowerStr: '650 PS @ 6,750 RPM',
    peakTorqueStr: '800 Nm @ 2,300–4,000 RPM',
    maxPowerHp: 650,
    maxTorqueNm: 800,
    powerRpmRange: '6,750 RPM',
    torqueRpmRange: '2,300 – 4,000 RPM',
    redlineRpm: 7200,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1550,
    highwayCruiseRpm120Kmh: 1850,
    dynoCurve: [
      { rpm: 1000, powerHp: 90, torqueNm: 480, boostBar: 1.2 },
      { rpm: 2300, powerHp: 210, torqueNm: 800, boostBar: 1.7 },
      { rpm: 3000, powerHp: 275, torqueNm: 800, boostBar: 1.65 },
      { rpm: 4000, powerHp: 366, torqueNm: 800, boostBar: 1.6 },
      { rpm: 5000, powerHp: 458, torqueNm: 780, boostBar: 1.5 },
      { rpm: 6000, powerHp: 578, torqueNm: 750, boostBar: 1.35 },
      { rpm: 6750, powerHp: 650, torqueNm: 691, boostBar: 1.2 },
      { rpm: 7200, powerHp: 610, torqueNm: 630, boostBar: 1.0 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.4, speedKmh: 45, gForce: 1.25, gear: 1 },
      { timeSec: 0.9, speedKmh: 75, gForce: 1.1, gear: 2 },
      { timeSec: 1.5, speedKmh: 100, gForce: 0.9, gear: 2 },
      { timeSec: 2.0, speedKmh: 130, gForce: 0.75, gear: 3 },
      { timeSec: 3.1, speedKmh: 160, gForce: 0.55, gear: 4 },
      { timeSec: 4.5, speedKmh: 200, gForce: 0.4, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '4.06', speedAt1000Rpm: 11.0, speedAt3000Rpm: 33.0, speedAt6000Rpm: 66.0, redlineSpeed: 73 },
      { gear: '2nd', ratio: '2.36', speedAt1000Rpm: 17.9, speedAt3000Rpm: 53.7, speedAt6000Rpm: 107.4, redlineSpeed: 118 },
      { gear: '3rd', ratio: '1.63', speedAt1000Rpm: 25.9, speedAt3000Rpm: 77.7, speedAt6000Rpm: 155.4, redlineSpeed: 171 },
      { gear: '4th', ratio: '1.27', speedAt1000Rpm: 33.3, speedAt3000Rpm: 99.9, speedAt6000Rpm: 199.8, redlineSpeed: 220 },
      { gear: '5th', ratio: '1.02', speedAt1000Rpm: 41.4, speedAt3000Rpm: 124.2, speedAt6000Rpm: 248.4, redlineSpeed: 273 },
      { gear: '6th', ratio: '0.84', speedAt1000Rpm: 50.3, speedAt3000Rpm: 150.9, speedAt6000Rpm: 301.8, redlineSpeed: 330 },
      { gear: '7th', ratio: '0.69', speedAt1000Rpm: 61.2, speedAt3000Rpm: 183.6, speedAt6000Rpm: 330.0, redlineSpeed: 330 },
      { gear: '8th', ratio: '0.57', speedAt1000Rpm: 74.0, speedAt3000Rpm: 222.0, speedAt6000Rpm: 330.0, redlineSpeed: 330 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 4.2, engineRpm: 1150 },
      { speedKmh: 40, fuelConsumptionKmpl: 5.2, engineRpm: 1050 },
      { speedKmh: 60, fuelConsumptionKmpl: 6.3, engineRpm: 1000 },
      { speedKmh: 80, fuelConsumptionKmpl: 7.1, engineRpm: 1100 },
      { speedKmh: 100, fuelConsumptionKmpl: 6.6, engineRpm: 1550 },
      { speedKmh: 120, fuelConsumptionKmpl: 5.7, engineRpm: 1850 },
      { speedKmh: 140, fuelConsumptionKmpl: 4.8, engineRpm: 2150 }
    ],
    technicalFeatures: [
      'Variable-vane twin turbochargers for near-instant boost response',
      'Porsche Traction Management all-wheel drive with launch control',
      '420 mm front carbon-ceramic discs (PCCB) with 10-piston calipers',
      'Adaptive three-chamber air suspension with PASM'
    ]
  },

  '4.0-turbo-v8-cayenne-turbo-gt': {
    id: '4.0-turbo-v8-cayenne-turbo-gt',
    name: '4.0L Twin-Turbo V8',
    badge: '4.0 Twin-Turbo V8 Turbo GT (640 PS / 850 Nm)',
    displacement: '3,996 cc',
    cylinders: '8 Cylinders (Twin-Turbo V8)',
    fuelType: 'Petrol',
    peakPowerStr: '640 PS @ 6,000 RPM',
    peakTorqueStr: '850 Nm @ 2,300–4,500 RPM',
    maxPowerHp: 640,
    maxTorqueNm: 850,
    powerRpmRange: '6,000 RPM',
    torqueRpmRange: '2,300 – 4,500 RPM',
    redlineRpm: 6800,
    idleRpm: 750,
    highwayCruiseRpm100Kmh: 1400,
    highwayCruiseRpm120Kmh: 1700,
    dynoCurve: [
      { rpm: 1000, powerHp: 100, torqueNm: 560, boostBar: 1.2 },
      { rpm: 2300, powerHp: 240, torqueNm: 850, boostBar: 1.7 },
      { rpm: 3000, powerHp: 313, torqueNm: 850, boostBar: 1.65 },
      { rpm: 4000, powerHp: 417, torqueNm: 850, boostBar: 1.6 },
      { rpm: 4500, powerHp: 469, torqueNm: 850, boostBar: 1.55 },
      { rpm: 5200, powerHp: 542, torqueNm: 830, boostBar: 1.4 },
      { rpm: 6000, powerHp: 640, torqueNm: 763, boostBar: 1.25 },
      { rpm: 6800, powerHp: 595, torqueNm: 665, boostBar: 1.0 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.6, speedKmh: 44, gForce: 1.05, gear: 1 },
      { timeSec: 1.2, speedKmh: 74, gForce: 0.9, gear: 2 },
      { timeSec: 1.9, speedKmh: 100, gForce: 0.74, gear: 2 },
      { timeSec: 2.6, speedKmh: 120, gForce: 0.62, gear: 3 },
      { timeSec: 3.9, speedKmh: 160, gForce: 0.46, gear: 4 },
      { timeSec: 6.0, speedKmh: 200, gForce: 0.32, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '5.25', speedAt1000Rpm: 8.0, speedAt3000Rpm: 24.0, speedAt6000Rpm: 48.0, redlineSpeed: 54 },
      { gear: '2nd', ratio: '3.29', speedAt1000Rpm: 12.8, speedAt3000Rpm: 38.4, speedAt6000Rpm: 76.8, redlineSpeed: 87 },
      { gear: '3rd', ratio: '2.16', speedAt1000Rpm: 19.4, speedAt3000Rpm: 58.2, speedAt6000Rpm: 116.4, redlineSpeed: 131 },
      { gear: '4th', ratio: '1.62', speedAt1000Rpm: 25.9, speedAt3000Rpm: 77.7, speedAt6000Rpm: 155.4, redlineSpeed: 175 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 32.5, speedAt3000Rpm: 97.5, speedAt6000Rpm: 195.0, redlineSpeed: 220 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 41.9, speedAt3000Rpm: 125.7, speedAt6000Rpm: 251.4, redlineSpeed: 260 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 49.9, speedAt3000Rpm: 149.7, speedAt6000Rpm: 300.0, redlineSpeed: 300 },
      { gear: '8th', ratio: '0.67', speedAt1000Rpm: 62.5, speedAt3000Rpm: 187.5, speedAt6000Rpm: 300.0, redlineSpeed: 300 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 3.8, engineRpm: 1100 },
      { speedKmh: 40, fuelConsumptionKmpl: 4.7, engineRpm: 1000 },
      { speedKmh: 60, fuelConsumptionKmpl: 5.7, engineRpm: 950 },
      { speedKmh: 80, fuelConsumptionKmpl: 6.4, engineRpm: 1050 },
      { speedKmh: 100, fuelConsumptionKmpl: 5.9, engineRpm: 1400 },
      { speedKmh: 120, fuelConsumptionKmpl: 5.1, engineRpm: 1700 },
      { speedKmh: 140, fuelConsumptionKmpl: 4.3, engineRpm: 1980 }
    ],
    technicalFeatures: [
      'A 640 PS twin-turbo V8 once held the production-SUV Nordschleife lap record',
      'Three-chamber adaptive air suspension with active anti-roll stabilization (PDCC)',
      '420 mm front carbon-ceramic discs (PCCB) with 10-piston calipers',
      'Porsche Traction Management all-wheel drive with an electronically controlled rear diff lock'
    ]
  },

  '5.2-v10-huracan': {
    id: '5.2-v10-huracan',
    name: '5.2L Naturally-Aspirated V10',
    badge: '5.2 V10 (640 PS / 565 Nm)',
    displacement: '5,204 cc',
    cylinders: '10 Cylinders (Naturally-Aspirated V10)',
    fuelType: 'Petrol',
    peakPowerStr: '640 PS @ 8,000 RPM',
    peakTorqueStr: '565 Nm @ 6,500 RPM',
    maxPowerHp: 640,
    maxTorqueNm: 565,
    powerRpmRange: '8,000 RPM',
    torqueRpmRange: '6,500 RPM',
    redlineRpm: 8500,
    idleRpm: 950,
    highwayCruiseRpm100Kmh: 2050,
    highwayCruiseRpm120Kmh: 2450,
    dynoCurve: [
      { rpm: 1000, powerHp: 26, torqueNm: 195, boostBar: 0.0 },
      { rpm: 2000, powerHp: 68, torqueNm: 320, boostBar: 0.0 },
      { rpm: 3000, powerHp: 118, torqueNm: 385, boostBar: 0.0 },
      { rpm: 4000, powerHp: 178, torqueNm: 430, boostBar: 0.0 },
      { rpm: 5000, powerHp: 248, torqueNm: 475, boostBar: 0.0 },
      { rpm: 6500, powerHp: 385, torqueNm: 565, boostBar: 0.0 },
      { rpm: 7200, powerHp: 480, torqueNm: 555, boostBar: 0.0 },
      { rpm: 8000, powerHp: 640, torqueNm: 510, boostBar: 0.0 },
      { rpm: 8500, powerHp: 600, torqueNm: 460, boostBar: 0.0 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.5, speedKmh: 40, gForce: 1.05, gear: 1 },
      { timeSec: 1.1, speedKmh: 70, gForce: 0.9, gear: 2 },
      { timeSec: 1.7, speedKmh: 96, gForce: 0.78, gear: 2 },
      { timeSec: 2.9, speedKmh: 100, gForce: 0.7, gear: 3 },
      { timeSec: 4.2, speedKmh: 150, gForce: 0.52, gear: 4 },
      { timeSec: 6.5, speedKmh: 200, gForce: 0.35, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.91', speedAt1000Rpm: 10.2, speedAt3000Rpm: 30.6, speedAt6000Rpm: 61.2, redlineSpeed: 69 },
      { gear: '2nd', ratio: '2.44', speedAt1000Rpm: 16.4, speedAt3000Rpm: 49.2, speedAt6000Rpm: 98.4, redlineSpeed: 111 },
      { gear: '3rd', ratio: '1.80', speedAt1000Rpm: 22.2, speedAt3000Rpm: 66.6, speedAt6000Rpm: 133.2, redlineSpeed: 150 },
      { gear: '4th', ratio: '1.32', speedAt1000Rpm: 30.3, speedAt3000Rpm: 90.9, speedAt6000Rpm: 181.8, redlineSpeed: 205 },
      { gear: '5th', ratio: '1.03', speedAt1000Rpm: 38.9, speedAt3000Rpm: 116.7, speedAt6000Rpm: 233.4, redlineSpeed: 263 },
      { gear: '6th', ratio: '0.82', speedAt1000Rpm: 48.8, speedAt3000Rpm: 146.4, speedAt6000Rpm: 292.8, redlineSpeed: 325 },
      { gear: '7th', ratio: '0.65', speedAt1000Rpm: 61.6, speedAt3000Rpm: 184.8, speedAt6000Rpm: 325.0, redlineSpeed: 325 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 4.4, engineRpm: 1750 },
      { speedKmh: 40, fuelConsumptionKmpl: 5.5, engineRpm: 1650 },
      { speedKmh: 60, fuelConsumptionKmpl: 6.6, engineRpm: 1600 },
      { speedKmh: 80, fuelConsumptionKmpl: 7.3, engineRpm: 1750 },
      { speedKmh: 100, fuelConsumptionKmpl: 6.8, engineRpm: 2050 },
      { speedKmh: 120, fuelConsumptionKmpl: 5.9, engineRpm: 2450 },
      { speedKmh: 140, fuelConsumptionKmpl: 5.0, engineRpm: 2850 }
    ],
    technicalFeatures: [
      'One of the last naturally-aspirated V10 supercar engines still in production, revving to 8,500 RPM',
      'Shares core architecture roots with the Audi R8’s V10',
      '7-Speed LDF dual-clutch transmission derived from motorsport',
      'Signature high-pitched V10 wail with zero turbo lag throttle response'
    ]
  },

  '4.0-twin-turbo-v8-urus': {
    id: '4.0-twin-turbo-v8-urus',
    name: '4.0L Twin-Turbo V8',
    badge: '4.0 Twin-Turbo V8 (657 PS / 850 Nm)',
    displacement: '3,996 cc',
    cylinders: '8 Cylinders (Twin-Turbo V8)',
    fuelType: 'Petrol',
    peakPowerStr: '657 PS @ 6,000 RPM',
    peakTorqueStr: '850 Nm @ 2,300–4,500 RPM',
    maxPowerHp: 657,
    maxTorqueNm: 850,
    powerRpmRange: '6,000 RPM',
    torqueRpmRange: '2,300 – 4,500 RPM',
    redlineRpm: 6800,
    idleRpm: 750,
    highwayCruiseRpm100Kmh: 1400,
    highwayCruiseRpm120Kmh: 1700,
    dynoCurve: [
      { rpm: 1000, powerHp: 102, torqueNm: 565, boostBar: 1.25 },
      { rpm: 2300, powerHp: 246, torqueNm: 850, boostBar: 1.75 },
      { rpm: 3000, powerHp: 322, torqueNm: 850, boostBar: 1.7 },
      { rpm: 4000, powerHp: 429, torqueNm: 850, boostBar: 1.65 },
      { rpm: 4500, powerHp: 483, torqueNm: 850, boostBar: 1.6 },
      { rpm: 5200, powerHp: 557, torqueNm: 828, boostBar: 1.45 },
      { rpm: 6000, powerHp: 657, torqueNm: 784, boostBar: 1.3 },
      { rpm: 6800, powerHp: 610, torqueNm: 682, boostBar: 1.05 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.6, speedKmh: 45, gForce: 1.02, gear: 1 },
      { timeSec: 1.3, speedKmh: 75, gForce: 0.88, gear: 2 },
      { timeSec: 2.0, speedKmh: 100, gForce: 0.72, gear: 2 },
      { timeSec: 2.8, speedKmh: 125, gForce: 0.6, gear: 3 },
      { timeSec: 4.2, speedKmh: 165, gForce: 0.44, gear: 4 },
      { timeSec: 6.4, speedKmh: 205, gForce: 0.3, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '5.25', speedAt1000Rpm: 7.9, speedAt3000Rpm: 23.7, speedAt6000Rpm: 47.4, redlineSpeed: 54 },
      { gear: '2nd', ratio: '3.29', speedAt1000Rpm: 12.6, speedAt3000Rpm: 37.8, speedAt6000Rpm: 75.6, redlineSpeed: 86 },
      { gear: '3rd', ratio: '2.16', speedAt1000Rpm: 19.2, speedAt3000Rpm: 57.6, speedAt6000Rpm: 115.2, redlineSpeed: 130 },
      { gear: '4th', ratio: '1.62', speedAt1000Rpm: 25.6, speedAt3000Rpm: 76.8, speedAt6000Rpm: 153.6, redlineSpeed: 174 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 32.1, speedAt3000Rpm: 96.3, speedAt6000Rpm: 192.6, redlineSpeed: 218 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 41.4, speedAt3000Rpm: 124.2, speedAt6000Rpm: 248.4, redlineSpeed: 260 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 49.3, speedAt3000Rpm: 147.9, speedAt6000Rpm: 295.8, redlineSpeed: 306 },
      { gear: '8th', ratio: '0.67', speedAt1000Rpm: 61.8, speedAt3000Rpm: 185.4, speedAt6000Rpm: 306.0, redlineSpeed: 306 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 3.9, engineRpm: 1080 },
      { speedKmh: 40, fuelConsumptionKmpl: 4.8, engineRpm: 980 },
      { speedKmh: 60, fuelConsumptionKmpl: 5.8, engineRpm: 940 },
      { speedKmh: 80, fuelConsumptionKmpl: 6.5, engineRpm: 1050 },
      { speedKmh: 100, fuelConsumptionKmpl: 6.0, engineRpm: 1400 },
      { speedKmh: 120, fuelConsumptionKmpl: 5.2, engineRpm: 1700 },
      { speedKmh: 140, fuelConsumptionKmpl: 4.4, engineRpm: 1980 }
    ],
    technicalFeatures: [
      'Shared twin-turbo V8 block family with the Porsche Cayenne Turbo and Audi RS Q8',
      'Permanent all-wheel drive with a rear self-locking differential',
      'Torque-vectoring rear differential for genuine SUV cornering agility',
      'Powers the fastest production SUV lap-record holder of its era'
    ]
  },

  '6.5-hybrid-v12-revuelto': {
    id: '6.5-hybrid-v12-revuelto',
    name: '6.5L Naturally-Aspirated V12 + Tri-Motor Hybrid',
    badge: '6.5 V12 Hybrid (1,015 PS / 725 Nm)',
    displacement: '6,498 cc',
    cylinders: '12 Cylinders (Naturally-Aspirated V12 + 3 Electric Motors)',
    fuelType: 'Petrol',
    peakPowerStr: '1,015 PS Combined @ 9,250 RPM',
    peakTorqueStr: '725 Nm (ICE) + Electric Motor Torque',
    maxPowerHp: 1015,
    maxTorqueNm: 725,
    powerRpmRange: '9,250 RPM',
    torqueRpmRange: 'Instant (Electric) / 6,750 RPM (ICE)',
    redlineRpm: 9500,
    idleRpm: 900,
    highwayCruiseRpm100Kmh: 1900,
    highwayCruiseRpm120Kmh: 2300,
    dynoCurve: [
      { rpm: 1000, powerHp: 120, torqueNm: 480, boostBar: 0.0 },
      { rpm: 2000, powerHp: 210, torqueNm: 580, boostBar: 0.0 },
      { rpm: 3000, powerHp: 320, torqueNm: 650, boostBar: 0.0 },
      { rpm: 4500, powerHp: 480, torqueNm: 700, boostBar: 0.0 },
      { rpm: 6000, powerHp: 660, torqueNm: 725, boostBar: 0.0 },
      { rpm: 7200, powerHp: 820, torqueNm: 710, boostBar: 0.0 },
      { rpm: 8400, powerHp: 960, torqueNm: 660, boostBar: 0.0 },
      { rpm: 9250, powerHp: 1015, torqueNm: 605, boostBar: 0.0 },
      { rpm: 9500, powerHp: 985, torqueNm: 570, boostBar: 0.0 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.4, speedKmh: 48, gForce: 1.3, gear: 1 },
      { timeSec: 0.9, speedKmh: 80, gForce: 1.12, gear: 2 },
      { timeSec: 1.4, speedKmh: 105, gForce: 0.95, gear: 2 },
      { timeSec: 2.5, speedKmh: 100, gForce: 0.85, gear: 3 },
      { timeSec: 3.6, speedKmh: 165, gForce: 0.62, gear: 4 },
      { timeSec: 5.4, speedKmh: 210, gForce: 0.42, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.82', speedAt1000Rpm: 11.2, speedAt3000Rpm: 33.6, speedAt6000Rpm: 67.2, redlineSpeed: 75 },
      { gear: '2nd', ratio: '2.28', speedAt1000Rpm: 18.1, speedAt3000Rpm: 54.3, speedAt6000Rpm: 108.6, redlineSpeed: 122 },
      { gear: '3rd', ratio: '1.58', speedAt1000Rpm: 25.4, speedAt3000Rpm: 76.2, speedAt6000Rpm: 152.4, redlineSpeed: 172 },
      { gear: '4th', ratio: '1.21', speedAt1000Rpm: 32.9, speedAt3000Rpm: 98.7, speedAt6000Rpm: 197.4, redlineSpeed: 222 },
      { gear: '5th', ratio: '0.96', speedAt1000Rpm: 40.6, speedAt3000Rpm: 121.8, speedAt6000Rpm: 243.6, redlineSpeed: 274 },
      { gear: '6th', ratio: '0.79', speedAt1000Rpm: 47.9, speedAt3000Rpm: 143.7, speedAt6000Rpm: 287.4, redlineSpeed: 323 },
      { gear: '7th', ratio: '0.65', speedAt1000Rpm: 57.4, speedAt3000Rpm: 172.2, speedAt6000Rpm: 344.4, redlineSpeed: 350 },
      { gear: '8th', ratio: '0.54', speedAt1000Rpm: 68.1, speedAt3000Rpm: 204.3, speedAt6000Rpm: 350.0, redlineSpeed: 350 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 3.6, engineRpm: 1250 },
      { speedKmh: 40, fuelConsumptionKmpl: 4.5, engineRpm: 1150 },
      { speedKmh: 60, fuelConsumptionKmpl: 5.4, engineRpm: 1100 },
      { speedKmh: 80, fuelConsumptionKmpl: 6.0, engineRpm: 1250 },
      { speedKmh: 100, fuelConsumptionKmpl: 5.6, engineRpm: 1900 },
      { speedKmh: 120, fuelConsumptionKmpl: 4.9, engineRpm: 2300 },
      { speedKmh: 140, fuelConsumptionKmpl: 4.1, engineRpm: 2700 }
    ],
    technicalFeatures: [
      'Lamborghini’s first series-production plug-in hybrid flagship, successor to the Aventador',
      'Naturally-aspirated V12 paired with three electric motors for torque-vectoring all-wheel drive',
      'Screams to a 9,500 RPM redline — the highest of any current production V12',
      'Short-burst full-electric city driving mode available'
    ]
  },

  '5.2-v10-huracan-sto': {
    id: '5.2-v10-huracan-sto',
    name: '5.2L Naturally-Aspirated V10 (STO-Tune)',
    badge: '5.2 V10 STO (640 PS / 565 Nm)',
    displacement: '5,204 cc',
    cylinders: '10 Cylinders (Naturally-Aspirated V10, Motorsport-Derived)',
    fuelType: 'Petrol',
    peakPowerStr: '640 PS @ 8,000 RPM',
    peakTorqueStr: '565 Nm @ 6,500 RPM',
    maxPowerHp: 640,
    maxTorqueNm: 565,
    powerRpmRange: '8,000 RPM',
    torqueRpmRange: '6,500 RPM',
    redlineRpm: 8500,
    idleRpm: 950,
    highwayCruiseRpm100Kmh: 2050,
    highwayCruiseRpm120Kmh: 2450,
    dynoCurve: [
      { rpm: 1000, powerHp: 27, torqueNm: 198, boostBar: 0.0 },
      { rpm: 2000, powerHp: 70, torqueNm: 325, boostBar: 0.0 },
      { rpm: 3000, powerHp: 121, torqueNm: 390, boostBar: 0.0 },
      { rpm: 4000, powerHp: 182, torqueNm: 435, boostBar: 0.0 },
      { rpm: 5000, powerHp: 253, torqueNm: 480, boostBar: 0.0 },
      { rpm: 6500, powerHp: 392, torqueNm: 565, boostBar: 0.0 },
      { rpm: 7200, powerHp: 488, torqueNm: 558, boostBar: 0.0 },
      { rpm: 8000, powerHp: 640, torqueNm: 515, boostBar: 0.0 },
      { rpm: 8500, powerHp: 605, torqueNm: 465, boostBar: 0.0 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.5, speedKmh: 44, gForce: 1.12, gear: 1 },
      { timeSec: 1.0, speedKmh: 74, gForce: 0.96, gear: 2 },
      { timeSec: 1.6, speedKmh: 100, gForce: 0.82, gear: 2 },
      { timeSec: 3.0, speedKmh: 100, gForce: 0.75, gear: 3 },
      { timeSec: 4.0, speedKmh: 155, gForce: 0.55, gear: 4 },
      { timeSec: 6.1, speedKmh: 200, gForce: 0.38, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.91', speedAt1000Rpm: 10.2, speedAt3000Rpm: 30.6, speedAt6000Rpm: 61.2, redlineSpeed: 69 },
      { gear: '2nd', ratio: '2.44', speedAt1000Rpm: 16.4, speedAt3000Rpm: 49.2, speedAt6000Rpm: 98.4, redlineSpeed: 111 },
      { gear: '3rd', ratio: '1.80', speedAt1000Rpm: 22.2, speedAt3000Rpm: 66.6, speedAt6000Rpm: 133.2, redlineSpeed: 150 },
      { gear: '4th', ratio: '1.32', speedAt1000Rpm: 30.3, speedAt3000Rpm: 90.9, speedAt6000Rpm: 181.8, redlineSpeed: 205 },
      { gear: '5th', ratio: '1.03', speedAt1000Rpm: 38.9, speedAt3000Rpm: 116.7, speedAt6000Rpm: 233.4, redlineSpeed: 263 },
      { gear: '6th', ratio: '0.82', speedAt1000Rpm: 48.8, speedAt3000Rpm: 146.4, speedAt6000Rpm: 292.8, redlineSpeed: 310 },
      { gear: '7th', ratio: '0.65', speedAt1000Rpm: 61.6, speedAt3000Rpm: 184.8, speedAt6000Rpm: 310.0, redlineSpeed: 310 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 4.1, engineRpm: 1800 },
      { speedKmh: 40, fuelConsumptionKmpl: 5.1, engineRpm: 1700 },
      { speedKmh: 60, fuelConsumptionKmpl: 6.2, engineRpm: 1650 },
      { speedKmh: 80, fuelConsumptionKmpl: 6.9, engineRpm: 1800 },
      { speedKmh: 100, fuelConsumptionKmpl: 6.4, engineRpm: 2050 },
      { speedKmh: 120, fuelConsumptionKmpl: 5.5, engineRpm: 2450 },
      { speedKmh: 140, fuelConsumptionKmpl: 4.7, engineRpm: 2850 }
    ],
    technicalFeatures: [
      'Derived from the Huracán GT3 race engine, revving to a screaming 8,500 RPM redline',
      'Single-piece front clamshell and rear-wheel-drive-only setup lifted from the Super Trofeo racer',
      'Fixed motorsport rear wing tuned using Lamborghini’s GT3 racing program data',
      'Titanium sport exhaust with a motorsport-tuned V10 wail'
    ]
  },

  '6.0-w12-twin-turbo-continental': {
    id: '6.0-w12-twin-turbo-continental',
    name: '6.0L Twin-Turbo W12',
    badge: '6.0 W12 (659 PS / 900 Nm)',
    displacement: '5,950 cc',
    cylinders: '12 Cylinders (Twin-Turbo W12)',
    fuelType: 'Petrol',
    peakPowerStr: '659 PS @ 6,000 RPM',
    peakTorqueStr: '900 Nm @ 1,350–4,500 RPM',
    maxPowerHp: 659,
    maxTorqueNm: 900,
    powerRpmRange: '6,000 RPM',
    torqueRpmRange: '1,350–4,500 RPM',
    redlineRpm: 6000,
    idleRpm: 720,
    highwayCruiseRpm100Kmh: 1400,
    highwayCruiseRpm120Kmh: 1700,
    dynoCurve: [
      { rpm: 1000, powerHp: 50, torqueNm: 400, boostBar: 0.55 },
      { rpm: 1500, powerHp: 125, torqueNm: 770, boostBar: 0.95 },
      { rpm: 2000, powerHp: 205, torqueNm: 900, boostBar: 1.15 },
      { rpm: 3000, powerHp: 335, torqueNm: 900, boostBar: 1.15 },
      { rpm: 4000, powerHp: 450, torqueNm: 870, boostBar: 1.1 },
      { rpm: 5000, powerHp: 570, torqueNm: 815, boostBar: 1.05 },
      { rpm: 6000, powerHp: 659, torqueNm: 740, boostBar: 0.95 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.9, speedKmh: 50, gForce: 0.82, gear: 1 },
      { timeSec: 1.9, speedKmh: 90, gForce: 0.70, gear: 2 },
      { timeSec: 3.9, speedKmh: 100, gForce: 0.58, gear: 3 },
      { timeSec: 5.9, speedKmh: 160, gForce: 0.43, gear: 4 },
      { timeSec: 9.4, speedKmh: 200, gForce: 0.30, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.43', speedAt1000Rpm: 12.4, speedAt3000Rpm: 37.2, speedAt6000Rpm: 74.4, redlineSpeed: 76 },
      { gear: '2nd', ratio: '2.18', speedAt1000Rpm: 19.5, speedAt3000Rpm: 58.5, speedAt6000Rpm: 117.0, redlineSpeed: 120 },
      { gear: '3rd', ratio: '1.56', speedAt1000Rpm: 27.3, speedAt3000Rpm: 81.9, speedAt6000Rpm: 163.8, redlineSpeed: 168 },
      { gear: '4th', ratio: '1.18', speedAt1000Rpm: 36.0, speedAt3000Rpm: 108.0, speedAt6000Rpm: 216.0, redlineSpeed: 221 },
      { gear: '5th', ratio: '0.94', speedAt1000Rpm: 45.3, speedAt3000Rpm: 135.9, speedAt6000Rpm: 271.8, redlineSpeed: 278 },
      { gear: '6th', ratio: '0.79', speedAt1000Rpm: 53.9, speedAt3000Rpm: 161.7, speedAt6000Rpm: 323.4, redlineSpeed: 330 },
      { gear: '7th', ratio: '0.65', speedAt1000Rpm: 65.5, speedAt3000Rpm: 196.5, speedAt6000Rpm: 335.0, redlineSpeed: 335 },
      { gear: '8th', ratio: '0.55', speedAt1000Rpm: 77.4, speedAt3000Rpm: 232.2, speedAt6000Rpm: 335.0, redlineSpeed: 335 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 3.3, engineRpm: 1000 },
      { speedKmh: 40, fuelConsumptionKmpl: 4.1, engineRpm: 940 },
      { speedKmh: 60, fuelConsumptionKmpl: 4.9, engineRpm: 910 },
      { speedKmh: 80, fuelConsumptionKmpl: 5.5, engineRpm: 1000 },
      { speedKmh: 100, fuelConsumptionKmpl: 5.1, engineRpm: 1400 },
      { speedKmh: 120, fuelConsumptionKmpl: 4.4, engineRpm: 1700 },
      { speedKmh: 140, fuelConsumptionKmpl: 3.7, engineRpm: 2050 }
    ],
    technicalFeatures: [
      'One of the last twin-turbo W12 engines still in series production',
      'Silky, near-silent low-RPM refinement with effortless triple-digit surge',
      'Shared W12 architecture roots with past Volkswagen Group flagship saloons',
      'Available in the Continental GT and Flying Spur'
    ]
  },

  '4.0-twin-turbo-v8-bentayga': {
    id: '4.0-twin-turbo-v8-bentayga',
    name: '4.0L Twin-Turbo V8',
    badge: '4.0 Twin-Turbo V8 (550 PS / 770 Nm)',
    displacement: '3,996 cc',
    cylinders: '8 Cylinders (Twin-Turbo V8)',
    fuelType: 'Petrol',
    peakPowerStr: '550 PS @ 6,000 RPM',
    peakTorqueStr: '770 Nm @ 2,000–4,500 RPM',
    maxPowerHp: 550,
    maxTorqueNm: 770,
    powerRpmRange: '6,000 RPM',
    torqueRpmRange: '2,000–4,500 RPM',
    redlineRpm: 6500,
    idleRpm: 780,
    highwayCruiseRpm100Kmh: 1500,
    highwayCruiseRpm120Kmh: 1800,
    dynoCurve: [
      { rpm: 1500, powerHp: 85, torqueNm: 540, boostBar: 0.85 },
      { rpm: 2000, powerHp: 150, torqueNm: 770, boostBar: 1.05 },
      { rpm: 3000, powerHp: 265, torqueNm: 770, boostBar: 1.05 },
      { rpm: 4000, powerHp: 365, torqueNm: 740, boostBar: 1.0 },
      { rpm: 5000, powerHp: 455, torqueNm: 690, boostBar: 0.95 },
      { rpm: 6000, powerHp: 550, torqueNm: 630, boostBar: 0.9 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 1.0, speedKmh: 50, gForce: 0.75, gear: 1 },
      { timeSec: 2.2, speedKmh: 90, gForce: 0.62, gear: 2 },
      { timeSec: 4.5, speedKmh: 100, gForce: 0.50, gear: 3 },
      { timeSec: 6.8, speedKmh: 160, gForce: 0.36, gear: 4 },
      { timeSec: 10.8, speedKmh: 200, gForce: 0.25, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '4.71', speedAt1000Rpm: 9.4, speedAt3000Rpm: 28.2, speedAt6000Rpm: 56.4, redlineSpeed: 61 },
      { gear: '2nd', ratio: '3.14', speedAt1000Rpm: 14.1, speedAt3000Rpm: 42.3, speedAt6000Rpm: 84.6, redlineSpeed: 92 },
      { gear: '3rd', ratio: '2.11', speedAt1000Rpm: 21.0, speedAt3000Rpm: 63.0, speedAt6000Rpm: 126.0, redlineSpeed: 137 },
      { gear: '4th', ratio: '1.67', speedAt1000Rpm: 26.5, speedAt3000Rpm: 79.5, speedAt6000Rpm: 159.0, redlineSpeed: 173 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 34.3, speedAt3000Rpm: 102.9, speedAt6000Rpm: 205.8, redlineSpeed: 224 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 44.3, speedAt3000Rpm: 132.9, speedAt6000Rpm: 265.8, redlineSpeed: 290 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 52.7, speedAt3000Rpm: 158.1, speedAt6000Rpm: 290.0, redlineSpeed: 290 },
      { gear: '8th', ratio: '0.67', speedAt1000Rpm: 66.1, speedAt3000Rpm: 198.3, speedAt6000Rpm: 290.0, redlineSpeed: 290 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 3.9, engineRpm: 1080 },
      { speedKmh: 40, fuelConsumptionKmpl: 4.7, engineRpm: 990 },
      { speedKmh: 60, fuelConsumptionKmpl: 5.6, engineRpm: 960 },
      { speedKmh: 80, fuelConsumptionKmpl: 6.2, engineRpm: 1080 },
      { speedKmh: 100, fuelConsumptionKmpl: 5.8, engineRpm: 1500 },
      { speedKmh: 120, fuelConsumptionKmpl: 5.0, engineRpm: 1800 },
      { speedKmh: 140, fuelConsumptionKmpl: 4.2, engineRpm: 2150 }
    ],
    technicalFeatures: [
      'Shared twin-turbo V8 block family with the Porsche Cayenne Turbo and Audi RS Q8',
      'Permanent all-wheel drive with active all-wheel steering on higher trims',
      'Adaptive air suspension with Bentley Dynamic Ride active anti-roll control',
      'Tuned for effortless long-distance cruising and genuine off-road capability'
    ]
  },

  '6.0-w12-twin-turbo-speed': {
    id: '6.0-w12-twin-turbo-speed',
    name: '6.0L Twin-Turbo W12 (Speed-Tune)',
    badge: '6.0 W12 Speed (659 PS / 900 Nm)',
    displacement: '5,950 cc',
    cylinders: '12 Cylinders (Twin-Turbo W12)',
    fuelType: 'Petrol',
    peakPowerStr: '659 PS @ 6,000 RPM',
    peakTorqueStr: '900 Nm @ 1,350–4,500 RPM',
    maxPowerHp: 659,
    maxTorqueNm: 900,
    powerRpmRange: '6,000 RPM',
    torqueRpmRange: '1,350–4,500 RPM',
    redlineRpm: 6100,
    idleRpm: 750,
    highwayCruiseRpm100Kmh: 1450,
    highwayCruiseRpm120Kmh: 1750,
    dynoCurve: [
      { rpm: 1000, powerHp: 55, torqueNm: 420, boostBar: 0.6 },
      { rpm: 1500, powerHp: 130, torqueNm: 780, boostBar: 1.0 },
      { rpm: 2000, powerHp: 210, torqueNm: 900, boostBar: 1.2 },
      { rpm: 3000, powerHp: 340, torqueNm: 900, boostBar: 1.2 },
      { rpm: 4000, powerHp: 460, torqueNm: 880, boostBar: 1.15 },
      { rpm: 5000, powerHp: 580, torqueNm: 830, boostBar: 1.1 },
      { rpm: 6000, powerHp: 659, torqueNm: 750, boostBar: 1.0 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.8, speedKmh: 50, gForce: 0.85, gear: 1 },
      { timeSec: 1.8, speedKmh: 90, gForce: 0.72, gear: 2 },
      { timeSec: 3.7, speedKmh: 100, gForce: 0.60, gear: 3 },
      { timeSec: 5.6, speedKmh: 160, gForce: 0.45, gear: 4 },
      { timeSec: 8.9, speedKmh: 200, gForce: 0.32, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '3.43', speedAt1000Rpm: 12.6, speedAt3000Rpm: 37.8, speedAt6000Rpm: 75.6, redlineSpeed: 77 },
      { gear: '2nd', ratio: '2.18', speedAt1000Rpm: 19.8, speedAt3000Rpm: 59.4, speedAt6000Rpm: 118.8, redlineSpeed: 121 },
      { gear: '3rd', ratio: '1.56', speedAt1000Rpm: 27.7, speedAt3000Rpm: 83.1, speedAt6000Rpm: 166.2, redlineSpeed: 169 },
      { gear: '4th', ratio: '1.18', speedAt1000Rpm: 36.6, speedAt3000Rpm: 109.8, speedAt6000Rpm: 219.6, redlineSpeed: 223 },
      { gear: '5th', ratio: '0.94', speedAt1000Rpm: 46.0, speedAt3000Rpm: 138.0, speedAt6000Rpm: 276.0, redlineSpeed: 280 },
      { gear: '6th', ratio: '0.79', speedAt1000Rpm: 54.7, speedAt3000Rpm: 164.1, speedAt6000Rpm: 328.2, redlineSpeed: 333 },
      { gear: '7th', ratio: '0.65', speedAt1000Rpm: 66.5, speedAt3000Rpm: 199.5, speedAt6000Rpm: 335.0, redlineSpeed: 335 },
      { gear: '8th', ratio: '0.55', speedAt1000Rpm: 78.6, speedAt3000Rpm: 235.8, speedAt6000Rpm: 335.0, redlineSpeed: 335 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 3.2, engineRpm: 1050 },
      { speedKmh: 40, fuelConsumptionKmpl: 4.0, engineRpm: 980 },
      { speedKmh: 60, fuelConsumptionKmpl: 4.8, engineRpm: 950 },
      { speedKmh: 80, fuelConsumptionKmpl: 5.4, engineRpm: 1050 },
      { speedKmh: 100, fuelConsumptionKmpl: 5.0, engineRpm: 1450 },
      { speedKmh: 120, fuelConsumptionKmpl: 4.3, engineRpm: 1750 },
      { speedKmh: 140, fuelConsumptionKmpl: 3.6, engineRpm: 2100 }
    ],
    technicalFeatures: [
      'Hand-built twin-turbo W12, unique to Bentley among current Volkswagen Group products',
      'Near-silent low-RPM refinement with locomotive-like torque from just 1,350 RPM',
      'Speed-tune throttle mapping and a valved sports exhaust with a deeper W12 note',
      'Paired with Bentley Dynamic Ride 48-volt active anti-roll control'
    ]
  },

  '4.0-twin-turbo-v8-speed': {
    id: '4.0-twin-turbo-v8-speed',
    name: '4.0L Twin-Turbo V8 (Speed-Tune)',
    badge: '4.0 Twin-Turbo V8 Speed (550 PS / 770 Nm)',
    displacement: '3,996 cc',
    cylinders: '8 Cylinders (Twin-Turbo V8)',
    fuelType: 'Petrol',
    peakPowerStr: '550 PS @ 6,000 RPM',
    peakTorqueStr: '770 Nm @ 2,000–4,500 RPM',
    maxPowerHp: 550,
    maxTorqueNm: 770,
    powerRpmRange: '6,000 RPM',
    torqueRpmRange: '2,000–4,500 RPM',
    redlineRpm: 6800,
    idleRpm: 800,
    highwayCruiseRpm100Kmh: 1550,
    highwayCruiseRpm120Kmh: 1850,
    dynoCurve: [
      { rpm: 1500, powerHp: 90, torqueNm: 560, boostBar: 0.9 },
      { rpm: 2000, powerHp: 160, torqueNm: 770, boostBar: 1.1 },
      { rpm: 3000, powerHp: 280, torqueNm: 770, boostBar: 1.1 },
      { rpm: 4000, powerHp: 380, torqueNm: 750, boostBar: 1.05 },
      { rpm: 5000, powerHp: 470, torqueNm: 700, boostBar: 1.0 },
      { rpm: 6000, powerHp: 550, torqueNm: 640, boostBar: 0.95 },
      { rpm: 6800, powerHp: 520, torqueNm: 570, boostBar: 0.9 }
    ],
    accelerationCurve: [
      { timeSec: 0.0, speedKmh: 0, gForce: 0.0, gear: 1 },
      { timeSec: 0.9, speedKmh: 50, gForce: 0.80, gear: 1 },
      { timeSec: 2.0, speedKmh: 90, gForce: 0.68, gear: 2 },
      { timeSec: 4.4, speedKmh: 100, gForce: 0.55, gear: 3 },
      { timeSec: 6.5, speedKmh: 160, gForce: 0.40, gear: 4 },
      { timeSec: 10.2, speedKmh: 200, gForce: 0.28, gear: 5 }
    ],
    gearRatios: [
      { gear: '1st', ratio: '4.71', speedAt1000Rpm: 9.5, speedAt3000Rpm: 28.5, speedAt6000Rpm: 57.0, redlineSpeed: 65 },
      { gear: '2nd', ratio: '3.14', speedAt1000Rpm: 14.3, speedAt3000Rpm: 42.9, speedAt6000Rpm: 85.8, redlineSpeed: 97 },
      { gear: '3rd', ratio: '2.11', speedAt1000Rpm: 21.3, speedAt3000Rpm: 63.9, speedAt6000Rpm: 127.8, redlineSpeed: 145 },
      { gear: '4th', ratio: '1.67', speedAt1000Rpm: 26.9, speedAt3000Rpm: 80.7, speedAt6000Rpm: 161.4, redlineSpeed: 183 },
      { gear: '5th', ratio: '1.29', speedAt1000Rpm: 34.8, speedAt3000Rpm: 104.4, speedAt6000Rpm: 208.8, redlineSpeed: 237 },
      { gear: '6th', ratio: '1.00', speedAt1000Rpm: 44.9, speedAt3000Rpm: 134.7, speedAt6000Rpm: 269.4, redlineSpeed: 306 },
      { gear: '7th', ratio: '0.84', speedAt1000Rpm: 53.5, speedAt3000Rpm: 160.5, speedAt6000Rpm: 306.0, redlineSpeed: 306 },
      { gear: '8th', ratio: '0.67', speedAt1000Rpm: 67.0, speedAt3000Rpm: 201.0, speedAt6000Rpm: 306.0, redlineSpeed: 306 }
    ],
    efficiencyCurve: [
      { speedKmh: 20, fuelConsumptionKmpl: 3.6, engineRpm: 1100 },
      { speedKmh: 40, fuelConsumptionKmpl: 4.4, engineRpm: 1000 },
      { speedKmh: 60, fuelConsumptionKmpl: 5.3, engineRpm: 980 },
      { speedKmh: 80, fuelConsumptionKmpl: 5.9, engineRpm: 1100 },
      { speedKmh: 100, fuelConsumptionKmpl: 5.5, engineRpm: 1550 },
      { speedKmh: 120, fuelConsumptionKmpl: 4.7, engineRpm: 1850 },
      { speedKmh: 140, fuelConsumptionKmpl: 4.0, engineRpm: 2200 }
    ],
    technicalFeatures: [
      'Speed-tune calibration of the Bentayga’s twin-turbo V8 sharpens throttle response',
      'Active all-wheel steering paired with Bentley Dynamic Ride active anti-roll control',
      'Sports exhaust with quad tailpipes and a deeper V8 note',
      'Retains genuine light off-roading capability via a dedicated Off-Road drive mode'
    ]
  }
};

export const MODEL_PERFORMANCE_PROFILES: ModelPerformanceProfile[] = [
  {
    id: 'kylaq',
    name: 'Škoda Kylaq',
    tagline: 'Agile Urban Sprint & Mountain Conqueror',
    category: 'Sub-4M Compact SUV',
    primaryEngineId: '1.0-tsi',
    availableEngineIds: ['1.0-tsi'],
    weightKg: 1225,
    dragCoefficient: '0.34 Cd',
    braking100to0DistMeters: 38.2,
    corneringGForce: 0.88,
    powerToWeightRatio: '93.8 PS/tonne',
    sprint0to100: '10.5 seconds',
    topSpeed: '188 km/h',
    suspensionType: 'MacPherson Strut with Lower Triangular Links & Torsion Beam Rear',
    aerodynamicHighlights: [
      'Active grille shutter reduces aerodynamic drag by 4.2% on expressway speeds',
      'Air-curtain bumper inlets channel airflow around front 17-inch alloy wheels',
      'Integrated roof spoiler cleans turbulent wake over rear tailgate'
    ]
  },
  {
    id: 'slavia',
    name: 'Škoda Slavia',
    tagline: 'Sleek European Aerodynamic Missile',
    category: 'Midsize Premium Sedan',
    primaryEngineId: '1.5-tsi',
    availableEngineIds: ['1.0-tsi', '1.5-tsi'],
    weightKg: 1260,
    dragCoefficient: '0.28 Cd (Segment Leader)',
    braking100to0DistMeters: 36.8,
    corneringGForce: 0.92,
    powerToWeightRatio: '119.0 PS/tonne',
    sprint0to100: '8.8 seconds',
    topSpeed: '205 km/h',
    suspensionType: 'Precision European Sports Tuned Suspension with Gas-Charged Dampers',
    aerodynamicHighlights: [
      'Ultra-slippery 0.28 Cd teardrop liftback roofline cuts drag for high-speed stability',
      'Full underbody flat aero-cladding optimizes lamina airflow underneath chassis',
      'Integrated bootlip spoiler creates usable downforce at 120+ km/h'
    ]
  },
  {
    id: 'kushaq',
    name: 'Škoda Kushaq',
    tagline: 'High-Riding Dynamics with European Grip',
    category: 'Midsize SUV',
    primaryEngineId: '1.5-tsi',
    availableEngineIds: ['1.0-tsi', '1.5-tsi'],
    weightKg: 1295,
    dragCoefficient: '0.33 Cd',
    braking100to0DistMeters: 37.5,
    corneringGForce: 0.89,
    powerToWeightRatio: '115.8 PS/tonne',
    sprint0to100: '9.2 seconds',
    topSpeed: '195 km/h',
    suspensionType: 'Heavy-Duty Rough Road Package with Anti-Roll Bar & 188 mm Clearance',
    aerodynamicHighlights: [
      'Engine underbody sump guard double-functions as front aerodynamic skidplate',
      'A-pillar aero-deflectors minimize wind buffering at monsoon highway speeds',
      'Twin-channel roof rails contoured to eliminate aerodynamic whistle'
    ]
  },
  {
    id: 'octavia',
    name: 'Škoda Octavia',
    tagline: 'The Legendary Executive Highway Missile',
    category: 'Executive Luxury Sedan',
    primaryEngineId: '2.0-tsi',
    availableEngineIds: ['2.0-tsi', '1.8-tdi', '2.0-tdi'],
    weightKg: 1430,
    dragCoefficient: '0.24 Cd (Supercar Aerodynamics)',
    braking100to0DistMeters: 35.1,
    corneringGForce: 0.95,
    powerToWeightRatio: '132.8 PS/tonne',
    sprint0to100: '7.4 seconds',
    topSpeed: '240 km/h',
    suspensionType: 'Independent MacPherson Strut + Multi-Link Rear Suspension',
    aerodynamicHighlights: [
      'World-class 0.24 drag coefficient: slices through air with luxury sedan silence',
      'Aero-optimized rear diffuser accelerates exit airflow beneath the 600L liftback',
      'Electrically closing radiator blinds automatically seal in cold starts and highway cruise'
    ]
  },
  {
    id: 'kodiaq',
    name: 'Škoda Kodiaq',
    tagline: '7-Seater 4x4 Luxury Flagship Tourer',
    category: 'Luxury 4x4 7-Seater SUV',
    primaryEngineId: '2.0-tsi',
    availableEngineIds: ['2.0-tsi', '2.0-tdi'],
    weightKg: 1790,
    dragCoefficient: '0.31 Cd',
    braking100to0DistMeters: 36.9,
    corneringGForce: 0.87,
    powerToWeightRatio: '106.1 PS/tonne',
    sprint0to100: '7.8 seconds',
    topSpeed: '216 km/h',
    suspensionType: 'Dynamic Chassis Control (DCC Plus) Dual-Valve Adaptive Dampers',
    aerodynamicHighlights: [
      'Wheel arch aero-spoilers deflect high-speed turbulence around 18-inch wheels',
      'Underfloor aerodynamic baffles smooth airflow around the Haldex 4x4 prop-shaft',
      'Extended rear roof spoiler with side aerodynamic finlets'
    ]
  },
  {
    id: 'superb',
    name: 'Škoda Superb',
    tagline: 'First-Class Chauffeur & Cross-Continent Limousine',
    category: 'Executive Luxury Sedan',
    primaryEngineId: '2.0-tsi',
    availableEngineIds: ['2.0-tsi', '2.0-tdi'],
    weightKg: 1540,
    dragCoefficient: '0.237 Cd (Class Record)',
    braking100to0DistMeters: 35.4,
    corneringGForce: 0.93,
    powerToWeightRatio: '123.3 PS/tonne',
    sprint0to100: '7.7 seconds',
    topSpeed: '242 km/h',
    suspensionType: 'DCC Adaptive Suspension with 15 Individual Rebound/Compression Settings',
    aerodynamicHighlights: [
      'Benchmark 0.237 Cd aerodynamic profile — lowest of any production sedan in class',
      'Active cooling air intake shutters reduce drag by up to 8% at cruising velocities',
      'Acoustic laminated double glazing cuts wind noise by 4.5 dB'
    ]
  },
  {
    id: 'octavia-vrs',
    name: 'Škoda Octavia vRS',
    tagline: 'vRS Performance Track Weapon & 265 PS Icon',
    category: 'High-Performance Sports Sedan',
    primaryEngineId: '2.0-tsi-vrs',
    availableEngineIds: ['2.0-tsi-vrs'],
    weightKg: 1475,
    dragCoefficient: '0.26 Cd with Functional Downforce',
    braking100to0DistMeters: 33.8,
    corneringGForce: 1.04,
    powerToWeightRatio: '179.6 PS/tonne',
    sprint0to100: '6.4 seconds',
    topSpeed: '250 km/h (Electronically Limited)',
    suspensionType: 'vRS Sports Suspension lowered 15mm with VAQ Electro-Mechanical LSD',
    aerodynamicHighlights: [
      'Functional vRS front apron with side air curtains and gloss black splitter',
      'vRS black gloss rear trunk spoiler and functional aerodynamic lower diffuser',
      'Gloss black aerodynamic wing mirrors reducing vortex separation at 200+ km/h'
    ]
  },
  {
    id: 'kodiaq-vrs',
    name: 'Škoda Kodiaq vRS',
    tagline: 'Nürburgring 7-Seater Record Holder & 4x4 Weapon',
    category: 'High-Performance 4x4 SUV',
    primaryEngineId: '2.0-tsi-vrs',
    availableEngineIds: ['2.0-tsi-vrs'],
    weightKg: 1840,
    dragCoefficient: '0.32 Cd',
    braking100to0DistMeters: 35.2,
    corneringGForce: 0.96,
    powerToWeightRatio: '144.0 PS/tonne',
    sprint0to100: '6.3 seconds',
    topSpeed: '232 km/h',
    suspensionType: 'vRS DCC Plus with 15-Stage Dual-Valve Damping & Progressive Steering',
    aerodynamicHighlights: [
      'Aggressive front bumper with motorsport air intakes and gloss black aero slats',
      '20-inch aerodynamic alloy wheels with removable matte black aero-inserts',
      'Integrated rear dual trapezoidal exhaust tips with functional ground-effect diffuser'
    ]
  },
  {
    id: 'virtus',
    name: 'Volkswagen Virtus',
    tagline: '5-Star NCAP Sedan with German Autobahn-Tuned Stability',
    category: 'Premium Sedan',
    primaryEngineId: '1.5-tsi',
    availableEngineIds: ['1.0-tsi', '1.5-tsi'],
    weightKg: 1272,
    dragCoefficient: '0.28 Cd',
    braking100to0DistMeters: 36.5,
    corneringGForce: 0.92,
    powerToWeightRatio: '117.9 PS/tonne',
    sprint0to100: '8.9 seconds',
    topSpeed: '203 km/h',
    suspensionType: 'German-Tuned MacPherson Strut Front & Torsion Beam Rear',
    aerodynamicHighlights: [
      'Autobahn-validated 0.28 Cd body shape for high-speed stability',
      'Full underbody aero cladding for laminar airflow beneath the chassis',
      'Integrated boot-lid spoiler generating usable downforce above 120 km/h'
    ]
  },
  {
    id: 'taigun',
    name: 'Volkswagen Taigun',
    tagline: 'German-Engineered Midsize SUV with Autobahn Poise',
    category: 'Midsize SUV',
    primaryEngineId: '1.5-tsi',
    availableEngineIds: ['1.0-tsi', '1.5-tsi'],
    weightKg: 1308,
    dragCoefficient: '0.33 Cd',
    braking100to0DistMeters: 37.8,
    corneringGForce: 0.89,
    powerToWeightRatio: '114.7 PS/tonne',
    sprint0to100: '9.3 seconds',
    topSpeed: '194 km/h',
    suspensionType: 'Heavy-Duty Rough Road Package with Reinforced Anti-Roll Bar',
    aerodynamicHighlights: [
      'Underbody sump guard doubling as a front aerodynamic skidplate',
      'A-pillar aero-deflectors reducing wind buffeting on the highway',
      'Roof rails contoured to minimize aerodynamic whistle at speed'
    ]
  },
  {
    id: 'tiguan',
    name: 'Volkswagen Tiguan',
    tagline: '4MOTION All-Wheel-Drive Luxury SUV Benchmark',
    category: 'Luxury 4x4 SUV',
    primaryEngineId: '2.0-tsi',
    availableEngineIds: ['2.0-tsi'],
    weightKg: 1665,
    dragCoefficient: '0.32 Cd',
    braking100to0DistMeters: 36.2,
    corneringGForce: 0.90,
    powerToWeightRatio: '114.1 PS/tonne',
    sprint0to100: '7.9 seconds',
    topSpeed: '213 km/h',
    suspensionType: '4MOTION Adaptive Chassis with Multi-Link Rear Suspension',
    aerodynamicHighlights: [
      'Wheel arch aero-spoilers deflecting turbulence around 18-inch wheels',
      'Underfloor aerodynamic baffles smoothing airflow around the 4MOTION driveline',
      'Extended roof spoiler with side aerodynamic finlets'
    ]
  },
  {
    id: 'golf-gti',
    name: 'Volkswagen Golf GTI',
    tagline: 'The Hot-Hatch Icon & 265 PS Benchmark',
    category: 'High-Performance Hot Hatch',
    primaryEngineId: '2.0-tsi-vrs',
    availableEngineIds: ['2.0-tsi-vrs'],
    weightKg: 1397,
    dragCoefficient: '0.275 Cd',
    braking100to0DistMeters: 33.2,
    corneringGForce: 1.05,
    powerToWeightRatio: '189.7 PS/tonne',
    sprint0to100: '6.2 seconds',
    topSpeed: '250 km/h (Electronically Limited)',
    suspensionType: 'GTI Sports Suspension lowered 15mm with VAQ Electro-Mechanical LSD',
    aerodynamicHighlights: [
      'Functional GTI front apron with red pinstripe and side air curtains',
      'Gloss black rear roof-edge spoiler with functional aerodynamic profile',
      'Honeycomb rear diffuser reducing turbulence beneath the quad exhaust'
    ]
  },
  {
    id: 'tayron',
    name: 'Volkswagen Tayron',
    tagline: 'MQB Evo 7-Seater Flagship with 4MOTION AWD',
    category: 'Luxury 4x4 7-Seater SUV',
    primaryEngineId: '2.0-tsi-204',
    availableEngineIds: ['2.0-tsi-204'],
    weightKg: 1795,
    dragCoefficient: '0.30 Cd',
    braking100to0DistMeters: 37.0,
    corneringGForce: 0.88,
    powerToWeightRatio: '113.6 PS/tonne',
    sprint0to100: '8.1 seconds',
    topSpeed: '210 km/h',
    suspensionType: 'DCC Pro Adaptive Dampers with 4MOTION All-Wheel Drive',
    aerodynamicHighlights: [
      'Illuminated LED lightbar integrated into an aero-optimized front fascia',
      'Underfloor aerodynamic panelling smoothing airflow around the 3-row cabin',
      'Roof-mounted aero spoiler reducing wake turbulence over the tailgate'
    ]
  },
  {
    id: 'rapid',
    name: 'Škoda Rapid',
    tagline: 'Hall of Fame Compact Sedan Pioneer (2011–2023)',
    category: 'Compact Sedan (Legacy)',
    primaryEngineId: '1.0-tsi-rapid',
    availableEngineIds: ['1.0-tsi-rapid', '1.6-mpi'],
    weightKg: 1150,
    dragCoefficient: '0.30 Cd',
    braking100to0DistMeters: 39.5,
    corneringGForce: 0.82,
    powerToWeightRatio: '95.7 PS/tonne',
    sprint0to100: '10.9 seconds',
    topSpeed: '186 km/h',
    suspensionType: 'MacPherson Strut Front & Torsion Beam Rear (PQ25 Platform)',
    aerodynamicHighlights: [
      'Simple, low-drag three-box sedan silhouette typical of the PQ25 platform era',
      'Chrome-accented front grille shaped to smooth airflow around the bumper',
      'Flat underbody paneling ahead of the rear axle for reduced turbulence'
    ]
  },
  {
    id: 'fabia',
    name: 'Škoda Fabia',
    tagline: 'Hall of Fame Premium Hatchback Icon (2008–2014)',
    category: 'Hatchback (Legacy)',
    primaryEngineId: '1.6-mpi',
    availableEngineIds: ['1.6-mpi', '1.2-tdi-cr'],
    weightKg: 1080,
    dragCoefficient: '0.31 Cd',
    braking100to0DistMeters: 38.9,
    corneringGForce: 0.84,
    powerToWeightRatio: '97.2 PS/tonne',
    sprint0to100: '11.8 seconds',
    topSpeed: '180 km/h',
    suspensionType: 'MacPherson Strut Front & Twist-Beam Rear (PQ25 Platform)',
    aerodynamicHighlights: [
      'Compact hatchback proportions with a short overhang for reduced frontal area',
      'Rounded wheel arches shaped to control turbulence at the rear quarters',
      'Rear roofline spoiler integrated into the tailgate edge'
    ]
  },
  {
    id: 'polo-legend',
    name: 'Volkswagen Polo GT TSI',
    tagline: 'Hall of Fame Hot-Hatch That Founded India\'s Tuning Culture (2010–2022)',
    category: 'Hot Hatchback (Legacy)',
    primaryEngineId: '1.2-tsi-polo',
    availableEngineIds: ['1.2-tsi-polo', '1.0-tsi'],
    weightKg: 1120,
    dragCoefficient: '0.32 Cd',
    braking100to0DistMeters: 37.6,
    corneringGForce: 0.90,
    powerToWeightRatio: '93.8 PS/tonne',
    sprint0to100: '9.7 seconds',
    topSpeed: '190 km/h',
    suspensionType: 'MacPherson Strut Front & Torsion Beam Rear (PQ25 Platform)',
    aerodynamicHighlights: [
      'Laser-welded galvanized steel body shell renowned for high-speed structural rigidity',
      'Gloss black roof wrap and rear spoiler on the GT TSI Legend Edition reducing rear lift',
      'Compact hatchback footprint delivering agile low-drag city and highway manners'
    ]
  },
  {
    id: 'jetta',
    name: 'Volkswagen Jetta',
    tagline: 'Hall of Fame CKD Sedan with TSI & TDI Refinement (2008–2013)',
    category: 'Compact Sedan (Legacy)',
    primaryEngineId: '1.4-tsi-twincharger',
    availableEngineIds: ['1.4-tsi-twincharger', '2.0-tdi-177'],
    weightKg: 1315,
    dragCoefficient: '0.29 Cd',
    braking100to0DistMeters: 37.2,
    corneringGForce: 0.87,
    powerToWeightRatio: '92.8 PS/tonne',
    sprint0to100: '9.5 seconds',
    topSpeed: '198 km/h',
    suspensionType: 'Independent MacPherson Strut Front & Multi-Link Rear (PQ35 Platform)',
    aerodynamicHighlights: [
      'Chiseled three-box sedan design tuned for Autobahn-grade high-speed stability',
      'Underbody aero paneling ahead of the fuel tank smoothing airflow beneath the cabin',
      'Boot-lid character line acting as a subtle lip spoiler reducing rear-end lift'
    ]
  },
  {
    id: 'passat',
    name: 'Volkswagen Passat',
    tagline: 'Hall of Fame Executive Flagship with 350 Nm TDI Muscle (2007–2022)',
    category: 'Executive Sedan (Legacy)',
    primaryEngineId: '2.0-tdi-177',
    availableEngineIds: ['2.0-tdi-177'],
    weightKg: 1560,
    dragCoefficient: '0.27 Cd',
    braking100to0DistMeters: 36.4,
    corneringGForce: 0.89,
    powerToWeightRatio: '113.5 PS/tonne',
    sprint0to100: '8.2 seconds',
    topSpeed: '220 km/h',
    suspensionType: 'Independent 4-Link Front & Multi-Link Rear (B7/B8 Platform)',
    aerodynamicHighlights: [
      'Long, low executive silhouette optimized for German Autobahn cruising stability',
      'Active radiator shutters on later CBU imports reducing cooling drag at speed',
      'Flush-fitted glazing and door handles minimizing wind noise and drag coefficient'
    ]
  },
  {
    id: 'octavia-combi',
    name: 'Škoda Octavia Combi',
    tagline: 'Hall of Fame Premium Estate with Turbo-Petrol Performance (2005–2010)',
    category: 'Estate / Station Wagon (Legacy)',
    primaryEngineId: '1.8-tsi-combi',
    availableEngineIds: ['1.8-tsi-combi', '1.9-tdi-pd90'],
    weightKg: 1345,
    dragCoefficient: '0.29 Cd',
    braking100to0DistMeters: 38.0,
    corneringGForce: 0.83,
    powerToWeightRatio: '111.5 PS/tonne',
    sprint0to100: '9.5 seconds',
    topSpeed: '212 km/h',
    suspensionType: 'MacPherson Strut Front & Multi-Link Rear (PQ34 Platform)',
    aerodynamicHighlights: [
      'Extended estate roofline tapering into an integrated rear roof spoiler',
      'Smooth D-pillar contouring to reduce turbulence over the tailgate glass',
      'Flat underbody paneling ahead of the rear axle for a lower drag coefficient than typical wagons'
    ]
  },
  {
    id: 'laura',
    name: 'Škoda Laura',
    tagline: 'Hall of Fame Sedan with Class-Leading Boot Space (2010–2013)',
    category: 'Executive Sedan (Legacy)',
    primaryEngineId: '1.8-tsi-160',
    availableEngineIds: ['1.8-tsi-160', '1.9-tdi-pd105', '2.0-tdi-140'],
    weightKg: 1320,
    dragCoefficient: '0.28 Cd',
    braking100to0DistMeters: 37.4,
    corneringGForce: 0.86,
    powerToWeightRatio: '121.2 PS/tonne',
    sprint0to100: '8.9 seconds',
    topSpeed: '203 km/h',
    suspensionType: 'MacPherson Strut Front & Multi-Link Rear (PQ34 Platform)',
    aerodynamicHighlights: [
      'Clean three-box sedan silhouette shared with the international second-generation Octavia',
      'Underbody aero paneling ahead of the fuel tank smoothing airflow beneath the cabin',
      'Boot-lid character line acting as a subtle lip spoiler reducing rear-end lift'
    ]
  },
  {
    id: 'yeti',
    name: 'Škoda Yeti',
    tagline: 'Hall of Fame Compact SUV with Genuine Haldex 4x4 (2010–2017)',
    category: 'Compact SUV (Legacy)',
    primaryEngineId: '2.0-tdi-140',
    availableEngineIds: ['2.0-tdi-110', '2.0-tdi-140', '1.8-tsi-160'],
    weightKg: 1475,
    dragCoefficient: '0.35 Cd',
    braking100to0DistMeters: 38.5,
    corneringGForce: 0.80,
    powerToWeightRatio: '94.9 PS/tonne',
    sprint0to100: '9.8 seconds',
    topSpeed: '198 km/h',
    suspensionType: 'MacPherson Strut Front & Multi-Link Rear with Haldex 4x4 Coupling',
    aerodynamicHighlights: [
      'Distinctive upright, boxy silhouette prioritizing cabin space over slippery aerodynamics',
      'Roof rails integrated into the roofline to minimize wind noise at highway speed',
      'Front skid plate doubling as an aerodynamic underbody deflector'
    ]
  },
  {
    id: 'karoq',
    name: 'Škoda Karoq',
    tagline: 'CBU Import Flagship SUV with Full European Engineering (2020–2022)',
    category: 'Midsize SUV',
    primaryEngineId: '1.5-tsi',
    availableEngineIds: ['1.5-tsi'],
    weightKg: 1445,
    dragCoefficient: '0.32 Cd',
    braking100to0DistMeters: 37.0,
    corneringGForce: 0.88,
    powerToWeightRatio: '103.8 PS/tonne',
    sprint0to100: '9.2 seconds',
    topSpeed: '201 km/h',
    suspensionType: 'MacPherson Strut Front & Multi-Link Rear (MQB Platform)',
    aerodynamicHighlights: [
      'Sculpted bonnet and A-pillar geometry shared with the global Volkswagen Tiguan platform',
      'Active radiator grille shutters reducing drag at highway cruising speeds',
      'Roof-mounted spoiler with integrated third brake light reducing rear-end turbulence'
    ]
  },
  {
    id: 'beetle',
    name: 'Volkswagen Beetle',
    tagline: 'CBU Import Icon with Retro-Modern Coupe Styling (2009–2019)',
    category: 'Coupe Hatchback (Legacy)',
    primaryEngineId: '1.4-tsi-beetle',
    availableEngineIds: ['1.4-tsi-beetle'],
    weightKg: 1395,
    dragCoefficient: '0.33 Cd',
    braking100to0DistMeters: 36.8,
    corneringGForce: 0.87,
    powerToWeightRatio: '107.5 PS/tonne',
    sprint0to100: '8.4 seconds',
    topSpeed: '204 km/h',
    suspensionType: 'MacPherson Strut Front & Multi-Link Rear (PQ35 Platform)',
    aerodynamicHighlights: [
      'Signature rounded coupe roofline paying tribute to the original 1938 Type 1 silhouette',
      'Smooth, flush-fitted body panels minimizing panel-gap turbulence',
      'Integrated rear roof-edge spoiler shaping airflow off the tailgate'
    ]
  },
  {
    id: 'touareg',
    name: 'Volkswagen Touareg',
    tagline: 'Flagship Luxury 4x4 SUV with V6 Diesel Muscle (2011–2020)',
    category: 'Luxury 4x4 SUV',
    primaryEngineId: '3.0-tdi-v6',
    availableEngineIds: ['3.0-tdi-v6'],
    weightKg: 2075,
    dragCoefficient: '0.35 Cd',
    braking100to0DistMeters: 37.8,
    corneringGForce: 0.82,
    powerToWeightRatio: '118.1 PS/tonne',
    sprint0to100: '7.8 seconds',
    topSpeed: '224 km/h',
    suspensionType: '4-Corner Adaptive Air Suspension with Permanent 4MOTION AWD',
    aerodynamicHighlights: [
      'Active radiator shutters and underbody paneling reducing cooling drag at speed',
      'Adjustable air suspension automatically lowers ride height at highway speeds to cut drag',
      'Roof rails and wheel-arch claddings contoured to minimize crosswind sensitivity'
    ]
  },
  {
    id: 'phaeton',
    name: 'Volkswagen Phaeton',
    tagline: 'Ultra-Luxury Flagship Sedan Built at the Transparent Factory (2010–2016)',
    category: 'Executive Sedan (Legacy)',
    primaryEngineId: '3.0-tdi-v6',
    availableEngineIds: ['3.0-tdi-v6'],
    weightKg: 2200,
    dragCoefficient: '0.29 Cd',
    braking100to0DistMeters: 38.2,
    corneringGForce: 0.78,
    powerToWeightRatio: '111.4 PS/tonne',
    sprint0to100: '8.8 seconds',
    topSpeed: '234 km/h',
    suspensionType: '4-Corner Air Suspension with Continuous Damping Control',
    aerodynamicHighlights: [
      'Long-wheelbase limousine proportions tuned for silent, stable high-speed cruising',
      'Dual-layer acoustic laminated glass reducing wind noise and buffeting',
      'Flush door handles and underbody encapsulation for a low 0.29 Cd drag coefficient'
    ]
  },
  {
    id: 'vento',
    name: 'Volkswagen Vento',
    tagline: 'Hall of Fame Sedan with "German Thud" Build Quality (2010–2022)',
    category: 'Compact Sedan (Legacy)',
    primaryEngineId: '1.2-tsi-polo',
    availableEngineIds: ['1.6-mpi', '1.2-tsi-polo', '1.5-tdi'],
    weightKg: 1215,
    dragCoefficient: '0.30 Cd',
    braking100to0DistMeters: 37.5,
    corneringGForce: 0.85,
    powerToWeightRatio: '86.4 PS/tonne',
    sprint0to100: '9.7 seconds',
    topSpeed: '190 km/h',
    suspensionType: 'MacPherson Strut Front & Torsion Beam Rear (PQ25 Platform)',
    aerodynamicHighlights: [
      'Laser-welded galvanized steel body shell renowned for high-speed structural rigidity',
      'Simple three-box sedan silhouette shared with the international Volkswagen Vento/Polo Sedan',
      'Chrome-accented front grille shaped to smooth airflow around the bumper'
    ]
  },
  {
    id: 'ameo',
    name: 'Volkswagen Ameo',
    tagline: 'India-Exclusive Sub-4-Metre Compact Sedan (2016–2020)',
    category: 'Compact Sedan (Legacy)',
    primaryEngineId: '1.5-tdi',
    availableEngineIds: ['1.2-mpi-75', '1.5-tdi'],
    weightKg: 1155,
    dragCoefficient: '0.31 Cd',
    braking100to0DistMeters: 37.9,
    corneringGForce: 0.84,
    powerToWeightRatio: '95.2 PS/tonne',
    sprint0to100: '10.7 seconds',
    topSpeed: '182 km/h',
    suspensionType: 'MacPherson Strut Front & Torsion Beam Rear (PQ25 Platform)',
    aerodynamicHighlights: [
      'Notchback boot design distinct from the international Polo/Vento silhouette',
      'Compact overhangs reducing frontal area and aerodynamic lift',
      'Chrome window beltline trim smoothing airflow along the greenhouse'
    ]
  },
  {
    id: 't-roc',
    name: 'Volkswagen T-Roc',
    tagline: 'CBU Import Compact SUV with Coupe-SUV Styling (2020–2022)',
    category: 'Compact SUV (Legacy)',
    primaryEngineId: '1.5-tsi',
    availableEngineIds: ['1.5-tsi'],
    weightKg: 1395,
    dragCoefficient: '0.33 Cd',
    braking100to0DistMeters: 37.2,
    corneringGForce: 0.87,
    powerToWeightRatio: '107.5 PS/tonne',
    sprint0to100: '8.4 seconds',
    topSpeed: '199 km/h',
    suspensionType: 'MacPherson Strut Front & Multi-Link Rear (MQB Platform)',
    aerodynamicHighlights: [
      'Coupe-SUV roofline with contrasting roof color reducing visual and aerodynamic bulk',
      'Sculpted wheel arches channeling airflow around 18-inch alloy wheels',
      'Roof-edge spoiler integrated into the tailgate reducing rear-end turbulence'
    ]
  },
  {
    id: 'a4',
    name: 'Audi A4',
    tagline: 'The Progressive Executive Sedan',
    category: 'Executive Sedan',
    primaryEngineId: '2.0-tfsi-190',
    availableEngineIds: ['2.0-tfsi-190'],
    weightKg: 1495,
    dragCoefficient: '0.27 Cd',
    braking100to0DistMeters: 35.8,
    corneringGForce: 0.88,
    powerToWeightRatio: '127.1 PS/tonne',
    sprint0to100: '7.7 seconds',
    topSpeed: '237 km/h',
    suspensionType: 'Five-Link Front & Rear Independent Suspension (MLB Evo Platform)',
    aerodynamicHighlights: [
      'Sculpted single-frame grille and flush door handles for a class-leading 0.27 Cd drag coefficient',
      'Active radiator shutters closing at highway speed to reduce cooling drag',
      'Integrated boot-lid spoiler generating stability-enhancing downforce above 130 km/h'
    ]
  },
  {
    id: 'a6',
    name: 'Audi A6',
    tagline: 'The Executive Autobahn Cruiser',
    category: 'Executive Sedan',
    primaryEngineId: '2.0-tfsi-249-quattro',
    availableEngineIds: ['2.0-tfsi-249-quattro'],
    weightKg: 1660,
    dragCoefficient: '0.26 Cd',
    braking100to0DistMeters: 34.6,
    corneringGForce: 0.91,
    powerToWeightRatio: '150.0 PS/tonne',
    sprint0to100: '6.1 seconds',
    topSpeed: '245 km/h',
    suspensionType: 'Adaptive Air Suspension with quattro Permanent All-Wheel Drive',
    aerodynamicHighlights: [
      'Benchmark 0.26 Cd aerodynamic profile among executive quattro sedans',
      'Adaptive air suspension automatically lowers ride height at speed to cut drag',
      'Flush-fitted twin-display cabin architecture paired with a smooth, encapsulated underbody'
    ]
  },
  {
    id: 'q3',
    name: 'Audi Q3',
    tagline: 'The Compact Luxury SUV',
    category: 'Compact SUV',
    primaryEngineId: '2.0-tfsi-190',
    availableEngineIds: ['2.0-tfsi-190'],
    weightKg: 1560,
    dragCoefficient: '0.32 Cd',
    braking100to0DistMeters: 36.9,
    corneringGForce: 0.85,
    powerToWeightRatio: '121.8 PS/tonne',
    sprint0to100: '8.2 seconds',
    topSpeed: '210 km/h',
    suspensionType: 'MacPherson Strut Front & Multi-Link Rear (MQB Evo Platform)',
    aerodynamicHighlights: [
      'Oversized single-frame octagonal grille shaped to manage frontal airflow',
      'Sportback coupe-roofline variant trims drag further versus the standard SUV body',
      'Roof-mounted spoiler with integrated third brake light reducing rear-end turbulence'
    ]
  },
  {
    id: 'q5',
    name: 'Audi Q5',
    tagline: 'The Benchmark Midsize Luxury SUV',
    category: 'Midsize SUV',
    primaryEngineId: '2.0-tfsi-249-quattro',
    availableEngineIds: ['2.0-tfsi-249-quattro'],
    weightKg: 1795,
    dragCoefficient: '0.30 Cd',
    braking100to0DistMeters: 36.2,
    corneringGForce: 0.87,
    powerToWeightRatio: '138.7 PS/tonne',
    sprint0to100: '6.3 seconds',
    topSpeed: '237 km/h',
    suspensionType: 'Adaptive Air Suspension with quattro ultra All-Wheel Drive',
    aerodynamicHighlights: [
      'Sculpted bonnet and A-pillar geometry optimized for a 0.30 Cd drag coefficient',
      'Active radiator grille shutters reducing drag at highway cruising speeds',
      'Wheel arch aero-spoilers deflecting turbulence around 20-inch alloy wheels'
    ]
  },
  {
    id: 'q7',
    name: 'Audi Q7',
    tagline: 'The 7-Seater Flagship SUV',
    category: 'Luxury 4x4 SUV',
    primaryEngineId: '3.0-tfsi-v6-340',
    availableEngineIds: ['3.0-tfsi-v6-340'],
    weightKg: 2135,
    dragCoefficient: '0.32 Cd',
    braking100to0DistMeters: 37.6,
    corneringGForce: 0.82,
    powerToWeightRatio: '159.3 PS/tonne',
    sprint0to100: '6.1 seconds',
    topSpeed: '250 km/h (Electronically Governed)',
    suspensionType: 'Adaptive Air Suspension with Off-Road Mode & quattro Permanent AWD',
    aerodynamicHighlights: [
      'Illuminated Audi rings and dynamic LED signature integrated into an aero-optimized fascia',
      'Adjustable air suspension lowers automatically at speed to reduce frontal drag',
      'Roof rails and wheel-arch claddings contoured to minimize crosswind sensitivity'
    ]
  },
  {
    id: 'q8',
    name: 'Audi Q8',
    tagline: 'The Coupe-SUV Halo Flagship',
    category: 'Luxury 4x4 SUV',
    primaryEngineId: '3.0-tfsi-v6-340',
    availableEngineIds: ['3.0-tfsi-v6-340'],
    weightKg: 2145,
    dragCoefficient: '0.31 Cd',
    braking100to0DistMeters: 37.0,
    corneringGForce: 0.84,
    powerToWeightRatio: '158.5 PS/tonne',
    sprint0to100: '5.9 seconds',
    topSpeed: '250 km/h (Electronically Governed)',
    suspensionType: 'Adaptive Air Suspension with quattro Permanent All-Wheel Drive',
    aerodynamicHighlights: [
      'Coupe-SUV roofline shaving drag versus the boxier Q7 while sharing its platform',
      'OLED full-width rear light strip integrated into a smooth, sculpted tailgate',
      'Active air suspension continuously optimizes ride height for aerodynamic efficiency'
    ]
  },
  {
    id: 'rs5',
    name: 'Audi RS5',
    tagline: 'Audi Sport’s Hand-Built V6 Track Weapon',
    category: 'High-Performance Sports Sedan',
    primaryEngineId: '2.9-tfsi-v6-rs',
    availableEngineIds: ['2.9-tfsi-v6-rs'],
    weightKg: 1655,
    dragCoefficient: '0.29 Cd with Functional Downforce',
    braking100to0DistMeters: 32.6,
    corneringGForce: 1.05,
    powerToWeightRatio: '271.9 PS/tonne',
    sprint0to100: '3.9 seconds',
    topSpeed: '250 – 280 km/h (RS Dynamic Package)',
    suspensionType: 'RS Sport Suspension Plus with Dynamic Ride Control & quattro Sport Differential',
    aerodynamicHighlights: [
      'Functional RS front apron with enlarged air intakes for engine and brake cooling',
      'Gloss black rear diffuser and quad exhaust tips shaping high-speed rear airflow',
      'Standard rear spoiler generating usable downforce above 150 km/h'
    ]
  },
  {
    id: 'rs-q8',
    name: 'Audi RS Q8',
    tagline: 'The Fastest, Most Powerful SUV Audi Has Ever Built',
    category: 'High-Performance Luxury SUV',
    primaryEngineId: '4.0-tfsi-v8-rs',
    availableEngineIds: ['4.0-tfsi-v8-rs'],
    weightKg: 2300,
    dragCoefficient: '0.34 Cd',
    braking100to0DistMeters: 33.8,
    corneringGForce: 0.98,
    powerToWeightRatio: '260.9 PS/tonne',
    sprint0to100: '3.8 seconds',
    topSpeed: '250 km/h (305 km/h with RS Dynamic Plus Package)',
    suspensionType: 'RS Adaptive Air Suspension with Electromechanical Active Roll Stabilization',
    aerodynamicHighlights: [
      'Massive front air intakes feeding the twin-turbo V8’s intercoolers and RS brake package',
      'Gloss black roof-edge spoiler and oval quad exhaust tips reducing rear-end lift',
      'Electromechanical active anti-roll bars keep the body flat at speed, aiding high-speed stability'
    ]
  },
  {
    id: 'a3',
    name: 'Audi A3',
    tagline: 'Hall of Fame Compact Luxury Sedan (2014–2020)',
    category: 'Compact Sedan (Legacy)',
    primaryEngineId: '1.4-tfsi-150',
    availableEngineIds: ['1.4-tfsi-150'],
    weightKg: 1345,
    dragCoefficient: '0.30 Cd',
    braking100to0DistMeters: 36.5,
    corneringGForce: 0.86,
    powerToWeightRatio: '111.5 PS/tonne',
    sprint0to100: '8.4 seconds',
    topSpeed: '216 km/h',
    suspensionType: 'MacPherson Strut Front & Multi-Link Rear (MQB Platform)',
    aerodynamicHighlights: [
      'Compact three-box sedan silhouette with a low, wide single-frame grille',
      'Flush-fitted glazing and door handles reducing drag versus its hatchback sibling',
      'Boot-lid character line acting as a subtle lip spoiler reducing rear-end lift'
    ]
  },
  {
    id: 'a8',
    name: 'Audi A8 L',
    tagline: 'The Presidential Flagship Limousine',
    category: 'Executive Sedan',
    primaryEngineId: '3.0-tfsi-v6-340',
    availableEngineIds: ['3.0-tfsi-v6-340'],
    weightKg: 1995,
    dragCoefficient: '0.25 Cd',
    braking100to0DistMeters: 35.4,
    corneringGForce: 0.85,
    powerToWeightRatio: '170.4 PS/tonne',
    sprint0to100: '5.8 seconds',
    topSpeed: '250 km/h (Electronically Governed)',
    suspensionType: 'Predictive Adaptive Air Suspension with quattro Permanent All-Wheel Drive',
    aerodynamicHighlights: [
      'Benchmark 0.25 Cd drag coefficient among long-wheelbase luxury limousines',
      'Predictive air suspension lowers automatically at speed to reduce frontal drag',
      'Flush door handles and fully enclosed underbody paneling for laminar airflow'
    ]
  },
  {
    id: 'rs6',
    name: 'Audi RS6 Avant',
    tagline: 'Audi Sport’s 600 PS Load-Carrying Missile',
    category: 'High-Performance Estate',
    primaryEngineId: '4.0-tfsi-v8-rs',
    availableEngineIds: ['4.0-tfsi-v8-rs'],
    weightKg: 2075,
    dragCoefficient: '0.32 Cd',
    braking100to0DistMeters: 32.9,
    corneringGForce: 1.02,
    powerToWeightRatio: '289.2 PS/tonne',
    sprint0to100: '3.6 seconds',
    topSpeed: '250 km/h (280 km/h with RS Dynamic Package)',
    suspensionType: 'RS Adaptive Air Suspension with quattro Sport Differential',
    aerodynamicHighlights: [
      'Muscular flared wheel arches housing 22-inch wheels while managing turbulent airflow',
      'Functional roof-edge spoiler on the estate tailgate generating rear-axle stability',
      'Massive front air intakes feeding the twin-turbo V8’s intercoolers and RS brake package'
    ]
  },
  {
    id: '911-carrera',
    name: 'Porsche 911 Carrera',
    tagline: 'The Rear-Engine Icon, Reimagined Again',
    category: 'Iconic Sports Coupe',
    primaryEngineId: '3.0-twin-turbo-flat6-carrera',
    availableEngineIds: ['3.0-twin-turbo-flat6-carrera'],
    weightKg: 1505,
    dragCoefficient: '0.28 Cd',
    braking100to0DistMeters: 32.1,
    corneringGForce: 1.02,
    powerToWeightRatio: '255.8 PS/tonne',
    sprint0to100: '4.2 seconds',
    topSpeed: '293 km/h',
    suspensionType: 'Porsche Active Suspension Management (PASM) with Adaptive Damping',
    aerodynamicHighlights: [
      'Rear-mounted flat-6 layout unchanged in concept since 1963, aiding rear-end traction',
      'Active rear spoiler deploying automatically above 90 km/h for added downforce',
      'Smooth, flush underbody paneling for a class-leading 0.28 Cd drag coefficient'
    ]
  },
  {
    id: '718-cayman',
    name: 'Porsche 718 Cayman',
    tagline: 'The Purist’s Mid-Engine Sports Coupe',
    category: 'Mid-Engine Sports Coupe',
    primaryEngineId: '2.0-turbo-flat4-718',
    availableEngineIds: ['2.0-turbo-flat4-718'],
    weightKg: 1400,
    dragCoefficient: '0.29 Cd',
    braking100to0DistMeters: 33.4,
    corneringGForce: 0.98,
    powerToWeightRatio: '214.3 PS/tonne',
    sprint0to100: '4.9 seconds',
    topSpeed: '275 km/h',
    suspensionType: 'MacPherson Strut Front & Rear with PASM Adaptive Damping',
    aerodynamicHighlights: [
      'Mid-engine layout delivering near-perfect 45:55 front-rear weight balance',
      'Automatically extending rear spoiler for added high-speed stability',
      'Low, wide stance with flush glazing minimizing turbulent airflow'
    ]
  },
  {
    id: 'macan',
    name: 'Porsche Macan',
    tagline: 'The Benchmark Compact Luxury SUV',
    category: 'Compact Luxury SUV',
    primaryEngineId: '2.0-turbo-macan',
    availableEngineIds: ['2.0-turbo-macan'],
    weightKg: 1820,
    dragCoefficient: '0.33 Cd',
    braking100to0DistMeters: 35.8,
    corneringGForce: 0.88,
    powerToWeightRatio: '145.6 PS/tonne',
    sprint0to100: '6.2 seconds',
    topSpeed: '232 km/h',
    suspensionType: 'MacPherson Strut Front & Multi-Link Rear with PASM',
    aerodynamicHighlights: [
      'Sculpted roofline and integrated roof spoiler reducing rear-end lift',
      'Active cooling flaps closing at speed to reduce frontal drag',
      'Flush door handles and underbody paneling for a genuinely sporty 0.33 Cd'
    ]
  },
  {
    id: 'cayenne',
    name: 'Porsche Cayenne',
    tagline: 'The Full-Size Luxury SUV with Sports Car DNA',
    category: 'Full-Size Luxury SUV',
    primaryEngineId: '3.0-turbo-v6-cayenne',
    availableEngineIds: ['3.0-turbo-v6-cayenne'],
    weightKg: 1985,
    dragCoefficient: '0.35 Cd',
    braking100to0DistMeters: 36.9,
    corneringGForce: 0.84,
    powerToWeightRatio: '177.8 PS/tonne',
    sprint0to100: '5.9 seconds',
    topSpeed: '245 km/h',
    suspensionType: 'Adaptive Air Suspension with Porsche Traction Management AWD',
    aerodynamicHighlights: [
      'Adaptive air suspension lowering the body at speed to cut frontal drag',
      'Roof-edge spoiler and rear diffuser managing turbulent wake off the tailgate',
      'Active cooling flaps behind the front grille closing when cooling demand is low'
    ]
  },
  {
    id: 'panamera',
    name: 'Porsche Panamera',
    tagline: 'The Grand-Touring Liftback with Sports Sedan Reflexes',
    category: 'Grand-Touring Executive Liftback',
    primaryEngineId: '2.9-twin-turbo-v6-panamera',
    availableEngineIds: ['2.9-twin-turbo-v6-panamera'],
    weightKg: 1895,
    dragCoefficient: '0.30 Cd',
    braking100to0DistMeters: 34.6,
    corneringGForce: 0.90,
    powerToWeightRatio: '174.1 PS/tonne',
    sprint0to100: '5.6 seconds',
    topSpeed: '259 km/h',
    suspensionType: 'Three-Chamber Adaptive Air Suspension Standard',
    aerodynamicHighlights: [
      'Fastback liftback silhouette with a class-leading 0.30 Cd drag coefficient',
      'Active rear spoiler extending and angling automatically above 90 km/h',
      'Three-chamber air suspension lowering ride height for reduced drag at speed'
    ]
  },
  {
    id: '911-gt3',
    name: 'Porsche 911 GT3',
    tagline: 'The Track Purist’s Naturally-Aspirated 911',
    category: 'Naturally-Aspirated Track Weapon',
    primaryEngineId: '4.0-na-flat6-gt3',
    availableEngineIds: ['4.0-na-flat6-gt3'],
    weightKg: 1435,
    dragCoefficient: '0.34 Cd with Functional Downforce',
    braking100to0DistMeters: 30.9,
    corneringGForce: 1.10,
    powerToWeightRatio: '355.4 PS/tonne',
    sprint0to100: '3.4 seconds',
    topSpeed: '318 km/h',
    suspensionType: 'Motorsport-Derived Double-Wishbone Front Axle with Rear-Axle Steering',
    aerodynamicHighlights: [
      'Fixed rear wing lifted directly from the 911 Cup racer generating genuine downforce',
      'Underbody diffuser and front splitter tuned for balanced aero at 9,000 RPM speeds',
      'Titanium sport exhaust and lightweight panels shed weight over the standard Carrera'
    ]
  },
  {
    id: '911-turbo-s',
    name: 'Porsche 911 Turbo S',
    tagline: 'The Everyday Hypercar Hunter',
    category: 'All-Weather Twin-Turbo Flagship',
    primaryEngineId: '3.7-twin-turbo-flat6-turbo-s',
    availableEngineIds: ['3.7-twin-turbo-flat6-turbo-s'],
    weightKg: 1640,
    dragCoefficient: '0.31 Cd',
    braking100to0DistMeters: 29.8,
    corneringGForce: 1.05,
    powerToWeightRatio: '396.3 PS/tonne',
    sprint0to100: '2.7 seconds',
    topSpeed: '330 km/h',
    suspensionType: 'Adaptive Three-Chamber Air Suspension with PASM',
    aerodynamicHighlights: [
      'Widened rear haunches feeding larger intercoolers and improving high-speed stability',
      'Active rear spoiler and front cooling flaps balancing drag against downforce',
      'Porsche Traction Management all-wheel drive putting 800 Nm down with minimal wheelspin'
    ]
  },
  {
    id: 'cayenne-turbo-gt',
    name: 'Porsche Cayenne Turbo GT',
    tagline: 'The SUV That Beat Sports Cars Around the ’Ring',
    category: 'High-Performance Luxury SUV',
    primaryEngineId: '4.0-turbo-v8-cayenne-turbo-gt',
    availableEngineIds: ['4.0-turbo-v8-cayenne-turbo-gt'],
    weightKg: 2200,
    dragCoefficient: '0.36 Cd',
    braking100to0DistMeters: 33.2,
    corneringGForce: 0.99,
    powerToWeightRatio: '290.9 PS/tonne',
    sprint0to100: '3.3 seconds',
    topSpeed: '300 km/h',
    suspensionType: 'Three-Chamber Adaptive Air Suspension with Active Anti-Roll (PDCC)',
    aerodynamicHighlights: [
      'Lowered ride height and a fixed rear roof spoiler for genuine high-speed downforce',
      'Active anti-roll stabilization keeping the body flat through fast corners',
      'Once held the production-SUV Nordschleife lap record at 7:38.9'
    ]
  },
  {
    id: 'huracan',
    name: 'Lamborghini Huracán',
    tagline: 'The Screaming Naturally-Aspirated V10 Icon',
    category: 'Naturally-Aspirated Supercar',
    primaryEngineId: '5.2-v10-huracan',
    availableEngineIds: ['5.2-v10-huracan'],
    weightKg: 1422,
    dragCoefficient: '0.33 Cd',
    braking100to0DistMeters: 31.5,
    corneringGForce: 1.05,
    powerToWeightRatio: '450.1 PS/tonne',
    sprint0to100: '2.9 seconds',
    topSpeed: '325 km/h',
    suspensionType: 'Double-Wishbone Suspension with Magnetorheological Adaptive Damping',
    aerodynamicHighlights: [
      'Sharp-edged wedge silhouette channels air around a mid-mounted naturally-aspirated V10',
      'Rear diffuser and active rear spoiler generate genuine downforce above 130 km/h',
      'Underbody aero cladding smooths airflow for high-speed stability at 300+ km/h'
    ]
  },
  {
    id: 'urus',
    name: 'Lamborghini Urus',
    tagline: 'The Super Sport Utility Vehicle',
    category: 'High-Performance Luxury SUV',
    primaryEngineId: '4.0-twin-turbo-v8-urus',
    availableEngineIds: ['4.0-twin-turbo-v8-urus'],
    weightKg: 2200,
    dragCoefficient: '0.35 Cd',
    braking100to0DistMeters: 33.5,
    corneringGForce: 0.95,
    powerToWeightRatio: '298.6 PS/tonne',
    sprint0to100: '3.6 seconds',
    topSpeed: '305 km/h',
    suspensionType: 'Adaptive Air Suspension with Active Roll Stabilization',
    aerodynamicHighlights: [
      'Coupe-SUV roofline with a functional roof spoiler cutting rear-end lift at speed',
      'Front air intakes feed the twin-turbo V8’s intercoolers while managing brake cooling',
      'Rear diffuser and quad tailpipes shape high-speed rear airflow'
    ]
  },
  {
    id: 'revuelto',
    name: 'Lamborghini Revuelto',
    tagline: 'The 1,015 PS Hybrid V12 Flagship',
    category: 'Hybrid V12 Halo Flagship',
    primaryEngineId: '6.5-hybrid-v12-revuelto',
    availableEngineIds: ['6.5-hybrid-v12-revuelto'],
    weightKg: 1772,
    dragCoefficient: '0.33 Cd',
    braking100to0DistMeters: 29.5,
    corneringGForce: 1.10,
    powerToWeightRatio: '572.8 PS/tonne',
    sprint0to100: '2.5 seconds',
    topSpeed: '350 km/h',
    suspensionType: 'Adaptive Magnetorheological Suspension with Active Rear Wing',
    aerodynamicHighlights: [
      'Active rear wing and underbody venturi tunnels generate genuine downforce at speed',
      'Electric front axle motors free up aero-optimized front splitter geometry',
      'Sharp aero-sculpted flanks feed the hybrid V12’s high-temperature cooling demands'
    ]
  },
  {
    id: 'huracan-sto-perf',
    name: 'Lamborghini Huracán STO',
    tagline: 'The Race Car Homologated for the Road',
    category: 'Naturally-Aspirated Track Weapon / Homologation Special',
    primaryEngineId: '5.2-v10-huracan-sto',
    availableEngineIds: ['5.2-v10-huracan-sto'],
    weightKg: 1339,
    dragCoefficient: '0.36 Cd with Functional Downforce',
    braking100to0DistMeters: 30.1,
    corneringGForce: 1.15,
    powerToWeightRatio: '478.0 PS/tonne',
    sprint0to100: '3.0 seconds',
    topSpeed: '310 km/h',
    suspensionType: 'Motorsport-Derived Magnetorheological Suspension with Rear Anti-Roll Bar',
    aerodynamicHighlights: [
      'Single-piece front clamshell borrowed directly from the Super Trofeo one-make racer',
      'Large, manually adjustable carbon-fibre rear wing tuned using GT3 racing program data',
      'Rear-wheel-drive-only chassis balance for a purer, more communicative aero platform'
    ]
  },
  {
    id: 'continental-gt',
    name: 'Bentley Continental GT',
    tagline: 'The Definitive Grand Tourer',
    category: 'Twin-Turbo W12 Grand Tourer',
    primaryEngineId: '6.0-w12-twin-turbo-continental',
    availableEngineIds: ['6.0-w12-twin-turbo-continental', '6.0-w12-twin-turbo-speed'],
    weightKg: 2244,
    dragCoefficient: '0.35 Cd',
    braking100to0DistMeters: 32.5,
    corneringGForce: 1.00,
    powerToWeightRatio: '293.7 PS/tonne',
    sprint0to100: '3.7 seconds',
    topSpeed: '335 km/h',
    suspensionType: 'Adaptive Air Suspension with Bentley Dynamic Ride',
    aerodynamicHighlights: [
      'Long, low bonnet and fastback silhouette balance drag with genuine four-seat usability',
      'Matrix LED headlights integrate active cooling ducts for the twin-turbo W12',
      'Quad exhaust tailpipes and a subtle rear lip spoiler manage high-speed rear airflow'
    ]
  },
  {
    id: 'bentayga',
    name: 'Bentley Bentayga',
    tagline: 'The Ultimate Luxury SUV',
    category: 'High-Performance Luxury SUV',
    primaryEngineId: '4.0-twin-turbo-v8-bentayga',
    availableEngineIds: ['4.0-twin-turbo-v8-bentayga', '4.0-twin-turbo-v8-speed'],
    weightKg: 2440,
    dragCoefficient: '0.36 Cd',
    braking100to0DistMeters: 34.0,
    corneringGForce: 0.90,
    powerToWeightRatio: '225.4 PS/tonne',
    sprint0to100: '4.5 seconds',
    topSpeed: '290 km/h',
    suspensionType: 'Adaptive Air Suspension with Electronic Anti-Roll Control',
    aerodynamicHighlights: [
      'Upright SUV stance balanced by a sculpted roofline and active rear spoiler',
      'Front air intakes feed the twin-turbo V8’s intercoolers while managing brake cooling',
      'Quad exhaust tailpipes and a rear diffuser shape high-speed rear airflow'
    ]
  },
  {
    id: 'flying-spur',
    name: 'Bentley Flying Spur',
    tagline: 'The Grand Luxury Saloon',
    category: 'Twin-Turbo W12 Luxury Saloon',
    primaryEngineId: '6.0-w12-twin-turbo-continental',
    availableEngineIds: ['6.0-w12-twin-turbo-continental'],
    weightKg: 2437,
    dragCoefficient: '0.34 Cd',
    braking100to0DistMeters: 33.0,
    corneringGForce: 0.95,
    powerToWeightRatio: '270.4 PS/tonne',
    sprint0to100: '4.1 seconds',
    topSpeed: '333 km/h',
    suspensionType: 'Adaptive Air Suspension with Bentley Dynamic Ride',
    aerodynamicHighlights: [
      'Four-door saloon silhouette tuned for effortless high-speed cruising stability',
      'Active all-wheel steering complements a low-drag greenhouse for reduced lift at speed',
      'Chrome waistline finisher and rear lip spoiler manage high-speed rear airflow'
    ]
  },
  {
    id: 'continental-gt-speed-perf',
    name: 'Bentley Continental GT Speed',
    tagline: 'The Most Dynamically Capable Bentley Ever',
    category: 'Twin-Turbo W12 Grand Tourer',
    primaryEngineId: '6.0-w12-twin-turbo-speed',
    availableEngineIds: ['6.0-w12-twin-turbo-speed'],
    weightKg: 2244,
    dragCoefficient: '0.35 Cd',
    braking100to0DistMeters: 32.0,
    corneringGForce: 1.05,
    powerToWeightRatio: '293.7 PS/tonne',
    sprint0to100: '3.7 seconds',
    topSpeed: '335 km/h',
    suspensionType: 'Bentley Dynamic Ride 48-Volt Active Anti-Roll Control',
    aerodynamicHighlights: [
      'Speed-specific front splitter and dark-tint matrix LED headlights',
      'Active all-wheel steering sharpens turn-in despite the car’s considerable weight',
      'Valved sports exhaust tuned for a deeper W12 note at high load'
    ]
  },
  {
    id: 'bentayga-speed-perf',
    name: 'Bentley Bentayga Speed',
    tagline: 'The World’s Fastest Luxury SUV (At Launch)',
    category: 'High-Performance Luxury SUV',
    primaryEngineId: '4.0-twin-turbo-v8-speed',
    availableEngineIds: ['4.0-twin-turbo-v8-speed'],
    weightKg: 2395,
    dragCoefficient: '0.35 Cd',
    braking100to0DistMeters: 33.5,
    corneringGForce: 0.98,
    powerToWeightRatio: '229.6 PS/tonne',
    sprint0to100: '4.4 seconds',
    topSpeed: '306 km/h',
    suspensionType: 'Adaptive Air Suspension with Bentley Dynamic Ride',
    aerodynamicHighlights: [
      'Carbon-fibre-effect front splitter and 22-inch forged wheels reduce unsprung mass',
      'Active all-wheel steering for both tight city turns and high-speed stability',
      'Sports exhaust with quad tailpipes tuned for a sharper V8 note'
    ]
  }
];
