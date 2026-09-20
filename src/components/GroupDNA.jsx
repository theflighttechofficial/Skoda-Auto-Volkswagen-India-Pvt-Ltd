import { useState, useRef, useLayoutEffect, useCallback, useMemo } from "react";
import { Dna, X } from "lucide-react";
import { motion } from "motion/react";
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
import { BentleyLogo } from "./BentleyLogo";
import { getGroupPlatformTree } from "../utils/underTheSkin";

const ALL_BRAND_MODELS = { skoda: SKODA_MODELS, volkswagen: VW_MODELS, audi: AUDI_MODELS, porsche: PORSCHE_MODELS, lamborghini: LAMBORGHINI_MODELS, bentley: BENTLEY_MODELS };
const BRAND_HEX = { skoda: "#10b981", volkswagen: "#3b82f6", audi: "#ef4444", porsche: "#f59e0b", lamborghini: "#eab308", bentley: "#16a34a" };
const BRAND_LABEL = { skoda: "Škoda", volkswagen: "Volkswagen", audi: "Audi", porsche: "Porsche", lamborghini: "Lamborghini", bentley: "Bentley" };
const BRANDS = ["skoda", "volkswagen", "audi", "porsche", "lamborghini", "bentley"];

export const GroupDNA = () => {
  const tree = useMemo(() => getGroupPlatformTree(ALL_BRAND_MODELS), []);
  const [selection, setSelection] = useState(null); // { type: 'brand'|'platform', value }

  const containerRef = useRef(null);
  const groupNodeRef = useRef(null);
  const dnaNodeRef = useRef(null);
  const brandRefs = useRef({});
  const platformRefs = useRef({});
  const platformListRefs = useRef({});
  const [lines, setLines] = useState([]);

  const recomputeLines = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cRect = container.getBoundingClientRect();
    const center = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2 - cRect.left, top: r.top - cRect.top, bottom: r.bottom - cRect.top };
    };
    const groupC = center(groupNodeRef.current);
    const dnaC = center(dnaNodeRef.current);
    const next = [];

    if (groupC) {
      BRANDS.forEach((b) => {
        const bC = center(brandRefs.current[b]);
        if (bC) {
          next.push({ id: `group-${b}`, x1: groupC.x, y1: groupC.bottom, x2: bC.x, y2: bC.top, kind: "brand", brand: b });
        }
      });
    }
    if (dnaC) {
      BRANDS.forEach((b) => {
        const bC = center(brandRefs.current[b]);
        if (bC) {
          next.push({ id: `${b}-dna`, x1: bC.x, y1: bC.bottom, x2: dnaC.x, y2: dnaC.top, kind: "brand", brand: b });
        }
      });
      tree.forEach((g) => {
        const pC = center(platformRefs.current[g.platform]);
        if (pC) {
          next.push({ id: `dna-${g.platform}`, x1: dnaC.x, y1: dnaC.bottom, x2: pC.x, y2: pC.top, kind: "platform", platform: g.platform });
        }
      });
    }
    tree.forEach((g) => {
      const pC = center(platformRefs.current[g.platform]);
      const lC = center(platformListRefs.current[g.platform]);
      if (pC && lC) {
        next.push({ id: `${g.platform}-list`, x1: pC.x, y1: pC.bottom, x2: lC.x, y2: lC.top, kind: "platform", platform: g.platform });
      }
    });
    setLines(next);
  }, [tree]);

  useLayoutEffect(() => {
    recomputeLines();
    const onResize = () => recomputeLines();
    window.addEventListener("resize", onResize);
    const timeout = setTimeout(recomputeLines, 150); // catch late font/layout settle
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeout);
    };
  }, [recomputeLines]);

  const toggleBrand = (brand) => {
    setSelection((prev) => (prev?.type === "brand" && prev.value === brand ? null : { type: "brand", value: brand }));
  };
  const togglePlatform = (platform) => {
    setSelection((prev) => (prev?.type === "platform" && prev.value === platform ? null : { type: "platform", value: platform }));
  };

  const activePlatformsForBrand = (brand) =>
    new Set(tree.filter((g) => g.models.some((m) => m.brand === brand)).map((g) => g.platform));

  const isLineActive = (line) => {
    if (!selection) return false;
    if (selection.type === "brand") return line.brand === selection.value || (line.kind === "platform" && activePlatformsForBrand(selection.value).has(line.platform));
    if (selection.type === "platform") {
      if (line.kind === "platform") return line.platform === selection.value;
      if (line.kind === "brand" && line.id.startsWith("group-")) {
        return tree.find((g) => g.platform === selection.value)?.models.some((m) => m.brand === line.brand);
      }
      if (line.kind === "brand") {
        return tree.find((g) => g.platform === selection.value)?.models.some((m) => m.brand === line.brand);
      }
    }
    return false;
  };

  const isBrandActive = (brand) => selection?.type === "brand" && selection.value === brand;
  const isPlatformActive = (platform) => selection?.type === "platform" && selection.value === platform;
  const isModelDimmed = (model) => {
    if (!selection) return false;
    if (selection.type === "brand") return model.brand !== selection.value;
    if (selection.type === "platform") return false; // handled by column-level dimming
    return false;
  };
  const isColumnDimmed = (platform) => {
    if (!selection) return false;
    if (selection.type === "platform") return platform !== selection.value;
    if (selection.type === "brand") return !tree.find((g) => g.platform === platform)?.models.some((m) => m.brand === selection.value);
    return false;
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1 text-fuchsia-400">
            <Dna className="w-4 h-4" />
            <span>Shared Group Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">DNA of the Group</h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Every Škoda, Volkswagen, Audi, Porsche, Lamborghini and Bentley model traced back to the platform it actually shares. Click a
            brand or a platform to see the family light up.
          </p>
        </div>
        {selection && (
          <button
            onClick={() => setSelection(null)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors cursor-pointer self-start"
          >
            <X className="w-3.5 h-3.5" /> Clear Selection
          </button>
        )}
      </div>

      {/* Desktop/tablet tree diagram */}
      <div ref={containerRef} className="relative hidden md:block rounded-3xl border border-zinc-800 bg-zinc-950 p-8 pt-10">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {lines.map((l) => {
            const active = isLineActive(l);
            const midY = (l.y1 + l.y2) / 2;
            const d = `M ${l.x1} ${l.y1} C ${l.x1} ${midY}, ${l.x2} ${midY}, ${l.x2} ${l.y2}`;
            return (
              <path
                key={l.id}
                d={d}
                fill="none"
                stroke={active ? (l.brand ? BRAND_HEX[l.brand] : "#d946ef") : "#3f3f46"}
                strokeWidth={active ? 2 : 1.5}
                opacity={selection ? (active ? 1 : 0.15) : 0.5}
                style={{ transition: "opacity 0.3s, stroke 0.3s" }}
              />
            );
          })}
        </svg>

        <div className="relative space-y-10" style={{ zIndex: 1 }}>
          {/* Group node */}
          <div className="flex justify-center">
            <div
              ref={groupNodeRef}
              className="px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-sm font-black text-white tracking-wide shadow-lg"
            >
              VOLKSWAGEN GROUP
            </div>
          </div>

          {/* Brand row */}
          <div className="flex justify-center gap-6 lg:gap-16">
            {BRANDS.map((b) => (
              <button
                key={b}
                ref={(el) => (brandRefs.current[b] = el)}
                onClick={() => toggleBrand(b)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl border transition-all cursor-pointer ${isBrandActive(b) ? "bg-zinc-900 shadow-xl scale-105" : "bg-zinc-900/70 hover:bg-zinc-900"}`}
                style={{ borderColor: isBrandActive(b) ? BRAND_HEX[b] : "#27272a" }}
              >
                {b === "audi" ? <AudiLogo variant="emblem" size="sm" /> : b === "volkswagen" ? <VolkswagenLogo variant="emblem" size="sm" /> : b === "porsche" ? <PorscheLogo variant="emblem" size="sm" /> : b === "lamborghini" ? <LamborghiniLogo variant="emblem" size="sm" /> : b === "bentley" ? <BentleyLogo variant="emblem" size="sm" /> : <SkodaLogo variant="emblem" size="sm" />}
                <span className="text-sm font-bold text-white">{BRAND_LABEL[b]}</span>
              </button>
            ))}
          </div>

          {/* Platform DNA convergence node */}
          <div className="flex justify-center">
            <div
              ref={dnaNodeRef}
              className="px-6 py-2.5 rounded-xl bg-fuchsia-950/60 border border-fuchsia-700/60 text-sm font-black text-fuchsia-300 tracking-wide shadow-lg"
            >
              PLATFORM DNA
            </div>
          </div>

          {/* Platform row + model columns */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${tree.length}, minmax(0, 1fr))` }}>
            {tree.map((g) => (
              <div key={g.platform} className="flex flex-col items-center gap-4">
                <button
                  ref={(el) => (platformRefs.current[g.platform] = el)}
                  onClick={() => togglePlatform(g.platform)}
                  title={g.description}
                  className={`w-full text-center px-2 py-2.5 rounded-xl border transition-all cursor-pointer ${isPlatformActive(g.platform) ? "bg-fuchsia-950/50 shadow-xl scale-105" : "bg-zinc-900/70 hover:bg-zinc-900"}`}
                  style={{ borderColor: isPlatformActive(g.platform) ? "#d946ef" : "#27272a" }}
                >
                  <span className="text-xs font-black text-white block leading-tight">{g.platform.split(" (")[0]}</span>
                  <span className="text-[10px] text-zinc-500">{g.models.length} models</span>
                </button>

                <motion.div
                  ref={(el) => (platformListRefs.current[g.platform] = el)}
                  animate={{ opacity: isColumnDimmed(g.platform) ? 0.25 : 1 }}
                  className="w-full space-y-1.5 p-2 rounded-xl bg-zinc-900/40 border border-zinc-800/60 min-h-[2.5rem]"
                >
                  {g.models.map((m) => (
                    <div
                      key={`${m.brand}-${m.id}`}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] sm:text-[11px] font-medium"
                      style={{
                        backgroundColor: isModelDimmed(m) ? "transparent" : `${BRAND_HEX[m.brand]}1a`,
                        color: isModelDimmed(m) ? "#71717a" : "#e4e4e7",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: BRAND_HEX[m.brand] }} />
                      <span className="truncate">{m.name.replace("Škoda ", "").replace("Volkswagen ", "").replace("Audi ", "").replace("Porsche ", "").replace("Lamborghini ", "").replace("Bentley ", "")}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile fallback: filter chips + flowing model grid, no line diagram */}
      <div className="md:hidden space-y-4">
        <div className="flex flex-wrap gap-2">
          {BRANDS.map((b) => (
            <button
              key={b}
              onClick={() => toggleBrand(b)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${isBrandActive(b) ? "text-white" : "text-zinc-400 border-zinc-800"}`}
              style={{ borderColor: isBrandActive(b) ? BRAND_HEX[b] : undefined, backgroundColor: isBrandActive(b) ? `${BRAND_HEX[b]}22` : "transparent" }}
            >
              {BRAND_LABEL[b]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {tree.map((g) => (
            <button
              key={g.platform}
              onClick={() => togglePlatform(g.platform)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${isPlatformActive(g.platform) ? "bg-fuchsia-950/60 border-fuchsia-600 text-fuchsia-300" : "text-zinc-400 border-zinc-800"}`}
            >
              {g.platform.split(" (")[0]} ({g.models.length})
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {tree.flatMap((g) => g.models).map((m) => {
            const dimmed =
              (selection?.type === "brand" && m.brand !== selection.value) ||
              (selection?.type === "platform" && !tree.find((g) => g.platform === selection.value)?.models.includes(m));
            return (
              <div
                key={`${m.brand}-${m.id}`}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-opacity"
                style={{
                  backgroundColor: dimmed ? "transparent" : `${BRAND_HEX[m.brand]}1a`,
                  color: dimmed ? "#52525b" : "#e4e4e7",
                  opacity: dimmed ? 0.4 : 1,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: BRAND_HEX[m.brand] }} />
                <span className="truncate">{m.name.replace("Škoda ", "").replace("Volkswagen ", "").replace("Audi ", "").replace("Porsche ", "").replace("Lamborghini ", "").replace("Bentley ", "")}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Platform legend / descriptions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tree.map((g) => (
          <button
            key={g.platform}
            onClick={() => togglePlatform(g.platform)}
            className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${isPlatformActive(g.platform) ? "bg-fuchsia-950/30 border-fuchsia-600/60" : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700"}`}
          >
            <span className="text-sm font-bold text-white">{g.platform}</span>
            <p className="text-xs text-zinc-400 mt-1">{g.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
