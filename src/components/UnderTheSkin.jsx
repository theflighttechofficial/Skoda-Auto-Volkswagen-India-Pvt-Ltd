import { useState, useMemo, useEffect } from "react";
import {
  Car,
  LayoutGrid,
  Fuel,
  Cog,
  Activity,
  ShieldCheck,
  Cpu,
  ChevronRight,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { PORSCHE_MODELS } from "../data/porscheData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { CarSilhouette } from "./CarSilhouette";
import { ChassisMockup } from "./ChassisMockup";
import { getLayers, derivePlatform, normalizePlatformName, deriveDrivetrain } from "../utils/underTheSkin";
import { getBodyShape } from "../utils/bodyShape";
import { getAccentClasses } from "../utils/brandTheme";

const ICON_MAP = { Car, LayoutGrid, Fuel, Cog, Activity, ShieldCheck, Cpu };
const BRAND_ACCENT_HEX = { skoda: "#10b981", volkswagen: "#3b82f6", audi: "#ef4444", porsche: "#f59e0b" };
const BRAND_LABEL = { skoda: "Škoda", volkswagen: "Volkswagen", audi: "Audi", porsche: "Porsche" };
const ALL_BRAND_MODELS = { skoda: SKODA_MODELS, volkswagen: VW_MODELS, audi: AUDI_MODELS, porsche: PORSCHE_MODELS };
const BRAND_LOGO = { skoda: SkodaLogo, volkswagen: VolkswagenLogo, audi: AudiLogo, porsche: PorscheLogo };

export const UnderTheSkin = ({ brand = "skoda", onSwitchBrand }) => {
  const models = ALL_BRAND_MODELS[brand] || SKODA_MODELS;
  const accentHex = BRAND_ACCENT_HEX[brand];
  const c = getAccentClasses(brand);
  const accentText = c.text400;
  const accentBg = c.solidButton.split(" ")[0];
  const accentBorder = brand === "audi" ? "border-red-500/60" : brand === "volkswagen" ? "border-blue-500/60" : brand === "porsche" ? "border-amber-500/60" : "border-emerald-500/60";
  const BrandLogo = BRAND_LOGO[brand] || SkodaLogo;

  const [selectedModelId, setSelectedModelId] = useState(models[0].id);
  const currentModel = models.find((m) => m.id === selectedModelId) || models[0];
  const [activeLayerId, setActiveLayerId] = useState("exterior");
  const [queuedModelId, setQueuedModelId] = useState(null);

  // When a platform-sibling from another brand is picked, the brand switch
  // arrives via a prop change a moment after this component re-renders —
  // apply the queued selection once that brand's model list actually
  // contains it.
  useEffect(() => {
    if (queuedModelId && models.some((m) => m.id === queuedModelId)) {
      setSelectedModelId(queuedModelId);
      setActiveLayerId("platform");
      setQueuedModelId(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, queuedModelId]);

  const jumpToSibling = (sibling) => {
    if (sibling.brand !== brand) {
      setQueuedModelId(sibling.id);
      onSwitchBrand?.(sibling.brand);
    } else {
      setSelectedModelId(sibling.id);
      setActiveLayerId("platform");
    }
  };

  const layers = useMemo(() => getLayers(currentModel, brand, ALL_BRAND_MODELS), [currentModel, brand]);
  const activeLayer = layers.find((l) => l.id === activeLayerId) || layers[0];
  const isSedan = !/suv|4x4/i.test(currentModel.bodyType || "");
  const bodyShape = getBodyShape(currentModel.bodyType);
  const isExploded = activeLayerId !== "exterior";
  const isChassisView = activeLayerId === "platform";
  const platformLabel = normalizePlatformName(derivePlatform(currentModel, brand));
  const isAwd = /quattro|4motion|4x4/i.test(deriveDrivetrain(currentModel));

  const handleModelChange = (id) => {
    setSelectedModelId(id);
    setActiveLayerId("exterior");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1">
            <BrandLogo variant="emblem" size="sm" />
            <span className={accentText}>Interactive Engineering Museum</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Under the Skin</h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Peel back the {BRAND_LABEL[brand]} lineup layer by layer — body, platform, engine, transmission,
            suspension, safety cell and electronics.
          </p>
        </div>

        {/* Model Switcher */}
        <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-lg bg-zinc-900 border border-zinc-800 self-start">
          {models.map((m) => {
            const shortName = m.name.replace("Škoda ", "").replace("Volkswagen ", "").replace("Audi ", "");
            return (
              <button
                key={m.id}
                onClick={() => handleModelChange(m.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${selectedModelId === m.id ? `${accentBg} text-white shadow-sm` : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`}
              >
                {shortName}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Layer Nav */}
        <div className="lg:col-span-3 order-2 lg:order-1">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
            {layers.map((layer) => {
              const Icon = ICON_MAP[layer.icon] || Layers;
              const isActive = layer.id === activeLayerId;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all shrink-0 lg:w-full cursor-pointer border ${isActive ? `bg-zinc-900 ${accentBorder} ring-1 ${brand === "audi" ? "ring-red-500/50" : brand === "volkswagen" ? "ring-blue-500/50" : brand === "porsche" ? "ring-amber-500/50" : "ring-emerald-500/50"} text-white` : "bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"}`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? accentText : ""}`} />
                  <span className="whitespace-nowrap lg:whitespace-normal">{layer.title}</span>
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto hidden lg:block" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage + Detail */}
        <div className="lg:col-span-9 order-1 lg:order-2 space-y-5">
          <div className="relative rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-black p-6 sm:p-10 overflow-hidden">
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
              style={{ backgroundColor: accentHex }}
            />
            <div className="relative h-56 sm:h-72 w-full max-w-2xl mx-auto">
              <motion.div
                animate={{ opacity: isExploded && !isChassisView ? 0.18 : isChassisView ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <CarSilhouette colorHex={currentModel.colors?.[0]?.hex || "#a1a1aa"} shape={bodyShape} accentHex={accentHex} />
              </motion.div>

              <AnimatePresence>
                {isChassisView && (
                  <motion.div
                    key="chassis-mockup"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <ChassisMockup accentHex={accentHex} isAwd={isAwd} isSedan={isSedan} platformLabel={platformLabel} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hotspot markers for every layer, dimmed unless active */}
              {layers.map((layer) =>
                layer.hotspots.map((pt, idx) => {
                  const Icon = ICON_MAP[layer.icon] || Layers;
                  const isActive = layer.id === activeLayerId;
                  return (
                    <motion.button
                      key={`${layer.id}-${idx}`}
                      onClick={() => setActiveLayerId(layer.id)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                      animate={{ scale: isActive ? 1.15 : 1, opacity: isActive ? 1 : 0.45 }}
                      whileHover={{ scale: 1.2, opacity: 1 }}
                    >
                      <span
                        className={`flex items-center justify-center w-9 h-9 rounded-full border-2 shadow-lg ${isActive ? "bg-white" : "bg-zinc-900/90"}`}
                        style={{ borderColor: accentHex }}
                      >
                        <Icon className="w-4 h-4" style={{ color: isActive ? accentHex : "#d4d4d8" }} />
                      </span>
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-full"
                          style={{ border: `2px solid ${accentHex}` }}
                          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </motion.button>
                  );
                }),
              )}
            </div>
            <p className="relative text-center text-xs text-zinc-500 mt-2">
              {isChassisView
                ? `Viewing: ${activeLayer.title} — sample ${platformLabel} chassis mock-up`
                : isExploded
                  ? `Viewing: ${activeLayer.title}`
                  : "Click a layer or a marker to peel back the body"}
            </p>
          </div>

          {/* Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 space-y-4"
            >
              <div className="flex items-center gap-2">
                {(() => {
                  const Icon = ICON_MAP[activeLayer.icon] || Layers;
                  return <Icon className={`w-5 h-5 ${accentText}`} />;
                })()}
                <h3 className="text-lg font-bold text-white">{activeLayer.title}</h3>
              </div>
              <p className="text-sm text-zinc-300">{activeLayer.summary}</p>
              <ul className="space-y-2">
                {activeLayer.facts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${accentBg}`} />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>

              {activeLayer.id === "platform" && activeLayer.siblings?.length > 0 && (
                <div className="pt-3 border-t border-zinc-800 space-y-2">
                  <span className="text-[11px] uppercase font-bold text-zinc-500">Platform Siblings Across the Group</span>
                  <div className="flex flex-wrap gap-2">
                    {activeLayer.siblings.map((s) => (
                      <button
                        key={`${s.brand}-${s.id}`}
                        id={`sibling-${s.brand}-${s.id}`}
                        onClick={() => jumpToSibling(s)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${s.brand === "audi" ? "bg-red-400" : s.brand === "volkswagen" ? "bg-blue-400" : "bg-emerald-400"}`}
                        />
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
