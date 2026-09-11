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
  }
];
