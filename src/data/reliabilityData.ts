export type ReliabilityRating = 'green' | 'yellow' | 'red';

export interface ReliabilitySection {
  title: string;
  rating: ReliabilityRating;
  manufacturerInfo: string;
  ownerReported: string;
}

export interface ReliabilityProfile {
  id: string;
  engineOrTransmission: string;
  usedIn: string[];
  overallRating: ReliabilityRating;
  summary: string;
  sections: ReliabilitySection[];
}

export const RELIABILITY_PROFILES: ReliabilityProfile[] = [
  {
    id: '1.5-tsi-evo-dsg',
    engineOrTransmission: '1.5 TSI EVO + 7-Speed DSG',
    usedIn: ['Octavia', 'Superb', 'Kodiaq', 'Virtus GT', 'Taigun GT'],
    overallRating: 'green',
    summary: 'The most mature and widely proven powertrain in the current lineup, with a large service history to draw on.',
    sections: [
      {
        title: 'Common Wear Items',
        rating: 'green',
        manufacturerInfo: 'Spark plugs, air filter, and cabin filter on standard service intervals (typically 10,000–15,000 km).',
        ownerReported: 'Owners report the timing chain and tensioner as generally trouble-free through 100,000+ km when serviced on schedule.',
      },
      {
        title: 'Typical Maintenance',
        rating: 'green',
        manufacturerInfo: 'Full synthetic oil change every 10,000 km or 12 months, whichever comes first.',
        ownerReported: 'Long-life service owners note occasional early oil-dilution smell in short-trip city use; mitigated by shorter intervals.',
      },
      {
        title: 'DSG Behaviour',
        rating: 'yellow',
        manufacturerInfo: 'DQ200/DQ381 dry or wet-clutch unit depending on trim; mechatronic unit sealed for life per factory spec.',
        ownerReported: 'Some owners of early builds report a jerky low-speed crawl in stop-go traffic; a mechatronic software update is the common fix reported in service forums.',
      },
      {
        title: 'Cooling System',
        rating: 'green',
        manufacturerInfo: 'Electric auxiliary water pump supports turbo cooldown after hard driving.',
        ownerReported: 'No widespread owner-reported cooling issues; occasional coolant top-up chatter on very high-mileage examples.',
      },
      {
        title: 'Suspension',
        rating: 'yellow',
        manufacturerInfo: 'Independent front, multi-link or torsion-beam rear depending on model and trim.',
        ownerReported: 'Owners on poor road surfaces report front strut mount and link rod wear appearing somewhat earlier than European-market experience, attributed to local road conditions.',
      },
      {
        title: 'Brakes',
        rating: 'green',
        manufacturerInfo: 'Ventilated front discs, solid or drum rear depending on trim.',
        ownerReported: 'Pad life broadly matches factory estimates; no notable owner complaints beyond routine wear.',
      },
      {
        title: 'Battery',
        rating: 'green',
        manufacturerInfo: 'AGM battery on higher trims to support stop-start.',
        ownerReported: 'A handful of owners report reduced stop-start reliability in extreme summer heat, resolved by battery health checks at service.',
      },
      {
        title: 'Electronics',
        rating: 'yellow',
        manufacturerInfo: 'Modular infotainment shared across VW Group MQB-based models, over-the-air-capable on newer units.',
        ownerReported: 'Occasional owner reports of infotainment freezes requiring a soft reset; generally resolved by firmware updates at service visits.',
      },
    ],
  },
  {
    id: '2.0-tsi-vrs-dsg',
    engineOrTransmission: '2.0 TSI (EA888) + 7-Speed Wet DSG',
    usedIn: ['Octavia vRS', 'Kodiaq vRS', 'Golf GTI'],
    overallRating: 'green',
    summary: 'A well-proven performance unit with a long global track record, though it demands more disciplined maintenance than the smaller engines.',
    sections: [
      {
        title: 'Common Wear Items',
        rating: 'yellow',
        manufacturerInfo: 'High-pressure fuel pump and PCV valve are scheduled inspection points on EA888-family engines.',
        ownerReported: 'Global owner communities report occasional carbon buildup on intake valves from direct injection, typically addressed with a walnut-blast clean around 60,000–80,000 km.',
      },
      {
        title: 'Typical Maintenance',
        rating: 'yellow',
        manufacturerInfo: 'Full synthetic oil every 10,000 km; performance driving profiles recommend shorter intervals.',
        ownerReported: 'Track-day owners report oil consumption slightly above factory spec on high-mileage, hard-driven examples — within tolerance but worth monitoring.',
      },
      {
        title: 'DSG Behaviour',
        rating: 'green',
        manufacturerInfo: 'Wet-clutch DQ381 unit rated for higher torque loads than the dry-clutch variant.',
        ownerReported: 'Owners consistently rate the wet DSG as smoother and more durable under spirited use than the smaller dry-clutch gearbox.',
      },
      {
        title: 'Cooling System',
        rating: 'yellow',
        manufacturerInfo: 'Dual radiator setup with additional turbo/intercooler circuit.',
        ownerReported: 'A minority of owners in hot climates report needing an early water pump replacement; not a widespread pattern but worth checking at inspections.',
      },
      {
        title: 'Suspension',
        rating: 'green',
        manufacturerInfo: 'Sport-tuned independent suspension, adaptive dampers (DCC) on select trims.',
        ownerReported: 'Owners rate ride and component durability positively even with lowered, stiffer vRS/GTI setups.',
      },
      {
        title: 'Brakes',
        rating: 'green',
        manufacturerInfo: 'Larger ventilated front discs sized for the performance profile.',
        ownerReported: 'Track-use owners report faster front pad wear as expected for the performance intent, but no premature failures reported.',
      },
      {
        title: 'Battery',
        rating: 'green',
        manufacturerInfo: 'AGM battery standard across performance trims.',
        ownerReported: 'No significant owner-reported issues.',
      },
      {
        title: 'Electronics',
        rating: 'yellow',
        manufacturerInfo: 'Digital cockpit and driver-mode electronics shared with the broader MQB-based lineup.',
        ownerReported: 'Occasional owner reports of DCC damper setting resets after a battery disconnect; resolved via recalibration at service.',
      },
    ],
  },
  {
    id: '1.0-tsi-manual',
    engineOrTransmission: '1.0 TSI + 6-Speed Manual/Torque Converter',
    usedIn: ['Kylaq', 'Kushaq', 'Taigun', 'Polo GT'],
    overallRating: 'green',
    summary: 'A simple, city-friendly powertrain with fewer complex systems than the larger turbo-petrol units.',
    sections: [
      {
        title: 'Common Wear Items',
        rating: 'green',
        manufacturerInfo: 'Timing chain (not belt) design reduces scheduled replacement needs.',
        ownerReported: 'Owners report the 3-cylinder idle vibration as a known characteristic rather than a fault, most noticeable at traffic-light stops with stop-start disabled.',
      },
      {
        title: 'Typical Maintenance',
        rating: 'green',
        manufacturerInfo: 'Standard 10,000 km service intervals with synthetic oil.',
        ownerReported: 'Broadly trouble-free in owner forums; among the lowest-maintenance-cost engines in the current lineup.',
      },
      {
        title: 'DSG Behaviour',
        rating: 'yellow',
        manufacturerInfo: '6-speed torque-converter automatic (not DSG) offered on select trims for smoother low-speed behaviour.',
        ownerReported: 'Manual-transmission owners report no clutch issues through typical ownership; automatic-trim owners note slightly softer shift response than the vRS DSG, by design.',
      },
      {
        title: 'Cooling System',
        rating: 'green',
        manufacturerInfo: 'Compact single-circuit cooling system sized for the smaller displacement.',
        ownerReported: 'No notable owner-reported issues.',
      },
      {
        title: 'Suspension',
        rating: 'yellow',
        manufacturerInfo: 'Torsion-beam rear axle on most trims, tuned for ride comfort over sharper handling.',
        ownerReported: 'Owners on rougher roads report earlier bush wear on the rear axle mounts compared to European driving conditions.',
      },
      {
        title: 'Brakes',
        rating: 'green',
        manufacturerInfo: 'Disc-front, drum-rear standard configuration on most trims.',
        ownerReported: 'Pad and drum life reported as meeting or exceeding factory estimates by most owners.',
      },
      {
        title: 'Battery',
        rating: 'green',
        manufacturerInfo: 'Conventional lead-acid battery on non-stop-start trims.',
        ownerReported: 'No significant owner-reported issues.',
      },
      {
        title: 'Electronics',
        rating: 'green',
        manufacturerInfo: 'Simpler electronics architecture than the higher trims, shared instrument cluster across variants.',
        ownerReported: 'Generally trouble-free; occasional owner reports of infotainment Bluetooth pairing quirks resolved by firmware updates.',
      },
    ],
  },
  {
    id: '3.0-tfsi-v6-quattro',
    engineOrTransmission: '3.0 TFSI V6 + quattro AWD',
    usedIn: ['Audi A6 55 TFSI', 'Audi Q7 55 TFSI'],
    overallRating: 'yellow',
    summary: 'A refined and powerful unit, but the added complexity of the quattro system and premium electronics raises long-term running costs.',
    sections: [
      {
        title: 'Common Wear Items',
        rating: 'yellow',
        manufacturerInfo: 'Timing chain, tensioners, and high-pressure fuel pump are scheduled inspection items on the EA839-family V6.',
        ownerReported: 'Owner communities report occasional tensioner rattle on cold start on higher-mileage examples, typically addressed under extended warranty.',
      },
      {
        title: 'Typical Maintenance',
        rating: 'yellow',
        manufacturerInfo: 'Full synthetic oil every 10,000–15,000 km; higher-spec fluids required for the quattro transfer case.',
        ownerReported: 'Owners note noticeably higher service costs than the 4-cylinder TSI lineup, consistent with the premium segment.',
      },
      {
        title: 'DSG Behaviour',
        rating: 'green',
        manufacturerInfo: '8-speed Tiptronic torque-converter automatic, not a dry/wet DSG.',
        ownerReported: 'Owners consistently rate shift smoothness highly, with few reported durability concerns.',
      },
      {
        title: 'Cooling System',
        rating: 'yellow',
        manufacturerInfo: 'Multi-circuit cooling supporting engine, turbo, and transmission oil cooler.',
        ownerReported: 'A minority of owners in extreme heat report auxiliary cooling fan replacement earlier than expected.',
      },
      {
        title: 'Suspension',
        rating: 'yellow',
        manufacturerInfo: 'Adaptive air suspension available on select trims.',
        ownerReported: 'Air suspension owners report component cost as significant if compressor or air spring replacement is needed outside warranty; steel-sprung variants report fewer issues.',
      },
      {
        title: 'Brakes',
        rating: 'green',
        manufacturerInfo: 'Large ventilated discs sized for the vehicle mass and performance.',
        ownerReported: 'No widespread owner complaints; wear rates in line with expectations for the segment.',
      },
      {
        title: 'Battery',
        rating: 'yellow',
        manufacturerInfo: 'AGM battery supporting extensive onboard electronics and mild-hybrid assist on some markets.',
        ownerReported: 'Owners report battery replacement costs are notably higher than mainstream trims due to registration/coding requirements after replacement.',
      },
      {
        title: 'Electronics',
        rating: 'red',
        manufacturerInfo: 'Extensive driver-assistance and MMI infotainment suite with frequent software updates.',
        ownerReported: 'The most commonly owner-reported category of concern — occasional MMI freezes, ambient lighting module faults, and driver-assist sensor recalibration needs after windscreen replacement.',
      },
    ],
  },
  {
    id: '4.0-tfsi-v8-quattro',
    engineOrTransmission: '4.0 TFSI V8 Twin-Turbo + quattro AWD',
    usedIn: ['Audi RS 6 Avant', 'Audi RS Q8'],
    overallRating: 'red',
    summary: 'A formidable halo powertrain, but the highest-complexity unit in the lineup — strong when maintained on schedule, expensive if neglected.',
    sections: [
      {
        title: 'Common Wear Items',
        rating: 'yellow',
        manufacturerInfo: 'Twin-turbo units, cylinder-on-demand deactivation, and high-pressure direct injection are all scheduled inspection points.',
        ownerReported: 'Global RS owner communities report carbon buildup on intake valves as an expected maintenance item given direct injection, generally addressed proactively around 60,000 km.',
      },
      {
        title: 'Typical Maintenance',
        rating: 'red',
        manufacturerInfo: 'Full synthetic high-performance oil on shorter intervals recommended for track-driven examples.',
        ownerReported: 'Owners consistently report the highest running costs in the lineup — specialist service centres, premium parts, and higher labour time for the twin-turbo layout.',
      },
      {
        title: 'DSG Behaviour',
        rating: 'green',
        manufacturerInfo: '8-speed Tiptronic torque-converter automatic engineered for the engine\'s torque output.',
        ownerReported: 'Owners rate durability and shift quality highly even under repeated hard launches.',
      },
      {
        title: 'Cooling System',
        rating: 'yellow',
        manufacturerInfo: 'Multiple radiators and intercoolers dedicated to sustained high-performance use.',
        ownerReported: 'Track-day owners report the cooling system performs as designed but recommend monitoring coolant condition closely given the heat load.',
      },
      {
        title: 'Suspension',
        rating: 'yellow',
        manufacturerInfo: 'Adaptive air suspension with sport differential standard.',
        ownerReported: 'Owners report air suspension components (compressor, air springs, sport diff actuator) as the single largest source of unplanned repair cost outside warranty.',
      },
      {
        title: 'Brakes',
        rating: 'yellow',
        manufacturerInfo: 'Optional carbon-ceramic discs for sustained track use; steel discs standard.',
        ownerReported: 'Owners on steel brakes report fast pad wear under hard road use; carbon-ceramic owners report near-zero wear but very high individual replacement cost.',
      },
      {
        title: 'Battery',
        rating: 'yellow',
        manufacturerInfo: 'Dual-battery mild-hybrid architecture supporting engine start-stop and coasting.',
        ownerReported: 'Owners report battery/module replacement as a specialist job requiring dealer-level coding.',
      },
      {
        title: 'Electronics',
        rating: 'red',
        manufacturerInfo: 'Full driver-assistance suite, adaptive air suspension control, and RS-specific drive-mode electronics.',
        ownerReported: 'The most owner-flagged category — occasional air suspension warning lights, infotainment module faults, and sensor recalibration needs reported across global RS forums; most resolved under warranty but costly outside it.',
      },
    ],
  },
];
