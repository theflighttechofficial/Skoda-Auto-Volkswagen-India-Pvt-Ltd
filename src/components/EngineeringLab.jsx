import { useState, useEffect, useRef } from "react";
import {
  FlaskConical,
  Wind,
  GitBranch,
  Layers,
  Waves,
  Gauge,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const LAB_SECTIONS = [
  { id: "turbo", label: "Turbocharger", icon: Wind },
  { id: "dsg", label: "DSG Gearbox", icon: GitBranch },
  { id: "act", label: "ACT Cylinders", icon: Layers },
  { id: "quattro", label: "quattro AWD", icon: Waves },
];

function TurboSim() {
  const [rpm, setRpm] = useState(2000);
  const boost = Math.max(0, Math.min(24, ((rpm - 1800) / 5000) * 24));
  const spoolPct = Math.min(100, Math.max(0, ((rpm - 1500) / 4500) * 100));
  const inBoost = rpm > 1800;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <p className="text-sm text-zinc-400">
          Increase engine RPM and watch the turbocharger spool up, boost pressure build, and the
          intake charge respond. Below ~1,800 RPM there isn't enough exhaust flow to spin the
          turbine — this is "turbo lag."
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-zinc-300">
            <span>Engine RPM</span>
            <strong>{rpm.toLocaleString()}</strong>
          </div>
          <input
            type="range"
            min="800"
            max="6800"
            step="100"
            value={rpm}
            onChange={(e) => setRpm(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-3 text-center">
            <span className="text-[10px] text-zinc-500 uppercase font-bold">Boost Pressure</span>
            <div className="text-2xl font-black text-emerald-400">{boost.toFixed(1)} PSI</div>
          </div>
          <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-3 text-center">
            <span className="text-[10px] text-zinc-500 uppercase font-bold">Turbo State</span>
            <div className={`text-sm font-black ${inBoost ? "text-emerald-400" : "text-amber-400"}`}>
              {inBoost ? "Spooled / On Boost" : "Spooling (Lag Zone)"}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col items-center justify-center gap-4">
        <div className="relative w-32 h-32">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-dashed border-zinc-700"
            animate={{ rotate: 360 }}
            transition={{ duration: Math.max(0.15, 2 - spoolPct / 60), repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-4 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
            <Wind className={`w-10 h-10 ${inBoost ? "text-emerald-400" : "text-zinc-600"}`} />
          </div>
        </div>
        <div className="w-full">
          <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-emerald-500"
              animate={{ width: `${boost / 24 * 100}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <p className="text-[10px] text-zinc-500 text-center mt-1">Wastegate-controlled boost map</p>
        </div>
      </div>
    </div>
  );
}

function DsgSim() {
  const [gear, setGear] = useState(1);
  const [auto, setAuto] = useState(false);
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => {
      setGear((g) => (g >= 7 ? 1 : g + 1));
    }, 900);
    return () => clearInterval(id);
  }, [auto]);
  const oddGears = [1, 3, 5, 7];
  const evenGears = [2, 4, 6, "R"];
  const clutchA = oddGears.includes(gear);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <p className="text-sm text-zinc-400">
          A dual-clutch DSG pre-selects the next gear on the other clutch while you're still
          driving on the current one, so shifts happen in milliseconds with no torque
          interruption. Clutch A handles the odd gears, Clutch B the even gears (and reverse).
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, "R"].map((g) => (
            <button
              key={g}
              onClick={() => {
                setAuto(false);
                setGear(g === "R" ? "R" : g);
              }}
              className={`w-9 h-9 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                gear === g
                  ? "bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-950"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              {g}
            </button>
          ))}
          <button
            onClick={() => setAuto((a) => !a)}
            className={`px-3 h-9 rounded-lg text-xs font-bold cursor-pointer border transition-all ${
              auto
                ? "bg-amber-600 text-white border-amber-500"
                : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
            }`}
          >
            {auto ? "Stop Auto-Shift" : "Auto-Shift Demo"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6 space-y-3">
        {[
          { label: "Clutch A", gears: oddGears, active: clutchA && gear !== "R" },
          { label: "Clutch B", gears: evenGears, active: !clutchA || gear === "R" },
        ].map((c) => (
          <div
            key={c.label}
            className={`rounded-xl border p-3 transition-all ${
              c.active ? "bg-emerald-950/50 border-emerald-700" : "bg-zinc-900/60 border-zinc-800"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-bold ${c.active ? "text-emerald-400" : "text-zinc-500"}`}>
                {c.label} {c.active && "— ENGAGED"}
              </span>
              <motion.div
                animate={{ scale: c.active ? [1, 1.15, 1] : 1 }}
                transition={{ duration: 0.4 }}
                className={`w-3 h-3 rounded-full ${c.active ? "bg-emerald-400" : "bg-zinc-700"}`}
              />
            </div>
            <div className="flex gap-1.5">
              {c.gears.map((g) => (
                <span
                  key={g}
                  className={`flex-1 text-center py-1.5 rounded-md text-xs font-bold ${
                    gear === g
                      ? "bg-emerald-500 text-zinc-950"
                      : "bg-zinc-950 text-zinc-500 border border-zinc-800"
                  }`}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        ))}
        <p className="text-[10px] text-zinc-500 text-center pt-1">
          Currently in gear: <strong className="text-white">{gear}</strong>
        </p>
      </div>
    </div>
  );
}

function ActSim() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => !a), 2200);
    return () => clearInterval(id);
  }, []);
  const cylinders = [1, 2, 3, 4];
  const deactivated = active ? [2, 3] : [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <p className="text-sm text-zinc-400">
          Active Cylinder Technology (ACT) shuts down two of the four cylinders under light
          throttle — cruising on the highway, coasting downhill — closing their intake and
          exhaust valves and cutting fuel entirely, then reactivates all four seamlessly the
          instant more power is demanded.
        </p>
        <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-4 text-center">
          <span className="text-[10px] text-zinc-500 uppercase font-bold">Current Mode</span>
          <div className={`text-2xl font-black mt-1 ${active ? "text-emerald-400" : "text-white"}`}>
            {active ? "2-Cylinder Eco Mode" : "4-Cylinder Full Power"}
          </div>
          <p className="text-xs text-zinc-500 mt-1">
            {active ? "Light throttle detected — saving fuel" : "Under load — all cylinders firing"}
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6 flex items-center justify-center gap-3">
        {cylinders.map((c) => {
          const isOff = deactivated.includes(c);
          return (
            <motion.div
              key={c}
              animate={{ opacity: isOff ? 0.25 : 1, scale: isOff ? 0.9 : 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className={`w-10 h-24 rounded-lg border-2 flex items-end justify-center pb-2 transition-colors ${
                  isOff ? "border-zinc-700 bg-zinc-900" : "border-emerald-600 bg-emerald-950/40"
                }`}
              >
                <motion.div
                  animate={isOff ? {} : { y: [0, -8, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className={`w-5 h-5 rounded ${isOff ? "bg-zinc-700" : "bg-emerald-400"}`}
                />
              </div>
              <span className="text-[10px] text-zinc-500">Cyl {c}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function QuattroSim() {
  const [terrain, setTerrain] = useState("normal");
  const splits = {
    normal: { front: 40, rear: 60, label: "Normal Road — Rear-Biased for Dynamic Handling" },
    slip: { front: 15, rear: 85, label: "Rear Wheel Slip Detected — Torque Shifted Rearward" },
    launch: { front: 50, rear: 50, label: "Launch Control — Even Split for Maximum Traction" },
    frontslip: { front: 70, rear: 30, label: "Front Wheel Slip — Torque Shifted Forward" },
  };
  const active = splits[terrain];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <p className="text-sm text-zinc-400">
          quattro permanent all-wheel drive continuously varies how much torque goes to the front
          versus rear axle based on available grip — normally rear-biased for a sportier feel, but
          instantly redistributing the moment a wheel starts to slip.
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {Object.entries(splits).map(([key, val]) => (
            <button
              key={key}
              onClick={() => setTerrain(key)}
              className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                terrain === key
                  ? "bg-red-600 text-white border-red-500 shadow-sm"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              {key === "normal" ? "Normal Driving" : key === "slip" ? "Rear Slip" : key === "launch" ? "Launch Control" : "Front Slip"}
            </button>
          ))}
        </div>
        <p className="text-xs text-red-400 font-medium">{active.label}</p>
      </div>

      <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Front Axle", pct: active.front },
            { label: "Rear Axle", pct: active.rear },
          ].map((axle) => (
            <div key={axle.label} className="text-center">
              <div className="h-32 rounded-lg bg-zinc-900 border border-zinc-800 relative overflow-hidden flex items-end">
                <motion.div
                  animate={{ height: `${axle.pct}%` }}
                  transition={{ duration: 0.5 }}
                  className="w-full bg-gradient-to-t from-red-700 to-red-400"
                />
              </div>
              <span className="text-xs text-zinc-300 mt-2 block font-semibold">{axle.label}</span>
              <span className="text-lg font-black text-red-400">{axle.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const EngineeringLab = () => {
  const [activeSection, setActiveSection] = useState("turbo");
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
          <FlaskConical className="w-3.5 h-3.5" /> The Lab
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">Engineering Lab</h2>
        <p className="text-sm text-zinc-400 mt-2">
          Interactive simulations of the mechanisms behind turbocharging, dual-clutch gearboxes,
          cylinder deactivation, and quattro all-wheel drive.
        </p>
      </div>

      <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-xl mx-auto p-1.5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
        {LAB_SECTIONS.map((s) => {
          const Icon = s.icon;
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive ? "bg-emerald-600 text-white shadow-md shadow-emerald-950" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {s.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="max-w-4xl mx-auto rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6"
        >
          {activeSection === "turbo" && <TurboSim />}
          {activeSection === "dsg" && <DsgSim />}
          {activeSection === "act" && <ActSim />}
          {activeSection === "quattro" && <QuattroSim />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
