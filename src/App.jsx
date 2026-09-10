import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroOverview } from "./components/HeroOverview";
import { EnginePerformance } from "./components/EnginePerformance";
import { VariantExplorer } from "./components/VariantExplorer";
import { SafetyDeepDive } from "./components/SafetyDeepDive";
import { ColorVisualizer } from "./components/ColorVisualizer";
import { CostCalculator } from "./components/CostCalculator";
import { FAQSection } from "./components/FAQSection";
import { AIAdvisor } from "./components/AIAdvisor";
import { RSPerformance } from "./components/RSPerformance";
import { DealershipLocator } from "./components/DealershipLocator";
import { PerformanceGraphs } from "./components/PerformanceGraphs";
import { AboutSkodaHistory } from "./components/AboutSkodaHistory";
import { VolkswagenGroupProud } from "./components/VolkswagenGroupProud";
import {
  ShieldCheck,
  HeartHandshake,
  Fuel,
  Flame,
  MapPin,
  Activity,
  History as HistoryIcon,
  Globe2,
  ArrowUp,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SkodaLogo } from "./components/SkodaLogo";
import { VolkswagenLogo } from "./components/VolkswagenLogo";
export default function App() {
  const [activeBrand, setActiveBrand] = useState("skoda");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedModelId, setSelectedModelId] = useState("all");
  const [advisorPrompt, setAdvisorPrompt] = useState();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (document.documentElement) {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    if (document.body) {
      document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollToTop();
  }, [activeTab]);
  const handleBrandChange = (brand) => {
    setActiveBrand(brand);
    setSelectedModelId("all");
    scrollToTop();
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    scrollToTop();
  };
  const handleExploreVariants = (modelId) => {
    if (modelId) {
      setSelectedModelId(modelId);
    }
    handleTabChange("models");
  };
  const handleOpenCalculator = (modelId) => {
    if (modelId) {
      setSelectedModelId(modelId);
    }
    handleTabChange("calculator");
  };
  const handleOpenAdvisor = (prompt) => {
    if (prompt) {
      setAdvisorPrompt(prompt);
    }
    handleTabChange("advisor");
  };
  const isVW = activeBrand === "volkswagen";
  return (
    <div
      className={`min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased ${isVW ? "selection:bg-blue-600" : "selection:bg-emerald-500"} selection:text-white relative`}
    >
      {/* Top Navigation */}
      <Header
        activeBrand={activeBrand}
        setActiveBrand={handleBrandChange}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        selectedModelId={selectedModelId}
        setSelectedModelId={setSelectedModelId}
      />

      {/* Main Content Area with Fluid Animated Transitions */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-12">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key={`tab-overview-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <HeroOverview
                brand={activeBrand}
                selectedModelId={selectedModelId}
                setSelectedModelId={setSelectedModelId}
                onExploreVariants={handleExploreVariants}
                onExploreEngines={() => handleTabChange("engines")}
                onOpenCalculator={handleOpenCalculator}
                onOpenAdvisor={() => handleTabChange("advisor")}
                onOpenRS={() => handleTabChange("rs")}
                onOpenGraphs={() => handleTabChange("graphs")}
                onOpenDealerships={() => handleTabChange("dealerships")}
                onOpenAbout={() => handleTabChange("about")}
                onOpenVWGroup={() => handleTabChange("vwgroup")}
              />
              <div className="border-t border-zinc-800/80 pt-10">
                <VariantExplorer
                  brand={activeBrand}
                  initialModelId={
                    selectedModelId !== "all"
                      ? selectedModelId
                      : isVW
                        ? "virtus"
                        : "octavia"
                  }
                />
              </div>
              <div className="border-t border-zinc-800/80 pt-10">
                <EnginePerformance
                  brand={activeBrand}
                  onViewDynoGraphs={() => handleTabChange("graphs")}
                />
              </div>
              <div className="border-t border-zinc-800/80 pt-10">
                <SafetyDeepDive brand={activeBrand} />
              </div>
            </motion.div>
          )}

          {activeTab === "models" && (
            <motion.div
              key={`tab-models-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <VariantExplorer
                brand={activeBrand}
                initialModelId={
                  selectedModelId !== "all"
                    ? selectedModelId
                    : isVW
                      ? "virtus"
                      : "octavia"
                }
              />
            </motion.div>
          )}

          {activeTab === "rs" && (
            <motion.div
              key={`tab-rs-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <RSPerformance
                brand={activeBrand}
                onOpenAdvisor={handleOpenAdvisor}
                onOpenCalculator={handleOpenCalculator}
              />
            </motion.div>
          )}

          {activeTab === "graphs" && (
            <motion.div
              key={`tab-graphs-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <PerformanceGraphs
                brand={activeBrand}
                initialModelId={
                  selectedModelId !== "all"
                    ? selectedModelId
                    : isVW
                      ? "virtus"
                      : "slavia"
                }
                onSelectModel={(modelId) => setSelectedModelId(modelId)}
              />
            </motion.div>
          )}

          {activeTab === "dealerships" && (
            <motion.div
              key={`tab-dealerships-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <DealershipLocator
                brand={activeBrand}
                onBookTestDriveDirect={(model) => {
                  setSelectedModelId(model.toLowerCase());
                }}
              />
            </motion.div>
          )}

          {activeTab === "engines" && (
            <motion.div
              key={`tab-engines-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <EnginePerformance
                brand={activeBrand}
                onViewDynoGraphs={() => handleTabChange("graphs")}
              />
            </motion.div>
          )}

          {activeTab === "safety" && (
            <motion.div
              key={`tab-safety-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <SafetyDeepDive brand={activeBrand} />
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div
              key={`tab-about-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AboutSkodaHistory
                brand={activeBrand}
                onExploreVWGroup={() => handleTabChange("vwgroup")}
                onExploreLineup={() => handleTabChange("models")}
              />
            </motion.div>
          )}

          {activeTab === "vwgroup" && (
            <motion.div
              key="tab-vwgroup"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <VolkswagenGroupProud
                onExploreSkodaHistory={() => handleTabChange("about")}
                onExploreLineup={() => handleTabChange("models")}
              />
            </motion.div>
          )}

          {activeTab === "visualizer" && (
            <motion.div
              key={`tab-visualizer-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ColorVisualizer brand={activeBrand} />
            </motion.div>
          )}

          {activeTab === "calculator" && (
            <motion.div
              key={`tab-calculator-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CostCalculator
                brand={activeBrand}
                initialModelId={
                  selectedModelId !== "all"
                    ? selectedModelId
                    : isVW
                      ? "virtus"
                      : "octavia"
                }
              />
            </motion.div>
          )}

          {activeTab === "advisor" && (
            <motion.div
              key={`tab-advisor-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AIAdvisor brand={activeBrand} initialPrompt={advisorPrompt} />
            </motion.div>
          )}

          {activeTab === "faq" && (
            <motion.div
              key={`tab-faq-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FAQSection brand={activeBrand} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Section */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 mt-16 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {isVW ? (
                <VolkswagenLogo variant="full" size="md" animated={true} />
              ) : (
                <SkodaLogo variant="full" size="md" animated={true} />
              )}
              <div className="border-l border-zinc-800 pl-3">
                <p className="font-bold text-white text-sm">
                  {isVW
                    ? "Volkswagen Passenger Cars India"
                    : "\u0160koda Auto India"}
                </p>
                <p className="text-[11px] text-zinc-400">
                  {isVW
                    ? "SAVWIPL \u2022 German Engineering, 4EVER Care, TSI Turbo-Petrol & GT Performance"
                    : "SAVWIPL \u2022 European Safety, TSI Turbo-Petrol & TDI Diesel Engineering"}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-zinc-300 text-xs">
              <span
                onClick={() => handleTabChange("rs")}
                className="flex items-center gap-1.5 cursor-pointer text-red-400 hover:text-red-300 font-bold transition-colors"
              >
                <Flame className="w-4 h-4 text-red-500" />{" "}
                {isVW ? "GT & GTI Performance" : "The vRS Performance"}
              </span>
              <span
                onClick={() => handleTabChange("graphs")}
                className={`flex items-center gap-1.5 cursor-pointer ${isVW ? "text-blue-400 hover:text-blue-300" : "text-emerald-400 hover:text-emerald-300"} font-bold transition-colors`}
              >
                <Activity className="w-4 h-4" /> Performance Graphs
              </span>
              <span
                onClick={() => handleTabChange("dealerships")}
                className={`flex items-center gap-1.5 cursor-pointer font-bold transition-colors ${isVW ? "text-blue-400 hover:text-blue-300" : "text-emerald-400 hover:text-emerald-300"}`}
              >
                <MapPin
                  className={`w-4 h-4 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                />{" "}
                {isVW
                  ? "VW Dealership Locator (190+)"
                  : "\u0160koda Dealership Locator (260+)"}
              </span>
              <span
                onClick={() => handleTabChange("about")}
                className={`flex items-center gap-1.5 cursor-pointer ${isVW ? "text-blue-400 hover:text-blue-300" : "text-emerald-400 hover:text-emerald-300"} font-bold transition-colors`}
              >
                <HistoryIcon className="w-4 h-4" />{" "}
                {isVW
                  ? "About Volkswagen & Wolfsburg History"
                  : "About \u0160koda & Czech History (1895)"}
              </span>
              <span
                onClick={() => handleTabChange("vwgroup")}
                className="flex items-center gap-1.5 cursor-pointer text-sky-400 hover:text-sky-300 font-bold transition-colors"
              >
                <Globe2 className="w-4 h-4 text-sky-400" /> Proud to be VW Group
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck
                  className={`w-4 h-4 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                />
                {isVW
                  ? "4EVER Care: 4-Year Warranty / 100,000 km"
                  : "4-Year / 100,000 km Standard Warranty"}
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake
                  className={`w-4 h-4 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                />
                {isVW
                  ? "VW 24/7 Roadside Assistance: 1800 102 0909"
                  : "\u0160koda 24/7 Roadside Assistance: 1800 123 0955"}
              </span>
              <span className="flex items-center gap-1.5">
                <Fuel className="w-4 h-4 text-amber-400" />
                {isVW
                  ? "TSI Turbo-Petrol & Active Cylinder Technology"
                  : "TSI Petrol & TDI Diesel Powertrains"}
              </span>
            </div>
          </div>

          {/* Corporate Manufacturing & Facility Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400">
            <div>
              <p className="font-bold text-white mb-1">
                Corporate & Manufacturing Headquarters
              </p>
              <p>
                Plot No. E-1, MIDC Industrial Area, Phase III, Village Nigoje,
                Maval, Chakan, Pune – 410501, Maharashtra, India.
              </p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">
                Assembly Facility 2 & Executive Line
              </p>
              <p>
                Plot No. A-1/1, Shendra Industrial Area, MIDC, Chhatrapati
                Sambhaji Nagar (Aurangabad) – 431154, Maharashtra, India.
              </p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">
                Group Synergy & Safety Leadership
              </p>
              <p
                className="cursor-pointer hover:text-sky-300 transition-colors"
                onClick={() => handleTabChange("vwgroup")}
              >
                Škoda • Volkswagen • Audi • Porsche • Lamborghini. Pioneering
                100% 5-Star Bharat NCAP and Global NCAP certified crash
                structures.
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
            <p>
              © {/* @__PURE__ */ new Date().getFullYear()} Škoda Auto Volkswagen
              India Pvt. Ltd. (CIN: U70102PN2007FTC133117). All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="tracking-wide hidden md:block">
                {isVW
                  ? "Virtus & Virtus GT Plus \u2022 Taigun & GT Line \u2022 Tiguan 4MOTION \u2022 Tayron \u2022 Golf GTI"
                  : "Kylaq \u2022 Slavia \u2022 Kushaq \u2022 Octavia & Octavia vRS \u2022 Kodiaq & Kodiaq vRS \u2022 Superb"}
              </p>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-emerald-400 text-xs font-semibold transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Scroll to top of website"
            className={`fixed bottom-6 right-6 z-50 p-3 sm:px-4 sm:py-3 rounded-2xl ${isVW ? "bg-blue-600 hover:bg-blue-500 shadow-blue-950/90 border-blue-400/40" : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/90 border-emerald-400/40"} text-white shadow-2xl border flex items-center gap-2 group cursor-pointer transition-all hover:scale-105 active:scale-95`}
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-xs font-bold hidden sm:inline">
              Back to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
