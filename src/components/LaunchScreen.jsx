import { motion } from "motion/react";
import { Building2 } from "lucide-react";
import { GroupPersonalities } from "./GroupPersonalities";

export const LaunchScreen = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased flex flex-col relative overflow-hidden">
      {/* Ambient brand-colored glow backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-red-600/10 blur-3xl" />
      </div>

      {/* Minimal corporate strip */}
      <div className="relative z-10 text-center pt-8 px-4">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-zinc-500"
        >
          <Building2 className="w-3.5 h-3.5" />
          Škoda Auto Volkswagen India Private Limited
        </motion.p>
      </div>

      {/* Big stylized German masthead */}
      <div className="relative z-10 text-center px-4 pt-6 pb-2">
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white normal-case"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Groupe{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            die Volkswagen
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs sm:text-sm text-zinc-500 mt-2 italic tracking-wide"
        >
          Sieben Marken. Eine Philosophie. — Seven Brands, One Philosophy.
        </motion.p>
      </div>

      {/* Main launch content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-5xl">
          <GroupPersonalities
            onSelectBrand={onEnter}
            badgeLabel="One Group, Many Personalities"
            heading="Different Personalities. Shared DNA."
            description="Škoda, Volkswagen, Audi, Porsche, Lamborghini, Bentley, and SEAT — seven distinct personalities built on shared Volkswagen Group engineering (SEAT is not officially sold in India). Click a brand to enter its world."
          />
        </div>
      </div>

      {/* Footer hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 text-center pb-6 px-4"
      >
        <p className="text-[11px] text-zinc-600">
          Chakan (Pune) & Aurangabad, Maharashtra, India · Select a brand to enter the showcase
        </p>
      </motion.div>
    </div>
  );
};
