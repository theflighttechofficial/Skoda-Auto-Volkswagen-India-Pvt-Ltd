import { HistoryEra } from './historyData';

export const VOLKSWAGEN_HISTORY_ERAS: HistoryEra[] = [
  {
    id: 'founding-vw',
    period: '1937 – 1948',
    title: 'The Genesis of the "People’s Car" & Wolfsburg Plant',
    tagline: 'Engineered by Ferdinand Porsche, reborn through British Major Ivan Hirst',
    location: 'Wolfsburg, Lower Saxony, Germany',
    summary:
      'In 1937, the concept of a durable, affordable family car was born. Commissioned to automotive engineering pioneer Ferdinand Porsche, the original rear-engine, air-cooled boxer design became the iconic "KdF-Wagen" (later celebrated worldwide as the Beetle / Käfer). In 1938, the Wolfsburg manufacturing facility—now the largest automotive plant under one roof in the world—was established. Following WWII, British Army Major Ivan Hirst revitalized the bombed facility, securing an order for 20,000 cars that saved the brand and launched post-war German automotive revival.',
    highlights: [
      '1937: Founding of the company to produce an accessible family motorcar',
      'Air-cooled rear-mounted boxer engine design by Ferdinand Porsche',
      '1938: Construction of Wolfsburg factory on the Mittelland Canal',
      '1945–1948: British Major Ivan Hirst restarts Beetle production, exporting 56,000+ units'
    ],
    keyMilestones: [
      {
        year: '1937',
        title: 'Gesellschaft zur Vorbereitung des Volkswagens',
        description: 'Initial company established to engineer an aerodynamic, reliable family vehicle.'
      },
      {
        year: '1938',
        title: 'Cornerstone Laid in Wolfsburg',
        description: 'Construction of the sprawling Wolfsburg industrial headquarters begins.'
      },
      {
        year: '1945',
        title: 'Post-War Salvation',
        description: 'Major Ivan Hirst demonstrates the vehicle\'s robustness to the British military, initiating civilian mass production.'
      }
    ],
    innovations: [
      'Torsional tube chassis with flat aerodynamic floorpan',
      'Air-cooled rear boxer engine immune to radiator freezing or boiling',
      'Torsion-bar independent suspension geometry'
    ],
    imageType: 'founding'
  },
  {
    id: 'beetle-transporter-vw',
    period: '1949 – 1969',
    title: 'The Global Phenomenon: Beetle & Bulli Transporter',
    tagline: 'Conquering the globe and surpassing the Ford Model T production record',
    location: 'Wolfsburg, Germany & Global Export Hubs',
    summary:
      'Under the leadership of Heinrich Nordhoff, Volkswagen transformed into an international export powerhouse. The Beetle (Type 1) became a symbol of post-war prosperity and counter-culture freedom worldwide. In 1950, the Type 2 Transporter (beloved as the "Bulli", "Kombi", or "Microbus") was introduced, inventing the modern commercial van and camper. By 1972, the Beetle surpassed the Ford Model T to become the world’s most-produced single car design, eventually crossing 21.5 million units.',
    highlights: [
      '1950: Launch of the iconic Type 2 Transporter (Bulli / Kombi)',
      '1955: One-millionth Volkswagen rolls off the Wolfsburg assembly line',
      '1960: Denationalization as Volkswagen AG (Aktiengesellschaft)',
      '1972: Beetle breaks world production record with 15,007,034 vehicles'
    ],
    keyMilestones: [
      {
        year: '1950',
        title: 'The Type 2 "Bulli" Debuts',
        description: 'Conceived from a sketch by Dutch importer Ben Pon, creating the multi-purpose microbus.'
      },
      {
        year: '1955',
        title: '1 Million Cars Manufactured',
        description: 'Celebrated with a gold-plated, jewel-encrusted Beetle in Wolfsburg.'
      },
      {
        year: '1972',
        title: 'World Record Holder',
        description: 'Beetle officially surpasses Henry Ford\'s Model T as the best-selling car in human history.'
      }
    ],
    innovations: [
      'Industrial-scale unitized stamping and automated assembly lines',
      'Legendary "Think Small" advertising campaign revolutionizing consumer marketing',
      'Universal modular chassis adapted for vans, pickups, and campers'
    ],
    imageType: 'classic-popular'
  },
  {
    id: 'golf-gti-revolution',
    period: '1974 – 1983',
    title: 'The Golf Revolution & Invention of the "Hot Hatch"',
    tagline: 'Giugiaro origami design, front-wheel drive, and the birth of GTI in 1976',
    location: 'Wolfsburg, Germany',
    summary:
      'Facing the obsolescence of the rear-engine Beetle, Volkswagen executed the most audacious engineering pivot in automotive history. Partnering with Italian master designer Giorgetto Giugiaro, Volkswagen unveiled the 1974 Golf Mk1: water-cooled, transverse front engine, front-wheel drive, and sharp hatchback practicality. Two years later in 1976, Volkswagen engineers secretly developed the Golf GTI (Gran Turismo Injection)—producing 110 PS, reaching 182 km/h, and creating the worldwide "hot hatch" phenomenon.',
    highlights: [
      '1974: Golf Mk1 launched, defining the modern compact hatchback segment',
      '1975: Introduction of the supermini Polo Mk1',
      '1976: Launch of Golf GTI with fuel injection, Clark plaid seats, and golf ball gear knob',
      '1979: Golf Cabriolet and Jetta notchback sedan expand the platform'
    ],
    keyMilestones: [
      {
        year: '1974',
        title: 'Golf Mk1 Launch',
        description: 'Giorgetto Giugiaro\'s geometric design sets the template for modern passenger cars.'
      },
      {
        year: '1976',
        title: 'Birth of the GTI Legend',
        description: 'Engineers Anton Konrad and Alfons Löwenberg create the first high-performance everyday hatchback.'
      },
      {
        year: '1979',
        title: 'Jetta Sedan Introduced',
        description: 'Spawns the classic compact sedan lineage leading to today\'s Virtus.'
      }
    ],
    innovations: [
      'Transverse front-wheel-drive powertrain packaging maximizing interior space',
      'Bosch K-Jetronic mechanical fuel injection in production compact cars',
      'MacPherson strut front suspension with torsion beam rear axle'
    ],
    imageType: 'octavia-1959'
  },
  {
    id: 'engineering-multibrand-piech',
    period: '1984 – 2006',
    title: 'Ferdinand Piëch Era: Engineering Supremacy & Group Growth',
    tagline: 'VR6, W12, laser welding, and assembling the world’s greatest automotive group',
    location: 'Wolfsburg & Ingolstadt, Germany',
    summary:
      'Under legendary automotive genius Ferdinand Piëch, Volkswagen pursued unmatched engineering obsession. Piëch introduced fully galvanized corrosion-resistant body shells, tight 3mm panel shutlines, robotic laser welding, and exotic multi-cylinder engineering (narrow-angle VR6, W8, W12, and the quad-turbo W16). During this golden era, Volkswagen acquired and revitalized Škoda, SEAT, Bentley, Bugatti, and Lamborghini, building the Volkswagen Group into the undisputed titan of European manufacturing.',
    highlights: [
      '1991: Groundbreaking VR6 compact six-cylinder engine introduced in Golf and Passat',
      '1991–2000: Integration of Škoda Auto, SEAT, Bentley, Bugatti, and Lamborghini',
      '1997: Golf Mk4 debuts luxury-grade interior plastics and laser-welded roof technology',
      '2002: Phaeton luxury saloon and Touareg V10 TDI showcase unmatched engineering capability'
    ],
    keyMilestones: [
      {
        year: '1991',
        title: 'Acquisition of Škoda & SEAT',
        description: 'Forges the synergy that powers today’s global automotive engineering excellence.'
      },
      {
        year: '1998',
        title: 'Revival of Bentley & Bugatti',
        description: 'Volkswagen engineering culminates in the 1001-PS Bugatti Veyron project.'
      },
      {
        year: '2003',
        title: 'First Direct-Shift Dual-Clutch DSG',
        description: 'Golf R32 debuts the world\'s first production dual-clutch transmission.'
      }
    ],
    innovations: [
      'DSG (Direct-Shift Gearbox) dual-clutch transmission with sub-50ms gear shifts',
      'Galvanized steel bodies with 12-year anti-perforation rust warranties',
      'TDI Direct-Injection diesel engines with unit injectors and common-rail'
    ],
    imageType: 'vw-merger'
  },
  {
    id: 'india-arrival-chakan-polo',
    period: '2007 – 2017',
    title: 'Arrival in India: Chakan Mega Plant & The Cult Polo',
    tagline: 'Bringing German build quality, the "German Thud", and the iconic Polo GT TSI to India',
    location: 'Chakan, Pune, Maharashtra, India',
    summary:
      'Volkswagen officially entered the Indian passenger car market in 2007 with the executive Passat, followed by the Jetta. In 2009–2010, Volkswagen inaugurated its state-of-the-art ₹3,800 Crore greenfield manufacturing facility in Chakan, Pune. That same year saw the launch of the iconic Volkswagen Polo and Vento sedan. In 2013, the Polo GT TSI arrived—introducing direct-injection turbocharging and 7-speed DSG gearboxes to Indian car lovers and spawning a passionate, enduring tuner cult.',
    highlights: [
      '2007: Volkswagen Passenger Cars India enters market with Passat sedan',
      '2009–2010: World-class Chakan (Pune) manufacturing plant inaugurated with 200,000 unit capacity',
      '2010: Launch of the legendary Volkswagen Polo and Vento in India',
      '2013: Polo GT TSI launched, igniting the hot-hatch movement in India'
    ],
    keyMilestones: [
      {
        year: '2007',
        title: 'Passat Launch in India',
        description: 'Introduces Indian executives to 2.0 TDI efficiency and DSG luxury.'
      },
      {
        year: '2010',
        title: 'Chakan Plant Opens',
        description: 'One of the most modern manufacturing facilities in Asia-Pacific with robotic laser welding.'
      },
      {
        year: '2013',
        title: 'Polo GT TSI Era Begins',
        description: 'Sets the gold standard for hot hatches in India with 1.2 TSI and 7-Speed DSG.'
      }
    ],
    innovations: [
      'Laser-welded roofs and ultrasonic joint testing brought to Indian mass manufacturing',
      '4-Star Global NCAP safety testing standardized across hatchback lineups',
      'Dual-clutch DSG transmissions introduced to accessible price segments'
    ],
    imageType: 'india-arrival'
  },
  {
    id: 'india-2-0-safety-dominance',
    period: '2018 – Present',
    title: 'India 2.0 Revolution: 5-Star NCAP Record & GT Sport',
    tagline: '€1 Billion investment, MQB-A0-IN platform, Virtus, Taigun, and unmatched safety scores',
    location: 'Chakan & Aurangabad, India',
    summary:
      'Under the combined Škoda Auto Volkswagen India Pvt. Ltd. (SAVWIPL) banner, the Group invested over €1 Billion (₹8,000+ Crore) into the India 2.0 project. Engineered on the heavily localized (95%) MQB-A0-IN architecture, Volkswagen launched the Taigun SUV in 2021 and the Virtus sedan in 2022. Both vehicles smashed crash-test records, achieving flawless 5-Star ratings for both adult and child protection in Global NCAP and Bharat NCAP. Today, the GT Plus Sport line and upcoming Tayron solidify Volkswagen as India’s benchmark for safety and driving thrills.',
    highlights: [
      '2018: SAVWIPL €1 Billion (₹8,000 Cr) India 2.0 project announced',
      '2021: Taigun SUV launched, winning multiple Car of the Year awards',
      '2022: Virtus sedan launched with segment-leading 521L boot and 150 PS GT TSI',
      '2023–2024: Perfect 5-Star Bharat NCAP scores; launch of GT Plus Sport Black Editions'
    ],
    keyMilestones: [
      {
        year: '2021',
        title: 'Taigun Launch',
        description: 'First Volkswagen model developed under the India 2.0 initiative.'
      },
      {
        year: '2022',
        title: 'Virtus World Premiere in India',
        description: 'Global sedan premiere held in India, exported to 35+ countries worldwide.'
      },
      {
        year: '2024',
        title: 'Highest Safety Score in Indian History',
        description: 'Virtus & Taigun certified 5-Star in Bharat NCAP with full adult and child protection scores.'
      }
    ],
    innovations: [
      'MQB-A0-IN high-tensile crash-resistant architecture tailored for Indian terrain',
      'Active Cylinder Technology (ACT) delivering 20+ km/l on turbocharged performance sedans',
      'VW Play 10.1-inch wireless connected ecosystem with wireless Google & Apple projection'
    ],
    imageType: 'india-2-0'
  }
];

