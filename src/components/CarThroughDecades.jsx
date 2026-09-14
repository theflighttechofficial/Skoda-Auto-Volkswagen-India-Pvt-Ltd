import { useState, useMemo } from "react";
import { History as HistoryIcon, ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GROUP_DECADES } from "../data/decadesData";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";

const MODELS_BY_BRAND = { skoda: SKODA_MODELS, volkswagen: VW_MODELS, audi: AUDI_MODELS };
const BRAND_LOGO = { skoda: SkodaLogo, volkswagen: VolkswagenLogo, audi: AudiLogo };
const BRAND_TEXT = { skoda: "text-emerald-400", volkswagen: "text-blue-400", audi: "text-red-400" };

export const CarThroughDecades = () => {
  const [index, setIndex] = useState(0);
  const [showComparison, setShowComparison] = useState(false);
  const milestone = GROUP_DECADES[index];
  const Logo = BRAND_LOGO[milestone.brand];

  const nowModel = useMemo(() => {
    const models = MODELS_BY_BRAND[milestone.brand] || [];
    return models.find((m) => m.id === milestone.nowModelId);
  }, [milestone]);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
          <HistoryIcon className="w-3.5 h-3.5" /> Car Through the Decades
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
          130 Years, One Timeline
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          Drag the slider through the Group’s history — from Laurin & Klement’s bicycles in
          1895 to today’s shared MQB-A0-IN lineup.
        </p>
      </div>

      {/* Timeline slider */}
      <div className="max-w-3xl mx-auto space-y-2">
        <input
          type="range"
          min="0"
          max={GROUP_DECADES.length - 1}
          step="1"
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />
        <div className="flex justify-between text-[10px] sm:text-xs text-zinc-500 font-mono px-0.5">
          {GROUP_DECADES.map((m, i) => (
            <button
              key={m.year}
              onClick={() => setIndex(i)}
              className={`transition-colors cursor-pointer ${i === index ? "text-amber-400 font-bold" : "hover:text-zinc-300"}`}
            >
              {m.year}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={milestone.year}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="max-w-3xl mx-auto rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-3">
              <Logo variant="emblem" size="md" />
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider ${BRAND_TEXT[milestone.brand]}`}>
                  {milestone.year}
                </span>
                <h3 className="text-xl font-black text-white leading-tight">{milestone.title}</h3>
              </div>
            </div>
            <button
              onClick={() => setShowComparison((s) => !s)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all shrink-0 ${
                showComparison
                  ? "bg-amber-600 text-white border-amber-500"
                  : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" /> Then vs Now
            </button>
          </div>

          <p className="text-sm text-zinc-300 mt-4 leading-relaxed">{milestone.description}</p>

          <AnimatePresence mode="wait">
            {!showComparison ? (
              <motion.ul
                key="facts"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 space-y-2"
              >
                {milestone.thenFacts.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </motion.ul>
            ) : (
              <motion.div
                key="compare"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Then — {milestone.year}
                  </span>
                  <ul className="mt-2 space-y-1.5">
                    {milestone.thenFacts.map((f) => (
                      <li key={f} className="text-xs text-zinc-400">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Now — {milestone.nowLabel}
                  </span>
                  {nowModel ? (
                    <ul className="mt-2 space-y-1.5 text-xs text-zinc-400">
                      <li>{nowModel.bodyType} • {nowModel.priceRange}</li>
                      <li>{nowModel.engines?.[0]}</li>
                      <li>{nowModel.safetyStars}-Star Safety Rating</li>
                      <li>{nowModel.keyHighlights?.[0]}</li>
                    </ul>
                  ) : (
                    <p className="text-xs text-zinc-500 mt-2">
                      {milestone.nowLabel} carries the Group’s current shared engineering forward.
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
