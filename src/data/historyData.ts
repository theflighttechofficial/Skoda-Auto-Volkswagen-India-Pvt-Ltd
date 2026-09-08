export interface HistoryEra {
  id: string;
  period: string;
  title: string;
  tagline: string;
  location: string;
  summary: string;
  highlights: string[];
  keyMilestones: {
    year: string;
    title: string;
    description: string;
  }[];
  innovations: string[];
  imageType: 'founding' | 'voiturette' | 'winged-arrow' | 'classic-popular' | 'octavia-1959' | 'vw-merger' | 'india-arrival' | 'india-2-0';
}

export const SKODA_HISTORY_ERAS: HistoryEra[] = [
  {
    id: 'founding',
    period: '1895 – 1904',
    title: 'The Spark in Mladá Boleslav: Slavia Bicycles & Motorbikes',
    tagline: 'Born from Bohemian determination and passion for mobility',
    location: 'Mladá Boleslav, Kingdom of Bohemia (now Czech Republic)',
    summary:
      'In December 1895, bookseller Václav Klement and locksmith Václav Laurin opened a small bicycle repair and manufacturing workshop in Mladá Boleslav. Fueled by patriotic pride in Bohemia, they named their bicycles "Slavia" (celebrating Slavic heritage). Within four years, they pioneered engine placement within the bicycle frame, creating Europe\'s first widely admired production motorcycles.',
    highlights: [
      'December 1895: Václav Laurin & Václav Klement establish workshop in Mladá Boleslav',
      'Slavia brand name adopted for Czech bicycles with reinforced frames',
      '1899: First motorcycle (Motocyclette) with engine mounted in the lower frame',
      '1902: European racing triumph at Paris-Vienna endurance rally'
    ],
    keyMilestones: [
      {
        year: '1895',
        title: 'Founding of Laurin & Klement',
        description: 'Václav Laurin and Václav Klement begin manufacturing and repairing Slavia bicycles in Mladá Boleslav.'
      },
      {
        year: '1899',
        title: 'First Slavia Motorcycle',
        description: 'Laurin & Klement introduce motorbikes with engine inside the frame and handlebar throttle control—a global mechanical first.'
      },
      {
        year: '1902',
        title: 'Motorsport Dominance',
        description: 'Count Alexander Kolowrat-Krakowsky and factory racers dominate Austro-Hungarian and French hillclimb races.'
      }
    ],
    innovations: [
      'Lower-chassis engine mounting geometry (standardized global motorcycle architecture)',
      'Twist-grip handlebar throttle and advanced magneto ignition',
      'Bohemian steel frame welding techniques'
    ],
    imageType: 'founding'
  },
  {
    id: 'voiturette',
    period: '1905 – 1924',
    title: 'The First Automobile: Voiturette A & Industrial Expansion',
    tagline: 'Automotive pioneer of Central Europe',
    location: 'Mladá Boleslav, Austro-Hungarian Empire',
    summary:
      'In 1905, Laurin & Klement unveiled their first automobile: the legendary Voiturette A. Powered by a 1.0-liter, water-cooled 7-horsepower V-twin engine, it hit a top speed of 45 km/h. It proved to be a sensational commercial triumph across Austria-Hungary, Germany, and the UK, establishing Mladá Boleslav as one of Europe’s premier automotive epicenters.',
    highlights: [
      '1905: Debut of Voiturette A with 1,005 cc V-twin water-cooled engine',
      'Exported across Europe, Russia, South America, and Japan',
      'Production grew from artisan assembly to industrialized factory lines',
      'Manufactured high-end Type F, Type S, and commercial municipal utility vehicles'
    ],
    keyMilestones: [
      {
        year: '1905',
        title: 'Voiturette Type A Unveiled',
        description: 'Declared a masterpiece of Bohemian automotive engineering, offering reliability, easy repairability, and high ground clearance.'
      },
      {
        year: '1907',
        title: 'Joint Stock Transformation',
        description: 'L&K became the largest automotive manufacturer in the Austro-Hungarian Empire, employing over 600 skilled Czech artisans.'
      },
      {
        year: '1912',
        title: 'Acquisition of RAF Reichenberg',
        description: 'Expanded commercial utility vehicle, bus, and stationary engine production.'
      }
    ],
    innovations: [
      'Unitized water radiator with integrated thermo-siphon cooling',
      'Heavy-duty leaf spring suspension tuned for rugged Bohemian roads',
      'Multi-cylinder in-line engines with overhead valves'
    ],
    imageType: 'voiturette'
  },
  {
    id: 'winged-arrow',
    period: '1925 – 1945',
    title: 'Merger with Škoda Works & Birth of the Winged Arrow',
    tagline: 'The Golden Interwar Era of Popular, Rapid & Superb',
    location: 'Plzeň & Mladá Boleslav, Czechoslovakia',
    summary:
      'In 1925, Laurin & Klement merged with industrial titan Škoda Works in Plzeň (founded in 1869 by engineer Emil Škoda). The merger gave birth to the iconic "Winged Arrow" emblem—a symbol of global vision, speed, and precision. In the 1930s, Škoda introduced revolutionary tubular backbone chassis architecture and launched the legendary triad: Popular, Rapid, and the first 6-cylinder luxury Superb.',
    highlights: [
      '1925: Strategic merger creating Škoda Auto',
      'Birth of the Winged Arrow logo (registered in Plzeň in 1923)',
      'Tubular backbone chassis with independent all-round swing-axle suspension',
      '1934: Introduction of the original Škoda Superb luxury flagship limousine',
      '1936: Škoda Popular takes silver at the prestigious Rallye Monte Carlo'
    ],
    keyMilestones: [
      {
        year: '1925',
        title: 'Emil Škoda Industrial Merger',
        description: 'Combined cutting-edge automotive design with world-class metallurgic and forging expertise from Plzeň.'
      },
      {
        year: '1934',
        title: 'Birth of the Superb & Popular',
        description: 'The Popular mobilized Czechoslovakia, while the 2.5L 6-cylinder Superb defined presidential luxury.'
      },
      {
        year: '1936',
        title: 'Monte Carlo Rally Glory',
        description: 'Zdeněk Pohl and Jaroslav Hausman drove the Škoda Popular Sport to 2nd place in class at Rallye Monte Carlo.'
      }
    ],
    innovations: [
      'Central tubular backbone chassis (dramatically stiffer and lighter than ladder frames)',
      'Independent four-wheel suspension',
      'Advanced OHV engine blocks with hemispherical combustion chambers'
    ],
    imageType: 'winged-arrow'
  },
  {
    id: 'postwar',
    period: '1946 – 1990',
    title: 'Cold War Resilience: The Original Octavia, Felicia & 1000 MB',
    tagline: 'Defying the Iron Curtain through ingenious Czech engineering',
    location: 'Mladá Boleslav & Kvasiny, Czechoslovakia',
    summary:
      'Following World War II and nationalization under AZNP, Czech engineers continued innovating against all odds. In 1959, Škoda introduced the original Octavia (named after the Latin word octavus—being the eighth model series produced post-war), followed by the breathtaking Felicia roadster. In 1964, the 1000 MB debuted with a global manufacturing first: a high-pressure die-cast aluminum engine block.',
    highlights: [
      '1959: Launch of the legendary original Škoda Octavia and Felicia convertible',
      '1964: Škoda 1000 MB debuts with world-first pressure die-cast aluminum engine block',
      '1970–1980s: Rally dominance with the Škoda 130 RS coupe (the "Porsche of the East")',
      '1987: Launch of Škoda Favorit, styled by Nuccio Bertone, modern front-wheel drive'
    ],
    keyMilestones: [
      {
        year: '1959',
        title: 'Original Octavia & Felicia',
        description: 'The 1959 Octavia featured coil-spring front suspension and spacious 2-door/estate bodywork, exported to over 80 countries.'
      },
      {
        year: '1964',
        title: '1000 MB & Die-Cast Aluminum Revolution',
        description: 'Škoda constructed a brand-new 80-hectare modern factory in Mladá Boleslav; patented European aluminum casting technology.'
      },
      {
        year: '1987',
        title: 'The Bertone Favorit',
        description: 'Front-wheel drive hatchback designed by Bertone of Turin, boasting Porsche-collaborated engine mounting and suspension tuning.'
      }
    ],
    innovations: [
      'World-first high-pressure aluminum die-cast engine crankcases',
      'Coil spring suspension with telescopic shock absorbers',
      'Bertone aerodynamic wedge silhouette and modular interior utility'
    ],
    imageType: 'octavia-1959'
  },
  {
    id: 'vw-merger',
    period: '1991 – 2000',
    title: 'The Historic Union: Joining the Volkswagen Group',
    tagline: 'Czech craftsmanship marries German precision engineering',
    location: 'Wolfsburg, Germany & Mladá Boleslav, Czech Republic',
    summary:
      'Following the Velvet Revolution of 1989, the Czechoslovak government sought a strategic global partner. On April 16, 1991, Škoda Auto officially joined the Volkswagen Group as its fourth pillar (joining VW, Audi, and SEAT). Volkswagen recognized Škoda’s 96-year engineering heritage and invested billions in new factories, robotic assembly, and advanced metallurgy. The 1996 modern Octavia became an international sensation.',
    highlights: [
      'April 16, 1991: Škoda officially becomes part of Volkswagen Group',
      'Massive modernization of Mladá Boleslav, Kvasiny, and Vrchlabí plants',
      '1996: Modern Octavia launched on VW Group PQ34 platform, setting new build quality benchmarks',
      '1999: Launch of the Škoda Fabia, debuting the advanced VW Group A04 platform',
      'Transformation into one of Europe’s most profitable and respected automotive brands'
    ],
    keyMilestones: [
      {
        year: '1991',
        title: 'Agreement with Volkswagen AG',
        description: 'Carl Hahn and the Czech Government sign the historic joint venture, preserving Czech identity while infusing German engineering.'
      },
      {
        year: '1996',
        title: 'Birth of Modern Octavia',
        description: 'Unveiled by Czech President Václav Havel, the modern Octavia offered class-above boot space and German build quality at accessible pricing.'
      },
      {
        year: '2000',
        title: '100% Volkswagen Group Ownership',
        description: 'Volkswagen AG acquired the remaining shares, making Škoda an integral pillar of global corporate strategy.'
      }
    ],
    innovations: [
      'MQB/PQ platform sharing architecture',
      'Direct-injection Turbo Diesel (TDI) and Turbo Petrol (TSI) powertrains',
      'Robotic laser-welded body shell rigidity'
    ],
    imageType: 'vw-merger'
  },
  {
    id: 'india-arrival',
    period: '2001 – 2017',
    title: 'The Indian Revolution: Introducing Solid European Engineering',
    tagline: 'Redefining luxury, safety, and performance on Indian roads',
    location: 'Aurangabad & Mumbai, India',
    summary:
      'In November 2001, Škoda made its monumental entry into India with the first-generation Octavia 1.9 TDI and 1.8 Turbo, assembled at Aurangabad, Maharashtra. It completely disrupted the Indian market, showing motorists what genuine European "thunk" door solidity, laser-welded safety, and effortless highway cruising felt like. India fell in love with Škoda, sparking an enduring enthusiast culture with the Laura, Superb, Yeti, and Rapid.',
    highlights: [
      '2001: Škoda Auto India established with assembly plant in Shendra, Aurangabad',
      'The Octavia 1.9 TDI becomes a cult legend for bulletproof 300,000+ km longevity and 20+ km/l efficiency',
      '2004: Launch of the flagship Superb with limousine legroom',
      '2005: Octavia vRS introduced, establishing the performance sedan benchmark in India',
      '2010: Škoda Yeti 4x4 pioneers the true compact European 4WD off-road segment'
    ],
    keyMilestones: [
      {
        year: '2001',
        title: 'Octavia Launches in India',
        description: 'The first European car with galvanized steel body, ABS, airbags, and legendary 1.9 TDI diesel torque.'
      },
      {
        year: '2005',
        title: 'First Octavia vRS in India',
        description: '1.8L Turbo Petrol with 150 bhp and manual gearbox sparks India’s performance car tuning revolution.'
      },
      {
        year: '2011',
        title: 'Škoda Rapid & Chakan Production',
        description: 'Local assembly expands, providing Indian families with accessible European dynamics.'
      }
    ],
    innovations: [
      '100% galvanized high-strength steel body panels in Indian climate',
      'TDI Pumpe-Düse & Common-Rail ultra-efficient diesel injection',
      'Electronic Stability Program (ESP) as a standard safety consideration'
    ],
    imageType: 'india-arrival'
  },
  {
    id: 'india-2-0',
    period: '2018 – Present',
    title: 'SAVWIPL & India 2.0: The 5-Star Safety Era',
    tagline: 'Leading the Volkswagen Group in India with 100% 5-Star Safety',
    location: 'Chakan (Pune) & Aurangabad, India',
    summary:
      'In 2018, the Volkswagen Group entrusted Škoda Auto to lead its ambitious €1 Billion "India 2.0" investment project. The group merged entities to form Škoda Auto Volkswagen India Pvt. Ltd. (SAVWIPL). Developing the localized MQB-A0-IN platform with up to 95% localization, SAVWIPL launched the Kushaq (2021), Slavia (2022), and Kylaq (2024–2025). Every single model scored 5-Star crash safety in both Global NCAP and Bharat NCAP, making Škoda the only automaker in India with a 100% 5-star crash-rated lineup.',
    highlights: [
      '€1 Billion+ investment in Chakan Pune manufacturing facility and Technology Center',
      'Localization of the state-of-the-art MQB-A0-IN platform',
      '100% 5-Star Adult and Child Occupant protection across Kushaq, Slavia, and Kylaq',
      'India becomes Škoda’s largest market outside of Europe',
      'Exporting "Made in India" vehicles to Gulf countries, Vietnam, and Latin America'
    ],
    keyMilestones: [
      {
        year: '2021',
        title: 'Kushaq & India 2.0 Launch',
        description: 'World premiere of the Kushaq SUV, engineered specifically for Indian road conditions and weather extremes.'
      },
      {
        year: '2022',
        title: 'Slavia Sedan & Historic 5-Star Score',
        description: 'Slavia scores highest-ever safety points in Global NCAP history for Indian sedans.'
      },
      {
        year: '2024–2025',
        title: 'Kylaq & Bharat NCAP 5 Stars',
        description: 'Launch of the sub-4m Kylaq SUV, sweeping 5 stars in Bharat NCAP and bringing TSI engineering to the masses.'
      }
    ],
    innovations: [
      'MQB-A0-IN tailored platform architecture with hot-formed ultra-high-strength boron steel',
      '1.0 TSI and 1.5 TSI EVO with Active Cylinder Technology (ACT)',
      'Sub-zero to 50°C climatic cabin air conditioning engineering for India'
    ],
    imageType: 'india-2-0'
  }
];

