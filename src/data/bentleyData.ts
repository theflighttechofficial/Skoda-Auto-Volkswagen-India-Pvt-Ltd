import { EngineSpec, FAQItem } from '../types';
import { SkodaModel } from './skodaData';

export type CarModel = SkodaModel;

export const ALL_BENTLEY_ENGINES: EngineSpec[] = [
  {
    id: '6.0-w12-twin-turbo-continental',
    name: '6.0L Twin-Turbo W12',
    badge: '6.0 W12 (659 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '5,950 cc',
    cylinders: 12,
    power: '659 PS (485 kW) @ 6,000 RPM',
    powerHp: 659,
    torque: '900 Nm @ 1,350–4,500 RPM',
    torqueNm: 900,
    transmissions: ['8-Speed Dual-Clutch'],
    acceleration: '0–100 km/h in 3.7s',
    topSpeed: '335 km/h',
    claimedMileage: '6.0 – 7.0 km/l',
    realWorldCity: '3.5 – 4.2 km/l',
    realWorldHighway: '6.0 – 6.8 km/l',
    keyHighlights: [
      'One of the last twin-turbo W12 engines still in series production',
      'Silky, near-silent low-RPM refinement with effortless triple-digit surge',
      'Shared W12 architecture roots with past Volkswagen Group flagship saloons',
      'Available in the Continental GT and Flying Spur'
    ],
    description: 'A hand-built twin-turbo W12 that blends locomotive-like torque with cathedral-quiet refinement, the signature engine of Bentley’s grand tourers.'
  },
  {
    id: '4.0-twin-turbo-v8-bentayga',
    name: '4.0L Twin-Turbo V8',
    badge: '4.0 Twin-Turbo V8 (550 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '3,996 cc',
    cylinders: 8,
    power: '550 PS (404 kW) @ 6,000 RPM',
    powerHp: 550,
    torque: '770 Nm @ 2,000–4,500 RPM',
    torqueNm: 770,
    transmissions: ['8-Speed Automatic'],
    acceleration: '0–100 km/h in 4.5s',
    topSpeed: '290 km/h',
    claimedMileage: '6.5 – 7.5 km/l',
    realWorldCity: '3.8 – 4.5 km/l',
    realWorldHighway: '6.2 – 7.0 km/l',
    keyHighlights: [
      'Shared twin-turbo V8 block family with the Porsche Cayenne Turbo and Audi RS Q8',
      'Powers Bentley’s luxury SUV, the Bentayga',
      'Permanent all-wheel drive with active all-wheel steering on higher trims',
      'Tuned for effortless long-distance cruising and genuine off-road capability'
    ],
    description: 'A twin-turbo V8 that gives the Bentayga sports-car pace without sacrificing the serene ride quality Bentley owners expect.'
  },
  {
    id: '4.0-twin-turbo-v8-speed',
    name: '4.0L Twin-Turbo V8 (Speed Tune)',
    badge: '4.0 Twin-Turbo V8 Speed (550 PS)',
    fuelType: 'Petrol',
    fuelPriceDefault: 102,
    displacement: '3,996 cc',
    cylinders: 8,
    power: '550 PS (404 kW) @ 6,000 RPM',
    powerHp: 550,
    torque: '770 Nm @ 2,000–4,500 RPM',
    torqueNm: 770,
    transmissions: ['8-Speed Automatic'],
    acceleration: '0–100 km/h in 4.4s',
    topSpeed: '290 km/h',
    claimedMileage: '6.2 – 7.0 km/l',
    realWorldCity: '3.6 – 4.3 km/l',
    realWorldHighway: '6.0 – 6.8 km/l',
    keyHighlights: [
      'Retuned version of the Bentayga’s twin-turbo V8 for the range-topping Speed variant',
      'Sharper throttle mapping and a more vocal sports exhaust',
      'Standard on the Bentayga Speed and Continental GT Speed hybrid-adjacent trims',
      'Paired with Bentley’s electronic active roll control (Bentley Dynamic Ride)'
    ],
    description: 'The Speed-trim calibration of Bentley’s twin-turbo V8 sharpens throttle response and exhaust character for the brand’s most driver-focused models.'
  }
];

