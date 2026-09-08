import { EngineSpec, Variant, CarColor, FAQItem } from '../types';

export const ENGINE_SPECS: EngineSpec[] = [
  {
    id: '1.0-tsi',
    name: '1.0L TSI Turbo-Petrol',
    badge: '1.0 TSI (3-Cylinder)',
    displacement: '999 cc',
    fuelType: 'Petrol',
    cylinders: 3,
    power: '115 PS (85 kW) @ 5,000–5,500 RPM',
    powerHp: 115,
    torque: '178 Nm @ 1,750–4,500 RPM',
    torqueNm: 178,
    transmissions: ['6-Speed Manual', '6-Speed / 8-Speed Torque Converter AT'],
    acceleration: '0–100 km/h in 10.7s',
    topSpeed: '190 km/h',
    claimedMileage: '19.42 – 20.32 km/l',
    realWorldCity: '11 – 13.5 km/l',
    realWorldHighway: '16 – 18.5 km/l',
    keyHighlights: [
      'Extremely punchy low-end turbo boost in mid-revs',
      'Proven robust torque-converter automatic transmission option',
      'High fuel efficiency with Start-Stop recuperation',
      'Ideal balance for everyday city commuting and highway cruising'
    ],
    description: 'The 1.0L TSI delivers energetic response with 178 Nm torque starting early at 1,750 rpm. It is refined, lively, and offers exceptional fuel efficiency for daily drives.'
  },
  {
    id: '1.5-tsi',
    name: '1.5L TSI EVO Turbo-Petrol with ACT',
    badge: '1.5 TSI EVO DSG (4-Cylinder)',
    displacement: '1,498 cc',
    fuelType: 'Petrol',
    cylinders: 4,
    power: '150 PS (110 kW) @ 5,000–6,000 RPM',
    powerHp: 150,
    torque: '250 Nm @ 1,600–3,500 RPM',
    torqueNm: 250,
    transmissions: ['7-Speed Direct Shift Gearbox (DSG)'],
    acceleration: '0–100 km/h in 8.8s',
    topSpeed: '205 km/h',
    claimedMileage: '18.73 – 19.36 km/l',
    realWorldCity: '10 – 12.5 km/l',
    realWorldHighway: '17 – 20 km/l (with ACT 2-cylinder cruising)',
    keyHighlights: [
      'Active Cylinder Technology (ACT) switches to 2 cylinders seamlessly during coasting',
      'Lightning-fast dual-clutch 7-Speed DSG shifts with paddle shifters',
      'Enthusiast-grade 250 Nm peak torque from 1,600 RPM',
      'Rear disc brakes included on higher-spec 1.5L variants for superior braking'
    ],
    description: 'Engineered for driving purists. The 4-cylinder 1.5L TSI EVO packs 150 horsepower and 250 Nm of explosive pulling power, mated to a razor-sharp 7-speed DSG.'
  }
];

export const SLAVIA_DIMENSIONS = {
  length: '4,541 mm',
  width: '1,752 mm',
  height: '1,507 mm',
  wheelbase: '2,651 mm',
  groundClearance: '179 mm (Unladen)',
  bootSpace: '521 Litres (Expandable to 1,050 Litres)',
  fuelTank: '45 Litres',
  turningRadius: '5.3 m',
  tyreSize: '205/55 R16 (Alloys) / 195/65 R15 (Base)'
};

