export interface DecadeMilestone {
  year: number;
  brand: 'skoda' | 'volkswagen' | 'audi';
  title: string;
  description: string;
  nowModelId: string;
  nowLabel: string;
  thenFacts: string[];
}

export const GROUP_DECADES: DecadeMilestone[] = [
  {
    year: 1895,
    brand: 'skoda',
    title: 'Laurin & Klement Founded',
    description: 'Václav Laurin and Václav Klement begin building bicycles in Mladá Boleslav, Czech Republic — the company that would become Škoda Auto.',
    nowModelId: 'octavia',
    nowLabel: 'Škoda Octavia',
    thenFacts: ['Founded as a bicycle workshop', 'First automobile followed in 1905', 'Became Škoda Works in 1925'],
  },
  {
    year: 1909,
    brand: 'audi',
    title: 'Audi Founded by August Horch',
    description: 'August Horch establishes Audi in Zwickau, Germany, after leaving his own earlier company — "Audi" being the Latin translation of "Horch" ("listen").',
    nowModelId: 'a6',
    nowLabel: 'Audi A6',
    thenFacts: ['Name is a Latin play on founder August Horch’s surname', 'The four rings later united Audi with three other marques in 1932', 'Audi 100 (1968) became the direct ancestor of today’s A6'],
  },
  {
    year: 1937,
    brand: 'volkswagen',
    title: 'Volkswagen Founded, Wolfsburg',
    description: 'Volkswagenwerk is established in Wolfsburg, Germany, with a mission to build an affordable "people’s car" — the Beetle.',
    nowModelId: 'beetle',
    nowLabel: 'Volkswagen Beetle (CBU)',
    thenFacts: ['"Volkswagen" translates to "people’s car"', 'Wolfsburg remains the largest car factory in the world by floor area', 'The original Beetle production run lasted over 60 years'],
  },
  {
    year: 1976,
    brand: 'volkswagen',
    title: 'Volkswagen Golf GTI Mk1 Launches',
    description: 'The original hot hatch. A lightweight Golf with a fuel-injected engine and a golf-ball gear knob creates an entirely new performance category.',
    nowModelId: 'golf-gti',
    nowLabel: 'Volkswagen Golf GTI (Mk8)',
    thenFacts: ['110 PS from a 1.6L fuel-injected engine', 'Weighed under 900 kg', 'Still in production, now in its 8th generation'],
  },
  {
    year: 1998,
    brand: 'skoda',
    title: 'Škoda Octavia Returns Under VW Group',
    description: 'The Octavia nameplate is revived on the shared Volkswagen Group A4 platform — Škoda’s first fully modern model since joining the Group in 1991.',
    nowModelId: 'octavia',
    nowLabel: 'Škoda Octavia',
    thenFacts: ['Shared its platform with the Mk4 Volkswagen Golf', 'Marked Škoda’s transition to modern Group engineering standards', 'The Octavia vRS variant launched in 2001'],
  },
  {
    year: 2020,
    brand: 'volkswagen',
    title: 'India 2.0 Project Launches',
    description: 'Škoda Auto Volkswagen India commits to a dedicated India-specific platform — MQB-A0-IN — built and engineered locally at Chakan and Aurangabad.',
    nowModelId: 'kylaq',
    nowLabel: 'Škoda Kylaq',
    thenFacts: ['MQB-A0-IN localizes over 95% of components', 'Anchored around Chakan (Pune) and Aurangabad plants', 'First fruits: Kushaq and Taigun (2021), Slavia and Virtus (2022)'],
  },
  {
    year: 2026,
    brand: 'skoda',
    title: 'The Lineup Today',
    description: 'Škoda, Volkswagen, and Audi share platforms, engines, and safety architecture across India while keeping three distinct brand personalities.',
    nowModelId: 'kylaq',
    nowLabel: 'The Current Lineup',
    thenFacts: ['100% 5-Star Bharat NCAP / Global NCAP crash-tested lineup', 'Shared MQB-A0-IN, MQB Evo, and MLB Evo platforms across the Group', 'Over 490 dealership outlets nationwide'],
  },
];
