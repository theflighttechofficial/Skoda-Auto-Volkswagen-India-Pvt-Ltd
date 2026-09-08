import { RSModelData } from './rsPerformanceData';

export interface VWPerformanceModelData extends RSModelData {
  heritageOrigin?: string;
  tuningCulture?: string;
}

export const VW_GT_MODELS: VWPerformanceModelData[] = [
  {
    id: 'octavia-vrs' as any, // Golf GTI
    name: 'Volkswagen Golf GTI',
    badge: 'The Original Hot Hatch Legend',
    tagline: '265 PS EA888 EVO4 engine, VAQ mechanical limited-slip differential, Clark tartan seats, and Nürburgring heritage.',
    category: 'Track-Ready Hot Hatch / CBU Icon',
    expectedPrice: '₹45.00 – ₹49.00 Lakh (CBU)',
    priceNumeric: 4500000,
    engine: '2.0L TSI EA888 EVO4 Turbocharged Petrol',
    power: '265 PS (195 kW) @ 5,300–6,500 RPM',
    powerHp: 265,
    torque: '370 Nm @ 1,600–4,300 RPM',
    torqueNm: 370,
    acceleration0to100: '5.9 Seconds',
    accelSeconds: 5.9,
    topSpeed: '250 km/h (Governed)',
    topSpeedKmh: 250,
    transmission: '7-Speed Wet-Clutch DSG (DQ381) with Paddle Shifters',
    drivetrain: 'Front-Wheel Drive with VAQ Mechanical Differential Lock',
    diffOrAwd: 'VAQ Electronically Controlled Mechanical Multi-Plate Diff Lock',
    exhaustSystem: 'GTI Dual Chrome Outlets with Overrun Acoustics & Crackles',
    brakes: '357 mm Front Ventilated Discs with Red 2-Piston Calipers',
    suspension: 'Sports Lowered (-15mm) with DCC 15-Stage Adaptive Damping',
    boostPsi: 21.8,
    revLimit: 6800,
    heroColorHex: '#991b1b',
    heroColorName: 'Kings Red Metallic',
    heritageOrigin: 'Wolfsburg, Germany (First GTI debuted in 1976)',
    tuningCulture: 'The world benchmark for hot-hatch tuning across 8 generations',
    colors: [
      { name: 'Kings Red Metallic', hex: '#991b1b', desc: 'Signature GTI racing red with honeycomb contrasting accents.' },
      { name: 'Moonstone Grey', hex: '#64748b', desc: 'Non-metallic motorsport grey, favored on Nürburgring track days.' },
      { name: 'Deep Black Pearl', hex: '#0a0a0a', desc: 'Sinister blackout presence with gleaming red GTI fender badges.' },
      { name: 'Pure White', hex: '#f8fafc', desc: 'Classic contrast white highlighting the red bumper stripe.' }
    ],
    weaponry: [
      {
        title: 'VAQ Mechanical Limited-Slip Differential',
        description: 'Transfers up to 100% of torque to the outside wheel in high-speed apexes, pulling the car inward and completely eliminating understeer.',
        badge: 'Cornering Miracle',
        icon: 'ShieldCheck'
      },
      {
        title: 'EA888 EVO4 265 PS Powerhouse',
        description: 'Direct and indirect dual fuel injection, sodium-filled exhaust valves, and 350-bar rail pressure deliver immediate power with zero turbo lag.',
        badge: 'Motorsport Proven',
        icon: 'Zap'
      },
      {
        title: 'Progressive Steering (2.1 Turns Lock-to-Lock)',
        description: 'Variable rack tooth spacing provides calm center response on expressways and razor-sharp kart-like agility in hairpins.',
        badge: 'Surgical Control',
        icon: 'Flame'
      },
      {
        title: 'Launch Control with Sound Symposer',
        description: 'Spools turbo boost to 4,000 RPM against the brake before snapping the wet clutches shut for sub-6-second sprints.',
        badge: '0–100 km/h: 5.9s',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Iconic "Clark" Tartan pattern bucket sports seats with integrated head restraints',
      'GTI sports leather steering wheel with touch-sensitive haptic control islands',
      '10.25-inch Digital Cockpit Pro with GTI-exclusive central circular tachometer',
      'Stainless steel pedal cluster with clutch/brake/throttle grip pattern',
      '30-color ambient interior illumination synchronized to Drive Mode'
    ],
    trackTelemetry: {
      lateralG: '1.04 G (on 19-inch Bridgestone Potenza Sport)',
      weightDistribution: '61% Front / 39% Rear',
      powerToWeight: '185.3 PS / Tonne',
      braking100to0: '33.8 Metres',
      nurburgringLegacy: '8:07.78 Nordschleife Lap Benchmark'
    }
  },
  {
    id: 'kodiaq-vrs' as any, // Virtus GT Plus Sport
    name: 'Volkswagen Virtus GT Plus',
    badge: 'The Indian Sedan Speed King',
    tagline: '150 PS EA211 EVO engine, 7-Speed DSG, 0-100 in 8.6s, and laser-welded German precision.',
    category: 'Performance Sports Sedan',
    expectedPrice: '₹17.88 – ₹19.41 Lakh',
    priceNumeric: 1788000,
    engine: '1.5L TSI EVO Turbo-Petrol with ACT',
    power: '150 PS (110 kW) @ 5,000–6,000 RPM',
    powerHp: 150,
    torque: '250 Nm @ 1,600–3,500 RPM',
    torqueNm: 250,
    acceleration0to100: '8.6 Seconds',
    accelSeconds: 8.6,
    topSpeed: '207 km/h',
    topSpeedKmh: 207,
    transmission: '7-Speed DSG (DQ200) with Paddle Shifters',
    drivetrain: 'Front-Wheel Drive with Electronic Differential Lock (EDL)',
    diffOrAwd: 'EDL + Anti-Slip Regulation (ASR)',
    exhaustSystem: 'Tuned Sports Exhaust Note with Twin Tailpipe Garnish',
    brakes: 'Front Ventilated Discs with Red GT Brake Calipers',
    suspension: 'Euro-Tuned MacPherson Strut & Rear Torsion Beam with Stiffened Anti-Roll Bar',
    boostPsi: 18.5,
    revLimit: 6500,
    heroColorHex: '#1e3a8a',
    heroColorName: 'Rising Blue Metallic',
    heritageOrigin: 'Engineered on MQB-A0-IN at Pune & Chakan Technical Center',
    tuningCulture: 'The fastest-accelerating sedan under ₹25 Lakh in India',
    colors: [
      { name: 'Rising Blue Metallic', hex: '#1e3a8a', desc: 'Vibrant German electric blue with gloss-black contrast roof.' },
      { name: 'Wild Cherry Red', hex: '#8b0000', desc: 'Classic sports red with blacked-out alloy wheels and red calipers.' },
      { name: 'Carbon Steel Grey', hex: '#4b5563', desc: 'Industrial gunmetal finish favored by motorsport enthusiasts.' },
      { name: 'Deep Black Pearl', hex: '#111827', desc: 'Black Edition sinister stance with darkened chrome.' }
    ],
    weaponry: [
      {
        title: 'Active Cylinder Technology (ACT)',
        description: 'Shuts off 2 cylinders during steady cruising, allowing 20+ km/l expressway fuel economy while keeping 250 Nm ready for overtakes.',
        badge: 'Dual Personality',
        icon: 'Zap'
      },
      {
        title: '7-Speed DSG Dual-Clutch Transmission',
        description: 'Pre-selects gears in just 40 milliseconds for seamless acceleration without torque interruption.',
        badge: 'Sub-40ms Shifts',
        icon: 'Activity'
      },
      {
        title: 'Laser-Welded Continuous Roof Architecture',
        description: 'Zero rubber mouldings on roof line. Continuous laser fusion gives 35% higher torsional rigidity than spot-welded rivals.',
        badge: 'Structural Fortress',
        icon: 'ShieldCheck'
      },
      {
        title: 'Gloss Black Aero Package & Red Calipers',
        description: 'Aero trunk-lip spoiler, gloss black roof, blackened ORVMs, and bright red painted front brake calipers.',
        badge: 'GT Aesthetics',
        icon: 'Flame'
      }
    ],
    cockpitFeatures: [
      'Sport bucket seats embossed with red GT signature stitching',
      'Aluminium foot pedals with textured rubber grip studs',
      'Red ambient laser-glow illumination along the entire dashboard',
      '10.1-inch VW Play infotainment with performance telemetry readout',
      '8-inch Digital Cockpit with customizable sports dial interfaces'
    ],
    trackTelemetry: {
      lateralG: '0.92 G',
      weightDistribution: '60% Front / 40% Rear',
      powerToWeight: '118.1 PS / Tonne',
      braking100to0: '38.2 Metres',
      nurburgringLegacy: 'Tested across 1.5 Million Km in Extreme Indian & German Conditions'
    }
  }
];

export const GTI_HERITAGE = [
  {
    year: '1976',
    title: 'Golf GTI Mk1: The Hot Hatch Is Born',
    desc: 'Covertly created by six rogue VW engineers at Wolfsburg; 110 PS Bosch K-Jetronic engine with golf-ball gear knob and tartan seats.'
  },
  {
    year: '1986',
    title: 'Golf GTI 16V Mk2: DOHC Revolution',
    desc: '139 PS 16-valve engine with quad round headlamps; dominates German touring and European rally stages.'
  },
  {
    year: '2004',
    title: 'Golf GTI Mk5: The Turbo DSG Era',
    desc: 'Introduced 2.0 TFSI direct-injection turbo and lightning-fast DSG dual-clutch transmission to hot hatches.'
  },
  {
    year: '2013',
    title: 'Polo GT TSI In India: Cult Legend',
    desc: 'Brought 1.2 TSI and 7-Speed DSG to Indian petrolheads, becoming the undisputed tuning king of the country.'
  },
  {
    year: '2024+',
    title: 'Golf GTI Mk8 & Virtus GT Plus',
    desc: '265 PS EA888 EVO4 with VAQ mechanical diff alongside India’s favorite 150 PS Virtus GT Plus Sport.'
  }
];
