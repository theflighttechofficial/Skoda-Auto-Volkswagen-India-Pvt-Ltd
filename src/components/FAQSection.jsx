import { useState, useEffect } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ALL_SKODA_FAQS } from "../data/skodaData";
import { ALL_VW_FAQS } from "../data/vwData";
import { ALL_AUDI_FAQS } from "../data/audiData";
import { ALL_PORSCHE_FAQS } from "../data/porscheData";
import { ALL_LAMBORGHINI_FAQS } from "../data/lamborghiniData";
import { ALL_BENTLEY_FAQS } from "../data/bentleyData";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { BentleyLogo } from "./BentleyLogo";
export const FAQSection = ({ brand = "skoda" }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const isBentley = brand === "bentley";
  const faqs = isBentley
    ? ALL_BENTLEY_FAQS
    : isLamborghini
    ? ALL_LAMBORGHINI_FAQS
    : isPorsche
    ? ALL_PORSCHE_FAQS
    : isAudi
      ? ALL_AUDI_FAQS
      : isVW
        ? ALL_VW_FAQS
        : ALL_SKODA_FAQS;
  const [openQuestions, setOpenQuestions] = useState(
    () => new Set(faqs.slice(0, 2).map((f) => f.question)),
  );
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    setOpenQuestions(new Set(faqs.slice(0, 2).map((f) => f.question)));
    setActiveCategory("All");
  }, [brand]);
  const categories = [
    "All",
    "Safety",
    "Performance",
    "Comparison",
    "Maintenance",
  ];
  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);
  const toggleQuestion = (question) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(question)) {
        next.delete(question);
      } else {
        next.add(question);
      }
      return next;
    });
  };
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center space-y-2">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold ${isBentley ? "bg-green-950/80 border-green-800 text-green-400" : isLamborghini ? "bg-yellow-950/80 border-yellow-800 text-yellow-400" : isPorsche ? "bg-amber-950/80 border-amber-800 text-amber-400" : isAudi ? "bg-red-950/80 border-red-800 text-red-400" : isVW ? "bg-blue-950/80 border-blue-800 text-blue-400" : "bg-emerald-950/80 border-emerald-800 text-emerald-400"}`}
        >
          {isBentley ? (
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
            <HelpCircle className="w-3.5 h-3.5" />
          )}
          <span>
            {isLamborghini
              ? "Lamborghini Ownership & Engineering Guide"
              : isPorsche
              ? "Porsche Ownership & Engineering Guide"
              : isAudi
                ? "Audi Ownership & Engineering Guide"
                : isVW
                  ? "Volkswagen Ownership & Engineering Guide"
                  : "Knowledge & Ownership Guide"}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-zinc-400">
          Everything you need to know about safety ratings, TSI engines, model
          choices, and maintenance
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeCategory === cat ? (isBentley ? "bg-green-600 text-white shadow-sm" : isLamborghini ? "bg-yellow-600 text-white shadow-sm" : isPorsche ? "bg-amber-600 text-white shadow-sm" : isAudi ? "bg-red-600 text-white shadow-sm" : isVW ? "bg-blue-600 text-white shadow-sm" : "bg-emerald-600 text-white shadow-sm") : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openQuestions.has(faq.question);
          return (
            <div
              key={faq.question}
              className="rounded-xl bg-zinc-900/80 border border-zinc-800 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleQuestion(faq.question)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-zinc-800/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 ${isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    {faq.category}
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? (isBentley ? "rotate-180 text-green-400" : isLamborghini ? "rotate-180 text-yellow-400" : isPorsche ? "rotate-180 text-amber-400" : isAudi ? "rotate-180 text-red-400" : isVW ? "rotate-180 text-blue-400" : "rotate-180 text-emerald-400") : ""}`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
