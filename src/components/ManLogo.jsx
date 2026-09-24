import { motion } from "motion/react";

export const ManLogo = ({
  variant = "full",
  size = "md",
  className = "",
  animated = false,
}) => {
  const sizeMap = {
    sm: { emblem: "w-7 h-6", text: "text-sm", gap: "gap-1.5" },
    md: { emblem: "w-9 h-8", text: "text-base", gap: "gap-2" },
    lg: { emblem: "w-11 h-10", text: "text-lg", gap: "gap-2.5" },
    xl: { emblem: "w-16 h-14", text: "text-2xl", gap: "gap-3.5" },
  };
  const { emblem: emblemSize, text: textSize, gap } = sizeMap[size];

  // A clean geometric take on MAN's real emblem: a bold "MAN" wordmark set
  // inside a red lozenge/rectangle — MAN's signature brand mark is typographic
  // rather than pictorial, so this stays true to the real thing rather than
  // inventing an illustration.
  const EmblemSvg = (
    <svg
      viewBox="0 0 76 64"
      className={`${emblemSize} flex-shrink-0 drop-shadow-[0_2px_10px_rgba(226,0,26,0.45)]`}
      aria-label="MAN"
    >
      <rect x="2" y="2" width="72" height="60" rx="4" fill="#e2001a" stroke="#3a3d40" strokeWidth="2" />
      <text
        x="38"
        y="43"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#ffffff"
        letterSpacing="1"
      >
        MAN
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
        <span className={`font-black text-white ${textSize} select-none tracking-wide`}>MAN</span>
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
            className={`font-black text-white ${textSize} leading-none group-hover:text-sky-400 transition-colors tracking-wide`}
          >
            MAN
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400/90 hidden sm:inline">
            TRUCK &amp; BUS
          </span>
        </div>
      </div>
    </LogoContainer>
  );
};
