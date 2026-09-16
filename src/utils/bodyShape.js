// Maps a model's real bodyType string to one of CarSilhouette's distinct
// silhouette shapes, so a Kylaq no longer renders as the exact same generic
// blob as a Kodiaq or a Superb — each body category gets its own proportions.
export function getBodyShape(bodyType = "") {
  const t = bodyType.toLowerCase();
  // Exact catalog bodyType values first.
  if (t.includes("hatchback")) return "hatchback";
  if (t.includes("estate")) return "estate";
  if (t.includes("executive")) return "sedan-large";
  if (t.includes("compact sedan") || t.includes("premium sedan")) return "sedan";
  if (t.includes("compact suv")) return "compact-suv";
  if (t.includes("luxury 4x4") || t.includes("luxury suv")) return "suv-large";
  if (t.includes("midsize suv") || t === "suv") return "suv";

  // Free-text performance/rival "category" strings (e.g. "Track-Ready Hot
  // Hatch / CBU Icon", "Full-Size Performance 4x4 SUV (7-Seater)").
  if (t.includes("estate") || t.includes("shooting brake")) return "estate";
  if (t.includes("hatch") || t.includes("crossover")) return "hatchback";
  if (t.includes("full-size") || t.includes("ladder-frame") || t.includes("4x4") || t.includes("7-seat")) return "suv-large";
  if (t.includes("compact") && t.includes("suv")) return "compact-suv";
  if (t.includes("suv")) return "suv";
  if (t.includes("executive") || t.includes("luxury sedan") || t.includes("midsize premium sedan")) return "sedan-large";
  if (t.includes("liftback") || t.includes("saloon") || t.includes("sedan")) return "sedan";

  return "sedan";
}
