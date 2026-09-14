import { EngineSpec, FAQItem } from '../types';
import { SkodaModel } from './skodaData';

export type CarModel = SkodaModel;

export const ALL_AUDI_ENGINES: EngineSpec[] = [
  {
    id: '2.0-tfsi-190',
    name: '2.0L TFSI Turbo-Petrol',
    badge: '2.0 TFSI (190 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,984 cc',
    cylinders: 4,
    power: '190 PS (140 kW) @ 4,200–6,000 RPM',
    powerHp: 190,
    torque: '320 Nm @ 1,500–4,180 RPM',
    torqueNm: 320,
    transmissions: ['7-Speed S tronic Dual-Clutch'],
    acceleration: '0–100 km/h in 7.1–8.2s',
    topSpeed: '210 – 237 km/h',
    claimedMileage: '13.8 – 17.4 km/l',
    realWorldCity: '8.5 – 10.0 km/l',
    realWorldHighway: '13.0 – 15.5 km/l',
    keyHighlights: [
      'Entry powertrain for the Audi A4 sedan and Q3 compact SUV in India',
      'EA888 turbo-petrol architecture shared across the Volkswagen Group',
      'Progressive Steering and Audi Drive Select with adjustable driving modes',
      'Front-wheel drive configuration for the A4, quattro-optional on the Q3'
    ],
    description: 'The accessible entry into Audi’s progressive luxury lineup, offering brisk performance and refined manners with the badge prestige of the four rings.'
  },
  {
    id: '2.0-tfsi-249-quattro',
    name: '2.0L TFSI Turbo-Petrol quattro',
    badge: '2.0 TFSI quattro (249 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,984 cc',
    cylinders: 4,
    power: '249 PS (183 kW) @ 4,200–6,000 RPM',
    powerHp: 249,
    torque: '370 Nm @ 1,600–4,500 RPM',
    torqueNm: 370,
    transmissions: ['7-Speed S tronic Dual-Clutch quattro'],
    acceleration: '0–100 km/h in 5.9–6.3s',
    topSpeed: '237 – 245 km/h',
    claimedMileage: '11.8 – 12.9 km/l',
    realWorldCity: '7.0 – 8.5 km/l',
    realWorldHighway: '11.5 – 13.5 km/l',
    keyHighlights: [
      'High-output tune of the EA888 engine powering the A6 sedan and Q5 SUV',
      'Permanent quattro all-wheel drive for confident all-weather traction',
      'Paired exclusively with the ultra-fast 7-speed S tronic dual-clutch gearbox',
      'Progressive Dynamic steering rack sharpens response at low speeds'
    ],
    description: 'A muscular, quattro-equipped turbo-four that gives the A6 and Q5 genuine sports-sedan pace without sacrificing everyday refinement.'
  },
  {
    id: '3.0-tfsi-v6-340',
    name: '3.0L TFSI V6 Turbo-Petrol quattro',
    badge: '3.0 TFSI V6 quattro (340 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '2,995 cc',
    cylinders: 6,
    power: '340 PS (250 kW) @ 5,200–6,400 RPM',
    powerHp: 340,
    torque: '500 Nm @ 1,370–4,500 RPM',
    torqueNm: 500,
    transmissions: ['8-Speed Tiptronic Automatic quattro'],
    acceleration: '0–100 km/h in 5.6–6.1s',
    topSpeed: '250 km/h (Electronically Governed)',
    claimedMileage: '9.5 – 10.8 km/l',
    realWorldCity: '6.0 – 7.2 km/l',
    realWorldHighway: '9.5 – 11.5 km/l',
    keyHighlights: [
      'Flagship V6 turbo-petrol powering the Q7 and Q8 luxury SUVs',
      'Permanent quattro all-wheel drive with a self-locking center differential',
      'Massive 500 Nm torque plateau available from just 1,370 RPM',
      'Paired with Audi’s smooth 8-speed Tiptronic torque-converter automatic'
    ],
    description: 'Audi’s flagship non-RS V6, delivering effortless, silent power delivery and towering torque for the brand’s largest and most capable SUVs.'
  },
  {
    id: '2.9-tfsi-v6-rs',
    name: '2.9L TFSI Twin-Turbo V6 (Audi Sport)',
    badge: '2.9 TFSI V6 Bi-Turbo (450 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '2,894 cc',
    cylinders: 6,
    power: '450 PS (331 kW) @ 5,700–6,700 RPM',
    powerHp: 450,
    torque: '600 Nm @ 1,900–5,000 RPM',
    torqueNm: 600,
    transmissions: ['8-Speed Tiptronic Automatic quattro'],
    acceleration: '0–100 km/h in 3.9s',
    topSpeed: '250 – 280 km/h (RS Dynamic Package)',
    claimedMileage: '8.5 km/l',
    realWorldCity: '5.0 – 6.0 km/l',
    realWorldHighway: '8.5 – 10.5 km/l',
    keyHighlights: [
      'Hand-assembled twin-turbo V6 developed by Audi Sport in Neckarsulm',
      'Powers the RS5 Coupé and RS5 Sportback performance flagships',
      'quattro all-wheel drive with a sport rear differential for torque vectoring',
      'Broad 600 Nm torque plateau from just 1,900 RPM for relentless mid-range punch'
    ],
    description: 'Audi Sport’s hand-built twin-turbo V6, engineered to deliver supercar-humbling acceleration with the everyday usability of a 4-door sports sedan.'
  },
  {
    id: '4.0-tfsi-v8-rs',
    name: '4.0L TFSI Twin-Turbo V8 (Audi Sport)',
    badge: '4.0 TFSI V8 Bi-Turbo (600 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '3,996 cc',
    cylinders: 8,
    power: '600 PS (441 kW) @ 6,000 RPM',
    powerHp: 600,
    torque: '800 Nm @ 2,200–4,500 RPM',
    torqueNm: 800,
    transmissions: ['8-Speed Tiptronic Automatic quattro'],
    acceleration: '0–100 km/h in 3.8s',
    topSpeed: '250 km/h (305 km/h with RS Dynamic Plus Package)',
    claimedMileage: '7.2 km/l',
    realWorldCity: '4.2 – 5.0 km/l',
    realWorldHighway: '7.0 – 8.5 km/l',
    keyHighlights: [
      'Hand-built twin-turbo V8 shared with the Lamborghini Urus and Porsche Cayenne Turbo',
      'Powers both the RS Q8 SUV and the RS6 Avant performance estate',
      'Massive 800 Nm torque plateau from just 2,200 RPM',
      'Electromechanical active roll stabilization for flat, composed high-speed cornering'
    ],
    description: 'A shared-platform hand-built V8 that turns the RS Q8 into the fastest production SUV ever timed around the Nürburgring Nordschleife, and the RS6 Avant into a 600 PS load-carrying missile.'
  },
  {
    id: '1.4-tfsi-a3',
    name: '1.4L TFSI Turbo-Petrol',
    badge: '1.4 TFSI (150 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,395 cc',
    cylinders: 4,
    power: '150 PS (110 kW) @ 5,000–6,000 RPM',
    powerHp: 150,
    torque: '250 Nm @ 1,500–3,500 RPM',
    torqueNm: 250,
    transmissions: ['7-Speed S tronic Dual-Clutch'],
    acceleration: '0–100 km/h in 8.4s',
    topSpeed: '216 km/h',
    claimedMileage: '17.6 km/l',
    realWorldCity: '10.5 – 12.0 km/l',
    realWorldHighway: '16.0 – 18.5 km/l',
    keyHighlights: [
      'Exclusive CBU/CKD import engine for the compact Audi A3 sedan in India',
      'EA211 turbo-petrol architecture shared across the Volkswagen Group',
      'Paired exclusively with a smooth 7-speed S tronic dual-clutch transmission',
      'Front-wheel drive configuration for agile, efficient compact-luxury motoring'
    ],
    description: 'A refined, efficient turbo-petrol four-cylinder that gave the compact Audi A3 brisk performance without the fuel costs of a larger engine.'
  }
];

