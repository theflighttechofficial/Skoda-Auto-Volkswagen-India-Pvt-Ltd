export interface EngineSpec {
  id: string;
  name: string;
  badge: string;
  fuelType: 'Petrol' | 'Diesel';
  fuelPriceDefault?: number;
  displacement: string;
  cylinders: number;
  power: string;
  powerHp: number;
  torque: string;
  torqueNm: number;
  transmissions: string[];
  acceleration: string;
  topSpeed: string;
  claimedMileage: string;
  realWorldCity: string;
  realWorldHighway: string;
  keyHighlights: string[];
  description: string;
}

export interface Variant {
  id: string;
  name: string;
  tagline: string;
  priceRange: string;
  baseExShowroom: number;
  engineOptions: string[];
  transmissions: string[];
  keyFeatures: string[];
  exteriorHighlights: string[];
  interiorHighlights: string[];
  badgeColor: string;
  isPopular?: boolean;
  isFlagship?: boolean;
}

export interface CarColor {
  id: string;
  name: string;
  hex: string;
  roofHex?: string;
  isDualTone?: boolean;
  availableOn: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Safety' | 'Performance' | 'Maintenance' | 'Comparison';
}
