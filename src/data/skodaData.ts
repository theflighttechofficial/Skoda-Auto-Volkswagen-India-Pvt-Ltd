import { EngineSpec, Variant, CarColor, FAQItem } from '../types';

export interface SkodaModel {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  image: string;
  enthusiastNote?: string;
  /** True for models referenced on the site (e.g. global-market Jetta GLI) that are not officially sold in India — official CBU/CKD channels included. UI should visibly flag this instead of showing a purchasable Indian price. */
  notSoldInIndia?: boolean;
  bodyType: 'Compact SUV' | 'Premium Sedan' | 'Midsize SUV' | 'Luxury 4x4 SUV' | 'Executive Sedan' | 'Compact Sedan' | 'Hatchback' | 'Estate' | 'Heavy Truck' | 'Tractor-Trailer' | 'City Bus' | 'Coach Bus';
  startingPrice: string;
  startingExShowroom: number;
  priceRange: string;
  rating: string;
  safetyStars: number;
  engines: string[];
  keyHighlights: string[];
  dimensions: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
    groundClearance: string;
    bootSpace: string;
    fuelTank: string;
  };
  variants: Variant[];
  colors: CarColor[];
}

export const ALL_SKODA_ENGINES: EngineSpec[] = [
  {
    id: '1.0-tsi',
    name: '1.0L TSI Turbo-Petrol',
    badge: '1.0 TSI (3-Cylinder Turbo)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '999 cc',
    cylinders: 3,
    power: '115 PS (85 kW) @ 5,000–5,500 RPM',
    powerHp: 115,
    torque: '178 Nm @ 1,750–4,500 RPM',
    torqueNm: 178,
    transmissions: ['6-Speed Manual', '6-Speed Torque Converter AT'],
    acceleration: '0–100 km/h in 10.5–10.9s',
    topSpeed: '188–190 km/h',
    claimedMileage: '19.2 – 20.3 km/l',
    realWorldCity: '11.5 – 13.5 km/l',
    realWorldHighway: '16.5 – 19.0 km/l',
    keyHighlights: [
      'Lively low-end and strong mid-range turbo punch from 1,750 RPM',
      'Robust Japanese AISIN 6-speed torque converter automatic option',
      'Start-Stop recuperation for optimal city efficiency',
      'Available in Kylaq, Slavia, and Kushaq'
    ],
    description: 'The backbone of Skoda India’s volume lineup. Delivers punchy urban performance with 178 Nm of torque, low maintenance, and impressive fuel efficiency.'
  },
  {
    id: '1.5-tsi',
    name: '1.5L TSI EVO Turbo-Petrol with ACT',
    badge: '1.5 TSI EVO (4-Cylinder Turbo)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,498 cc',
    cylinders: 4,
    power: '150 PS (110 kW) @ 5,000–6,000 RPM',
    powerHp: 150,
    torque: '250 Nm @ 1,600–3,500 RPM',
    torqueNm: 250,
    transmissions: ['6-Speed Manual', '7-Speed DSG (Dual-Clutch)'],
    acceleration: '0–100 km/h in 8.6–8.8s',
    topSpeed: '205 km/h',
    claimedMileage: '18.4 – 19.4 km/l',
    realWorldCity: '10.0 – 12.5 km/l',
    realWorldHighway: '17.0 – 20.5 km/l (with ACT 2-cylinder mode)',
    keyHighlights: [
      'Active Cylinder Technology (ACT) deactivates 2 cylinders under light throttle to save fuel',
      'Lightning-fast 7-speed DSG dual-clutch transmission with paddle shifters',
      'Enthusiast-favourite 250 Nm pulling power from 1,600 RPM',
      'Available in Slavia and Kushaq'
    ],
    description: 'Pure performance engineering. Combines 150 horsepower with fuel-saving cylinder deactivation and razor-sharp gear shifts for unmatched highway prowess.'
  },
  {
    id: '2.0-tsi',
    name: '2.0L TSI Turbo-Petrol 4x4 / DSG',
    badge: '2.0 TSI (4-Cylinder Turbo)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,984 cc',
    cylinders: 4,
    power: '190 PS (140 kW) @ 4,200–6,000 RPM',
    powerHp: 190,
    torque: '320 Nm @ 1,500–4,100 RPM',
    torqueNm: 320,
    transmissions: ['7-Speed DSG 4x4', '7-Speed DSG Front-Wheel Drive'],
    acceleration: '0–100 km/h in 7.7s',
    topSpeed: '215 km/h',
    claimedMileage: '13.3 – 15.1 km/l',
    realWorldCity: '8.0 – 9.5 km/l',
    realWorldHighway: '13.0 – 15.0 km/l',
    keyHighlights: [
      '320 Nm colossal torque available as early as 1,500 RPM',
      'Intelligent 4x4 all-wheel drive with off-road and snow driving modes',
      'Dynamic Chassis Control (DCC) electronic damping adaptation',
      'Powers the Octavia, Kodiaq luxury 7-seater, and executive Superb'
    ],
    description: 'Flagship European muscle. Silky-smooth high-displacement turbocharging that delivers effortless cruising, mountain climbing, and supreme refinement.'
  },
  {
    id: '1.8-tdi',
    name: '1.8L TDI CR Turbo-Diesel',
    badge: '1.8 TDI (4-Cylinder Diesel)',
    fuelType: 'Diesel',
    fuelPriceDefault: 90,
    displacement: '1,798 cc',
    cylinders: 4,
    power: '140 PS (103 kW) @ 4,000 RPM',
    powerHp: 140,
    torque: '320 Nm @ 1,750–2,500 RPM',
    torqueNm: 320,
    transmissions: ['6-Speed Manual', '6-Speed DSG Automatic'],
    acceleration: '0–100 km/h in 9.2s',
    topSpeed: '210 km/h',
    claimedMileage: '20.6 km/l',
    realWorldCity: '13.5 – 15.5 km/l',
    realWorldHighway: '19.5 – 23.0 km/l',
    keyHighlights: [
      'Massive 320 Nm low-end torque available right from 1,750 RPM for surge overtakes',
      'High-pressure Common Rail Direct Injection with Piezo injectors',
      'Cross-country range exceeding 1,100 km on a single full tank',
      'Famed for bulletproof durability across Octavia and Superb'
    ],
    description: 'The benchmark of European diesel torque and fuel economy. Celebrated across India for muscular low-end grunt, unshakeable highway cruising poise, and remarkable 20+ km/l long-distance efficiency.'
  },
  {
    id: '2.0-tdi',
    name: '2.0L TDI CR EVO Turbo-Diesel',
    badge: '2.0 TDI (4-Cylinder Diesel)',
    fuelType: 'Diesel',
    fuelPriceDefault: 90,
    displacement: '1,968 cc',
    cylinders: 4,
    power: '190 PS (140 kW) @ 3,500–4,000 RPM',
    powerHp: 190,
    torque: '400 Nm @ 1,750–3,000 RPM',
    torqueNm: 400,
    transmissions: ['7-Speed DSG (Wet-Clutch DQ381)', '6-Speed DSG Automatic'],
    acceleration: '0–100 km/h in 7.9s',
    topSpeed: '235 km/h',
    claimedMileage: '19.8 – 21.2 km/l',
    realWorldCity: '13.0 – 14.5 km/l',
    realWorldHighway: '18.5 – 22.5 km/l',
    keyHighlights: [
      'Colossal 400 Nm torque plateau for locomotive-like highway pulling power',
      'Twin-dosing SCR system with dual AdBlue injection for ultra-clean emissions',
      'Heavy-duty wet-clutch DSG transmission built for high-torque executive driving',
      'Executive flagship powertrain powering the Superb and Octavia'
    ],
    description: 'The executive diesel powerhouse. Combines 400 Nm of relentless pulling power with silky gear shifts, high-speed acoustic isolation, and unmatched cross-continent cruising range.'
  },
  {
    id: '1.8-tsi-160',
    name: '1.8L TSI EA888 Turbo-Petrol',
    badge: '1.8 TSI (4-Cylinder, 160 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,798 cc',
    cylinders: 4,
    power: '160 PS (118 kW) @ 4,500–6,200 RPM',
    powerHp: 160,
    torque: '250 Nm @ 1,500–4,200 RPM',
    torqueNm: 250,
    transmissions: ['6-Speed Manual', '6-Speed DSG Automatic'],
    acceleration: '0–100 km/h in 8.9–9.3s',
    topSpeed: '203 km/h',
    claimedMileage: '13.5 – 14.2 km/l',
    realWorldCity: '8.5 – 10.0 km/l',
    realWorldHighway: '13.0 – 15.5 km/l',
    keyHighlights: [
      'Powered the Škoda Laura and Yeti 4x4 as the enthusiast petrol pick of its era',
      'EA888 turbo-petrol architecture with fully variable valve timing',
      'Strong mid-range torque plateau from just 1,500 RPM',
      'Renowned for smooth, refined power delivery versus contemporary diesels'
    ],
    description: 'A refined 4-cylinder turbo-petrol from the celebrated EA888 family, offering strong, linear performance and a smoother, quieter alternative to the common-rail diesels of its generation.'
  },
  {
    id: '1.8-tsi-combi',
    name: '1.8L Turbo-Petrol (Octavia Combi Era)',
    badge: '1.8 Turbo (4-Cylinder, 150 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,781 cc',
    cylinders: 4,
    power: '150 PS (110 kW) @ 4,000 RPM',
    powerHp: 150,
    torque: '210 Nm @ 1,750–4,600 RPM',
    torqueNm: 210,
    transmissions: ['5-Speed Manual'],
    acceleration: '0–100 km/h in 9.5s',
    topSpeed: '212 km/h',
    claimedMileage: '12.5 – 13.5 km/l',
    realWorldCity: '8.0 – 9.5 km/l',
    realWorldHighway: '12.5 – 14.5 km/l',
    keyHighlights: [
      'Powered the original India-market Octavia Combi vRS estate',
      'Classic 20-valve turbocharged inline-4 from the Volkswagen Group EA827 lineage',
      'Broad, usable torque band ideal for estate-car cruising with a full load',
      'A cult favorite among early Škoda India performance enthusiasts'
    ],
    description: 'The turbo-petrol heart of the original Octavia Combi vRS, offering brisk performance and a distinctive turbo growl that built an early enthusiast following for Škoda in India.'
  },
  {
    id: '1.9-tdi-pd90',
    name: '1.9L TDI PD Turbo-Diesel',
    badge: '1.9 TDI (4-Cylinder, 90 PS)',
    fuelType: 'Diesel',
    fuelPriceDefault: 90,
    displacement: '1,896 cc',
    cylinders: 4,
    power: '90 PS (66 kW) @ 4,000 RPM',
    powerHp: 90,
    torque: '210 Nm @ 1,900 RPM',
    torqueNm: 210,
    transmissions: ['5-Speed Manual'],
    acceleration: '0–100 km/h in 13.5s',
    topSpeed: '178 km/h',
    claimedMileage: '17.5 – 18.5 km/l',
    realWorldCity: '13.0 – 14.5 km/l',
    realWorldHighway: '17.5 – 20.0 km/l',
    keyHighlights: [
      'Pump-Duse (PD) unit-injector diesel technology for high injection pressure',
      'Base engine option for the India-market Octavia Combi estate',
      'Renowned for reliability and long service intervals',
      'Modest output prioritizes efficiency and low-end drivability'
    ],
    description: 'A dependable pump-duse diesel unit known across the Volkswagen Group for its longevity and frugal running costs, if modest in outright power.'
  },
  {
    id: '1.9-tdi-pd105',
    name: '1.9L TDI PD Turbo-Diesel',
    badge: '1.9 TDI (4-Cylinder, 105 PS)',
    fuelType: 'Diesel',
    fuelPriceDefault: 90,
    displacement: '1,896 cc',
    cylinders: 4,
    power: '105 PS (77 kW) @ 4,000 RPM',
    powerHp: 105,
    torque: '250 Nm @ 1,900 RPM',
    torqueNm: 250,
    transmissions: ['5-Speed Manual'],
    acceleration: '0–100 km/h in 11.3s',
    topSpeed: '185 km/h',
    claimedMileage: '17.0 – 18.0 km/l',
    realWorldCity: '12.5 – 14.0 km/l',
    realWorldHighway: '17.0 – 19.5 km/l',
    keyHighlights: [
      'Base diesel option across the Škoda Laura sedan lineup',
      'Pump-Duse (PD) unit-injector diesel technology',
      'Strong low-end torque suited to Indian city and highway driving',
      'One of the most trusted diesel engines of its generation'
    ],
    description: 'The workhorse diesel of the Laura range, prized for its robust torque delivery and long-term reliability across hundreds of thousands of kilometers.'
  },
  {
    id: '2.0-tdi-140',
    name: '2.0L TDI CR Turbo-Diesel',
    badge: '2.0 TDI CR (4-Cylinder, 140 PS)',
    fuelType: 'Diesel',
    fuelPriceDefault: 90,
    displacement: '1,968 cc',
    cylinders: 4,
    power: '140 PS (103 kW) @ 4,200 RPM',
    powerHp: 140,
    torque: '320 Nm @ 1,750–2,500 RPM',
    torqueNm: 320,
    transmissions: ['6-Speed Manual', '6-Speed DSG Automatic'],
    acceleration: '0–100 km/h in 9.8s',
    topSpeed: '198 km/h',
    claimedMileage: '18.5 – 19.5 km/l',
    realWorldCity: '13.0 – 14.5 km/l',
    realWorldHighway: '18.0 – 21.0 km/l',
    keyHighlights: [
      'Powered the flagship Laura 2.0 TDI AT L&K and the Yeti 4x4 Elegance',
      'Common-rail direct injection replacing the earlier pump-duse units',
      'Strong 320 Nm torque plateau ideal for 4x4 towing and overtaking',
      'Paired with Škoda’s proven 6-speed DSG automatic'
    ],
    description: 'The flagship common-rail diesel of its generation, offering a muscular torque band and refined cruising manners across both the Laura sedan and Yeti 4x4.'
  },
  {
    id: '2.0-tdi-110',
    name: '2.0L TDI CR Turbo-Diesel',
    badge: '2.0 TDI CR (4-Cylinder, 110 PS)',
    fuelType: 'Diesel',
    fuelPriceDefault: 90,
    displacement: '1,968 cc',
    cylinders: 4,
    power: '110 PS (81 kW) @ 4,200 RPM',
    powerHp: 110,
    torque: '250 Nm @ 1,500–2,500 RPM',
    torqueNm: 250,
    transmissions: ['5-Speed Manual', '6-Speed Manual'],
    acceleration: '0–100 km/h in 11.8s',
    topSpeed: '175 km/h',
    claimedMileage: '19.5 – 20.5 km/l',
    realWorldCity: '14.5 – 16.0 km/l',
    realWorldHighway: '19.0 – 21.5 km/l',
    keyHighlights: [
      'Entry-level 4x2 diesel option across the Škoda Yeti Ambition and Elegance trims',
      'High-pressure common-rail direct injection',
      'ARAI-tested mileage of up to 17.7 km/l for the 4x4 variant',
      'Favored for its low running costs among compact SUV buyers'
    ],
    description: 'The efficient entry-point diesel of the Yeti range, offering strong fuel economy and adequate everyday performance for front-wheel-drive city and highway use.'
  }
];

