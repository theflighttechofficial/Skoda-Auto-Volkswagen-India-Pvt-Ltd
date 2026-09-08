import { motion } from "motion/react";
export const SkodaLogo = ({
  variant = "full",
  size = "md",
  className = "",
  animated = false,
}) => {
  const sizeMap = {
    sm: { emblem: "w-6 h-6", text: "text-sm", gap: "gap-1.5" },
    md: { emblem: "w-8 h-8", text: "text-base", gap: "gap-2" },
    lg: { emblem: "w-10 h-10", text: "text-lg", gap: "gap-2.5" },
    xl: { emblem: "w-14 h-14", text: "text-2xl", gap: "gap-3.5" },
  };
  const { emblem: emblemSize, text: textSize, gap } = sizeMap[size];
  const EmblemSvg = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${emblemSize} flex-shrink-0 drop-shadow-[0_2px_8px_rgba(16,185,129,0.35)]`}
      aria-label="Škoda Winged Arrow Emblem"
    >
      <defs>
        {/* Exterior metallic ring gradient */}
        <linearGradient id="skodaRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        {/* Inner glow disc */}
        <radialGradient id="skodaInnerDisc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#064e3b" stopOpacity="0.9" />
          <stop offset="85%" stopColor="#022c22" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#011b14" stopOpacity="1" />
        </radialGradient>
        {/* Winged Arrow Chrome-Emerald Gradient */}
        <linearGradient id="skodaArrowGrad" x1="15%" y1="20%" x2="85%" y2="80%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="45%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>

      {/* Outer circular bezel */}
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke="url(#skodaRingGrad)"
        strokeWidth="5"
        fill="url(#skodaInnerDisc)"
      />

      {/* Inner thin silver/emerald boundary ring */}
      <circle
        cx="50"
        cy="50"
        r="41"
        stroke="#34d399"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />

      {/* The Iconic Škoda Winged Arrow geometry */}
      {/* 1. Main Arrow Body & Pointed Head */}
      <path
        d="M20 50 C 26 48, 38 46, 52 46 L 73 34 L 67 49 L 83 49 L 65 61 L 67 53 L 48 53 C 34 53, 24 51, 20 50 Z"
        fill="url(#skodaArrowGrad)"
      />

      {/* 2. Top Feather / Wing Plumage 1 */}
      <path
        d="M24 45 C 28 35, 38 27, 54 24 C 47 29, 43 35, 41 43 C 34 44, 28 44.5, 24 45 Z"
        fill="url(#skodaArrowGrad)"
      />

      {/* 3. Middle Feather / Wing Plumage 2 */}
      <path
        d="M28 42 C 34 32, 44 26, 61 25 C 53 30, 48 37, 46 45 C 39 45, 33 43.5, 28 42 Z"
        fill="url(#skodaArrowGrad)"
        opacity="0.9"
      />

      {/* 4. Bottom Wing Plumage / Curve */}
      <path
        d="M24 55 C 30 63, 40 69, 56 71 C 49 66, 45 61, 43 54 C 36 54, 29 54.5, 24 55 Z"
        fill="url(#skodaArrowGrad)"
      />

      {/* 5. Center Vision Eye */}
      <circle
        cx="48"
        cy="48"
        r="4.2"
        fill="#022c22"
        stroke="#6ee7b7"
        strokeWidth="1.5"
      />
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
      <LogoContainer
        {...animProps}
        className={`inline-flex items-center ${className}`}
      >
        {EmblemSvg}
      </LogoContainer>
    );
  }
  if (variant === "wordmark") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span
          className={`font-black tracking-[0.22em] text-white ${textSize} select-none`}
        >
          ŠKODA
        </span>
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
            className={`font-black tracking-[0.2em] text-white ${textSize} leading-none group-hover:text-emerald-400 transition-colors`}
          >
            ŠKODA
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400/90 hidden sm:inline">
            INDIA
          </span>
        </div>
      </div>
    </LogoContainer>
  );
};
