// Reusable studio car silhouette SVG, painted with a given color and accent.
// `shape` picks distinct body proportions per real body-type category so
// different models actually look different — not every car sharing one of
// two generic blobs. `isSedan` is kept as a legacy fallback for any caller
// that hasn't been updated to pass a real shape yet.
const SHAPE_PATHS = {
  hatchback: {
    body: "M 150 250 C 130 240, 140 218, 180 218 L 250 213 C 285 178, 335 140, 395 140 L 470 140 C 520 145, 555 175, 585 213 L 610 225 C 618 235, 608 250, 580 250 L 545 250 C 545 220, 495 220, 495 250 L 300 250 C 300 220, 250 220, 250 250 Z",
    roof: "M 275 210 L 345 148 L 460 148 L 545 210 Z",
    glassL: "M 295 205 L 350 155 L 400 155 L 400 205 Z",
    glassR: "M 410 205 L 410 155 L 452 155 L 528 205 Z",
    frontAccent: "150,228 175,224 170,240 150,240",
    rearAccent: "600,222 616,226 612,240 594,236",
    beltLine: "M 190 220 L 605 220",
    wheelX: [252, 547],
  },
  sedan: {
    body: "M 120 250 C 100 240, 110 215, 150 215 L 240 210 C 280 180, 340 135, 410 135 L 540 135 C 630 140, 680 190, 710 215 L 720 230 C 725 240, 715 250, 680 250 L 615 250 C 615 220, 560 220, 560 250 L 280 250 C 280 220, 225 220, 225 250 Z",
    roof: "M 260 205 L 340 145 L 535 145 L 620 205 Z",
    glassL: "M 285 200 L 350 152 L 435 152 L 435 200 Z",
    glassR: "M 445 200 L 445 152 L 520 152 L 590 200 Z",
    frontAccent: "120,230 145,225 140,240 120,240",
    rearAccent: "700,225 718,228 715,240 695,238",
    beltLine: "M 160 220 L 680 220",
    wheelX: [252, 587],
  },
  "sedan-large": {
    body: "M 100 250 C 80 240, 90 214, 135 214 L 235 209 C 278 176, 345 130, 420 130 L 570 130 C 655 136, 705 188, 732 213 L 744 230 C 749 240, 738 250, 700 250 L 630 250 C 630 220, 572 220, 572 250 L 270 250 C 270 220, 210 220, 210 250 Z",
    roof: "M 250 204 L 340 140 L 560 140 L 645 204 Z",
    glassL: "M 275 199 L 348 148 L 442 148 L 442 199 Z",
    glassR: "M 452 199 L 452 148 L 545 148 L 612 199 Z",
    frontAccent: "100,230 128,225 122,240 100,240",
    rearAccent: "724,225 744,228 740,240 718,238",
    beltLine: "M 145 220 L 700 220",
    wheelX: [240, 605],
  },
  "compact-suv": {
    body: "M 120 258 C 98 244, 108 202, 150 200 L 215 196 C 244 158, 296 122, 352 122 L 560 122 C 588 122, 616 154, 632 188 L 660 210 C 678 228, 668 250, 636 250 L 588 250 C 588 214, 528 214, 528 250 L 292 250 C 292 214, 232 214, 232 250 L 178 250 C 145 250, 122 254, 120 258 Z",
    roof: "M 240 192 L 322 128 L 555 128 L 598 192 Z",
    glassL: "M 262 187 L 330 138 L 415 138 L 415 187 Z",
    glassR: "M 425 187 L 425 138 L 512 138 L 555 187 Z",
    frontAccent: "120,215 148,211 142,232 116,226",
    rearAccent: "648,215 668,220 662,238 640,232",
    beltLine: "M 148 220 L 632 220",
    wheelX: [230, 560],
  },
  suv: {
    body: "M 115 255 C 95 240, 105 205, 145 205 L 225 200 C 255 160, 310 120, 370 120 L 610 120 C 635 120, 665 155, 680 190 L 710 215 C 725 235, 715 255, 685 255 L 620 255 C 620 215, 555 215, 555 255 L 285 255 C 285 215, 220 215, 220 255 Z",
    roof: "M 255 195 L 345 125 L 610 125 L 655 195 Z",
    glassL: "M 280 190 L 350 135 L 440 135 L 440 190 Z",
    glassR: "M 450 190 L 450 135 L 540 135 L 595 190 Z",
    glassRear: "M 550 190 L 550 135 L 595 135 L 630 190 Z",
    frontAccent: "120,215 145,212 140,230 118,225",
    rearAccent: "695,215 715,220 710,235 690,230",
    beltLine: null,
    wheelX: [252, 587],
  },
  "suv-large": {
    body: "M 95 258 C 72 240, 85 198, 130 196 L 210 190 C 245 148, 305 105, 375 105 L 640 105 C 672 105, 705 145, 722 182 L 752 210 C 770 232, 758 258, 722 258 L 650 258 C 650 214, 578 214, 578 258 L 288 258 C 288 214, 216 214, 216 258 L 155 258 C 120 258, 98 258, 95 258 Z",
    roof: "M 230 188 L 330 112 L 635 112 L 685 188 Z",
    glassL: "M 258 182 L 336 122 L 435 122 L 435 182 Z",
    glassR: "M 445 182 L 445 122 L 545 122 L 600 182 Z",
    glassRear: "M 610 182 L 610 122 L 632 122 L 668 182 Z",
    frontAccent: "95,218 128,214 122,236 92,230",
    rearAccent: "740,218 762,224 754,244 728,238",
    beltLine: null,
    wheelX: [216, 650],
  },
  estate: {
    body: "M 115 250 C 95 240, 105 215, 145 215 L 235 210 C 275 178, 335 135, 405 135 L 560 135 C 585 135, 600 150, 605 170 L 660 200 C 685 205, 700 215, 700 230 C 700 240, 690 250, 660 250 L 615 250 C 615 220, 560 220, 560 250 L 280 250 C 280 220, 225 220, 225 250 Z",
    roof: "M 258 205 L 338 145 L 555 145 L 600 175 L 655 200 L 590 205 Z",
    glassL: "M 283 200 L 348 152 L 432 152 L 432 200 Z",
    glassR: "M 442 200 L 442 152 L 540 152 L 580 178 L 585 200 Z",
    frontAccent: "115,230 140,225 135,240 115,240",
    rearAccent: "680,222 698,225 694,238 676,236",
    beltLine: "M 160 220 L 665 220",
    wheelX: [252, 587],
  },
};

