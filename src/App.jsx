import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroOverview } from "./components/HeroOverview";
import { EnginePerformance } from "./components/EnginePerformance";
import { VariantExplorer } from "./components/VariantExplorer";
import { SafetyDeepDive } from "./components/SafetyDeepDive";
import { ColorVisualizer } from "./components/ColorVisualizer";
import { ConfiguratorBuilder } from "./components/ConfiguratorBuilder";
import { RaceMode } from "./components/RaceMode";
import { UnderTheSkin } from "./components/UnderTheSkin";
import { GroupDNA } from "./components/GroupDNA";
import { GuessTheCar } from "./components/GuessTheCar";
import { EnthusiastGarage } from "./components/EnthusiastGarage";
import { CostCalculator } from "./components/CostCalculator";
import { FAQSection } from "./components/FAQSection";
import { AIAdvisor } from "./components/AIAdvisor";
import { RSPerformance } from "./components/RSPerformance";
import { DealershipLocator } from "./components/DealershipLocator";
import { PerformanceGraphs } from "./components/PerformanceGraphs";
import { EngineSoundGallery } from "./components/EngineSoundGallery";
import { ReliabilityExplorer } from "./components/ReliabilityExplorer";
import { FuelEconomySimulator } from "./components/FuelEconomySimulator";
import { IndiaGroupMap } from "./components/IndiaGroupMap";
import { MadeInIndiaStory } from "./components/MadeInIndiaStory";
import { EngineeringLab } from "./components/EngineeringLab";
import { CarThroughDecades } from "./components/CarThroughDecades";
import { PlatformDetective } from "./components/PlatformDetective";
import { LaunchScreen } from "./components/LaunchScreen";
import { BrandLoadingScreen } from "./components/BrandLoadingScreen";
import {
  RacingHudOverlay,
  GtiThemeOverlay,
  QuattroVizOverlay,
  WolfsburgModeOverlay,
} from "./components/EasterEggOverlays";
import { useEasterEggs } from "./utils/useEasterEggs";
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
import { AudiLogo } from "./components/AudiLogo";
import { PorscheLogo } from "./components/PorscheLogo";
import { LamborghiniLogo } from "./components/LamborghiniLogo";
import { BentleyLogo } from "./components/BentleyLogo";
import { SeatLogo } from "./components/SeatLogo";
import { ScaniaLogo } from "./components/ScaniaLogo";
import { ManLogo } from "./components/ManLogo";

