export interface RSModelData {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  category: string;
  expectedPrice: string;
  priceNumeric: number;
  engine: string;
  power: string;
  powerHp: number;
  torque: string;
  torqueNm: number;
  acceleration0to100: string;
  accelSeconds: number;
  topSpeed: string;
  topSpeedKmh: number;
  transmission: string;
  drivetrain: string;
  diffOrAwd: string;
  exhaustSystem: string;
  brakes: string;
  suspension: string;
  boostPsi: number;
  revLimit: number;
  tractionType: string;
  bootAndSeating: string;
  keyWeaponSummary: string;
  heroColorHex: string;
  heroColorName: string;
  colors: Array<{ name: string; hex: string; desc: string }>;
  weaponry: Array<{
    title: string;
    description: string;
    badge: string;
    icon: string;
  }>;
  cockpitFeatures: string[];
  trackTelemetry: {
    lateralG: string;
    weightDistribution: string;
    powerToWeight: string;
    braking100to0: string;
    nurburgringLegacy: string;
  };
}

export const RS_MODELS: RSModelData[] = [
  {
    id: 'octavia-vrs',
    name: 'Škoda Octavia vRS',
    badge: 'The Benchmark Hot Liftback',
    tagline: '265 PS of pure EA888 EVO4 fury, VAQ mechanical limited-slip diff, and 6.4s sprint time.',
    category: 'Hot Liftback / Performance Saloon',
    expectedPrice: '₹42.00 – ₹45.00 Lakh (CBU)',
    priceNumeric: 4200000,
    engine: '2.0L TSI EA888 EVO4 Turbocharged Petrol',
    power: '265 PS (195 kW) @ 5,250–6,500 RPM',
    powerHp: 265,
    torque: '370 Nm @ 1,600–4,300 RPM',
    torqueNm: 370,
    acceleration0to100: '6.4 Seconds',
    accelSeconds: 6.4,
    topSpeed: '250 km/h (Electronically Governed)',
    topSpeedKmh: 250,
    transmission: '7-Speed DSG Dual-Clutch with Shift-by-Wire & Launch Control',
    drivetrain: 'Front-Wheel Drive with VAQ Electro-Mechanical Limited-Slip Diff',
    diffOrAwd: 'VAQ Front Limited-Slip Differential with 100% Torque Vectoring Lock',
    exhaustSystem: 'Twin Trapezoidal Chrome Sports Exhaust with Dynamic Sound Booster',
    brakes: '17-inch Ventilated Discs with Fiery Gloss Red RS Calipers',
    suspension: 'RS Sport Chassis lowered by 15 mm with DCC Plus (15 Damping Levels)',
    boostPsi: 21.8,
    revLimit: 6800,
    tractionType: 'VAQ E-Diff',
    bootAndSeating: '5 Seats • 600L–1,555L Liftback',
    keyWeaponSummary: 'Electro-mechanical VAQ multi-plate LSD physically locks torque to the outside front wheel, eliminating understeer.',
    heroColorHex: '#1d4ed8',
    heroColorName: 'Race Blue Metallic',
    colors: [
      { name: 'Race Blue Metallic', hex: '#1d4ed8', desc: 'Signature RS racing livery shade' },
      { name: 'Mamba Green', hex: '#84cc16', desc: 'Electrifying high-visibility motorsport acid hue' },
      { name: 'Velvet Red Metallic', hex: '#b91c1c', desc: 'Deep crimson performance finish' },
      { name: 'Magic Black Pearl', hex: '#0f172a', desc: 'Stealth blackout night runner finish' },
      { name: 'Moon White Metallic', hex: '#f8fafc', desc: 'Crisp rally contrast with gloss black pack' }
    ],
    weaponry: [
      {
        title: 'VAQ Electro-Mechanical Limited Slip Differential',
        badge: 'Cornering Weapon',
        description: 'Multi-plate clutch electro-mechanically locks up to 100% of torque to the outside front wheel, ruthlessly hunting the apex with zero wheel-spin or push-understeer.',
        icon: 'Flame'
      },
      {
        title: 'EA888 EVO4 High-Output Turbo-Four',
        badge: '265 PS / 370 Nm',
        description: '350-bar direct injection, electronic wastegate, and modified variable valve lift delivering instant boost response from 1,600 RPM all the way to redline.',
        icon: 'Zap'
      },
      {
        title: 'DCC Plus Dual-Valve Adaptive Damping',
        badge: '15 Suspension Steps',
        description: 'Independent compression and rebound valves compute damping forces 1,000 times a second, giving you velvet highway cruising or rock-firm track stiffness at the touch of a button.',
        icon: 'Activity'
      },
      {
        title: 'Progressive Dynamic Steering Rack',
        badge: '14.1:1 Variable Ratio',
        description: 'Direct steering ratio decreases the more you turn the wheel, allowing hairpin corners and track chicanes to be attacked without crossing your arms.',
        icon: 'Gauge'
      },
      {
        title: 'Cavernous 600L Liftback Track Utility',
        badge: '600L – 1,555L Boot',
        description: 'The only true hot hatch/sedan on earth that swallows an entire set of spare track slicks, toolboxes, and luggage without breaking a sweat.',
        icon: 'Luggage'
      }
    ],
    cockpitFeatures: [
      'Alcantara / Suedia front sport bucket seats with integrated headrests and embossed vRS emblems',
      'Fiery red or lime contrast cross-stitching on dashboard, gear selector, and door panels',
      '3-spoke flat-bottom perforated leather sport steering wheel with dedicated RS Mode button',
      '10.25-inch Virtual Cockpit with exclusive RS Rev Counter & G-Meter sport display view',
      'Aluminium motorsport pedals and black carbon-weave dashboard decor',
      'Dynamic Sound Generator pumping visceral mechanical intake roar through the cabin',
      '12-Speaker 600W Canton Surround Sound with subwoofer'
    ],
    trackTelemetry: {
      lateralG: '1.02 G (Dry Skidpad)',
      weightDistribution: '61 / 39 (Front/Rear)',
      powerToWeight: '175 PS / Tonne',
      braking100to0: '34.2 Metres',
      nurburgringLegacy: 'Tested extensively on the Nürburgring Nordschleife for high-speed stability'
    }
  },
  {
    id: 'kodiaq-vrs',
    name: 'Škoda Kodiaq vRS',
    badge: 'The 7-Seater 4x4 Super-SUV',
    tagline: '265 PS TSI firepower, Intelligent 4x4 launch grip, and blistering 6.3s 0–100 km/h family speed.',
    category: 'Full-Size Performance 4x4 SUV (7-Seater)',
    expectedPrice: '₹55.00 – ₹59.00 Lakh (CBU)',
    priceNumeric: 5500000,
    engine: '2.0L TSI EVO High-Output Turbocharged Petrol',
    power: '265 PS (195 kW) @ 5,000–6,500 RPM',
    powerHp: 265,
    torque: '400 Nm @ 1,650–4,350 RPM',
    torqueNm: 400,
    acceleration0to100: '6.3 Seconds',
    accelSeconds: 6.3,
    topSpeed: '232 km/h (Track Tested)',
    topSpeedKmh: 232,
    transmission: '7-Speed DSG Dual-Clutch with Intelligent 4x4 All-Wheel Drive',
    drivetrain: 'Intelligent Electro-Hydraulic 4x4 All-Wheel Drive System',
    diffOrAwd: 'Active Multi-Plate 4x4 Clutch capable of sending 85% torque to a single wheel',
    exhaustSystem: 'Dynamic Sound Boost Active Exhaust with Dual Polished Angular Outlets',
    brakes: '17-inch Heavy-Duty Ventilated RS Brake Rotors with Red Lacquered Calipers',
    suspension: 'Adaptive DCC Plus with Off-Road & Dedicated RS Sport Modes',
    boostPsi: 22.4,
    revLimit: 6700,
    tractionType: '4x4 AWD',
    bootAndSeating: '7 Seats • 835L–2,065L',
    keyWeaponSummary: 'Nürburgring 7-seater lap record holder (9m 29s) with DCC Plus 15-stage dual-valve adaptive damping.',
    heroColorHex: '#b91c1c',
    heroColorName: 'Velvet Red Metallic',
    colors: [
      { name: 'Velvet Red Metallic', hex: '#b91c1c', desc: 'Muscular crimson flagship performance shade' },
      { name: 'Race Blue Metallic', hex: '#1d4ed8', desc: 'Rally-bred heritage dynamic blue' },
      { name: 'Bronx Gold Metallic', hex: '#d97706', desc: 'Aggressive luxury molten amber hue' },
      { name: 'Magic Black Pearl', hex: '#0f172a', desc: 'Menacing dark night stealth aesthetic' },
      { name: 'Steel Grey', hex: '#64748b', desc: 'Industrial motorsport flat grey lacquer' }
    ],
    weaponry: [
      {
        title: 'Intelligent 4x4 Torque-Vectoring All-Wheel Drive',
        badge: 'All-Weather Traction',
        description: 'Electro-hydraulic multi-plate clutch calculates slip in milliseconds, launching 400 Nm through all four 20-inch wheels with neck-snapping zero-spin acceleration.',
        icon: 'Zap'
      },
      {
        title: 'Dynamic Sound Boost Active Exhaust',
        badge: 'Acoustic Thunder',
        description: 'Dedicated sound actuators mounted directly behind the rear exhaust silencer modulate a rich, deep, baritone V8-style burble on acceleration and pops on DSG downshifts.',
        icon: 'Flame'
      },
      {
        title: 'DCC Plus Dual-Chamber Adaptive Suspension',
        badge: 'Split Personality',
        description: 'Transform from a cloud-soft 7-seat family luxury cruiser into a razor-sharp, flat-cornering canyon carver at the touch of the steering wheel RS button.',
        icon: 'Activity'
      },
      {
        title: '20-Inch Sagitarius Aero Anthracite Wheels',
        badge: 'High-Speed Aerodynamics',
        description: 'Sculpted diamond-cut alloys with removable aerodynamic carbon-look covers reduce drag while channelling cooling airflow over the 17-inch red brake package.',
        icon: 'Gauge'
      },
      {
        title: '7-Passenger High-Performance Super-SUV',
        badge: 'Versatile Speed',
        description: 'Carry seven passengers in sculpted Alcantara comfort, or fold the rows flat for a mammoth 835 to 2,065 litres of cavernous storage capacity.',
        icon: 'Luggage'
      }
    ],
    cockpitFeatures: [
      'Ergonomic sports bucket seats upholstered in perforated Alcantara & leather with red diamond quilting',
      'Heated, ventilated front seats with electric memory and pneumatically adjustable lumbar bolsters',
      '13-inch free-floating infotainment screen with exclusive RS telemetry widgets (Oil temp, boost, G-force)',
      '10.25-inch Virtual Cockpit with central 3D RS tachometer display and lap timer',
      'Carbon-fiber weave dashboard trims and black Alcantara door inserts with red ambient glow',
      'Panoramic glass sunroof with UV protection and electric sunblind',
      '12-Speaker 625W Canton Sound System with active acoustic noise cancellation'
    ],
    trackTelemetry: {
      lateralG: '0.96 G (Full-Size SUV Class Leader)',
      weightDistribution: '54 / 46 (Front/Rear)',
      powerToWeight: '148 PS / Tonne',
      braking100to0: '35.6 Metres',
      nurburgringLegacy: 'Holder of the 7-seater SUV Nürburgring Nordschleife lap record (9:29.84 by Sabine Schmitz)'
    }
  },
  {
    id: 'octavia-combi-vrs',
    name: 'Škoda Octavia Combi vRS',
    badge: 'The Estate Enthusiast\'s Secret Weapon',
    tagline: '265 PS of EA888 EVO4 fury wrapped in a 640-litre Combi estate body — the vRS purists whisper about.',
    category: 'Performance Estate / Shooting Brake',
    expectedPrice: '₹44.50 – ₹47.50 Lakh (CBU)',
    priceNumeric: 4450000,
    engine: '2.0L TSI EA888 EVO4 Turbocharged Petrol',
    power: '265 PS (195 kW) @ 5,250–6,500 RPM',
    powerHp: 265,
    torque: '370 Nm @ 1,600–4,300 RPM',
    torqueNm: 370,
    acceleration0to100: '6.5 Seconds',
    accelSeconds: 6.5,
    topSpeed: '250 km/h (Electronically Governed)',
    topSpeedKmh: 250,
    transmission: '7-Speed DSG Dual-Clutch with Shift-by-Wire & Launch Control',
    drivetrain: 'Front-Wheel Drive with VAQ Electro-Mechanical Limited-Slip Diff',
    diffOrAwd: 'VAQ Front Limited-Slip Differential with 100% Torque Vectoring Lock',
    exhaustSystem: 'Twin Trapezoidal Chrome Sports Exhaust with Dynamic Sound Booster',
    brakes: '17-inch Ventilated Discs with Fiery Gloss Red RS Calipers',
    suspension: 'RS Sport Chassis lowered by 15 mm with DCC Plus (15 Damping Levels) & self-levelling rear',
    boostPsi: 21.8,
    revLimit: 6800,
    tractionType: 'VAQ E-Diff',
    bootAndSeating: '5 Seats • 640L–1,700L Estate (largest boot of any vRS ever built)',
    keyWeaponSummary: 'Same VAQ front differential and 265 PS EA888 as the liftback, but stretched into a 640-litre load-lugging estate body — the enthusiast\'s answer to "why not both".',
    heroColorHex: '#84cc16',
    heroColorName: 'Mamba Green',
    colors: [
      { name: 'Mamba Green', hex: '#84cc16', desc: 'The estate-only signature acid hue, rarely seen outside Europe' },
      { name: 'Race Blue Metallic', hex: '#1d4ed8', desc: 'Signature RS racing livery shade' },
      { name: 'Velvet Red Metallic', hex: '#b91c1c', desc: 'Deep crimson performance finish' },
      { name: 'Magic Black Pearl', hex: '#0f172a', desc: 'Stealth blackout night runner finish' },
      { name: 'Moon White Metallic', hex: '#f8fafc', desc: 'Crisp rally contrast with gloss black pack' }
    ],
    weaponry: [
      {
        title: 'VAQ Electro-Mechanical Limited Slip Differential',
        badge: 'Cornering Weapon',
        description: 'The identical multi-plate front diff from the Octavia vRS liftback, unchanged despite the estate\'s longer wheelbase and extra 55 kg of rear bodywork.',
        icon: 'Flame'
      },
      {
        title: 'Self-Levelling Rear Suspension',
        badge: 'Estate-Exclusive Hardware',
        description: 'Hydro-pneumatic self-levelling struts compensate automatically for a fully loaded 640L boot, keeping the DCC Plus geometry — and the VAQ diff\'s bite — consistent whether empty or packed for a track-day trailer run.',
        icon: 'Activity'
      },
      {
        title: 'EA888 EVO4 High-Output Turbo-Four',
        badge: '265 PS / 370 Nm',
        description: '350-bar direct injection and electronic wastegate deliver instant boost from 1,600 RPM — identical output to the liftback despite hauling more metal.',
        icon: 'Zap'
      },
      {
        title: 'Powered Tailgate with Virtual Pedal',
        badge: 'Practicality Weapon',
        description: 'A foot-swipe under the rear bumper opens the tailgate hands-free — because a real enthusiast\'s estate still needs to carry four track wheels and a toolbox.',
        icon: 'Luggage'
      },
      {
        title: 'World\'s Quickest Production Estate (at launch)',
        badge: 'Guinness-Verified Record',
        description: 'The Octavia Combi vRS iV plug-in variant set a Guinness World Record for the fastest production estate car, cementing the Combi vRS body style\'s enthusiast cult status.',
        icon: 'Trophy'
      }
    ],
    cockpitFeatures: [
      'Alcantara / Suedia front sport bucket seats with integrated headrests and embossed vRS emblems',
      'Fiery red contrast cross-stitching on dashboard, gear selector, and door panels',
      '3-spoke flat-bottom perforated leather sport steering wheel with dedicated RS Mode button',
      '10.25-inch Virtual Cockpit with exclusive RS Rev Counter & G-Meter sport display view',
      'Folding 60:40 rear bench with ski-hatch pass-through for long cargo runs',
      'Dynamic Sound Generator pumping visceral mechanical intake roar through the cabin',
      '12-Speaker 600W Canton Surround Sound with subwoofer'
    ],
    trackTelemetry: {
      lateralG: '1.00 G (Dry Skidpad, marginally softer than the liftback)',
      weightDistribution: '60 / 40 (Front/Rear)',
      powerToWeight: '169 PS / Tonne',
      braking100to0: '34.8 Metres',
      nurburgringLegacy: 'Shares its VAQ diff and chassis tune with the Nordschleife-honed Octavia vRS liftback'
    }
  }
];

