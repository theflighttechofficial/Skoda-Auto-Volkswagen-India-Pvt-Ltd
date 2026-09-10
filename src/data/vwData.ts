import { EngineSpec, Variant, CarColor, FAQItem } from '../types';
import { SkodaModel } from './skodaData';

export type CarModel = SkodaModel;

export const ALL_VW_ENGINES: EngineSpec[] = [
  {
    id: '1.0-tsi-vw',
    name: '1.0L TSI Turbo-Petrol (EA211)',
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
    acceleration: '0–100 km/h in 10.4–10.8s',
    topSpeed: '190 km/h',
    claimedMileage: '19.4 – 20.2 km/l',
    realWorldCity: '11.5 – 13.5 km/l',
    realWorldHighway: '16.5 – 19.5 km/l',
    keyHighlights: [
      'Punchy turbo torque from 1,750 RPM for responsive overtaking',
      'Smooth Japanese AISIN 6-speed torque converter AT with paddle shifters',
      'Start-Stop recuperation for reduced carbon emissions in traffic',
      'Standard on Virtus Dynamic Line and Taigun Dynamic Line'
    ],
    description: 'The agile heart of Volkswagen’s India 2.0 lineup. Engineered for energetic city commuting and stress-free long-distance highway touring with high thermal efficiency.'
  },
  {
    id: '1.5-tsi-vw',
    name: '1.5L TSI EVO Turbo-Petrol with ACT (EA211 EVO)',
    badge: '1.5 TSI EVO (GT Performance)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,498 cc',
    cylinders: 4,
    power: '150 PS (110 kW) @ 5,000–6,000 RPM',
    powerHp: 150,
    torque: '250 Nm @ 1,600–3,500 RPM',
    torqueNm: 250,
    transmissions: ['6-Speed Manual', '7-Speed DSG (Dual-Clutch)'],
    acceleration: '0–100 km/h in 8.5–8.8s',
    topSpeed: '207 km/h',
    claimedMileage: '18.6 – 19.6 km/l',
    realWorldCity: '10.5 – 12.5 km/l',
    realWorldHighway: '17.5 – 21.0 km/l (with ACT active)',
    keyHighlights: [
      'Active Cylinder Technology (ACT) turns off cylinders 2 & 3 in 13-36 milliseconds',
      'Ultra-fast 7-speed DSG dual-clutch transmission with steering paddle shifters',
      '250 Nm sustained torque band for effortless, locomotive-like passing speed',
      'Exclusive to Virtus GT Line / GT Plus & Taigun GT Line / GT Plus Sport'
    ],
    description: 'Volkswagen’s celebrated enthusiast engine. Blends 150 PS of genuine German punch with smart cylinder deactivation that delivers unbelievable highway fuel efficiency.'
  },
  {
    id: '2.0-tsi-vw',
    name: '2.0L TSI Turbo-Petrol 4MOTION (EA888)',
    badge: '2.0 TSI (Executive 4MOTION AWD)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,984 cc',
    cylinders: 4,
    power: '190 PS (140 kW) @ 4,200–6,000 RPM',
    powerHp: 190,
    torque: '320 Nm @ 1,500–4,100 RPM',
    torqueNm: 320,
    transmissions: ['7-Speed DSG 4MOTION AWD'],
    acceleration: '0–100 km/h in 7.6s',
    topSpeed: '215 km/h',
    claimedMileage: '13.5 – 15.2 km/l',
    realWorldCity: '8.5 – 10.0 km/l',
    realWorldHighway: '13.5 – 15.5 km/l',
    keyHighlights: [
      '320 Nm peak torque surging as low as 1,500 RPM',
      '4MOTION Intelligent All-Wheel Drive with On-Road, Off-Road, and Snow profiles',
      'IQ.DRIVE dynamic assistance with seamless high-speed poise',
      'Powers the executive flagship Volkswagen Tiguan and upcoming Tayron'
    ],
    description: 'Pure Wolfsburg executive muscle. Smooth, whisper-quiet high-displacement turbocharging that delivers commanding highway dominance and all-weather traction.'
  },
  {
    id: '2.0-tsi-gti',
    name: '2.0L TSI EA888 EVO4 Hot-Hatch Powerhouse',
    badge: '2.0 TSI GTI (Track-Tuned)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,984 cc',
    cylinders: 4,
    power: '265 PS (195 kW) @ 5,300–6,500 RPM',
    powerHp: 265,
    torque: '370 Nm @ 1,600–4,300 RPM',
    torqueNm: 370,
    transmissions: ['7-Speed Wet-Clutch DSG with VAQ Differential'],
    acceleration: '0–100 km/h in 5.9s',
    topSpeed: '250 km/h (Electrically Governed)',
    claimedMileage: '14.1 km/l',
    realWorldCity: '8.0 – 9.5 km/l',
    realWorldHighway: '13.0 – 15.0 km/l',
    keyHighlights: [
      'VAQ electronically controlled mechanical front-axle limited-slip differential',
      'Launch Control with crackling sports exhaust and overrun acoustic pops',
      'Progressive steering with just 2.1 turns lock-to-lock',
      'Powers the legendary Golf GTI CBU icon'
    ],
    description: 'The apex of hot-hatch engineering. Developed at the Nürburgring Nordschleife, transmitting 265 horsepower to the tarmac with zero torque steer via the active VAQ diff.'
  },
  {
    id: '1.2-tsi-polo',
    name: '1.2L TSI Turbo-Petrol (Polo GT Legend)',
    badge: '1.2 TSI (4-Cylinder Heritage)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '1,197 cc',
    cylinders: 4,
    power: '105 PS (77 kW) @ 5,000 RPM',
    powerHp: 105,
    torque: '175 Nm @ 1,500–4,100 RPM',
    torqueNm: 175,
    transmissions: ['7-Speed DSG (DQ200)', '5-Speed Manual'],
    acceleration: '0–100 km/h in 9.7s',
    topSpeed: '190 km/h',
    claimedMileage: '17.2 km/l',
    realWorldCity: '11.0 – 13.0 km/l',
    realWorldHighway: '16.0 – 19.0 km/l',
    keyHighlights: [
      'Pioneered the turbocharged hot-hatch culture in India in 2013',
      'First mass-market car in India with a 7-speed dual-clutch transmission',
      'Stage 1 & Stage 2 ECU remap legend pushing 140+ horsepower',
      'Powered the cult-favorite Volkswagen Polo GT TSI'
    ],
    description: 'The engine that founded modern Indian car enthusiast culture. Known for its silky 4-cylinder smoothness, lightning gear shifts, and endless aftermarket tuning potential.'
  },
  {
    id: '2.0-tdi-vw',
    name: '2.0L TDI CR Turbo-Diesel (Heritage)',
    badge: '2.0 TDI (Torque King)',
    fuelType: 'Diesel',
    fuelPriceDefault: 90,
    displacement: '1,968 cc',
    cylinders: 4,
    power: '177 PS (130 kW) @ 4,000 RPM',
    powerHp: 177,
    torque: '350 Nm @ 1,750–2,500 RPM',
    torqueNm: 350,
    transmissions: ['6-Speed Manual', '6-Speed DSG (DQ250 Wet-Clutch)'],
    acceleration: '0–100 km/h in 8.2s',
    topSpeed: '220 km/h',
    claimedMileage: '20.5 km/l',
    realWorldCity: '13.5 – 15.0 km/l',
    realWorldHighway: '19.0 – 23.5 km/l',
    keyHighlights: [
      'Monumental 350 Nm of low-end torque for unyielding highway thrust',
      'Effortless 1,200 km highway range on a single tank of diesel',
      'Heavy-duty wet-clutch DSG capable of handling high thermal loads',
      'Powered the legendary Volkswagen Passat and Jetta sedans in India'
    ],
    description: 'The golden era of German diesel engineering in India. Revered for its mountain-moving low-end grunt, vault-like highway stability, and peerless 20+ km/l economy.'
  }
];

