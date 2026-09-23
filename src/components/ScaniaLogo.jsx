import { motion } from "motion/react";

export const ScaniaLogo = ({
  variant = "full",
  size = "md",
  className = "",
  animated = false,
}) => {
  const sizeMap = {
    sm: { emblem: "w-6 h-7", text: "text-sm", gap: "gap-1.5" },
    md: { emblem: "w-8 h-9", text: "text-base", gap: "gap-2" },
    lg: { emblem: "w-10 h-12", text: "text-lg", gap: "gap-2.5" },
    xl: { emblem: "w-14 h-16", text: "text-2xl", gap: "gap-3.5" },
  };
  const { emblem: emblemSize, text: textSize, gap } = sizeMap[size];

  // A simplified geometric griffin silhouette on a shield, echoing Scania's
  // real emblem (taken from the historic Scania province coat of arms).
  const EmblemSvg = (
    <svg
      viewBox="0 0 64 72"
      className={`${emblemSize} flex-shrink-0 drop-shadow-[0_2px_10px_rgba(140,13,26,0.45)]`}
      aria-label="Scania"
    >
      {/* Shield outline */}
      <path
        d="M6 6 H58 V38 C58 54, 46 64, 32 68 C18 64, 6 54, 6 38 Z"
        fill="#8c0d1a"
        stroke="#3a3d40"
        strokeWidth="2"
      />
      {/* Griffin body (simplified geometric silhouette) */}
      <path
        d="M32 16 C 26 16, 21 20, 20 26 C 17 27, 14 30, 14 34 C 17 33, 19 33, 21 34 C 20 38, 21 42, 24 45 C 22 47, 21 50, 22 53 C 25 51, 27 49, 29 47 C 30 49, 31 51, 32 53 C 33 51, 34 49, 35 47 C 37 49, 39 51, 42 53 C 43 50, 42 47, 40 45 C 43 42, 44 38, 43 34 C 45 33, 47 33, 50 34 C 50 30, 47 27, 44 26 C 43 20, 38 16, 32 16 Z"
        fill="#e5e5e5"
      />
      {/* Wing detail lines */}
      <path d="M20 26 C 16 24, 12 24, 9 26" stroke="#e5e5e5" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M44 26 C 48 24, 52 24, 55 26" stroke="#e5e5e5" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* Griffin head/beak */}
      <path d="M32 16 C 30 12, 30 9, 32 6 C 34 9, 34 12, 32 16 Z" fill="#e5e5e5" />
      {/* Base ring */}
      <ellipse cx="32" cy="58" rx="9" ry="2.4" fill="none" stroke="#e5e5e5" strokeWidth="1" opacity="0.7" />
    </svg>
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
      <LogoContainer {...animProps} className={`inline-flex items-center ${className}`}>
        {EmblemSvg}
      </LogoContainer>
    );
  }
  if (variant === "wordmark") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className={`font-black text-white ${textSize} select-none tracking-wide`}>SCANIA</span>
      </div>
    );
  }
  return (
    <LogoContainer
      {...animProps}
      className={`inline-flex items-center ${gap} ${className} cursor-pointer group`}
    >
      {EmblemSvg}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black text-white ${textSize} leading-none group-hover:text-rose-400 transition-colors tracking-wide`}
          >
            SCANIA
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-rose-400/90 hidden sm:inline">
            INDIA
          </span>
        </div>
      </div>
    </LogoContainer>
  );
};
