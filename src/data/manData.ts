import { EngineSpec, FAQItem } from '../types';
import { SkodaModel } from './skodaData';

export type CarModel = SkodaModel;

export const ALL_MAN_ENGINES: EngineSpec[] = [
  {
    id: '12-9-litre-man-d26',
    name: '12.9L MAN D26 Common-Rail Inline-6',
    badge: 'D26 (400 hp)',
    fuelType: 'Diesel',
    fuelPriceDefault: 92,
    displacement: '12,884 cc',
    cylinders: 6,
    power: '400 hp (294 kW) @ 1,600–1,900 RPM',
    powerHp: 400,
    torque: '2,100 Nm @ 930–1,400 RPM',
    torqueNm: 2100,
    transmissions: ['MAN TipMatic 12-Speed AMT'],
    acceleration: '0–100 km/h in 40.0s (laden tractor-trailer)',
    topSpeed: '90 km/h (electronically limited)',
    claimedMileage: '3.8 – 4.2 km/l (laden, highway haul)',
    realWorldCity: '2.6 – 3.0 km/l',
    realWorldHighway: '3.6 – 4.0 km/l',
    keyHighlights: [
      'Common-rail direct injection with a two-stage turbocharger for a flat torque band from idle',
      'BS6-equivalent emissions with SCR + EGR aftertreatment',
      'Powers the MAN TGS construction/distribution truck range',
      'MAN TipMatic automated 12-speed gearbox standard, easing driver fatigue on multi-drop routes'
    ],
    description: 'MAN’s mid-range 12.9-litre inline-six — the everyday workhorse engine behind the TGS, tuned for the stop-start punishment of construction and distribution duty rather than outright highway pace.'
  },
  {
    id: '15-2-litre-man-d38-v8',
    name: '15.2L MAN D38 Common-Rail V8',
    badge: 'D38 (640 hp)',
    fuelType: 'Diesel',
    fuelPriceDefault: 92,
    displacement: '15,246 cc',
    cylinders: 8,
    power: '640 hp (471 kW) @ 1,800 RPM',
    powerHp: 640,
    torque: '3,000 Nm @ 1,000–1,600 RPM',
    torqueNm: 3000,
    transmissions: ['MAN TipMatic 12-Speed AMT'],
    acceleration: '0–100 km/h in 26.5s (unladen tractor)',
    topSpeed: '90 km/h (electronically limited)',
    claimedMileage: '3.0 – 3.6 km/l (laden, GCW 60T+)',
    realWorldCity: '2.0 – 2.4 km/l',
    realWorldHighway: '2.8 – 3.4 km/l',
    keyHighlights: [
      'MAN’s halo production engine — a common-rail V8 spanning 480 to 640 hp across the D38 family',
      'Reserved for the flagship MAN TGX D38 long-haul and heavy-haulage tractors',
      'Two-stage turbocharging for a flat torque curve across the entire usable rev range',
      'Deep V8 exhaust note carried over from MAN’s long V8 heritage, a badge of prestige among long-haul drivers'
    ],
    description: 'MAN’s halo powertrain — the common-rail D38 V8 that tops the TGX D38 flagship range, engineered for the heaviest long-haul and project-cargo contracts in Europe and increasingly exported worldwide.'
  }
];

