import { useEffect, useRef } from "react";

export const MARQUES = [
  { id: "skoda", n: "Škoda", c: "#6FE3A0", k: "Passenger cars", m: ["Slavia", "Kushaq", "Kylaq", "Kodiaq", "Octavia vRS", "Superb", "Karoq", "Fabia", "Rapid", "Yeti", "Laura"] },
  { id: "volkswagen", n: "Volkswagen", c: "#5AA9FF", k: "Passenger cars", m: ["Virtus", "Taigun", "Tiguan", "Golf GTI", "Polo GT TSI", "Vento", "Passat", "Jetta", "Ameo", "T-Roc", "Touareg", "Beetle", "Phaeton"] },
  { id: "audi", n: "Audi", c: "#FF5468", k: "Premium cars", m: ["A3", "A4", "A6", "A8 L", "Q3", "Q3 Sportback", "Q5", "Q7", "Q8", "RS5 Sportback", "RS Q8"] },
  { id: "seat", n: "SEAT", c: "#FF8A4C", k: "Passenger cars", m: ["Ibiza", "Arona", "Leon", "Ateca", "Tarraco"] },
  { id: "porsche", n: "Porsche", c: "#E8C27A", k: "Sports cars", m: ["911 Carrera", "718 Cayman", "Macan", "Cayenne", "Panamera"] },
  { id: "lamborghini", n: "Lamborghini", c: "#FFD23F", k: "Super sports cars", m: ["Huracán", "Urus", "Revuelto"] },
  { id: "bentley", n: "Bentley", c: "#7FD1B9", k: "Luxury cars", m: ["Continental GT", "Bentayga", "Flying Spur"] },
  { id: "man", n: "MAN", c: "#B8C4D6", k: "Trucks and buses", m: ["TGS", "TGX", "Lion's City", "Lion's Coach"] },
  { id: "scania", n: "Scania", c: "#D7B35B", k: "Trucks and buses", m: ["R 500", "S 730", "Citywide", "Metrolink"] },
];

const CH = [
  { name: "Ignition", s: 0, e: 4000 },
  { name: "Nine marques", s: 4000, e: 9000 },
  { name: "Performance", s: 9000, e: 14000 },
  { name: "Across India", s: 14000, e: 18500 },
  { name: "The showcase", s: 18500, e: 23000 },
];
const TOTAL = 23000;

// Original generic silhouette, not any real model.
export function carSVG() {
  return '<svg class="car" viewBox="0 0 600 200" fill="none" aria-hidden="true">'
    + '<path d="M40 142 L58 112 Q80 100 132 96 L205 70 Q232 58 282 56 L382 58 Q422 60 462 90 L540 102 Q570 108 572 130 L570 146 L520 148 A40 40 0 0 0 440 148 L200 148 A40 40 0 0 0 120 148 L52 148 Q38 147 40 142 Z" stroke="var(--accent)" stroke-width="2.4" stroke-linejoin="round" fill="rgba(255,255,255,.02)"/>'
    + '<path d="M218 74 Q238 65 282 64 L300 64 L300 94 L196 96 Z M312 64 L376 65 Q406 67 430 92 L312 94 Z" stroke="#5B616B" stroke-width="1.6" fill="rgba(255,255,255,.03)"/>'
    + '<path d="M70 118 L548 116" stroke="#3A3F48" stroke-width="1.2"/>'
    + '<path d="M546 110 L566 114" stroke="var(--amber)" stroke-width="4" stroke-linecap="round"/>'
    + '<path d="M44 124 L58 122" stroke="#FF5468" stroke-width="4" stroke-linecap="round"/>'
    + '<g class="wheel"><circle cx="160" cy="148" r="30" stroke="var(--white)" stroke-width="2.4" fill="var(--bg)"/><circle cx="160" cy="148" r="13" stroke="#5B616B" stroke-width="1.6"/><path d="M160 122V135M160 161V174M134 148H147M173 148H186" stroke="#5B616B" stroke-width="1.6"/></g>'
    + '<g class="wheel"><circle cx="480" cy="148" r="30" stroke="var(--white)" stroke-width="2.4" fill="var(--bg)"/><circle cx="480" cy="148" r="13" stroke="#5B616B" stroke-width="1.6"/><path d="M480 122V135M480 161V174M454 148H467M493 148H506" stroke="#5B616B" stroke-width="1.6"/></g>'
    + '<path d="M20 182 H580" stroke="#2A2E35" stroke-width="2"/>'
    + "</svg>";
}

