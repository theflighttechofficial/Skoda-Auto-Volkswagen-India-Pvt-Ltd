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
      'Acoustic acoustic-laminated double glazing cuts wind noise by 4.5 dB'
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
    primaryEngineId: '2.0-tsi',
    availableEngineIds: ['2.0-tsi'],
    weightKg: 1795,
    dragCoefficient: '0.30 Cd',
    braking100to0DistMeters: 37.0,
    corneringGForce: 0.88,
    powerToWeightRatio: '105.8 PS/tonne',
    sprint0to100: '8.1 seconds',
    topSpeed: '210 km/h',
    suspensionType: 'DCC Pro Adaptive Dampers with 4MOTION All-Wheel Drive',
    aerodynamicHighlights: [
      'Illuminated LED lightbar integrated into an aero-optimized front fascia',
      'Underfloor aerodynamic panelling smoothing airflow around the 3-row cabin',
      'Roof-mounted aero spoiler reducing wake turbulence over the tailgate'
    ]
  }
];