export const VARIANTS: Variant[] = [
  {
    id: 'classic',
    name: 'Classic / Classic+',
    tagline: 'Solid Czech engineering & comprehensive 5-star standard safety',
    priceRange: '₹10.69 – ₹12.49 Lakh',
    baseExShowroom: 1069000,
    engineOptions: ['1.0L TSI'],
    transmissions: ['6-Speed Manual'],
    keyFeatures: [
      '6 Airbags as standard',
      'Electronic Stability Control (ESC) & Multi-Collision Braking',
      'ISOFIX child seat anchors',
      '7-inch Touchscreen Infotainment System',
      'Rear Parking Sensors & Anti-Theft Alarm',
      'Central Locking with Remote Key',
      'Electric power steering with tilt & telescopic adjustment'
    ],
    exteriorHighlights: ['15-inch steel wheels with covers', 'Halogen headlamps with LED DRLs', 'Signature chrome radiator grille border'],
    interiorHighlights: ['Dual-tone black & beige theme', 'Fabric upholstery', 'Manual air conditioning'],
    badgeColor: 'bg-zinc-700 text-zinc-100'
  },
  {
    id: 'signature',
    name: 'Signature',
    tagline: 'The value-packed family sedan sweet spot with top convenience',
    priceRange: '₹13.50 – ₹15.50 Lakh',
    baseExShowroom: 1350000,
    engineOptions: ['1.0L TSI'],
    transmissions: ['6-Speed Manual', '6-Speed Automatic'],
    isPopular: true,
    keyFeatures: [
      '10.1-inch High-Res Touchscreen Infotainment',
      'Wireless Apple CarPlay & Android Auto',
      '16-inch Scimitar Alloy Wheels',
      'Rear View Camera with dynamic guidelines',
      'Climatronic Automatic Climate Control with Air Care filter',
      'Cruise Control & Paddle Shifters (AT only)',
      'Rear AC vents & dual rear Type-C fast charging ports',
      'Keyless Entry with Push Button Start (KESSY)'
    ],
    exteriorHighlights: ['16-inch dual-tone alloys', 'Shark fin antenna', 'Split LED tail lamps'],
    interiorHighlights: ['Leather-wrapped steering wheel', 'Cooled glovebox', 'Rear center armrest with cup holders'],
    badgeColor: 'bg-blue-600 text-white'
  },
  {
    id: 'sportline',
    name: 'Sportline',
    tagline: 'Aggressive darkened aesthetics with performance styling',
    priceRange: '₹14.05 – ₹16.75 Lakh',
    baseExShowroom: 1405000,
    engineOptions: ['1.0L TSI', '1.5L TSI EVO'],
    transmissions: ['6-Speed Manual', '6-Speed AT', '7-Speed DSG'],
    keyFeatures: [
      'Gloss Black front grille frame & black ORVM mirrors',
      '16-inch Blacked-out Alloy wheels',
      'Black boot lid aerodynamic spoiler',
      'Full LED headlamps with crystalline LED DRLs',
      'Electric Sunroof with anti-pinch technology',
      'Darkened interior headliner & sporty dual-tone cockpit',
      'Aluminum foot pedals'
    ],
    exteriorHighlights: ['Gloss black roof & mirror caps', 'Black window garnish', 'Sportline fender badges'],
    interiorHighlights: ['Sporty dark dashboard accents', 'Fabric + leatherette sport seats with red stitching', 'Ambient interior lighting'],
    badgeColor: 'bg-emerald-700 text-white'
  },
  {
    id: 'prestige',
    name: 'Prestige',
    tagline: 'Ultimate luxury with ventilated seats, virtual cockpit & sunroof',
    priceRange: '₹15.99 – ₹18.69 Lakh',
    baseExShowroom: 1599000,
    engineOptions: ['1.0L TSI', '1.5L TSI EVO'],
    transmissions: ['6-Speed MT', '6-Speed AT', '7-Speed DSG'],
    keyFeatures: [
      '10.25-inch Digital Virtual Cockpit instrument cluster',
      'Ventilated Front Seats (Cooling for driver & passenger)',
      'Electric Front Seat adjustments',
      'Rear seat massage function (outer rear seats)',
      'Electric Sunroof with one-touch operation',
      '8-Speaker High-Fidelity Skoda Sound System with Subwoofer',
      'Wireless Smartphone Charger',
      'Auto-dimming interior rearview mirror & Rain-sensing wipers',
      '360-Degree Area View Camera'
    ],
    exteriorHighlights: ['16-inch Ving dual-tone diamond-cut alloy wheels', 'Chrome window beltline', 'Full LED headlamps & C-shaped LED tail lamps'],
    interiorHighlights: ['Perforated leatherette upholstery in stone beige & black', 'Piano black dash trim with ambient contour lighting', 'Illuminated front footwell'],
    badgeColor: 'bg-amber-600 text-white'
  },
  {
    id: 'monte-carlo',
    name: 'Monte Carlo',
    tagline: 'Motorsport heritage flagship with bespoke black-and-red design',
    priceRange: '₹15.00 – ₹18.50 Lakh',
    baseExShowroom: 1500000,
    engineOptions: ['1.0L TSI', '1.5L TSI EVO'],
    transmissions: ['6-Speed MT', '6-Speed AT', '7-Speed DSG'],
    isFlagship: true,
    keyFeatures: [
      'Signature Monte Carlo Gloss-Black Grille & dark chrome Skoda badges',
      '16-inch Savio Gloss Black Alloy Wheels',
      'Exclusive Black and Red Monte Carlo dual-tone sports cockpit',
      '10.25-inch Digital Virtual Cockpit with custom Red motorsport skin',
      'AI Companion voice agent powered by Google Cloud Automotive AI',
      'Ventilated sporty bucket front seats with red contrast stitching & Monte Carlo embroidery',
      'All-around 360-Degree Camera with 3D obstacle view',
      'Darkened LED tail-lamps with dynamic sequential sweep indicators',
      'Rear Disc Brakes (on 1.5L TSI DSG)'
    ],
    exteriorHighlights: ['Full Black roof, black sharkfin & black boot spoiler', 'Monte Carlo chrome-red wing badges', 'Smoked crystalline LED headlamps'],
    interiorHighlights: ['Ruby Red metallic dashboard inlay with ambient red glow', 'Monte Carlo door scuff plates', 'Stainless steel racing sport pedals'],
    badgeColor: 'bg-red-700 text-white'
  }
];

