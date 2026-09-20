import { useState, useEffect, useMemo } from "react";
import { Fuel, Gauge, Wind, Building2, TreePine, Flame, Calculator } from "lucide-react";
import { SKODA_MODELS, ALL_SKODA_ENGINES } from "../data/skodaData";
import { VW_MODELS, ALL_VW_ENGINES } from "../data/vwData";
import { AUDI_MODELS, ALL_AUDI_ENGINES } from "../data/audiData";
import { PORSCHE_MODELS, ALL_PORSCHE_ENGINES } from "../data/porscheData";
import { LAMBORGHINI_MODELS, ALL_LAMBORGHINI_ENGINES } from "../data/lamborghiniData";
import { BENTLEY_MODELS, ALL_BENTLEY_ENGINES } from "../data/bentleyData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { matchEngineSpecs, estimateFuelEconomy } from "../utils/fuelEconomy";

const BRAND_LOGO = { skoda: SkodaLogo, volkswagen: VolkswagenLogo, audi: AudiLogo, porsche: PorscheLogo, lamborghini: LamborghiniLogo };

function SliderRow({ icon: Icon, label, leftLabel, rightLabel, value, onChange, accentClass }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
          <Icon className="w-3.5 h-3.5 text-zinc-500" />
          {label}
        </span>
        <span className="text-zinc-500">{value}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="5"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer ${accentClass}`}
      />
      <div className="flex justify-between text-[10px] text-zinc-500">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
}

export const FuelEconomySimulator = ({ brand = "skoda", initialModelId, onOpenCalculator }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const isBentley = brand === "bentley";
  const models = isBentley ? BENTLEY_MODELS : isLamborghini ? LAMBORGHINI_MODELS : isPorsche ? PORSCHE_MODELS : isAudi ? AUDI_MODELS : isVW ? VW_MODELS : SKODA_MODELS;
  const allEngineSpecs = isBentley ? ALL_BENTLEY_ENGINES : isLamborghini ? ALL_LAMBORGHINI_ENGINES : isPorsche ? ALL_PORSCHE_ENGINES : isAudi ? ALL_AUDI_ENGINES : isVW ? ALL_VW_ENGINES : ALL_SKODA_ENGINES;
  const accent = isBentley ? "green" : isLamborghini ? "yellow" : isPorsche ? "amber" : isAudi ? "red" : isVW ? "blue" : "emerald";
  const accentText = accent === "yellow" ? "text-yellow-400" : accent === "amber" ? "text-amber-400" : accent === "red" ? "text-red-400" : accent === "blue" ? "text-blue-400" : "text-emerald-400";
  const accentBg = accent === "yellow" ? "bg-yellow-600" : accent === "amber" ? "bg-amber-600" : accent === "red" ? "bg-red-600" : accent === "blue" ? "bg-blue-600" : "bg-emerald-600";
  const accentAccent = accent === "yellow" ? "accent-yellow-500" : accent === "amber" ? "accent-amber-500" : accent === "red" ? "accent-red-500" : accent === "blue" ? "accent-blue-500" : "accent-emerald-500";
  const BrandLogo = BRAND_LOGO[brand] || SkodaLogo;

  const defaultModel = models.find((m) => m.id === initialModelId) || models[0];
  const [selectedModelId, setSelectedModelId] = useState(defaultModel.id);
  useEffect(() => {
    const valid = models.find((m) => m.id === initialModelId) || models[0];
    setSelectedModelId(valid.id);
  }, [brand, initialModelId]);
  const currentModel = models.find((m) => m.id === selectedModelId) || models[0];

  const matchedEngines = useMemo(
    () => matchEngineSpecs(currentModel.engines, allEngineSpecs),
    [currentModel, allEngineSpecs],
  );
  const [selectedEngineId, setSelectedEngineId] = useState(matchedEngines[0]?.id);
  useEffect(() => {
    setSelectedEngineId(matchedEngines[0]?.id);
  }, [selectedModelId]);
  const activeEngine = matchedEngines.find((e) => e.id === selectedEngineId) || matchedEngines[0];

  const [cityBias, setCityBias] = useState(65);
  const [traffic, setTraffic] = useState(50);
  const [drivingStyle, setDrivingStyle] = useState(40);
  const [ac, setAc] = useState("moderate");
  const [monthlyKm, setMonthlyKm] = useState(1200);
  const [fuelPrice, setFuelPrice] = useState(activeEngine?.fuelPriceDefault || 102);
  useEffect(() => {
    setFuelPrice(activeEngine?.fuelPriceDefault || 102);
  }, [selectedEngineId]);

  const result = useMemo(
    () => (activeEngine ? estimateFuelEconomy(activeEngine, { cityBias, traffic, drivingStyle, ac }) : null),
    [activeEngine, cityBias, traffic, drivingStyle, ac],
  );

  const monthlyBill = result ? Math.round((monthlyKm / result.estimatedKmpl) * fuelPrice) : 0;
  const yearlyBill = monthlyBill * 12;

  if (!activeEngine || !result) return null;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1">
            <BrandLogo variant="emblem" size="sm" />
            <span className={accentText}>Real-World Estimator</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            Real-World Fuel Economy Simulator
          </h2>
          <p className="text-sm text-zinc-400">
            One claimed mileage number rarely tells the full story. Dial in how{" "}
            <em>you</em> actually drive to see a realistic km/l and monthly fuel bill.
          </p>
        </div>

        <div className="inline-flex flex-wrap p-1 rounded-lg bg-zinc-900 border border-zinc-800 self-start">
          {models.map((car) => {
            const shortName = car.name.replace("Škoda ", "").replace("Volkswagen ", "").replace("Audi ", "").replace("Porsche ", "").replace("Lamborghini ", "");
            return (
              <button
                key={car.id}
                onClick={() => setSelectedModelId(car.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  selectedModelId === car.id ? `${accentBg} text-white shadow-sm` : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {shortName}
                {car.notSoldInIndia && (
                  <span className="ml-1 text-[9px] px-1 py-0.2 rounded bg-zinc-700/60 text-zinc-300">
                    Not in India
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <span className={`text-xs font-semibold ${accentText}`}>{currentModel.name}</span>
                <h3 className="text-lg font-bold text-white mt-0.5">Select Engine</h3>
              </div>
              {matchedEngines.length > 1 && (
                <select
                  value={selectedEngineId}
                  onChange={(e) => setSelectedEngineId(e.target.value)}
                  className={`text-xs p-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none max-w-[55%]`}
                >
                  {matchedEngines.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.badge}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs text-zinc-400 flex-wrap">
              <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800">
                <Fuel className="w-3.5 h-3.5" /> {activeEngine.fuelType}
              </span>
              <span className="px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800">
                Claimed: {activeEngine.claimedMileage}
              </span>
              <span className="px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800">
                City: {activeEngine.realWorldCity}
              </span>
              <span className="px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800">
                Highway: {activeEngine.realWorldHighway}
              </span>
            </div>

            <SliderRow
              icon={Building2}
              label="Driving Type"
              leftLabel="Highway"
              rightLabel="City"
              value={cityBias}
              onChange={setCityBias}
              accentClass={accentAccent}
            />
            <SliderRow
              icon={Gauge}
              label="Traffic"
              leftLabel="Low"
              rightLabel="Heavy"
              value={traffic}
              onChange={setTraffic}
              accentClass={accentAccent}
            />
            <SliderRow
              icon={drivingStyle > 60 ? Flame : TreePine}
              label="Driving Style"
              leftLabel="Eco"
              rightLabel="Enthusiast"
              value={drivingStyle}
              onChange={setDrivingStyle}
              accentClass={accentAccent}
            />

            <div className="space-y-1.5">
              <span className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                <Wind className="w-3.5 h-3.5 text-zinc-500" /> Air Conditioning
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "off", label: "Off" },
                  { id: "moderate", label: "Moderate" },
                  { id: "max", label: "Max" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setAc(opt.id)}
                    className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                      ac === opt.id
                        ? `${accentBg} text-white border-transparent shadow-sm`
                        : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Results */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-6 space-y-5">
            <h3 className="text-lg font-bold text-white">Estimated Efficiency</h3>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
              <span className="text-xs text-zinc-400 font-medium">Your Estimated Mileage</span>
              <div className={`text-5xl font-black mt-1 ${accentText}`}>{result.estimatedKmpl}</div>
              <span className="text-xs text-zinc-500">km/l</span>
              <div className="text-[10px] text-zinc-600 mt-2">
                vs. {activeEngine.claimedMileage} claimed (ARAI/test-cycle figure)
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center justify-between text-xs text-zinc-300">
                <span>Monthly Driving Distance</span>
                <strong>{monthlyKm.toLocaleString()} km</strong>
              </label>
              <input
                type="range"
                min="200"
                max="4000"
                step="100"
                value={monthlyKm}
                onChange={(e) => setMonthlyKm(Number(e.target.value))}
                className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer ${accentAccent}`}
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center justify-between text-xs text-zinc-300">
                <span>Fuel Price ({activeEngine.fuelType})</span>
                <strong>₹{fuelPrice}/L</strong>
              </label>
              <input
                type="range"
                min="80"
                max="120"
                step="1"
                value={fuelPrice}
                onChange={(e) => setFuelPrice(Number(e.target.value))}
                className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer ${accentAccent}`}
              />
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-400 block font-medium">Estimated Monthly Fuel Bill</span>
                  <span className={`text-3xl font-black ${accentText}`}>₹{monthlyBill.toLocaleString()}</span>
                </div>
                <div className="text-right text-xs">
                  <span className="text-zinc-500 block">Estimated Yearly</span>
                  <span className="font-bold text-white">₹{yearlyBill.toLocaleString()}</span>
                </div>
              </div>
              {onOpenCalculator && (
                <button
                  onClick={() => onOpenCalculator(selectedModelId)}
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  See On-Road Price & EMI for {currentModel.name}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
