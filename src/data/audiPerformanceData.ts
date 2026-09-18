import { RSModelData, RivalVehicle, ModelRivalComparison } from './rsPerformanceData';

export interface AudiPerformanceModelData extends RSModelData {
  heritageOrigin?: string;
  tuningCulture?: string;
}

export const AUDI_RS_MODELS: AudiPerformanceModelData[] = [
  {
    id: 'octavia-vrs' as any, // Audi RS5
    name: 'Audi RS5',
    image: '/cars/audi-rs5.jpg',
    badge: 'Audi Sport’s Hand-Built V6 Track Weapon',
    tagline: '450 PS of hand-assembled 2.9 TFSI twin-turbo V6 fury, quattro sport differential, and a 3.9s sprint time.',
    category: 'High-Performance Sports Sedan',
    expectedPrice: '₹1.20 – ₹1.30 Crore (CBU)',
    priceNumeric: 12000000,
    engine: '2.9L TFSI Twin-Turbo V6 (Audi Sport)',
    power: '450 PS (331 kW) @ 5,700–6,700 RPM',
    powerHp: 450,
    torque: '600 Nm @ 1,900–5,000 RPM',
    torqueNm: 600,
    acceleration0to100: '3.9 Seconds',
    accelSeconds: 3.9,
    topSpeed: '250 – 280 km/h (RS Dynamic Package)',
    topSpeedKmh: 280,
    transmission: '8-Speed Tiptronic Automatic with Launch Control',
    drivetrain: 'quattro Permanent All-Wheel Drive with Sport Differential',
    diffOrAwd: 'quattro Sport Rear Differential with Active Torque Vectoring',
    exhaustSystem: 'RS Sport Exhaust with Black Oval Tailpipes & Dynamic Sound',
    brakes: '375 mm Front Ventilated Discs with Red RS Calipers (Carbon-Ceramic Optional)',
    suspension: 'RS Sport Suspension Plus with Dynamic Ride Control (DRC)',
    boostPsi: 26.1,
    revLimit: 7000,
    tractionType: 'quattro AWD',
    bootAndSeating: '5 Seats • 480L Boot',
    keyWeaponSummary: 'Hand-assembled 2.9 TFSI twin-turbo V6 paired with a quattro sport differential that actively vectors torque to the outside rear wheel, eliminating understeer at the limit.',
    heroColorHex: '#dc2626',
    heroColorName: 'Tango Red Metallic',
    colors: [
      { name: 'Tango Red Metallic', hex: '#dc2626', desc: 'Signature Audi Sport racing red' },
      { name: 'Nardo Grey', hex: '#71717a', desc: 'Motorsport-homologation matte-look grey' },
      { name: 'Mythos Black Metallic', hex: '#18181b', desc: 'Stealth blackout night runner finish' },
      { name: 'Glacier White Metallic', hex: '#f1f5f9', desc: 'Crisp contrast with gloss black RS pack' },
      { name: 'Kemora Grey Metallic', hex: '#3f3f46', desc: 'Deep anthracite performance finish' }
    ],
    weaponry: [
      {
        title: 'quattro Sport Rear Differential',
        badge: 'Cornering Weapon',
        description: 'Actively vectors torque between the rear wheels, pushing up to 70% of drive rearward and locking the outside wheel through corners for razor-sharp turn-in.',
        icon: 'Flame'
      },
      {
        title: '2.9 TFSI Hand-Built Twin-Turbo V6',
        badge: '450 PS / 600 Nm',
        description: 'Assembled by a single technician at Audi Sport’s Neckarsulm facility, delivering instant boost response from 1,900 RPM all the way to a 7,000 RPM redline.',
        icon: 'Zap'
      },
      {
        title: 'Dynamic Ride Control (DRC)',
        badge: 'Hydraulic Damping',
        description: 'Diagonally interconnected hydraulic dampers counteract body roll and pitch without the complexity of electronic anti-roll bars, sharpening cornering flatness.',
        icon: 'Activity'
      },
      {
        title: 'Progressive RS Steering',
        badge: 'Variable Ratio',
        description: 'Steering ratio quickens the more you turn the wheel, making hairpins and track chicanes feel instinctive without excessive arm-crossing.',
        icon: 'Gauge'
      },
      {
        title: 'Carbon-Ceramic Brake Option',
        badge: '400mm Front Discs',
        description: 'Optional carbon-ceramic brakes shave 8 kg of unsprung mass per wheel while resisting brake fade across repeated high-speed track stops.',
        icon: 'ShieldCheck'
      }
    ],
    cockpitFeatures: [
      'RS Super Sport seats in Fine Nappa leather with honeycomb stitching and illuminated RS logos',
      'RS-specific flat-bottom steering wheel with drive select and RS Mode shortcut buttons',
      '12.3-inch Audi Virtual Cockpit with RS-exclusive circular tachometer display',
      'Carbon-fiber and Dinamica cabin trim inlays',
      'Bang & Olufsen 3D premium sound system with 15 speakers',
      'Matrix LED headlamps with dynamic RS welcome light animation'
    ],
    trackTelemetry: {
      lateralG: '1.05 G (Dry Skidpad)',
      weightDistribution: '58 / 42 (Front/Rear)',
      powerToWeight: '272 PS / Tonne',
      braking100to0: '32.6 Metres',
      nurburgringLegacy: 'RS5 lineage has lapped the Nürburgring Nordschleife in under 7:50 in factory RS Performance trim'
    }
  },
  {
    id: 'kodiaq-vrs' as any, // Audi RS Q8
    name: 'Audi RS Q8',
    image: '/cars/audi-rsq8.jpg',
    badge: 'The Fastest, Most Powerful SUV Audi Has Ever Built',
    tagline: '600 PS of hand-built 4.0 TFSI V8 firepower, active roll stabilization, and a blistering 3.8s 0–100 km/h sprint.',
    category: 'High-Performance Luxury SUV',
    expectedPrice: '₹2.05 – ₹2.20 Crore (CBU)',
    priceNumeric: 20500000,
    engine: '4.0L TFSI Twin-Turbo V8 (Audi Sport)',
    power: '600 PS (441 kW) @ 6,000 RPM',
    powerHp: 600,
    torque: '800 Nm @ 2,200–4,500 RPM',
    torqueNm: 800,
    acceleration0to100: '3.8 Seconds',
    accelSeconds: 3.8,
    topSpeed: '250 km/h (305 km/h with RS Dynamic Plus Package)',
    topSpeedKmh: 305,
    transmission: '8-Speed Tiptronic Automatic with Launch Control',
    drivetrain: 'quattro Permanent All-Wheel Drive with Center & Rear Sport Differentials',
    diffOrAwd: 'quattro with Active Sport Differential — up to 70% Torque to Either Rear Wheel',
    exhaustSystem: 'RS Sport Exhaust with Oval Chrome-Black Quad Tailpipes',
    brakes: '420 mm Front Carbon-Ceramic Discs with Red RS Calipers',
    suspension: 'RS Adaptive Air Suspension with Electromechanical Active Roll Stabilization',
    boostPsi: 27.5,
    revLimit: 6800,
    tractionType: 'quattro AWD',
    bootAndSeating: '5 Seats • 605L Boot (Expandable to 1,755L)',
    keyWeaponSummary: 'Shared twin-turbo V8 with the Lamborghini Urus and Porsche Cayenne Turbo, paired with electromechanical active anti-roll bars that keep the body flat through corners at SUV-defying speed.',
    heroColorHex: '#18181b',
    heroColorName: 'Mythos Black Metallic',
    colors: [
      { name: 'Mythos Black Metallic', hex: '#18181b', desc: 'Menacing flagship stealth finish' },
      { name: 'Tango Red Metallic', hex: '#dc2626', desc: 'Signature Audi Sport racing red' },
      { name: 'Nardo Grey', hex: '#71717a', desc: 'Motorsport-homologation matte-look grey' },
      { name: 'Navarra Blue Metallic', hex: '#1e3a8a', desc: 'Deep flagship performance blue' },
      { name: 'Glacier White Metallic', hex: '#f1f5f9', desc: 'Crisp contrast with gloss black RS pack' }
    ],
    weaponry: [
      {
        title: 'Twin-Turbo 4.0 TFSI V8',
        badge: 'All-Weather Traction',
        description: 'Shared platform-engine with the Lamborghini Urus, delivering 800 Nm from just 2,200 RPM through all four wheels via quattro permanent all-wheel drive.',
        icon: 'Zap'
      },
      {
        title: 'Electromechanical Active Roll Stabilization',
        badge: 'Flat Cornering',
        description: '48-volt electric motors at each anti-roll bar counteract body lean in milliseconds, keeping a 2.3-tonne SUV flat through high-speed corners.',
        icon: 'Activity'
      },
      {
        title: 'RS Sport Exhaust',
        badge: 'Acoustic Thunder',
        description: 'Electronically controlled valves unleash a deep V8 burble on acceleration and crackling pops on lift-off, switchable to a quiet mode for early starts.',
        icon: 'Flame'
      },
      {
        title: '23-Inch RS Design Wheels',
        badge: 'High-Speed Aerodynamics',
        description: 'Forged alloy wheels wrapped in high-performance rubber, paired with 420 mm carbon-ceramic front brakes for repeated track-day stopping power.',
        icon: 'Gauge'
      },
      {
        title: 'Coupe-SUV Practicality',
        badge: 'Versatile Speed',
        description: 'Despite its supercar-humbling pace, the RS Q8 retains a 605-litre boot expandable to 1,755 litres with the rear seats folded flat.',
        icon: 'Luggage'
      }
    ],
    cockpitFeatures: [
      'RS Super Sport seats in Valcona leather with honeycomb stitching and illuminated RS logos',
      'Dual 10.1-inch and 8.6-inch MMI touch response displays with haptic feedback',
      '12.3-inch Audi Virtual Cockpit with RS-exclusive circular tachometer and lap timer',
      'Carbon-fiber cabin trim inlays with contrast RS stitching throughout',
      'Bang & Olufsen 3D Advanced Sound System with 23 speakers',
      'Panoramic glass sunroof with electric sunblind'
    ],
    trackTelemetry: {
      lateralG: '0.98 G (Class-Leading for a Full-Size SUV)',
      weightDistribution: '54 / 46 (Front/Rear)',
      powerToWeight: '261 PS / Tonne',
      braking100to0: '33.8 Metres',
      nurburgringLegacy: 'Set the production SUV lap record at the Nürburgring Nordschleife (7:42.253) at its 2020 debut'
    }
  },
  {
    id: 'rs6' as any, // Audi RS6 Avant
    name: 'Audi RS6 Avant',
    image: '/cars/audi-rs6-avant.jpg',
    badge: 'The 600 PS Load-Carrying Missile',
    tagline: '600 PS of twin-turbo V8 firepower packed into a practical estate body, with a cavernous 565-litre boot for the school run.',
    category: 'High-Performance Estate',
    expectedPrice: '₹1.40 – ₹1.50 Crore (CBU)',
    priceNumeric: 14000000,
    engine: '4.0L TFSI Twin-Turbo V8 (Audi Sport)',
    power: '600 PS (441 kW) @ 6,000 RPM',
    powerHp: 600,
    torque: '800 Nm @ 2,050–4,500 RPM',
    torqueNm: 800,
    acceleration0to100: '3.6 Seconds',
    accelSeconds: 3.6,
    topSpeed: '250 km/h (280 km/h with RS Dynamic Package)',
    topSpeedKmh: 280,
    transmission: '8-Speed Tiptronic Automatic with Launch Control',
    drivetrain: 'quattro Permanent All-Wheel Drive with Sport Differential',
    diffOrAwd: 'quattro Sport Rear Differential with Active Torque Vectoring',
    exhaustSystem: 'RS Sport Exhaust with Black Oval Tailpipes & Dynamic Sound',
    brakes: '420 mm Front Ventilated Discs with Red RS Calipers (Carbon-Ceramic Optional)',
    suspension: 'RS Adaptive Air Suspension with Dynamic Ride Control (DRC)',
    boostPsi: 26.1,
    revLimit: 6800,
    tractionType: 'quattro AWD',
    bootAndSeating: '5 Seats • 565L Boot (Expandable to 1,680L)',
    keyWeaponSummary: 'A shared-platform hand-built V8 delivering supercar-humbling acceleration with an estate body that swallows an entire family’s luggage and a set of track-day wheels.',
    heroColorHex: '#18181b',
    heroColorName: 'Mythos Black Metallic',
    colors: [
      { name: 'Mythos Black Metallic', hex: '#18181b', desc: 'Menacing flagship stealth finish' },
      { name: 'Tango Red Metallic', hex: '#dc2626', desc: 'Signature Audi Sport racing red' },
      { name: 'Nardo Grey', hex: '#71717a', desc: 'Motorsport-homologation matte-look grey' },
      { name: 'Navarra Blue Metallic', hex: '#1e3a8a', desc: 'Deep flagship performance blue' },
      { name: 'Glacier White Metallic', hex: '#f1f5f9', desc: 'Crisp contrast with gloss black RS pack' }
    ],
    weaponry: [
      {
        title: 'Twin-Turbo 4.0 TFSI V8',
        badge: 'All-Weather Traction',
        description: 'Shared platform-engine with the RS Q8, delivering 800 Nm from just 2,050 RPM through all four wheels via quattro permanent all-wheel drive.',
        icon: 'Zap'
      },
      {
        title: 'quattro Sport Differential',
        badge: 'Cornering Weapon',
        description: 'Actively vectors torque between the rear wheels, pushing power to the outside wheel through corners for razor-sharp turn-in despite the estate’s size.',
        icon: 'Flame'
      },
      {
        title: 'RS Adaptive Air Suspension',
        badge: 'Dual Personality',
        description: 'Transforms from a cloud-soft family estate into a flat-cornering canyon carver at the touch of the RS Mode button, all while carrying a full load.',
        icon: 'Activity'
      },
      {
        title: '22-Inch RS Design Wheels',
        badge: 'High-Speed Aerodynamics',
        description: 'Forged alloy wheels paired with 420 mm front discs (carbon-ceramic optional) for repeated track-day stopping power.',
        icon: 'Gauge'
      },
      {
        title: 'Cavernous 565L Estate Boot',
        badge: 'Versatile Speed',
        description: 'Despite its supercar-humbling pace, the RS6 Avant retains a 565-litre boot expandable to 1,680 litres — practicality without compromise.',
        icon: 'Luggage'
      }
    ],
    cockpitFeatures: [
      'RS Super Sport seats in Valcona leather with honeycomb stitching and illuminated RS logos',
      'RS-specific flat-bottom steering wheel with drive select and RS Mode shortcut buttons',
      '12.3-inch Audi Virtual Cockpit with RS-exclusive circular tachometer display',
      'Carbon-fiber and Dinamica cabin trim inlays',
      'Bang & Olufsen 3D Advanced Sound System with 16 speakers',
      'Matrix LED headlamps with dynamic RS welcome light animation'
    ],
    trackTelemetry: {
      lateralG: '1.02 G (Dry Skidpad)',
      weightDistribution: '57 / 43 (Front/Rear)',
      powerToWeight: '289 PS / Tonne',
      braking100to0: '32.9 Metres',
      nurburgringLegacy: 'RS6 Avant lineage has lapped the Nürburgring Nordschleife in under 7:45, remarkable for a full-size estate'
    }
  }
];