function ticks() {
  let out = "";
  for (let v = 0; v <= 8; v++) {
    const a = ((-120 + v * 30) * Math.PI) / 180, cx = 200, cy = 200;
    const x1 = cx + Math.sin(a) * 160, y1 = cy - Math.cos(a) * 160, x2 = cx + Math.sin(a) * 140, y2 = cy - Math.cos(a) * 140;
    const tx = cx + Math.sin(a) * 116, ty = cy - Math.cos(a) * 116 + 6;
    const red = v >= 7;
    out += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="${red ? "#FF5468" : "#8C929C"}" stroke-width="3"/>`
      + `<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" fill="${red ? "#FF5468" : "#E8E6E1"}" style="font:600 18px var(--mono)">${v}</text>`;
  }
  return out;
}

function grid() {
  let g = "";
  for (let y = 40; y <= 300; y += 52) g += `<path d="M40 ${y}H600" stroke="#1D2127"/>`;
  for (let x = 40; x <= 600; x += 70) g += `<path d="M${x} 20V300" stroke="#1D2127"/>`;
  return g + '<path d="M40 20V300H600" stroke="#3A3F48"/>';
}

function sceneHTML(i) {
  if (i === 0) {
    return '<div class="ign">'
      + '<svg class="gauge" viewBox="0 0 400 400" aria-hidden="true">'
      + '<path d="M73 327 A180 180 0 1 1 327 327" fill="none" stroke="#23272E" stroke-width="10" stroke-linecap="round"/>'
      + '<path d="M73 327 A180 180 0 1 1 327 327" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round" style="--len:950;stroke-dasharray:950;animation:vwi-draw 1s cubic-bezier(.6,0,.3,1) .3s both"/>'
      + '<path d="M296 104 A180 180 0 0 1 327 327" fill="none" stroke="#FF5468" stroke-width="10" stroke-linecap="round" style="animation:vwi-fade .4s ease 1.1s both"/>'
      + ticks()
      + '<g class="needle"><path d="M200 200 L200 52" stroke="var(--white)" stroke-width="4" stroke-linecap="round"/><circle cx="200" cy="200" r="12" fill="var(--white)"/></g>'
      + '<text x="200" y="262" text-anchor="middle" fill="#8C929C" style="font:500 14px var(--mono)">× 1000 rpm</text>'
      + "</svg>"
      + '<div class="startbtn">ENGINE<br>START<br>STOP</div>'
      + '<div class="readout" style="animation:vwi-fade .4s ease 2.6s both"><span>Fuel <b>OK</b></span><span>ESC <b>ON</b></span><span>Airbags <b>6</b></span><span>Gear <b>P</b></span></div>'
      + "</div>"
      + '<p class="caption">Turn the key on the Volkswagen Group in India.</p>';
  }
  if (i === 1) {
    const dots = MARQUES.map((m, j) => `<span class="dot" data-j="${j}" style="--c:${m.c}">${m.n}</span>`).join("");
    return `<div class="marques"><div class="kind" data-live="kind">Passenger cars</div><div class="bigname" data-live="name">Škoda</div><div class="dots">${dots}</div></div>`
      + '<p class="caption">Nine marques, one app. Switch brands and the whole site <em>re-themes</em>.</p>';
  }
  if (i === 2) {
    return '<div class="perf">'
      + '<div><div class="label" style="margin-bottom:10px">Power and torque against rpm <span style="color:#5B616B">(illustrative)</span></div>'
      + '<svg class="chart" viewBox="0 0 640 340" fill="none" aria-hidden="true">'
      + grid()
      + '<path d="M40 280 C 90 200, 130 110, 190 96 L 420 96 C 480 104, 540 140, 600 176" stroke="var(--accent)" stroke-width="3" style="--len:800;stroke-dasharray:800;animation:vwi-draw 1.8s ease .5s both"/>'
      + '<path d="M40 300 C 150 250, 300 150, 470 70 C 520 56, 560 62, 600 84" stroke="var(--amber)" stroke-width="3" style="--len:800;stroke-dasharray:800;animation:vwi-draw 1.8s ease .9s both"/>'
      + '<g style="font:500 13px var(--mono);animation:vwi-fade .4s ease 2.4s both"><text x="200" y="84" fill="var(--accent)">Torque plateau</text><text x="470" y="50" fill="var(--amber)">Peak power</text></g>'
      + '<g fill="#5B616B" style="font:500 12px var(--mono)"><text x="40" y="326">1k</text><text x="180" y="326">2k</text><text x="320" y="326">4k</text><text x="460" y="326">5k</text><text x="580" y="326">6.5k</text></g>'
      + "</svg></div>"
      + '<div class="dial"><div class="label">0–100 km/h launch</div>'
      + '<div class="speed"><span data-live="spd">0</span><small>km/h</small></div>'
      + '<div class="gears">' + [1, 2, 3, 4, 5, 6, 7].map((g) => `<div class="gear" data-g="${g}">${g}</div>`).join("") + "</div>"
      + '<div class="label">Launch control · DSG · Dynamic chassis control</div></div>'
      + "</div>"
      + '<p class="caption">Torque curves, launch control and lap timers for the <em>RS, vRS and GT</em> wing.</p>';
  }
  if (i === 3) {
    const cities = ["Mumbai", "Pune", "Ahmedabad", "Delhi NCR", "Kolkata", "Hyderabad", "Bengaluru", "Chennai"];
    return '<div class="roadwrap">'
      + '<div class="carbox"><div class="speedlines"><i></i><i></i><i></i></div>' + carSVG() + "</div>"
      + '<div class="route">' + cities.map((c, k) => `<span class="stop" style="animation-delay:${0.7 + k * 0.35}s">${c}</span>`).join("") + "</div>"
      + '<div class="plants"><span>Built at <b>Chakan</b>, Pune</span><span>and <b>Shendra</b>, Chhatrapati Sambhaji Nagar</span><span><b>95%+</b> localised</span></div>'
      + "</div>"
      + '<p class="caption">Made in India, and a dealer locator that works <em>from Mumbai to Kolkata</em>.</p>';
  }
  const steps = ["Line-up", "Configure", "Hear it", "Race it", "Stay safe", "Own it", "Ask the AI"];
  return '<div class="title">'
    + '<div class="t-line"><span style="animation-delay:.2s">ŠKODA ×</span></div>'
    + '<div class="t-line acc"><span style="animation-delay:.4s">VOLKSWAGEN</span></div>'
    + '<div class="t-line"><span style="animation-delay:.6s">GROUP INDIA</span></div>'
    + '<div class="rule"></div>'
    + '<div class="chain">' + steps.map((s, k) => (k ? `<i style="animation:vwi-fade .3s ease ${1.3 + k * 0.28}s both">→</i>` : "") + `<span style="animation-delay:${1.4 + k * 0.28}s">${s}</span>`).join("") + "</div>"
    + "</div>";
}

