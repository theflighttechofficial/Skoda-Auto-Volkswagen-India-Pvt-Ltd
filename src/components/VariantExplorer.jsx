import { useState, useEffect } from "react";
import { Check, ShieldCheck, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { PORSCHE_MODELS } from "../data/porscheData";
import { LAMBORGHINI_MODELS } from "../data/lamborghiniData";
import { BENTLEY_MODELS } from "../data/bentleyData";
import { SEAT_MODELS } from "../data/seatData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { BentleyLogo } from "./BentleyLogo";
import { SeatLogo } from "./SeatLogo";
import { getAccentClasses } from "../utils/brandTheme";

const BRAND_PAGE_COPY = {
  skoda: {
    Logo: SkodaLogo,
    models: SKODA_MODELS,
    heading: "Škoda Models & Trim Guide",
    subheading: "Compare features, pricing, and appointments across Classic, Signature, Prestige, Sportline, and L&K trims",
    flagshipLabel: "L&K Luxury",
  },
  volkswagen: {
    Logo: VolkswagenLogo,
    models: VW_MODELS,
    heading: "Volkswagen Models & Trim Guide",
    subheading: "Compare features, pricing, and appointments across Comfortline, Highline, Topline, and GT Plus trims",
    flagshipLabel: "GT Sport",
  },
  audi: {
    Logo: AudiLogo,
    models: AUDI_MODELS,
    heading: "Audi Models & Trim Guide",
    subheading: "Compare features, pricing, and appointments across Premium Plus and Technology trims",
    flagshipLabel: "Technology",
  },
  porsche: {
    Logo: PorscheLogo,
    models: PORSCHE_MODELS,
    heading: "Porsche Models & Trim Guide",
    subheading: "Compare features, pricing, and appointments across base, S, and flagship trims",
    flagshipLabel: "S / GTS",
  },
  lamborghini: {
    Logo: LamborghiniLogo,
    models: LAMBORGHINI_MODELS,
    heading: "Lamborghini Models & Trim Guide",
    subheading: "Compare features, pricing, and appointments across base and track-focused STO/Performante trims",
    flagshipLabel: "STO / Performante",
  },
  bentley: {
    Logo: BentleyLogo,
    models: BENTLEY_MODELS,
    heading: "Bentley Models & Trim Guide",
    subheading: "Compare features, pricing, and appointments across V8/W12 and Speed/EWB flagship trims",
    flagshipLabel: "Speed / EWB",
  },
  seat: {
    Logo: SeatLogo,
    models: SEAT_MODELS,
    heading: "SEAT Models & Trim Guide (Not Sold in India)",
    subheading: "Global reference trims and pricing for enthusiast comparison only — SEAT has no official Indian distribution",
    flagshipLabel: "FR / Cupra",
  },
};

export const VariantExplorer = ({ brand = "skoda", initialModelId }) => {
  const bp = BRAND_PAGE_COPY[brand] || BRAND_PAGE_COPY.skoda;
  const c = getAccentClasses(brand);
  const models = bp.models;
  const BrandLogo = bp.Logo;
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
            <BrandLogo variant="emblem" size="sm" />
            <span className={`text-xs uppercase font-bold tracking-wider ${c.text400}`}>
              Trims & Configurations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{bp.heading}</h2>
          <p className="text-sm text-zinc-400">{bp.subheading}</p>
        </div>

        {/* Model Switcher Pills with smooth motion */}
        <div className="inline-flex flex-wrap p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start gap-1">
          {models.map((car) => {
            const isSelected = selectedModelId === car.id;
            const shortName = car.name
              .replace("Škoda ", "")
              .replace("Volkswagen ", "")
              .replace("Audi ", "")
              .replace("Porsche ", "")
              .replace("Lamborghini ", "")
      .replace("Bentley ", "");
            return (
              <button
                key={car.id}
                onClick={() => handleModelChange(car.id)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${isSelected ? c.modelPillSelected : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`}
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
                {car.id === "911-carrera" && (
                  <span className="ml-1 text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300">
                    Icon
                  </span>
                )}
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

      {/* Model Overview Sub-Banner */}
      <motion.div
        key={currentModel.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs shadow-md"
      >
        <div className="flex items-center gap-3">
          <img
            src={currentModel.image}
            alt={currentModel.name}
            className="w-16 h-11 object-cover rounded-lg border border-zinc-700 shrink-0"
          />
          <span className="font-bold text-white text-sm">
            {currentModel.name}
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-zinc-300 hidden sm:inline">{currentModel.tagline}</span>
        </div>
        <div className={`flex items-center gap-3 font-medium ${c.text400}`}>
          <span>{currentModel.priceRange}</span>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <span className={`flex items-center gap-1 ${c.text300}`}>
            <ShieldCheck className="w-3.5 h-3.5" /> {currentModel.rating}
          </span>
        </div>
      </motion.div>

      {currentModel.notSoldInIndia && (
        <div className="flex items-start gap-2 p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-300 text-xs">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <p>
            <strong>Not Sold in India.</strong> The {currentModel.name} is shown here as a global
            enthusiast reference only — it is not officially available through Indian CBU or CKD
            channels. Pricing and specifications reflect global markets, not India.
          </p>
        </div>
      )}

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
              className={`text-left p-4 rounded-2xl border transition-all duration-200 relative flex flex-col justify-between cursor-pointer ${isSelected ? c.variantTabSelected : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80"}`}
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
                      {bp.flagshipLabel}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-zinc-400 line-clamp-2">
                  {variant.tagline}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span className={`font-bold ${c.text400}`}>
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
                  <span className={`text-xs uppercase font-bold tracking-wider ${c.text400}`}>
                    {currentModel.name} Trim Specification
                  </span>
                  {activeVariant.isPopular && (
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Best Value Pick
                    </span>
                  )}
                  {activeVariant.isFlagship && (
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {bp.flagshipLabel}
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
                <span className={`text-2xl font-black ${c.text400}`}>
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
                <h4 className={`text-xs font-bold uppercase tracking-wider border-b border-zinc-800 pb-2 ${c.text400}`}>
                  Core Equipment & Electronics
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {activeVariant.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${c.text400}`} />
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
