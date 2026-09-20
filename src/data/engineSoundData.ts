export interface EngineSoundProfile {
  id: string;
  label: string;
  displacement: string;
  cylinders: string;
  fuelType: 'Petrol' | 'Diesel';
  idleRpm: number;
  redlineRpm: number;
  baseFrequency: number; // approximate firing-frequency character used for synthesis
  timbre: 'smooth' | 'gruff' | 'sporty' | 'clattery' | 'deep-v8';
  usedIn: string[];
  character: string;
}

export const ENGINE_SOUND_PROFILES: EngineSoundProfile[] = [
  {
    id: '1.0-tsi',
    label: '1.0 TSI',
    displacement: '999cc',
    cylinders: '3-Cylinder Turbo Petrol',
    fuelType: 'Petrol',
    idleRpm: 850,
    redlineRpm: 6500,
    baseFrequency: 60,
    timbre: 'clattery',
    usedIn: ['Kylaq', 'Kushaq', 'Taigun', 'Polo GT'],
    character: 'A characterful off-beat thrum at idle from the 3-cylinder firing order, smoothing into a keen turbo whistle as revs build.',
  },
  {
    id: '1.5-tsi',
    label: '1.5 TSI EVO',
    displacement: '1498cc',
    cylinders: '4-Cylinder Turbo Petrol (ACT)',
    fuelType: 'Petrol',
    idleRpm: 800,
    redlineRpm: 6500,
    baseFrequency: 75,
    timbre: 'smooth',
    usedIn: ['Octavia', 'Superb', 'Kodiaq', 'Virtus GT', 'Taigun GT'],
    character: 'Refined and linear with Active Cylinder Technology silencing two cylinders at cruise, then a purposeful mid-range surge under load.',
  },
  {
    id: '2.0-tsi',
    label: '2.0 TSI',
    displacement: '1984cc',
    cylinders: '4-Cylinder Turbo Petrol EA888',
    fuelType: 'Petrol',
    idleRpm: 800,
    redlineRpm: 6800,
    baseFrequency: 82,
    timbre: 'sporty',
    usedIn: ['Octavia vRS', 'Kodiaq vRS', 'Golf GTI', 'Tiguan R-Line'],
    character: 'The vRS/GTI signature — a hard-edged bark on start-up, crackling overrun on the sportier exhausts, and a hungry pull to redline.',
  },
  {
    id: '2.0-tdi',
    label: '2.0 TDI',
    displacement: '1968cc',
    cylinders: '4-Cylinder Turbo Diesel',
    fuelType: 'Diesel',
    idleRpm: 780,
    redlineRpm: 4800,
    baseFrequency: 45,
    timbre: 'gruff',
    usedIn: ['Superb TDI (legacy)', 'Kodiaq TDI (legacy)'],
    character: 'That familiar diesel clatter at idle, settling into a torque-laden growl — all low-end shove and very little drama up top.',
  },
  {
    id: '3.0-tfsi',
    label: '3.0 TFSI',
    displacement: '2995cc',
    cylinders: 'V6 Turbo Petrol',
    fuelType: 'Petrol',
    idleRpm: 750,
    redlineRpm: 6800,
    baseFrequency: 68,
    timbre: 'deep-v8',
    usedIn: ['Audi A6 55 TFSI', 'Audi Q7 55 TFSI', 'Audi S-line'],
    character: 'A deep, cultured V6 burble underpinned by turbo hiss — refined at idle, gains a metallic six-cylinder wail near the redline.',
  },
  {
    id: '4.0-tfsi-v8',
    label: '4.0 TFSI V8',
    displacement: '3996cc',
    cylinders: 'V8 Twin-Turbo Petrol',
    fuelType: 'Petrol',
    idleRpm: 700,
    redlineRpm: 7000,
    baseFrequency: 38,
    timbre: 'deep-v8',
    usedIn: ['Audi RS 6 Avant', 'Audi RS Q8', 'Audi S8'],
    character: 'The halo unit — a thunderous, chesty V8 idle with pops on overrun, building to a ferocious twin-turbo howl at the top end.',
  },
  {
    id: '6.0-w12-twin-turbo',
    label: '6.0 W12 Twin-Turbo',
    displacement: '5950cc',
    cylinders: 'W12 Twin-Turbo Petrol',
    fuelType: 'Petrol',
    idleRpm: 720,
    redlineRpm: 6000,
    baseFrequency: 34,
    timbre: 'deep-v8',
    usedIn: ['Bentley Continental GT', 'Bentley Flying Spur'],
    character: 'A near-silent, cathedral-quiet idle that belies the twelve cylinders beneath — building to a silky, locomotive-like surge with no drama, ever.',
  },
  {
    id: '4.0-twin-turbo-v8-bentley',
    label: '4.0 Twin-Turbo V8',
    displacement: '3996cc',
    cylinders: 'V8 Twin-Turbo Petrol',
    fuelType: 'Petrol',
    idleRpm: 780,
    redlineRpm: 6500,
    baseFrequency: 40,
    timbre: 'deep-v8',
    usedIn: ['Bentley Bentayga', 'Bentley Bentayga Speed'],
    character: 'A refined, bassy V8 burble at idle, sharpening into a confident sports-exhaust note on the Speed variant’s retuned calibration.',
  },
];

export interface SoundEventProfile {
  id: string;
  label: string;
  description: string;
}

export const SOUND_EVENTS: SoundEventProfile[] = [
  { id: 'cold-start', label: 'Cold Start', description: 'A brief high-idle flare on ignition before settling.' },
  { id: 'idle', label: 'Idle', description: 'Steady resting RPM, engine at operating temperature.' },
  { id: 'rev', label: 'Rev to Redline', description: 'Full-throttle sweep from idle to the rev limiter.' },
  { id: 'launch', label: 'Launch', description: 'Held at peak torque RPM, then a hard release.' },
  { id: 'downshift', label: 'Downshift Blip', description: 'A quick throttle blip matching revs for a lower gear.' },
];
