// Reusable studio car silhouette SVG — sedan or SUV shape, painted with a
// given color and accent. Shared by the Color Visualizer and the Build
// Configurator so both stay visually consistent.
export const CarSilhouette = ({
  colorHex = "#ffffff",
  isDualTone = false,
  isSedan = true,
  accentHex = "#10b981",
  className = "",
}) => {
  return (
    <svg viewBox="0 0 800 360" className={`w-full h-full drop-shadow-2xl transition-all duration-500 select-none ${className}`}>
      <defs>
        <linearGradient id="cs-bodyPaint" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colorHex} stopOpacity="1" />
          <stop offset="60%" stopColor={colorHex} stopOpacity="0.85" />
          <stop offset="100%" stopColor="#09090b" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="cs-glass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="cs-wheelRim">
          <stop offset="65%" stopColor="#27272a" />
          <stop offset="85%" stopColor="#71717a" />
          <stop offset="100%" stopColor="#09090b" />
        </radialGradient>
        <linearGradient id="cs-roofTone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isDualTone ? "#18181b" : colorHex} />
          <stop offset="100%" stopColor={isDualTone ? "#09090b" : colorHex} stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <ellipse cx="400" cy="300" rx="330" ry="24" fill="#000000" opacity="0.7" filter="blur(12px)" />

      {isSedan ? (
        <g>
          <path
            d="M 120 250 C 100 240, 110 215, 150 215 L 240 210 C 280 180, 340 135, 410 135 L 540 135 C 630 140, 680 190, 710 215 L 720 230 C 725 240, 715 250, 680 250 L 615 250 C 615 220, 560 220, 560 250 L 280 250 C 280 220, 225 220, 225 250 Z"
            fill="url(#cs-bodyPaint)"
            stroke="#3f3f46"
            strokeWidth="2"
          />
          <path d="M 260 205 L 340 145 L 535 145 L 620 205 Z" fill="url(#cs-roofTone)" stroke="#27272a" strokeWidth="2" />
          <path d="M 285 200 L 350 152 L 435 152 L 435 200 Z" fill="url(#cs-glass)" />
          <path d="M 445 200 L 445 152 L 520 152 L 590 200 Z" fill="url(#cs-glass)" />
          <path d="M 160 220 L 680 220" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
          <polygon points="120,230 145,225 140,240 120,240" fill={accentHex} opacity="0.9" />
          <polygon points="700,225 718,228 715,240 695,238" fill="#ef4444" opacity="0.9" />
        </g>
      ) : (
        <g>
          <path
            d="M 115 255 C 95 240, 105 205, 145 205 L 225 200 C 255 160, 310 120, 370 120 L 610 120 C 635 120, 665 155, 680 190 L 710 215 C 725 235, 715 255, 685 255 L 620 255 C 620 215, 555 215, 555 255 L 285 255 C 285 215, 220 215, 220 255 Z"
            fill="url(#cs-bodyPaint)"
            stroke="#3f3f46"
            strokeWidth="2"
          />
          <path d="M 255 195 L 345 125 L 610 125 L 655 195 Z" fill="url(#cs-roofTone)" stroke="#27272a" strokeWidth="2" />
          <line x1="360" y1="115" x2="600" y2="115" stroke="#71717a" strokeWidth="4" strokeLinecap="round" />
          <path d="M 280 190 L 350 135 L 440 135 L 440 190 Z" fill="url(#cs-glass)" />
          <path d="M 450 190 L 450 135 L 540 135 L 540 190 Z" fill="url(#cs-glass)" />
          <path d="M 550 190 L 550 135 L 595 135 L 630 190 Z" fill="url(#cs-glass)" />
          <path d="M 125 255 C 130 248, 140 248, 150 255" stroke="#27272a" strokeWidth="4" />
          <path d="M 670 255 C 680 248, 690 248, 700 255" stroke="#27272a" strokeWidth="4" />
          <polygon points="120,215 145,212 140,230 118,225" fill={accentHex} opacity="0.9" />
          <polygon points="695,215 715,220 710,235 690,230" fill="#ef4444" opacity="0.9" />
        </g>
      )}

      <g>
        <circle cx="252" cy="250" r="42" fill="#09090b" stroke="#27272a" strokeWidth="4" />
        <circle cx="252" cy="250" r="30" fill="url(#cs-wheelRim)" stroke="#52525b" strokeWidth="2" />
        <circle cx="252" cy="250" r="10" fill="#18181b" />
        <circle cx="252" cy="235" r="5" fill={accentHex} />
      </g>
      <g>
        <circle cx="587" cy="250" r="42" fill="#09090b" stroke="#27272a" strokeWidth="4" />
        <circle cx="587" cy="250" r="30" fill="url(#cs-wheelRim)" stroke="#52525b" strokeWidth="2" />
        <circle cx="587" cy="250" r="10" fill="#18181b" />
        <circle cx="587" cy="235" r="5" fill={accentHex} />
      </g>
    </svg>
  );
};
