import { RSModelData } from './rsPerformanceData';

export interface PorschePerformanceModelData extends RSModelData {
  heritageOrigin?: string;
  tuningCulture?: string;
  notSoldInIndia?: boolean;
}

export const PORSCHE_GT_MODELS: PorschePerformanceModelData[] = [
  {
    id: '911-gt3',
    name: 'Porsche 911 GT3',
    badge: 'The Track Purist’s 911',
    tagline: '510 PS naturally-aspirated flat-6 revving to 9,000 RPM, double-wishbone front suspension, and a fixed rear wing lifted straight from the Cup racer.',
    category: 'Naturally-Aspirated Track Weapon / Homologation Special',
    expectedPrice: '₹2.50 – ₹2.75 Crore',
    priceNumeric: 25000000,
    engine: '4.0L Naturally-Aspirated Flat-6 (Motorsport-Derived)',
    power: '510 PS (375 kW) @ 8,400 RPM',
    powerHp: 510,
    torque: '470 Nm @ 6,100 RPM',
    torqueNm: 470,
    acceleration0to100: '3.4 Seconds',
    accelSeconds: 3.4,
    topSpeed: '318 km/h',
    topSpeedKmh: 318,
    transmission: '7-Speed PDK Dual-Clutch (6-Speed Manual Available)',
    drivetrain: 'Rear-Wheel Drive with Rear Axle Steering',
    diffOrAwd: 'Fully Variable Rear-Axle Limited-Slip Differential',
    exhaustSystem: 'Titanium Sport Exhaust with Motorsport-Tuned Flat-6 Wail',
    brakes: '408 mm Front Carbon-Ceramic Discs (PCCB) with 6-Piston Calipers',
    suspension: 'Motorsport-Derived Double-Wishbone Front Axle, Helper Springs Rear',
    boostPsi: 0,
    revLimit: 9000,
    tractionType: 'RWD + Rear-Axle Steering',
    bootAndSeating: '2+2 Seats • 132L Front Boot',
    keyWeaponSummary: 'A naturally-aspirated flat-6 that revs to 9,000 RPM with zero turbo lag, paired with double-wishbone front suspension and rear-axle steering lifted directly from the 911 Cup racer.',
    heroColorHex: '#facc15',
    heroColorName: 'Racing Yellow',
    heritageOrigin: 'Weissach Development Centre, Germany (GT3 nameplate since 1999)',
    tuningCulture: 'The benchmark naturally-aspirated track car every rival GT department is measured against',
    colors: [
      { name: 'Racing Yellow', hex: '#facc15', desc: 'The GT3’s signature track-day yellow with black centre-lock wheels.' },
      { name: 'Carrara White Metallic', hex: '#f4f4f5', desc: 'Classic motorsport white with contrasting black GT3 wing.' },
      { name: 'GT Silver Metallic', hex: '#9ca3af', desc: 'Heritage 1970s GT silver finish.' },
      { name: 'Jet Black Metallic', hex: '#0a0a0a', desc: 'Stealth blackout presence with red brake calipers.' }
    ],
    weaponry: [
      {
        title: 'Naturally-Aspirated 9,000 RPM Flat-6',
        description: 'Derived from the 911 RSR race engine, this atmospheric flat-6 delivers instant throttle response with zero turbo lag, revving to a screaming 9,000 RPM redline.',
        badge: 'Motorsport DNA',
        icon: 'Zap'
      },
      {
        title: 'Double-Wishbone Front Suspension',
        description: 'The first road-going 911 to use a double-wishbone front axle instead of MacPherson struts, borrowed directly from the 911 RSR race car for sharper turn-in.',
        badge: 'Race-Derived',
        icon: 'ShieldCheck'
      },
      {
        title: 'Rear-Axle Steering',
        description: 'Turns the rear wheels opposite the fronts at low speed for agility, and in-phase at high speed for stability through fast corners.',
        badge: 'Surgical Control',
        icon: 'Flame'
      },
      {
        title: 'Fixed Swan-Neck Rear Wing',
        description: 'Mounted on swan-neck supports borrowed from the GT3 Cup racer, generating significant downforce without disturbing airflow beneath the wing.',
        badge: '0–100 km/h: 3.4s',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Full bucket carbon-fibre racing seats standard',
      'GT Sport steering wheel with a yellow 12 o’clock marker',
      'Roll cage delete option for track-day weight saving',
      'Chronograph-style analog tachometer center dial',
      'Six-point harness pre-installation available from the factory'
    ],
    trackTelemetry: {
      lateralG: '1.10 G (on Michelin Pilot Sport Cup 2 tyres)',
      weightDistribution: '39% Front / 61% Rear',
      powerToWeight: '346 PS / Tonne',
      braking100to0: '30.9 Metres',
      nurburgringLegacy: '6:59.9 Nordschleife Lap Benchmark'
    }
  },
  {
    id: '911-turbo-s',
    name: 'Porsche 911 Turbo S',
    badge: 'The Everyday Hypercar Hunter',
    tagline: '650 PS twin-turbo flat-6, all-wheel drive launch control, and a 2.7-second sprint to 100 km/h that embarrasses cars costing twice as much.',
    category: 'All-Weather Twin-Turbo Flagship',
    expectedPrice: '₹3.20 – ₹3.45 Crore',
    priceNumeric: 32000000,
    engine: '3.7L Twin-Turbo Flat-6',
    power: '650 PS (478 kW) @ 6,750 RPM',
    powerHp: 650,
    torque: '800 Nm @ 2,300–4,000 RPM',
    torqueNm: 800,
    acceleration0to100: '2.7 Seconds',
    accelSeconds: 2.7,
    topSpeed: '330 km/h',
    topSpeedKmh: 330,
    transmission: '8-Speed PDK Dual-Clutch with Launch Control',
    drivetrain: 'Porsche Traction Management All-Wheel Drive',
    diffOrAwd: 'Map-Controlled Electronically Variable AWD',
    exhaustSystem: 'Sport Exhaust with Twin Centre-Mounted Tailpipes',
    brakes: '420 mm Front Carbon-Ceramic Discs (PCCB) with 10-Piston Calipers',
    suspension: 'Adaptive Three-Chamber Air Suspension with PASM',
    boostPsi: 24.5,
    revLimit: 7200,
    tractionType: 'PTM All-Wheel Drive',
    bootAndSeating: '2+2 Seats • 132L Front Boot',
    keyWeaponSummary: 'Variable-vane twin turbochargers and Porsche Traction Management all-wheel drive combine for a 2.7-second sprint to 100 km/h that few cars at any price can match.',
    heroColorHex: '#0a0a0a',
    heroColorName: 'Jet Black Metallic',
    heritageOrigin: 'Zuffenhausen, Germany (Turbo nameplate since the 930 of 1975)',
    tuningCulture: 'The road-legal flagship that proved all-wheel drive could still feel like a 911',
    colors: [
      { name: 'Jet Black Metallic', hex: '#0a0a0a', desc: 'Menacing blackout presence with turbo-specific wide-body flares.' },
      { name: 'Carrara White Metallic', hex: '#f4f4f5', desc: 'Clinical white contrasting the black turbo intakes.' },
      { name: 'GT Silver Metallic', hex: '#9ca3af', desc: 'Heritage silver with polished turbo air intake trim.' },
      { name: 'Guards Red', hex: '#c1121f', desc: 'Signature Porsche red with black turbo side intakes.' }
    ],
    weaponry: [
      {
        title: 'Variable Turbine Geometry Twin Turbos',
        description: 'Electronically adjustable turbine vanes optimize exhaust flow across the rev range, virtually eliminating lag despite the engine’s massive 800 Nm output.',
        badge: 'Zero Lag',
        icon: 'Zap'
      },
      {
        title: 'Porsche Traction Management (PTM)',
        description: 'A map-controlled AWD system shifts torque between axles in milliseconds, giving the Turbo S all-weather confidence without dulling its rear-engine character.',
        badge: 'All-Weather AWD',
        icon: 'ShieldCheck'
      },
      {
        title: 'Launch Control with Dynamic Boost',
        description: 'Pre-loads boost pressure against the brake before releasing both clutches simultaneously, catapulting the Turbo S to 100 km/h in 2.7 seconds.',
        badge: '0–100 km/h: 2.7s',
        icon: 'Gauge'
      },
      {
        title: 'Active Aerodynamics',
        description: 'A rear wing and front spoiler extend automatically at speed, switching between low-drag and high-downforce modes without driver input.',
        badge: 'Adaptive Aero',
        icon: 'Flame'
      }
    ],
    cockpitFeatures: [
      'Bose Surround Sound System standard',
      '14-way adaptive sport seats with memory function',
      'Turbo-specific brushed aluminum interior trim',
      'Porsche Communication Management with real-time traffic',
      'Night Vision Assist with thermal-imaging camera available'
    ],
    trackTelemetry: {
      lateralG: '1.05 G (on Pirelli P Zero tyres)',
      weightDistribution: '38% Front / 62% Rear',
      powerToWeight: '325 PS / Tonne',
      braking100to0: '29.8 Metres',
      nurburgringLegacy: '7:20.0 Nordschleife Lap Benchmark'
    }
  },
  {
    id: 'cayenne-turbo-gt',
    name: 'Porsche Cayenne Turbo GT',
    badge: 'The SUV That Beat Sports Cars Around the ’Ring',
    tagline: '640 PS twin-turbo V8 in a full-size SUV body that once set the production-SUV Nordschleife lap record.',
    category: 'High-Performance Luxury SUV',
    expectedPrice: '₹2.05 – ₹2.30 Crore',
    priceNumeric: 20500000,
    engine: '4.0L Twin-Turbo V8',
    power: '640 PS (471 kW) @ 6,000 RPM',
    powerHp: 640,
    torque: '850 Nm @ 2,300–4,500 RPM',
    torqueNm: 850,
    acceleration0to100: '3.3 Seconds',
    accelSeconds: 3.3,
    topSpeed: '300 km/h',
    topSpeedKmh: 300,
    transmission: '8-Speed Tiptronic S Automatic with Launch Control',
    drivetrain: 'Porsche Traction Management All-Wheel Drive',
    diffOrAwd: 'Electronically Controlled Rear Differential Lock + PTM AWD',
    exhaustSystem: 'Sport Exhaust with Quad Tailpipes',
    brakes: '420 mm Front Carbon-Ceramic Discs (PCCB) with 10-Piston Calipers',
    suspension: 'Three-Chamber Adaptive Air Suspension with Active Anti-Roll (PDCC)',
    boostPsi: 22.0,
    revLimit: 6800,
    tractionType: 'PTM All-Wheel Drive',
    bootAndSeating: '5 Seats • 772L Boot',
    keyWeaponSummary: 'A 640 PS twin-turbo V8 and active anti-roll stabilization let the Cayenne Turbo GT corner flatter than most sports cars, once holding the production-SUV Nordschleife lap record.',
    heroColorHex: '#c1121f',
    heroColorName: 'Guards Red',
    heritageOrigin: 'Leipzig, Germany (Cayenne production plant)',
    tuningCulture: 'Once held the fastest production-SUV lap of the Nürburgring Nordschleife',
    colors: [
      { name: 'Guards Red', hex: '#c1121f', desc: 'Signature Porsche performance red with black GT accents.' },
      { name: 'Jet Black Metallic', hex: '#0a0a0a', desc: 'Blackout GT presence with contrasting red brake calipers.' },
      { name: 'Carrara White Metallic', hex: '#f4f4f5', desc: 'Clean white with a carbon-fibre roof panel.' },
      { name: 'GT Silver Metallic', hex: '#9ca3af', desc: 'Heritage GT silver with black 22-inch wheels.' }
    ],
    weaponry: [
      {
        title: 'Porsche Dynamic Chassis Control (PDCC)',
        description: 'Electromechanical active anti-roll bars counteract body lean in real time, letting a 2.2-tonne SUV corner as flat as a sports sedan.',
        badge: 'Flat Cornering',
        icon: 'ShieldCheck'
      },
      {
        title: 'Twin-Turbo V8 with Dry-Sump Lubrication',
        description: 'A dry-sump oiling system, shared with the 911 Turbo family, keeps the V8 fed with oil under sustained high-G cornering loads.',
        badge: 'Track Endurance',
        icon: 'Zap'
      },
      {
        title: 'Rear-Axle Steering',
        description: 'Improves low-speed maneuverability in city parking and high-speed stability on the highway, turning opposite or in-phase with the front wheels.',
        badge: 'Surgical Control',
        icon: 'Flame'
      },
      {
        title: 'Nordschleife-Tuned Chassis',
        description: 'Developed and lap-timed at the Nürburgring, where the Cayenne Turbo GT once set the production-SUV lap record.',
        badge: '0–100 km/h: 3.3s',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'GT-specific sports seats with carbon-fibre backrests',
      'Race-Tex (suede-effect) steering wheel and gear selector',
      'Bose Surround Sound System standard',
      'Rear headroom slightly reduced by the sportier GT roofline',
      'Digital instrument cluster with a dedicated Track Screen mode'
    ],
    trackTelemetry: {
      lateralG: '0.98 G (on Pirelli P Zero Corsa tyres)',
      weightDistribution: '54% Front / 46% Rear',
      powerToWeight: '287 PS / Tonne',
      braking100to0: '32.1 Metres',
      nurburgringLegacy: '7:38.9 Nordschleife Lap Benchmark (Former Production-SUV Record)'
    }
  }
];