export const SLAVIA_COLORS: CarColor[] = [
  {
    id: 'cherry-red',
    name: 'Cherry Red / Red & Black Dual-Tone',
    hex: '#9e1b26',
    roofHex: '#18181b',
    isDualTone: true,
    availableOn: ['Sportline', 'Prestige', 'Monte Carlo']
  },
  {
    id: 'shimla-green',
    name: 'Shimla Green',
    hex: '#1e3d30',
    availableOn: ['Signature', 'Prestige', 'Monte Carlo']
  },
  {
    id: 'steel-grey',
    name: 'Steel Grey',
    hex: '#64748b',
    availableOn: ['Sportline', 'Monte Carlo']
  },
  {
    id: 'lava-blue',
    name: 'Lava Blue Deep Metallic',
    hex: '#17365d',
    availableOn: ['Signature', 'Prestige']
  },
  {
    id: 'candy-white',
    name: 'Candy White',
    hex: '#f8fafc',
    roofHex: '#18181b',
    isDualTone: true,
    availableOn: ['Classic', 'Signature', 'Prestige', 'Monte Carlo']
  },
  {
    id: 'brilliant-silver',
    name: 'Brilliant Silver',
    hex: '#cbd5e1',
    availableOn: ['Classic', 'Signature', 'Prestige']
  },
  {
    id: 'carbon-steel',
    name: 'Carbon Steel Metallic',
    hex: '#334155',
    availableOn: ['Classic', 'Signature', 'Prestige']
  },
  {
    id: 'cappuccino-beige',
    name: 'Cappuccino Beige',
    hex: '#bcaaa4',
    availableOn: ['Signature', 'Prestige']
  }
];

export const SAFETY_HIGHLIGHTS = [
  {
    title: '5-Star Global NCAP Rating',
    score: '29.71 / 34 (Adult) & 42 / 49 (Child)',
    description: 'Tested under tougher Latin/Global NCAP protocols. Bodyshell integrity and footwell area rated as stable and capable of withstanding further loadings.',
    icon: 'ShieldCheck'
  },
  {
    title: '6 Airbags Standard Across All Trims',
    score: 'Front, Side & Curtain Airbags',
    description: 'Driver and co-driver front airbags, front side airbags, and full-length side curtain airbags protect all occupants as standard equipment on every single variant.',
    icon: 'ShieldAlert'
  },
  {
    title: 'MQB-A0-IN High-Strength Steel Cage',
    score: 'Up to 73.4% High-Tensile Steel',
    description: 'Hot-formed ultra-high-strength steel pillars and structural reinforcements distribute impact energy safely away from the passenger compartment.',
    icon: 'Lock'
  },
  {
    title: 'Active Safety & Stability Suite',
    score: 'Multi-Collision Brake (MKB) + XDS+',
    description: 'Standard Electronic Stability Control (ESC), Anti-Slip Regulation (ASR), Hill Hold Control, Brake Disc Wiping in the wet, and Electronic Differential Lock.',
    icon: 'Gauge'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    category: 'Safety',
    question: 'How safe is the Skoda Slavia?',
    answer: 'The Skoda Slavia is among the safest cars sold in India, scoring a perfect 5-Star rating for both Adult Occupant Protection (29.71/34 points) and Child Occupant Protection (42/49 points) in Global NCAP crash testing. All variants come with 6 airbags, ESC, ISOFIX mounts, and Multi-Collision Braking as standard.'
  },
  {
    category: 'Performance',
    question: 'Which engine should I choose: 1.0L TSI or 1.5L TSI EVO?',
    answer: 'Choose the 1.0L TSI (115 PS, 178 Nm) if your primary usage is daily city traffic with frequent highway trips; it is lively, budget-friendly, and offers 19-20 km/l claimed mileage. Choose the 1.5L TSI EVO (150 PS, 250 Nm) if you are an driving enthusiast who loves rapid 0-100 km/h acceleration (8.8s), seamless 7-speed DSG shifts, and cylinder deactivation technology.'
  },
  {
    category: 'Performance',
    question: 'Does the 179 mm ground clearance scrape on speed breakers?',
    answer: 'No. At 179 mm unladen ground clearance, the Slavia has one of the highest ground clearances in the sedan category (approaching compact SUV levels). It easily navigates heavy monsoon waterlogging, deep potholes, and high speed humps without underbody scraping even when fully loaded with 5 passengers and luggage.'
  },
  {
    category: 'Comparison',
    question: 'What is the difference between the Skoda Slavia and VW Virtus?',
    answer: 'Both cars share the MQB-A0-IN platform, engines, 521L boot space, and 5-star safety. The Slavia features Czech crystalline styling, classic Skoda butterfly grille, round HVAC vents, dual-spoke steering wheel, and distinctive luxury/Monte Carlo trims. The Virtus has German rectangular styling, full-width grille, and GT branding.'
  },
  {
    category: 'Maintenance',
    question: 'What are the service and warranty packages for Skoda Slavia in India?',
    answer: 'Skoda provides the "Peace of Mind" 4-Year / 100,000 km standard warranty (extendable up to 6 years / 150,000 km), 4 years of 24/7 Roadside Assistance, and prepaid SuperCare service maintenance packages starting around ₹24,499 for 4 years.'
  }
];
