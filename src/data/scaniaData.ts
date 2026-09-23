import { EngineSpec, FAQItem } from '../types';
import { SkodaModel } from './skodaData';

export type CarModel = SkodaModel;

export const ALL_SCANIA_ENGINES: EngineSpec[] = [
  {
    id: '13-litre-scania-super-500',
    name: '13L Scania Super Inline-6',
    badge: 'DC13 Super (500 hp)',
    fuelType: 'Diesel',
    fuelPriceDefault: 92,
    displacement: '12,742 cc',
    cylinders: 6,
    power: '500 hp (368 kW) @ 1,500–1,900 RPM',
    powerHp: 500,
    torque: '2,550 Nm @ 1,000–1,300 RPM',
    torqueNm: 2550,
    transmissions: ['Scania Opticruise 12-Speed AMT'],
    acceleration: '0–100 km/h in 38.0s (laden tractor-trailer)',
    topSpeed: '90 km/h (electronically limited)',
    claimedMileage: '4.0 – 4.5 km/l (laden, highway haul)',
    realWorldCity: '2.8 – 3.2 km/l',
    realWorldHighway: '3.8 – 4.3 km/l',
    keyHighlights: [
      'Scania Super combustion system: up to 8% lower fuel consumption than the previous-generation 13-litre',
      'Euro 6 / BS6-equivalent emissions with SCR + EGR aftertreatment, manufactured at Narsapura',
      'Powers the Scania R 500 tractor-trailer and Scania Citywide/Metrolink bus range in India',
      'Scania Opticruise automated 12-speed gearbox standard, eliminating clutch fatigue on long haul'
    ],
    description: 'The workhorse of Scania’s Indian range — a 13-litre inline-six built for millions of kilometres of continuous long-haul and city-transit duty with minimal downtime.'
  },
  {
    id: '16-litre-v8-770',
    name: '16L Twin-Turbo V8',
    badge: 'DC16 V8 (770 hp)',
    fuelType: 'Diesel',
    fuelPriceDefault: 92,
    displacement: '16,353 cc',
    cylinders: 8,
    power: '770 hp (566 kW) @ 1,800 RPM',
    powerHp: 770,
    torque: '3,700 Nm @ 1,000–1,400 RPM',
    torqueNm: 3700,
    transmissions: ['Scania Opticruise 12-Speed AMT'],
    acceleration: '0–100 km/h in 28.0s (unladen tractor)',
    topSpeed: '90 km/h (electronically limited)',
    claimedMileage: '3.2 – 3.8 km/l (laden, GCW 60T+)',
    realWorldCity: '2.2 – 2.6 km/l',
    realWorldHighway: '3.0 – 3.6 km/l',
    keyHighlights: [
      'The most powerful production engine Scania builds, halo of the V8 heritage dating to 1969',
      'Reserved for the flagship Scania S 730 and heavy haulage / mining-spec tractors above 100-tonne GCW',
      'Twin-turbo sequential charging for a flat torque curve from idle to peak revs',
      'Signature deep V8 exhaust note, a badge of prestige among long-haul drivers'
    ],
    description: 'Scania’s halo powertrain — a hand-assembled twin-turbo V8 that has powered the brand’s flagship long-haul and heavy-haulage tractors for over five decades.'
  }
];

