import { motion } from "motion/react";
import manCrest from "../assets/man-crest.png";

export const ManLogo = ({
  variant = "full",
  size = "md",
  className = "",
  animated = false,
}) => {
  const sizeMap = {
    sm: { emblem: "w-9 h-6", text: "text-sm", gap: "gap-1.5" },
    md: { emblem: "w-12 h-8", text: "text-base", gap: "gap-2" },
    lg: { emblem: "w-14 h-10", text: "text-lg", gap: "gap-2.5" },
    xl: { emblem: "w-20 h-14", text: "text-2xl", gap: "gap-3.5" },
  };
  const { emblem: emblemSize, text: textSize, gap } = sizeMap[size];

  // The MAN wordmark+lion mark is black artwork on a transparent background,
  // so it needs a light backing chip to stay visible against this app's
  // dark theme.
  const EmblemSvg = (
    <div
      className={`${emblemSize} flex-shrink-0 rounded-md bg-white/95 p-1 flex items-center justify-center shadow-md`}
    >
      <img
        src={manCrest}
        alt="MAN"
        className="w-full h-full object-contain"
        draggable={false}
      />
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
      <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400/90 hidden sm:inline">
        TRUCK &amp; BUS
      </span>
    </LogoContainer>
  );
};
