import { useState } from "react";
import {
  Factory,
  Cog,
  CheckCircle2,
  Store,
  UserCheck,
  MapPin,
  ChevronRight,
  Flag,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MANUFACTURING_JOURNEY, LOCALISATION_STATS } from "../data/madeInIndiaData";

const ICON_MAP = {
  factory: Factory,
  cog: Cog,
  wrench: Cog,
  checkCircle: CheckCircle2,
  store: Store,
  user: UserCheck,
};

export const MadeInIndiaStory = ({ onOpenMap }) => {
  const [activeId, setActiveId] = useState(MANUFACTURING_JOURNEY[0].id);
  const activeStage = MANUFACTURING_JOURNEY.find((s) => s.id === activeId) || MANUFACTURING_JOURNEY[0];
  const activeIndex = MANUFACTURING_JOURNEY.findIndex((s) => s.id === activeId);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
          <Flag className="w-3.5 h-3.5" /> Made in India
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
          How a Group Car Reaches Your Driveway
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          From a stamped steel panel at a supplier in Maharashtra to the key handover at your
          local dealership — the full localisation and manufacturing story behind every Škoda,
          Volkswagen, and Audi built in India.
        </p>
      </div>

      {/* Stat strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
        {LOCALISATION_STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl bg-zinc-900/60 border border-zinc-800 p-4 text-center"
          >
            <div className="text-2xl font-black text-amber-400">{stat.value}</div>
            <div className="text-[11px] font-semibold text-zinc-300 mt-1">{stat.label}</div>
            <div className="text-[10px] text-zinc-500 mt-1 leading-snug">{stat.detail}</div>
          </div>
        ))}
      </div>

      {/* Journey timeline */}
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center overflow-x-auto scrollbar-none pb-2 gap-1">
          {MANUFACTURING_JOURNEY.map((stage, i) => {
            const Icon = ICON_MAP[stage.icon];
            const isActive = stage.id === activeId;
            const isPast = i < activeIndex;
            return (
              <div key={stage.id} className="flex items-center shrink-0">
                <button
                  onClick={() => setActiveId(stage.id)}
                  className={`flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer min-w-[92px] ${
                    isActive ? "bg-amber-950/50 border border-amber-700" : "hover:bg-zinc-900/60 border border-transparent"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-colors ${
                      isActive
                        ? "bg-amber-500 border-amber-400 text-zinc-950"
                        : isPast
                          ? "bg-amber-950/60 border-amber-700 text-amber-400"
                          : "bg-zinc-900 border-zinc-700 text-zinc-500"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-bold text-center leading-tight ${
                      isActive ? "text-amber-300" : "text-zinc-500"
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
                {i < MANUFACTURING_JOURNEY.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-zinc-700 shrink-0 mx-0.5" />
                )}
              </div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-xl font-black text-white">{activeStage.title}</h3>
                <p className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mt-1">
                  <MapPin className="w-3.5 h-3.5" /> {activeStage.location}
                </p>
              </div>
              <span className="text-xs text-zinc-500 shrink-0">
                Step {activeIndex + 1} of {MANUFACTURING_JOURNEY.length}
              </span>
            </div>

            <p className="text-sm text-zinc-300 mt-4 leading-relaxed">{activeStage.summary}</p>

            <ul className="mt-4 space-y-2">
              {activeStage.details.map((d) => (
                <li key={d} className="flex items-start gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-800">
              <button
                disabled={activeIndex === 0}
                onClick={() => setActiveId(MANUFACTURING_JOURNEY[activeIndex - 1].id)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 text-zinc-300 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                ← Previous Step
              </button>
              {activeStage.id === "dealership" && onOpenMap && (
                <button
                  onClick={onOpenMap}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white cursor-pointer transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" /> View Dealership Map
                </button>
              )}
              <button
                disabled={activeIndex === MANUFACTURING_JOURNEY.length - 1}
                onClick={() => setActiveId(MANUFACTURING_JOURNEY[activeIndex + 1].id)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 text-white hover:bg-amber-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                Next Step →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
