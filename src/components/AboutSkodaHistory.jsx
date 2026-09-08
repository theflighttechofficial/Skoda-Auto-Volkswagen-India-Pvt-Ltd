import { useState, useEffect } from "react";
import {
  Clock,
  Award,
  ShieldCheck,
  Sparkles,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Factory,
  Globe2,
  Flame,
  ArrowRight,
  Flag,
  History as HistoryIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  SKODA_HISTORY_ERAS,
  CZECH_HERITAGE_ELEMENTS,
} from "../data/historyData";
import {
  VW_HISTORY_ERAS,
  GERMAN_HERITAGE_ELEMENTS,
} from "../data/vwHistoryData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
export const AboutSkodaHistory = ({
  brand = "skoda",
  onExploreVWGroup,
  onExploreLineup,
}) => {
  const isVW = brand === "volkswagen";
  const historyEras = isVW ? VW_HISTORY_ERAS : SKODA_HISTORY_ERAS;
  const heritageElements = isVW
    ? GERMAN_HERITAGE_ELEMENTS
    : CZECH_HERITAGE_ELEMENTS;
  const [selectedEraId, setSelectedEraId] = useState(historyEras[0].id);
  useEffect(() => {
    setSelectedEraId(historyEras[0].id);
  }, [brand, historyEras]);
  const activeEra =
    historyEras.find((e) => e.id === selectedEraId) || historyEras[0];
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Header */}
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 border border-zinc-800 p-6 sm:p-10 shadow-2xl ${isVW ? "to-blue-950/40" : "to-emerald-950/40"}`}
      >
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${isVW ? "bg-blue-500/10" : "bg-emerald-500/10"}`}
        />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wide ${isVW ? "bg-blue-950/80 border-blue-700/50 text-blue-300" : "bg-emerald-950/80 border-emerald-700/50 text-emerald-300"}`}
          >
            <Flag
              className={`w-3.5 h-3.5 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
            />
            <span>
              {isVW
                ? "Wolfsburg, Lower Saxony, Germany \u2022 Est. 1937"
                : "Mlad\xE1 Boleslav, Czech Republic \u2022 Est. December 1895"}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {isVW
                ? "Volkswagen: Over 85 Years of Pure German Automotive Heritage"
                : "The Czech Legend: Over 130 Years of Automotive Ingenuity"}
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {isVW ? (
                <>
                  From the legendary{" "}
                  <span className="text-blue-400 font-semibold">Beetle</span>{" "}
                  that mobilized the globe, to redefining high-speed hot hatches
                  with the{" "}
                  <span className="text-blue-400 font-semibold">Golf GTI</span>{" "}
                  in 1976, and bringing pure Autobahn driving dynamics to Indian
                  enthusiasts with the{" "}
                  <span className="text-blue-400 font-semibold">
                    Polo, Virtus GT, and Taigun GT
                  </span>
                  , discover Volkswagen's celebrated engineering odyssey.
                </>
              ) : (
                <>
                  Škoda Auto is one of the world’s four oldest continuously
                  operating automobile manufacturers. From humble beginnings
                  building hand-crafted{" "}
                  <span className="text-emerald-400 font-semibold">
                    Slavia bicycles
                  </span>{" "}
                  in the Kingdom of Bohemia, to pioneering V-twin motorbikes,
                  interwar luxury limousines, and joining the Volkswagen Group
                  in 1991, explore how Bohemian heritage transformed into a
                  global automotive titan.
                </>
              )}
            </p>
          </div>

          {/* Quick Stat Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80">
              <div
                className={`flex items-center gap-2 mb-1 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
              >
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Heritage
                </span>
              </div>
              <p className="text-2xl font-black text-white">
                {isVW ? "1937" : "1895"}
              </p>
              <p className="text-[11px] text-zinc-400">
                {isVW ? "85+ Years of Engineering" : "130+ Years of Innovation"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80">
              <div className="flex items-center gap-2 text-sky-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Birthplace
                </span>
              </div>
              <p className="text-xl font-bold text-white truncate">
                {isVW ? "Wolfsburg, Germany" : "Czech Republic"}
              </p>
              <p className="text-[11px] text-zinc-400">
                {isVW
                  ? "Global Headquarters"
                  : "Mlad\xE1 Boleslav, Central Bohemia"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Globe2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Global Reach
                </span>
              </div>
              <p className="text-2xl font-black text-white">
                {isVW ? "150+ Countries" : "100+ Countries"}
              </p>
              <p className="text-[11px] text-zinc-400">
                {isVW
                  ? "Over 4.8 Million Cars Annually"
                  : "Over 870,000+ Cars Annually"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80">
              <div
                className={`flex items-center gap-2 mb-1 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  India Safety
                </span>
              </div>
              <p className="text-2xl font-black text-white">100% 5-Star</p>
              <p className="text-[11px] text-zinc-400">
                Global NCAP Revised Protocol
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {onExploreVWGroup && (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  onExploreVWGroup();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-xs shadow-lg shadow-blue-900/30 transition-all cursor-pointer"
              >
                <span>Proud to be part of Volkswagen Group</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            {onExploreLineup && (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  onExploreLineup();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-semibold text-xs transition-all cursor-pointer"
              >
                <span>Explore Modern Lineup</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Timeline of Eras */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div
              className={`flex items-center gap-2 text-xs font-bold tracking-wider uppercase mb-1 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
            >
              <HistoryIcon className="w-4 h-4" />
              <span>Chronicles of Craftsmanship</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {isVW
                ? "Interactive History: The Volkswagen Journey"
                : "Interactive History: From Bohemia to Bharat"}
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Select an era below to discover pivotal milestones, breakthrough
              inventions, and historic icons.
            </p>
          </div>
        </div>

        {/* Era Tab Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2">
          {historyEras.map((era) => {
            const isSelected = era.id === selectedEraId;
            return (
              <button
                key={era.id}
                onClick={() => setSelectedEraId(era.id)}
                className={`flex-shrink-0 px-4 py-3 rounded-2xl border text-left transition-all cursor-pointer ${isSelected ? (isVW ? "bg-blue-950/70 border-blue-500/80 text-white shadow-lg shadow-blue-950/50 ring-1 ring-blue-400/40" : "bg-emerald-950/70 border-emerald-500/80 text-white shadow-lg shadow-emerald-950/50 ring-1 ring-emerald-400/40") : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850 hover:border-zinc-700"}`}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? (isVW ? "bg-blue-500 text-white font-black" : "bg-emerald-500 text-zinc-950 font-black") : "bg-zinc-800 text-zinc-400"}`}
                  >
                    {era.period}
                  </span>
                </div>
                <p className="font-bold text-xs truncate max-w-[170px]">
                  {era.title.split(":")[0]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Era Detailed Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEra.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-zinc-900/90 border border-zinc-800 overflow-hidden shadow-xl"
          >
            <div className="p-6 sm:p-8 space-y-6">
              {/* Header inside era */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-zinc-800">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black border ${isVW ? "bg-blue-500/20 border-blue-500/40 text-blue-300" : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"}`}
                    >
                      {activeEra.period}
                    </span>
                    <span className="text-zinc-400 text-xs flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {activeEra.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {activeEra.title}
                  </h3>
                  <p
                    className={`font-medium text-sm italic ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    {activeEra.tagline}
                  </p>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed pt-2">
                    {activeEra.summary}
                  </p>
                </div>

                {/* Symbolic Era Visual Badge */}
                <div className="flex-shrink-0 w-36 h-36 rounded-2xl bg-zinc-950 border border-zinc-800 p-4 flex flex-col items-center justify-center text-center shadow-inner">
                  {isVW ? (
                    <>
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <VolkswagenLogo variant="emblem" size="md" />
                      </div>
                      <span className="text-[11px] font-bold text-zinc-200">
                        Volkswagen
                      </span>
                      <span className="text-[9px] text-zinc-500">
                        {activeEra.period}
                      </span>
                    </>
                  ) : (
                    <>
                      {activeEra.id === "founding" && (
                        <>
                          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 font-black text-lg">
                            L&K
                          </div>
                          <span className="text-[11px] font-bold text-zinc-200">
                            Laurin & Klement
                          </span>
                          <span className="text-[9px] text-zinc-500">
                            Slavia Bicycles
                          </span>
                        </>
                      )}
                      {activeEra.id !== "founding" && (
                        <>
                          <div className="w-12 h-12 flex items-center justify-center mb-2">
                            <SkodaLogo variant="arrow-only" size="md" />
                          </div>
                          <span className="text-[11px] font-bold text-zinc-200">
                            Škoda Auto
                          </span>
                          <span className="text-[9px] text-zinc-500">
                            {activeEra.period}
                          </span>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Milestones & Key Highlights Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Specific Milestones */}
                <div className="lg:col-span-2 space-y-3">
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    Key Historic Milestones
                  </h4>
                  <div className="space-y-3">
                    {activeEra.keyMilestones.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3.5"
                      >
                        <div
                          className={`px-2.5 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-black shrink-0 ${isVW ? "text-blue-300" : "text-emerald-300"}`}
                        >
                          {m.year}
                        </div>
                        <div className="space-y-1">
                          <p className="font-bold text-white text-sm">
                            {m.title}
                          </p>
                          <p className="text-zinc-400 text-xs leading-relaxed">
                            {m.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Innovations & Era Highlights */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Engineering Innovations
                    </h4>
                    <ul className="space-y-2">
                      {activeEra.innovations.map((inv, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-zinc-300"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                          />
                          <span>{inv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-red-400" />
                      Historic Impact
                    </h4>
                    <ul className="space-y-2">
                      {activeEra.highlights.map((hl, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-zinc-400 leading-relaxed list-disc list-inside"
                        >
                          {hl}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Brand DNA & Engineering Pillars Deep Dive */}
      <div className="space-y-6">
        <div>
          <div
            className={`flex items-center gap-2 text-xs font-bold tracking-wider uppercase mb-1 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{isVW ? "German Engineering DNA" : "Bohemian Soul"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {isVW
              ? "The Pillars of German Engineering in Every Modern Volkswagen"
              : "The Pillars of Czech Heritage in Every Modern \u0160koda"}
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            {isVW
              ? "How decades of Autobahn chassis tuning, TSI forced-induction mastery, and uncompromising build quality shape the car you drive today."
              : "How centuries of Bohemian cut glass art, Prague Cubist sculpture, and pragmatic Czech \u0161ikovnost shape the car you drive today."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {heritageElements.map((el) => (
            <div
              key={el.id}
              className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">{el.title}</h3>
                  <p
                    className={`text-xs font-medium ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    {el.subtitle}
                  </p>
                </div>
                <div
                  className={`w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center shrink-0 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {el.description}
              </p>

              <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-[11px] text-zinc-400 flex items-center gap-2">
                <span className="font-bold text-zinc-300">
                  Modern Expression:
                </span>
                <span>{el.visualDetail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Indian Connection & SAVWIPL Facilities */}
      <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${isVW ? "text-blue-400" : "text-emerald-400"}`}
            >
              <Factory className="w-4 h-4" />
              <span>SAVWIPL Manufacturing Footprint</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Built in Maharashtra: Chakan & Aurangabad Facilities
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Škoda Auto Volkswagen India Pvt. Ltd. (SAVWIPL) operates two
              world-class manufacturing plants in Maharashtra, producing
              high-tensile steel vehicles for India and exporting to over 30
              international markets.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-black text-xs flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>100% 5-Star Certified</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-white text-sm">
                Chakan Mega-Plant (Pune)
              </h4>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded border ${isVW ? "text-blue-400 bg-blue-950 border-blue-800" : "text-emerald-400 bg-emerald-950 border-emerald-800"}`}
              >
                540 Acres
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Produces the MQB-A0-IN platform models (
              {isVW ? "Virtus, Taigun" : "Kylaq, Slavia, Kushaq"}). Features
              press shop with high-precision tooling, body shop with 90%+
              robotic laser welding, cathodic electro-dip paint shop, and an
              engine testing facility. Home to an 18.5 MW rooftop solar
              installation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-white text-sm">
                Shendra Plant (Aurangabad)
              </h4>
              <span className="text-[10px] text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-950 border border-blue-800">
                Executive & Luxury Assembly
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Assembles executive and luxury models (
              {isVW ? "Tiguan 4x4" : "Kodiaq 4x4, Superb, Octavia"}), alongside
              executive luxury Audi models (A4, A6, Q3, Q5, Q7). Certified with
              ISO 14001 environmental standards and zero-liquid-discharge water
              management.
            </p>
          </div>
        </div>
      </div>

      {/* Cross-Link Card to Volkswagen Group */}
      {onExploreVWGroup && (
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/60 via-zinc-900 to-zinc-950 border border-blue-800/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left max-w-xl">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <Globe2 className="w-4 h-4" />
              Global Automotive Alliance
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Proud to be a part of the Volkswagen Group
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Discover how {isVW ? "Volkswagen" : "\u0160koda"} synergizes with
              iconic sister marques like Audi, Porsche, Lamborghini, Bentley,
              Bugatti, SEAT, CUPRA, MAN, and Scania under the world’s leading
              automotive group.
            </p>
          </div>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              onExploreVWGroup();
            }}
            className="flex-shrink-0 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-900/40 transition-all cursor-pointer"
          >
            <span>Explore Volkswagen Group Brands</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
