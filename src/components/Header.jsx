import { useState, useRef, useEffect } from "react";
import {
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  Flame,
  ChevronDown,
  Check,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
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
  const handleSelectBrand = (brand) => {
    if (brand !== activeBrand) {
      setActiveBrand(brand);
      setSelectedModelId("all");
    }
    setIsBrandDropdownOpen(false);
  };
  const isVW = activeBrand === "volkswagen";
  const currentModels = isVW ? VW_MODELS : SKODA_MODELS;
  const navItems = [
    { id: "overview", label: "Portfolio Overview" },
    { id: "models", label: "Models & Trims" },
    {
      id: "rs",
      label: isVW ? "GT & GTI Performance" : "The Rs Performance",
      isHot: true,
    },
    { id: "graphs", label: "Performance Graphs" },
    { id: "dealerships", label: "Dealership Locator" },
    { id: "engines", label: "TSI & TDI Engines" },
    { id: "safety", label: "5-Star Safety" },
    { id: "about", label: isVW ? "About Volkswagen" : "About \u0160koda" },
    { id: "vwgroup", label: "Proud to be VW Group" },
    { id: "visualizer", label: "Color Explorer" },
    { id: "calculator", label: "Price & EMI" },
    {
      id: "advisor",
      label: isVW ? "AI Volkswagen Advisor" : "AI \u0160koda Advisor",
    },
    { id: "faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 text-zinc-100 shadow-lg shadow-black/40">
      {/* Corporate Top Strip for Škoda Auto Volkswagen India Pvt. Ltd. */}
      <div className="bg-zinc-900/95 border-b border-zinc-800/80 text-[11px] text-zinc-400 py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              onClick={() => setActiveTab("vwgroup")}
              className="font-bold text-white tracking-wide flex items-center gap-1.5 cursor-pointer hover:text-blue-300 transition-colors"
            >
              <span
                className={`w-2 h-2 rounded-full inline-block animate-pulse ${isVW ? "bg-blue-400" : "bg-emerald-400"}`}
              />
              Škoda Auto Volkswagen India Private Limited (SAVWIPL)
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span
              onClick={() => setActiveTab("about")}
              className={`hover:underline hidden sm:inline cursor-pointer font-medium transition-colors ${isVW ? "text-blue-400" : "text-emerald-400"}`}
            >
              {isVW
                ? "Wolfsburg, Germany (Est. 1937)"
                : "Mlad\xE1 Boleslav, Czech Republic (Est. 1895)"}
            </span>
            <span className="text-zinc-600 hidden md:inline">•</span>
            <span className="text-zinc-400 hidden md:inline">
              Chakan (Pune) & Aurangabad Plants
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px]">
            <span
              onClick={() => setActiveTab("vwgroup")}
              className="text-blue-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              Active Brands:
            </span>
            <button
              onClick={() => handleSelectBrand("skoda")}
              className={`font-bold transition-all px-2 py-0.5 rounded cursor-pointer ${!isVW ? "bg-emerald-950/90 text-emerald-300 border border-emerald-700" : "text-zinc-400 hover:text-emerald-300"}`}
            >
              Škoda India
            </button>
            <span className="text-zinc-600">|</span>
            <button
              onClick={() => handleSelectBrand("volkswagen")}
              className={`font-bold transition-all px-2 py-0.5 rounded cursor-pointer ${isVW ? "bg-blue-950/90 text-blue-300 border border-blue-700" : "text-zinc-400 hover:text-blue-300"}`}
            >
              Volkswagen India
            </button>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Brand Row with Interactive Brand Switcher Dropdown in Top Left */}
        <div className="flex items-center justify-between h-16 border-b border-zinc-900/80">
          {/* Top Left: Interactive Brand Dropdown Selector */}
          <div className="relative flex items-center gap-3" ref={dropdownRef}>
            <div className="relative">
              <button
                id="btn-brand-switcher-dropdown"
                onClick={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)}
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer shadow-md group ${isVW ? "bg-blue-950/40 hover:bg-blue-950/70 border-blue-800/80 hover:border-blue-700" : "bg-emerald-950/40 hover:bg-emerald-950/70 border-emerald-800/80 hover:border-emerald-700"}`}
                title="Click to toggle between Škoda India and Volkswagen India"
              >
                {isVW ? (
                  <VolkswagenLogo variant="full" size="md" animated={true} />
                ) : (
                  <SkodaLogo variant="full" size="md" animated={true} />
                )}
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
                    className="absolute left-0 top-full mt-2 w-72 sm:w-80 rounded-2xl bg-zinc-900 border border-zinc-700/90 shadow-2xl p-2 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-2 border-b border-zinc-800 mb-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                          Select Active Brand
                        </span>
                        <span className="text-[10px] text-zinc-500">
                          SAVWIPL Group
                        </span>
                      </div>
                    </div>

                    {/* Škoda India Option */}
                    <button
                      id="opt-switch-brand-skoda"
                      onClick={() => handleSelectBrand("skoda")}
                      className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer ${!isVW ? "bg-emerald-950/60 border border-emerald-700/70 text-white" : "hover:bg-zinc-800/80 text-zinc-300 border border-transparent"}`}
                    >
                      <div className="p-1 rounded-lg bg-zinc-950/80 border border-zinc-800 shrink-0 mt-0.5">
                        <SkodaLogo variant="emblem" size="md" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-white">
                            Škoda Auto India
                          </span>
                          {!isVW && (
                            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800">
                              <Check className="w-3 h-3" /> Active
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-emerald-400/90 mt-0.5">
                          Simply Clever • Czech Heritage 1895
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-1 truncate">
                          Kylaq, Slavia, Kushaq, Octavia, Kodiaq, Superb
                        </p>
                      </div>
                    </button>

                    {/* Volkswagen India Option */}
                    <button
                      id="opt-switch-brand-vw"
                      onClick={() => handleSelectBrand("volkswagen")}
                      className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer mt-1 ${isVW ? "bg-blue-950/60 border border-blue-700/70 text-white" : "hover:bg-zinc-800/80 text-zinc-300 border border-transparent"}`}
                    >
                      <div className="p-1 rounded-lg bg-zinc-950/80 border border-zinc-800 shrink-0 mt-0.5">
                        <VolkswagenLogo variant="emblem" size="md" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-white">
                            Volkswagen India
                          </span>
                          {isVW && (
                            <span className="flex items-center gap-1 text-[10px] font-bold text-blue-400 bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-800">
                              <Check className="w-3 h-3" /> Active
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-blue-400/90 mt-0.5">
                          Das Auto • German Engineering 1937
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-1 truncate">
                          Virtus, Taigun, Tiguan, Golf GTI, Polo GT, Tayron
                        </p>
                      </div>
                    </button>

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
              <p
                className={`text-[11px] font-semibold tracking-wider uppercase ${isVW ? "text-blue-400" : "text-emerald-400"}`}
              >
                {isVW
                  ? "Volkswagen Passenger Cars India"
                  : "\u0160koda Auto Volkswagen India Pvt. Ltd."}
              </p>
              <p className="text-xs text-zinc-400">
                {isVW
                  ? "German Engineering, TSI EVO Powertrains & GT / GTI Performance"
                  : "European Safety, TSI & TDI Powertrains & The Rs Performance"}
              </p>
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
              <span className="font-black italic">
                {isVW
                  ? "GT & GTI Performance (265 PS)"
                  : "The Rs Performance (265 PS)"}
              </span>
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
            >
              <ShieldCheck
                className={`w-3.5 h-3.5 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
              />
              <span>100% 5-Star Safety Pedigree</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>TSI Turbo Petrol & DSG</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-sm"
            >
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>
                {isVW ? "4EVER Care Package" : "4-Yr Peace of Mind Warranty"}
              </span>
            </motion.div>
          </div>

          {/* AI Advisor Quick Button for mobile/tablet */}
          <div className="flex lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("advisor")}
              className={`px-3 py-1.5 rounded-lg text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm ${isVW ? "bg-blue-600 hover:bg-blue-500 shadow-blue-900/40" : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/40"}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Advisor</span>
            </motion.button>
          </div>
        </div>

        {/* Model Selector Bar & Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 overflow-x-auto scrollbar-none">
          {/* Car Lineup Switcher */}
          <div className="flex items-center gap-1.5 text-xs overflow-x-auto scrollbar-none py-1">
            <span className="text-zinc-400 font-medium text-[11px] whitespace-nowrap mr-1 flex items-center gap-1">
              <span
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${isVW ? "bg-blue-500" : "bg-emerald-500"}`}
              />
              {isVW ? "VW Lineup:" : "\u0160koda Lineup:"}
            </span>
            <button
              id="btn-filter-all-models"
              onClick={() => setSelectedModelId("all")}
              className={`relative px-2.5 py-1 rounded-md font-medium text-xs whitespace-nowrap transition-all ${selectedModelId === "all" ? (isVW ? "bg-blue-600 text-white shadow-md shadow-blue-950" : "bg-emerald-600 text-white shadow-md shadow-emerald-950") : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800"}`}
            >
              All Models ({currentModels.length})
            </button>
            {currentModels.map((car) => {
              const isSelected = selectedModelId === car.id;
              const shortName = car.name
                .replace("\u0160koda ", "")
                .replace("Volkswagen ", "");
              return (
                <button
                  key={car.id}
                  id={`btn-model-${car.id}`}
                  onClick={() => setSelectedModelId(car.id)}
                  className={`relative px-2.5 py-1 rounded-md font-medium text-xs whitespace-nowrap transition-all ${isSelected ? (isVW ? "bg-blue-600 text-white shadow-md shadow-blue-950 font-semibold" : "bg-emerald-600 text-white shadow-md shadow-emerald-950 font-semibold") : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700"}`}
                >
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
                </button>
              );
            })}
          </div>

          {/* Section Tabs with Animated Indicator */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors z-10 ${isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="header-active-tab-pill"
                      className={`absolute inset-0 rounded-md border -z-10 shadow-sm ${isVW ? "bg-blue-950/80 border-blue-800" : "bg-zinc-800 border-zinc-700"}`}
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.label}
                  {item.isHot && (
                    <span className="ml-1.5 px-1 py-0.2 rounded bg-red-600 text-white text-[9px] font-black italic tracking-wider shadow-sm shadow-red-900/50">
                      {isVW ? "GT/GTI" : "vRS"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