export const AUDI_MODELS: CarModel[] = [
  {
    id: 'a4',
    image: '/cars/a4.jpg',
    enthusiastNote: 'Audi\'s alphanumeric "A" naming system launched in 1994; the A4 directly replaced the Audi 80 nameplate that had run continuously since 1972.',
    name: 'Audi A4',
    badge: 'The Progressive Executive Sedan',
    tagline: 'Understated luxury, digital cockpit precision, and effortless turbo-petrol performance',
    bodyType: 'Executive Sedan',
    startingPrice: '₹46.05 Lakh Onwards',
    startingExShowroom: 4605000,
    priceRange: '₹46.05 – ₹49.99 Lakh',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['2.0 TFSI Turbo-Petrol (190 PS / 320 Nm)'],
    keyHighlights: [
      'Audi Virtual Cockpit fully digital 12.3-inch driver display standard across the range',
      'MLB Evo platform shared with the Volkswagen Group’s premium longitudinal-engine models',
      'Progressive luxury design language with a minimalist, technology-forward cabin',
      'Renowned for class-leading ride comfort tuned specifically for Indian road conditions',
      '7-speed S tronic dual-clutch transmission with steering-mounted paddle shifters',
      'One of the best-selling entry-luxury sedans in the Indian premium car segment'
    ],
    dimensions: {
      length: '4,762 mm',
      width: '1,847 mm',
      height: '1,427 mm',
      wheelbase: '2,820 mm',
      groundClearance: '148 mm',
      bootSpace: '480 Litres',
      fuelTank: '54 Litres'
    },
    variants: [
      {
        id: 'a4-premium-plus',
        name: 'A4 Premium Plus',
        tagline: 'The refined entry into Audi’s progressive luxury sedan lineup',
        priceRange: '₹46.05 – ₹47.99 Lakh',
        baseExShowroom: 4605000,
        engineOptions: ['2.0 TFSI Turbo-Petrol'],
        transmissions: ['7-Speed S tronic Dual-Clutch'],
        keyFeatures: [
          '12.3-inch Audi Virtual Cockpit digital instrument cluster',
          '10.1-inch MMI touch infotainment display',
          'Three-zone automatic climate control',
          'Audi Pre Sense Basic safety suite',
          'LED headlamps with dynamic turn indicators'
        ],
        exteriorHighlights: ['17-inch alloy wheels', 'LED headlamps and tail lamps', 'Chrome window surrounds'],
        interiorHighlights: ['Leather upholstery', 'Aluminum interior inlays', 'Ambient lighting'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'a4-technology',
        name: 'A4 Technology',
        tagline: 'The fully-loaded flagship with Audi’s complete driver-assistance and comfort suite',
        priceRange: '₹48.99 – ₹49.99 Lakh',
        baseExShowroom: 4899000,
        engineOptions: ['2.0 TFSI Turbo-Petrol'],
        transmissions: ['7-Speed S tronic Dual-Clutch'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Bang & Olufsen 3D premium sound system',
          'Panoramic sunroof',
          'Matrix LED headlamps with dynamic cornering light',
          'Wireless Apple CarPlay & Android Auto',
          'Audi Connect Plus with embedded SIM connected car tech'
        ],
        exteriorHighlights: ['18-inch alloy wheels', 'Matrix LED headlamps', 'S line exterior styling package'],
        interiorHighlights: ['Extended leather upholstery', 'Fine Grain Ash wood inlays', '3-zone Climatronic'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'glacier-white-a4', name: 'Glacier White Metallic', hex: '#f1f5f9', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'mythos-black-a4', name: 'Mythos Black Metallic', hex: '#18181b', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'floret-silver-a4', name: 'Floret Silver Metallic', hex: '#94a3b8', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'district-green-a4', name: 'District Green Metallic', hex: '#14532d', availableOn: ['Technology'] },
      { id: 'tango-red-a4', name: 'Tango Red Metallic', hex: '#991b1b', availableOn: ['Technology'] }
    ]
  },
  {
    id: 'a6',
    image: '/cars/a6.jpg',
    enthusiastNote: 'The A6 traces its lineage back to the original Audi 100 of 1968, making it one of the oldest continuous model lines in the Audi range.',
    name: 'Audi A6',
    badge: 'The Executive Autobahn Cruiser',
    tagline: 'Quattro-equipped executive luxury with commanding highway presence',
    bodyType: 'Executive Sedan',
    startingPrice: '₹63.15 Lakh Onwards',
    startingExShowroom: 6315000,
    priceRange: '₹63.15 – ₹72.40 Lakh',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['2.0 TFSI quattro Turbo-Petrol (249 PS / 370 Nm)'],
    keyHighlights: [
      'Twin-display MMI touch response infotainment system with haptic feedback',
      'Standard quattro all-wheel drive across the entire India range',
      'Adaptive air suspension with selectable Audi Drive Select modes',
      'Executive rear legroom with three-zone Climatronic climate control',
      'MLB Evo platform lightweight construction using aluminum and high-strength steel',
      'Positioned as Audi India’s benchmark executive sedan against the E-Class and 5 Series'
    ],
    dimensions: {
      length: '4,939 mm',
      width: '1,886 mm',
      height: '1,457 mm',
      wheelbase: '2,924 mm',
      groundClearance: '148 mm',
      bootSpace: '530 Litres',
      fuelTank: '73 Litres'
    },
    variants: [
      {
        id: 'a6-premium-plus',
        name: 'A6 Premium Plus',
        tagline: 'The essential executive trim with complete quattro capability',
        priceRange: '₹63.15 – ₹66.50 Lakh',
        baseExShowroom: 6315000,
        engineOptions: ['2.0 TFSI quattro Turbo-Petrol'],
        transmissions: ['7-Speed S tronic Dual-Clutch quattro'],
        keyFeatures: [
          'Twin 10.1-inch and 8.6-inch MMI touch response displays',
          '12.3-inch Audi Virtual Cockpit Plus',
          'Adaptive air suspension',
          'Audi Pre Sense City & Front',
          'Matrix LED headlamps'
        ],
        exteriorHighlights: ['18-inch alloy wheels', 'Matrix LED headlamps', 'Chrome-accented grille'],
        interiorHighlights: ['Leather upholstery', 'Aluminum trim inlays', 'Four-zone ambient lighting'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'a6-technology',
        name: 'A6 Technology',
        tagline: 'The range-topping flagship with the complete luxury and sound suite',
        priceRange: '₹69.50 – ₹72.40 Lakh',
        baseExShowroom: 6950000,
        engineOptions: ['2.0 TFSI quattro Turbo-Petrol'],
        transmissions: ['7-Speed S tronic Dual-Clutch quattro'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Bang & Olufsen 3D Advanced Sound System (16 speakers)',
          'Panoramic sunroof',
          'Head-up display',
          'Ventilated and massage-function front seats',
          'Audi Connect Plus with remote vehicle functions'
        ],
        exteriorHighlights: ['19-inch alloy wheels', 'S line exterior package', 'Illuminated door sills'],
        interiorHighlights: ['Valcona leather upholstery', 'Extended wood trim', 'Four-zone Climatronic'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'glacier-white-a6', name: 'Glacier White Metallic', hex: '#f1f5f9', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'mythos-black-a6', name: 'Mythos Black Metallic', hex: '#18181b', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'floret-silver-a6', name: 'Floret Silver Metallic', hex: '#94a3b8', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'district-green-a6', name: 'District Green Metallic', hex: '#14532d', availableOn: ['Technology'] },
      { id: 'navarra-blue-a6', name: 'Navarra Blue Metallic', hex: '#1e3a8a', availableOn: ['Technology'] }
    ]
  },
  {
    id: 'q3',
    image: '/cars/20250609122007_Audi_Q3_Sportback_Daytona_Gray_Pearlescent-1-.avif',
    enthusiastNote: 'Audi\'s "Q" SUV badge and its famous "quattro" all-wheel-drive branding share the same Latin root: "quattro", simply meaning "four".',
    name: 'Audi Q3',
    badge: 'The Compact Luxury SUV',
    tagline: 'Agile, tech-forward compact SUV that brings quattro capability to the entry-luxury segment',
    bodyType: 'Compact SUV',
    startingPrice: '₹46.38 Lakh Onwards',
    startingExShowroom: 4638000,
    priceRange: '₹46.38 – ₹53.68 Lakh',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['2.0 TFSI Turbo-Petrol (190 PS / 320 Nm)'],
    keyHighlights: [
      'Compact luxury SUV footprint built on the MQB Evo platform shared with the Volkswagen Group',
      'Also offered as the sportier, coupe-roofline Q3 Sportback variant',
      '10.25-inch Audi Virtual Cockpit digital instrument cluster standard',
      'Segment-leading 675-litre boot space (Sportback: 530 litres)',
      'Progressive exterior design with an oversized single-frame grille',
      'Positioned as the accessible entry point into Audi’s SUV lineup in India'
    ],
    dimensions: {
      length: '4,484 mm',
      width: '1,849 mm',
      height: '1,616 mm',
      wheelbase: '2,680 mm',
      groundClearance: '200 mm',
      bootSpace: '530 Litres (Sportback) / 675 Litres (SUV)',
      fuelTank: '58 Litres'
    },
    variants: [
      {
        id: 'q3-premium-plus',
        name: 'Q3 Premium Plus',
        tagline: 'The essential entry into Audi’s compact luxury SUV lineup',
        priceRange: '₹46.38 – ₹49.50 Lakh',
        baseExShowroom: 4638000,
        engineOptions: ['2.0 TFSI Turbo-Petrol'],
        transmissions: ['7-Speed S tronic Dual-Clutch'],
        keyFeatures: [
          '10.25-inch Audi Virtual Cockpit',
          '10.1-inch MMI touch infotainment',
          'Panoramic sunroof',
          'Audi Pre Sense Front',
          'LED headlamps with LED tail lamps'
        ],
        exteriorHighlights: ['18-inch alloy wheels', 'LED headlamps', 'Single-frame octagonal grille'],
        interiorHighlights: ['Leather upholstery', 'Sport seats with contrast stitching', 'Ambient lighting'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'q3-technology',
        name: 'Q3 Technology / Sportback',
        tagline: 'The flagship trim with the complete technology suite and sportier Sportback roofline option',
        priceRange: '₹50.50 – ₹53.68 Lakh',
        baseExShowroom: 5050000,
        engineOptions: ['2.0 TFSI Turbo-Petrol'],
        transmissions: ['7-Speed S tronic Dual-Clutch'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Matrix LED headlamps with dynamic indicators',
          'Bang & Olufsen premium sound system',
          'Wireless smartphone charging and connectivity',
          '3-zone Climatronic automatic climate control',
          'Audi Connect Plus embedded SIM'
        ],
        exteriorHighlights: ['19-inch alloy wheels', 'Coupe-SUV Sportback roofline option', 'S line exterior package'],
        interiorHighlights: ['Extended leather upholstery', 'Aluminum interior trim', 'Sport steering wheel'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'glacier-white-q3', name: 'Glacier White Metallic', hex: '#f1f5f9', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'mythos-black-q3', name: 'Mythos Black Metallic', hex: '#18181b', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'chronos-grey-q3', name: 'Chronos Grey Metallic', hex: '#3f3f46', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'pulse-orange-q3', name: 'Pulse Orange', hex: '#c2410c', availableOn: ['Technology'] },
      { id: 'navarra-blue-q3', name: 'Navarra Blue Metallic', hex: '#1e3a8a', availableOn: ['Technology'] }
    ]
  },
  {
    id: 'q5',
    image: '/cars/q5.jpg',
    enthusiastNote: 'The Q5, launched in 2008, was Audi\'s first-ever compact SUV — built specifically to go head-to-head with the BMW X3.',
    name: 'Audi Q5',
    badge: 'The Benchmark Midsize Luxury SUV',
    tagline: 'quattro-equipped midsize SUV blending sports-car agility with everyday luxury SUV comfort',
    bodyType: 'Midsize SUV',
    startingPrice: '₹65.10 Lakh Onwards',
    startingExShowroom: 6510000,
    priceRange: '₹65.10 – ₹71.20 Lakh',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['2.0 TFSI quattro Turbo-Petrol (249 PS / 370 Nm)'],
    keyHighlights: [
      'Standard quattro ultra all-wheel drive with intelligent front/rear torque distribution',
      'MLB Evo platform shared with the Volkswagen Group’s premium SUV architecture',
      'Adaptive air suspension available for a plush yet composed ride',
      '10.1-inch MMI touch response infotainment with natural voice control',
      'Segment-leading 520-litre boot space, expandable to 1,520 litres',
      'One of the best-selling luxury SUVs in Audi’s global lineup'
    ],
    dimensions: {
      length: '4,663 mm',
      width: '1,893 mm',
      height: '1,659 mm',
      wheelbase: '2,821 mm',
      groundClearance: '200 mm',
      bootSpace: '520 Litres (Expandable to 1,520 Litres)',
      fuelTank: '70 Litres'
    },
    variants: [
      {
        id: 'q5-premium-plus',
        name: 'Q5 Premium Plus',
        tagline: 'The essential quattro luxury SUV trim with complete safety equipment',
        priceRange: '₹65.10 – ₹68.00 Lakh',
        baseExShowroom: 6510000,
        engineOptions: ['2.0 TFSI quattro Turbo-Petrol'],
        transmissions: ['7-Speed S tronic Dual-Clutch quattro'],
        keyFeatures: [
          '12.3-inch Audi Virtual Cockpit',
          '10.1-inch MMI touch response infotainment',
          'Quattro all-wheel drive standard',
          'Audi Pre Sense Front & City',
          'Matrix LED headlamps'
        ],
        exteriorHighlights: ['19-inch alloy wheels', 'Matrix LED headlamps', 'Silver-accented skid plates'],
        interiorHighlights: ['Leather upholstery', 'Aluminum interior inlays', 'Ambient lighting'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'q5-technology',
        name: 'Q5 Technology',
        tagline: 'The range-topping trim with adaptive air suspension and premium sound',
        priceRange: '₹69.50 – ₹71.20 Lakh',
        baseExShowroom: 6950000,
        engineOptions: ['2.0 TFSI quattro Turbo-Petrol'],
        transmissions: ['7-Speed S tronic Dual-Clutch quattro'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Adaptive air suspension with selectable damping',
          'Bang & Olufsen premium 3D sound system',
          'Panoramic sunroof',
          'Head-up display',
          'Audi Connect Plus with off-road driving modes'
        ],
        exteriorHighlights: ['20-inch alloy wheels', 'S line exterior styling package', 'Illuminated door sills'],
        interiorHighlights: ['Valcona leather upholstery', 'Extended aluminum trim', 'Ventilated front seats'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'glacier-white-q5', name: 'Glacier White Metallic', hex: '#f1f5f9', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'mythos-black-q5', name: 'Mythos Black Metallic', hex: '#18181b', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'floret-silver-q5', name: 'Floret Silver Metallic', hex: '#94a3b8', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'district-green-q5', name: 'District Green Metallic', hex: '#14532d', availableOn: ['Technology'] },
      { id: 'tango-red-q5', name: 'Tango Red Metallic', hex: '#991b1b', availableOn: ['Technology'] }
    ]
  },
  {
    id: 'q7',
    image: '/cars/20240130053543_2024_audi_q7_rear_left_three_quarter.avif',
    enthusiastNote: 'The Q7 was Audi\'s very first SUV nameplate, launched in 2005 sharing its platform architecture with the Porsche Cayenne and VW Touareg.',
    name: 'Audi Q7',
    badge: 'The 7-Seater Flagship SUV',
    tagline: 'Full-size 7-seater luxury SUV combining V6 muscle with commanding road presence',
    bodyType: 'Luxury 4x4 SUV',
    startingPrice: '₹85.30 Lakh Onwards',
    startingExShowroom: 8530000,
    priceRange: '₹85.30 – ₹90.30 Lakh',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['3.0 TFSI V6 quattro Turbo-Petrol (340 PS / 500 Nm)'],
    keyHighlights: [
      'Genuine 3-row 7-seater flagship SUV with adult-usable third-row seating',
      'Standard quattro permanent all-wheel drive with off-road driving modes',
      'Adaptive air suspension with 60 mm of adjustable ride height',
      'Bang & Olufsen 3D Advanced Sound System with 19 speakers',
      'Illuminated Audi rings and dynamic indicator light signature',
      'Positioned as Audi India’s flagship family SUV against the GLS and X7'
    ],
    dimensions: {
      length: '5,063 mm',
      width: '1,970 mm',
      height: '1,741 mm',
      wheelbase: '2,995 mm',
      groundClearance: '245 mm (Adjustable Air Suspension)',
      bootSpace: '295 Litres (7-Seat) / 890 Litres (5-Seat)',
      fuelTank: '75 Litres'
    },
    variants: [
      {
        id: 'q7-premium-plus',
        name: 'Q7 Premium Plus',
        tagline: 'The essential 7-seater flagship trim with complete quattro capability',
        priceRange: '₹85.30 – ₹87.50 Lakh',
        baseExShowroom: 8530000,
        engineOptions: ['3.0 TFSI V6 quattro Turbo-Petrol'],
        transmissions: ['8-Speed Tiptronic Automatic quattro'],
        keyFeatures: [
          'Adaptive air suspension with off-road mode',
          '12.3-inch Audi Virtual Cockpit',
          'Dual-screen MMI touch response infotainment',
          '3-row 7-seater configuration',
          'Matrix LED headlamps'
        ],
        exteriorHighlights: ['20-inch alloy wheels', 'Matrix LED headlamps', 'Illuminated Audi rings'],
        interiorHighlights: ['Leather upholstery across all three rows', 'Aluminum interior trim', 'Four-zone Climatronic'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'q7-technology',
        name: 'Q7 Technology',
        tagline: 'The range-topping flagship with the complete luxury and sound suite',
        priceRange: '₹89.30 – ₹90.30 Lakh',
        baseExShowroom: 8930000,
        engineOptions: ['3.0 TFSI V6 quattro Turbo-Petrol'],
        transmissions: ['8-Speed Tiptronic Automatic quattro'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Bang & Olufsen 3D Advanced Sound System (19 speakers)',
          'Panoramic sunroof',
          'Head-up display',
          'Ventilated and massage-function front seats',
          'Audi Connect Plus with remote vehicle functions'
        ],
        exteriorHighlights: ['21-inch alloy wheels', 'S line exterior package', 'Illuminated door sills'],
        interiorHighlights: ['Valcona leather upholstery', 'Extended wood and aluminum trim', 'Rear entertainment package'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'glacier-white-q7', name: 'Glacier White Metallic', hex: '#f1f5f9', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'mythos-black-q7', name: 'Mythos Black Metallic', hex: '#18181b', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'floret-silver-q7', name: 'Floret Silver Metallic', hex: '#94a3b8', availableOn: ['Premium Plus', 'Technology'] },
      { id: 'navarra-blue-q7', name: 'Navarra Blue Metallic', hex: '#1e3a8a', availableOn: ['Technology'] },
      { id: 'samurai-grey-q7', name: 'Samurai Grey Metallic', hex: '#52525b', availableOn: ['Technology'] }
    ]
  },
  {
    id: 'q8',
    image: '/cars/Audi-Q8-front-static.avif',
    enthusiastNote: 'Audi first trademarked the "Q8" name for a 1990s concept car — the production version didn\'t actually reach showrooms until 2018.',
    name: 'Audi Q8',
    badge: 'The Coupe-SUV Halo Flagship',
    tagline: 'Audi’s most striking SUV, pairing coupe-roofline design with V6 quattro muscle',
    bodyType: 'Luxury 4x4 SUV',
    startingPrice: '₹1.17 Crore Onwards',
    startingExShowroom: 11700000,
    priceRange: '₹1.17 – ₹1.30 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['3.0 TFSI V6 quattro Turbo-Petrol (340 PS / 500 Nm)'],
    keyHighlights: [
      'Coupe-SUV roofline blending striking design with 5-seat luxury SUV practicality',
      'Standard quattro permanent all-wheel drive with adaptive air suspension',
      'Dual-touchscreen MMI touch response system with haptic and acoustic feedback',
      'OLED digital rear light strip spanning the full width of the tailgate',
      'Positioned as Audi India’s design-led halo SUV above the Q7',
      'Shares its core platform with the Porsche Cayenne and Lamborghini Urus'
    ],
    dimensions: {
      length: '4,993 mm',
      width: '1,995 mm',
      height: '1,706 mm',
      wheelbase: '2,995 mm',
      groundClearance: '254 mm (Adjustable Air Suspension)',
      bootSpace: '605 Litres (Expandable to 1,755 Litres)',
      fuelTank: '75 Litres'
    },
    variants: [
      {
        id: 'q8-technology',
        name: 'Q8 Technology',
        tagline: 'The single, fully-loaded flagship trim with the complete Audi luxury suite',
        priceRange: '₹1.17 – ₹1.30 Crore',
        baseExShowroom: 11700000,
        engineOptions: ['3.0 TFSI V6 quattro Turbo-Petrol'],
        transmissions: ['8-Speed Tiptronic Automatic quattro'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Dual 10.1-inch and 8.6-inch MMI touch response displays',
          'Adaptive air suspension with Audi Drive Select',
          'Bang & Olufsen 3D Advanced Sound System',
          'OLED full-width rear light strip',
          'Audi Connect Plus with remote vehicle functions'
        ],
        exteriorHighlights: ['21-inch alloy wheels', 'Coupe-SUV roofline', 'Illuminated Audi rings front and rear'],
        interiorHighlights: ['Valcona leather upholstery', 'Aluminum and wood interior trim', 'Four-zone Climatronic'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'glacier-white-q8', name: 'Glacier White Metallic', hex: '#f1f5f9', availableOn: ['Technology'] },
      { id: 'mythos-black-q8', name: 'Mythos Black Metallic', hex: '#18181b', availableOn: ['Technology'] },
      { id: 'samurai-grey-q8', name: 'Samurai Grey Metallic', hex: '#52525b', availableOn: ['Technology'] },
      { id: 'navarra-blue-q8', name: 'Navarra Blue Metallic', hex: '#1e3a8a', availableOn: ['Technology'] }
    ]
  },
  {
    id: 'a3',
    image: '/cars/a3.jpg',
    enthusiastNote: 'The 1996 Audi A3 was the first Volkswagen Group car built on the compact modular platform that now underpins nearly every VW Group hatchback.',
    name: 'Audi A3',
    badge: 'Hall of Fame Compact Luxury Sedan',
    tagline: 'The accessible entry point into Audi ownership that introduced a generation of Indian buyers to the four rings (2014–2020)',
    bodyType: 'Compact Sedan',
    startingPrice: 'Hall of Fame Legend (2014–2020)',
    startingExShowroom: 3100000,
    priceRange: '₹31.00 – ₹37.30 Lakh (Final India Price List)',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['1.4 TFSI Turbo-Petrol (150 PS / 250 Nm)'],
    keyHighlights: [
      'Audi India’s most accessible model, bringing progressive luxury to a wider audience',
      'Compact sedan proportions with a spacious 425-litre boot',
      '7-speed S tronic dual-clutch transmission standard across the range',
      'MQB platform underpinnings shared with the Volkswagen Group’s premium compact cars',
      'Renowned for taut handling and a genuinely premium cabin ambience at its price point',
      'Discontinued in India in 2020 as Audi consolidated its lineup around SUVs'
    ],
    dimensions: {
      length: '4,467 mm',
      width: '1,796 mm',
      height: '1,416 mm',
      wheelbase: '2,631 mm',
      groundClearance: '155 mm',
      bootSpace: '425 Litres',
      fuelTank: '50 Litres'
    },
    variants: [
      {
        id: 'a3-premium',
        name: 'A3 Premium',
        tagline: 'The essential entry into Audi ownership with complete safety equipment',
        priceRange: '₹31.00 – ₹33.50 Lakh',
        baseExShowroom: 3100000,
        engineOptions: ['1.4 TFSI Turbo-Petrol'],
        transmissions: ['7-Speed S tronic Dual-Clutch'],
        keyFeatures: [
          'MMI touch infotainment with Bluetooth telephony',
          'Xenon headlamps with LED daytime running lights',
          'Dual-zone automatic climate control',
          'Audi Pre Sense Basic safety suite',
          '6 airbags standard'
        ],
        exteriorHighlights: ['16-inch alloy wheels', 'Xenon headlamps', 'Single-frame chrome grille'],
        interiorHighlights: ['Leatherette upholstery', 'Aluminum interior inlays', 'Flat-bottom sport steering wheel'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'a3-premium-plus',
        name: 'A3 Premium Plus',
        tagline: 'The flagship trim with the complete technology and comfort suite',
        priceRange: '₹35.00 – ₹37.30 Lakh',
        baseExShowroom: 3500000,
        engineOptions: ['1.4 TFSI Turbo-Petrol'],
        transmissions: ['7-Speed S tronic Dual-Clutch'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Bang & Olufsen premium sound system',
          'Sunroof and ambient interior lighting',
          'Wireless smartphone connectivity',
          'Leather upholstery with heated front seats',
          'Rear parking camera with sensors'
        ],
        exteriorHighlights: ['17-inch alloy wheels', 'LED headlamps', 'S line exterior styling package'],
        interiorHighlights: ['Extended leather upholstery', 'Aluminum and piano black trim', 'Ambient lighting'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'glacier-white-a3', name: 'Glacier White Metallic', hex: '#f1f5f9', availableOn: ['Premium', 'Premium Plus'] },
      { id: 'mythos-black-a3', name: 'Mythos Black Metallic', hex: '#18181b', availableOn: ['Premium', 'Premium Plus'] },
      { id: 'floret-silver-a3', name: 'Floret Silver Metallic', hex: '#94a3b8', availableOn: ['Premium', 'Premium Plus'] },
      { id: 'misano-red-a3', name: 'Misano Red Pearl', hex: '#991b1b', availableOn: ['Premium Plus'] }
    ]
  },
  {
    id: 'a8',
    image: '/cars/a8.jpg',
    enthusiastNote: 'The A8 was the world\'s first mass-production car with an all-aluminium "Audi Space Frame" body, a manufacturing first when it launched in 1994.',
    name: 'Audi A8 L',
    badge: 'The Presidential Flagship Limousine',
    tagline: 'Audi’s technological flagship, offering chauffeur-grade rear luxury and quattro-equipped V6 authority',
    bodyType: 'Executive Sedan',
    startingPrice: '₹1.29 Crore Onwards',
    startingExShowroom: 12900000,
    priceRange: '₹1.29 – ₹1.60 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['3.0 TFSI V6 quattro Turbo-Petrol (340 PS / 500 Nm)'],
    keyHighlights: [
      'Long-wheelbase-only "L" bodystyle sold in India for maximum rear legroom',
      'Standard quattro permanent all-wheel drive with predictive adaptive air suspension',
      'Audi AI active suspension-ready platform with 48-volt mild-hybrid assistance',
      'Rear seat relaxation package with reclining seats, footrests, and rear touch remote',
      'Level 2 ADAS suite including adaptive cruise assist and predictive efficiency assist',
      'Positioned as Audi India’s halo flagship against the Mercedes S-Class and BMW 7 Series'
    ],
    dimensions: {
      length: '5,302 mm',
      width: '1,945 mm',
      height: '1,488 mm',
      wheelbase: '3,128 mm',
      groundClearance: '135 mm (Adjustable Air Suspension)',
      bootSpace: '505 Litres',
      fuelTank: '82 Litres'
    },
    variants: [
      {
        id: 'a8-l-technology',
        name: 'A8 L Technology',
        tagline: 'The single, fully-loaded flagship trim with the complete presidential luxury suite',
        priceRange: '₹1.29 – ₹1.60 Crore',
        baseExShowroom: 12900000,
        engineOptions: ['3.0 TFSI V6 quattro Turbo-Petrol'],
        transmissions: ['8-Speed Tiptronic Automatic quattro'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Rear seat relaxation package with reclining and massage function',
          'Bang & Olufsen 3D Advanced Sound System with 23 speakers',
          'Predictive adaptive air suspension with active roll stabilization',
          'Matrix LED headlamps with laser high beam',
          'Rear-seat touch remote controlling climate, seats, and entertainment'
        ],
        exteriorHighlights: ['20-inch alloy wheels', 'Illuminated Audi rings', 'OLED rear light signature'],
        interiorHighlights: ['Valcona leather upholstery', 'Wood and aluminum interior trim', 'Four-zone Climatronic with rear touch panel'],
        badgeColor: 'bg-red-700 text-white'
      }
    ],
    colors: [
      { id: 'glacier-white-a8', name: 'Glacier White Metallic', hex: '#f1f5f9', availableOn: ['Technology'] },
      { id: 'mythos-black-a8', name: 'Mythos Black Metallic', hex: '#18181b', availableOn: ['Technology'] },
      { id: 'floret-silver-a8', name: 'Floret Silver Metallic', hex: '#94a3b8', availableOn: ['Technology'] },
      { id: 'navarra-blue-a8', name: 'Navarra Blue Metallic', hex: '#1e3a8a', availableOn: ['Technology'] }
    ]
  }
];

export const AUDI_SAFETY_SUITE = [
  {
    title: '5-Star Euro NCAP Across the Range',
    subtitle: 'A4, A6, Q3, Q5, Q7 & Q8 (Euro NCAP Certified)',
    description: 'Every Audi model sold in India carries a 5-Star Euro NCAP rating, built on the MLB Evo and MQB Evo platforms shared with the wider Volkswagen Group.',
    metric: '5-Star Full Protection'
  },
  {
    title: 'quattro All-Wheel Drive Standard on Most Models',
    subtitle: 'Permanent All-Wheel Traction Across A6, Q5, Q7 & Q8',
    description: 'quattro’s self-locking center differential continuously distributes torque between axles, delivering confident grip in monsoon and highway conditions alike.',
    metric: 'quattro AWD Standard'
  },
  {
    title: 'Audi Pre Sense Collision Avoidance',
    subtitle: 'Radar & Camera-Based Predictive Safety',
    description: 'Detects imminent collisions and automatically pre-tensions seatbelts, closes windows and sunroof, and can apply autonomous emergency braking before impact.',
    metric: 'Predictive Pre Sense'
  },
  {
    title: 'Hot-Formed Ultra-High-Strength Steel Safety Cell',
    subtitle: 'Shared Volkswagen Group Body Engineering Standard',
    description: 'B-pillars and crash-load pathways are hot-stamped and laser-welded, forming a rigid occupant safety cell across every current Audi model in India.',
    metric: '5-Star Body Structure'
  }
];

export const AUDI_PROGRESSIVE_LUXURY_FEATURES = [
  {
    title: 'quattro Permanent All-Wheel Drive',
    description: 'A self-locking center differential distributes torque continuously between front and rear axles, delivering confident traction on wet roads without any driver intervention.'
  },
  {
    title: 'Audi Virtual Cockpit',
    description: 'A fully digital, reconfigurable 12.3-inch instrument cluster replaces analog dials, projecting navigation maps and media directly in the driver’s line of sight.'
  },
  {
    title: 'MMI Touch Response Displays',
    description: 'Haptic and acoustic click feedback confirms every touchscreen input, letting drivers operate climate and infotainment controls without taking their eyes off the road.'
  },
  {
    title: 'Audi Pre Sense Safety Suite',
    description: 'Radar and camera sensors detect imminent collisions and pre-tension seatbelts, close windows, and apply braking automatically before impact.'
  },
  {
    title: 'Adaptive Air Suspension',
    description: 'Continuously adjusts damping and ride height in milliseconds, transforming from a cloud-soft highway cruiser to a flat-cornering canyon carver at the press of a button.'
  },
  {
    title: 'Matrix LED / OLED Lighting Signature',
    description: 'Individually controlled LED segments dim only the light hitting oncoming traffic, keeping high beams on elsewhere for maximum visibility on unlit highways.'
  }
];

export const ALL_AUDI_FAQS: FAQItem[] = [
  {
    category: 'Safety',
    question: 'Are Audi cars sold in India 5-Star crash-test certified?',
    answer: 'Yes. Every current Audi model sold in India — the A4, A6, Q3, Q5, Q7, and Q8 — carries a 5-Star Euro NCAP rating, built on the hot-formed high-strength steel safety cell shared across the Volkswagen Group. Audi Pre Sense predictive safety technology and a minimum of 6 airbags are standard across the range.'
  },
  {
    category: 'Performance',
    question: 'What does "quattro" actually mean on an Audi?',
    answer: 'quattro is Audi’s permanent all-wheel-drive system, first introduced on the legendary 1980 Ur-Quattro rally car. A self-locking center differential continuously sends torque to whichever axle has the most grip, without any driver input, delivering confident traction on wet Indian monsoon roads and unpaved surfaces alike.'
  },
  {
    category: 'Comparison',
    question: 'How does the Audi Q5 compare to the BMW X3 and Mercedes GLC?',
    answer: 'All three share a 2.0L turbo-petrol engine architecture and 5-Star safety ratings. The Q5’s key differentiator is its standard quattro all-wheel drive across the range (versus optional AWD on some rival trims), plus the segment-defining Audi Virtual Cockpit digital instrument cluster and adaptive air suspension option.'
  },
  {
    category: 'Maintenance',
    question: 'What warranty and service packages does Audi India offer?',
    answer: 'Audi India provides a standard 2-year unlimited-kilometre warranty, extendable up to 5 years, alongside Audi Advantage service packages covering scheduled maintenance for up to 4 years. Audi’s Terminal 1 dealership network provides pickup-and-drop servicing in most major metros.'
  },
  {
    category: 'Performance',
    question: 'What is the difference between Audi’s regular TFSI models and RS models?',
    answer: 'Regular TFSI models (A4, A6, Q3, Q5, Q7, Q8) use turbocharged 4-cylinder or V6 engines tuned for everyday refinement and efficiency. RS models are hand-built by Audi Sport in Neckarsulm with more powerful, motorsport-derived twin-turbo engines (450 PS in the RS5, 600 PS in the RS Q8), quattro sport differentials, and track-tuned suspension for serious performance enthusiasts.'
  },
  {
    category: 'Performance',
    question: 'What is the real-world fuel efficiency of Audi’s TFSI engines in India?',
    answer: 'The 2.0 TFSI in the A4 and Q3 returns roughly 8.5–10 km/l in city traffic and 13–15.5 km/l on the highway. The quattro-equipped 2.0 TFSI in the A6 and Q5 returns slightly less due to the added AWD hardware, at 7–8.5 km/l city and 11.5–14 km/l highway.'
  },
  {
    category: 'Comparison',
    question: 'Is the Audi Q7 or Q8 the better choice for a growing family?',
    answer: 'The Q7 is the more practical choice for families needing genuine 3-row, 7-seat capability with adult-usable third-row space. The Q8 trades the third row for a sportier coupe-SUV roofline and sharper on-road dynamics, making it better suited to 4-5 person households who prioritize design and driving feel over maximum seating.'
  },
  {
    category: 'Safety',
    question: 'What predictive safety technology does Audi Pre Sense include?',
    answer: 'Audi Pre Sense uses radar and camera sensors to detect an imminent collision before it happens. In milliseconds, it can automatically pre-tension seatbelts, close windows and the sunroof, and in some models apply autonomous emergency braking, reducing the severity of an unavoidable impact.'
  }
];