export const SCANIA_MODELS: CarModel[] = [
  {
    id: 'scania-r-500',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Scania_R_500.JPG',
    enthusiastNote: 'The R-series griffin badge traces back to the Scania coat of arms of Scania province in southern Sweden — the same griffin has marked every truck since the 1911 merger that created Scania-Vabis.',
    name: 'Scania R 500',
    badge: 'The Long-Haul Workhorse',
    tagline: 'A 500 hp Euro-6-equivalent prime mover built for continuous multi-axle line-haul duty across India’s national highways',
    bodyType: 'Tractor-Trailer',
    startingPrice: '₹42.5 Lakh Onwards (Tractor Unit)',
    startingExShowroom: 4250000,
    priceRange: '₹42.5 – ₹48.0 Lakh',
    rating: 'AIS-113 Certified',
    safetyStars: 5,
    engines: ['13L Scania Super Inline-6 (500 hp / 2,550 Nm)'],
    keyHighlights: [
      'Scania Super 13-litre inline-six delivering 500 hp and 2,550 Nm from as low as 1,000 RPM',
      'Scania Opticruise 12-speed automated gearbox reduces driver fatigue on multi-day hauls',
      'Manufactured at the Scania plant in Narsapura, near Bengaluru, since 2013',
      'Global Scania Driver Support (GSD) coaching system rates fuel-efficient driving in real time',
      'Sleeper cab with a flat engine tunnel floor for genuine overnight rest',
      'GCW rating up to 49 tonnes for multi-axle trailer combinations'
    ],
    dimensions: {
      length: '6,275 mm (tractor unit only)',
      width: '2,550 mm',
      height: '3,300 mm (high-roof sleeper cab)',
      wheelbase: '3,600 mm',
      groundClearance: '250 mm',
      bootSpace: 'N/A — 380 Litres cab stowage + sleeper berth',
      fuelTank: '2 x 400 Litres'
    },
    variants: [
      {
        id: 'r500-day-cab',
        name: 'R 500 Day Cab (6x2)',
        tagline: 'The regional-haul specification, built for shorter multi-drop routes',
        priceRange: '₹42.5 – ₹44.5 Lakh',
        baseExShowroom: 4250000,
        engineOptions: ['13L Scania Super Inline-6'],
        transmissions: ['Scania Opticruise 12-Speed AMT'],
        keyFeatures: [
          'Standard-roof day cab without sleeper berth',
          '6x2 axle configuration with lift/steer tag axle',
          'Scania Fleet Management telematics standard',
          'Disc brakes on all axles with ABS + EBD',
          'Driver-only single-bunk option available'
        ],
        exteriorHighlights: ['LED headlamps', 'Aerodynamic roof deflector', 'Steel bull bar (optional)'],
        interiorHighlights: ['Ergonomic air-suspended driver seat', 'Digital instrument cluster', 'Manual air-conditioning'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'r500-sleeper-cab',
        name: 'R 500 Highline Sleeper (6x4)',
        tagline: 'The flagship long-haul spec, built for multi-day national highway trunking',
        priceRange: '₹46.0 – ₹48.0 Lakh',
        baseExShowroom: 4600000,
        engineOptions: ['13L Scania Super Inline-6'],
        transmissions: ['Scania Opticruise 12-Speed AMT'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Highline sleeper cab with a flat-floor double bunk',
          '6x4 drive configuration for higher GCW trailer combinations',
          'Scania Retarder auxiliary braking for descents on ghat sections',
          'Adaptive cruise control with forward collision warning',
          'Fridge compartment and 24V accessory sockets in the sleeper'
        ],
        exteriorHighlights: ['High-roof aerodynamic cab', 'Full LED lighting package', 'Chrome-finished grille'],
        interiorHighlights: ['Double-bunk sleeper berth', 'Air-suspended cab mounts for reduced vibration', 'Touchscreen infotainment with fleet telematics'],
        badgeColor: 'bg-red-800 text-red-50'
      }
    ],
    colors: [
      { id: 'scania-red-r500', name: 'Scania Red', hex: '#8c0d1a', availableOn: ['R 500 Day Cab (6x2)', 'R 500 Highline Sleeper (6x4)'] },
      { id: 'arctic-white-r500', name: 'Arctic White', hex: '#f2f2f0', availableOn: ['R 500 Day Cab (6x2)', 'R 500 Highline Sleeper (6x4)'] },
      { id: 'granite-grey-r500', name: 'Granite Grey', hex: '#4b4d4f', availableOn: ['R 500 Highline Sleeper (6x4)'] }
    ]
  },
  {
    id: 'scania-s-730',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Scania_S730_1.jpg',
    enthusiastNote: 'The S-series’ flat-floor cab, sat directly over the front axle, was engineered specifically so a 6-foot-plus driver could stand fully upright behind the wheel — a first for Scania’s cab-over range.',
    name: 'Scania S 730',
    badge: 'The Flagship Long-Haul Flagship',
    tagline: 'Scania’s range-topping cab-over tractor, built around the 770 hp twin-turbo V8 for the heaviest, highest-priority haulage contracts',
    bodyType: 'Tractor-Trailer',
    startingPrice: '₹58.0 Lakh Onwards (Tractor Unit)',
    startingExShowroom: 5800000,
    priceRange: '₹58.0 – ₹68.0 Lakh',
    rating: 'AIS-113 Certified',
    safetyStars: 5,
    engines: ['16L Twin-Turbo V8 (770 hp / 3,700 Nm)'],
    keyHighlights: [
      'Flat-floor S-series cab lets a driver stand fully upright — unique among Scania’s range',
      'Available with the 770 hp V8, the most powerful engine Scania builds',
      'Rated for GCW up to 80 tonnes for heavy-haulage and multi-trailer combinations',
      'Panoramic windscreen and lowered dashboard for best-in-class forward visibility',
      'Scania Driver Support system and lane-keeping assist standard',
      'Reserved for premium long-haul fleets and project-cargo / heavy-haulage operators'
    ],
    dimensions: {
      length: '6,320 mm (tractor unit only)',
      width: '2,550 mm',
      height: '3,700 mm (high-roof, flat-floor sleeper cab)',
      wheelbase: '3,700 mm',
      groundClearance: '260 mm',
      bootSpace: 'N/A — 420 Litres cab stowage + sleeper berth',
      fuelTank: '2 x 500 Litres'
    },
    variants: [
      {
        id: 's730-highline',
        name: 'S 730 Highline (6x4)',
        tagline: 'The standard flagship configuration for premium long-haul fleets',
        priceRange: '₹58.0 – ₹62.0 Lakh',
        baseExShowroom: 5800000,
        engineOptions: ['16L Twin-Turbo V8'],
        transmissions: ['Scania Opticruise 12-Speed AMT'],
        keyFeatures: [
          'Flat-floor cab with full standing height',
          '6x4 drive configuration with cross-locking differentials',
          'Scania Retarder plus engine brake for mountain descents',
          'Premium double-bunk sleeper with climate-controlled parking cooler',
          'Digital driver display with real-time fuel-economy coaching'
        ],
        exteriorHighlights: ['Panoramic curved windscreen', 'Full LED headlamp cluster', 'Chrome grille with V8 badging'],
        interiorHighlights: ['Standing-height flat-floor cabin', 'Premium leather-trimmed driver seat', 'Rear lounge-style sleeper bench'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 's730-heavy-haulage',
        name: 'S 730 Heavy Haulage (8x4)',
        tagline: 'The reinforced-chassis variant for project cargo and multi-trailer heavy haulage',
        priceRange: '₹65.0 – ₹68.0 Lakh',
        baseExShowroom: 6500000,
        engineOptions: ['16L Twin-Turbo V8'],
        transmissions: ['Scania Opticruise 12-Speed AMT'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Reinforced ladder-frame chassis rated for GCW up to 80 tonnes',
          '8x4 axle configuration for maximum payload distribution',
          'Heavy-duty hydraulic retarder for controlled descents under full load',
          'Reinforced fifth-wheel coupling for multi-trailer combinations',
          'Auxiliary cooling package for continuous high-load operation'
        ],
        exteriorHighlights: ['Reinforced front bumper', 'Heavy-duty tow hooks', 'Additional chassis-mounted work lights'],
        interiorHighlights: ['Reinforced driver and co-driver seating', 'Extra document and tool stowage', 'Heavy-duty floor matting'],
        badgeColor: 'bg-red-800 text-red-50'
      }
    ],
    colors: [
      { id: 'scania-red-s730', name: 'Scania Red', hex: '#8c0d1a', availableOn: ['S 730 Highline (6x4)', 'S 730 Heavy Haulage (8x4)'] },
      { id: 'arctic-white-s730', name: 'Arctic White', hex: '#f2f2f0', availableOn: ['S 730 Highline (6x4)'] },
      { id: 'granite-grey-s730', name: 'Granite Grey', hex: '#4b4d4f', availableOn: ['S 730 Heavy Haulage (8x4)'] }
    ]
  },
  {
    id: 'scania-citywide',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Bus_Scania_Citywide_LE_hybrid._Spielvogel_1.jpg',
    enthusiastNote: 'Citywide’s low-entry (LE) floor height was engineered to near-eliminate boarding steps, a design borrowed directly from Scania’s European city-transit buses before being adapted for Indian STU fleets.',
    name: 'Scania Citywide',
    badge: 'The Low-Floor City Transit Bus',
    tagline: 'A low-entry city bus platform built for high-frequency urban routes, adopted by state transport undertakings across India',
    bodyType: 'City Bus',
    startingPrice: '₹65.0 Lakh Onwards (Chassis + Body)',
    startingExShowroom: 6500000,
    priceRange: '₹65.0 – ₹78.0 Lakh',
    rating: 'AIS-052 Certified',
    safetyStars: 5,
    engines: ['13L Scania Super Inline-6 (De-rated 320 hp Bus Tune / 1,650 Nm)'],
    keyHighlights: [
      'Low-entry (LE) floor design for near step-free boarding at urban bus stops',
      'Deployed by state transport undertakings including BMTC and MSRTC on high-frequency city routes',
      'Scania Opticruise fully automatic gearbox for smooth stop-start city driving',
      'Reinforced monocoque body construction to Indian AIS-052 bus body-code standards',
      'Dedicated wheelchair-accessible bay and kneeling suspension function',
      'Fire-suppression and multiplexed electrical architecture standard'
    ],
    dimensions: {
      length: '12,000 mm',
      width: '2,550 mm',
      height: '3,100 mm',
      wheelbase: '5,900 mm',
      groundClearance: '180 mm (kneeling function lowers further at stops)',
      bootSpace: 'N/A — Low-floor city bus, standee + seated capacity 65–90',
      fuelTank: '300 Litres'
    },
    variants: [
      {
        id: 'citywide-standard',
        name: 'Citywide Standard (12m)',
        tagline: 'The core low-floor city bus specification for STU fleets',
        priceRange: '₹65.0 – ₹70.0 Lakh',
        baseExShowroom: 6500000,
        engineOptions: ['13L Scania Super Inline-6 (Bus Tune)'],
        transmissions: ['Scania Opticruise Automated Gearbox'],
        keyFeatures: [
          'Low-entry step-free boarding at the front and middle doors',
          'Kneeling air suspension for easier boarding at stops',
          'Seating for 35–40 with standee capacity for 90 total',
          'CCTV and passenger information display standard on STU orders',
          'Electronic destination board integration'
        ],
        exteriorHighlights: ['Wide double-leaf doors', 'Full LED exterior lighting', 'STU livery-ready body panels'],
        interiorHighlights: ['Anti-slip low floor', 'Grab rails throughout standee area', 'Driver cabin with air-conditioning'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'citywide-ac-premium',
        name: 'Citywide AC Premium (12m)',
        tagline: 'The air-conditioned specification for premium city and airport-link routes',
        priceRange: '₹75.0 – ₹78.0 Lakh',
        baseExShowroom: 7500000,
        engineOptions: ['13L Scania Super Inline-6 (Bus Tune)'],
        transmissions: ['Scania Opticruise Automated Gearbox'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Full roof-mounted air-conditioning for all-weather comfort',
          'Push-back or 2+2 seating layout options for premium routes',
          'USB charging points at every seat row',
          'Automated fare collection (AFC) system integration',
          'Reversing camera and 360-degree obstacle-detection sensors'
        ],
        exteriorHighlights: ['Tinted glazing', 'Roof-mounted AC pod', 'Premium STU livery finish'],
        interiorHighlights: ['Cushioned reclining seats', 'LED passenger information screens', 'Improved sound insulation'],
        badgeColor: 'bg-red-800 text-red-50'
      }
    ],
    colors: [
      { id: 'scania-red-citywide', name: 'Scania Red', hex: '#8c0d1a', availableOn: ['Citywide Standard (12m)', 'Citywide AC Premium (12m)'] },
      { id: 'arctic-white-citywide', name: 'Arctic White', hex: '#f2f2f0', availableOn: ['Citywide Standard (12m)', 'Citywide AC Premium (12m)'] }
    ]
  },
  {
    id: 'scania-metrolink',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Scania_Metrolink_HD_14.5_M_Ashwamedh.jpg',
    enthusiastNote: 'Several Indian state transport undertakings, including MSRTC’s "Shivneri" and "Ashwamedh" premium services, chose the Metrolink chassis specifically for its Scania Super engine and highway-cruising refinement over long intercity routes.',
    name: 'Scania Metrolink',
    badge: 'The Intercity Coach Bus',
    tagline: 'A high-floor intercity coach platform built for premium long-distance routes operated by Indian state transport undertakings and private operators',
    bodyType: 'Coach Bus',
    startingPrice: '₹72.0 Lakh Onwards (Chassis + Body)',
    startingExShowroom: 7200000,
    priceRange: '₹72.0 – ₹92.0 Lakh',
    rating: 'AIS-052 Certified',
    safetyStars: 5,
    engines: ['13L Scania Super Inline-6 (360 hp Coach Tune / 1,850 Nm)'],
    keyHighlights: [
      'The chassis of choice behind MSRTC’s premium "Shivneri" and "Ashwamedh" intercity services',
      'High-floor luggage-bay layout for genuine long-distance intercity and interstate routes',
      'Scania Opticruise automated gearbox reduces driver fatigue over multi-hour highway stints',
      'Reinforced rollover-protection body structure to AIS-052 standards',
      'Available in 2+2 semi-sleeper and 2+1 luxury seating layouts',
      'Retarder braking standard for extended descents on ghat highway sections'
    ],
    dimensions: {
      length: '14,500 mm',
      width: '2,600 mm',
      height: '3,700 mm',
      wheelbase: '7,100 mm',
      groundClearance: '220 mm',
      bootSpace: '9.5 cubic metres underfloor luggage bay',
      fuelTank: '400 Litres'
    },
    variants: [
      {
        id: 'metrolink-semi-sleeper',
        name: 'Metrolink Semi-Sleeper (2+2)',
        tagline: 'The high-volume intercity specification used across state transport fleets',
        priceRange: '₹72.0 – ₹80.0 Lakh',
        baseExShowroom: 7200000,
        engineOptions: ['13L Scania Super Inline-6 (Coach Tune)'],
        transmissions: ['Scania Opticruise Automated Gearbox'],
        keyFeatures: [
          '2+2 semi-sleeper reclining seat layout, 45–49 passenger capacity',
          'Large underfloor luggage bay for intercity baggage',
          'Air-conditioning with individual passenger air vents',
          'CCTV, GPS tracking and panic-button integration for STU compliance',
          'Retarder braking for sustained highway descents'
        ],
        exteriorHighlights: ['High-floor coach body', 'STU intercity livery-ready panels', 'Full LED exterior lighting'],
        interiorHighlights: ['Reclining semi-sleeper seats', 'Reading lights and USB points per row', 'Onboard PA system'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'metrolink-luxury-sleeper',
        name: 'Metrolink Luxury Sleeper (2+1)',
        tagline: 'The premium long-distance flagship coach specification',
        priceRange: '₹88.0 – ₹92.0 Lakh',
        baseExShowroom: 8800000,
        engineOptions: ['13L Scania Super Inline-6 (Coach Tune)'],
        transmissions: ['Scania Opticruise Automated Gearbox'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          '2+1 luxury sleeper-berth layout with curtained privacy compartments',
          'Onboard washroom and pantry option for long-distance overnight routes',
          'Individual passenger entertainment screens',
          'Premium suspension seat cushioning for multi-hour comfort',
          'Enhanced sound insulation and double-glazed windows'
        ],
        exteriorHighlights: ['Premium two-tone livery', 'Illuminated boarding steps', 'Chrome-finished front grille'],
        interiorHighlights: ['Sleeper-berth cabins with curtains', 'Reading lights and charging points per berth', 'Onboard pantry counter'],
        badgeColor: 'bg-red-800 text-red-50'
      }
    ],
    colors: [
      { id: 'scania-red-metrolink', name: 'Scania Red', hex: '#8c0d1a', availableOn: ['Metrolink Semi-Sleeper (2+2)', 'Metrolink Luxury Sleeper (2+1)'] },
      { id: 'arctic-white-metrolink', name: 'Arctic White', hex: '#f2f2f0', availableOn: ['Metrolink Semi-Sleeper (2+2)', 'Metrolink Luxury Sleeper (2+1)'] },
      { id: 'granite-grey-metrolink', name: 'Granite Grey', hex: '#4b4d4f', availableOn: ['Metrolink Luxury Sleeper (2+1)'] }
    ]
  }
];

export const SCANIA_SAFETY_SUITE = [
  {
    title: 'AIS-113 & AIS-052 Certified Cab/Body Structures',
    subtitle: 'R-Series, S-Series & Citywide/Metrolink Bus Bodies',
    description: 'Every Scania truck cab and bus body sold in India is certified to the relevant Indian AIS crash and rollover-protection standards, backed by Scania’s global cab-safety-cell engineering.',
    metric: 'AIS-Certified Structures'
  },
  {
    title: 'Scania Driver Support & Lane-Keeping Assist',
    subtitle: 'Standard Across the R-Series and S-Series',
    description: 'Real-time coaching on braking, acceleration and gear selection, paired with lane-keeping and forward collision warning, reduces fatigue-related incidents on long-haul routes.',
    metric: 'Active Driver Assistance',
  },
  {
    title: 'Scania Retarder & Engine Brake',
    subtitle: 'Standard on Highline & Heavy-Haulage Variants',
    description: 'A hydraulic retarder supplements the service brakes on long descents, particularly critical on India’s ghat sections, extending brake life and improving control under full load.',
    metric: 'Auxiliary Braking System'
  },
  {
    title: 'Reinforced Cab & Body Safety Cell',
    subtitle: 'Across Trucks and Buses Alike',
    description: 'High-strength steel cab structures on the R- and S-series, and AIS-052 rollover-protection bus bodies on the Citywide and Metrolink, form the core of Scania’s occupant-protection philosophy in India.',
    metric: 'Engineering-Led Safety Cell'
  }
];

export const SCANIA_ENGINEERING_FEATURES = [
  {
    title: 'Scania Super Combustion System',
    description: 'A re-engineered 13-litre combustion system, injection strategy and turbocharging combine for up to 8% better fuel economy than the outgoing generation, without a power penalty.'
  },
  {
    title: 'Scania Opticruise Automated Gearbox',
    description: 'A 12-speed automated manual transmission that shifts based on road gradient, load and driving style, reducing clutch wear and driver fatigue on multi-day hauls.'
  },
  {
    title: 'Global Scania Driver Support (GSD)',
    description: 'An in-cab coaching system that scores braking, anticipation and fuel-efficient driving in real time, used by Indian fleet operators to cut fuel costs across large truck pools.'
  },
  {
    title: 'Modular Cab Architecture',
    description: 'A shared cab platform spans day-cab, sleeper and flat-floor S-series configurations, letting Scania tailor cab height and layout precisely to route type without a bespoke design for each.'
  },
  {
    title: 'Twin-Turbo V8 Heritage',
    description: 'Scania has built V8 engines continuously since 1969; the current 16-litre twin-turbo unit in the S 730 carries that lineage forward as the most powerful engine in Scania’s current range.'
  },
  {
    title: 'Narsapura Manufacturing & Local Body-Building',
    description: 'Scania’s Narsapura plant near Bengaluru has assembled trucks and buses for the Indian market since 2013, with bus bodies built to Indian AIS-052 code by certified regional body-builders.'
  }
];

export const ALL_SCANIA_FAQS: FAQItem[] = [
  {
    category: 'Safety',
    question: 'Are Scania trucks and buses sold in India crash/rollover certified?',
    answer: 'Yes. Scania’s truck cabs and bus bodies sold in India are certified to the applicable Indian AIS-113 (cab) and AIS-052 (bus body) standards, and every current model carries Scania Driver Support and lane-keeping assistance as standard.'
  },
  {
    category: 'Performance',
    question: 'What makes the Scania Super 13-litre engine significant?',
    answer: 'The Scania Super combustion system, introduced on the 13-litre inline-six, delivers up to 8% better fuel economy than the previous generation at the same 500 hp output — a meaningful saving over hundreds of thousands of kilometres for a fleet operator.'
  },
  {
    category: 'Comparison',
    question: 'Should I choose the Scania R 500 or the S 730?',
    answer: 'The R 500 is the versatile, lower-cost workhorse for regional and national-highway line-haul at up to 49-tonne GCW. The S 730 is the flagship flat-floor cab with the 770 hp V8, reserved for the heaviest haulage and premium long-haul contracts up to 80-tonne GCW — choose based on your route’s load and priority.'
  },
  {
    category: 'Maintenance',
    question: 'How is Scania sold and serviced in India?',
    answer: 'Scania Commercial Vehicles India Pvt. Ltd. operates its own direct-owned and franchised dealer and workshop network across India, manufacturing trucks and buses at its Narsapura plant near Bengaluru since 2013 — a structure independent of the Škoda Auto Volkswagen India (SAVWIPL) passenger-car network, though it sits under the same TRATON Group / Volkswagen Group umbrella.'
  },
  {
    category: 'Performance',
    question: 'Are Scania buses used by Indian state transport undertakings?',
    answer: 'Yes. Several state transport undertakings, including MSRTC (Maharashtra) and BMTC (Bengaluru), operate Scania Citywide low-floor city buses and Metrolink intercity coaches — the Metrolink chassis underpins MSRTC’s well-known premium "Shivneri" and "Ashwamedh" services.'
  },
  {
    category: 'Performance',
    question: 'What is the real-world fuel efficiency of a Scania tractor-trailer in India?',
    answer: 'A laden Scania R 500 tractor-trailer typically returns 2.8–3.2 km/l in mixed city/highway conditions and up to 4.3 km/l on steady highway hauls — figures that read low next to a passenger car, but are competitive for a vehicle hauling 35–49 tonnes GCW.'
  },
  {
    category: 'Comparison',
    question: 'How does Scania fit within the Volkswagen Group in India, alongside Škoda, Audi and Porsche?',
    answer: 'Scania is a fully owned subsidiary of TRATON SE, itself majority-owned by the Volkswagen Group — making Scania the Group’s dedicated commercial-vehicle (truck and bus) marque, distinct in engineering, dealer network and customer base from the Group’s passenger-car brands, but a genuine sibling under the same parent company.'
  },
  {
    category: 'Safety',
    question: 'Do Scania buses in India offer driver-assistance features?',
    answer: 'Yes. Current-generation Citywide and Metrolink buses offer reversing cameras, 360-degree obstacle-detection sensors, and electronic stability support, alongside the AIS-052-certified rollover-protection body structure.'
  }
];
