// Approximate relative positions (percentage of a 0-100 square) for each state
// that appears in DEALERSHIPS, used to render a stylized (not survey-accurate)
// interactive map of India. Positions are hand-placed to roughly mirror real
// geography rather than sourced from a geographic dataset.
export const STATE_MAP_COORDINATES: Record<string, { x: number; y: number }> = {
  'Jammu & Kashmir': { x: 36, y: 8 },
  'Punjab & Chandigarh': { x: 38, y: 20 },
  'Uttarakhand': { x: 50, y: 21 },
  'Haryana': { x: 41, y: 24 },
  'Delhi NCR': { x: 44, y: 26 },
  'Rajasthan': { x: 29, y: 32 },
  'Uttar Pradesh': { x: 51, y: 31 },
  'Bihar': { x: 61, y: 34 },
  'Assam': { x: 76, y: 32 },
  'Jharkhand': { x: 60, y: 42 },
  'West Bengal': { x: 66, y: 44 },
  'Madhya Pradesh': { x: 45, y: 46 },
  'Gujarat': { x: 21, y: 47 },
  'Chhattisgarh': { x: 54, y: 50 },
  'Odisha': { x: 62, y: 53 },
  'Maharashtra': { x: 33, y: 57 },
  'Goa': { x: 29, y: 66 },
  'Telangana': { x: 48, y: 61 },
  'Andhra Pradesh': { x: 51, y: 69 },
  'Karnataka': { x: 37, y: 71 },
  'Tamil Nadu': { x: 43, y: 83 },
  'Kerala': { x: 35, y: 82 },
  'Puducherry': { x: 46, y: 80 },
};
