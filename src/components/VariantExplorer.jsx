import { useState, useEffect } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
export const VariantExplorer = ({ brand = "skoda", initialModelId }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const models = isAudi ? AUDI_MODELS : isVW ? VW_MODELS : SKODA_MODELS;
  const defaultModel = models.find((m) => m.id === initialModelId) || models[0];
  const [selectedModelId, setSelectedModelId] = useState(defaultModel.id);
  useEffect(() => {
    const valid = models.find((m) => m.id === initialModelId) || models[0];
    setSelectedModelId(valid.id);
  }, [brand, initialModelId]);
  const currentModel =
    models.find((m) => m.id === selectedModelId) || models[0];
  const [selectedVariantId, setSelectedVariantId] = useState(
    currentModel.variants[0]?.id || "",
  );
  const handleModelChange = (modelId) => {
    setSelectedModelId(modelId);
    const newModel = models.find((m) => m.id === modelId) || models[0];
    setSelectedVariantId(newModel.variants[0]?.id || "");
  };
  useEffect(() => {
    if (!currentModel.variants.some((v) => v.id === selectedVariantId)) {
      setSelectedVariantId(currentModel.variants[0]?.id || "");
    }
  }, [selectedModelId, currentModel]);
  const activeVariant =
    currentModel.variants.find((v) => v.id === selectedVariantId) ||
    currentModel.variants[0];
  return (
    <div className="space-y-8">
      {/* Header & Model Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {isVW ? (
              <VolkswagenLogo variant="emblem" size="sm" />
            ) : (
              <SkodaLogo variant="emblem" size="sm" />
            )}
            <span
              className={`text-xs uppercase font-bold tracking-wider ${isVW ? "text-blue-400" : "text-emerald-400"}`}
            >
              Trims & Configurations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {isVW
              ? "Volkswagen Models & Trim Guide"
              : "\u0160koda Models & Trim Guide"}
          </h2>
          <p className="text-sm text-zinc-400">
            {isVW
              ? "Compare features, pricing, and appointments across Comfortline, Highline, Topline, and GT Plus trims"
              : "Compare features, pricing, and appointments across Classic, Signature, Prestige, Sportline, and L&K trims"}
          </p>
        </div>

        {/* Model Switcher Pills with smooth motion */}
        <div className="inline-flex flex-wrap p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start gap-1">
          {models.map((car) => {
            const isSelected = selectedModelId === car.id;
            const shortName = car.name
              .replace("\u0160koda ", "")
              .replace("Volkswagen ", "");
            return (
              <button
                key={car.id}
                onClick={() => handleModelChange(car.id)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${isSelected ? (isVW ? "bg-blue-600 text-white shadow-md shadow-blue-950" : "bg-emerald-600 text-white shadow-md shadow-emerald-950") : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`}
              >
                {shortName}
                {car.id === "golf-gti" && (
                  <span className="ml-1 text-[9px] px-1 py-0.2 rounded bg-red-500/20 text-red-300">
                    GTI
                  </span>
                )}
                {car.id === "octavia" && (
                  <span className="ml-1 text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300">
                    Icon
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Model Overview Sub-Banner */}
      <motion.div
        key={currentModel.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs shadow-md"
      >
        <div className="flex items-center gap-3">
          <span className="font-bold text-white text-sm">
            {currentModel.name}
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-300">{currentModel.tagline}</span>
        </div>
        <div
          className={`flex items-center gap-3 font-medium ${isVW ? "text-blue-400" : "text-emerald-400"}`}
        >
          <span>{currentModel.priceRange}</span>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <span
            className={`flex items-center gap-1 ${isVW ? "text-blue-300" : "text-emerald-300"}`}
          >
            <ShieldCheck className="w-3.5 h-3.5" /> {currentModel.rating}
          </span>
        </div>
      </motion.div>

      {/* Variant Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {currentModel.variants.map((variant) => {
          const isSelected = selectedVariantId === variant.id;
          return (
            <motion.button
              key={variant.id}
              whileTap={{ scale: 0.98 }}
              id={`variant-tab-${variant.id}`}
              onClick={() => setSelectedVariantId(variant.id)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 relative flex flex-col justify-between cursor-pointer ${isSelected ? (isVW ? "bg-zinc-900 border-blue-500 shadow-lg shadow-blue-950/40 ring-1 ring-blue-500/50" : "bg-zinc-900 border-emerald-500 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/50") : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80"}`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                  <span className="font-bold text-sm text-white">
                    {variant.name}
                  </span>
                  {variant.isPopular && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Popular
                    </span>
                  )}
                  {variant.isFlagship && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {isVW ? "GT Sport" : "L&K Luxury"}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-zinc-400 line-clamp-2">
                  {variant.tagline}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span
                  className={`font-bold ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  {variant.priceRange}
                </span>
                <span className="text-[10px] text-zinc-400 truncate max-w-[90px]">
                  {variant.engineOptions[0]}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Active Variant Deep Dive Card */}
      <AnimatePresence mode="wait">
        {activeVariant && (
          <motion.div
            key={activeVariant.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-zinc-900/90 rounded-3xl border border-zinc-800 p-6 sm:p-8 space-y-6 shadow-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs uppercase font-bold tracking-wider ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    {currentModel.name} Trim Specification
                  </span>
                  {activeVariant.isPopular && (
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Best Value Pick
                    </span>
                  )}
                  {activeVariant.isFlagship && (
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {isVW ? "GT Performance" : "L&K Luxury"}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {activeVariant.name}
                </h3>
                <p className="text-sm text-zinc-400">{activeVariant.tagline}</p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-zinc-500 block uppercase font-medium">
                  Estimated Ex-Showroom
                </span>
                <span
                  className={`text-2xl font-black ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  {activeVariant.priceRange}
                </span>
                <span className="text-[11px] text-zinc-500 block">
                  Available across India
                </span>
              </div>
            </div>

            {/* Engines and Gearbox Combinations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
                <span className="text-xs text-zinc-500 block font-semibold mb-1.5">
                  Available Engine Powertrains
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeVariant.engineOptions.map((e, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white font-medium"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
                <span className="text-xs text-zinc-500 block font-semibold mb-1.5">
                  Available Transmissions
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeVariant.transmissions.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Features Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Standard Equipment */}
              <div className="space-y-3">
                <h4
                  className={`text-xs font-bold uppercase tracking-wider border-b border-zinc-800 pb-2 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  Core Equipment & Electronics
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {activeVariant.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check
                        className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exterior Styling */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                  Exterior Appointments
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {activeVariant.exteriorHighlights.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interior & Cabin Comfort */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                  Cabin Luxury & Comfort
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {activeVariant.interiorHighlights.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