const APP_BRAND_META = {
  skoda: {
    Logo: SkodaLogo,
    accentText: "text-emerald-400",
    accentTextHover: "text-emerald-400 hover:text-emerald-300",
    selectionBg: "selection:bg-emerald-500",
    scrollTopBg: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/90 border-emerald-400/40",
    footerName: "Škoda Auto India",
    footerTagline: "SAVWIPL • European Safety, TSI Turbo-Petrol & TDI Diesel Engineering",
    rsLabel: "The vRS Performance",
    dealershipLabel: "Škoda Dealership Locator (260+)",
    aboutLabel: "About Škoda & Czech History (1895)",
    warrantyLabel: "4-Year / 100,000 km Standard Warranty",
    roadsideLabel: "Škoda 24/7 Roadside Assistance: 1800 123 0955",
    powertrainLabel: "TSI Petrol & TDI Diesel Powertrains",
    lineupLabel: "Kylaq • Slavia • Kushaq • Octavia & Octavia vRS • Kodiaq & Kodiaq vRS • Superb",
    defaultModelId: "octavia",
    defaultGraphModelId: "slavia",
  },
  volkswagen: {
    Logo: VolkswagenLogo,
    accentText: "text-blue-400",
    accentTextHover: "text-blue-400 hover:text-blue-300",
    selectionBg: "selection:bg-blue-600",
    scrollTopBg: "bg-blue-600 hover:bg-blue-500 shadow-blue-950/90 border-blue-400/40",
    footerName: "Volkswagen Passenger Cars India",
    footerTagline: "SAVWIPL • German Engineering, 4EVER Care, TSI Turbo-Petrol & GT Performance",
    rsLabel: "GT & GTI Performance",
    dealershipLabel: "VW Dealership Locator (190+)",
    aboutLabel: "About Volkswagen & Wolfsburg History",
    warrantyLabel: "4EVER Care: 4-Year Warranty / 100,000 km",
    roadsideLabel: "VW 24/7 Roadside Assistance: 1800 102 0909",
    powertrainLabel: "TSI Turbo-Petrol & Active Cylinder Technology",
    lineupLabel: "Virtus & Virtus GT Plus • Taigun & GT Line • Tiguan 4MOTION • Tayron • Golf GTI",
    defaultModelId: "virtus",
    defaultGraphModelId: "virtus",
  },
  audi: {
    Logo: AudiLogo,
    accentText: "text-red-400",
    accentTextHover: "text-red-400 hover:text-red-300",
    selectionBg: "selection:bg-red-600",
    scrollTopBg: "bg-red-600 hover:bg-red-500 shadow-red-950/90 border-red-400/40",
    footerName: "Audi India",
    footerTagline: "Progressive Luxury • quattro All-Wheel Drive, TFSI Turbo-Petrol & Audi Sport RS/S Performance",
    rsLabel: "Audi Sport RS & S Performance",
    dealershipLabel: "Audi Dealership Locator (40+)",
    aboutLabel: "About Audi & Ingolstadt History",
    warrantyLabel: "Audi Advantage: 4-Year Warranty / Unlimited km",
    roadsideLabel: "Audi 24/7 Roadside Assistance: 1800 209 3232",
    powertrainLabel: "TFSI Turbo-Petrol & quattro All-Wheel Drive",
    lineupLabel: "A3 • A4 • A6 • A8 • Q3 • Q5 • Q7 • Q8 • RS5 • RS6 • RS Q8",
    defaultModelId: "a4",
    defaultGraphModelId: "a4",
  },
  porsche: {
    Logo: PorscheLogo,
    accentText: "text-amber-400",
    accentTextHover: "text-amber-400 hover:text-amber-300",
    selectionBg: "selection:bg-amber-500",
    scrollTopBg: "bg-amber-600 hover:bg-amber-500 shadow-amber-950/90 border-amber-400/40",
    footerName: "Porsche India",
    footerTagline: "Direct Market Operations • PDK Dual-Clutch, PTM All-Wheel Drive & Motorsport-Derived Engineering",
    rsLabel: "GT & Turbo Performance",
    dealershipLabel: "Porsche Centre Locator (8+)",
    aboutLabel: "About Porsche & Stuttgart History",
    warrantyLabel: "Porsche Genuine Care: 2-Year Unlimited km Warranty",
    roadsideLabel: "Porsche 24/7 Roadside Assistance: 1800 209 7911",
    powertrainLabel: "Twin-Turbo Flat-6, Flat-4 & V6 Powertrains",
    lineupLabel: "911 Carrera • 911 Carrera S • 718 Cayman • Macan • Macan S • Cayenne • Panamera",
    defaultModelId: "911-carrera",
    defaultGraphModelId: "911-carrera",
  },
  lamborghini: {
    Logo: LamborghiniLogo,
    accentText: "text-yellow-400",
    accentTextHover: "text-yellow-400 hover:text-yellow-300",
    selectionBg: "selection:bg-yellow-500",
    scrollTopBg: "bg-yellow-600 hover:bg-yellow-500 shadow-yellow-950/90 border-yellow-400/40",
    footerName: "Lamborghini India",
    footerTagline: "Direct Market Operations • LDVI Chassis Control, Naturally-Aspirated V10/V12 & Hybrid Engineering",
    rsLabel: "GT & STO Performance",
    dealershipLabel: "Lamborghini Showroom Locator (6+)",
    aboutLabel: "About Lamborghini & Sant'Agata History",
    warrantyLabel: "Lamborghini Unlimited Mileage: 3-Year Warranty",
    roadsideLabel: "Lamborghini 24/7 Roadside Assistance: 1800 209 8811",
    powertrainLabel: "Naturally-Aspirated V10, Twin-Turbo V8 & Hybrid V12 Powertrains",
    lineupLabel: "Huracán EVO • Huracán STO • Urus S • Urus Performante • Revuelto",
    defaultModelId: "huracan",
    defaultGraphModelId: "huracan-sto-perf",
  },
  bentley: {
    Logo: BentleyLogo,
    accentText: "text-green-400",
    accentTextHover: "text-green-400 hover:text-green-300",
    selectionBg: "selection:bg-green-500",
    scrollTopBg: "bg-green-600 hover:bg-green-500 shadow-green-950/90 border-green-400/40",
    footerName: "Bentley India",
    footerTagline: "Direct Market Operations • Bentley Dynamic Ride, Twin-Turbo W12/V8 & Hand-Crafted Crewe Engineering",
    rsLabel: "GT & Speed Performance",
    dealershipLabel: "Bentley Showroom Locator (5+)",
    aboutLabel: "About Bentley & Crewe History",
    warrantyLabel: "Bentley Extended Care: 3-Year Unlimited Mileage Warranty",
    roadsideLabel: "Bentley 24/7 Roadside Assistance: 1800 209 8822",
    powertrainLabel: "Twin-Turbo W12 & Twin-Turbo V8 Powertrains",
    lineupLabel: "Continental GT V8 • Continental GT Speed • Bentayga V8 • Bentayga EWB • Flying Spur W12",
    defaultModelId: "continental-gt",
    defaultGraphModelId: "continental-gt-speed-perf",
  },
  seat: {
    Logo: SeatLogo,
    accentText: "text-orange-400",
    accentTextHover: "text-orange-400 hover:text-orange-300",
    selectionBg: "selection:bg-orange-500",
    scrollTopBg: "bg-orange-600 hover:bg-orange-500 shadow-orange-950/90 border-orange-400/40",
    footerName: "SEAT — Not Sold in India",
    footerTagline: "Not Currently Sold in India • Global Reference Specs Shown for Enthusiast Comparison Only",
    rsLabel: "Cupra Performance Heritage",
    dealershipLabel: "Not Sold in India",
    aboutLabel: "About SEAT & Martorell History",
    warrantyLabel: "No Official Warranty in India (Not Sold Here)",
    roadsideLabel: "No Roadside Assistance Network in India",
    powertrainLabel: "TSI Turbo-Petrol & TDI Diesel Powertrains (Global Spec)",
    lineupLabel: "Ibiza • Arona • Leon • Leon Cupra • Ateca • Tarraco (Global Reference Only)",
    defaultModelId: "leon",
    defaultGraphModelId: "leon-cupra-perf",
  },
  scania: {
    Logo: ScaniaLogo,
    accentText: "text-rose-400",
    accentTextHover: "text-rose-400 hover:text-rose-300",
    selectionBg: "selection:bg-rose-500",
    scrollTopBg: "bg-rose-600 hover:bg-rose-500 shadow-rose-950/90 border-rose-400/40",
    footerName: "Scania India",
    footerTagline: "Narsapura Manufacturing • Scania Super Combustion System, Opticruise AMT & Modular Truck/Bus Architecture",
    rsLabel: "Flagship Powertrain & Heavy-Duty Performance",
    dealershipLabel: "Scania Dealer & Workshop Locator (5+)",
    aboutLabel: "About Scania & Södertälje History",
    warrantyLabel: "Scania India Dealer Warranty & Fleet Service Contracts",
    roadsideLabel: "Scania Assistance 24/7 Breakdown Support: 1800 209 9944",
    powertrainLabel: "13L Scania Super Inline-6 & 16L Twin-Turbo V8 Diesel Powertrains",
    lineupLabel: "R 500 • S 730 • Citywide • Metrolink",
    defaultModelId: "scania-r-500",
    defaultGraphModelId: "scania-r-500",
  },
  man: {
    Logo: ManLogo,
    accentText: "text-sky-400",
    accentTextHover: "text-sky-400 hover:text-sky-300",
    selectionBg: "selection:bg-sky-500",
    scrollTopBg: "bg-sky-600 hover:bg-sky-500 shadow-sky-950/90 border-sky-400/40",
    footerName: "MAN Trucks India",
    footerTagline: "Pithampur Manufacturing • MAN D26/D38 Common-Rail Diesel Engines, TipMatic AMT & TRATON Modular Architecture",
    rsLabel: "Flagship Powertrain & Heavy-Haulage Performance",
    dealershipLabel: "MAN Dealer & Workshop Locator (4+)",
    aboutLabel: "About MAN & Augsburg History",
    warrantyLabel: "MAN Trucks India Dealer Warranty & Fleet Service Contracts",
    roadsideLabel: "MAN Assistance 24/7 Breakdown Support: 1800 209 6262",
    powertrainLabel: "12.9L MAN D26 Inline-6 & 15.2L D38 Common-Rail V8 Diesel Powertrains",
    lineupLabel: "TGS • TGX • Lion's City • Lion's Coach",
    defaultModelId: "man-tgx",
    defaultGraphModelId: "man-tgx",
  },
};

