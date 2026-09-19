import { useState } from "react";
import {
  Globe2,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  ChevronRight,
  Sparkles,
  Car,
  Factory,
  Search,
  CheckCircle2,
  X,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  VW_GROUP_BRANDS,
  VW_GROUP_STATS,
  VW_GROUP_SHARED_TECH,
} from "../data/vwGroupData";
export const VolkswagenGroupProud = ({
  brand = "skoda",
  onExploreSkodaHistory,
  onExploreLineup,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const activeBrandName = isLamborghini ? "Lamborghini" : isPorsche ? "Porsche" : isAudi ? "Audi" : isVW ? "Volkswagen" : "Škoda";
  const activeBrandFoundedYear = isLamborghini ? 1963 : isPorsche ? 1931 : isAudi ? 1909 : isVW ? 1937 : 1895;
  const membershipBlurb = isLamborghini
    ? "Automobili Lamborghini has been part of the Volkswagen Group since 1998, placed under Audi's stewardship, gaining platform-sharing resources and quality-control processes without diluting its raging-bull character."
    : isPorsche
    ? "Porsche AG and Volkswagen AG have been bound together through a complex cross-holding structure since 2012 — Porsche SE holds a majority stake in Volkswagen AG, which in turn owns Porsche AG outright."
    : isAudi
      ? "Since Volkswagen acquired Auto Union in 1964, Audi has stood as the Group’s progressive-technology pillar."
      : isVW
        ? "As the Volkswagen Group’s founding marque since 1937, Volkswagen Passenger Cars remains the core foundation the entire group is built around."
        : "Since joining on April 16, 1991, Škoda Auto has stood as a core foundation pillar of the world’s leading automotive group.";
  const categories = [
    "All",
    "Core Volume",
    "Progressive Luxury",
    "Sport & Luxury",
    "Commercial & Transport",
  ];
  const filteredBrands = VW_GROUP_BRANDS.filter((brand) => {
    const matchesCategory =
      activeCategory === "All" || brand.category === activeCategory;
    const matchesSearch =
      brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.iconicVehicles.some((v) =>
        v.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ||
      brand.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner: Proud to be a part of Volkswagen Group */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-blue-950/50 border border-zinc-800 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          {/* Official Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/90 border border-blue-600/50 text-blue-200 text-xs font-bold tracking-wide shadow-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Volkswagen Aktiengesellschaft • SAVWIPL Global Alliance</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
                Heritage & Collective Power
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400 text-xs font-medium">
                Headquartered in Wolfsburg, Germany
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Proud to be a Part of the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200 bg-clip-text text-transparent">
                Volkswagen Group
              </span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {membershipBlurb} Together with sister marques{" "}
              <strong className="text-white">
                Volkswagen, Audi, Porsche, Lamborghini, Bentley, Bugatti, SEAT,
                CUPRA, MAN, and Scania
              </strong>
              , we deliver shared German precision engineering, Le Mans-tested
              chassis dynamics, and uncompromising 5-Star safety.
            </p>
          </div>

          {/* Key Group Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {VW_GROUP_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80"
              >
                <p className="text-xl sm:text-2xl font-black text-white">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-blue-400 mt-0.5">
                  {stat.label}
                </p>
                <p className="text-[10px] text-zinc-400 mt-1 leading-snug">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {onExploreSkodaHistory && (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  onExploreSkodaHistory();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
              >
                <span>Read {activeBrandName} History ({activeBrandFoundedYear}–Present)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            {onExploreLineup && (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  onExploreLineup();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-semibold text-xs transition-all cursor-pointer"
              >
                <span>Explore Indian Portfolio</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Brand Navigator & Search Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-wider uppercase mb-1">
              <Globe2 className="w-4 h-4" />
              <span>Marques of the Group</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              The Volkswagen Group Brand Portfolio
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              From everyday electric mobility to 300+ mph hypercars and 770 hp
              heavy commercial transport.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Porsche, Bugatti, Scania, TSI..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none scroll-fade-x pb-1">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${isSelected ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-950" : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800"}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBrands.map((brand) => (
            <motion.div
              key={brand.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="group rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 p-6 flex flex-col justify-between transition-all shadow-lg hover:shadow-black/60"
            >
              <div className="space-y-4">
                {/* Brand Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{brand.flag}</span>
                      <h3 className="text-xl font-black text-white group-hover:text-blue-300 transition-colors">
                        {brand.name}
                      </h3>
                      {brand.id === (isLamborghini ? "lamborghini" : isPorsche ? "porsche" : isAudi ? "audi" : isVW ? "volkswagen" : "skoda") && (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                          Host
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      {brand.headquarters}
                    </p>
                  </div>

                  <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700 whitespace-nowrap">
                    Est. {brand.foundedYear}
                  </span>
                </div>

                {/* Tagline & Identity */}
                <div className="space-y-1.5">
                  <p className="text-xs font-bold text-blue-400 italic">
                    “{brand.tagline}”
                  </p>
                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                    {brand.brandIdentity}
                  </p>
                </div>

                {/* Iconic Vehicles Pill List */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1">
                    <Car className="w-3 h-3 text-zinc-500" />
                    Iconic Vehicles
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.iconicVehicles.slice(0, 3).map((v, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800 text-[11px] text-zinc-300 font-medium truncate max-w-full"
                      >
                        {v.split("\u2013")[0].trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Synergy with Škoda / Group */}
                <div className="p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 text-[11px] text-zinc-400 space-y-1">
                  <span className="font-bold text-zinc-300 block text-[10px] uppercase tracking-wider">
                    Group Synergy:
                  </span>
                  <p className="line-clamp-2 leading-relaxed">
                    {brand.groupSynergy}
                  </p>
                </div>
              </div>

              {/* View Deep Dive Button */}
              <button
                onClick={() => setSelectedBrand(brand)}
                className="w-full mt-4 py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer group-hover:border-zinc-600 border border-zinc-700"
              >
                <span>Read Full {brand.name} Profile</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shared Group Engineering Powers (EA888, MQB, DSG, Safety) */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-wider uppercase mb-1">
            <Cpu className="w-4 h-4" />
            <span>Shared DNA & Engineering Superiority</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            How Volkswagen Group Synergies Elevate Every {activeBrandName}
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            When you purchase a {activeBrandName}, you inherit decades of multi-billion Euro
            research shared across Audi, Porsche, and Volkswagen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {VW_GROUP_SHARED_TECH.map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0">
                  {tech.icon === "Layers" && <Layers className="w-5 h-5" />}
                  {tech.icon === "Zap" && <Zap className="w-5 h-5" />}
                  {tech.icon === "Cpu" && <Cpu className="w-5 h-5" />}
                  {tech.icon === "ShieldCheck" && (
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
                <h3 className="text-base font-bold text-white">{tech.title}</h3>
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Spotlight on SAVWIPL in India */}
      <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/40 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/50 text-emerald-300 text-xs font-bold">
              <Factory className="w-3.5 h-3.5 text-emerald-400" />
              <span>SAVWIPL • Indian Manufacturing Force</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Škoda Auto Volkswagen India Private Limited
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              In 2019, the group united all Indian entities under SAVWIPL, led
              by Škoda Auto. Based in Maharashtra with state-of-the-art
              facilities in Chakan (Pune) and Shendra (Aurangabad), SAVWIPL
              produces vehicles for{" "}
              <strong className="text-white">
                Škoda, Volkswagen, and Audi
              </strong>
              , while managing the direct operations of{" "}
              <strong className="text-white">Porsche and Lamborghini</strong> in
              India.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center shrink-0">
            <p className="text-2xl font-black text-emerald-400">100% 5-Star</p>
            <p className="text-xs font-bold text-white mt-0.5">
              Crash Safety Record
            </p>
            <p className="text-[10px] text-zinc-500 mt-1">
              Bharat NCAP & Global NCAP
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
            <p className="font-bold text-white text-xs">
              €1 Billion+ India 2.0
            </p>
            <p className="text-[11px] text-zinc-400">
              Developed the localized MQB-A0-IN platform with up to 95%
              localization, lowering ownership costs.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
            <p className="font-bold text-white text-xs">Global Export Hub</p>
            <p className="text-[11px] text-zinc-400">
              Vehicles manufactured at Chakan are exported to over 30 countries
              across the Gulf, ASEAN, and Latin America.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
            <p className="font-bold text-white text-xs">Green Energy Pioneer</p>
            <p className="text-[11px] text-zinc-400">
              18.5 MW rooftop solar installation at Chakan offsets over 28,000
              tonnes of CO₂ emissions annually.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Cross-Navigation Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-zinc-900 border border-emerald-800/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-2xl">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-[11px] uppercase tracking-wider">
            130 Years of Automotive Heritage
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {isLamborghini
              ? "Explore Lamborghini’s Heritage: From Sant'Agata Bolognese (1963) to India"
              : isPorsche
              ? "Explore Porsche’s Heritage: From Stuttgart (1931) to India"
              : isAudi
                ? "Explore Audi’s Heritage: From Zwickau (1909) to India 2.0"
                : isVW
                  ? "Explore Volkswagen’s Heritage: From Wolfsburg (1937) to India 2.0"
                  : "Explore Škoda’s Heritage: From Laurin & Klement (1895) to India 2.0"}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {isLamborghini
              ? "Delve into the historic journey from Ferruccio Lamborghini's tractor-to-supercar origin, the Miura and Countach defining the modern supercar template, and how the Volkswagen Group acquisition in 1998 brought German engineering discipline to Sant'Agata."
              : isPorsche
              ? "Delve into the historic journey from Ferdinand Porsche’s Stuttgart design office, the rear-engine 911’s continuous production since 1963, and how Porsche's cross-holding with Volkswagen AG binds the two companies together."
              : isAudi
                ? "Delve into the historic journey from August Horch’s founding of Audi, the four-rings merger of 1932, and how Audi became the Group’s progressive-technology pillar."
                : isVW
                  ? "Delve into the historic journey from the Wolfsburg factory’s founding, the original Beetle, and how Volkswagen became the core marque of the Group."
                  : "Delve into the historic journey of Václav Laurin & Václav Klement, the legendary Slavia bicycle, classic roadsters, and how Škoda became an engineering pillar of the Volkswagen Group."}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {onExploreSkodaHistory && (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                onExploreSkodaHistory();
              }}
              className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/40 transition-all cursor-pointer"
            >
              <span>Read {activeBrandName} History</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
          {onExploreLineup && (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                onExploreLineup();
              }}
              className="px-5 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>View Indian Portfolio</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </button>
          )}
        </div>
      </div>

      {/* Brand Detailed Modal */}
      <AnimatePresence>
        {selectedBrand && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-900 border border-zinc-700 p-6 sm:p-8 shadow-2xl space-y-6 text-zinc-200"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedBrand(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedBrand.flag}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {selectedBrand.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-bold">
                    Est. {selectedBrand.foundedYear}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  {selectedBrand.nativeName || selectedBrand.headquarters}
                </p>
                <p className="text-sm font-bold text-blue-400 italic">
                  “{selectedBrand.tagline}”
                </p>
              </div>

              {/* Overview */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedBrand.description}
              </div>

              {/* Iconic Vehicles */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-blue-400" />
                  Iconic Vehicles & Hall of Fame
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedBrand.iconicVehicles.map((veh, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-200 font-medium"
                    >
                      {veh}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Innovations */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Key Technological Breakthroughs
                </h4>
                <ul className="space-y-1.5">
                  {selectedBrand.keyInnovations.map((inv, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-zinc-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Group Synergy Deep-Dive */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/50 space-y-1.5 text-xs">
                <span className="font-bold text-blue-300 uppercase tracking-wider text-[10px] block">
                  Synergy within Volkswagen Group Ecosystem:
                </span>
                <p className="text-zinc-200 leading-relaxed">
                  {selectedBrand.groupSynergy}
                </p>
              </div>

              <button
                onClick={() => setSelectedBrand(null)}
                className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