export const VW_MODELS: CarModel[] = [
  {
    id: 'virtus',
    name: 'Volkswagen Virtus',
    badge: 'The Benchmark Sedan',
    tagline: 'Striking German aesthetics, 5-Star NCAP safety, and thrilling GT TSI performance',
    bodyType: 'Premium Sedan',
    startingPrice: '₹10.89 Lakh',
    startingExShowroom: 1089000,
    priceRange: '₹10.89 – ₹19.41 Lakh',
    rating: '5-Star Bharat & Global NCAP (Highest Ever)',
    safetyStars: 5,
    engines: ['1.0L TSI (115 PS / 178 Nm)', '1.5L TSI EVO (150 PS / 250 Nm)'],
    keyHighlights: [
      'Highest safety score in Indian crash-test history: 5 Stars Adult & Child Protection',
      'Massive 521 Litres boot space with 60:40 rear split-folding versatility',
      '179 mm unladen ground clearance designed for Indian rough road conditions',
      'GT Plus Sport flagship with red brake calipers, black alloys, and dark chrome',
      '10.1-inch VW Play touchscreen with wireless Apple CarPlay & Android Auto',
      'Laser-welded continuous roof joint with zero rubber strips'
    ],
    dimensions: {
      length: '4,561 mm',
      width: '1,752 mm',
      height: '1,507 mm',
      wheelbase: '2,651 mm',
      groundClearance: '179 mm',
      bootSpace: '521 Litres (Expandable to 1,050L)',
      fuelTank: '45 Litres'
    },
    variants: [
      {
        id: 'virtus-comfortline',
        name: 'Virtus Comfortline 1.0 TSI',
        tagline: 'Essential German engineering with 5-Star NCAP structural safety',
        priceRange: '₹10.89 – ₹11.59 Lakh',
        baseExShowroom: 1089000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          'Electronic Stability Control (ESC) standard',
          '6 Airbags standard across the range',
          'LED headlamps with integrated LED DRLs',
          'Electronic differential lock (EDL) and Multi-collision brakes',
          'Dual front and curtain airbags with ISOFIX child mounts'
        ],
        exteriorHighlights: ['16-inch steel wheels with full covers', 'LED taillights', 'Chrome strip on grille'],
        interiorHighlights: ['Fabric upholstery', '7-inch touchscreen infotainment', 'Electric power steering'],
        badgeColor: 'bg-zinc-700 text-zinc-200'
      },
      {
        id: 'virtus-highline',
        name: 'Virtus Highline 1.0 TSI',
        tagline: 'Balanced luxury, automatic transmission option, and premium styling',
        priceRange: '₹13.88 – ₹15.34 Lakh',
        baseExShowroom: 1388000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Torque Converter AT'],
        keyFeatures: [
          '10.1-inch VW Play infotainment with wireless App-Connect',
          '16-inch Scimitar alloy wheels',
          'Rear view camera with static guidance lines',
          'Wireless smartphone charging pad',
          'KESSY Keyless access and engine push start'
        ],
        exteriorHighlights: ['16-inch alloy wheels', 'Chrome window beltline', 'Shark-fin antenna'],
        interiorHighlights: ['Dual-tone black and beige cabin', 'Leatherette-wrapped steering', 'Rear AC vents'],
        badgeColor: 'bg-blue-800 text-blue-100',
        isPopular: true
      },
      {
        id: 'virtus-topline',
        name: 'Virtus Topline 1.0 TSI',
        tagline: 'First-class comfort with ventilated seats and digital cockpit',
        priceRange: '₹15.28 – ₹16.88 Lakh',
        baseExShowroom: 1528000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Torque Converter AT'],
        keyFeatures: [
          'Ventilated front leatherette seats (Driver & Passenger)',
          'Electric single-pane sunroof with pinch protection',
          '8.0-inch customizable Digital Cockpit instrument cluster',
          'Auto-dimming interior rear view mirror',
          'Rain-sensing wipers and auto-headlamps'
        ],
        exteriorHighlights: ['16-inch Razor precision-cut diamond alloy wheels', 'Full signature LED headlights with eyebrow DRL'],
        interiorHighlights: ['Perforated leatherette seats', 'Ambient lighting', 'Cooled glove compartment'],
        badgeColor: 'bg-sky-800 text-sky-100'
      },
      {
        id: 'virtus-gt-line',
        name: 'Virtus GT Line 1.0 TSI',
        tagline: 'Dark aesthetic and GT badging with everyday 1.0 TSI efficiency',
        priceRange: '₹14.07 – ₹15.18 Lakh',
        baseExShowroom: 1407000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Torque Converter AT'],
        keyFeatures: [
          'Gloss-black rear spoiler and roof finish',
          '16-inch Black alloy wheels',
          'Red ambient cabin lighting with black headliner',
          'Aluminium sports pedals',
          'GT badge on front grille and fender'
        ],
        exteriorHighlights: ['Gloss black ORVMs', 'Darkened LED headlamps', 'Gloss black boot lip spoiler'],
        interiorHighlights: ['All-black sporty interior', 'Contrast red stitching', 'Laser red ambient lighting'],
        badgeColor: 'bg-red-950 border border-red-700 text-red-300'
      },
      {
        id: 'virtus-gt-plus',
        name: 'Virtus GT Plus 1.5 TSI DSG',
        tagline: 'The 150 PS German rocket with Active Cylinder Technology & 7-Speed DSG',
        priceRange: '₹17.88 – ₹19.41 Lakh',
        baseExShowroom: 1788000,
        engineOptions: ['1.5L TSI EVO'],
        transmissions: ['6-Speed Manual', '7-Speed DSG (Dual-Clutch)'],
        keyFeatures: [
          '150 PS / 250 Nm EA211 EVO turbocharged powertrain',
          '7-Speed DSG with steering paddle shifters & launch control',
          'Active Cylinder Technology (ACT) cylinder deactivation',
          'Red front brake calipers and red GT badges',
          'Sport twin chrome exhaust tip garnish'
        ],
        exteriorHighlights: ['Dual-tone roof finish', 'Blacked-out trunk spoiler', 'Red brake calipers visible through alloys'],
        interiorHighlights: ['Carbon-textured dashboard trim', 'Sport seats with GT embossing', 'Aluminium sport pedal caps'],
        badgeColor: 'bg-red-700 text-white font-bold',
        isFlagship: true
      },
      {
        id: 'virtus-gt-plus-sport',
        name: 'Virtus GT Plus Sport (Black Edition)',
        tagline: 'Sinister blackout edition with darkened chrome and red racing accents',
        priceRange: '₹18.15 – ₹19.41 Lakh',
        baseExShowroom: 1815000,
        engineOptions: ['1.5L TSI EVO'],
        transmissions: ['6-Speed Manual', '7-Speed DSG'],
        keyFeatures: [
          'Darkened chrome grille and lower air dam inserts',
          'Gloss-black 16-inch alloy wheels with red brake calipers',
          'Gloss-black boot lid spoiler and dual-tone roof',
          'All-black cabin with red contrast stitching on steering & seats',
          'Red ambient cabin lighting and black roof liner'
        ],
        exteriorHighlights: ['Blacked-out badges', 'Smoked LED taillight clusters', 'Blacked-out diffuser'],
        interiorHighlights: ['Dark leatherette with red piping', 'GT steering with red badge insert', 'Black pillar trims'],
        badgeColor: 'bg-zinc-950 border border-red-600 text-red-400 font-black'
      }
    ],
    colors: [
      { id: 'wild-cherry-red', name: 'Wild Cherry Red', hex: '#8b0000', availableOn: ['virtus-comfortline', 'virtus-highline', 'virtus-topline', 'virtus-gt-plus'] },
      { id: 'rising-blue', name: 'Rising Blue Metallic', hex: '#1e3a8a', availableOn: ['virtus-highline', 'virtus-topline', 'virtus-gt-line', 'virtus-gt-plus'] },
      { id: 'curcuma-yellow', name: 'Curcuma Yellow', hex: '#d97706', availableOn: ['virtus-highline', 'virtus-topline', 'virtus-gt-plus'] },
      { id: 'carbon-steel-grey', name: 'Carbon Steel Grey', hex: '#4b5563', availableOn: ['virtus-comfortline', 'virtus-highline', 'virtus-topline', 'virtus-gt-plus', 'virtus-gt-plus-sport'] },
      { id: 'deep-black-pearl', name: 'Deep Black Pearl', hex: '#111827', roofHex: '#000000', isDualTone: true, availableOn: ['virtus-topline', 'virtus-gt-line', 'virtus-gt-plus', 'virtus-gt-plus-sport'] },
      { id: 'reflex-silver', name: 'Reflex Silver', hex: '#cbd5e1', availableOn: ['virtus-comfortline', 'virtus-highline', 'virtus-topline'] },
      { id: 'candy-white', name: 'Candy White', hex: '#f8fafc', availableOn: ['virtus-comfortline', 'virtus-highline', 'virtus-topline', 'virtus-gt-plus'] },
      { id: 'lava-blue', name: 'Lava Blue Metallic', hex: '#0f4c81', availableOn: ['virtus-topline', 'virtus-gt-plus'] }
    ]
  },
  {
    id: 'taigun',
    name: 'Volkswagen Taigun',
    badge: 'Dynamic German SUV',
    tagline: 'Muscular presence, segment-longest wheelbase, and unshakeable 5-Star safety',
    bodyType: 'Midsize SUV',
    startingPrice: '₹10.89 Lakh',
    startingExShowroom: 1089000,
    priceRange: '₹10.89 – ₹19.99 Lakh',
    rating: '5-Star Bharat & Global NCAP Certified',
    safetyStars: 5,
    engines: ['1.0L TSI (115 PS / 178 Nm)', '1.5L TSI EVO (150 PS / 250 Nm)'],
    keyHighlights: [
      'Segment-longest 2,651 mm wheelbase for unmatched rear-seat kneeroom',
      'Flawless 5-Star Adult and Child safety ratings in both Global NCAP and Bharat NCAP',
      'Signature Infinity LED tail-lamp bar spanning the entire rear tailgate',
      '188 mm ground clearance with rugged off-road approach angles',
      'Electric sunroof with anti-pinch and voice control assistance',
      'GT Plus Sport flagship with red brake calipers and black roof rails'
    ],
    dimensions: {
      length: '4,221 mm',
      width: '1,760 mm',
      height: '1,612 mm',
      wheelbase: '2,651 mm',
      groundClearance: '188 mm',
      bootSpace: '385 Litres (Expandable to 1,405L)',
      fuelTank: '50 Litres'
    },
    variants: [
      {
        id: 'taigun-comfortline',
        name: 'Taigun Comfortline 1.0 TSI',
        tagline: 'The pure German SUV entry with standard ESC and 6 Airbags',
        priceRange: '₹10.89 – ₹11.99 Lakh',
        baseExShowroom: 1089000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          '6 Airbags as standard safety equipment',
          'Electronic Stability Control (ESC) with Brake Assist',
          'Rear parking sensors with dynamic display',
          'Halogen headlamps with integrated LED DRLs',
          'Robust skid plates and underbody protection'
        ],
        exteriorHighlights: ['16-inch steel wheels', 'Full body protective cladding', 'Rear skid plate'],
        interiorHighlights: ['Dual-tone cabin', '7-inch central display', 'Foldable rear seats'],
        badgeColor: 'bg-zinc-700 text-zinc-200'
      },
      {
        id: 'taigun-highline',
        name: 'Taigun Highline 1.0 TSI',
        tagline: 'Connected technology with 10.1-inch VW Play and alloy wheels',
        priceRange: '₹13.88 – ₹15.49 Lakh',
        baseExShowroom: 1388000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Torque Converter AT'],
        keyFeatures: [
          '10.1-inch VW Play touchscreen with wireless Apple CarPlay/Android Auto',
          '16-inch Belmonte alloy wheels',
          'Rear camera with park distance control',
          'Wireless induction phone charging',
          'Automatic Climatronic AC with touch controls'
        ],
        exteriorHighlights: ['Silver roof rails', 'Chrome grille accents', 'Front fog lamps with cornering function'],
        interiorHighlights: ['Leatherette-wrapped steering', 'Rear AC vents with dual USB-C ports', 'Cruise control'],
        badgeColor: 'bg-blue-800 text-blue-100',
        isPopular: true
      },
      {
        id: 'taigun-topline',
        name: 'Taigun Topline 1.0 TSI',
        tagline: 'Top-tier luxury featuring ventilated seats, sunroof, and digital cockpit',
        priceRange: '₹15.90 – ₹17.49 Lakh',
        baseExShowroom: 1590000,
        engineOptions: ['1.0L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Torque Converter AT'],
        keyFeatures: [
          'Ventilated front bucket seats',
          'Electric sunroof with pinch protection',
          '8-inch Digital Cockpit configurable instrument display',
          'Auto-dimming frameless interior mirror',
          'Sound package with 6 speakers and high-performance amplifier'
        ],
        exteriorHighlights: ['17-inch Manila precision alloy wheels', 'Full LED headlamps with 3D daytime running lights'],
        interiorHighlights: ['Wild Cherry / Silver dashboard inserts', 'White ambient cabin illumination', 'Leatherette upholstery'],
        badgeColor: 'bg-sky-800 text-sky-100'
      },
      {
        id: 'taigun-gt-plus',
        name: 'Taigun GT Plus 1.5 TSI DSG',
        tagline: 'The 150 PS SUV powerhouse with 7-Speed DSG and ACT cylinder deactivation',
        priceRange: '₹18.19 – ₹19.99 Lakh',
        baseExShowroom: 1819000,
        engineOptions: ['1.5L TSI EVO'],
        transmissions: ['6-Speed Manual', '7-Speed DSG (Dual-Clutch)'],
        keyFeatures: [
          '150 PS / 250 Nm 1.5L TSI EVO with ACT cylinder deactivation',
          '7-Speed DSG with paddle shifters',
          'Red painted front brake calipers',
          'Dual-tone exterior with contrasting black roof',
          'Laser-welded roof and high-tensile crash cage'
        ],
        exteriorHighlights: ['17-inch Cassino dark alloys', 'Red GT badges on front grille and tailgate', 'Black ORVMs'],
        interiorHighlights: ['Carbon look dash decor', 'Red ambient lighting', 'Sports aluminium foot pedals'],
        badgeColor: 'bg-red-700 text-white font-bold',
        isFlagship: true
      },
      {
        id: 'taigun-gt-plus-sport',
        name: 'Taigun GT Plus Sport (Black Edition)',
        tagline: 'Aggressive blackout styling, dark chrome grille, and red racing accents',
        priceRange: '₹18.54 – ₹19.99 Lakh',
        baseExShowroom: 1854000,
        engineOptions: ['1.5L TSI EVO'],
        transmissions: ['6-Speed Manual', '7-Speed DSG'],
        keyFeatures: [
          'Dark chrome front grille and lower air dam garnish',
          'Gloss black 17-inch alloy wheels and red brake calipers',
          'Smoked LED headlamps and darkened infinity tail-lamp bar',
          'Black roof rails, black ORVMs, and dual-tone roof',
          'All-black cabin with red stitching and red embroidered GT sport seats'
        ],
        exteriorHighlights: ['Gloss black diffuser', 'Darkened badging', 'Smoked LED lightbar'],
        interiorHighlights: ['All-black dashboard', 'Red contrast stitching', 'Black headliner and A-pillars'],
        badgeColor: 'bg-zinc-950 border border-red-600 text-red-400 font-black'
      }
    ],
    colors: [
      { id: 'curcuma-yellow-t', name: 'Curcuma Yellow', hex: '#d97706', availableOn: ['taigun-highline', 'taigun-topline', 'taigun-gt-plus'] },
      { id: 'wild-cherry-red-t', name: 'Wild Cherry Red', hex: '#8b0000', availableOn: ['taigun-comfortline', 'taigun-highline', 'taigun-topline', 'taigun-gt-plus'] },
      { id: 'rising-blue-t', name: 'Rising Blue Metallic', hex: '#1e3a8a', availableOn: ['taigun-highline', 'taigun-topline', 'taigun-gt-plus'] },
      { id: 'carbon-steel-grey-t', name: 'Carbon Steel Grey', hex: '#4b5563', availableOn: ['taigun-comfortline', 'taigun-highline', 'taigun-topline', 'taigun-gt-plus', 'taigun-gt-plus-sport'] },
      { id: 'deep-black-pearl-t', name: 'Deep Black Pearl', hex: '#111827', roofHex: '#000000', isDualTone: true, availableOn: ['taigun-topline', 'taigun-gt-plus', 'taigun-gt-plus-sport'] },
      { id: 'reflex-silver-t', name: 'Reflex Silver', hex: '#cbd5e1', availableOn: ['taigun-comfortline', 'taigun-highline', 'taigun-topline'] },
      { id: 'candy-white-t', name: 'Candy White', hex: '#f8fafc', availableOn: ['taigun-comfortline', 'taigun-highline', 'taigun-topline', 'taigun-gt-plus'] }
    ]
  },
  {
    id: 'tiguan',
    name: 'Volkswagen Tiguan',
    badge: 'Executive 4MOTION SUV',
    tagline: 'Engineered for absolute capability with 190 PS TSI, 4MOTION AWD, and IQ.LIGHT',
    bodyType: 'Luxury 4x4 SUV',
    startingPrice: '₹35.17 Lakh',
    startingExShowroom: 3517000,
    priceRange: '₹35.17 – ₹38.50 Lakh',
    rating: '5-Star Euro NCAP Luxury SUV',
    safetyStars: 5,
    engines: ['2.0L TSI 4MOTION (190 PS / 320 Nm)'],
    keyHighlights: [
      'Intelligent 4MOTION All-Wheel Drive with Drive Mode Selector (On-road, Off-road, Snow)',
      '190 PS / 320 Nm 2.0L TSI turbo-petrol with 7-speed wet-clutch DSG',
      'IQ.LIGHT Matrix LED headlamps with dynamic turn signals & adaptive beam',
      'Panoramic sunroof with ambient lighting integration',
      '3-Zone Climatronic AC with Air Care allergen filter',
      '615 Litres cargo volume (expandable to 1,655 Litres with 40:20:40 folding)'
    ],
    dimensions: {
      length: '4,509 mm',
      width: '1,839 mm',
      height: '1,665 mm',
      wheelbase: '2,679 mm',
      groundClearance: '200 mm',
      bootSpace: '615 Litres (Expandable to 1,655L)',
      fuelTank: '60 Litres'
    },
    variants: [
      {
        id: 'tiguan-elegance',
        name: 'Tiguan Elegance 2.0 TSI 4MOTION',
        tagline: 'Flagship European luxury SUV with all-weather all-wheel-drive assurance',
        priceRange: '₹35.17 – ₹36.90 Lakh',
        baseExShowroom: 3517000,
        engineOptions: ['2.0L TSI 4MOTION'],
        transmissions: ['7-Speed DSG 4MOTION AWD'],
        keyFeatures: [
          '4MOTION All-Wheel Drive with electronic differential lock (XDS)',
          'IQ.LIGHT Matrix LED headlights with 24 individual LED modules per headlight',
          'Vienna genuine leather upholstery in Titan Black',
          '8-way power adjustable driver seat with 3-memory profiles',
          'Gesture-controlled Easy Open & Close powered tailgate',
          'Park Assist with ultrasonic surround sensors and active braking'
        ],
        exteriorHighlights: ['18-inch Frankfurt alloy wheels', 'Chrome roof rails', 'Illuminated front scuff plates'],
        interiorHighlights: ['30-color customizable ambient illumination', '10.25-inch Digital Cockpit Pro', 'Illuminated glovebox'],
        badgeColor: 'bg-blue-900 text-blue-100 font-bold'
      },
      {
        id: 'tiguan-exclusive',
        name: 'Tiguan Exclusive Edition',
        tagline: 'Distinguished styling accents, black rear spoiler, and load sill protection',
        priceRange: '₹36.50 – ₹38.50 Lakh',
        baseExShowroom: 3650000,
        engineOptions: ['2.0L TSI 4MOTION'],
        transmissions: ['7-Speed DSG 4MOTION AWD'],
        keyFeatures: [
          'Exclusive Edition badges on B-pillar and front dash',
          '18-inch Sebring Sterling Silver alloy wheels',
          'Dynamic hubcaps with upright VW roundel at speed',
          'Rear load sill protector in stainless steel',
          'Sporty rear spoiler lip'
        ],
        exteriorHighlights: ['18-inch Sebring alloys', 'Exclusive badging', 'Stainless steel sill guards'],
        interiorHighlights: ['Vienna leather with contrast piping', 'Aluminium sport pedal caps', 'Dark wood inserts'],
        badgeColor: 'bg-zinc-900 border border-blue-500 text-blue-300 font-bold',
        isFlagship: true
      }
    ],
    colors: [
      { id: 'nightshade-blue', name: 'Nightshade Blue Metallic', hex: '#1b263b', availableOn: ['tiguan-elegance', 'tiguan-exclusive'] },
      { id: 'oryx-white', name: 'Oryx White Pearl Effect', hex: '#f1f5f9', availableOn: ['tiguan-elegance', 'tiguan-exclusive'] },
      { id: 'deep-black-tiguan', name: 'Deep Black Pearl', hex: '#0f172a', availableOn: ['tiguan-elegance', 'tiguan-exclusive'] },
      { id: 'dolphin-grey', name: 'Dolphin Grey Metallic', hex: '#475569', availableOn: ['tiguan-elegance', 'tiguan-exclusive'] },
      { id: 'reflex-silver-tiguan', name: 'Reflex Silver', hex: '#cbd5e1', availableOn: ['tiguan-elegance'] },
      { id: 'kings-red', name: 'Kings Red Metallic', hex: '#991b1b', availableOn: ['tiguan-elegance', 'tiguan-exclusive'] }
    ]
  },
  {
    id: 'golf-gti',
    name: 'Volkswagen Golf GTI',
    badge: 'The Global Hot-Hatch Icon',
    tagline: '265 PS EA888 EVO4 engine, VAQ limited-slip differential, and Nürburgring heritage',
    bodyType: 'Executive Sedan',
    startingPrice: '₹45.00 Lakh (Est. CBU)',
    startingExShowroom: 4500000,
    priceRange: '₹45.00 – ₹49.90 Lakh',
    rating: '5-Star Euro NCAP Track Legend',
    safetyStars: 5,
    engines: ['2.0L TSI GTI (265 PS / 370 Nm)'],
    keyHighlights: [
      'The original hot hatch: 265 PS / 370 Nm EA888 EVO4 turbo engine',
      '0–100 km/h in a blistering 5.9 seconds with Launch Control',
      'VAQ electronically controlled mechanical front-axle limited-slip differential',
      'Iconic "Clark" tartan sport bucket seats with integrated headrests',
      'Twin chrome exhaust tailpipes with aggressive sports overrun pops',
      'DCC (Dynamic Chassis Control) with 15 adjustable suspension damping levels'
    ],
    dimensions: {
      length: '4,287 mm',
      width: '1,789 mm',
      height: '1,463 mm',
      wheelbase: '2,627 mm',
      groundClearance: '138 mm',
      bootSpace: '374 Litres (Expandable to 1,230L)',
      fuelTank: '50 Litres'
    },
    variants: [
      {
        id: 'golf-gti-performance',
        name: 'Golf GTI Performance 2.0 TSI',
        tagline: 'Track-ready hot hatch with VAQ diff, launch control, and progressive steering',
        priceRange: '₹45.00 – ₹47.50 Lakh',
        baseExShowroom: 4500000,
        engineOptions: ['2.0L TSI GTI'],
        transmissions: ['7-Speed Wet-Clutch DSG (DQ381)'],
        keyFeatures: [
          '265 PS / 370 Nm high-output EA888 EVO4 powertrain',
          'VAQ mechanical limited-slip differential eliminating torque steer',
          'XDS+ electronic differential lock and progressive steering',
          'Honeycomb LED front fog lights integrated into front bumper',
          '18-inch Richmond diamond-cut alloy wheels with red brake calipers',
          '10.25-inch Digital Cockpit Pro with GTI-exclusive rev counter display'
        ],
        exteriorHighlights: ['GTI honeycomb grille with red accent line', 'Twin chrome exhaust pipes', 'Roof spoiler'],
        interiorHighlights: ['Iconic Clark tartan bucket seats', 'GTI sport steering with touch haptic buttons', 'Black headlining'],
        badgeColor: 'bg-red-700 text-white font-black',
        isPopular: true,
        isFlagship: true
      },
      {
        id: 'golf-gti-clubsport',
        name: 'Golf GTI Clubsport Track Edition',
        tagline: 'Nürburgring Nordschleife driving mode, aero diffuser, and 300 PS tune',
        priceRange: '₹48.00 – ₹49.90 Lakh',
        baseExShowroom: 4800000,
        engineOptions: ['2.0L TSI GTI'],
        transmissions: ['7-Speed Wet-Clutch DSG (DQ381)'],
        keyFeatures: [
          'Track-tuned 300 PS ECU calibration and Akrapovič titanium exhaust option',
          'Special Nürburgring profile calibrated for rough kerbs and undulations',
          'Two-piece high-downforce rear roof wing',
          '19-inch Adelaide gloss-black forged alloys',
          'Cross-drilled lightweight brake rotors with 2-piston red calipers'
        ],
        exteriorHighlights: ['Two-piece roof spoiler', 'Akrapovic exhaust outlets', 'Widened front splitter'],
        interiorHighlights: ['Alcantara-wrapped steering wheel with 12 o\'clock marker', 'Carbon-fiber seat backings', 'Red seatbelts'],
        badgeColor: 'bg-zinc-950 border-2 border-red-600 text-red-400 font-black'
      }
    ],
    colors: [
      { id: 'kings-red-gti', name: 'Kings Red Metallic', hex: '#991b1b', availableOn: ['golf-gti-performance', 'golf-gti-clubsport'] },
      { id: 'moonstone-grey', name: 'Moonstone Grey', hex: '#64748b', availableOn: ['golf-gti-performance', 'golf-gti-clubsport'] },
      { id: 'deep-black-gti', name: 'Deep Black Pearl', hex: '#0a0a0a', availableOn: ['golf-gti-performance', 'golf-gti-clubsport'] },
      { id: 'pure-white-gti', name: 'Pure White', hex: '#f8fafc', availableOn: ['golf-gti-performance', 'golf-gti-clubsport'] },
      { id: 'atlantic-blue-gti', name: 'Atlantic Blue Metallic', hex: '#1e40af', availableOn: ['golf-gti-performance'] }
    ]
  },
  {
    id: 'polo-legend',
    name: 'Volkswagen Polo & GT TSI',
    badge: 'Enthusiast Hall of Fame',
    tagline: 'The timeless hot-hatch that pioneered turbocharged performance and tuning in India',
    bodyType: 'Compact SUV',
    startingPrice: 'Hall of Fame Legend (2010–2022)',
    startingExShowroom: 650000,
    priceRange: '₹6.50 – ₹10.25 Lakh (Classic)',
    rating: '4-Star Global NCAP Pioneer',
    safetyStars: 4,
    engines: ['1.2L TSI (105 PS / 175 Nm)', '1.0L TSI (110 PS / 175 Nm)'],
    keyHighlights: [
      'Pioneered the hot-hatch tuning revolution across India with 300,000+ passionate owners',
      'Laser-welded galvanized steel chassis with the famous "German Thud" door solidity',
      'First mass-market car in India with 7-speed DSG dual-clutch transmission',
      'Endless tuning potential: Stage 1/2 ECU maps pushing up to 150+ horsepower',
      'Timeless clean German design that looks stunning even a decade later'
    ],
    dimensions: {
      length: '3,971 mm',
      width: '1,682 mm',
      height: '1,469 mm',
      wheelbase: '2,469 mm',
      groundClearance: '168 mm',
      bootSpace: '280 Litres',
      fuelTank: '45 Litres'
    },
    variants: [
      {
        id: 'polo-gt-tsi-legend',
        name: 'Polo GT TSI Legend Edition',
        tagline: 'The grand farewell edition of India’s most revered hot hatch',
        priceRange: '₹10.25 Lakh (Commemorative)',
        baseExShowroom: 1025000,
        engineOptions: ['1.0L TSI', '1.2L TSI'],
        transmissions: ['6-Speed Manual', '6-Speed Torque Converter / 7-Speed DSG'],
        keyFeatures: [
          'TSI direct-injection turbocharger producing 110 PS / 175 Nm',
          'Legend decals on body sides and boot lid',
          '16-inch Portago grey alloy wheels',
          'Black roof wrap and gloss black rear spoiler',
          'Sport flat-bottom leather-wrapped steering with cruise control'
        ],
        exteriorHighlights: ['Honeycomb grille with GT badge', 'Blacked-out roof and ORVMs', '16-inch Portago alloys'],
        interiorHighlights: ['Sport checkered fabric seats', 'Climatronic automatic AC', 'Touchscreen infotainment'],
        badgeColor: 'bg-amber-600 text-white font-bold',
        isPopular: true
      }
    ],
    colors: [
      { id: 'flash-red-polo', name: 'Flash Red', hex: '#b91c1c', availableOn: ['polo-gt-tsi-legend'] },
      { id: 'sunset-red-polo', name: 'Sunset Red', hex: '#ea580c', availableOn: ['polo-gt-tsi-legend'] },
      { id: 'lapiz-blue-polo', name: 'Lapiz Blue', hex: '#1d4ed8', availableOn: ['polo-gt-tsi-legend'] },
      { id: 'carbon-steel-polo', name: 'Carbon Steel Grey', hex: '#475569', availableOn: ['polo-gt-tsi-legend'] },
      { id: 'candy-white-polo', name: 'Candy White', hex: '#ffffff', availableOn: ['polo-gt-tsi-legend'] }
    ]
  },
  {
    id: 'tayron',
    name: 'Volkswagen Tayron',
    badge: 'Upcoming 7-Seater Luxury SUV',
    tagline: 'Next-generation MQB Evo architecture, spacious 3-row comfort, and 4MOTION AWD',
    bodyType: 'Luxury 4x4 SUV',
    startingPrice: '₹42.00 Lakh (Upcoming 2025)',
    startingExShowroom: 4200000,
    priceRange: '₹42.00 – ₹47.00 Lakh',
    rating: '5-Star Euro NCAP Architecture',
    safetyStars: 5,
    engines: ['2.0L TSI 4MOTION (204 PS / 320 Nm)'],
    keyHighlights: [
      'Built on Volkswagen’s cutting-edge MQB Evo platform with longer 2,791 mm wheelbase',
      'True 3-row 7-seater luxury packaging with slide & recline second row',
      'Illuminated Volkswagen roundel logos front and rear with continuous LED lightbar',
      'Massive 15-inch free-floating infotainment screen with IDA voice assistant',
      'Adaptive DCC Pro suspension with dual-valve dampers for pillowy ride comfort',
      '885 Litres of luggage space in 5-seater configuration'
    ],
    dimensions: {
      length: '4,770 mm',
      width: '1,852 mm',
      height: '1,660 mm',
      wheelbase: '2,791 mm',
      groundClearance: '200 mm',
      bootSpace: '885 Litres (Expandable to 2,090L)',
      fuelTank: '60 Litres'
    },
    variants: [
      {
        id: 'tayron-elegance',
        name: 'Tayron Elegance 4MOTION 7-Seater',
        tagline: '3-row executive flagship for large families who appreciate European precision',
        priceRange: '₹42.00 – ₹45.00 Lakh',
        baseExShowroom: 4200000,
        engineOptions: ['2.0L TSI 4MOTION'],
        transmissions: ['7-Speed DSG 4MOTION AWD'],
        keyFeatures: [
          '204 PS EA888 EVO4 engine with 4MOTION all-wheel-drive',
          '3-zone Climatronic with dedicated 3rd row air ventilation',
          '15-inch central OLED display with wireless smartphone projection',
          'Level 2 ADAS suite including Travel Assist and Predictive ACC',
          'Panoramic sunroof spanning across 1st and 2nd rows'
        ],
        exteriorHighlights: ['19-inch Catania alloys', 'Illuminated front and rear VW logos', 'Roof rails in anodised silver'],
        interiorHighlights: ['Perforated massage seats', 'Smart multi-function driving knob with OLED display', 'Harman Kardon 700W audio'],
        badgeColor: 'bg-blue-900 text-white font-bold',
        isFlagship: true
      }
    ],
    colors: [
      { id: 'nightshade-blue-tayron', name: 'Nightshade Blue', hex: '#1b263b', availableOn: ['tayron-elegance'] },
      { id: 'oryx-white-tayron', name: 'Oryx White Pearl', hex: '#f8fafc', availableOn: ['tayron-elegance'] },
      { id: 'deep-black-tayron', name: 'Deep Black Pearl', hex: '#0f172a', availableOn: ['tayron-elegance'] },
      { id: 'cipresso-green-tayron', name: 'Cipresso Green Metallic', hex: '#14532d', availableOn: ['tayron-elegance'] }
    ]
  },
  {
    id: 'jetta',
    name: 'Volkswagen Jetta',
    badge: 'Enthusiast Hall of Fame Sedan',
    tagline: 'The German CKD sedan that brought TSI turbo-petrol and TDI diesel refinement to India (2008–2013)',
    bodyType: 'Compact Sedan',
    startingPrice: 'Hall of Fame Legend (2008–2013)',
    startingExShowroom: 1390000,
    priceRange: '₹13.90 – ₹19.66 Lakh (Final India Price List)',
    rating: '5-Star Euro NCAP (Global Reference, 2011)',
    safetyStars: 5,
    engines: ['1.4L TSI Twincharger Petrol (122 PS / 160 Nm)', '2.0L TDI CR Diesel (140 PS / 320 Nm)'],
    keyHighlights: [
      'CKD-assembled at Volkswagen’s Chakan (Pune) plant from 2008 to 2013',
      '1.4L TSI Twincharger combined supercharging and turbocharging for lag-free response',
      '2.0L TDI diesel variant was the enthusiast favourite for its highway torque and efficiency',
      '510-litre boot space — among the largest in the compact executive sedan class',
      'Achieved a 5-Star Euro NCAP rating in global-spec testing, a rarity for its era',
      'Predecessor to the Virtus in Volkswagen India’s sedan lineup philosophy'
    ],
    dimensions: {
      length: '4,659 mm',
      width: '1,778 mm',
      height: '1,453 mm',
      wheelbase: '2,651 mm',
      groundClearance: '165 mm',
      bootSpace: '510 Litres',
      fuelTank: '55 Litres'
    },
    variants: [
      {
        id: 'jetta-trendline',
        name: 'Jetta Trendline',
        tagline: 'The essential German sedan entry with solid CKD build quality',
        priceRange: '₹13.90 – ₹15.49 Lakh',
        baseExShowroom: 1390000,
        engineOptions: ['1.4L TSI Twincharger'],
        transmissions: ['6-Speed Manual'],
        keyFeatures: [
          'Dual front and side airbags',
          'ABS with EBD standard',
          'Power steering and power windows',
          '2-DIN audio system with USB and AUX input',
          'Rear parking sensors'
        ],
        exteriorHighlights: ['15-inch steel wheels with covers', 'Chrome front grille strip', 'Halogen headlamps with LED DRLs'],
        interiorHighlights: ['Black fabric upholstery', 'Manual air conditioning', 'Height-adjustable driver seat'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'jetta-comfortline',
        name: 'Jetta Comfortline',
        tagline: 'The balanced mid-range trim with TDI diesel torque option',
        priceRange: '₹16.24 – ₹17.85 Lakh',
        baseExShowroom: 1624000,
        engineOptions: ['1.4L TSI Twincharger', '2.0L TDI CR Diesel'],
        transmissions: ['6-Speed Manual', '6-Speed DSG'],
        isPopular: true,
        keyFeatures: [
          '2.0L TDI diesel with 320 Nm of torque',
          'Touchscreen infotainment with Bluetooth telephony',
          'Alloy wheels with silver finish',
          'Cruise control and steering-mounted controls',
          'Climatronic automatic air conditioning'
        ],
        exteriorHighlights: ['16-inch Toronto alloy wheels', 'Chrome window beltline', 'Fog lamps with cornering function'],
        interiorHighlights: ['Beige and black dual-tone cabin', 'Leather-wrapped steering wheel', 'Rear center armrest with cup holders'],
        badgeColor: 'bg-blue-800 text-blue-100'
      },
      {
        id: 'jetta-highline',
        name: 'Jetta Highline TDI',
        tagline: 'The flagship trim pairing the 2.0 TDI diesel with DSG and full luxury equipment',
        priceRange: '₹18.36 – ₹19.66 Lakh',
        baseExShowroom: 1836000,
        engineOptions: ['2.0L TDI CR Diesel'],
        transmissions: ['6-Speed DSG (Dual-Clutch)'],
        isFlagship: true,
        keyFeatures: [
          '140 PS / 320 Nm 2.0 TDI diesel with 6-speed DSG',
          'Leather seat upholstery with 8-way power driver seat',
          'Dual-zone Climatronic automatic climate control',
          'Rain-sensing wipers and auto-dimming interior mirror',
          'Premium 8-speaker sound system'
        ],
        exteriorHighlights: ['16-inch Interlagos alloy wheels', 'Chrome exhaust tip garnish', 'Full LED tail lamps'],
        interiorHighlights: ['Beige leather upholstery', 'Wood-finish dashboard inserts', 'Illuminated vanity mirrors'],
        badgeColor: 'bg-amber-600 text-white'
      }
    ],
    colors: [
      { id: 'candy-white-jetta', name: 'Candy White', hex: '#f8fafc', availableOn: ['jetta-trendline', 'jetta-comfortline', 'jetta-highline'] },
      { id: 'reflex-silver-jetta', name: 'Reflex Silver', hex: '#cbd5e1', availableOn: ['jetta-trendline', 'jetta-comfortline', 'jetta-highline'] },
      { id: 'deep-black-jetta', name: 'Deep Black Pearl', hex: '#0f172a', availableOn: ['jetta-comfortline', 'jetta-highline'] },
      { id: 'toffee-brown-jetta', name: 'Toffee Brown Metallic', hex: '#5b3a29', availableOn: ['jetta-highline'] },
      { id: 'sky-blue-jetta', name: 'Sky Blue Metallic', hex: '#3b6ea5', availableOn: ['jetta-comfortline'] }
    ]
  },
  {
    id: 'passat',
    name: 'Volkswagen Passat',
    badge: 'Enthusiast Hall of Fame Executive Sedan',
    tagline: 'The flagship executive sedan celebrated for its 350 Nm TDI diesel and presidential rear-seat comfort (2007–2022)',
    bodyType: 'Executive Sedan',
    startingPrice: 'Hall of Fame Legend (2007–2022)',
    startingExShowroom: 2999000,
    priceRange: '₹29.99 – ₹34.50 Lakh (Final CBU Price List)',
    rating: '5-Star Euro NCAP (2014 Protocol)',
    safetyStars: 5,
    engines: ['2.0L TDI CR Diesel (177 PS / 350 Nm)', '1.8L TSI Petrol (180 PS / 250 Nm, Earlier Generations)'],
    keyHighlights: [
      'Volkswagen India’s long-running executive flagship across three generations (B6, B7, B8)',
      '177 PS / 350 Nm 2.0L TDI diesel with 6-speed DSG defined the final CBU-import generation',
      'Presidential rear legroom and 586-litre boot among the largest in the executive segment',
      '5-Star Euro NCAP rating under the rigorous 2014 testing protocol',
      'Final generation offered exclusively as a fully-imported CBU flagship from 2019',
      'Discontinued in India in 2022, paving the way for the Volkswagen Tayron flagship SUV'
    ],
    dimensions: {
      length: '4,767 mm',
      width: '1,832 mm',
      height: '1,456 mm',
      wheelbase: '2,786 mm',
      groundClearance: '140 mm',
      bootSpace: '586 Litres (Expandable to 1,152L)',
      fuelTank: '66 Litres'
    },
    variants: [
      {
        id: 'passat-comfortline',
        name: 'Passat Comfortline TDI',
        tagline: 'The executive entry with full CBU German build quality and TDI torque',
        priceRange: '₹29.99 – ₹31.50 Lakh',
        baseExShowroom: 2999000,
        engineOptions: ['2.0L TDI CR Diesel'],
        transmissions: ['6-Speed DSG (Dual-Clutch)'],
        keyFeatures: [
          '6 Airbags standard',
          'Electronic Stability Control (ESC) with Multi-Collision Braking',
          '8-inch touchscreen with Apple CarPlay & Android Auto',
          'Dual-zone Climatronic automatic climate control',
          'Leatherette seat upholstery'
        ],
        exteriorHighlights: ['17-inch alloy wheels', 'Chrome front grille and window surrounds', 'Bi-Xenon headlamps'],
        interiorHighlights: ['Black leatherette cabin', 'Wood-finish dashboard trim', 'Rear sunblind'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'passat-highline',
        name: 'Passat Highline TDI',
        tagline: 'The balanced flagship trim with premium leather and driver assistance',
        priceRange: '₹32.00 – ₹33.20 Lakh',
        baseExShowroom: 3200000,
        engineOptions: ['2.0L TDI CR Diesel'],
        transmissions: ['6-Speed DSG (Dual-Clutch)'],
        isPopular: true,
        keyFeatures: [
          'Genuine leather seat upholstery with 12-way power driver seat and memory',
          'Adaptive Cruise Control with Front Assist',
          'Panoramic electric sunroof',
          'Bi-Xenon headlamps with dynamic cornering function',
          'Fender premium sound system'
        ],
        exteriorHighlights: ['18-inch Nogaro alloy wheels', 'LED tail lamps with dynamic turn indicators', 'Chrome exhaust tips'],
        interiorHighlights: ['Vienna leather upholstery in Titan Black', 'Ambient lighting package', 'Rear air-conditioning vents'],
        badgeColor: 'bg-blue-800 text-blue-100'
      },
      {
        id: 'passat-highline-plus',
        name: 'Passat Highline Plus',
        tagline: 'The final-generation CBU flagship with the complete luxury and safety suite',
        priceRange: '₹33.90 – ₹34.50 Lakh',
        baseExShowroom: 3390000,
        engineOptions: ['2.0L TDI CR Diesel'],
        transmissions: ['6-Speed DSG (Dual-Clutch)'],
        isFlagship: true,
        keyFeatures: [
          'Massage function for the driver’s seat',
          'Ventilated and heated front seats',
          'Park Assist with automated parallel & perpendicular steering',
          '360-degree Area View camera system',
          'Adaptive Chassis Control (DCC) with selectable damping modes',
          'Head-up display'
        ],
        exteriorHighlights: ['18-inch dual-tone diamond-cut alloys', 'Full LED Matrix headlights', 'Chrome-accented rear diffuser'],
        interiorHighlights: ['Perforated Nappa leather upholstery', 'Piano black decorative inlays', 'Illuminated door sills'],
        badgeColor: 'bg-amber-600 text-white'
      }
    ],
    colors: [
      { id: 'candy-white-passat', name: 'Candy White', hex: '#f8fafc', availableOn: ['passat-comfortline', 'passat-highline', 'passat-highline-plus'] },
      { id: 'reflex-silver-passat', name: 'Reflex Silver', hex: '#cbd5e1', availableOn: ['passat-comfortline', 'passat-highline'] },
      { id: 'deep-black-passat', name: 'Deep Black Pearl', hex: '#0f172a', availableOn: ['passat-highline', 'passat-highline-plus'] },
      { id: 'toffee-brown-passat', name: 'Toffee Brown Metallic', hex: '#5b3a29', availableOn: ['passat-highline-plus'] },
      { id: 'night-blue-passat', name: 'Night Blue Metallic', hex: '#1b263b', availableOn: ['passat-highline', 'passat-highline-plus'] }
    ]
  }
];

export const VW_SAFETY_SUITE = [
  {
    title: 'Historic 5-Star Benchmark in Global NCAP',
    subtitle: 'Virtus & Taigun (Global NCAP) • Tiguan (Euro NCAP)',
    description: 'Virtus and Taigun achieved the highest crash test score in Global NCAP history under revised protocols: a flawless 5-Star score for both Adult Occupant and Child Occupant protection.',
    metric: '5-Star Full Protection'
  },
  {
    title: 'Standard 6 Airbags Across All Models',
    subtitle: 'Dual Front, Front Side, and Curtain Airbags Standard',
    description: 'Volkswagen has democratized occupant safety. Every Virtus and Taigun sold in India is equipped with 6 airbags as standard equipment from the base trim itself.',
    metric: '6 Airbags Standard'
  },
  {
    title: 'Laser-Welded German Safety Cell',
    subtitle: 'MQB-A0-IN Ultra-High-Tensile Hot-Stamped Steel',
    description: 'Laser-welded roof and high-tensile crash pathways absorb and divert impact forces around the survival cell. Footwell and passenger cage rated Stable under maximum velocity impacts.',
    metric: 'Over 73% High-Tensile Steel'
  },
  {
    title: '40+ Active & Passive Safety Features Standard',
    subtitle: 'Electronic Stability Control (ESC) + Multi-Collision Brakes (MCB)',
    description: 'Equipped with ESC, Anti-Slip Regulation (ASR), Electronic Differential Lock (EDL), Hill Start Assist, Tyre Pressure Deflation Warning, and Brake Disc Wiping.',
    metric: '40+ Safety Features Standard'
  }
];

export const VW_GERMAN_ENGINEERING_FEATURES = [
  {
    title: 'Laser-Welded Roof Technology',
    description: 'Robotic laser beam fuses roof and side panels with zero gaps, eliminating ugly black rubber roof mouldings while increasing torsional rigidity by 35%.'
  },
  {
    title: 'Hot-Formed Ultra-High-Strength Steel',
    description: 'B-pillars and crash crash-load pathways are forged under 950°C and rapidly quenched, forming a protective survival cell that earns 5 Stars in Bharat NCAP.'
  },
  {
    title: 'Active Cylinder Technology (ACT)',
    description: 'Under light load at 1,400–4,000 RPM, cylinders 2 & 3 close their valves and halt fuel injection within 13 milliseconds, turning the 4-cylinder engine into a super-efficient 2-cylinder.'
  },
  {
    title: 'Anti-Slip Regulation & Electronic Diff Lock (EDL)',
    description: 'Monitors individual wheel speeds and applies brake pressure to slipping wheels while routing engine torque to the tire with maximum grip.'
  },
  {
    title: 'Multi-Collision Brakes (MCB)',
    description: 'If an airbag deploys, the car automatically brakes down to 10 km/h to prevent secondary impacts with guardrails or following traffic.'
  },
  {
    title: 'Brake Disc Wiping (BDW)',
    description: 'When rain wipers are active, brake pads gently pulse against the discs to sweep away water film, ensuring immediate bite in torrential monsoons.'
  }
];

export const ALL_VW_FAQS: FAQItem[] = [
  {
    category: 'Safety',
    question: 'Are Volkswagen cars sold in India 5-star crash-test certified?',
    answer: 'Yes! Both the Volkswagen Virtus and Volkswagen Taigun achieved a flawless 5-Star rating for both Adult Occupant Protection and Child Occupant Protection in Global NCAP crash testing. In fact, they recorded the highest points ever awarded in the test’s history. They also hold 5-Star Bharat NCAP certification, with 6 airbags and Electronic Stability Control (ESC) standard across all variants.'
  },
  {
    category: 'Performance',
    question: 'What makes Volkswagen’s GT Line and GT Plus variants special?',
    answer: 'The GT badge signifies Volkswagen’s performance pedigree. The GT Line pairs aggressive blacked-out styling (black alloys, dark spoiler, red cabin ambient lighting) with the peppy 1.0 TSI. The flagship GT Plus and GT Plus Sport feature the potent 1.5L TSI EVO engine (150 PS / 250 Nm) paired with the lightning-fast 7-speed DSG dual-clutch, red front brake calipers, and Active Cylinder Technology (ACT).'
  },
  {
    category: 'Comparison',
    question: 'How does the Volkswagen Virtus compare to the Škoda Slavia?',
    answer: 'Both sedans share the rock-solid MQB-A0-IN platform, 5-Star crash safety rating, 521L boot, 179 mm ground clearance, and identical 1.0 TSI & 1.5 TSI powertrains. The Virtus features classic, razor-sharp German horizontal styling, dark chrome accents, a full-width continuous front grille, red ambient lighting, and dedicated GT Plus Sport editions, while the Slavia features Bohemian crystalline aesthetics and chrome accents.'
  },
  {
    category: 'Maintenance',
    question: 'What is Volkswagen’s 4EVER Care warranty package in India?',
    answer: 'Every Volkswagen sold in India includes 4EVER Care: 4 years / 100,000 km standard manufacturer warranty, 4 years of 24/7 Roadside Assistance across India, and 3 complimentary labour-free inspection services. Extended warranties are available up to 7 years / 150,000 km.'
  },
  {
    category: 'Performance',
    question: 'What is the real-world fuel mileage of Volkswagen Virtus and Taigun in India?',
    answer: 'The 1.0L TSI returns 11.5–13.5 km/l in congested city driving and 16.5–19.5 km/l on highways. The 1.5L TSI EVO returns 10.5–12.5 km/l in city traffic and an astonishing 17.5–21.0 km/l on expressways thanks to Active Cylinder Technology (ACT) shutting down 2 cylinders during cruising.'
  },
  {
    category: 'Performance',
    question: 'Why does the Volkswagen Polo GT TSI remain a legend in India?',
    answer: 'The Polo GT TSI (produced from 2013 to 2022) created modern Indian car enthusiast culture by introducing direct-injection turbo-petrol and dual-clutch DSG transmissions to hatchbacks. Its laser-welded body, tank-like German door thud, and immense stage-1/stage-2 remap tuning potential (easily reaching 140–160 HP) cemented its status as an immortal Indian cult classic.'
  }
];
