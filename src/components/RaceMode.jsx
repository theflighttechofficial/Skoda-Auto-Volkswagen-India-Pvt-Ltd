import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  Flag,
  Trophy,
  Play,
  RotateCcw,
  Timer,
  Zap,
  Gauge,
  Weight,
  Settings2,
  Check,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CarSilhouette } from "./CarSilhouette";
import { getRaceRoster } from "../utils/raceRoster";
import { buildVelocityModel, speedAt, distanceAt, computeRaceStats, QUARTER_MILE_METRES } from "../utils/racePhysics";

const BRAND_ACCENT = { skoda: "#10b981", volkswagen: "#3b82f6", audi: "#ef4444", porsche: "#f59e0b", lamborghini: "#eab308", bentley: "#16a34a", seat: "#f97316", scania: "#e11d48", man: "#0ea5e9" };
const BRAND_LABEL = { skoda: "Škoda", volkswagen: "Volkswagen", audi: "Audi", porsche: "Porsche", lamborghini: "Lamborghini", bentley: "Bentley", seat: "SEAT", scania: "Scania", man: "MAN" };
const MAX_RACERS = 4;
const MIN_RACERS = 2;

export const RaceMode = ({ brand = "skoda" }) => {
  const roster = useMemo(() => getRaceRoster(), []);
  const accentText = brand === "audi" ? "text-red-400" : brand === "volkswagen" ? "text-blue-400" : brand === "porsche" ? "text-amber-400" : brand === "lamborghini" ? "text-yellow-400" : brand === "bentley" ? "text-green-400" : brand === "seat" ? "text-orange-400" : brand === "scania" ? "text-rose-400" : brand === "man" ? "text-sky-400" : "text-emerald-400";
  const accentBg = brand === "audi" ? "bg-red-600 hover:bg-red-500" : brand === "volkswagen" ? "bg-blue-600 hover:bg-blue-500" : brand === "porsche" ? "bg-amber-600 hover:bg-amber-500" : brand === "lamborghini" ? "bg-yellow-600 hover:bg-yellow-500" : brand === "bentley" ? "bg-green-600 hover:bg-green-500" : brand === "seat" ? "bg-orange-600 hover:bg-orange-500" : brand === "scania" ? "bg-rose-600 hover:bg-rose-500" : brand === "man" ? "bg-sky-600 hover:bg-sky-500" : "bg-emerald-600 hover:bg-emerald-500";

  const [selectedIds, setSelectedIds] = useState(() => roster.slice(0, 3).map((r) => r.id));
  const [phase, setPhase] = useState("select"); // select | racing | finished
  const [positions, setPositions] = useState({}); // id -> {distance, speed, finished, finishTime}
  const [raceTime, setRaceTime] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(0);
  const positionsRef = useRef({});

  const racers = selectedIds.map((id) => roster.find((r) => r.id === id)).filter(Boolean);
  const models = useMemo(
    () => Object.fromEntries(racers.map((r) => [r.id, buildVelocityModel(r.accelSeconds, r.topSpeedKmh)])),
    [racers],
  );

  const toggleRacer = (id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((p) => p !== id);
      if (prev.length >= MAX_RACERS) return prev;
      return [...prev, id];
    });
  };

  const startRace = () => {
    setPhase("racing");
    const initial = {};
    racers.forEach((r) => {
      initial[r.id] = { distance: 0, speed: 0, finished: false, finishTime: null };
    });
    positionsRef.current = initial;
    setPositions(initial);
    setRaceTime(0);
    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
  };

  // Drives the race off a ref (the authoritative source of truth) rather
  // than a setState functional-updater, and computes "all finished" as a
  // plain local value — mutating an outer variable from inside a setState
  // updater isn't a reliable way to read that update's result back out.
  const tick = useCallback(() => {
    const now = performance.now();
    const t = (now - startRef.current) / 1000;
    const next = { ...positionsRef.current };
    let allFinished = true;
    racers.forEach((r) => {
      const entry = next[r.id] || { distance: 0, speed: 0, finished: false, finishTime: null };
      if (entry.finished) return;
      const model = models[r.id];
      const dist = distanceAt(model, t);
      const speed = speedAt(model, t);
      if (dist >= QUARTER_MILE_METRES) {
        next[r.id] = { distance: QUARTER_MILE_METRES, speed, finished: true, finishTime: t };
      } else {
        next[r.id] = { distance: dist, speed, finished: false, finishTime: null };
        allFinished = false;
      }
    });
    positionsRef.current = next;
    setPositions(next);
    setRaceTime(t);
    if (!allFinished && t < 30) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      setPhase("finished");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [racers, models]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const resetRace = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    positionsRef.current = {};
    setPhase("select");
    setPositions({});
    setRaceTime(0);
  };

  const finalStats = useMemo(() => {
    if (phase !== "finished") return [];
    return racers
      .map((r) => ({ racer: r, stats: computeRaceStats(r), finishTime: positions[r.id]?.finishTime }))
      .sort((a, b) => (a.finishTime ?? 999) - (b.finishTime ?? 999));
  }, [phase, racers, positions]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1">
          <Flag className={`w-4 h-4 ${accentText}`} />
          <span className={accentText}>Cross-Brand Performance Arena</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Race the Group</h2>
        <p className="text-sm text-zinc-400 max-w-2xl">
          Pick 2–4 performance icons from across Škoda vRS, Volkswagen GTI/GLI, Audi Sport RS, Porsche GT/Turbo,
          Lamborghini GT/STO, and Bentley GT/Speed — then race them head-to-head over a simulated quarter mile
          using their real 0–100 km/h and top speed figures.
        </p>
      </div>

      {phase === "select" && (
        <RosterSelect
          roster={roster}
          selectedIds={selectedIds}
          toggleRacer={toggleRacer}
          accentBg={accentBg}
          accentText={accentText}
          onStart={startRace}
        />
      )}

      {(phase === "racing" || phase === "finished") && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-4 sm:p-6 space-y-5 overflow-hidden">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Timer className={`w-4 h-4 ${accentText}`} />
                Quarter Mile ({(QUARTER_MILE_METRES).toFixed(0)}m) — {raceTime.toFixed(2)}s elapsed
              </div>
              {phase === "finished" && (
                <button
                  onClick={resetRace}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white cursor-pointer ${accentBg}`}
                >
                  <RotateCcw className="w-3.5 h-3.5" /> New Race
                </button>
              )}
            </div>

            <div className="space-y-4">
              {racers.map((r) => {
                const pos = positions[r.id] || { distance: 0, speed: 0, finished: false };
                const pct = Math.min(100, (pos.distance / QUARTER_MILE_METRES) * 100);
                const rank =
                  phase === "finished"
                    ? finalStats.findIndex((f) => f.racer.id === r.id) + 1
                    : null;
                return (
                  <div key={r.id} className="relative">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        {rank === 1 && <Trophy className="w-3.5 h-3.5 text-amber-400" />}
                        {r.name}
                        <span className="text-zinc-500 font-normal">({BRAND_LABEL[r.brand]})</span>
                      </span>
                      <span className="font-mono text-zinc-300">
                        {pos.finished ? `${pos.finishTime.toFixed(2)}s` : `${Math.round(pos.speed)} km/h`}
                      </span>
                    </div>
                    <div className="relative h-10 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden">
                      {/* Finish line */}
                      <div className="absolute right-2 top-0 bottom-0 w-0.5 bg-white/40" />
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-12 h-7"
                        initial={{ left: 0 }}
                        animate={{ left: `calc(${pct}% - ${pct === 0 ? 0 : 3}rem)` }}
                        transition={{ duration: 0.08, ease: "linear" }}
                      >
                        <CarSilhouette
                          colorHex={r.heroColorHex}
                          shape={r.shape}
                          accentHex={BRAND_ACCENT[r.brand]}
                          facingRight
                        />
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <AnimatePresence>
            {phase === "finished" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 space-y-5"
              >
                <div className="flex items-center gap-2 text-lg font-bold text-white">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  Race Results
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs min-w-[760px]">
                    <thead>
                      <tr className="text-zinc-500 border-b border-zinc-800">
                        <th className="text-left py-2 pr-3">#</th>
                        <th className="text-left py-2 pr-3">Car</th>
                        <th className="text-right py-2 px-3">0–60mph</th>
                        <th className="text-right py-2 px-3">0–100</th>
                        <th className="text-right py-2 px-3">100–200</th>
                        <th className="text-right py-2 px-3">1/4 Mile</th>
                        <th className="text-right py-2 px-3">Trap Speed</th>
                        <th className="text-right py-2 px-3">Top Speed</th>
                        <th className="text-right py-2 px-3">Power</th>
                        <th className="text-right py-2 px-3">Torque</th>
                        <th className="text-right py-2 px-3">Weight</th>
                        <th className="text-right py-2 pl-3">Drivetrain</th>
                      </tr>
                    </thead>
                    <tbody>
                      {finalStats.map(({ racer, stats }, idx) => (
                        <tr key={racer.id} className={`border-b border-zinc-900 ${idx === 0 ? "bg-amber-500/5" : ""}`}>
                          <td className="py-2.5 pr-3 font-bold text-white">
                            {idx === 0 ? <Trophy className="w-3.5 h-3.5 text-amber-400" /> : idx + 1}
                          </td>
                          <td className="py-2.5 pr-3 font-semibold text-white whitespace-nowrap">{racer.name}</td>
                          <td className="py-2.5 px-3 text-right text-zinc-300">{stats.zeroToSixtyMph.toFixed(2)}s</td>
                          <td className="py-2.5 px-3 text-right text-zinc-300">{stats.zeroToHundred.toFixed(1)}s</td>
                          <td className="py-2.5 px-3 text-right text-zinc-300">
                            {stats.hundredToTwoHundred ? `${stats.hundredToTwoHundred.toFixed(2)}s` : "—"}
                          </td>
                          <td className="py-2.5 px-3 text-right font-bold text-white">{stats.quarterMileSeconds.toFixed(2)}s</td>
                          <td className="py-2.5 px-3 text-right text-zinc-300">{Math.round(stats.quarterMileTrapKmh)} km/h</td>
                          <td className="py-2.5 px-3 text-right text-zinc-300">{racer.topSpeedKmh} km/h</td>
                          <td className="py-2.5 px-3 text-right text-zinc-300">{racer.powerHp} PS</td>
                          <td className="py-2.5 px-3 text-right text-zinc-300">{racer.torqueNm} Nm</td>
                          <td className="py-2.5 px-3 text-right text-zinc-300">{racer.weightKg} kg</td>
                          <td className="py-2.5 pl-3 text-right text-zinc-300 whitespace-nowrap">{racer.drivetrain}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-zinc-500 flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  0–100 km/h and top speed are each car's real published figures. 0–60mph, 100–200 km/h, quarter-mile
                  time and trap speed are estimated from those two figures using a standard acceleration curve model —
                  treat them as indicative, not manufacturer-certified numbers.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

function RosterSelect({ roster, selectedIds, toggleRacer, accentBg, accentText, onStart }) {
  const canStart = selectedIds.length >= MIN_RACERS && selectedIds.length <= MAX_RACERS;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Settings2 className={`w-4 h-4 ${accentText}`} />
          Pick {MIN_RACERS}–{MAX_RACERS} Cars ({selectedIds.length} selected)
        </div>
        <button
          onClick={onStart}
          disabled={!canStart}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all ${canStart ? `${accentBg} cursor-pointer shadow-lg` : "bg-zinc-800 text-zinc-500 cursor-not-allowed"}`}
        >
          <Play className="w-4 h-4" /> Start Race
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {roster.map((r) => {
          const isSelected = selectedIds.includes(r.id);
          const brandColor = r.brand === "audi" ? "text-red-400" : r.brand === "volkswagen" ? "text-blue-400" : r.brand === "porsche" ? "text-amber-400" : r.brand === "lamborghini" ? "text-yellow-400" : r.brand === "bentley" ? "text-green-400" : r.brand === "seat" ? "text-orange-400" : r.brand === "scania" ? "text-rose-400" : r.brand === "man" ? "text-sky-400" : "text-emerald-400";
          return (
            <button
              key={r.id}
              onClick={() => toggleRacer(r.id)}
              className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${isSelected ? "bg-zinc-900 border-zinc-600 ring-1 ring-zinc-500" : "bg-zinc-950/70 border-zinc-800 hover:border-zinc-700"}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${brandColor}`}>{BRAND_LABEL[r.brand]}</span>
                  <h4 className="text-sm font-bold text-white leading-tight">{r.name}</h4>
                </div>
                <span
                  className={`w-5 h-5 rounded-md border shrink-0 flex items-center justify-center ${isSelected ? "bg-white border-white" : "border-zinc-600"}`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-zinc-900" />}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2 text-[11px] font-mono text-zinc-300">
                <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" />{r.powerHp} PS</span>
                <span className="flex items-center gap-1"><Gauge className="w-3 h-3 text-sky-400" />{r.accelSeconds}s</span>
                <span className="flex items-center gap-1"><Weight className="w-3 h-3 text-zinc-500" />{r.weightKg}kg</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
