import { motion } from "motion/react";

const LamborghiniShield = ({ className }) => (
  <svg
    viewBox="0 0 64 72"
    className={className}
    draggable={false}
    aria-label="Lamborghini"
  >
    <polygon
      points="32,2 60,12 60,40 32,70 4,40 4,12"
      fill="#0a0a0a"
      stroke="#c9a02c"
      strokeWidth="2.5"
    />
    <polygon
      points="32,8 55,16 55,38 32,63 9,38 9,16"
      fill="none"
      stroke="#c9a02c"
      strokeWidth="1"
    />
    <path
      d="M32 20 C 24 22, 20 30, 22 38 C 24 46, 30 50, 32 54 C 34 50, 40 46, 42 38 C 44 30, 40 22, 32 20 Z"
      fill="#c9a02c"
    />
    <path
      d="M20 28 C 18 24, 20 20, 24 19 C 22 23, 21 26, 20 28 Z"
      fill="#c9a02c"
    />
    <path
      d="M44 28 C 46 24, 44 20, 40 19 C 42 23, 43 26, 44 28 Z"
      fill="#c9a02c"
    />
  </svg>
);

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
    <LamborghiniShield
      className={`${emblemSize} flex-shrink-0 object-contain drop-shadow-[0_2px_10px_rgba(201,160,44,0.35)]`}
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
