import { EngineSpec, FAQItem } from '../types';
import { SkodaModel } from './skodaData';

export type CarModel = SkodaModel;

export const ALL_PORSCHE_ENGINES: EngineSpec[] = [
  {
    id: '2.0-turbo-macan',
    name: '2.0L Turbo-Petrol Flat/Inline-4',
    badge: '2.0 Turbo (265 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,984 cc',
    cylinders: 4,
    power: '265 PS (195 kW) @ 5,000–6,500 RPM',
    powerHp: 265,
    torque: '400 Nm @ 1,800–4,500 RPM',
    torqueNm: 400,
    transmissions: ['7-Speed PDK Dual-Clutch'],
    acceleration: '0–100 km/h in 6.2s',
    topSpeed: '232 km/h',
    claimedMileage: '11.5 – 13.0 km/l',
    realWorldCity: '6.0 – 7.5 km/l',
    realWorldHighway: '10.5 – 12.5 km/l',
    keyHighlights: [
      'Entry powertrain for the Macan compact luxury SUV',
      'Shared turbocharged architecture across the Volkswagen Group premium range',
      'Porsche Active Suspension Management (PASM) standard',
      'Available exclusively in the Macan'
    ],
    description: 'The accessible entry point into Porsche SUV ownership, pairing brisk performance with genuine daily usability.'
  },
  {
    id: '2.9-twin-turbo-v6-macan-s',
    name: '2.9L Twin-Turbo V6',
    badge: '2.9 Twin-Turbo V6 (380 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '2,894 cc',
    cylinders: 6,
    power: '380 PS (280 kW) @ 5,400–6,400 RPM',
    powerHp: 380,
    torque: '520 Nm @ 1,800–5,200 RPM',
    torqueNm: 520,
    transmissions: ['7-Speed PDK Dual-Clutch'],
    acceleration: '0–100 km/h in 4.6s',
    topSpeed: '261 km/h',
    claimedMileage: '9.5 – 10.5 km/l',
    realWorldCity: '5.0 – 6.0 km/l',
    realWorldHighway: '8.5 – 10.0 km/l',
    keyHighlights: [
      'Powers the Macan S and entry Cayenne variants',
      'Twin-scroll turbochargers mounted inside the V engine vee for a faster throttle response',
      'Sport Chrono Package adds a dedicated Sport Response button',
      'Shared architecture with Audi and Bentley twin-turbo V6 applications'
    ],
    description: 'A genuinely quick, characterful twin-turbo V6 that gives the Macan S and base Cayenne real sports-car pace.'
  },
  {
    id: '3.0-turbo-v6-cayenne',
    name: '3.0L Turbo-Petrol V6',
    badge: '3.0 Turbo V6 (353 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '2,995 cc',
    cylinders: 6,
    power: '353 PS (260 kW) @ 5,300–6,400 RPM',
    powerHp: 353,
    torque: '500 Nm @ 1,340–5,300 RPM',
    torqueNm: 500,
    transmissions: ['8-Speed Tiptronic S Automatic'],
    acceleration: '0–100 km/h in 5.9s',
    topSpeed: '245 km/h',
    claimedMileage: '9.0 – 10.0 km/l',
    realWorldCity: '4.8 – 5.8 km/l',
    realWorldHighway: '8.0 – 9.5 km/l',
    keyHighlights: [
      'The core Cayenne engine, sourced from the same block family as the Audi/Bentley 3.0 V6',
      'Standard Porsche Traction Management (PTM) all-wheel drive',
      'Air suspension available for a further ride-height range',
      'Tuned for effortless triple-digit highway cruising'
    ],
    description: 'The Cayenne’s bread-and-butter V6 — refined enough for the school run, quick enough to worry hot hatches.'
  },
  {
    id: '2.9-twin-turbo-v6-panamera',
    name: '2.9L Twin-Turbo V6',
    badge: '2.9 Twin-Turbo V6 (330 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '2,894 cc',
    cylinders: 6,
    power: '330 PS (243 kW) @ 5,250–6,000 RPM',
    powerHp: 330,
    torque: '450 Nm @ 1,750–5,000 RPM',
    torqueNm: 450,
    transmissions: ['8-Speed PDK Dual-Clutch'],
    acceleration: '0–100 km/h in 5.6s',
    topSpeed: '259 km/h',
    claimedMileage: '10.5 – 11.5 km/l',
    realWorldCity: '5.5 – 6.5 km/l',
    realWorldHighway: '9.5 – 11.0 km/l',
    keyHighlights: [
      'Entry engine for the Panamera grand-touring liftback',
      'Adaptive air suspension with three-chamber technology standard',
      'Rear-wheel drive on the base Panamera, 4 and 4S add all-wheel drive',
      'Same V6 family that powers the base Cayenne'
    ],
    description: 'Effortless triple-digit cruising with genuine sports-sedan reflexes when the road turns twisty.'
  },
  {
    id: '3.0-twin-turbo-flat6-carrera',
    name: '3.0L Twin-Turbo Flat-6',
    badge: '3.0 Twin-Turbo Flat-6 (385 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '2,981 cc',
    cylinders: 6,
    power: '385 PS (283 kW) @ 6,500 RPM',
    powerHp: 385,
    torque: '450 Nm @ 1,950–5,000 RPM',
    torqueNm: 450,
    transmissions: ['8-Speed PDK Dual-Clutch', '7-Speed Manual'],
    acceleration: '0–100 km/h in 4.2s',
    topSpeed: '293 km/h',
    claimedMileage: '10.0 – 11.5 km/l',
    realWorldCity: '5.5 – 6.5 km/l',
    realWorldHighway: '10.0 – 12.0 km/l',
    keyHighlights: [
      'The base 911 Carrera engine — rear-mounted, twin-turbocharged flat-6',
      'One of the very few sports cars still offered with a 7-speed manual gearbox',
      'Signature flat-6 exhaust note tuned by Porsche’s Motorsport division',
      'Rear-engine, rear-wheel-drive layout unique among Porsche’s current lineup'
    ],
    description: 'The purest expression of the 911 formula — a rear-mounted flat-6 with an unmistakable exhaust note and razor-sharp turn-in.'
  },
  {
    id: '3.0-twin-turbo-flat6-carrera-s',
    name: '3.0L Twin-Turbo Flat-6 (S-Tune)',
    badge: '3.0 Twin-Turbo Flat-6 (450 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '2,981 cc',
    cylinders: 6,
    power: '450 PS (331 kW) @ 6,500 RPM',
    powerHp: 450,
    torque: '530 Nm @ 2,300–5,000 RPM',
    torqueNm: 530,
    transmissions: ['8-Speed PDK Dual-Clutch'],
    acceleration: '0–100 km/h in 3.5s',
    topSpeed: '308 km/h',
    claimedMileage: '9.5 – 10.5 km/l',
    realWorldCity: '5.0 – 6.0 km/l',
    realWorldHighway: '9.5 – 11.5 km/l',
    keyHighlights: [
      'Larger turbochargers and reinforced internals over the base Carrera tune',
      'Powers the 911 Carrera S and Carrera 4S',
      'Rear Axle Steering available for sharper low-speed agility',
      'Launch Control standard with the Sport Chrono Package'
    ],
    description: 'The engine most enthusiasts actually want — a genuinely faster, more urgent version of the base Carrera flat-6.'
  },
  {
    id: '2.0-turbo-flat4-718',
    name: '2.0L Turbo-Petrol Flat-4',
    badge: '2.0 Turbo Flat-4 (300 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,988 cc',
    cylinders: 4,
    power: '300 PS (220 kW) @ 6,500 RPM',
    powerHp: 300,
    torque: '380 Nm @ 1,950–4,500 RPM',
    torqueNm: 380,
    transmissions: ['7-Speed PDK Dual-Clutch', '6-Speed Manual'],
    acceleration: '0–100 km/h in 4.9s',
    topSpeed: '275 km/h',
    claimedMileage: '11.5 – 13.0 km/l',
    realWorldCity: '6.5 – 7.5 km/l',
    realWorldHighway: '11.0 – 13.0 km/l',
    keyHighlights: [
      'Mid-engine, rear-wheel-drive layout for near-perfect 45:55 weight balance',
      'Powers the entry 718 Cayman and Boxster',
      'Distinctive flat-4 turbo exhaust note, unlike any rival’s inline engine',
      'Available with a 6-speed manual for purists'
    ],
    description: 'A pint-sized mid-engine sports car engine with go-kart handling and one of the most communicative chassis Porsche builds.'
  }
];