export default function App() {
  const [activeBrand, setActiveBrand] = useState("skoda");
  const [activeTab, setActiveTab] = useState("overview");
  const [hasEntered, setHasEntered] = useState(false);
  const [isLoadingBrand, setIsLoadingBrand] = useState(false);
  const [pendingBrand, setPendingBrand] = useState(null);
  const [selectedModelId, setSelectedModelId] = useState("all");
  const [advisorPrompt, setAdvisorPrompt] = useState();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { racingHud, gtiTheme, quattroViz, wolfsburgMode, registerLogoClick } = useEasterEggs();
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
    if (brand === activeBrand) return;
    setPendingBrand(brand);
    setIsLoadingBrand(true);
  };
  const handleEnterSite = (brand) => {
    setPendingBrand(brand);
    setIsLoadingBrand(true);
  };
  useEffect(() => {
    if (!isLoadingBrand || !pendingBrand) return;
    const timer = setTimeout(() => {
      setActiveBrand(pendingBrand);
      setSelectedModelId("all");
      // Every brand switch — whether a fresh entry from the launch screen
      // or switching brands mid-session — lands on that brand's homepage
      // (overview tab) rather than keeping whatever tab was active.
      setActiveTab("overview");
      setHasEntered(true);
      setIsLoadingBrand(false);
      scrollToTop();
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingBrand, pendingBrand]);
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
  const appMeta = APP_BRAND_META[activeBrand] || APP_BRAND_META.skoda;
  const defaultModelId = appMeta.defaultModelId;
  const defaultGraphModelId = appMeta.defaultGraphModelId;

  if (!hasEntered) {
    return (
      <AnimatePresence mode="wait">
        {isLoadingBrand ? (
          <motion.div
            key="brand-loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <BrandLoadingScreen brand={pendingBrand} durationMs={5000} />
          </motion.div>
        ) : (
          <motion.div
            key="launch-screen"
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35 }}
          >
            <LaunchScreen onEnter={handleEnterSite} />
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      key="main-site"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased ${appMeta.selectionBg} selection:text-white relative`}
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
      <main className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-12">
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
                    selectedModelId !== "all" ? selectedModelId : defaultModelId
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
                  selectedModelId !== "all" ? selectedModelId : defaultModelId
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

          {activeTab === "race" && (
            <motion.div
              key={`tab-race-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <RaceMode brand={activeBrand} />
            </motion.div>
          )}

          {activeTab === "underskin" && (
            <motion.div
              key="tab-underskin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <UnderTheSkin brand={activeBrand} onSwitchBrand={handleBrandChange} />
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
                    : defaultGraphModelId
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
                brand={activeBrand}
                onExploreSkodaHistory={() => handleTabChange("about")}
                onExploreLineup={() => handleTabChange("models")}
              />
            </motion.div>
          )}

          {activeTab === "dna" && (
            <motion.div
              key="tab-dna"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <GroupDNA />
            </motion.div>
          )}

          {activeTab === "guessgame" && (
            <motion.div
              key="tab-guessgame"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <GuessTheCar />
            </motion.div>
          )}

          {activeTab === "garage" && (
            <motion.div
              key="tab-garage"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <EnthusiastGarage />
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

          {activeTab === "configurator" && (
            <motion.div
              key={`tab-configurator-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ConfiguratorBuilder
                brand={activeBrand}
                onSwitchBrand={handleBrandChange}
                onOpenAdvisor={handleOpenAdvisor}
              />
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
                  selectedModelId !== "all" ? selectedModelId : defaultModelId
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

          {activeTab === "enginesounds" && (
            <motion.div
              key="tab-enginesounds"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <EngineSoundGallery />
            </motion.div>
          )}

          {activeTab === "reliability" && (
            <motion.div
              key="tab-reliability"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ReliabilityExplorer />
            </motion.div>
          )}

          {activeTab === "fueleconomy" && (
            <motion.div
              key={`tab-fueleconomy-${activeBrand}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FuelEconomySimulator
                brand={activeBrand}
                initialModelId={
                  selectedModelId !== "all" ? selectedModelId : defaultModelId
                }
                onOpenCalculator={handleOpenCalculator}
              />
            </motion.div>
          )}

          {activeTab === "indiamap" && (
            <motion.div
              key="tab-indiamap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <IndiaGroupMap onOpenDealershipLocator={() => handleTabChange("dealerships")} />
            </motion.div>
          )}

          {activeTab === "madeinindia" && (
            <motion.div
              key="tab-madeinindia"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <MadeInIndiaStory onOpenMap={() => handleTabChange("indiamap")} />
            </motion.div>
          )}

          {activeTab === "lab" && (
            <motion.div
              key="tab-lab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <EngineeringLab />
            </motion.div>
          )}

          {activeTab === "decades" && (
            <motion.div
              key="tab-decades"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CarThroughDecades />
            </motion.div>
          )}

          {activeTab === "platformdetective" && (
            <motion.div
              key="tab-platformdetective"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <PlatformDetective />
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
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={registerLogoClick}
              title="Psst..."
            >
              <appMeta.Logo variant="full" size="md" animated={true} />
              <div className="border-l border-zinc-800 pl-3">
                <p className="font-bold text-white text-sm">{appMeta.footerName}</p>
                <p className="text-[11px] text-zinc-400">{appMeta.footerTagline}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-zinc-300 text-xs">
              <span
                onClick={() => handleTabChange("rs")}
                className="flex items-center gap-1.5 cursor-pointer text-red-400 hover:text-red-300 font-bold transition-colors"
              >
                <Flame className="w-4 h-4 text-red-500" /> {appMeta.rsLabel}
              </span>
              <span
                onClick={() => handleTabChange("graphs")}
                className={`flex items-center gap-1.5 cursor-pointer ${appMeta.accentTextHover} font-bold transition-colors`}
              >
                <Activity className="w-4 h-4" /> Performance Graphs
              </span>
              <span
                onClick={() => handleTabChange("dealerships")}
                className={`flex items-center gap-1.5 cursor-pointer font-bold transition-colors ${appMeta.accentTextHover}`}
              >
                <MapPin className={`w-4 h-4 ${appMeta.accentText}`} /> {appMeta.dealershipLabel}
              </span>
              <span
                onClick={() => handleTabChange("about")}
                className={`flex items-center gap-1.5 cursor-pointer ${appMeta.accentTextHover} font-bold transition-colors`}
              >
                <HistoryIcon className="w-4 h-4" /> {appMeta.aboutLabel}
              </span>
              <span
                onClick={() => handleTabChange("vwgroup")}
                className="flex items-center gap-1.5 cursor-pointer text-sky-400 hover:text-sky-300 font-bold transition-colors"
              >
                <Globe2 className="w-4 h-4 text-sky-400" /> Proud to be VW Group
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className={`w-4 h-4 ${appMeta.accentText}`} />
                {appMeta.warrantyLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className={`w-4 h-4 ${appMeta.accentText}`} />
                {appMeta.roadsideLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <Fuel className="w-4 h-4 text-amber-400" />
                {appMeta.powertrainLabel}
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
                Škoda • Volkswagen • Audi • Porsche • Lamborghini • Bentley • SEAT • Scania • MAN. Pioneering
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
              <p className="tracking-wide hidden md:block">{appMeta.lineupLabel}</p>
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

      {/* Hidden Easter Eggs: type "DSG", "GTI", or "QUATTRO" anywhere, or click the footer logo 7 times */}
      <RacingHudOverlay active={racingHud} />
      <GtiThemeOverlay active={gtiTheme} />
      <QuattroVizOverlay active={quattroViz} />
      <WolfsburgModeOverlay active={wolfsburgMode} />

      {/* Mid-session brand switch: replay the loading screen over the current page */}
      <AnimatePresence>
        {isLoadingBrand && (
          <motion.div
            key="brand-switch-loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[400]"
          >
            <BrandLoadingScreen brand={pendingBrand} durationMs={5000} />
          </motion.div>
        )}
      </AnimatePresence>

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
            className={`fixed bottom-6 right-6 z-50 p-3 sm:px-4 sm:py-3 rounded-2xl ${appMeta.scrollTopBg} text-white shadow-2xl border flex items-center gap-2 group cursor-pointer transition-all hover:scale-105 active:scale-95`}
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-xs font-bold hidden sm:inline">
              Back to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
