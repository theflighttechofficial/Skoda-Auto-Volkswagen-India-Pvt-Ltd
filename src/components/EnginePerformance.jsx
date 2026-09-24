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
import { ALL_PORSCHE_ENGINES } from "../data/porscheData";
import { ALL_LAMBORGHINI_ENGINES } from "../data/lamborghiniData";
import { ALL_BENTLEY_ENGINES } from "../data/bentleyData";
import { ALL_SEAT_ENGINES } from "../data/seatData";
import { ALL_SCANIA_ENGINES } from "../data/scaniaData";
import { ALL_MAN_ENGINES } from "../data/manData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { BentleyLogo } from "./BentleyLogo";
import { SeatLogo } from "./SeatLogo";
import { ScaniaLogo } from "./ScaniaLogo";
import { ManLogo } from "./ManLogo";
export const EnginePerformance = ({ brand = "skoda", onViewDynoGraphs }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const isBentley = brand === "bentley";
  const isSeat = brand === "seat";
  const isScania = brand === "scania";
  const isMan = brand === "man";
  const engines = isMan ? ALL_MAN_ENGINES : isScania ? ALL_SCANIA_ENGINES : isSeat ? ALL_SEAT_ENGINES : isBentley ? ALL_BENTLEY_ENGINES : isLamborghini ? ALL_LAMBORGHINI_ENGINES : isPorsche ? ALL_PORSCHE_ENGINES : isAudi ? ALL_AUDI_ENGINES : isVW ? ALL_VW_ENGINES : ALL_SKODA_ENGINES;
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
    "13-litre-scania-super-500": 3.5,
    "16-litre-v8-770": 2.6,
    "12.4-litre-d26-man-tgs": 3.4,
    "12.4-litre-d26-man-tgx": 3.2,
    "15.2-litre-d38-v8-man": 2.4,
  };
  const filteredEngines =
    fuelFilter === "All"
      ? engines
      : engines.filter((e) => e.fuelType === fuelFilter);
  const currentAvgMileage = mileageBenchmarks[selectedEngine.id] || (isMan ? 3.3 : isScania ? 3.5 : 14);
  const monthlyCost = Math.round((monthlyKm / currentAvgMileage) * fuelPrice);
  const litersConsumed = Math.round(monthlyKm / currentAvgMileage);
  const maxPower = isMan ? 640 : isScania ? 770 : 270;
  const maxTorque = isMan ? 3000 : isScania ? 3700 : 420;
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
            {isMan ? (
              <ManLogo variant="emblem" size="sm" />
            ) : isScania ? (
              <ScaniaLogo variant="emblem" size="sm" />
            ) : isSeat ? (
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
            <span
              className={`text-xs uppercase font-bold tracking-wider ${isMan ? "text-sky-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
            >
              German Powertrain Engineering
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {isMan
              ? "MAN D26 Common-Rail & D38 V8 Heavy-Duty Powertrain Suite"
              : isScania
              ? "Scania Super 13L & Twin-Turbo 16L V8 Powertrain Suite"
              : isBentley
              ? "Bentley Twin-Turbo W12 & V8 Powertrain Suite"
              : isLamborghini
              ? "Lamborghini V10, V8 & Hybrid V12 Powertrain Suite"
              : isPorsche
              ? "Porsche Flat-6, Flat-4 & V6 Powertrain Suite"
              : isAudi
                ? "Audi TFSI quattro Powertrain Suite"
                : isVW
                  ? "Volkswagen TSI, GT & TDI Powertrain Suite"
                  : "\u0160koda TSI & TDI Turbocharged Suite"}
          </h2>
          <p className="text-sm text-zinc-400 mt-0.5">
            {isMan
              ? "From the 12.4L D26 common-rail inline-6 in the TGS and TGX to the flagship 15.2L D38 V8, every MAN powertrain paired with TipMatic automated gearboxes"
              : isScania
              ? "From the 13L Scania Super inline-6 to the flagship twin-turbo 16L V8, every Scania powertrain paired with Opticruise AMT precision"
              : isSeat
              ? "From the everyday 1.0 TSI to the 2.0 TSI Cupra performance tune, every SEAT engine shares core TSI architecture with its Volkswagen Group siblings"
              : isBentley
              ? "From the twin-turbo W12 Continental GT to the twin-turbo V8 Bentayga and Flying Spur, every engine paired with Bentley Dynamic Ride precision"
              : isLamborghini
              ? "From the naturally-aspirated V10 Huracán to the twin-turbo V8 Urus and hybrid V12 Revuelto, every engine paired with LDVI precision"
              : isPorsche
              ? "From the mid-engine 718 Cayman flat-4 to the twin-turbo flat-6 911 and V6 SUV/GT powertrains, every engine paired with PDK precision"
              : isAudi
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
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${fuelFilter === type ? (type === "Diesel" ? "bg-amber-600 text-white shadow-md" : isMan ? "bg-sky-600 text-white shadow-md" : isScania ? "bg-rose-600 text-white shadow-md" : isSeat ? "bg-orange-600 text-white shadow-md" : isBentley ? "bg-green-600 text-white shadow-md" : isLamborghini ? "bg-yellow-600 text-white shadow-md" : isPorsche ? "bg-amber-600 text-white shadow-md" : isAudi ? "bg-red-600 text-white shadow-md" : isVW ? "bg-blue-600 text-white shadow-md" : "bg-emerald-600 text-white shadow-md") : "text-zinc-400 hover:text-white"}`}
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
              className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border cursor-pointer ${isSelected ? (isDiesel ? "bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-950/40" : isMan ? "bg-sky-600 text-white border-sky-500 shadow-lg shadow-sky-950/40" : isScania ? "bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-950/40" : isSeat ? "bg-orange-600 text-white border-orange-500 shadow-lg shadow-orange-950/40" : isBentley ? "bg-green-600 text-white border-green-500 shadow-lg shadow-green-950/40" : isLamborghini ? "bg-yellow-600 text-white border-yellow-500 shadow-lg shadow-yellow-950/40" : isPorsche ? "bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-950/40" : isAudi ? "bg-red-600 text-white border-red-500 shadow-lg shadow-red-950/40" : isVW ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-950/40" : "bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-950/40") : "bg-zinc-900/90 text-zinc-400 hover:text-white border-zinc-800 hover:border-zinc-700"}`}
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
                      className={`text-xs uppercase font-bold tracking-wider ${selectedEngine.fuelType === "Diesel" ? "text-amber-400" : isMan ? "text-sky-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${selectedEngine.fuelType === "Diesel" ? "bg-amber-950/80 text-amber-300 border-amber-700/60" : isMan ? "bg-sky-950/80 text-sky-300 border-sky-700/60" : isScania ? "bg-rose-950/80 text-rose-300 border-rose-700/60" : isSeat ? "bg-orange-950/80 text-orange-300 border-orange-700/60" : isBentley ? "bg-green-950/80 text-green-300 border-green-700/60" : isLamborghini ? "bg-yellow-950/80 text-yellow-300 border-yellow-700/60" : isPorsche ? "bg-amber-950/80 text-amber-300 border-amber-700/60" : isAudi ? "bg-red-950/80 text-red-300 border-red-700/60" : isVW ? "bg-blue-950/80 text-blue-300 border-blue-700/60" : "bg-emerald-950/80 text-emerald-300 border-emerald-700/60"}`}
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
                        className={`w-3.5 h-3.5 ${isMan ? "text-sky-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                      className={`h-full rounded-full ${isMan ? "bg-gradient-to-r from-sky-600 to-sky-400" : isScania ? "bg-gradient-to-r from-rose-600 to-rose-400" : isSeat ? "bg-gradient-to-r from-orange-600 to-orange-400" : isBentley ? "bg-gradient-to-r from-green-600 to-green-400" : isLamborghini ? "bg-gradient-to-r from-yellow-600 to-yellow-400" : isPorsche ? "bg-gradient-to-r from-amber-600 to-amber-400" : isAudi ? "bg-gradient-to-r from-red-600 to-red-400" : isVW ? "bg-gradient-to-r from-blue-600 to-blue-400" : "bg-gradient-to-r from-emerald-600 to-emerald-400"}`}
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
                    className={`text-lg font-bold ${isMan ? "text-sky-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                        className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isMan ? "text-sky-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                      className={`w-4 h-4 ${isMan ? "text-sky-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                  className={`text-xs uppercase font-bold tracking-wider ${selectedEngine.fuelType === "Diesel" ? "text-amber-400" : isMan ? "text-sky-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                    className={`text-sm font-bold ${selectedEngine.fuelType === "Diesel" ? "text-amber-400" : isMan ? "text-sky-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                  className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer ${isMan ? "accent-sky-500" : isScania ? "accent-rose-500" : isSeat ? "accent-orange-500" : isBentley ? "accent-green-500" : isLamborghini ? "accent-yellow-500" : isPorsche ? "accent-amber-500" : isAudi ? "accent-red-500" : isVW ? "accent-blue-500" : "accent-emerald-500"}`}
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
                  className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer ${isMan ? "accent-sky-500" : isScania ? "accent-rose-500" : isSeat ? "accent-orange-500" : isBentley ? "accent-green-500" : isLamborghini ? "accent-yellow-500" : isPorsche ? "accent-amber-500" : isAudi ? "accent-red-500" : isVW ? "accent-blue-500" : "accent-emerald-500"}`}
                />
              </div>

              {/* Monthly Calculation Output Box */}
              <motion.div
                key={`${selectedEngine.id}-${monthlyCost}`}
                initial={{ scale: 0.98, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`p-4 rounded-2xl border space-y-2.5 ${selectedEngine.fuelType === "Diesel" ? "bg-amber-950/30 border-amber-800/60" : isMan ? "bg-sky-950/30 border-sky-800/60" : isScania ? "bg-rose-950/30 border-rose-800/60" : isSeat ? "bg-orange-950/30 border-orange-800/60" : isBentley ? "bg-green-950/30 border-green-800/60" : isLamborghini ? "bg-yellow-950/30 border-yellow-800/60" : isPorsche ? "bg-amber-950/30 border-amber-800/60" : isAudi ? "bg-red-950/40 border-red-800/60" : isVW ? "bg-blue-950/40 border-blue-800/60" : "bg-emerald-950/40 border-emerald-800/60"}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-medium ${selectedEngine.fuelType === "Diesel" ? "text-amber-300" : isMan ? "text-sky-300" : isScania ? "text-rose-300" : isSeat ? "text-orange-300" : isBentley ? "text-green-300" : isLamborghini ? "text-yellow-300" : isPorsche ? "text-amber-300" : isAudi ? "text-red-300" : isVW ? "text-blue-300" : "text-emerald-300"}`}
                  >
                    Estimated Monthly Fuel Expense
                  </span>
                  <span className="text-2xl font-black text-white">
                    ₹{monthlyCost.toLocaleString()}
                  </span>
                </div>
                <div
                  className={`flex items-center justify-between text-[11px] pt-2 border-t ${selectedEngine.fuelType === "Diesel" ? "border-amber-900/50 text-amber-300/80" : isMan ? "border-sky-900/50 text-sky-400/80" : isScania ? "border-rose-900/50 text-rose-400/80" : isSeat ? "border-orange-900/50 text-orange-400/80" : isBentley ? "border-green-900/50 text-green-400/80" : isLamborghini ? "border-yellow-900/50 text-yellow-400/80" : isPorsche ? "border-amber-900/50 text-amber-400/80" : isAudi ? "border-red-900/50 text-red-400/80" : isVW ? "border-blue-900/50 text-blue-400/80" : "border-emerald-900/50 text-emerald-400/80"}`}
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
                  {isBentley
                    ? "Bentley twin-turbo W12 and V8 engines"
                    : isLamborghini
                    ? "Lamborghini naturally-aspirated and hybrid engines"
                    : isPorsche
                    ? "Porsche flat-6 and turbocharged V6 engines"
                    : isAudi
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
