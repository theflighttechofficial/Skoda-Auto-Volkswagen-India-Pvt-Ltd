import {
  ShieldCheck,
  Gauge,
  Sparkles,
  Luggage,
  ChevronRight,
  CheckCircle2,
  Fuel,
  Flame,
  MapPin,
  Activity,
  History as HistoryIcon,
  Globe2,
  Lightbulb,
  Star,
  ThumbsUp,
  ThumbsDown,
  Wallet,
  TrendingUp,
  Quote,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SKODA_MODELS, SIMPLY_CLEVER_FEATURES } from "../data/skodaData";
import { VW_MODELS, VW_GERMAN_ENGINEERING_FEATURES } from "../data/vwData";
import { AUDI_MODELS, AUDI_PROGRESSIVE_LUXURY_FEATURES } from "../data/audiData";
import { PORSCHE_MODELS, PORSCHE_ENGINEERING_FEATURES } from "../data/porscheData";
import { LAMBORGHINI_MODELS, LAMBORGHINI_ENGINEERING_FEATURES } from "../data/lamborghiniData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { getAccentClasses } from "../utils/brandTheme";
import {
  getRatings,
  getProsAndCons,
  getOwnershipInsight,
  getBadges,
  getOwnerQuotes,
} from "../utils/carInsights";

