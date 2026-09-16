import { motion } from "motion/react";

// A simplified, stylized take on the Porsche crest shield — not a pixel
// reproduction of the trademarked emblem, but recognizable: black shield
// outline, red/black quartered field, gold antler motif, "PORSCHE" banner.
const PorscheCrest = ({ className = "" }) => (
  <svg viewBox="0 0 120 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M60 4 L112 20 V70 C112 104 90 126 60 136 C30 126 8 104 8 70 V20 Z"
      fill="#18181b"
      stroke="#d4af37"
      strokeWidth="3"
    />
    <rect x="14" y="34" width="92" height="18" fill="#d4af37" />
    <text x="60" y="47.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#18181b" letterSpacing="1">
      PORSCHE
    </text>
    <path d="M14 52 H106 V96 C106 96 82 78 60 78 C38 78 14 96 14 96 Z" fill="#c1121f" />
    <path d="M14 52 H60 V78 C48 78 30 84 14 96 Z" fill="#18181b" opacity="0.85" />
    <path d="M60 52 H106 V96 C90 84 72 78 60 78 Z" fill="#18181b" opacity="0.85" />
    <path
      d="M60 60 C56 56 48 56 46 62 C44 67 48 70 52 70 C48 72 46 76 49 80 C52 84 58 82 60 78 C62 82 68 84 71 80 C74 76 72 72 68 70 C72 70 76 67 74 62 C72 56 64 56 60 60 Z"
      fill="#d4af37"
    />
    <path
      d="M60 108 C48 108 40 100 40 100 C40 100 48 104 60 104 C72 104 80 100 80 100 C80 100 72 108 60 108 Z"
      fill="#d4af37"
    />
  </svg>
);

export const PorscheLogo = ({
  variant = "full",
  size = "md",
  className = "",
  animated = false,
}) => {
  const sizeMap = {
    sm: { emblem: "w-5 h-6", text: "text-sm", gap: "gap-1.5" },
    md: { emblem: "w-7 h-8", text: "text-base", gap: "gap-2" },
    lg: { emblem: "w-9 h-10", text: "text-lg", gap: "gap-2.5" },
    xl: { emblem: "w-12 h-14", text: "text-2xl", gap: "gap-3.5" },
  };
  const { emblem: emblemSize, text: textSize, gap } = sizeMap[size];
  const EmblemImg = (
    <div
      className={`${emblemSize} flex-shrink-0 flex items-center justify-center drop-shadow-[0_2px_10px_rgba(193,18,28,0.35)]`}
    >
      <PorscheCrest className="w-full h-full" />
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
      <LogoContainer {...animProps} className={`inline-flex items-center ${className}`}>
        {EmblemImg}
      </LogoContainer>
    );
  }
  if (variant === "wordmark") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className={`font-black text-white ${textSize} select-none`}>PORSCHE</span>
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
            className={`font-black text-white ${textSize} leading-none group-hover:text-red-400 transition-colors`}
          >
            PORSCHE
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-red-400/90 hidden sm:inline">
            INDIA
          </span>
        </div>
      </div>
    </LogoContainer>
  );
};
