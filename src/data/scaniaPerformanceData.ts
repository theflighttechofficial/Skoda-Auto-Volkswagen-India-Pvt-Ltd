import { RSModelData } from './rsPerformanceData';

export interface ScaniaPerformanceModelData extends RSModelData {
  heritageOrigin?: string;
  tuningCulture?: string;
  notSoldInIndia?: boolean;
}

export const SCANIA_GT_MODELS: ScaniaPerformanceModelData[] = [
  {
    id: 'scania-s730-v8-perf',
    name: 'Scania S 730 V8',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Scania_S730_1.jpg',
    badge: 'Scania’s Most Powerful Production Engine',
    tagline: '770 hp twin-turbo V8, a flat-floor standing-height cab and up to 80-tonne GCW capability for the heaviest, highest-priority haulage contracts.',
    category: 'Twin-Turbo V8 Heavy-Haulage Flagship',
    expectedPrice: '₹65.0 – ₹68.0 Lakh',
    priceNumeric: 6500000,
    engine: '16L Twin-Turbo V8',
    power: '770 hp (566 kW) @ 1,800 RPM',
    powerHp: 770,
    torque: '3,700 Nm @ 1,000–1,400 RPM',
    torqueNm: 3700,
    acceleration0to100: '28.0 Seconds (unladen tractor)',
    accelSeconds: 28.0,
    topSpeed: '90 km/h (electronically limited)',
    topSpeedKmh: 90,
    transmission: 'Scania Opticruise 12-Speed AMT',
    drivetrain: '8x4 / 6x4 Multi-Axle Drive',
    diffOrAwd: 'Cross-Locking Differentials Front & Rear',
    exhaustSystem: 'Dual Vertical Exhaust Stacks with Signature V8 Note',
    brakes: 'Full Air Disc Brakes with ABS + Hydraulic Retarder',
    suspension: 'Reinforced Multi-Leaf & Air Suspension (Heavy-Haulage Tune)',
    boostPsi: 29.0,
    revLimit: 2100,
    tractionType: 'Multi-Axle Drive with Cross-Locks',
    bootAndSeating: '2–3 Cab Seats • 420L Stowage + Double-Bunk Sleeper',
    keyWeaponSummary: 'A hand-assembled 16-litre twin-turbo V8 delivers 770 hp and 3,700 Nm — Scania’s most powerful production engine — paired with a flat-floor S-series cab tall enough to stand up in and a chassis rated for 80-tonne GCW heavy haulage.',
    heroColorHex: '#8c0d1a',
    heroColorName: 'Scania Red',
    heritageOrigin: 'Södertälje, Sweden (Scania V8 lineage since 1969)',
    tuningCulture: 'The range-topping S-series specification, reserved for premium long-haul fleets and project-cargo heavy-haulage operators',
    colors: [
      { name: 'Scania Red', hex: '#8c0d1a', desc: 'The brand’s signature deep red, worn by flagship V8 tractors worldwide.' },
      { name: 'Arctic White', hex: '#f2f2f0', desc: 'Clean fleet-standard white for premium long-haul liveries.' },
      { name: 'Granite Grey', hex: '#4b4d4f', desc: 'Understated heavy-haulage grey for project-cargo operators.' }
    ],
    weaponry: [
      {
        title: 'Twin-Turbo 16-Litre V8',
        description: 'Scania’s flagship V8, continuously produced in some form since 1969, delivers 770 hp and 3,700 Nm through sequential twin-turbocharging for a flat torque curve from idle.',
        badge: 'Signature Powertrain',
        icon: 'Zap'
      },
      {
        title: 'Flat-Floor S-Series Cab',
        description: 'Sat directly over the front axle, the S-series cab lets a driver stand fully upright — a first for Scania’s cab-over range, reducing fatigue on multi-day hauls.',
        badge: 'Standing-Height Cabin',
        icon: 'ShieldCheck'
      },
      {
        title: '80-Tonne GCW Chassis',
        description: 'A reinforced ladder-frame chassis and cross-locking differentials let the S 730 haul multi-trailer combinations up to 80 tonnes gross combination weight.',
        badge: 'Heavy-Haulage Rated',
        icon: 'Flame'
      },
      {
        title: 'Scania Retarder',
        description: 'A hydraulic retarder supplements the service brakes on long descents, extending brake life and improving control under full load on India’s ghat sections.',
        badge: '0–100 km/h: 28.0s (unladen)',
        icon: 'Gauge'
      }
    ],
    cockpitFeatures: [
      'Premium leather-trimmed, air-suspended driver seat',
      'Flat-floor cab with full standing headroom',
      'Digital driver display with real-time fuel-economy coaching',
      'Double-bunk sleeper with climate-controlled parking cooler',
      'Scania Fleet Management telematics integration'
    ],
    trackTelemetry: {
      lateralG: 'N/A — Heavy-haulage tractor, not lap-timed',
      weightDistribution: '35% Front / 65% Rear (laden, 8x4)',
      powerToWeight: '85.6 PS / Tonne (unladen tractor unit, ~9.0 Tonne)',
      braking100to0: 'N/A — Governed to 90 km/h; retarder-assisted service braking',
      nurburgringLegacy: 'Not track-tested — benchmarked instead on GCW, fuel economy and total cost of ownership over long-haul duty cycles'
    }
  },
  {
    id: 'scania-r500-super-perf',
    name: 'Scania R 500 Super',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Scania_R_500.JPG',
    badge: 'The Fuel-Efficiency Benchmark Powertrain',
    tagline: '500 hp from the Scania Super 13-litre combustion system — up to 8% better fuel economy than the outgoing generation at the same power output.',
    category: 'Scania Super 13-Litre Long-Haul Flagship',
    expectedPrice: '₹46.0 – ₹48.0 Lakh',
    priceNumeric: 4600000,
    engine: '13L Scania Super Inline-6',
    power: '500 hp (368 kW) @ 1,500–1,900 RPM',
    powerHp: 500,
    torque: '2,550 Nm @ 1,000–1,300 RPM',
    torqueNm: 2550,
    acceleration0to100: '38.0 Seconds (laden tractor-trailer)',
    accelSeconds: 38.0,
    topSpeed: '90 km/h (electronically limited)',
    topSpeedKmh: 90,
    transmission: 'Scania Opticruise 12-Speed AMT',
    drivetrain: '6x4 Drive Configuration',
    diffOrAwd: 'Cross-Locking Rear Differential',
    exhaustSystem: 'Single Vertical Exhaust Stack, Euro 6-Equivalent SCR + EGR',
    brakes: 'Full Air Disc Brakes with ABS + EBD',
    suspension: 'Air Suspension with Load-Sensing Valve',
    boostPsi: 24.0,
    revLimit: 2100,
    tractionType: '6x4 Drive with Rear Cross-Lock',
    bootAndSeating: '2 Cab Seats • 380L Stowage + Single/Double-Bunk Sleeper',
    keyWeaponSummary: 'The Scania Super combustion system extracts 500 hp and 2,550 Nm from the 13-litre inline-six while cutting fuel consumption up to 8% versus the outgoing engine — the efficiency benchmark of Scania’s Indian range.',
    heroColorHex: '#8c0d1a',
    heroColorName: 'Scania Red',
    heritageOrigin: 'Narsapura, India (Scania’s Indian manufacturing plant since 2013)',
    tuningCulture: 'The volume flagship of Scania India’s long-haul range, tuned for total cost of ownership over outright pace',
    colors: [
      { name: 'Scania Red', hex: '#8c0d1a', desc: 'The brand’s signature deep red livery.' },
      { name: 'Arctic White', hex: '#f2f2f0', desc: 'Fleet-standard white for long-haul logistics liveries.' },
      { name: 'Granite Grey', hex: '#4b4d4f', desc: 'A subdued grey favoured by container and bulk-cargo fleets.' }
    ],
    weaponry: [
      {
        title: 'Scania Super Combustion System',
        description: 'A re-engineered injection strategy, turbocharging and combustion bowl geometry deliver up to 8% better fuel economy than the previous 13-litre generation at the same 500 hp.',
        badge: 'Efficiency Benchmark',
        icon: 'Zap'
      },
      {
        title: 'Scania Opticruise 12-Speed AMT',
        description: 'Fully automated gear selection based on road gradient, load and driving style removes clutch fatigue entirely from multi-day highway hauls.',
        badge: 'Automated Drivetrain',
        icon: 'Gauge'
      },
      {
        title: 'Global Scania Driver Support',
        description: 'Real-time in-cab coaching scores braking, anticipation and fuel-efficient driving, letting fleet operators track and improve efficiency across large truck pools.',
        badge: 'Driver Coaching',
        icon: 'ShieldCheck'
      },
      {
        title: '49-Tonne GCW Rating',
        description: 'A 6x4 drive configuration and cross-locking rear differential rate the R 500 for multi-axle trailer combinations up to 49 tonnes gross combination weight.',
        badge: '0–100 km/h: 38.0s (laden)',
        icon: 'Flame'
      }
    ],
    cockpitFeatures: [
      'Ergonomic air-suspended driver seat',
      'Digital instrument cluster with fuel-economy scoring',
      'Flat-floor engine tunnel for sleeper comfort',
      'Scania Fleet Management telematics standard',
      'Fridge compartment and 24V accessory sockets in the sleeper'
    ],
    trackTelemetry: {
      lateralG: 'N/A — Long-haul tractor, not lap-timed',
      weightDistribution: '40% Front / 60% Rear (laden, 6x4)',
      powerToWeight: '66.7 PS / Tonne (unladen tractor unit, ~7.5 Tonne)',
      braking100to0: 'N/A — Governed to 90 km/h; ABS + EBD service braking',
      nurburgringLegacy: 'Not track-tested — benchmarked instead on fuel economy per tonne-kilometre and uptime across Indian fleet duty cycles'
    }
  }
];