export const IntroFilm = ({ onDone }) => {
  const rootRef = useRef(null);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const root = rootRef.current;
    const sceneEl = root.querySelector(".scene");
    const setAccent = (c) => root.style.setProperty("--accent", c);

    let t = 0, cur = -1, last = performance.now(), done = false, raf = 0;
    let live = {};

    const idxAt = (x) => CH.findIndex((c) => x >= c.s && x < c.e);
    const finish = () => {
      if (done) return;
      done = true;
      onDoneRef.current?.();
    };
    function build(i) {
      sceneEl.innerHTML = sceneHTML(i);
      live = {
        name: sceneEl.querySelector("[data-live=name]"),
        kind: sceneEl.querySelector("[data-live=kind]"),
        dots: [...sceneEl.querySelectorAll(".dot")],
        spd: sceneEl.querySelector("[data-live=spd]"),
        gears: [...sceneEl.querySelectorAll(".gear")],
      };
    }
    function drive(i, local) {
      if (i === 1 && live.name) {
        const j = Math.min(8, Math.floor(Math.max(0, local - 300) / 460));
        const m = MARQUES[j];
        if (live.name.textContent !== m.n) {
          live.name.textContent = m.n;
          live.kind.textContent = m.k;
          setAccent(m.c);
        }
        live.dots.forEach((d, k) => d.classList.toggle("lit", k <= j));
      }
      if (i === 2 && live.spd) {
        const p = Math.max(0, Math.min(1, (local - 600) / 3200));
        const v = Math.round(100 * (1 - Math.pow(1 - p, 1.8)));
        live.spd.textContent = v;
        const gear = v < 1 ? 0 : v < 32 ? 1 : v < 58 ? 2 : v < 80 ? 3 : v < 96 ? 4 : 5;
        live.gears.forEach((g, k) => g.classList.toggle("on", k + 1 === gear));
      }
    }
    function frame(now) {
      const dt = Math.min(now - last, 100);
      last = now;
      t += dt;
      if (t >= TOTAL) return finish();
      const i = idxAt(t);
      if (i !== cur) {
        cur = i;
        if (i === 0 || i === 4) setAccent(MARQUES[0].c);
        build(i);
      }
      drive(i, t - CH[i].s);
      raf = requestAnimationFrame(frame);
    }

    const skipBtn = root.querySelector("[data-act=skip]");
    skipBtn.addEventListener("click", finish);

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      skipBtn.removeEventListener("click", finish);
    };
  }, []);

  return (
    <section ref={rootRef} className="vwi-intro" aria-label="Intro film">
      <div className="topbar">
        <div className="mark">ŠKODA VOLKSWAGEN GROUP <span>INDIA</span></div>
        <button className="btn-ghost" data-act="skip">
          Skip intro
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 5l8 7-8 7M17 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="scene" />
    </section>
  );
};