export const PORSCHE_MODELS: CarModel[] = [
  {
    id: '911-carrera',
    image: '/cars/porsche-911.jpg',
    enthusiastNote: 'The 911 has been in continuous production since 1963, longer than any other sports car nameplate in the world, and every generation has kept the same rear-engine layout.',
    name: 'Porsche 911 Carrera',
    badge: 'The Icon, Reimagined Again',
    tagline: 'The rear-engine sports car that defined the category — now in its eighth "992" generation',
    bodyType: 'Compact Sedan',
    startingPrice: '₹1.99 Crore Onwards',
    startingExShowroom: 19900000,
    priceRange: '₹1.99 – ₹2.35 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['3.0L Twin-Turbo Flat-6 (385 PS / 450 Nm)', '3.0L Twin-Turbo Flat-6 S-Tune (450 PS / 530 Nm)'],
    keyHighlights: [
      'Rear-mounted, twin-turbocharged flat-6 layout unchanged in concept since 1963',
      'Porsche Active Suspension Management (PASM) with adaptive damping standard',
      'PDK dual-clutch as quick-shifting as any in the industry, with a 7-speed manual still on offer',
      'Porsche Communication Management with a fully digital, curved driver display',
      'Iconic silhouette instantly recognizable across all eight generations since 1963',
      'CBU import through Porsche India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '4,519 mm',
      width: '1,852 mm',
      height: '1,298 mm',
      wheelbase: '2,450 mm',
      groundClearance: '105 mm',
      bootSpace: '132 Litres (Front) + Rear Seats',
      fuelTank: '67 Litres'
    },
    variants: [
      {
        id: '911-carrera-base',
        name: '911 Carrera',
        tagline: 'The purest, lightest entry into 911 ownership',
        priceRange: '₹1.99 – ₹2.15 Crore',
        baseExShowroom: 19900000,
        engineOptions: ['3.0L Twin-Turbo Flat-6'],
        transmissions: ['8-Speed PDK Dual-Clutch', '7-Speed Manual'],
        keyFeatures: [
          'Porsche Active Suspension Management (PASM)',
          '10.9-inch Porsche Communication Management touchscreen',
          'Curved digital driver display',
          'Sport seats standard',
          'LED Matrix headlights with Porsche Dynamic Light System Plus'
        ],
        exteriorHighlights: ['19-/20-inch Carrera wheels', 'LED Matrix headlights', 'Full-width LED tail light bar'],
        interiorHighlights: ['Leather sport seats', 'GT sport steering wheel', 'Sport Chrono clock on the dash'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: '911-carrera-s',
        name: '911 Carrera S',
        tagline: 'The enthusiast’s pick — meaningfully faster with sharper reflexes',
        priceRange: '₹2.20 – ₹2.35 Crore',
        baseExShowroom: 22000000,
        engineOptions: ['3.0L Twin-Turbo Flat-6 S-Tune'],
        transmissions: ['8-Speed PDK Dual-Clutch'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Sport Chrono Package with Launch Control',
          'Rear Axle Steering available',
          'Bose Surround Sound System',
          'Adaptive Sport Seats Plus (18-way)',
          'Porsche Active Suspension Management Sport'
        ],
        exteriorHighlights: ['20-/21-inch Carrera S wheels', 'Sport exhaust with black tailpipes', 'Sport design front fascia'],
        interiorHighlights: ['Extended leather package', 'Carbon interior trim', 'Race-Tex steering wheel option'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'carrara-white-911', name: 'Carrara White Metallic', hex: '#f4f4f5', availableOn: ['911 Carrera', '911 Carrera S'] },
      { id: 'jet-black-911', name: 'Jet Black Metallic', hex: '#0a0a0a', availableOn: ['911 Carrera', '911 Carrera S'] },
      { id: 'gt-silver-911', name: 'GT Silver Metallic', hex: '#9ca3af', availableOn: ['911 Carrera', '911 Carrera S'] },
      { id: 'guards-red-911', name: 'Guards Red', hex: '#c1121f', availableOn: ['911 Carrera S'] },
      { id: 'racing-yellow-911', name: 'Racing Yellow', hex: '#facc15', availableOn: ['911 Carrera S'] }
    ]
  },
  {
    id: '718-cayman',
    image: '/cars/porsche-718-cayman.jpg',
    enthusiastNote: 'The 718 name is a tribute to Porsche’s original mid-engine 718 race car of 1957–1962, which won the Targa Florio and finished on the podium at Le Mans.',
    name: 'Porsche 718 Cayman',
    badge: 'The Purist’s Sports Car',
    tagline: 'Mid-engine balance, a manual gearbox option, and the most communicative chassis Porsche sells today',
    bodyType: 'Hatchback',
    startingPrice: '₹1.15 Crore Onwards',
    startingExShowroom: 11500000,
    priceRange: '₹1.15 – ₹1.35 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['2.0L Turbo-Petrol Flat-4 (300 PS / 380 Nm)'],
    keyHighlights: [
      'Mid-engine layout for near-perfect 45:55 front-rear weight distribution',
      'Available with a 6-speed manual gearbox — increasingly rare among modern sports cars',
      'Porsche Torque Vectoring (PTV) standard for sharper corner exit',
      'Shares its platform architecture with the open-top 718 Boxster',
      'Track-honed chassis frequently cited by enthusiast press as the segment benchmark for handling',
      'CBU import through Porsche India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '4,379 mm',
      width: '1,801 mm',
      height: '1,283 mm',
      wheelbase: '2,475 mm',
      groundClearance: '110 mm',
      bootSpace: '150 Litres (Front) + 275 Litres (Rear)',
      fuelTank: '54 Litres'
    },
    variants: [
      {
        id: '718-cayman-base',
        name: '718 Cayman',
        tagline: 'The single, focused trim — everything a mid-engine Porsche needs and nothing it doesn’t',
        priceRange: '₹1.15 – ₹1.35 Crore',
        baseExShowroom: 11500000,
        engineOptions: ['2.0L Turbo-Petrol Flat-4'],
        transmissions: ['7-Speed PDK Dual-Clutch', '6-Speed Manual'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Porsche Active Suspension Management (PASM)',
          'Porsche Torque Vectoring (PTV)',
          'Sport seats standard',
          '8.0-inch Porsche Communication Management touchscreen',
          'Bi-Xenon headlights with Porsche Dynamic Light System'
        ],
        exteriorHighlights: ['18-/19-inch Cayman wheels', 'Bi-Xenon headlights', 'Twin center-mounted tailpipes'],
        interiorHighlights: ['Leather sport seats', 'Sport steering wheel', 'Aluminum-look interior trim'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'carrara-white-cayman', name: 'Carrara White Metallic', hex: '#f4f4f5', availableOn: ['718 Cayman'] },
      { id: 'jet-black-cayman', name: 'Jet Black Metallic', hex: '#0a0a0a', availableOn: ['718 Cayman'] },
      { id: 'racing-yellow-cayman', name: 'Racing Yellow', hex: '#facc15', availableOn: ['718 Cayman'] },
      { id: 'python-green-cayman', name: 'Python Green', hex: '#16a34a', availableOn: ['718 Cayman'] }
    ]
  },
  {
    id: 'macan',
    image: '/cars/porsche-macan.jpg',
    enthusiastNote: '"Macan" comes from the Indonesian word for "tiger" — chosen by Porsche to signal a compact SUV with genuine sports-car reflexes, not just a badge exercise.',
    name: 'Porsche Macan',
    badge: 'The Compact SUV That Drives Like a Sports Car',
    tagline: 'Porsche’s best-selling model worldwide — SUV practicality without sacrificing the driving feel',
    bodyType: 'Compact SUV',
    startingPrice: '₹87.40 Lakh Onwards',
    startingExShowroom: 8740000,
    priceRange: '₹87.40 Lakh – ₹1.10 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['2.0L Turbo-Petrol (265 PS / 400 Nm)', '2.9L Twin-Turbo V6 (380 PS / 520 Nm)'],
    keyHighlights: [
      'Porsche’s highest-volume model globally, competing directly with the Audi Q5 and BMW X3',
      'Porsche Active Suspension Management (PASM) standard, air suspension optional',
      'Porsche Traction Management (PTM) all-wheel drive standard across the range',
      'Sport Chrono Package available with a dedicated Sport Response button',
      'Shares core platform engineering with the Audi Q5 under Volkswagen Group architecture',
      'CBU import through Porsche India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '4,731 mm',
      width: '1,923 mm',
      height: '1,624 mm',
      wheelbase: '2,807 mm',
      groundClearance: '196 mm',
      bootSpace: '488 Litres',
      fuelTank: '65 Litres'
    },
    variants: [
      {
        id: 'macan-base',
        name: 'Macan',
        tagline: 'The essential entry into Porsche SUV ownership',
        priceRange: '₹87.40 Lakh – ₹92.00 Lakh',
        baseExShowroom: 8740000,
        engineOptions: ['2.0L Turbo-Petrol'],
        transmissions: ['7-Speed PDK Dual-Clutch'],
        keyFeatures: [
          'Porsche Active Suspension Management (PASM)',
          '10.9-inch Porsche Communication Management touchscreen',
          'Porsche Traction Management all-wheel drive',
          'LED headlights with Porsche Dynamic Light System',
          'Adaptive cruise control'
        ],
        exteriorHighlights: ['19-inch Macan wheels', 'LED headlights', 'Roof rails'],
        interiorHighlights: ['Partial leather upholstery', 'Sport steering wheel', 'Ambient lighting'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'macan-s',
        name: 'Macan S',
        tagline: 'The performance-focused flagship trim with V6 punch',
        priceRange: '₹1.02 – ₹1.10 Crore',
        baseExShowroom: 10200000,
        engineOptions: ['2.9L Twin-Turbo V6'],
        transmissions: ['7-Speed PDK Dual-Clutch'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Sport Chrono Package with Sport Response button',
          'Adaptive air suspension',
          'Bose Surround Sound System',
          '14-way electric sport seats',
          'Matrix LED headlights'
        ],
        exteriorHighlights: ['20-/21-inch Macan S wheels', 'Sport design body kit', 'Twin tailpipes'],
        interiorHighlights: ['Full leather upholstery', 'Carbon interior trim', 'GT sport steering wheel'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'carrara-white-macan', name: 'Carrara White Metallic', hex: '#f4f4f5', availableOn: ['Macan', 'Macan S'] },
      { id: 'jet-black-macan', name: 'Jet Black Metallic', hex: '#0a0a0a', availableOn: ['Macan', 'Macan S'] },
      { id: 'dolomite-silver-macan', name: 'Dolomite Silver Metallic', hex: '#a1a1aa', availableOn: ['Macan', 'Macan S'] },
      { id: 'mamba-green-macan', name: 'Mamba Green Metallic', hex: '#14532d', availableOn: ['Macan S'] }
    ]
  },
  {
    id: 'cayenne',
    image: '/cars/porsche-cayenne.jpg',
    enthusiastNote: 'When the Cayenne launched in 2002, it was controversial among Porsche purists — but it single-handedly funded the development of later 911 generations and remains the brand’s financial backbone.',
    name: 'Porsche Cayenne',
    badge: 'The SUV That Saved Porsche',
    tagline: 'Full-size luxury SUV capability paired with genuine Porsche driving dynamics',
    bodyType: 'Luxury 4x4 SUV',
    startingPrice: '₹1.31 Crore Onwards',
    startingExShowroom: 13100000,
    priceRange: '₹1.31 – ₹1.58 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['3.0L Turbo-Petrol V6 (353 PS / 500 Nm)'],
    keyHighlights: [
      'Porsche Traction Management (PTM) permanent all-wheel drive standard',
      'Optional three-chamber adaptive air suspension with a wide ride-height range',
      'Porsche Active Suspension Management (PASM) standard across the range',
      'Available with a genuine third-row-adjacent cargo capacity for family duty',
      'The volume model that financed the development of later 911 generations',
      'CBU import through Porsche India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '4,931 mm',
      width: '1,983 mm',
      height: '1,696 mm',
      wheelbase: '2,895 mm',
      groundClearance: '190 mm',
      bootSpace: '772 Litres',
      fuelTank: '75 Litres'
    },
    variants: [
      {
        id: 'cayenne-base',
        name: 'Cayenne',
        tagline: 'The single, fully-capable base trim',
        priceRange: '₹1.31 – ₹1.58 Crore',
        baseExShowroom: 13100000,
        engineOptions: ['3.0L Turbo-Petrol V6'],
        transmissions: ['8-Speed Tiptronic S Automatic'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Porsche Active Suspension Management (PASM)',
          'Porsche Traction Management all-wheel drive',
          '12.3-inch Porsche Communication Management touchscreen',
          'Adaptive cruise control with Porsche InnoDrive',
          'Bose Surround Sound System'
        ],
        exteriorHighlights: ['20-inch Cayenne wheels', 'LED Matrix headlights', 'Roof rails'],
        interiorHighlights: ['Leather upholstery', '18-way adaptive sport seats', 'Panoramic roof system'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'carrara-white-cayenne', name: 'Carrara White Metallic', hex: '#f4f4f5', availableOn: ['Cayenne'] },
      { id: 'jet-black-cayenne', name: 'Jet Black Metallic', hex: '#0a0a0a', availableOn: ['Cayenne'] },
      { id: 'moonlight-blue-cayenne', name: 'Moonlight Blue Metallic', hex: '#1e3a5f', availableOn: ['Cayenne'] },
      { id: 'quartzite-grey-cayenne', name: 'Quartzite Grey Metallic', hex: '#52525b', availableOn: ['Cayenne'] }
    ]
  },
  {
    id: 'panamera',
    image: '/cars/porsche-panamera.jpg',
    enthusiastNote: 'The Panamera was Porsche’s first-ever full four-door, four-seat model when it launched in 2009 — proof a genuine grand tourer could still carry the crest.',
    name: 'Porsche Panamera',
    badge: 'The Grand Tourer With a Porsche Crest',
    tagline: 'Executive-sedan comfort over long distances with genuine sports-sedan reflexes when the road turns twisty',
    bodyType: 'Executive Sedan',
    startingPrice: '₹1.68 Crore Onwards',
    startingExShowroom: 16800000,
    priceRange: '₹1.68 – ₹1.95 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['2.9L Twin-Turbo V6 (330 PS / 450 Nm)'],
    keyHighlights: [
      'Three-chamber adaptive air suspension standard for a wide comfort-to-sport range',
      'Rear-wheel drive on the base Panamera, all-wheel-drive 4/4S variants available',
      'Porsche Active Suspension Management with rear-wheel steering available',
      'Full four-door, four/five-seat liftback body for genuine executive practicality',
      'PDK dual-clutch shared with the 911 and Cayman for consistent shift feel',
      'CBU import through Porsche India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '5,049 mm',
      width: '1,937 mm',
      height: '1,423 mm',
      wheelbase: '2,950 mm',
      groundClearance: '128 mm',
      bootSpace: '495 Litres',
      fuelTank: '90 Litres'
    },
    variants: [
      {
        id: 'panamera-base',
        name: 'Panamera',
        tagline: 'The single, effortlessly quick base trim',
        priceRange: '₹1.68 – ₹1.95 Crore',
        baseExShowroom: 16800000,
        engineOptions: ['2.9L Twin-Turbo V6'],
        transmissions: ['8-Speed PDK Dual-Clutch'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Three-chamber adaptive air suspension',
          '12.3-inch Porsche Communication Management touchscreen',
          'Passenger display and digital instrument cluster',
          'Bose Surround Sound System',
          'Adaptive cruise control with Porsche InnoDrive'
        ],
        exteriorHighlights: ['19-/20-inch Panamera wheels', 'LED Matrix headlights', 'Full-width LED tail light bar'],
        interiorHighlights: ['Leather upholstery', '18-way adaptive sport seats', 'Four-zone climate control'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'carrara-white-panamera', name: 'Carrara White Metallic', hex: '#f4f4f5', availableOn: ['Panamera'] },
      { id: 'jet-black-panamera', name: 'Jet Black Metallic', hex: '#0a0a0a', availableOn: ['Panamera'] },
      { id: 'gt-silver-panamera', name: 'GT Silver Metallic', hex: '#9ca3af', availableOn: ['Panamera'] },
      { id: 'night-blue-panamera', name: 'Night Blue Metallic', hex: '#1e3a5f', availableOn: ['Panamera'] }
    ]
  }
];

export const PORSCHE_SAFETY_SUITE = [
  {
    title: '5-Star Euro NCAP Across the Range',
    subtitle: '911, 718 Cayman, Macan, Cayenne & Panamera',
    description: 'Every current Porsche model sold in India carries a 5-Star Euro NCAP rating, built on the same hot-formed high-strength steel and aluminum safety-cell philosophy shared across the Volkswagen Group.',
    metric: '5-Star Full Protection'
  },
  {
    title: 'Porsche Active Suspension Management (PASM)',
    subtitle: 'Adaptive Damping Standard Across the Lineup',
    description: 'Continuously varies damping force between comfort and sport in milliseconds, keeping the body flat under hard cornering while still soaking up broken Indian road surfaces.',
    metric: 'Adaptive Damping Standard'
  },
  {
    title: 'Porsche Traction Management (PTM) All-Wheel Drive',
    subtitle: 'Standard on Macan, Cayenne & Panamera 4/4S',
    description: 'An electronically controlled, map-based all-wheel-drive system that can shift up to 100% of torque to the axle with the most grip in a fraction of a second.',
    metric: 'Map-Controlled AWD'
  },
  {
    title: 'Porsche Side Impact Protection (POSIP)',
    subtitle: 'Reinforced Door and Sill Structures',
    description: 'High-strength steel door reinforcements and sill structures form a dedicated side-impact safety cell, standard across every current Porsche model in India.',
    metric: 'Reinforced Safety Cell'
  }
];

export const PORSCHE_ENGINEERING_FEATURES = [
  {
    title: 'Porsche Active Suspension Management (PASM)',
    description: 'Electronically controlled dampers adjust firmness continuously, letting the same car soak up a broken Indian road at low speed and stay flat through a fast highway sweeper.'
  },
  {
    title: 'PDK Dual-Clutch Transmission',
    description: 'Porsche’s own dual-clutch gearbox, first developed for motorsport, delivers shifts measured in milliseconds with zero interruption in power delivery — shared across the 911, 718, Macan, Cayenne and Panamera.'
  },
  {
    title: 'Sport Chrono Package',
    description: 'Adds a rotary drive-mode dial to the steering wheel, a Sport Response button for a 20-second full-attack overboost, and a stopwatch for lap-timing on track days.'
  },
  {
    title: 'Porsche Traction Management (PTM)',
    description: 'A map-controlled all-wheel-drive system that continuously redistributes torque between axles based on throttle position, steering angle and wheel slip, standard on the SUV and Panamera range.'
  },
  {
    title: 'Porsche Communication Management (PCM)',
    description: 'The brand’s in-house infotainment suite, with Apple CarPlay, Porsche Connect, and — in the 911 and 718 — voice-controlled navigation designed to minimize distraction at speed.'
  },
  {
    title: 'Rear Axle Steering',
    description: 'Turns the rear wheels opposite to the front at low speed for a tighter turning circle, and in-phase at high speed for extra stability — available on the 911 Carrera S and Panamera.'
  }
];

export const ALL_PORSCHE_FAQS: FAQItem[] = [
  {
    category: 'Safety',
    question: 'Are Porsche cars sold in India 5-Star crash-test certified?',
    answer: 'Yes. Every current Porsche model in India — the 911, 718 Cayman, Macan, Cayenne and Panamera — carries a 5-Star Euro NCAP rating, backed by Porsche Active Suspension Management and a reinforced high-strength-steel safety cell.'
  },
  {
    category: 'Performance',
    question: 'What is PDK and how is it different from a normal automatic gearbox?',
    answer: 'PDK (Porsche-Doppelkupplungsgetriebe) is Porsche’s own dual-clutch transmission, derived from motorsport. Two clutches pre-select the next gear before you need it, so shifts happen in milliseconds with no interruption in torque delivery — noticeably quicker than a conventional torque-converter automatic.'
  },
  {
    category: 'Comparison',
    question: 'Should I choose the Macan or the Cayenne?',
    answer: 'The Macan is the smaller, sharper-handling compact SUV, closer in size and price to the Audi Q5 and BMW X3. The Cayenne is a genuinely larger, more practical SUV with a bigger boot and more rear-seat space, positioned against the Audi Q7 and BMW X5 — choose based on how much space you actually need day-to-day.'
  },
  {
    category: 'Maintenance',
    question: 'How is Porsche sold and serviced in India?',
    answer: 'Porsche India operates its own direct dealer network — Porsche Centres in Mumbai, Delhi-NCR, Bengaluru, Ahmedabad, Chennai, Hyderabad and Pune — separate from the Škoda Auto Volkswagen India (SAVWIPL) network, though it shares logistics and after-sales infrastructure with the wider Volkswagen Group in India.'
  },
  {
    category: 'Performance',
    question: 'Is the 911 practical enough to drive every day in India?',
    answer: 'Yes, within reason. The 911’s rear seats are usable for children or short adult trips, the front boot holds a couple of soft bags, and PASM’s comfort mode handles broken roads far better than the car’s looks suggest. Ground clearance (105 mm) is the main thing to respect over speed breakers.'
  },
  {
    category: 'Performance',
    question: 'What is the real-world fuel efficiency of Porsche’s engines in India?',
    answer: 'The 911 and 718’s turbocharged flat engines return roughly 5.5–7.5 km/l in city traffic and 10–13 km/l on the highway. The Macan, Cayenne and Panamera’s V6 engines return somewhat less given their added weight, at 4.8–6.5 km/l city and 8–11 km/l highway.'
  },
  {
    category: 'Comparison',
    question: 'How does the 718 Cayman compare to the 911?',
    answer: 'The 718 Cayman is the mid-engine, more affordable entry into Porsche sports-car ownership, prized by enthusiasts for its near-perfect weight balance and available manual gearbox. The 911 is the rear-engine icon with more power, more usable rear seats, and a higher top speed — the Cayman is often considered the sharper-handling car on a tight, technical road.'
  },
  {
    category: 'Safety',
    question: 'Does the Cayenne or Panamera offer adaptive driver-assistance features in India?',
    answer: 'Yes. Both offer adaptive cruise control with Porsche InnoDrive, lane-keeping assistance and a 360-degree camera system as part of their standard or optional equipment, alongside the Porsche Active Suspension Management and all-wheel-drive systems standard across the range.'
  }
];
