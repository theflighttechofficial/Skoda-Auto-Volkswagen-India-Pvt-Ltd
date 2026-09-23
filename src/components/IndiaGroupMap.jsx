import { useState, useMemo } from "react";
import { MapPin, Phone, Building2, X, Navigation, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DEALERSHIPS } from "../data/dealershipData";
import { STATE_MAP_COORDINATES } from "../data/indiaMapCoordinates";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { BentleyLogo } from "./BentleyLogo";
import { SeatLogo } from "./SeatLogo";
import { ScaniaLogo } from "./ScaniaLogo";

const BRANDS = [
  { id: "skoda", label: "Škoda", dot: "bg-emerald-500", text: "text-emerald-400", ring: "ring-emerald-500" },
  { id: "volkswagen", label: "Volkswagen", dot: "bg-blue-500", text: "text-blue-400", ring: "ring-blue-500" },
  { id: "audi", label: "Audi", dot: "bg-red-500", text: "text-red-400", ring: "ring-red-500" },
  { id: "porsche", label: "Porsche", dot: "bg-amber-500", text: "text-amber-400", ring: "ring-amber-500" },
  { id: "lamborghini", label: "Lamborghini", dot: "bg-yellow-500", text: "text-yellow-400", ring: "ring-yellow-500" },
  { id: "bentley", label: "Bentley", dot: "bg-green-500", text: "text-green-400", ring: "ring-green-500" },
  { id: "seat", label: "SEAT (0 — Not Sold in India)", dot: "bg-orange-500", text: "text-orange-400", ring: "ring-orange-500" },
  { id: "scania", label: "Scania (Trucks & Buses)", dot: "bg-rose-500", text: "text-rose-400", ring: "ring-rose-500" },
];

function brandMatches(dealership, activeBrands) {
  if (dealership.brand === "both") return activeBrands.length > 0;
  return activeBrands.includes(dealership.brand);
}

function BrandLogo({ brand, size = "sm" }) {
  if (brand === "audi") return <AudiLogo variant="emblem" size={size} />;
  if (brand === "volkswagen") return <VolkswagenLogo variant="emblem" size={size} />;
  if (brand === "porsche") return <PorscheLogo variant="emblem" size={size} />;
  if (brand === "lamborghini") return <LamborghiniLogo variant="emblem" size={size} />;
  if (brand === "bentley") return <BentleyLogo variant="emblem" size={size} />;
  if (brand === "seat") return <SeatLogo variant="emblem" size={size} />;
  if (brand === "scania") return <ScaniaLogo variant="emblem" size={size} />;
  return <SkodaLogo variant="emblem" size={size} />;
}

