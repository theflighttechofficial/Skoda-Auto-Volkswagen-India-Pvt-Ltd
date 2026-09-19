import { EngineSpec, FAQItem } from '../types';
import { SkodaModel } from './skodaData';

export type CarModel = SkodaModel;

export const ALL_LAMBORGHINI_ENGINES: EngineSpec[] = [
  {
    id: '5.2-v10-huracan',
    name: '5.2L Naturally-Aspirated V10',
    badge: '5.2 V10 (640 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '5,204 cc',
    cylinders: 10,
    power: '640 PS (471 kW) @ 8,000 RPM',
    powerHp: 640,
    torque: '565 Nm @ 6,500 RPM',
    torqueNm: 565,
    transmissions: ['7-Speed LDF Dual-Clutch'],
    acceleration: '0–100 km/h in 2.9s',
    topSpeed: '325 km/h',
    claimedMileage: '6.5 – 7.5 km/l',
    realWorldCity: '3.5 – 4.5 km/l',
    realWorldHighway: '6.0 – 7.0 km/l',
    keyHighlights: [
      'One of the last naturally-aspirated V10 supercar engines still in production',
      'Screams to an 8,500 RPM redline with a signature high-pitched wail',
      'Shared architecture roots with the Audi R8’s V10',
      'Available exclusively in the Huracán'
    ],
    description: 'A screaming, naturally-aspirated V10 that trades turbo efficiency for pure, immediate throttle response and one of the great engine notes in motoring.'
  },
  {
    id: '4.0-twin-turbo-v8-urus',
    name: '4.0L Twin-Turbo V8',
    badge: '4.0 Twin-Turbo V8 (657 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '3,996 cc',
    cylinders: 8,
    power: '657 PS (483 kW) @ 6,000 RPM',
    powerHp: 657,
    torque: '850 Nm @ 2,300–4,500 RPM',
    torqueNm: 850,
    transmissions: ['8-Speed Automatic'],
    acceleration: '0–100 km/h in 3.6s',
    topSpeed: '305 km/h',
    claimedMileage: '6.0 – 7.0 km/l',
    realWorldCity: '3.2 – 4.0 km/l',
    realWorldHighway: '5.5 – 6.5 km/l',
    keyHighlights: [
      'Shared twin-turbo V8 block family with the Porsche Cayenne Turbo and Audi RS Q8',
      'Powers Lamborghini’s Super Sport Utility Vehicle, the Urus',
      'Permanent all-wheel drive with a rear self-locking differential',
      'Tuned for both track-day pace and genuine SUV usability'
    ],
    description: 'A twin-turbo V8 that turns Lamborghini’s SUV into the fastest production SUV lap-record holder of its era.'
  },
  {
    id: '6.5-hybrid-v12-revuelto',
    name: '6.5L Naturally-Aspirated V12 + Tri-Motor Hybrid',
    badge: '6.5 V12 Hybrid (1,015 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '6,498 cc',
    cylinders: 12,
    power: '1,015 PS (747 kW) Combined @ 9,250 RPM',
    powerHp: 1015,
    torque: '725 Nm (ICE) + Electric Motor Torque',
    torqueNm: 725,
    transmissions: ['8-Speed Dual-Clutch (Longitudinal)'],
    acceleration: '0–100 km/h in 2.5s',
    topSpeed: '350 km/h',
    claimedMileage: '5.5 – 6.5 km/l (Petrol) / Limited EV Range',
    realWorldCity: '3.0 – 4.0 km/l',
    realWorldHighway: '5.0 – 6.0 km/l',
    keyHighlights: [
      'Lamborghini’s first series-production plug-in hybrid flagship',
      'Naturally-aspirated V12 paired with three electric motors for all-wheel drive',
      'Short-burst full-electric city driving mode available',
      'Successor to the Aventador as the brand’s halo flagship'
    ],
    description: 'The most powerful road-going Lamborghini ever built — a screaming naturally-aspirated V12 fused with electric motors for a 1,015 PS hybrid flagship.'
  }
];

