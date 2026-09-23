import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { SKODA_SAFETY_SUITE, SKODA_MODELS } from "../data/skodaData";
import { VW_SAFETY_SUITE, VW_MODELS } from "../data/vwData";
import { AUDI_SAFETY_SUITE, AUDI_MODELS } from "../data/audiData";
import { PORSCHE_SAFETY_SUITE, PORSCHE_MODELS } from "../data/porscheData";
import { LAMBORGHINI_SAFETY_SUITE, LAMBORGHINI_MODELS } from "../data/lamborghiniData";
import { BENTLEY_SAFETY_SUITE, BENTLEY_MODELS } from "../data/bentleyData";
import { SEAT_SAFETY_SUITE, SEAT_MODELS } from "../data/seatData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { BentleyLogo } from "./BentleyLogo";
import { SeatLogo } from "./SeatLogo";
export const SafetyDeepDive = ({ brand = "skoda" }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const isBentley = brand === "bentley";
  const isSeat = brand === "seat";
  const models = isSeat ? SEAT_MODELS : isBentley ? BENTLEY_MODELS : isLamborghini ? LAMBORGHINI_MODELS : isPorsche ? PORSCHE_MODELS : isAudi ? AUDI_MODELS : isVW ? VW_MODELS : SKODA_MODELS;
  const safetySuite = isSeat ? SEAT_SAFETY_SUITE : isBentley ? BENTLEY_SAFETY_SUITE : isLamborghini ? LAMBORGHINI_SAFETY_SUITE : isPorsche ? PORSCHE_SAFETY_SUITE : isAudi ? AUDI_SAFETY_SUITE : isVW ? VW_SAFETY_SUITE : SKODA_SAFETY_SUITE;
  return (
    <div className="space-y-8">
      {/* Title with Logo */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
          >
            {isSeat ? (
              <SeatLogo variant="emblem" size="sm" />
            ) : isBentley ? (
              <BentleyLogo variant="emblem" size="sm" />
            ) : isLamborghini ? (
              <LamborghiniLogo variant="emblem" size="sm" />
            ) : isPorsche ? (
              <PorscheLogo variant="emblem" size="sm" />
            ) : isAudi ? (
              <AudiLogo variant="emblem" size="sm" />
            ) : isVW ? (
              <VolkswagenLogo variant="emblem" size="sm" />
            ) : (
              <SkodaLogo variant="emblem" size="sm" />
            )}
            <span>Zero Compromise Safety Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {isLamborghini
              ? "Lamborghini 5-Star Safety Architecture"
              : isPorsche
              ? "Porsche 5-Star Safety Architecture"
              : isAudi
                ? "Audi 5-Star Safety Architecture"
                : isVW
                  ? "Volkswagen 5-Star Safety Architecture"
                  : "\u0160koda 5-Star Safety Architecture"}
          </h2>
          <p className="text-sm text-zinc-400">
            {isLamborghini
              ? "Every current Lamborghini model sold in India carries a 5-Star Euro NCAP rating, backed by Lamborghini Dinamica Veicolo Integrata chassis control and a carbon-fibre monocoque safety cell"
              : isPorsche
              ? "Every current Porsche model sold in India carries a 5-Star Euro NCAP rating, backed by Porsche Active Suspension Management and a reinforced high-strength-steel safety cell"
              : isAudi
                ? "Progressive luxury engineering: 5-Star Euro NCAP crash safety rating standard across the current Audi India portfolio"
                : isVW
                  ? "German engineering integrity: 100% 5-Star crash safety rating across the entire India 2.0 portfolio"
                  : "\u0160koda is the only manufacturer in India with a 100% 5-Star crash safety rating across its tested portfolio"}
          </p>
        </div>

        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold self-start ${isSeat ? "bg-orange-950/80 border-orange-800 text-orange-300" : isBentley ? "bg-green-950/80 border-green-800 text-green-300" : isLamborghini ? "bg-yellow-950/80 border-yellow-800 text-yellow-300" : isPorsche ? "bg-amber-950/80 border-amber-800 text-amber-300" : isAudi ? "bg-red-950/80 border-red-800 text-red-300" : isVW ? "bg-blue-950/80 border-blue-800 text-blue-300" : "bg-emerald-950/80 border-emerald-800 text-emerald-300"}`}
        >
          <ShieldCheck
            className={`w-4 h-4 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
          />
          <span>Global NCAP & Euro NCAP Certified</span>
        </div>
      </div>

      {/* Hero Safety Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-r via-zinc-900 to-zinc-950 border p-6 sm:p-8 shadow-xl ${isSeat ? "from-orange-950/70 border-orange-800/40" : isBentley ? "from-green-950/70 border-green-800/40" : isLamborghini ? "from-yellow-950/70 border-yellow-800/40" : isPorsche ? "from-amber-950/70 border-amber-800/40" : isAudi ? "from-red-950/70 border-red-800/40" : isVW ? "from-blue-950/70 border-blue-800/40" : "from-emerald-950/70 border-emerald-800/40"}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${isSeat ? "bg-orange-500/20 text-orange-300 border-orange-500/30" : isBentley ? "bg-green-500/20 text-green-300 border-green-500/30" : isLamborghini ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" : isPorsche ? "bg-amber-500/20 text-amber-300 border-amber-500/30" : isAudi ? "bg-red-500/20 text-red-300 border-red-500/30" : isVW ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"}`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Full 5-Star Adult & Child Crash Rating</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {isLamborghini
                ? "Reinforced Lamborghini Carbon-Fibre Safety Cell"
                : isPorsche
                ? "Reinforced Porsche Safety Cell (POSIP)"
                : isAudi
                  ? "Rigid Progressive Luxury Safety Cell (MLB/MQB Evo)"
                  : isVW
                    ? "Rigid German Safety Cell (MQB-A0-IN)"
                    : "Engineered to Protect What Matters Most"}
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl">
              Under Global NCAP’s stringent revised protocols—testing front
              offset, side mobile barrier, side pole impact, and ESC
              functionality—{isBentley ? "Bentley\u2019s" : isLamborghini ? "Lamborghini\u2019s" : isPorsche ? "Porsche\u2019s" : isAudi ? "Audi\u2019s" : isVW ? "Volkswagen\u2019s" : "\u0160koda\u2019s"}{" "}
              laser-welded, hot-formed steel platform set the gold standard in
              Indian automotive safety.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <div className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[11px] text-zinc-400 block font-medium">
                  Adult Occupant Protection
                </span>
                <span
                  className={`text-xl font-bold ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  5-Star (29.71 / 34)
                </span>
              </div>
              <ShieldCheck
                className={`w-7 h-7 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
              />
            </div>
            <div className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[11px] text-zinc-400 block font-medium">
                  Child Occupant Protection
                </span>
                <span
                  className={`text-xl font-bold ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  5-Star (42.00 / 49)
                </span>
              </div>
              <ShieldCheck
                className={`w-7 h-7 ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Safety Matrix Cards with subtle motion hover */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {safetySuite.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.35 }}
            whileHover={{ y: -3 }}
            className={`p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-3 transition-all shadow-md ${isSeat ? "hover:border-orange-600/50" : isBentley ? "hover:border-green-600/50" : isLamborghini ? "hover:border-yellow-600/50" : isPorsche ? "hover:border-amber-600/50" : isAudi ? "hover:border-red-600/50" : isVW ? "hover:border-blue-600/50" : "hover:border-emerald-600/50"}`}
          >
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <span
                  className={`text-xs font-semibold ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  {item.subtitle}
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {item.title}
                </h4>
              </div>
              <span
                className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap border ${isSeat ? "bg-orange-950 border-orange-800 text-orange-300" : isBentley ? "bg-green-950 border-green-800 text-green-300" : isLamborghini ? "bg-yellow-950 border-yellow-800 text-yellow-300" : isPorsche ? "bg-amber-950 border-amber-800 text-amber-300" : isAudi ? "bg-red-950 border-red-800 text-red-300" : isVW ? "bg-blue-950 border-blue-800 text-blue-300" : "bg-emerald-950 border-emerald-800 text-emerald-300"}`}
              >
                {item.metric}
              </span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Safety Across Every Model Breakdown Table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-zinc-900/60 rounded-3xl border border-zinc-800 p-6 sm:p-8 space-y-4 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-bold text-white">
              Standard Safety Equipment Across the{" "}
              {isSeat ? "SEAT" : isBentley ? "Bentley" : isLamborghini ? "Lamborghini" : isPorsche ? "Porsche" : isAudi ? "Audi" : isVW ? "Volkswagen" : "\u0160koda"} Portfolio
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Every vehicle is built with hot-formed high-strength steel cages
            </p>
          </div>
          {isSeat ? (
            <SeatLogo variant="emblem" size="sm" />
          ) : isBentley ? (
            <BentleyLogo variant="emblem" size="sm" />
          ) : isLamborghini ? (
            <LamborghiniLogo variant="emblem" size="sm" />
          ) : isPorsche ? (
            <PorscheLogo variant="emblem" size="sm" />
          ) : isAudi ? (
            <AudiLogo variant="emblem" size="sm" />
          ) : isVW ? (
            <VolkswagenLogo variant="emblem" size="sm" />
          ) : (
            <SkodaLogo variant="emblem" size="sm" />
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase tracking-wider font-semibold">
                <th className="py-3 px-4">Car Model</th>
                <th className="py-3 px-4">Crash Rating</th>
                <th className="py-3 px-4">Standard Airbags</th>
                <th className="py-3 px-4">Electronic Stability (ESC)</th>
                <th className="py-3 px-4">Chassis Architecture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {models.map((car) => {
                let airbagText = "6 Airbags Standard";
                let chassisText = isSeat ? "SEAT MQB/MQB-Evo High-Tensile (Global Reference)" : isBentley ? "Bentley Own High-Strength Steel/Aluminum Chassis" : isLamborghini ? "Lamborghini Own Aluminum/Carbon Chassis" : isPorsche ? "Porsche MLB/MSB High-Tensile" : isAudi ? "MLB Evo High-Tensile" : "MQB-A0-IN High-Tensile";
                if (car.id === "q7" || car.id === "q8") {
                  airbagText = "8 Airbags Standard";
                  chassisText = "MLB Evo (quattro AWD)";
                } else if (car.id === "q5" || car.id === "q3") {
                  airbagText = "7 Airbags Standard";
                  chassisText = "MQB Evo (quattro AWD)";
                } else if (car.id === "kodiaq" || car.id === "superb") {
                  airbagText = "9 Airbags Standard";
                  chassisText = "MQB-B / MQB-Evo";
                } else if (car.id === "octavia") {
                  airbagText = "8 Airbags Standard";
                  chassisText = "MQB-Evo with Multi-Link";
                } else if (car.id === "tiguan") {
                  airbagText = "6 Airbags Standard";
                  chassisText = "MQB Platform (All-Wheel Drive)";
                } else if (car.id === "golf-gti") {
                  airbagText = "7 Airbags Standard";
                  chassisText = "MQB-Evo Performance Chassis";
                }
                return (
                  <tr
                    key={car.id}
                    className="hover:bg-zinc-900/60 transition-colors"
                  >
                    <td className="py-3 px-4 font-bold text-white flex items-center gap-2">
                      <span>{car.name}</span>
                      {(car.id === "octavia" || car.id === "golf-gti") && (
                        <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Icon
                        </span>
                      )}
                    </td>
                    <td
                      className={`py-3 px-4 font-semibold ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                    >
                      {car.rating}
                    </td>
                    <td className="py-3 px-4 text-white font-medium">
                      {airbagText}
                    </td>
                    <td className="py-3 px-4 text-zinc-300">
                      Standard across all trims
                    </td>
                    <td className="py-3 px-4 text-zinc-400 font-mono text-[11px]">
                      {chassisText}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};
