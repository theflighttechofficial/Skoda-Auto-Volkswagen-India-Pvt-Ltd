import { RSModelData, RivalVehicle, ModelRivalComparison } from './rsPerformanceData';

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
    tractionType: 'VAQ E-Diff',
    bootAndSeating: '5 Seats • 374L–1,230L Hatchback',
    keyWeaponSummary: 'Electro-mechanical VAQ multi-plate LSD transfers up to 100% of torque to the outside wheel in high-speed apexes, eliminating understeer.',
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
    tractionType: 'FWD + EDL',
    bootAndSeating: '5 Seats • 521L Sedan Boot',
    keyWeaponSummary: 'Sub-40ms 7-speed DSG dual-clutch shifts and a laser-welded MQB-A0-IN body shell deliver segment-leading rigidity and razor-sharp overtaking response.',
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
  },
  {
    id: 'polo-gti',
    name: 'Volkswagen Polo GTI',
    badge: 'The Pocket-Rocket Hot Hatch',
    tagline: '207 PS EA888 turbo-four squeezed into Volkswagen\'s lightest, smallest, most flickable GTI body.',
    category: 'Compact Hot Hatch / CBU Icon',
    expectedPrice: '₹33.00 – ₹35.50 Lakh (CBU)',
    priceNumeric: 3300000,
    engine: '2.0L TSI EA888 Turbocharged Petrol (Polo GTI Tune)',
    power: '207 PS (152 kW) @ 4,400–6,000 RPM',
    powerHp: 207,
    torque: '320 Nm @ 1,500–4,400 RPM',
    torqueNm: 320,
    acceleration0to100: '6.5 Seconds',
    accelSeconds: 6.5,
    topSpeed: '237 km/h (Governed)',
    topSpeedKmh: 237,
    transmission: '7-Speed DSG Dual-Clutch with Launch Control',
    drivetrain: 'Front-Wheel Drive with Progressive Sport Steering',
    diffOrAwd: 'XDS Electronic Differential Lock via Brake Vectoring',
    exhaustSystem: 'GTI Dual Chrome Outlets with Overrun Acoustics',
    brakes: '312 mm Front Ventilated Discs with Red 2-Piston Calipers',
    suspension: 'Sport Select Adaptive Chassis with Sport, Individual & Comfort Profiles',
    boostPsi: 19.5,
    revLimit: 6500,
    tractionType: 'XDS E-Diff',
    bootAndSeating: '5 Seats • 351L Hatchback Boot',
    keyWeaponSummary: 'The lightest body in the entire GTI family means every one of its 207 horses has less mass to shift, translating raw power into pure go-kart agility.',
    heroColorHex: '#991b1b',
    heroColorName: 'Kings Red Metallic',
    heritageOrigin: 'Wolfsburg, Germany (Polo GTI first launched in 1998)',
    tuningCulture: 'Spiritual successor to India\'s Polo GT TSI, the car that built the country\'s hot-hatch tuning scene',
    colors: [
      { name: 'Kings Red Metallic', hex: '#991b1b', desc: 'Signature GTI racing red with honeycomb contrasting accents.' },
      { name: 'Pure White', hex: '#f8fafc', desc: 'Classic contrast white highlighting the red bumper stripe.' },
      { name: 'Deep Black Pearl', hex: '#0a0a0a', desc: 'Sinister blackout presence with gleaming red GTI badges.' },
      { name: 'Reflex Silver', hex: '#cbd5e1', desc: 'Understated metallic finish favored by daily-driven track-day cars.' }
    ],
    weaponry: [
      {
        title: 'Featherweight GTI Chassis',
        description: 'At barely over 1,300 kg, the Polo GTI carries the least mass of any car in the GTI family, turning every one of its 207 PS into immediate, tossable agility.',
        badge: 'Best Power-to-Weight',
        icon: 'Gauge'
      },
      {
        title: 'EA888 207 PS Turbo-Four',
        description: 'The same globally-proven EA888 architecture as the Golf GTI, tuned down slightly to suit the Polo\'s compact chassis without sacrificing mid-range punch.',
        badge: '320 Nm Torque Plateau',
        icon: 'Zap'
      },
      {
        title: 'Sport Select Adaptive Chassis',
        description: 'Electronically controlled dampers switch between plush Comfort and track-focused Sport modes, tuned specifically for the Polo\'s shorter wheelbase.',
        badge: 'Split Personality',
        icon: 'Activity'
      },
      {
        title: 'XDS Electronic Diff Lock',
        description: 'Brake-based torque vectoring brakes the inside front wheel mid-corner, mimicking a mechanical limited-slip differential without the added unsprung weight.',
        badge: 'Corner Sharpener',
        icon: 'Flame'
      }
    ],
    cockpitFeatures: [
      'Iconic "Clark" Tartan pattern bucket sports seats with integrated head restraints',
      'GTI sports leather steering wheel with flat-bottom grip',
      'Digital Cockpit Pro with GTI-exclusive central circular tachometer',
      'Honeycomb-pattern GTI door sill plates and pedal cluster',
      'Red ambient interior illumination synchronized to Sport mode'
    ],
    trackTelemetry: {
      lateralG: '1.01 G (on 18-inch Brescia alloys)',
      weightDistribution: '63% Front / 37% Rear',
      powerToWeight: '158.5 PS / Tonne',
      braking100to0: '35.1 Metres',
      nurburgringLegacy: 'Nordschleife-tested sibling chassis tune to the Golf GTI, scaled for the shorter Polo wheelbase'
    }
  },
  {
    id: 'jetta-gli',
    name: 'Volkswagen Jetta GLI',
    badge: 'The Sedan-Shaped GTI',
    tagline: '228 PS EA888 sports-sedan tune, GLI-firmed suspension, and 510L of boot space for a genuine daily track-day weapon.',
    category: 'Performance Sports Sedan / CBU Icon',
    expectedPrice: '₹39.50 – ₹42.50 Lakh (CBU)',
    priceNumeric: 3950000,
    engine: '2.0L TSI EA888 Turbocharged Petrol (Jetta GLI Tune)',
    power: '228 PS (168 kW) @ 5,000–6,200 RPM',
    powerHp: 228,
    torque: '350 Nm @ 1,600–4,300 RPM',
    torqueNm: 350,
    acceleration0to100: '6.3 Seconds',
    accelSeconds: 6.3,
    topSpeed: '240 km/h (Governed)',
    topSpeedKmh: 240,
    transmission: '7-Speed DSG Dual-Clutch with Launch Control',
    drivetrain: 'Front-Wheel Drive with GLI-Tuned Front Differential Lock',
    diffOrAwd: 'Electronic Differential Lock (EDL) with GLI Sport Calibration',
    exhaustSystem: 'GLI Dual Chrome Outlets with Overrun Acoustics',
    brakes: '340 mm Front Ventilated Discs with Red 2-Piston Calipers',
    suspension: 'GLI-Specific Firmer Springs & Dampers with Stiffened Anti-Roll Bar',
    boostPsi: 20.5,
    revLimit: 6600,
    tractionType: 'GLI E-Diff',
    bootAndSeating: '5 Seats • 510L Sedan Boot',
    keyWeaponSummary: 'The GLI badge has meant "GTI in a sedan suit" since 1983 — 228 PS, a firmed-up chassis, and a proper boot deep enough for a full set of track wheels.',
    heroColorHex: '#991b1b',
    heroColorName: 'Kings Red Metallic',
    heritageOrigin: 'Wolfsburg, Germany (GLI nameplate debuted on the Mk1 Jetta in 1983)',
    tuningCulture: 'Volkswagen\'s longest-running sports sedan badge, prized for combining GTI pace with genuine three-box practicality',
    colors: [
      { name: 'Kings Red Metallic', hex: '#991b1b', desc: 'Signature GLI racing red with dark chrome contrasting accents.' },
      { name: 'Pure White', hex: '#f8fafc', desc: 'Clean contrast white highlighting the red brake calipers.' },
      { name: 'Deep Black Pearl', hex: '#0a0a0a', desc: 'Understated executive stance with red GLI badges.' },
      { name: 'Platinum Grey Metallic', hex: '#52525b', desc: 'Business-casual grey favored by daily-driven sleeper builds.' }
    ],
    weaponry: [
      {
        title: 'GLI-Tuned Firmer Chassis',
        description: 'Springs, dampers, and anti-roll bars stiffened beyond the standard Jetta setup, sharpening turn-in without destroying everyday ride comfort.',
        badge: 'Sedan Sharpener',
        icon: 'Activity'
      },
      {
        title: 'EA888 228 PS Turbo-Four',
        description: 'The highest state of tune of the EA888 in the Jetta lineup, using the same architecture that powers the Golf GTI and Polo GTI.',
        badge: '350 Nm Torque Plateau',
        icon: 'Zap'
      },
      {
        title: 'GLI-Calibrated Electronic Diff Lock',
        description: 'Braking-based torque vectoring specifically remapped for the Jetta\'s longer wheelbase, taming understeer under hard corner exit throttle.',
        badge: 'Corner Sharpener',
        icon: 'Flame'
      },
      {
        title: '510-Litre Track-Day Boot',
        description: 'The largest boot of any car in the GTI performance family — room for a full toolkit, spare wheels, and a track-day tyre set without a roof box.',
        badge: 'Practicality Weapon',
        icon: 'Luggage'
      }
    ],
    cockpitFeatures: [
      'Iconic "Clark" Tartan pattern bucket sports seats with integrated head restraints',
      'GLI sports leather steering wheel with flat-bottom grip and red stitching',
      'Digital Cockpit Pro with red-backlit GLI-exclusive sport gauge cluster',
      'Dark chrome honeycomb door sill plates and aluminium pedal cluster',
      'Red ambient interior illumination synchronized to Sport mode'
    ],
    trackTelemetry: {
      lateralG: '0.98 G (on 18-inch Richmond alloys)',
      weightDistribution: '60% Front / 40% Rear',
      powerToWeight: '160.6 PS / Tonne',
      braking100to0: '34.5 Metres',
      nurburgringLegacy: 'Chassis tune developed alongside the Golf GTI at the Nürburgring Nordschleife test track'
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
    year: '1983',
    title: 'Jetta GLI Mk1: "GTI in a Suit"',
    desc: 'Volkswagen badges a three-box Jetta with GTI running gear as the GLI — Gran Luxe Injection — birthing the world\'s longest-running sports sedan nameplate.'
  },
  {
    year: '1998',
    title: 'Polo GTI Mk3: The Pocket-Rocket Arrives',
    desc: 'Volkswagen shrinks GTI DNA into its smallest hatchback body, proving hot-hatch thrills don\'t need a big footprint.'
  },
  {
    year: '2013',
    title: 'Polo GT TSI In India: Cult Legend',
    desc: 'Brought 1.2 TSI and 7-Speed DSG to Indian petrolheads, becoming the undisputed tuning king of the country.'
  },
  {
    year: '2024+',
    title: 'Golf GTI Mk8, Polo GTI, Jetta GLI & Virtus GT Plus',
    desc: '265 PS EA888 EVO4 Golf GTI and 207 PS Polo GTI hot hatches, alongside the 228 PS Jetta GLI sports sedan and India\'s favorite 150 PS Virtus GT Plus Sport.'
  }
];

