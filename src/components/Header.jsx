import { useState, useRef, useEffect, useCallback } from "react";
import {
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  Flame,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Building2,
  LayoutGrid,
  Car,
  CarFront,
  Truck,
  Activity,
  MapPin,
  Fuel,
  History as HistoryIcon,
  Globe2,
  Palette,
  Calculator,
  HelpCircle,
  Sliders,
  Flag,
  Layers,
  Dna,
  Gamepad2,
  Warehouse,
  Volume2,
  Wrench,
  Map as MapIcon,
  Factory,
  FlaskConical,
  History as DecadesIcon,
  Search,
} from "lucide-react";

// Every model carries a bodyType string ("Compact SUV", "Premium Sedan", ...);
// map it to a small representative icon so the lineup switcher reads at a
// glance instead of being an undifferentiated wall of text.
function bodyTypeIcon(bodyType = "") {
  if (/suv/i.test(bodyType)) return Truck;
  if (/sedan/i.test(bodyType)) return CarFront;
  return Car;
}
import { motion, AnimatePresence } from "motion/react";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { PORSCHE_MODELS } from "../data/porscheData";
import { LAMBORGHINI_MODELS } from "../data/lamborghiniData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";

// Central per-brand metadata — every brand-specific string/class the header
// needs lives here, keyed by brand id, so adding a brand (e.g. Porsche) is
// one new entry instead of hunting down N-way ternary chains.
const BRAND_META = {
  skoda: {
    Logo: SkodaLogo,
    accent: "emerald",
    models: SKODA_MODELS,
    label: "Škoda India",
    corporateLine: "Škoda Auto Volkswagen India Private Limited (SAVWIPL)",
    foundedLine: "Mladá Boleslav, Czech Republic (Est. 1895)",
    plantLine: "Chakan (Pune) & Aurangabad Plants",
    switcherDesc: "Škoda Auto Volkswagen India Pvt. Ltd.",
    techTagline: "European Safety, TSI & TDI Powertrains & The vRS Performance",
    dropdownTitle: "Škoda Auto India",
    dropdownTagline: "Simply Clever • Czech Heritage 1895",
    dropdownModels: "Kylaq, Slavia, Kushaq, Octavia, Kodiaq, Superb",
    rsLabel: "The vRS Performance",
    rsHeaderLabel: "The vRS Performance (265 PS)",
    rsShortBadge: "vRS",
    engineTabLabel: "TSI & TDI Engines",
    safetyLine: "100% 5-Star Safety Pedigree",
    techLine: "TSI Turbo Petrol & DSG",
    careLine: "4-Yr Peace of Mind Warranty",
    aboutLabel: "About Škoda",
    advisorLabel: "AI Škoda Advisor",
    lineupLabel: "Škoda Lineup:",
  },
  volkswagen: {
    Logo: VolkswagenLogo,
    accent: "blue",
    models: VW_MODELS,
    label: "Volkswagen India",
    corporateLine: "Škoda Auto Volkswagen India Private Limited (SAVWIPL)",
    foundedLine: "Wolfsburg, Germany (Est. 1937)",
    plantLine: "Chakan (Pune) & Aurangabad Plants",
    switcherDesc: "Volkswagen Passenger Cars India",
    techTagline: "German Engineering, TSI EVO Powertrains & GT / GTI Performance",
    dropdownTitle: "Volkswagen India",
    dropdownTagline: "Das Auto • German Engineering 1937",
    dropdownModels: "Virtus, Taigun, Tiguan, Golf GTI, Polo GT, Tayron",
    rsLabel: "GT & GTI Performance",
    rsHeaderLabel: "GT & GTI Performance (265 PS)",
    rsShortBadge: "GT/GTI",
    engineTabLabel: "TSI & TDI Engines",
    safetyLine: "100% 5-Star Safety Pedigree",
    techLine: "TSI Turbo Petrol & DSG",
    careLine: "4EVER Care Package",
    aboutLabel: "About Volkswagen",
    advisorLabel: "AI Volkswagen Advisor",
    lineupLabel: "VW Lineup:",
  },
  audi: {
    Logo: AudiLogo,
    accent: "red",
    models: AUDI_MODELS,
    label: "Audi India",
    corporateLine: "Audi India (Volkswagen Group Premium Brand)",
    foundedLine: "Ingolstadt, Germany (Est. 1909)",
    plantLine: "Aurangabad CKD Assembly Plant",
    switcherDesc: "Audi India (Progressive Luxury)",
    techTagline: "Progressive Luxury, quattro All-Wheel Drive & Audi Sport RS/S Performance",
    dropdownTitle: "Audi India",
    dropdownTagline: "Vorsprung durch Technik • Est. 1909",
    dropdownModels: "A3, A4, A6, A8, Q3, Q5, Q7, Q8",
    rsLabel: "Audi Sport RS & S Performance",
    rsHeaderLabel: "Audi Sport RS Performance (600 PS)",
    rsShortBadge: "RS/S",
    engineTabLabel: "TFSI Engines",
    safetyLine: "5-Star Euro NCAP Safety",
    techLine: "TFSI Turbo Petrol & quattro",
    careLine: "Audi Advantage Care Package",
    aboutLabel: "About Audi",
    advisorLabel: "AI Audi Advisor",
    lineupLabel: "Audi Lineup:",
  },
  porsche: {
    Logo: PorscheLogo,
    accent: "amber",
    models: PORSCHE_MODELS,
    label: "Porsche India",
    corporateLine: "Porsche India (Volkswagen Group Sports Car Marque)",
    foundedLine: "Stuttgart, Germany (Est. 1931)",
    plantLine: "Porsche India Direct-Operated Dealer Network",
    switcherDesc: "Porsche India (Direct Market Operations)",
    techTagline: "Motorsport-Derived Engineering, PDK Dual-Clutch & Porsche Traction Management",
    dropdownTitle: "Porsche India",
    dropdownTagline: "There Is No Substitute • Est. 1931",
    dropdownModels: "911 Carrera, 718 Cayman, Macan, Cayenne, Panamera",
    rsLabel: "GT & Turbo Performance",
    rsHeaderLabel: "911 Carrera S Performance (450 PS)",
    rsShortBadge: "GT/S",
    engineTabLabel: "Flat-6 & V6 Engines",
    safetyLine: "5-Star Euro NCAP Safety",
    techLine: "PDK Dual-Clutch & PTM All-Wheel Drive",
    careLine: "Porsche Genuine Care Package",
    aboutLabel: "About Porsche",
    advisorLabel: "AI Porsche Advisor",
    lineupLabel: "Porsche Lineup:",
  },
  lamborghini: {
    Logo: LamborghiniLogo,
    accent: "yellow",
    models: LAMBORGHINI_MODELS,
    label: "Lamborghini India",
    corporateLine: "Lamborghini India (Volkswagen Group Super Sports Car Marque)",
    foundedLine: "Sant'Agata Bolognese, Italy (Est. 1963)",
    plantLine: "Lamborghini India Direct-Operated Showroom Network",
    switcherDesc: "Lamborghini India (Direct Market Operations)",
    techTagline: "LDVI Chassis Control, Naturally-Aspirated V10/V12 & Hybrid Powertrains",
    dropdownTitle: "Lamborghini India",
    dropdownTagline: "Expect the Unexpected • Est. 1963",
    dropdownModels: "Huracán, Urus, Revuelto",
    rsLabel: "GT & STO Performance",
    rsHeaderLabel: "Huracán STO Performance (640 PS)",
    rsShortBadge: "STO",
    engineTabLabel: "V10, V8 & Hybrid V12 Engines",
    safetyLine: "5-Star Euro NCAP Safety",
    techLine: "LDVI Chassis Brain & Torque-Vectoring AWD",
    careLine: "Lamborghini Unlimited Mileage Warranty",
    aboutLabel: "About Lamborghini",
    advisorLabel: "AI Lamborghini Advisor",
    lineupLabel: "Lamborghini Lineup:",
  },
};

