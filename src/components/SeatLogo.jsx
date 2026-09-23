import { motion } from "motion/react";

export const SeatLogo = ({
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
      className={`${emblemSize} flex-shrink-0 drop-shadow-[0_2px_10px_rgba(228,0,43,0.45)]`}
      aria-label="SEAT"
    >
      {/* Outer chevron / flag shape */}
      <path
        d="M32 4 L60 24 L60 52 L32 68 L4 52 L4 24 Z"
        fill="#111111"
        stroke="#c9c9c9"
        strokeWidth="1.4"
      />
      {/* Red diagonal flag sweep */}
      <path
        d="M10 26 L54 14 L54 24 L18 34 Z"
        fill="#e4002b"
      />
      <path
        d="M10 46 L54 58 L54 48 L18 38 Z"
        fill="#e4002b"
      />
      {/* Stylised "S" */}
      <text
        x="32"
        y="45"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="26"
        fill="#f5f5f5"
      >
        S
      </text>
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
        <span className={`font-black text-white ${textSize} select-none tracking-wide`}>SEAT</span>
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
            className={`font-black text-white ${textSize} leading-none group-hover:text-orange-400 transition-colors tracking-wide`}
          >
            SEAT
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400/90 hidden sm:inline">
            GLOBAL
          </span>
        </div>
      </div>
    </LogoContainer>
  );
};
