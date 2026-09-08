import { motion } from "motion/react";
export const VolkswagenLogo = ({
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
      className={`${emblemSize} flex-shrink-0 drop-shadow-[0_2px_10px_rgba(37,99,235,0.4)]`}
      aria-label="Volkswagen Roundel Emblem"
    >
      <defs>
        {/* Outer deep blue gradient */}
        <linearGradient id="vwRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="40%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0a2558" />
        </linearGradient>
        {/* Inner disc gradient */}
        <radialGradient id="vwInnerDisc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0f2b5c" />
          <stop offset="70%" stopColor="#06183b" />
          <stop offset="100%" stopColor="#020b1c" />
        </radialGradient>
        {/* Chrome silver-white fill for V & W */}
        <linearGradient id="vwChromeGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Outer circular bezel */}
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke="url(#vwRingGrad)"
        strokeWidth="4.5"
        fill="url(#vwInnerDisc)"
      />

      {/* Inner thin silver boundary ring */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="#60a5fa"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />

      {/* The Iconic 'V' and 'W' geometry */}
      {/* Upper 'V' */}
      <path
        d="M27 24 L39 24 L50 51 L61 24 L73 24 L55.5 64 L44.5 64 Z"
        fill="url(#vwChromeGrad)"
      />

      {/* Lower 'W' */}
      <path
        d="M20 40 L28 40 L38 68 L47 43 L53 43 L62 68 L72 40 L80 40 L67 78 L58 78 L50 56 L42 78 L33 78 Z"
        fill="url(#vwChromeGrad)"
      />

      {/* Horizontal divider gap between V and W */}
      <line
        x1="22"
        y1="41"
        x2="78"
        y2="41"
        stroke="#06183b"
        strokeWidth="2"
        strokeOpacity="0.8"
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
          VOLKSWAGEN
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
            className={`font-black tracking-[0.18em] text-white ${textSize} leading-none group-hover:text-blue-400 transition-colors`}
          >
            VOLKSWAGEN
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400/90 hidden sm:inline">
            INDIA
          </span>
        </div>
      </div>
    </LogoContainer>
  );
};
