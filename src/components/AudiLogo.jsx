import { motion } from "motion/react";

// Audi's four-rings emblem rendered as inline SVG (no external image asset needed).
// Ring centers are spaced closer than 2×radius so each ring visibly overlaps
// its neighbor, like the real Audi emblem's interlocking rings.
const AudiRings = ({ className = "" }) => (
  <svg viewBox="0 0 180 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="26" stroke="currentColor" strokeWidth="6.5" />
    <circle cx="70" cy="30" r="26" stroke="currentColor" strokeWidth="6.5" />
    <circle cx="110" cy="30" r="26" stroke="currentColor" strokeWidth="6.5" />
    <circle cx="150" cy="30" r="26" stroke="currentColor" strokeWidth="6.5" />
  </svg>
);

export const AudiLogo = ({
  variant = "full",
  size = "md",
  className = "",
  animated = false,
}) => {
  const sizeMap = {
    sm: { emblem: "w-9 h-3", text: "text-sm", gap: "gap-1.5" },
    md: { emblem: "w-12 h-4", text: "text-base", gap: "gap-2" },
    lg: { emblem: "w-[4.5rem] h-6", text: "text-lg", gap: "gap-2.5" },
    xl: { emblem: "w-24 h-8", text: "text-2xl", gap: "gap-3.5" },
  };
  const { emblem: emblemSize, text: textSize, gap } = sizeMap[size];
  const EmblemImg = (
    <div
      className={`${emblemSize} flex-shrink-0 flex items-center justify-center text-zinc-100 drop-shadow-[0_2px_10px_rgba(220,38,38,0.35)]`}
    >
      <AudiRings className="w-full h-full" />
    </div>
  );
  const LogoContainer = animated ? motion.div : "div";
  const animProps = animated
    ? {
        whileHover: { scale: 1.05 },
        transition: { type: "spring", stiffness: 350, damping: 20 },
      }
    : {};
  if (variant === "emblem") {
    return (
      <LogoContainer
        {...animProps}
        className={`inline-flex items-center ${className}`}
      >
        {EmblemImg}
      </LogoContainer>
    );
  }
  if (variant === "wordmark") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span
          className={`font-black tracking-normal text-white ${textSize} select-none`}
        >
          AUDI
        </span>
      </div>
    );
  }
  return (
    <LogoContainer
      {...animProps}
      className={`inline-flex items-center ${gap} ${className} cursor-pointer group`}
    >
      {EmblemImg}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-normal text-white ${textSize} leading-none group-hover:text-red-400 transition-colors`}
          >
            AUDI
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-red-400/90 hidden sm:inline">
            INDIA
          </span>
        </div>
      </div>
    </LogoContainer>
  );
};