export const AUDI_SPORT_HERITAGE = [
  {
    year: '1980',
    title: 'The Original Ur-Quattro',
    desc: 'Audi unveils the revolutionary Quattro permanent all-wheel-drive system, transforming Group B rallying and road-car handling forever.'
  },
  {
    year: '1994',
    title: 'Birth of Audi Sport GmbH (quattro GmbH)',
    desc: 'Audi establishes a dedicated performance skunkworks in Neckarsulm, tasked with hand-building the brand’s fastest RS and R8 models.'
  },
  {
    year: '1994',
    title: 'The First RS: Audi RS2 Avant',
    desc: 'Co-developed with Porsche, the RS2 Avant becomes the world’s first hyper-fast performance estate, hitting 262 km/h.'
  },
  {
    year: '2013',
    title: 'RS Q3: The First RS SUV',
    desc: 'Audi applies its RS performance philosophy to the SUV body style for the first time, previewing today’s RS Q8 and RS Q3.'
  },
  {
    year: 'Today',
    title: 'The Modern Era: 600 PS Twin-Turbo Mastery',
    desc: 'With hand-built 2.9 TFSI V6 and 4.0 TFSI V8 engines, active roll stabilization, and quattro sport differentials, the RS5 and RS Q8 define modern Audi Sport exhilaration.'
  }
];