export const RS_HERITAGE = [
  {
    year: '1974',
    title: 'Birth of Rally Sport: Škoda 180 RS & 200 RS',
    desc: 'Škoda first officially adopts the "RS" moniker on bespoke rear-engined rally specials, engineered specifically for high-speed gravel stages with 5-speed Porsche gearboxes.'
  },
  {
    year: '1977',
    title: 'Škoda 130 RS: "The Porsche of the East"',
    desc: 'The iconic 130 RS dominates the European Touring Car Championship and claims a historic class victory at the prestigious Monte Carlo Rally with lightweight aluminium skin.'
  },
  {
    year: '2000',
    title: 'The First Road-Going Octavia RS',
    desc: 'Celebrating 100 years of Škoda motorsport, the Octavia I RS enters production with a 1.8L 20V Turbo engine producing 180 PS, instantly becoming a cult legend.'
  },
  {
    year: '2018',
    title: 'Nürburgring Nordschleife Crown: Kodiaq vRS',
    desc: 'Queen of the Ring Sabine Schmitz blasts the 7-seater Kodiaq vRS around the treacherous Green Hell in 9 minutes 29.84 seconds, setting the world benchmark for 7-seat SUVs.'
  },
  {
    year: '2020',
    title: 'Octavia Combi vRS iV Sets a Guinness World Record',
    desc: 'The plug-in hybrid Combi vRS iV is certified by Guinness World Records as the fastest production estate car, proving 640 litres of boot space and vRS performance were never mutually exclusive.'
  },
  {
    year: 'Today',
    title: 'The Modern Era: 265 PS EA888 EVO4 Mastery',
    desc: 'With VAQ front e-diffs, DCC Plus dual-valve suspension, and 265 PS direct-injection muscle, the modern Octavia vRS, Octavia Combi vRS, and Kodiaq vRS define everyday motorsport exhilaration.'
  }
];

