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
export const DealershipLocator = ({
  brand = "skoda",
  initialCity,
  onBookTestDriveDirect,
}) => {
  const isVW = brand === "volkswagen";
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedCity, setSelectedCity] = useState(initialCity || "All Cities");
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDealership, setSelectedDealership] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingDealer, setBookingDealer] = useState(null);
  const [bookingModel, setBookingModel] = useState(
    isVW ? "Virtus GT Plus" : "Octavia vRS",
  );
  const [bookingType, setBookingType] = useState("Test Drive");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  useEffect(() => {
    setBookingModel(isVW ? "Virtus GT Plus" : "Octavia vRS");
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
    setIsBookingModalOpen(true);
  };
  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!userName || !userPhone) return;
    setBookingSubmitted(true);
  };
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div
        className={`rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 border p-6 sm:p-8 relative overflow-hidden shadow-2xl ${isVW ? "to-blue-950/40 border-blue-900/40" : "to-emerald-950/40 border-zinc-800"}`}
      >
        <div
          className={`absolute -right-16 -top-16 w-80 h-80 rounded-full blur-3xl pointer-events-none ${isVW ? "bg-blue-500/10" : "bg-emerald-500/10"}`}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              {isVW ? (
                <VolkswagenLogo variant="emblem" size="sm" />
              ) : (
                <SkodaLogo variant="emblem" size="sm" />
              )}
              <span
                className={`text-xs uppercase font-bold tracking-wider ${isVW ? "text-blue-400" : "text-emerald-400"}`}
              >
                Škoda Auto Volkswagen India Pvt. Ltd. (SAVWIPL)
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs text-zinc-400">
                {isVW
                  ? "Official Volkswagen India Network"
                  : "Official \u0160koda India Network"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {isVW
                ? "Volkswagen Dealership & Service Locator"
                : "Dealership & Service Center Locator"}
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {isVW
                ? "Find authorized Volkswagen India 3S facilities, city stores, and certified workshop centers across 150+ Indian cities. Schedule home test drives for Virtus, Taigun, or Tiguan, and access 60-minute express service."
                : "Find authorized \u0160koda India 3S facilities, flagship experience showrooms, and certified workshop centers across 150+ Indian cities. Schedule home or showroom test drives, access 60-minute express servicing, and connect directly with certified brand specialists."}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Building2
                  className={`w-4 h-4 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                />
                <strong>200+ Touchpoints</strong> Nationwide
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck
                  className={`w-4 h-4 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                />
                <strong>
                  {isVW
                    ? "4EVER Care: 4-Year / 100,000 km"
                    : "4-Year / 100,000 km"}
                </strong>{" "}
                Standard Warranty
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Phone className="w-4 h-4 text-blue-400" />
                Toll-Free 24/7 Roadside Assistance:{" "}
                <strong>{isVW ? "1800 102 0909" : "1800 123 0955"}</strong>
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
                className={`font-bold ${isVW ? "text-blue-400" : "text-emerald-400"}`}
              >
                98.4% Peace of Mind
              </span>
            </div>
            <div className="flex justify-between items-center gap-4 text-zinc-400">
              <span>
                {isVW ? "4EVER Care Packages:" : "SuperCare Packages:"}
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
              className={`w-full pl-9.5 pr-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${isVW ? "focus:border-blue-500" : "focus:border-emerald-500"}`}
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
              className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white focus:outline-none transition-colors cursor-pointer ${isVW ? "focus:border-blue-500" : "focus:border-emerald-500"}`}
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
              className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-white focus:outline-none transition-colors cursor-pointer ${isVW ? "focus:border-blue-500" : "focus:border-emerald-500"}`}
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
                  className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all cursor-pointer ${selectedType === type ? (isVW ? "bg-blue-600 text-white shadow-md" : "bg-emerald-600 text-white shadow-md") : "text-zinc-400 hover:text-white"}`}
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
              className={`px-3 py-1 rounded-lg border whitespace-nowrap transition-all cursor-pointer ${selectedCity === city ? (isVW ? "bg-blue-950/80 border-blue-500 text-blue-300 font-bold" : "bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold") : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"}`}
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
              className={`text-xs underline font-semibold ml-2 whitespace-nowrap cursor-pointer ${isVW ? "text-blue-400 hover:text-blue-300" : "text-emerald-400 hover:text-emerald-300"}`}
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
              <strong className={isVW ? "text-blue-400" : "text-emerald-400"}>
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
          SAVWIPL certified facilities adhere to strict European diagnostic
          standards
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
                className={`rounded-3xl border p-6 flex flex-col justify-between space-y-5 transition-all shadow-xl relative overflow-hidden ${dealer.id.includes("corporate") ? (isVW ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-blue-500/70 shadow-blue-950/20" : "bg-gradient-to-b from-zinc-900 to-zinc-950 border-emerald-500/70 shadow-emerald-950/20") : isSelected ? (isVW ? "bg-zinc-900 border-blue-500 ring-1 ring-blue-500/50" : "bg-zinc-900 border-emerald-500 ring-1 ring-emerald-500/50") : "bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"}`}
              >
                {dealer.id.includes("corporate") && (
                  <div
                    className={`absolute top-0 right-0 px-3 py-1 text-white font-black italic text-[10px] rounded-bl-xl uppercase tracking-wider ${isVW ? "bg-blue-600" : "bg-emerald-600"}`}
                  >
                    SAVWIPL Corporate Center
                  </div>
                )}

                <div className="space-y-3.5">
                  {/* Type Badge & Location */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${dealer.type === "3S Facility" ? (isVW ? "bg-blue-950/80 text-blue-300 border-blue-800" : "bg-emerald-950/80 text-emerald-300 border-emerald-800") : dealer.type === "Showroom" ? "bg-sky-950/80 text-sky-300 border-sky-800" : "bg-amber-950/80 text-amber-300 border-amber-800"}`}
                    >
                      {dealer.type} (Sales, Service & Spares)
                    </span>
                    <span className="text-xs text-zinc-400 font-mono font-medium flex items-center gap-1">
                      <MapPin
                        className={`w-3 h-3 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                      className={`text-xs font-medium mt-0.5 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                          className={`w-3 h-3 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                        />{" "}
                        Sales Desk
                      </span>
                      <span
                        className={`text-xs font-bold text-white transition-colors mt-0.5 ${isVW ? "group-hover:text-blue-300" : "group-hover:text-emerald-300"}`}
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
                      className={`py-2.5 px-3 rounded-xl text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer ${isVW ? "bg-blue-600 hover:bg-blue-500 shadow-blue-950/40" : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/40"}`}
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
            className={`px-4 py-2 rounded-xl text-white text-xs font-bold cursor-pointer ${isVW ? "bg-blue-600" : "bg-emerald-600"}`}
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
                    className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${isVW ? "bg-blue-950 text-blue-400 border-blue-800" : "bg-emerald-950 text-emerald-400 border-emerald-800"}`}
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
                    className={`w-14 h-14 rounded-full border flex items-center justify-center mx-auto ${isVW ? "bg-blue-950 border-blue-500 text-blue-400" : "bg-emerald-950 border-emerald-500 text-emerald-400"}`}
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
                        className={isVW ? "text-blue-400" : "text-emerald-400"}
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
                        {isVW ? "VW" : "SKD"}-
                        {Math.floor(1e5 + Math.random() * 9e5)}
                      </span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Selected Vehicle:</span>
                      <span
                        className={`font-bold ${isVW ? "text-blue-400" : "text-emerald-400"}`}
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
                    className={`w-full py-3 rounded-xl text-white font-bold text-xs cursor-pointer ${isVW ? "bg-blue-600" : "bg-emerald-600"}`}
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
                        Select {isVW ? "Volkswagen" : "\u0160koda"} Model
                      </label>
                      <select
                        value={bookingModel}
                        onChange={(e) => setBookingModel(e.target.value)}
                        className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none ${isVW ? "focus:border-blue-500" : "focus:border-emerald-500"}`}
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
                              Škoda {m}
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
                        className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none ${isVW ? "focus:border-blue-500" : "focus:border-emerald-500"}`}
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
                        className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none font-mono ${isVW ? "focus:border-blue-500" : "focus:border-emerald-500"}`}
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
                      className={`w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none ${isVW ? "focus:border-blue-500" : "focus:border-emerald-500"}`}
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
                      className={`flex-1 py-2.5 rounded-xl text-white text-xs font-bold transition-colors cursor-pointer ${isVW ? "bg-blue-600 hover:bg-blue-500" : "bg-emerald-600 hover:bg-emerald-500"}`}
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
