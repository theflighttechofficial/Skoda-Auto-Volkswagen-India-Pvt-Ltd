import { EngineSpec, FAQItem } from '../types';
import { SkodaModel } from './skodaData';

export type CarModel = SkodaModel;

export const ALL_SEAT_ENGINES: EngineSpec[] = [
  {
    id: '1.0-tsi-seat',
    name: '1.0L TSI Turbo-Petrol',
    badge: '1.0 TSI (3-Cylinder Turbo)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '999 cc',
    cylinders: 3,
    power: '110 PS (81 kW) @ 5,000–5,500 RPM',
    powerHp: 110,
    torque: '200 Nm @ 2,000–3,500 RPM',
    torqueNm: 200,
    transmissions: ['6-Speed Manual', '7-Speed DSG Automatic'],
    acceleration: '0–100 km/h in 9.5–10.9s',
    topSpeed: '188–195 km/h',
    claimedMileage: '18.5 – 20.0 km/l',
    realWorldCity: '11.0 – 13.0 km/l',
    realWorldHighway: '16.0 – 18.5 km/l',
    keyHighlights: [
      'Shared MQB-A0 platform 1.0 TSI unit used across Ibiza, Arona and entry Leon trims',
      'Compact 3-cylinder turbo with strong low-end response for European city driving',
      'Available with 6-speed manual or 7-speed DSG dual-clutch automatic',
      'Not sold in India — European and Latin American markets only'
    ],
    description: 'SEAT’s volume 1.0 TSI turbo-petrol, shared across the Ibiza, Arona and base Leon in Europe. Global reference specification only — this engine is not offered through any official channel in India.'
  },
  {
    id: '1.5-tsi-seat',
    name: '1.5L TSI EVO Turbo-Petrol with ACT',
    badge: '1.5 TSI EVO (4-Cylinder Turbo)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,498 cc',
    cylinders: 4,
    power: '150 PS (110 kW) @ 5,000–6,000 RPM',
    powerHp: 150,
    torque: '250 Nm @ 1,500–3,500 RPM',
    torqueNm: 250,
    transmissions: ['6-Speed Manual', '7-Speed DSG Automatic'],
    acceleration: '0–100 km/h in 8.3–8.9s',
    topSpeed: '210–216 km/h',
    claimedMileage: '17.0 – 18.5 km/l',
    realWorldCity: '10.0 – 11.5 km/l',
    realWorldHighway: '15.0 – 16.5 km/l',
    keyHighlights: [
      'Active Cylinder Technology (ACT) shuts down two cylinders under light load for efficiency',
      'Powers the Leon, Ateca and Tarraco mid-range trims in Europe',
      'Shared Volkswagen Group EA211 evo engine family with Škoda and Volkswagen',
      'Not sold in India — global reference specification only'
    ],
    description: 'The mainstream mid-range engine across SEAT’s European lineup, balancing performance and efficiency via cylinder deactivation. Shown here purely as a global reference spec — not available in India.'
  },
  {
    id: '2.0-tsi-cupra-seat',
    name: '2.0L TSI Turbo-Petrol (Cupra Tune)',
    badge: '2.0 TSI Cupra (300 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,984 cc',
    cylinders: 4,
    power: '300 PS (221 kW) @ 5,450–6,500 RPM',
    powerHp: 300,
    torque: '400 Nm @ 2,000–5,450 RPM',
    torqueNm: 400,
    transmissions: ['7-Speed DSG Automatic'],
    acceleration: '0–100 km/h in 5.7s',
    topSpeed: '250 km/h (limited)',
    claimedMileage: '12.5 – 13.5 km/l',
    realWorldCity: '7.0 – 8.5 km/l',
    realWorldHighway: '11.5 – 13.0 km/l',
    keyHighlights: [
      'The last SEAT-badged Cupra performance engine before Cupra became a standalone marque in 2021',
      'Shared EA888 architecture with the Volkswagen Golf R and Audi S3',
      'Optional 4Drive all-wheel-drive system on the Leon Cupra 4Drive',
      'Not sold in India — European performance-hatch reference specification only'
    ],
    description: 'The high-output 2.0 TSI that powered the Leon Cupra, SEAT’s in-house hot-hatch flagship before the Cupra sub-brand spun off independently. Included as historical/global reference content only — never sold in India.'
  }
];

