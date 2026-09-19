import { motion } from "motion/react";
import lamborghiniCrest from "../assets/lamborghini-crest.png";

export const LamborghiniLogo = ({
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
  const EmblemImg = (
    <img
      src={lamborghiniCrest}
      alt="Lamborghini"
      className={`${emblemSize} flex-shrink-0 object-contain drop-shadow-[0_2px_10px_rgba(201,160,44,0.35)]`}
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
      <LogoContainer {...animProps} className={`inline-flex items-center ${className}`}>
        {EmblemImg}
      </LogoContainer>
    );
  }
  if (variant === "wordmark") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className={`font-black text-white ${textSize} select-none`}>LAMBORGHINI</span>
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
            className={`font-black text-white ${textSize} leading-none group-hover:text-yellow-400 transition-colors`}
          >
            LAMBORGHINI
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-yellow-400/90 hidden sm:inline">
            INDIA
          </span>
        </div>
      </div>
    </LogoContainer>
  );
};
