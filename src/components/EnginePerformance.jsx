import { useState, useEffect } from "react";
import {
  Zap,
  CheckCircle,
  Activity,
  ChevronRight,
  Info,
  Flame,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ALL_SKODA_ENGINES } from "../data/skodaData";
import { ALL_VW_ENGINES } from "../data/vwData";
import { ALL_AUDI_ENGINES } from "../data/audiData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
export const EnginePerformance = ({ brand = "skoda", onViewDynoGraphs }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const engines = isAudi ? ALL_AUDI_ENGINES : isVW ? ALL_VW_ENGINES : ALL_SKODA_ENGINES;
  const [selectedEngineId, setSelectedEngineId] = useState(engines[0].id);
  const [fuelFilter, setFuelFilter] = useState("All");
  const [monthlyKm, setMonthlyKm] = useState(1200);
  useEffect(() => {
    setSelectedEngineId(engines[0].id);
    setFuelFilter("All");
  }, [brand]);
  const selectedEngine =
    engines.find((e) => e.id === selectedEngineId) || engines[0];
  const [fuelPrice, setFuelPrice] = useState(
    selectedEngine.fuelPriceDefault ||
      (selectedEngine.fuelType === "Diesel" ? 90 : 102),
  );
  const handleSelectEngine = (engId) => {
    setSelectedEngineId(engId);
    const eng = engines.find((e) => e.id === engId);
    if (eng) {
      setFuelPrice(
        eng.fuelPriceDefault || (eng.fuelType === "Diesel" ? 90 : 102),
      );
    }
  };
  const mileageBenchmarks = {
    "1.0-tsi": 14.2,
    "1.5-tsi": 13.6,
    "2.0-tsi": 10.8,
    "1.8-tdi": 17.5,
    "2.0-tdi": 16.8,
    "1.0-tsi-vw": 14.2,
    "1.5-tsi-vw": 13.8,
    "2.0-tsi-vw": 10.5,
    "2.0-tsi-gti": 9.8,
    "1.2-tsi-polo": 15,
    "2.0-tdi-vw": 17.2,
    "2.0-tfsi-190": 15.6,
    "2.0-tfsi-249-quattro": 12.3,
    "3.0-tfsi-v6-340": 10.1,
    "2.9-tfsi-v6-rs": 8.5,
    "4.0-tfsi-v8-rs": 7.2,
  };
  const filteredEngines =
    fuelFilter === "All"
      ? engines
      : engines.filter((e) => e.fuelType === fuelFilter);
  const currentAvgMileage = mileageBenchmarks[selectedEngine.id] || 14;
  const monthlyCost = Math.round((monthlyKm / currentAvgMileage) * fuelPrice);
  const litersConsumed = Math.round(monthlyKm / currentAvgMileage);
  const maxPower = 270;
  const maxTorque = 420;
  const powerPercent = Math.min(
    100,
    Math.round((selectedEngine.powerHp / maxPower) * 100),
  );
  const torquePercent = Math.min(
    100,
    Math.round((selectedEngine.torqueNm / maxTorque) * 100),
  );
  return (
    <div className="space-y-8">
      {/* Title & Powertrain Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {isAudi ? (
              <AudiLogo variant="emblem" size="sm" />
            ) : isVW ? (
              <VolkswagenLogo variant="emblem" size="sm" />
            ) : (
              <SkodaLogo variant="emblem" size="sm" />
            )}
            <span
              className={`text-xs uppercase font-bold tracking-wider ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
            >
              German Powertrain Engineering
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {isAudi
              ? "Audi TFSI quattro Powertrain Suite"
              : isVW
                ? "Volkswagen TSI, GT & TDI Powertrain Suite"
                : "\u0160koda TSI & TDI Turbocharged Suite"}
          </h2>
          <p className="text-sm text-zinc-400 mt-0.5">
            {isAudi
              ? "From the accessible 2.0 TFSI to the flagship 600 PS 4.0 TFSI V8 in the RS Q8, every engine paired with quattro all-wheel drive"
              : isVW
                ? "From everyday 1.0 TSI to ACT cylinder-deactivation 1.5 TSI, 265 PS EA888 EVO4 GTI, and high-torque TDI diesel"
                : "Direct-injection TSI turbo-petrol & monumental torque TDI turbo-diesel engines"}
          </p>
        </div>

        {/* Fuel Type Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start text-xs font-semibold">
          {["All", "Petrol", "Diesel"].map((type) => (
            <button
              key={type}
              onClick={() => {
                if (type === "Diesel" && selectedEngine.fuelType !== "Diesel") {
                  const firstDiesel = engines.find(
                    (e) => e.fuelType === "Diesel",
                  );
                  if (!firstDiesel) return;
                  handleSelectEngine(firstDiesel.id);
                } else if (
                  type === "Petrol" &&
                  selectedEngine.fuelType !== "Petrol"
                ) {
                  const firstPetrol = engines.find(
                    (e) => e.fuelType === "Petrol",
                  );
                  if (!firstPetrol) return;
                  handleSelectEngine(firstPetrol.id);
                }
                setFuelFilter(type);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${fuelFilter === type ? (type === "Diesel" ? "bg-amber-600 text-white shadow-md" : isVW ? "bg-blue-600 text-white shadow-md" : "bg-emerald-600 text-white shadow-md") : "text-zinc-400 hover:text-white"}`}
            >
              {type === "All"
                ? "All Powertrains"
                : `${type} (${type === "Petrol" ? "TSI" : "TDI"})`}
            </button>
          ))}
        </div>
      </div>

      {/* Engine Selection Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-fade-x">
        {filteredEngines.map((eng) => {
          const isSelected = selectedEngineId === eng.id;
          const isDiesel = eng.fuelType === "Diesel";
          return (
            <motion.button
              key={eng.id}
              whileTap={{ scale: 0.97 }}
              id={`engine-btn-${eng.id}`}
              onClick={() => handleSelectEngine(eng.id)}
              className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border cursor-pointer ${isSelected ? (isDiesel ? "bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-950/40" : isVW ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-950/40" : "bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-950/40") : "bg-zinc-900/90 text-zinc-400 hover:text-white border-zinc-800 hover:border-zinc-700"}`}
            >
              <div className="flex items-center gap-1.5">
                <span>{eng.badge}</span>
                {eng.id.includes("gti") && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-600 text-white font-bold uppercase">
                    265 PS
                  </span>
                )}
                {isDiesel && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/40 text-amber-200 border border-amber-400/40 font-bold uppercase">
                    Diesel Grunt
                  </span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Selected Engine In-depth Spec Sheet */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedEngine.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Left 7 Cols: Detailed Engine Spec */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-6 space-y-6 shadow-xl">
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs uppercase font-bold tracking-wider ${selectedEngine.fuelType === "Diesel" ? "text-amber-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                    >
                      {selectedEngine.fuelType} Turbocharged Powertrain
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs text-zinc-400">
                      {selectedEngine.displacement}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {selectedEngine.name}
                  </h3>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${selectedEngine.fuelType === "Diesel" ? "bg-amber-950/80 text-amber-300 border-amber-700/60" : isVW ? "bg-blue-950/80 text-blue-300 border-blue-700/60" : "bg-emerald-950/80 text-emerald-300 border-emerald-700/60"}`}
                >
                  {selectedEngine.cylinders} Cylinders (
                  {selectedEngine.displacement})
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedEngine.description}
              </p>

              {/* Animated Power and Torque Gauge Bars */}
              <div className="space-y-4 pt-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
                {/* Power Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400 font-medium flex items-center gap-1.5">
                      <Zap
                        className={`w-3.5 h-3.5 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                      />
                      Peak Output Power
                    </span>
                    <span className="font-bold text-white">
                      {selectedEngine.power}
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${powerPercent}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${isVW ? "bg-gradient-to-r from-blue-600 to-blue-400" : "bg-gradient-to-r from-emerald-600 to-emerald-400"}`}
                    />
                  </div>
                </div>

                {/* Torque Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400 font-medium flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      Peak Pulling Torque
                    </span>
                    <span className="font-bold text-amber-300">
                      {selectedEngine.torque}
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${torquePercent}%` }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                      className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Spec Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-[11px] text-zinc-500 block">
                    Peak Horsepower
                  </span>
                  <span
                    className={`text-lg font-bold ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    {selectedEngine.powerHp} PS
                  </span>
                  <span className="text-[10px] text-zinc-500 block">
                    European tuning
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-[11px] text-zinc-500 block">
                    Peak Torque
                  </span>
                  <span className="text-lg font-bold text-amber-400">
                    {selectedEngine.torqueNm} Nm
                  </span>
                  <span className="text-[10px] text-zinc-500 block">
                    Available early
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-[11px] text-zinc-500 block">
                    0–100 km/h
                  </span>
                  <span className="text-lg font-bold text-white">
                    {selectedEngine.acceleration}
                  </span>
                  <span className="text-[10px] text-zinc-500 block">
                    Top: {selectedEngine.topSpeed}
                  </span>
                </div>
              </div>

              {/* Transmissions Available */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400 block">
                  Available Gearboxes
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedEngine.transmissions.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Engineering Features */}
              <div className="space-y-2.5 pt-1">
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400 block">
                  Key Engineering Highlights
                </span>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {selectedEngine.keyHighlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle
                        className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {onViewDynoGraphs && (
                  <button
                    onClick={() => onViewDynoGraphs(selectedEngine.id)}
                    className="w-full mt-3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 border border-zinc-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <Activity
                      className={`w-4 h-4 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                    />
                    <span>
                      View Dyno Curve & RPM Telemetry for {selectedEngine.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Fuel Consumption & Cost Calculator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-6 space-y-5 shadow-xl">
              <div>
                <span
                  className={`text-xs uppercase font-bold tracking-wider ${selectedEngine.fuelType === "Diesel" ? "text-amber-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  {selectedEngine.fuelType} Efficiency & Running Costs
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Real-World Estimator
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Estimate your monthly fuel budget for this engine
                </p>
              </div>

              {/* Mileage Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-[11px] text-zinc-500 block">
                    City Traffic
                  </span>
                  <span className="text-sm font-bold text-zinc-200">
                    {selectedEngine.realWorldCity}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-[11px] text-zinc-500 block">
                    Highway Cruising
                  </span>
                  <span
                    className={`text-sm font-bold ${selectedEngine.fuelType === "Diesel" ? "text-amber-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    {selectedEngine.realWorldHighway}
                  </span>
                </div>
              </div>

              {/* Monthly Driving Distance Slider */}
              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs text-zinc-300">
                  <span>
                    Monthly Driving: <strong>{monthlyKm} km</strong>
                  </span>
                  <span className="text-zinc-500">
                    {(monthlyKm / 30).toFixed(0)} km/day
                  </span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="3000"
                  step="100"
                  value={monthlyKm}
                  onChange={(e) => setMonthlyKm(Number(e.target.value))}
                  className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer ${isVW ? "accent-blue-500" : "accent-emerald-500"}`}
                />
              </div>

              {/* Fuel Price Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-zinc-300">
                  <span>
                    {selectedEngine.fuelType} Price:{" "}
                    <strong>₹{fuelPrice} / Litre</strong>
                  </span>
                  <span className="text-zinc-500">City pump average</span>
                </div>
                <input
                  type="range"
                  min={selectedEngine.fuelType === "Diesel" ? 75 : 90}
                  max={selectedEngine.fuelType === "Diesel" ? 105 : 115}
                  step="1"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(Number(e.target.value))}
                  className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer ${isVW ? "accent-blue-500" : "accent-emerald-500"}`}
                />
              </div>

              {/* Monthly Calculation Output Box */}
              <motion.div
                key={`${selectedEngine.id}-${monthlyCost}`}
                initial={{ scale: 0.98, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`p-4 rounded-2xl border space-y-2.5 ${selectedEngine.fuelType === "Diesel" ? "bg-amber-950/30 border-amber-800/60" : isVW ? "bg-blue-950/40 border-blue-800/60" : "bg-emerald-950/40 border-emerald-800/60"}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-medium ${selectedEngine.fuelType === "Diesel" ? "text-amber-300" : isVW ? "text-blue-300" : "text-emerald-300"}`}
                  >
                    Estimated Monthly Fuel Expense
                  </span>
                  <span className="text-2xl font-black text-white">
                    ₹{monthlyCost.toLocaleString()}
                  </span>
                </div>
                <div
                  className={`flex items-center justify-between text-[11px] pt-2 border-t ${selectedEngine.fuelType === "Diesel" ? "border-amber-900/50 text-amber-300/80" : isVW ? "border-blue-900/50 text-blue-400/80" : "border-emerald-900/50 text-emerald-400/80"}`}
                >
                  <span>Fuel Consumed: ~{litersConsumed} L / month</span>
                  <span>
                    Annual Fuel: ₹{(monthlyCost * 12).toLocaleString()}
                  </span>
                </div>
              </motion.div>

              <div className="text-[11px] text-zinc-500 leading-relaxed flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-zinc-400" />
                <span>
                  Estimated on mixed real-world driving cycles (~
                  {currentAvgMileage} km/l). On open highways,{" "}
                  {isAudi
                    ? "Audi TFSI quattro engines"
                    : isVW
                      ? "Volkswagen TDI and ACT TSI engines"
                      : "\u0160koda TDI diesel powertrains"}{" "}
                  frequently achieve exceptional economy allowing 850–1,000+ km
                  touring range on a single tank.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
