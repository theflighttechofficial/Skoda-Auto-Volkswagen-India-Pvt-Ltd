export interface JourneyStage {
  id: string;
  title: string;
  location: string;
  icon: 'factory' | 'cog' | 'wrench' | 'checkCircle' | 'store' | 'user';
  summary: string;
  details: string[];
}

export const MANUFACTURING_JOURNEY: JourneyStage[] = [
  {
    id: 'components',
    title: 'Components & Localisation',
    location: 'Pan-India Supplier Network',
    icon: 'cog',
    summary: 'Over 95% localisation on volume models, sourced from a supplier base built up over two decades of Group manufacturing in India.',
    details: [
      'Press shop, body shop, paint shop, and assembly all under one roof at the India 2.0 facilities',
      'Local sourcing includes stampings, wiring harnesses, seats, plastics, glass, and select engine components',
      'MQB-A0-IN platform (Kylaq, Kushaq, Taigun, Virtus) engineered from the outset for Indian road and cost conditions, not a rebadged export car',
      'Engine and transmission machining lines localised for the 1.0 TSI and 1.5 TSI EVO families',
    ],
  },
  {
    id: 'engines-platforms',
    title: 'Engines & Platforms Built for India',
    location: 'Chakan Engine & Transmission Shop',
    icon: 'cog',
    summary: 'India-specific engineering — from ground clearance to fuel-quality tolerance — layered onto global Volkswagen Group platforms.',
    details: [
      'MQB-A0-IN: a India-specific evolution of the global MQB platform with a wider track, added ground clearance, and reinforced underbody protection',
      'MQB-A0 (Slavia, Octavia legacy) and MQB-A1 share DNA with European Group models while being tuned for Indian durability testing',
      '1.0 TSI and 1.5 TSI EVO engines validated against Indian fuel quality variance across the country, not just European-grade fuel',
      'Suspension and NVH (noise, vibration, harshness) tuning conducted over thousands of kilometres on Indian test tracks and real roads',
    ],
  },
  {
    id: 'assembly',
    title: 'Assembly',
    location: 'Chakan, Pune (Maharashtra) & Aurangabad (Maharashtra)',
    icon: 'factory',
    summary: 'Two manufacturing facilities near Pune form the backbone of Škoda Auto Volkswagen India’s production — one for volume models, one for CKD/premium assembly.',
    details: [
      'Chakan plant (Plot E-1, MIDC Chakan, Maval, Pune): high-volume production line for Kylaq, Slavia, Kushaq, Taigun, and Virtus',
      'Aurangabad plant (Shendra Industrial Area, Chhatrapati Sambhaji Nagar): Semi-Knocked-Down (SKD) and Completely-Knocked-Down (CKD) assembly for Octavia, Superb, Kodiaq, and select Audi models',
      'Combined annual production capacity built to serve both the domestic Indian market and right-hand-drive export markets',
      'Shared logistics and supplier ecosystem across both facilities reduces cost and lead time across the Group',
    ],
  },
  {
    id: 'testing',
    title: 'Quality Testing & Validation',
    location: 'In-Plant Test Tracks & Quality Gates',
    icon: 'checkCircle',
    summary: 'Every car passes through multiple quality gates — geometry checks, water-tightness tests, and a final dynamic road test — before it is cleared for dispatch.',
    details: [
      'Body-in-white geometry scanning to catch dimensional deviations before paint',
      'Paint shop quality includes multi-stage electro-coating and UV-resistance checks suited to Indian climate extremes',
      'Water-tightness (shower) testing to validate sealing against monsoon conditions',
      'Every single unit undergoes a final dynamic rolling road test before being cleared for dispatch — not just a sample batch',
      'Crash structures independently validated to 100% 5-Star Bharat NCAP and Global NCAP ratings across the current lineup',
    ],
  },
  {
    id: 'dealership',
    title: 'Dispatch to Dealership',
    location: '260+ Škoda • 190+ VW • 40+ Audi Outlets Nationwide',
    icon: 'store',
    summary: 'From the plant gate, vehicles move through a nationwide logistics network to reach showrooms across every state in India.',
    details: [
      'Car carrier logistics network distributing from Chakan and Aurangabad to regional stockyards',
      'Pre-Delivery Inspection (PDI) performed again at the dealership before handover, independent of the factory quality gates',
      'Dealership network spans all four zones — North, South, East, and West — see the Volkswagen Group India Map for outlets near you',
      'Genuine parts and service network scaled alongside the sales network to support the full ownership life cycle',
    ],
  },
  {
    id: 'owner',
    title: 'Into Your Driveway',
    location: 'Every State, Every City',
    icon: 'user',
    summary: 'The final step of a journey that began at a supplier’s press shop — a car engineered globally, built locally, and delivered to an owner in India.',
    details: [
      '4-Year / 100,000 km standard warranty (4EVER Care for VW, Audi Advantage for Audi) backed by the same nationwide service network',
      '24/7 roadside assistance across the dealership footprint',
      'Exports: India-built Group models are also exported to select right-hand-drive markets, extending the "Made in India" story beyond domestic roads',
      'Every stage — from a stamped steel panel to the key handover — happens within a Group ecosystem anchored in Maharashtra',
    ],
  },
];

export interface LocalisationStat {
  label: string;
  value: string;
  detail: string;
}

export const LOCALISATION_STATS: LocalisationStat[] = [
  { label: 'Localisation on Volume Models', value: '95%+', detail: 'Kylaq, Slavia, Kushaq, Taigun, Virtus built on the India-specific MQB-A0-IN platform' },
  { label: 'Manufacturing Facilities', value: '2', detail: 'Chakan (Pune) high-volume plant + Aurangabad SKD/CKD assembly facility' },
  { label: 'Years of India Manufacturing', value: '20+', detail: 'Continuous Group manufacturing presence in Maharashtra since the mid-2000s' },
  { label: 'Dealership Network', value: '490+', detail: 'Combined Škoda, Volkswagen, and Audi outlets across every zone in India' },
];
