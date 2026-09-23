import { useState, useEffect } from "react";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { PORSCHE_MODELS } from "../data/porscheData";
import { LAMBORGHINI_MODELS } from "../data/lamborghiniData";
import { BENTLEY_MODELS } from "../data/bentleyData";
import { SEAT_MODELS } from "../data/seatData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { BentleyLogo } from "./BentleyLogo";
import { SeatLogo } from "./SeatLogo";
export const CostCalculator = ({ brand = "skoda", initialModelId }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const isBentley = brand === "bentley";
  const isSeat = brand === "seat";
  const models = isSeat
    ? SEAT_MODELS
    : isBentley
    ? BENTLEY_MODELS
    : isLamborghini
    ? LAMBORGHINI_MODELS
    : isPorsche
    ? PORSCHE_MODELS
    : isAudi
      ? AUDI_MODELS
      : isVW
        ? VW_MODELS
        : SKODA_MODELS;
  const defaultModel = models.find((m) => m.id === initialModelId) || models[0];
  const [selectedModelId, setSelectedModelId] = useState(defaultModel.id);
  useEffect(() => {
    const valid = models.find((m) => m.id === initialModelId) || models[0];
    setSelectedModelId(valid.id);
  }, [brand, initialModelId]);
  const currentModel =
    models.find((m) => m.id === selectedModelId) || models[0];
  const [selectedVariantId, setSelectedVariantId] = useState(
    currentModel.variants[0]?.id || "",
  );
  const handleModelChange = (modelId) => {
    setSelectedModelId(modelId);
    const newModel = models.find((m) => m.id === modelId) || models[0];
    setSelectedVariantId(newModel.variants[0]?.id || "");
  };
  useEffect(() => {
    if (!currentModel.variants.some((v) => v.id === selectedVariantId)) {
      setSelectedVariantId(currentModel.variants[0]?.id || "");
    }
  }, [selectedModelId, currentModel]);
  const activeVariant =
    currentModel.variants.find((v) => v.id === selectedVariantId) ||
    currentModel.variants[0];
  const exShowroom =
    activeVariant?.baseExShowroom || currentModel.startingExShowroom;
  const [rtoRate, setRtoRate] = useState(10);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(9.25);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const rtoCost = Math.round(exShowroom * (rtoRate / 100));
  const insuranceCost = Math.round(exShowroom * 0.038 + 12e3);
  const fastagAndTcs = Math.round(
    exShowroom > 1e6 ? exShowroom * 0.01 + 3500 : 2500,
  );
  const totalOnRoad = exShowroom + rtoCost + insuranceCost + fastagAndTcs;
  const downPayment = Math.round(totalOnRoad * (downPaymentPercent / 100));
  const loanAmount = totalOnRoad - downPayment;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi =
    monthlyRate === 0
      ? Math.round(loanAmount / totalMonths)
      : Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1),
        );
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;
  return (
    <div className="space-y-8">
      {/* Title & Model Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1">
            {isSeat ? (
              <SeatLogo variant="emblem" size="sm" />
            ) : isBentley ? (
              <BentleyLogo variant="emblem" size="sm" />
            ) : isLamborghini ? (
              <LamborghiniLogo variant="emblem" size="sm" />
            ) : isPorsche ? (
              <PorscheLogo variant="emblem" size="sm" />
            ) : isAudi ? (
              <AudiLogo variant="emblem" size="sm" />
            ) : isVW ? (
              <VolkswagenLogo variant="emblem" size="sm" />
            ) : (
              <SkodaLogo variant="emblem" size="sm" />
            )}
            <span className={isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}>
              Financial Planning
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            {isBentley
              ? "Bentley On-Road Price & EMI Calculator"
              : isLamborghini
              ? "Lamborghini On-Road Price & EMI Calculator"
              : isPorsche
              ? "Porsche On-Road Price & EMI Calculator"
              : isAudi
                ? "Audi On-Road Price & EMI Calculator"
                : isVW
                  ? "Volkswagen On-Road Price & EMI Calculator"
                  : "\u0160koda On-Road Price & EMI Calculator"}
          </h2>
          <p className="text-sm text-zinc-400">
            Customize loan tenure, state taxes, down payment, and insurance for
            any {isSeat ? "SEAT" : isBentley ? "Bentley" : isLamborghini ? "Lamborghini" : isPorsche ? "Porsche" : isAudi ? "Audi" : isVW ? "Volkswagen" : "\u0160koda"} variant
          </p>
        </div>

        {/* Model Switcher */}
        <div className="inline-flex flex-wrap p-1 rounded-lg bg-zinc-900 border border-zinc-800 self-start">
          {models.map((car) => {
            const shortName = car.name
              .replace("\u0160koda ", "")
              .replace("Volkswagen ", "")
              .replace("Audi ", "")
              .replace("Porsche ", "")
              .replace("Lamborghini ", "");
            return (
              <button
                key={car.id}
                onClick={() => handleModelChange(car.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${selectedModelId === car.id ? (isSeat ? "bg-orange-600 text-white shadow-sm" : isBentley ? "bg-green-600 text-white shadow-sm" : isLamborghini ? "bg-yellow-600 text-white shadow-sm" : isPorsche ? "bg-amber-600 text-white shadow-sm" : isAudi ? "bg-red-600 text-white shadow-sm" : isVW ? "bg-blue-600 text-white shadow-sm" : "bg-emerald-600 text-white shadow-sm") : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`}
              >
                {shortName}
                {car.notSoldInIndia && (
                  <span className="ml-1 text-[9px] px-1 py-0.2 rounded bg-zinc-700/60 text-zinc-300">
                    Not in India
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {currentModel.notSoldInIndia && (
        <div className="flex items-start gap-2 p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-300 text-xs">
          <span className="shrink-0 mt-0.5">⚠</span>
          <p>
            <strong>Not Sold in India.</strong> The {currentModel.name} is not officially available
            in India, so the figures below are illustrative only — based on its global list price,
            not a real Indian on-road price.
          </p>
        </div>
      )}

      {/* Main Grid: Left Breakdown, Right EMI Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: On-Road Breakdown */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-6 space-y-5">
            <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
              <div>
                <span
                  className={`text-xs font-semibold ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  {currentModel.name}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {activeVariant.name}
                </h3>
                <span className="text-xs text-zinc-400">
                  {activeVariant.engineOptions[0]}
                </span>
              </div>

              {/* Trim Selector Dropdown */}
              <div className="w-44">
                <label className="text-[10px] text-zinc-500 uppercase font-semibold block mb-1">
                  Change Trim
                </label>
                <select
                  value={selectedVariantId}
                  onChange={(e) => setSelectedVariantId(e.target.value)}
                  className={`w-full text-xs p-2 rounded-lg bg-zinc-950 border border-zinc-700 text-white focus:outline-none ${isSeat ? "focus:border-orange-500" : isBentley ? "focus:border-green-500" : isLamborghini ? "focus:border-yellow-500" : isPorsche ? "focus:border-amber-500" : isAudi ? "focus:border-red-500" : isVW ? "focus:border-blue-500" : "focus:border-emerald-500"}`}
                >
                  {currentModel.variants.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Itemization */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-800/60">
                <span className="text-zinc-300">Ex-Showroom Price</span>
                <span className="font-bold text-white text-sm">
                  ₹{exShowroom.toLocaleString()}
                </span>
              </div>

              <div className="space-y-1.5 py-1.5 border-b border-zinc-800/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-zinc-300">
                      State RTO & Road Tax ({rtoRate}%)
                    </span>
                  </div>
                  <span className="font-semibold text-white">
                    ₹{rtoCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  {[
                    { state: "DL/UK (8%)", rate: 8 },
                    { state: "MH/GJ (10%)", rate: 10 },
                    { state: "KA/TS (14%)", rate: 14 },
                  ].map((st) => (
                    <button
                      key={st.state}
                      onClick={() => setRtoRate(st.rate)}
                      className={`text-[10px] px-2 py-1 rounded border transition-colors cursor-pointer ${rtoRate === st.rate ? (isSeat ? "bg-orange-600 text-white border-orange-500" : isBentley ? "bg-green-600 text-white border-green-500" : isLamborghini ? "bg-yellow-600 text-white border-yellow-500" : isPorsche ? "bg-amber-600 text-white border-amber-500" : isAudi ? "bg-red-600 text-white border-red-500" : isVW ? "bg-blue-600 text-white border-blue-500" : "bg-emerald-600 text-white border-emerald-500") : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white"}`}
                    >
                      {st.state}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-zinc-800/60">
                <span className="text-zinc-300">
                  Comprehensive Zero-Dep Insurance (1+3 Years)
                </span>
                <span className="font-semibold text-white">
                  ₹{insuranceCost.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-zinc-800/60">
                <span className="text-zinc-300">
                  FASTag & 1% TCS / Registration
                </span>
                <span className="font-semibold text-white">
                  ₹{fastagAndTcs.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-bold text-white">
                  Estimated On-Road Price
                </span>
                <span
                  className={`text-xl font-black ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                >
                  ₹{totalOnRoad.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Loan & EMI Simulator */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-6 space-y-5">
            <h3 className="text-lg font-bold text-white">
              Finance & EMI Simulator
            </h3>

            {/* Down Payment Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-300">
                <span>
                  Down Payment ({downPaymentPercent}%):{" "}
                  <strong>₹{downPayment.toLocaleString()}</strong>
                </span>
                <span className="text-zinc-500">
                  Loan: ₹{loanAmount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer ${isSeat ? "accent-orange-500" : isBentley ? "accent-green-500" : isLamborghini ? "accent-yellow-500" : isPorsche ? "accent-amber-500" : isAudi ? "accent-red-500" : isVW ? "accent-blue-500" : "accent-emerald-500"}`}
              />
            </div>

            {/* Loan Tenure Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-300">
                <span>
                  Tenure:{" "}
                  <strong>
                    {tenureYears} Years ({totalMonths} Months)
                  </strong>
                </span>
                <span className="text-zinc-500">Typical: 5 Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer ${isSeat ? "accent-orange-500" : isBentley ? "accent-green-500" : isLamborghini ? "accent-yellow-500" : isPorsche ? "accent-amber-500" : isAudi ? "accent-red-500" : isVW ? "accent-blue-500" : "accent-emerald-500"}`}
              />
            </div>

            {/* Interest Rate Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-300">
                <span>
                  Interest Rate: <strong>{interestRate}% p.a.</strong>
                </span>
                <span className="text-zinc-500">Bank Auto Loan</span>
              </div>
              <input
                type="range"
                min="8.0"
                max="13.0"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className={`w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer ${isSeat ? "accent-orange-500" : isBentley ? "accent-green-500" : isLamborghini ? "accent-yellow-500" : isPorsche ? "accent-amber-500" : isAudi ? "accent-red-500" : isVW ? "accent-blue-500" : "accent-emerald-500"}`}
              />
            </div>

            {/* Big Calculated EMI Banner */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-400 block font-medium">
                    Estimated Monthly EMI
                  </span>
                  <span
                    className={`text-3xl font-black ${isSeat ? "text-orange-400" : isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    ₹{emi.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-zinc-500">
                    for {totalMonths} months
                  </span>
                </div>
                <div className="text-right text-xs">
                  <span className="text-zinc-500 block">Total Interest</span>
                  <span className="font-bold text-zinc-200">
                    ₹{totalInterest.toLocaleString()}
                  </span>
                  <span className="text-zinc-500 block mt-1">
                    Total Loan Repaid
                  </span>
                  <span className="font-bold text-white">
                    ₹{totalPayment.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
