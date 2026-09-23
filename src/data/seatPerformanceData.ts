import { RSModelData } from './rsPerformanceData';

export interface SeatPerformanceModelData extends RSModelData {
  heritageOrigin?: string;
  tuningCulture?: string;
  notSoldInIndia?: boolean;
}

export const SEAT_GT_MODELS: SeatPerformanceModelData[] = [
  {
    id: 'leon-cupra-perf',
    name: 'SEAT Leon Cupra',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Cupra_Leon_Mk4_IMG_0037.jpg',
    badge: 'The Last SEAT-Badged Hot Hatch',
    tagline: '300 PS 2.0 TSI shared with the Golf R and Audi S3 — the final flagship before Cupra spun off as its own brand in 2021. Not sold in India.',
    category: 'Turbo-Petrol Hot Hatch',
    expectedPrice: 'Not Available in India (Global Reference: ~€36,000 – €40,000)',
    priceNumeric: 36000000,
    engine: '2.0L TSI Turbo-Petrol (Cupra Tune)',
    power: '300 PS (221 kW) @ 5,450–6,500 RPM',
    powerHp: 300,
    torque: '400 Nm @ 2,000–5,450 RPM',
    torqueNm: 400,
    acceleration0to100: '5.7 Seconds',
    accelSeconds: 5.7,
    topSpeed: '250 km/h (limited)',
    topSpeedKmh: 250,
    transmission: '7-Speed DSG Automatic',
    drivetrain: 'Front-Wheel Drive (Optional 4Drive AWD)',
    diffOrAwd: 'Optional 4Drive All-Wheel Drive with VAQ Electronic Differential Lock',
    exhaustSystem: 'Sports Exhaust with Dual Oval Tailpipes',
    brakes: '340 mm Front Discs with Brembo Calipers (Optional)',
    suspension: 'Adaptive DCC Dampers with Cupra-Specific Tuning',
    boostPsi: 20.0,
    revLimit: 6800,
    tractionType: 'FWD / Optional 4Drive AWD',
    bootAndSeating: '5 Seats • 380L Boot',
    keyWeaponSummary: 'A 300 PS 2.0 TSI shared with the Volkswagen Golf R and Audi S3, wrapped in SEAT’s sharpest-handling FR-derived chassis — the last hot hatch to wear a SEAT badge before Cupra became independent in 2021. Not sold in India; shown as a global reference performance model only.',
    heroColorHex: '#8a5a3b',
    heroColorName: 'Cupra Copper',
    heritageOrigin: 'Martorell, Spain (Leon production line)',
    tuningCulture: 'The final and most powerful SEAT-badged Cupra, benchmarked directly against Group hot-hatch siblings',
    colors: [
      { name: 'Cupra Copper', hex: '#8a5a3b', desc: 'The Cupra’s signature copper accent finish on black bodywork.' },
      { name: 'Midnight Black', hex: '#0c0c0c', desc: 'Blackout Cupra presence with copper brake calipers.' },
      { name: 'Desire Red', hex: '#c8102e', desc: 'SEAT’s signature red with contrasting black roof.' },
      { name: 'Nevada White', hex: '#f2f2f0', desc: 'Clean hot-hatch white with copper Cupra badging.' }
    ],
    weaponry: [
      {
        title: 'Shared EA888 2.0 TSI Architecture',
        description: 'The same fundamental turbo-four architecture found in the Volkswagen Golf R and Audi S3, tuned by SEAT to deliver 300 PS and 400 Nm.',
        badge: 'Group-Shared Powertrain',
        icon: 'Zap'
      },
      {
        title: 'Optional 4Drive All-Wheel Drive',
        description: 'A Haldex-based all-wheel-drive system with a VAQ electronic front differential lock, available on the Leon Cupra 4Drive for maximum traction out of corners.',
        badge: 'Traction Control',
        icon: 'ShieldCheck'
      },
      {
        title: 'Adaptive DCC Dampers',
        description: 'Dynamic Chassis Control dampers, tuned specifically for Cupra, adjust damping in milliseconds between comfort and track-focused settings.',
        badge: 'Active Chassis',
        icon: 'Flame'
      },
      {
        title: 'Cupra Bucket Seats',
        description: 'Deeply bolstered sports seats with copper accent stitching hold occupants firmly through the Leon Cupra’s sharpest corners.',
        badge: '0–100 km/h: 5.7s',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Cupra bucket seats with copper accent stitching',
      'Cupra-specific Digital Cockpit instrument theme',
      'Flat-bottom sports steering wheel with copper stitching',
      '10-inch central touchscreen infotainment',
      'Drive Profile selector with a dedicated Cupra mode'
    ],
    trackTelemetry: {
      lateralG: '0.97 G (on Bridgestone Potenza tyres)',
      weightDistribution: '62% Front / 38% Rear',
      powerToWeight: '204 PS / Tonne',
      braking100to0: '34.2 Metres',
      nurburgringLegacy: 'Never Officially Timed at the Nürburgring Nordschleife'
    }
  },
  {
    id: 'ibiza-cupra-perf',
    name: 'SEAT Ibiza Cupra',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/2018_SEAT_Ibiza_SE_Technology_MPi_1.0_Front.jpg',
    badge: 'The Cupra Badge’s 1996 Birthplace',
    tagline: 'The original Cupra-badged hot hatch that started SEAT’s 25-year in-house performance tradition in 1996. Not sold in India.',
    category: 'Turbo-Petrol Hot Hatch (Heritage)',
    expectedPrice: 'Not Available in India (Historical European Reference)',
    priceNumeric: 24000000,
    engine: '1.8L Turbo-Petrol',
    power: '210 PS (154 kW) @ 5,700 RPM',
    powerHp: 210,
    torque: '280 Nm @ 2,200–5,000 RPM',
    torqueNm: 280,
    acceleration0to100: '6.6 Seconds',
    accelSeconds: 6.6,
    topSpeed: '235 km/h',
    topSpeedKmh: 235,
    transmission: '6-Speed Manual',
    drivetrain: 'Front-Wheel Drive',
    diffOrAwd: 'Front-Wheel Drive with Limited-Slip Differential',
    exhaustSystem: 'Twin Sports Exhaust Tailpipes',
    brakes: '312 mm Front Discs with Sports Calipers',
    suspension: 'Sport-Tuned Coilover Suspension',
    boostPsi: 15.0,
    revLimit: 6800,
    tractionType: 'FWD',
    bootAndSeating: '5 Seats • 292L Boot',
    keyWeaponSummary: 'The car that introduced the Cupra performance badge in 1996, launching a 25-year in-house hot-hatch tradition that culminated in the 300 PS Leon Cupra. Not sold in India; shown as heritage reference content only.',
    heroColorHex: '#c8102e',
    heroColorName: 'Desire Red',
    heritageOrigin: 'Martorell, Spain',
    tuningCulture: 'The first-ever Cupra-badged SEAT, launching a 25-year in-house performance lineage',
    colors: [
      { name: 'Desire Red', hex: '#c8102e', desc: 'SEAT’s signature Cupra-era red.' },
      { name: 'Nevada White', hex: '#f2f2f0', desc: 'Clean hot-hatch white livery.' },
      { name: 'Midnight Black', hex: '#0c0c0c', desc: 'Blackout heritage Cupra presence.' }
    ],
    weaponry: [
      {
        title: 'The Original Cupra Badge',
        description: 'Introduced the "Cupra" (Cup Racing) nameplate in 1996, beginning SEAT’s 25-year in-house performance division.',
        badge: 'Heritage First',
        icon: 'Flame'
      },
      {
        title: '1.8L Turbo-Petrol',
        description: 'A 210 PS turbocharged four-cylinder, potent for its era and years ahead of mainstream hot-hatch rivals.',
        badge: 'Group-Era Powertrain',
        icon: 'Zap'
      },
      {
        title: 'Limited-Slip Differential',
        description: 'A mechanical limited-slip differential helped put power down cleanly out of corners, unusual for a supermini-based hatch at the time.',
        badge: 'Traction Control',
        icon: 'ShieldCheck'
      },
      {
        title: 'Sport-Tuned Coilovers',
        description: 'Stiffer, lowered suspension distinguished the Cupra from the standard Ibiza, setting the template for every FR/Cupra trim since.',
        badge: '0–100 km/h: 6.6s',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Cupra-embroidered sports bucket seats',
      'Leather-wrapped sports steering wheel',
      'Analogue boost gauge',
      'Cupra badging on dashboard and gear knob',
      'Heritage reference cabin, not available in India'
    ],
    trackTelemetry: {
      lateralG: '0.88 G (period-correct tyres)',
      weightDistribution: '63% Front / 37% Rear',
      powerToWeight: '175 PS / Tonne',
      braking100to0: '38.9 Metres',
      nurburgringLegacy: 'Never Officially Timed at the Nürburgring Nordschleife'
    }
  }
];
