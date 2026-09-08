import { EngineSpec, Variant, CarColor, FAQItem } from '../types';

export interface SkodaModel {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  bodyType: 'Compact SUV' | 'Premium Sedan' | 'Midsize SUV' | 'Luxury 4x4 SUV' | 'Executive Sedan';
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
  }
];

export const SKODA_MODELS: SkodaModel[] = [
  {
    id: 'kylaq',
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
