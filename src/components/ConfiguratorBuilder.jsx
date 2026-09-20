import { useState, useEffect, useMemo, useRef } from "react";
import {
  Sparkles,
  Check,
  Save,
  Share2,
  Download,
  GitCompare,
  Trash2,
  X,
  Cog,
  Fuel,
  Palette,
  CircleDot,
  Armchair,
  PlusCircle,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { PORSCHE_MODELS } from "../data/porscheData";
import { LAMBORGHINI_MODELS } from "../data/lamborghiniData";
import { BENTLEY_MODELS } from "../data/bentleyData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { CarSilhouette } from "./CarSilhouette";
import { getBodyShape } from "../utils/bodyShape";
import {
  getWheelOptions,
  getInteriorOptions,
  getOptionalEquipment,
  calculateBuildTotal,
  formatLakh,
  formatRupees,
} from "../utils/configuratorOptions";
import { generateBuildImage } from "../utils/generateBuildImage";

const STORAGE_KEY = "vwgroup_saved_builds";
const BRAND_ACCENT_HEX = { skoda: "#10b981", volkswagen: "#3b82f6", audi: "#ef4444", porsche: "#f59e0b", lamborghini: "#eab308" };

function loadSavedBuilds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persistBuilds(builds) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(builds));
  } catch {
    // localStorage unavailable (private browsing etc.) — silently skip persistence
  }
}

function decodeSharedBuild() {
  try {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("build");
    if (!encoded) return null;
    return JSON.parse(decodeURIComponent(atob(encoded)));
  } catch {
    return null;
  }
}

