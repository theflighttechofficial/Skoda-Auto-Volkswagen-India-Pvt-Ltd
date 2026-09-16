import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";

const BRAND_CARDS = [
  {
    id: "skoda",
    Logo: SkodaLogo,
    name: "Škoda",
    tagline: "Simply Clever",
    accent: "text-emerald-400",
    border: "hover:border-emerald-600/70",
    glow: "hover:shadow-emerald-950/60",
    description: "Practical ingenuity — clever storage, honest value, and Czech engineering since 1895.",
  },
  {
    id: "volkswagen",
    Logo: VolkswagenLogo,
    name: "Volkswagen",
    tagline: "Das Auto",
    accent: "text-blue-400",
    border: "hover:border-blue-600/70",
    glow: "hover:shadow-blue-950/60",
    description: "German engineering for everyone — solid, confident, and built to last since 1937.",
  },
  {
    id: "audi",
    Logo: AudiLogo,
    name: "Audi",
    tagline: "Vorsprung durch Technik",
    accent: "text-red-400",
    border: "hover:border-red-600/70",
    glow: "hover:shadow-red-950/60",
    description: "Progress through technology — quattro performance and progressive luxury since 1909.",
  },
  {
    id: "porsche",
    Logo: PorscheLogo,
    name: "Porsche",
    tagline: "There Is No Substitute",
    accent: "text-amber-400",
    border: "hover:border-amber-600/70",
    glow: "hover:shadow-amber-950/60",
    description: "Motorsport-derived engineering — rear-engine icons and PDK precision since 1931.",
  },
];

export const GroupPersonalities = ({
  onSelectBrand,
  badgeLabel = "One Group, Many Personalities",
  heading = "Different Personalities. Shared DNA.",
  description = "Three brands, one Volkswagen Group platform strategy. Click a brand to switch the entire interface to its world.",
}) => {
  return (
    <div className="space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-[11px] font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> {badgeLabel}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
          {heading}
        </h2>
        <p className="text-sm text-zinc-400 mt-2">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {BRAND_CARDS.map((brand, i) => (
          <motion.button
            key={brand.id}
            onClick={() => onSelectBrand?.(brand.id)}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 90 }}
            whileHover={{ y: -6 }}
            className={`group text-left rounded-3xl bg-zinc-900/70 border border-zinc-800 p-7 transition-all cursor-pointer shadow-lg ${brand.border} ${brand.glow}`}
          >
            <brand.Logo variant="full" size="lg" animated />
            <p className={`text-sm font-black italic mt-4 ${brand.accent}`}>{brand.tagline}</p>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{brand.description}</p>
            <span className={`inline-block mt-4 text-[11px] font-bold ${brand.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
              Enter {brand.name} →
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
