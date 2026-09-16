// A stylized top-down chassis/platform schematic — subframes, crumple zones,
// wheel positions, and powertrain layout — used by "Under the Skin" to give
// the Platform & Chassis layer a real diagram instead of just a faded photo.
export const ChassisMockup = ({
  accentHex = "#10b981",
  isAwd = false,
  isSedan = true,
  platformLabel = "Modular Platform",
}) => {
  return (
    <svg viewBox="0 0 800 360" className="w-full h-full select-none">
      <defs>
        <linearGradient id="chassis-rail" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accentHex} stopOpacity="0.9" />
          <stop offset="100%" stopColor={accentHex} stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Outer body outline (dashed, top-down silhouette) */}
      <path
        d={
          isSedan
            ? "M 90 180 C 90 150, 120 140, 160 138 L 230 120 C 260 100, 300 92, 340 92 L 460 92 C 500 92, 540 100, 570 120 L 640 138 C 680 140, 710 150, 710 180 C 710 210, 680 220, 640 222 L 570 240 C 540 260, 500 268, 460 268 L 340 268 C 300 268, 260 260, 230 240 L 160 222 C 120 220, 90 210, 90 180 Z"
            : "M 85 180 C 85 145, 115 132, 155 130 L 220 108 C 255 88, 300 80, 350 80 L 450 80 C 500 80, 545 88, 580 108 L 645 130 C 685 132, 715 145, 715 180 C 715 215, 685 228, 645 230 L 580 252 C 545 272, 500 280, 450 280 L 350 280 C 300 280, 255 272, 220 252 L 155 230 C 115 228, 85 215, 85 180 Z"
        }
        fill="none"
        stroke="#52525b"
        strokeWidth="2"
        strokeDasharray="6 5"
      />

      {/* Crumple zones */}
      <rect x="90" y="150" width="90" height="60" rx="10" fill="#f59e0b" opacity="0.12" />
      <text x="135" y="145" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">
        FRONT CRUMPLE ZONE
      </text>
      <rect x="620" y="150" width="90" height="60" rx="10" fill="#f59e0b" opacity="0.12" />
      <text x="665" y="145" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700">
        REAR CRUMPLE ZONE
      </text>

      {/* Main structural rails (front-to-rear) */}
      <rect x="180" y="165" width="440" height="8" rx="4" fill="url(#chassis-rail)" />
      <rect x="180" y="187" width="440" height="8" rx="4" fill="url(#chassis-rail)" />

      {/* Safety cell / passenger cage */}
      <rect x="300" y="130" width="200" height="100" rx="14" fill="none" stroke={accentHex} strokeWidth="3" />
      <text x="400" y="185" textAnchor="middle" fill={accentHex} fontSize="12" fontWeight="800">
        SAFETY CELL
      </text>

      {/* Engine bay (front) */}
      <rect x="190" y="150" width="90" height="60" rx="8" fill="#3f3f46" stroke="#71717a" strokeWidth="1.5" />
      <text x="235" y="182" textAnchor="middle" fill="#d4d4d8" fontSize="10" fontWeight="700">
        ENGINE
      </text>

      {/* Transmission tunnel */}
      <rect x="280" y="173" width="220" height="14" fill="#27272a" />

      {/* Fuel tank / underbody (rear-center) */}
      <ellipse cx="560" cy="180" rx="40" ry="22" fill="#3f3f46" stroke="#71717a" strokeWidth="1.5" />
      <text x="560" y="184" textAnchor="middle" fill="#d4d4d8" fontSize="9" fontWeight="700">
        FUEL
      </text>

      {/* Driveshaft to rear axle, only if AWD */}
      {isAwd && (
        <>
          <rect x="400" y="176" width="200" height="8" rx="4" fill={accentHex} opacity="0.6" />
          <text x="500" y="160" textAnchor="middle" fill={accentHex} fontSize="10" fontWeight="700">
            AWD PROPSHAFT
          </text>
        </>
      )}

      {/* Wheels (top-down, at four corners) */}
      {[
        { cx: 195, cy: 145, label: "FL" },
        { cx: 195, cy: 215, label: "RL" },
        { cx: 605, cy: 145, label: "FR" },
        { cx: 605, cy: 215, label: "RR" },
      ].map((w) => (
        <g key={w.label}>
          <rect x={w.cx - 14} y={w.cy - 26} width="28" height="52" rx="8" fill="#18181b" stroke="#52525b" strokeWidth="2" />
          <rect x={w.cx - 8} y={w.cy - 18} width="16" height="36" rx="5" fill="#27272a" />
        </g>
      ))}

      {/* Suspension links */}
      <line x1="195" y1="171" x2="240" y2="171" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
      <line x1="195" y1="189" x2="240" y2="189" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
      <line x1="605" y1="171" x2="560" y2="171" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
      <line x1="605" y1="189" x2="560" y2="189" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />

      {/* Platform label plate */}
      <g transform="translate(400 305)">
        <rect x="-110" y="-16" width="220" height="30" rx="8" fill="#09090b" stroke={accentHex} strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fill={accentHex} fontSize="12" fontWeight="800" letterSpacing="0.5">
          {platformLabel}
        </text>
      </g>
    </svg>
  );
};
