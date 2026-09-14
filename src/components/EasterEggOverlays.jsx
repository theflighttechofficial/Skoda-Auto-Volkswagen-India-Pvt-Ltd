import { motion, AnimatePresence } from "motion/react";
import { Gauge, Flame, Waves, Sparkles } from "lucide-react";

export function RacingHudOverlay({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] pointer-events-none flex flex-col justify-between p-6"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
          }}
        >
          <div className="flex justify-between items-start font-mono text-emerald-400">
            <span className="text-xs tracking-widest bg-black/60 px-2 py-1 rounded border border-emerald-500/40">
              DSG MODE ENGAGED
            </span>
            <span className="text-xs tracking-widest bg-black/60 px-2 py-1 rounded border border-emerald-500/40 flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5" /> RACING HUD
            </span>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-black text-emerald-400 font-mono tracking-tight drop-shadow-[0_0_20px_rgba(16,185,129,0.7)]"
            >
              7,200 RPM
            </motion.div>
          </div>
          <div className="flex justify-between items-end font-mono text-emerald-400 text-xs">
            <span className="bg-black/60 px-2 py-1 rounded border border-emerald-500/40">
              GEAR: 4 → 5
            </span>
            <span className="bg-black/60 px-2 py-1 rounded border border-emerald-500/40">
              PADDLE SHIFT: DSG7
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function GtiThemeOverlay({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] pointer-events-none"
        >
          <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay" />
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-red-950/90 border border-red-600 text-red-300 px-3 py-1.5 rounded-xl text-xs font-black italic tracking-wider shadow-lg shadow-red-950">
            <Flame className="w-4 h-4 text-red-500 animate-pulse" /> GTI MODE
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function QuattroVizOverlay({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] bg-zinc-950/95 border border-zinc-700 rounded-2xl p-4 shadow-2xl w-72"
        >
          <div className="flex items-center gap-1.5 text-xs font-bold text-red-400 mb-3">
            <Waves className="w-3.5 h-3.5" /> quattro AWD Torque Split
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Front", pct: 40 },
              { label: "Rear", pct: 60 },
            ].map((axle) => (
              <div key={axle.label} className="text-center">
                <div className="h-16 rounded-lg bg-zinc-900 border border-zinc-800 relative overflow-hidden flex items-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${axle.pct}%` }}
                    transition={{ duration: 0.6 }}
                    className="w-full bg-gradient-to-t from-red-600 to-red-400"
                  />
                </div>
                <span className="text-[10px] text-zinc-400 mt-1 block">
                  {axle.label} {axle.pct}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function WolfsburgModeOverlay({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center bg-black/70"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="text-5xl mb-3"
            >
              <Sparkles className="w-14 h-14 text-blue-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl font-black text-white tracking-tight">WOLFSBURG MODE</h2>
            <p className="text-blue-400 text-sm mt-2 font-semibold">
              Unlocked. Germany's largest single-site factory salutes you.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