export interface RivalVehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  priceNumericLakh: number;
  engine: string;
  powerHp: number;
  torqueNm: number;
  accelSeconds: number;
  topSpeedKmh: number;
  transmission: string;
  drivetrain: string;
  differentialTech: string;
  seatingAndBoot: string;
  fuelEconomy: string;
  keyStrengths: string[];
  vrsAdvantage: string;
  verdict: string;
}

export interface ModelRivalComparison {
  skodaModelId: 'octavia-vrs' | 'kodiaq-vrs';
  skodaModelName: string;
  heroPitch: string;
  rivals: RivalVehicle[];
}

export const RIVAL_COMPARISONS: ModelRivalComparison[] = [
  {
    skodaModelId: 'octavia-vrs',
    skodaModelName: 'Škoda Octavia vRS',
    heroPitch: 'Why the Octavia vRS dominates the luxury sports sedan category in power, mechanical grip, practicality, and price-to-performance ratio.',
    rivals: [
      {
        id: 'bmw-330i',
        name: 'BMW 330Li / 330i M Sport',
        brand: 'BMW',
        category: 'Executive Luxury Sedan',
        price: '₹60.60 – ₹62.50 Lakh',
        priceNumericLakh: 62.0,
        engine: '2.0L TwinPower Turbo Petrol',
        powerHp: 258,
        torqueNm: 400,
        accelSeconds: 6.2,
        topSpeedKmh: 250,
        transmission: '8-Speed Steptronic Torque Converter',
        drivetrain: 'Rear-Wheel Drive (RWD)',
        differentialTech: 'Standard Open Diff with DSC electronic brake tapping',
        seatingAndBoot: '5 Seats • 480L Traditional Sedan Trunk (fixed aperture)',
        fuelEconomy: '13.0 km/l',
        keyStrengths: ['Prestige BMW propeller badge', 'Rear-wheel drive balance', 'Comfortable stretched wheelbase'],
        vrsAdvantage: 'Octavia vRS packs +7 PS more horsepower, a real electro-mechanical VAQ multi-plate LSD that physically pulls you into apexes, and a colossal 600L liftback that holds spare track wheels—while costing nearly ₹18–20 Lakh less.',
        verdict: 'The Octavia vRS delivers 95% of the prestige and dynamic punch of the 3-Series at a massive 30% savings with vastly superior cargo utility.'
      },
      {
        id: 'mercedes-a35',
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
        vrsAdvantage: 'A35 AMG ride is notoriously stiff and jarring on broken Indian roads. Octavia vRS provides DCC Plus with 15 adaptive damper levels from cloud-soft to track-stiff, expansive rear passenger room, and 180L more boot volume at a substantially lower price.',
        verdict: 'For pure daily usable performance on Indian highways, Octavia vRS is dramatically more livable, comfortable, and affordable to maintain.'
      },
      {
        id: 'audi-a4',
        name: 'Audi A4 40 TFSI Technology',
        brand: 'Audi',
        category: 'Entry Luxury Sedan',
        price: '₹51.85 – ₹53.50 Lakh',
        priceNumericLakh: 52.0,
        engine: '2.0L TFSI Turbo Petrol (EA888 Gen 3)',
        powerHp: 204,
        torqueNm: 320,
        accelSeconds: 7.1,
        topSpeedKmh: 241,
        transmission: '7-Speed S-Tronic Dual-Clutch',
        drivetrain: 'Front-Wheel Drive (FWD)',
        differentialTech: 'Open Differential without LSD lock',
        seatingAndBoot: '5 Seats • 460L Sedan Boot',
        fuelEconomy: '17.4 km/l',
        keyStrengths: ['Understated executive styling', 'Virtual cockpit graphics', 'Comfort-oriented suspension'],
        vrsAdvantage: 'Octavia vRS completely outguns the A4 40 TFSI with +61 PS extra power, +50 Nm extra torque, 0.7s faster acceleration, mechanical VAQ limited-slip differential, sport exhaust, and 600L liftback for ₹7–9 Lakh less.',
        verdict: 'While the A4 is a calm executive cruiser, the Octavia vRS is an uncompromised sports weapon built on the exact same group engineering with far higher performance output.'
      },
      {
        id: 'hyundai-ioniq5',
        name: 'Hyundai Ioniq 5 EV',
        brand: 'Hyundai',
        category: 'All-Electric Crossover',
        price: '₹46.05 Lakh',
        priceNumericLakh: 46.05,
        engine: '72.6 kWh Battery + Single Rear PMSM Motor',
        powerHp: 217,
        torqueNm: 350,
        accelSeconds: 7.6,
        topSpeedKmh: 185,
        transmission: 'Single-Speed Reduction Gear',
        drivetrain: 'Rear-Wheel Drive (RWD)',
        differentialTech: 'Electronic traction control (Open Diff)',
        seatingAndBoot: '5 Seats • 531L Boot + 57L Frunk',
        fuelEconomy: '631 km ARAI Range (400 km Real-World)',
        keyStrengths: ['Futuristic pixel design', 'Ultra-fast 350kW DC charging', 'Lounge flat seats'],
        vrsAdvantage: 'Octavia vRS provides true visceral motorsport engagement: instantaneous 7-speed DSG paddle-shifts, 265 PS turbo roar, 250 km/h unrestricted top speed (vs 185 km/h EV governor), 3-minute fuel stops on remote ghat roads, and 300 kg lighter kerb weight for genuine corner agility.',
        verdict: 'For enthusiasts who cherish mechanical feedback, engine melody, and cornering precision, the Octavia vRS offers an irreplaceable emotional driving experience.'
      }
    ]
  },
  {
    skodaModelId: 'kodiaq-vrs',
    skodaModelName: 'Škoda Kodiaq vRS',
    heroPitch: 'Why the Kodiaq vRS stands completely unrivaled as a true 7-seater performance weapon against 5-seater luxury SUVs costing ₹15+ Lakh more.',
    rivals: [
      {
        id: 'bmw-x3',
        name: 'BMW X3 xDrive30i M Sport',
        brand: 'BMW',
        category: 'Luxury Mid-Size Performance SUV',
        price: '₹72.50 – ₹74.90 Lakh',
        priceNumericLakh: 73.0,
        engine: '2.0L TwinPower Turbo 4-Cyl Petrol',
        powerHp: 252,
        torqueNm: 350,
        accelSeconds: 6.6,
        topSpeedKmh: 235,
        transmission: '8-Speed Steptronic Sport AT',
        drivetrain: 'xDrive All-Wheel Drive',
        differentialTech: 'Electronic Brake Vectoring (Open Diffs)',
        seatingAndBoot: 'Strictly 5 Seats • 550L Boot',
        fuelEconomy: '11.8 km/l',
        keyStrengths: ['Iconic BMW SAV driving dynamics', 'High brand value', 'Refined cabin quality'],
        vrsAdvantage: 'Kodiaq vRS delivers +13 PS more power, +50 Nm more torque, accelerates 0.3s faster (6.3s vs 6.6s), carries 7 passengers instead of only 5, features active Dynamic Sound Boost exhaust, and saves over ₹17 Lakh.',
        verdict: 'Kodiaq vRS gives you greater straight-line punch, Nürburgring pedigree, and true 7-seater practicality at a fraction of the BMW X3 price.'
      },
      {
        id: 'mercedes-glb35',
        name: 'Mercedes-Benz GLB 35 AMG 4MATIC',
        brand: 'Mercedes-AMG',
        category: 'Compact Performance 7-Seat SUV',
        price: '₹66.00 – ₹70.00 Lakh',
        priceNumericLakh: 67.5,
        engine: '2.0L Turbo AMG Petrol',
        powerHp: 306,
        torqueNm: 400,
        accelSeconds: 5.3,
        topSpeedKmh: 250,
        transmission: '8-Speed AMG Speedshift DCT',
        drivetrain: '4MATIC All-Wheel Drive',
        differentialTech: 'Active multi-disc clutch AWD',
        seatingAndBoot: '5+2 Seats (Tiny 3rd row) • 130L Boot with 3 rows',
        fuelEconomy: '11.5 km/l',
        keyStrengths: ['Blistering 5.3s 0-100 sprint', 'Panamericana AMG grille', 'MBUX augmented reality'],
        vrsAdvantage: 'GLB 35 AMG has a cramped 3rd row with almost zero luggage space (130L) and a punishingly stiff track suspension. Kodiaq vRS features DCC Plus dual-valve adaptive dampers that absorb rough roads smoothly, generous 7-seat room, up to 2,065L luggage volume, and costs ~₹12 Lakh less.',
        verdict: 'The Kodiaq vRS strikes the perfect golden ratio between genuine 7-seat family usability, compliant Indian road ride, and rapid sports performance.'
      },
      {
        id: 'audi-q5',
        name: 'Audi Q5 45 TFSI Technology Quattro',
        brand: 'Audi',
        category: 'Mid-Size Luxury SUV',
        price: '₹68.50 – ₹71.00 Lakh',
        priceNumericLakh: 69.0,
        engine: '2.0L TFSI Turbo Petrol (EA888)',
        powerHp: 265,
        torqueNm: 370,
        accelSeconds: 6.1,
        topSpeedKmh: 240,
        transmission: '7-Speed S-Tronic Dual-Clutch',
        drivetrain: 'Quattro Ultra AWD',
        differentialTech: 'Quattro multi-plate clutch system',
        seatingAndBoot: 'Strictly 5 Seats • 520L Boot',
        fuelEconomy: '13.4 km/l',
        keyStrengths: ['Pristine Audi Matrix LED lighting', 'Bang & Olufsen audio', 'Silky quiet highway cruising'],
        vrsAdvantage: 'Both cars share the core EA888 architecture, but Kodiaq vRS is tuned with +30 Nm more torque (400 Nm vs 370 Nm), includes 3 rows of seating for 7 passengers, boasts active acoustic exhaust valves, and leaves over ₹13 Lakh in your bank account.',
        verdict: 'Why pay ₹13 Lakh extra for a 5-seater Audi when the Kodiaq vRS provides identical power, more torque, 7 seats, and race-bred RS suspension tuning?'
      },
      {
        id: 'toyota-fortuner-grs',
        name: 'Toyota Fortuner GR-Sport 4x4',
        brand: 'Toyota',
        category: 'Ladder-Frame Rugged SUV',
        price: '₹51.44 – ₹53.00 Lakh',
        priceNumericLakh: 51.5,
        engine: '2.8L 4-Cylinder D-4D Turbo Diesel',
        powerHp: 204,
        torqueNm: 500,
        accelSeconds: 10.5,
        topSpeedKmh: 175,
        transmission: '6-Speed Torque Converter AT',
        drivetrain: 'Part-Time 4x4 with Low-Range Transfer Case',
        differentialTech: 'Auto Limited Slip Differential (Traction Control based)',
        seatingAndBoot: '7 Seats • 296L Boot with 3 rows',
        fuelEconomy: '10.5 km/l',
        keyStrengths: ['Bulletproof body-on-frame durability', 'High resale value in India', 'Deep water wading & rock crawling'],
        vrsAdvantage: 'Kodiaq vRS is a world-class monocoque machine: 0–100 km/h in 6.3s (4.2 seconds faster than Fortuner!), 232 km/h top speed, zero high-speed body roll, 15-stage DCC Plus dampers, 5-Star Euro NCAP active safety, and refined European luxury vs a bouncy commercial truck chassis.',
        verdict: 'If you want tarmac supremacy, high-speed touring stability, and rapid overtaking rather than rock crawling, Kodiaq vRS is light years ahead.'
      }
    ]
  }
];

