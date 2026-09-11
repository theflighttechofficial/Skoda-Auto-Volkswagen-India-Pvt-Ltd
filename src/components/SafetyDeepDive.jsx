import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { SKODA_SAFETY_SUITE, SKODA_MODELS } from "../data/skodaData";
import { VW_SAFETY_SUITE, VW_MODELS } from "../data/vwData";
import { AUDI_SAFETY_SUITE, AUDI_MODELS } from "../data/audiData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
export const SafetyDeepDive = ({ brand = "skoda" }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const models = isAudi ? AUDI_MODELS : isVW ? VW_MODELS : SKODA_MODELS;
  const safetySuite = isAudi ? AUDI_SAFETY_SUITE : isVW ? VW_SAFETY_SUITE : SKODA_SAFETY_SUITE;
  return (
    <div className="space-y-8">
      {/* Title with Logo */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1 ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
          >
            {isAudi ? (
              <AudiLogo variant="emblem" size="sm" />
            ) : isVW ? (
              <VolkswagenLogo variant="emblem" size="sm" />
            ) : (
              <SkodaLogo variant="emblem" size="sm" />
            )}
            <span>Zero Compromise Safety Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {isAudi
              ? "Audi 5-Star Safety Architecture"
              : isVW
                ? "Volkswagen 5-Star Safety Architecture"
                : "\u0160koda 5-Star Safety Architecture"}
          </h2>
          <p className="text-sm text-zinc-400">
            {isAudi
              ? "Progressive luxury engineering: 5-Star Euro NCAP crash safety rating standard across the current Audi India portfolio"
              : isVW
                ? "German engineering integrity: 100% 5-Star crash safety rating across the entire India 2.0 portfolio"
                : "\u0160koda is the only manufacturer in India with a 100% 5-Star crash safety rating across its tested portfolio"}
          </p>
        </div>

        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold self-start ${isVW ? "bg-blue-950/80 border-blue-800 text-blue-300" : "bg-emerald-950/80 border-emerald-800 text-emerald-300"}`}
        >
          <ShieldCheck
            className={`w-4 h-4 ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
          />
          <span>Global NCAP & Euro NCAP Certified</span>
        </div>
      </div>

      {/* Hero Safety Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-r via-zinc-900 to-zinc-950 border p-6 sm:p-8 shadow-xl ${isVW ? "from-blue-950/70 border-blue-800/40" : "from-emerald-950/70 border-emerald-800/40"}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${isVW ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"}`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Full 5-Star Adult & Child Crash Rating</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {isAudi
                ? "Rigid Progressive Luxury Safety Cell (MLB/MQB Evo)"
                : isVW
                  ? "Rigid German Safety Cell (MQB-A0-IN)"
                  : "Engineered to Protect What Matters Most"}
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl">
              Under Global NCAP’s stringent revised protocols—testing front
              offset, side mobile barrier, side pole impact, and ESC
              functionality—{isAudi ? "Audi\u2019s" : isVW ? "Volkswagen\u2019s" : "\u0160koda\u2019s"}{" "}
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
                  className={`text-xl font-bold ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  5-Star (29.71 / 34)
                </span>
              </div>
              <ShieldCheck
                className={`w-7 h-7 ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
              />
            </div>
            <div className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[11px] text-zinc-400 block font-medium">
                  Child Occupant Protection
                </span>
                <span
                  className={`text-xl font-bold ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  5-Star (42.00 / 49)
                </span>
              </div>
              <ShieldCheck
                className={`w-7 h-7 ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
            className={`p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-3 transition-all shadow-md ${isVW ? "hover:border-blue-600/50" : "hover:border-emerald-600/50"}`}
          >
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <span
                  className={`text-xs font-semibold ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  {item.subtitle}
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {item.title}
                </h4>
              </div>
              <span
                className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap border ${isVW ? "bg-blue-950 border-blue-800 text-blue-300" : "bg-emerald-950 border-emerald-800 text-emerald-300"}`}
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
              {isAudi ? "Audi" : isVW ? "Volkswagen" : "\u0160koda"} Portfolio
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Every vehicle is built with hot-formed high-strength steel cages
            </p>
          </div>
          {isAudi ? (
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
                let chassisText = isAudi ? "MLB Evo High-Tensile" : "MQB-A0-IN High-Tensile";
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
                      className={`py-3 px-4 font-semibold ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