// Every brand-specific string and JSX fragment this page needs, keyed by
// brand id — the single place to extend when adding a new brand instead of
// hunting down N-way ternary chains throughout the JSX below.
const BRAND_COPY = {
  skoda: {
    Logo: SkodaLogo,
    models: SKODA_MODELS,
    features: SIMPLY_CLEVER_FEATURES,
    iconicModelId: "octavia",
    displayName: "Škoda India",
    tagline: "Simply Clever",
    badgeLine: "Official Škoda Auto India Portfolio",
    headingPre: "European Safety, ",
    headingAccent: "TSI & TDI",
    headingPost: " Engineering",
    description: (
      <>
        Explore the entire Škoda India lineup. From the dynamic new{" "}
        <strong className="text-white">Kylaq</strong> compact SUV and driver’s
        favourite <strong className="text-white">Slavia</strong>, to the
        capable <strong className="text-white">Kushaq</strong>, legendary{" "}
        <strong className="text-white">Octavia</strong> liftback, flagship
        7-seater <strong className="text-white">Kodiaq 4x4</strong>, and
        executive <strong className="text-white">Superb</strong> with
        high-torque TDI diesel and TSI powertrains.
      </>
    ),
    rsHeaderLabel: "The vRS Performance (265 PS)",
    aiAdvisorLabel: "Ask AI Škoda Advisor",
    historyLabel: "Czech History",
    standardLabel: "The Škoda Standard",
    powertrainLine: "TSI EVO Turbo & DSG",
    bodyEngineeringLine: "Laser-Welded Roof Technology",
    lineupHeading: "The Complete Škoda Lineup in India",
    rsShortBadge: "vRS",
    rsBrandLine: "Škoda Auto India • The vRS Performance",
    rsHeadingPre: "The vRS Performance: ",
    rsHeadingAccent: "Octavia vRS & Kodiaq vRS (265 PS)",
    rsDescription:
      "Experience the razor-sharp mechanical front VAQ differential, DCC adaptive dampers, quad-exhaust acoustic notes, and compare directly against luxury market rivals.",
    rsButtonLabel: "Explore The vRS Performance",
    innovationsBadge: "Human-Centred Engineering",
    innovationsHeading: 'Škoda "Simply Clever" Innovations',
    innovationsSubtitle: "Thoughtful details engineered into everyday life across our vehicles",
  },
  volkswagen: {
    Logo: VolkswagenLogo,
    models: VW_MODELS,
    features: VW_GERMAN_ENGINEERING_FEATURES,
    iconicModelId: "golf-gti",
    displayName: "Volkswagen India",
    tagline: "Das Auto",
    badgeLine: "Official Volkswagen Passenger Cars India",
    headingPre: "German Engineering, ",
    headingAccent: "GT TSI & TDI",
    headingPost: " Power",
    description: (
      <>
        Explore the complete Volkswagen India lineup. From the record-breaking
        5-Star <strong className="text-white">Virtus</strong> sedan and
        muscular <strong className="text-white">Taigun</strong> SUV, to the
        benchmark <strong className="text-white">Tiguan 4MOTION</strong>,
        track-ready <strong className="text-white">Golf GTI</strong> (265 PS
        EA888 EVO4), legendary{" "}
        <strong className="text-white">Polo GT TSI</strong>, and upcoming
        7-seater <strong className="text-white">Tayron</strong>.
      </>
    ),
    rsHeaderLabel: "GT & GTI Performance (265 PS)",
    aiAdvisorLabel: "Ask AI VW Advisor",
    historyLabel: "Wolfsburg Heritage",
    standardLabel: "The Volkswagen Standard",
    powertrainLine: "TSI EVO Turbo & DSG",
    bodyEngineeringLine: "Laser-Welded Roof Technology",
    lineupHeading: "The Complete Volkswagen Lineup in India",
    rsShortBadge: "GT/GTI",
    rsBrandLine: "Volkswagen India • GT & GTI Performance",
    rsHeadingPre: "Volkswagen GT & GTI Wing: ",
    rsHeadingAccent: "Golf GTI & Virtus GT Plus (265 PS)",
    rsDescription:
      "Experience the 265 PS EA888 EVO4 engine, VAQ mechanical limited-slip differential, Clark tartan heritage seats, sub-6-second sprints, and comparison against luxury sports cars.",
    rsButtonLabel: "Explore GT & GTI Performance",
    innovationsBadge: "German Engineering Innovations",
    innovationsHeading: "Volkswagen German Engineering & Tech Innovations",
    innovationsSubtitle: "Precision manufacturing, structural safety, and high-performance engineering tailored for India",
  },
  audi: {
    Logo: AudiLogo,
    models: AUDI_MODELS,
    features: AUDI_PROGRESSIVE_LUXURY_FEATURES,
    iconicModelId: "q8",
    displayName: "Audi India",
    tagline: "Vorsprung durch Technik",
    badgeLine: "Official Audi India Portfolio",
    headingPre: "Progressive Luxury, ",
    headingAccent: "quattro TFSI",
    headingPost: " Power",
    description: (
      <>
        Explore the complete Audi India lineup. From the progressive{" "}
        <strong className="text-white">A4</strong> sedan and quattro-equipped{" "}
        <strong className="text-white">A6</strong>, to the compact{" "}
        <strong className="text-white">Q3</strong>, benchmark{" "}
        <strong className="text-white">Q5</strong>, flagship 7-seater{" "}
        <strong className="text-white">Q7</strong>, and coupe-SUV halo{" "}
        <strong className="text-white">Q8</strong>.
      </>
    ),
    rsHeaderLabel: "Audi Sport RS Performance (600 PS)",
    aiAdvisorLabel: "Ask AI Audi Advisor",
    historyLabel: "Ingolstadt Heritage",
    standardLabel: "The Audi Standard",
    powertrainLine: "TFSI Turbo & quattro",
    bodyEngineeringLine: "Hot-Formed Ultra-High-Strength Steel",
    lineupHeading: "The Complete Audi Lineup in India",
    rsShortBadge: "RS/S",
    rsBrandLine: "Audi India • Audi Sport RS & S Performance",
    rsHeadingPre: "Audi Sport RS Wing: ",
    rsHeadingAccent: "RS5 & RS Q8 (450–600 PS)",
    rsDescription:
      "Experience hand-built twin-turbo V6 and V8 engines, quattro sport differentials, electromechanical active roll stabilization, and comparison against Lamborghini, Porsche, and BMW M rivals.",
    rsButtonLabel: "Explore Audi Sport RS Performance",
    innovationsBadge: "Progressive Luxury Innovations",
    innovationsHeading: "Audi Progressive Luxury & Tech Innovations",
    innovationsSubtitle: "quattro traction, digital cockpit precision, and driver-assistance technology tailored for India",
  },
  porsche: {
    Logo: PorscheLogo,
    models: PORSCHE_MODELS,
    features: PORSCHE_ENGINEERING_FEATURES,
    iconicModelId: "911-carrera",
    displayName: "Porsche India",
    tagline: "There Is No Substitute",
    badgeLine: "Official Porsche India Portfolio",
    headingPre: "Motorsport Engineering, ",
    headingAccent: "PDK & PTM",
    headingPost: " Precision",
    description: (
      <>
        Explore the Porsche India lineup. From the icon itself — the
        rear-engine <strong className="text-white">911 Carrera</strong> — and
        purist mid-engine <strong className="text-white">718 Cayman</strong>,
        to the compact-SUV <strong className="text-white">Macan</strong>,
        full-size <strong className="text-white">Cayenne</strong>, and
        grand-touring <strong className="text-white">Panamera</strong>{" "}
        liftback.
      </>
    ),
    rsHeaderLabel: "911 Carrera S Performance (450 PS)",
    aiAdvisorLabel: "Ask AI Porsche Advisor",
    historyLabel: "Stuttgart Heritage",
    standardLabel: "The Porsche Standard",
    powertrainLine: "PDK Dual-Clutch & Flat-6",
    bodyEngineeringLine: "Aluminum-Intensive Body Construction",
    lineupHeading: "The Complete Porsche Lineup in India",
    rsShortBadge: "GT/S",
    rsBrandLine: "Porsche India • GT & Turbo Performance",
    rsHeadingPre: "Porsche GT & Turbo Wing: ",
    rsHeadingAccent: "Carrera S & Cayenne Turbo (450+ PS)",
    rsDescription:
      "Experience twin-turbo flat-6 and V6 engines, PDK dual-clutch immediacy, Porsche Active Suspension Management, and comparison against Ferrari, Lamborghini, and AMG rivals.",
    rsButtonLabel: "Explore Porsche GT & Turbo Performance",
    innovationsBadge: "Motorsport-Derived Innovations",
    innovationsHeading: "Porsche Engineering Innovations",
    innovationsSubtitle: "PDK precision, Porsche Traction Management, and motorsport-derived chassis technology tailored for India",
  },
  lamborghini: {
    Logo: LamborghiniLogo,
    models: LAMBORGHINI_MODELS,
    features: LAMBORGHINI_ENGINEERING_FEATURES,
    iconicModelId: "huracan",
    displayName: "Lamborghini India",
    tagline: "Expect the Unexpected",
    badgeLine: "Official Lamborghini India Portfolio",
    headingPre: "Raging-Bull Engineering, ",
    headingAccent: "LDVI & AWD",
    headingPost: " Precision",
    description: (
      <>
        Explore the Lamborghini India lineup. From the screaming V10{" "}
        <strong className="text-white">Huracán</strong> and Super SUV{" "}
        <strong className="text-white">Urus</strong>, to the hybrid V12
        flagship <strong className="text-white">Revuelto</strong> — every car
        built on naturally-aspirated or hybrid theater and torque-vectoring
        precision.
      </>
    ),
    rsHeaderLabel: "Huracán STO Performance (640 PS)",
    aiAdvisorLabel: "Ask AI Lamborghini Advisor",
    historyLabel: "Sant'Agata Heritage",
    standardLabel: "The Lamborghini Standard",
    powertrainLine: "Naturally-Aspirated V10 & Hybrid V12",
    bodyEngineeringLine: "Carbon-Fibre Monocoque Construction",
    lineupHeading: "The Complete Lamborghini Lineup in India",
    rsShortBadge: "STO",
    rsBrandLine: "Lamborghini India • GT & STO Performance",
    rsHeadingPre: "Lamborghini GT & STO Wing: ",
    rsHeadingAccent: "Huracán STO & Urus Performante (640+ PS)",
    rsDescription:
      "Experience naturally-aspirated V10 and twin-turbo V8 engines, LDVI predictive chassis control, torque-vectoring all-wheel drive, and comparison against Ferrari, Porsche, and McLaren rivals.",
    rsButtonLabel: "Explore Lamborghini GT & STO Performance",
    innovationsBadge: "Raging-Bull Innovations",
    innovationsHeading: "Lamborghini Engineering Innovations",
    innovationsSubtitle: "LDVI precision, torque-vectoring all-wheel drive, and motorsport-derived chassis technology tailored for India",
  },
};

