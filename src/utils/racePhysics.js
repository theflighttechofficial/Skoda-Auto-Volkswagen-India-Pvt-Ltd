// A lightweight kinematic approximation used to animate the race and to
// estimate stats we don't have real figures for (0-60mph, 100-200 km/h,
// quarter mile). Velocity is modelled as an exponential approach to top
// speed, v(t) = vMax * (1 - e^(-t/tau)), with tau solved so the curve
// passes through the car's *real* 0-100 km/h time. Everything derived
// from this curve is clearly labelled "Estimated" in the UI — only
// topSpeedKmh and the 0-100 time themselves are real spec data.

const KMH_100 = 100;
const MPH_60_IN_KMH = 96.56;
const QUARTER_MILE_M = 402.336;

export function buildVelocityModel(accelSeconds, topSpeedKmh) {
  const vMax = topSpeedKmh;
  // Solve tau from vMax*(1 - e^(-t/tau)) = 100 at t = accelSeconds
  const ratio = Math.min(0.999, KMH_100 / vMax);
  const tau = -accelSeconds / Math.log(1 - ratio);
  return { vMax, tau };
}

// Speed (km/h) at virtual time t (seconds)
export function speedAt(model, t) {
  return model.vMax * (1 - Math.exp(-t / model.tau));
}

// Distance travelled (metres) by virtual time t (seconds).
// Integral of v(t) [km/h -> m/s via /3.6] dt.
export function distanceAt(model, t) {
  const vMaxMs = model.vMax / 3.6;
  return vMaxMs * t - vMaxMs * model.tau * (1 - Math.exp(-t / model.tau));
}

// Time (seconds) to reach a target speed (km/h). Returns Infinity if the
// car's top speed can't reach it.
export function timeToSpeed(model, targetKmh) {
  if (targetKmh >= model.vMax) return Infinity;
  return -model.tau * Math.log(1 - targetKmh / model.vMax);
}

// Time (seconds) to cover a target distance (metres), via bisection.
export function timeToDistance(model, targetMetres) {
  let lo = 0;
  let hi = 60;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (distanceAt(model, mid) < targetMetres) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

export function computeRaceStats(racer) {
  const model = buildVelocityModel(racer.accelSeconds, racer.topSpeedKmh);
  const t60mph = timeToSpeed(model, MPH_60_IN_KMH);
  const t100to200 =
    racer.topSpeedKmh > 200 ? timeToSpeed(model, 200) - timeToSpeed(model, 100) : null;
  const tQuarterMile = timeToDistance(model, QUARTER_MILE_M);
  const quarterMileTrapSpeed = speedAt(model, tQuarterMile);
  return {
    model,
    zeroToSixtyMph: t60mph,
    zeroToHundred: racer.accelSeconds,
    hundredToTwoHundred: t100to200,
    quarterMileSeconds: tQuarterMile,
    quarterMileTrapKmh: quarterMileTrapSpeed,
  };
}

export const QUARTER_MILE_METRES = QUARTER_MILE_M;