export const BENTLEY_MODELS: CarModel[] = [
  {
    id: 'continental-gt',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Bentley_Continental_GT_%284th_gen.%29_IMG_0556.jpg',
    enthusiastNote: 'The Continental name dates back to the 1952 R-Type Continental, once the fastest four-seat production car in the world — a title the modern Continental GT has spent decades defending.',
    name: 'Bentley Continental GT',
    badge: 'The Definitive Grand Tourer',
    tagline: 'A twin-turbo W12 and hand-crafted cabin fused into the world’s most complete grand tourer',
    bodyType: 'Executive Sedan',
    startingPrice: '₹4.50 Crore Onwards',
    startingExShowroom: 45000000,
    priceRange: '₹4.50 – ₹5.20 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['6.0L Twin-Turbo W12 (659 PS / 900 Nm)'],
    keyHighlights: [
      'Hand-built twin-turbo W12 producing 659 PS and 900 Nm of torque',
      'Rotating dashboard display revealing wood veneer, screens or blank fascia',
      'All-wheel drive with active all-wheel steering on Speed trim',
      'Diamond-quilted leather seats hand-stitched at Crewe',
      'Bentley Dynamic Ride active anti-roll control on 48-volt electric actuators',
      'CBU import through Bentley India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '4,850 mm',
      width: '1,966 mm',
      height: '1,404 mm',
      wheelbase: '2,850 mm',
      groundClearance: '120 mm',
      bootSpace: '358 Litres',
      fuelTank: '90 Litres'
    },
    variants: [
      {
        id: 'continental-gt-v8',
        name: 'Continental GT V8',
        tagline: 'The lighter, more agile entry into Continental GT ownership',
        priceRange: '₹4.50 – ₹4.80 Crore',
        baseExShowroom: 45000000,
        engineOptions: ['4.0L Twin-Turbo V8'],
        transmissions: ['8-Speed Dual-Clutch'],
        keyFeatures: [
          'Rotating "Bentley Rotating Display" dashboard',
          '12.3-inch touchscreen infotainment',
          'Adaptive air suspension with continuous damping control',
          'Diamond-quilted leather seats standard',
          'Matrix LED headlights with signature ring DRLs'
        ],
        exteriorHighlights: ['21-inch alloy wheels', 'Matrix LED headlights', 'Quad exhaust tailpipes'],
        interiorHighlights: ['Hand-stitched leather cabin', 'Knurled metal control surfaces', 'Wood veneer fascia options'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'continental-gt-speed',
        name: 'Continental GT Speed',
        tagline: 'The most dynamically capable Continental GT ever built',
        priceRange: '₹5.00 – ₹5.20 Crore',
        baseExShowroom: 50000000,
        engineOptions: ['6.0L Twin-Turbo W12'],
        transmissions: ['8-Speed Dual-Clutch'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Electronic rear differential and all-wheel steering',
          'Bentley Dynamic Ride 48-volt active anti-roll control',
          'Torque vectoring by braking for sharper turn-in',
          'Sports exhaust with valved W12 note',
          'Alcantara-trimmed sports seats with embroidered wings'
        ],
        exteriorHighlights: ['22-inch forged wheels', 'Dark-tint matrix LED headlights', 'Speed-specific front splitter'],
        interiorHighlights: ['Alcantara headliner', 'Carbon-fibre fascia trim', 'Rotating display with Speed graphics'],
        badgeColor: 'bg-green-700 text-green-50'
      }
    ],
    colors: [
      { id: 'british-racing-green-gt', name: 'British Racing Green', hex: '#00332f', availableOn: ['Continental GT V8', 'Continental GT Speed'] },
      { id: 'glacier-white-gt', name: 'Glacier White', hex: '#eef1f2', availableOn: ['Continental GT V8', 'Continental GT Speed'] },
      { id: 'beluga-black-gt', name: 'Beluga Black', hex: '#0b0b0c', availableOn: ['Continental GT V8', 'Continental GT Speed'] },
      { id: 'silver-lake-gt', name: 'Silver Lake', hex: '#c0c0c0', availableOn: ['Continental GT Speed'] },
      { id: 'dragon-red-gt', name: 'Dragon Red', hex: '#8b1e2b', availableOn: ['Continental GT V8'] }
    ]
  },
  {
    id: 'bentayga',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Bentley_Bentayga_%28FL%29_Azure_1X7A7439.jpg',
    enthusiastNote: 'The Bentayga takes its name from Roque Bentayga, a dramatic volcanic rock formation on Gran Canaria — a nod to the SUV’s rugged, all-terrain heritage.',
    name: 'Bentley Bentayga',
    badge: 'The Ultimate Luxury SUV',
    tagline: 'Genuine off-road capability wrapped in Crewe’s finest hand-crafted luxury',
    bodyType: 'Luxury 4x4 SUV',
    startingPrice: '₹4.20 Crore Onwards',
    startingExShowroom: 42000000,
    priceRange: '₹4.20 – ₹5.80 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['4.0L Twin-Turbo V8 (550 PS / 770 Nm)'],
    keyHighlights: [
      'Bentley’s highest-volume model worldwide by a wide margin',
      'Shares core platform engineering with the Porsche Cayenne and Audi Q8 under Group architecture',
      'Five selectable Bentley Drive Dynamics modes including a dedicated Off-Road mode',
      'Permanent all-wheel drive with active all-wheel steering',
      'Extended-wheelbase EWB variant with independently reclining rear seats',
      'CBU import through Bentley India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '5,141 mm',
      width: '2,015 mm',
      height: '1,727 mm',
      wheelbase: '2,995 mm',
      groundClearance: '190 mm',
      bootSpace: '484 Litres',
      fuelTank: '85 Litres'
    },
    variants: [
      {
        id: 'bentayga-v8',
        name: 'Bentayga V8',
        tagline: 'The core Bentayga, tuned for effortless long-distance comfort',
        priceRange: '₹4.20 – ₹4.60 Crore',
        baseExShowroom: 42000000,
        engineOptions: ['4.0L Twin-Turbo V8'],
        transmissions: ['8-Speed Automatic'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Adaptive air suspension with electronic anti-roll control',
          '12.3-inch central touchscreen infotainment',
          'Permanent all-wheel drive with active all-wheel steering',
          'Naim for Bentley premium sound system available',
          'Five-seat configuration with hand-stitched leather'
        ],
        exteriorHighlights: ['21-/22-inch alloy wheels', 'Matrix LED headlights', 'Quad exhaust tailpipes'],
        interiorHighlights: ['Full leather upholstery', 'Diamond-quilted seat stitching', 'Open-pore wood veneer trim'],
        badgeColor: 'bg-green-700 text-green-50'
      },
      {
        id: 'bentayga-ewb',
        name: 'Bentayga EWB',
        tagline: 'The extended-wheelbase, chauffeur-focused Bentayga variant',
        priceRange: '₹5.50 – ₹5.80 Crore',
        baseExShowroom: 55000000,
        engineOptions: ['4.0L Twin-Turbo V8'],
        transmissions: ['8-Speed Automatic'],
        keyFeatures: [
          '180 mm longer wheelbase than the standard Bentayga',
          'Airline Seat rear seats with 22-way adjustment and calf rests',
          'Illuminated Bentley "B" treadplates and rear picnic tables',
          'Four-zone climate control with rear touchscreen',
          'Panoramic sunroof standard'
        ],
        exteriorHighlights: ['22-inch forged wheels', 'Extended rear doors', 'Chrome-finished waistline'],
        interiorHighlights: ['Airline Seat reclining rear cabin', 'Rear centre console fridge', 'Cashmere interior trim option'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      }
    ],
    colors: [
      { id: 'british-racing-green-bentayga', name: 'British Racing Green', hex: '#00332f', availableOn: ['Bentayga V8', 'Bentayga EWB'] },
      { id: 'glacier-white-bentayga', name: 'Glacier White', hex: '#eef1f2', availableOn: ['Bentayga V8', 'Bentayga EWB'] },
      { id: 'beluga-black-bentayga', name: 'Beluga Black', hex: '#0b0b0c', availableOn: ['Bentayga V8'] },
      { id: 'silver-lake-bentayga', name: 'Silver Lake', hex: '#c0c0c0', availableOn: ['Bentayga EWB'] }
    ]
  },
  {
    id: 'flying-spur',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Bentley_Flying_Spur_Mulliner_%282024%29_DSC_6974.jpg',
    enthusiastNote: 'The Flying Spur name honours the winged “B” Bentley badge itself, first used on a 1957 S1 Continental, evoking flight and speed in the same breath.',
    name: 'Bentley Flying Spur',
    badge: 'The Grand Luxury Saloon',
    tagline: 'A four-door limousine that drives like a sports saloon and cossets like a private jet',
    bodyType: 'Premium Sedan',
    startingPrice: '₹4.50 Crore Onwards',
    startingExShowroom: 45000000,
    priceRange: '₹4.50 – ₹5.50 Crore',
    rating: '5-Star Euro NCAP',
    safetyStars: 5,
    engines: ['6.0L Twin-Turbo W12 (659 PS / 900 Nm)'],
    keyHighlights: [
      'Rotating dashboard display shared with the Continental GT',
      'All-wheel drive with active all-wheel steering standard',
      'Available with W12, V8 and plug-in hybrid V6 powertrains globally',
      'Independently reclining rear seats with massage function',
      'Naim for Bentley 2,200-watt, 19-speaker premium sound system',
      'CBU import through Bentley India’s direct-operated dealer network'
    ],
    dimensions: {
      length: '5,316 mm',
      width: '1,997 mm',
      height: '1,485 mm',
      wheelbase: '3,194 mm',
      groundClearance: '128 mm',
      bootSpace: '420 Litres',
      fuelTank: '90 Litres'
    },
    variants: [
      {
        id: 'flying-spur-v8',
        name: 'Flying Spur V8',
        tagline: 'The dynamically sharper, lighter entry into Flying Spur ownership',
        priceRange: '₹4.50 – ₹4.90 Crore',
        baseExShowroom: 45000000,
        engineOptions: ['4.0L Twin-Turbo V8'],
        transmissions: ['8-Speed Dual-Clutch'],
        keyFeatures: [
          'Bentley Rotating Display dashboard',
          'Adaptive air suspension with Bentley Dynamic Ride',
          'All-wheel steering for a tighter turning circle',
          'Diamond-quilted rear seats with individual reclining function',
          'Four-zone climate control standard'
        ],
        exteriorHighlights: ['21-inch alloy wheels', 'Matrix LED headlights', 'Chrome waistline finisher'],
        interiorHighlights: ['Hand-stitched leather cabin', 'Open-pore wood veneer trim', 'Rear illuminated treadplates'],
        badgeColor: 'bg-zinc-700 text-zinc-100'
      },
      {
        id: 'flying-spur-w12',
        name: 'Flying Spur W12',
        tagline: 'The flagship W12 saloon, the most powerful Flying Spur in India',
        priceRange: '₹5.30 – ₹5.50 Crore',
        baseExShowroom: 53000000,
        engineOptions: ['6.0L Twin-Turbo W12'],
        transmissions: ['8-Speed Dual-Clutch'],
        isFlagship: true,
        isPopular: true,
        keyFeatures: [
          'Twin-turbo W12 with near-silent low-RPM refinement',
          'Naim for Bentley 2,200-watt 19-speaker sound system',
          'Massage and ventilated rear Airline Seats',
          'Mulliner personalisation options available',
          'Active all-wheel steering standard'
        ],
        exteriorHighlights: ['22-inch forged wheels', 'Dark-tint matrix LED headlights', 'Mulliner exterior detailing'],
        interiorHighlights: ['Cashmere interior trim option', 'Rear centre console with champagne cooler', 'Illuminated Bentley emblem headrests'],
        badgeColor: 'bg-green-700 text-green-50'
      }
    ],
    colors: [
      { id: 'british-racing-green-spur', name: 'British Racing Green', hex: '#00332f', availableOn: ['Flying Spur V8', 'Flying Spur W12'] },
      { id: 'glacier-white-spur', name: 'Glacier White', hex: '#eef1f2', availableOn: ['Flying Spur V8', 'Flying Spur W12'] },
      { id: 'beluga-black-spur', name: 'Beluga Black', hex: '#0b0b0c', availableOn: ['Flying Spur V8', 'Flying Spur W12'] },
      { id: 'silver-lake-spur', name: 'Silver Lake', hex: '#c0c0c0', availableOn: ['Flying Spur W12'] }
    ]
  }
];

export const BENTLEY_SAFETY_SUITE = [
  {
    title: '5-Star Euro NCAP Across the Range',
    subtitle: 'Continental GT, Bentayga & Flying Spur',
    description: 'Every current Bentley model sold in India carries a 5-Star Euro NCAP rating, built on high-strength steel and aluminum safety-cell architecture developed with Volkswagen Group engineering.',
    metric: '5-Star Full Protection'
  },
  {
    title: 'Bentley Dynamic Ride',
    subtitle: '48-Volt Active Anti-Roll Control',
    description: 'An electromechanical active roll-control system reacts within milliseconds to keep the cabin flat through corners while retaining a supple ride over broken roads.',
    metric: 'Active Roll Stabilisation',
  },
  {
    title: 'Permanent All-Wheel Drive',
    subtitle: 'Standard Across the Range',
    description: 'Electronically controlled all-wheel drive continuously redistributes torque between axles for confident traction in India’s mixed road and weather conditions.',
    metric: 'Torque-Vectoring AWD'
  },
  {
    title: 'High-Strength Safety Cell Construction',
    subtitle: 'Reinforced Passenger Cell',
    description: 'A high-strength steel and aluminum hybrid chassis structure forms a rigid passenger safety cell, standard across every current Bentley model in India.',
    metric: 'Engineering-Led Chassis'
  }
];

export const BENTLEY_ENGINEERING_FEATURES = [
  {
    title: 'Bentley Rotating Display',
    description: 'A three-sided dashboard fascia that rotates between a 12.3-inch touchscreen, analogue dials or a wood veneer panel at the touch of a button.'
  },
  {
    title: 'Bentley Dynamic Ride',
    description: '48-volt electric actuators on each anti-roll bar counteract body roll almost instantly, letting the car stay flat in corners while remaining supple over rough roads.'
  },
  {
    title: 'Bentley Drive Dynamics Selector',
    description: 'A console-mounted rotary selector toggling between Comfort, Bentley, Sport and terrain-specific modes on the Bentayga, instantly retuning throttle response, suspension and steering.'
  },
  {
    title: 'Active All-Wheel Steering',
    description: 'Turns the rear wheels opposite the front at low speed for a tighter turning circle, and in-phase at high speed for extra stability — standard across the current range.'
  },
  {
    title: 'Hand-Crafted Cabin Construction',
    description: 'Each Bentley interior is hand-stitched and veneered at the Crewe factory, with over 20 hours of skilled craftsmanship invested in the leather and wood trim alone.'
  },
  {
    title: 'Twin-Turbo W12 Powertrain',
    description: 'A hand-built 6.0L twin-turbo W12, unique to Bentley among current Volkswagen Group products, delivering effortless torque with near-silent refinement.'
  }
];

export const ALL_BENTLEY_FAQS: FAQItem[] = [
  {
    category: 'Safety',
    question: 'Are Bentley cars sold in India 5-Star crash-test certified?',
    answer: 'Yes. Every current Bentley model in India — the Continental GT, Bentayga and Flying Spur — carries a 5-Star Euro NCAP rating, backed by a high-strength safety cell and Bentley Dynamic Ride active roll control.'
  },
  {
    category: 'Performance',
    question: 'What makes the Continental GT’s W12 engine special?',
    answer: 'The Continental GT’s 6.0L twin-turbo W12 is one of the last engines of its kind in series production, delivering 659 PS and 900 Nm with near-silent refinement at low RPM, then effortless surge as the revs climb — a character no turbocharged V8 rival quite replicates.'
  },
  {
    category: 'Comparison',
    question: 'Should I choose the Continental GT or the Flying Spur?',
    answer: 'The Continental GT is a two-door grand tourer built for driver engagement over long distances. The Flying Spur is the four-door luxury saloon version of the same engineering, prioritising rear-seat comfort — choose based on whether you plan to drive it yourself or be driven.'
  },
  {
    category: 'Maintenance',
    question: 'How is Bentley sold and serviced in India?',
    answer: 'Bentley Motors operates its own direct dealer network in India — showrooms in Mumbai, Delhi-NCR, Bengaluru, Chennai and Hyderabad — separate from the Škoda Auto Volkswagen India (SAVWIPL) network, though it shares logistics and after-sales infrastructure with the wider Volkswagen Group in India.'
  },
  {
    category: 'Performance',
    question: 'Is the Bentayga practical enough to use as a daily-driver SUV in India?',
    answer: 'Yes. The Bentayga offers genuine five-seat practicality, a 484-litre boot and 190 mm of ground clearance, making it noticeably more usable over speed breakers and broken roads than the Continental GT or Flying Spur, while still delivering strong performance.'
  },
  {
    category: 'Performance',
    question: 'What is the real-world fuel efficiency of Bentley’s engines in India?',
    answer: 'The Continental GT’s twin-turbo W12 returns roughly 3.5–4.2 km/l in city traffic and 6–6.8 km/l on the highway. The Bentayga’s twin-turbo V8 is marginally more efficient given its smaller displacement and lighter overall driveline losses.'
  },
  {
    category: 'Comparison',
    question: 'How does the Bentayga compare to the Lamborghini Urus?',
    answer: 'Both share Volkswagen Group platform architecture, but the Bentayga leans into serene, hand-crafted luxury and long-distance comfort, while the Urus prioritises outright pace and a more track-focused character — the Bentayga is the more relaxing daily companion, the Urus the faster point-to-point.'
  },
  {
    category: 'Safety',
    question: 'Does the Flying Spur offer driver-assistance features in India?',
    answer: 'Yes. The Flying Spur offers adaptive cruise control, lane-keeping assistance and a 360-degree parking camera system as part of its standard equipment, alongside Bentley Dynamic Ride and active all-wheel steering across the range.'
  }
];
