import { useState, useMemo, useEffect } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Search,
  Car,
  Wrench,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DEALERSHIPS, INDIAN_STATES } from "../data/dealershipData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { BentleyLogo } from "./BentleyLogo";
import { ScaniaLogo } from "./ScaniaLogo";
export const DealershipLocator = ({
  brand = "skoda",
  initialCity,
  onBookTestDriveDirect,
}) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const isBentley = brand === "bentley";
  const isSeat = brand === "seat";
  const isScania = brand === "scania";
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedCity, setSelectedCity] = useState(initialCity || "All Cities");
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDealership, setSelectedDealership] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingDealer, setBookingDealer] = useState(null);
  const [bookingModel, setBookingModel] = useState(
    isAudi
      ? "Audi Q5"
      : isVW
        ? "Virtus GT Plus"
        : isScania
          ? "R 500 Highline Sleeper (6x4)"
          : isBentley
          ? "Continental GT V8"
          : isLamborghini
          ? "Huracán EVO"
          : isPorsche
          ? "911 Carrera"
          : "Octavia vRS",
  );
  const [bookingType, setBookingType] = useState("Test Drive");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  useEffect(() => {
    setBookingModel(
      isAudi
        ? "Audi Q5"
        : isVW
          ? "Virtus GT Plus"
          : isScania
            ? "R 500 Highline Sleeper (6x4)"
            : isBentley
            ? "Continental GT V8"
            : isLamborghini
            ? "Huracán EVO"
            : isPorsche
            ? "911 Carrera"
            : "Octavia vRS",
    );
  }, [brand]);
  const brandDealerships = useMemo(() => {
    return DEALERSHIPS.filter((dealer) => {
      if (dealer.brand && dealer.brand !== "both" && dealer.brand !== brand) {
        return false;
      }
      return true;
    });
  }, [brand]);
  const availableCities = useMemo(() => {
    let list = brandDealerships;
    if (selectedState !== "All States") {
      list = list.filter((d) => d.state === selectedState);
    }
    const cities = Array.from(new Set(list.map((d) => d.city))).sort();
    return ["All Cities", ...cities];
  }, [brandDealerships, selectedState]);
  const filteredDealerships = useMemo(() => {
    return brandDealerships.filter((dealer) => {
      if (selectedState !== "All States" && dealer.state !== selectedState) {
        return false;
      }
      if (selectedCity !== "All Cities" && dealer.city !== selectedCity) {
        return false;
      }
      if (selectedType !== "All" && dealer.type !== selectedType) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const text =
          `${dealer.name} ${dealer.partnerGroup} ${dealer.city} ${dealer.state} ${dealer.landmark} ${dealer.pinCode} ${dealer.address}`.toLowerCase();
        if (!text.includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [
    brandDealerships,
    selectedState,
    selectedCity,
    selectedType,
    searchQuery,
  ]);
  const handleOpenBooking = (dealer, type = "Test Drive") => {
    setBookingDealer(dealer);
    setBookingType(type);
    setBookingSubmitted(false);
    setUserName("");
    setUserPhone("");
    setPreferredDate("");
    setIsBookingModalOpen(true);
  };
  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!userName || !userPhone) return;
    setBookingSubmitted(true);
  };
  if (isSeat) {
    return (
      <div className="space-y-8">
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-orange-950/40 border border-orange-900/40 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-orange-500/10" />
          <div className="relative flex items-center gap-3">
            <MapPin className="w-6 h-6 text-orange-400" />
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-orange-400">Dealership & Service Locator</p>
              <h2 className="text-xl sm:text-2xl font-black text-white">SEAT India Network</h2>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 sm:p-16 text-center space-y-4">
          <div className="w-14 h-14 rounded-full border border-orange-500/60 bg-orange-950/60 flex items-center justify-center mx-auto">
            <Building2 className="w-7 h-7 text-orange-400" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">SEAT Is Not Currently Sold or Serviced in India</h3>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Unlike every other brand in this showcase, SEAT has no official distribution, CBU import programme, CKD assembly line,
            dealer network or authorised service centres anywhere in India. There is no dealership locator to show because zero
            official SEAT outlets exist in the country — the models featured here are shown purely as global reference specifications
            for enthusiast comparison against SEAT's Volkswagen Group siblings that are actually sold in India.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div
        className={`rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 border p-6 sm:p-8 relative overflow-hidden shadow-2xl ${isAudi ? "to-red-950/40 border-red-900/40" : isVW ? "to-blue-950/40 border-blue-900/40" : isScania ? "to-rose-950/40 border-rose-900/40" : isSeat ? "to-orange-950/40 border-orange-900/40" : isBentley ? "to-green-950/40 border-green-900/40" : isLamborghini ? "to-yellow-950/40 border-yellow-900/40" : isPorsche ? "to-amber-950/40 border-amber-900/40" : "to-emerald-950/40 border-zinc-800"}`}
      >
        <div
          className={`absolute -right-16 -top-16 w-80 h-80 rounded-full blur-3xl pointer-events-none ${isAudi ? "bg-red-500/10" : isVW ? "bg-blue-500/10" : isScania ? "bg-rose-500/10" : isSeat ? "bg-orange-500/10" : isBentley ? "bg-green-500/10" : isLamborghini ? "bg-yellow-500/10" : isPorsche ? "bg-amber-500/10" : "bg-emerald-500/10"}`}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              {isAudi ? (
                <AudiLogo variant="emblem" size="sm" />
              ) : isVW ? (
                <VolkswagenLogo variant="emblem" size="sm" />
              ) : isScania ? (
                <ScaniaLogo variant="emblem" size="sm" />
              ) : isBentley ? (
                <BentleyLogo variant="emblem" size="sm" />
              ) : isLamborghini ? (
                <LamborghiniLogo variant="emblem" size="sm" />
              ) : isPorsche ? (
                <PorscheLogo variant="emblem" size="sm" />
              ) : (
                <SkodaLogo variant="emblem" size="sm" />
              )}
              <span
                className={`text-xs uppercase font-bold tracking-wider ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : "text-emerald-400"}`}
              >
                {isAudi
                  ? "Audi India (Volkswagen Group Premium Brand)"
                  : isScania
                  ? "Scania Commercial Vehicles India Pvt. Ltd. (TRATON / Volkswagen Group)"
                  : isBentley
                    ? "Bentley India (Direct Market Operations)"
                    : isLamborghini
                    ? "Lamborghini India (Direct Market Operations)"
                    : isPorsche
                    ? "Porsche India (Direct Market Operations)"
                    : "Škoda Auto Volkswagen India Pvt. Ltd. (SAVWIPL)"}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs text-zinc-400">
                {isAudi
                  ? "Official Audi India Network"
                  : isVW
                    ? "Official Volkswagen India Network"
                    : isScania
                      ? "Official Scania India Dealer & Workshop Network"
                      : isBentley
                      ? "Official Bentley India Network"
                      : isLamborghini
                      ? "Official Lamborghini India Network"
                      : isPorsche
                      ? "Official Porsche India Network"
                      : "Official \u0160koda India Network"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {isAudi
                ? "Audi Dealership & Service Locator"
                : isVW
                  ? "Volkswagen Dealership & Service Locator"
                  : isBentley
                    ? "Bentley Showroom & Service Locator"
                    : isLamborghini
                    ? "Lamborghini Showroom & Service Locator"
                    : isPorsche
                    ? "Porsche Centre & Service Locator"
                    : "Dealership & Service Center Locator"}
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {isAudi
                ? "Find authorized Audi India showrooms and certified workshop centers across major Indian metros. Schedule test drives for the A4, A6, Q3, Q5, Q7, or Q8, and access Audi Advantage service packages."
                : isVW
                  ? "Find authorized Volkswagen India 3S facilities, city stores, and certified workshop centers across 150+ Indian cities. Schedule home test drives for Virtus, Taigun, or Tiguan, and access 60-minute express service."
                  : isBentley
                    ? "Find authorized Bentley showrooms and Mulliner commissioning suites across major Indian metros. Schedule test drives for the Continental GT, Bentayga, or Flying Spur, and access Bentley genuine service programs."
                    : isLamborghini
                    ? "Find authorized Lamborghini showrooms and certified workshop facilities across major Indian metros. Schedule test drives for the Hurac\u00e1n, Urus, or Revuelto, and access Lamborghini genuine service programs."
                    : isPorsche
                    ? "Find authorized Porsche Centres and certified workshop facilities across major Indian metros. Schedule test drives for the 911, Cayenne, Macan, Panamera, or 718 Cayman, and access Porsche Approved service programs."
                    : "Find authorized \u0160koda India 3S facilities, flagship experience showrooms, and certified workshop centers across 150+ Indian cities. Schedule home or showroom test drives, access 60-minute express servicing, and connect directly with certified brand specialists."}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Building2
                  className={`w-4 h-4 ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : "text-emerald-400"}`}
                />
                <strong>200+ Touchpoints</strong> Nationwide
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck
                  className={`w-4 h-4 ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : "text-emerald-400"}`}
                />
                <strong>
                  {isAudi
                    ? "Audi Advantage: 4-Year / Unlimited km"
                    : isVW
                      ? "4EVER Care: 4-Year / 100,000 km"
                      : isBentley
                        ? "Bentley Warranty: 3-Year Unlimited Mileage"
                        : isLamborghini
                        ? "Lamborghini Warranty: 3-Year Unlimited Mileage"
                        : isPorsche
                        ? "Porsche Warranty: 2-Year / Unlimited km"
                        : "4-Year / 100,000 km"}
                </strong>{" "}
                Standard Warranty
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Phone className="w-4 h-4 text-blue-400" />
                Toll-Free 24/7 Roadside Assistance:{" "}
                <strong>
                  {isAudi
                    ? "1800 209 3232"
                    : isVW
                      ? "1800 102 0909"
                      : isBentley
                        ? "1800 209 7722"
                        : isLamborghini
                        ? "1800 209 8811"
                        : isPorsche
                        ? "1800 103 6911"
                        : "1800 123 0955"}
                </strong>
              </span>
            </div>
          </div>

          {/* Quick Stats Pill Block */}
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 shrink-0 space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center gap-4 text-zinc-400">
              <span>National Network:</span>
              <span className="text-white font-bold">150+ Cities</span>
            </div>
            <div className="flex justify-between items-center gap-4 text-zinc-400">
              <span>Customer Satisfaction:</span>
              <span
                className={`font-bold ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : "text-emerald-400"}`}
              >
                98.4% Peace of Mind
              </span>
            </div>
            <div className="flex justify-between items-center gap-4 text-zinc-400">
              <span>
                {isAudi
                  ? "Audi Advantage Packages:"
                  : isVW
                    ? "4EVER Care Packages:"
                    : isBentley
                      ? "Bentley Genuine Packages:"
                      : isLamborghini
                      ? "Lamborghini Genuine Packages:"
                      : isPorsche
                      ? "Porsche Approved Packages:"
                      : "SuperCare Packages:"}
              </span>
              <span className="text-amber-400 font-bold">
                Up to 8 Years Covered
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-5 space-y-4 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city, dealer, or PIN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${isAudi ? "focus:border-red-500" : isVW ? "focus:border-blue-500" : isScania ? "focus:border-rose-500" : isSeat ? "focus:border-orange-500" : isBentley ? "focus:border-green-500" : isLamborghini ? "focus:border-yellow-500" : isPorsche ? "focus:border-amber-500" : "focus:border-emerald-500"}`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* State Dropdown */}
          <div>
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity("All Cities");
              }}
              className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white focus:outline-none transition-colors cursor-pointer ${isAudi ? "focus:border-red-500" : isVW ? "focus:border-blue-500" : isScania ? "focus:border-rose-500" : isSeat ? "focus:border-orange-500" : isBentley ? "focus:border-green-500" : isLamborghini ? "focus:border-yellow-500" : isPorsche ? "focus:border-amber-500" : "focus:border-emerald-500"}`}
            >
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st} className="bg-zinc-950 text-white">
                  {st}
                </option>
              ))}
            </select>
          </div>

          {/* City Dropdown */}
          <div>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white focus:outline-none transition-colors cursor-pointer ${isAudi ? "focus:border-red-500" : isVW ? "focus:border-blue-500" : isScania ? "focus:border-rose-500" : isSeat ? "focus:border-orange-500" : isBentley ? "focus:border-green-500" : isLamborghini ? "focus:border-yellow-500" : isPorsche ? "focus:border-amber-500" : "focus:border-emerald-500"}`}
            >
              {availableCities.map((city) => (
                <option
                  key={city}
                  value={city}
                  className="bg-zinc-950 text-white"
                >
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Facility Type Filter */}
          <div className="flex items-center gap-1 p-1 bg-zinc-950 rounded-xl border border-zinc-800 text-xs font-semibold">
            {["All", "3S Facility", "Showroom", "Service Center"].map(
              (type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all cursor-pointer ${selectedType === type ? (isAudi ? "bg-red-600 text-white shadow-md" : isVW ? "bg-blue-600 text-white shadow-md" : isScania ? "bg-rose-600 text-white shadow-md" : isSeat ? "bg-orange-600 text-white shadow-md" : isBentley ? "bg-green-600 text-white shadow-md" : isLamborghini ? "bg-yellow-600 text-white shadow-md" : isPorsche ? "bg-amber-600 text-white shadow-md" : "bg-emerald-600 text-white shadow-md") : "text-zinc-400 hover:text-white"}`}
                >
                  {type === "3S Facility" ? "3S" : type}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Quick Metro City Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none pt-1">
          <span className="text-zinc-500 font-medium whitespace-nowrap flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Popular Metros:
          </span>
          {[
            "Pune",
            "Mumbai",
            "New Delhi",
            "Gurugram",
            "Bengaluru",
            "Chennai",
            "Hyderabad",
            "Ahmedabad",
            "Kolkata",
            "Chandigarh",
            "Kochi",
          ].map((city) => (
            <button
              key={city}
              onClick={() => {
                setSelectedState("All States");
                setSelectedCity(city);
                setSearchQuery("");
              }}
              className={`px-3 py-1 rounded-lg border whitespace-nowrap transition-all cursor-pointer ${selectedCity === city ? (isAudi ? "bg-red-950/80 border-red-500 text-red-300 font-bold" : isVW ? "bg-blue-950/80 border-blue-500 text-blue-300 font-bold" : isScania ? "bg-rose-950/80 border-rose-500 text-rose-300 font-bold" : isSeat ? "bg-orange-950/80 border-orange-500 text-orange-300 font-bold" : isBentley ? "bg-green-950/80 border-green-500 text-green-300 font-bold" : isLamborghini ? "bg-yellow-950/80 border-yellow-500 text-yellow-300 font-bold" : isPorsche ? "bg-amber-950/80 border-amber-500 text-amber-300 font-bold" : "bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold") : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"}`}
            >
              {city}
            </button>
          ))}
          {(selectedState !== "All States" ||
            selectedCity !== "All Cities" ||
            selectedType !== "All" ||
            searchQuery) && (
            <button
              onClick={() => {
                setSelectedState("All States");
                setSelectedCity("All Cities");
                setSelectedType("All");
                setSearchQuery("");
              }}
              className={`text-xs underline font-semibold ml-2 whitespace-nowrap cursor-pointer ${isAudi ? "text-red-400 hover:text-red-300" : isVW ? "text-blue-400 hover:text-blue-300" : isScania ? "text-rose-400 hover:text-rose-300" : isSeat ? "text-orange-400 hover:text-orange-300" : isBentley ? "text-green-400 hover:text-green-300" : isLamborghini ? "text-yellow-400 hover:text-yellow-300" : isPorsche ? "text-amber-400 hover:text-amber-300" : "text-emerald-400 hover:text-emerald-300"}`}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Results Count & Current Selection */}
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <div>
          Showing{" "}
          <strong className="text-white font-mono">
            {filteredDealerships.length}
          </strong>{" "}
          authorized locations
          {selectedCity !== "All Cities" && (
            <span>
              {" "}
              in{" "}
              <strong className={isAudi ? "text-red-400" : isVW ? "text-blue-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : "text-emerald-400"}>
                {selectedCity}
              </strong>
            </span>
          )}
          {selectedState !== "All States" && (
            <span>
              {" "}
              (<strong className="text-zinc-300">{selectedState}</strong>)
            </span>
          )}
        </div>
        <span className="text-[11px] text-zinc-500 hidden sm:inline">
          {isBentley
            ? "Bentley India certified facilities adhere to strict European diagnostic standards"
            : isLamborghini
            ? "Lamborghini India certified facilities adhere to strict European diagnostic standards"
            : isPorsche
            ? "Porsche India certified facilities adhere to strict European diagnostic standards"
            : "SAVWIPL certified facilities adhere to strict European diagnostic standards"}
        </span>
      </div>

      {/* Dealership Cards Grid */}
      {filteredDealerships.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDealerships.map((dealer) => {
            const isSelected = selectedDealership?.id === dealer.id;
            return (
              <motion.div
                key={dealer.id}
                id={`dealer-card-${dealer.id}`}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl border p-6 flex flex-col justify-between space-y-5 transition-all shadow-xl relative overflow-hidden ${dealer.id.includes("corporate") ? (isAudi ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-red-500/70 shadow-red-950/20" : isVW ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-blue-500/70 shadow-blue-950/20" : isScania ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-rose-500/70 shadow-rose-950/20" : isSeat ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-orange-500/70 shadow-orange-950/20" : isBentley ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-green-500/70 shadow-green-950/20" : isLamborghini ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-yellow-500/70 shadow-yellow-950/20" : isPorsche ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-amber-500/70 shadow-amber-950/20" : "bg-gradient-to-b from-zinc-900 to-zinc-950 border-emerald-500/70 shadow-emerald-950/20") : isSelected ? (isAudi ? "bg-zinc-900 border-red-500 ring-1 ring-red-500/50" : isVW ? "bg-zinc-900 border-blue-500 ring-1 ring-blue-500/50" : isScania ? "bg-zinc-900 border-rose-500 ring-1 ring-rose-500/50" : isSeat ? "bg-zinc-900 border-orange-500 ring-1 ring-orange-500/50" : isBentley ? "bg-zinc-900 border-green-500 ring-1 ring-green-500/50" : isLamborghini ? "bg-zinc-900 border-yellow-500 ring-1 ring-yellow-500/50" : isPorsche ? "bg-zinc-900 border-amber-500 ring-1 ring-amber-500/50" : "bg-zinc-900 border-emerald-500 ring-1 ring-emerald-500/50") : "bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"}`}
              >
                {dealer.id.includes("corporate") && (
                  <div
                    className={`absolute top-0 right-0 px-3 py-1 text-white font-black italic text-[10px] rounded-bl-xl uppercase tracking-wider ${isAudi ? "bg-red-600" : isVW ? "bg-blue-600" : isScania ? "bg-rose-600" : isSeat ? "bg-orange-600" : isBentley ? "bg-green-600" : isLamborghini ? "bg-yellow-600" : isPorsche ? "bg-amber-600" : "bg-emerald-600"}`}
                  >
                    {isScania ? "Scania India Corporate Centre" : isSeat ? "SEAT India Corporate Centre" : isBentley ? "Bentley India Corporate Centre" : isLamborghini ? "Lamborghini India Corporate Centre" : isPorsche ? "Porsche India Corporate Centre" : "SAVWIPL Corporate Center"}
                  </div>
                )}

                <div className="space-y-3.5">
                  {/* Type Badge & Location */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${dealer.type === "3S Facility" ? (isAudi ? "bg-red-950/80 text-red-300 border-red-800" : isVW ? "bg-blue-950/80 text-blue-300 border-blue-800" : isScania ? "bg-rose-950/80 text-rose-300 border-rose-800" : isSeat ? "bg-orange-950/80 text-orange-300 border-orange-800" : isBentley ? "bg-green-950/80 text-green-300 border-green-800" : isLamborghini ? "bg-yellow-950/80 text-yellow-300 border-yellow-800" : isPorsche ? "bg-amber-950/80 text-amber-300 border-amber-800" : "bg-emerald-950/80 text-emerald-300 border-emerald-800") : dealer.type === "Showroom" ? "bg-sky-950/80 text-sky-300 border-sky-800" : "bg-amber-950/80 text-amber-300 border-amber-800"}`}
                    >
                      {dealer.type} (Sales, Service & Spares)
                    </span>
                    <span className="text-xs text-zinc-400 font-mono font-medium flex items-center gap-1">
                      <MapPin
                        className={`w-3 h-3 ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : "text-emerald-400"}`}
                      />
                      {dealer.city}, {dealer.state}
                    </span>
                  </div>

                  {/* Dealer Name */}
                  <div>
                    <h3 className="text-lg font-black text-white leading-snug">
                      {dealer.name}
                    </h3>
                    <p
                      className={`text-xs font-medium mt-0.5 ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : "text-emerald-400"}`}
                    >
                      {dealer.partnerGroup}
                    </p>
                  </div>

                  {/* Physical Address */}
                  <div className="text-xs text-zinc-300 space-y-1 bg-zinc-950/70 p-3.5 rounded-2xl border border-zinc-800/80">
                    <p className="leading-relaxed">{dealer.address}</p>
                    <p className="text-[11px] text-zinc-400">
                      Landmark: {dealer.landmark}
                    </p>
                    <p className="text-[11px] text-zinc-400 font-mono">
                      PIN: {dealer.pinCode}
                    </p>
                  </div>

                  {/* Contact Numbers */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <a
                      href={`tel:${dealer.salesPhone}`}
                      className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-colors flex flex-col group"
                    >
                      <span className="text-[10px] text-zinc-400 font-sans uppercase flex items-center gap-1">
                        <Phone
                          className={`w-3 h-3 ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : "text-emerald-400"}`}
                        />{" "}
                        Sales Desk
                      </span>
                      <span
                        className={`text-xs font-bold text-white transition-colors mt-0.5 ${isAudi ? "group-hover:text-red-300" : isVW ? "group-hover:text-blue-300" : isScania ? "group-hover:text-rose-300" : isSeat ? "group-hover:text-orange-300" : isBentley ? "group-hover:text-green-300" : isLamborghini ? "group-hover:text-yellow-300" : isPorsche ? "group-hover:text-amber-300" : "group-hover:text-emerald-300"}`}
                      >
                        {dealer.salesPhone}
                      </span>
                    </a>

                    <a
                      href={`tel:${dealer.servicePhone}`}
                      className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/60 transition-colors flex flex-col group"
                    >
                      <span className="text-[10px] text-zinc-400 font-sans uppercase flex items-center gap-1">
                        <Wrench className="w-3 h-3 text-amber-400" /> Service
                        Desk
                      </span>
                      <span className="text-xs font-bold text-white group-hover:text-amber-300 mt-0.5">
                        {dealer.servicePhone}
                      </span>
                    </a>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-2 text-[11px] text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                    <span>{dealer.timing}</span>
                  </div>

                  {/* Facility Amenities Chips */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Facility Amenities:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dealer.amenities.map((am, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300"
                        >
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleOpenBooking(dealer, "Test Drive")}
                      className={`py-2.5 px-3 rounded-xl text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer ${isAudi ? "bg-red-600 hover:bg-red-500 shadow-red-950/40" : isVW ? "bg-blue-600 hover:bg-blue-500 shadow-blue-950/40" : isScania ? "bg-rose-600 hover:bg-rose-500 shadow-rose-950/40" : isSeat ? "bg-orange-600 hover:bg-orange-500 shadow-orange-950/40" : isBentley ? "bg-green-600 hover:bg-green-500 shadow-green-950/40" : isLamborghini ? "bg-yellow-600 hover:bg-yellow-500 shadow-yellow-950/40" : isPorsche ? "bg-amber-600 hover:bg-amber-500 shadow-amber-950/40" : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/40"}`}
                    >
                      <Car className="w-3.5 h-3.5" />
                      Book Test Drive
                    </button>

                    <button
                      onClick={() => handleOpenBooking(dealer, "Service")}
                      className="py-2.5 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Wrench className="w-3.5 h-3.5 text-amber-400" />
                      Book Service
                    </button>
                  </div>

                  <a
                    href={dealer.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/90 text-zinc-400 hover:text-white font-medium text-[11px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 text-blue-400" />
                    Open Directions on Google Maps
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 text-center space-y-3">
          <MapPin className="w-10 h-10 text-zinc-600 mx-auto" />
          <h4 className="text-lg font-bold text-white">
            No dealerships matched your filter
          </h4>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Try choosing 'All States' or clearing your search keywords. We have
            authorized touchpoints across all major regions of India.
          </p>
          <button
            onClick={() => {
              setSelectedState("All States");
              setSelectedCity("All Cities");
              setSelectedType("All");
              setSearchQuery("");
            }}
            className={`px-4 py-2 rounded-xl text-white text-xs font-bold cursor-pointer ${isAudi ? "bg-red-600" : isVW ? "bg-blue-600" : isScania ? "bg-rose-600" : isSeat ? "bg-orange-600" : isBentley ? "bg-green-600" : isLamborghini ? "bg-yellow-600" : isPorsche ? "bg-amber-600" : "bg-emerald-600"}`}
          >
            Show All Dealerships
          </button>
        </div>
      )}

      {/* Interactive Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && bookingDealer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${isAudi ? "bg-red-950 text-red-400 border-red-800" : isVW ? "bg-blue-950 text-blue-400 border-blue-800" : isScania ? "bg-rose-950 text-rose-400 border-rose-800" : isSeat ? "bg-orange-950 text-orange-400 border-orange-800" : isBentley ? "bg-green-950 text-green-400 border-green-800" : isLamborghini ? "bg-yellow-950 text-yellow-400 border-yellow-800" : isPorsche ? "bg-amber-950 text-amber-400 border-amber-800" : "bg-emerald-950 text-emerald-400 border-emerald-800"}`}
                  >
                    Official Appointment Request
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {bookingType === "Test Drive"
                    ? "Schedule a VIP Test Drive"
                    : "Book a Certified Service Slot"}
                </h3>
                <p className="text-xs text-zinc-400">
                  With {bookingDealer.name} ({bookingDealer.city})
                </p>
              </div>

              {bookingSubmitted ? (
                <div className="py-6 space-y-4 text-center">
                  <div
                    className={`w-14 h-14 rounded-full border flex items-center justify-center mx-auto ${isAudi ? "bg-red-950 border-red-500 text-red-400" : isVW ? "bg-blue-950 border-blue-500 text-blue-400" : isScania ? "bg-rose-950 border-rose-500 text-rose-400" : isSeat ? "bg-orange-950 border-orange-500 text-orange-400" : isBentley ? "bg-green-950 border-green-500 text-green-400" : isLamborghini ? "bg-yellow-950 border-yellow-500 text-yellow-400" : isPorsche ? "bg-amber-950 border-amber-500 text-amber-400" : "bg-emerald-950 border-emerald-500 text-emerald-400"}`}
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">
                      Appointment Request Confirmed!
                    </h4>
                    <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                      Thank you,{" "}
                      <strong className="text-white">{userName}</strong>. The
                      dealership relationship manager at{" "}
                      <strong
                        className={isAudi ? "text-red-400" : isVW ? "text-blue-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : "text-emerald-400"}
                      >
                        {bookingDealer.name}
                      </strong>{" "}
                      will contact you at{" "}
                      <strong className="text-white">{userPhone}</strong> within
                      30 minutes to confirm your preferred slot.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-left space-y-1">
                    <div className="flex justify-between text-zinc-400">
                      <span>Booking Reference:</span>
                      <span className="text-white font-bold">
                        {isAudi ? "AUDI" : isVW ? "VW" : isScania ? "SCN" : isSeat ? "SEA" : isBentley ? "BEN" : isLamborghini ? "LAM" : isPorsche ? "PSC" : "SKD"}-
                        {Math.floor(1e5 + Math.random() * 9e5)}
                      </span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Selected Vehicle:</span>
                      <span
                        className={`font-bold ${isAudi ? "text-red-400" : isVW ? "text-blue-400" : isScania ? "text-rose-400" : isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : "text-emerald-400"}`}
                      >
                        {bookingModel}
                      </span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Dealership Contact:</span>
                      <span className="text-white">
                        {bookingDealer.salesPhone}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsBookingModalOpen(false)}
                    className={`w-full py-3 rounded-xl text-white font-bold text-xs cursor-pointer ${isAudi ? "bg-red-600" : isVW ? "bg-blue-600" : isScania ? "bg-rose-600" : isSeat ? "bg-orange-600" : isBentley ? "bg-green-600" : isLamborghini ? "bg-yellow-600" : isPorsche ? "bg-amber-600" : "bg-emerald-600"}`}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  {/* Select Model for Test Drive */}
                  {bookingType === "Test Drive" && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300">
                        Select {isAudi ? "Audi" : isVW ? "Volkswagen" : isScania ? "Scania" : isSeat ? "SEAT" : isBentley ? "Bentley" : isLamborghini ? "Lamborghini" : isPorsche ? "Porsche" : "\u0160koda"} Model
                      </label>
                      <select
                        value={bookingModel}
                        onChange={(e) => setBookingModel(e.target.value)}
                        className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none ${isAudi ? "focus:border-red-500" : isVW ? "focus:border-blue-500" : isScania ? "focus:border-rose-500" : isSeat ? "focus:border-orange-500" : isBentley ? "focus:border-green-500" : isLamborghini ? "focus:border-yellow-500" : isPorsche ? "focus:border-amber-500" : "focus:border-emerald-500"}`}
                      >
                        {isVW ? (
                          <>
                            <option value="Virtus GT Plus">
                              Volkswagen Virtus GT Plus (1.5 TSI EVO DSG)
                            </option>
                            <option value="Virtus Topline 1.0">
                              Volkswagen Virtus Topline (1.0 TSI AT)
                            </option>
                            <option value="Taigun GT Plus">
                              Volkswagen Taigun GT Plus (1.5 TSI DSG)
                            </option>
                            <option value="Taigun Topline 1.0">
                              Volkswagen Taigun Topline (1.0 TSI AT)
                            </option>
                            <option value="Tiguan 4MOTION">
                              Volkswagen Tiguan Elegance (2.0 TSI AWD)
                            </option>
                            <option value="Golf GTI">
                              Volkswagen Golf GTI (265 PS EA888)
                            </option>
                          </>
                        ) : (
                          bookingDealer.modelsAvailableForTestDrive.map((m) => (
                            <option key={m} value={m}>
                              {isAudi ? "Audi" : isScania ? "Scania" : isSeat ? "SEAT" : isBentley ? "Bentley" : isLamborghini ? "Lamborghini" : isPorsche ? "Porsche" : "Škoda"} {m}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                  )}

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none ${isAudi ? "focus:border-red-500" : isVW ? "focus:border-blue-500" : isScania ? "focus:border-rose-500" : isSeat ? "focus:border-orange-500" : isBentley ? "focus:border-green-500" : isLamborghini ? "focus:border-yellow-500" : isPorsche ? "focus:border-amber-500" : "focus:border-emerald-500"}`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none font-mono ${isAudi ? "focus:border-red-500" : isVW ? "focus:border-blue-500" : isScania ? "focus:border-rose-500" : isSeat ? "focus:border-orange-500" : isBentley ? "focus:border-green-500" : isLamborghini ? "focus:border-yellow-500" : isPorsche ? "focus:border-amber-500" : "focus:border-emerald-500"}`}
                      />
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300">
                      Preferred Date & Time Slot
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none ${isAudi ? "focus:border-red-500" : isVW ? "focus:border-blue-500" : isScania ? "focus:border-rose-500" : isSeat ? "focus:border-orange-500" : isBentley ? "focus:border-green-500" : isLamborghini ? "focus:border-yellow-500" : isPorsche ? "focus:border-amber-500" : "focus:border-emerald-500"}`}
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
                    <span className="font-semibold text-white block">
                      At-Home / Showroom Flexibility
                    </span>
                    <p>
                      You can choose between a private test drive at your
                      residence / office or at the dealership track.
                    </p>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsBookingModalOpen(false)}
                      className="flex-1 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`flex-1 py-2.5 rounded-xl text-white text-xs font-bold transition-colors cursor-pointer ${isAudi ? "bg-red-600 hover:bg-red-500" : isVW ? "bg-blue-600 hover:bg-blue-500" : isScania ? "bg-rose-600 hover:bg-rose-500" : isSeat ? "bg-orange-600 hover:bg-orange-500" : isBentley ? "bg-green-600 hover:bg-green-500" : isLamborghini ? "bg-yellow-600 hover:bg-yellow-500" : isPorsche ? "bg-amber-600 hover:bg-amber-500" : "bg-emerald-600 hover:bg-emerald-500"}`}
                    >
                      Confirm Booking Request
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