const ACCENT_CLASSES = {
  emerald: {
    dot: "bg-emerald-400",
    text: "text-emerald-400",
    pillBg: "bg-gradient-to-r from-emerald-600 to-emerald-500 shadow-emerald-950/60",
    buttonBg: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/40",
    selectedBg: "bg-emerald-600 text-white shadow-md shadow-emerald-950",
    dropdownBg: "bg-emerald-950/40 hover:bg-emerald-950/70 border-emerald-800/80 hover:border-emerald-700",
    divider: "from-transparent via-emerald-500/70 to-transparent",
    scrollEdge: "bg-emerald-950/90 border-emerald-800 text-emerald-300 hover:bg-emerald-900",
    activeOptionBg: "bg-emerald-950/60 border-emerald-700/70 text-white",
    activeOptionBadge: "text-emerald-400 bg-emerald-950/80 border-emerald-800",
    switcherActive: "bg-emerald-950/90 text-emerald-300 border border-emerald-700",
    switcherHover: "hover:text-emerald-300",
  },
  blue: {
    dot: "bg-blue-400",
    text: "text-blue-400",
    pillBg: "bg-gradient-to-r from-blue-600 to-blue-500 shadow-blue-950/60",
    buttonBg: "bg-blue-600 hover:bg-blue-500 shadow-blue-900/40",
    selectedBg: "bg-blue-600 text-white shadow-md shadow-blue-950",
    dropdownBg: "bg-blue-950/40 hover:bg-blue-950/70 border-blue-800/80 hover:border-blue-700",
    divider: "from-transparent via-blue-500/70 to-transparent",
    scrollEdge: "bg-blue-950/90 border-blue-800 text-blue-300 hover:bg-blue-900",
    activeOptionBg: "bg-blue-950/60 border-blue-700/70 text-white",
    activeOptionBadge: "text-blue-400 bg-blue-950/80 border-blue-800",
    switcherActive: "bg-blue-950/90 text-blue-300 border border-blue-700",
    switcherHover: "hover:text-blue-300",
  },
  red: {
    dot: "bg-red-400",
    text: "text-red-400",
    pillBg: "bg-gradient-to-r from-red-600 to-red-500 shadow-red-950/60",
    buttonBg: "bg-red-600 hover:bg-red-500 shadow-red-900/40",
    selectedBg: "bg-red-600 text-white shadow-md shadow-red-950",
    dropdownBg: "bg-red-950/40 hover:bg-red-950/70 border-red-800/80 hover:border-red-700",
    divider: "from-transparent via-red-500/70 to-transparent",
    scrollEdge: "bg-red-950/90 border-red-800 text-red-300 hover:bg-red-900",
    activeOptionBg: "bg-red-950/60 border-red-700/70 text-white",
    activeOptionBadge: "text-red-400 bg-red-950/80 border-red-800",
    switcherActive: "bg-red-950/90 text-red-300 border border-red-700",
    switcherHover: "hover:text-red-300",
  },
  amber: {
    dot: "bg-amber-400",
    text: "text-amber-400",
    pillBg: "bg-gradient-to-r from-amber-600 to-amber-500 shadow-amber-950/60",
    buttonBg: "bg-amber-600 hover:bg-amber-500 shadow-amber-900/40",
    selectedBg: "bg-amber-600 text-white shadow-md shadow-amber-950",
    dropdownBg: "bg-amber-950/40 hover:bg-amber-950/70 border-amber-800/80 hover:border-amber-700",
    divider: "from-transparent via-amber-500/70 to-transparent",
    scrollEdge: "bg-amber-950/90 border-amber-800 text-amber-300 hover:bg-amber-900",
    activeOptionBg: "bg-amber-950/60 border-amber-700/70 text-white",
    activeOptionBadge: "text-amber-400 bg-amber-950/80 border-amber-800",
    switcherActive: "bg-amber-950/90 text-amber-300 border border-amber-700",
    switcherHover: "hover:text-amber-300",
  },
  yellow: {
    dot: "bg-yellow-400",
    text: "text-yellow-400",
    pillBg: "bg-gradient-to-r from-yellow-600 to-yellow-500 shadow-yellow-950/60",
    buttonBg: "bg-yellow-600 hover:bg-yellow-500 shadow-yellow-900/40",
    selectedBg: "bg-yellow-600 text-white shadow-md shadow-yellow-950",
    dropdownBg: "bg-yellow-950/40 hover:bg-yellow-950/70 border-yellow-800/80 hover:border-yellow-700",
    divider: "from-transparent via-yellow-500/70 to-transparent",
    scrollEdge: "bg-yellow-950/90 border-yellow-800 text-yellow-300 hover:bg-yellow-900",
    activeOptionBg: "bg-yellow-950/60 border-yellow-700/70 text-white",
    activeOptionBadge: "text-yellow-400 bg-yellow-950/80 border-yellow-800",
    switcherActive: "bg-yellow-950/90 text-yellow-300 border border-yellow-700",
    switcherHover: "hover:text-yellow-300",
  },
};