export const AUDI_RIVAL_COMPARISONS: ModelRivalComparison[] = [
  {
    skodaModelId: 'octavia-vrs',
    skodaModelName: 'Audi RS5',
    heroPitch: 'Why the RS5 stands toe-to-toe with the segment’s German performance-sedan royalty on power, chassis technology, and everyday usability.',
    rivals: [
      {
        id: 'bmw-m3',
        name: 'BMW M3 Competition',
        brand: 'BMW',
        category: 'High-Performance Sports Sedan',
        price: '₹1.55 – ₹1.65 Crore',
        priceNumericLakh: 160,
        engine: '3.0L Twin-Turbo Inline-6 (S58)',
        powerHp: 510,
        torqueNm: 650,
        accelSeconds: 3.5,
        topSpeedKmh: 290,
        transmission: '8-Speed M Steptronic Automatic',
        drivetrain: 'Rear-Wheel Drive (M xDrive AWD Optional)',
        differentialTech: 'Active M Differential (Electronically Controlled)',
        seatingAndBoot: '5 Seats • 480L Boot',
        fuelEconomy: '8.2 km/l',
        keyStrengths: ['Iconic M-badge motorsport pedigree', 'Sharper rear-wheel-drive dynamics', 'Faster outright sprint time'],
        vrsAdvantage: 'The RS5 counters with standard quattro all-wheel-drive traction in the wet, hand-built engine assembly, and a significantly lower price for similar real-world performance.',
        verdict: 'The M3 wins on outright track pace, but the RS5 offers more usable all-weather traction and better value.'
      },
      {
        id: 'mercedes-c63',
        name: 'Mercedes-AMG C63 S E Performance',
        brand: 'Mercedes-AMG',
        category: 'High-Performance Hybrid Sports Sedan',
        price: '₹1.60 – ₹1.70 Crore',
        priceNumericLakh: 165,
        engine: '2.0L Turbo-Hybrid Inline-4 + Electric Motor',
        powerHp: 680,
        torqueNm: 1020,
        accelSeconds: 3.4,
        topSpeedKmh: 280,
        transmission: '9-Speed AMG Speedshift MCT',
        drivetrain: 'All-Wheel Drive (4MATIC+)',
        differentialTech: 'Electronic Locking Rear Differential',
        seatingAndBoot: '5 Seats • 375L Boot (Battery Reduces Space)',
        fuelEconomy: '11.5 km/l (Hybrid Assisted)',
        keyStrengths: ['Massive plug-in hybrid power output', 'Formula 1-derived turbo technology', 'Electric-only city driving mode'],
        vrsAdvantage: 'The RS5 counters with a proven naturally-balanced twin-turbo V6, none of the added hybrid battery weight or complexity, and the visceral analog engine note enthusiasts crave.',
        verdict: 'The C63 hybrid is a technological tour de force, but the RS5 remains the purer, lighter, more classically engaging drive.'
      },
      {
        id: 'skoda-octavia-vrs-audi',
        name: 'Sköda Octavia vRS',
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
        keyStrengths: ['Shared VW Group EA888 architecture', 'Roughly one-third the price', 'Cavernous 600L liftback boot'],
        vrsAdvantage: 'The RS5 delivers +185 PS more power, quattro all-wheel-drive traction, and genuine Audi Sport hand-built engineering — the Octavia vRS trades outright pace for accessible everyday value.',
        verdict: 'A genuine cross-shop within the VW Group: the Octavia vRS is the value-performance choice, while the RS5 is the aspirational halo.'
      }
    ]
  },
  {
    skodaModelId: 'kodiaq-vrs',
    skodaModelName: 'Audi RS Q8',
    heroPitch: 'Why the RS Q8 remains the benchmark performance SUV against rivals from Lamborghini, Porsche, and BMW.',
    rivals: [
      {
        id: 'lamborghini-urus-s',
        name: 'Lamborghini Urus S',
        brand: 'Lamborghini',
        category: 'Super SUV',
        price: '₹3.55 – ₹3.75 Crore',
        priceNumericLakh: 365,
        engine: '4.0L Twin-Turbo V8 (Shared Platform Engine)',
        powerHp: 666,
        torqueNm: 850,
        accelSeconds: 3.5,
        topSpeedKmh: 305,
        transmission: '8-Speed Tiptronic Automatic',
        drivetrain: 'Permanent All-Wheel Drive (Torque Vectoring)',
        differentialTech: 'Active Torque Vectoring Rear Differential',
        seatingAndBoot: '5 Seats • 616L Boot',
        fuelEconomy: '6.5 km/l',
        keyStrengths: ['Raging bull exclusivity and styling', 'Higher outright power figure', 'Motorsport-derived Lamborghini badge'],
        vrsAdvantage: 'The RS Q8 shares the same platform-engine DNA at nearly one-sixth the price, with near-identical outright acceleration and far greater everyday usability and dealer network support.',
        verdict: 'The Urus S wins on exclusivity and badge prestige; the RS Q8 wins decisively on value and daily usability.'
      },
      {
        id: 'porsche-cayenne-turbo-gt',
        name: 'Porsche Cayenne Turbo GT',
        brand: 'Porsche',
        category: 'High-Performance SUV',
        price: '₹2.60 – ₹2.75 Crore',
        priceNumericLakh: 267,
        engine: '4.0L Twin-Turbo V8 (Shared Platform Engine)',
        powerHp: 640,
        torqueNm: 850,
        accelSeconds: 3.3,
        topSpeedKmh: 300,
        transmission: '8-Speed Tiptronic S Automatic',
        drivetrain: 'Permanent All-Wheel Drive with Porsche Traction Management',
        differentialTech: 'Electronically Controlled Rear-Axle Differential Lock',
        seatingAndBoot: '5 Seats • 745L Boot',
        fuelEconomy: '6.8 km/l',
        keyStrengths: ['Nürburgring SUV lap record holder (as of its debut)', 'Sharper Porsche-tuned chassis dynamics', 'Larger boot capacity'],
        vrsAdvantage: 'The RS Q8 counters with a significantly lower price for near-identical performance figures, plus Audi’s more spacious and tech-forward cabin architecture.',
        verdict: 'The Cayenne Turbo GT is the sharper driver’s SUV; the RS Q8 is the smarter, better-value everyday flagship.'
      },
      {
        id: 'bmw-x6-m-competition',
        name: 'BMW X6 M Competition',
        brand: 'BMW',
        category: 'High-Performance Coupe-SUV',
        price: '₹2.10 – ₹2.30 Crore',
        priceNumericLakh: 220,
        engine: '4.4L Twin-Turbo V8 (S63)',
        powerHp: 625,
        torqueNm: 750,
        accelSeconds: 3.8,
        topSpeedKmh: 290,
        transmission: '8-Speed M Steptronic Automatic',
        drivetrain: 'M xDrive All-Wheel Drive (Rear-Biased)',
        differentialTech: 'Active M Differential',
        seatingAndBoot: '5 Seats • 580L Boot',
        fuelEconomy: '6.9 km/l',
        keyStrengths: ['Rear-biased xDrive for playful handling', 'Iconic M-badge heritage', 'Distinctive coupe-SUV styling'],
        vrsAdvantage: 'Identical 3.8s sprint times, but the RS Q8 offers Audi’s more advanced electromechanical active roll stabilization and a roomier, more practical cabin.',
        verdict: 'Nearly a dead heat on paper — the RS Q8 edges ahead on chassis technology and outright practicality.'
      }
    ]
  }
];
