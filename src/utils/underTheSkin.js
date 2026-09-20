// Derives an "exploded view" layer breakdown (exterior, platform, engine,
// transmission, suspension, safety, electronics) for any model, straight
// from that model's real dimensions/engines/variants/keyHighlights fields
// — the same reuse-real-data approach as carInsights.js and
// configuratorOptions.js, so this scales to every model without hand
// authoring 36 separate engineering write-ups.

function findHighlight(model, pattern) {
  return (model.keyHighlights || []).find((h) => pattern.test(h));
}

function findAllHighlights(model, pattern) {
  return (model.keyHighlights || []).filter((h) => pattern.test(h));
}

// --- Platform derivation -----------------------------------------------

const PLATFORM_PATTERN = /\b((?:MQB|MLB|MEB|PPE|MSB)[-\w]*)\s+(?:Evo\s+)?platform/i;

function extractPlatformFromText(model) {
  const combined = [...(model.keyHighlights || []), model.tagline, model.badge].join(" | ");
  const match = combined.match(PLATFORM_PATTERN);
  if (!match) return null;
  let name = match[0].replace(/\s+platform.*/i, "").trim();
  if (/evo/i.test(match[0]) && !/evo/i.test(name)) name += " Evo";
  return name;
}

const LEGACY_PLATFORM = "Legacy MQB / PQ-Series Platform (Pre-MQB-A0-IN Generation)";

function fallbackPlatform(model, brand) {
  const badge = (model.badge || "").toLowerCase();
  // "Hall of Fame" / "India-Exclusive" badges mark discontinued nameplates
  // that predate the current MQB-A0-IN generation (Rapid, Fabia, Vento,
  // Ameo, Jetta, Beetle...) — grouping them with the modern Kylaq/Slavia/
  // Virtus/Taigun lineup under the same platform would be misleading.
  if (/hall of fame|india-exclusive/.test(badge)) return LEGACY_PLATFORM;

  const body = (model.bodyType || "").toLowerCase();
  if (brand === "audi") {
    if (/compact sedan/.test(body)) return "MQB Evo";
    return "MLB Evo";
  }
  // Touareg and Phaeton ride the same large longitudinal-engine MLB Evo
  // architecture shared with Audi's Q7/Q8/A8, not the compact-car MQB family.
  if (/luxury 4x4 suv/.test(body) || /ultra-luxury/.test(badge)) return "MLB Evo";
  // Note: this generic compact-car bucket deliberately returns "MQB Evo",
  // not "MQB-A0-IN" — the India-specific platform tag is reserved for the
  // five actual India 2.0 models via PLATFORM_OVERRIDES below, so CBU
  // imports (T-Roc, Polo GTI, Jetta GLI...) aren't mislabeled as locally
  // built on the India-only architecture.
  if (/compact suv|compact sedan|hatchback/.test(body)) return "MQB Evo";
  return "MQB Evo";
}

// A handful of models the heuristics above get wrong or can't see from
// bodyType/badge text alone. Kodiaq and Tiguan are both badged "Luxury 4x4
// SUV" for UI theming, which the heuristic reads as MLB Evo (Touareg/Q7
// class), but both are genuinely MQB-family cars. The Beetle predates MQB
// entirely. Kylaq/Slavia/Kushaq/Virtus/Taigun are explicitly pinned to the
// real India 2.0 MQB-A0-IN platform they actually share.
const PLATFORM_OVERRIDES = {
  "skoda:kodiaq": "MQB Evo",
  "skoda:kylaq": "MQB-A0-IN",
  "skoda:slavia": "MQB-A0-IN",
  "skoda:kushaq": "MQB-A0-IN",
  "volkswagen:tiguan": "MQB Evo",
  "volkswagen:beetle": LEGACY_PLATFORM,
  "volkswagen:virtus": "MQB-A0-IN",
  "volkswagen:taigun": "MQB-A0-IN",
  // Porsche's own dedicated sports-car architecture (911, 718) is not
  // shared with any other Group brand's models in this showcase, so it
  // gets its own "MSB" bucket rather than falling into the generic MQB
  // Evo fallback. The Macan/Cayenne/Panamera SUVs and grand tourer, by
  // contrast, genuinely ride the Group's shared MLB Evo architecture
  // (the Macan shares it with the Audi Q5).
  "porsche:911-carrera": "MSB",
  "porsche:718-cayman": "MSB",
  "porsche:macan": "MLB Evo",
  "porsche:cayenne": "MLB Evo",
  "porsche:panamera": "MLB Evo",
  // Lamborghini's V10/V12 sports cars ride their own dedicated aluminum/
  // carbon-fibre architecture, not shared with any other Group brand's
  // models in this showcase. The Urus, however, genuinely rides the same
  // shared MLB Evo architecture as the Porsche Cayenne and Audi Q8.
  "lamborghini:huracan": "MSB",
  "lamborghini:revuelto": "MSB",
  "lamborghini:urus": "MLB Evo",
  // Bentley's Continental GT and Flying Spur genuinely share the MSB
  // sports-luxury architecture with the Porsche Panamera, while the
  // Bentayga rides the same shared MLB Evo platform as the Porsche
  // Cayenne, Audi Q7/Q8 and Lamborghini Urus.
  "bentley:continental-gt": "MSB",
  "bentley:flying-spur": "MSB",
  "bentley:bentayga": "MLB Evo",
};

