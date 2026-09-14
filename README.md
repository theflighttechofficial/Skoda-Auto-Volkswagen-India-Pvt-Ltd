# Škoda • Volkswagen • Audi India Showcase 🚗⚡

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Google Gemini API](https://img.shields.io/badge/Gemini_AI-@google/genai_2.4-8E75B2?style=flat-square&logo=googlegemini)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

An interactive, enterprise-grade buyer's guide, technical showcase, and performance hub covering the complete **Škoda Auto Volkswagen India Pvt. Ltd. (SAVWIPL)** portfolio — spanning **Škoda India**, **Volkswagen India**, and **Audi India**.

Explore **30+ iconic models** across three German and Czech marques. Switch brands on the fly to experience tailored themes, dynamic powertrain analytics, interactive variant matrixes, 360° color visualizers, virtual 3D configurators, engine sound galleries, 5-star crash safety deep dives, cost-of-ownership calculators, an AI-powered vehicle advisor, interactive mini-games, and an offline-enabled pan-India dealership locator.

---

## 📸 System Architecture & Navigation Overview

```
+----------------------------------------------------------------------------------------------------+
|                         Škoda • Volkswagen • Audi India Showcase (SPA)                             |
+----------------------------------------------------------------------------------------------------+
|  [ Dynamic Brand Switcher ] -> Instant theme switch (Škoda Emerald | VW Performance | Audi Dark)     |
+----------------------------------------------------------------------------------------------------+
|  Core Exploration Modules:                                                                         |
|  ├── 🚗 Vehicle Lineup & Spec Matrix    ├── 🎨 360° Color & Shade Visualizer                       |
|  ├── ⚡ Powertrain & Engine Analytics    ├── ⚙️ Interactive Vehicle Configurator                   |
|  ├── 🚘 Trim & Variant Matrix Explorer  ├── 🔊 Engine Sound Gallery & Audio Engine                 |
|  ├── 🏎️ RS / vRS / GT Performance Wing  ├── 🛡️ NCAP 5-Star Safety & Chassis Engineering            |
|  ├── 📈 Telemetry, RPM & Speed Graphs   ├── 💰 Cost of Ownership & Financial EMI Calculator        |
|  ├── 🏁 Virtual Race Mode Simulator     ├── ⛽ Real-World Fuel Economy Simulator                    |
|  ├── 🤖 Gemini AI Vehicle Advisor       ├── 📍 Interactive Pan-India Dealership Locator            |
|  ├── 🎮 "Guess The Car" Interactive Trivia ├── 🔬 Platform Detective & Group Synergy Explorer     |
|  └── 📜 Heritage & Historical Timelines └── 🇮🇳 Made in India & Localisation Story                 |
+----------------------------------------------------------------------------------------------------+
|                                 Backend & Serverless Infrastructure                                |
|  - Node.js Express Backend Proxy (`server.ts`) for local & self-hosted Node environments           |
|  - Vercel Serverless API Functions (`api/*.ts`) with unified Gemini AI client logic                |
|  - Smart Offline AI Fallback Engine ensuring 100% uptime when API key is unconfigured              |
+----------------------------------------------------------------------------------------------------+
```

---

## 🌟 Comprehensive Feature Set

### 1. 🏷️ Dynamic Multi-Marque Pivot
* **Seamless Switching**: Pivot instantly between **Škoda**, **Volkswagen**, and **Audi** with dynamic theme transitions (Emerald Green, German Performance Blue/Red, and Audi Platinum Dark aesthetics).
* **Brand Customization**: Adaptive logos, hero showcases, marque-specific imagery, terminology, and tailored telemetry data.

### 2. 🚗 Complete Vehicle Lineup Catalog (30+ Models)
* **Škoda India**: Slavia, Kushaq, Kylaq, Kodiaq, Octavia (vRS), Superb, Karoq, Fabia, Rapid, Yeti, Laura.
* **Volkswagen India**: Virtus, Taigun, Tiguan, Golf GTI, Polo GT TSI, Vento, Passat, Jetta, Ameo, T-Roc, Touareg, Beetle, Phaeton.
* **Audi India**: A3, A4, A6, A8 L, Q3, Q3 Sportback, Q5, Q7, Q8, RS5 Sportback, RS Q8.

### 3. ⚙️ Interactive Customizer & 360° Color Visualizer
* **Build Your Car**: Choose trim levels, select factory engine options, paint colors, alloy wheel designs, interior upholstery, and optional accessories.
* **Paint Shade Inspection**: Inspect signature manufacturer shades (Tornado Red, Lava Blue, Carbon Steel Gray, Mythos Black, Navarra Blue, Daytona Gray, etc.) under realistic preview lighting.

### 4. ⚡ Powertrain Analytics & Engine Sound Gallery
* **Engine Tech Deep-Dive**: Technical breakdowns for 1.0L TSI, 1.5L TSI EVO with ACT (Active Cylinder Technology), 2.0L TSI, 2.0L TDI CR, 40/45/55 TFSI, 3.0L V6 TFSI, and 4.0L Twin-Turbo V8 TFSI Audi Sport units.
* **Transmission Matrix**: Analysis of 6-speed Manual, 6-speed Torque Converter Automatic, 7-speed DSG (DQ200 dry / DQ381 wet / DQ500), and 8-speed Tiptronic with quattro.
* **Engine Sound Simulator**: Listen to high-rev engine sounds, exhaust notes, and turbo spooling audio samples for enthusiast models.

### 5. 🏎️ RS / vRS / GT Performance Wing & Virtual Race Mode
* **Performance Hub**: Dedicated sanctuary for high-performance marques: **Octavia vRS**, **Kodiaq vRS**, **Golf GTI**, **Virtus GT Plus**, **Audi RS5 Sportback**, and **Audi RS Q8**.
* **Race Mode Simulator**: Launch control visualization, lap timer interactive widget, dynamic chassis control (DCC) mode switcher, and gear telemetry breakdown.

### 6. 📈 Dynamic RPM, Torque & Speed Graphs
* Real-time interactive charts illustrating torque vs. RPM curves, power delivery outputs, gear velocity ratios, and 0–100 km/h sprint metrics across all engines.

### 7. 🛡️ NCAP 5-Star Safety & Engineering Lab
* Engineering deep dives into **MQB-A0-IN**, **MQB EVO**, and **MLB Evo** chassis safety designs.
* Breakdown of hot-formed ultra-high-strength steel construction, 6-to-8 airbag deployment systems, Electronic Stability Control (ESC), Multi-Collision Braking (MKB), Hill Hold Assist, and Audi Pre Sense.

### 8. 💰 Cost of Ownership, EMI & Fuel Economy Simulators
* **Financial EMI Calculator**: Calculate monthly payment EMI schedules based on down payment, tenure, and current interest rates.
* **Maintenance Planner**: Estimate service costs for 4-year/60,000 km and 5-year/75,000 km packages (Škoda SuperCare, VW Service Value Packs, Audi Comprehensive Care).
* **Fuel Economy Simulator**: Calculate real-world mileage and monthly fuel expenses under city, highway, and combined driving conditions.

### 9. 🤖 Gemini AI Vehicle Advisor (`@google/genai`)
* Powered by Google's `@google/genai` SDK with comprehensive knowledge of SAVWIPL models, specifications, pricing, maintenance advice, and market comparisons.
* **Offline Fallback Engine**: If no `GEMINI_API_KEY` is provided, an intelligent offline engine generates instant context-aware replies without breaking the user experience.

### 10. 📍 Pan-India Dealership Network & Interactive Map
* Searchable directory of authorized showrooms and service centers across major Indian metro hubs (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, etc.) with clickable map pins and contact info.

### 11. 🎮 Interactive Mini-Games & Discovery Tools
* **Guess The Car**: Audi visual trivia game testing automotive knowledge on silhouettes, exhaust notes, and interior details.
* **Platform Detective**: Interactive tool mapping shared VW Group components (MQB platform sharing, EA211 TSI engines, DSG gearboxes).

### 12. 📜 Heritage & Localisation Story
* Timeline tracing Laurin & Klement (1895), Volkswagen (1937), and Audi Horch/Auto Union (1909).
* Story of SAVWIPL's "India 2.0" investment program, Chakan (Pune) and Shendra (Chhatrapati Sambhaji Nagar) manufacturing plants, and 95%+ localization achievements.

---

## 🛠️ Technology Stack & Architecture

### **Frontend Core**
* **Framework**: [React 19](https://react.dev/) (Client-Side Rendered Single Page Application)
* **Build Engine**: [Vite 6](https://vitejs.dev/) with lightning-fast Hot Module Replacement (HMR)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native `@tailwindcss/vite` plugin
* **Animations**: [Motion (Framer Motion)](https://motion.dev/) for tab switches, modals, and fluid visual state changes
* **Icons**: [Lucide React](https://lucide.dev/) modular icon package
* **Language**: TypeScript & JSX

### **Backend & API Infrastructure**
* **Express Server**: Node.js & [Express.js](https://expressjs.com/) (`server.ts`) for local development & traditional servers
* **Bundler**: `tsx` (development execution) and `esbuild` (production CJS packaging)
* **Serverless Hosting**: Vercel Serverless Functions (`api/ask-skoda-ai.ts`, `api/_lib/ai.ts`)
* **AI Integration**: Official Google Gemini AI SDK (`@google/genai` v2.4.0)

---

## 🚀 Quick Start Guide

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm**: `v9.0.0` or higher

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/skoda-slavia-guide-showcase.git
cd skoda-slavia-guide-showcase
npm install
```

### 2. Environment Configuration
Create a `.env` file in the project root directory (refer to `.env.example`):
```env
# Optional: Google Gemini API Key for live AI Advisor responses
GEMINI_API_KEY="your_google_gemini_api_key_here"

# Application Base URL
APP_URL="http://localhost:3000"

# Optional: Express Server Port (defaults to 3000)
PORT=3000
```

> **Note on AI Advisor**: If `GEMINI_API_KEY` is not supplied, the backend seamlessly relies on an offline heuristic engine that answers brand, model, and specification queries locally.

### 3. Running Locally

#### **Development Mode (Vite + Express)**
Starts the Express proxy server integrated with Vite dev middleware:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

#### **Production Build & Preview**
To build and execute the application in a Node.js production server context:
```bash
# Compile Vite client assets and bundle Express backend
npm run build

# Launch production Node server
npm run start
```

---

## ☁️ Deployment Guide

### **Deploying to Vercel (Recommended)**
This repository is configured out-of-the-box for Vercel deployment:
1. Frontend assets build to `dist/` via `npm run vercel-build`.
2. Backend AI routes execute as Vercel Serverless Functions in `api/`:
   * `/api/ask-skoda-ai` (Primary AI endpoint)
   * `/api/ask-brand-ai`, `/api/ask-vw-ai`, `/api/ask-slavia-ai` (Route aliases)
   * `/api/health` (Health check route)
3. [`vercel.json`](file:///c:/Users/DELL/Downloads/skoda-slavia-guide-showcase-1/vercel.json) handles API routing and single-page application rewrites automatically.

**Steps:**
1. Push your repository to GitHub / GitLab.
2. Import the project into your [Vercel Dashboard](https://vercel.com/new).
3. Optionally add `GEMINI_API_KEY` under Environment Variables.
4. Deploy!

### **Deploying to Node.js Servers (Railway, Render, VPS)**
1. Run `npm run build` to generate `dist/` client assets and `dist/server.cjs`.
2. Set `NODE_ENV=production`.
3. Start the application with `npm run start` (`node dist/server.cjs`).

---

## 📜 NPM Scripts Reference

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `tsx server.ts` | Runs Express server with Vite HMR middleware on port `3000`. |
| `npm run build` | `vite build && esbuild server.ts ...` | Compiles Vite frontend & packages Express server (`dist/server.cjs`). |
| `npm run vercel-build` | `vite build` | Builds static frontend assets for Vercel serverless deployment. |
| `npm run start` | `node dist/server.cjs` | Launches compiled production CJS Node server. |
| `npm run preview` | `vite preview` | Previews static Vite production build locally. |
| `npm run lint` | `tsc --noEmit` | Runs TypeScript compiler checks across the codebase. |
| `npm run clean` | `rm -rf dist server.js` | Cleans build artifacts and temporary files. |

---

## 📁 Repository Directory Structure

```
.
├── api/                                # Vercel Serverless Function Endpoints
│   ├── _lib/
│   │   └── ai.ts                       # Shared Gemini AI client & offline response fallback logic
│   ├── ask-brand-ai.ts                 # Alias endpoint for AI queries
│   ├── ask-skoda-ai.ts                 # Main Gemini AI request handler
│   ├── ask-slavia-ai.ts                # Legacy alias endpoint
│   ├── ask-vw-ai.ts                    # Legacy alias endpoint
│   └── health.ts                       # Health check endpoint
├── public/                             # Public static assets & car photography
│   └── cars/                           # High-res car imagery for catalogs and banners
├── src/                                # React Frontend Source Code
│   ├── assets/                         # SVG icons and static graphic assets
│   ├── components/                     # Modular React Components
│   │   ├── AIAdvisor.jsx               # Gemini AI chatbot interface widget
│   │   ├── AboutSkodaHistory.jsx       # Historical timelines & brand heritage section
│   │   ├── AudiLogo.jsx                # Vector SVG Audi 4-Rings logo component
│   │   ├── BrandLoadingScreen.jsx      # Brand-themed splash & loading transition
│   │   ├── CarSilhouette.jsx           # Vector car outline viewer & guessing helper
│   │   ├── CarThroughDecades.jsx       # Interactive historical vehicle timeline
│   │   ├── ColorVisualizer.jsx         # Dynamic 360° exterior paint shade visualizer
│   │   ├── ConfiguratorBuilder.jsx     # Virtual car builder & trim customized configuration
│   │   ├── CostCalculator.jsx          # EMI & scheduled maintenance cost calculator
│   │   ├── DealershipLocator.jsx       # Searchable dealer network & workshop directory
│   │   ├── EasterEggOverlays.jsx       # Interactive brand easter eggs & hidden modes
│   │   ├── EnginePerformance.jsx       # Powertrain breakdown (TSI / TDI / TFSI / DSG)
│   │   ├── EngineSoundGallery.jsx      # Interactive engine sound player & audio notes
│   │   ├── EngineeringLab.jsx          # Interactive platform engineering laboratory
│   │   ├── EnthusiastGarage.jsx        # Enthusiast specs & performance garage
│   │   ├── FAQSection.jsx              # Comprehensive buyer FAQs & brand guide
│   │   ├── FuelEconomySimulator.jsx    # Real-world mileage & fuel cost calculator
│   │   ├── GroupDNA.jsx                # VW Group technology & shared DNA presentation
│   │   ├── GroupPersonalities.jsx      # Brand personality comparative matrix
│   │   ├── GuessTheCar.jsx             # Interactive automotive trivia mini-game
│   │   ├── Header.jsx                  # Header navigation bar & dynamic brand switcher
│   │   ├── HeroOverview.jsx            # Main hero showcase, spotlight models & vehicle catalog
│   │   ├── IndiaGroupMap.jsx           # Interactive Pan-India facility & dealer map
│   │   ├── LaunchScreen.jsx            # Initial splash welcome screen
│   │   ├── MadeInIndiaStory.jsx        # SAVWIPL India 2.0 localization showcase
│   │   ├── PerformanceGraphs.jsx       # Torque/RPM telemetry & acceleration charts
│   │   ├── PlatformDetective.jsx       # Platform sharing explorer (MQB-A0-IN / MQB EVO)
│   │   ├── RSPerformance.jsx           # RS / vRS / GT performance wing & telemetry
│   │   ├── RaceMode.jsx                # Virtual race mode & launch control simulator
│   │   ├── ReliabilityExplorer.jsx     # Quality assurance & vehicle durability guide
│   │   ├── SafetyDeepDive.jsx          # NCAP 5-star crash safety structural breakdown
│   │   ├── SkodaLogo.jsx               # Vector SVG Škoda Winged Arrow logo component
│   │   ├── UnderTheSkin.jsx            # Chassis, suspension & structural overlay viewer
│   │   ├── VariantExplorer.jsx         # Trim level comparison matrix & feature breakdown
│   │   ├── VolkswagenGroupProud.jsx    # Group synergy & shared platform technology
│   │   └── VolkswagenLogo.jsx          # Vector SVG Volkswagen logo component
│   ├── data/                           # Comprehensive Typed Datasets
│   │   ├── audiData.ts                 # Audi India lineup specs, trim levels & colors
│   │   ├── audiHistoryData.ts          # Audi historical milestone dataset (1909-Present)
│   │   ├── audiPerformanceData.ts      # Audi Sport S/RS performance metrics
│   │   ├── dealershipData.ts           # City-wise dealership & workshop network dataset
│   │   ├── decadesData.ts              # Vehicle evolution timeline by decade
│   │   ├── engineSoundData.ts          # Engine audio samples & telemetry data
│   │   ├── historyData.ts              # Škoda historical milestone dataset (1895-Present)
│   │   ├── indiaMapCoordinates.ts      # Geographic coordinates for Indian metro dealerships
│   │   ├── madeInIndiaData.ts          # India 2.0 localization stats & plant info
│   │   ├── performanceGraphsData.ts    # Telemetry data points for RPM, power & speed
│   │   ├── reliabilityData.ts          # Maintenance schedules & durability metrics
│   │   ├── rsPerformanceData.ts        # Škoda vRS performance data
│   │   ├── skodaData.ts                # Škoda India lineup specs, trim levels & colors
│   │   ├── vwData.ts                   # VW India lineup specs, trim levels & colors
│   │   ├── vwGroupData.ts              # MQB/MLB platform & VW Group tech dataset
│   │   ├── vwHistoryData.ts            # Volkswagen history timeline (1937-Present)
│   │   └── vwPerformanceData.ts        # VW GT/GTI performance specs
│   ├── App.jsx                         # Main application layout, state & navigation hub
│   ├── index.css                       # Global CSS & Tailwind v4 style rules
│   ├── main.jsx                        # React root entry point
│   ├── types.ts                        # End-to-end TypeScript interfaces
│   └── utils/                          # Helper functions & state utilities
├── .env.example                        # Blueprint for environment variables
├── .gitignore                          # Git file exclusion rules
├── index.html                          # Single-page HTML entry point with metadata
├── package.json                        # NPM manifest dependencies and scripts
├── README.md                           # Project documentation (this file)
├── server.ts                           # Node.js Express server
├── tsconfig.json                       # TypeScript compiler config
├── vercel.json                         # Vercel deployment configuration
└── vite.config.ts                      # Vite build options & proxy configuration
```

---

## 🛡️ Quality Standards & Platform Engineering

* **5-Star B-NCAP / G-NCAP Rating**: Highlighting SAVWIPL localized models (Slavia, Kushaq, Virtus, Taigun) achieving top adult & child safety scores.
* **Platform Synergy**: Engineering insight covering **MQB-A0-IN**, **MQB EVO**, and **MLB Evo** modular matrix platforms.
* **End-to-End Type Safety**: Complete dataset and API request/response contracts backed by strict TypeScript interfaces (`src/types.ts`). Run `npm run lint` to verify compliance.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
