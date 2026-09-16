import { HistoryEra } from './historyData';

export const PORSCHE_HISTORY_ERAS: HistoryEra[] = [
  {
    id: 'founding-porsche',
    period: '1931 – 1948',
    title: 'Ferdinand Porsche Opens a Design Office in Stuttgart',
    tagline: 'A consulting engineer’s workshop that first designed cars for everyone else before building one of its own',
    location: 'Stuttgart, Weimar Germany',
    summary:
      'In April 1931, Ferdinand Porsche founded "Dr. Ing. h.c. F. Porsche GmbH," an automotive design and consulting firm in Stuttgart. For nearly two decades the company designed cars for other manufacturers rather than building its own — most famously the original Volkswagen Beetle, commissioned by the German government in the 1930s as a genuinely affordable "people’s car." It was only after the Second World War, in 1948, working from a sawmill in Gmünd, Austria, that Ferdinand’s son Ferry Porsche built the car that would carry the family name for the first time: the Porsche 356.',
    highlights: [
      '1931: Ferdinand Porsche founds his engineering consultancy in Stuttgart',
      '1934: Porsche’s design office is commissioned to develop the original Volkswagen Beetle',
      '1948: The Porsche 356 becomes the first car to bear the Porsche name, hand-built in Gmünd, Austria',
      'The 356’s rear-mounted, air-cooled engine layout borrowed directly from Beetle engineering'
    ],
    keyMilestones: [
      {
        year: '1931',
        title: 'Porsche Design Office Founded',
        description: 'Ferdinand Porsche establishes an independent engineering consultancy in Stuttgart, initially designing cars for other manufacturers.'
      },
      {
        year: '1934',
        title: 'The Volkswagen Commission',
        description: 'Porsche’s office is tasked with designing the "people’s car" that becomes the Volkswagen Beetle, linking the two brands’ engineering DNA from the outset.'
      },
      {
        year: '1948',
        title: 'The Porsche 356 is Born',
        description: 'Ferry Porsche builds the first car to carry the Porsche name, hand-assembled in a converted sawmill in Gmünd, Austria.'
      }
    ],
    innovations: [
      'Rear-mounted, air-cooled engine layout carried over from Beetle engineering into the first Porsche',
      'Lightweight, aerodynamically-shaped bodywork designed for genuine performance on modest power',
      'A dedicated design consultancy model — engineering cars for others before building its own'
    ],
    imageType: 'founding'
  },
  {
    id: 'the-911-and-motorsport',
    period: '1963 – 1998',
    title: 'The 911 Arrives & Le Mans Dominance',
    tagline: 'A rear-engine sports car that never stopped evolving, proven on the world’s toughest endurance circuits',
    location: 'Stuttgart-Zuffenhausen, Germany',
    summary:
      'The Porsche 911 debuted in 1963 as the successor to the 356, keeping its signature rear-engine, rear-wheel-drive layout — a configuration Porsche has refined continuously for over six decades without ever abandoning it. Alongside the 911’s road-going success, Porsche built one of motorsport’s most decorated records: the mid-engine 917 delivered Porsche’s first overall victory at the 24 Hours of Le Mans in 1970, and the 956 and 962 prototypes that followed dominated endurance racing through the 1980s. By the time Porsche’s Le Mans overall win tally passed a dozen, no other manufacturer came close.',
    highlights: [
      '1963: The original Porsche 911 debuts at the Frankfurt Motor Show',
      '1970: The Porsche 917 delivers Porsche’s first overall win at the 24 Hours of Le Mans',
      '1982–1987: The 956 and 962 prototypes dominate Group C endurance racing worldwide',
      'The 911’s rear-engine layout has remained fundamentally unchanged across eight generations'
    ],
    keyMilestones: [
      {
        year: '1963',
        title: 'The Original 911 Debuts',
        description: 'Porsche unveils the 911 as the 356’s successor, establishing the rear-engine flat-six formula still used today.'
      },
      {
        year: '1970',
        title: 'First Overall Le Mans Victory',
        description: 'The Porsche 917 wins the 24 Hours of Le Mans outright, launching a motorsport legacy unmatched by any other manufacturer.'
      },
      {
        year: '1987',
        title: 'Group C Prototype Dominance',
        description: 'The 956 and 962 prototypes complete years of near-total dominance in endurance racing, cementing Porsche’s motorsport reputation.'
      }
    ],
    innovations: [
      'Rear-engine, rear-wheel-drive packaging refined continuously since 1963 rather than replaced',
      'Aerodynamic ground-effect underbody engineering pioneered on the 917 and 956/962 prototypes',
      'Motorsport-derived flat-engine cooling and lubrication systems feeding directly back into road cars'
    ],
    imageType: 'winged-arrow'
  },
  {
    id: 'volkswagen-group-crossholding',
    period: '2002 – 2012',
    title: 'The Cayenne, Financial Rescue & the Volkswagen Group Union',
    tagline: 'An SUV that funded the sports cars, and a decade-long ownership saga that folded two rivals into one group',
    location: 'Stuttgart & Wolfsburg, Germany',
    summary:
      'The 2002 launch of the Cayenne — Porsche’s first SUV, developed jointly with Volkswagen’s Touareg — was controversial among purists but became the single most important financial decision in the company’s history, generating the profits that funded generations of 911 and 718 development. Through the 2000s, Porsche SE built a majority stake in Volkswagen AG, attempting a full takeover; instead, the 2008 financial crisis reversed Porsche’s fortunes, and by 2012 Volkswagen Group acquired 100% of Porsche AG’s sports-car business. The result is a genuinely unusual cross-holding structure: Porsche SE (the Porsche and Piech families’ holding company) holds a majority of Volkswagen AG’s voting shares, while Volkswagen Group in turn owns Porsche AG, the company that makes the cars.',
    highlights: [
      '2002: The Porsche Cayenne launches, sharing its platform with the Volkswagen Touareg',
      '2005–2008: Porsche SE builds a majority stake in Volkswagen AG',
      '2012: Volkswagen Group completes full acquisition of Porsche AG’s sports-car business',
      'The Cayenne’s profits are widely credited with funding subsequent 911 and 718 development'
    ],
    keyMilestones: [
      {
        year: '2002',
        title: 'The Cayenne Launches',
        description: 'Porsche’s first SUV, co-developed with the Volkswagen Touareg, becomes the company’s best-selling and most profitable model.'
      },
      {
        year: '2008',
        title: 'The Financial Crisis Reverses Course',
        description: 'Porsche’s attempted takeover of Volkswagen unravels amid the global financial crisis, leaving Porsche financially exposed.'
      },
      {
        year: '2012',
        title: 'Volkswagen Group Acquires Porsche AG',
        description: 'Volkswagen Group completes full ownership of Porsche AG, while Porsche SE retains a majority voting stake in Volkswagen AG itself — a cross-holding structure unique in the industry.'
      }
    ],
    innovations: [
      'Shared SUV platform engineering between the Cayenne and Volkswagen Touareg, later extended to the Audi Q7',
      'Porsche Active Suspension Management (PASM) first developed for the Cayenne, later spread across the range',
      'Group-wide platform sharing that funds Porsche’s low-volume sports-car development through higher-volume SUVs'
    ],
    imageType: 'vw-merger'
  },
  {
    id: 'porsche-india-modern-era',
    period: '2004 – Present',
    title: 'Porsche India & the Direct-Import Era',
    tagline: 'A standalone dealer network built outside the SAVWIPL structure, selling fully-imported cars to Indian enthusiasts',
    location: 'Mumbai & Gurugram, India',
    summary:
      'Porsche entered India in 2004 and has operated as a direct market ever since — a structure deliberately kept separate from Škoda Auto Volkswagen India Pvt. Ltd. (SAVWIPL), the entity that manufactures Škoda and Volkswagen models locally. Every Porsche sold in India, from the Macan to the 911, arrives as a Completely Built Unit (CBU) import rather than being manufactured domestically, reflecting the brand’s low-volume, high-touch positioning. Porsche India runs its business through Porsche Centres in Mumbai, Delhi-NCR, Bengaluru, Ahmedabad, Chennai, Hyderabad, and Pune, alongside Porsche Experience programs and driving academies that lean into the brand’s motorsport heritage rather than mass-market volume.',
    highlights: [
      '2004: Porsche establishes direct market operations in India',
      'Every current Porsche in India — 911, 718, Macan, Cayenne, Panamera — arrives as a CBU import',
      'Porsche Centres operate in Mumbai, Delhi-NCR, Bengaluru, Ahmedabad, Chennai, Hyderabad & Pune',
      'Porsche India operates independently of the SAVWIPL manufacturing entity used by Škoda and Volkswagen'
    ],
    keyMilestones: [
      {
        year: '2004',
        title: 'Porsche Launches in India',
        description: 'Porsche AG establishes direct market operations in India, distinct from the Škoda/Volkswagen manufacturing structure.'
      },
      {
        year: '2012',
        title: 'The Volkswagen Group Union Reaches India',
        description: 'Porsche formally becomes part of the Volkswagen Group globally, though its Indian retail operations remain a separate, direct-import business.'
      },
      {
        year: 'Today',
        title: 'A Full CBU Import Lineup',
        description: 'Porsche India’s range spans the 718 Cayman and 911 sports cars to the Macan, Cayenne and Panamera, all imported fully built rather than assembled locally.'
      }
    ],
    innovations: [
      'A dedicated, standalone Porsche Centre retail network separate from the Škoda/Volkswagen dealer structure',
      'Fully CBU import model preserving global-spec build quality rather than local CKD assembly',
      'Porsche Experience and driving-academy programs bringing motorsport-derived car control training to Indian owners'
    ],
    imageType: 'india-2-0'
  }
];

