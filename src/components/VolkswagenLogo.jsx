import { motion } from "motion/react";
import vwEmblem from "../assets/vw-emblem.png";
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
  const EmblemImg = (
    <img
      src={vwEmblem}
      alt="Volkswagen"
      className={`${emblemSize} flex-shrink-0 object-contain rounded-full bg-white/95 p-0.5 drop-shadow-[0_2px_10px_rgba(37,99,235,0.4)]`}
      draggable={false}
    />
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
      {EmblemImg}
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
