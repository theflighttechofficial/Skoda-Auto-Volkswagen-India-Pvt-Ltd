import { useState, useEffect } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ALL_SKODA_FAQS } from "../data/skodaData";
import { ALL_VW_FAQS } from "../data/vwData";
import { VolkswagenLogo } from "./VolkswagenLogo";
export const FAQSection = ({ brand = "skoda" }) => {
  const isVW = brand === "volkswagen";
  const faqs = isVW ? ALL_VW_FAQS : ALL_SKODA_FAQS;
  const [openIndices, setOpenIndices] = useState([0, 1]);
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    setOpenIndices([0, 1]);
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
  const toggleIndex = (idx) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center space-y-2">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold ${isVW ? "bg-blue-950/80 border-blue-800 text-blue-400" : "bg-emerald-950/80 border-emerald-800 text-emerald-400"}`}
        >
          {isVW ? (
            <VolkswagenLogo variant="emblem" size="sm" />
          ) : (
            <HelpCircle className="w-3.5 h-3.5" />
          )}
          <span>
            {isVW
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
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeCategory === cat ? (isVW ? "bg-blue-600 text-white shadow-sm" : "bg-emerald-600 text-white shadow-sm") : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              className="rounded-xl bg-zinc-900/80 border border-zinc-800 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-zinc-800/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 ${isVW ? "text-blue-400" : "text-emerald-400"}`}
                  >
                    {faq.category}
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? (isVW ? "rotate-180 text-blue-400" : "rotate-180 text-emerald-400") : ""}`}
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
