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
import {
  AUDI_HISTORY_ERAS,
  AUDI_HERITAGE_ELEMENTS,
} from "../data/audiHistoryData";
import {
  PORSCHE_HISTORY_ERAS,
  PORSCHE_HERITAGE_ELEMENTS,
} from "../data/porscheHistoryData";
import {
  LAMBORGHINI_HISTORY_ERAS,
  LAMBORGHINI_HERITAGE_ELEMENTS,
} from "../data/lamborghiniHistoryData";
import {
  BENTLEY_HISTORY_ERAS,
  BENTLEY_HERITAGE_ELEMENTS,
} from "../data/bentleyHistoryData";
import {
  SEAT_HISTORY_ERAS,
  SEAT_HERITAGE_ELEMENTS,
} from "../data/seatHistoryData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { BentleyLogo } from "./BentleyLogo";
import { SeatLogo } from "./SeatLogo";
export const AboutSkodaHistory = ({
  brand = "skoda",
  onExploreVWGroup,
  onExploreLineup,
}) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const isBentley = brand === "bentley";
  const isSeat = brand === "seat";
  const historyEras = isSeat ? SEAT_HISTORY_ERAS : isBentley ? BENTLEY_HISTORY_ERAS : isLamborghini ? LAMBORGHINI_HISTORY_ERAS : isPorsche ? PORSCHE_HISTORY_ERAS : isAudi ? AUDI_HISTORY_ERAS : isVW ? VW_HISTORY_ERAS : SKODA_HISTORY_ERAS;
  const heritageElements = isSeat
    ? SEAT_HERITAGE_ELEMENTS
    : isBentley
    ? BENTLEY_HERITAGE_ELEMENTS
    : isLamborghini
    ? LAMBORGHINI_HERITAGE_ELEMENTS
    : isPorsche
    ? PORSCHE_HERITAGE_ELEMENTS
    : isAudi
      ? AUDI_HERITAGE_ELEMENTS
      : isVW
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
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 border border-zinc-800 p-6 sm:p-10 shadow-2xl ${isSeat ? "to-orange-950/40" : isBentley ? "to-green-950/40" : isLamborghini ? "to-yellow-950/40" : isPorsche ? "to-amber-950/40" : isAudi ? "to-red-950/40" : isVW ? "to-blue-950/40" : "to-emerald-950/40"}`}
      >
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${isSeat ? "bg-orange-500/10" : isBentley ? "bg-green-500/10" : isLamborghini ? "bg-yellow-500/10" : isPorsche ? "bg-amber-500/10" : isAudi ? "bg-red-500/10" : isVW ? "bg-blue-500/10" : "bg-emerald-500/10"}`}
        />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wide ${isSeat ? "bg-orange-950/80 border-orange-700/50 text-orange-300" : isBentley ? "bg-green-950/80 border-green-700/50 text-green-300" : isLamborghini ? "bg-yellow-950/80 border-yellow-700/50 text-yellow-300" : isPorsche ? "bg-amber-950/80 border-amber-700/50 text-amber-300" : isAudi ? "bg-red-950/80 border-red-700/50 text-red-300" : isVW ? "bg-blue-950/80 border-blue-700/50 text-blue-300" : "bg-emerald-950/80 border-emerald-700/50 text-emerald-300"}`}
          >
            <Flag
              className={`w-3.5 h-3.5 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
            />
            <span>
              {isSeat
                ? "Martorell, Catalonia, Spain \u2022 Est. 1950"
                : isBentley
                ? "Crewe, Cheshire, England \u2022 Est. 1919"
                : isLamborghini
                ? "Sant'Agata Bolognese, Emilia-Romagna, Italy \u2022 Est. 1963"
                : isPorsche
                ? "Stuttgart, Baden-W\u00fcrttemberg, Germany \u2022 Est. 1931"
                : isAudi
                  ? "Ingolstadt, Bavaria, Germany \u2022 Est. 1899"
                  : isVW
                    ? "Wolfsburg, Lower Saxony, Germany \u2022 Est. 1937"
                    : "Mlad\xE1 Boleslav, Czech Republic \u2022 Est. December 1895"}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {isSeat
                ? "SEAT: Over 70 Years of Spanish Engineering (Not Sold in India)"
                : isBentley
                ? "Bentley: Over 100 Years of Hand-Crafted Grand Touring"
                : isLamborghini
                ? "Lamborghini: Over 60 Years of Raging-Bull Theater"
                : isPorsche
                ? "Porsche: Over 90 Years of Sports Car Obsession"
                : isAudi
                  ? "Audi: Over 125 Years of Progressive Luxury Engineering"
                  : isVW
                    ? "Volkswagen: Over 85 Years of Pure German Automotive Heritage"
                    : "The Czech Legend: Over 130 Years of Automotive Ingenuity"}
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {isSeat ? (
                <>
                  From SEAT's 1950 founding as Spain's state-backed national
                  carmaker, to Volkswagen Group ownership from 1990 and the
                  25-year in-house{" "}
                  <span className="text-orange-400 font-semibold">
                    Cupra
                  </span>{" "}
                  performance era, SEAT remains the one current Group brand
                  with{" "}
                  <span className="text-orange-400 font-semibold">
                    no official presence in India
                  </span>
                  — every model shown here is a global reference spec for
                  enthusiast comparison only.
                </>
              ) : isBentley ? (
                <>
                  From W.O. Bentley's endurance-racing founding in{" "}
                  <span className="text-green-400 font-semibold">1919</span>,
                  to the fastest-in-the-world{" "}
                  <span className="text-green-400 font-semibold">
                    R-Type Continental
                  </span>{" "}
                  of 1952, the modern twin-turbo{" "}
                  <span className="text-green-400 font-semibold">
                    Continental GT
                  </span>{" "}
                  and Bentayga SUV today, and joining the Volkswagen Group's
                  ownership structure in 1998, discover Bentley's celebrated
                  engineering odyssey.
                </>
              ) : isLamborghini ? (
                <>
                  From Ferruccio Lamborghini's tractor-to-supercar founding in{" "}
                  <span className="text-yellow-400 font-semibold">1963</span>,
                  to the mid-engine{" "}
                  <span className="text-yellow-400 font-semibold">Miura</span>{" "}
                  that invented the supercar in 1966, the raging{" "}
                  <span className="text-yellow-400 font-semibold">
                    Huracán
                  </span>{" "}
                  and hybrid Revuelto flagship today, and joining the
                  Volkswagen Group's ownership structure in 1998, discover
                  Lamborghini's celebrated engineering odyssey.
                </>
              ) : isPorsche ? (
                <>
                  From Ferdinand Porsche's Stuttgart design office founded in{" "}
                  <span className="text-amber-400 font-semibold">1931</span>,
                  to the hand-built{" "}
                  <span className="text-amber-400 font-semibold">356</span> of
                  1948, the rear-engine{" "}
                  <span className="text-amber-400 font-semibold">
                    911
                  </span>{" "}
                  in continuous production since 1963, and joining the
                  Volkswagen Group's ownership structure in 2012, discover
                  Porsche's celebrated engineering odyssey.
                </>
              ) : isAudi ? (
                <>
                  From August Horch's founding of{" "}
                  <span className="text-red-400 font-semibold">Audi</span> in
                  1899, to the four-rings union of{" "}
                  <span className="text-red-400 font-semibold">Auto Union</span>{" "}
                  in 1932, and the 1980{" "}
                  <span className="text-red-400 font-semibold">
                    Ur-Quattro
                  </span>{" "}
                  revolution that redefined all-wheel drive, discover Audi's
                  celebrated engineering odyssey.
                </>
              ) : isVW ? (
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
                className={`flex items-center gap-2 mb-1 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
              >
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Heritage
                </span>
              </div>
              <p className="text-2xl font-black text-white">
                {isSeat ? "1950" : isBentley ? "1919" : isLamborghini ? "1963" : isPorsche ? "1931" : isAudi ? "1899" : isVW ? "1937" : "1895"}
              </p>
              <p className="text-[11px] text-zinc-400">
                {isSeat
                  ? "70+ Years of Spanish Engineering"
                  : isBentley
                  ? "100+ Years of Hand-Crafted Grand Touring"
                  : isLamborghini
                  ? "60+ Years of Raging-Bull Heritage"
                  : isPorsche
                  ? "90+ Years of Sports Car Engineering"
                  : isAudi
                    ? "125+ Years of Engineering"
                    : isVW
                      ? "85+ Years of Engineering"
                      : "130+ Years of Innovation"}
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
                {isSeat ? "Martorell, Spain" : isBentley ? "Crewe, England" : isLamborghini ? "Sant'Agata Bolognese, Italy" : isPorsche ? "Stuttgart, Germany" : isAudi ? "Ingolstadt, Germany" : isVW ? "Wolfsburg, Germany" : "Czech Republic"}
              </p>
              <p className="text-[11px] text-zinc-400">
                {isSeat
                  ? "Not Sold in India"
                  : isBentley
                  ? "Crewe, Cheshire HQ"
                  : isLamborghini
                  ? "Sant'Agata Bolognese HQ"
                  : isPorsche
                  ? "Stuttgart-Zuffenhausen HQ"
                  : isAudi
                    ? "Global Headquarters"
                    : isVW
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
                {isSeat ? "70+ Countries" : isBentley ? "60+ Countries" : isLamborghini ? "60+ Countries" : isPorsche ? "70+ Countries" : isAudi ? "100+ Countries" : isVW ? "150+ Countries" : "100+ Countries"}
              </p>
              <p className="text-[11px] text-zinc-400">
                {isSeat
                  ? "India Not Included — Not Officially Sold Here"
                  : isBentley
                  ? "Over 20,000+ Cars Annually"
                  : isLamborghini
                  ? "Over 9,000+ Cars Annually"
                  : isPorsche
                  ? "Over 320,000+ Cars Annually"
                  : isAudi
                    ? "Over 1.7 Million Cars Annually"
                    : isVW
                      ? "Over 4.8 Million Cars Annually"
                      : "Over 870,000+ Cars Annually"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80">
              <div
                className={`flex items-center gap-2 mb-1 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
              className={`flex items-center gap-2 text-xs font-bold tracking-wider uppercase mb-1 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
            >
              <HistoryIcon className="w-4 h-4" />
              <span>Chronicles of Craftsmanship</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {isSeat
                ? "Interactive History: The SEAT Journey"
                : isBentley
                ? "Interactive History: The Bentley Journey"
                : isLamborghini
                ? "Interactive History: The Lamborghini Journey"
                : isPorsche
                ? "Interactive History: The Porsche Journey"
                : isAudi
                  ? "Interactive History: The Audi Journey"
                  : isVW
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
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none scroll-fade-x pb-2">
          {historyEras.map((era) => {
            const isSelected = era.id === selectedEraId;
            return (
              <button
                key={era.id}
                onClick={() => setSelectedEraId(era.id)}
                className={`flex-shrink-0 px-4 py-3 rounded-2xl border text-left transition-all cursor-pointer ${isSelected ? (isSeat ? "bg-orange-950/70 border-orange-500/80 text-white shadow-lg shadow-orange-950/50 ring-1 ring-orange-400/40" : isBentley ? "bg-green-950/70 border-green-500/80 text-white shadow-lg shadow-green-950/50 ring-1 ring-green-400/40" : isLamborghini ? "bg-yellow-950/70 border-yellow-500/80 text-white shadow-lg shadow-yellow-950/50 ring-1 ring-yellow-400/40" : isPorsche ? "bg-amber-950/70 border-amber-500/80 text-white shadow-lg shadow-amber-950/50 ring-1 ring-amber-400/40" : isAudi ? "bg-red-950/70 border-red-500/80 text-white shadow-lg shadow-red-950/50 ring-1 ring-red-400/40" : isVW ? "bg-blue-950/70 border-blue-500/80 text-white shadow-lg shadow-blue-950/50 ring-1 ring-blue-400/40" : "bg-emerald-950/70 border-emerald-500/80 text-white shadow-lg shadow-emerald-950/50 ring-1 ring-emerald-400/40") : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 hover:border-zinc-700"}`}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? (isSeat ? "bg-orange-500 text-white font-black" : isBentley ? "bg-green-500 text-white font-black" : isLamborghini ? "bg-yellow-500 text-white font-black" : isPorsche ? "bg-amber-500 text-white font-black" : isAudi ? "bg-red-500 text-white font-black" : isVW ? "bg-blue-500 text-white font-black" : "bg-emerald-500 text-zinc-950 font-black") : "bg-zinc-800 text-zinc-400"}`}
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
                      className={`px-3 py-1 rounded-full text-xs font-black border ${isSeat ? "bg-orange-500/20 border-orange-500/40 text-orange-300" : isBentley ? "bg-green-500/20 border-green-500/40 text-green-300" : isLamborghini ? "bg-yellow-500/20 border-yellow-500/40 text-yellow-300" : isPorsche ? "bg-amber-500/20 border-amber-500/40 text-amber-300" : isAudi ? "bg-red-500/20 border-red-500/40 text-red-300" : isVW ? "bg-blue-500/20 border-blue-500/40 text-blue-300" : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"}`}
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
                    className={`font-medium text-sm italic ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    {activeEra.tagline}
                  </p>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed pt-2">
                    {activeEra.summary}
                  </p>
                </div>

                {/* Symbolic Era Visual Badge */}
                <div className="flex-shrink-0 w-36 h-36 rounded-2xl bg-zinc-950 border border-zinc-800 p-4 flex flex-col items-center justify-center text-center shadow-inner">
                  {isSeat ? (
                    <>
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <SeatLogo variant="emblem" size="md" />
                      </div>
                      <span className="text-[11px] font-bold text-zinc-200">
                        SEAT
                      </span>
                      <span className="text-[9px] text-zinc-500">
                        {activeEra.period}
                      </span>
                    </>
                  ) : isBentley ? (
                    <>
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <BentleyLogo variant="emblem" size="md" />
                      </div>
                      <span className="text-[11px] font-bold text-zinc-200">
                        Bentley
                      </span>
                      <span className="text-[9px] text-zinc-500">
                        {activeEra.period}
                      </span>
                    </>
                  ) : isLamborghini ? (
                    <>
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <LamborghiniLogo variant="emblem" size="md" />
                      </div>
                      <span className="text-[11px] font-bold text-zinc-200">
                        Lamborghini
                      </span>
                      <span className="text-[9px] text-zinc-500">
                        {activeEra.period}
                      </span>
                    </>
                  ) : isPorsche ? (
                    <>
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <PorscheLogo variant="emblem" size="md" />
                      </div>
                      <span className="text-[11px] font-bold text-zinc-200">
                        Porsche
                      </span>
                      <span className="text-[9px] text-zinc-500">
                        {activeEra.period}
                      </span>
                    </>
                  ) : isAudi ? (
                    <>
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <AudiLogo variant="emblem" size="md" />
                      </div>
                      <span className="text-[11px] font-bold text-zinc-200">
                        Audi
                      </span>
                      <span className="text-[9px] text-zinc-500">
                        {activeEra.period}
                      </span>
                    </>
                  ) : isVW ? (
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
                    className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                          className={`px-2.5 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-black shrink-0 ${isSeat ? "text-orange-300" : isBentley ? "text-green-300" : isLamborghini ? "text-yellow-300" : isPorsche ? "text-amber-300" : isAudi ? "text-red-300" : isVW ? "text-blue-300" : "text-emerald-300"}`}
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
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
            className={`flex items-center gap-2 text-xs font-bold tracking-wider uppercase mb-1 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
          >
            <Sparkles className="w-4 h-4" />
            <span>
              {isSeat
                ? "Martorell Spanish Soul"
                : isBentley
                ? "Crewe Grand-Touring Soul"
                : isLamborghini
                ? "Sant'Agata Raging-Bull Soul"
                : isPorsche
                ? "Stuttgart Sports Car Soul"
                : isAudi
                  ? "Progressive Luxury DNA"
                  : isVW
                    ? "German Engineering DNA"
                    : "Bohemian Soul"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {isSeat
              ? "The Pillars of Spanish Engineering — Not Sold in India"
              : isBentley
              ? "The Pillars of Hand-Crafted Grand Touring in Every Modern Bentley"
              : isLamborghini
              ? "The Pillars of Raging-Bull Engineering in Every Modern Lamborghini"
              : isPorsche
              ? "The Pillars of Motorsport-Derived Engineering in Every Modern Porsche"
              : isAudi
                ? "The Pillars of Progressive Luxury in Every Modern Audi"
                : isVW
                  ? "The Pillars of German Engineering in Every Modern Volkswagen"
                  : "The Pillars of Czech Heritage in Every Modern \u0160koda"}
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            {isSeat
              ? "How Barcelona's post-war founding, Martorell's Group-shared platforms, and 25 years of in-house Cupra performance heritage shape SEAT's identity — even though none of it can be experienced firsthand in India."
              : isBentley
              ? "How R-Type Continental heritage, Mulliner coachbuilding craftsmanship, and decades of twin-turbo W12/V8 engineering shape the car you drive today."
              : isLamborghini
              ? "How mid-engine Miura heritage, raging-bull naming tradition, and decades of LDVI/torque-vectoring engineering shape the car you drive today."
              : isPorsche
              ? "How rear-engine 911 heritage, Le Mans-winning motorsport DNA, and decades of PDK/PASM engineering shape the car you drive today."
              : isAudi
                ? "How quattro rally heritage, hand-built Audi Sport engineering, and digital cockpit innovation shape the car you drive today."
                : isVW
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
                    className={`text-xs font-medium ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    {el.subtitle}
                  </p>
                </div>
                <div
                  className={`w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center shrink-0 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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

      {/* The Indian Connection & SAVWIPL Facilities (Porsche/Lamborghini/Bentley India run a separate, direct-import model; SEAT has no Indian presence at all) */}
      {isSeat ? (
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-orange-900/40 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                <Globe2 className="w-4 h-4" />
                <span>No Official Distribution Network in India</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Not Currently Sold in India
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Unlike every other brand in this showcase, SEAT has never
                established a CBU import programme, CKD assembly line, dealer
                network or factory-backed service infrastructure in India.
                The Ibiza, Arona, Leon, Ateca and Tarraco shown here are
                presented purely as global reference models for enthusiasts
                comparing SEAT's Spanish, value-sport positioning against its
                Group siblings that are actually sold in India.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-300">
                <ShieldCheck className="w-4 h-4" />
                <span>No India Homologation</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">
                  No Showrooms or Dealers
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border text-orange-400 bg-orange-950 border-orange-800">
                  Zero Retail Presence
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                There are no authorised SEAT showrooms, sales outlets or
                genuine parts channels anywhere in India — a deliberate gap
                in the Volkswagen Group's Indian brand strategy, which
                concentrates mainstream volume under Škoda and Volkswagen
                instead.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">
                  No Service or Warranty Support
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border text-orange-400 bg-orange-950 border-orange-800">
                  Reference Content Only
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                With no official presence, SEAT owners in India (via grey
                imports) have no factory warranty, no roadside assistance
                network and no authorised service centres — all figures in
                this showcase are global reference specs, never a
                purchasable Indian configuration.
              </p>
            </div>
          </div>
        </div>
      ) : isBentley ? (
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-400">
                <Globe2 className="w-4 h-4" />
                <span>Bentley India Direct Market Operations</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Imported, Not Assembled: Bentley India's CBU Model
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Unlike Škoda and Volkswagen, Bentley India operates entirely
                separately from Škoda Auto Volkswagen India Pvt. Ltd.
                (SAVWIPL). Every Bentley sold here — from the Bentayga to
                the Flying Spur — arrives as a Completely Built Unit (CBU)
                import, preserving global-spec, hand-crafted build quality
                rather than local assembly.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-300">
                <ShieldCheck className="w-4 h-4" />
                <span>100% 5-Star Certified</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">
                  Bentley Mumbai
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border text-green-400 bg-green-950 border-green-800">
                  Flagship Retail & Experience
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Bentley's flagship showroom and one of its primary
                import-clearance and delivery hubs, offering the full CBU
                lineup alongside a Mulliner personal-commissioning studio
                and genuine parts service for Indian owners.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">
                  Bentley Delhi-Gurugram
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border text-green-400 bg-green-950 border-green-800">
                  Bespoke Commissioning Suite
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                A dedicated Mulliner commissioning suite bringing Bentley's
                personalization craftsmanship to Indian owners, separate
                from the SAVWIPL manufacturing network used for Škoda and
                Volkswagen models.
              </p>
            </div>
          </div>
        </div>
      ) : isLamborghini ? (
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-400">
                <Globe2 className="w-4 h-4" />
                <span>Lamborghini India Direct Market Operations</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Imported, Not Assembled: Lamborghini India's CBU Model
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Unlike Škoda and Volkswagen, Lamborghini India operates
                entirely separately from Škoda Auto Volkswagen India Pvt.
                Ltd. (SAVWIPL). Every Lamborghini sold here — from the
                Huracán to the Revuelto — arrives as a Completely Built
                Unit (CBU) import, preserving global-spec build quality
                rather than local assembly.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300">
                <ShieldCheck className="w-4 h-4" />
                <span>100% 5-Star Certified</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">
                  Lamborghini Mumbai
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border text-yellow-400 bg-yellow-950 border-yellow-800">
                  Flagship Retail & Experience
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Lamborghini's flagship showroom and one of its primary
                import-clearance and delivery hubs, offering the full CBU
                lineup alongside an Ad Personam customization studio and
                genuine parts service for Indian owners.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">
                  Lamborghini Delhi-Gurugram
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border text-yellow-400 bg-yellow-950 border-yellow-800">
                  Driving Academy
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                A dedicated track-and-training facility bringing
                Lamborghini's motorsport-derived car-control programs to
                Indian owners, separate from the SAVWIPL manufacturing
                network used for Škoda and Volkswagen models.
              </p>
            </div>
          </div>
        </div>
      ) : isPorsche ? (
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Globe2 className="w-4 h-4" />
                <span>Porsche India Direct Market Operations</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Imported, Not Assembled: Porsche India's CBU Model
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Unlike Škoda and Volkswagen, Porsche India operates entirely
                separately from Škoda Auto Volkswagen India Pvt. Ltd.
                (SAVWIPL). Every Porsche sold here — from the 718 Cayman to
                the Panamera — arrives as a Completely Built Unit (CBU)
                import, preserving global-spec build quality rather than
                local assembly.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-300">
                <ShieldCheck className="w-4 h-4" />
                <span>100% 5-Star Certified</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">
                  Porsche Centre Mumbai
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border text-amber-400 bg-amber-950 border-amber-800">
                  Flagship Retail & Experience
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Porsche India's flagship showroom and one of its primary
                import-clearance and delivery hubs, offering the full CBU
                lineup alongside a dedicated Porsche Classic and genuine
                parts service for Indian owners.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-sm">
                  Porsche Experience Centre, Gurugram
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border text-amber-400 bg-amber-950 border-amber-800">
                  Driving Academy
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                A dedicated track-and-training facility bringing Porsche's
                motorsport-derived car-control programs to Indian owners,
                separate from the SAVWIPL manufacturing network used for
                Škoda and Volkswagen models.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
              <div
                className={`px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 ${isAudi ? "bg-red-500/10 border border-red-500/30 text-red-300" : isVW ? "bg-blue-500/10 border border-blue-500/30 text-blue-300" : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"}`}
              >
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
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border ${isAudi ? "text-red-400 bg-red-950 border-red-800" : isVW ? "text-blue-400 bg-blue-950 border-blue-800" : "text-emerald-400 bg-emerald-950 border-emerald-800"}`}
                >
                  540 Acres
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {isAudi
                  ? "Produces the group's Kylaq, Slavia, Kushaq, Virtus, and Taigun on the MQB-A0-IN platform, while Audi models are CKD-assembled separately at Aurangabad. Features"
                  : `Produces the MQB-A0-IN platform models (${isVW ? "Virtus, Taigun" : "Kylaq, Slavia, Kushaq"}). Features`}
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
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border ${isAudi ? "text-red-400 bg-red-950 border-red-800" : isVW ? "text-blue-400 bg-blue-950 border-blue-800" : "text-emerald-400 bg-emerald-950 border-emerald-800"}`}
                >
                  Executive & Luxury Assembly
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {isAudi
                  ? "The CKD assembly home of the Audi A4, A6, Q3, Q5, and Q7, alongside executive and luxury Škoda and Volkswagen models (Kodiaq 4x4, Superb, Octavia, Tiguan 4x4). Certified with ISO 14001 environmental standards and zero-liquid-discharge water management."
                  : `Assembles executive and luxury models (${isVW ? "Tiguan 4x4" : "Kodiaq 4x4, Superb, Octavia"}), alongside executive luxury Audi models (A4, A6, Q3, Q5, Q7). Certified with ISO 14001 environmental standards and zero-liquid-discharge water management.`}
              </p>
            </div>
          </div>
        </div>
      )}

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
              Discover how {isSeat ? "SEAT" : isBentley ? "Bentley" : isLamborghini ? "Lamborghini" : isPorsche ? "Porsche" : isAudi ? "Audi" : isVW ? "Volkswagen" : "\u0160koda"} synergizes with
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