export const VW_RIVAL_COMPARISONS: ModelRivalComparison[] = [
  {
    skodaModelId: 'octavia-vrs',
    skodaModelName: 'Volkswagen Golf GTI',
    heroPitch: 'Why the Golf GTI remains the definitive hot-hatch benchmark against premium hatchbacks and performance-sedan rivals in India.',
    rivals: [
      {
        id: 'mini-cooper-s',
        name: 'MINI Cooper S 5-Door JCW Inspired',
        brand: 'MINI',
        category: 'Premium Hot Hatchback',
        price: '₹42.50 – ₹44.90 Lakh',
        priceNumericLakh: 43.5,
        engine: '2.0L TwinPower Turbo Petrol',
        powerHp: 178,
        torqueNm: 280,
        accelSeconds: 6.8,
        topSpeedKmh: 235,
        transmission: '7-Speed Steptronic Dual-Clutch',
        drivetrain: 'Front-Wheel Drive (FWD)',
        differentialTech: 'Electronic Diff Lock Control (EDLC) via braking',
        seatingAndBoot: '4 Seats • 278L Boot',
        fuelEconomy: '13.5 km/l',
        keyStrengths: ['Go-kart handling heritage', 'Iconic circular infotainment design', 'Premium British badge appeal'],
        vrsAdvantage: 'Golf GTI delivers +87 PS more power, a genuine mechanical VAQ limited-slip differential instead of brake-based torque vectoring, and considerably more rear-seat and boot space for a similar CBU price.',
        verdict: 'The Golf GTI out-guns the Cooper S JCW Inspired in every performance metric while offering far greater everyday practicality.'
      },
      {
        id: 'mercedes-a35-gti',
        name: 'Mercedes-Benz A35 AMG 4MATIC',
        brand: 'Mercedes-AMG',
        category: 'Hot Hatch / Compact Performance',
        price: '₹58.00 – ₹61.00 Lakh',
        priceNumericLakh: 59.5,
        engine: '2.0L AMG Turbo Petrol',
        powerHp: 306,
        torqueNm: 400,
        accelSeconds: 4.8,
        topSpeedKmh: 250,
        transmission: '8-Speed AMG Speedshift DCT',
        drivetrain: 'All-Wheel Drive (4MATIC)',
        differentialTech: 'Electro-mechanical rear multi-plate clutch',
        seatingAndBoot: '5 Seats (Cramped rear legroom) • 420L Boot',
        fuelEconomy: '12.2 km/l',
        keyStrengths: ['Sub-5 second 0-100 sprint', 'Affalterbach exhaust crackles', 'MBUX dual screen cockpit'],
        vrsAdvantage: 'The A35 AMG is quicker outright, but its stiff track-tuned ride is punishing on Indian roads. Golf GTI counters with DCC adaptive damping across 15 levels, a roomier cabin, and costs roughly ₹13–15 Lakh less.',
        verdict: 'For everyday livability and value at a lower price point, the Golf GTI is the more usable hot hatch on Indian roads.'
      },
      {
        id: 'skoda-octavia-vrs-gti',
        name: 'Škoda Octavia vRS',
        brand: 'Škoda',
        category: 'Hot Liftback / Performance Saloon',
        price: '₹42.00 – ₹45.00 Lakh',
        priceNumericLakh: 43.5,
        engine: '2.0L TSI EA888 EVO4 Turbocharged Petrol',
        powerHp: 265,
        torqueNm: 370,
        accelSeconds: 6.4,
        topSpeedKmh: 250,
        transmission: '7-Speed DSG Dual-Clutch',
        drivetrain: 'Front-Wheel Drive with VAQ Electro-Mechanical LSD',
        differentialTech: 'VAQ Front Limited-Slip Differential',
        seatingAndBoot: '5 Seats • 600L–1,555L Liftback',
        fuelEconomy: '13.5 km/l',
        keyStrengths: ['Shared VAQ differential and EA888 architecture', 'Cavernous 600L liftback boot', 'Near-identical CBU price point'],
        vrsAdvantage: 'Sibling models from the same VW Group EA888 platform: the Golf GTI is the sharper, more compact hot-hatch driving experience, while the Octavia vRS trades some agility for vastly more practical liftback cargo space.',
        verdict: 'A genuine group cross-shop: choose the Golf GTI for pure hot-hatch thrills, or the Octavia vRS if boot space matters more.'
      },
      {
        id: 'hyundai-i20-nline',
        name: 'Hyundai i20 N Line',
        brand: 'Hyundai',
        category: 'Compact Sporty Hatchback',
        price: '₹10.20 – ₹12.55 Lakh',
        priceNumericLakh: 11.4,
        engine: '1.0L Turbo GDi Petrol',
        powerHp: 120,
        torqueNm: 172,
        accelSeconds: 9.9,
        topSpeedKmh: 182,
        transmission: '7-Speed DCT',
        drivetrain: 'Front-Wheel Drive (FWD)',
        differentialTech: 'Open Differential with Electronic Stability Control',
        seatingAndBoot: '5 Seats • 311L Boot',
        fuelEconomy: '18.2 km/l',
        keyStrengths: ['Budget-friendly sporty styling', 'Segment-first ADAS on a hatchback', 'Excellent fuel efficiency'],
        vrsAdvantage: 'Golf GTI packs more than double the power, a mechanical limited-slip differential, and genuine Nürburgring-honed dynamics that the i20 N Line, a value-oriented sporty hatch, cannot match.',
        verdict: 'The i20 N Line is a value pick for sporty looks, but the Golf GTI belongs in an entirely different performance tier.'
      }
    ]
  },
  {
    skodaModelId: 'kodiaq-vrs',
    skodaModelName: 'Volkswagen Virtus GT Plus',
    heroPitch: 'Why the Virtus GT Plus is the quickest-accelerating sedan under ₹20 Lakh in India, outrunning both mainstream rivals and its own segment norms.',
    rivals: [
      {
        id: 'hyundai-verna-turbo',
        name: 'Hyundai Verna Turbo GDi',
        brand: 'Hyundai',
        category: 'Midsize Sedan',
        price: '₹13.20 – ₹17.75 Lakh',
        priceNumericLakh: 15.5,
        engine: '1.5L Turbo GDi Petrol',
        powerHp: 160,
        torqueNm: 253,
        accelSeconds: 8.0,
        topSpeedKmh: 210,
        transmission: '7-Speed DCT / 6-Speed iMT',
        drivetrain: 'Front-Wheel Drive (FWD)',
        differentialTech: 'Open Differential with Vehicle Stability Management',
        seatingAndBoot: '5 Seats • 528L Boot',
        fuelEconomy: '19.8 km/l',
        keyStrengths: ['Segment-leading ADAS Level 2 suite', 'Bold sedan-coupe styling', 'Slightly quicker 0-100 sprint'],
        vrsAdvantage: 'The Verna Turbo is marginally quicker off the line, but Virtus GT Plus counters with laser-welded MQB-A0-IN body rigidity, a proven 7-speed DSG, and Volkswagen’s renowned German build quality and resale value.',
        verdict: 'Both are genuinely quick, but the Virtus GT Plus wins on long-term build integrity and driving refinement.'
      },
      {
        id: 'honda-city',
        name: 'Honda City',
        brand: 'Honda',
        category: 'Midsize Sedan',
        price: '₹11.85 – ₹16.86 Lakh',
        priceNumericLakh: 14.0,
        engine: '1.5L i-VTEC Naturally Aspirated Petrol',
        powerHp: 121,
        torqueNm: 145,
        accelSeconds: 11.7,
        topSpeedKmh: 180,
        transmission: '7-Step CVT / 6-Speed Manual',
        drivetrain: 'Front-Wheel Drive (FWD)',
        differentialTech: 'Open Differential (Naturally Aspirated, No Turbo)',
        seatingAndBoot: '5 Seats • 506L Boot',
        fuelEconomy: '18.4 km/l (CVT)',
        keyStrengths: ['Renowned Honda reliability', 'Spacious rear cabin', 'Smooth CVT for city driving'],
        vrsAdvantage: 'Virtus GT Plus delivers +29 PS more power, a 3.7-second quicker 0-100 sprint, and genuine turbocharged overtaking punch that the naturally aspirated City simply cannot offer.',
        verdict: 'The City wins on NA reliability reputation, but the Virtus GT Plus is in an entirely different performance league.'
      },
      {
        id: 'skoda-slavia-vgt',
        name: 'Škoda Slavia 1.5 TSI',
        brand: 'Škoda',
        category: 'Midsize Premium Sedan',
        price: '₹16.19 – ₹19.09 Lakh',
        priceNumericLakh: 17.6,
        engine: '1.5L TSI EVO Turbo-Petrol with ACT',
        powerHp: 150,
        torqueNm: 250,
        accelSeconds: 8.6,
        topSpeedKmh: 207,
        transmission: '7-Speed DSG Dual-Clutch',
        drivetrain: 'Front-Wheel Drive with Electronic Differential Lock (EDL)',
        differentialTech: 'EDL + Anti-Slip Regulation (ASR)',
        seatingAndBoot: '5 Seats • 521L Boot',
        fuelEconomy: '19.2 km/l',
        keyStrengths: ['Identical MQB-A0-IN mechanicals', 'Segment-leading 0.28 Cd aerodynamics', 'Škoda’s European design language'],
        vrsAdvantage: 'True sibling models sharing the same 1.5 TSI EVO engine, DSG gearbox, and platform — the Virtus GT Plus is tuned with sportier GT styling and firmer suspension for drivers who want a sharper feel.',
        verdict: 'A near mechanical twin: pick the Virtus GT Plus for sportier styling, or the Slavia for Škoda’s design identity — both share the same core performance DNA.'
      },
      {
        id: 'maruti-ciaz',
        name: 'Maruti Suzuki Ciaz',
        brand: 'Maruti Suzuki',
        category: 'Midsize Sedan',
        price: '₹9.39 – ₹13.18 Lakh',
        priceNumericLakh: 11.0,
        engine: '1.5L K15C Naturally Aspirated Petrol (Mild Hybrid)',
        powerHp: 105,
        torqueNm: 138,
        accelSeconds: 12.5,
        topSpeedKmh: 175,
        transmission: '4-Speed Torque Converter AT / 5-Speed Manual',
        drivetrain: 'Front-Wheel Drive (FWD)',
        differentialTech: 'Open Differential (Naturally Aspirated, No Turbo)',
        seatingAndBoot: '5 Seats • 510L Boot',
        fuelEconomy: '20.8 km/l (Mild Hybrid)',
        keyStrengths: ['Widest sales & service network in India', 'Lowest ownership cost in segment', 'Best-in-class fuel efficiency'],
        vrsAdvantage: 'Virtus GT Plus is dramatically quicker (4 seconds faster to 100 km/h), offers genuine turbocharged performance, DSG paddle shifters, and German safety engineering the budget-focused Ciaz cannot match.',
        verdict: 'The Ciaz wins purely on running costs; the Virtus GT Plus is the enthusiast’s choice for genuine driving engagement.'
      }
    ]
  }
];
