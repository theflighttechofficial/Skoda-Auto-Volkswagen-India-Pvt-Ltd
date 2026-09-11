import { HistoryEra } from './historyData';

export const AUDI_HISTORY_ERAS: HistoryEra[] = [
  {
    id: 'founding-audi',
    period: '1899 – 1932',
    title: 'The Birth of a Name: August Horch & the Four Rings',
    tagline: 'A founder’s dispute gave the world a Latin translation and a legendary badge',
    location: 'Zwickau & Chemnitz, Saxony, Germany',
    summary:
      'In 1899, engineer August Horch founded his eponymous car company, Horch & Cie. After a disagreement forced him out of his own company in 1909, Horch started a new venture — but German trademark law barred him from reusing "Horch." A colleague’s son suggested the Latin translation of "horch" ("listen!" in German): "audi." In 1932, amid the Great Depression, Audi merged with Horch, DKW, and Wanderer to form Auto Union, whose four interlocking rings — still Audi’s emblem today — each represented one of the founding companies.',
    highlights: [
      '1899: August Horch founds Horch & Cie. in Zwickau, Saxony',
      '1910: Renamed "Audi" — Latin for "Horch" ("listen!") — after a trademark dispute',
      '1932: Merger of Audi, Horch, DKW & Wanderer forms Auto Union, symbolized by four interlocking rings',
      'Auto Union’s streamlined Silver Arrow Grand Prix cars dominated 1930s European motor racing'
    ],
    keyMilestones: [
      {
        year: '1899',
        title: 'August Horch & Cie. Founded',
        description: 'Engineer August Horch establishes his first automobile manufacturing company in Zwickau.'
      },
      {
        year: '1910',
        title: 'The Audi Name is Born',
        description: 'Barred from using his own surname again, Horch adopts the Latin imperative "Audi" for his new company.'
      },
      {
        year: '1932',
        title: 'Formation of Auto Union',
        description: 'Four Saxon automakers merge into Auto Union, adopting the four-rings emblem that survives to this day.'
      }
    ],
    innovations: [
      'Horch’s early adoption of the shaft drive over the less reliable chain drive',
      'Auto Union’s mid-engine Silver Arrow Grand Prix racers, decades ahead of their time',
      'Streamlined aerodynamic bodywork pioneering principles used in modern automotive design'
    ],
    imageType: 'founding'
  },
  {
    id: 'quattro-revolution',
    period: '1965 – 1980',
    title: 'Joining Volkswagen & the quattro Revolution',
    tagline: 'A snow-bound military test vehicle inspired the system that redefined all-wheel-drive performance',
    location: 'Ingolstadt, Bavaria, Germany',
    summary:
      'Volkswagen acquired Auto Union from Daimler-Benz in 1964–1966, reviving the dormant Audi name for a new generation of cars built at Ingolstadt. In the late 1970s, Audi engineers experimenting with a four-wheel-drive military vehicle (the Iltis) in snowy conditions realized the same principle could transform road car performance. The result, unveiled in 1980, was the Audi Quattro — the first permanent all-wheel-drive system in a mainstream performance car, which went on to dominate Group B rallying and permanently reshape what all-wheel-drive could mean for road cars.',
    highlights: [
      '1965: Volkswagen acquires Auto Union, reviving the Audi brand at Ingolstadt',
      '1969: Auto Union merges with NSU to form Audi NSU Auto Union AG',
      '1980: The original Ur-Quattro debuts with permanent all-wheel drive, inspired by the military Iltis',
      'quattro-equipped Audis won the World Rally Championship in 1982 and 1984'
    ],
    keyMilestones: [
      {
        year: '1965',
        title: 'Volkswagen Acquires Auto Union',
        description: 'Volkswagen purchases Auto Union from Daimler-Benz, reviving Audi as an independent brand within the group.'
      },
      {
        year: '1980',
        title: 'The Ur-Quattro Unveiled',
        description: 'Audi reveals the Quattro at the Geneva Motor Show, introducing permanent all-wheel drive to performance road cars.'
      },
      {
        year: '1982',
        title: 'World Rally Championship Title',
        description: 'The Quattro secures Audi’s first WRC manufacturers’ title, cementing all-wheel drive as a competitive necessity in rallying.'
      }
    ],
    innovations: [
      'Permanent all-wheel drive via a hollow secondary drive shaft, saving weight over prior systems',
      'Self-locking center differential distributing torque between front and rear axles automatically',
      '"Vorsprung durch Technik" ("Progress through Technology") adopted as Audi’s enduring slogan'
    ],
    imageType: 'vw-merger'
  },
  {
    id: 'digital-luxury-era',
    period: '1994 – 2003',
    title: 'Audi Sport & the Digital Luxury Era',
    tagline: 'Aluminum construction, quattro GmbH, and a new benchmark for progressive design',
    location: 'Ingolstadt & Neckarsulm, Germany',
    summary:
      'Through the 1990s, Audi repositioned itself as a genuine progressive-luxury rival to Mercedes-Benz and BMW. The A8 (1994) introduced a revolutionary aluminum Audi Space Frame body, while quattro GmbH (founded 1983, later renamed Audi Sport GmbH) began hand-building the brand’s fastest RS models, starting with the Porsche-co-developed RS2 Avant in 1994 — the world’s first hyper-fast performance estate car.',
    highlights: [
      '1994: Audi A8 debuts with a lightweight aluminum Audi Space Frame (ASF) body',
      '1994: Audi RS2 Avant, co-developed with Porsche, becomes the world’s first hyper-estate',
      'quattro GmbH established as Audi’s dedicated performance division (later Audi Sport GmbH)',
      'Audi TT (1998) becomes a design icon, translating Bauhaus principles into automotive form'
    ],
    keyMilestones: [
      {
        year: '1994',
        title: 'Audi A8: The Aluminum Flagship',
        description: 'The A8 becomes the first mass-produced luxury sedan with an entirely aluminum body structure.'
      },
      {
        year: '1994',
        title: 'Birth of the RS Badge',
        description: 'The Audi RS2 Avant, hand-built with Porsche, launches the RS performance sub-brand.'
      },
      {
        year: '1998',
        title: 'Audi TT Launches',
        description: 'The TT coupe’s Bauhaus-inspired design becomes an instant automotive design icon.'
      }
    ],
    innovations: [
      'Audi Space Frame (ASF): lightweight extruded and cast aluminum body construction',
      'Direct-shift Gearbox (DSG) dual-clutch transmission technology, later shared across the Volkswagen Group',
      'FSI/TFSI direct fuel injection turbo-petrol engine architecture'
    ],
    imageType: 'india-arrival'
  },
  {
    id: 'audi-india-modern-era',
    period: '2004 – Present',
    title: 'Audi India & the Modern quattro Era',
    tagline: 'Progressive luxury, digital cockpits, and Audi Sport’s hand-built RS flagships for India',
    location: 'Aurangabad, Maharashtra, India',
    summary:
      'Audi entered India in 2004, initially importing CBU models before Volkswagen Group’s India 2.0 manufacturing expansion brought CKD assembly of the A4, A6, Q3, Q5, and Q7 to the Aurangabad plant. Today, Audi India offers a complete progressive-luxury lineup topped by the coupe-SUV Q8, alongside Audi Sport’s hand-built RS5 and RS Q8 performance flagships, all built on the Audi Virtual Cockpit and MMI touch response digital architecture pioneered globally.',
    highlights: [
      '2004: Audi enters the Indian market with its first CBU imports',
      'CKD assembly of the A4, A6, Q3, Q5 & Q7 established at the Aurangabad facility',
      'Audi Virtual Cockpit and MMI touch response technology standardized across the India range',
      'Audi Sport RS5 and RS Q8 bring 450–600 PS hand-built performance to Indian enthusiasts'
    ],
    keyMilestones: [
      {
        year: '2004',
        title: 'Audi Launches in India',
        description: 'Audi AG establishes Audi India, initially selling fully-imported CBU models to Indian luxury buyers.'
      },
      {
        year: '2012',
        title: 'CKD Assembly Begins',
        description: 'Local CKD assembly of the A4, A6, and Q3 begins in Maharashtra, improving pricing and delivery timelines.'
      },
      {
        year: 'Today',
        title: 'The Full Progressive Luxury Range',
        description: 'Audi India’s lineup spans the A4 to the Q8, alongside RS5 and RS Q8 performance flagships from Audi Sport.'
      }
    ],
    innovations: [
      'Audi Virtual Cockpit: fully digital, reconfigurable 12.3-inch driver instrument display',
      'MMI touch response: haptic and acoustic feedback on capacitive touchscreen controls',
      'quattro all-wheel drive standardized across the A6, Q5, Q7, and Q8'
    ],
    imageType: 'india-2-0'
  }
];

