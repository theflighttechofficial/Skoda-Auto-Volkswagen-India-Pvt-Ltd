// Derives configurator add-on options (wheels, interior trim, optional
// equipment) from each variant's real data, plus a small set of curated
// upsell add-ons that aren't already included in the variant's standard
// feature list. Prices are clearly-labelled estimates in the same spirit
// as the app's existing "Estimated 5-Year Cost of Ownership" figures.

export function formatLakh(amount) {
  if (!amount) return "₹0";
  return `₹${(amount / 100000).toFixed(2)} Lakh`;
}

export function formatRupees(amount) {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

export function getWheelOptions(model, variant) {
  const baseWheel =
    variant.exteriorHighlights?.find((h) => /alloy wheel/i.test(h)) ||
    `${model.bodyType?.includes("SUV") ? "17-inch" : "16-inch"} alloy wheels`;
  return [
    { id: "standard", name: baseWheel, priceDelta: 0, description: "Factory-fitted standard alloys for this trim" },
    {
      id: "diamond-cut",
      name: "Diamond-Cut Two-Tone Alloys",
      priceDelta: 18000,
      description: "Machine-polished two-tone finish for extra showroom shine",
    },
    {
      id: "gloss-black",
      name: "Gloss Black Performance Alloys",
      priceDelta: 32000,
      description: "Blacked-out sporty alloy upgrade with a wider stance look",
    },
  ];
}

export function getInteriorOptions(model, variant) {
  const isFlagship = !!variant.isFlagship;
  const options = [
    {
      id: "classic",
      name: "Classic Black Upholstery",
      priceDelta: 0,
      description: variant.interiorHighlights?.[0] || "Standard fabric/leatherette upholstery for this trim",
    },
    {
      id: "two-tone",
      name: "Two-Tone Beige & Black Leather",
      priceDelta: 22000,
      description: "Lighter cabin ambience with contrast stitching",
    },
  ];
  if (isFlagship) {
    options.push({
      id: "full-leather",
      name: "Full Leather with Ambient Lighting",
      priceDelta: 45000,
      description: "Extended leather wrap with 30-colour ambient lighting package",
    });
  }
  return options;
}

const OPTIONAL_EQUIPMENT_CATALOGUE = [
  { id: "sunroof", name: "Panoramic Sunroof", priceDelta: 35000, match: /sunroof/i },
  { id: "ventilated-seats", name: "Ventilated Front Seats", priceDelta: 18000, match: /ventilated/i },
  { id: "360-camera", name: "360° Camera", priceDelta: 22000, match: /360.?degree|360.?camera|surround.?view/i },
  { id: "wireless-charging", name: "Wireless Smartphone Charging", priceDelta: 8000, match: /wireless.*charg/i },
  { id: "premium-audio", name: "Premium Sound System Upgrade", priceDelta: 28000, match: /canton|bang.*olufsen|premium.*sound/i },
  { id: "adaptive-cruise", name: "Adaptive Cruise Control", priceDelta: 40000, match: /adaptive cruise/i },
  { id: "matrix-led", name: "Matrix LED Headlamps", priceDelta: 30000, match: /matrix led/i },
  { id: "heated-seats", name: "Heated Front Seats", priceDelta: 15000, match: /heated/i },
];

export function getOptionalEquipment(model, variant) {
  const alreadyIncluded = [
    ...(variant.keyFeatures || []),
    ...(variant.exteriorHighlights || []),
    ...(variant.interiorHighlights || []),
  ].join(" | ");
  return OPTIONAL_EQUIPMENT_CATALOGUE.filter((item) => !item.match.test(alreadyIncluded));
}

export function calculateBuildTotal({ variant, wheel, interior, options }) {
  const base = variant?.baseExShowroom || 0;
  const wheelDelta = wheel?.priceDelta || 0;
  const interiorDelta = interior?.priceDelta || 0;
  const optionsDelta = (options || []).reduce((sum, o) => sum + (o.priceDelta || 0), 0);
  return base + wheelDelta + interiorDelta + optionsDelta;
}