export function derivePlatform(model, brand) {
  const override = PLATFORM_OVERRIDES[`${brand}:${model.id}`];
  if (override) return override;
  return extractPlatformFromText(model) || fallbackPlatform(model, brand);
}

// --- Drivetrain derivation ----------------------------------------------

export function deriveDrivetrain(model) {
  const combined = (model.keyHighlights || []).join(" | ");
  if (/quattro/i.test(combined)) return "quattro Permanent All-Wheel Drive";
  if (/4motion/i.test(combined)) return "4MOTION Intelligent All-Wheel Drive";
  if (/intelligent 4x4|4x4 all-wheel/i.test(combined)) return "Intelligent 4x4 All-Wheel Drive";
  return "Front-Wheel Drive";
}

// --- Suspension derivation ------------------------------------------------

function deriveSuspension(model) {
  const combined = (model.keyHighlights || []).join(" | ");
  const bonus = findHighlight(model, /dynamic chassis control|dcc|adaptive (air )?suspension|air suspension/i);
  const body = (model.bodyType || "").toLowerCase();
  const base = /suv|4x4/.test(body)
    ? "MacPherson strut independent front suspension with a multi-link rear axle, reinforced subframe for SUV ride height"
    : "MacPherson strut independent front suspension with a torsion-beam or multi-link rear axle";
  return { base, bonus };
}

// --- Engine parsing --------------------------------------------------------

function parseEngineString(engineStr) {
  if (!engineStr) return {};
  const displacement = engineStr.match(/([\d.]+)L/i)?.[1];
  const power = engineStr.match(/([\d,]+)\s*PS/i)?.[1];
  const torque = engineStr.match(/([\d,]+)\s*Nm/i)?.[1];
  const isTurboDiesel = /tdi/i.test(engineStr);
  const isTurboPetrol = /tsi|tfsi/i.test(engineStr);
  return { displacement, power, torque, isTurboDiesel, isTurboPetrol };
}

// --- Group-wide platform DNA tree ------------------------------------------

// "MQB" (extracted verbatim from a couple of models' own text, e.g. Karoq
// and the A3) and "MQB Evo" are the same architecture family described with
// slightly different wording in different models' copy — normalized to one
// bucket here so the DNA tree doesn't show a near-duplicate column for two
// stray cars.
export function normalizePlatformName(name) {
  if (name === "MQB") return "MQB Evo";
  return name;
}

export const PLATFORM_DESCRIPTIONS = {
  "MQB-A0-IN": "India 2.0's dedicated compact platform, localized for Indian roads, thermal extremes and supply chains.",
  "MQB Evo": "The Group's global modular compact/mid-size platform, underpinning everything from hot hatches to executive liftbacks.",
  "MLB Evo": "Longitudinal-engine architecture for premium sedans and large SUVs, shared all the way up to Audi's flagship.",
  "MSB": "Dedicated sports-car architecture underpinning Porsche's rear-engine 911 and mid-engine 718 twins, and Lamborghini's own V10/V12 chassis. The Bentley Continental GT and Flying Spur also ride a variant of this architecture, shared with the Porsche Panamera.",
  [LEGACY_PLATFORM]: "Earlier-generation PQ/MQB architecture underpinning discontinued Hall of Fame nameplates.",
};

/**
 * Groups every model across all three brands by its derived platform —
 * the data backing the "DNA of the Group" tree view.
 */