export interface AudiHeritageElement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  visualDetail: string;
}

export const AUDI_HERITAGE_ELEMENTS: AudiHeritageElement[] = [
  {
    id: 'four-rings',
    title: 'The Four Rings',
    subtitle: 'Each ring represents one of the four founding companies of Auto Union',
    description:
      'Audi’s iconic four interlocking rings emblem dates to the 1932 merger of Audi, Horch, DKW, and Wanderer into Auto Union. Rather than favoring any single brand, the four equal, overlapping rings symbolized the union of equals — a design philosophy of understated unity that still defines Audi’s minimalist single-frame grilles and badge design today.',
    icon: 'Award',
    visualDetail: 'Four equal-sized interlocking chrome rings, unchanged in proportion since 1932.'
  },
  {
    id: 'quattro-heritage',
    title: 'quattro All-Wheel Drive Heritage',
    subtitle: 'Born from a military test vehicle, perfected on the world’s toughest rally stages',
    description:
      'Since the 1980 Ur-Quattro, permanent all-wheel drive has been Audi’s defining engineering signature. What began as a rally-winning innovation is now standard across the A6, Q5, Q7, and Q8 in India, giving drivers confident, silent traction on monsoon highways without any driver intervention.',
    icon: 'ShieldCheck',
    visualDetail: 'Self-locking center differential continuously distributing torque between front and rear axles.'
  },
  {
    id: 'vorsprung-durch-technik',
    title: '"Vorsprung durch Technik" Philosophy',
    subtitle: 'Progress through Technology — Audi’s guiding engineering principle since 1971',
    description:
      'Audi’s enduring slogan reflects a design philosophy of introducing genuine technical firsts before rivals: aluminum space-frame construction, LED and Matrix lighting, and the fully digital Virtual Cockpit all debuted first on an Audi before spreading across the industry.',
    icon: 'Sparkles',
    visualDetail: 'Minimalist single-frame grille and precise, technology-forward cabin architecture.'
  },
  {
    id: 'audi-sport-heritage',
    title: 'Audi Sport Hand-Built Performance',
    subtitle: 'From the 1994 RS2 Avant to today’s 600 PS RS Q8',
    description:
      'Audi Sport GmbH (formerly quattro GmbH) hand-assembles every RS model in Neckarsulm, Germany, pairing motorsport-derived engines with quattro sport differentials. The lineage that began with the Porsche-co-developed RS2 Avant now includes the 450 PS RS5 and the record-setting 600 PS RS Q8.',
    icon: 'Flame',
    visualDetail: 'Hand-signed engine plaques and motorsport-tuned quattro sport differentials on every RS model.'
  }
];
