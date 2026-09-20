import { motion } from "motion/react";

export const BentleyLogo = ({
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

  const EmblemSvg = (
    <svg
      viewBox="0 0 64 72"
      className={`${emblemSize} flex-shrink-0 drop-shadow-[0_2px_10px_rgba(0,51,47,0.45)]`}
      aria-label="Bentley"
    >
      {/* Left wing */}
      <path
        d="M2 30 C 10 22, 18 20, 24 24 C 19 26, 15 29, 12 33 C 17 32, 21 32, 25 34 C 20 37, 16 40, 13 44 C 18 43, 22 44, 26 46 L 24 50 C 17 49, 10 46, 2 30 Z"
        fill="#c0c0c0"
      />
      {/* Right wing */}
      <path
        d="M62 30 C 54 22, 46 20, 40 24 C 45 26, 49 29, 52 33 C 47 32, 43 32, 39 34 C 44 37, 48 40, 51 44 C 46 43, 42 44, 38 46 L 40 50 C 47 49, 54 46, 62 30 Z"
        fill="#c0c0c0"
      />
      {/* Central shield */}
      <rect x="24" y="18" width="16" height="20" rx="1.5" fill="#00332f" stroke="#c0c0c0" strokeWidth="1.2" />
      {/* Winged "B" */}
      <text
        x="32"
        y="34"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="bold"
        fontSize="16"
        fill="#c0c0c0"
      >
        B
      </text>
      {/* Base ring */}
      <ellipse cx="32" cy="46" rx="9" ry="3" fill="none" stroke="#c0c0c0" strokeWidth="1.2" />
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
        <span className={`font-black text-white ${textSize} select-none tracking-wide`}>BENTLEY</span>
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
            className={`font-black text-white ${textSize} leading-none group-hover:text-green-400 transition-colors tracking-wide`}
          >
            BENTLEY
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-green-400/90 hidden sm:inline">
            INDIA
          </span>
        </div>
      </div>
    </LogoContainer>
  );
};