export const MAN_MODELS: CarModel[] = [
  {
    id: 'man-tgs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/MAN-TGS-LKW-P8196485.jpg',
    enthusiastNote: 'The TGS name stands for "Truck Geländenah Schwer" — roughly "truck, near-offroad, heavy" — reflecting its design brief as MAN’s construction- and distribution-duty workhorse rather than a highway cruiser.',
    name: 'MAN TGS',
    badge: 'The Construction & Distribution Workhorse',
    tagline: 'A 400 hp common-rail inline-six truck built for tipper, mixer and multi-drop distribution duty on demanding routes',
    bodyType: 'Heavy Truck',
    startingPrice: '₹38.0 Lakh Onwards (Chassis Cab)',
    startingExShowroom: 3800000,
    priceRange: '₹38.0 – ₹44.0 Lakh',
    rating: 'AIS-113 Certified',
    safetyStars: 5,
    engines: ['12.9L MAN D26 Common-Rail Inline-6 (400 hp / 2,100 Nm)'],
    keyHighlights: [
      'MAN D26 common-rail inline-six delivering 400 hp and 2,100 Nm from as low as 930 RPM',
      'MAN TipMatic 12-speed automated gearbox reduces driver fatigue on multi-drop distribution runs',
      'Reinforced ladder-frame chassis rated for tipper, mixer and flatbed body-building',
      'Two-stage turbocharging tuned for stop-start torque delivery over highway top speed',
      'Day-cab and sleeper-cab configurations for regional and construction-site duty',
      'GVW rating up to 31 tonnes for multi-axle rigid and tractor configurations'
    ],
    dimensions: {
      length: '6,945 mm (chassis cab only)',
      width: '2,490 mm',
      height: '3,150 mm (standard-roof cab)',
      wheelbase: '3,900 mm',
      groundClearance: '260 mm',
      bootSpace: 'N/A — 320 Litres cab stowage',
      fuelTank: '2 x 350 Litres'
    },
    variants: [
      {
        id: 'tgs-day-cab-tipper',
        name: 'TGS Day Cab Tipper (6x4)',
        tagline: 'The construction-site specification, built for tipper and mixer body-building',
        priceRange: '₹38.0 – ₹40.5 Lakh',
        baseExShowroom: 3800000,
        engineOptions: ['12.9L MAN D26 Common-Rail Inline-6'],
        transmissions: ['MAN TipMatic 12-Speed AMT'],
        keyFeatures: [
          'Standard-roof day cab without sleeper berth',
          '6x4 drive configuration for off-road traction on construction sites',
          'MAN RIO fleet telematics standard',
          'Disc brakes on all axles with ABS + EBD',
          'Reinforced chassis rails for tipper and mixer body-building'
        ],
        exteriorHighlights: ['LED headlamps', 'Reinforced steel front bumper', 'Underrun protection guards'],
        interiorHighlights: ['Robust cloth-trimmed driver seat', 'Analogue-digital hybrid instrument cluster', 'Manual air-conditioning'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'tgs-distribution-sleeper',
        name: 'TGS Distribution Sleeper (6x2)',
        tagline: 'The regional distribution spec, built for multi-drop routes needing overnight rest',
        priceRange: '₹42.0 – ₹44.0 Lakh',
        baseExShowroom: 4200000,
        engineOptions: ['12.9L MAN D26 Common-Rail Inline-6'],
        transmissions: ['MAN TipMatic 12-Speed AMT'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Sleeper cab with a single flat-floor bunk',
          '6x2 axle configuration with lift/steer tag axle for lighter distribution loads',
          'MAN EfficientCruise predictive cruise control on highway stretches',
          'Adaptive cruise control with forward collision warning',
          '24V accessory sockets and cab-mounted cooler box'
        ],
        exteriorHighlights: ['Aerodynamic roof deflector', 'Full LED lighting package', 'Chrome-finished grille surround'],
        interiorHighlights: ['Single-bunk sleeper berth', 'Air-suspended cab mounts for reduced vibration', 'Touchscreen infotainment with fleet telematics'],
        badgeColor: 'bg-sky-800 text-sky-50'
      }
    ],
    colors: [
      { id: 'man-red-tgs', name: 'MAN Red', hex: '#e2001a', availableOn: ['TGS Day Cab Tipper (6x4)', 'TGS Distribution Sleeper (6x2)'] },
      { id: 'arctic-white-tgs', name: 'Arctic White', hex: '#f2f2f0', availableOn: ['TGS Day Cab Tipper (6x4)', 'TGS Distribution Sleeper (6x2)'] },
      { id: 'graphite-grey-tgs', name: 'Graphite Grey', hex: '#41454a', availableOn: ['TGS Distribution Sleeper (6x2)'] }
    ]
  },
  {
    id: 'man-tgx',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/2021_MAN_TGX.jpg',
    enthusiastNote: 'The TGX’s GX cab is engineered around a flat-floor lounge layout — MAN benchmarked competitor flagships and specifically targeted a lower, wider dashboard for the best forward sightlines in its class.',
    name: 'MAN TGX',
    badge: 'The Long-Haul Flagship',
    tagline: 'MAN’s range-topping cab-over tractor, offered with the common-rail D38 V8 for the heaviest, highest-priority long-haul contracts',
    bodyType: 'Tractor-Trailer',
    startingPrice: '₹52.0 Lakh Onwards (Tractor Unit)',
    startingExShowroom: 5200000,
    priceRange: '₹52.0 – ₹64.0 Lakh',
    rating: 'AIS-113 Certified',
    safetyStars: 5,
    engines: ['15.2L MAN D38 Common-Rail V8 (640 hp / 3,000 Nm)'],
    keyHighlights: [
      'Flat-floor GX cab with a lowered, widened dashboard for best-in-class forward visibility',
      'Available with the D38 V8 spanning 480 to 640 hp — the most powerful engine MAN builds',
      'Rated for GCW up to 60 tonnes for heavy-haulage and multi-trailer combinations',
      'MAN EfficientCruise predictive GPS cruise control anticipates gradients ahead',
      'MAN OptiView digital mirror-replacement cameras reduce blind spots',
      'Reserved for premium long-haul fleets and international heavy-haulage operators'
    ],
    dimensions: {
      length: '6,320 mm (tractor unit only)',
      width: '2,550 mm',
      height: '3,680 mm (high-roof GX sleeper cab)',
      wheelbase: '3,675 mm',
      groundClearance: '255 mm',
      bootSpace: 'N/A — 400 Litres cab stowage + sleeper berth',
      fuelTank: '2 x 490 Litres'
    },
    variants: [
      {
        id: 'tgx-highline',
        name: 'TGX GX Highline (6x4)',
        tagline: 'The standard flagship configuration for premium long-haul fleets',
        priceRange: '₹52.0 – ₹57.0 Lakh',
        baseExShowroom: 5200000,
        engineOptions: ['15.2L MAN D38 Common-Rail V8 (480 hp tune)'],
        transmissions: ['MAN TipMatic 12-Speed AMT'],
        keyFeatures: [
          'Flat-floor GX cab with a lowered dashboard for panoramic visibility',
          '6x4 drive configuration with cross-locking differentials',
          'MAN EfficientRoll and EfficientCruise predictive driving assistance',
          'Premium single-bunk sleeper with climate-controlled parking cooler',
          'Digital driver display with real-time fuel-economy coaching'
        ],
        exteriorHighlights: ['Panoramic curved windscreen', 'Full LED headlamp cluster', 'Chrome grille with lion badge'],
        interiorHighlights: ['Flat-floor GX cabin', 'Premium fabric-trimmed driver seat', 'Overhead stowage lockers'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'tgx-d38-flagship',
        name: 'TGX D38 Heavy Haulage (8x4)',
        tagline: 'The reinforced-chassis flagship for project cargo and multi-trailer heavy haulage',
        priceRange: '₹60.0 – ₹64.0 Lakh',
        baseExShowroom: 6000000,
        engineOptions: ['15.2L MAN D38 Common-Rail V8 (640 hp tune)'],
        transmissions: ['MAN TipMatic 12-Speed AMT'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Reinforced ladder-frame chassis rated for GCW up to 60 tonnes',
          '8x4 axle configuration for maximum payload distribution',
          'Heavy-duty engine brake plus retarder for controlled descents under full load',
          'Reinforced fifth-wheel coupling for multi-trailer combinations',
          'MAN OptiView digital camera mirrors replace conventional glass mirrors'
        ],
        exteriorHighlights: ['Reinforced front bumper', 'Heavy-duty tow hooks', 'Additional chassis-mounted work lights'],
        interiorHighlights: ['Reinforced driver and co-driver seating', 'Extra document and tool stowage', 'Heavy-duty floor matting'],
        badgeColor: 'bg-sky-800 text-sky-50'
      }
    ],
    colors: [
      { id: 'man-red-tgx', name: 'MAN Red', hex: '#e2001a', availableOn: ['TGX GX Highline (6x4)', 'TGX D38 Heavy Haulage (8x4)'] },
      { id: 'arctic-white-tgx', name: 'Arctic White', hex: '#f2f2f0', availableOn: ['TGX GX Highline (6x4)'] },
      { id: 'graphite-grey-tgx', name: 'Graphite Grey', hex: '#41454a', availableOn: ['TGX D38 Heavy Haulage (8x4)'] }
    ]
  },
  {
    id: 'man-lions-city',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/MAN_Lion%27s_City_in_Sion_VS.jpg',
    enthusiastNote: 'The Lion’s City name and lion emblem trace back to MAN’s historic bus-building tradition in Germany — the same low-floor platform underpins city-bus fleets across Europe and now forms the basis of MAN’s India city-transit pitch.',
    name: 'MAN Lion’s City',
    badge: 'The Low-Floor City Transit Bus',
    tagline: 'A low-entry city bus platform built for high-frequency urban routes, pitched to Indian state transport undertakings as a newer alternative in the segment',
    bodyType: 'City Bus',
    startingPrice: '₹58.0 Lakh Onwards (Chassis + Body)',
    startingExShowroom: 5800000,
    priceRange: '₹58.0 – ₹70.0 Lakh',
    rating: 'AIS-052 Certified',
    safetyStars: 5,
    engines: ['12.9L MAN D26 Common-Rail Inline-6 (De-rated 310 hp Bus Tune / 1,600 Nm)'],
    keyHighlights: [
      'Low-entry (LE) floor design for near step-free boarding at urban bus stops',
      'Pitched to Indian state transport undertakings as MAN Trucks India rebuilds its bus retail presence',
      'MAN TipMatic fully automatic gearbox for smooth stop-start city driving',
      'Reinforced monocoque body construction to Indian AIS-052 bus body-code standards',
      'Dedicated wheelchair-accessible bay and kneeling suspension function',
      'Fire-suppression and multiplexed electrical architecture standard'
    ],
    dimensions: {
      length: '12,000 mm',
      width: '2,550 mm',
      height: '3,120 mm',
      wheelbase: '5,880 mm',
      groundClearance: '175 mm (kneeling function lowers further at stops)',
      bootSpace: 'N/A — Low-floor city bus, standee + seated capacity 60–85',
      fuelTank: '280 Litres'
    },
    variants: [
      {
        id: 'lions-city-standard',
        name: 'Lion’s City Standard (12m)',
        tagline: 'The core low-floor city bus specification for STU fleets',
        priceRange: '₹58.0 – ₹63.0 Lakh',
        baseExShowroom: 5800000,
        engineOptions: ['12.9L MAN D26 Common-Rail Inline-6 (Bus Tune)'],
        transmissions: ['MAN TipMatic Automated Gearbox'],
        keyFeatures: [
          'Low-entry step-free boarding at the front and middle doors',
          'Kneeling air suspension for easier boarding at stops',
          'Seating for 32–38 with standee capacity for 85 total',
          'CCTV and passenger information display standard on STU orders',
          'Electronic destination board integration'
        ],
        exteriorHighlights: ['Wide double-leaf doors', 'Full LED exterior lighting', 'STU livery-ready body panels'],
        interiorHighlights: ['Anti-slip low floor', 'Grab rails throughout standee area', 'Driver cabin with air-conditioning'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'lions-city-ac-premium',
        name: 'Lion’s City AC Premium (12m)',
        tagline: 'The air-conditioned specification for premium city and airport-link routes',
        priceRange: '₹67.0 – ₹70.0 Lakh',
        baseExShowroom: 6700000,
        engineOptions: ['12.9L MAN D26 Common-Rail Inline-6 (Bus Tune)'],
        transmissions: ['MAN TipMatic Automated Gearbox'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Full roof-mounted air-conditioning for all-weather comfort',
          'Push-back or 2+2 seating layout options for premium routes',
          'USB charging points at every seat row',
          'Automated fare collection (AFC) system integration',
          'Reversing camera and obstacle-detection sensors'
        ],
        exteriorHighlights: ['Tinted glazing', 'Roof-mounted AC pod', 'Premium STU livery finish'],
        interiorHighlights: ['Cushioned reclining seats', 'LED passenger information screens', 'Improved sound insulation'],
        badgeColor: 'bg-sky-800 text-sky-50'
      }
    ],
    colors: [
      { id: 'man-red-lions-city', name: 'MAN Red', hex: '#e2001a', availableOn: ['Lion’s City Standard (12m)', 'Lion’s City AC Premium (12m)'] },
      { id: 'arctic-white-lions-city', name: 'Arctic White', hex: '#f2f2f0', availableOn: ['Lion’s City Standard (12m)', 'Lion’s City AC Premium (12m)'] }
    ]
  },
  {
    id: 'man-lions-coach',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Reisebus_-_MAN_Lion%27s_Coach_in_M%C3%BCnchen.JPG',
    enthusiastNote: 'The Lion’s Coach shares its underlying chassis philosophy with MAN’s European touring-coach range — a platform MAN has offered in India in smaller numbers than its truck lineup, reflecting the brand’s historically truck-led India strategy.',
    name: 'MAN Lion’s Coach',
    badge: 'The Intercity & Tourist Coach',
    tagline: 'A high-floor intercity coach platform for premium long-distance and tourist operators, offered in more limited numbers than MAN’s truck range in India',
    bodyType: 'Coach Bus',
    startingPrice: '₹68.0 Lakh Onwards (Chassis + Body)',
    startingExShowroom: 6800000,
    priceRange: '₹68.0 – ₹88.0 Lakh',
    rating: 'AIS-052 Certified',
    safetyStars: 5,
    engines: ['12.9L MAN D26 Common-Rail Inline-6 (350 hp Coach Tune / 1,750 Nm)'],
    keyHighlights: [
      'High-floor luggage-bay layout for genuine long-distance intercity and tourist routes',
      'MAN TipMatic automated gearbox reduces driver fatigue over multi-hour highway stints',
      'Reinforced rollover-protection body structure to AIS-052 standards',
      'Available in 2+2 semi-sleeper and 2+1 luxury seating layouts',
      'Engine brake plus retarder braking standard for extended descents on ghat highway sections',
      'A niche, smaller-volume offering in India compared to MAN’s TGS/TGX truck range'
    ],
    dimensions: {
      length: '13,900 mm',
      width: '2,550 mm',
      height: '3,680 mm',
      wheelbase: '6,850 mm',
      groundClearance: '210 mm',
      bootSpace: '8.8 cubic metres underfloor luggage bay',
      fuelTank: '380 Litres'
    },
    variants: [
      {
        id: 'lions-coach-semi-sleeper',
        name: 'Lion’s Coach Semi-Sleeper (2+2)',
        tagline: 'The volume intercity specification for private and tourist operators',
        priceRange: '₹68.0 – ₹76.0 Lakh',
        baseExShowroom: 6800000,
        engineOptions: ['12.9L MAN D26 Common-Rail Inline-6 (Coach Tune)'],
        transmissions: ['MAN TipMatic Automated Gearbox'],
        keyFeatures: [
          '2+2 semi-sleeper reclining seat layout, 43–47 passenger capacity',
          'Large underfloor luggage bay for intercity and tourist baggage',
          'Air-conditioning with individual passenger air vents',
          'CCTV, GPS tracking and panic-button integration for compliance',
          'Engine brake plus retarder for sustained highway descents'
        ],
        exteriorHighlights: ['High-floor coach body', 'Tourist-operator livery-ready panels', 'Full LED exterior lighting'],
        interiorHighlights: ['Reclining semi-sleeper seats', 'Reading lights and USB points per row', 'Onboard PA system'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'lions-coach-luxury-sleeper',
        name: 'Lion’s Coach Luxury Sleeper (2+1)',
        tagline: 'The premium long-distance flagship coach specification',
        priceRange: '₹84.0 – ₹88.0 Lakh',
        baseExShowroom: 8400000,
        engineOptions: ['12.9L MAN D26 Common-Rail Inline-6 (Coach Tune)'],
        transmissions: ['MAN TipMatic Automated Gearbox'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          '2+1 luxury sleeper-berth layout with curtained privacy compartments',
          'Onboard pantry option for long-distance overnight routes',
          'Individual passenger entertainment screens',
          'Premium suspension seat cushioning for multi-hour comfort',
          'Enhanced sound insulation and double-glazed windows'
        ],
        exteriorHighlights: ['Premium two-tone livery', 'Illuminated boarding steps', 'Chrome-finished front grille'],
        interiorHighlights: ['Sleeper-berth cabins with curtains', 'Reading lights and charging points per berth', 'Onboard pantry counter'],
        badgeColor: 'bg-sky-800 text-sky-50'
      }
    ],
    colors: [
      { id: 'man-red-lions-coach', name: 'MAN Red', hex: '#e2001a', availableOn: ['Lion’s Coach Semi-Sleeper (2+2)', 'Lion’s Coach Luxury Sleeper (2+1)'] },
      { id: 'arctic-white-lions-coach', name: 'Arctic White', hex: '#f2f2f0', availableOn: ['Lion’s Coach Semi-Sleeper (2+2)', 'Lion’s Coach Luxury Sleeper (2+1)'] },
      { id: 'graphite-grey-lions-coach', name: 'Graphite Grey', hex: '#41454a', availableOn: ['Lion’s Coach Luxury Sleeper (2+1)'] }
    ]
  }
];

export const MAN_SAFETY_SUITE = [
  {
    title: 'AIS-113 & AIS-052 Certified Cab/Body Structures',
    subtitle: 'TGS, TGX & Lion’s City/Coach Bus Bodies',
    description: 'Every MAN truck cab and bus body sold in India is certified to the relevant Indian AIS crash and rollover-protection standards, backed by MAN’s global cab-safety-cell engineering.',
    metric: 'AIS-Certified Structures'
  },
  {
    title: 'MAN EfficientCruise & Lane-Keeping Assist',
    subtitle: 'Standard Across the TGX and Higher TGS Trims',
    description: 'Predictive GPS-linked cruise control that anticipates gradients, paired with lane-keeping and forward collision warning, reduces fatigue-related incidents on long-haul routes.',
    metric: 'Active Driver Assistance',
  },
  {
    title: 'MAN OptiView Digital Mirrors & Engine Brake',
    subtitle: 'Standard on TGX Highline & Heavy-Haulage Variants',
    description: 'Camera-based mirror replacement cuts blind spots, while an engine brake and retarder combination supplements service brakes on long descents, particularly critical on India’s ghat sections.',
    metric: 'Auxiliary Braking & Visibility'
  },
  {
    title: 'Reinforced Cab & Body Safety Cell',
    subtitle: 'Across Trucks and Buses Alike',
    description: 'High-strength steel cab structures on the TGS and TGX, and AIS-052 rollover-protection bus bodies on the Lion’s City and Lion’s Coach, form the core of MAN’s occupant-protection philosophy in India.',
    metric: 'Engineering-Led Safety Cell'
  }
];

export const MAN_ENGINEERING_FEATURES = [
  {
    title: 'MAN D26 & D38 Common-Rail Engine Families',
    description: 'A 12.9-litre inline-six for distribution and construction duty, and a 15.2-litre common-rail V8 spanning 480–640 hp for flagship long-haul, cover MAN’s entire India power range from one shared architecture family.'
  },
  {
    title: 'MAN TipMatic Automated Gearbox',
    description: 'A 12-speed automated manual transmission that shifts based on road gradient, load and driving style, reducing clutch wear and driver fatigue across both distribution and long-haul duty cycles.'
  },
  {
    title: 'MAN RIO Fleet Telematics',
    description: 'A connected fleet-management platform that tracks vehicle location, fuel efficiency and maintenance needs in real time, used by Indian fleet operators to cut downtime across truck pools.'
  },
  {
    title: 'Flat-Floor GX Cab Architecture',
    description: 'The TGX’s GX cab lowers and widens the dashboard specifically to improve forward sightlines, a deliberate benchmarking response to rival flagship cabs rather than a carried-over legacy design.'
  },
  {
    title: 'Common-Rail V8 Heritage',
    description: 'MAN’s D38 V8 family spans 480 to 640 hp across a single common-rail architecture, giving the TGX flagship a broader power spread than most rivals’ single-output halo engines.'
  },
  {
    title: 'Pithampur Manufacturing Legacy',
    description: 'MAN Trucks India’s Pithampur plant in Madhya Pradesh, commissioned in 2011, gave MAN a genuine local manufacturing base — though its India retail and service footprint has stayed smaller and more truck-focused than Scania’s, especially on the bus side.'
  }
];

export const ALL_MAN_FAQS: FAQItem[] = [
  {
    category: 'Safety',
    question: 'Are MAN trucks and buses sold in India crash/rollover certified?',
    answer: 'Yes. MAN’s truck cabs and bus bodies sold in India are certified to the applicable Indian AIS-113 (cab) and AIS-052 (bus body) standards, and current TGX-generation models carry MAN EfficientCruise and lane-keeping assistance.'
  },
  {
    category: 'Performance',
    question: 'What makes the MAN D38 V8 engine significant?',
    answer: 'The D38 is MAN’s halo common-rail V8, spanning 480 to 640 hp across the TGX flagship range — a single engine architecture covering a wider output band than most rival manufacturers achieve with separate engine families, reserved for the heaviest long-haul and project-cargo contracts.'
  },
  {
    category: 'Comparison',
    question: 'Should I choose the MAN TGS or the TGX?',
    answer: 'The TGS is the versatile construction and distribution workhorse for tipper, mixer and multi-drop duty at up to 31-tonne GVW. The TGX is the flagship flat-floor GX-cab long-hauler, available with the D38 V8 up to 640 hp, reserved for the heaviest haulage and premium long-haul contracts up to 60-tonne GCW — choose based on your route’s load and duty cycle.'
  },
  {
    category: 'Maintenance',
    question: 'How is MAN sold and serviced in India?',
    answer: 'MAN Trucks India Pvt. Ltd. operates a dealer and workshop network focused primarily on its truck range, manufacturing at its Pithampur plant in Madhya Pradesh since 2011. MAN’s India retail footprint, especially for buses, has historically been smaller than Scania’s, reflecting a truck-first go-to-market approach under Volkswagen Truck & Bus / TRATON restructuring — a structure independent of the Škoda Auto Volkswagen India (SAVWIPL) passenger-car network, though it sits under the same Volkswagen Group umbrella.'
  },
  {
    category: 'Performance',
    question: 'Are MAN buses used by Indian state transport undertakings?',
    answer: 'MAN has pitched the Lion’s City and Lion’s Coach to Indian state transport undertakings and private operators, but in smaller numbers than its TGS/TGX truck range — MAN’s India bus presence has grown more gradually than its truck business, and remains a newer push compared to established rivals in the segment.'
  },
  {
    category: 'Performance',
    question: 'What is the real-world fuel efficiency of a MAN tractor-trailer in India?',
    answer: 'A laden MAN TGX tractor-trailer typically returns 2.6–3.0 km/l in mixed city/highway conditions and up to 4.0 km/l on steady highway hauls with the D26 tune — figures that read low next to a passenger car, but are competitive for a vehicle hauling 40–60 tonnes GCW.'
  },
  {
    category: 'Comparison',
    question: 'How does MAN fit within the Volkswagen Group in India, alongside Škoda, Audi and Scania?',
    answer: 'MAN Truck & Bus SE is a subsidiary of TRATON SE, itself majority-owned by the Volkswagen Group — making MAN a sibling commercial-vehicle marque to Scania within TRATON, though with a longer, more truck-focused and smaller-scale India retail history dating to the Pithampur plant’s 2011 commissioning, originally as a joint venture before later restructuring under Volkswagen Truck & Bus.'
  },
  {
    category: 'Safety',
    question: 'Do MAN buses in India offer driver-assistance features?',
    answer: 'Yes. Current-generation Lion’s City and Lion’s Coach buses offer reversing cameras, obstacle-detection sensors, and electronic stability support, alongside the AIS-052-certified rollover-protection body structure.'
  }
];
