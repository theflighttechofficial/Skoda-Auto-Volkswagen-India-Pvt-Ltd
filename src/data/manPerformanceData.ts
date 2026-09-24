import { RSModelData } from './rsPerformanceData';

export interface ManPerformanceModelData extends RSModelData {
  heritageOrigin?: string;
  tuningCulture?: string;
  notSoldInIndia?: boolean;
}

export const MAN_GT_MODELS: ManPerformanceModelData[] = [
  {
    id: 'man-tgx-d38-perf',
    name: 'MAN TGX D38',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/MAN_TGX_EOT_18680_V8_06.jpg',
    badge: 'MAN’s Most Powerful Production Engine',
    tagline: '640 hp common-rail V8, a flat-floor GX cab and up to 60-tonne GCW capability for the heaviest, highest-priority haulage contracts.',
    category: 'Common-Rail V8 Heavy-Haulage Flagship',
    expectedPrice: '₹60.0 – ₹64.0 Lakh',
    priceNumeric: 6000000,
    engine: '15.2L MAN D38 Common-Rail V8',
    power: '640 hp (471 kW) @ 1,800 RPM',
    powerHp: 640,
    torque: '3,000 Nm @ 1,000–1,600 RPM',
    torqueNm: 3000,
    acceleration0to100: '26.5 Seconds (unladen tractor)',
    accelSeconds: 26.5,
    topSpeed: '90 km/h (electronically limited)',
    topSpeedKmh: 90,
    transmission: 'MAN TipMatic 12-Speed AMT',
    drivetrain: '8x4 / 6x4 Multi-Axle Drive',
    diffOrAwd: 'Cross-Locking Differentials Front & Rear',
    exhaustSystem: 'Dual Vertical Exhaust Stacks with Signature V8 Note',
    brakes: 'Full Air Disc Brakes with ABS + Engine Brake + Retarder',
    suspension: 'Reinforced Multi-Leaf & Air Suspension (Heavy-Haulage Tune)',
    boostPsi: 27.5,
    revLimit: 2100,
    tractionType: 'Multi-Axle Drive with Cross-Locks',
    bootAndSeating: '2–3 Cab Seats • 400L Stowage + Single-Bunk Sleeper',
    keyWeaponSummary: 'MAN’s D38 common-rail V8 delivers up to 640 hp and 3,000 Nm — MAN’s most powerful production engine — paired with a flat-floor GX cab engineered for panoramic visibility and a chassis rated for 60-tonne GCW heavy haulage.',
    heroColorHex: '#e2001a',
    heroColorName: 'MAN Red',
    heritageOrigin: 'Munich & Augsburg, Germany (MAN diesel-engine lineage since 1897)',
    tuningCulture: 'The range-topping TGX specification, reserved for premium long-haul fleets and project-cargo heavy-haulage operators',
    colors: [
      { name: 'MAN Red', hex: '#e2001a', desc: 'The brand’s signature bold red, worn by flagship V8 tractors worldwide.' },
      { name: 'Arctic White', hex: '#f2f2f0', desc: 'Clean fleet-standard white for premium long-haul liveries.' },
      { name: 'Graphite Grey', hex: '#41454a', desc: 'Understated heavy-haulage grey for project-cargo operators.' }
    ],
    weaponry: [
      {
        title: 'Common-Rail 15.2-Litre V8',
        description: 'MAN’s flagship D38 V8 spans 480 to 640 hp across its range, using two-stage turbocharging for a flat torque curve from idle to peak revs.',
        badge: 'Signature Powertrain',
        icon: 'Zap'
      },
      {
        title: 'Flat-Floor GX Cab',
        description: 'A lowered, widened dashboard and panoramic windscreen give the TGX best-in-class forward sightlines, engineered specifically to beat rival flagship cabs on visibility.',
        badge: 'Panoramic Cabin',
        icon: 'ShieldCheck'
      },
      {
        title: '60-Tonne GCW Chassis',
        description: 'A reinforced ladder-frame chassis and cross-locking differentials let the TGX D38 haul multi-trailer combinations up to 60 tonnes gross combination weight.',
        badge: 'Heavy-Haulage Rated',
        icon: 'Flame'
      },
      {
        title: 'MAN OptiView & Retarder',
        description: 'Digital camera mirrors cut blind spots while an engine brake and retarder combination extends brake life and improves control under full load on India’s ghat sections.',
        badge: '0–100 km/h: 26.5s (unladen)',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Premium fabric-trimmed, air-suspended driver seat',
      'Flat-floor GX cab with lowered dashboard',
      'Digital driver display with real-time fuel-economy coaching',
      'Single-bunk sleeper with climate-controlled parking cooler',
      'MAN RIO fleet telematics integration'
    ],
    trackTelemetry: {
      lateralG: 'N/A — Heavy-haulage tractor, not lap-timed',
      weightDistribution: '36% Front / 64% Rear (laden, 8x4)',
      powerToWeight: '80.0 PS / Tonne (unladen tractor unit, ~8.0 Tonne)',
      braking100to0: 'N/A — Governed to 90 km/h; retarder-assisted service braking',
      nurburgringLegacy: 'Not track-tested — benchmarked instead on GCW, fuel economy and total cost of ownership over long-haul duty cycles'
    }
  },
  {
    id: 'man-lions-coach-flagship-perf',
    name: 'MAN Lion’s Coach Luxury',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Reisebus_-_MAN_Lion%27s_Coach_in_M%C3%BCnchen.JPG',
    badge: 'The Flagship Touring Coach',
    tagline: '350 hp common-rail six, a luxury 2+1 sleeper-berth layout and reinforced AIS-052 body for premium long-distance and tourist operators.',
    category: 'Flagship Intercity & Tourist Coach',
    expectedPrice: '₹84.0 – ₹88.0 Lakh',
    priceNumeric: 8400000,
    engine: '12.9L MAN D26 Common-Rail Inline-6 (Coach Tune)',
    power: '350 hp (257 kW) @ 1,900 RPM',
    powerHp: 350,
    torque: '1,750 Nm @ 1,000–1,400 RPM',
    torqueNm: 1750,
    acceleration0to100: '32.0 Seconds (laden coach)',
    accelSeconds: 32.0,
    topSpeed: '100 km/h (electronically limited)',
    topSpeedKmh: 100,
    transmission: 'MAN TipMatic Automated Gearbox',
    drivetrain: '6x2 Rear-Wheel Drive',
    diffOrAwd: 'Standard Rear Differential',
    exhaustSystem: 'Single Rear-Mounted Exhaust, Euro 6-Equivalent SCR + EGR',
    brakes: 'Full Air Disc Brakes with ABS + EBD + Engine Brake',
    suspension: 'Air Suspension with Load-Levelling Valve',
    boostPsi: 22.0,
    revLimit: 2300,
    tractionType: '6x2 Rear-Wheel Drive',
    bootAndSeating: '30–36 Passenger Sleeper-Berth Seating • 8.8m³ Underfloor Luggage',
    keyWeaponSummary: 'MAN’s flagship touring coach pairs a 350 hp common-rail six with a luxury 2+1 sleeper-berth layout, curtained privacy compartments and a reinforced AIS-052 body — the range-topping specification for premium overnight intercity and tourist routes.',
    heroColorHex: '#e2001a',
    heroColorName: 'MAN Red',
    heritageOrigin: 'Munich, Germany (MAN Lion’s Coach touring-coach lineage)',
    tuningCulture: 'A smaller-volume flagship offering in India, positioned for premium tourist and private-operator fleets rather than mass STU procurement',
    colors: [
      { name: 'MAN Red', hex: '#e2001a', desc: 'The brand’s signature bold red livery accent.' },
      { name: 'Arctic White', hex: '#f2f2f0', desc: 'Clean fleet-standard white for tourist-operator liveries.' },
      { name: 'Graphite Grey', hex: '#41454a', desc: 'A premium two-tone option favoured by private luxury-coach operators.' }
    ],
    weaponry: [
      {
        title: 'Common-Rail 12.9-Litre Coach Tune',
        description: 'A 350 hp coach-specific tune of the D26 inline-six prioritises smooth, sustained highway cruising and fuel economy over outright pace.',
        badge: 'Coach-Tuned Powertrain',
        icon: 'Zap'
      },
      {
        title: 'Luxury 2+1 Sleeper-Berth Layout',
        description: 'Curtained privacy compartments, individual entertainment screens and premium suspension seating define MAN’s range-topping coach interior.',
        badge: 'Flagship Interior',
        icon: 'ShieldCheck'
      },
      {
        title: 'AIS-052 Rollover-Protection Body',
        description: 'A reinforced body structure certified to Indian AIS-052 standards underpins every Lion’s Coach, regardless of trim level.',
        badge: 'Certified Body Structure',
        icon: 'Flame'
      },
      {
        title: 'Engine Brake & Retarder',
        description: 'Combined engine braking and a hydraulic retarder extend brake life and improve control on sustained ghat-section descents.',
        badge: '0–100 km/h: 32.0s (laden)',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Air-suspended driver seat with adjustable lumbar support',
      'Digital instrument cluster with route and fuel-economy data',
      'Onboard pantry counter and washroom option',
      'Individual passenger entertainment screens throughout',
      'Double-glazed windows and enhanced sound insulation'
    ],
    trackTelemetry: {
      lateralG: 'N/A — Touring coach, not lap-timed',
      weightDistribution: '45% Front / 55% Rear (laden, 6x2)',
      powerToWeight: '29.2 PS / Tonne (laden coach, ~12.0 Tonne)',
      braking100to0: 'N/A — Governed to 100 km/h; engine brake and retarder-assisted service braking',
      nurburgringLegacy: 'Not track-tested — benchmarked instead on passenger comfort, fuel economy and total cost of ownership over intercity duty cycles'
    }
  }
];