export const ConfiguratorBuilder = ({ brand = "skoda", onSwitchBrand, onOpenAdvisor }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const isBentley = brand === "bentley";
  const models = isBentley ? BENTLEY_MODELS : isLamborghini ? LAMBORGHINI_MODELS : isPorsche ? PORSCHE_MODELS : isAudi ? AUDI_MODELS : isVW ? VW_MODELS : SKODA_MODELS;
  const accentHex = BRAND_ACCENT_HEX[brand];
  const accentText = isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400";
  const accentBg = isBentley ? "bg-green-600 hover:bg-green-500" : isLamborghini ? "bg-yellow-600 hover:bg-yellow-500" : isPorsche ? "bg-amber-600 hover:bg-amber-500" : isAudi ? "bg-red-600 hover:bg-red-500" : isVW ? "bg-blue-600 hover:bg-blue-500" : "bg-emerald-600 hover:bg-emerald-500";
  const accentBorder = isBentley ? "border-green-500/60" : isLamborghini ? "border-yellow-500/60" : isPorsche ? "border-amber-500/60" : isAudi ? "border-red-500/60" : isVW ? "border-blue-500/60" : "border-emerald-500/60";
  const accentRing = isBentley ? "ring-green-500/60" : isLamborghini ? "ring-yellow-500/60" : isPorsche ? "ring-amber-500/60" : isAudi ? "ring-red-500/60" : isVW ? "ring-blue-500/60" : "ring-emerald-500/60";

  const [selectedModelId, setSelectedModelId] = useState(models[0].id);
  const currentModel = models.find((m) => m.id === selectedModelId) || models[0];

  const [selectedVariantId, setSelectedVariantId] = useState(currentModel.variants[0].id);
  const currentVariant =
    currentModel.variants.find((v) => v.id === selectedVariantId) || currentModel.variants[0];

  const [selectedEngine, setSelectedEngine] = useState(currentVariant.engineOptions[0]);
  const [selectedGearbox, setSelectedGearbox] = useState(currentVariant.transmissions[0]);
  const [selectedColorId, setSelectedColorId] = useState(currentModel.colors[0]?.id);

  const wheelOptions = useMemo(() => getWheelOptions(currentModel, currentVariant), [currentModel, currentVariant]);
  const [selectedWheelId, setSelectedWheelId] = useState(wheelOptions[0].id);

  const interiorOptions = useMemo(() => getInteriorOptions(currentModel, currentVariant), [currentModel, currentVariant]);
  const [selectedInteriorId, setSelectedInteriorId] = useState(interiorOptions[0].id);

  const equipmentCatalogue = useMemo(() => getOptionalEquipment(currentModel, currentVariant), [currentModel, currentVariant]);
  const [selectedOptionIds, setSelectedOptionIds] = useState([]);

  const [savedBuilds, setSavedBuilds] = useState(loadSavedBuilds);
  const [compareIds, setCompareIds] = useState([]);
  const [shareStatus, setShareStatus] = useState("idle");
  const [saveStatus, setSaveStatus] = useState("idle");
  const [sharedBanner, setSharedBanner] = useState(null);
  const hasAppliedShare = useRef(false);

  // Reset dependent selections whenever the brand/model changes
  useEffect(() => {
    const model = models.find((m) => m.id === selectedModelId) || models[0];
    if (!model.variants.some((v) => v.id === selectedVariantId)) {
      setSelectedVariantId(model.variants[0].id);
    }
    if (!model.colors.some((c) => c.id === selectedColorId)) {
      setSelectedColorId(model.colors[0]?.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand]);

  useEffect(() => {
    setSelectedModelId(models[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand]);

  // Reset engine/gearbox/wheel/interior/options whenever variant changes
  useEffect(() => {
    setSelectedEngine(currentVariant.engineOptions[0]);
    setSelectedGearbox(currentVariant.transmissions[0]);
    setSelectedWheelId("standard");
    setSelectedInteriorId("classic");
    setSelectedOptionIds([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVariantId, selectedModelId]);

  // Apply a shared build link on first mount only
  useEffect(() => {
    if (hasAppliedShare.current) return;
    hasAppliedShare.current = true;
    const shared = decodeSharedBuild();
    if (!shared) return;
    if (shared.brand !== brand) {
      setSharedBanner(shared);
      return;
    }
    applySharedBuild(shared);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function applySharedBuild(shared) {
    const model = models.find((m) => m.id === shared.modelId);
    if (!model) return;
    setSelectedModelId(model.id);
    const variant = model.variants.find((v) => v.id === shared.variantId) || model.variants[0];
    setSelectedVariantId(variant.id);
    setTimeout(() => {
      if (shared.engine) setSelectedEngine(shared.engine);
      if (shared.gearbox) setSelectedGearbox(shared.gearbox);
      if (shared.colorId) setSelectedColorId(shared.colorId);
      if (shared.wheelId) setSelectedWheelId(shared.wheelId);
      if (shared.interiorId) setSelectedInteriorId(shared.interiorId);
      if (shared.optionIds) setSelectedOptionIds(shared.optionIds);
    }, 0);
    setSharedBanner(null);
  }

  const selectedColor = currentModel.colors.find((c) => c.id === selectedColorId) || currentModel.colors[0];
  const selectedWheel = wheelOptions.find((w) => w.id === selectedWheelId) || wheelOptions[0];
  const selectedInterior = interiorOptions.find((i) => i.id === selectedInteriorId) || interiorOptions[0];
  const selectedOptions = equipmentCatalogue.filter((o) => selectedOptionIds.includes(o.id));

  const totalPrice = calculateBuildTotal({
    variant: currentVariant,
    wheel: selectedWheel,
    interior: selectedInterior,
    options: selectedOptions,
  });

  const bodyShape = getBodyShape(currentModel.bodyType);

  const buildSnapshot = () => ({
    id: `build-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    brand,
    modelId: currentModel.id,
    modelName: currentModel.name,
    variantId: currentVariant.id,
    variantName: currentVariant.name,
    engine: selectedEngine,
    gearbox: selectedGearbox,
    colorId: selectedColor?.id,
    colorName: selectedColor?.name,
    colorHex: selectedColor?.hex,
    wheelId: selectedWheel?.id,
    wheelName: selectedWheel?.name,
    interiorId: selectedInterior?.id,
    interiorName: selectedInterior?.name,
    optionIds: selectedOptionIds,
    options: selectedOptions.map((o) => o.name),
    totalPrice,
    timestamp: Date.now(),
  });

  const toggleOption = (id) => {
    setSelectedOptionIds((prev) => (prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]));
  };

  const handleSaveBuild = () => {
    const snapshot = buildSnapshot();
    const next = [snapshot, ...savedBuilds].slice(0, 12);
    setSavedBuilds(next);
    persistBuilds(next);
    setSaveStatus("saved");
    setTimeout(() => setSaveStatus("idle"), 1800);
  };

  const handleDeleteBuild = (id) => {
    const next = savedBuilds.filter((b) => b.id !== id);
    setSavedBuilds(next);
    persistBuilds(next);
    setCompareIds((prev) => prev.filter((c) => c !== id));
  };

  const handleShareBuild = async () => {
    const snapshot = buildSnapshot();
    const payload = { ...snapshot };
    delete payload.id;
    delete payload.timestamp;
    const encoded = btoa(encodeURIComponent(JSON.stringify(payload)));
    const url = `${window.location.origin}${window.location.pathname}?build=${encoded}`;
    try {
      await navigator.clipboard.writeText(url);
      setShareStatus("copied");
    } catch {
      setShareStatus("manual");
      window.prompt("Copy your build link:", url);
    }
    setTimeout(() => setShareStatus("idle"), 2200);
  };

  const handleDownloadImage = () => {
    const snapshot = buildSnapshot();
    const dataUrl = generateBuildImage(snapshot);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${currentModel.name.replace(/\s+/g, "-").toLowerCase()}-build.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleCompare = (id) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((c) => c !== id);
      if (prev.length >= 2) return [prev[1], id];
      return [...prev, id];
    });
  };

  const compareBuilds = compareIds.map((id) => savedBuilds.find((b) => b.id === id)).filter(Boolean);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1">
            {isLamborghini ? <LamborghiniLogo variant="emblem" size="sm" /> : isPorsche ? <PorscheLogo variant="emblem" size="sm" /> : isAudi ? <AudiLogo variant="emblem" size="sm" /> : isVW ? <VolkswagenLogo variant="emblem" size="sm" /> : <SkodaLogo variant="emblem" size="sm" />}
            <span className={accentText}>Interactive Configurator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Build Your {isBentley ? "Bentley" : isLamborghini ? "Lamborghini" : isPorsche ? "Porsche" : isAudi ? "Audi" : isVW ? "Volkswagen" : "Škoda"}
          </h2>
          <p className="text-sm text-zinc-400">
            Pick a model, trim, engine, colour, wheels and interior — then save, share, or export your build.
          </p>
        </div>
      </div>

      {sharedBanner && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-amber-950/40 border border-amber-700/50 text-sm text-amber-200">
          <span>
            This shared build is for <strong>{sharedBanner.brand === "lamborghini" ? "Lamborghini" : sharedBanner.brand === "porsche" ? "Porsche" : sharedBanner.brand === "audi" ? "Audi" : sharedBanner.brand === "volkswagen" ? "Volkswagen" : "Škoda"}</strong> — switch brands to load it.
          </span>
          {onSwitchBrand && (
            <button
              onClick={() => {
                onSwitchBrand(sharedBanner.brand);
                setTimeout(() => applySharedBuild(sharedBanner), 50);
              }}
              className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shrink-0"
            >
              Switch & Load Build
            </button>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Step-by-step selectors */}
        <div className="lg:col-span-7 space-y-5">
          {/* Model */}
          <ConfigSection title="1. Choose Model" icon={Cog} accentText={accentText}>
            <div className="flex flex-wrap gap-2">
              {models
                .filter((m) => !m.notSoldInIndia)
                .map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModelId(m.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${selectedModelId === m.id ? `${accentBg} text-white border-transparent shadow-md` : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"}`}
                  >
                    {m.name.replace("Škoda ", "").replace("Volkswagen ", "").replace("Audi ", "").replace("Porsche ", "").replace("Lamborghini ", "")}
                  </button>
                ))}
            </div>
            <p className="text-[10px] text-zinc-500 mt-1.5">
              Global-market-only models not officially sold in India (e.g. Jetta GLI) aren't configurable here.
            </p>
          </ConfigSection>

          {/* Variant */}
          <ConfigSection title="2. Choose Variant" icon={Sparkles} accentText={accentText}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentModel.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariantId(v.id)}
                  className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${selectedVariantId === v.id ? `bg-zinc-900 ${accentBorder} ring-1 ${accentRing}` : "bg-zinc-950/70 border-zinc-800 hover:border-zinc-700"}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-white text-sm">{v.name}</span>
                    {v.isFlagship && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase shrink-0">
                        Flagship
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-zinc-500">{v.priceRange}</span>
                </button>
              ))}
            </div>
          </ConfigSection>

          {/* Engine & Gearbox */}
          <ConfigSection title="3. Engine & Gearbox" icon={Fuel} accentText={accentText}>
            <div className="space-y-3">
              <div>
                <span className="text-[11px] uppercase font-bold text-zinc-500 mb-1.5 block">Engine</span>
                <div className="flex flex-wrap gap-2">
                  {currentVariant.engineOptions.map((eng) => (
                    <button
                      key={eng}
                      onClick={() => setSelectedEngine(eng)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border ${selectedEngine === eng ? `${accentBg} text-white border-transparent` : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"}`}
                    >
                      {eng}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold text-zinc-500 mb-1.5 block">Gearbox</span>
                <div className="flex flex-wrap gap-2">
                  {currentVariant.transmissions.map((gb) => (
                    <button
                      key={gb}
                      onClick={() => setSelectedGearbox(gb)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border ${selectedGearbox === gb ? `${accentBg} text-white border-transparent` : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"}`}
                    >
                      {gb}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ConfigSection>

          {/* Colour */}
          <ConfigSection title="4. Exterior Colour" icon={Palette} accentText={accentText}>
            <div className="flex flex-wrap gap-3">
              {currentModel.colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColorId(c.id)}
                  title={c.name}
                  className={`group relative p-1 rounded-full transition-all cursor-pointer ${selectedColorId === c.id ? `ring-2 ${accentRing} scale-110` : "hover:scale-105 opacity-80 hover:opacity-100"}`}
                >
                  <span className="block w-8 h-8 rounded-full border border-zinc-700 shadow-md relative" style={{ backgroundColor: c.hex }}>
                    {c.isDualTone && <span className="absolute top-0 right-0 w-3 h-3 bg-zinc-950 rounded-bl-full" />}
                    {selectedColorId === c.id && (
                      <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-xs text-zinc-400 mt-2">{selectedColor?.name}</p>
          </ConfigSection>

          {/* Wheels */}
          <ConfigSection title="5. Wheels" icon={CircleDot} accentText={accentText}>
            <div className="space-y-2">
              {wheelOptions.map((w) => (
                <OptionRow
                  key={w.id}
                  selected={selectedWheelId === w.id}
                  onClick={() => setSelectedWheelId(w.id)}
                  name={w.name}
                  description={w.description}
                  priceDelta={w.priceDelta}
                  accentBorder={accentBorder}
                  accentRing={accentRing}
                  accentText={accentText}
                  single
                />
              ))}
            </div>
          </ConfigSection>

          {/* Interior */}
          <ConfigSection title="6. Interior" icon={Armchair} accentText={accentText}>
            <div className="space-y-2">
              {interiorOptions.map((i) => (
                <OptionRow
                  key={i.id}
                  selected={selectedInteriorId === i.id}
                  onClick={() => setSelectedInteriorId(i.id)}
                  name={i.name}
                  description={i.description}
                  priceDelta={i.priceDelta}
                  accentBorder={accentBorder}
                  accentRing={accentRing}
                  accentText={accentText}
                  single
                />
              ))}
            </div>
          </ConfigSection>

          {/* Optional Equipment */}
          {equipmentCatalogue.length > 0 && (
            <ConfigSection title="7. Optional Equipment" icon={PlusCircle} accentText={accentText}>
              <div className="space-y-2">
                {equipmentCatalogue.map((o) => (
                  <OptionRow
                    key={o.id}
                    selected={selectedOptionIds.includes(o.id)}
                    onClick={() => toggleOption(o.id)}
                    name={o.name}
                    description={o.description}
                    priceDelta={o.priceDelta}
                    accentBorder={accentBorder}
                    accentRing={accentRing}
                    accentText={accentText}
                  />
                ))}
              </div>
            </ConfigSection>
          )}
        </div>

        {/* Right: Live spec card */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-4">
            <motion.div
              layout
              className="rounded-3xl border border-zinc-800 bg-zinc-900/90 overflow-hidden shadow-2xl"
            >
              <div className="relative h-48 sm:h-56 bg-gradient-to-b from-zinc-800/60 to-zinc-950 flex items-center justify-center p-4">
                <CarSilhouette
                  colorHex={selectedColor?.hex}
                  isDualTone={!!selectedColor?.isDualTone}
                  shape={bodyShape}
                  accentHex={accentHex}
                />
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-widest ${accentText}`}>Your Build</span>
                  <h3 className="text-xl font-bold text-white leading-tight">{currentModel.name}</h3>
                  <p className="text-sm text-zinc-400">{currentVariant.name}</p>
                </div>

                <div className="space-y-2 text-xs border-t border-zinc-800 pt-3">
                  <SpecLine label="Engine" value={selectedEngine} />
                  <SpecLine label="Gearbox" value={selectedGearbox} />
                  <SpecLine label="Colour" value={selectedColor?.name} />
                  <SpecLine label="Wheels" value={selectedWheel?.name} />
                  <SpecLine label="Interior" value={selectedInterior?.name} />
                  {selectedOptions.length > 0 && (
                    <div className="pt-1">
                      <span className="text-zinc-500 block mb-1">Optional Equipment</span>
                      <ul className="space-y-1">
                        {selectedOptions.map((o) => (
                          <li key={o.id} className="flex items-center gap-1.5 text-zinc-300">
                            <Check className="w-3 h-3 text-emerald-400 shrink-0" /> {o.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">Estimated On-Road Build</span>
                  <span className="text-lg font-extrabold text-white">{formatLakh(totalPrice)}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleSaveBuild}
                    className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white transition-all cursor-pointer ${accentBg}`}
                  >
                    <Save className="w-3.5 h-3.5" /> {saveStatus === "saved" ? "Saved!" : "Save Build"}
                  </button>
                  <button
                    onClick={handleShareBuild}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-all cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    {shareStatus === "copied" ? "Link Copied!" : shareStatus === "manual" ? "Link Ready" : "Share Build"}
                  </button>
                  <button
                    onClick={handleDownloadImage}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-all cursor-pointer col-span-2"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Spec Card Image
                  </button>
                  {onOpenAdvisor && (
                    <button
                      onClick={() => onOpenAdvisor(`Tell me more about the ${currentModel.name} ${currentVariant.name} with the ${selectedEngine} engine.`)}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-400 hover:text-white bg-transparent border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer col-span-2"
                    >
                      Ask AI Advisor About This Build <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Saved Builds & Compare */}
      {savedBuilds.length > 0 && (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <GitCompare className={`w-4 h-4 ${accentText}`} />
              <h3 className="text-lg font-bold text-white">Saved Builds</h3>
              <span className="text-xs text-zinc-500">({savedBuilds.length})</span>
            </div>
            <span className="text-xs text-zinc-500">Select up to 2 builds to compare</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {savedBuilds.map((b) => {
              const isComparing = compareIds.includes(b.id);
              return (
                <div
                  key={b.id}
                  className={`p-3 rounded-2xl border transition-all ${isComparing ? `bg-zinc-900 ${accentBorder} ring-1 ${accentRing}` : "bg-zinc-950/70 border-zinc-800"}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border border-zinc-700 shrink-0" style={{ backgroundColor: b.colorHex }} />
                      <div>
                        <p className="text-sm font-semibold text-white leading-tight">{b.modelName}</p>
                        <p className="text-[11px] text-zinc-500">{b.variantName}</p>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteBuild(b.id)} className="text-zinc-600 hover:text-red-400 cursor-pointer shrink-0">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-sm font-bold text-white mt-2">{formatLakh(b.totalPrice)}</p>
                  <button
                    onClick={() => toggleCompare(b.id)}
                    className={`mt-2 w-full text-[11px] font-semibold py-1.5 rounded-lg transition-all cursor-pointer ${isComparing ? `${accentBg} text-white` : "bg-zinc-800 text-zinc-300 hover:text-white"}`}
                  >
                    {isComparing ? "Selected for Compare" : "Compare"}
                  </button>
                </div>
              );
            })}
          </div>

          <AnimatePresence>
            {compareBuilds.length === 2 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-2xl border border-zinc-800 overflow-hidden">
                  <div className="grid grid-cols-3 bg-zinc-950 text-xs">
                    <div className="p-3 text-zinc-500 font-semibold">Spec</div>
                    {compareBuilds.map((b) => (
                      <div key={b.id} className="p-3 text-white font-semibold border-l border-zinc-800">
                        {b.modelName}
                      </div>
                    ))}
                  </div>
                  {[
                    ["Variant", (b) => b.variantName],
                    ["Engine", (b) => b.engine],
                    ["Gearbox", (b) => b.gearbox],
                    ["Colour", (b) => b.colorName],
                    ["Wheels", (b) => b.wheelName],
                    ["Interior", (b) => b.interiorName],
                    ["Est. Price", (b) => formatLakh(b.totalPrice)],
                  ].map(([label, getter]) => (
                    <div key={label} className="grid grid-cols-3 text-xs border-t border-zinc-800">
                      <div className="p-3 text-zinc-500">{label}</div>
                      {compareBuilds.map((b) => (
                        <div key={b.id} className="p-3 text-zinc-200 border-l border-zinc-800">
                          {getter(b)}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setCompareIds([])}
                  className="mt-2 text-xs text-zinc-500 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3 h-3" /> Clear comparison
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

function ConfigSection({ title, icon: Icon, accentText, children }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 space-y-3">
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <Icon className={`w-4 h-4 ${accentText}`} />
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

function OptionRow({ selected, onClick, name, description, priceDelta, accentBorder, accentRing, single }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${selected ? `bg-zinc-900 ${accentBorder} ring-1 ${accentRing}` : "bg-zinc-950/70 border-zinc-800 hover:border-zinc-700"}`}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <span
          className={`w-4 h-4 rounded${single ? "-full" : "-md"} border shrink-0 flex items-center justify-center ${selected ? "bg-white border-white" : "border-zinc-600"}`}
        >
          {selected && <Check className="w-3 h-3 text-zinc-900" />}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-white truncate">{name}</p>
          {description && <p className="text-[10px] text-zinc-500 truncate">{description}</p>}
        </div>
      </div>
      <span className={`text-[11px] font-bold shrink-0 ${priceDelta ? "text-amber-400" : "text-zinc-500"}`}>
        {priceDelta ? `+${formatRupees(priceDelta)}` : "Included"}
      </span>
    </button>
  );
}

function SpecLine({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-zinc-500">{label}</span>
      <span className="text-zinc-200 font-medium text-right">{value}</span>
    </div>
  );
}
