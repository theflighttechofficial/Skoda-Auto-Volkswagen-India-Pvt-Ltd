import { RSModelData } from './rsPerformanceData';

export interface LamborghiniPerformanceModelData extends RSModelData {
  heritageOrigin?: string;
  tuningCulture?: string;
  notSoldInIndia?: boolean;
}

export const LAMBORGHINI_GT_MODELS: LamborghiniPerformanceModelData[] = [
  {
    id: 'huracan-sto-perf',
    name: 'Lamborghini Huracán STO',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Lamborghini_Huracan_STO_1X7A0297.jpg',
    badge: 'The Race Car Homologated for the Road',
    tagline: '640 PS naturally-aspirated V10 revving to 8,500 RPM, a single-piece front clamshell, and a chassis lifted straight from the Super Trofeo racer.',
    category: 'Naturally-Aspirated Track Weapon / Homologation Special',
    expectedPrice: '₹4.10 – ₹4.20 Crore',
    priceNumeric: 41000000,
    engine: '5.2L Naturally-Aspirated V10 (Motorsport-Derived)',
    power: '640 PS (470 kW) @ 8,000 RPM',
    powerHp: 640,
    torque: '565 Nm @ 6,500 RPM',
    torqueNm: 565,
    acceleration0to100: '3.0 Seconds',
    accelSeconds: 3.0,
    topSpeed: '310 km/h',
    topSpeedKmh: 310,
    transmission: '7-Speed LDF Dual-Clutch',
    drivetrain: 'Rear-Wheel Drive Only',
    diffOrAwd: 'Electronically Controlled Rear Limited-Slip Differential',
    exhaustSystem: 'Titanium Sport Exhaust with Motorsport-Tuned V10 Wail',
    brakes: '390 mm Front Carbon-Ceramic Discs (CCM-R) with 6-Piston Calipers',
    suspension: 'Motorsport-Derived Magnetorheological Suspension with Rear Anti-Roll Bar',
    boostPsi: 0,
    revLimit: 8500,
    tractionType: 'RWD Only',
    bootAndSeating: '2 Seats • 150L Front Boot',
    keyWeaponSummary: 'A naturally-aspirated V10 that revs to 8,500 RPM with zero turbo lag, paired with a single-piece front clamshell and rear-wheel-drive-only setup lifted directly from the Super Trofeo racer.',
    heroColorHex: '#16a34a',
    heroColorName: 'Verde Mantis',
    heritageOrigin: 'Sant’Agata Bolognese, Italy (STO nameplate derived from Super Trofeo Omologata)',
    tuningCulture: 'A road-legal homologation of Lamborghini’s one-make racing series machinery',
    colors: [
      { name: 'Verde Mantis', hex: '#16a34a', desc: 'The STO’s signature track-day green with black centre-lock wheels.' },
      { name: 'Giallo Inti', hex: '#f5c400', desc: 'High-visibility racing yellow with black STO livery graphics.' },
      { name: 'Nero Noctis', hex: '#0a0a0a', desc: 'Stealth blackout presence with red brake calipers.' },
      { name: 'Bianco Icarus', hex: '#f4f4f5', desc: 'Clean motorsport white with contrasting carbon-fibre wing.' }
    ],
    weaponry: [
      {
        title: 'Naturally-Aspirated 8,500 RPM V10',
        description: 'Derived from the Huracán GT3 race engine, this atmospheric V10 delivers instant throttle response with zero turbo lag, revving to a screaming 8,500 RPM redline.',
        badge: 'Motorsport DNA',
        icon: 'Zap'
      },
      {
        title: 'Single-Piece Front Clamshell',
        description: 'A one-piece front bonnet and fenders assembly, borrowed directly from the Super Trofeo one-make racer, saves weight and speeds pit-lane bodywork changes.',
        badge: 'Race-Derived',
        icon: 'ShieldCheck'
      },
      {
        title: 'Rear-Wheel Drive Only',
        description: 'Unlike most Huracán variants, the STO drops all-wheel drive entirely for a purer, more communicative rear-drive chassis balance.',
        badge: 'Surgical Control',
        icon: 'Flame'
      },
      {
        title: 'Fixed Motorsport Rear Wing',
        description: 'A large, manually adjustable carbon-fibre rear wing generates significant downforce, tuned using data from Lamborghini’s GT3 racing program.',
        badge: '0–100 km/h: 3.0s',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Full carbon-fibre racing bucket seats standard',
      'Alcantara-wrapped steering wheel with a yellow 12 o’clock marker',
      'Roll-cage pre-installation available from the factory',
      'Digital instrument cluster with a dedicated Track Screen mode',
      'Six-point harness pre-installation available from the factory'
    ],
    trackTelemetry: {
      lateralG: '1.15 G (on Bridgestone Potenza Race tyres)',
      weightDistribution: '40% Front / 60% Rear',
      powerToWeight: '469 PS / Tonne',
      braking100to0: '30.1 Metres',
      nurburgringLegacy: '6:56.5 Nordschleife Lap Benchmark'
    }
  },
  {
    id: 'revuelto-perf',
    name: 'Lamborghini Revuelto',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Lamborghini_Revuelto_DSC_6987.jpg',
    badge: 'The 1,015 PS Hybrid Flagship',
    tagline: 'A naturally-aspirated V12 fused with three electric motors for all-wheel drive and a 2.5-second sprint to 100 km/h.',
    category: 'Hybrid V12 Halo Flagship',
    expectedPrice: '₹8.90 – ₹9.50 Crore',
    priceNumeric: 89000000,
    engine: '6.5L Naturally-Aspirated V12 + Tri-Motor Hybrid',
    power: '1,015 PS (747 kW) Combined @ 9,250 RPM',
    powerHp: 1015,
    torque: '725 Nm (ICE) + Electric Motor Torque',
    torqueNm: 725,
    acceleration0to100: '2.5 Seconds',
    accelSeconds: 2.5,
    topSpeed: '350 km/h',
    topSpeedKmh: 350,
    transmission: '8-Speed Dual-Clutch (Longitudinal) with Launch Control',
    drivetrain: 'Electric Front Axle + V12 Rear-Wheel Drive (Combined AWD)',
    diffOrAwd: 'Torque-Vectoring Electric Front Axle',
    exhaustSystem: 'Titanium Exhaust with Naturally-Aspirated V12 Wail',
    brakes: '410 mm Front Carbon-Ceramic Discs with 6-Piston Calipers',
    suspension: 'Adaptive Magnetorheological Suspension with Active Rear Wing',
    boostPsi: 0,
    revLimit: 9500,
    tractionType: 'Hybrid Torque-Vectoring AWD',
    bootAndSeating: '2 Seats • 124L Front Boot',
    keyWeaponSummary: 'A screaming naturally-aspirated V12 combined with three electric motors delivers 1,015 PS combined and true torque-vectoring all-wheel drive for a 2.5-second sprint to 100 km/h.',
    heroColorHex: '#f5c400',
    heroColorName: 'Giallo Inti',
    heritageOrigin: 'Sant’Agata Bolognese, Italy (First all-new V12 platform since the Aventador)',
    tuningCulture: 'Lamborghini’s first series-production plug-in hybrid, replacing the Aventador as flagship',
    colors: [
      { name: 'Giallo Inti', hex: '#f5c400', desc: 'The Revuelto’s signature launch-color yellow with black accents.' },
      { name: 'Nero Noctis', hex: '#0a0a0a', desc: 'Blackout flagship presence with exposed carbon-fibre panels.' },
      { name: 'Verde Citrea', hex: '#16a34a', desc: 'A bright hybrid-era green highlighting the model’s new tri-motor tech.' },
      { name: 'Arancio Xanto', hex: '#ea580c', desc: 'Bold orange with contrasting carbon-fibre engine cover.' }
    ],
    weaponry: [
      {
        title: 'Naturally-Aspirated 9,500 RPM V12',
        description: 'An all-new naturally-aspirated V12, lighter and more powerful than the outgoing Aventador’s unit, revving to a screaming 9,500 RPM redline.',
        badge: 'Motorsport DNA',
        icon: 'Zap'
      },
      {
        title: 'Tri-Motor Hybrid System',
        description: 'Two electric motors on the front axle plus one integrated into the transmission deliver instant torque-fill and true torque-vectoring all-wheel drive.',
        badge: 'Hybrid Power',
        icon: 'ShieldCheck'
      },
      {
        title: 'Città Full-Electric Mode',
        description: 'A dedicated electric-only mode allows silent, zero-emission short-range city driving before the V12 wakes up for open-road performance.',
        badge: 'EV City Mode',
        icon: 'Flame'
      },
      {
        title: 'Active Rear Wing & Diffuser',
        description: 'Electronically adjustable aerodynamic elements switch between low-drag and high-downforce configurations automatically based on speed and driving mode.',
        badge: '0–100 km/h: 2.5s',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Full carbon-fibre bucket seats with Alcantara inserts',
      'Dual 8.4-inch and 12.3-inch digital cockpit displays',
      'Hybrid power-flow readout showing electric and V12 torque split',
      'Carbon-fibre interior trim throughout',
      'Bang & Olufsen premium sound system available'
    ],
    trackTelemetry: {
      lateralG: '1.10 G (on Bridgestone Potenza Sport tyres)',
      weightDistribution: '43% Front / 57% Rear',
      powerToWeight: '470 PS / Tonne',
      braking100to0: '29.0 Metres',
      nurburgringLegacy: '6:49.9 Nordschleife Lap Benchmark (Manufacturer Claim)'
    }
  },
  {
    id: 'urus-performante-perf',
    name: 'Lamborghini Urus Performante',
    image: '/cars/lamborghini-urus.webp',
    badge: 'The Super SUV Off-Road Weapon',
    tagline: '657 PS twin-turbo V8 in a lightened SUV body that set the fastest SUV lap of Pikes Peak.',
    category: 'High-Performance Luxury SUV',
    expectedPrice: '₹4.45 – ₹4.60 Crore',
    priceNumeric: 44500000,
    engine: '4.0L Twin-Turbo V8',
    power: '657 PS (483 kW) @ 6,000 RPM',
    powerHp: 657,
    torque: '850 Nm @ 2,300–4,500 RPM',
    torqueNm: 850,
    acceleration0to100: '3.3 Seconds',
    accelSeconds: 3.3,
    topSpeed: '306 km/h',
    topSpeedKmh: 306,
    transmission: '8-Speed Automatic with Launch Control',
    drivetrain: 'Permanent All-Wheel Drive',
    diffOrAwd: 'Rear Self-Locking Differential + Torque Vectoring AWD',
    exhaustSystem: 'Akrapovič Titanium Sport Exhaust with Quad Tailpipes',
    brakes: '440 mm Front Carbon-Ceramic Discs with 10-Piston Calipers',
    suspension: 'Fixed-Rate Suspension Tuned for Track and Rally Use',
    boostPsi: 21.5,
    revLimit: 6800,
    tractionType: 'Permanent AWD',
    bootAndSeating: '5 Seats • 616L Boot',
    keyWeaponSummary: 'A 657 PS twin-turbo V8 and 47 kg weight reduction let the Urus Performante out-corner and out-accelerate its already formidable Urus S sibling on both tarmac and gravel.',
    heroColorHex: '#0a0a0a',
    heroColorName: 'Nero Noctis',
    heritageOrigin: 'Sant’Agata Bolognese, Italy (Urus production line)',
    tuningCulture: 'Set a record-setting timed run up the Pikes Peak International Hill Climb',
    colors: [
      { name: 'Nero Noctis', hex: '#0a0a0a', desc: 'Blackout Performante presence with carbon-fibre body panels.' },
      { name: 'Giallo Inti', hex: '#f5c400', desc: 'High-visibility yellow with black Performante accents.' },
      { name: 'Grigio Keres', hex: '#52525b', desc: 'Matte-effect grey with contrasting carbon-fibre roof.' },
      { name: 'Verde Mantis', hex: '#16a34a', desc: 'Track-inspired green with black 22-inch forged wheels.' }
    ],
    weaponry: [
      {
        title: 'Weight-Reduced Carbon-Fibre Body Panels',
        description: 'Carbon-fibre bonnet, roof and front splitter shed 47 kg versus the Urus S, sharpening throttle response and cornering agility.',
        badge: 'Lightweight',
        icon: 'Zap'
      },
      {
        title: 'Akrapovič Titanium Exhaust',
        description: 'A retuned titanium exhaust system saves weight and delivers a deeper, more motorsport-inflected V8 note than the standard Urus.',
        badge: 'Race-Derived',
        icon: 'ShieldCheck'
      },
      {
        title: 'Rally Off-Road Driving Mode',
        description: 'A dedicated Rally mode loosens stability control and retunes the AWD system for loose-surface driving, unique among rivals in this segment.',
        badge: 'All-Terrain',
        icon: 'Flame'
      },
      {
        title: 'Torque-Vectoring AWD',
        description: 'Continuously shifts power across the front and rear axles for both track-day cornering grip and rally-stage traction.',
        badge: '0–100 km/h: 3.3s',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Alcantara sport seats with carbon-fibre backrests',
      'Titanium gear-shift paddles',
      'Carbon-fibre interior trim throughout',
      'Digital instrument cluster with a dedicated Rally telemetry screen',
      'Bang & Olufsen premium sound system available'
    ],
    trackTelemetry: {
      lateralG: '1.02 G (on Pirelli P Zero Corsa tyres)',
      weightDistribution: '53% Front / 47% Rear',
      powerToWeight: '295 PS / Tonne',
      braking100to0: '31.5 Metres',
      nurburgringLegacy: 'Fastest SUV Timed Run, Pikes Peak International Hill Climb'
    }
  }
];