function RatingBar({ label, score, accentClass }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-zinc-400">{label}</span>
        <span className="font-semibold text-zinc-200">{score.toFixed(1)}/5</span>
      </div>
      <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(score / 5) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`h-full rounded-full ${accentClass}`}
        />
      </div>
    </div>
  );
}
export const HeroOverview = ({
  brand = "skoda",
  selectedModelId,
  setSelectedModelId,
  onExploreVariants,
  onExploreEngines,
  onOpenCalculator,
  onOpenAdvisor,
  onOpenRS,
  onOpenGraphs,
  onOpenDealerships,
  onOpenAbout,
  onOpenVWGroup,
}) => {
  const bc = BRAND_COPY[brand] || BRAND_COPY.skoda;
  const c = getAccentClasses(brand);
  const models = bc.models;
  const features = bc.features;
  const currentModel = models.find((m) => m.id === selectedModelId);
  const iconicModel = models.find((m) => m.id === bc.iconicModelId);
  const currentRatings = currentModel ? getRatings(currentModel) : null;
  const currentProsCons = currentModel ? getProsAndCons(currentModel) : null;
  const currentOwnership = currentModel ? getOwnershipInsight(currentModel, brand) : null;
  const currentBadges = currentModel ? getBadges(currentModel, brand) : [];
  const currentQuotes = currentModel ? getOwnerQuotes(currentModel) : [];
  const BrandLogo = bc.Logo;
  return (
    <div className="space-y-10">
      {/* Big Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-[2rem] border p-10 sm:p-16 text-center shadow-2xl ${c.welcomeBannerBg}`}
      >
        {/* Fine grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Dual ambient glows */}
        <motion.div
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-28 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full blur-3xl pointer-events-none ${c.glow600_20}`}
        />
        <div className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full blur-3xl pointer-events-none bg-amber-500/10" />
        <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full blur-3xl pointer-events-none bg-amber-500/10" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${c.badgePill}`}
          >
            Official India Showcase
          </motion.span>

          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -6 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 140 }}
            className={`p-5 rounded-full border-2 bg-zinc-950/60 backdrop-blur-sm ${c.avatarRing}`}
          >
            <BrandLogo variant="emblem" size="xl" animated />
          </motion.div>

          <h1
            className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Welcome to <span className={c.gradientText}>{bc.displayName}</span>
          </h1>

          <div className="flex items-center gap-3">
            <span className={`h-px w-10 sm:w-16 ${c.divider}`} />
            <p
              className={`text-lg sm:text-2xl font-semibold italic ${c.text400}`}
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {bc.tagline}
            </p>
            <span className={`h-px w-10 sm:w-16 ${c.divider}`} />
          </div>
        </div>
      </motion.div>

      {/* Brand Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border p-6 sm:p-8 lg:p-10 text-white shadow-2xl ${c.heroBorder}`}
      >
        {iconicModel?.image && (
          <>
            <img
              src={iconicModel.image}
              alt={iconicModel.name}
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40" />
          </>
        )}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className={`absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full blur-3xl pointer-events-none ${c.glow600_15}`} />
        <div className="absolute -bottom-16 left-1/3 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-amber-500/10" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            {/* Top Badge with Official Logo */}
            <div className="flex flex-wrap items-center gap-3">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-inner ${c.heroBadgePill}`}>
                <BrandLogo variant="emblem" size="sm" />
                <span>{bc.badgeLine}</span>
              </div>
              <span className="text-xs text-zinc-400 font-medium px-2.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60">
                100% 5-Star Safety Pedigree
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {bc.headingPre}
              <span className={c.text400}>{bc.headingAccent}</span>
              {bc.headingPost}
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl">{bc.description}</p>

            {/* Primary CTA + Secondary Quick-Action Chips */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  id="btn-explore-variants-hero"
                  onClick={() => onExploreVariants()}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold transition-all shadow-lg ${c.ctaButton}`}
                >
                  <span>Compare All {models.length} Models & Trims</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>

                {onOpenRS && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenRS}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-950/80 hover:bg-red-900/80 border border-red-700/80 text-red-300 text-sm font-bold transition-all shadow-md shadow-red-950/40"
                  >
                    <Flame className="w-4 h-4 text-red-500 animate-pulse" />
                    <span>{bc.rsHeaderLabel}</span>
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenAdvisor}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border text-sm font-semibold transition-all shadow-md ${c.secondaryButton}`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{bc.aiAdvisorLabel}</span>
                </motion.button>
              </div>

              {/* Secondary quick-links, scrollable on mobile */}
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none scroll-fade-x pb-1">
                <button
                  id="btn-explore-engines-hero"
                  onClick={onExploreEngines}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-medium transition-all whitespace-nowrap"
                >
                  <Fuel className="w-3.5 h-3.5 text-amber-400" />
                  <span>Engine Tech</span>
                </button>

                {onOpenGraphs && (
                  <button
                    onClick={onOpenGraphs}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-medium transition-all whitespace-nowrap"
                  >
                    <Activity className="w-3.5 h-3.5 text-sky-400" />
                    <span>Dyno & Telemetry</span>
                  </button>
                )}

                {onOpenDealerships && (
                  <button
                    onClick={onOpenDealerships}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-medium transition-all whitespace-nowrap"
                  >
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Locate Dealership</span>
                  </button>
                )}

                {onOpenAbout && (
                  <button
                    onClick={onOpenAbout}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-medium transition-all whitespace-nowrap"
                  >
                    <HistoryIcon className={`w-3.5 h-3.5 ${c.text400}`} />
                    <span>{bc.historyLabel}</span>
                  </button>
                )}

                {onOpenVWGroup && (
                  <button
                    onClick={onOpenVWGroup}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-medium transition-all whitespace-nowrap"
                  >
                    <Globe2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>VW Group</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Quick Pillar Snapshot Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="lg:col-span-4 bg-zinc-950/80 backdrop-blur-md rounded-2xl p-5 border border-zinc-800/80 space-y-3.5 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <BrandLogo variant="emblem" size="sm" />
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-300">{bc.standardLabel}</span>
              </div>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${c.smallBadge}`}>5-Star Rated</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800/60">
                <span className="text-zinc-400">Crash Protection</span>
                <span className={`font-bold flex items-center gap-1 ${c.text400}`}>
                  <ShieldCheck className="w-3.5 h-3.5" /> 5-Star Bharat & Global NCAP
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800/60">
                <span className="text-zinc-400">Standard Safety</span>
                <span className="font-bold text-white">6 Airbags & ESC Standard</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800/60">
                <span className="text-zinc-400">Powertrains</span>
                <span className="font-bold text-amber-400">{bc.powertrainLine}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800/60">
                <span className="text-zinc-400">Body Engineering</span>
                <span className={`font-bold ${c.text300}`}>{bc.bodyEngineeringLine}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800/60">
                <span className="text-zinc-400">Starting Price Point</span>
                <span className={`font-bold ${c.text300}`}>{models[0]?.startingPrice} onwards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Model Spotlight or Full Lineup Grid */}
      <AnimatePresence mode="wait">
        {currentModel ? (
          /* Single Model Focus Spotlight */
          <motion.div
            key={currentModel.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            {currentModel.image && (
              <div className="relative w-full h-56 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl">
                <img
                  src={currentModel.image}
                  alt={currentModel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold uppercase tracking-wider ${c.text400}`}>
                    {currentModel.bodyType}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs text-zinc-400">
                    {currentModel.badge}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span>{currentModel.name}</span>
                  {currentModel.id === "virtus" && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold">
                      Fastest Sedan & 5-Star NCAP
                    </span>
                  )}
                  {currentModel.id === "golf-gti" && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 font-semibold">
                      Hot Hatch Icon (265 PS)
                    </span>
                  )}
                  {currentModel.id === "octavia" && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold">
                      Executive Legend
                    </span>
                  )}
                  {currentModel.id === "911-carrera" && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold">
                      Sports Car Icon
                    </span>
                  )}
                  {currentBadges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-800/80 text-zinc-200 border border-zinc-700 font-semibold flex items-center gap-1"
                    >
                      <Award className="w-3 h-3 text-amber-400" />
                      {badge}
                    </span>
                  ))}
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  {currentModel.tagline}
                </p>
                {currentModel.enthusiastNote && (
                  <p className={`text-xs mt-2 flex items-start gap-1.5 max-w-2xl ${c.noteTextSolid}`}>
                    <Lightbulb className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>
                      <span className="font-semibold text-zinc-200">
                        Enthusiast Corner:{" "}
                      </span>
                      {currentModel.enthusiastNote}
                    </span>
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedModelId("all")}
                  className="text-xs px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  ← View All Models
                </button>
                <button
                  onClick={() => onExploreVariants(currentModel.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-lg text-white font-semibold transition-colors shadow-md cursor-pointer ${c.solidButton}`}
                >
                  View {currentModel.variants.length} Trims & Specs
                </button>
              </div>
            </div>

            {/* Model Card Detail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Dimensions & Space */}
              <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 space-y-4 shadow-lg">
                <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-zinc-800 pb-3">
                  <Luggage className={`w-4 h-4 ${c.text400}`} />
                  <span>Dimensions & Storage</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-zinc-500 block">Length</span>
                    <span className="font-medium text-white">
                      {currentModel.dimensions.length}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Wheelbase</span>
                    <span className="font-medium text-white">
                      {currentModel.dimensions.wheelbase}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">
                      Ground Clearance
                    </span>
                    <span className={`font-medium ${c.text400}`}>
                      {currentModel.dimensions.groundClearance}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Boot Space</span>
                    <span className="font-medium text-amber-400">
                      {currentModel.dimensions.bootSpace}
                    </span>
                  </div>
                </div>
              </div>

              {/* Powertrain & Performance */}
              <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 space-y-4 shadow-lg">
                <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-zinc-800 pb-3">
                  <Gauge className="w-4 h-4 text-amber-400" />
                  <span>Engine & Transmissions</span>
                </div>
                <div className="space-y-2 text-xs">
                  {currentModel.engines.map((eng, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300"
                    >
                      <span className="font-semibold text-white">{eng}</span>
                    </div>
                  ))}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Price Range:</span>
                    <span className="font-bold text-white">
                      {currentModel.priceRange}
                    </span>
                  </div>
                </div>
              </div>

              {/* Standout Features */}
              <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-zinc-800 pb-3">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Key Equipment Highlights</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {currentModel.keyHighlights.slice(0, 4).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${c.text400}`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enthusiast Ratings, Ownership Insight & Owner Voices */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Enthusiast Ratings */}
              <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 space-y-4 shadow-lg">
                <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-zinc-800 pb-3">
                  <Star className="w-4 h-4 text-amber-400" />
                  <span>Enthusiast Ratings</span>
                </div>
                <div className="space-y-3">
                  <RatingBar label="Safety" score={currentRatings.safety} accentClass={c.ratingBar} />
                  <RatingBar
                    label="Performance"
                    score={currentRatings.performance}
                    accentClass="bg-amber-500"
                  />
                  <RatingBar label="Comfort" score={currentRatings.comfort} accentClass="bg-sky-500" />
                  <RatingBar label="Value" score={currentRatings.value} accentClass="bg-purple-500" />
                  <RatingBar
                    label="Tech Features"
                    score={currentRatings.techFeatures}
                    accentClass="bg-fuchsia-500"
                  />
                </div>
                <div className="pt-3 border-t border-zinc-800 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                    <ThumbsUp className="w-3.5 h-3.5" /> What Owners Love
                  </div>
                  <ul className="space-y-1 text-[11px] text-zinc-300">
                    {currentProsCons.pros.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-red-400 pt-1">
                    <ThumbsDown className="w-3.5 h-3.5" /> Worth Knowing
                  </div>
                  <ul className="space-y-1 text-[11px] text-zinc-300">
                    {currentProsCons.cons.map((c2, i) => (
                      <li key={i}>• {c2}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ownership Insight */}
              <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-zinc-800 pb-3">
                  <Wallet className="w-4 h-4 text-emerald-400" />
                  <span>Ownership Insight</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] text-zinc-500 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Resale Value
                  </span>
                  <p className="text-xs text-zinc-300">{currentOwnership.resaleValue}</p>
                </div>
                <div className="space-y-1 pt-2 border-t border-zinc-800">
                  <span className="text-[11px] text-zinc-500">Estimated 5-Year Cost of Ownership</span>
                  <p className="text-xs font-semibold text-white">{currentOwnership.fiveYearTCO}</p>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-zinc-800">
                  <span className="text-[11px] text-zinc-500">Driver-Assist & Connected Tech</span>
                  <ul className="space-y-1 text-[11px] text-zinc-300">
                    {currentOwnership.adasHighlights.map((a, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className={`w-3 h-3 shrink-0 mt-0.5 ${c.text400}`} />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Owner Voices */}
              <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-zinc-800 pb-3">
                  <Quote className="w-4 h-4 text-sky-400" />
                  <span>Owner Voices</span>
                </div>
                <div className="space-y-3">
                  {currentQuotes.map((q, i) => (
                    <p key={i} className="text-[11px] text-zinc-300 leading-relaxed italic">
                      {q}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Full Lineup Grid */
          <motion.div
            key="all-lineup-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                  <BrandLogo variant="emblem" size="sm" />
                  <span>{bc.lineupHeading}</span>
                </h2>
                <p className="text-sm text-zinc-400">
                  Select any vehicle to explore trims, specifications, on-road
                  prices, and color schemes
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                {models.length} Models Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className={`group relative bg-zinc-900/80 hover:bg-zinc-900 rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl ${c.cardHover}`}
                >
                  {car.image && (
                    <div className="relative w-full h-44 overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="space-y-4 p-6">
                    {/* Card Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <span className={`text-[11px] font-semibold tracking-wider uppercase ${c.text400}`}>
                          {car.bodyType}
                        </span>
                        <h3 className={`text-xl font-bold text-white transition-colors flex items-center gap-2 ${c.cardTitleHover}`}>
                          <span>{car.name}</span>
                          {car.id === "golf-gti" && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold uppercase">
                              GTI
                            </span>
                          )}
                          {car.id === "virtus" && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold uppercase">
                              5-Star
                            </span>
                          )}
                          {car.id === "octavia" && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase">
                              Icon
                            </span>
                          )}
                          {car.id === "kylaq" && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase">
                              New
                            </span>
                          )}
                          {car.id === "911-carrera" && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase">
                              Icon
                            </span>
                          )}
                          {car.notSoldInIndia && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-700/60 text-zinc-300 border border-zinc-600/60 font-bold uppercase">
                              Not in India
                            </span>
                          )}
                        </h3>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-md border flex items-center gap-1 ${c.cardBadge}`}>
                        <ShieldCheck className="w-3.5 h-3.5" /> 5-Star
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {car.tagline}
                    </p>
                    {car.enthusiastNote && (
                      <p className={`text-[11px] line-clamp-2 flex items-start gap-1.5 ${c.noteText}`}>
                        <Lightbulb className="w-3 h-3 shrink-0 mt-0.5" />
                        <span>{car.enthusiastNote}</span>
                      </p>
                    )}

                    {/* Dimension & Spec Pills */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                      <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800/60">
                        <span className="text-zinc-500 block">
                          Ground Clearance
                        </span>
                        <span className="font-semibold text-zinc-200">
                          {car.dimensions.groundClearance}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800/60">
                        <span className="text-zinc-500 block">Boot Space</span>
                        <span className="font-semibold text-zinc-200">
                          {car.dimensions.bootSpace.split(" ")[0]} L
                        </span>
                      </div>
                    </div>

                    {/* Engine badges pill */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {car.engines.map((eng, eIdx) => (
                        <span
                          key={eIdx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-400"
                        >
                          {eng.split("(")[0].trim()}
                        </span>
                      ))}
                    </div>

                    {/* Enthusiast rating + badge chips */}
                    {(() => {
                      const r = getRatings(car);
                      const overall = (
                        (r.safety + r.performance + r.comfort + r.value + r.techFeatures) /
                        5
                      ).toFixed(1);
                      const badges = getBadges(car, brand);
                      return (
                        <div className="flex items-center flex-wrap gap-2 pt-1">
                          <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                            <Star className="w-3 h-3 fill-amber-400" /> {overall}/5
                          </span>
                          {badges.map((b) => (
                            <span
                              key={b}
                              className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700 font-semibold uppercase tracking-wide"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      );
                    })()}

                    {/* Highlights Bullet List */}
                    <div className="space-y-1.5 pt-1">
                      {car.keyHighlights.slice(0, 3).map((hl, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-zinc-300"
                        >
                          <CheckCircle2 className={`w-3 h-3 flex-shrink-0 ${c.text400}`} />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer with Pricing & Action */}
                  <div className="px-6 pb-6 pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 block uppercase font-medium">
                        Starting Ex-Showroom
                      </span>
                      <span className="text-base font-extrabold text-white">
                        {car.startingPrice}*
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedModelId(car.id)}
                        className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors cursor-pointer"
                      >
                        Focus
                      </button>
                      <button
                        onClick={() => onExploreVariants(car.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-white flex items-center gap-1 transition-colors shadow-md cursor-pointer ${c.solidButton}`}
                      >
                        <span>Trims</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Division Spotlight Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950/60 via-zinc-900 to-zinc-950 border border-red-900/60 p-6 sm:p-8 shadow-2xl"
      >
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-black italic tracking-widest text-[11px] shadow-sm shadow-red-900/50">
                {bc.rsShortBadge}
              </span>
              <span className="text-red-400 font-bold uppercase tracking-wider text-xs flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 animate-pulse" />
                {bc.rsBrandLine}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {bc.rsHeadingPre}
              <span className="text-red-500">{bc.rsHeadingAccent}</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{bc.rsDescription}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            {onOpenRS && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenRS}
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-red-950/80 transition-all cursor-pointer"
              >
                <Flame className="w-4 h-4" />
                <span>{bc.rsButtonLabel}</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Brand Engineering Innovations Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="bg-zinc-900/60 rounded-3xl border border-zinc-800 p-6 sm:p-8 space-y-6 shadow-xl"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${c.text400}`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{bc.innovationsBadge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{bc.innovationsHeading}</h3>
            <p className="text-sm text-zinc-400">{bc.innovationsSubtitle}</p>
          </div>
          <BrandLogo variant="emblem" size="md" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2 shadow-sm transition-all"
            >
              <span className={`text-xs font-bold ${c.text400}`}>{item.title}</span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