export const SEAT_MODELS: CarModel[] = [
  {
    id: 'ibiza',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/2018_SEAT_Ibiza_SE_Technology_MPi_1.0_Front.jpg',
    enthusiastNote: 'The Ibiza has been SEAT’s best-selling nameplate since 1984, named after the Balearic island and long the brand’s entry point into European superminis.',
    notSoldInIndia: true,
    name: 'SEAT Ibiza',
    badge: 'The European Supermini Benchmark',
    tagline: 'A sharp-handling, Spanish-styled supermini built on the Volkswagen Group MQB-A0 platform — not sold in India',
    bodyType: 'Hatchback',
    startingPrice: 'Not Sold in India (Global Reference Price: ~€18,500)',
    startingExShowroom: 18500000,
    priceRange: 'Not Available in India (Global Reference: ~€18,500 – €24,000)',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['1.0L TSI Turbo-Petrol (110 PS / 200 Nm)'],
    keyHighlights: [
      'SEAT’s longest-running nameplate, in continuous production since 1984',
      'Shares the MQB-A0 platform with the Škoda Kylaq and Volkswagen Taigo/Polo',
      'Sharp, driver-focused chassis tuning distinct from Volkswagen Group siblings',
      'FR sport trim with lowered suspension and sports seats',
      'Not officially sold, imported or serviced in India',
      'Shown here as a global reference model for enthusiast comparison only'
    ],
    dimensions: {
      length: '4,059 mm',
      width: '1,780 mm',
      height: '1,444 mm',
      wheelbase: '2,564 mm',
      groundClearance: '135 mm',
      bootSpace: '355 Litres',
      fuelTank: '40 Litres'
    },
    variants: [
      {
        id: 'ibiza-reference',
        name: 'Ibiza Reference',
        tagline: 'The entry-level European trim, not available in India',
        priceRange: 'Not Available in India (Global Reference: ~€18,500)',
        baseExShowroom: 18500000,
        engineOptions: ['1.0L TSI Turbo-Petrol'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          '8-inch touchscreen infotainment',
          'Manual air conditioning',
          'LED daytime running lights',
          'Six airbags standard across Europe',
          'Not sold, imported or serviced in India'
        ],
        exteriorHighlights: ['16-inch steel wheels', 'LED daytime running lights', 'Body-colour door handles'],
        interiorHighlights: ['Fabric upholstery', '8-inch central touchscreen', 'Digital driver display option'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'ibiza-fr',
        name: 'Ibiza FR',
        tagline: 'The sport-styled flagship trim, not available in India',
        priceRange: 'Not Available in India (Global Reference: ~€22,000 – €24,000)',
        baseExShowroom: 22000000,
        engineOptions: ['1.0L TSI Turbo-Petrol'],
        transmissions: ['6-Speed Manual', '7-Speed DSG Automatic'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'FR-specific sports suspension, 15 mm lower',
          '9.2-inch central touchscreen',
          'Full LED headlights with dynamic indicators',
          'Sports seats with FR embroidery',
          'Not sold, imported or serviced in India'
        ],
        exteriorHighlights: ['17-inch FR alloy wheels', 'Full LED headlights', 'Gloss-black FR body kit'],
        interiorHighlights: ['FR sports seats', 'Flat-bottom steering wheel', 'Digital Cockpit driver display'],
        badgeColor: 'bg-orange-700 text-orange-50'
      }
    ],
    colors: [
      { id: 'desire-red-ibiza', name: 'Desire Red', hex: '#c8102e', availableOn: ['Ibiza Reference', 'Ibiza FR'] },
      { id: 'nevada-white-ibiza', name: 'Nevada White', hex: '#f2f2f0', availableOn: ['Ibiza Reference', 'Ibiza FR'] },
      { id: 'midnight-black-ibiza', name: 'Midnight Black', hex: '#0c0c0c', availableOn: ['Ibiza FR'] },
      { id: 'mystery-blue-ibiza', name: 'Mystery Blue', hex: '#1c3f5f', availableOn: ['Ibiza FR'] }
    ]
  },
  {
    id: 'arona',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/2018_SEAT_Arona_SE_Technology_TSi_1.0_Front.jpg',
    enthusiastNote: 'Named after a coastal town in Tenerife, the Arona was SEAT’s first-ever B-segment SUV, launched in 2017 to ride the European crossover boom.',
    notSoldInIndia: true,
    name: 'SEAT Arona',
    badge: 'SEAT’s Compact Crossover Debut',
    tagline: 'A raised-ride-height Ibiza-based crossover with SUV styling cues — not sold in India',
    bodyType: 'Compact SUV',
    startingPrice: 'Not Sold in India (Global Reference Price: ~€20,000)',
    startingExShowroom: 20000000,
    priceRange: 'Not Available in India (Global Reference: ~€20,000 – €26,000)',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['1.0L TSI Turbo-Petrol (110 PS / 200 Nm)'],
    keyHighlights: [
      'Built on the same MQB-A0 platform as the Ibiza, with 40 mm extra ground clearance',
      'SEAT’s first dedicated compact SUV, launched in 2017',
      'Two-tone roof and contrast-colour body cladding options',
      'FR trim brings sportier suspension tuning over standard Arona',
      'Not officially sold, imported or serviced in India',
      'Shown here as a global reference model for enthusiast comparison only'
    ],
    dimensions: {
      length: '4,138 mm',
      width: '1,780 mm',
      height: '1,552 mm',
      wheelbase: '2,564 mm',
      groundClearance: '175 mm',
      bootSpace: '400 Litres',
      fuelTank: '40 Litres'
    },
    variants: [
      {
        id: 'arona-se',
        name: 'Arona SE',
        tagline: 'The core European trim, not available in India',
        priceRange: 'Not Available in India (Global Reference: ~€20,000)',
        baseExShowroom: 20000000,
        engineOptions: ['1.0L TSI Turbo-Petrol'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          '8-inch touchscreen infotainment',
          'Rear parking sensors',
          'LED daytime running lights',
          '175 mm ground clearance',
          'Not sold, imported or serviced in India'
        ],
        exteriorHighlights: ['16-inch alloy wheels', 'Contrast roof option', 'LED daytime running lights'],
        interiorHighlights: ['Fabric upholstery', '8-inch touchscreen', 'Raised SUV-style seating position'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'arona-fr',
        name: 'Arona FR',
        tagline: 'The sport-styled crossover flagship, not available in India',
        priceRange: 'Not Available in India (Global Reference: ~€24,000 – €26,000)',
        baseExShowroom: 24000000,
        engineOptions: ['1.0L TSI Turbo-Petrol'],
        transmissions: ['7-Speed DSG Automatic'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'FR sports suspension tuning',
          '9.2-inch central touchscreen with wireless Apple CarPlay/Android Auto',
          'Full LED headlights standard',
          'Digital Cockpit driver display',
          'Not sold, imported or serviced in India'
        ],
        exteriorHighlights: ['18-inch FR alloy wheels', 'Full LED headlights', 'Gloss-black roof rails'],
        interiorHighlights: ['FR sports seats', 'Digital Cockpit', 'Ambient interior lighting'],
        badgeColor: 'bg-orange-700 text-orange-50'
      }
    ],
    colors: [
      { id: 'desire-red-arona', name: 'Desire Red', hex: '#c8102e', availableOn: ['Arona SE', 'Arona FR'] },
      { id: 'nevada-white-arona', name: 'Nevada White', hex: '#f2f2f0', availableOn: ['Arona SE', 'Arona FR'] },
      { id: 'graphene-grey-arona', name: 'Graphene Grey', hex: '#4a4a4a', availableOn: ['Arona FR'] }
    ]
  },
  {
    id: 'leon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/SEAT_Leon_Mk4_1X7A5844.jpg',
    enthusiastNote: 'The Leon has always been the more driver-focused, Spanish-tuned sibling to the Golf, sharing MQB platform DNA while carving its own sportier identity since 1999.',
    notSoldInIndia: true,
    name: 'SEAT Leon',
    badge: 'The Driver’s Choice Compact Hatch',
    tagline: 'A sharper-handling MQB-Evo compact hatch, SEAT’s answer to the Volkswagen Golf — not sold in India',
    bodyType: 'Hatchback',
    startingPrice: 'Not Sold in India (Global Reference Price: ~€26,000)',
    startingExShowroom: 26000000,
    priceRange: 'Not Available in India (Global Reference: ~€26,000 – €32,000)',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['1.5L TSI EVO Turbo-Petrol (150 PS / 250 Nm)'],
    keyHighlights: [
      'Fourth-generation Leon rides on the Volkswagen Group MQB Evo platform, shared with the Golf Mk8',
      'Sharper, more agonist steering tune than its Volkswagen sibling',
      'Available as a five-door hatch or ST estate in Europe',
      'Plug-in hybrid e-Hybrid variant offered globally',
      'Not officially sold, imported or serviced in India',
      'Shown here as a global reference model for enthusiast comparison only'
    ],
    dimensions: {
      length: '4,368 mm',
      width: '1,800 mm',
      height: '1,456 mm',
      wheelbase: '2,686 mm',
      groundClearance: '135 mm',
      bootSpace: '380 Litres',
      fuelTank: '50 Litres'
    },
    variants: [
      {
        id: 'leon-fr',
        name: 'Leon FR',
        tagline: 'The core sport-styled European trim, not available in India',
        priceRange: 'Not Available in India (Global Reference: ~€26,000 – €28,000)',
        baseExShowroom: 26000000,
        engineOptions: ['1.5L TSI EVO Turbo-Petrol'],
        transmissions: ['6-Speed Manual', '7-Speed DSG Automatic'],
        isPopular: true,
        keyFeatures: [
          '10-inch central touchscreen infotainment',
          'FR sports suspension, 10 mm lower than standard',
          'Digital Cockpit driver display',
          'Progressive steering rack',
          'Not sold, imported or serviced in India'
        ],
        exteriorHighlights: ['18-inch FR alloy wheels', 'Full LED headlights', 'FR rear diffuser styling'],
        interiorHighlights: ['FR sports seats', 'Digital Cockpit', 'Flat-bottom sports steering wheel'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'leon-cupra',
        name: 'Leon Cupra',
        tagline: 'The final SEAT-badged Cupra hot hatch before Cupra became standalone in 2021',
        priceRange: 'Not Available in India (Global Reference: ~€36,000 – €40,000)',
        baseExShowroom: 36000000,
        engineOptions: ['2.0L TSI Turbo-Petrol (Cupra Tune)'],
        transmissions: ['7-Speed DSG Automatic'],
        isFlagship: true,
        keyFeatures: [
          '300 PS 2.0 TSI shared architecture with the Golf R and Audi S3',
          'Optional 4Drive all-wheel drive',
          'Adaptive DCC dampers with Cupra-specific tuning',
          'Cupra bucket seats with copper accent stitching',
          'Not sold, imported or serviced in India'
        ],
        exteriorHighlights: ['19-inch Cupra alloy wheels', 'Copper Cupra badging', 'Quad exhaust tailpipes'],
        interiorHighlights: ['Cupra bucket seats', 'Copper-stitched steering wheel', 'Cupra-specific digital instrument theme'],
        badgeColor: 'bg-orange-700 text-orange-50'
      }
    ],
    colors: [
      { id: 'desire-red-leon', name: 'Desire Red', hex: '#c8102e', availableOn: ['Leon FR', 'Leon Cupra'] },
      { id: 'nevada-white-leon', name: 'Nevada White', hex: '#f2f2f0', availableOn: ['Leon FR', 'Leon Cupra'] },
      { id: 'midnight-black-leon', name: 'Midnight Black', hex: '#0c0c0c', availableOn: ['Leon FR', 'Leon Cupra'] },
      { id: 'copper-cupra-leon', name: 'Cupra Copper', hex: '#8a5a3b', availableOn: ['Leon Cupra'] }
    ]
  },
  {
    id: 'ateca',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/SEAT_Ateca_facelift_IMG_3858.jpg',
    enthusiastNote: 'The Ateca was SEAT’s first-ever SUV of any size, launched in 2016 and named after a village in Zaragoza province, kicking off SEAT’s crossover expansion.',
    notSoldInIndia: true,
    name: 'SEAT Ateca',
    badge: 'SEAT’s Original SUV Pioneer',
    tagline: 'A midsize MQB-based SUV that started SEAT’s crossover lineup in 2016 — not sold in India',
    bodyType: 'Midsize SUV',
    startingPrice: 'Not Sold in India (Global Reference Price: ~€28,000)',
    startingExShowroom: 28000000,
    priceRange: 'Not Available in India (Global Reference: ~€28,000 – €35,000)',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['1.5L TSI EVO Turbo-Petrol (150 PS / 250 Nm)'],
    keyHighlights: [
      'SEAT’s first-ever SUV nameplate, launched in 2016',
      'Shares MQB platform architecture with the Škoda Karoq and Volkswagen Tiguan',
      'Available with optional 4Drive all-wheel drive in Europe',
      'FR trim adds progressive steering and sports suspension',
      'Not officially sold, imported or serviced in India',
      'Shown here as a global reference model for enthusiast comparison only'
    ],
    dimensions: {
      length: '4,376 mm',
      width: '1,841 mm',
      height: '1,601 mm',
      wheelbase: '2,638 mm',
      groundClearance: '181 mm',
      bootSpace: '510 Litres',
      fuelTank: '58 Litres'
    },
    variants: [
      {
        id: 'ateca-se',
        name: 'Ateca SE',
        tagline: 'The core European SUV trim, not available in India',
        priceRange: 'Not Available in India (Global Reference: ~€28,000)',
        baseExShowroom: 28000000,
        engineOptions: ['1.5L TSI EVO Turbo-Petrol'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          '8.25-inch touchscreen infotainment',
          '510-litre boot, largest in the SEAT SUV range at launch',
          'Rear parking sensors and camera',
          'LED daytime running lights',
          'Not sold, imported or serviced in India'
        ],
        exteriorHighlights: ['17-inch alloy wheels', 'Roof rails', 'LED daytime running lights'],
        interiorHighlights: ['Fabric upholstery', '8.25-inch touchscreen', 'Adjustable boot floor'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'ateca-fr',
        name: 'Ateca FR',
        tagline: 'The sport-tuned SUV flagship, not available in India',
        priceRange: 'Not Available in India (Global Reference: ~€32,000 – €35,000)',
        baseExShowroom: 32000000,
        engineOptions: ['1.5L TSI EVO Turbo-Petrol'],
        transmissions: ['7-Speed DSG Automatic'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'FR sports suspension and progressive steering',
          '9.2-inch central touchscreen',
          'Optional 4Drive all-wheel drive',
          'Digital Cockpit driver display',
          'Not sold, imported or serviced in India'
        ],
        exteriorHighlights: ['19-inch FR alloy wheels', 'Full LED headlights', 'Gloss-black FR body kit'],
        interiorHighlights: ['FR sports seats', 'Digital Cockpit', 'Ambient interior lighting'],
        badgeColor: 'bg-orange-700 text-orange-50'
      }
    ],
    colors: [
      { id: 'desire-red-ateca', name: 'Desire Red', hex: '#c8102e', availableOn: ['Ateca SE', 'Ateca FR'] },
      { id: 'nevada-white-ateca', name: 'Nevada White', hex: '#f2f2f0', availableOn: ['Ateca SE', 'Ateca FR'] },
      { id: 'graphene-grey-ateca', name: 'Graphene Grey', hex: '#4a4a4a', availableOn: ['Ateca FR'] }
    ]
  },
  {
    id: 'tarraco',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Seat_Tarraco_rear.jpg',
    enthusiastNote: 'Named after the Roman city of Tarraco (modern Tarragona), the Tarraco sits atop SEAT’s SUV range as its largest, most family-focused seven-seater.',
    notSoldInIndia: true,
    name: 'SEAT Tarraco',
    badge: 'SEAT’s Flagship Seven-Seat SUV',
    tagline: 'The largest, most practical SEAT SUV, sharing its platform with the Volkswagen Tiguan Allspace — not sold in India',
    bodyType: 'Midsize SUV',
    startingPrice: 'Not Sold in India (Global Reference Price: ~€38,000)',
    startingExShowroom: 38000000,
    priceRange: 'Not Available in India (Global Reference: ~€38,000 – €42,000)',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['1.5L TSI EVO Turbo-Petrol (150 PS / 250 Nm)'],
    keyHighlights: [
      'SEAT’s flagship SUV, launched in 2018 as the brand’s largest-ever model',
      'Shares its long-wheelbase MQB platform with the Volkswagen Tiguan Allspace',
      'Optional seven-seat configuration, unique among SEAT’s SUV range',
      'Available with plug-in hybrid e-Hybrid powertrain in Europe',
      'Not officially sold, imported or serviced in India',
      'Shown here as a global reference model for enthusiast comparison only'
    ],
    dimensions: {
      length: '4,735 mm',
      width: '1,839 mm',
      height: '1,658 mm',
      wheelbase: '2,738 mm',
      groundClearance: '186 mm',
      bootSpace: '760 Litres (5-seat) / 230 Litres (7-seat)',
      fuelTank: '58 Litres'
    },
    variants: [
      {
        id: 'tarraco-se',
        name: 'Tarraco SE',
        tagline: 'The core seven-seat family trim, not available in India',
        priceRange: 'Not Available in India (Global Reference: ~€38,000)',
        baseExShowroom: 38000000,
        engineOptions: ['1.5L TSI EVO Turbo-Petrol'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          '8.25-inch touchscreen infotainment',
          'Optional third-row seating for seven occupants',
          'Rear parking sensors and camera',
          'Three-zone climate control',
          'Not sold, imported or serviced in India'
        ],
        exteriorHighlights: ['18-inch alloy wheels', 'Roof rails', 'LED tail lights'],
        interiorHighlights: ['Fabric upholstery', 'Three-row seating layout', '8.25-inch touchscreen'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'tarraco-fr',
        name: 'Tarraco FR',
        tagline: 'The sport-styled seven-seat flagship, not available in India',
        priceRange: 'Not Available in India (Global Reference: ~€40,000 – €42,000)',
        baseExShowroom: 40000000,
        engineOptions: ['1.5L TSI EVO Turbo-Petrol'],
        transmissions: ['7-Speed DSG Automatic'],
        isFlagship: true,
        keyFeatures: [
          'FR sports suspension tuning',
          '9.2-inch central touchscreen with navigation',
          'Optional 4Drive all-wheel drive',
          'Digital Cockpit driver display',
          'Not sold, imported or serviced in India'
        ],
        exteriorHighlights: ['20-inch FR alloy wheels', 'Full LED matrix headlights', 'Gloss-black FR body kit'],
        interiorHighlights: ['FR sports seats', 'Digital Cockpit', 'Three-zone ambient lighting'],
        badgeColor: 'bg-orange-700 text-orange-50'
      }
    ],
    colors: [
      { id: 'desire-red-tarraco', name: 'Desire Red', hex: '#c8102e', availableOn: ['Tarraco SE', 'Tarraco FR'] },
      { id: 'nevada-white-tarraco', name: 'Nevada White', hex: '#f2f2f0', availableOn: ['Tarraco SE', 'Tarraco FR'] },
      { id: 'graphene-grey-tarraco', name: 'Graphene Grey', hex: '#4a4a4a', availableOn: ['Tarraco FR'] }
    ]
  }
];

export const SEAT_SAFETY_SUITE = [
  {
    title: '5-Star Euro NCAP Across the Range',
    subtitle: 'Ibiza, Arona, Leon, Ateca & Tarraco',
    description: 'Every current SEAT model carries a 5-Star Euro NCAP rating, built on Volkswagen Group MQB safety-cell architecture. These ratings apply to the European market — SEAT is not officially sold or crash-rated for Indian conditions.',
    metric: '5-Star Full Protection (Europe)'
  },
  {
    title: 'MQB Platform Safety Architecture',
    subtitle: 'Shared Structural Engineering with Group Siblings',
    description: 'SEAT’s MQB and MQB-Evo platforms share crash structures with the Škoda and Volkswagen models sold in India, though no SEAT model is homologated or crash-tested for the Indian market.',
    metric: 'Group-Shared Safety Cell'
  },
  {
    title: 'Progressive Steering & FR Chassis Tuning',
    subtitle: 'Standard on FR and Cupra Trims',
    description: 'SEAT’s FR and Cupra trims add a sharper, more direct progressive steering rack, tuned by the brand’s Martorell engineering team for confident high-speed stability.',
    metric: 'Driver-Focused Handling'
  },
  {
    title: 'Not Homologated for Indian Roads',
    subtitle: 'No Indian Crash-Test Certification Exists',
    description: 'Because SEAT has no official distribution channel in India, none of its models carry Bharat NCAP or India-specific crash-test certification — all safety data shown here reflects European Euro NCAP testing only.',
    metric: 'India Homologation: None'
  }
];

export const SEAT_ENGINEERING_FEATURES = [
  {
    title: 'MQB / MQB-Evo Platform Sharing',
    description: 'SEAT models share their underlying platform architecture with Škoda, Volkswagen and Audi Group siblings, though SEAT itself has no manufacturing or assembly presence in India.'
  },
  {
    title: 'FR Sports Suspension Tuning',
    description: 'FR-badged trims receive a suspension lowered by up to 15mm and a sharper progressive steering rack, tuned in Martorell for a more engaging drive than standard trims.'
  },
  {
    title: 'Digital Cockpit Driver Display',
    description: 'A fully digital, configurable instrument cluster shared with Volkswagen Group siblings, standard on FR and Cupra trims across the range.'
  },
  {
    title: 'Cupra Performance Heritage',
    description: 'Before Cupra became a standalone marque in 2021, SEAT’s in-house performance division built the Leon Cupra — a 300 PS hot hatch that shared its EA888 engine architecture with the Golf R and Audi S3.'
  },
  {
    title: 'e-Hybrid Plug-In Powertrains',
    description: 'The Leon and Tarraco are offered with plug-in hybrid e-Hybrid powertrains in Europe, combining a TSI engine with an electric motor — none of which are available through any channel in India.'
  },
  {
    title: 'No Indian Distribution Network',
    description: 'Unlike every other Volkswagen Group brand in this showcase, SEAT has no CBU import program, no CKD assembly, and no authorised dealer or service network anywhere in India.'
  }
];

export const ALL_SEAT_FAQS: FAQItem[] = [
  {
    category: 'Availability',
    question: 'Is SEAT officially sold in India?',
    answer: 'No. SEAT has no official distribution, CBU import programme, dealer network or service infrastructure in India. Every model, price and spec shown in this showcase reflects European or global reference data, included purely for enthusiast comparison against SEAT’s Volkswagen Group siblings that are sold in India.'
  },
  {
    category: 'Safety',
    question: 'Are SEAT cars crash-test certified for Indian roads?',
    answer: 'No. SEAT models carry 5-Star Euro NCAP ratings from European testing, but none have Bharat NCAP or Indian-market homologation, since the brand is not sold here.'
  },
  {
    category: 'Comparison',
    question: 'How does the SEAT Leon compare to the Škoda Slavia or Volkswagen Virtus sold in India?',
    answer: 'The Leon rides on the same Volkswagen Group MQB Evo platform family as cars sold in India, but is a European-market hatchback with sharper FR-tuned handling. It is not available in India in any form — the Slavia and Virtus remain the closest Group siblings actually on sale here.'
  },
  {
    category: 'Performance',
    question: 'What was the SEAT Leon Cupra, and can I buy one in India?',
    answer: 'The Leon Cupra was SEAT’s in-house 300 PS hot-hatch flagship, built before Cupra span off into its own standalone brand in 2021. It shared its 2.0 TSI engine with the Volkswagen Golf R and Audi S3, but was never sold in India and cannot be purchased through any official channel here.'
  },
  {
    category: 'Maintenance',
    question: 'Where can I get a SEAT serviced in India?',
    answer: 'Nowhere officially — SEAT has no authorised service centres or spare-parts network in India. Owners of grey-market imported SEAT vehicles typically rely on independent European-car specialists rather than any factory-backed support.'
  },
  {
    category: 'Comparison',
    question: 'Why does this showcase include a brand that isn’t sold in India?',
    answer: 'SEAT is one of the six current Volkswagen Group passenger-car brands, and understanding the full Group lineup — including the one brand deliberately absent from India — helps illustrate how SEAT’s Spanish, value-sport positioning differs from Škoda, Volkswagen, Audi, Porsche, Lamborghini and Bentley.'
  },
  {
    category: 'Performance',
    question: 'What is the real-world fuel efficiency of SEAT’s engines?',
    answer: 'Based on European testing, the 1.0 TSI returns roughly 11–13 km/l in city driving and 16–18.5 km/l on the highway, broadly in line with equivalent Škoda and Volkswagen 1.0 TSI applications sold in India.'
  },
  {
    category: 'Availability',
    question: 'Could SEAT ever launch in India in the future?',
    answer: 'There is no announced plan for SEAT to enter India. The Volkswagen Group has historically preferred to concentrate its Indian small-car and SUV volume under the Škoda and Volkswagen brands rather than add a third mainstream nameplate.'
  }
];
