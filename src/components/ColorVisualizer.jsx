import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
export const ColorVisualizer = ({ brand = "skoda" }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const models = isAudi ? AUDI_MODELS : isVW ? VW_MODELS : SKODA_MODELS;
  const [selectedModelId, setSelectedModelId] = useState(models[0].id);
  useEffect(() => {
    setSelectedModelId(models[0].id);
    setSelectedColorId(models[0].colors[0]?.id || "");
  }, [brand]);
  const currentModel =
    models.find((m) => m.id === selectedModelId) || models[0];
  const [selectedColorId, setSelectedColorId] = useState(
    currentModel.colors[0]?.id || "",
  );
  const [isDualToneActive, setIsDualToneActive] = useState(true);
  const [viewAngle, setViewAngle] = useState("profile");
  const handleModelChange = (modelId) => {
    setSelectedModelId(modelId);
    const newModel = models.find((m) => m.id === modelId) || models[0];
    setSelectedColorId(newModel.colors[0]?.id || "");
  };
  useEffect(() => {
    if (!currentModel.colors.some((c) => c.id === selectedColorId)) {
      setSelectedColorId(currentModel.colors[0]?.id || "");
    }
  }, [selectedModelId, currentModel]);
  const currentColor =
    currentModel.colors.find((c) => c.id === selectedColorId) ||
    currentModel.colors[0];
  const isSedan = currentModel.bodyType?.includes("Sedan") ?? false;
  return (
    <div className="space-y-8">
      {/* Title & Model Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1">
            {isAudi ? (
              <AudiLogo variant="emblem" size="sm" />
            ) : isVW ? (
              <VolkswagenLogo variant="emblem" size="sm" />
            ) : (
              <SkodaLogo variant="emblem" size="sm" />
            )}
            <span className={isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}>
              Interactive Studio
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            {isAudi
              ? "Official Audi Color Explorer"
              : isVW
                ? "Official Volkswagen Color Explorer"
                : "Official \u0160koda Exterior Color Explorer"}
          </h2>
          <p className="text-sm text-zinc-400">
            Preview factory paint choices and dual-tone finishes across all{" "}
            {isAudi ? "Audi" : isVW ? "Volkswagen" : "\u0160koda"} models
          </p>
        </div>

        {/* Model Switcher */}
        <div className="inline-flex flex-wrap p-1 rounded-lg bg-zinc-900 border border-zinc-800 self-start">
          {models.map((car) => {
            const shortName = car.name
              .replace("\u0160koda ", "")
              .replace("Volkswagen ", "")
              .replace("Audi ", "");
            return (
              <button
                key={car.id}
                onClick={() => handleModelChange(car.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${selectedModelId === car.id ? (isAudi ? "bg-red-600 text-white shadow-sm" : isVW ? "bg-blue-600 text-white shadow-sm" : "bg-emerald-600 text-white shadow-sm") : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`}
              >
                {shortName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Visualizer Stage Container */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-black border border-zinc-800 p-6 sm:p-10 shadow-2xl">
        {/* Studio Lighting Ambient Glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-700 pointer-events-none"
          style={{ backgroundColor: currentColor?.hex || "#ffffff" }}
        />

        {/* Studio Badges */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: currentColor?.hex || "#ffffff" }}
            />
            <span className="font-bold text-white">{currentColor?.name}</span>
          </div>

          <div className="flex items-center gap-2">
            {currentColor?.isDualTone && (
              <button
                onClick={() => setIsDualToneActive(!isDualToneActive)}
                className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${isDualToneActive ? "bg-zinc-800 text-white border-zinc-600 shadow-sm" : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white"}`}
              >
                {isDualToneActive
                  ? "Dual-Tone: Black Roof Active"
                  : "Single-Tone Body Color"}
              </button>
            )}

            <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs">
              <button
                onClick={() => setViewAngle("profile")}
                className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${viewAngle === "profile" ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
              >
                Side Profile
              </button>
              <button
                onClick={() => setViewAngle("angle")}
                className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${viewAngle === "angle" ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
              >
                3/4 Dynamic
              </button>
            </div>
          </div>
        </div>

        {/* Car Silhouette Canvas SVG Representation */}
        <div className="relative h-64 sm:h-80 w-full flex items-center justify-center my-4">
          <svg
            viewBox="0 0 800 360"
            className="w-full max-w-2xl h-full drop-shadow-2xl transition-all duration-500 select-none"
          >
            <defs>
              <linearGradient
                id="bodyPaintGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor={currentColor?.hex || "#ffffff"}
                  stopOpacity="1"
                />
                <stop
                  offset="60%"
                  stopColor={currentColor?.hex || "#ffffff"}
                  stopOpacity="0.85"
                />
                <stop offset="100%" stopColor="#09090b" stopOpacity="0.9" />
              </linearGradient>

              <linearGradient
                id="glassGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
              </linearGradient>

              <radialGradient id="wheelRimGradient">
                <stop offset="65%" stopColor="#27272a" />
                <stop offset="85%" stopColor="#71717a" />
                <stop offset="100%" stopColor="#09090b" />
              </radialGradient>

              <linearGradient id="roofTone" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={
                    currentColor?.isDualTone && isDualToneActive
                      ? "#18181b"
                      : currentColor?.hex || "#ffffff"
                  }
                />
                <stop
                  offset="100%"
                  stopColor={
                    currentColor?.isDualTone && isDualToneActive
                      ? "#09090b"
                      : currentColor?.hex || "#ffffff"
                  }
                  stopOpacity="0.9"
                />
              </linearGradient>
            </defs>

            {/* Studio Floor Reflection Ground Shadow */}
            <ellipse
              cx="400"
              cy="300"
              rx="330"
              ry="24"
              fill="#000000"
              opacity="0.7"
              filter="blur(12px)"
            />

            {/* Car Body Silhouette Path */}
            {isSedan ? (
              // Fastback Sedan Silhouette (Slavia, Octavia, Virtus)
              <g id="car-sedan-body">
                {/* Main Lower Body */}
                <path
                  d="M 120 250 
                     C 100 240, 110 215, 150 215 
                     L 240 210 
                     C 280 180, 340 135, 410 135 
                     L 540 135 
                     C 630 140, 680 190, 710 215 
                     L 720 230 
                     C 725 240, 715 250, 680 250 
                     L 615 250 
                     C 615 220, 560 220, 560 250 
                     L 280 250 
                     C 280 220, 225 220, 225 250 
                     Z"
                  fill="url(#bodyPaintGradient)"
                  stroke="#3f3f46"
                  strokeWidth="2"
                />

                {/* Greenhouse / Cabin Roof */}
                <path
                  d="M 260 205 
                     L 340 145 
                     L 535 145 
                     L 620 205 
                     Z"
                  fill="url(#roofTone)"
                  stroke="#27272a"
                  strokeWidth="2"
                />

                {/* Cabin Windows */}
                <path
                  d="M 285 200 
                     L 350 152 
                     L 435 152 
                     L 435 200 
                     Z"
                  fill="url(#glassGradient)"
                />
                <path
                  d="M 445 200 
                     L 445 152 
                     L 520 152 
                     L 590 200 
                     Z"
                  fill="url(#glassGradient)"
                />

                {/* Character Shoulder Crease Line */}
                <path
                  d="M 160 220 L 680 220"
                  stroke="#ffffff"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                />

                {/* Headlights & Tail lights */}
                <polygon
                  points="120,230 145,225 140,240 120,240"
                  fill={isAudi ? "#f87171" : isVW ? "#60a5fa" : "#34d399"}
                  opacity="0.9"
                />
                <polygon
                  points="700,225 718,228 715,240 695,238"
                  fill="#ef4444"
                  opacity="0.9"
                />
              </g>
            ) : (
              // SUV Silhouette (Kylaq, Kushaq, Kodiaq, Taigun, Tiguan)
              <g id="car-suv-body">
                {/* Main Lower SUV Shell */}
                <path
                  d="M 115 255 
                     C 95 240, 105 205, 145 205 
                     L 225 200 
                     C 255 160, 310 120, 370 120 
                     L 610 120 
                     C 635 120, 665 155, 680 190 
                     L 710 215 
                     C 725 235, 715 255, 685 255 
                     L 620 255 
                     C 620 215, 555 215, 555 255 
                     L 285 255 
                     C 285 215, 220 215, 220 255 
                     Z"
                  fill="url(#bodyPaintGradient)"
                  stroke="#3f3f46"
                  strokeWidth="2"
                />

                {/* Upright SUV Roofline */}
                <path
                  d="M 255 195 
                     L 345 125 
                     L 610 125 
                     L 655 195 
                     Z"
                  fill="url(#roofTone)"
                  stroke="#27272a"
                  strokeWidth="2"
                />

                {/* Roof Rails */}
                <line
                  x1="360"
                  y1="115"
                  x2="600"
                  y2="115"
                  stroke="#71717a"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* SUV Windows */}
                <path
                  d="M 280 190 
                     L 350 135 
                     L 440 135 
                     L 440 190 
                     Z"
                  fill="url(#glassGradient)"
                />
                <path
                  d="M 450 190 
                     L 450 135 
                     L 540 135 
                     L 540 190 
                     Z"
                  fill="url(#glassGradient)"
                />
                <path
                  d="M 550 190 
                     L 550 135 
                     L 595 135 
                     L 630 190 
                     Z"
                  fill="url(#glassGradient)"
                />

                {/* Lower Rugged Cladding on wheel arches */}
                <path
                  d="M 125 255 C 130 248, 140 248, 150 255"
                  stroke="#27272a"
                  strokeWidth="4"
                />
                <path
                  d="M 670 255 C 680 248, 690 248, 700 255"
                  stroke="#27272a"
                  strokeWidth="4"
                />

                {/* Headlights & Tail lights */}
                <polygon
                  points="120,215 145,212 140,230 118,225"
                  fill={isAudi ? "#f87171" : isVW ? "#60a5fa" : "#34d399"}
                  opacity="0.9"
                />
                <polygon
                  points="695,215 715,220 710,235 690,230"
                  fill="#ef4444"
                  opacity="0.9"
                />
              </g>
            )}

            {/* Front Wheel Assembly */}
            <g id="front-wheel">
              <circle
                cx="252"
                cy="250"
                r="42"
                fill="#09090b"
                stroke="#27272a"
                strokeWidth="4"
              />
              <circle
                cx="252"
                cy="250"
                r="30"
                fill="url(#wheelRimGradient)"
                stroke="#52525b"
                strokeWidth="2"
              />
              <circle cx="252" cy="250" r="10" fill="#18181b" />
              {/* Brake Caliper */}
              <circle
                cx="252"
                cy="235"
                r="5"
                fill={isAudi ? "#ef4444" : isVW ? "#3b82f6" : "#10b981"}
              />
            </g>

            {/* Rear Wheel Assembly */}
            <g id="rear-wheel">
              <circle
                cx="587"
                cy="250"
                r="42"
                fill="#09090b"
                stroke="#27272a"
                strokeWidth="4"
              />
              <circle
                cx="587"
                cy="250"
                r="30"
                fill="url(#wheelRimGradient)"
                stroke="#52525b"
                strokeWidth="2"
              />
              <circle cx="587" cy="250" r="10" fill="#18181b" />
              {/* Brake Caliper */}
              <circle
                cx="587"
                cy="235"
                r="5"
                fill={isAudi ? "#ef4444" : isVW ? "#3b82f6" : "#10b981"}
              />
            </g>
          </svg>
        </div>

        {/* Color Swatch Selector Bar */}
        <div className="relative z-10 pt-6 border-t border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400 block">
                Available Factory Color Schemes ({currentModel.colors.length})
              </span>
              <span className="text-xs text-zinc-500">
                Choose paint color to preview on {currentModel.name}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {currentModel.colors.map((c) => {
                const isSelected = selectedColorId === c.id;
                return (
                  <button
                    key={c.id}
                    id={`color-swatch-${c.id}`}
                    onClick={() => setSelectedColorId(c.id)}
                    className={`group relative p-1 rounded-full transition-all duration-200 cursor-pointer ${isSelected ? (isAudi ? "ring-2 ring-red-400 scale-110" : isVW ? "ring-2 ring-blue-400 scale-110" : "ring-2 ring-emerald-400 scale-110") : "hover:scale-105 opacity-80 hover:opacity-100"}`}
                    title={c.name}
                  >
                    <span
                      className="block w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-zinc-700 shadow-md relative overflow-hidden"
                      style={{ backgroundColor: c.hex }}
                    >
                      {c.isDualTone && (
                        <span
                          className="absolute top-0 right-0 w-3.5 h-3.5 bg-zinc-950 rounded-bl-full"
                          title="Dual-Tone Roof Option Available"
                        />
                      )}
                      {isSelected && (
                        <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
