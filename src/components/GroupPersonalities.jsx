import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { BentleyLogo } from "./BentleyLogo";
import { SeatLogo } from "./SeatLogo";

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
  {
    id: "lamborghini",
    Logo: LamborghiniLogo,
    name: "Lamborghini",
    tagline: "Expect the Unexpected",
    accent: "text-yellow-400",
    border: "hover:border-yellow-600/70",
    glow: "hover:shadow-yellow-950/60",
    description: "Raging-bull theater — naturally-aspirated V10s and hybrid V12 flagships since 1963.",
  },
  {
    id: "bentley",
    Logo: BentleyLogo,
    name: "Bentley",
    tagline: "Relentlessly Extraordinary",
    accent: "text-green-400",
    border: "hover:border-green-600/70",
    glow: "hover:shadow-green-950/60",
    description: "Hand-crafted grand touring — twin-turbo W12 power and Crewe craftsmanship since 1919.",
  },
  {
    id: "seat",
    Logo: SeatLogo,
    name: "SEAT",
    tagline: "Not Sold in India",
    accent: "text-orange-400",
    border: "hover:border-orange-600/70",
    glow: "hover:shadow-orange-950/60",
    description: "Spanish value-sport styling and the birthplace of Cupra — the one Group brand absent from India since 1950.",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {BRAND_CARDS.map((brand, i) => (
          <motion.button
            key={brand.id}
            onClick={() => onSelectBrand?.(brand.id)}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 90 }}
            whileHover={{ y: -6 }}
            className={`group text-left rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6 transition-all cursor-pointer shadow-lg overflow-hidden ${brand.border} ${brand.glow}`}
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <brand.Logo variant="emblem" size="sm" animated className="shrink-0" />
              <span
                className="font-black text-white text-sm sm:text-base leading-tight whitespace-nowrap min-w-0 tracking-wide -ml-0.5"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                {brand.name}
              </span>
            </div>
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