export const CarSilhouette = ({
  colorHex = "#ffffff",
  isDualTone = false,
  isSedan = true,
  shape,
  accentHex = "#10b981",
  className = "",
  // The artwork below is drawn nose-left (headlight accent on the left,
  // taillight on the right). Pass facingRight when the car needs to read as
  // driving left-to-right — e.g. Race Mode — otherwise it visibly moves
  // "in reverse" nose-first the wrong way.
  facingRight = false,
}) => {
  const resolvedShape = SHAPE_PATHS[shape] ? shape : isSedan ? "sedan" : "suv";
  const s = SHAPE_PATHS[resolvedShape];
  const [wheelFrontX, wheelRearX] = s.wheelX;

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

      <g transform={facingRight ? "scale(-1,1) translate(-800,0)" : undefined}>
        <g>
          <path d={s.body} fill="url(#cs-bodyPaint)" stroke="#3f3f46" strokeWidth="2" />
          <path d={s.roof} fill="url(#cs-roofTone)" stroke="#27272a" strokeWidth="2" />
          <path d={s.glassL} fill="url(#cs-glass)" />
          <path d={s.glassR} fill="url(#cs-glass)" />
          {s.glassRear && <path d={s.glassRear} fill="url(#cs-glass)" />}
          {s.beltLine && <path d={s.beltLine} stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />}
          <polygon points={s.frontAccent} fill={accentHex} opacity="0.9" />
          <polygon points={s.rearAccent} fill="#ef4444" opacity="0.9" />
        </g>

        <g>
          <circle cx={wheelFrontX} cy="250" r="42" fill="#09090b" stroke="#27272a" strokeWidth="4" />
          <circle cx={wheelFrontX} cy="250" r="30" fill="url(#cs-wheelRim)" stroke="#52525b" strokeWidth="2" />
          <circle cx={wheelFrontX} cy="250" r="10" fill="#18181b" />
          <circle cx={wheelFrontX} cy="235" r="5" fill={accentHex} />
        </g>
        <g>
          <circle cx={wheelRearX} cy="250" r="42" fill="#09090b" stroke="#27272a" strokeWidth="4" />
          <circle cx={wheelRearX} cy="250" r="30" fill="url(#cs-wheelRim)" stroke="#52525b" strokeWidth="2" />
          <circle cx={wheelRearX} cy="250" r="10" fill="#18181b" />
          <circle cx={wheelRearX} cy="235" r="5" fill={accentHex} />
        </g>
      </g>
    </svg>
  );
};
