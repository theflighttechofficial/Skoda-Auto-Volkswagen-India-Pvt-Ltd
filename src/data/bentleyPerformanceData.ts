import { RSModelData } from './rsPerformanceData';

export interface BentleyPerformanceModelData extends RSModelData {
  heritageOrigin?: string;
  tuningCulture?: string;
  notSoldInIndia?: boolean;
}

export const BENTLEY_GT_MODELS: BentleyPerformanceModelData[] = [
  {
    id: 'continental-gt-speed-perf',
    name: 'Bentley Continental GT Speed',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Bentley_Continental_GT_Speed_%283rd_gen.%29_IMG_0014.jpg',
    badge: 'The Most Dynamically Capable Bentley Ever',
    tagline: '659 PS twin-turbo W12, active all-wheel steering and torque vectoring by braking for a grand tourer that corners like a sports car.',
    category: 'Twin-Turbo W12 Grand Tourer',
    expectedPrice: '₹5.00 – ₹5.20 Crore',
    priceNumeric: 50000000,
    engine: '6.0L Twin-Turbo W12',
    power: '659 PS (485 kW) @ 6,000 RPM',
    powerHp: 659,
    torque: '900 Nm @ 1,350–4,500 RPM',
    torqueNm: 900,
    acceleration0to100: '3.7 Seconds',
    accelSeconds: 3.7,
    topSpeed: '335 km/h',
    topSpeedKmh: 335,
    transmission: '8-Speed Dual-Clutch',
    drivetrain: 'Permanent All-Wheel Drive',
    diffOrAwd: 'Electronic Rear Differential + Torque Vectoring by Braking',
    exhaustSystem: 'Valved Sports Exhaust with W12 Note',
    brakes: '420 mm Front Carbon-Ceramic Discs with 10-Piston Calipers',
    suspension: 'Bentley Dynamic Ride 48-Volt Active Anti-Roll Control',
    boostPsi: 18.5,
    revLimit: 6100,
    tractionType: 'Permanent AWD',
    bootAndSeating: '4 Seats • 358L Boot',
    keyWeaponSummary: 'A hand-built twin-turbo W12 delivers 659 PS and 900 Nm with near-silent low-RPM refinement, while Bentley Dynamic Ride’s 48-volt active anti-roll bars keep the two-tonne coupe flat through corners.',
    heroColorHex: '#00332f',
    heroColorName: 'British Racing Green',
    heritageOrigin: 'Crewe, England (Continental GT production line)',
    tuningCulture: 'The most dynamically focused Continental GT variant, tuned by Bentley’s in-house engineering team',
    colors: [
      { name: 'British Racing Green', hex: '#00332f', desc: 'The Speed’s signature deep green with silver accents.' },
      { name: 'Silver Lake', hex: '#c0c0c0', desc: 'Understated chrome-effect silver with dark-tint trim.' },
      { name: 'Beluga Black', hex: '#0b0b0c', desc: 'Blackout Speed presence with contrasting red brake calipers.' },
      { name: 'Glacier White', hex: '#eef1f2', desc: 'Clean grand-touring white with carbon-fibre front splitter.' }
    ],
    weaponry: [
      {
        title: 'Hand-Built Twin-Turbo W12',
        description: 'A 6.0L twin-turbo W12, unique to Bentley among current Volkswagen Group products, delivers 659 PS with locomotive-like torque from just 1,350 RPM.',
        badge: 'Signature Powertrain',
        icon: 'Zap'
      },
      {
        title: 'Bentley Dynamic Ride',
        description: '48-volt electric actuators on each anti-roll bar counteract body roll almost instantly, letting the two-tonne coupe corner flat while staying supple over rough roads.',
        badge: 'Active Chassis',
        icon: 'ShieldCheck'
      },
      {
        title: 'Active All-Wheel Steering',
        description: 'Turns the rear wheels opposite the front at low speed for a tighter turning circle, and in-phase at high speed for extra high-speed stability.',
        badge: 'Precision Handling',
        icon: 'Flame'
      },
      {
        title: 'Torque Vectoring by Braking',
        description: 'Selectively brakes the inside wheels through corners to sharpen turn-in response, disguising the car’s considerable weight on a twisty road.',
        badge: '0–100 km/h: 3.7s',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Alcantara-trimmed sports seats with embroidered wings badge',
      'Bentley Rotating Display dashboard with Speed-specific graphics',
      'Carbon-fibre fascia trim throughout',
      'Naim for Bentley premium sound system available',
      'Alcantara-wrapped steering wheel with drive-mode paddle'
    ],
    trackTelemetry: {
      lateralG: '1.05 G (on Pirelli P Zero tyres)',
      weightDistribution: '55% Front / 45% Rear',
      powerToWeight: '294 PS / Tonne',
      braking100to0: '32.0 Metres',
      nurburgringLegacy: '7:33.0 Nordschleife Lap Benchmark (Manufacturer Claim)'
    }
  },
  {
    id: 'bentayga-speed-perf',
    name: 'Bentley Bentayga Speed',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Bentley_Bentayga_%28FL%29_Azure_1X7A7439.jpg',
    badge: 'The World’s Fastest Luxury SUV (At Launch)',
    tagline: '550 PS twin-turbo V8 in a five-seat SUV body with active all-wheel steering and genuine off-road capability.',
    category: 'High-Performance Luxury SUV',
    expectedPrice: '₹5.60 – ₹5.80 Crore',
    priceNumeric: 56000000,
    engine: '4.0L Twin-Turbo V8 (Speed Tune)',
    power: '550 PS (404 kW) @ 6,000 RPM',
    powerHp: 550,
    torque: '770 Nm @ 2,000–4,500 RPM',
    torqueNm: 770,
    acceleration0to100: '4.4 Seconds',
    accelSeconds: 4.4,
    topSpeed: '306 km/h',
    topSpeedKmh: 306,
    transmission: '8-Speed Automatic with Launch Control',
    drivetrain: 'Permanent All-Wheel Drive',
    diffOrAwd: 'Active All-Wheel Steering + Torque Vectoring AWD',
    exhaustSystem: 'Sports Exhaust with Quad Tailpipes',
    brakes: '440 mm Front Carbon-Ceramic Discs with 10-Piston Calipers',
    suspension: 'Adaptive Air Suspension with Bentley Dynamic Ride',
    boostPsi: 21.0,
    revLimit: 6800,
    tractionType: 'Permanent AWD',
    bootAndSeating: '5 Seats • 484L Boot',
    keyWeaponSummary: 'A 550 PS twin-turbo V8, sharper Speed-tune throttle mapping and active all-wheel steering let the Bentayga Speed out-corner and out-accelerate the standard Bentayga while retaining genuine off-road ability.',
    heroColorHex: '#c0c0c0',
    heroColorName: 'Silver Lake',
    heritageOrigin: 'Crewe, England (Bentayga production line)',
    tuningCulture: 'Bentley’s range-topping Bentayga trim, benchmarked against SUV rivals for lap-time bragging rights',
    colors: [
      { name: 'Silver Lake', hex: '#c0c0c0', desc: 'The Speed’s signature chrome-effect silver with black accents.' },
      { name: 'British Racing Green', hex: '#00332f', desc: 'Deep heritage green with contrasting Speed badging.' },
      { name: 'Beluga Black', hex: '#0b0b0c', desc: 'Blackout Speed presence with carbon-fibre body panels.' },
      { name: 'Glacier White', hex: '#eef1f2', desc: 'Clean luxury white with black 22-inch forged wheels.' }
    ],
    weaponry: [
      {
        title: 'Speed-Tuned Twin-Turbo V8',
        description: 'A retuned version of the Bentayga’s twin-turbo V8 sharpens throttle response for the range-topping Speed variant, without sacrificing everyday drivability.',
        badge: 'Sharper Response',
        icon: 'Zap'
      },
      {
        title: 'Active All-Wheel Steering',
        description: 'Turns the rear wheels for both a tighter city turning circle and added high-speed stability, unusual capability in this SUV segment.',
        badge: 'Precision Handling',
        icon: 'ShieldCheck'
      },
      {
        title: 'Off-Road Drive Mode',
        description: 'A dedicated Off-Road setting within Bentley Drive Dynamics retunes the AWD system and raises the air suspension for genuine light off-roading.',
        badge: 'All-Terrain',
        icon: 'Flame'
      },
      {
        title: 'Bentley Dynamic Ride',
        description: '48-volt active anti-roll control keeps the tall SUV body flat through corners while preserving ride comfort on broken roads.',
        badge: '0–100 km/h: 4.4s',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Alcantara-trimmed sports seats with embroidered wings badge',
      'Carbon-fibre interior trim throughout',
      'Naim for Bentley premium sound system available',
      'Digital instrument cluster with a dedicated Speed telemetry screen',
      'Diamond-quilted leather upholstery'
    ],
    trackTelemetry: {
      lateralG: '0.98 G (on Pirelli P Zero tyres)',
      weightDistribution: '52% Front / 48% Rear',
      powerToWeight: '223 PS / Tonne',
      braking100to0: '33.5 Metres',
      nurburgringLegacy: 'Fastest SUV Lap Benchmark at Launch, Nardo Ring'
    }
  }
];
