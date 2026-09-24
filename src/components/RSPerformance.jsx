import { useState, useEffect } from "react";
import {
  Flame,
  Zap,
  Gauge,
  Activity,
  Timer,
  Trophy,
  Volume2,
  Sliders,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Luggage,
  Flag,
  Swords,
  Scale,
  TrendingUp,
  Check,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import {
  RS_MODELS,
  RS_HERITAGE,
  RIVAL_COMPARISONS,
} from "../data/rsPerformanceData";
import {
  VW_GT_MODELS,
  GTI_HERITAGE,
  VW_RIVAL_COMPARISONS,
} from "../data/vwPerformanceData";
import {
  AUDI_RS_MODELS,
  AUDI_SPORT_HERITAGE,
  AUDI_RIVAL_COMPARISONS,
} from "../data/audiPerformanceData";
import { PORSCHE_GT_MODELS } from "../data/porschePerformanceData";
import { LAMBORGHINI_GT_MODELS } from "../data/lamborghiniPerformanceData";
import { BENTLEY_GT_MODELS } from "../data/bentleyPerformanceData";
import { SEAT_GT_MODELS } from "../data/seatPerformanceData";
import { SCANIA_GT_MODELS } from "../data/scaniaPerformanceData";
import { MAN_GT_MODELS } from "../data/manPerformanceData";

const LAMBORGHINI_HERITAGE = [
  {
    year: "1963",
    title: "Ferruccio Lamborghini Founds His Company",
    desc: "A tractor manufacturer's dispute with Enzo Ferrari over a clutch sparks the founding of Automobili Lamborghini in Sant'Agata Bolognese, determined to out-engineer Ferrari on refinement.",
  },
  {
    year: "1966",
    title: "The Miura Invents the Supercar",
    desc: "A transverse mid-mounted V12 and radical styling make the Miura the template every subsequent supercar manufacturer would chase for the next six decades.",
  },
  {
    year: "1998",
    title: "Volkswagen Group Acquisition",
    desc: "Audi takes stewardship of Lamborghini, bringing German engineering discipline and platform-sharing resources to Sant'Agata without diluting the raging-bull character.",
  },
  {
    year: "2018",
    title: "The Urus Redefines the Super SUV",
    desc: "Lamborghini's first SUV since the 1980s LM002 shares its platform with the Porsche Cayenne and Audi Q8, becoming the brand's best-selling model worldwide.",
  },
  {
    year: "2023",
    title: "The Revuelto Ushers in the Hybrid Era",
    desc: "Lamborghini's first series-production plug-in hybrid fuses a naturally-aspirated V12 with three electric motors for 1,015 PS combined, replacing the Aventador as flagship.",
  },
];

const BENTLEY_HERITAGE = [
  {
    year: "1919",
    title: "W.O. Bentley Founds His Company",
    desc: "Walter Owen Bentley establishes Bentley Motors Limited in Cricklewood, London, determined to build cars that were both genuinely fast and utterly dependable.",
  },
  {
    year: "1930",
    title: "Fifth Le Mans Victory",
    desc: "The Bentley Speed Six secures the marque's fifth Le Mans 24 Hours win of the decade, the high-water mark of the legendary “Bentley Boys” era.",
  },
  {
    year: "1952",
    title: "The R-Type Continental Sets the Blueprint",
    desc: "Styled by H.J. Mulliner, the R-Type Continental becomes the fastest four-seat production car in the world, establishing the Continental grand-touring formula.",
  },
  {
    year: "1998",
    title: "Volkswagen Group Acquisition",
    desc: "The Volkswagen Group acquires Bentley and the Crewe factory, funding a bespoke twin-turbo W12 engine that transforms the brand's volumes and image.",
  },
  {
    year: "2015",
    title: "The Bentayga Launches",
    desc: "Bentley's first-ever SUV shares platform engineering with the Porsche Cayenne and Audi Q7/Q8, quickly becoming the brand's best-selling model worldwide.",
  },
];

const PORSCHE_HERITAGE = [
  {
    year: "1948",
    title: "Birth of a Sports Car: The Porsche 356",
    desc: "Ferry Porsche builds the first car to carry his own name in Gmünd, Austria — a lightweight, rear-engined roadster that establishes the driver-focused DNA every GT model still carries.",
  },
  {
    year: "1963",
    title: "The 911 Arrives at Frankfurt",
    desc: "The Porsche 901 (renamed 911) debuts with its signature rear-mounted flat-six, setting the template for six decades of continuous evolution rather than reinvention.",
  },
  {
    year: "1999",
    title: "GT3 Nameplate is Born",
    desc: "The first 911 GT3 launches as a homologation special for GT racing, pairing a naturally-aspirated Mezger flat-six with track-honed suspension for the purest road-going 911 yet.",
  },
  {
    year: "2013",
    title: "Cayenne Turbo Sets the SUV Benchmark",
    desc: "Porsche proves an SUV can lap the Nürburgring like a sports car, laying the groundwork for the Cayenne Turbo GT's later production-SUV lap record.",
  },
  {
    year: "2020",
    title: "992-Generation Turbo S Redefines All-Weather Speed",
    desc: "The 650 PS 911 Turbo S combines Porsche Traction Management all-wheel drive with active aerodynamics for a 2.7-second sprint to 100 km/h in any weather.",
  },
];

const SCANIA_HERITAGE = [
  {
    year: "1891",
    title: "Vabis Founded in Södertälje",
    desc: "Vagnfabriks Aktiebolaget i Södertälje (Vabis) begins building railway wagons, laying the industrial foundation for what would become Scania-Vabis.",
  },
  {
    year: "1911",
    title: "Scania-Vabis Merger",
    desc: "Scania (Malmö) and Vabis (Södertälje) merge, adopting the griffin of the historic Scania province as the brand's enduring emblem.",
  },
  {
    year: "1969",
    title: "The First Scania V8",
    desc: "Scania becomes the first European truck maker to offer a V8 engine, beginning an uninterrupted V8 heritage that continues in the flagship S 730 today.",
  },
  {
    year: "2000",
    title: "Volkswagen Group / TRATON Ownership",
    desc: "Volkswagen Group builds a controlling stake in Scania, later consolidating it under TRATON SE alongside MAN — making Scania the Group's dedicated heavy-truck and bus marque.",
  },
  {
    year: "2013",
    title: "Narsapura Plant Opens in India",
    desc: "Scania opens its Narsapura manufacturing plant near Bengaluru, building trucks and buses for Indian state transport undertakings and long-haul fleet operators.",
  },
];

const MAN_HERITAGE = [
  {
    year: "1758",
    title: "St. Antony Ironworks Founded in Oberhausen",
    desc: "MAN's earliest predecessor begins as an ironworks, laying the industrial foundation for what would grow into one of Germany's great heavy-engineering houses.",
  },
  {
    year: "1897",
    title: "Rudolf Diesel Perfects the Diesel Engine at MAN",
    desc: "Working at MAN's Augsburg works, Rudolf Diesel completes the first practical diesel engine, a breakthrough that would come to define heavy-truck powertrains worldwide.",
  },
  {
    year: "1951",
    title: "MAN Enters Truck & Bus Manufacturing at Scale",
    desc: "Post-war MAN consolidates its commercial-vehicle operations, building the heavy trucks and buses that would become its core business for the rest of the 20th century.",
  },
  {
    year: "2011",
    title: "Volkswagen Group Ownership & TRATON Integration",
    desc: "Volkswagen Group takes a controlling stake in MAN, later consolidating it under TRATON SE alongside Scania — the Group's second dedicated heavy-truck and bus marque.",
  },
  {
    year: "2011",
    title: "Pithampur Plant Opens in India",
    desc: "MAN's India operations begin with the MAN Force Trucks joint venture with Force Motors at Pithampur, Madhya Pradesh, building trucks and buses for the Indian market.",
  },
];

const SEAT_HERITAGE = [
  {
    year: "1950",
    title: "SEAT Founded as Spain's National Carmaker",
    desc: "Sociedad Española de Automóviles de Turismo is founded in Barcelona, initially building licensed Fiat designs like the SEAT 600 that motorised post-war Spain.",
  },
  {
    year: "1990",
    title: "Full Volkswagen Group Ownership",
    desc: "Volkswagen completes acquisition of SEAT, funding the state-of-the-art Martorell plant and giving the brand genuine Group platform engineering for the first time.",
  },
  {
    year: "1996",
    title: "The Cupra Badge Is Born",
    desc: "The Ibiza Cupra introduces the \"Cupra\" performance nameplate, beginning a 25-year in-house hot-hatch tradition.",
  },
  {
    year: "2021",
    title: "Cupra Becomes a Standalone Brand",
    desc: "After the 300 PS Leon Cupra, Volkswagen Group spins Cupra off as its own independent marque, ending SEAT's in-house performance era.",
  },
  {
    year: "Today",
    title: "Absent from the Indian Market",
    desc: "Unlike every other current Volkswagen Group brand, SEAT has no official distribution, CBU import programme or dealer network in India.",
  },
];

export const RSPerformance = ({
  brand = "skoda",
  onOpenAdvisor,
  onOpenCalculator,
}) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const isBentley = brand === "bentley";
  const isSeat = brand === "seat";
  const isScania = brand === "scania";
  const isMan = brand === "man";
  const performanceModels = isMan
    ? MAN_GT_MODELS
    : isScania
    ? SCANIA_GT_MODELS
    : isSeat
    ? SEAT_GT_MODELS
    : isBentley
    ? BENTLEY_GT_MODELS
    : isLamborghini
    ? LAMBORGHINI_GT_MODELS
    : isPorsche
    ? PORSCHE_GT_MODELS
    : isAudi
      ? AUDI_RS_MODELS
      : isVW
        ? VW_GT_MODELS
        : RS_MODELS;
  const performanceHeritage = isMan
    ? MAN_HERITAGE
    : isScania
    ? SCANIA_HERITAGE
    : isSeat
    ? SEAT_HERITAGE
    : isBentley
    ? BENTLEY_HERITAGE
    : isLamborghini
    ? LAMBORGHINI_HERITAGE
    : isPorsche
    ? PORSCHE_HERITAGE
    : isAudi
      ? AUDI_SPORT_HERITAGE
      : isVW
        ? GTI_HERITAGE
        : RS_HERITAGE;
  const rivalComparisons = isMan
    ? []
    : isScania
    ? []
    : isSeat
    ? []
    : isBentley
    ? []
    : isLamborghini
    ? []
    : isPorsche
    ? []
    : isAudi
      ? AUDI_RIVAL_COMPARISONS
      : isVW
        ? VW_RIVAL_COMPARISONS
        : RIVAL_COMPARISONS;
  const [selectedModelId, setSelectedModelId] = useState("octavia-vrs");
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [driveMode, setDriveMode] = useState("vrs");
  const [rivalModelTab, setRivalModelTab] = useState("octavia-vrs");
  const [selectedRivalId, setSelectedRivalId] = useState("bmw-330i");
  const [launchState, setLaunchState] = useState("idle");
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [currentRpm, setCurrentRpm] = useState(900);
  const [currentGForce, setCurrentGForce] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currentGear, setCurrentGear] = useState(1);
  const activeModel =
    performanceModels.find((m) => m.id === selectedModelId) ||
    performanceModels[0];
  const currentRivalGroup = rivalComparisons.find(
    (g) => g.skodaModelId === rivalModelTab,
  ) ||
    rivalComparisons[0] || { rivals: [] };
  const activeRival =
    currentRivalGroup.rivals.find((r) => r.id === selectedRivalId) ||
    currentRivalGroup.rivals[0] ||
    null;
  const activeSkodaForRival =
    performanceModels.find((m) => m.id === rivalModelTab) ||
    performanceModels[0];
  useEffect(() => {
    setSelectedColorIndex(0);
    resetLaunch();
  }, [selectedModelId]);
  useEffect(() => {
    setSelectedModelId(performanceModels[0].id);
    setRivalModelTab(performanceModels[0].id);
  }, [brand]);
  useEffect(() => {
    const group = rivalComparisons.find(
      (g) => g.skodaModelId === rivalModelTab,
    );
    if (group && group.rivals.length > 0) {
      setSelectedRivalId(group.rivals[0].id);
    }
  }, [rivalModelTab]);
  const startStaging = () => {
    if (launchState !== "idle" && launchState !== "completed") return;
    setLaunchState("staging");
    setCurrentSpeed(0);
    setCurrentGForce(0.1);
    setCurrentGear(1);
    setElapsedTime(0);
    let rpm = 900;
    const revInterval = setInterval(() => {
      rpm += 200;
      if (rpm >= 3500) {
        rpm = 3500 + Math.floor(Math.random() * 80 - 40);
      }
      setCurrentRpm(rpm);
    }, 40);
    setTimeout(() => {
      clearInterval(revInterval);
      triggerLaunch();
    }, 1500);
  };
  const triggerLaunch = () => {
    setLaunchState("launching");
    const targetTime = activeModel.accelSeconds;
    const startTime = Date.now();
    const peakG = activeModel.tractionType === "4x4 AWD" ? 1.18 : 1.05;
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1e3;
      setElapsedTime(Math.min(elapsed, targetTime));
      const progress = Math.min(elapsed / targetTime, 1);
      const easeSpeed = Math.round(100 * Math.pow(progress, 0.85));
      setCurrentSpeed(easeSpeed);
      if (easeSpeed < 48) {
        setCurrentGear(1);
        setCurrentRpm(Math.round(3500 + (easeSpeed / 48) * 3200));
      } else if (easeSpeed < 88) {
        setCurrentGear(2);
        setCurrentRpm(Math.round(4200 + ((easeSpeed - 48) / 40) * 2400));
      } else {
        setCurrentGear(3);
        setCurrentRpm(Math.round(4800 + ((easeSpeed - 88) / 12) * 1800));
      }
      if (progress < 0.3) {
        setCurrentGForce(Number((peakG * (0.8 + progress)).toFixed(2)));
      } else {
        setCurrentGForce(
          Number((peakG * (1 - (progress - 0.3) * 0.7)).toFixed(2)),
        );
      }
      if (progress >= 1) {
        clearInterval(interval);
        setCurrentSpeed(100);
        setCurrentRpm(activeModel.revLimit);
        setElapsedTime(targetTime);
        setCurrentGForce(0.42);
        setLaunchState("completed");
      }
    }, 30);
  };
  const resetLaunch = () => {
    setLaunchState("idle");
    setCurrentSpeed(0);
    setCurrentRpm(900);
    setCurrentGForce(0);
    setElapsedTime(0);
    setCurrentGear(1);
  };
  return (
    <div className="space-y-12 text-zinc-100">
      {/* High-Octane Hero Banner with vRS Red & Emerald Badge */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-red-900/40 p-6 sm:p-10 shadow-2xl">
        {/* Subtle checkered flag / motorsport pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ef4444 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            {/* Motorsport Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800 text-red-300 text-xs font-black tracking-widest uppercase">
              {isMan ? (
                <span className="flex items-center gap-1 font-black italic">
                  <span className="text-sky-400">D38</span>
                  <span className="text-red-500">/V8</span>
                </span>
              ) : isScania ? (
                <span className="flex items-center gap-1 font-black italic">
                  <span className="text-rose-400">V8</span>
                  <span className="text-red-500">/Super</span>
                </span>
              ) : isSeat ? (
                <span className="flex items-center gap-1 font-black italic">
                  <span className="text-orange-400">Cupra</span>
                  <span className="text-red-500">/FR</span>
                </span>
              ) : isBentley ? (
                <span className="flex items-center gap-1 font-black italic">
                  <span className="text-green-400">GT</span>
                  <span className="text-red-500">/Speed</span>
                </span>
              ) : isLamborghini ? (
                <span className="flex items-center gap-1 font-black italic">
                  <span className="text-yellow-400">GT</span>
                  <span className="text-red-500">/STO</span>
                </span>
              ) : isPorsche ? (
                <span className="flex items-center gap-1 font-black italic">
                  <span className="text-amber-400">GT</span>
                  <span className="text-red-500">/S</span>
                </span>
              ) : isAudi ? (
                <span className="flex items-center gap-1 font-black italic">
                  <span className="text-zinc-200">R</span>
                  <span className="text-red-500">S</span>
                </span>
              ) : isVW ? (
                <span className="flex items-center gap-1 font-black italic">
                  <span className="text-blue-400">GT</span>
                  <span className="text-red-500">GTI</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 font-black italic">
                  <span className="text-emerald-400">v</span>
                  <span className="text-red-500">RS</span>
                </span>
              )}
              <span className="text-zinc-400">|</span>
              <span className="text-zinc-200">
                {isMan
                  ? "MAN India Performance"
                  : isScania
                  ? "Scania India Performance"
                  : isSeat
                  ? "SEAT Performance (Not Sold in India)"
                  : isBentley
                  ? "Bentley India Performance"
                  : isLamborghini
                  ? "Lamborghini India Performance"
                  : isPorsche
                  ? "Porsche India Performance"
                  : isAudi
                    ? "Audi Sport India Performance"
                    : isVW
                      ? "Volkswagen India Performance"
                      : "\u0160koda Auto Volkswagen India Pvt. Ltd."}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase italic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
                {isMan
                  ? "Flagship Powertrain & Heavy-Duty Performance"
                  : isScania
                  ? "Flagship Powertrain & Heavy-Duty Performance"
                  : isSeat
                  ? "The Cupra Performance (Not Sold in India)"
                  : isBentley
                  ? "The GT Speed Performance"
                  : isLamborghini
                  ? "The GT & STO Performance"
                  : isPorsche
                  ? "The GT & Turbo Performance"
                  : isAudi
                    ? "Audi Sport RS & S Performance"
                    : isVW
                      ? "The GT & GTI Performance"
                      : "The vRS Performance"}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {isMan ? (
                <>
                  Built at the Pithampur plant in Madhya Pradesh and honed over decades of
                  heavy-duty engineering. Discover the flagship{" "}
                  <strong className="text-white">MAN TGX</strong> (up to 640 hp D38 V8,
                  long-haul tractor-trailer cab) and the versatile workhorse{" "}
                  <strong className="text-white">MAN TGS</strong> (common-rail D26 inline-six,
                  TipMatic 12-speed AMT).
                </>
              ) : isScania ? (
                <>
                  Built at the Narsapura plant near Bengaluru and honed over five decades of
                  V8 heritage. Discover the flagship{" "}
                  <strong className="text-white">Scania S 730</strong> (770 hp twin-turbo
                  V8, flat-floor S-series cab) and the fuel-efficiency benchmark{" "}
                  <strong className="text-white">Scania R 500</strong> (500 hp Scania Super
                  13-litre inline-six, Opticruise 12-speed AMT).
                </>
              ) : isSeat ? (
                <>
                  Built in Martorell and honed by SEAT's 25-year in-house Cupra performance
                  tradition. Discover the{" "}
                  <strong className="text-white">Leon Cupra</strong> (300 PS EA888
                  2.0 TSI, optional 4Drive AWD) and the badge that started it all, the{" "}
                  <strong className="text-white">Ibiza Cupra</strong> (210 PS turbo-petrol,
                  1996). SEAT is not officially sold or serviced in India — every figure here
                  is a global reference specification for enthusiast comparison only.
                </>
              ) : isBentley ? (
                <>
                  Hand-built in Crewe and honed for Grand Touring at speed.
                  Discover the twin-turbo{" "}
                  <strong className="text-white">Continental GT Speed</strong>{" "}
                  (659 PS W12, Electronic All-Wheel Steering) and the
                  performance flagship SUV{" "}
                  <strong className="text-white">Bentayga Speed</strong> (635
                  PS twin-turbo V8, active anti-roll stabilization).
                </>
              ) : isLamborghini ? (
                <>
                  Hand-built in Sant'Agata Bolognese and honed on the
                  N\u00fcrburgring Nordschleife. Discover the naturally-aspirated{" "}
                  <strong className="text-white">Hurac\u00e1n STO</strong> (640 PS,
                  8,500 RPM V10) and the hybrid flagship{" "}
                  <strong className="text-white">Revuelto</strong> (1,015 PS
                  combined V12 + tri-motor hybrid AWD).
                </>
              ) : isPorsche ? (
                <>
                  Hand-built in Zuffenhausen and honed on the N\u00fcrburgring
                  Nordschleife. Discover the naturally-aspirated{" "}
                  <strong className="text-white">911 GT3</strong> (510 PS,
                  9,000 RPM flat-six) and the all-weather{" "}
                  <strong className="text-white">911 Turbo S</strong> (650 PS
                  twin-turbo flat-six, Porsche Traction Management AWD).
                </>
              ) : isAudi ? (
                <>
                  Hand-built by Audi Sport in Neckarsulm for track-honed
                  precision. Discover the ferocious{" "}
                  <strong className="text-white">RS5</strong> (450 PS
                  hand-assembled 2.9 TFSI V6, quattro sport differential) and
                  the record-setting{" "}
                  <strong className="text-white">RS Q8</strong> (600 PS 4.0
                  TFSI V8, the fastest SUV Audi has ever built).
                </>
              ) : isVW ? (
                <>
                  Born on the German Autobahn and Nürburgring Nordschleife.
                  Discover the iconic{" "}
                  <strong className="text-white">Golf GTI</strong> (265 PS EA888
                  EVO4, VAQ differential) and India’s undisputed performance
                  sedan benchmark, the{" "}
                  <strong className="text-white">Virtus GT Plus Sport</strong>{" "}
                  (150 PS EA211 EVO with ACT & 7-Speed DSG).
                </>
              ) : (
                <>
                  Born on rugged World Rally Championship stages and refined by
                  Škoda Auto Volkswagen India Pvt. Ltd. for tarmac domination.
                  Discover the legendary{" "}
                  <strong className="text-white">Octavia vRS</strong> and the
                  record-setting{" "}
                  <strong className="text-white">Kodiaq vRS</strong>—engineered
                  with 265 PS EA888 firepower, VAQ electro-mechanical
                  limited-slip differentials, DCC Plus adaptive dampers, and
                  tested against India's fiercest luxury performance rivals.
                </>
              )}
            </p>

            {/* Rally Stats Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">
                  {isMan ? "260+ Years" : isScania ? "130+ Years" : isSeat ? "25+ Years" : isBentley ? "100+ Years" : isLamborghini ? "60+ Years" : isPorsche ? "75+ Years" : isAudi ? "40+ Years" : isVW ? "Nearly 50 Years" : "50+ Years"}
                </span>{" "}
                {isMan ? "of MAN Truck & Bus Heritage" : isScania ? "of Scania Truck & Bus Heritage" : isSeat ? "of Cupra Heritage (Not Sold in India)" : isBentley ? "of Grand-Touring Heritage" : isLamborghini ? "of Raging-Bull Heritage" : isPorsche ? "of GT Heritage" : isAudi ? "of quattro Legacy" : isVW ? "of GTI Legacy" : "of RS Heritage"}
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <Flame className="w-4 h-4 text-red-500" />
                <span className="font-semibold text-white">
                  {isMan ? "640 hp" : isScania ? "770 hp" : isSeat ? "300 PS" : isBentley ? "659 PS" : isLamborghini ? "1,015 PS" : isPorsche ? "650 PS" : isAudi ? "600 PS" : "265 PS"}
                </span>{" "}
                {isMan ? "D38 V8 Firepower" : isScania ? "Twin-Turbo V8 Firepower" : isSeat ? "EA888 Cupra Firepower" : isBentley ? "Twin-Turbo W12 Firepower" : isLamborghini ? "Hybrid V12 Firepower" : isPorsche ? "Twin-Turbo Flat-Six Firepower" : isAudi ? "4.0 TFSI V8 Firepower" : "EA888 EVO4 Firepower"}
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">
                  {isMan ? "TipMatic AMT" : isScania ? "Opticruise AMT" : isSeat ? "DCC Cupra" : isBentley ? "Dynamic Ride" : isLamborghini ? "LDVI Chassis" : isPorsche ? "PASM Sport" : isAudi ? "RS Adaptive Air" : "DCC Pro"}
                </span>{" "}
                Adaptive Chassis
              </div>
            </div>
          </div>

          {/* Quick Model Selector Pills */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            {performanceModels.map((car) => {
              const isSelected = selectedModelId === car.id;
              return (
                <button
                  key={car.id}
                  id={`rs-select-${car.id}`}
                  onClick={() => setSelectedModelId(car.id)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${isSelected ? "bg-zinc-900 border-red-500/80 shadow-lg shadow-red-950/40 ring-1 ring-red-500/50" : "bg-zinc-950/70 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60"}`}
                >
                  {car.image && (
                    <div className="w-full h-24 rounded-xl overflow-hidden mb-3 border border-zinc-800/80">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-black italic tracking-tight text-white group-hover:text-red-400 transition-colors">
                        {car.name}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-600/30 text-red-300 font-bold border border-red-500/40">
                        {car.acceleration0to100}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${isSelected ? "text-red-400 translate-x-1" : "text-zinc-500"}`}
                    />
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">{car.badge}</p>
                  <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-zinc-300">
                    <span className="text-red-400 font-bold">
                      {car.powerHp} PS
                    </span>
                    <span>•</span>
                    <span className="text-amber-400 font-bold">
                      {car.torqueNm} Nm
                    </span>
                    <span>•</span>
                    <span className="text-zinc-400">
                      {car.drivetrain.includes("4x4")
                        ? "4x4 AWD"
                        : "VAQ E-Diff"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Car Spotlight Card */}
      <motion.div
        key={activeModel.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 space-y-8 shadow-xl"
      >
        {/* Car Title Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="px-2 py-0.5 rounded bg-red-500 text-white text-[10px] font-black italic tracking-wider">
                {isMan ? "FLAGSHIP POWERTRAIN" : isScania ? "FLAGSHIP POWERTRAIN" : isSeat ? "CUPRA — NOT SOLD IN INDIA" : isBentley ? "GT EXCLUSIVE" : isLamborghini ? "GT EXCLUSIVE" : isPorsche ? "GT EXCLUSIVE" : isAudi ? "RS EXCLUSIVE" : isVW ? "GTI EXCLUSIVE" : "vRS EXCLUSIVE"}
              </span>
              <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                {activeModel.category}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white italic tracking-tight">
              {activeModel.name}
            </h2>
            <p className="text-sm text-zinc-300 mt-1 max-w-2xl">
              {activeModel.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800">
              <span className="text-[10px] uppercase font-bold text-zinc-500 block">
                Expected Ex-Showroom
              </span>
              <span className="text-lg font-black text-emerald-400">
                {activeModel.expectedPrice}
              </span>
            </div>
            {onOpenAdvisor && (
              <button
                onClick={() =>
                  onOpenAdvisor(
                    `Tell me all about the ${activeModel.name}, its track specs, VAQ diff/4x4, and delivery timelines.`,
                  )
                }
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors flex items-center gap-2 shadow-lg shadow-red-900/30"
              >
                <Sparkles className="w-4 h-4" />
                Ask RS Specialist
              </button>
            )}
          </div>
        </div>

        {/* Hero Photo */}
        {activeModel.image && (
          <div className="relative w-full h-56 sm:h-72 lg:h-96 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950">
            <img
              src={activeModel.image}
              alt={activeModel.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />
            <span className="absolute bottom-3 left-4 text-xs font-bold text-white/90 bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-sm">
              {activeModel.name}
            </span>
          </div>
        )}

        {/* 6 Key Telemetry Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-[11px] font-semibold uppercase">
                0–100 km/h
              </span>
              <Timer className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-2xl font-black text-white tracking-tight">
              {activeModel.acceleration0to100}
            </div>
            <span className="text-[10px] text-red-400 font-medium">
              Launch Control Tested
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-[11px] font-semibold uppercase">
                Peak Power
              </span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-white tracking-tight">
              {activeModel.powerHp} PS
            </div>
            <span className="text-[10px] text-zinc-400">
              {activeModel.power.match(/\(([^)]+)\)/)?.[1] || ""} Direct-Inj
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-[11px] font-semibold uppercase">
                Max Torque
              </span>
              <Flame className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-2xl font-black text-white tracking-tight">
              {activeModel.torqueNm} Nm
            </div>
            <span className="text-[10px] text-zinc-400">
              {activeModel.torque.split("@")[1]?.trim() || ""} flat
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-[11px] font-semibold uppercase">
                Top Speed
              </span>
              <Gauge className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-black text-white tracking-tight">
              {activeModel.topSpeedKmh} km/h
            </div>
            <span className="text-[10px] text-zinc-400">Track Calibrated</span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-[11px] font-semibold uppercase">
                Traction Tech
              </span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-base font-black text-white leading-tight mt-1">
              {activeModel.tractionType}
            </div>
            <span className="text-[10px] text-emerald-400 font-medium">
              100% Torque Lock
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-[11px] font-semibold uppercase">
                Chassis
              </span>
              <Sliders className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-base font-black text-white leading-tight mt-1">
              DCC Plus
            </div>
            <span className="text-[10px] text-zinc-400">
              Dual-Valve Adaptive
            </span>
          </div>
        </div>

        {/* Interactive Motorsport Color Palette Selector */}
        <div className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider block">
              Official RS Livery Shades
            </span>
            <div className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                style={{
                  backgroundColor: activeModel.colors[selectedColorIndex].hex,
                }}
              />
              <span className="text-sm font-bold text-white">
                {activeModel.colors[selectedColorIndex].name}
              </span>
              <span className="text-xs text-zinc-400">
                — {activeModel.colors[selectedColorIndex].desc}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {activeModel.colors.map((color, idx) => (
              <button
                key={color.name}
                onClick={() => setSelectedColorIndex(idx)}
                className={`group relative p-1 rounded-full transition-all ${selectedColorIndex === idx ? "ring-2 ring-red-500 scale-110" : "opacity-80 hover:opacity-100"}`}
                title={color.name}
              >
                <div
                  className="w-7 h-7 rounded-full border border-zinc-700 shadow-md transition-transform"
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Interactive Section: "Launch Control & Cockpit Dyno" Simulator */}
      <div className="rounded-3xl bg-zinc-950 border border-red-900/40 p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Timer className="w-4 h-4" />
              <span>Interactive Telemetry & Launch Control Simulator</span>
            </div>
            <h3 className="text-2xl font-black text-white italic tracking-tight">
              Test the {activeModel.name} 0–100 km/h Launch
            </h3>
            <p className="text-xs text-zinc-400">
              Simulate electronic Launch Control sequence with EA888 turbo spool
              and DSG shift points
            </p>
          </div>

          {/* Drive Mode Selector Switch */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 text-xs self-start">
            <span className="px-2 text-zinc-400 font-medium">Mode:</span>
            {["comfort", "sport", "vrs"].map((m) => (
              <button
                key={m}
                onClick={() => setDriveMode(m)}
                className={`px-3 py-1.5 rounded-lg font-bold uppercase transition-all ${driveMode === m ? (m === "vrs" ? "bg-red-600 text-white shadow-md shadow-red-900/50" : "bg-zinc-800 text-white") : "text-zinc-400 hover:text-white"}`}
              >
                {m === "vrs"
                  ? isMan
                    ? "\u26A1 Power Mode"
                    : isScania
                    ? "\u26A1 Power Mode"
                    : isSeat
                    ? "\u26A1 Cupra Mode"
                    : isBentley
                    ? "\u26A1 Sport Mode"
                    : isLamborghini
                    ? "\u26A1 Corsa Mode"
                    : isPorsche
                    ? "\u26A1 GT Mode"
                    : isAudi
                      ? "\u26A1 RS Mode"
                      : isVW
                        ? "\u26A1 GTI Mode"
                        : "\u26A1 vRS Mode"
                  : m}
              </button>
            ))}
          </div>
        </div>

        {/* Cockpit Digital Instrument Cluster & Telemetry Gauges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Main Virtual Cockpit Instrument Display */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 relative overflow-hidden shadow-inner">
            {/* Top RS Mode Strip */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-black tracking-widest text-red-400 uppercase">
                  {activeModel.name} • {driveMode.toUpperCase()} DYNAMICS ACTIVE
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                <span>
                  BOOST:{" "}
                  <strong className="text-white">
                    {activeModel.boostPsi} PSI
                  </strong>
                </span>
                <span>
                  GEAR:{" "}
                  <strong className="text-red-400 text-sm font-black">
                    D{currentGear}
                  </strong>
                </span>
              </div>
            </div>

            {/* Central Speed & Rev Displays */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center">
              {/* Tachometer RPM Display */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold text-zinc-400 block tracking-wider">
                  Engine RPM
                </span>
                <div className="text-4xl font-black font-mono tracking-tight text-white">
                  {currentRpm.toLocaleString()}
                </div>
                {/* Visual RPM Bar */}
                <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-75 ${currentRpm > 6e3 ? "bg-red-500 animate-pulse" : currentRpm > 4500 ? "bg-amber-400" : "bg-emerald-400"}`}
                    style={{
                      width: `${Math.min((currentRpm / activeModel.revLimit) * 100, 100)}%`,
                    }}
                  />
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">
                  Redline: {activeModel.revLimit} RPM
                </span>
              </div>

              {/* Central Speedometer */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
                <span className="text-[11px] uppercase font-bold text-red-400 block tracking-wider">
                  Velocity
                </span>
                <div className="text-6xl font-black font-mono tracking-tight text-white">
                  {currentSpeed}
                </div>
                <span className="text-xs font-bold text-zinc-400 uppercase">
                  km / h
                </span>
              </div>

              {/* Lateral / Longitudinal G-Force & Timer */}
              <div className="space-y-3">
                <div>
                  <span className="text-[11px] uppercase font-bold text-zinc-400 block tracking-wider">
                    Sprint Time
                  </span>
                  <div className="text-3xl font-black font-mono text-amber-400">
                    {elapsedTime.toFixed(2)}s
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-around text-xs">
                  <div>
                    <span className="text-[10px] text-zinc-500 block">
                      Peak G
                    </span>
                    <span className="font-bold text-red-400 font-mono">
                      {currentGForce} G
                    </span>
                  </div>
                  <div className="border-l border-zinc-800 pl-3">
                    <span className="text-[10px] text-zinc-500 block">
                      Target 0-100
                    </span>
                    <span className="font-bold text-white font-mono">
                      {activeModel.acceleration0to100}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Launch Status Banner */}
            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {launchState === "idle" && (
                  <span className="text-zinc-400">
                    Status: Engine idling at 900 RPM. Press Launch button below.
                  </span>
                )}
                {launchState === "staging" && (
                  <span className="text-amber-400 font-bold flex items-center gap-1.5 animate-pulse">
                    <Timer className="w-4 h-4" /> Spooling turbocharger to 3,500
                    RPM... Launch Control Armed!
                  </span>
                )}
                {launchState === "launching" && (
                  <span className="text-red-400 font-bold flex items-center gap-1.5">
                    <Zap className="w-4 h-4 animate-bounce" /> DSG Clutches
                    locked! 100% Torque unleashed!
                  </span>
                )}
                {launchState === "completed" && (
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> 0–100 km/h benchmark
                    captured: {activeModel.acceleration0to100}!
                  </span>
                )}
              </div>

              {launchState === "completed" && (
                <button
                  onClick={resetLaunch}
                  className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Run
                </button>
              )}
            </div>
          </div>

          {/* Launch Controls & Drive Settings */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-500" />
                Launch Control Trigger
              </h4>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {isMan ? "MAN's" : isScania ? "Scania's" : isSeat ? "SEAT's" : isBentley ? "Bentley's" : isLamborghini ? "Lamborghini's" : isPorsche ? "Porsche's" : isAudi ? "Audi's" : isVW ? "Volkswagen's" : "Škoda's"} electronic Launch Control
                synchronizes the wet multi-plate DSG clutches with the EA888
                turbocharger wastegate to prevent wheel spin and achieve
                instant forward velocity.
              </p>

              {/* Big Action Button */}
              <button
                id="rs-launch-button"
                disabled={
                  launchState === "staging" || launchState === "launching"
                }
                onClick={startStaging}
                className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 ${launchState === "staging" ? "bg-amber-500 text-black animate-pulse cursor-wait" : launchState === "launching" ? "bg-red-600 text-white cursor-wait animate-pulse" : launchState === "completed" ? "bg-emerald-600 hover:bg-emerald-500 text-white" : "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-red-950/60"}`}
              >
                {launchState === "idle" && (
                  <>
                    <Zap className="w-4 h-4" />
                    Engage Launch Control
                  </>
                )}
                {launchState === "staging" && "Staging at 3,500 RPM..."}
                {launchState === "launching" && "Accelerating to 100 km/h!"}
                {launchState === "completed" && (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    Launch Again
                  </>
                )}
              </button>

              {/* Active Sound Exhaust Valve Indicator */}
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 font-medium flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-red-400" />
                    Dynamic Sound Boost
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-950 text-red-300 border border-red-800">
                    {driveMode === "vrs"
                      ? "Flaps 100% Open"
                      : driveMode === "sport"
                        ? "Sport Active"
                        : "Quiet Stealth"}
                  </span>
                </div>
                {/* Audio visualizer bars */}
                <div className="flex items-center gap-1 h-4">
                  {[40, 80, 60, 100, 70, 90, 50, 85, 95, 60].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-red-500/80 rounded-full transition-all duration-150"
                      style={{
                        height:
                          driveMode === "comfort"
                            ? "25%"
                            : `${launchState === "launching" ? 100 : h}%`,
                        opacity: driveMode === "comfort" ? 0.3 : 1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Weaponry Matrix */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Precision Chassis Dynamics
            </span>
            <h3 className="text-2xl font-black text-white tracking-tight">
              {activeModel.name} Motorsport Weaponry
            </h3>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            Nürburgring Tuned
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeModel.weaponry.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-3 hover:border-red-600/50 transition-all shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-lg bg-red-950/80 text-red-300 text-[11px] font-bold border border-red-800/80">
                  {item.badge}
                </span>
                {item.icon === "Flame" && (
                  <Flame className="w-4 h-4 text-red-400" />
                )}
                {item.icon === "Zap" && (
                  <Zap className="w-4 h-4 text-amber-400" />
                )}
                {item.icon === "Activity" && (
                  <Activity className="w-4 h-4 text-emerald-400" />
                )}
                {item.icon === "Gauge" && (
                  <Gauge className="w-4 h-4 text-blue-400" />
                )}
                {item.icon === "Luggage" && (
                  <Luggage className="w-4 h-4 text-purple-400" />
                )}
                {item.icon === "ShieldCheck" && (
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                )}
              </div>

              <h4 className="text-base font-black text-white leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cockpit & Interior Aesthetics */}
      <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Driver Centric Ergonomics
            </span>
            <h3 className="text-xl font-black text-white tracking-tight">
              {isMan
                ? "Exclusive Flat-Floor Cab Architecture"
                : isScania
                ? "Exclusive Flat-Floor Cab Architecture"
                : isSeat
                ? "Exclusive Cupra Cockpit Architecture"
                : isBentley
                ? "Exclusive Mulliner Cockpit Architecture"
                : isLamborghini
                ? "Exclusive GT Cockpit Architecture"
                : isPorsche
                ? "Exclusive GT Cockpit Architecture"
                : isAudi
                  ? "Exclusive RS Cockpit Architecture"
                  : isVW
                    ? "Exclusive GTI Cockpit Architecture"
                    : "Exclusive vRS Cockpit Architecture"}
            </h3>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Alcantara & Carbon-Weave
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {activeModel.cockpitFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 text-xs text-zinc-300"
            >
              <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* vRS Performance vs. Market Rivals Section (rival benchmark data not yet curated for Porsche/Lamborghini/Bentley/SEAT/Scania/MAN) */}
      {!isPorsche && !isLamborghini && !isBentley && !isSeat && !isScania && !isMan && (
      <div
        id="rs-rivals-arena"
        className="rounded-3xl bg-zinc-900/90 border border-red-900/50 p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-800 pb-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-red-950 text-red-300 text-[11px] font-black italic tracking-wider border border-red-800 flex items-center gap-1.5">
                <Swords className="w-3.5 h-3.5 text-red-400" />
                {isAudi
                  ? "AUDI SPORT RS & S BENCHMARKS"
                  : isVW
                    ? "GT & GTI PERFORMANCE BENCHMARKS"
                    : "vRS PERFORMANCE BENCHMARKS"}
              </span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                {isAudi ? "Audi India (Volkswagen Group)" : "Škoda Auto Volkswagen India Pvt. Ltd."}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white italic tracking-tight">
              {isAudi
                ? "Audi Sport RS & S Performance vs. Market Rivals"
                : isVW
                  ? "GT & GTI Performance vs. Market Rivals"
                  : "The vRS Performance vs. Market Rivals"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-3xl">
              {isAudi
                ? "How Audi Sport's hand-built RS5 and RS Q8 stack up against performance rivals from BMW M, Mercedes-AMG, Lamborghini, and Porsche in the Indian market."
                : isVW
                  ? "How Volkswagen's GT and GTI performance range stacks up against hot hatches, performance sedans, and executive rivals from BMW, Mercedes-AMG, Hyundai, and Honda in the Indian market."
                  : "How Škoda's 265 PS track-tuned weapons stack up against executive luxury sedans, hot hatches, and performance SUVs from BMW, Mercedes-AMG, Audi, and Toyota in the Indian market."}
            </p>
          </div>

          {/* Category Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-950 border border-zinc-800 shrink-0">
            <button
              onClick={() => setRivalModelTab("octavia-vrs")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${rivalModelTab === "octavia-vrs" ? (isAudi ? "bg-red-600 text-white shadow-lg shadow-red-900/40" : isVW ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40" : "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40") : "text-zinc-400 hover:text-white"}`}
            >
              {isAudi
                ? "RS5 vs Sports Sedan Rivals"
                : isVW
                  ? "Golf GTI vs Hatch Rivals"
                  : "Octavia vRS vs Sedan Rivals"}
            </button>
            <button
              onClick={() => setRivalModelTab("kodiaq-vrs")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${rivalModelTab === "kodiaq-vrs" ? "bg-red-600 text-white shadow-lg shadow-red-900/40" : "text-zinc-400 hover:text-white"}`}
            >
              {isAudi
                ? "RS Q8 vs Super SUV Rivals"
                : isVW
                  ? "Virtus GT Plus vs Sedan Rivals"
                  : "Kodiaq vRS vs SUV Rivals"}
            </button>
          </div>
        </div>

        {/* Rival Selector Chips */}
        <div className="space-y-3 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Select Competitor to Duel Against {activeSkodaForRival.name}:
            </span>
            <span className="text-xs text-red-400 font-mono font-medium">
              4 Rivals Benchmarked
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {currentRivalGroup.rivals.map((rival) => {
              const isSelected = selectedRivalId === rival.id;
              return (
                <button
                  key={rival.id}
                  id={`rival-btn-${rival.id}`}
                  onClick={() => setSelectedRivalId(rival.id)}
                  className={`p-3 rounded-2xl border text-left transition-all ${isSelected ? "bg-red-950/60 border-red-500 shadow-md shadow-red-950/50 ring-1 ring-red-500/60" : "bg-zinc-950/80 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {rival.brand}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                      {rival.accelSeconds}s
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-white mt-1.5 line-clamp-1">
                    {rival.name}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    {rival.price}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Head-to-Head Clash Battlecard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
          {/* Left: vRS Performance Car */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-zinc-950 border-2 border-red-500/60 space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-red-600 text-white font-black italic text-[10px] rounded-bl-xl uppercase tracking-wider">
              {isAudi
                ? "Audi Sport RS & S Performance"
                : isVW
                  ? "GT & GTI Performance"
                  : "The vRS Performance"}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-[10px] px-2 py-0.5 rounded font-bold border ${isAudi ? "bg-red-950 text-red-300 border-red-800" : isVW ? "bg-blue-950 text-blue-300 border-blue-800" : "bg-emerald-950 text-emerald-300 border-emerald-800"}`}
                >
                  {isAudi ? "Audi India" : "Škoda Auto Volkswagen India"}
                </span>
              </div>
              <h4 className="text-2xl font-black text-white italic">
                {activeSkodaForRival.name}
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                {activeSkodaForRival.category}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400 uppercase font-semibold">
                Expected Ex-Showroom
              </span>
              <span className="text-lg font-black text-emerald-400">
                {activeSkodaForRival.expectedPrice}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-400 block font-sans uppercase">
                  Peak Output
                </span>
                <span className="text-base font-black text-red-400">
                  {activeSkodaForRival.powerHp} PS
                </span>
                <span className="text-[10px] text-zinc-400 block">
                  / {activeSkodaForRival.torqueNm} Nm
                </span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-400 block font-sans uppercase">
                  0–100 km/h
                </span>
                <span className="text-base font-black text-white">
                  {activeSkodaForRival.acceleration0to100}
                </span>
                <span className="text-[10px] text-emerald-400 block">
                  Launch Control
                </span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-400 block font-sans uppercase">
                  Differential / AWD
                </span>
                <span className="text-[11px] font-bold text-white block mt-0.5 leading-tight">
                  {activeSkodaForRival.tractionType}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-400 block font-sans uppercase">
                  Utility & Luggage
                </span>
                <span className="text-[11px] font-bold text-white block mt-0.5 leading-tight">
                  {activeSkodaForRival.bootAndSeating}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-red-950/40 border border-red-900/60 text-xs text-red-200">
              <span className="font-bold flex items-center gap-1.5 mb-1">
                <Trophy className="w-3.5 h-3.5 text-amber-400" /> Key Weapon:
              </span>
              <p className="text-[11px] leading-relaxed text-zinc-300">
                {activeSkodaForRival.keyWeaponSummary}
              </p>
            </div>
          </div>

          {/* Center: Clash Metrics & Value Delta */}
          <div className="lg:col-span-2 flex flex-col justify-center items-center gap-3 p-4 rounded-3xl bg-zinc-950/90 border border-zinc-800 text-center">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center font-black italic text-lg text-white shadow-lg shadow-red-900/50">
              VS
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                Price Advantage
              </span>
              <div className="text-sm font-black text-emerald-400 font-mono">
                {activeRival.priceNumericLakh >
                activeSkodaForRival.priceNumeric / 1e5 ? (
                  <>
                    Saves ~₹
                    {(
                      activeRival.priceNumericLakh -
                      activeSkodaForRival.priceNumeric / 1e5
                    ).toFixed(1)}{" "}
                    Lakh
                  </>
                ) : (
                  <>Competitive Value</>
                )}
              </div>
              <p className="text-[10px] text-zinc-400 leading-tight">
                Lower insurance, standard 4-Year Warranty & SuperCare packages
              </p>
            </div>

            <div className="w-full border-t border-zinc-800 my-1" />

            <div className="space-y-1 w-full">
              <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                Power Delta
              </span>
              <div className="text-xs font-bold text-white font-mono">
                {activeSkodaForRival.powerHp >= activeRival.powerHp ? (
                  <span className="text-emerald-400 font-black">
                    +{activeSkodaForRival.powerHp - activeRival.powerHp} PS
                    Advantage
                  </span>
                ) : (
                  <span className="text-zinc-300">
                    -{activeRival.powerHp - activeSkodaForRival.powerHp} PS (AMG
                    tuning)
                  </span>
                )}
              </div>
            </div>

            <div className="w-full border-t border-zinc-800 my-1" />

            <div className="space-y-1 w-full">
              <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                0–100 Sprint
              </span>
              <div className="text-xs font-bold text-white font-mono">
                {activeSkodaForRival.accelSeconds <=
                activeRival.accelSeconds ? (
                  <span className="text-emerald-400 font-black">
                    {(
                      activeRival.accelSeconds -
                      activeSkodaForRival.accelSeconds
                    ).toFixed(1)}
                    s Quicker
                  </span>
                ) : (
                  <span className="text-zinc-400">
                    {(
                      activeSkodaForRival.accelSeconds -
                      activeRival.accelSeconds
                    ).toFixed(1)}
                    s Difference
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Competitor Car */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-zinc-800 text-zinc-300 font-bold text-[10px] rounded-bl-xl uppercase tracking-wider">
              Competitor Benchmark
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 font-bold border border-zinc-800">
                  {activeRival.brand} India
                </span>
                <span className="text-[10px] text-zinc-500 uppercase">
                  {activeRival.category}
                </span>
              </div>
              <h4 className="text-2xl font-black text-white italic">
                {activeRival.name}
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                {activeRival.engine}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400 uppercase font-semibold">
                Ex-Showroom Price
              </span>
              <span className="text-lg font-black text-amber-400">
                {activeRival.price}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-400 block font-sans uppercase">
                  Peak Output
                </span>
                <span className="text-base font-black text-white">
                  {activeRival.powerHp} PS
                </span>
                <span className="text-[10px] text-zinc-400 block">
                  / {activeRival.torqueNm} Nm
                </span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-400 block font-sans uppercase">
                  0–100 km/h
                </span>
                <span className="text-base font-black text-white">
                  {activeRival.accelSeconds}s
                </span>
                <span className="text-[10px] text-zinc-400 block">
                  {activeRival.topSpeedKmh} km/h top
                </span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-400 block font-sans uppercase">
                  Differential / AWD
                </span>
                <span className="text-[11px] font-medium text-zinc-300 block mt-0.5 leading-tight">
                  {activeRival.differentialTech}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <span className="text-[10px] text-zinc-400 block font-sans uppercase">
                  Utility & Luggage
                </span>
                <span className="text-[11px] font-medium text-zinc-300 block mt-0.5 leading-tight">
                  {activeRival.seatingAndBoot}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs text-zinc-300">
              <span className="font-bold text-zinc-400 flex items-center gap-1.5 mb-1">
                <Scale className="w-3.5 h-3.5 text-zinc-400" /> Rival Strengths:
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {activeRival.keyStrengths.map((str, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
                  >
                    {str}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The vRS Advantage Callout Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-red-950/70 via-zinc-900 to-zinc-950 border border-red-800/80 space-y-3 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-red-600 text-white">
              <Trophy className="w-4 h-4" />
            </span>
            <h4 className="text-base font-black text-white italic">
              {isAudi
                ? "The Audi Sport RS Advantage"
                : isVW
                  ? "The GT & GTI Performance Advantage"
                  : "The vRS Performance Advantage"}{" "}
              vs {activeRival.name}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
            {activeRival.vrsAdvantage}
          </p>
          <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Check className="w-4 h-4 shrink-0" />
              <span>Enthusiast Verdict: {activeRival.verdict}</span>
            </div>
            {onOpenAdvisor && (
              <button
                onClick={() =>
                  onOpenAdvisor(
                    `Compare the ${activeSkodaForRival.name} vs ${activeRival.name} in detail regarding real-world performance, maintenance in India, and driving feel.`,
                  )
                }
                className="text-xs text-red-400 hover:text-red-300 font-bold underline cursor-pointer shrink-0"
              >
                Deep-Dive with AI Specialist →
              </button>
            )}
          </div>
        </div>

        {/* Complete Spec Comparison Table for Category */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 font-mono">
                Comprehensive Benchmarking Matrix
              </span>
              <h4 className="text-lg font-black text-white">
                {activeSkodaForRival.name} vs All Category Competitors
              </h4>
            </div>
            <span className="text-xs text-zinc-400 font-mono">
              Prices & Specs based on Indian market specifications
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead>
                <tr className="bg-zinc-950 border-b border-zinc-800 text-zinc-400 uppercase tracking-wider font-semibold">
                  <th className="py-3 px-4">Vehicle</th>
                  <th className="py-3 px-4">Engine / Powertrain</th>
                  <th className="py-3 px-4">Power (PS)</th>
                  <th className="py-3 px-4">Torque (Nm)</th>
                  <th className="py-3 px-4">0–100 km/h</th>
                  <th className="py-3 px-4">Diff / Traction</th>
                  <th className="py-3 px-4">Boot / Seats</th>
                  <th className="py-3 px-4">Ex-Showroom Price</th>
                  <th className="py-3 px-4 text-emerald-400 font-bold">
                    Value Index (PS/₹10L)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-mono text-[11px] bg-zinc-950/40">
                {/* Active Skoda Model Row (Highlighted in Red/Emerald) */}
                <tr className="bg-red-950/30 font-semibold border-l-4 border-l-red-500">
                  <td className="py-3.5 px-4 font-sans font-black text-white flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-red-600 text-white text-[9px] font-black italic">
                      {isAudi ? "RS" : isVW ? "GTI" : "vRS"}
                    </span>
                    {activeSkodaForRival.name}
                  </td>
                  <td className="py-3.5 px-4 font-sans text-zinc-300">
                    {activeSkodaForRival.engine.split("(")[0].trim()}
                  </td>
                  <td className="py-3.5 px-4 font-black text-red-400">
                    {activeSkodaForRival.powerHp} PS
                  </td>
                  <td className="py-3.5 px-4 text-amber-400 font-bold">
                    {activeSkodaForRival.torqueNm} Nm
                  </td>
                  <td className="py-3.5 px-4 font-black text-white">
                    {activeSkodaForRival.acceleration0to100}
                  </td>
                  <td className="py-3.5 px-4 font-sans text-emerald-300">
                    {activeSkodaForRival.tractionType}
                  </td>
                  <td className="py-3.5 px-4 font-sans text-zinc-300">
                    {activeSkodaForRival.bootAndSeating}
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-black">
                    {activeSkodaForRival.expectedPrice}
                  </td>
                  <td className="py-3.5 px-4 font-black text-emerald-400">
                    {(
                      activeSkodaForRival.powerHp /
                      (activeSkodaForRival.priceNumeric / 1e5 / 10)
                    ).toFixed(1)}{" "}
                    PS/10L
                  </td>
                </tr>

                {/* Rival Rows */}
                {currentRivalGroup.rivals.map((rival) => {
                  const isCurrent = rival.id === selectedRivalId;
                  const valueIndex = (
                    rival.powerHp /
                    (rival.priceNumericLakh / 10)
                  ).toFixed(1);
                  return (
                    <tr
                      key={rival.id}
                      onClick={() => setSelectedRivalId(rival.id)}
                      className={`cursor-pointer transition-colors ${isCurrent ? "bg-zinc-800/60 text-white" : "hover:bg-zinc-900/40 text-zinc-400"}`}
                    >
                      <td className="py-3 px-4 font-sans font-medium text-white flex items-center gap-1.5">
                        <span className="text-[10px] text-zinc-500 font-bold uppercase">
                          {rival.brand}
                        </span>
                        {rival.name}
                      </td>
                      <td className="py-3 px-4 font-sans text-zinc-400">
                        {rival.engine}
                      </td>
                      <td className="py-3 px-4 text-zinc-200">
                        {rival.powerHp} PS
                      </td>
                      <td className="py-3 px-4 text-zinc-300">
                        {rival.torqueNm} Nm
                      </td>
                      <td className="py-3 px-4 text-zinc-200">
                        {rival.accelSeconds}s
                      </td>
                      <td className="py-3 px-4 font-sans text-zinc-400">
                        {rival.differentialTech}
                      </td>
                      <td className="py-3 px-4 font-sans text-zinc-400">
                        {rival.seatingAndBoot}
                      </td>
                      <td className="py-3 px-4 text-amber-300">
                        {rival.price}
                      </td>
                      <td className="py-3 px-4 text-zinc-300 font-semibold">
                        {valueIndex} PS/10L
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Power-to-Price Value Index Comparison Bar */}
        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <h5 className="text-xs font-black uppercase tracking-wider text-white">
                Power-to-Price Value Ratio (Horsepower per ₹10 Lakh Ex-Showroom)
              </h5>
            </div>
            <span className="text-[11px] text-zinc-400">
              Higher ratio indicates greater enthusiast value per rupee spent
            </span>
          </div>

          <div className="space-y-2.5">
            {/* Skoda model bar */}
            <div>
              <div className="flex justify-between text-xs mb-1 font-mono">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className="px-1 py-0.2 rounded bg-red-600 text-white text-[9px]">
                    {isAudi ? "RS" : isVW ? "GTI" : "vRS"}
                  </span>
                  {activeSkodaForRival.name}
                </span>
                <span className="text-emerald-400 font-black">
                  {(
                    activeSkodaForRival.powerHp /
                    (activeSkodaForRival.priceNumeric / 1e5 / 10)
                  ).toFixed(1)}{" "}
                  PS per ₹10L (Class Leader)
                </span>
              </div>
              <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: "95%" }}
                />
              </div>
            </div>

            {/* Rivals bars */}
            {currentRivalGroup.rivals.map((rival) => {
              const valueIndex = parseFloat(
                (rival.powerHp / (rival.priceNumericLakh / 10)).toFixed(1),
              );
              const skodaVal = parseFloat(
                (
                  activeSkodaForRival.powerHp /
                  (activeSkodaForRival.priceNumeric / 1e5 / 10)
                ).toFixed(1),
              );
              const percent = Math.round((valueIndex / skodaVal) * 95);
              return (
                <div key={rival.id}>
                  <div className="flex justify-between text-xs mb-1 font-mono">
                    <span className="text-zinc-400">
                      {rival.name} ({rival.brand})
                    </span>
                    <span className="text-zinc-400 font-bold">
                      {valueIndex} PS per ₹10L
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-zinc-600 rounded-full transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      )}

      {/* Head-to-Head Track Duel */}
      <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Performance Head-to-Head
            </span>
            <h3 className="text-2xl font-black text-white tracking-tight">
              {performanceModels[0].name} vs {performanceModels[1].name} Track
              Duel
            </h3>
            <p className="text-xs text-zinc-400">
              Two distinct expressions of{" "}
              {isMan ? "MAN's" : isScania ? "Scania's" : isSeat ? "SEAT's" : isBentley ? "Bentley's" : isLamborghini ? "Lamborghini's" : isPorsche ? "Porsche's" : isAudi ? "Audi Sport's" : isVW ? "Volkswagen's" : "Škoda's"}{" "}
              performance philosophy{isSeat ? " (Not Sold in India)" : ""}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
              {performanceModels[0].category}
            </span>
            <span className="text-zinc-500">vs</span>
            <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">
              {performanceModels[1].category}
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase tracking-wider font-semibold">
                <th className="py-3 px-4">Performance Metric</th>
                <th className="py-3 px-4 text-blue-400 font-bold">
                  {performanceModels[0].name}
                </th>
                <th className="py-3 px-4 text-red-400 font-bold">
                  {performanceModels[1].name}
                </th>
                <th className="py-3 px-4">Enthusiast Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-mono text-[11px]">
              <tr className="hover:bg-zinc-900/40">
                <td className="py-3 px-4 font-sans font-bold text-white">
                  0–100 km/h Sprint
                </td>
                <td className="py-3 px-4 font-bold text-white">
                  {performanceModels[0].acceleration0to100}
                </td>
                <td className="py-3 px-4 font-bold text-emerald-400">
                  {performanceModels[1].acceleration0to100}
                </td>
                <td className="py-3 px-4 font-sans text-zinc-400">
                  {performanceModels[0].accelSeconds <=
                  performanceModels[1].accelSeconds
                    ? `${performanceModels[0].name} launches off the line faster`
                    : `${performanceModels[1].name} launches off the line faster`}
                </td>
              </tr>
              <tr className="hover:bg-zinc-900/40">
                <td className="py-3 px-4 font-sans font-bold text-white">
                  Peak Power & Torque
                </td>
                <td className="py-3 px-4 text-white">
                  {performanceModels[0].power.split("@")[0].trim()} /{" "}
                  {performanceModels[0].torque.split("@")[0].trim()}
                </td>
                <td className="py-3 px-4 text-white font-bold">
                  {performanceModels[1].power.split("@")[0].trim()} /{" "}
                  {performanceModels[1].torque.split("@")[0].trim()}
                </td>
                <td className="py-3 px-4 font-sans text-zinc-400">
                  Both tuned from the shared TSI EA888/EA211 architecture for
                  their body type
                </td>
              </tr>
              <tr className="hover:bg-zinc-900/40">
                <td className="py-3 px-4 font-sans font-bold text-white">
                  Top Speed
                </td>
                <td className="py-3 px-4 font-bold text-emerald-400">
                  {performanceModels[0].topSpeed}
                </td>
                <td className="py-3 px-4 text-white">
                  {performanceModels[1].topSpeed}
                </td>
                <td className="py-3 px-4 font-sans text-zinc-400">
                  Governed top speed reflects each model's aerodynamic profile
                </td>
              </tr>
              <tr className="hover:bg-zinc-900/40">
                <td className="py-3 px-4 font-sans font-bold text-white">
                  Drivetrain Architecture
                </td>
                <td className="py-3 px-4 text-zinc-200">
                  {performanceModels[0].drivetrain}
                </td>
                <td className="py-3 px-4 text-zinc-200">
                  {performanceModels[1].drivetrain}
                </td>
                <td className="py-3 px-4 font-sans text-zinc-400">
                  {performanceModels[0].name} favors track agility;{" "}
                  {performanceModels[1].name} favors all-condition traction
                </td>
              </tr>
              <tr className="hover:bg-zinc-900/40">
                <td className="py-3 px-4 font-sans font-bold text-white">
                  Suspension & Braking
                </td>
                <td className="py-3 px-4 text-zinc-200">
                  {performanceModels[0].suspension}
                </td>
                <td className="py-3 px-4 text-zinc-200">
                  {performanceModels[1].suspension}
                </td>
                <td className="py-3 px-4 font-sans text-zinc-400">
                  {performanceModels[0].brakes}
                </td>
              </tr>
              <tr className="hover:bg-zinc-900/40">
                <td className="py-3 px-4 font-sans font-bold text-white">
                  Expected Pricing
                </td>
                <td className="py-3 px-4 text-emerald-400 font-bold">
                  {performanceModels[0].expectedPrice}
                </td>
                <td className="py-3 px-4 text-amber-400 font-bold">
                  {performanceModels[1].expectedPrice}
                </td>
                <td className="py-3 px-4 font-sans text-zinc-400">
                  Both represent exceptional European performance value vs
                  rivals
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Motorsport Heritage */}
      <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Motorsport Pedigree
            </span>
            <h3 className="text-xl font-black text-white tracking-tight">
              {isMan
                ? "The Legend of MAN Truck & Bus Engineering"
                : isScania
                ? "The Legend of Scania Truck & Bus Engineering"
                : isSeat
                ? "The Legend of SEAT Cupra (Not Sold in India)"
                : isBentley
                ? "The Legend of Bentley GT & Speed"
                : isLamborghini
                ? "The Legend of Lamborghini GT & STO"
                : isPorsche
                ? "The Legend of Porsche GT & Turbo"
                : isAudi
                  ? "The Legend of Audi Sport & quattro"
                  : isVW
                    ? "The Legend of Volkswagen GTI & GT Line"
                    : "The Legend of \u0160koda Rally Sport (RS)"}
            </h3>
          </div>
          <Flag className="w-5 h-5 text-red-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {performanceHeritage.map((h, i) => (
            <div
              key={h.year}
              className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-2 relative"
            >
              <span className="text-xs font-mono font-black text-red-400 block">
                {h.year}
              </span>
              <h5 className="text-xs font-bold text-white leading-snug">
                {h.title}
              </h5>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation CTA */}
      <div className="rounded-3xl bg-gradient-to-r from-red-950/60 via-zinc-900 to-zinc-950 border border-red-800/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-xl font-black text-white italic">
            {isMan
              ? "Ready to Spec a MAN Truck or Bus for Your Fleet?"
              : isScania
              ? "Ready to Spec a Scania Truck or Bus for Your Fleet?"
              : isSeat
              ? "Curious About SEAT Cupra Performance? (Not Sold in India)"
              : isBentley
              ? "Ready to Experience True Bentley GT Performance?"
              : isLamborghini
              ? "Ready to Experience True Lamborghini GT Performance?"
              : isPorsche
              ? "Ready to Experience True Porsche GT Performance?"
              : isAudi
                ? "Ready to Experience True Audi Sport RS Performance?"
                : isVW
                  ? "Ready to Experience True GT & GTI Performance?"
                  : "Ready to Experience True Rally Sport Exhilaration?"}
          </h4>
          <p className="text-xs text-zinc-300">
            {isMan
              ? "Consult our AI specialist on MAN TGX and TGS configurations, GCW ratings, or compute customized on-road figures for your fleet."
              : isScania
              ? "Consult our AI specialist on Scania R 500 and S 730 configurations, GCW ratings, or compute customized on-road figures for your fleet."
              : isSeat
              ? "Ask our AI specialist about the Leon Cupra and Ibiza Cupra's global specs and heritage — SEAT has no official dealer network, import programme or on-road pricing in India."
              : isBentley
              ? "Consult our AI specialist on Continental GT Speed and Bentayga Speed bookings, or compute customized on-road figures."
              : isLamborghini
              ? "Consult our AI specialist on Huracán STO, Revuelto, and Urus Performante bookings, or compute customized on-road figures."
              : isPorsche
              ? "Consult our AI specialist on 911 GT3, Turbo S, and Cayenne Turbo GT bookings, or compute customized on-road figures."
              : isAudi
                ? "Consult our AI specialist on RS5 and RS Q8 bookings, quattro specs, or compute customized on-road figures."
                : isVW
                  ? "Consult our AI specialist on Golf GTI bookings, Virtus GT specs, or compute customized on-road figures."
                  : "Consult our AI specialist on vRS allocations, track-day setups, or compute on-road figures."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {onOpenCalculator && !isSeat && (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                onOpenCalculator(isMan ? "man-tgx" : isScania ? "scania-r-500" : isBentley ? "continental-gt" : isLamborghini ? "huracan" : isPorsche ? "911-carrera" : isAudi ? "a4" : isVW ? "virtus" : "octavia");
              }}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold border border-zinc-700 transition-colors cursor-pointer"
            >
              Price & Finance Calculator
            </button>
          )}
          {onOpenAdvisor && (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                onOpenAdvisor(
                  isMan
                    ? "I want to learn more about the MAN TGX and TGS trucks, GCW ratings, and fleet servicing in India."
                    : isScania
                    ? "I want to learn more about the Scania R 500 and S 730 trucks, GCW ratings, and fleet servicing in India."
                    : isSeat
                    ? "I want to learn more about the SEAT Leon Cupra and Ibiza Cupra — and why SEAT isn't sold in India."
                    : isBentley
                    ? "I want to learn more about the Bentley Continental GT Speed and Bentayga Speed in India."
                    : isLamborghini
                    ? "I want to learn more about the Lamborghini Huracán STO, Revuelto, and Urus Performante in India."
                    : isPorsche
                    ? "I want to learn more about the Porsche 911 GT3, 911 Turbo S, and Cayenne Turbo GT in India."
                    : isAudi
                      ? "I want to learn more about the Audi RS5 and RS Q8 in India."
                      : isVW
                        ? "I want to learn more about the Volkswagen Golf GTI and Virtus GT Plus in India."
                        : "I want to learn more about booking and owning an Octavia vRS or Kodiaq vRS in India.",
                );
              }}
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black transition-colors flex items-center gap-2 shadow-lg shadow-red-900/40 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              {isMan ? "Ask AI MAN Specialist" : isScania ? "Ask AI Scania Specialist" : isSeat ? "Ask AI Cupra Specialist" : isBentley ? "Ask AI GT Specialist" : isLamborghini ? "Ask AI GT Specialist" : isPorsche ? "Ask AI GT Specialist" : isVW ? "Ask AI GT Specialist" : "Ask AI RS Specialist"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