export const LAMBORGHINI_MODELS: CarModel[] = [
  {
    id: 'huracan',
    image: '/cars/lamborghini-huracan.avif',
    enthusiastNote: 'The Huracán name comes from a legendary fighting bull of 19th-century Spain — continuing Lamborghini’s tradition of naming cars after famous bulls rather than horses or animals of speed.',
    name: 'Lamborghini Huracán',
    badge: 'The Screaming V10 Icon',
    tagline: 'One of the last naturally-aspirated V10 supercars, with a chassis as sharp as its exhaust note',
    bodyType: 'Hatchback',
    startingPrice: '₹3.80 Crore Onwards',
    startingExShowroom: 38000000,
    priceRange: '₹3.80 – ₹4.20 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['5.2L Naturally-Aspirated V10 (640 PS / 565 Nm)'],
    keyHighlights: [
      'Naturally-aspirated 5.2L V10 revving to an 8,500 RPM redline',
      'Lamborghini Dinamica Veicolo Integrata (LDVI) central chassis brain',
      'Available in rear-wheel-drive and all-wheel-drive configurations',
      'Carbon-fibre monocoque with aluminum front and rear subframes',
      'One of the last naturally-aspirated supercars still in production',
      'CBU import through Lamborghini India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '4,520 mm',
      width: '1,933 mm',
      height: '1,165 mm',
      wheelbase: '2,620 mm',
      groundClearance: '105 mm',
      bootSpace: '150 Litres (Front)',
      fuelTank: '80 Litres'
    },
    variants: [
      {
        id: 'huracan-evo',
        name: 'Huracán EVO',
        tagline: 'The purest, most focused entry into V10 Lamborghini ownership',
        priceRange: '₹3.80 – ₹4.00 Crore',
        baseExShowroom: 38000000,
        engineOptions: ['5.2L Naturally-Aspirated V10'],
        transmissions: ['7-Speed LDF Dual-Clutch'],
        keyFeatures: [
          'Lamborghini Dinamica Veicolo Integrata (LDVI)',
          '8.4-inch capacitive touchscreen infotainment',
          'Magnetorheological adaptive suspension',
          'Sport seats standard',
          'Full-LED headlights with signature Y-shaped DRLs'
        ],
        exteriorHighlights: ['19-/20-inch alloy wheels', 'Y-shaped LED headlights', 'Rear diffuser with integrated exhaust'],
        interiorHighlights: ['Alcantara sport seats', 'TFT digital instrument cluster', 'Carbon-fibre interior trim'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'huracan-sto',
        name: 'Huracán STO',
        tagline: 'A race car for the road, homologated from the Super Trofeo racer',
        priceRange: '₹4.10 – ₹4.20 Crore',
        baseExShowroom: 41000000,
        engineOptions: ['5.2L Naturally-Aspirated V10'],
        transmissions: ['7-Speed LDF Dual-Clutch'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Single-piece front clamshell bonnet lifted from the Super Trofeo racer',
          'Rear-wheel drive only, no all-wheel-drive option',
          'Motorsport-derived carbon-ceramic brakes',
          'Fixed carbon-fibre rear wing',
          'Track-tuned magnetorheological suspension'
        ],
        exteriorHighlights: ['20-inch center-lock wheels', 'Massive fixed rear wing', 'Racing livery graphics package'],
        interiorHighlights: ['Full carbon-fibre bucket seats', 'Roll-cage pre-installation', 'Alcantara-wrapped dashboard'],
        badgeColor: 'bg-yellow-600 text-black'
      }
    ],
    colors: [
      { id: 'giallo-huracan', name: 'Giallo Inti', hex: '#f5c400', availableOn: ['Huracán EVO', 'Huracán STO'] },
      { id: 'nero-huracan', name: 'Nero Noctis', hex: '#0a0a0a', availableOn: ['Huracán EVO', 'Huracán STO'] },
      { id: 'bianco-huracan', name: 'Bianco Icarus', hex: '#f4f4f5', availableOn: ['Huracán EVO'] },
      { id: 'verde-huracan', name: 'Verde Mantis', hex: '#16a34a', availableOn: ['Huracán STO'] },
      { id: 'arancio-huracan', name: 'Arancio Xanto', hex: '#ea580c', availableOn: ['Huracán EVO'] }
    ]
  },
  {
    id: 'urus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Lamborghini_Urus_S_1X7A6796.jpg',
    enthusiastNote: 'The Urus name revives a nameplate first used on a 1986 Lamborghini military concept — and, further back, refers to the aurochs, an extinct wild bull ancestor.',
    name: 'Lamborghini Urus',
    badge: 'The Super Sport Utility Vehicle',
    tagline: 'Lamborghini’s best-selling model — SUV practicality with supercar-baiting performance',
    bodyType: 'Luxury 4x4 SUV',
    startingPrice: '₹4.20 Crore Onwards',
    startingExShowroom: 42000000,
    priceRange: '₹4.20 – ₹4.60 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['4.0L Twin-Turbo V8 (657 PS / 850 Nm)'],
    keyHighlights: [
      'Lamborghini’s highest-volume model worldwide by a wide margin',
      'Shares core platform engineering with the Porsche Cayenne and Audi Q8 under Group architecture',
      'Six selectable Anima drive modes including dedicated Sabbia (sand) and Neve (snow) terrain modes',
      'Permanent all-wheel drive with active torque vectoring',
      'Rear-wheel steering standard for sharper agility',
      'CBU import through Lamborghini India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '5,112 mm',
      width: '2,016 mm',
      height: '1,638 mm',
      wheelbase: '3,003 mm',
      groundClearance: '190 mm',
      bootSpace: '616 Litres',
      fuelTank: '85 Litres'
    },
    variants: [
      {
        id: 'urus-s',
        name: 'Urus S',
        tagline: 'The core Super SUV, tuned for effortless triple-digit cruising',
        priceRange: '₹4.20 – ₹4.35 Crore',
        baseExShowroom: 42000000,
        engineOptions: ['4.0L Twin-Turbo V8'],
        transmissions: ['8-Speed Automatic'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Adaptive air suspension with active anti-roll bars',
          '12.3-inch central touchscreen infotainment',
          'Permanent all-wheel drive with rear self-locking differential',
          'Rear-wheel steering',
          'Bang & Olufsen sound system available'
        ],
        exteriorHighlights: ['21-/22-inch alloy wheels', 'Hexagonal LED headlights', 'Quad exhaust tailpipes'],
        interiorHighlights: ['Full leather upholstery', 'Diamond-quilted seat stitching', 'Ambient lighting package'],
        badgeColor: 'bg-yellow-600 text-black'
      },
      {
        id: 'urus-performante',
        name: 'Urus Performante',
        tagline: 'The lighter, track-focused Super SUV variant',
        priceRange: '₹4.45 – ₹4.60 Crore',
        baseExShowroom: 44500000,
        engineOptions: ['4.0L Twin-Turbo V8'],
        transmissions: ['8-Speed Automatic'],
        keyFeatures: [
          '47 kg lighter than the Urus S with carbon-fibre body panels',
          'Retuned Akrapovič titanium exhaust',
          'Torque vectoring with a more track-biased calibration',
          'Fixed-rate suspension for sharper responses',
          'Off-road-capable Rally driving mode'
        ],
        exteriorHighlights: ['22-inch forged wheels', 'Carbon-fibre bonnet and roof', 'Model-specific front splitter'],
        interiorHighlights: ['Alcantara sport seats', 'Carbon-fibre interior trim', 'Titanium gear-shift paddles'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      }
    ],
    colors: [
      { id: 'giallo-urus', name: 'Giallo Inti', hex: '#f5c400', availableOn: ['Urus S', 'Urus Performante'] },
      { id: 'nero-urus', name: 'Nero Noctis', hex: '#0a0a0a', availableOn: ['Urus S', 'Urus Performante'] },
      { id: 'grigio-urus', name: 'Grigio Keres', hex: '#52525b', availableOn: ['Urus S'] },
      { id: 'blu-urus', name: 'Blu Eleos', hex: '#1e3a5f', availableOn: ['Urus S'] }
    ]
  },
  {
    id: 'revuelto',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Lamborghini_Revuelto_DSC_6987.jpg',
    enthusiastNote: 'The Revuelto is named after a famous 19th-century fighting bull and marks the first entirely new V12 flagship platform since the Aventador — and Lamborghini’s first series-production hybrid.',
    name: 'Lamborghini Revuelto',
    badge: 'The Hybrid V12 Flagship',
    tagline: 'A naturally-aspirated V12 fused with three electric motors for 1,015 PS and the future of the Lamborghini flagship',
    bodyType: 'Hatchback',
    startingPrice: '₹8.90 Crore Onwards',
    startingExShowroom: 89000000,
    priceRange: '₹8.90 – ₹9.50 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['6.5L Naturally-Aspirated V12 + Tri-Motor Hybrid (1,015 PS Combined)'],
    keyHighlights: [
      'Lamborghini’s first series-production plug-in hybrid supercar',
      'Naturally-aspirated V12 revving to a 9,500 RPM redline, paired with three electric motors',
      'New carbon-fibre monocoque chassis, the first clean-sheet platform since the Aventador',
      'Torque-vectoring electric front axle for true all-wheel drive',
      'Short-range full-electric city driving mode (Città)',
      'CBU import through Lamborghini India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '4,947 mm',
      width: '2,033 mm',
      height: '1,160 mm',
      wheelbase: '2,779 mm',
      groundClearance: '100 mm',
      bootSpace: '124 Litres (Front)',
      fuelTank: '80 Litres'
    },
    variants: [
      {
        id: 'revuelto-base',
        name: 'Revuelto',
        tagline: 'The single, hybrid-V12 flagship trim',
        priceRange: '₹8.90 – ₹9.50 Crore',
        baseExShowroom: 89000000,
        engineOptions: ['6.5L Naturally-Aspirated V12 + Tri-Motor Hybrid'],
        transmissions: ['8-Speed Dual-Clutch (Longitudinal)'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Lamborghini Dinamica Veicolo Integrata (LDVI) central chassis brain',
          'Città full-electric city driving mode',
          'New carbon-fibre monocoque with front electric-motor axle',
          '12.3-inch driver display plus 8.4-inch central touchscreen',
          'Torque-vectoring electric all-wheel drive'
        ],
        exteriorHighlights: ['21-/22-inch forged wheels', 'Hexagonal Y-shaped LED lighting signature', 'Active rear wing and diffuser'],
        interiorHighlights: ['Full carbon-fibre bucket seats', 'Alcantara-wrapped cockpit', 'Digital instrument cluster with hybrid power readouts'],
        badgeColor: 'bg-yellow-600 text-black'
      }
    ],
    colors: [
      { id: 'giallo-revuelto', name: 'Giallo Inti', hex: '#f5c400', availableOn: ['Revuelto'] },
      { id: 'nero-revuelto', name: 'Nero Noctis', hex: '#0a0a0a', availableOn: ['Revuelto'] },
      { id: 'verde-revuelto', name: 'Verde Citrea', hex: '#16a34a', availableOn: ['Revuelto'] },
      { id: 'arancio-revuelto', name: 'Arancio Xanto', hex: '#ea580c', availableOn: ['Revuelto'] }
    ]
  }
];

export const LAMBORGHINI_SAFETY_SUITE = [
  {
    title: '5-Star Euro NCAP Across the Range',
    subtitle: 'Huracán, Urus & Revuelto',
    description: 'Every current Lamborghini model sold in India carries a 5-Star Euro NCAP rating, built on carbon-fibre and high-strength aluminum safety-cell architecture developed with Volkswagen Group engineering.',
    metric: '5-Star Full Protection'
  },
  {
    title: 'Lamborghini Dinamica Veicolo Integrata (LDVI)',
    subtitle: 'Central Chassis Brain Across the Lineup',
    description: 'A predictive control unit that reads driver inputs and road conditions to pre-configure suspension, torque vectoring and traction settings before the driver even reacts.',
    metric: 'Predictive Chassis Control'
  },
  {
    title: 'Permanent All-Wheel Drive',
    subtitle: 'Standard on Urus & Revuelto, Optional on Huracán',
    description: 'Electronically controlled all-wheel drive continuously redistributes torque between axles for confident traction in India’s mixed road and weather conditions.',
    metric: 'Torque-Vectoring AWD'
  },
  {
    title: 'Carbon-Fibre Monocoque Safety Cell',
    subtitle: 'Reinforced Passenger Cell',
    description: 'A carbon-fibre and aluminum hybrid chassis structure forms a rigid passenger safety cell, standard across every current Lamborghini model in India.',
    metric: 'Motorsport-Grade Chassis'
  }
];

export const LAMBORGHINI_ENGINEERING_FEATURES = [
  {
    title: 'Lamborghini Dinamica Veicolo Integrata (LDVI)',
    description: 'A predictive central control unit that anticipates the driver’s next move by reading steering, throttle and brake inputs, then pre-configures the suspension, torque vectoring and all-wheel-drive systems accordingly.'
  },
  {
    title: 'LDF Dual-Clutch Transmission',
    description: 'Lamborghini’s own dual-clutch gearbox delivers shifts in milliseconds with zero interruption in power delivery — shared across the Huracán and Revuelto ranges.'
  },
  {
    title: 'Anima Drive Mode Selector',
    description: 'A steering-wheel-mounted selector toggling between Strada, Sport and Corsa (and Sabbia/Neve/Terra on the Urus), instantly retuning throttle response, suspension and exhaust character.'
  },
  {
    title: 'Torque-Vectoring All-Wheel Drive',
    description: 'Electronically variable AWD continuously shifts power between and across axles based on steering angle and wheel slip, standard on the Urus and Revuelto and optional on the Huracán.'
  },
  {
    title: 'Carbon-Fibre Monocoque Construction',
    description: 'A lightweight carbon-fibre and aluminum hybrid chassis, first pioneered on the Aventador and refined for the Revuelto, keeps weight low despite hybrid battery packaging.'
  },
  {
    title: 'Rear-Wheel Steering',
    description: 'Turns the rear wheels opposite the front at low speed for a tighter turning circle, and in-phase at high speed for extra stability — standard on the Urus and Revuelto.'
  }
];

export const ALL_LAMBORGHINI_FAQS: FAQItem[] = [
  {
    category: 'Safety',
    question: 'Are Lamborghini cars sold in India 5-Star crash-test certified?',
    answer: 'Yes. Every current Lamborghini model in India — the Huracán, Urus and Revuelto — carries a 5-Star Euro NCAP rating, backed by a carbon-fibre monocoque safety cell and Lamborghini Dinamica Veicolo Integrata chassis control.'
  },
  {
    category: 'Performance',
    question: 'What makes the Huracán’s V10 special compared to rival turbo engines?',
    answer: 'The Huracán’s 5.2L V10 is naturally aspirated, one of the last of its kind in a supercar, meaning throttle response is instant with no turbo lag and the engine revs cleanly to an 8,500 RPM redline with a distinctive high-pitched wail unmatched by turbocharged rivals.'
  },
  {
    category: 'Comparison',
    question: 'Should I choose the Huracán or the Revuelto?',
    answer: 'The Huracán is the smaller, purer two-seat sports car with a naturally-aspirated V10, priced from roughly ₹3.8 Crore. The Revuelto is the brand’s new hybrid V12 flagship, nearly double the price, delivering more than double the power along with a short electric-only city mode — choose based on budget and whether you want the flagship halo experience.'
  },
  {
    category: 'Maintenance',
    question: 'How is Lamborghini sold and serviced in India?',
    answer: 'Automobili Lamborghini operates its own direct dealer network in India — Lamborghini showrooms in Mumbai, Delhi-NCR, Bengaluru, Chennai, Hyderabad and Pune — separate from the Škoda Auto Volkswagen India (SAVWIPL) network, though it shares logistics and after-sales infrastructure with the wider Volkswagen Group in India.'
  },
  {
    category: 'Performance',
    question: 'Is the Urus practical enough to use as a daily-driver SUV in India?',
    answer: 'Yes. The Urus offers genuine five-seat practicality, a 616-litre boot and 190 mm of ground clearance, making it noticeably more usable over speed breakers and broken roads than the Huracán or Revuelto, while still delivering supercar-baiting performance.'
  },
  {
    category: 'Performance',
    question: 'What is the real-world fuel efficiency of Lamborghini’s engines in India?',
    answer: 'The Huracán’s naturally-aspirated V10 returns roughly 3.5–4.5 km/l in city traffic and 6–7 km/l on the highway. The Urus’s twin-turbo V8 is marginally more efficient given its smaller displacement, while the Revuelto’s hybrid V12 can supplement short city trips with its electric-only Città mode.'
  },
  {
    category: 'Comparison',
    question: 'How does the Urus compare to the Porsche Cayenne Turbo GT?',
    answer: 'Both share Volkswagen Group platform architecture, but the Urus leans further into supercar styling and a more track-focused Performante variant, while the Cayenne Turbo GT prioritizes a slightly more usable cabin — the Urus is generally the faster in a straight line, the Cayenne arguably the sharper all-round handler.'
  },
  {
    category: 'Safety',
    question: 'Does the Revuelto offer driver-assistance features in India?',
    answer: 'Yes. The Revuelto offers adaptive cruise control, lane-keeping assistance and a 360-degree parking camera system as part of its standard equipment, alongside the LDVI predictive chassis control and torque-vectoring all-wheel drive standard across the range.'
  }
];
