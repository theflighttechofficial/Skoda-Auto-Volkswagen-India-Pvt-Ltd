# Škoda • Volkswagen • Audi India Guide Showcase 🚗⚡

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Google Gemini API](https://img.shields.io/badge/Gemini_AI-@google/genai_2.4-8E75B2?style=flat-square&logo=googlegemini)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

An interactive, enterprise-grade buyer's guide and performance showcase covering the complete **Škoda Auto Volkswagen India Pvt. Ltd. (SAVWIPL)** portfolio — spanning **Škoda India**, **Volkswagen India**, and **Audi India**. 

Explore **30+ iconic models** across three German/Czech luxury & mass-premium marques. Switch brands on the fly to experience tailored themes, dynamic powertrain analytics, interactive variant matrixes, 360° color visualizers, 5-star crash safety deep dives, cost-of-ownership calculators, an AI-powered vehicle advisor, and an offline-enabled dealership locator across India.

---

## 📸 Overview & Architecture Highlights

```
+-----------------------------------------------------------------------------------+
|                  Škoda • Volkswagen • Audi India Showcase (SPA)                  |
+-----------------------------------------------------------------------------------+
|  [ Brand Switcher ] -> Toggles line-ups (Škoda | VW | Audi), accent themes & data  |
+-----------------------------------------------------------------------------------+
|  Navigation Tabs:                                                                 |
|  ├── 🚗 Overview & Lineup Matrix      ├── ⚡ Engine & Powertrain Specs            |
|  ├── 🚘 Trim & Variant Explorer        ├── 🛡️ 5-Star NCAP Safety Deep Dive         |
|  ├── 🎨 360° Interactive Color Visualizer ├── 🏁 RS / vRS / GT Performance Wing      |
|  ├── 📈 RPM & Speed Telemetry Graphs  ├── 🤖 Gemini AI Vehicle Advisor            |
|  ├── 💰 Cost of Ownership & EMI Calc  ├── 📍 Interactive Dealership Locator       |
|  ├── 📜 Heritage & Brand Timelines    ├── 🌐 Proud to be VW Group Synergies       |
|  └── ❓ Comprehensive Brand FAQs                                                  |
+-----------------------------------------------------------------------------------+
|                          Backend API & Serverless Layer                          |
|  - Node.js Express Proxy (`server.ts`) for traditional Node.js server environments |
|  - Vercel Serverless Functions (`api/*.ts`) with shared Google Gemini AI client    |
|  - Intelligent Offline AI Fallback Engine when API Key is unconfigured             |
+-----------------------------------------------------------------------------------+
```

---

## 🌟 Comprehensive Feature Set

### 1. 🏷️ Multi-Brand Dynamic Switching
* **Instant Marque Pivot**: Switch between **Škoda**, **Volkswagen**, and **Audi** with dynamic theme transitions (Emerald Green, German Performance Blue/Red, and Audi Platinum Dark aesthetics).
* **Deep Brand Customization**: Brand-specific logos, hero banners, carousels, model range tags, and copy across the entire dashboard.

### 2. 🚗 Interactive Vehicle Catalog (30+ Models)
* **Škoda India Range**: Slavia, Kushaq, Kylaq, Octavia (vRS), Kodiaq, Superb, Karoq, Fabia, Rapid, Yeti, Laura.
* **Volkswagen India Range**: Virtus, Taigun, Tiguan, Golf GTI, Polo GT TSI, Vento, Passat, Jetta, Ameo, T-Roc, Touareg, Beetle, Phaeton.
* **Audi India Range**: A3, A4, A6, A8 L, Q3, Q3 Sportback, Q5, Q7, Q8, RS5 Sportback, RS Q8.

### 3. 🚘 Trim & Variant Matrix Explorer
* Side-by-side trim level comparisons (e.g., *Classic / Signature / Prestige*, *Comfortline / Highline / Topline / GT*, *Premium Plus / Technology*).
* Detailed pricing breakdowns (Ex-showroom India), key equipment lists, wheel options, infotainment sizes, and safety equipment standardizations.

### 4. ⚡ Engine & Powertrain Analytics
* Technical specifications covering 1.0L TSI, 1.5L TSI EVO with ACT (Active Cylinder Technology), 2.0L TSI, 2.0L TDI CR, 40/45/55 TFSI, 3.0L V6 TFSI, and twin-turbo 4.0L V8 TFSI Audi Sport units.
* Transmission analytics including 6-speed Manual, 6-speed Torque Converter Automatic, 7-speed DSG (DQ200 dry / DQ381 wet / DQ500), and 8-speed Tiptronic with quattro.

### 5. 🏁 RS / vRS / GT Performance Wing
* Exclusive performance hub dedicated to enthusiast models: **Octavia vRS**, **Kodiaq vRS**, **Golf GTI**, **Virtus GT Plus**, **Audi RS5 Sportback**, and **Audi RS Q8**.
* Highlights launch control, dynamic chassis control (DCC), sports exhaust systems, locking differentials (XDS+/quattro with sports differential), and lap telemetry.

### 6. 📈 Dynamic Performance & Telemetry Graphs
* Real-time charts for torque vs. RPM curves, power delivery output, gear ratio velocity calculations, and 0–100 km/h acceleration sprint comparisons.

### 7. 🤖 Gemini AI Vehicle Advisor (`@google/genai`)
* Powered by Google's latest `@google/genai` SDK with full contextual knowledge of SAVWIPL cars, prices, variants, maintenance recommendations, and competitor benchmarks.
* **Smart Offline Fallback**: If `GEMINI_API_KEY` is not provided, an inline intelligent engine responds seamlessly without breaking UX or throwing network errors.

### 8. 🎨 360° Color & Visualizer
* High-definition visualizer allowing users to inspect signature manufacturer colorways (Tornado Red, Lava Blue, Carbon Steel Gray, Mythos Black, Navarra Blue, Daytona Gray, etc.).

### 9. 🛡️ 5-Star NCAP Safety Deep Dive
* Engineering insights into MQB-A0-IN, MQB EVO, and MLB Evo platform safety architecture.
* Details on hot-formed ultra-high-strength steel, 6-to-8 airbag deployment, Electronic Stability Control (ESC), Multi-Collision Braking (MKB), Hill Hold Control, and Audi Pre Sense.

### 10. 💰 Cost of Ownership & Financial EMI Calculator
* Customizable financial planner for calculating monthly EMIs based on tenure, interest rate, and down payment.
* Estimated maintenance costs over 4-year/60,000 km and 5-year/75,000 km service packages (Škoda SuperCare, VW Service Value Packs, Audi Comprehensive Service Plans).

### 11. 📍 Pan-India Dealership & Service Locator
* Filterable database of authorized showrooms and service workshops across major Indian metros (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, etc.).

### 12. 📜 Heritage & Brand History Timelines
* Rich interactive historical timelines tracing Laurin & Klement (1895), Volkswagen (1937), and Audi Horch/Auto Union (1909), showing over a century of automotive innovation.

---

## 🛠️ Technology Stack & Architecture

### **Frontend Core**
* **Framework**: [React 19](https://react.dev/) (Client-side rendered Single Page Application)
* **Build Tool**: [Vite 6](https://vitejs.dev/) with lightning-fast HMR
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native `@tailwindcss/vite` integration
* **Animations**: [Motion (Framer Motion)](https://motion.dev/) for smooth tab transitions, modal overlays, and hover effects
* **Icons**: [Lucide React](https://lucide.dev/) modular icon library
* **Language**: TypeScript (`types.ts`) & JSX

### **Backend & API Proxy**
* **Server Runtime**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/) (`server.ts`)
* **Bundler & Execution**: `tsx` (development execution) and `esbuild` (production CJS bundling)
* **Serverless Infrastructure**: Vercel Serverless Functions (`api/ask-skoda-ai.ts`, `api/_lib/ai.ts`)
* **AI Engine**: Google Gemini API via official `@google/genai` (v2.4.0)

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

Create a `.env` file in the project root (refer to `.env.example`):

```env
# Optional: Google Gemini API Key for live AI Advisor responses
GEMINI_API_KEY="your_google_gemini_api_key_here"

# Application Base URL
APP_URL="http://localhost:3000"

# Optional: Server Port (defaults to 3000)
PORT=3000
```

> **Note on AI Advisor**: If `GEMINI_API_KEY` is omitted, the backend cleanly defaults to an offline response engine that provides accurate pre-generated advice for all brand queries.

### 3. Running Locally

#### **Development Mode (Vite + Express)**
Starts the Express server integrated with Vite development middleware:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

#### **Production Build & Preview**
To build the application for Node.js production hosting:
```bash
# Build Vite frontend and bundle Express backend
npm run build

# Start production server
npm run start
```

---

## ☁️ Deployment Strategy

### **Deployment to Vercel (Recommended)**

The application features built-in Vercel optimization:

1. Frontend assets compile cleanly to `dist/` via `npm run vercel-build`.
2. Backend AI routes are exposed as Vercel Serverless Functions in `api/`:
   * `/api/ask-skoda-ai` (Main AI endpoint)
   * `/api/ask-brand-ai`, `/api/ask-vw-ai`, `/api/ask-slavia-ai` (Backward-compatible route aliases)
   * `/api/health` (Health check endpoint)
3. [`vercel.json`](file:///c:/Users/DELL/Downloads/skoda-slavia-guide-showcase-1/vercel.json) routes incoming API requests to serverless execution while handling single-page application client rewrites.

**Deployment Steps:**
1. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
2. Set Environment Variable: `GEMINI_API_KEY` (Optional).
3. Vercel automatically runs `npm run vercel-build` and deploys static assets with serverless API routes.

### **Traditional Node.js Hosting (Railway, Render, VPS)**
1. Run `npm run build` to output `dist/` and `dist/server.cjs`.
2. Set `NODE_ENV=production` and start using `npm run start` (`node dist/server.cjs`).

---

## 📜 Available NPM Scripts

| Script | Executed Command | Description |
|---|---|---|
| `npm run dev` | `tsx server.ts` | Launches Express server with Vite HMR middleware on port `3000`. |
| `npm run build` | `vite build && esbuild server.ts ...` | Builds static client bundle (`dist/`) and packages Node server (`dist/server.cjs`). |
| `npm run vercel-build` | `vite build` | Client-only build command tailored for Vercel deployment. |
| `npm run start` | `node dist/server.cjs` | Starts compiled CJS Node server in production. |
| `npm run preview` | `vite preview` | Previews Vite static production output locally. |
| `npm run lint` | `tsc --noEmit` | Runs TypeScript compiler check across project files. |
| `npm run clean` | `rm -rf dist server.js` | Cleans up dist artifacts and legacy build files. |

---

## 📁 Repository Structure

```
.
├── api/                                # Vercel Serverless Function Endpoints
│   ├── _lib/
│   │   └── ai.ts                       # Shared Gemini SDK integration & offline fallback logic
│   ├── ask-brand-ai.ts                 # Route alias for AI query handler
│   ├── ask-skoda-ai.ts                 # Primary Gemini AI prompt API route
│   ├── ask-slavia-ai.ts                # Legacy route alias
│   ├── ask-vw-ai.ts                    # Legacy route alias
│   └── health.ts                       # Serverless health status endpoint
├── public/                             # Public static assets & vehicle imagery
│   ├── cars/                           # High-res vehicle photography for model catalog & banners
│   └── favicon.png                     # Application favicon icon
├── src/                                # React Frontend Source Code
│   ├── assets/                         # SVG icons and visual media assets
│   ├── components/                     # Modular React Components
│   │   ├── AIAdvisor.jsx               # Gemini AI conversation widget & chat interface
│   │   ├── AboutSkodaHistory.jsx       # Historical timelines & brand heritage section
│   │   ├── AudiLogo.jsx                # Vector SVG Audi 4-Rings logo component
│   │   ├── ColorVisualizer.jsx         # Dynamic 360° paint shade selector
│   │   ├── CostCalculator.jsx          # EMI & maintenance package calculator
│   │   ├── DealershipLocator.jsx       # Searchable dealer & workshop directory
│   │   ├── EnginePerformance.jsx       # Powertrain breakdown (TSI / TDI / TFSI)
│   │   ├── FAQSection.jsx              # Comprehensive buyer & brand FAQs
│   │   ├── Header.jsx                  # Header navigation, brand switcher & category bar
│   │   ├── HeroOverview.jsx            # Hero banner, spotlight cars & catalog grid
│   │   ├── PerformanceGraphs.jsx       # RPM torque/power telemetry charts
│   │   ├── RSPerformance.jsx           # RS / vRS / GT performance wing
│   │   ├── SafetyDeepDive.jsx          # 5-Star NCAP chassis & safety breakdown
│   │   ├── SkodaLogo.jsx               # Vector SVG Škoda Winged Arrow logo component
│   │   ├── VariantExplorer.jsx         # Trim level comparison matrix
│   │   ├── VolkswagenGroupProud.jsx    # SAVWIPL platform sharing & group synergies
│   │   └── VolkswagenLogo.jsx          # Vector SVG Volkswagen logo component
│   ├── data/                           # Comprehensive Datasets (TS Typed)
│   │   ├── audiData.ts                 # Audi India lineup specifications, pricing & colors
│   │   ├── audiHistoryData.ts          # Audi historical milestone timeline (1909-Present)
│   │   ├── audiPerformanceData.ts      # Audi Sport S/RS performance metrics
│   │   ├── dealershipData.ts           # Dealer network dataset across Indian cities
│   │   ├── historyData.ts              # Škoda historical timeline (1895-Present)
│   │   ├── performanceGraphsData.ts    # Telemetry data points for RPM, power & speed
│   │   ├── rsPerformanceData.ts        # Škoda vRS performance data
│   │   ├── skodaData.ts                # Škoda India lineup specs, trim levels & colors
│   │   ├── vwData.ts                   # VW India lineup specs, trim levels & colors
│   │   ├── vwGroupData.ts              # MQB/MLB platforms & VW Group technology data
│   │   ├── vwHistoryData.ts            # Volkswagen history timeline (1937-Present)
│   │   └── vwPerformanceData.ts        # VW GT/GTI performance specs
│   ├── App.jsx                         # Main application layout, state & router hub
│   ├── index.css                       # Global CSS & Tailwind CSS v4 styling rules
│   ├── main.jsx                        # React root entry point
│   ├── types.ts                        # End-to-end TypeScript interfaces & definitions
│   └── utils/                          # Utility helper scripts
├── .env.example                        # Blueprint for environment variables
├── .gitignore                          # Git file exclusion rules
├── index.html                          # Single-page HTML entry point with metadata
├── package.json                        # NPM manifest dependencies and build scripts
├── README.md                           # Project documentation (this file)
├── server.ts                           # Node.js Express application server
├── tsconfig.json                       # TypeScript compiler options
├── vercel.json                         # Vercel deployment configuration
└── vite.config.ts                      # Vite build options & server proxy settings
```

---

## 🛡️ Quality Standards & Platform Engineering

* **5-Star Safety Guarantee**: All current core localized models (Slavia, Kushaq, Virtus, Taigun) achieve 5-Star ratings in Adult and Child Occupant Protection under B-NCAP / G-NCAP testing protocols.
* **Platform Engineering**: Built on **MQB-A0-IN** (India-specific high-localization architecture), **MQB EVO**, and **MLB Evo** modular matrix platforms.
* **End-to-End Type Safety**: Complete dataset and API request/response structures are validated with TypeScript interfaces (`src/types.ts`). Run `npm run lint` anytime to verify strict type compliance.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
