# Škoda • Volkswagen • Audi India Guide Showcase 🚗⚡

An interactive, feature-rich buyer's guide covering the entire **Škoda Auto Volkswagen India** portfolio — **Škoda**, **Volkswagen**, and **Audi** — in one app. Switch brands on the fly to explore 30 models across three marques, with dynamic spec comparisons, performance telemetry, 360° color previews, safety deep dives, cost-of-ownership calculators, an AI-powered vehicle advisor, and a dealership locator.

---

## 🌟 Key Features

- 🏷️ **Three-Brand Switcher**: Instantly toggle between Škoda India, Volkswagen India, and Audi India — each with its own model lineup, color palette, accent theme, and copy.
- 🖼️ **Visual Model Showcase**: Every model card, spotlight view, and trim page carries a real photo, with a rotating hero image (Octavia / Golf GTI / Audi Q8) on each brand's homepage banner.
- 🚘 **Interactive Variant Explorer**: Detailed trim-by-trim comparisons (Classic/Signature/Prestige, Comfortline/Highline/Topline, Premium Plus/Technology, etc.) with pricing, equipment lists, and key differentiators across all 30 models.
- ⚡ **Engine & Performance Analytics**: In-depth powertrain breakdowns spanning Škoda/VW TSI & TDI units and Audi's TFSI four-, six-, and eight-cylinder engines, including Audi Sport RS twin-turbo units.
- 🏁 **RS / vRS / GT Performance Wing**: Dedicated showcase for the performance flagships — Octavia vRS, Kodiaq vRS, Golf GTI, Virtus GT Plus, and Audi Sport's RS5 & RS Q8.
- 📈 **Dynamic Performance Graphs**: Visual torque/power curves, gear ratio speeds, and 0–100 km/h acceleration comparisons across the range.
- 🤖 **Gemini AI Vehicle Advisor**: Powered by the official Google `@google/genai` SDK for natural-language trim comparisons and buying recommendations, brand-aware across Škoda, VW, and Audi. Includes a smart offline fallback when no API key is configured.
- 🎨 **360° Color Visualizer**: Live color palette selector showcasing signature shades — Tornado Red, Lava Blue, Carbon Steel, Mythos Black, Navarra Blue, and more.
- 🛡️ **5-Star Safety Deep Dive**: Structural breakdowns of the MQB/MLB Evo platforms, hot-formed high-strength steel, 6 airbags, ESC, multi-collision braking, and Audi Pre Sense.
- 💰 **Cost of Ownership & EMI Calculator**: Interactive financial planning tool for estimating EMIs, service package costs, and fuel expenses per model and brand.
- 📍 **Dealership & Service Locator**: City-by-city searchable directory of authorized showrooms and service centers across major Indian metros for all three brands.
- 📜 **Brand History & Group Synergies**: Historical timelines from Laurin & Klement (1895), Volkswagen (1937), and Audi (1909), plus a dedicated "Proud to be VW Group" section on shared platforms and technology.
- ❓ **FAQ Section**: Brand-specific answers on safety, performance, maintenance, and cross-brand comparisons.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite 6](https://vitejs.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Motion (Framer Motion)](https://motion.dev/), [Lucide React](https://lucide.dev/)
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [TSX](https://github.com/privatenumber/tsx), [esbuild](https://esbuild.github.io/)
- **AI Integration**: [@google/genai SDK](https://www.npmjs.com/package/@google/genai) (Google Gemini API)
- **Language**: TypeScript & modern ES Modules

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

3. **Configure environment variables**:
   Create a `.env` or `.env.local` file in the root directory (refer to `.env.example`):
   ```env
   GEMINI_API_KEY="your_google_gemini_api_key_here"
   APP_URL="http://localhost:3000"
   ```
   *(If `GEMINI_API_KEY` is not provided, the app seamlessly falls back to a built-in offline response generator for the AI Advisor.)*

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

---

## ☁️ Deploying to Vercel

The app is Vercel-ready out of the box:

- The React/Vite frontend builds to static assets (`npm run vercel-build` → `vite build` → `dist/`).
- The AI Advisor backend (`server.ts`'s Express routes) is mirrored as framework-free Vercel serverless functions under [`api/`](api/) (`api/ask-skoda-ai.ts` plus back-compat aliases), sharing the same logic via [`api/_lib/ai.ts`](api/_lib/ai.ts) — no long-running server process is required in production.
- [`vercel.json`](vercel.json) pins the build command/output directory and rewrites all non-`/api` routes to `index.html` for the single-page app.

**Steps:**

1. Push the repo to GitHub/GitLab/Bitbucket and import it in the [Vercel dashboard](https://vercel.com/new), or run `vercel` from the project root with the [Vercel CLI](https://vercel.com/docs/cli).
2. In the project's Vercel **Settings → Environment Variables**, add `GEMINI_API_KEY` (optional — without it, the AI Advisor automatically uses its offline fallback responses).
3. Deploy. Vercel will run `npm run vercel-build` and serve `dist/` as static output, with `/api/*` requests routed to the serverless functions.

`server.ts` and `npm run build`/`npm start` are still fully functional for traditional Node hosting (Railway, Render, a VPS, etc.) — they share the exact same AI Advisor logic as the Vercel functions.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `tsx server.ts` | Starts the Express server with Vite dev middleware for instant HMR. |
| `npm run build` | `vite build && esbuild ...` | Compiles client assets and bundles server code to `dist/server.cjs` (for traditional Node hosting). |
| `npm run vercel-build` | `vite build` | Client-only build used by Vercel; the AI Advisor ships as serverless functions instead. |
| `npm run start` | `node dist/server.cjs` | Runs the compiled production server. |
| `npm run preview` | `vite preview` | Previews the static production build locally. |
| `npm run lint` | `tsc --noEmit` | Runs the TypeScript type checker to ensure type safety. |
| `npm run clean` | `rm -rf dist server.js` | Removes production build artifacts. |

---

## 📁 Project Structure

```
├── server.ts                     # Express server (Gemini API proxy & Vite middleware) for traditional Node hosting
├── vercel.json                   # Vercel build/output & SPA rewrite configuration
├── api/                          # Vercel serverless functions (mirror server.ts's API routes)
│   ├── ask-skoda-ai.ts           # AI Advisor endpoint used by the frontend
│   ├── ask-brand-ai.ts, ask-vw-ai.ts, ask-slavia-ai.ts # Back-compat route aliases
│   ├── health.ts                 # Health check endpoint
│   └── _lib/ai.ts                # Shared Gemini client & offline fallback logic (also used by server.ts)
├── index.html                    # HTML entry point with metadata
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies and npm scripts
├── .env.example                  # Sample environment variables
├── public/
│   ├── favicon.png
│   └── cars/                     # Model photography used across cards, spotlights & hero banners
└── src/
    ├── main.jsx                  # React root application launcher
    ├── App.jsx                   # Main layout, brand & tab navigation router
    ├── index.css                 # Global styles and Tailwind CSS imports
    ├── types.ts                  # Shared TypeScript interfaces (engines, variants, colors, FAQs)
    ├── components/                # UI Components
    │   ├── AIAdvisor.jsx          # Gemini-powered car buying & technical assistant
    │   ├── AboutSkodaHistory.jsx  # Brand history, timeline & heritage features per brand
    │   ├── AudiLogo.jsx           # Vector Audi four-rings logo component
    │   ├── ColorVisualizer.jsx    # 360° vehicle color selector
    │   ├── CostCalculator.jsx     # Financial EMI & maintenance cost estimator
    │   ├── DealershipLocator.jsx  # Interactive dealer directory across all three brands
    │   ├── EnginePerformance.jsx  # TSI / TDI / TFSI engine specification breakdowns
    │   ├── FAQSection.jsx         # Frequently asked questions & buyer guide
    │   ├── Header.jsx             # Top navigation bar, brand switcher & model lineup strip
    │   ├── HeroOverview.jsx       # Homepage hero banner, model spotlight & lineup grid
    │   ├── PerformanceGraphs.jsx  # RPM/torque telemetry & speed charts
    │   ├── RSPerformance.jsx      # RS / vRS / GT performance showcase
    │   ├── SafetyDeepDive.jsx     # 5-Star NCAP crash safety breakdown
    │   ├── SkodaLogo.jsx          # Vector Škoda logo component
    │   ├── VariantExplorer.jsx    # Trim levels & features comparison
    │   ├── VolkswagenGroupProud.jsx # VW Group ecosystem & platform synergies
    │   └── VolkswagenLogo.jsx     # Vector Volkswagen logo component
    └── data/                      # Vehicle specifications & regional datasets
        ├── skodaData.ts           # Škoda model lineup, engines, variants & colors
        ├── vwData.ts              # Volkswagen model lineup, engines, variants & colors
        ├── audiData.ts            # Audi model lineup, engines, variants & colors
        ├── historyData.ts         # Škoda historical milestone timeline
        ├── vwHistoryData.ts       # Volkswagen history timeline
        ├── audiHistoryData.ts     # Audi history timeline
        ├── rsPerformanceData.ts   # Škoda vRS & VW GT performance metrics
        ├── vwPerformanceData.ts   # Volkswagen GT/GTI performance specs
        ├── audiPerformanceData.ts # Audi Sport RS/S performance specs
        ├── performanceGraphsData.ts # Telemetry data for charts
        ├── vwGroupData.ts         # VW Group platform & technology data
        └── dealershipData.ts      # Showroom & service station database
```

---

## 🛡️ Safety & Quality Standards

- **NCAP Ratings**: Every model in the lineup carries a 5-Star Bharat NCAP / Global NCAP / Euro NCAP rating, built on the shared MQB and MLB Evo platform family.
- **Engine Tech**: High-pressure direct-injection turbocharging across TSI, TDI, and TFSI powertrains, including Active Cylinder Technology and Audi's quattro all-wheel drive.
- **Type Safety**: The full model, engine, variant, and color dataset is typed end-to-end in TypeScript and validated with `npm run lint`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
