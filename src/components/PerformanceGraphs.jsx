import { useState, useMemo, useEffect } from "react";
import {
  Activity,
  Zap,
  Flame,
  Gauge,
  Timer,
  Fuel,
  Info,
  CheckCircle2,
  Car,
} from "lucide-react";
import {
  ENGINE_GRAPH_PROFILES,
  MODEL_PERFORMANCE_PROFILES,
} from "../data/performanceGraphsData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { PORSCHE_MODELS } from "../data/porscheData";
import { LAMBORGHINI_MODELS } from "../data/lamborghiniData";
// vRS/RS performance variants (e.g. Octavia vRS, Audi RS5) get their own
// MODEL_PERFORMANCE_PROFILES entries but aren't part of the base model
// catalogs above, so their ids have to be added in explicitly per brand.
const SKODA_PERFORMANCE_ONLY_IDS = ["octavia-vrs", "kodiaq-vrs"];
const AUDI_PERFORMANCE_ONLY_IDS = ["rs5", "rs-q8", "rs6"];
const PORSCHE_PERFORMANCE_ONLY_IDS = [
  "911-gt3",
  "911-turbo-s",
  "cayenne-turbo-gt",
];
export const PerformanceGraphs = ({
  brand = "skoda",
  initialEngineId = "1.5-tsi",
  initialModelId = "slavia",
  onSelectModel,
}) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const currentBrandModels = isLamborghini
    ? LAMBORGHINI_MODELS
    : isPorsche
    ? PORSCHE_MODELS
    : isAudi
      ? AUDI_MODELS
      : isVW
        ? VW_MODELS
        : SKODA_MODELS;
  const currentPerformanceOnlyIds = isLamborghini
    ? []
    : isPorsche
    ? PORSCHE_PERFORMANCE_ONLY_IDS
    : isAudi
      ? AUDI_PERFORMANCE_ONLY_IDS
      : isVW
        ? []
        : SKODA_PERFORMANCE_ONLY_IDS;
  // Only show performance profiles for cars that actually belong to the
  // active brand's current lineup (Škoda / Volkswagen / Audi), rather than
  // rendering every model from every brand in one flat, unfiltered list.
  const currentModelIds = useMemo(
    () =>
      new Set([
        ...currentBrandModels.map((m) => m.id),
        ...currentPerformanceOnlyIds,
      ]),
    [currentBrandModels, currentPerformanceOnlyIds],
  );
  const visibleModelProfiles = useMemo(
    () => MODEL_PERFORMANCE_PROFILES.filter((m) => currentModelIds.has(m.id)),
    [currentModelIds],
  );
  const [selectedEngineId, setSelectedEngineId] = useState(initialEngineId);
  const [selectedModelId, setSelectedModelId] = useState(
    initialModelId === "slavia"
      ? isPorsche
        ? "911-carrera"
        : isVW
          ? "virtus"
          : initialModelId
      : initialModelId,
  );
  const [activeGraphTab, setActiveGraphTab] = useState("dyno");
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [compareEngineId, setCompareEngineId] = useState("2.0-tsi-vrs");
  const [hoveredRpmIndex, setHoveredRpmIndex] = useState(null);
  useEffect(() => {
    if (!currentModelIds.has(selectedModelId)) {
      const fallback =
        MODEL_PERFORMANCE_PROFILES.find((mod) => currentModelIds.has(mod.id)) ||
        MODEL_PERFORMANCE_PROFILES[0];
      setSelectedModelId(fallback.id);
      if (fallback.primaryEngineId) {
        setSelectedEngineId(fallback.primaryEngineId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand]);
  const activeEngine =
    ENGINE_GRAPH_PROFILES[selectedEngineId] || ENGINE_GRAPH_PROFILES["1.5-tsi"];
  const compareEngine =
    ENGINE_GRAPH_PROFILES[compareEngineId] ||
    ENGINE_GRAPH_PROFILES["2.0-tsi-vrs"];
  const activeModel =
    MODEL_PERFORMANCE_PROFILES.find((m) => m.id === selectedModelId) ||
    MODEL_PERFORMANCE_PROFILES[1];
  const handleModelChange = (modelId) => {
    setSelectedModelId(modelId);
    const m = MODEL_PERFORMANCE_PROFILES.find((mod) => mod.id === modelId);
    if (m && m.primaryEngineId) {
      setSelectedEngineId(m.primaryEngineId);
    }
    if (onSelectModel) {
      onSelectModel(modelId);
    }
  };
  const svgWidth = 700;
  const svgHeight = 320;
  const padding = { left: 60, right: 60, top: 30, bottom: 40 };
  const graphWidth = svgWidth - padding.left - padding.right;
  const graphHeight = svgHeight - padding.top - padding.bottom;
  const maxRpm = 6800;
  const minRpm = 1e3;
  const maxPower = 300;
  const maxTorque = 450;
  const getXCoord = (rpm) => {
    return padding.left + ((rpm - minRpm) / (maxRpm - minRpm)) * graphWidth;
  };
  const getYCoordPower = (power) => {
    return padding.top + graphHeight - (power / maxPower) * graphHeight;
  };
  const getYCoordTorque = (torque) => {
    return padding.top + graphHeight - (torque / maxTorque) * graphHeight;
  };
  const generatePath = (points, valueKey) => {
    return points
      .map((pt, i) => {
        const x = getXCoord(pt.rpm);
        const y =
          valueKey === "powerHp"
            ? getYCoordPower(pt.powerHp)
            : getYCoordTorque(pt.torqueNm);
        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
  };
  const powerPath = useMemo(
    () => generatePath(activeEngine.dynoCurve, "powerHp"),
    [activeEngine],
  );
  const torquePath = useMemo(
    () => generatePath(activeEngine.dynoCurve, "torqueNm"),
    [activeEngine],
  );
  const comparePowerPath = useMemo(
    () =>
      isCompareMode ? generatePath(compareEngine.dynoCurve, "powerHp") : "",
    [compareEngine, isCompareMode],
  );
  const compareTorquePath = useMemo(
    () =>
      isCompareMode ? generatePath(compareEngine.dynoCurve, "torqueNm") : "",
    [compareEngine, isCompareMode],
  );
  const activeHoverPoint =
    hoveredRpmIndex !== null && activeEngine.dynoCurve[hoveredRpmIndex]
      ? activeEngine.dynoCurve[hoveredRpmIndex]
      : activeEngine.dynoCurve[Math.floor(activeEngine.dynoCurve.length / 2)];
  const compareHoverPoint =
    isCompareMode &&
    hoveredRpmIndex !== null &&
    compareEngine.dynoCurve[hoveredRpmIndex]
      ? compareEngine.dynoCurve[hoveredRpmIndex]
      : null;
  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div
        className={`rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 border border-zinc-800 p-6 sm:p-8 relative overflow-hidden shadow-2xl ${isLamborghini ? "to-yellow-950/40" : isPorsche ? "to-amber-950/40" : isAudi ? "to-red-950/40" : isVW ? "to-blue-950/40" : "to-emerald-950/40"}`}
      >
        <div
          className={`absolute right-0 top-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${isLamborghini ? "bg-yellow-600/10" : isPorsche ? "bg-amber-600/10" : isAudi ? "bg-red-600/10" : isVW ? "bg-blue-600/10" : "bg-emerald-600/10"}`}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              {isLamborghini ? (
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
              <span className="text-xs uppercase font-bold tracking-wider text-blue-400">
                {isLamborghini
                  ? "Lamborghini Powertrain Lab"
                  : isPorsche
                  ? "Porsche Powertrain Lab"
                  : isAudi
                    ? "Audi Powertrain Lab"
                    : isVW
                      ? "Volkswagen Powertrain Lab"
                      : "\u0160koda Powertrain Lab"}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs text-zinc-400">
                {isLamborghini
                  ? "Lamborghini India (Volkswagen Group Super Sports Car Brand)"
                  : isPorsche
                  ? "Porsche India (Volkswagen Group Sports Car Brand)"
                  : isAudi
                    ? "Audi India (Volkswagen Group Premium Brand)"
                    : "Škoda Auto Volkswagen India Pvt. Ltd."}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {isLamborghini
                ? "Lamborghini Telemetry & Dyno Graphs"
                : isPorsche
                ? "Porsche Telemetry & Dyno Graphs"
                : isAudi
                  ? "Audi Telemetry & Dyno Graphs"
                  : isVW
                    ? "Volkswagen Telemetry & Dyno Graphs"
                    : "Performance Dyno Graphs & Telemetry"}
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {isLamborghini
                ? "Explore dynamic power and torque delivery curves, real-world 0\u2013100 km/h acceleration telemetry, LDF gearbox ratios, and thermal fuel efficiency curves for Lamborghini naturally-aspirated V10, twin-turbo V8, and hybrid V12 engines."
                : isPorsche
                ? "Explore dynamic power and torque delivery curves, real-world 0\u2013100 km/h acceleration telemetry, PDK gearbox ratios, and thermal fuel efficiency curves for Porsche flat-6, flat-4, and turbocharged V6/V8 engines."
                : isAudi
                  ? "Explore dynamic power and torque delivery curves, real-world 0\u2013100 km/h acceleration telemetry, quattro-equipped gearbox ratios, and thermal fuel efficiency curves for Audi TFSI engines."
                  : isVW
                    ? "Explore dynamic power and torque delivery curves, real-world 0\u2013100 km/h acceleration telemetry, DSG gearbox ratios, and thermal fuel efficiency curves for Volkswagen cars."
                    : "Explore dynamic power and torque delivery curves, real-world 0\u2013100 km/h acceleration telemetry, gearbox ratio calibrations, and thermal fuel efficiency curves for every \u0160koda model and engine variant."}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-zinc-300">
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-400" />
                <strong>Direct-Injection TSI</strong> &{" "}
                <strong>Common-Rail TDI</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Timer className="w-4 h-4 text-red-400" />
                Millisecond Telemetry Logging
              </span>
              <span className="flex items-center gap-1.5">
                <Fuel className="w-4 h-4 text-amber-400" />
                Real-World Consumption Analysis
              </span>
            </div>
          </div>

          {/* Quick Engine Spec Card */}
          <div className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 shrink-0 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between gap-4">
              <span className="text-zinc-400 font-sans">Active Engine:</span>
              <span className="text-white font-bold">{activeEngine.badge}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-zinc-400 font-sans">Peak Horsepower:</span>
              <span className="text-emerald-400 font-bold">
                {activeEngine.peakPowerStr}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-zinc-400 font-sans">Peak Torque:</span>
              <span className="text-amber-400 font-bold">
                {activeEngine.peakTorqueStr}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Model & Engine Selectors Bar */}
      <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-5 space-y-4 shadow-xl">
        {/* Step 1: Select Model */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-blue-400" /> 1. Select Model:
            </span>
            <span className="text-xs text-zinc-500 font-mono">
              {activeModel.category} • {activeModel.dragCoefficient}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {visibleModelProfiles.map((mod) => {
              const isSelected = selectedModelId === mod.id;
              const isVrs = mod.id.includes("vrs");
              return (
                <button
                  key={mod.id}
                  id={`graph-model-btn-${mod.id}`}
                  onClick={() => handleModelChange(mod.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${isSelected ? (isVrs ? "bg-red-950/80 border-red-500 text-white shadow-lg shadow-red-950/40 ring-1 ring-red-500" : "bg-emerald-950/80 border-emerald-500 text-white shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500") : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 font-semibold">
                      {mod.sprint0to100}
                    </span>
                    {isVrs && (
                      <span className="text-[9px] font-black text-red-400 uppercase">
                        vRS
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-black mt-1 truncate">
                    {mod.name.replace("\u0160koda ", "")}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Engine Variant for Model */}
        <div className="space-y-2 pt-2 border-t border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-400" /> 2. Select Engine
              Variant:
            </span>

            {/* Compare Toggle */}
            <div className="flex items-center gap-2">
              <label className="text-xs text-zinc-300 font-medium cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isCompareMode}
                  onChange={(e) => setIsCompareMode(e.target.checked)}
                  className="w-4 h-4 rounded bg-zinc-950 border-zinc-700 text-emerald-500 focus:ring-0 cursor-pointer accent-emerald-500"
                />
                <span className="text-xs font-bold text-amber-400">
                  Overlay 2nd Engine Comparison
                </span>
              </label>

              {isCompareMode && (
                <select
                  value={compareEngineId}
                  onChange={(e) => setCompareEngineId(e.target.value)}
                  className="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-700 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                >
                  {Object.values(ENGINE_GRAPH_PROFILES).map((eng) => (
                    <option key={eng.id} value={eng.id}>
                      {eng.badge}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {Object.values(ENGINE_GRAPH_PROFILES).map((eng) => {
              const isSelected = selectedEngineId === eng.id;
              const isDiesel = eng.fuelType === "Diesel";
              const isVrs = eng.id.includes("vrs");
              return (
                <button
                  key={eng.id}
                  id={`graph-engine-btn-${eng.id}`}
                  onClick={() => setSelectedEngineId(eng.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${isSelected ? (isVrs ? "bg-red-600 text-white border-red-500 shadow-md shadow-red-950/40" : isDiesel ? "bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-950/40" : "bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-950/40") : "bg-zinc-950 text-zinc-400 hover:text-white border-zinc-800 hover:border-zinc-700"}`}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{eng.badge}</span>
                    {isDiesel && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-black/40 text-amber-200 border border-amber-400/40 font-bold uppercase">
                        Diesel
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Graph Mode Tabs */}
        <div className="flex items-center gap-2 pt-2 border-t border-zinc-800/80 overflow-x-auto scrollbar-none scroll-fade-x">
          <button
            onClick={() => setActiveGraphTab("dyno")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${activeGraphTab === "dyno" ? "bg-zinc-100 text-zinc-950 shadow-md" : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"}`}
          >
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            Power & Torque Dyno Curve (RPM)
          </button>

          <button
            onClick={() => setActiveGraphTab("acceleration")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${activeGraphTab === "acceleration" ? "bg-zinc-100 text-zinc-950 shadow-md" : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"}`}
          >
            <Timer className="w-3.5 h-3.5 text-red-500" />
            0–100 km/h Sprint & G-Force
          </button>

          <button
            onClick={() => setActiveGraphTab("gears")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${activeGraphTab === "gears" ? "bg-zinc-100 text-zinc-950 shadow-md" : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"}`}
          >
            <Gauge className="w-3.5 h-3.5 text-blue-500" />
            Speed-in-Gear & Ratios
          </button>

          <button
            onClick={() => setActiveGraphTab("efficiency")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${activeGraphTab === "efficiency" ? "bg-zinc-100 text-zinc-950 shadow-md" : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"}`}
          >
            <Fuel className="w-3.5 h-3.5 text-amber-500" />
            Thermal Efficiency vs Speed
          </button>
        </div>
      </div>

      {/* Main Interactive Graph Canvas Container */}
      <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        {/* GRAPH 1: DYNO POWER & TORQUE CURVE */}
        {activeGraphTab === "dyno" && (
          <div className="space-y-6">
            {/* Graph Header & Interactive Telemetry Readout Box */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Engine Dynamometer Telemetry
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs text-zinc-400">
                    Hover across curve to scrub RPM
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white italic">
                  {activeEngine.name} Power (PS) & Torque (Nm) vs. Engine RPM
                </h3>
              </div>

              {/* Real-Time Scrubbing Cursor Telemetry Pill */}
              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-4 text-xs font-mono shrink-0 shadow-inner">
                <div>
                  <span className="text-[10px] text-zinc-500 block font-sans">
                    ENGINE SPEED
                  </span>
                  <span className="text-base font-black text-white">
                    {activeHoverPoint.rpm} RPM
                  </span>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div>
                  <span className="text-[10px] text-emerald-400 block font-sans">
                    OUTPUT POWER
                  </span>
                  <span className="text-base font-black text-emerald-400">
                    {activeHoverPoint.powerHp} PS
                  </span>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div>
                  <span className="text-[10px] text-amber-400 block font-sans">
                    PULLING TORQUE
                  </span>
                  <span className="text-base font-black text-amber-400">
                    {activeHoverPoint.torqueNm} Nm
                  </span>
                </div>
                <div className="w-px h-8 bg-zinc-800" />
                <div>
                  <span className="text-[10px] text-blue-400 block font-sans">
                    TURBO BOOST
                  </span>
                  <span className="text-base font-black text-blue-400">
                    {activeHoverPoint.boostBar} bar
                  </span>
                </div>
              </div>
            </div>

            {/* SVG Chart Surface */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[640px] relative">
                <svg
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                  className="w-full h-auto select-none overflow-visible"
                >
                  <defs>
                    {/* Primary Power Area Gradient */}
                    <linearGradient
                      id="powerGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#10b981"
                        stopOpacity="0.25"
                      />
                      <stop
                        offset="100%"
                        stopColor="#10b981"
                        stopOpacity="0.0"
                      />
                    </linearGradient>

                    {/* Primary Torque Area Gradient */}
                    <linearGradient
                      id="torqueGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                      <stop
                        offset="100%"
                        stopColor="#f59e0b"
                        stopOpacity="0.0"
                      />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Gridlines (every 50 PS / 75 Nm) */}
                  {[0, 1, 2, 3, 4, 5].map((i) => {
                    const y = padding.top + (graphHeight / 5) * i;
                    const powerVal = maxPower - (maxPower / 5) * i;
                    const torqueVal = maxTorque - (maxTorque / 5) * i;
                    return (
                      <g key={i}>
                        <line
                          x1={padding.left}
                          y1={y}
                          x2={padding.left + graphWidth}
                          y2={y}
                          stroke="#27272a"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                        />
                        {/* Left Y Axis Labels (Power PS) */}
                        <text
                          x={padding.left - 10}
                          y={y + 4}
                          fill="#10b981"
                          fontSize="10"
                          textAnchor="end"
                          fontFamily="monospace"
                        >
                          {powerVal} PS
                        </text>
                        {/* Right Y Axis Labels (Torque Nm) */}
                        <text
                          x={padding.left + graphWidth + 10}
                          y={y + 4}
                          fill="#f59e0b"
                          fontSize="10"
                          textAnchor="start"
                          fontFamily="monospace"
                        >
                          {torqueVal} Nm
                        </text>
                      </g>
                    );
                  })}

                  {/* Vertical Gridlines & RPM Labels */}
                  {[1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 6500].map((rpm) => {
                    const x = getXCoord(rpm);
                    return (
                      <g key={rpm}>
                        <line
                          x1={x}
                          y1={padding.top}
                          x2={x}
                          y2={padding.top + graphHeight}
                          stroke="#27272a"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />
                        <text
                          x={x}
                          y={padding.top + graphHeight + 18}
                          fill="#a1a1aa"
                          fontSize="10"
                          textAnchor="middle"
                          fontFamily="monospace"
                        >
                          {rpm}
                        </text>
                      </g>
                    );
                  })}

                  {/* X Axis Title */}
                  <text
                    x={padding.left + graphWidth / 2}
                    y={padding.top + graphHeight + 35}
                    fill="#71717a"
                    fontSize="11"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    Engine Speed (RPM)
                  </text>

                  {/* Primary Curves */}
                  {/* Power Curve Line */}
                  <path
                    d={powerPath}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Torque Curve Line */}
                  <path
                    d={torquePath}
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Comparison Overlay Curves (if enabled) */}
                  {isCompareMode && (
                    <>
                      <path
                        d={comparePowerPath}
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                      />
                      <path
                        d={compareTorquePath}
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                      />
                    </>
                  )}

                  {/* Interactive Scrubbing Points & Cursor Line */}
                  {activeEngine.dynoCurve.map((pt, idx) => {
                    const cx = getXCoord(pt.rpm);
                    const cyPower = getYCoordPower(pt.powerHp);
                    const cyTorque = getYCoordTorque(pt.torqueNm);
                    const isHovered = hoveredRpmIndex === idx;
                    return (
                      <g key={pt.rpm}>
                        {/* Hover Hitbox Column */}
                        <rect
                          x={cx - 20}
                          y={padding.top}
                          width={40}
                          height={graphHeight}
                          fill="transparent"
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredRpmIndex(idx)}
                        />

                        {isHovered && (
                          <line
                            x1={cx}
                            y1={padding.top}
                            x2={cx}
                            y2={padding.top + graphHeight}
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                          />
                        )}

                        {/* Power Point Circle */}
                        <circle
                          cx={cx}
                          cy={cyPower}
                          r={isHovered ? 6 : 3.5}
                          fill={isHovered ? "#ffffff" : "#10b981"}
                          stroke="#064e3b"
                          strokeWidth="2"
                        />

                        {/* Torque Point Circle */}
                        <circle
                          cx={cx}
                          cy={cyTorque}
                          r={isHovered ? 6 : 3.5}
                          fill={isHovered ? "#ffffff" : "#f59e0b"}
                          stroke="#78350f"
                          strokeWidth="2"
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Dyno Legend and Key Engineering Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-white uppercase">
                    Power Band (PS)
                  </span>
                </div>
                <p className="text-xs text-zinc-300">
                  Peak power of <strong>{activeEngine.maxPowerHp} PS</strong>{" "}
                  sustained across {activeEngine.powerRpmRange}. Direct cylinder
                  injection and variable valve timing maximize high-RPM
                  breathing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                  <span className="text-xs font-bold text-white uppercase">
                    Torque Plateau (Nm)
                  </span>
                </div>
                <p className="text-xs text-zinc-300">
                  Flat torque plateau of{" "}
                  <strong>{activeEngine.maxTorqueNm} Nm</strong> spools up from{" "}
                  {activeEngine.torqueRpmRange}. Delivers explosive mid-range
                  punch without having to downshift.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs font-bold text-white uppercase">
                    Highway Cruising RPM
                  </span>
                </div>
                <div className="flex justify-between text-xs font-mono pt-1 text-zinc-300">
                  <span>
                    100 km/h:{" "}
                    <strong>{activeEngine.highwayCruiseRpm100Kmh} RPM</strong>
                  </span>
                  <span>
                    120 km/h:{" "}
                    <strong>{activeEngine.highwayCruiseRpm120Kmh} RPM</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GRAPH 2: 0-100 KM/H ACCELERATION & G-FORCE SPRINT */}
        {activeGraphTab === "acceleration" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  Launch Control Telemetry & Longitudinal G-Force
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white italic">
                  {activeModel.name} with {activeEngine.name}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono">
                  <span className="text-zinc-500">0–100 km/h: </span>
                  <strong className="text-white font-bold">
                    {activeModel.sprint0to100}
                  </strong>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono">
                  <span className="text-zinc-500">Top Speed: </span>
                  <strong className="text-emerald-400 font-bold">
                    {activeModel.topSpeed}
                  </strong>
                </div>
              </div>
            </div>

            {/* Acceleration Telemetry Step Bar & Telemetry Points */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                Speed & Gear Shift Points Timeline (Launch to 100+ km/h):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 font-mono text-xs">
                {activeEngine.accelerationCurve.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1"
                  >
                    <div className="flex justify-between text-zinc-500 text-[10px] font-sans">
                      <span>{pt.timeSec.toFixed(1)}s</span>
                      <span className="font-bold text-white">
                        Gear {pt.gear}
                      </span>
                    </div>
                    <div className="text-base font-black text-white">
                      {pt.speedKmh} km/h
                    </div>
                    <div className="text-[10px] text-red-400 font-bold">
                      {pt.gForce > 0
                        ? `+${pt.gForce} G-Force`
                        : "Launch Staging"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Model Dynamics & Chassis Poise Callout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs">
              <div className="space-y-1">
                <span className="text-zinc-500 uppercase block font-semibold">
                  100–0 km/h Emergency Braking
                </span>
                <span className="text-xl font-black text-emerald-400 font-mono">
                  {activeModel.braking100to0DistMeters} meters
                </span>
                <p className="text-zinc-400">
                  All-wheel disc brakes with Hydraulic Brake Assist (HBA)
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-500 uppercase block font-semibold">
                  Peak Cornering Grip
                </span>
                <span className="text-xl font-black text-amber-400 font-mono">
                  {activeModel.corneringGForce} G Lateral
                </span>
                <p className="text-zinc-400">
                  Precision European anti-roll bars & tuned damper valving
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-500 uppercase block font-semibold">
                  Power-to-Weight Ratio
                </span>
                <span className="text-xl font-black text-white font-mono">
                  {activeModel.powerToWeightRatio}
                </span>
                <p className="text-zinc-400">
                  Lightweight high-strength steel hot-formed architecture
                </p>
              </div>
            </div>
          </div>
        )}

        {/* GRAPH 3: GEAR RATIOS & SPEED IN GEAR */}
        {activeGraphTab === "gears" && (
          <div className="space-y-6">
            <div className="border-b border-zinc-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Transmission Ratio Telemetry
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white italic">
                Speed In Each Gear per RPM ({activeEngine.name})
              </h3>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-zinc-800">
              <table className="w-full text-left text-xs text-zinc-300">
                <thead>
                  <tr className="bg-zinc-950 border-b border-zinc-800 text-zinc-400 uppercase tracking-wider font-semibold">
                    <th className="py-3.5 px-4">Gear</th>
                    <th className="py-3.5 px-4">Gear Ratio</th>
                    <th className="py-3.5 px-4">Speed @ 1,000 RPM</th>
                    <th className="py-3.5 px-4">Speed @ 3,000 RPM</th>
                    <th className="py-3.5 px-4">Speed @ 6,000 RPM</th>
                    <th className="py-3.5 px-4 text-emerald-400 font-bold">
                      Max Gear Speed
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 font-mono text-xs bg-zinc-950/40">
                  {activeEngine.gearRatios.map((g) => (
                    <tr
                      key={g.gear}
                      className="hover:bg-zinc-900/60 transition-colors"
                    >
                      <td className="py-3 px-4 font-bold text-white">
                        {g.gear}
                      </td>
                      <td className="py-3 px-4 text-zinc-400">{g.ratio} : 1</td>
                      <td className="py-3 px-4 text-zinc-300">
                        {g.speedAt1000Rpm.toFixed(1)} km/h
                      </td>
                      <td className="py-3 px-4 text-zinc-200 font-semibold">
                        {g.speedAt3000Rpm.toFixed(1)} km/h
                      </td>
                      <td className="py-3 px-4 text-emerald-400">
                        {g.speedAt6000Rpm.toFixed(1)} km/h
                      </td>
                      <td className="py-3 px-4 font-black text-amber-400">
                        {g.redlineSpeed} km/h
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                Gear ratios calculated for 7-speed DSG dual-clutch and 6-speed
                manual transmissions. Tall top gears allow quiet high-speed
                cruising at remarkably relaxed engine speeds (e.g. 120 km/h at ~
                {activeEngine.highwayCruiseRpm120Kmh} RPM).
              </span>
            </div>
          </div>
        )}

        {/* GRAPH 4: THERMAL EFFICIENCY VS SPEED */}
        {activeGraphTab === "efficiency" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Aerodynamic & Thermal Cruising Economy
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white italic">
                  Fuel Economy (km/l) vs. Highway Speed ({activeEngine.name})
                </h3>
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                Aerodynamic Profile:{" "}
                <strong className="text-emerald-400">
                  {activeModel.dragCoefficient}
                </strong>
              </div>
            </div>

            {/* Speed vs Economy Step Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 font-mono text-xs">
              {activeEngine.efficiencyCurve.map((point) => (
                <div
                  key={point.speedKmh}
                  className={`p-4 rounded-2xl border text-center space-y-1.5 transition-all ${point.speedKmh === 80 ? "bg-emerald-950/80 border-emerald-500 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500" : "bg-zinc-950 border-zinc-800"}`}
                >
                  <span className="text-[10px] text-zinc-500 block font-sans uppercase">
                    Speed
                  </span>
                  <span className="text-base font-black text-white block">
                    {point.speedKmh} km/h
                  </span>
                  <div className="text-sm font-black text-emerald-400 mt-1">
                    {point.fuelConsumptionKmpl} km/l
                  </div>
                  <span className="text-[10px] text-zinc-500 block">
                    @ {point.engineRpm} RPM
                  </span>
                  {point.activeCylinders && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 font-bold inline-block mt-1">
                      {point.activeCylinders} Cylinders
                    </span>
                  )}
                  {point.speedKmh === 80 && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-600 text-white font-black uppercase inline-block">
                      Sweet Spot
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 block">
                Engineering Insight: Aerodynamic Efficiency & Highway Touring
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                At 80 km/h expressway cruising, aerodynamic drag is minimal
                while engine gearing sits exactly within the highest thermal
                efficiency window (~1,400–1,600 RPM).
                {activeEngine.id === "1.5-tsi" &&
                  " Active Cylinder Technology (ACT) operates silently on 2 cylinders, delivering over 22 km/l."}
                {activeEngine.fuelType === "Diesel" &&
                  " The common rail diesel cycle achieves unmatched thermodynamic efficiency, providing touring ranges exceeding 1,100 km per full tank."}
              </p>
            </div>
          </div>
        )}

        {/* Technical Features Strip for Active Engine */}
        <div className="pt-4 border-t border-zinc-800/80 space-y-3">
          <span className="text-xs uppercase font-bold tracking-wider text-zinc-400 block">
            Key Powertrain Architecture Highlights:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
            {activeEngine.technicalFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