export interface PorscheHeritageElement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  visualDetail: string;
}

export const PORSCHE_HERITAGE_ELEMENTS: PorscheHeritageElement[] = [
  {
    id: 'rear-engine-formula',
    title: 'The Rear-Engine 911 Formula',
    subtitle: 'A layout Porsche has refined for over six decades rather than replaced',
    description:
      'Since 1963, every 911 has kept its engine mounted behind the rear axle — a configuration most rivals abandoned decades ago for being harder to master. Porsche instead spent generations refining the layout with wider rear tracks, adaptive dampers and rear-axle steering, turning a supposed handling quirk into the car’s defining character.',
    icon: 'Cog',
    visualDetail: 'Rear-mounted, twin-turbocharged flat-6 unchanged in concept across eight 911 generations.'
  },
  {
    id: 'le-mans-motorsport-dna',
    title: 'Le Mans & Endurance Racing DNA',
    subtitle: 'From the 917’s first overall win in 1970 to the 956/962’s Group C dominance',
    description:
      'Few manufacturers can claim a motorsport record like Porsche’s at the 24 Hours of Le Mans. Technology proven on the track — aerodynamic ground effects, motorsport-tuned dual-clutch transmissions, and track-honed suspension geometry — filters directly into road cars like the GT3 and Turbo S.',
    icon: 'Flag',
    visualDetail: 'PDK dual-clutch technology, first developed for motorsport, now standard across the road-going range.'
  },
  {
    id: 'cross-holding-group-union',
    title: 'The Volkswagen Group Cross-Holding',
    subtitle: 'Porsche SE holds Volkswagen AG, and Volkswagen Group owns Porsche AG',
    description:
      'Since 2012, Porsche has sat inside a genuinely unusual ownership structure: Porsche SE (the Porsche and Piech families’ holding company) is Volkswagen AG’s largest voting shareholder, while Volkswagen Group itself owns Porsche AG, the company that actually builds the cars — a mutual relationship unmatched elsewhere in the industry.',
    icon: 'Globe2',
    visualDetail: 'Shared Group platforms (PPE, MLB Evo) underpin the Macan, Cayenne and Panamera alongside Audi and Bentley siblings.'
  },
  {
    id: 'direct-import-india',
    title: 'Direct-Import Retail in India',
    subtitle: 'A standalone Porsche Centre network, kept separate from SAVWIPL',
    description:
      'Unlike Škoda and Volkswagen, whose India-spec cars roll off Maharashtra assembly lines, every Porsche sold in India arrives as a fully-built CBU import. Porsche India runs its own Porsche Centres and Experience Centres in Mumbai and Gurugram, preserving global-spec build quality for a deliberately low-volume, high-touch market position.',
    icon: 'Factory',
    visualDetail: 'Porsche Centres across Mumbai, Delhi-NCR, Bengaluru, Ahmedabad, Chennai, Hyderabad & Pune — all CBU import.'
  }
];