export const SKODA_MODELS: SkodaModel[] = [
  {
    id: 'kylaq',
    image: '/cars/kylaq.jpg',
    enthusiastNote: 'The Kylaq\'s name is rooted in the Sanskrit word for growth — Škoda\'s India lineup (Kushaq, Kylaq) draws deliberately from Sanskrit and Indian-language roots.',
    name: 'Škoda Kylaq',
    badge: 'New Sub-4m Compact SUV',
    tagline: 'Bold, agile, and engineered with uncompromised European safety',
    bodyType: 'Compact SUV',
    startingPrice: '₹7.89 Lakh',
    startingExShowroom: 789000,
    priceRange: '₹7.89 – ₹14.39 Lakh',
    rating: '5-Star Safety Architecture',
    safetyStars: 5,
    engines: ['1.0L TSI (115 PS / 178 Nm)'],
    keyHighlights: [
      'Sub-4 metre footprint with class-leading 446L luggage capacity',
      'Segment-first ventilated front seats and 6-way power adjustments',
      '189 mm unladen ground clearance with tough cladding & roof rails',
      '25+ standard active and passive safety features including 6 airbags & ESC',
      'Single-pane electric sunroof & 10.1-inch floating touchscreen'
    ],
    dimensions: {
      length: '3,995 mm',
      width: '1,783 mm',
      height: '1,617 mm',
      wheelbase: '2,566 mm',
      groundClearance: '189 mm',
      bootSpace: '446 Litres (Expandable to 1,265L)',
      fuelTank: '45 Litres'
    },
    variants: [
      {
        id: 'kylaq-classic',
        name: 'Kylaq Classic',
        tagline: 'The robust entry into European SUV safety and Czech design',
        priceRange: '₹7.89 – ₹8.99 Lakh',
        baseExShowroom: 789000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          '6 Airbags as standard',
          'Electronic Stability Control (ESC) & Multi-Collision Braking',
          'ISOFIX child seat mounts',
          'Central locking with remote key',
          'All four power windows',
          'Digital instrument cluster with driver display'
        ],
        exteriorHighlights: ['16-inch steel wheels with covers', 'LED daytime running lights', 'Black roof rails'],
        interiorHighlights: ['Dual-tone dark interior', 'Fabric seating', 'Manual air conditioning with dust filter'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'kylaq-signature',
        name: 'Kylaq Signature / Signature+',
        tagline: 'The volume favourite with connected tech & alloy wheels',
        priceRange: '₹9.59 – ₹11.40 Lakh',
        baseExShowroom: 959000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Automatic'],
        isPopular: true,
        keyFeatures: [
          '10.1-inch Touchscreen with Wireless Apple CarPlay & Android Auto',
          'Climatronic Auto AC with rear AC vents',
          'Rear parking camera with guidance lines',
          'Cruise control & steering mounted controls',
          'Cooled glovebox & dual rear Type-C charging ports'
        ],
        exteriorHighlights: ['16-inch dual-tone alloy wheels', 'Shark fin antenna', 'Rear wiper & washer'],
        interiorHighlights: ['Premium fabric upholstery', 'Leather-wrapped steering wheel', 'Front center armrest'],
        badgeColor: 'bg-blue-600 text-white'
      },
      {
        id: 'kylaq-prestige',
        name: 'Kylaq Prestige',
        tagline: 'Top-tier luxury with ventilated seats & electric sunroof',
        priceRange: '₹12.35 – ₹14.39 Lakh',
        baseExShowroom: 1235000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Automatic'],
        isFlagship: true,
        keyFeatures: [
          'Ventilated front seats (cooling)',
          '6-way electric driver & passenger seat adjustments',
          'Electric sunroof with anti-pinch',
          '8-inch Digital Virtual Cockpit instrument cluster',
          'Wireless smartphone charger',
          'Auto-dimming IRVM & automatic rain-sensing wipers',
          'Tyre Pressure Monitoring System (TPMS)'
        ],
        exteriorHighlights: ['17-inch dual-tone diamond cut alloys', 'Full crystalline LED headlights', 'Split LED tail lamps'],
        interiorHighlights: ['Leatherette seat upholstery in stone grey', 'Ambient interior light package', 'Chrome interior package'],
        badgeColor: 'bg-emerald-600 text-white'
      }
    ],
    colors: [
      { id: 'olive-gold', name: 'Olive Gold (Kylaq Exclusive)', hex: '#5f694d', availableOn: ['Signature', 'Prestige'] },
      { id: 'lava-blue-k', name: 'Lava Blue Metallic', hex: '#17365d', availableOn: ['Signature', 'Prestige'] },
      { id: 'tornado-red-k', name: 'Tornado Red', hex: '#b91c1c', roofHex: '#18181b', isDualTone: true, availableOn: ['Prestige'] },
      { id: 'candy-white-k', name: 'Candy White', hex: '#f8fafc', roofHex: '#18181b', isDualTone: true, availableOn: ['Classic', 'Signature', 'Prestige'] },
      { id: 'carbon-steel-k', name: 'Carbon Steel', hex: '#334155', availableOn: ['Classic', 'Signature', 'Prestige'] },
      { id: 'brilliant-silver-k', name: 'Brilliant Silver', hex: '#cbd5e1', availableOn: ['Classic', 'Signature', 'Prestige'] }
    ]
  },
  {
    id: 'slavia',
    image: '/cars/slavia.jpg',
    enthusiastNote: 'Named after the pan-Slavic cultural identity — reviving the spirit of Škoda\'s own pre-war "Slavia" cars built in the 1930s.',
    name: 'Škoda Slavia',
    badge: 'Premium Midsize Sedan',
    tagline: 'The drivers’ sedan with benchmark boot space, safety, and 1.5L TSI DSG',
    bodyType: 'Premium Sedan',
    startingPrice: '₹10.69 Lakh',
    startingExShowroom: 1069000,
    priceRange: '₹10.69 – ₹18.69 Lakh',
    rating: '5-Star Global NCAP (Adult & Child)',
    safetyStars: 5,
    engines: ['1.0L TSI (115 PS)', '1.5L TSI EVO (150 PS DSG)'],
    keyHighlights: [
      'Highest safety score in segment: 5-Star Global NCAP (29.71/34 Adult, 42/49 Child)',
      'Segment-leading 521-litre boot capacity expandable to 1,050 litres',
      '179 mm high ground clearance handles bad roads and humps effortlessly',
      'Enthusiast 1.5L TSI EVO with 250 Nm torque & Active Cylinder Tech',
      'Monte Carlo edition with blacked-out Savio wheels, 360 camera & red accents'
    ],
    dimensions: {
      length: '4,541 mm',
      width: '1,752 mm',
      height: '1,507 mm',
      wheelbase: '2,651 mm',
      groundClearance: '179 mm',
      bootSpace: '521 Litres (Expandable to 1,050L)',
      fuelTank: '45 Litres'
    },
    variants: [
      {
        id: 'slavia-classic',
        name: 'Slavia Classic',
        tagline: 'Standard 6 airbags and Czech chassis precision',
        priceRange: '₹10.69 – ₹12.49 Lakh',
        baseExShowroom: 1069000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          '6 Airbags standard across all variants',
          'Electronic Stability Control (ESC) & Multi-Collision Braking',
          'ISOFIX child seat anchors',
          '7-inch Touchscreen Infotainment',
          'Rear Parking Sensors & Anti-Theft Alarm',
          'Tilt & telescopic steering wheel adjustment'
        ],
        exteriorHighlights: ['15-inch steel wheels with covers', 'Halogen headlamps with LED DRLs', 'Signature chrome radiator grille border'],
        interiorHighlights: ['Dual-tone black & beige theme', 'Fabric upholstery', 'Manual air conditioning'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'slavia-signature',
        name: 'Slavia Signature',
        tagline: 'The value sweet spot with 10-inch screen & rear camera',
        priceRange: '₹13.50 – ₹15.50 Lakh',
        baseExShowroom: 1350000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Automatic'],
        isPopular: true,
        keyFeatures: [
          '10.1-inch Touchscreen with Wireless Apple CarPlay & Android Auto',
          '16-inch Scimitar Alloy Wheels',
          'Rear View Camera with dynamic guidelines',
          'Climatronic Auto AC with Air Care filtration',
          'Cruise Control & Paddle Shifters (AT)',
          'Keyless Entry with Push Button Start (KESSY)'
        ],
        exteriorHighlights: ['16-inch dual-tone alloys', 'Shark fin antenna', 'Split LED tail lamps'],
        interiorHighlights: ['Leather-wrapped steering wheel', 'Cooled glovebox', 'Rear center armrest with cup holders'],
        badgeColor: 'bg-blue-600 text-white'
      },
      {
        id: 'slavia-prestige',
        name: 'Slavia Prestige',
        tagline: 'Flagship luxury with ventilated seats and 10.25-inch virtual cockpit',
        priceRange: '₹15.99 – ₹18.69 Lakh',
        baseExShowroom: 1599000,
        engineOptions: ['1.0L TSI', '1.5L TSI EVO'],
        transmissions: ['6-Speed MT', '6-Speed AT', '7-Speed DSG'],
        keyFeatures: [
          '10.25-inch Digital Virtual Cockpit cluster',
          'Ventilated front cooling seats',
          'Electric front seat adjustments',
          'Electric sunroof with anti-pinch',
          '8-Speaker High-Fidelity Skoda Sound System with Subwoofer',
          'Wireless smartphone charger',
          'Auto-dimming IRVM & rain-sensing wipers'
        ],
        exteriorHighlights: ['16-inch diamond-cut alloys', 'Chrome beltline', 'Full crystalline LED headlights'],
        interiorHighlights: ['Perforated leatherette upholstery', 'Piano black dash trim', 'Illuminated footwell'],
        badgeColor: 'bg-amber-600 text-white'
      },
      {
        id: 'slavia-monte-carlo',
        name: 'Slavia Monte Carlo',
        tagline: 'Motorsport heritage flagship with bespoke black & red styling',
        priceRange: '₹15.00 – ₹18.50 Lakh',
        baseExShowroom: 1500000,
        engineOptions: ['1.0L TSI', '1.5L TSI EVO'],
        transmissions: ['6-Speed MT', '6-Speed AT', '7-Speed DSG'],
        isFlagship: true,
        keyFeatures: [
          'Signature Monte Carlo gloss-black grille and black badges',
          '16-inch Savio Gloss Black Alloy Wheels',
          'Exclusive Black and Red Monte Carlo sports cockpit',
          '10.25-inch Virtual Cockpit with Red motorsport UI skin',
          '360-Degree Area View Camera with 3D obstacle view',
          'Ventilated front sports bucket seats with red contrast stitching',
          'Rear disc brakes on 1.5L TSI EVO DSG'
        ],
        exteriorHighlights: ['Full black roof & black spoiler', 'Monte Carlo chrome-red wing badges', 'Smoked crystalline LED headlights'],
        interiorHighlights: ['Ruby red dashboard inlay', 'Monte Carlo door scuff plates', 'Stainless steel sport pedals'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'cherry-red-s', name: 'Cherry Red / Dual-Tone Black Roof', hex: '#9e1b26', roofHex: '#18181b', isDualTone: true, availableOn: ['Signature', 'Prestige', 'Monte Carlo'] },
      { id: 'shimla-green-s', name: 'Shimla Green', hex: '#1e3d30', availableOn: ['Signature', 'Prestige', 'Monte Carlo'] },
      { id: 'steel-grey-s', name: 'Steel Grey', hex: '#64748b', availableOn: ['Monte Carlo'] },
      { id: 'lava-blue-s', name: 'Lava Blue Deep Metallic', hex: '#17365d', availableOn: ['Signature', 'Prestige'] },
      { id: 'candy-white-s', name: 'Candy White', hex: '#f8fafc', roofHex: '#18181b', isDualTone: true, availableOn: ['Classic', 'Signature', 'Prestige', 'Monte Carlo'] },
      { id: 'brilliant-silver-s', name: 'Brilliant Silver', hex: '#cbd5e1', availableOn: ['Classic', 'Signature', 'Prestige'] },
      { id: 'carbon-steel-s', name: 'Carbon Steel Metallic', hex: '#334155', availableOn: ['Classic', 'Signature', 'Prestige'] }
    ]
  },
  {
    id: 'kushaq',
    image: '/cars/kushaq.avif',
    enthusiastNote: 'Kushaq translates to "ruler" or "emperor" in Sanskrit — it was the first Škoda nameplate engineered from a blank sheet specifically for India.',
    name: 'Škoda Kushaq',
    badge: 'Midsize SUV',
    tagline: 'Solid European SUV presence with 188 mm ground clearance & 5-Star safety',
    bodyType: 'Midsize SUV',
    startingPrice: '₹10.89 Lakh',
    startingExShowroom: 1089000,
    priceRange: '₹10.89 – ₹18.79 Lakh',
    rating: '5-Star Global NCAP (Adult & Child)',
    safetyStars: 5,
    engines: ['1.0L TSI (115 PS)', '1.5L TSI EVO (150 PS DSG)'],
    keyHighlights: [
      'Pioneered the 5-Star Global NCAP safety era in India under tough updated protocols',
      '188 mm ground clearance with rugged approach/departure angles for rough terrains',
      'Explosive 1.5L TSI EVO (150 PS / 250 Nm) with 7-speed DSG & cylinder deactivation',
      'Ventilated leatherette seating & 10.25-inch Virtual Cockpit',
      'Monte Carlo and Onyx editions with sport aesthetics and black styling'
    ],
    dimensions: {
      length: '4,225 mm',
      width: '1,760 mm',
      height: '1,612 mm',
      wheelbase: '2,651 mm',
      groundClearance: '188 mm',
      bootSpace: '385 Litres (Expandable to 1,405L)',
      fuelTank: '50 Litres'
    },
    variants: [
      {
        id: 'kushaq-classic',
        name: 'Kushaq Classic',
        tagline: 'Essential 5-star European safety and pure driving dynamics',
        priceRange: '₹10.89 – ₹12.59 Lakh',
        baseExShowroom: 1089000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          '6 Airbags as standard',
          'Electronic Stability Control (ESC) with Hill Hold Control',
          'Multi-Collision Braking (MKB)',
          '7-inch touchscreen infotainment',
          'Rear parking sensors and anti-theft alarm',
          'Tilt & telescopic steering'
        ],
        exteriorHighlights: ['16-inch steel wheels with full covers', 'LED daytime running lights', 'Matte black roof rails'],
        interiorHighlights: ['Dual-tone black & grey cabin', 'Fabric seating', 'Manual air conditioner'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'kushaq-signature',
        name: 'Kushaq Signature',
        tagline: 'The preferred family SUV choice with connected infotainment',
        priceRange: '₹13.79 – ₹15.89 Lakh',
        baseExShowroom: 1379000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Automatic'],
        isPopular: true,
        keyFeatures: [
          '10.1-inch high-definition touchscreen',
          'Wireless Apple CarPlay & Android Auto',
          '16-inch Grus alloy wheels',
          'Rear parking camera with dynamic guidance',
          'Climatronic auto AC with air filtration',
          'Cruise control and paddle shifters (AT)'
        ],
        exteriorHighlights: ['16-inch silver alloys', 'Silver front and rear scuff plates', 'Split LED tail lamps'],
        interiorHighlights: ['Ambient interior lighting', 'Front center armrest', 'Cooled glovebox'],
        badgeColor: 'bg-blue-600 text-white'
      },
      {
        id: 'kushaq-prestige',
        name: 'Kushaq Prestige',
        tagline: 'Top-of-the-line luxury with sunroof & ventilated front seats',
        priceRange: '₹16.09 – ₹18.79 Lakh',
        baseExShowroom: 1609000,
        engineOptions: ['1.0L TSI', '1.5L TSI EVO'],
        transmissions: ['6-Speed MT', '6-Speed AT', '7-Speed DSG'],
        keyFeatures: [
          'Ventilated front cooling seats',
          'Electric sunroof with anti-pinch',
          '10.25-inch Digital Virtual Cockpit',
          'Skoda Sound System with 6 speakers & subwoofer',
          'Wireless smartphone charging pad',
          'Rain sensing wipers and auto headlamps',
          'TPMS tyre pressure monitor'
        ],
        exteriorHighlights: ['17-inch Atlas dual-tone alloy wheels', 'Full crystalline LED headlights', 'Chrome window accents'],
        interiorHighlights: ['Perforated leatherette seating', 'Piano black dash inserts', 'Illuminated footwell'],
        badgeColor: 'bg-amber-600 text-white'
      },
      {
        id: 'kushaq-monte-carlo',
        name: 'Kushaq Monte Carlo',
        tagline: 'Motorsport-inspired styling with black elements & red cabin',
        priceRange: '₹15.90 – ₹18.80 Lakh',
        baseExShowroom: 1590000,
        engineOptions: ['1.0L TSI', '1.5L TSI EVO'],
        transmissions: ['6-Speed MT', '6-Speed AT', '7-Speed DSG'],
        isFlagship: true,
        keyFeatures: [
          'Gloss-black front butterfly grille and black exterior badges',
          '17-inch Vega dual-tone alloy wheels with gloss black finish',
          'Red & Black Monte Carlo theme interior',
          '10.25-inch Virtual Cockpit with motorsport theme graphics',
          'Ventilated sports seats with red accent stripes',
          'Aluminum sport foot pedals'
        ],
        exteriorHighlights: ['Gloss black roof and black roof rails', 'Monte Carlo front wing badges', 'Smoked LED tail lamps'],
        interiorHighlights: ['Ruby red ambient dashboard decor', 'Monte Carlo engraved door sills', 'Red stitch steering wheel'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'cherry-red-k', name: 'Tornado Red / Dual-Tone Black Roof', hex: '#b91c1c', roofHex: '#18181b', isDualTone: true, availableOn: ['Signature', 'Prestige', 'Monte Carlo'] },
      { id: 'honey-orange', name: 'Honey Orange (Kushaq Hero Color)', hex: '#ea580c', availableOn: ['Signature', 'Prestige'] },
      { id: 'deep-black', name: 'Deep Black Pearl', hex: '#09090b', availableOn: ['Monte Carlo', 'Prestige'] },
      { id: 'lava-blue-ku', name: 'Lava Blue', hex: '#17365d', availableOn: ['Signature', 'Prestige'] },
      { id: 'candy-white-ku', name: 'Candy White', hex: '#f8fafc', roofHex: '#18181b', isDualTone: true, availableOn: ['Classic', 'Signature', 'Prestige', 'Monte Carlo'] },
      { id: 'carbon-steel-ku', name: 'Carbon Steel', hex: '#334155', availableOn: ['Classic', 'Signature', 'Prestige'] }
    ]
  },
  {
    id: 'kodiaq',
    image: '/cars/kodiaq-exterior-right-rear-three-quarter-2.avif',
    enthusiastNote: 'Named after Kodiak Island, Alaska — home to the Kodiak bear, one of the largest bear species on Earth, fitting Škoda\'s flagship SUV stature.',
    name: 'Škoda Kodiaq',
    badge: 'Flagship 7-Seater 4x4 Luxury SUV',
    tagline: 'European luxury flagship with 190 PS 2.0L TSI, 4x4, and Dynamic Chassis Control',
    bodyType: 'Luxury 4x4 SUV',
    startingPrice: '₹39.99 Lakh',
    startingExShowroom: 3999000,
    priceRange: '₹39.99 – ₹41.99 Lakh',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['2.0L TSI (190 PS / 320 Nm 4x4 DSG)'],
    keyHighlights: [
      'Colossal 2.0L TSI Turbo-Petrol (190 PS / 320 Nm) with 7-speed DSG & 4x4',
      'Dynamic Chassis Control (DCC) with 5 driving modes adapting ride firmness in real-time',
      'Spacious 7-seater luxury cabin with 3-zone Climatronic auto climate control',
      '9 Airbags standard with 360-degree Area View camera and Park Assist',
      '12-Speaker Canton Premium Surround Sound System (625W output)'
    ],
    dimensions: {
      length: '4,699 mm',
      width: '1,882 mm',
      height: '1,685 mm',
      wheelbase: '2,790 mm',
      groundClearance: '192 mm',
      bootSpace: '270L (7-Seats up) / 630L (3rd row folded) / 2,005L (Max)',
      fuelTank: '58 Litres'
    },
    variants: [
      {
        id: 'kodiaq-style',
        name: 'Kodiaq Style',
        tagline: 'Pure 7-seater European luxury with 4x4 off-road confidence',
        priceRange: '₹39.99 Lakh',
        baseExShowroom: 3999000,
        engineOptions: ['2.0L TSI 4x4'],
        transmissions: ['7-Speed DSG 4x4'],
        keyFeatures: [
          '9 Airbags standard for maximum passenger safety',
          'Intelligent 4x4 all-wheel drive with Off-Road Mode',
          'Panoramic electric sunroof',
          '8-inch infotainment with wireless connectivity',
          '12-way electrically adjustable front seats with memory',
          '3-Zone Climatronic climate control'
        ],
        exteriorHighlights: ['18-inch Trinity alloy wheels', 'Full LED Matrix headlights with AFS', 'Silver roof rails'],
        interiorHighlights: ['Black and beige leather upholstery', 'Ambient lighting with 10 colors', 'Power tailgate'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'kodiaq-lk',
        name: 'Kodiaq Laurin & Klement (L&K)',
        tagline: 'The pinnacle of Czech luxury with DCC & Canton sound',
        priceRange: '₹41.99 Lakh',
        baseExShowroom: 4199000,
        engineOptions: ['2.0L TSI 4x4'],
        transmissions: ['7-Speed DSG 4x4'],
        isFlagship: true,
        keyFeatures: [
          'Dynamic Chassis Control (DCC) with adaptive dampers',
          '12-Speaker 625W Canton Surround Sound System',
          '10.25-inch Digital Virtual Cockpit cluster',
          'Ventilated & heated front cooling seats',
          '360-Degree Area View Camera with automatic Park Assist',
          'Hands-free Virtual Pedal electric tailgate opener'
        ],
        exteriorHighlights: ['18-inch Sirius dual-tone alloys', 'L&K signature chrome grille & badges', 'Illuminated boarding door spots'],
        interiorHighlights: ['Perforated Stone Beige leather with L&K embossing', 'Piano black interior decorative trim', 'Acoustic side window glass'],
        badgeColor: 'bg-amber-600 text-white'
      }
    ],
    colors: [
      { id: 'lava-blue-kod', name: 'Lava Blue Metallic', hex: '#17365d', availableOn: ['Style', 'L&K'] },
      { id: 'magic-black-kod', name: 'Magic Black Metallic', hex: '#111827', availableOn: ['Style', 'L&K'] },
      { id: 'moon-white-kod', name: 'Moon White Metallic', hex: '#f8fafc', availableOn: ['Style', 'L&K'] },
      { id: 'graphite-grey-kod', name: 'Graphite Grey', hex: '#4b5563', availableOn: ['Style', 'L&K'] }
    ]
  },
  {
    id: 'octavia',
    image: '/cars/skoda-octavia-india-launch-delayed-because-of-covid-19.avif',
    enthusiastNote: 'The very first 1959 Octavia earned its name for being Škoda\'s eighth post-war model design — "octavus" is Latin for eighth.',
    name: 'Škoda Octavia',
    badge: 'Executive Liftback Legend',
    tagline: 'The benchmark of driver luxury, high-speed poise, and cavernous 600L liftback versatility',
    bodyType: 'Executive Sedan',
    startingPrice: '₹27.35 Lakh',
    startingExShowroom: 2735000,
    priceRange: '₹27.35 – ₹32.85 Lakh',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['2.0L TSI (190 PS / 320 Nm)', '1.8L TDI (140 PS / 320 Nm)', '2.0L TDI CR EVO (190 PS / 400 Nm)'],
    keyHighlights: [
      'Signature notched liftback opening with class-demolishing 600-litre boot (expands to 1,555L)',
      'Shift-by-wire rocker DSG selector & 10.25-inch Virtual Cockpit with custom display views',
      '12-Speaker Canton 600W acoustic sound system with dedicated digital equalizer & subwoofer',
      'Multi-link independent suspension setup for telepathic European handling dynamics',
      'Standard 8 airbags, Bi-LED Matrix headlights, and 5-Star Euro NCAP safety certification'
    ],
    dimensions: {
      length: '4,689 mm',
      width: '1,829 mm',
      height: '1,469 mm',
      wheelbase: '2,686 mm',
      groundClearance: '156 mm',
      bootSpace: '600 Litres (Expandable to 1,555L)',
      fuelTank: '50 Litres'
    },
    variants: [
      {
        id: 'octavia-style',
        name: 'Octavia Style',
        tagline: 'Contemporary executive elegance with comprehensive digital refinement',
        priceRange: '₹27.35 – ₹28.50 Lakh',
        baseExShowroom: 2735000,
        engineOptions: ['2.0L TSI', '1.8L TDI'],
        transmissions: ['7-Speed DSG', '6-Speed DSG'],
        keyFeatures: [
          '8 Airbags as standard',
          '10-inch Columbus touch system with wireless Apple CarPlay/Android Auto',
          '10.25-inch Digital Virtual Cockpit instrument cluster',
          'Dual-zone Climatronic AC with Air Care particulate filtration',
          'Paddle shifters & electronic parking brake with Auto-Hold'
        ],
        exteriorHighlights: ['17-inch Rotare aero alloys', 'LED headlamps with crystalline DRLs', 'Chrome window surrounds'],
        interiorHighlights: ['Beige & black premium fabric-leatherette upholstery', 'Ambient interior mood lighting (10 colors)', 'Cooled illuminated glovebox'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'octavia-lk',
        name: 'Octavia Laurin & Klement (L&K)',
        tagline: 'Supreme Czech luxury, 600W Canton sound, and Shift-by-Wire DSG',
        priceRange: '₹30.45 – ₹32.85 Lakh',
        baseExShowroom: 3045000,
        engineOptions: ['2.0L TSI', '2.0L TDI CR EVO', '1.8L TDI'],
        transmissions: ['7-Speed DSG', '6-Speed DSG'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          '12-Speaker Canton 600W Premium Surround Sound System',
          'Shift-by-wire transmission rocker toggle',
          'Hands-free Virtual Pedal electric liftback tailgate opener',
          'Park Assist with automated perpendicular & parallel parking steering',
          'Bi-LED Matrix headlights with animated welcome projection',
          'Wireless smartphone charging with cooling pad',
          'Tire Pressure Monitoring System (TPMS)'
        ],
        exteriorHighlights: ['17-inch Pulsar Aero black-diamond cut alloys', 'L&K signature chrome wing emblems', 'Matrix LED with crystalline animations'],
        interiorHighlights: ['Perforated Cognac/Beige suede-leather upholstery', 'Piano black decorative dashboard fascia', 'Rear window mechanical sunblinds'],
        badgeColor: 'bg-amber-600 text-white'
      },
      {
        id: 'octavia-sportline',
        name: 'Octavia Sportline',
        tagline: 'Dynamic stealth optics, sport bucket seats, and progressive steering',
        priceRange: '₹29.25 – ₹31.50 Lakh',
        baseExShowroom: 2925000,
        engineOptions: ['2.0L TSI', '2.0L TDI CR EVO'],
        transmissions: ['7-Speed DSG'],
        keyFeatures: [
          'Integrated front sport bucket seats with integrated headrests',
          'Progressive dynamic steering rack',
          'Aluminium sport pedal caps',
          'Drive Mode Select with Sport throttle profile',
          'Black Alcantara door card inserts'
        ],
        exteriorHighlights: ['Gloss black front butterfly grille surround', '17-inch Perseus anthracite alloys', 'Gloss black rear liftback boot lip spoiler', 'Sportline wing badging'],
        interiorHighlights: ['Black ThermoFlux sport upholstery with contrast grey stitching', '3-spoke flat-bottom leather sport steering wheel', 'Carbon-weave decorative trim'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'lava-blue-oct', name: 'Lava Blue Metallic', hex: '#17365d', availableOn: ['Style', 'L&K'] },
      { id: 'magic-black-oct', name: 'Magic Black Pearl', hex: '#0f172a', availableOn: ['Style', 'L&K', 'Sportline'] },
      { id: 'brilliant-silver-oct', name: 'Brilliant Silver Metallic', hex: '#94a3b8', availableOn: ['Style', 'L&K'] },
      { id: 'candy-white-oct', name: 'Candy White', hex: '#f8fafc', availableOn: ['Style', 'L&K', 'Sportline'] },
      { id: 'race-blue-oct', name: 'Race Blue Metallic', hex: '#1d4ed8', availableOn: ['Sportline'] },
      { id: 'graphite-grey-oct', name: 'Graphite Grey', hex: '#374151', availableOn: ['Style', 'L&K', 'Sportline'] }
    ]
  },
  {
    id: 'superb',
    image: '/cars/superb.jpg',
    enthusiastNote: 'The Superb nameplate dates all the way back to 1934, making it one of the oldest continuously-revived model names in the entire auto industry.',
    name: 'Škoda Superb',
    badge: 'Executive Flagship Sedan',
    tagline: 'Presidential class legroom, acoustic serenity, and twin 2.0L TSI & TDI diesel mastery',
    bodyType: 'Executive Sedan',
    startingPrice: '₹52.50 Lakh',
    startingExShowroom: 5250000,
    priceRange: '₹52.50 – ₹54.00 Lakh',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['2.0L TSI (190 PS / 320 Nm DSG)', '2.0L TDI CR EVO (190 PS / 400 Nm DSG)', '1.8L TDI (140 PS / 320 Nm)'],
    keyHighlights: [
      'Legendary presidential rear legroom unmatched in the luxury executive segment',
      'Dual powertrain supremacy: High-output 2.0L TSI petrol or 400 Nm 2.0L TDI diesel',
      'Dynamic Chassis Control (DCC) with customized suspension damping modes',
      'Massage function for driver’s seat & 3-zone Climatronic climate control',
      'Cavernous 625-litre liftback boot expanding to 1,760 litres'
    ],
    dimensions: {
      length: '4,869 mm',
      width: '1,864 mm',
      height: '1,469 mm',
      wheelbase: '2,841 mm',
      groundClearance: '156 mm',
      bootSpace: '625 Litres (Expandable to 1,760L)',
      fuelTank: '66 Litres'
    },
    variants: [
      {
        id: 'superb-lk',
        name: 'Superb Laurin & Klement',
        tagline: 'Unrivaled European executive comfort, 400 Nm diesel torque, and presidential elegance',
        priceRange: '₹54.00 Lakh',
        baseExShowroom: 5400000,
        engineOptions: ['2.0L TSI', '2.0L TDI Diesel', '1.8L TDI'],
        transmissions: ['7-Speed DSG', '6-Speed DSG'],
        isFlagship: true,
        keyFeatures: [
          '9 Airbags with Crew Protect Assist',
          'Dynamic Chassis Control (DCC) with Drive Mode Select',
          'Park Assist with automated parallel & perpendicular steering',
          'Massage seat function for driver with memory presets',
          'Ventilated front seats & heated rear seats',
          '11-Speaker Canton Sound System with 610W amplifier',
          'Virtual Pedal gesture-controlled power tailgate',
          '3-Zone Climatronic AC with humidity & Air Care sensor'
        ],
        exteriorHighlights: ['18-inch Propus Aero dual-tone alloys', 'Full LED Matrix headlights with animated indicators', 'L&K signature badges'],
        interiorHighlights: ['Cognac brown or black perforated Nappa leather', 'Rear window mechanical sunblinds', 'Soft-touch acoustic dash and double glass'],
        badgeColor: 'bg-amber-600 text-white'
      },
      {
        id: 'superb-sportline',
        name: 'Superb Sportline',
        tagline: 'Athletic dark aesthetics, 400 Nm TDI diesel or 190 PS TSI punch, and sculpted Alcantara cabin',
        priceRange: '₹52.50 Lakh',
        baseExShowroom: 5250000,
        engineOptions: ['2.0L TSI', '2.0L TDI Diesel'],
        transmissions: ['7-Speed DSG'],
        keyFeatures: [
          '9 Airbags as standard',
          'Dynamic Chassis Control (DCC) with Sport damper mode',
          'Alcantara sports seats with integrated headrests',
          '11-Speaker Canton audio system with 610W output',
          'Black styling pack with rear spoiler & diffuser',
          'Electronic Differential Lock (XDS+)'
        ],
        exteriorHighlights: ['Gloss black grille and window surrounds', '18-inch Vega aerodynamic black alloys', 'Matrix LED dark-tinted headlamps'],
        interiorHighlights: ['Black Alcantara & leather upholstery with cross stitching', 'Flat-bottom sport steering wheel', 'Aluminium sport pedal covers'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'rosso-brunello', name: 'Rosso Brunello Metallic', hex: '#4a1525', availableOn: ['L&K'] },
      { id: 'water-world-green', name: 'Water World Green', hex: '#1b3a32', availableOn: ['L&K'] },
      { id: 'magic-black-sup', name: 'Magic Black', hex: '#0f172a', availableOn: ['L&K', 'Sportline'] },
      { id: 'race-blue-sup', name: 'Race Blue Metallic', hex: '#1d4ed8', availableOn: ['Sportline'] }
    ]
  },
  {
    id: 'rapid',
    image: '/cars/rapid.jpg',
    enthusiastNote: 'Škoda revived the Rapid badge from a streamlined 1930s roadster that was once raced competitively across pre-war Europe.',
    name: 'Škoda Rapid',
    badge: 'Enthusiast Hall of Fame Sedan',
    tagline: 'The compact sedan pioneer that brought TSI turbo-petrol thrills to the Indian mid-size segment (2011–2023)',
    bodyType: 'Compact Sedan',
    startingPrice: 'Hall of Fame Legend (2011–2023)',
    startingExShowroom: 819000,
    priceRange: '₹8.19 – ₹12.09 Lakh (Final India Price List)',
    rating: '4-Star Global NCAP (Legacy Protocol)',
    safetyStars: 4,
    engines: ['1.0L TSI (110 PS / 175 Nm)', '1.6L MPI Petrol (105 PS / 153 Nm, Pre-2019)'],
    keyHighlights: [
      'India’s original torque-converter automatic compact sedan, launched in 2011',
      '460-litre boot space — among the largest in the compact sedan class of its era',
      '1.0L TSI 3-cylinder turbo added in the 2019 facelift, replacing the naturally aspirated 1.6 MPI',
      'Monte Carlo edition brought blacked-out sports styling to the value sedan segment',
      'Succeeded by the Slavia in 2022 as Škoda’s MQB-A0-IN sedan flagship',
      'Renowned for rock-solid PQ25 platform rigidity and confident 165 mm ground clearance'
    ],
    dimensions: {
      length: '4,390 mm',
      width: '1,699 mm',
      height: '1,462 mm',
      wheelbase: '2,552 mm',
      groundClearance: '165 mm',
      bootSpace: '460 Litres',
      fuelTank: '55 Litres'
    },
    variants: [
      {
        id: 'rapid-ambition',
        name: 'Rapid Ambition',
        tagline: 'The value-focused entry with essential safety and Škoda build quality',
        priceRange: '₹8.19 – ₹9.49 Lakh',
        baseExShowroom: 819000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          'Dual front airbags standard',
          'Electronic Stability Control (ESC) on select trims',
          'Rear parking sensors',
          '8-inch touchscreen infotainment with Bluetooth',
          'Front power windows and central locking'
        ],
        exteriorHighlights: ['15-inch steel wheels with covers', 'Chrome front grille strip', 'Halogen headlamps'],
        interiorHighlights: ['Black fabric upholstery', 'Manual air conditioning', 'Height-adjustable driver seat'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'rapid-style',
        name: 'Rapid Style / TSI',
        tagline: 'The volume favourite pairing the 1.0 TSI turbo-petrol with automatic convenience',
        priceRange: '₹9.99 – ₹11.29 Lakh',
        baseExShowroom: 999000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Torque Converter AT'],
        isPopular: true,
        keyFeatures: [
          '110 PS / 175 Nm 1.0 TSI turbocharged petrol engine',
          '8-inch touchscreen with Apple CarPlay & Android Auto',
          'Rear parking camera',
          'Cruise control and steering-mounted controls',
          'Alloy wheels with silver finish'
        ],
        exteriorHighlights: ['15-inch dual-tone alloy wheels', 'LED daytime running lights', 'Shark fin antenna'],
        interiorHighlights: ['Beige and black dual-tone cabin', 'Leatherette-wrapped steering wheel', 'Rear center armrest'],
        badgeColor: 'bg-blue-600 text-white'
      },
      {
        id: 'rapid-monte-carlo',
        name: 'Rapid Monte Carlo',
        tagline: 'Blacked-out sports styling that brought motorsport flair to the value sedan segment',
        priceRange: '₹11.49 – ₹12.09 Lakh',
        baseExShowroom: 1149000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Torque Converter AT'],
        isFlagship: true,
        keyFeatures: [
          'Gloss-black grille surround and black ORVMs',
          '16-inch black diamond-cut alloy wheels',
          'Black and red sports cabin theme',
          'Rear defogger with heated ORVMs',
          'Multi-function leather-wrapped sports steering wheel'
        ],
        exteriorHighlights: ['Black roof-mounted shark fin antenna', 'Monte Carlo red-accented badges', 'Smoked tail lamp clusters'],
        interiorHighlights: ['Black upholstery with red contrast stitching', 'Monte Carlo branded scuff plates', 'Piano black dashboard trim'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'candy-white-rap', name: 'Candy White', hex: '#f8fafc', availableOn: ['Ambition', 'Style', 'Monte Carlo'] },
      { id: 'flash-red-rap', name: 'Flash Red', hex: '#b91c1c', availableOn: ['Style', 'Monte Carlo'] },
      { id: 'tornado-red-rap', name: 'Tornado Red', hex: '#991b1b', availableOn: ['Style'] },
      { id: 'carbon-steel-rap', name: 'Carbon Steel Grey', hex: '#4b5563', availableOn: ['Ambition', 'Style', 'Monte Carlo'] },
      { id: 'brilliant-silver-rap', name: 'Brilliant Silver', hex: '#cbd5e1', availableOn: ['Ambition', 'Style'] },
      { id: 'deep-black-rap', name: 'Deep Black Pearl', hex: '#0f172a', availableOn: ['Monte Carlo'] }
    ]
  },
  {
    id: 'fabia',
    image: '/cars/fabia.avif',
    enthusiastNote: 'Named after Quintus Fabius Maximus, the Roman general famous for his patient, strategic delaying tactics — the origin of the word "Fabian".',
    name: 'Škoda Fabia',
    badge: 'Enthusiast Hall of Fame Hatchback',
    tagline: 'The Czech-engineered premium hatchback that defined refined small-car dynamics in India (2008–2014)',
    bodyType: 'Hatchback',
    startingPrice: 'Hall of Fame Legend (2008–2014)',
    startingExShowroom: 590000,
    priceRange: '₹5.90 – ₹8.30 Lakh (Final India Price List)',
    rating: 'Pre-NCAP India Era (Not Officially Crash-Tested)',
    safetyStars: 0,
    engines: ['1.6L MPI Petrol (105 PS / 153 Nm)', '1.2L TDI CR Diesel (75 PS / 180 Nm)'],
    keyHighlights: [
      'Premium hatchback positioning with genuine European ride and handling refinement',
      'Spacious 315-litre boot — best-in-class for its era among premium hatchbacks',
      '1.2L TDI three-cylinder Common Rail diesel offered exceptional 21+ km/l efficiency',
      'Fabia Monte Carlo brought matte-black bonnet, roof, and red mirror caps to the hatch segment',
      'Robust PQ25 platform shared with the Rapid and international Volkswagen Polo',
      'Discontinued in 2014 to focus Škoda India’s lineup on sedans and SUVs'
    ],
    dimensions: {
      length: '3,992 mm',
      width: '1,642 mm',
      height: '1,498 mm',
      wheelbase: '2,465 mm',
      groundClearance: '170 mm',
      bootSpace: '315 Litres',
      fuelTank: '45 Litres'
    },
    variants: [
      {
        id: 'fabia-active',
        name: 'Fabia Active',
        tagline: 'The accessible entry into premium European hatchback engineering',
        priceRange: '₹5.90 – ₹6.79 Lakh',
        baseExShowroom: 590000,
        engineOptions: ['1.6L MPI Petrol'],
        transmissions: ['5-Speed Manual'],
        keyFeatures: [
          'Dual front airbags',
          'Power steering and power windows',
          'Front fog lamps',
          '2-DIN audio system with USB and AUX input',
          'Rear parcel shelf'
        ],
        exteriorHighlights: ['14-inch steel wheels with covers', 'Body-colored bumpers', 'Halogen headlamps'],
        interiorHighlights: ['Black and grey fabric upholstery', 'Manual air conditioning', 'Tilt-adjustable steering'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'fabia-ambition',
        name: 'Fabia Ambition',
        tagline: 'The well-equipped mid-range hatchback with diesel efficiency option',
        priceRange: '₹6.99 – ₹7.79 Lakh',
        baseExShowroom: 699000,
        engineOptions: ['1.6L MPI Petrol', '1.2L TDI CR Diesel'],
        transmissions: ['5-Speed Manual'],
        isPopular: true,
        keyFeatures: [
          '1.2L TDI three-cylinder Common Rail diesel option',
          'Alloy wheels',
          'Electrically adjustable and foldable ORVMs',
          'Rear parking sensors',
          'Height-adjustable driver seat'
        ],
        exteriorHighlights: ['15-inch alloy wheels', 'Chrome accented grille', 'Body-colored door handles'],
        interiorHighlights: ['Beige and black dual-tone cabin', 'Leatherette-wrapped steering wheel', 'Rear headrests'],
        badgeColor: 'bg-blue-600 text-white'
      },
      {
        id: 'fabia-monte-carlo',
        name: 'Fabia Monte Carlo',
        tagline: 'Motorsport-inspired blackout styling that brought sporty flair to the premium hatch segment',
        priceRange: '₹7.85 – ₹8.30 Lakh',
        baseExShowroom: 785000,
        engineOptions: ['1.6L MPI Petrol'],
        transmissions: ['5-Speed Manual'],
        isFlagship: true,
        keyFeatures: [
          'Matte-black bonnet and roof wrap',
          'Red-accented door mirror caps',
          'Black diamond-cut alloy wheels',
          'Sports front seats with red contrast stitching',
          'Monte Carlo branded floor mats and scuff plates'
        ],
        exteriorHighlights: ['Matte-black roof and bonnet', 'Red ORVM caps', 'Black rear spoiler'],
        interiorHighlights: ['Black upholstery with red stitching', 'Monte Carlo sports steering wheel', 'Piano black center console trim'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'candy-white-fab', name: 'Candy White', hex: '#f8fafc', availableOn: ['Active', 'Ambition', 'Monte Carlo'] },
      { id: 'corrida-red-fab', name: 'Corrida Red', hex: '#9e1b26', availableOn: ['Ambition', 'Monte Carlo'] },
      { id: 'cappuccino-beige-fab', name: 'Cappuccino Beige', hex: '#c9b28a', availableOn: ['Active', 'Ambition'] },
      { id: 'storm-blue-fab', name: 'Storm Blue', hex: '#1e3a5f', availableOn: ['Ambition'] },
      { id: 'anthracite-grey-fab', name: 'Anthracite Grey', hex: '#3f3f46', availableOn: ['Active', 'Ambition', 'Monte Carlo'] },
      { id: 'candy-black-fab', name: 'Candy Black', hex: '#18181b', availableOn: ['Monte Carlo'] }
    ]
  },
  {
    id: 'octavia-combi',
    image: '/cars/2005-Skoda-Octavia-Combi-Struggles-to-Find-a-New-Home-in-India.jpg',
    enthusiastNote: 'Škoda has used the "Combi" badge since the 1960s to denote its estate/wagon bodystyles — a naming tradition older than the Octavia nameplate itself.',
    name: 'Škoda Octavia Combi',
    badge: 'Enthusiast Hall of Fame Estate',
    tagline: 'The premium European estate that brought sedan luxury with hatchback-beating cargo versatility to India (2005–2010)',
    bodyType: 'Estate',
    startingPrice: 'Hall of Fame Legend (2005–2010)',
    startingExShowroom: 1350000,
    priceRange: '₹13.50 – ₹17.20 Lakh (Final India Price List)',
    rating: 'Pre-NCAP India Era (Not Officially Crash-Tested)',
    safetyStars: 0,
    engines: ['1.8 Turbo Petrol (150 PS / 210 Nm)', '1.9L TDI PD Diesel (90 PS / 210 Nm)'],
    keyHighlights: [
      'India’s first genuine premium estate (station wagon), combining sedan comfort with hatchback practicality',
      '640-litre boot space expandable to a cavernous 1,512 litres with rear seats folded',
      'Available in both the value-focused L&K trim and the sportier vRS turbo-petrol estate',
      'Xenon headlamps with power washers and cruise control were segment-first luxuries at launch',
      'Built on the second-generation Octavia PQ34 platform shared with the Laura sedan',
      'A cult favorite among Indian enthusiasts for its rare turbo-petrol estate body style'
    ],
    dimensions: {
      length: '4,572 mm',
      width: '1,769 mm',
      height: '1,468 mm',
      wheelbase: '2,578 mm',
      groundClearance: '155 mm',
      bootSpace: '640 Litres (Expandable to 1,512 Litres)',
      fuelTank: '60 Litres'
    },
    variants: [
      {
        id: 'octavia-combi-lk',
        name: 'Octavia Combi L&K',
        tagline: 'The luxury-focused diesel estate for discerning long-distance families',
        priceRange: '₹13.50 – ₹15.20 Lakh',
        baseExShowroom: 1350000,
        engineOptions: ['1.9L TDI PD Diesel'],
        transmissions: ['5-Speed Manual'],
        isPopular: true,
        keyFeatures: [
          'Xenon headlamps with power washers',
          'Cruise control and dual-zone climate control',
          'Leather seat upholstery',
          'Wood-finish dashboard inserts',
          'Six airbags across the range-topping trim'
        ],
        exteriorHighlights: ['16-inch alloy wheels', 'Chrome window beltline', 'Roof rails'],
        interiorHighlights: ['Beige leather cabin', 'Wood-trim dashboard', 'Rear center armrest with cup holders'],
        badgeColor: 'bg-amber-600 text-white'
      },
      {
        id: 'octavia-combi-vrs',
        name: 'Octavia Combi vRS',
        tagline: 'The rare turbo-petrol performance estate for enthusiasts who need cargo space',
        priceRange: '₹16.50 – ₹17.20 Lakh',
        baseExShowroom: 1650000,
        engineOptions: ['1.8 Turbo Petrol'],
        transmissions: ['5-Speed Manual'],
        isFlagship: true,
        keyFeatures: [
          '1.8 Turbo petrol delivering brisk, linear performance',
          'Sports-tuned suspension for confident estate-car handling',
          'Twin exhaust tips and vRS badging',
          'Sports front seats with red contrast stitching',
          'Rear roof spoiler integrated into the tailgate'
        ],
        exteriorHighlights: ['vRS front bumper and grille', 'Twin chrome exhaust tips', 'Sports alloy wheels'],
        interiorHighlights: ['Black sports upholstery with red stitching', 'vRS-branded sports steering wheel', 'Aluminum pedal covers'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'candy-white-combi', name: 'Candy White', hex: '#f8fafc', availableOn: ['L&K', 'vRS'] },
      { id: 'flash-red-combi', name: 'Flash Red', hex: '#b91c1c', availableOn: ['vRS'] },
      { id: 'brilliant-silver-combi', name: 'Brilliant Silver', hex: '#cbd5e1', availableOn: ['L&K', 'vRS'] },
      { id: 'deep-black-combi', name: 'Deep Black Pearl', hex: '#0f172a', availableOn: ['L&K', 'vRS'] },
      { id: 'racing-blue-combi', name: 'Racing Blue', hex: '#1e3a8a', availableOn: ['vRS'] }
    ]
  },
  {
    id: 'laura',
    image: '/cars/laura.jpg',
    enthusiastNote: 'Sold as "Laura" exclusively in India while badged "Octavia" everywhere else in the world, after a trademark dispute with an unrelated Indian company.',
    name: 'Škoda Laura',
    badge: 'Enthusiast Hall of Fame Sedan',
    tagline: 'The India-market name for the second-generation Octavia, defining premium sedan value with class-leading boot space (2010–2013)',
    bodyType: 'Executive Sedan',
    startingPrice: 'Hall of Fame Legend (2010–2013)',
    startingExShowroom: 1258000,
    priceRange: '₹12.58 – ₹19.43 Lakh (Final India Price List)',
    rating: '4-Star Euro NCAP (Global Reference Platform)',
    safetyStars: 4,
    engines: ['1.8 TSI Petrol (160 PS / 250 Nm)', '1.9L TDI PD Diesel (105 PS / 250 Nm)', '2.0L TDI CR Diesel (140 PS / 320 Nm)'],
    keyHighlights: [
      'India-specific rebadge of the internationally acclaimed second-generation Octavia',
      'Renowned for a cavernous 560-litre boot, among the largest in the executive sedan class',
      'Available with three distinct engines spanning value diesel to enthusiast turbo-petrol',
      'L&K 2.0 TDI AT flagship paired Škoda’s first 6-speed DSG automatic with 320 Nm of torque',
      'Renamed back to Octavia in 2013 when Škoda unified its global model naming strategy',
      'Remembered as one of the most robust and reliable sedans ever sold in India'
    ],
    dimensions: {
      length: '4,572 mm',
      width: '1,769 mm',
      height: '1,462 mm',
      wheelbase: '2,578 mm',
      groundClearance: '155 mm',
      bootSpace: '560 Litres',
      fuelTank: '55 Litres'
    },
    variants: [
      {
        id: 'laura-ambiente',
        name: 'Laura Ambiente',
        tagline: 'The value-focused entry pairing turbo-petrol thrills with essential comfort',
        priceRange: '₹12.58 – ₹13.77 Lakh',
        baseExShowroom: 1258000,
        engineOptions: ['1.8 TSI Petrol'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          'Dual front airbags and ABS with EBD',
          '1.8 TSI turbo-petrol with 160 PS output',
          'Power steering, power windows, and central locking',
          '2-DIN audio system with USB and AUX input',
          'Height-adjustable driver seat'
        ],
        exteriorHighlights: ['15-inch alloy wheels', 'Body-colored bumpers', 'Halogen headlamps'],
        interiorHighlights: ['Black fabric upholstery', 'Manual air conditioning', 'Tilt-adjustable steering'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'laura-ambition',
        name: 'Laura Ambition',
        tagline: 'The balanced mid-range trim with the dependable 1.9 TDI diesel option',
        priceRange: '₹14.20 – ₹16.67 Lakh',
        baseExShowroom: 1420000,
        engineOptions: ['1.8 TSI Petrol', '1.9L TDI PD Diesel'],
        transmissions: ['6-Speed Manual', '5-Speed Manual'],
        isPopular: true,
        keyFeatures: [
          'Robust 1.9 TDI diesel with strong low-end torque',
          'Touchscreen-ready audio with Bluetooth telephony',
          'Alloy wheels with silver finish',
          'Cruise control and steering-mounted controls',
          'Climatronic automatic air conditioning'
        ],
        exteriorHighlights: ['16-inch alloy wheels', 'Chrome window beltline', 'Fog lamps'],
        interiorHighlights: ['Beige and black dual-tone cabin', 'Leather-wrapped steering wheel', 'Rear center armrest'],
        badgeColor: 'bg-blue-600 text-white'
      },
      {
        id: 'laura-lk-at',
        name: 'Laura L&K 2.0 TDI AT',
        tagline: 'The flagship trim pairing the muscular 2.0 TDI CR diesel with Škoda’s first DSG automatic',
        priceRange: '₹18.36 – ₹19.43 Lakh',
        baseExShowroom: 1836000,
        engineOptions: ['2.0L TDI CR Diesel'],
        transmissions: ['6-Speed DSG Automatic'],
        isFlagship: true,
        keyFeatures: [
          '140 PS / 320 Nm 2.0 TDI CR diesel with 6-speed DSG',
          'Leather seat upholstery with 8-way power driver seat',
          'Dual-zone Climatronic automatic climate control',
          'Rain-sensing wipers and auto-dimming interior mirror',
          'Premium 8-speaker sound system'
        ],
        exteriorHighlights: ['17-inch alloy wheels', 'Chrome exhaust tip garnish', 'Full LED tail lamps'],
        interiorHighlights: ['Beige leather upholstery', 'Wood-finish dashboard inserts', 'Illuminated vanity mirrors'],
        badgeColor: 'bg-amber-600 text-white'
      }
    ],
    colors: [
      { id: 'candy-white-laura', name: 'Candy White', hex: '#f8fafc', availableOn: ['Ambiente', 'Ambition', 'L&K'] },
      { id: 'flash-red-laura', name: 'Flash Red', hex: '#b91c1c', availableOn: ['Ambition', 'L&K'] },
      { id: 'brilliant-silver-laura', name: 'Brilliant Silver', hex: '#cbd5e1', availableOn: ['Ambiente', 'Ambition'] },
      { id: 'carbon-steel-laura', name: 'Carbon Steel Grey', hex: '#4b5563', availableOn: ['Ambiente', 'Ambition', 'L&K'] },
      { id: 'deep-black-laura', name: 'Deep Black Pearl', hex: '#0f172a', availableOn: ['L&K'] }
    ]
  },
  {
    id: 'yeti',
    image: '/cars/Yeti-open-news_0.avif',
    enthusiastNote: 'Named after the mythical Himalayan snow creature — a fitting badge for an SUV engineered to tackle challenging, high-altitude terrain.',
    name: 'Škoda Yeti',
    badge: 'Enthusiast Hall of Fame Compact SUV',
    tagline: 'The go-anywhere compact SUV that introduced genuine Haldex 4x4 capability to Škoda’s Indian lineup (2010–2017)',
    bodyType: 'Compact SUV',
    startingPrice: 'Hall of Fame Legend (2010–2017)',
    startingExShowroom: 1899000,
    priceRange: '₹18.99 – ₹24.28 Lakh (Final India Price List)',
    rating: '4-Star Euro NCAP (Global Reference Platform)',
    safetyStars: 4,
    engines: ['2.0L TDI CR Diesel 4x2 (110 PS / 250 Nm)', '2.0L TDI CR Diesel 4x4 (140 PS / 320 Nm)', '1.8 TSI Petrol 4x4 (160 PS / 250 Nm)'],
    keyHighlights: [
      'Škoda’s first true compact SUV in India, blending boxy practicality with genuine off-road ability',
      'Haldex-based 4x4 system with an electronically controlled multi-plate clutch for all-weather traction',
      'Distinctive upright, boxy design maximized cabin space and outward visibility',
      'Offered in both efficient 4x2 diesel and capable 4x4 diesel/petrol configurations',
      'Later facelift (2013) brought a revised front fascia and 1.8 TSI petrol 4x4 option',
      'A beloved cult favorite among Indian off-road and adventure-touring enthusiasts'
    ],
    dimensions: {
      length: '4,222 mm',
      width: '1,793 mm',
      height: '1,691 mm',
      wheelbase: '2,578 mm',
      groundClearance: '180 mm',
      bootSpace: '405 Litres (Expandable to 1,760 Litres)',
      fuelTank: '60 Litres'
    },
    variants: [
      {
        id: 'yeti-ambition',
        name: 'Yeti Ambition 4x2',
        tagline: 'The efficient front-wheel-drive entry with essential SUV capability',
        priceRange: '₹18.99 – ₹20.50 Lakh',
        baseExShowroom: 1899000,
        engineOptions: ['2.0L TDI CR Diesel 4x2'],
        transmissions: ['5-Speed Manual'],
        keyFeatures: [
          'Dual front and side airbags',
          '2.0 TDI CR diesel with 110 PS output',
          'Height-adjustable driver seat with lumbar support',
          '180 mm ground clearance for confident city and highway use',
          'Roof rails for additional cargo capacity'
        ],
        exteriorHighlights: ['16-inch alloy wheels', 'Body-colored roof rails', 'Halogen fog lamps'],
        interiorHighlights: ['Black fabric upholstery', 'Manual air conditioning', 'Multi-function steering wheel'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'yeti-elegance-4x4',
        name: 'Yeti Elegance 4x4',
        tagline: 'The flagship diesel 4x4 for genuine all-weather and light off-road capability',
        priceRange: '₹22.50 – ₹24.28 Lakh',
        baseExShowroom: 2250000,
        engineOptions: ['2.0L TDI CR Diesel 4x4'],
        transmissions: ['6-Speed Manual', '6-Speed DSG Automatic'],
        isFlagship: true,
        keyFeatures: [
          'Haldex electronically controlled 4x4 system',
          '140 PS / 320 Nm 2.0 TDI CR diesel',
          'Leather seat upholstery with heated front seats',
          'Panoramic sunroof',
          'Off-Road driving mode with hill-descent assist'
        ],
        exteriorHighlights: ['17-inch alloy wheels', 'Silver skid plates front and rear', 'Roof rails with cross bars'],
        interiorHighlights: ['Beige leather cabin', 'Heated front seats', 'Rear parking camera display'],
        badgeColor: 'bg-amber-600 text-white'
      },
      {
        id: 'yeti-monte-carlo-4x4',
        name: 'Yeti Monte Carlo 4x4',
        tagline: 'The sportier turbo-petrol 4x4 with blacked-out styling for enthusiast buyers',
        priceRange: '₹23.50 – ₹24.28 Lakh',
        baseExShowroom: 2350000,
        engineOptions: ['1.8 TSI Petrol 4x4'],
        transmissions: ['6-Speed Manual'],
        isPopular: true,
        keyFeatures: [
          '1.8 TSI turbo-petrol with 160 PS and Haldex 4x4',
          'Matte-black roof and bonnet wrap',
          'Black diamond-cut alloy wheels',
          'Sports front seats with red contrast stitching',
          'Monte Carlo branded scuff plates'
        ],
        exteriorHighlights: ['Matte-black roof', 'Red brake calipers', 'Black skid plates'],
        interiorHighlights: ['Black upholstery with red stitching', 'Monte Carlo sports steering wheel', 'Piano black trim'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'candy-white-yeti', name: 'Candy White', hex: '#f8fafc', availableOn: ['Ambition', 'Elegance', 'Monte Carlo'] },
      { id: 'sprint-yellow-yeti', name: 'Sprint Yellow', hex: '#eab308', availableOn: ['Elegance', 'Monte Carlo'] },
      { id: 'flash-red-yeti', name: 'Flash Red', hex: '#b91c1c', availableOn: ['Elegance', 'Monte Carlo'] },
      { id: 'carbon-steel-yeti', name: 'Carbon Steel Grey', hex: '#4b5563', availableOn: ['Ambition', 'Elegance'] },
      { id: 'deep-black-yeti', name: 'Deep Black Pearl', hex: '#0f172a', availableOn: ['Monte Carlo'] }
    ]
  },
  {
    id: 'karoq',
    image: '/cars/karoq-1.jpg',
    enthusiastNote: '"Karoq" was coined from two Alutiiq (Native Alaskan) words that together translate loosely to "vehicle for the row you sit in" — continuing Škoda\'s Alaskan-inspired SUV naming after the Kodiaq.',
    name: 'Škoda Karoq',
    badge: 'CBU Import Flagship SUV',
    tagline: 'The refined European midsize SUV brought to India via the CBU route as a premium alternative to the locally-built Kushaq (2020–2022)',
    bodyType: 'Midsize SUV',
    startingPrice: '₹24.99 Lakh (CBU, 2020–2022)',
    startingExShowroom: 2499000,
    priceRange: '₹24.99 Lakh (Single Fully-Loaded Trim)',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['1.5L TSI EVO Petrol (150 PS / 250 Nm)'],
    keyHighlights: [
      'Imported to India as a fully-built CBU unit, commanding a premium over locally-assembled rivals',
      'Built on the international MQB platform shared with the global Volkswagen Tiguan',
      'Segment-first virtual cockpit digital instrument cluster at launch',
      '9 airbags and a comprehensive electronic safety suite as standard',
      'Positioned as a premium alternative for buyers seeking full European engineering',
      'Discontinued in 2022 as Škoda consolidated its India SUV lineup around the Kushaq and Kodiaq'
    ],
    dimensions: {
      length: '4,382 mm',
      width: '1,841 mm',
      height: '1,603 mm',
      wheelbase: '2,638 mm',
      groundClearance: '182 mm',
      bootSpace: '521 Litres',
      fuelTank: '50 Litres'
    },
    variants: [
      {
        id: 'karoq-style',
        name: 'Karoq Style',
        tagline: 'The single, fully-loaded CBU trim offering complete European luxury and safety',
        priceRange: '₹24.99 Lakh',
        baseExShowroom: 2499000,
        engineOptions: ['1.5L TSI EVO Petrol'],
        transmissions: ['7-Speed DSG Automatic'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          '10.25-inch Virtual Cockpit digital instrument cluster',
          '8-inch touchscreen infotainment with SmartLink connectivity',
          '9 airbags and Electronic Stability Control',
          'Dual-zone Climatronic automatic climate control',
          '12-way electronically adjustable driver seat with memory function'
        ],
        exteriorHighlights: ['18-inch alloy wheels', 'LED matrix headlamps', 'Panoramic sunroof'],
        interiorHighlights: ['Ambient interior lighting', 'Leatherette upholstery', 'Wireless smartphone charging'],
        badgeColor: 'bg-emerald-600 text-white'
      }
    ],
    colors: [
      { id: 'candy-white-karoq', name: 'Candy White', hex: '#f8fafc', availableOn: ['Style'] },
      { id: 'lava-blue-karoq', name: 'Lava Blue Metallic', hex: '#17365d', availableOn: ['Style'] },
      { id: 'magic-black-karoq', name: 'Magic Black Metallic', hex: '#111827', availableOn: ['Style'] },
      { id: 'brilliant-silver-karoq', name: 'Brilliant Silver', hex: '#cbd5e1', availableOn: ['Style'] },
      { id: 'race-blue-karoq', name: 'Race Blue Metallic', hex: '#1d4ed8', availableOn: ['Style'] }
    ]
  }
];

export const SKODA_SAFETY_SUITE = [
  {
    title: '100% 5-Star Crash Test Pedigree',
    subtitle: 'Slavia & Kushaq (Global NCAP) • Kodiaq & Superb (Euro NCAP)',
    description: 'Every modern Škoda tested has achieved a full 5-Star safety rating. In Global NCAP’s tougher updated protocols, Slavia and Kushaq achieved 5 stars for both adult and child occupant protection.',
    metric: '5-Star Full Protection'
  },
  {
    title: 'Standard 6 to 9 Airbags Across All Models',
    subtitle: 'Dual Front, Front Side, Curtain Airbags (& Driver Knee Airbag)',
    description: 'Safety is never an optional luxury. Every car in the Škoda India portfolio comes with a minimum of 6 airbags from the entry-level variant, while Kodiaq and Superb feature 9 airbags.',
    metric: '6 to 9 Airbags'
  },
  {
    title: 'MQB Rigid High-Strength Steel Architecture',
    subtitle: 'Hot-formed ultra-high-tensile steel safety cage',
    description: 'Engineered on the Volkswagen Group MQB platform (MQB-A0-IN and MQB-Evo). The cabin structure and footwell were officially rated as "Stable and capable of withstanding further loadings".',
    metric: 'Up to 73.4% High-Tensile'
  },
  {
    title: 'Comprehensive Active Stability Controls',
    subtitle: 'Electronic Stability Control (ESC) + Multi-Collision Brake (MKB)',
    description: 'Every model includes ESC, Anti-Slip Regulation (ASR), Electronic Differential Lock (EDL), Roll-Over Mitigation, Hill Hold Control, and Brake Disc Wiping in wet conditions.',
    metric: '25+ Active Safety Features'
  }
];

export const SIMPLY_CLEVER_FEATURES = [
  {
    title: 'Door-Edge Protection',
    description: 'Clever rubberized protective strips deploy automatically when doors open to protect against dings.'
  },
  {
    title: 'Umbrella Compartment',
    description: 'Built-in waterproof umbrella storage in the front door cards with drainage channels.'
  },
  {
    title: 'Ticket Clip & Smart Pockets',
    description: 'Windshield parking ticket clip and dual rear smartphone storage pockets behind the front seats.'
  },
  {
    title: 'Smart Boot Netting System',
    description: 'Heavy-duty cargo netting, bag hooks, and tie-down anchors prevent items from sliding during dynamic cornering.'
  }
];

export const ALL_SKODA_FAQS: FAQItem[] = [
  {
    category: 'Safety',
    question: 'Are all Škoda cars sold in India 5-star safety rated?',
    answer: 'Yes. Škoda is the only brand in India where both mass-market MQB-A0-IN cars (Slavia and Kushaq) achieved a flawless 5-Star rating for both Adult Occupant Protection and Child Occupant Protection in Global NCAP crash testing. The newly launched Kylaq is engineered on the exact same high-tensile MQB-A0-IN platform with 25+ standard active safety features, while Kodiaq and Superb hold 5-Star Euro NCAP ratings.'
  },
  {
    category: 'Performance',
    question: 'What is the difference between the 1.0L TSI, 1.5L TSI EVO, and 2.0L TSI engines?',
    answer: 'The 1.0L TSI (115 PS / 178 Nm) is a 3-cylinder turbo ideal for everyday city commute and highway efficiency (~19-20 km/l). The 1.5L TSI EVO (150 PS / 250 Nm) is a 4-cylinder enthusiast engine with Active Cylinder Technology (ACT) that shuts down two cylinders while cruising, paired with a 7-speed DSG. The 2.0L TSI (190 PS / 320 Nm) powers the Kodiaq and Superb with intelligent 4x4 all-wheel drive, 0-100 km/h in 7.7s, and effortless high-speed touring.'
  },
  {
    category: 'Comparison',
    question: 'How does the new Škoda Kylaq compare to the Kushaq and Slavia?',
    answer: 'The Kylaq is a sub-4 metre compact SUV (length 3,995 mm) priced from ₹7.89 Lakh, competing with Brezza and Nexon while offering European driving dynamics, 189 mm clearance, and segment-best 446L boot. The Kushaq is a larger midsize SUV (4,225 mm) with optional 1.5L TSI EVO. The Slavia is the 4.54-metre premium sedan offering the class-leading 521L boot, 179 mm ground clearance, and sleek aerodynamics.'
  },
  {
    category: 'Maintenance',
    question: 'What is Škoda’s 4-Year Peace of Mind warranty and service package in India?',
    answer: 'Every Škoda car in India comes standard with a 4-Year / 100,000 km manufacturer warranty (extendable up to 6 years / 150,000 km) and 4 years of 24/7 Roadside Assistance. Additionally, Škoda offers the SuperCare prepaid maintenance package covering scheduled services for 4 years or 60,000 km, dramatically lowering ownership costs.'
  },
  {
    category: 'Performance',
    question: 'What is the real-world fuel mileage of Škoda cars in India?',
    answer: 'In real-world conditions: The 1.0L TSI delivers 11.5–13.5 km/l in heavy city traffic and 16.5–19.0 km/l on highways. The 1.5L TSI EVO delivers 10–12.5 km/l in city traffic and surprisingly high 17–20.5 km/l on highways thanks to Active Cylinder Deactivation (ACT). The 2.0L TSI returns 8–10 km/l in city and 13–15 km/l on highway. The 1.8L and 2.0L TDI Turbo-Diesel engines offer legendary efficiency: 13–15 km/l in congested city driving and an astonishing 19.5–23 km/l on highways, yielding 1,000+ km tank range.'
  },
  {
    category: 'Comparison',
    question: 'What makes the Škoda Octavia unique in the executive sedan segment?',
    answer: 'The Škoda Octavia stands alone with its signature liftback tailgate opening that provides a staggering 600 Litres of boot space (expanding to 1,555L with rear seats folded)—more than most full-size SUVs. Combined with independent multi-link suspension, shift-by-wire DSG, 12-speaker Canton 600W audio, and 5-Star Euro NCAP safety, the Octavia offers true German luxury-saloon driving dynamics at an accessible price point.'
  },
  {
    category: 'Performance',
    question: 'Why are Škoda TDI Diesel engines (1.8L & 2.0L) so celebrated among enthusiasts?',
    answer: 'Škoda TDI diesel engines (such as the 1.8L TDI with 320 Nm torque and 2.0L TDI CR EVO with 400 Nm torque) are celebrated for their monumental low-end pull right from 1,750 RPM, bulletproof long-distance reliability, and phenomenal highway efficiency of 20+ km/l. When paired with heavy-duty DSG dual-clutch transmissions on the Octavia and Superb, they offer effortless cross-country high-speed cruising with over 1,100 km of range on a single tank.'
  }
];