export const IndiaGroupMap = ({ onSwitchBrand, onOpenDealershipLocator }) => {
  const [activeBrands, setActiveBrands] = useState(["skoda", "volkswagen", "audi", "porsche", "lamborghini", "bentley"]);
  const [selectedState, setSelectedState] = useState(null);

  const toggleBrand = (id) => {
    setActiveBrands((prev) => (prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]));
  };

  const stateStats = useMemo(() => {
    const map = {};
    Object.keys(STATE_MAP_COORDINATES).forEach((state) => {
      const inState = DEALERSHIPS.filter((d) => d.state === state);
      const visible = inState.filter((d) => brandMatches(d, activeBrands));
      const brandsPresent = new Set(inState.map((d) => (d.brand === "both" ? "skoda" : d.brand)));
      map[state] = { total: inState.length, visible: visible.length, brandsPresent: [...brandsPresent] };
    });
    return map;
  }, [activeBrands]);

  const selectedDealerships = useMemo(() => {
    if (!selectedState) return [];
    return DEALERSHIPS.filter((d) => d.state === selectedState && brandMatches(d, activeBrands));
  }, [selectedState, activeBrands]);

  const totalVisible = Object.values(stateStats).reduce((sum, s) => sum + s.visible, 0);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800 text-sky-300 text-[11px] font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" /> Volkswagen Group India Map
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
          One Group, All Across India
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          A stylized, click-to-explore map of Škoda, Volkswagen, Audi, Porsche, Lamborghini, Bentley, and Scania presence across India.
          Toggle brands and click a state to see dealerships. (SEAT is included in the brand toggle for completeness, but has
          zero outlets — it is not officially sold or serviced in India. Scania's truck and bus dealer/workshop network is
          separate from the passenger-car network.)
        </p>
      </div>

      {/* Brand toggles */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {BRANDS.map((b) => {
          const active = activeBrands.includes(b.id);
          return (
            <button
              key={b.id}
              onClick={() => toggleBrand(b.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                active
                  ? "bg-zinc-800 border-zinc-600 text-white shadow-sm"
                  : "bg-zinc-950 border-zinc-800 text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${active ? b.dot : "bg-zinc-700"}`} />
              <BrandLogo brand={b.id} size="sm" />
              {b.label}
            </button>
          );
        })}
        <span className="text-xs text-zinc-500 ml-2">
          {totalVisible} outlets shown across {Object.keys(STATE_MAP_COORDINATES).length} states
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Map */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl bg-zinc-900/60 border border-zinc-800 p-4 aspect-[3/4] max-w-md mx-auto">
            <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-sky-950/30 via-zinc-950/40 to-emerald-950/20 border border-zinc-800/60" />
            {Object.entries(STATE_MAP_COORDINATES).map(([state, coord]) => {
              const stats = stateStats[state];
              const isSelected = selectedState === state;
              const hasVisible = stats.visible > 0;
              const size = Math.min(22, 10 + stats.visible * 2);
              return (
                <button
                  key={state}
                  onClick={() => setSelectedState(isSelected ? null : state)}
                  title={`${state} — ${stats.visible} of ${stats.total} outlets shown`}
                  style={{
                    left: `${coord.x}%`,
                    top: `${coord.y}%`,
                    width: size,
                    height: size,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                    isSelected
                      ? "border-white bg-sky-500 z-20 scale-125 shadow-lg shadow-sky-900/60"
                      : hasVisible
                        ? "border-sky-500/70 bg-sky-500/30 hover:bg-sky-500/50 hover:scale-110 z-10"
                        : "border-zinc-700 bg-zinc-800/40 z-0"
                  }`}
                >
                  {stats.visible > 0 && (
                    <span className="text-[9px] font-black text-white">{stats.visible}</span>
                  )}
                </button>
              );
            })}
            <span className="absolute bottom-2 right-3 text-[9px] text-zinc-600 italic">
              Stylized layout, not to scale
            </span>
          </div>
        </div>

        {/* Side panel */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {selectedState ? (
              <motion.div
                key={selectedState}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-5 space-y-4 h-full"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-sky-400" /> {selectedState}
                    </h3>
                    <p className="text-xs text-zinc-500">
                      {selectedDealerships.length} outlet{selectedDealerships.length !== 1 ? "s" : ""} matching your brand filter
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedState(null)}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                  {selectedDealerships.length === 0 && (
                    <p className="text-xs text-zinc-500 py-6 text-center">
                      No outlets for the selected brand filter in {selectedState}.
                    </p>
                  )}
                  {selectedDealerships.map((d) => (
                    <div
                      key={d.id}
                      className="rounded-xl bg-zinc-950/70 border border-zinc-800 p-3 space-y-1.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <BrandLogo brand={d.brand === "both" ? "skoda" : d.brand} size="sm" />
                          <span className="text-xs font-bold text-white">{d.name}</span>
                        </div>
                        <span className="shrink-0 text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                          {d.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        {d.city}, {d.state} — {d.pinCode}
                      </p>
                      <div className="flex items-center gap-3 text-[10px] text-zinc-500 pt-0.5">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" /> {d.phone}
                        </span>
                        <a
                          href={d.googleMapsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-sky-400 hover:underline"
                        >
                          <Navigation className="w-3 h-3" /> Directions
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {onOpenDealershipLocator && (
                  <button
                    onClick={() => onOpenDealershipLocator(selectedState)}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Open Full Dealership Locator
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl bg-zinc-900/40 border border-dashed border-zinc-800 p-8 h-full flex flex-col items-center justify-center text-center"
              >
                <MapPin className="w-8 h-8 text-zinc-700 mb-3" />
                <p className="text-sm text-zinc-400 font-medium">Click a state on the map</p>
                <p className="text-xs text-zinc-600 mt-1">
                  See which Škoda, Volkswagen, Audi, Porsche, Lamborghini, and Bentley outlets are near you
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
