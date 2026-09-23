import { motion } from "motion/react";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { PorscheLogo } from "./PorscheLogo";
import { LamborghiniLogo } from "./LamborghiniLogo";
import { BentleyLogo } from "./BentleyLogo";
import { SeatLogo } from "./SeatLogo";
import { ScaniaLogo } from "./ScaniaLogo";

const BRAND_META = {
  skoda: {
    Logo: SkodaLogo,
    name: "Škoda",
    tagline: "Simply Clever",
    accent: "text-emerald-400",
    ring: "border-emerald-500/40",
    glow: "bg-emerald-600/20",
    bar: "from-emerald-600 to-emerald-400",
  },
  volkswagen: {
    Logo: VolkswagenLogo,
    name: "Volkswagen",
    tagline: "Das Auto",
    accent: "text-blue-400",
    ring: "border-blue-500/40",
    glow: "bg-blue-600/20",
    bar: "from-blue-600 to-blue-400",
  },
  audi: {
    Logo: AudiLogo,
    name: "Audi",
    tagline: "Vorsprung durch Technik",
    accent: "text-red-400",
    ring: "border-red-500/40",
    glow: "bg-red-600/20",
    bar: "from-red-600 to-red-400",
  },
  porsche: {
    Logo: PorscheLogo,
    name: "Porsche",
    tagline: "There Is No Substitute",
    accent: "text-amber-400",
    ring: "border-amber-500/40",
    glow: "bg-amber-600/20",
    bar: "from-amber-600 to-amber-400",
  },
  lamborghini: {
    Logo: LamborghiniLogo,
    name: "Lamborghini",
    tagline: "Expect the Unexpected",
    accent: "text-yellow-400",
    ring: "border-yellow-500/40",
    glow: "bg-yellow-600/20",
    bar: "from-yellow-600 to-yellow-400",
  },
  bentley: {
    Logo: BentleyLogo,
    name: "Bentley",
    tagline: "Relentlessly Extraordinary",
    accent: "text-green-400",
    ring: "border-green-500/40",
    glow: "bg-green-600/20",
    bar: "from-green-600 to-green-400",
  },
  seat: {
    Logo: SeatLogo,
    name: "SEAT",
    tagline: "Not Sold in India — Global Reference Only",
    accent: "text-orange-400",
    ring: "border-orange-500/40",
    glow: "bg-orange-600/20",
    bar: "from-orange-600 to-orange-400",
  },
  scania: {
    Logo: ScaniaLogo,
    name: "Scania",
    tagline: "Driven By Dreams",
    accent: "text-rose-400",
    ring: "border-rose-500/40",
    glow: "bg-rose-600/20",
    bar: "from-rose-600 to-rose-400",
  },
};

export const BrandLoadingScreen = ({ brand = "skoda", durationMs = 5000 }) => {
  const meta = BRAND_META[brand] || BRAND_META.skoda;
  const { Logo } = meta;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center relative overflow-hidden">
      <div className={`pointer-events-none absolute inset-0 flex items-center justify-center`}>
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1.4, opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          className={`w-[28rem] h-[28rem] rounded-full blur-3xl ${meta.glow}`}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`p-6 rounded-full border-2 ${meta.ring} bg-zinc-900/60 shadow-2xl`}
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Logo variant="emblem" size="xl" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-4xl sm:text-5xl font-black tracking-tight text-white"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {meta.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className={`text-lg sm:text-xl font-semibold italic tracking-wide ${meta.accent}`}
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {meta.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-56 sm:w-64 mt-4"
        >
          <div className="h-1 w-full rounded-full bg-zinc-800 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: durationMs / 1000, ease: "linear" }}
              className={`h-full rounded-full bg-gradient-to-r ${meta.bar}`}
            />
          </div>
          <p className="text-[11px] text-zinc-500 mt-2 tracking-wider uppercase">
            Preparing your {meta.name} experience
          </p>
        </motion.div>
      </div>
    </div>
  );
};
