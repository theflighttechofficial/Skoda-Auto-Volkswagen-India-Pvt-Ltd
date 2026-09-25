import { useState } from "react";
import { Building2 } from "lucide-react";
import { GroupPersonalities } from "./GroupPersonalities";
import { IntroFilm, MARQUES, carSVG } from "./IntroFilm";
import "./vwIntro.css";

const NAV_LINKS = [
  { label: "Lineup", tab: "models" },
  { label: "Configurator", tab: "configurator" },
  { label: "Performance", tab: "graphs" },
  { label: "Safety", tab: "safety" },
  { label: "Ownership", tab: "calculator" },
  { label: "Dealers", tab: "dealerships" },
];

const MODULES = [
  { title: "Line-up and spec matrix", sub: "Every model, side by side", tab: "models" },
  { title: "Trim and variant explorer", sub: "What each trim actually adds", tab: "models" },
  { title: "360° colour visualiser", sub: "Signature shades under real light", tab: "visualizer" },
  { title: "Configurator", sub: "Engine, paint, wheels, interior", tab: "configurator" },
  { title: "Powertrain analytics", sub: "TSI, TDI, TFSI, DSG and PDK", tab: "engines" },
  { title: "Engine sound gallery", sub: "Exhaust notes and turbo spool", tab: "enginesounds" },
  { title: "RS, vRS and GT wing", sub: "The performance roster", tab: "rs" },
  { title: "Race mode", sub: "Launch control and lap timer", tab: "race" },
  { title: "Torque and RPM graphs", sub: "Power delivery, 0–100 km/h", tab: "graphs" },
  { title: "Safety lab", sub: "MQB-A0-IN, MQB EVO, MLB Evo", tab: "safety" },
  { title: "Cost of ownership", sub: "EMI and service packages", tab: "calculator" },
  { title: "Fuel economy simulator", sub: "City, highway, combined", tab: "fueleconomy" },
  { title: "AI vehicle advisor", sub: "Gemini-powered, offline fallback", tab: "advisor" },
  { title: "Dealer locator", sub: "Showrooms across India", tab: "dealerships" },
  { title: "Guess the car", sub: "Silhouettes and exhaust notes", tab: "guessgame" },
  { title: "Platform detective", sub: "Shared parts across the Group", tab: "platformdetective" },
  { title: "Heritage timelines", sub: "From 1895 to today", tab: "decades" },
  { title: "Made in India", sub: "Chakan, Shendra and India 2.0", tab: "madeinindia" },
];

const prefersReducedMotion = () => {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

export const LaunchScreen = ({ onEnter }) => {
  const [showIntro, setShowIntro] = useState(() => !prefersReducedMotion());
  const [pickIdx, setPickIdx] = useState(0);
  const [carKey, setCarKey] = useState(0);
  const m = MARQUES[pickIdx];

  const enter = (tab) => onEnter(m.id, tab);

  const pick = (k) => {
    setPickIdx(k);
    setCarKey((n) => n + 1);
  };

  const replayIntro = () => {
    window.scrollTo(0, 0);
    setShowIntro(true);
  };

  return (
    <div className="vwi" style={{ "--accent": m.c }}>
      {showIntro ? (
        <IntroFilm onDone={() => setShowIntro(false)} />
      ) : (
        <main className="vwi-landing">
          <header className="nav">
            <div className="mark">ŠKODA VOLKSWAGEN GROUP <span>INDIA</span></div>
            <nav aria-label="Main">
              {NAV_LINKS.map((l) => (
                <button key={l.label} onClick={() => enter(l.tab)}>{l.label}</button>
              ))}
            </nav>
            <button className="btn-ghost" onClick={replayIntro}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 3-6.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 4v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Replay intro
            </button>
          </header>

          <section className="hero">
            <div>
              <h1>
                Nine marques.<br />One garage.<span className="brandword">{m.n}</span>
              </h1>
              <p className="lede">
                Explore the Volkswagen Group line-up in India and beyond. Compare variants, build your car, hear the
                engines, check the crash-safety engineering, work out the EMI, and ask the AI advisor anything.
              </p>
              <div className="ctas">
                <button className="btn btn-primary" onClick={() => enter("models")}>Explore the line-up</button>
                <button className="btn btn-secondary" onClick={() => enter("advisor")}>Ask the AI advisor</button>
              </div>
              <p className="note">Prices in ₹. Dealers in every major Indian metro. The advisor keeps working offline.</p>
            </div>

            <div className="show" aria-live="polite">
              <div className="show-top">
                <span className="show-name">{m.n}</span>
                <span className="show-kind">{m.k} · {m.m.length} models</span>
              </div>
              <div key={carKey} dangerouslySetInnerHTML={{ __html: carSVG() }} />
              <p className="models">{m.m.join(", ")}</p>
              <div className="switcher" role="group" aria-label="Switch marque">
                {MARQUES.map((b, k) => (
                  <button
                    key={b.id}
                    className="chip"
                    style={{ "--c": b.c }}
                    aria-pressed={k === pickIdx}
                    onClick={() => pick(k)}
                  >
                    <i />{b.n}
                  </button>
                ))}
              </div>
              <button className="show-enter" onClick={() => enter("overview")}>Enter {m.n} →</button>
            </div>
          </section>

          <section className="stats" aria-label="At a glance">
            <div className="stat"><b>9</b><span>marques, one app</span></div>
            <div className="stat"><b>59</b><span>models catalogued</span></div>
            <div className="stat"><b>18</b><span>interactive modules</span></div>
            <div className="stat"><b>5★</b><span>NCAP safety deep-dives</span></div>
          </section>

          <section className="brands" id="brands">
            <p className="flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-4">
              <Building2 className="w-3.5 h-3.5" />
              Škoda Auto Volkswagen India Private Limited
            </p>
            <h2
              className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white normal-case"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Groupe{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                die Volkswagen
              </span>
            </h2>
            <p className="text-center text-xs sm:text-sm text-zinc-500 mt-2 mb-10 italic tracking-wide">
              Neun Marken. Eine Philosophie. — Nine Brands, One Philosophy.
            </p>
            <GroupPersonalities
              onSelectBrand={(id) => onEnter(id, "overview")}
              badgeLabel="One Group, Many Personalities"
              heading="Different Personalities. Shared DNA."
              description="Škoda, Volkswagen, Audi, Porsche, Lamborghini, Bentley, SEAT, Scania, and MAN — nine distinct personalities built on shared Volkswagen Group engineering (SEAT is not officially sold in India). Click a brand to enter its world."
            />
          </section>

          <section className="modules">
            <h2>Everything inside · opens for <span>{m.n}</span></h2>
            <div className="mgrid">
              {MODULES.map((mod) => (
                <button key={mod.title} onClick={() => enter(mod.tab)}>
                  {mod.title}<small>{mod.sub}</small>
                </button>
              ))}
            </div>
          </section>

          <footer className="foot">
            <span>Škoda • Volkswagen Group India Showcase · Chakan (Pune) & Aurangabad, Maharashtra, India</span>
            <span>Brand names and trademarks belong to their respective owners.</span>
          </footer>
        </main>
      )}
    </div>
  );
};
