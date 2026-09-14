import { useState, useMemo } from "react";
import {
  Warehouse,
  Plus,
  X,
  Search,
  Zap,
  Gauge,
  Weight,
  Trophy,
  Feather,
  Luggage,
  IndianRupee,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CarSilhouette } from "./CarSilhouette";
import { getGarageablePool, computeGarageStats, loadGarage, saveGarage } from "../utils/garageStats";

const BRAND_HEX = { skoda: "#10b981", volkswagen: "#3b82f6", audi: "#ef4444" };
const BRAND_LABEL = { skoda: "Škoda", volkswagen: "Volkswagen", audi: "Audi" };

function formatINR(amount) {
  if (!amount) return "₹0";
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Crore`;
  return `₹${(amount / 100000).toFixed(2)} Lakh`;
}

export const EnthusiastGarage = () => {
  const pool = useMemo(() => getGarageablePool(), []);
  const [garageUids, setGarageUids] = useState(loadGarage);
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");
  const [pickerOpen, setPickerOpen] = useState(false);

  const garageItems = garageUids.map((uid) => pool.find((p) => p.uid === uid)).filter(Boolean);
  const stats = computeGarageStats(garageItems);

  const persist = (uids) => {
    setGarageUids(uids);
    saveGarage(uids);
  };

  const addCar = (uid) => {
    if (garageUids.includes(uid)) return;
    persist([...garageUids, uid]);
  };
  const removeCar = (uid) => persist(garageUids.filter((u) => u !== uid));

  const filteredPool = pool.filter((p) => {
    if (brandFilter !== "all" && p.brand !== brandFilter) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1 text-sky-400">
            <Warehouse className="w-4 h-4" />
            <span>Your Virtual Collection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Enthusiast Garage</h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Build a dream garage from every Škoda, Volkswagen and Audi model — including the vRS/GTI/RS
            performance icons — and see what it adds up to.
          </p>
        </div>
        <button
          onClick={() => setPickerOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold transition-all cursor-pointer shrink-0 shadow-lg"
        >
          <Plus className="w-4 h-4" /> Add a Car
        </button>
      </div>

      {garageItems.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-zinc-800 bg-zinc-950 p-16 text-center space-y-3">
          <Warehouse className="w-10 h-10 text-zinc-700 mx-auto" />
          <p className="text-sm text-zinc-400">Your garage is empty. Add your first car to get started.</p>
          <button
            onClick={() => setPickerOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add a Car
          </button>
        </div>
      ) : (
        <>
          {/* Garage grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {garageItems.map((item) => (
                <motion.div
                  key={item.uid}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative rounded-2xl border border-zinc-800 bg-zinc-900/80 overflow-hidden group"
                >
                  <button
                    onClick={() => removeCar(item.uid)}
                    className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-zinc-950/80 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-red-400 hover:border-red-500 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  <div className="h-32 bg-zinc-950 flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full p-3">
                        <CarSilhouette colorHex={item.heroColorHex || "#a1a1aa"} isSedan accentHex={BRAND_HEX[item.brand]} />
                      </div>
                    )}
                  </div>
                  <div className="p-3.5 space-y-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: BRAND_HEX[item.brand] }}>
                        {BRAND_LABEL[item.brand]}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-tight truncate">{item.name}</h4>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
                      <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" />{item.powerHp}PS</span>
                      <span className="flex items-center gap-1"><Gauge className="w-3 h-3 text-sky-400" />{item.accelSeconds}s</span>
                      <span className="flex items-center gap-1"><Weight className="w-3 h-3 text-zinc-500" />{item.weightKg}kg</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Garage stats */}
          {stats && (
            <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white">Garage Stats</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <BigStat icon={Zap} label="Garage Power" value={`${stats.totalPower} PS`} color="text-amber-400" />
                <BigStat icon={Gauge} label="Garage Torque" value={`${stats.totalTorque} Nm`} color="text-sky-400" />
                <BigStat icon={TrendingUp} label="Avg Power/Weight" value={`${stats.avgPowerToWeight} PS/t`} color="text-emerald-400" />
                <BigStat icon={Trophy} label="Cars Owned" value={garageItems.length} color="text-fuchsia-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <MiniStat icon={Gauge} label="Fastest" name={stats.fastest?.name} detail={`${stats.fastest?.accelSeconds}s 0-100${stats.fastest?.accelIsEstimated ? " (est.)" : ""}`} />
                <MiniStat icon={Feather} label="Lightest" name={stats.lightest?.name} detail={`${stats.lightest?.weightKg} kg${stats.lightest?.weightIsEstimated ? " (est.)" : ""}`} />
                {stats.mostPractical && (
                  <MiniStat icon={Luggage} label="Most Practical" name={stats.mostPractical.name} detail={`${stats.mostPractical.bootLitres}L boot`} />
                )}
                {stats.mostExpensive && (
                  <MiniStat icon={IndianRupee} label="Most Expensive" name={stats.mostExpensive.name} detail={formatINR(stats.mostExpensive.priceINR)} />
                )}
              </div>

              <div className="pt-4 border-t border-zinc-800 text-center">
                <p className="text-sm text-zinc-300">
                  Your garage has enough power to outrun{" "}
                  <span className="font-black text-amber-400 text-base">{stats.outrunPercentile}%</span> of typical
                  enthusiast garages.
                </p>
                <p className="text-[10px] text-zinc-600 mt-1">
                  Simulated estimate based on combined power vs. a typical garage of this size — not a live
                  comparison against other visitors.
                </p>
              </div>
            </div>
          )}
        </>
      )}

      {/* Add-car picker modal */}
      <AnimatePresence>
        {pickerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPickerOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[80vh] rounded-3xl bg-zinc-900 border border-zinc-700 shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="p-5 border-b border-zinc-800 space-y-3 shrink-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Add a Car to Your Garage</h3>
                  <button onClick={() => setPickerOpen(false)} className="text-zinc-500 hover:text-white cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative">
                  <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search models..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["all", "skoda", "volkswagen", "audi"].map((b) => (
                    <button
                      key={b}
                      onClick={() => setBrandFilter(b)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${brandFilter === b ? "bg-sky-600 text-white" : "bg-zinc-800 text-zinc-400 hover:text-white"}`}
                    >
                      {b === "all" ? "All Brands" : BRAND_LABEL[b]}
                    </button>
                  ))}
                </div>
              </div>
              <div className="overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredPool.map((p) => {
                  const inGarage = garageUids.includes(p.uid);
                  return (
                    <button
                      key={p.uid}
                      onClick={() => (inGarage ? removeCar(p.uid) : addCar(p.uid))}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${inGarage ? "bg-sky-950/40 border-sky-600/60" : "bg-zinc-950/60 border-zinc-800 hover:border-zinc-700"}`}
                    >
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase" style={{ color: BRAND_HEX[p.brand] }}>
                          {BRAND_LABEL[p.brand]}
                        </span>
                        <p className="text-xs font-semibold text-white truncate">{p.name}</p>
                        <p className="text-[10px] text-zinc-500">{p.powerHp} PS · {p.accelSeconds}s 0-100</p>
                      </div>
                      {inGarage ? <X className="w-4 h-4 text-sky-400 shrink-0" /> : <Plus className="w-4 h-4 text-zinc-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function BigStat({ icon: Icon, label, value, color }) {
  return (
    <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-center">
      <Icon className={`w-5 h-5 mx-auto mb-1.5 ${color}`} />
      <p className="text-lg font-black text-white">{value}</p>
      <p className="text-[10px] text-zinc-500 uppercase tracking-wide">{label}</p>
    </div>
  );
}

function MiniStat({ icon: Icon, label, name, detail }) {
  return (
    <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
      <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-zinc-500 mb-1">
        <Icon className="w-3 h-3" /> {label}
      </div>
      <p className="text-sm font-bold text-white truncate">{name}</p>
      <p className="text-[11px] text-zinc-400">{detail}</p>
    </div>
  );
}