const BRAND_ORDER = ["skoda", "volkswagen", "audi", "porsche", "lamborghini"];

// Makes a horizontally-scrollable strip behave properly everywhere:
// vertical mouse-wheel scrolls it sideways, it can be dragged with the
// mouse like a native touch-scroll, and it exposes whether more content
// sits off to either side so arrow affordances can be shown/hidden.
function useHorizontalScroll() {
  const ref = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const updateEdges = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    updateEdges();
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      if (el.scrollWidth <= el.clientWidth) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let dragged = false;
    const onPointerDown = (e) => {
      isDown = true;
      dragged = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
    };
    const onPointerMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 3) dragged = true;
      el.scrollLeft = startScroll - dx;
    };
    const endDrag = () => {
      isDown = false;
    };
    const onClickCapture = (e) => {
      if (dragged) {
        e.stopPropagation();
        e.preventDefault();
        dragged = false;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", updateEdges, { passive: true });
    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    el.addEventListener("click", onClickCapture, true);
    const resizeObserver = new ResizeObserver(updateEdges);
    resizeObserver.observe(el);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", updateEdges);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      el.removeEventListener("click", onClickCapture, true);
      resizeObserver.disconnect();
    };
  }, [updateEdges]);
  const scrollBy = (amount) => {
    ref.current?.scrollBy({ left: amount, behavior: "smooth" });
  };
  return { ref, canScrollLeft, canScrollRight, scrollBy, updateEdges };
}

