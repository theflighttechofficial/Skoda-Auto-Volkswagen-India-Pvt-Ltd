# Škoda Auto Guide & Volkswagen India Group Showcase 🚗⚡

An interactive, feature-rich web application and buyer's guide for the **Škoda Slavia** sedan and the broader **Volkswagen Group** performance vehicle ecosystem. Designed for car enthusiasts, prospective buyers, and automotive aficionados, this application provides dynamic spec comparisons, performance telemetry charts, 360° color previews, safety deep dives, cost of ownership calculators, an AI-powered vehicle advisor, and dealership locators.

---

## 🌟 Key Features

- 🚘 **Interactive Variant Explorer**: Detailed trim comparisons across Slavia variants (*Classic*, *Signature*, *Prestige*, *Sportline*, and *Monte Carlo*) including pricing, equipment lists, and key differentiators.
- ⚡ **Engine & Performance Analytics**: In-depth powertrain breakdown comparing the **1.0L TSI** (115 PS / 178 Nm) and **1.5L TSI EVO** (150 PS / 250 Nm with Active Cylinder Technology & 7-Speed DSG).
- 🏁 **vRS & Performance Heritage**: Integrated telemetry & specs celebrating Škoda vRS and VW GT icons (Octavia vRS, Golf GTI, Virtus GT, Kodiaq vRS).
- 📈 **Dynamic Performance Graphs**: Visual torque/power curves, gear ratio speeds, and 0–100 km/h acceleration graphs.
- 🤖 **Gemini AI Vehicle Advisor**: Powered by the official Google `@google/genai` SDK for natural language automotive guidance, trim comparisons, and buying recommendations. Includes a smart offline fallback engine when API keys are absent.
- 🎨 **360° Color Visualizer**: Live color palette selector showcasing signature shades like *Tornado Red*, *Lava Blue*, *Carbon Steel*, and *Deep Black*.
- 🛡️ **5-Star Global NCAP Safety Deep Dive**: Structural breakdown of the MQB-A0-IN platform, high-strength hot-formed steel, 6 airbags, ESC, multi-collision braking, and child safety metrics.
- 💰 **Cost of Ownership & Service Calculator**: Interactive financial planning tool for estimating EMI payments, Škoda SuperCare maintenance costs, and fuel expenses.
- 📍 **Dealership & Service Locator**: City-by-city searchable directory of authorized Škoda dealerships and service stations across major Indian metros.
- 📜 **Brand History & Synergies**: Historical journey from Laurin & Klement (1895) to modern Škoda *Simply Clever* features and Volkswagen Group platform sharing.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite 6](https://vitejs.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Motion (Framer Motion)](https://motion.dev/), [Lucide React](https://lucide.dev/)
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [TSX](https://github.com/privatenumber/tsx), [esbuild](https://esbuild.github.io/)
- **AI Integration**: [@google/genai SDK](https://www.npmjs.com/package/@google/genai) (Google Gemini API)
- **Language**: TypeScript & Modern ES Modules

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/skoda-slavia-guide-showcase.git
   cd skoda-slavia-guide-showcase
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` or `.env.local` file in the root directory (refer to `.env.example`):
   ```env
   GEMINI_API_KEY="your_google_gemini_api_key_here"
   APP_URL="http://localhost:3000"
   ```
   *(Note: If `GEMINI_API_KEY` is not provided, the application will seamlessly use an intelligent built-in fallback response generator for the AI Advisor).*

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `tsx server.ts` | Starts the Express server with Vite dev middleware for instant HMR. |
| `npm run build` | `vite build && esbuild ...` | Compiles client assets and bundles server code to `dist/server.cjs`. |
| `npm run start` | `node dist/server.cjs` | Runs the compiled production server. |
| `npm run preview` | `vite preview` | Previews the static production build locally. |
| `npm run lint` | `tsc --noEmit` | Runs TypeScript type checker to ensure type safety. |
| `npm run clean` | `rm -rf dist server.js` | Removes production build artifacts. |

---

## 📁 Project Structure

```
├── server.ts                   # Express server setup with Gemini API proxy & Vite middleware
├── index.html                  # HTML entry point with metadata
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies and npm scripts
├── .env.example                # Sample environment variables
└── src/
    ├── main.jsx                # React root application launcher
    ├── App.jsx                 # Main layout and tab navigation router
    ├── index.css               # Global styles and Tailwind CSS imports
    ├── types.ts                # TypeScript interfaces for car data, dealership, specs
    ├── components/             # UI Components
    │   ├── AIAdvisor.jsx       # Gemini-powered car buying & technical assistant
    │   ├── AboutSkodaHistory.jsx # Brand history, timeline & Simply Clever tech
    │   ├── ColorVisualizer.jsx # 360° vehicle color selector
    │   ├── CostCalculator.jsx  # Financial EMI & maintenance cost estimator
    │   ├── DealershipLocator.jsx # Interactive dealer map & contact directory
    │   ├── EnginePerformance.jsx # 1.0L vs 1.5L TSI engine specification breakdown
    │   ├── FAQSection.jsx      # Frequently Asked Questions & buyer guide
    │   ├── Header.jsx          # Top navigation bar & brand badge
    │   ├── HeroOverview.jsx    # Hero section with core Slavia highlights
    │   ├── PerformanceGraphs.jsx # RPM/Torque telemetry & speed charts
    │   ├── RSPerformance.jsx   # vRS & VW GT performance showcase
    │   ├── SafetyDeepDive.jsx  # Global NCAP 5-star crash safety breakdown
    │   ├── SkodaLogo.jsx       # Vector Škoda logo component
    │   ├── VariantExplorer.jsx # Trim levels & features comparison
    │   ├── VolkswagenGroupProud.jsx # VW Group ecosystem & platform synergies
    │   └── VolkswagenLogo.jsx  # Vector Volkswagen logo component
    └── data/                   # Vehicle specifications & regional datasets
        ├── dealershipData.ts   # Showroom & service station database
        ├── historyData.ts      # Škoda historical milestone timeline
        ├── performanceGraphsData.ts # Telemetry data for charts
        ├── rsPerformanceData.ts # RS & GT performance vehicle metrics
        ├── skodaData.ts        # Comprehensive Škoda Slavia spec data
        ├── slaviaData.ts       # Variant & trim pricing matrix
        ├── vwData.ts           # Volkswagen vehicle lineup data
        ├── vwGroupData.ts      # VW Group platform & technology data
        ├── vwHistoryData.ts    # Volkswagen history timeline
        └── vwPerformanceData.ts # VW GT performance specs
```

---

## 🛡️ Safety & Quality Standards

- **Global NCAP**: Built on the India 2.0 MQB-A0-IN platform which achieved 5 Stars for both adult and child occupant protection.
- **Engine Tech**: High pressure direct injection TSI turbocharging with active cylinder deactivation (ACT) for optimized power delivery and fuel economy.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