export interface CzechHeritageElement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  visualDetail: string;
}

export const CZECH_HERITAGE_ELEMENTS: CzechHeritageElement[] = [
  {
    id: 'bohemian-crystal',
    title: 'Bohemian Crystal Glassmaking',
    subtitle: 'Century-old artisan glasscraft reflected in sharp LED illumination',
    description:
      'Northern Bohemia has been the world center of handcrafted cut crystal glass since the 16th century. Škoda designers draw direct inspiration from these crystalline facets to craft modern Full LED Matrix headlights, dynamic taillights with razor-sharp refractive patterns, and crystalline interior ambient light bars.',
    icon: 'Sparkles',
    visualDetail: 'Refractive geometric lines, razor-sharp facets, and multi-faceted light clusters.'
  },
  {
    id: 'czech-cubism',
    title: 'Czech Cubist Architecture',
    subtitle: 'The sharp, geometric crease lines of Prague’s avant-garde movement',
    description:
      'Prague is the only city in the world where Cubism transcended painting and entered architecture. Buildings like the House of the Black Madonna feature sharp, dynamic angular planes. Look at the bonnet crease lines, the hexagonal grille, and the tornado character lines on the Slavia and Octavia—pure Czech Cubist sculpture in steel.',
    icon: 'Triangle',
    visualDetail: 'Distinctive bonnet power bulges, hexagonal butterfly grilles, and razor-sharp shoulder lines.'
  },
  {
    id: 'winged-arrow',
    title: 'The Winged Arrow Symbol',
    subtitle: 'Registered in Plzeň in 1923: speed, vision, and technical progress',
    description:
      'The Škoda emblem is one of the most recognized marks in industrial design. The outer circle represents global wholeness and world reach; the sweeping wing stands for technical progress and boundless freedom; the forward arrow represents speed and precision; and the stylized eye symbolizes technological foresight.',
    icon: 'Compass',
    visualDetail: 'Emerald Green & Electric Green corporate tones, embodying sustainable mobility and forward momentum.'
  },
  {
    id: 'simply-clever',
    title: 'Simply Clever Czech Ingenuity',
    subtitle: 'Pragmatic human-centered solutions born from everyday Czech practicality',
    description:
      'Czech culture values practical, unpretentious ingenuity (šikovnost). Škoda turned this into an automotive philosophy with over 45 patented "Simply Clever" details: umbrella storage channels with drainage inside doors, ticket clips on windshield pillars, funnel washer fluid caps, and integrated ice scrapers in the fuel cap.',
    icon: 'Lightbulb',
    visualDetail: 'Smart boot hooks, smartphone seatback pockets, door umbrellas, and glovebox chillers.'
  }
];