function ScrollEdgeButton({ direction, onClick, accentClasses, style }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      className={`hidden sm:flex items-center justify-center shrink-0 w-6 h-6 rounded-full border transition-colors z-20 ${accentClasses.scrollEdge}`}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-3.5 h-3.5" />
      ) : (
        <ChevronRight className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

export const Header = ({
  activeBrand,
  setActiveBrand,
  activeTab,
  setActiveTab,
  selectedModelId,
  setSelectedModelId,
}) => {
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsBrandDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const lineupScroll = useHorizontalScroll();
  const navScroll = useHorizontalScroll();
  const activeTabRef = useRef(null);
  const activeModelRef = useRef(null);
  // Scroll only the strip itself (via scrollLeft math), never the native
  // el.scrollIntoView() — that call can walk up and move ANY scrollable
  // ancestor (including ones outside this container), which is what made the
  // bar appear to randomly jump to its start or end. Also only move it when
  // the active item is actually hidden, so clicking a tab that's already
  // visible never disturbs the user's own scroll position.
  const nudgeIntoView = (el, container) => {
    if (!el || !container) return;
    const elLeft = el.offsetLeft;
    const elRight = elLeft + el.offsetWidth;
    const viewLeft = container.scrollLeft;
    const viewRight = viewLeft + container.clientWidth;
    if (elLeft >= viewLeft && elRight <= viewRight) return; // already fully visible
    const target = elLeft + el.offsetWidth / 2 - container.clientWidth / 2;
    const maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollTo({
      left: Math.max(0, Math.min(target, maxScroll)),
      behavior: "smooth",
    });
  };
  useEffect(() => {
    nudgeIntoView(activeTabRef.current, navScroll.ref.current);
  }, [activeTab]);
  useEffect(() => {
    nudgeIntoView(activeModelRef.current, lineupScroll.ref.current);
  }, [selectedModelId]);
  const handleSelectBrand = (brand) => {
    if (brand !== activeBrand) {
      setActiveBrand(brand);
      setSelectedModelId("all");
    }
    setIsBrandDropdownOpen(false);
  };

  const meta = BRAND_META[activeBrand] || BRAND_META.skoda;
  const accentClasses = ACCENT_CLASSES[meta.accent];
  const currentModels = meta.models;
  const BrandLogo = meta.Logo;

  const navItems = [
    { id: "overview", label: "Portfolio Overview", icon: LayoutGrid },
    { id: "models", label: "Models & Trims", icon: Car },
    {
      id: "rs",
      label: meta.rsLabel,
      icon: Flame,
      isHot: true,
    },
    { id: "graphs", label: "Performance Graphs", icon: Activity },
    { id: "race", label: "Race the Group", icon: Flag },
    { id: "underskin", label: "Under the Skin", icon: Layers },
    { id: "dealerships", label: "Dealership Locator", icon: MapPin },
    { id: "engines", label: meta.engineTabLabel, icon: Fuel },
    { id: "safety", label: "5-Star Safety", icon: ShieldCheck },
    { id: "about", label: meta.aboutLabel, icon: HistoryIcon },
    { id: "vwgroup", label: "Proud to be VW Group", icon: Globe2 },
    { id: "dna", label: "DNA of the Group", icon: Dna },
    { id: "guessgame", label: "Guess the Car", icon: Gamepad2 },
    { id: "garage", label: "Enthusiast Garage", icon: Warehouse },
    { id: "enginesounds", label: "Engine Sound Gallery", icon: Volume2 },
    { id: "reliability", label: "What Actually Breaks?", icon: Wrench },
    { id: "fueleconomy", label: "Fuel Economy Simulator", icon: Fuel },
    { id: "indiamap", label: "VW Group India Map", icon: MapIcon },
    { id: "madeinindia", label: "Made in India", icon: Factory },
    { id: "lab", label: "The Lab", icon: FlaskConical },
    { id: "decades", label: "Through the Decades", icon: DecadesIcon },
    { id: "platformdetective", label: "Platform Detective", icon: Search },
    { id: "visualizer", label: "Color Explorer", icon: Palette },
    { id: "configurator", label: "Build Your Car", icon: Sliders },
    { id: "calculator", label: "Price & EMI", icon: Calculator },
    { id: "advisor", label: meta.advisorLabel, icon: Sparkles },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 text-zinc-100 shadow-lg shadow-black/40">
      {/* Corporate Top Strip */}
      <div className="bg-zinc-900/95 border-b border-zinc-800/80 text-[11px] text-zinc-400 py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1680px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              onClick={() => setActiveTab("vwgroup")}
              className="font-bold text-white tracking-wide flex items-center gap-1.5 cursor-pointer hover:text-blue-300 transition-colors"
            >
              <span className={`w-2 h-2 rounded-full inline-block animate-pulse ${accentClasses.dot}`} />
              {meta.corporateLine}
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span
              onClick={() => setActiveTab("about")}
              className={`hover:underline hidden sm:inline cursor-pointer font-medium transition-colors ${accentClasses.text}`}
            >
              {meta.foundedLine}
            </span>
            <span className="text-zinc-600 hidden md:inline">•</span>
            <span className="text-zinc-400 hidden md:inline">{meta.plantLine}</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] flex-wrap">
            <span
              onClick={() => setActiveTab("vwgroup")}
              className="text-blue-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              Active Brands:
            </span>
            {BRAND_ORDER.map((brandId, i) => {
              const m = BRAND_META[brandId];
              const isActive = activeBrand === brandId;
              const c = ACCENT_CLASSES[m.accent];
              return (
                <span key={brandId} className="flex items-center gap-3">
                  {i > 0 && <span className="text-zinc-600">|</span>}
                  <button
                    onClick={() => handleSelectBrand(brandId)}
                    className={`font-bold transition-all px-2 py-0.5 rounded cursor-pointer ${isActive ? c.switcherActive : `text-zinc-400 ${c.switcherHover}`}`}
                  >
                    {m.label}
                  </button>
                </span>
              );
            })}
            <span className="text-zinc-600">|</span>
            <span
              onClick={() => setActiveTab("vwgroup")}
              className="text-zinc-400 cursor-pointer hover:text-white"
            >
              Group Synergy
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Brand Row with Interactive Brand Switcher Dropdown in Top Left */}
        <div className="flex items-center justify-between h-16 border-b border-zinc-900/80">
          {/* Top Left: Interactive Brand Dropdown Selector */}
          <div className="relative flex items-center gap-3" ref={dropdownRef}>
            <div className="relative">
              <button
                id="btn-brand-switcher-dropdown"
                onClick={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)}
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer shadow-md group ${accentClasses.dropdownBg}`}
                title="Click to switch between Škoda, Volkswagen, Audi, Porsche, and Lamborghini India"
              >
                <BrandLogo variant="full" size="md" animated={true} />
                <div className="flex items-center gap-1 pl-1.5 border-l border-zinc-700/60 text-zinc-400 group-hover:text-zinc-200">
                  <span className="text-[10px] font-semibold uppercase tracking-wider hidden sm:inline">
                    Switch
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isBrandDropdownOpen ? "rotate-180 text-white" : ""}`}
                  />
                </div>
              </button>

              {/* Brand Switcher Floating Dropdown Menu */}
              <AnimatePresence>
                {isBrandDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-2 w-[min(18rem,calc(100vw-2rem))] sm:w-80 rounded-2xl bg-zinc-900 border border-zinc-700/90 shadow-2xl p-2 z-50 overflow-hidden max-h-[80vh] overflow-y-auto"
                  >
                    <div className="px-3 py-2 border-b border-zinc-800 mb-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                          Select Active Brand
                        </span>
                        <span className="text-[10px] text-zinc-500">VW Group India</span>
                      </div>
                    </div>

                    {BRAND_ORDER.map((brandId, i) => {
                      const m = BRAND_META[brandId];
                      const c = ACCENT_CLASSES[m.accent];
                      const isActive = activeBrand === brandId;
                      const OptionLogo = m.Logo;
                      return (
                        <button
                          key={brandId}
                          id={`opt-switch-brand-${brandId}`}
                          onClick={() => handleSelectBrand(brandId)}
                          className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer ${i > 0 ? "mt-1" : ""} ${isActive ? `${c.activeOptionBg} border` : "hover:bg-zinc-800/80 text-zinc-300 border border-transparent"}`}
                        >
                          <div className="p-1 rounded-lg bg-zinc-950/80 border border-zinc-800 shrink-0 mt-0.5">
                            <OptionLogo variant="emblem" size="md" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-sm text-white">{m.dropdownTitle}</span>
                              {isActive && (
                                <span className={`flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded border ${c.activeOptionBadge}`}>
                                  <Check className="w-3 h-3" /> Active
                                </span>
                              )}
                            </div>
                            <p className={`text-[11px] mt-0.5 ${c.text}/90`}>{m.dropdownTagline}</p>
                            <p className="text-[10px] text-zinc-400 mt-1 truncate">{m.dropdownModels}</p>
                          </div>
                        </button>
                      );
                    })}

                    {/* Group info footer */}
                    <div className="mt-2 pt-2 border-t border-zinc-800/80 px-2 flex items-center justify-between text-[10px] text-zinc-500">
                      <span>Shared Chakan & Aurangabad hub</span>
                      <button
                        onClick={() => {
                          setIsBrandDropdownOpen(false);
                          setActiveTab("vwgroup");
                        }}
                        className="text-blue-400 hover:underline cursor-pointer font-medium"
                      >
                        Explore Group Synergy →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden md:block pl-3 border-l border-zinc-800">
              <p className={`text-[11px] font-semibold tracking-wider uppercase ${accentClasses.text}`}>
                {meta.switcherDesc}
              </p>
              <p className="text-xs text-zinc-400">{meta.techTagline}</p>
            </div>
          </div>

          {/* Quick Stat Badges with subtle hover animation */}
          <div className="hidden lg:flex items-center gap-3 text-xs">
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={() => setActiveTab("rs")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-950/90 border border-red-800 text-red-300 shadow-sm cursor-pointer hover:bg-red-900/60 transition-colors"
            >
              <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="font-black italic">{meta.rsHeaderLabel}</span>
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
            >
              <ShieldCheck className={`w-3.5 h-3.5 ${accentClasses.text}`} />
              <span>{meta.safetyLine}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>{meta.techLine}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
            >
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>{meta.careLine}</span>
            </motion.div>
          </div>

          {/* AI Advisor Quick Button for mobile/tablet */}
          <div className="flex lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("advisor")}
              className={`px-3 py-1.5 rounded-lg text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm ${accentClasses.buttonBg}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Advisor</span>
            </motion.button>
          </div>
        </div>

        {/* Model Selector Bar & Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2">
          {/* Car Lineup Switcher */}
          <div className="flex items-center gap-1.5 min-w-0">
            <ScrollEdgeButton
              direction="left"
              accentClasses={accentClasses}
              onClick={() => lineupScroll.scrollBy(-160)}
              style={{ visibility: lineupScroll.canScrollLeft ? "visible" : "hidden" }}
            />
            <div
              ref={lineupScroll.ref}
              className="relative flex items-center gap-1.5 text-xs overflow-x-auto scrollbar-none py-1.5 px-1.5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 scroll-fade-x cursor-grab active:cursor-grabbing select-none"
            >
              <span className="text-zinc-400 font-medium text-[11px] whitespace-nowrap mr-1 flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${accentClasses.dot}`} />
                {meta.lineupLabel}
              </span>
              <button
                id="btn-filter-all-models"
                ref={selectedModelId === "all" ? activeModelRef : null}
                onClick={() => setSelectedModelId("all")}
                className={`relative px-2.5 py-1 rounded-md font-medium text-xs whitespace-nowrap transition-all ${selectedModelId === "all" ? accentClasses.selectedBg : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800"}`}
              >
                All Models ({currentModels.length})
              </button>
              {currentModels.map((car) => {
                const isSelected = selectedModelId === car.id;
                const shortName = car.name
                  .replace("Škoda ", "")
                  .replace("Volkswagen ", "")
                  .replace("Audi ", "")
                  .replace("Porsche ", "")
                  .replace("Lamborghini ", "");
                const BodyIcon = bodyTypeIcon(car.bodyType);
                return (
                  <button
                    key={car.id}
                    id={`btn-model-${car.id}`}
                    ref={isSelected ? activeModelRef : null}
                    onClick={() => setSelectedModelId(car.id)}
                    title={car.bodyType}
                    className={`relative flex items-center gap-1 px-2.5 py-1 rounded-md font-medium text-xs whitespace-nowrap transition-all ${isSelected ? `${accentClasses.selectedBg} font-semibold` : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700"}`}
                  >
                    <BodyIcon
                      className={`w-3 h-3 shrink-0 ${isSelected ? "text-white/90" : "text-zinc-500"}`}
                    />
                    {shortName}
                    {car.id === "golf-gti" && (
                      <span className="ml-1 px-1 py-0.2 rounded bg-red-500/20 text-red-300 text-[9px] border border-red-500/30">
                        GTI
                      </span>
                    )}
                    {car.id === "virtus" && (
                      <span className="ml-1 px-1 py-0.2 rounded bg-blue-500/20 text-blue-300 text-[9px] border border-blue-500/30">
                        5-Star
                      </span>
                    )}
                    {car.id === "octavia" && (
                      <span className="ml-1 px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] border border-amber-500/30">
                        Icon
                      </span>
                    )}
                    {car.id === "kylaq" && (
                      <span className="ml-1 px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[9px] border border-emerald-500/30">
                        New
                      </span>
                    )}
                    {car.id === "q8" && (
                      <span className="ml-1 px-1 py-0.2 rounded bg-red-500/20 text-red-300 text-[9px] border border-red-500/30">
                        Halo
                      </span>
                    )}
                    {car.id === "911-carrera" && (
                      <span className="ml-1 px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] border border-amber-500/30">
                        Icon
                      </span>
                    )}
                    {car.notSoldInIndia && (
                      <span
                        title="Not officially sold in India"
                        className="ml-1 px-1 py-0.2 rounded bg-zinc-700/60 text-zinc-300 text-[9px] border border-zinc-600/60"
                      >
                        Not in India
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <ScrollEdgeButton
              direction="right"
              accentClasses={accentClasses}
              onClick={() => lineupScroll.scrollBy(160)}
              style={{ visibility: lineupScroll.canScrollRight ? "visible" : "hidden" }}
            />
          </div>

          {/* Section Tabs with Animated Indicator */}
          <div className="flex items-center gap-1.5 min-w-0">
            <ScrollEdgeButton
              direction="left"
              accentClasses={accentClasses}
              onClick={() => navScroll.scrollBy(-160)}
              style={{ visibility: navScroll.canScrollLeft ? "visible" : "hidden" }}
            />
            <motion.div
              ref={navScroll.ref}
              layoutScroll
              className="relative flex items-center gap-1 p-1 rounded-2xl bg-zinc-900/60 border border-zinc-800/70 overflow-x-auto scrollbar-none scroll-fade-x cursor-grab active:cursor-grabbing select-none"
            >
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    id={`nav-tab-${item.id}`}
                    ref={isActive ? activeTabRef : null}
                    onClick={() => setActiveTab(item.id)}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors z-10 ${isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-100"}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="header-active-tab-pill"
                        className={`absolute inset-0 rounded-xl -z-10 shadow-md ${accentClasses.pillBg}`}
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 30,
                        }}
                      />
                    )}
                    {Icon && (
                      <Icon
                        className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-zinc-500"}`}
                      />
                    )}
                    {item.label}
                    {item.isHot && (
                      <span className="ml-0.5 px-1 py-0.2 rounded bg-red-600 text-white text-[9px] font-black italic tracking-wider shadow-sm shadow-red-900/50">
                        {meta.rsShortBadge}
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
            <ScrollEdgeButton
              direction="right"
              accentClasses={accentClasses}
              onClick={() => navScroll.scrollBy(160)}
              style={{ visibility: navScroll.canScrollRight ? "visible" : "hidden" }}
            />
          </div>
        </div>
      </div>
      <div className={`h-[2px] w-full bg-gradient-to-r ${accentClasses.divider}`} />
    </header>
  );
};