export const VW_HISTORY_ERAS = VOLKSWAGEN_HISTORY_ERAS;

export interface GermanHeritageElement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  visualDetail: string;
}

export const GERMAN_HERITAGE_ELEMENTS: GermanHeritageElement[] = [
  {
    id: 'wolfsburg-autobahn',
    title: 'Autobahn High-Speed Stability',
    subtitle: 'Chassis tuned for unrestricted velocity and laser-precise feedback',
    description:
      'German vehicles are engineered from day one to cruise with effortless stability on Germany’s unrestricted Autobahn network. Every modern Volkswagen features multi-link or stiffened torsion-beam rear geometry, electric power steering with speed-dependent variable weight, and zero float at high velocity.',
    icon: 'Gauge',
    visualDetail: 'Rock-solid straight-line tracking, zero body pitch during high-speed emergency lane changes.'
  },
  {
    id: 'gti-pedigree',
    title: 'GTI & GT Performance Heritage',
    subtitle: 'The 1976 invention that created the global hot-hatch movement',
    description:
      'When Volkswagen engineers covertly created the first Golf GTI in 1976, they ignited an automotive revolution: everyday practicality paired with razor-sharp sports-car dynamics. That same hot-hatch bloodline lives on today in the legendary Golf GTI Mk8 and India’s revered Virtus GT & Taigun GT.',
    icon: 'Flame',
    visualDetail: 'Red grille accent lines, dual chrome exhaust outlets, and sport-bolstered seating.'
  },
  {
    id: 'mqb-architecture',
    title: 'Modularer Querbaukasten (MQB Architecture)',
    subtitle: 'The engineering benchmark that standardized global modular manufacturing',
    description:
      'Pioneered by Volkswagen Group in 2012, MQB unified engine mounting, crash load paths, and electronic architectures across billions of euros in vehicle development. In India, the customized MQB-A0-IN platform delivers European torsional stiffness calibrated for local road topography.',
    icon: 'Layers',
    visualDetail: 'Standardized transverse engine tilt, high crash absorption crumple zones, and stiffened floorpans.'
  },
  {
    id: 'laser-welding-solidity',
    title: 'Laser-Welded Monocoque & "German Thud"',
    subtitle: 'Continuous seamless robotic laser welding for unmatched torsional rigidity',
    description:
      'Unlike spot-welded cars that rely on black plastic mouldings to hide roof joins, Volkswagen uses continuous robotic laser seam welding. The result is seamless body aesthetics, an unyielding passenger cell, and the famous solid sound of a closing door known as the German Thud.',
    icon: 'ShieldCheck',
    visualDetail: 'Clean roofline with no rubber roof ditch mouldings and tank-like door enclosure acoustics.'
  }
];