export function getGroupPlatformTree(allBrandModels) {
  const groups = new Map();
  for (const [brand, models] of Object.entries(allBrandModels)) {
    for (const model of models) {
      const platform = normalizePlatformName(derivePlatform(model, brand));
      if (!groups.has(platform)) groups.set(platform, []);
      groups.get(platform).push({ id: model.id, name: model.name, brand, bodyType: model.bodyType });
    }
  }
  return [...groups.entries()]
    .map(([platform, models]) => ({
      platform,
      description: PLATFORM_DESCRIPTIONS[platform] || "Shared modular vehicle architecture.",
      models: models.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => b.models.length - a.models.length);
}

// --- Cross-model platform siblings ---------------------------------------

export function getPlatformSiblings(model, brand, allBrandModels) {
  const platform = derivePlatform(model, brand);
  const siblings = [];
  for (const [b, models] of Object.entries(allBrandModels)) {
    for (const m of models) {
      if (m.id === model.id && b === brand) continue;
      if (derivePlatform(m, b) === platform) siblings.push({ id: m.id, name: m.name, brand: b });
    }
  }
  return { platform, siblings: siblings.slice(0, 8) };
}

// --- Main layer builder ----------------------------------------------------

export function getLayers(model, brand, allBrandModels) {
  const engineParsed = parseEngineString(model.engines?.[0]);
  const suspension = deriveSuspension(model);
  const { platform, siblings } = getPlatformSiblings(model, brand, allBrandModels);
  const airbags = (model.keyHighlights || []).join(" ").match(/(\d+)\s*airbags?/i)?.[1];
  const techFacts = findAllHighlights(
    model,
    /virtual cockpit|touch response|infotainment|matrix led|oled|connect|wireless|ambient lighting|head-up display/i,
  ).slice(0, 3);

  return [
    {
      id: "exterior",
      title: "Exterior & Body",
      icon: "Car",
      hotspots: [{ x: 54, y: 40 }],
      summary: `${model.bodyType} body measuring ${model.dimensions?.length} long on a ${model.dimensions?.wheelbase} wheelbase.`,
      facts: [
        `Length × Width × Height: ${model.dimensions?.length} × ${model.dimensions?.width} × ${model.dimensions?.height}`,
        `Wheelbase: ${model.dimensions?.wheelbase} · Ground Clearance: ${model.dimensions?.groundClearance}`,
        `${model.colors?.length || 0} factory exterior colour options`,
      ],
    },
    {
      id: "platform",
      title: "Platform & Chassis",
      icon: "LayoutGrid",
      hotspots: [{ x: 50, y: 80 }],
      summary: `Built on the ${platform} modular architecture shared across the Volkswagen Group.`,
      facts: [
        `Platform: ${platform}`,
        "Modular architecture standardizes the floorpan, firewall position and crash-load pathways so engines, wheelbases and drivetrains can be mixed across models without re-engineering the core structure.",
        siblings.length
          ? `Shares this platform with ${siblings.length}+ sibling model${siblings.length > 1 ? "s" : ""} across the Group.`
          : "Platform-sharing data not available for this model.",
      ],
      siblings,
    },
    {
      id: "engine",
      title: "Engine",
      icon: "Fuel",
      hotspots: [{ x: 20, y: 60 }],
      summary: model.engines?.[0] || "Engine data unavailable",
      facts: [
        engineParsed.displacement ? `Displacement: ${engineParsed.displacement}L` : null,
        engineParsed.power ? `Peak Power: ${engineParsed.power} PS` : null,
        engineParsed.power && engineParsed.torque ? `Peak Torque: ${engineParsed.torque} Nm` : null,
        engineParsed.isTurboDiesel
          ? "Turbo-diesel direct injection (TDI) — high low-end torque, strong highway efficiency"
          : engineParsed.isTurboPetrol
            ? "Turbocharged direct-injection petrol (TSI/TFSI) — responsive, efficient power delivery"
            : null,
      ].filter(Boolean),
    },
    {
      id: "transmission",
      title: "Transmission & Drivetrain",
      icon: "Cog",
      hotspots: [{ x: 33, y: 68 }],
      summary: deriveDrivetrain(model),
      facts: [
        `Drivetrain: ${deriveDrivetrain(model)}`,
        `Transmission options: ${[...new Set(model.variants?.flatMap((v) => v.transmissions) || [])].join(", ") || "Not specified"}`,
      ],
    },
    {
      id: "suspension",
      title: "Suspension",
      icon: "Activity",
      hotspots: [
        { x: 31, y: 69 },
        { x: 73, y: 69 },
      ],
      summary: suspension.base,
      facts: [suspension.base, suspension.bonus].filter(Boolean),
    },
    {
      id: "safety",
      title: "Safety & Crash Structure",
      icon: "ShieldCheck",
      hotspots: [{ x: 50, y: 45 }],
      summary: `${model.rating || "5-Star"} crash safety with a hot-formed high-strength steel safety cell.`,
      facts: [
        `Crash Rating: ${model.rating}`,
        airbags ? `${airbags} airbags standard` : "Multiple airbags standard",
        "Hot-formed, laser-welded ultra-high-strength steel safety cell absorbs and redirects impact energy around the passenger cabin.",
      ],
    },
    {
      id: "electronics",
      title: "Electronics & Tech",
      icon: "Cpu",
      hotspots: [{ x: 46, y: 38 }],
      summary: "Digital cockpit and connected-car electronics architecture.",
      facts: techFacts.length ? techFacts : ["Standard digital instrument cluster and touchscreen infotainment"],
    },
  ];
}
