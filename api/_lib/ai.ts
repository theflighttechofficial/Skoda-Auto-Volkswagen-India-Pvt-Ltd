import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Built-in intelligent fallback for offline or unconfigured API key environments
function generateSmartSkodaResponse(question: string, modelContext?: string, engineContext?: string, brandContext?: string): string {
  const q = question.toLowerCase();
  const selectedModel = (modelContext && modelContext !== 'All') ? modelContext.toLowerCase() : '';
  const isAudiBrand = brandContext === 'audi';
  const isPorscheBrand = brandContext === 'porsche';
  const isLamborghiniBrand = brandContext === 'lamborghini';
  const isBentleyBrand = brandContext === 'bentley';
  const isSeatBrand = brandContext === 'seat';

  // SEAT specific queries, when a SEAT model is selected, or when the active site brand is SEAT.
  // IMPORTANT: SEAT is NOT officially sold in India — every response must make that explicit rather
  // than presenting any figure as a purchasable Indian price.
  if (isSeatBrand || q.includes('seat') || q.includes('ibiza') || q.includes('arona') || q.includes('ateca') || q.includes('tarraco') || q.includes('cupra') || selectedModel.includes('ibiza') || selectedModel.includes('arona') || selectedModel.includes('leon') || selectedModel.includes('ateca') || selectedModel.includes('tarraco')) {
    if (q.includes('cupra') || q.includes('leon') || selectedModel.includes('leon')) {
      return `### SEAT Leon & Leon Cupra (Not Sold in India)
- **SEAT Leon:** MQB-Evo platform hatchback, 1.5L TSI EVO producing **150 PS** & **250 Nm**, shared architecture with the Volkswagen Golf Mk8.
- **SEAT Leon Cupra:** The final SEAT-badged hot hatch, 2.0L TSI producing **300 PS** & **400 Nm**, shared EA888 architecture with the Golf R and Audi S3, before Cupra span off as its own standalone brand in 2021.
- **Availability:** SEAT has no official CBU import programme, dealer network or warranty support in India. All figures shown are European/global reference specs for enthusiast comparison only — not a purchasable Indian configuration.`;
    }

    if (q.includes('why') && (q.includes('india') || q.includes('not sold'))) {
      return `### Why Isn't SEAT Sold in India?
SEAT has never established an official distribution, CBU import programme, CKD assembly line or dealer network in India. The Volkswagen Group has historically concentrated its Indian mainstream-volume strategy under the Škoda and Volkswagen brands rather than add a third overlapping nameplate, leaving SEAT absent from the Indian market entirely — a deliberate Group brand-portfolio decision, not a temporary gap.`;
    }

    return `### SEAT Portfolio Overview (Not Sold in India)
SEAT is the Spanish, value-sport-positioned Volkswagen Group brand — but unlike every other brand in this showcase, it has **no official presence in India**:
- **SEAT Ibiza & Arona:** MQB-A0 platform supermini and crossover, 1.0L TSI (110 PS / 200 Nm).
- **SEAT Leon:** MQB-Evo compact hatch, 1.5L TSI EVO (150 PS / 250 Nm), plus the 300 PS Leon Cupra performance flagship.
- **SEAT Ateca & Tarraco:** Midsize and seven-seat SUVs sharing platforms with the Škoda Karoq/Kodiaq and Volkswagen Tiguan.
- **India Status:** No CBU import, no CKD assembly, no dealer network, no factory warranty or roadside assistance. Every price and spec shown is a global reference figure for enthusiast comparison, never a purchasable Indian price.`;
  }

  // Bentley specific queries, when a Bentley model is selected, or when the active site brand is Bentley
  if (isBentleyBrand || q.includes('bentley') || q.includes('continental gt') || q.includes('bentayga') || q.includes('flying spur') || q.includes('dynamic ride') || selectedModel.includes('continental') || selectedModel.includes('bentayga') || selectedModel.includes('flying-spur') || selectedModel.includes('flying spur')) {
    if (q.includes('speed') || selectedModel.includes('speed')) {
      return `### Bentley Speed-Tune Performance Trims
- **Continental GT Speed:** 6.0L Twin-Turbo W12 producing **659 PS** & **900 Nm**, active all-wheel steering and torque vectoring by braking. 0-100 km/h in **3.7s**, top speed **335 km/h**.
- **Bentayga Speed:** 4.0L Twin-Turbo V8 (Speed-tune) producing **550 PS** & **770 Nm**, sharper throttle mapping and active all-wheel steering. 0-100 km/h in **4.4s**, top speed **306 km/h**.`;
    }

    if (q.includes('continental') || selectedModel.includes('continental')) {
      return `### Bentley Continental GT (The Definitive Grand Tourer)
- **Powertrain:** 6.0L Twin-Turbo W12 producing **659 PS** & **900 Nm** (Continental GT V8 offers a 4.0L Twin-Turbo V8 with 550 PS).
- **Transmission:** 8-Speed Dual-Clutch with all-wheel drive.
- **Acceleration:** 0 to 100 km/h in **3.7s** | Top speed **335 km/h**.
- **Heritage:** One of the last twin-turbo W12 engines still in series production, hand-trimmed at Crewe.
- **Price Range:** ₹4.50 Crore to ₹5.20 Crore (Ex-showroom).`;
    }

    if (q.includes('bentayga') || selectedModel.includes('bentayga')) {
      return `### Bentley Bentayga (The Ultimate Luxury SUV)
- **Powertrain:** 4.0L Twin-Turbo V8 producing **550 PS** & **770 Nm**.
- **Transmission:** 8-Speed Automatic with permanent all-wheel drive.
- **Acceleration:** 0 to 100 km/h in **4.5s** | Top speed **290 km/h**.
- **Heritage:** Bentley's best-selling model worldwide, sharing platform architecture with the Porsche Cayenne and Audi Q7/Q8.
- **Price Range:** ₹4.20 Crore Onwards (EWB long-wheelbase variant up to ₹5.80 Crore).`;
    }

    if (q.includes('flying spur') || q.includes('flying-spur') || selectedModel.includes('flying')) {
      return `### Bentley Flying Spur (The Grand Luxury Saloon)
- **Powertrain:** 6.0L Twin-Turbo W12 producing **659 PS** & **900 Nm** (V8 variant available with 550 PS).
- **Transmission:** 8-Speed Dual-Clutch with active all-wheel steering.
- **Acceleration:** 0 to 100 km/h in **3.8s (W12)** | Top speed **333 km/h**.
- **Heritage:** Four-door saloon sharing the Continental GT's engineering, hand-crafted at Crewe.
- **Price Range:** ₹4.50 Crore Onwards.`;
    }

    if (q.includes('dynamic ride')) {
      return `### What is Bentley Dynamic Ride?
Bentley Dynamic Ride is a 48-volt active anti-roll control system. Electric actuators on each anti-roll bar react within milliseconds to counteract body roll, keeping the cabin flat through corners while retaining a supple ride over broken roads — standard across the current Continental GT, Bentayga and Flying Spur lineup.`;
    }

    return `### Bentley India Portfolio Overview
Bentley represents hand-crafted grand touring backed by Volkswagen Group engineering discipline:
- **Bentley Continental GT:** Twin-turbo W12/V8 grand tourer, from ₹4.50 Crore.
- **Bentley Bentayga:** Luxury SUV (including extended-wheelbase EWB), from ₹4.20 Crore.
- **Bentley Flying Spur:** Grand luxury saloon, from ₹4.50 Crore.
- **Speed Trims:** Continental GT Speed (659 PS) and Bentayga Speed (550 PS, Speed-tuned).
- **Bentley Dynamic Ride** active anti-roll control and active all-wheel steering feature across the range.`;
  }

  // Lamborghini specific queries, when a Lamborghini model is selected, or when the active site brand is Lamborghini
  if (isLamborghiniBrand || q.includes('lamborghini') || q.includes('huracan') || q.includes('huracán') || q.includes('urus') || q.includes('revuelto') || q.includes('ldvi') || selectedModel.includes('huracan') || selectedModel.includes('urus') || selectedModel.includes('revuelto')) {
    if (q.includes('sto') || q.includes('performante') || selectedModel.includes('sto') || selectedModel.includes('performante')) {
      return `### Lamborghini Track-Focused Specials
- **Huracán STO:** 5.2L Naturally-Aspirated V10 producing **640 PS** & **565 Nm** revving to an 8,500 RPM redline, homologated from the Super Trofeo racer. Rear-wheel drive only. 0-100 km/h in **3.0s**, top speed **310 km/h**.
- **Urus Performante:** 4.0L Twin-Turbo V8 producing **657 PS** & **850 Nm**, 47 kg lighter than the Urus S. 0-100 km/h in **3.3s**, top speed **306 km/h**, holds the fastest SUV timed run at Pikes Peak.`;
    }

    if (q.includes('huracan') || q.includes('huracán') || selectedModel.includes('huracan')) {
      return `### Lamborghini Huracán (The Screaming V10 Icon)
- **Powertrain:** 5.2L Naturally-Aspirated V10 producing **640 PS** & **565 Nm**.
- **Transmission:** 7-Speed LDF Dual-Clutch.
- **Acceleration:** 0 to 100 km/h in **2.9s** | Top speed **325 km/h**.
- **Heritage:** One of the last naturally-aspirated V10 supercars still in production.
- **Price Range:** ₹3.80 Crore to ₹4.20 Crore (Ex-showroom).`;
    }

    if (q.includes('urus') || selectedModel.includes('urus')) {
      return `### Lamborghini Urus (The Super Sport Utility Vehicle)
- **Powertrain:** 4.0L Twin-Turbo V8 producing **657 PS** & **850 Nm**.
- **Transmission:** 8-Speed Automatic with permanent all-wheel drive.
- **Acceleration:** 0 to 100 km/h in **3.6s** | Top speed **305 km/h**.
- **Heritage:** Lamborghini's best-selling model worldwide, sharing platform architecture with the Porsche Cayenne and Audi Q8.
- **Price Range:** ₹4.20 Crore Onwards.`;
    }

    if (q.includes('revuelto') || selectedModel.includes('revuelto')) {
      return `### Lamborghini Revuelto (The Hybrid V12 Flagship)
- **Powertrain:** 6.5L Naturally-Aspirated V12 + Tri-Motor Hybrid producing **1,015 PS** combined.
- **Transmission:** 8-Speed Dual-Clutch (Longitudinal) with torque-vectoring electric front axle.
- **Acceleration:** 0 to 100 km/h in **2.5s** | Top speed **350 km/h**.
- **Heritage:** Lamborghini's first series-production plug-in hybrid, replacing the Aventador as flagship.
- **Price Range:** ₹8.90 Crore Onwards.`;
    }

    if (q.includes('ldvi')) {
      return `### What is LDVI?
LDVI (Lamborghini Dinamica Veicolo Integrata) is Lamborghini's predictive central control unit. It reads driver inputs — steering, throttle, brake — alongside road conditions to pre-configure suspension, torque vectoring and all-wheel-drive systems before the driver even reacts, standard across the current Huracán, Urus and Revuelto lineup.`;
    }

    return `### Lamborghini India Portfolio Overview
Lamborghini represents raging-bull theater backed by Volkswagen Group engineering discipline:
- **Lamborghini Huracán:** Screaming naturally-aspirated V10 sports car, from ₹3.80 Crore.
- **Lamborghini Urus:** Super Sport Utility Vehicle, from ₹4.20 Crore.
- **Lamborghini Revuelto:** Hybrid V12 flagship, from ₹8.90 Crore.
- **Track-Focused Specials:** Huracán STO (640 PS rear-wheel-drive-only) and Urus Performante (657 PS, Pikes Peak record).
- **LDVI predictive chassis control** and torque-vectoring all-wheel drive feature across the range.`;
  }

  // Porsche specific queries, when a Porsche model is selected, or when the active site brand is Porsche
  if (isPorscheBrand || q.includes('porsche') || q.includes('pdk') || q.includes('911') || q.includes('cayman') || q.includes('macan') || q.includes('cayenne') || q.includes('panamera') || q.includes('gt3') || q.includes('turbo s') || selectedModel.includes('911') || selectedModel.includes('cayman') || selectedModel.includes('macan') || selectedModel.includes('cayenne') || selectedModel.includes('panamera')) {
    if (q.includes('gt3') || q.includes('turbo s') || q.includes('turbo gt') || selectedModel.includes('gt3') || selectedModel.includes('turbo-s') || selectedModel.includes('turbo-gt')) {
      return `### Porsche Motorsport-Derived Performance Flagships
- **911 GT3:** 4.0L Naturally-Aspirated Flat-6 producing **510 PS** & **470 Nm** revving to a 9,000 RPM redline, derived from the 911 RSR race engine. Double-wishbone front suspension and rear-axle steering. 0-100 km/h in **3.4s**, top speed **318 km/h**.
- **911 Turbo S:** 3.7L Twin-Turbo Flat-6 producing **650 PS** & **800 Nm** with Porsche Traction Management all-wheel drive and launch control. 0-100 km/h in a blistering **2.7s**, top speed **330 km/h**.
- **Cayenne Turbo GT:** 4.0L Twin-Turbo V8 producing **640 PS** & **850 Nm**, once held the production-SUV Nürburgring Nordschleife lap record. 0-100 km/h in **3.3s**, top speed **300 km/h**.`;
    }

    if (q.includes('911') || selectedModel.includes('911-carrera')) {
      return `### Porsche 911 Carrera (The Rear-Engine Icon, Reimagined Again)
- **Powertrain:** 3.0L Twin-Turbo Flat-6 producing **385 PS** & **450 Nm** (Carrera S tune: **450 PS** & **530 Nm**).
- **Transmission:** 8-Speed PDK Dual-Clutch, with a 7-speed manual still on offer on the base Carrera.
- **Acceleration:** 0 to 100 km/h in **4.2s** (Carrera) or **3.5s** (Carrera S) | Top speed up to **308 km/h**.
- **Heritage:** Rear-mounted, twin-turbocharged flat-6 layout unchanged in concept since 1963 — the longest continuously produced sports car nameplate in the world.
- **Price Range:** ₹1.99 Crore to ₹2.35 Crore (Ex-showroom).`;
    }

    if (q.includes('cayman') || q.includes('boxster') || selectedModel.includes('718')) {
      return `### Porsche 718 Cayman (The Purist's Mid-Engine Sports Coupe)
- **Powertrain:** 2.0L Turbo-Petrol Flat-4 producing **300 PS** & **380 Nm**.
- **Transmission:** 7-Speed PDK Dual-Clutch or 6-Speed Manual for purists.
- **Chassis:** Mid-engine, rear-wheel-drive layout for near-perfect 45:55 weight balance.
- **Acceleration:** 0 to 100 km/h in **4.9s** | Top speed **275 km/h**.
- **Price Range:** ₹1.15 Crore Onwards.`;
    }

    if (q.includes('macan') || selectedModel === 'macan') {
      return `### Porsche Macan (The Benchmark Compact Luxury SUV)
- **Powertrain:** 2.0L Turbo-Petrol producing **265 PS** & **400 Nm**, with a 2.9L Twin-Turbo V6 (380 PS) Macan S available.
- **Transmission:** 7-Speed PDK Dual-Clutch with Porsche Active Suspension Management (PASM) standard.
- **Acceleration:** 0 to 100 km/h in **6.2s** | Top speed **232 km/h**.
- **Price Range:** ₹87.40 Lakh Onwards.`;
    }

    if (q.includes('cayenne') || selectedModel === 'cayenne') {
      return `### Porsche Cayenne (The Full-Size Luxury SUV with Sports Car DNA)
- **Powertrain:** 3.0L Turbo-Petrol V6 producing **353 PS** & **500 Nm**.
- **Transmission:** 8-Speed Tiptronic S Automatic with standard Porsche Traction Management all-wheel drive.
- **Acceleration:** 0 to 100 km/h in **5.9s** | Top speed **245 km/h**.
- **Price Range:** ₹1.31 Crore Onwards.`;
    }

    if (q.includes('panamera') || selectedModel === 'panamera') {
      return `### Porsche Panamera (The Grand-Touring Liftback with Sports Sedan Reflexes)
- **Powertrain:** 2.9L Twin-Turbo V6 producing **330 PS** & **450 Nm**.
- **Transmission:** 8-Speed PDK Dual-Clutch with three-chamber adaptive air suspension standard.
- **Acceleration:** 0 to 100 km/h in **5.6s** | Top speed **259 km/h**.
- **Price Range:** ₹1.68 Crore Onwards.`;
    }

    if (q.includes('pdk')) {
      return `### What is PDK?
PDK (Porsche-Doppelkupplungsgetriebe, or Porsche Dual-Clutch Transmission) is Porsche's signature dual-clutch automatic gearbox. Two separate clutches pre-select the next gear before it's needed, allowing shifts in a few hundredths of a second with no interruption in power delivery — faster and smoother than a torque-converter automatic or manual, while still supporting manual paddle-shift control. It is standard or optional across the entire current Porsche lineup, from the 911 to the Cayenne.`;
    }

    return `### Porsche India Portfolio Overview
Porsche represents the union of everyday usability and genuine motorsport engineering:
- **Porsche 911 Carrera:** The rear-engine sports car icon, from ₹1.99 Crore.
- **Porsche 718 Cayman:** Mid-engine purist's sports coupe, from ₹1.15 Crore.
- **Porsche Macan:** Benchmark compact luxury SUV, from ₹87.40 Lakh.
- **Porsche Cayenne:** Full-size luxury SUV with sports car DNA, from ₹1.31 Crore.
- **Porsche Panamera:** Grand-touring liftback, from ₹1.68 Crore.
- **Performance Flagships:** 911 GT3 (510 PS naturally-aspirated), 911 Turbo S (650 PS all-wheel drive), and Cayenne Turbo GT (640 PS, once a Nürburgring SUV lap record holder).
- **PDK Dual-Clutch Transmission** and Porsche Active Suspension Management (PASM) feature across the range.`;
  }

  // Volkswagen specific queries or when VW model is selected
  if (brandContext === 'volkswagen' || q.includes('golf') || q.includes('gti') || q.includes('gli') || q.includes('virtus') || q.includes('taigun') || q.includes('tiguan') || q.includes('tayron') || q.includes('polo') || q.includes('jetta') || selectedModel.includes('virtus') || selectedModel.includes('taigun') || selectedModel.includes('tiguan') || selectedModel.includes('tayron') || selectedModel.includes('golf') || selectedModel.includes('polo') || selectedModel.includes('jetta')) {
    if ((q.includes('golf') || q.includes('gti')) && !q.includes('polo') || selectedModel === 'golf-gti') {
      return `### Volkswagen Golf GTI (The Hot Hatch Benchmark)
- **Powertrain:** 2.0L TSI EA888 EVO4 Turbo-Petrol producing **265 PS** and **370 Nm torque**.
- **Differential & Traction:** **VAQ Mechanical Multi-Plate Limited-Slip Differential** that transfers up to 100% torque to the outer wheel, eliminating understeer in sharp apexes.
- **Sprint:** 0 to 100 km/h in **5.9 seconds** | Top speed: **250 km/h** (Electronically limited).
- **Cabin & Heritage:** Classic "Clark" Tartan sports bucket seats, 10.25-inch Digital Cockpit Pro with GTI central rev counter, DCC 15-stage adaptive dampers, and dual chrome exhaust pipes with overrun crackles.
- **Price Range:** Expected ₹45.00 – ₹49.00 Lakh (CBU import for enthusiasts).`;
    }

    if (q.includes('polo') || selectedModel === 'polo-gti') {
      return `### Volkswagen Polo GTI (The Pocket-Rocket Hot Hatch)
- **Powertrain:** 2.0L TSI EA888 Turbo-Petrol (Polo GTI Tune) producing **207 PS** and **320 Nm torque**.
- **Chassis:** The lightest body in the entire GTI family, with Sport Select adaptive dampers and an XDS electronic front differential lock.
- **Sprint:** 0 to 100 km/h in **6.5 seconds** | Top speed: **237 km/h** (Electronically limited).
- **Heritage:** Spiritual successor to India's cult-favourite Polo GT TSI, which built the country's hot-hatch tuning scene from 2013 onward.
- **Price Range:** Expected ₹33.00 – ₹35.50 Lakh (CBU import for enthusiasts).`;
    }

    if (q.includes('jetta') || q.includes('gli') || selectedModel === 'jetta-gli') {
      return `### Volkswagen Jetta GLI (The Sedan-Shaped GTI)
- **Powertrain:** 2.0L TSI EA888 Turbo-Petrol (Jetta GLI Tune) producing **228 PS** and **350 Nm torque** — the highest state of tune of any Jetta engine.
- **Chassis:** GLI-specific firmer springs, dampers, and anti-roll bars, plus a front differential lock tuned for the longer Jetta wheelbase.
- **Sprint:** 0 to 100 km/h in **6.3 seconds** | Top speed: **240 km/h** (Electronically limited).
- **Practicality:** 510-litre boot, the largest of any car in the GTI performance family — room for a full track-day toolkit and spare wheels.
- **Heritage:** The GLI badge ("Gran Luxe Injection") has run on the Jetta since 1983, making it Volkswagen's longest-running sports sedan nameplate.
- **Price Range:** Expected ₹39.50 – ₹42.50 Lakh (CBU import for enthusiasts).`;
    }

    if (q.includes('virtus') || selectedModel === 'virtus') {
      return `### Volkswagen Virtus (The Performance Sedan King)
- **Engines:** 1.0L TSI (115 PS / 178 Nm) & 1.5L TSI EVO (150 PS / 250 Nm with Active Cylinder Technology & 7-Speed DSG).
- **Safety:** 5-Star Global NCAP (29.71/34 Adult, 42/49 Child). 40+ standard safety features including 6 airbags and ESC.
- **Practicality:** Best-in-segment 521L boot, 179 mm ground clearance, and continuous laser-welded roof for maximum rigidity.
- **GT Plus Sport:** Features blacked-out alloy wheels, red front brake calipers, aero boot spoiler, and dual-tone roof.
- **Price:** ₹11.56 Lakh to ₹19.41 Lakh (Ex-showroom).`;
    }

    if (q.includes('taigun') || selectedModel === 'taigun') {
      return `### Volkswagen Taigun (Dynamic SUVW)
- **Engines:** 1.0L TSI (115 PS / 178 Nm) & 1.5L TSI EVO (150 PS / 250 Nm DSG with ACT).
- **Safety:** First midsize SUV in India to score full 5 Stars in Global NCAP updated crash tests (Adult & Child).
- **Ride & Dynamics:** Euro-tuned suspension delivering planted high-speed stability and razor-sharp highway lane changes.
- **Ground Clearance:** 188 mm unladen, perfect for challenging Indian terrains.
- **Price:** ₹11.70 Lakh to ₹20.00 Lakh (Ex-showroom).`;
    }

    if (q.includes('tiguan') || selectedModel === 'tiguan') {
      return `### Volkswagen Tiguan 4MOTION (Luxury SUVW)
- **Powertrain:** 2.0L TSI Turbo-Petrol producing 190 PS & 320 Nm with 7-Speed DSG.
- **Drivetrain:** Intelligent 4MOTION All-Wheel Drive with dedicated on-road, off-road, and snow modes.
- **Features:** IQ.LIGHT Matrix LED headlights, panoramic sunroof, Vienna leather upholstery, 3-zone climate control, and 8 airbags.
- **Price:** ₹35.17 Lakh (Ex-showroom).`;
    }

    if (q.includes('tayron') || selectedModel === 'tayron') {
      return `### Volkswagen Tayron (Upcoming 7-Seater Luxury SUV)
- **Platform:** Advanced MQB-Evo architecture (shared with European Tiguan Allspace successor).
- **Powertrain:** 2.0L TSI (204 PS / 320 Nm) with 7-Speed DSG and 4MOTION AWD.
- **Features:** True 3-row 7-seater practicality, dual panoramic glass roofs, Level-2 ADAS suite, and 15-inch floating infotainment.
- **Expected Price:** ₹42.00 – ₹48.00 Lakh (Local assembly via CKD).`;
    }

    return `### Volkswagen India Portfolio Overview
Volkswagen represents German engineering excellence, robust laser-welded build quality, and 5-Star Global NCAP safety:
- **Volkswagen Virtus:** Midsize performance sedan with 521L boot & 150 PS GT Line, starting ₹11.56 Lakh.
- **Volkswagen Taigun:** Dynamic European SUV with 188 mm ground clearance & 5-Star safety, starting ₹11.70 Lakh.
- **Volkswagen Tiguan:** 190 PS 2.0L TSI with 4MOTION All-Wheel Drive & IQ.LIGHT, priced at ₹35.17 Lakh.
- **Volkswagen Golf GTI:** 265 PS EA888 EVO4 track legend with VAQ mechanical diff.
- **Volkswagen Polo GTI:** 207 PS pocket-rocket hot hatch, the lightest car in the GTI family.
- **Volkswagen Jetta GLI:** 228 PS sports sedan with a 510L boot — a GTI in a three-box suit.
- **Warranty:** 4EVER Care includes 4-Year / 100,000 km warranty, 4-Year Roadside Assistance, and 3 free services.`;
  }

  // Audi specific queries, when an Audi model is selected, or when the active site brand is Audi
  if (isAudiBrand || q.includes('audi') || q.includes('quattro') || q.includes('tfsi') || q.includes(' a3') || q.includes(' a4') || q.includes(' a6') || q.includes(' a8') || q.includes('q3') || q.includes('q5') || q.includes('q7') || q.includes('q8') || q.includes('rs5') || q.includes('rs6') || q.includes('rs q8') || selectedModel.includes('a3') || selectedModel.includes('a4') || selectedModel.includes('a6') || selectedModel.includes('a8') || selectedModel.includes('q3') || selectedModel.includes('q5') || selectedModel.includes('q7') || selectedModel.includes('q8') || selectedModel.includes('rs5') || selectedModel.includes('rs6')) {
    if (q.includes('rs5') || q.includes('rs6') || q.includes('rs q8') || q.includes('rs') || selectedModel.includes('rs')) {
      return `### Audi Sport RS Performance Division (Hand-Built Motorsport DNA)
Hand-assembled by Audi Sport in Neckarsulm, Germany, the RS lineup brings motorsport-derived engineering to India:

#### 1. Audi RS5 (The Hand-Built V6 Track Weapon)
- **Powertrain:** 2.9L TFSI Twin-Turbo V6 (Audi Sport) producing **450 PS** & **600 Nm torque**.
- **Transmission & Differential:** 8-Speed Tiptronic with **quattro Sport Differential** actively vectoring torque between rear wheels.
- **Acceleration:** 0 to 100 km/h in **3.9 seconds** | Top speed: **250–280 km/h** (RS Dynamic Package).
- **Chassis:** RS Sport Suspension Plus with Dynamic Ride Control (DRC), 375 mm front discs with red RS calipers.

#### 2. Audi RS6 Avant (The 600 PS Load-Carrying Missile)
- **Powertrain:** 4.0L TFSI Twin-Turbo V8 (Audi Sport) delivering **600 PS** & **800 Nm torque**.
- **Drivetrain:** quattro permanent AWD with a sport rear differential actively vectoring torque.
- **Acceleration:** 0 to 100 km/h in **3.6 seconds** | Top speed: **250 km/h** (280 km/h with RS Dynamic Package).
- **Practicality:** A genuine 565L-boot performance estate, expandable to 1,680L with seats folded.

#### 3. Audi RS Q8 (The Fastest, Most Powerful SUV Audi Has Ever Built)
- **Powertrain:** 4.0L TFSI Twin-Turbo V8 (Audi Sport) delivering **600 PS** & **800 Nm torque**, shared with the Lamborghini Urus.
- **Drivetrain:** quattro permanent AWD with electromechanical active roll stabilization.
- **Acceleration:** 0 to 100 km/h in **3.8 seconds** | Top speed: **250 km/h** (305 km/h with RS Dynamic Plus).
- **Heritage:** Set the production SUV Nürburgring Nordschleife lap record (7:42.253) at its 2020 debut.`;
    }

    if (q.includes('a3') || selectedModel === 'a3') {
      return `### Audi A3 (Hall of Fame Compact Luxury Sedan, 2014-2020)
- **Price:** ₹31.00 Lakh to ₹37.30 Lakh (Final India Price List).
- **Engine:** 1.4 TFSI Turbo-Petrol (150 PS / 250 Nm), 7-Speed S tronic, Front-Wheel Drive.
- **Highlights:** Audi India's most accessible model, 425L boot, MQB platform. Discontinued in 2020 as Audi consolidated its lineup around SUVs.`;
    }

    if (q.includes('a4') || selectedModel === 'a4') {
      return `### Audi A4 (The Progressive Executive Sedan)
- **Price:** ₹46.05 Lakh to ₹49.99 Lakh (Ex-showroom).
- **Engine:** 2.0 TFSI Turbo-Petrol (190 PS / 320 Nm), 7-Speed S tronic, Front-Wheel Drive.
- **Highlights:** 5-Star Euro NCAP, 12.3-inch Audi Virtual Cockpit, 480L boot, MLB Evo platform.
- **Competitors:** BMW 3 Series, Mercedes-Benz C-Class.`;
    }

    if (q.includes('a6') || selectedModel === 'a6') {
      return `### Audi A6 (The Executive Autobahn Cruiser)
- **Price:** ₹63.15 Lakh to ₹72.40 Lakh.
- **Engine:** 2.0 TFSI quattro Turbo-Petrol (249 PS / 370 Nm), 7-Speed S tronic quattro.
- **Highlights:** Standard quattro all-wheel drive, adaptive air suspension option, twin-display MMI touch response, 530L boot.`;
    }

    if (q.includes('q3') || selectedModel === 'q3') {
      return `### Audi Q3 (The Compact Luxury SUV)
- **Price:** ₹46.38 Lakh to ₹53.68 Lakh.
- **Engine:** 2.0 TFSI Turbo-Petrol (190 PS / 320 Nm).
- **Highlights:** Also offered as coupe-roofline Q3 Sportback, 10.25-inch Virtual Cockpit, up to 675L boot.`;
    }

    if (q.includes('q5') || selectedModel === 'q5') {
      return `### Audi Q5 (The Benchmark Midsize Luxury SUV)
- **Price:** ₹65.10 Lakh to ₹71.20 Lakh.
- **Engine:** 2.0 TFSI quattro Turbo-Petrol (249 PS / 370 Nm), standard quattro ultra all-wheel drive.
- **Highlights:** Adaptive air suspension option, 520L boot expandable to 1,520L.`;
    }

    if (q.includes('q7') || selectedModel === 'q7') {
      return `### Audi Q7 (The 7-Seater Flagship SUV)
- **Price:** ₹85.30 Lakh to ₹90.30 Lakh.
- **Engine:** 3.0 TFSI V6 quattro Turbo-Petrol (340 PS / 500 Nm), 8-Speed Tiptronic.
- **Highlights:** Genuine adult-usable 3-row 7-seater, adaptive air suspension with off-road mode.`;
    }

    if (q.includes('q8') || selectedModel === 'q8') {
      return `### Audi Q8 (The Coupe-SUV Halo Flagship)
- **Price:** ₹1.17 Crore to ₹1.30 Crore.
- **Engine:** 3.0 TFSI V6 quattro Turbo-Petrol (340 PS / 500 Nm).
- **Highlights:** Coupe-SUV roofline, OLED full-width rear light strip, shares platform with Porsche Cayenne & Lamborghini Urus.`;
    }

    if (q.includes('a8') || selectedModel === 'a8') {
      return `### Audi A8 L (The Presidential Flagship Limousine)
- **Price:** ₹1.29 Crore to ₹1.60 Crore.
- **Engine:** 3.0 TFSI V6 quattro Turbo-Petrol (340 PS / 500 Nm), 8-Speed Tiptronic.
- **Highlights:** Long-wheelbase-only "L" bodystyle, predictive adaptive air suspension, rear seat relaxation package, 505L boot. Rivals the Mercedes S-Class and BMW 7 Series.`;
    }

    return `### Audi India Portfolio Overview
Audi represents progressive luxury, quattro all-wheel-drive traction, and 5-Star Euro NCAP safety:
- **Audi A3:** Hall of Fame compact luxury sedan (2014-2020), from ₹31.00 Lakh.
- **Audi A4:** Progressive executive sedan with 2.0 TFSI (190 PS), starting ₹46.05 Lakh.
- **Audi A6:** Executive autobahn cruiser with standard quattro, starting ₹63.15 Lakh.
- **Audi A8 L:** Presidential flagship limousine with quattro, starting ₹1.29 Crore.
- **Audi Q3:** Compact luxury SUV, starting ₹46.38 Lakh.
- **Audi Q5:** Benchmark midsize luxury SUV with quattro, starting ₹65.10 Lakh.
- **Audi Q7:** 7-seater flagship SUV, starting ₹85.30 Lakh.
- **Audi Q8:** Coupe-SUV halo flagship, starting ₹1.17 Crore.
- **Audi Sport RS:** RS5 (450 PS), RS6 Avant (600 PS), and RS Q8 (600 PS) hand-built performance flagships.
- **Warranty:** 2-year unlimited-km standard warranty, extendable to 5 years, with Audi Advantage service packages.`;
  }

  if (q.includes('combi') || selectedModel.includes('combi-vrs')) {
    return `### Škoda Octavia Combi vRS (The Estate Enthusiast's Secret Weapon)
- **Powertrain:** 2.0L TSI EA888 EVO4 Turbo-Petrol producing **265 PS** & **370 Nm torque** — identical output to the Octavia vRS liftback.
- **Transmission & Differential:** 7-Speed DSG with **VAQ electro-mechanical limited-slip front differential**.
- **Acceleration:** 0 to 100 km/h in **6.5 seconds** | Electronically limited top speed: **250 km/h**.
- **Practicality:** A cavernous 640-litre boot (expandable to 1,700L) with self-levelling rear suspension to keep the chassis balanced when fully loaded — the largest boot of any vRS Škoda has ever built.
- **Claim to Fame:** The plug-in hybrid Octavia Combi vRS iV holds a Guinness World Record as the fastest production estate car.`;
  }

  if (q.includes('vrs') || q.includes('rs performance') || q.includes('rs') || selectedModel.includes('vrs')) {
    return `### Škoda vRS Performance Division (Motorsport DNA)
Born on the rally stages and honed on the Nürburgring Nordschleife, Škoda's vRS lineup brings race-bred engineering to India:

#### 1. Škoda Octavia vRS (The High-Speed Track Weapon)
- **Powertrain:** 2.0L TSI EA888 EVO4 Turbo-Petrol producing **265 PS** & **370 Nm torque**.
- **Transmission & Differential:** 7-Speed wet-clutch DSG with **VAQ electro-mechanical limited-slip front differential** (routes up to 100% torque to the outer wheel to eliminate understeer).
- **Acceleration:** 0 to 100 km/h in **6.4 seconds** | Electronically limited top speed: **250 km/h**.
- **Chassis & Hardware:** 15 mm lowered sports suspension, progressive rack steering, ventilated 340 mm front brake discs with red calipers, twin active sports exhaust tips.
- **Cockpit:** Carbon-weave dashboard, Alcantara & leather sports bucket seats with red vRS diamond quilting.

#### 2. Škoda Octavia Combi vRS (The Estate Enthusiast's Secret Weapon)
- **Powertrain:** Identical 265 PS / 370 Nm EA888 EVO4 and VAQ front differential as the liftback, wrapped in a 640-litre estate body.
- **Acceleration:** 0 to 100 km/h in **6.5 seconds** | Top speed: **250 km/h**.
- **Practicality:** 640L–1,700L boot with self-levelling rear suspension — the largest boot of any vRS Škoda has built.
- **Claim to Fame:** The hybrid Combi vRS iV holds a Guinness World Record for the fastest production estate car.

#### 3. Škoda Kodiaq vRS (The Nürburgring Record-Holding 7-Seat Super-SUV)
- **Powertrain:** 2.0L TSI High-Output Turbo-Petrol delivering **265 PS** & **400 Nm torque**.
- **Drivetrain:** 7-Speed DSG paired with **Intelligent 4x4 All-Wheel Drive** and integrated **Launch Control**.
- **Acceleration:** 0 to 100 km/h in **6.3 seconds** | Top speed: **232 km/h**.
- **Chassis & Hardware:** DCC Plus (Dynamic Chassis Control) with 15 selectable damper stages, active exhaust acoustic resonators, and 20" Sagitarius aerodynamic alloys.
- **Heritage:** Famous for securing the Nürburgring Nordschleife 7-seater lap record (9:29.84).`;
  }

  if (q.includes('kylaq') || selectedModel === 'kylaq') {
    if (q.includes('price') || q.includes('cost') || q.includes('variant')) {
      return `### Škoda Kylaq Pricing & Variants
- **Starting Price:** ₹7.89 Lakh (Ex-showroom) for the Classic trim.
- **Variant Range:** Classic (₹7.89L), Signature/Signature+ (₹9.59L – ₹11.40L), and Prestige (₹12.35L – ₹14.39L).
- **Engine:** Exclusively powered by the punchy 1.0L TSI turbo-petrol (115 PS / 178 Nm) available with 6-speed Manual or 6-speed Torque Converter Automatic.
- **Top Features:** Segment-best 446L boot, 189 mm ground clearance, ventilated front seats, electric sunroof, and 25+ standard active safety features with 6 airbags.`;
    }
    if (q.includes('compare') || q.includes('brezza') || q.includes('nexon') || q.includes('venue') || q.includes('sonet')) {
      return `### Škoda Kylaq vs Rivals (Brezza, Nexon, Sonet)
- **Ride & Handling:** The Kylaq is engineered on the robust MQB-A0-IN platform, offering superior European high-speed stability and communicative steering over competitors.
- **Luggage Space:** Best-in-segment 446 Litres boot space (surpassing Nexon's 382L and Brezza's 328L).
- **Cabin Tech:** Segment-first 6-way power adjustable ventilated front seats, 10.1-inch floating touchscreen with wireless Apple CarPlay/Android Auto.
- **Safety:** 6 standard airbags, ESC, multi-collision braking, and high-tensile crash structure across all trims.`;
    }
    return `### Škoda Kylaq (Compact SUV)
The Kylaq is Škoda's exciting sub-4 metre SUV tailored for Indian roads.
- **Engine:** 1.0L TSI Turbo-Petrol producing 115 PS and 178 Nm torque.
- **Transmissions:** 6-Speed Manual & 6-Speed Automatic.
- **Dimensions:** Length 3,995 mm | Ground Clearance 189 mm | Boot Space 446L.
- **Safety:** 25+ standard active & passive safety systems with 6 airbags across every trim.
- **Price:** ₹7.89 Lakh to ₹14.39 Lakh (Ex-showroom).`;
  }

  if (q.includes('slavia') || selectedModel === 'slavia') {
    if (q.includes('virtus') || q.includes('city') || q.includes('verna') || q.includes('compare')) {
      return `### Škoda Slavia vs Rivals (Virtus, City, Verna)
- **vs VW Virtus:** Both share the 5-Star Global NCAP MQB-A0-IN platform and engines. Slavia features elegant Czech crystalline styling, classic butterfly grille, and distinct Monte Carlo luxury touches.
- **vs Honda City:** Slavia provides significantly higher ground clearance (179 mm vs 165 mm), stronger turbo mid-range punch (178/250 Nm vs 145 Nm naturally aspirated), and 5-Star crash safety.
- **vs Hyundai Verna:** Slavia delivers a more composed European chassis with firmer highway poise, 521L boot, and available 1.5L TSI EVO with Active Cylinder Technology.`;
    }
    return `### Škoda Slavia Overview
- **Safety:** 5-Star Global NCAP for both Adult (29.71/34) and Child Occupant (42/49). 6 airbags and ESC are standard.
- **Engines:** 1.0L TSI (115 PS / 178 Nm) & 1.5L TSI EVO (150 PS / 250 Nm 7-Speed DSG).
- **Practicality:** 179 mm ground clearance (near SUV grade) and a segment-topping 521L boot (expandable to 1,050L).
- **Price:** ₹10.69 Lakh to ₹18.69 Lakh (Ex-showroom).`;
  }

  if (q.includes('kushaq') || selectedModel === 'kushaq') {
    return `### Škoda Kushaq Overview
- **Segment:** Midsize European SUV engineered on MQB-A0-IN.
- **Safety:** 5-Star Global NCAP rating (Adult & Child), 6 airbags and ESC standard on all variants.
- **Ground Clearance:** 188 mm unladen, easily handling rural speed humps and waterlogged roads.
- **Engines:** 1.0L TSI (115 PS / 178 Nm) and 1.5L TSI EVO (150 PS / 250 Nm DSG with ACT).
- **Price:** ₹10.89 Lakh to ₹18.79 Lakh. Available in Classic, Signature, Prestige, Onyx, and Monte Carlo trims.`;
  }

  if (q.includes('kodiaq') || selectedModel === 'kodiaq') {
    return `### Škoda Kodiaq 4x4 Luxury Flagship
- **Segment:** Premium 7-Seater 4x4 European Luxury SUV.
- **Engine:** 2.0L TSI Turbo-Petrol delivering 190 PS and 320 Nm torque mated to a 7-Speed DSG 4x4.
- **Chassis & Comfort:** Dynamic Chassis Control (DCC) with adaptive electronically controlled dampers, 3-Zone Climatronic, and 12-Speaker Canton 625W Sound System.
- **Safety:** 9 Airbags standard, 360-Degree Camera with Park Assist, and 5-Star Euro NCAP rating.
- **Price:** ₹39.99 Lakh (Style) to ₹41.99 Lakh (Laurin & Klement).`;
  }

  if (q.includes('octavia') || selectedModel === 'octavia') {
    return `### Škoda Octavia (Executive Liftback Legend)
- **Segment:** Executive D-Segment Luxury Sedan / Liftback.
- **Powertrains:** 2.0L TSI Turbo-Petrol (190 PS / 320 Nm) and legendary TDI Turbo-Diesel options (1.8L TDI 140 PS / 320 Nm and 2.0L TDI CR EVO 190 PS / 400 Nm).
- **Luggage Capacity:** Massive 600-litre notched liftback opening (expands to 1,555 litres), exceeding most compact and midsize SUVs.
- **Chassis & Tech:** Multi-link independent rear suspension, Shift-by-wire DSG transmission rocker, 10.25-inch Virtual Cockpit, and 12-Speaker Canton 600W Premium Surround Audio.
- **Safety:** 5-Star Euro NCAP rating with standard 8 airbags and Bi-LED Matrix headlights.
- **Price Range:** ₹27.35 Lakh to ₹32.85 Lakh (Available in Style, L&K, and Sportline trims).`;
  }

  if (q.includes('superb') || selectedModel === 'superb') {
    return `### Škoda Superb (Executive Flagship Sedan)
- **Heritage & Luxury:** Presidential rear legroom and executive acoustic serenity unmatched in its segment.
- **Powertrains:** High-output 2.0L TSI Turbo-Petrol (190 PS / 320 Nm) and high-torque 2.0L TDI CR EVO Turbo-Diesel (190 PS / 400 Nm) paired with quick-shifting 7-Speed DSG. Also offers 1.8L TDI.
- **Features:** Dynamic Chassis Control (DCC) with adaptive damping, driver seat massage function with memory presets, Park Assist automated steering, 11-Speaker Canton audio with 610W amplifier, 3-zone Climatronic AC, and huge 625L liftback boot.
- **Price:** ₹52.50 Lakh (Sportline) to ₹54.00 Lakh (Laurin & Klement CBU).`;
  }

  if (q.includes('engine') || q.includes('tdi') || q.includes('diesel') || q.includes('1.8') || q.includes('1.0') || q.includes('1.5') || q.includes('2.0') || q.includes('tsi')) {
    return `### Škoda TSI Petrol & TDI Diesel Engine Lineup in India
1. **1.0L TSI (3-Cylinder):** 115 PS & 178 Nm. Lively low-end torque from 1,750 RPM. Available with 6-Speed Manual or 6-Speed AT. Real-world mileage: 12-14 km/l city, 17-19 km/l highway. (Powers Kylaq, Slavia, Kushaq).
2. **1.5L TSI EVO (4-Cylinder):** 150 PS & 250 Nm. Features Active Cylinder Technology (ACT) that shuts off 2 cylinders during cruising. Paired with 7-Speed DSG. 0-100 km/h in ~8.8s. (Powers Slavia, Kushaq).
3. **2.0L TSI (4-Cylinder):** 190 PS & 320 Nm. Features 7-Speed DSG and intelligent 4x4 all-wheel drive with adaptive suspension. (Powers Kodiaq, Superb, Octavia).
4. **1.8L TDI CR (4-Cylinder Turbo-Diesel):** 140 PS & 320 Nm. Legendary European diesel benchmark with instant pull and 20+ km/l highway efficiency. (Powers Octavia, Superb).
5. **2.0L TDI CR EVO (4-Cylinder Turbo-Diesel):** 190 PS & a monstrous 400 Nm of torque. Enables effortless 3-digit cruising, 1,100+ km range per tank, and immediate passing power. (Powers Octavia, Superb).`;
  }

  if (q.includes('mileage') || q.includes('fuel') || q.includes('efficiency') || q.includes('km/l')) {
    return `### Škoda Real-World Fuel Mileage Guide
- **1.0L TSI Manual / AT:**
  - City: 11.5 – 13.5 km/l
  - Highway: 16.5 – 19.5 km/l (Claimed ARAI: ~19.4 – 20.3 km/l)
- **1.5L TSI EVO DSG (with ACT Cylinder Deactivation):**
  - City: 10.0 – 12.5 km/l
  - Highway: 17.0 – 20.5 km/l (ACT saves substantial fuel during steady 80-100 km/h cruising)
- **2.0L TSI 4x4 (Kodiaq / Superb):**
  - City: 8.0 – 9.5 km/l
  - Highway: 13.0 – 15.0 km/l`;
  }

  if (q.includes('service') || q.includes('maintenance') || q.includes('warranty') || q.includes('cost')) {
    return `### Škoda India Peace of Mind Ownership
- **Standard Warranty:** 4 Years / 100,000 km included on all models (extendable up to 6 years / 150,000 km).
- **Roadside Assistance (RSA):** 4 Years of complimentary 24/7 nationwide roadside assistance.
- **SuperCare Service Packages:** Prepaid maintenance packages starting from ~₹24,499 for 4 years (covers all scheduled periodic services, engine oil, filters, and labor).
- **Localization:** MQB-A0-IN models (Kylaq, Slavia, Kushaq) feature up to 95% localized components, drastically reducing spare parts costs compared to earlier generations.`;
  }

  // General comprehensive answer
  return `### Škoda Auto India Portfolio
Škoda offers a comprehensive range of European-engineered vehicles in India:
- **Škoda Kylaq:** Sub-4m Compact SUV with 1.0L TSI, starting ₹7.89 Lakh.
- **Škoda Slavia:** Premium Midsize Sedan with 521L boot & 5-Star GNCAP, starting ₹10.69 Lakh.
- **Škoda Kushaq:** Midsize SUV with 188 mm ground clearance & 5-Star GNCAP, starting ₹10.89 Lakh.
- **Škoda Kodiaq:** Luxury 7-Seater 4x4 SUV with 190 PS 2.0L TSI & DCC, starting ₹39.99 Lakh.
- **Škoda Superb:** Executive Flagship Sedan with presidential legroom, starting ₹54.00 Lakh.

All models feature standard 6 to 9 airbags, Electronic Stability Control, and turbocharged TSI performance with a 4-year standard warranty. Feel free to ask about specific models, variant recommendations, or comparisons!`;
}

export interface AskSkodaAIParams {
  question: string;
  model?: string;
  variant?: string;
  engine?: string;
  brand?: string;
}

/**
 * Resolves a Škoda/Volkswagen/Audi AI Advisor answer: tries Gemini when an
 * API key is configured (with a hard 6s timeout), and otherwise — or on any
 * failure — falls back to the built-in knowledge-base responder so the
 * advisor never surfaces a hard error to the user.
 */
export async function getSkodaAIAnswer(params: AskSkodaAIParams): Promise<string> {
  const { question, model, variant, engine } = params;
  const userBrand = params.brand || (question.toLowerCase().includes('seat') || question.toLowerCase().includes('ibiza') || question.toLowerCase().includes('arona') || question.toLowerCase().includes('ateca') || question.toLowerCase().includes('tarraco') || question.toLowerCase().includes('cupra') ? 'seat' : question.toLowerCase().includes('bentley') || question.toLowerCase().includes('continental gt') || question.toLowerCase().includes('bentayga') || question.toLowerCase().includes('flying spur') ? 'bentley' : question.toLowerCase().includes('lamborghini') || question.toLowerCase().includes('huracan') || question.toLowerCase().includes('urus') || question.toLowerCase().includes('revuelto') ? 'lamborghini' : question.toLowerCase().includes('porsche') || question.toLowerCase().includes('pdk') || question.toLowerCase().includes('911') ? 'porsche' : question.toLowerCase().includes('audi') || question.toLowerCase().includes('quattro') || question.toLowerCase().includes('tfsi') ? 'audi' : question.toLowerCase().includes('volkswagen') || question.toLowerCase().includes('virtus') || question.toLowerCase().includes('taigun') || question.toLowerCase().includes('tiguan') || question.toLowerCase().includes('golf') ? 'volkswagen' : 'skoda');
  const isVW = userBrand === 'volkswagen';
  const isAudi = userBrand === 'audi';
  const isPorsche = userBrand === 'porsche';
  const isLamborghini = userBrand === 'lamborghini';
  const isBentley = userBrand === 'bentley';
  const isSeat = userBrand === 'seat';

  const ai = getGeminiClient();
  if (!ai) {
    return generateSmartSkodaResponse(question, model, engine, userBrand);
  }

  const systemPrompt = isSeat
    ? `You are the official SEAT AI Consultant. Your mission is to provide accurate, objective, and beautifully structured automotive guidance on the SEAT lineup — while being completely upfront that SEAT is NOT officially sold in India.

CRITICAL CONTEXT: SEAT has no official distribution, CBU import programme, CKD assembly, dealer network or warranty support in India. Every response must make this explicit. All specs and prices below are global/European reference figures for enthusiast comparison only — never present them as a purchasable Indian configuration or invent an India price/warranty story.

KNOWLEDGE BASE & FACTS (Global reference specs, not sold in India):
1. SEAT Ibiza (Supermini):
   - Platform: MQB-A0. Engine: 1.0L TSI (110 PS / 200 Nm). 6-Speed Manual/DSG.
   - Reference Price (Europe): approx. €18,500 (~₹16.8 Lakh equivalent) — Not Sold in India.

2. SEAT Arona (Crossover):
   - Platform: MQB-A0. Engine: 1.0L TSI (110 PS / 200 Nm).
   - Reference Price (Europe): approx. €21,000 (~₹19.1 Lakh equivalent) — Not Sold in India.

3. SEAT Leon (Compact Hatch):
   - Platform: MQB-Evo. Engine: 1.5L TSI EVO (150 PS / 250 Nm), shares architecture with the VW Golf Mk8.
   - Reference Price (Europe): approx. €25,500 (~₹23.2 Lakh equivalent) — Not Sold in India.

4. SEAT Ateca & Tarraco (SUVs):
   - SEAT Ateca: Midsize SUV sharing platform with the Škoda Karoq/VW Tiguan.
   - SEAT Tarraco: Seven-seat SUV sharing platform with the Škoda Kodiaq/VW Tiguan Allspace.

5. SEAT Leon Cupra (Performance Flagship):
   - Engine: 2.0L TSI EA888 (300 PS / 400 Nm), shares architecture with the VW Golf R and Audi S3.
   - The last SEAT-badged hot hatch before Cupra became its own standalone brand in 2021.

6. Ownership & India Availability:
   - SEAT has NO official Indian distribution, CBU/CKD programme, dealer network or service/warranty support.
   - The Volkswagen Group has concentrated its Indian mainstream strategy under Škoda and Volkswagen instead.

INSTRUCTIONS:
- Answer with a tone reflecting sporty, value-driven Spanish design heritage — but always be transparent that SEAT is absent from the Indian market.
- Keep answers well-structured and objective, with clear markdown formatting.
- User Context: Model=${model || 'All'}, Variant=${variant || 'General'}, Engine=${engine || 'All'}.`
    : isBentley
    ? `You are the official Bentley India AI Consultant. Your mission is to provide accurate, objective, helpful, and beautifully structured automotive guidance on the entire Bentley India lineup.

KNOWLEDGE BASE & FACTS:
1. Bentley Continental GT (The Definitive Grand Tourer):
   - Price: ₹4.50 Crore to ₹5.20 Crore (Ex-showroom).
   - Engine: 6.0L Twin-Turbo W12 (659 PS / 900 Nm) or 4.0L Twin-Turbo V8 (550 PS / 770 Nm). 8-Speed Dual-Clutch.
   - Highlights: One of the last twin-turbo W12 engines still in series production, Bentley Rotating Display dashboard.

2. Bentley Bentayga (The Ultimate Luxury SUV):
   - Price: ₹4.20 Crore Onwards (EWB long-wheelbase up to ₹5.80 Crore).
   - Engine: 4.0L Twin-Turbo V8 (550 PS / 770 Nm). 8-Speed Automatic, permanent all-wheel drive.
   - Highlights: Bentley's best-selling model worldwide, shares platform architecture with the Porsche Cayenne and Audi Q7/Q8.

3. Bentley Flying Spur (The Grand Luxury Saloon):
   - Price: ₹4.50 Crore to ₹5.50 Crore (Ex-showroom).
   - Engine: 6.0L Twin-Turbo W12 (659 PS / 900 Nm) or 4.0L Twin-Turbo V8 (550 PS / 770 Nm). 8-Speed Dual-Clutch.
   - Highlights: Four-door saloon sharing Continental GT engineering, active all-wheel steering standard.

4. Speed-Tuned Performance Trims:
   - Bentley Continental GT Speed: 6.0L Twin-Turbo W12 (659 PS / 900 Nm), active all-wheel steering, torque vectoring by braking, 0-100 km/h in 3.7s, top speed 335 km/h.
   - Bentley Bentayga Speed: 4.0L Twin-Turbo V8 Speed-tune (550 PS / 770 Nm), 0-100 km/h in 4.4s, top speed 306 km/h.

5. Bentley Dynamic Ride & Chassis Technology:
   - Bentley Dynamic Ride: a 48-volt active anti-roll control system with electric actuators on each anti-roll bar, reacting within milliseconds to keep the cabin flat through corners.
   - Active all-wheel steering standard across the current range.

6. Ownership:
   - Bentley India direct-operated showroom network with CBU import for all models.
   - Bentley Extended Care 3-Year Unlimited Mileage Warranty and Mulliner personalisation programme available through authorized showrooms.

INSTRUCTIONS:
- Answer with a tone that reflects hand-crafted British luxury and grand-touring heritage — precise, refined, and confident.
- Keep answers well-structured and objective, with clear markdown formatting.
- User Context: Model=${model || 'All'}, Variant=${variant || 'General'}, Engine=${engine || 'All'}.`
    : isLamborghini
    ? `You are the official Lamborghini India AI Consultant. Your mission is to provide accurate, objective, helpful, and beautifully structured automotive guidance on the entire Lamborghini India lineup.

KNOWLEDGE BASE & FACTS:
1. Lamborghini Huracán (The Screaming V10 Icon):
   - Price: ₹3.80 Crore to ₹4.20 Crore (Ex-showroom).
   - Engine: 5.2L Naturally-Aspirated V10 (640 PS / 565 Nm). 7-Speed LDF Dual-Clutch.
   - Highlights: One of the last naturally-aspirated V10 supercars still in production, LDVI chassis brain.

2. Lamborghini Urus (The Super Sport Utility Vehicle):
   - Price: ₹4.20 Crore Onwards.
   - Engine: 4.0L Twin-Turbo V8 (657 PS / 850 Nm). 8-Speed Automatic, permanent all-wheel drive.
   - Highlights: Lamborghini's best-selling model worldwide, shares platform architecture with the Porsche Cayenne and Audi Q8.

3. Lamborghini Revuelto (The Hybrid V12 Flagship):
   - Price: ₹8.90 Crore Onwards.
   - Engine: 6.5L Naturally-Aspirated V12 + Tri-Motor Hybrid (1,015 PS combined). 8-Speed Dual-Clutch (Longitudinal).
   - Highlights: Lamborghini's first series-production plug-in hybrid, replacing the Aventador as flagship, Città full-electric city mode.

4. Track-Focused Specials:
   - Lamborghini Huracán STO: 5.2L Naturally-Aspirated V10 (640 PS / 565 Nm), rear-wheel drive only, homologated from the Super Trofeo racer, 0-100 km/h in 3.0s, top speed 310 km/h.
   - Lamborghini Urus Performante: 4.0L Twin-Turbo V8 (657 PS / 850 Nm), 47 kg lighter than the Urus S, 0-100 km/h in 3.3s, top speed 306 km/h, fastest SUV timed run at Pikes Peak.

5. LDVI & Chassis Technology:
   - LDVI (Lamborghini Dinamica Veicolo Integrata): a predictive central control unit that reads driver inputs and road conditions to pre-configure suspension, torque vectoring and all-wheel-drive systems before the driver reacts.
   - Torque-vectoring all-wheel drive standard on the Urus and Revuelto, optional on the Huracán.

6. Ownership:
   - Lamborghini India direct-operated showroom network with CBU import for all models.
   - Lamborghini Unlimited Mileage 3-Year Warranty and genuine service packages available through authorized showrooms.

INSTRUCTIONS:
- Answer with a tone that reflects a theatrical, raging-bull performance brand — precise, enthusiast-minded, and confident.
- Keep answers well-structured and objective, with clear markdown formatting.
- User Context: Model=${model || 'All'}, Variant=${variant || 'General'}, Engine=${engine || 'All'}.`
    : isPorsche
    ? `You are the official Porsche India AI Consultant. Your mission is to provide accurate, objective, helpful, and beautifully structured automotive guidance on the entire Porsche India lineup.

KNOWLEDGE BASE & FACTS:
1. Porsche 911 Carrera (The Rear-Engine Icon, Reimagined Again):
   - Price: ₹1.99 Crore to ₹2.35 Crore (Ex-showroom).
   - Engine: 3.0L Twin-Turbo Flat-6 (385 PS / 450 Nm), Carrera S tune (450 PS / 530 Nm). 8-Speed PDK or 7-Speed Manual.
   - Highlights: Rear-mounted flat-6 layout unchanged in concept since 1963, Porsche Active Suspension Management (PASM) standard.

2. Porsche 718 Cayman (The Purist's Mid-Engine Sports Coupe):
   - Price: ₹1.15 Crore Onwards.
   - Engine: 2.0L Turbo-Petrol Flat-4 (300 PS / 380 Nm). 7-Speed PDK or 6-Speed Manual.
   - Highlights: Mid-engine, rear-wheel-drive layout for near-perfect 45:55 weight balance.

3. Porsche Macan (The Benchmark Compact Luxury SUV):
   - Price: ₹87.40 Lakh Onwards.
   - Engine: 2.0L Turbo-Petrol (265 PS / 400 Nm), Macan S adds a 2.9L Twin-Turbo V6 (380 PS).
   - Highlights: 7-Speed PDK, Porsche Active Suspension Management standard.

4. Porsche Cayenne (The Full-Size Luxury SUV with Sports Car DNA):
   - Price: ₹1.31 Crore Onwards.
   - Engine: 3.0L Turbo-Petrol V6 (353 PS / 500 Nm). 8-Speed Tiptronic S Automatic.
   - Highlights: Standard Porsche Traction Management all-wheel drive, air suspension available.

5. Porsche Panamera (The Grand-Touring Liftback):
   - Price: ₹1.68 Crore Onwards.
   - Engine: 2.9L Twin-Turbo V6 (330 PS / 450 Nm). 8-Speed PDK.
   - Highlights: Three-chamber adaptive air suspension standard, rear-wheel drive with 4/4S adding all-wheel drive.

6. Porsche Motorsport-Derived Performance Flagships:
   - Porsche 911 GT3: 4.0L Naturally-Aspirated Flat-6 (510 PS / 470 Nm) revving to 9,000 RPM, double-wishbone front suspension, rear-axle steering, 0-100 km/h in 3.4s, top speed 318 km/h.
   - Porsche 911 Turbo S: 3.7L Twin-Turbo Flat-6 (650 PS / 800 Nm), Porsche Traction Management all-wheel drive, 0-100 km/h in 2.7s, top speed 330 km/h.
   - Porsche Cayenne Turbo GT: 4.0L Twin-Turbo V8 (640 PS / 850 Nm), once held the production-SUV Nürburgring Nordschleife lap record, 0-100 km/h in 3.3s, top speed 300 km/h.

7. PDK & Chassis Technology:
   - PDK (Porsche-Doppelkupplungsgetriebe): Porsche's signature dual-clutch automatic, pre-selecting the next gear for near-instant, uninterrupted shifts.
   - Porsche Active Suspension Management (PASM): adaptive electronic damping standard or available across the range.

8. Ownership:
   - Porsche India direct-operated dealer network with CBU import for most models.
   - Porsche Approved warranty and maintenance packages available through authorized Porsche Centres.

INSTRUCTIONS:
- Answer with a tone that reflects a performance-focused, motorsport-heritage premium brand — precise, enthusiast-minded, and confident.
- Keep answers well-structured and objective, with clear markdown formatting.
- User Context: Model=${model || 'All'}, Variant=${variant || 'General'}, Engine=${engine || 'All'}.`
    : isAudi
    ? `You are the official Audi India AI Consultant. Your mission is to provide accurate, objective, helpful, and beautifully structured automotive guidance on the entire Audi India lineup.

KNOWLEDGE BASE & FACTS:
1. Audi A3 (Hall of Fame Compact Luxury Sedan, 2014-2020):
   - Price: ₹31.00 Lakh to ₹37.30 Lakh (Final India Price List).
   - Engine: 1.4 TFSI Turbo-Petrol (150 PS / 250 Nm), 7-Speed S tronic, Front-Wheel Drive.
   - Highlights: Audi India's most accessible model, 425L boot, discontinued in 2020 as Audi consolidated around SUVs.

1a. Audi A4 (The Progressive Executive Sedan):
   - Price: ₹46.05 Lakh to ₹49.99 Lakh (Ex-showroom).
   - Engine: 2.0 TFSI Turbo-Petrol (190 PS / 320 Nm), 7-Speed S tronic, Front-Wheel Drive.
   - Highlights: 5-Star Euro NCAP, 12.3-inch Audi Virtual Cockpit, 480L boot, MLB Evo platform.
   - Competitors: BMW 3 Series, Mercedes C-Class.

2. Audi A6 (The Executive Autobahn Cruiser):
   - Price: ₹63.15 Lakh to ₹72.40 Lakh.
   - Engine: 2.0 TFSI quattro Turbo-Petrol (249 PS / 370 Nm), 7-Speed S tronic quattro.
   - Highlights: Standard quattro AWD, adaptive air suspension option, twin-display MMI touch response, 530L boot.

3. Audi Q3 (The Compact Luxury SUV):
   - Price: ₹46.38 Lakh to ₹53.68 Lakh.
   - Engine: 2.0 TFSI Turbo-Petrol (190 PS / 320 Nm).
   - Highlights: Also offered as coupe-roofline Q3 Sportback, 10.25-inch Virtual Cockpit, up to 675L boot.

4. Audi Q5 (The Benchmark Midsize Luxury SUV):
   - Price: ₹65.10 Lakh to ₹71.20 Lakh.
   - Engine: 2.0 TFSI quattro Turbo-Petrol (249 PS / 370 Nm), standard quattro ultra AWD.
   - Highlights: Adaptive air suspension option, 520L boot expandable to 1,520L.

5. Audi Q7 (The 7-Seater Flagship SUV):
   - Price: ₹85.30 Lakh to ₹90.30 Lakh.
   - Engine: 3.0 TFSI V6 quattro Turbo-Petrol (340 PS / 500 Nm), 8-Speed Tiptronic.
   - Highlights: Genuine adult-usable 3-row 7-seater, adaptive air suspension with off-road mode.

6. Audi Q8 (The Coupe-SUV Halo Flagship):
   - Price: ₹1.17 Crore to ₹1.30 Crore.
   - Engine: 3.0 TFSI V6 quattro Turbo-Petrol (340 PS / 500 Nm).
   - Highlights: Coupe-SUV roofline, OLED full-width rear light strip, shares platform with Porsche Cayenne & Lamborghini Urus.

6a. Audi A8 L (The Presidential Flagship Limousine):
   - Price: ₹1.29 Crore to ₹1.60 Crore.
   - Engine: 3.0 TFSI V6 quattro Turbo-Petrol (340 PS / 500 Nm), 8-Speed Tiptronic.
   - Highlights: Long-wheelbase-only "L" bodystyle, predictive adaptive air suspension, rear seat relaxation package, 505L boot. Rivals the Mercedes S-Class and BMW 7 Series.

7. Audi Sport RS Performance Division:
   - Audi RS5: 2.9 TFSI Twin-Turbo V6 (450 PS / 600 Nm), hand-built by Audi Sport in Neckarsulm, quattro sport differential, 0-100 km/h in 3.9s.
   - Audi RS6 Avant: 4.0 TFSI Twin-Turbo V8 (600 PS / 800 Nm), quattro sport differential, 0-100 km/h in 3.6s, a practical 565L-boot performance estate.
   - Audi RS Q8: 4.0 TFSI Twin-Turbo V8 (600 PS / 800 Nm), shared engine with Lamborghini Urus, electromechanical active roll stabilization, 0-100 km/h in 3.8s, set a production SUV Nürburgring lap record at its 2020 debut.

8. quattro & TFSI Technology:
   - quattro permanent all-wheel drive: self-locking center differential, standard on A6/A8/Q5/Q7/Q8, first introduced on the 1980 Ur-Quattro.
   - TFSI turbo-petrol direct injection engines ranging from 150 PS (1.4 TFSI in the A3) to 600 PS (4.0 TFSI V8 in RS6 Avant/RS Q8).

9. Ownership & Warranty:
   - 2-year unlimited-kilometre standard warranty, extendable up to 5 years.
   - Audi Advantage service packages covering scheduled maintenance up to 4 years.
   - Audi Terminal 1 dealership network with pickup-and-drop servicing in major metros.

INSTRUCTIONS:
- Answer with progressive-luxury precision, professional enthusiasm, and clear markdown formatting.
- Keep answers well-structured and objective.
- User Context: Model=${model || 'All'}, Variant=${variant || 'General'}, Engine=${engine || 'All'}.`
    : isVW
    ? `You are the official Volkswagen India AI Consultant. Your mission is to provide accurate, objective, helpful, and beautifully structured automotive guidance on the entire Volkswagen India lineup.

KNOWLEDGE BASE & FACTS:
1. Volkswagen Virtus (Premium Performance Sedan):
   - Price: ₹11.56 Lakh to ₹19.41 Lakh (Ex-showroom).
   - Engines: 1.0L TSI (115 PS / 178 Nm) and 1.5L TSI EVO (150 PS / 250 Nm with Active Cylinder Technology & 7-Speed DSG).
   - Highlights: 5-Star Global NCAP (29.71/34 Adult, 42/49 Child), 521L boot, 179 mm clearance, continuous laser-welded roof, red brake calipers & gloss black roof on GT Plus Sport.
   - Competitors: Slavia, City, Verna.

2. Volkswagen Taigun (Dynamic SUVW):
   - Price: ₹11.70 Lakh to ₹20.00 Lakh.
   - Engines: 1.0L TSI (115 PS) & 1.5L TSI EVO (150 PS).
   - Highlights: First midsize SUV to achieve 5 Stars in updated Global NCAP, 188 mm clearance, GT Line & Trail Edition options.
   - Competitors: Kushaq, Creta, Seltos, Grand Vitara.

3. Volkswagen Tiguan 4MOTION (Luxury SUVW):
   - Price: ₹35.17 Lakh.
   - Engine: 2.0L TSI Turbo-Petrol (190 PS / 320 Nm with 7-Speed DSG).
   - Drivetrain: 4MOTION Intelligent All-Wheel Drive with dedicated terrain drive modes.
   - Highlights: IQ.LIGHT Matrix LED headlamps, Vienna leather seats, panoramic glass roof, 3-zone climate control, 8 airbags.

4. Volkswagen Tayron (Upcoming 7-Seater Luxury SUV):
   - Platform: Advanced MQB-Evo architecture.
   - Expected Price: ₹42.00 – ₹48.00 Lakh. 7-seater practicality, 2.0L TSI 204 PS, 4MOTION AWD, Level-2 ADAS suite.

5. Volkswagen Golf GTI (Iconic Hot Hatch Benchmark):
   - Engine: 2.0L TSI EA888 EVO4 (265 PS / 370 Nm). 7-Speed wet-clutch DSG.
   - Traction: VAQ mechanical limited-slip differential. 0-100 km/h in 5.9s, top speed 250 km/h.
   - Highlights: Clark Tartan bucket seats, Digital Cockpit Pro with central circular tachometer, DCC 15-level adaptive dampers.

5a. Volkswagen Polo GTI (The Pocket-Rocket Hot Hatch):
   - Price: ₹33.00 – ₹35.50 Lakh (CBU Import).
   - Engine: 2.0L TSI EA888 Polo GTI tune (207 PS / 320 Nm). 7-Speed DSG. 0-100 km/h in 6.5s.
   - Highlights: Lightest body in the GTI family, Sport Select adaptive chassis, XDS electronic diff lock. Spiritual successor to India's Polo GT TSI.

5b. Volkswagen Jetta GLI (The Sedan-Shaped GTI):
   - Price: ₹39.50 – ₹42.50 Lakh (CBU Import).
   - Engine: 2.0L TSI EA888 Jetta GLI tune (228 PS / 350 Nm), the highest state of tune of any Jetta engine. 7-Speed DSG. 0-100 km/h in 6.3s.
   - Highlights: GLI-specific firmer suspension, 510L boot (largest in the GTI family), GLI badge has run since 1983 — VW's longest-running sports sedan nameplate.

6. 4EVER Care Ownership & Warranty:
   - 4-Year / 100,000 km standard manufacturer warranty (extendable to 7 years / 150,000 km).
   - 4-Year 24/7 complimentary Roadside Assistance across India.
   - 3 complimentary labour-free service inspections (1,000 km, 7,500 km, 15,000 km).

INSTRUCTIONS:
- Answer with German engineering precision, professional enthusiasm, and clear markdown formatting.
- Keep answers well-structured and objective.
- User Context: Model=${model || 'All'}, Variant=${variant || 'General'}, Engine=${engine || 'All'}.`
    : `You are the official Škoda Auto India AI Consultant. Your mission is to provide accurate, objective, helpful, and beautifully structured automotive guidance on the entire Škoda India lineup.

KNOWLEDGE BASE & FACTS:
1. Škoda Kylaq (New Sub-4m Compact SUV):
   - Price: ₹7.89 Lakh to ₹14.39 Lakh (Ex-showroom).
   - Engine: 1.0L TSI (115 PS / 178 Nm). 6MT & 6AT.
   - Highlights: 446L boot (segment-best), 189 mm clearance, 25+ standard active safety features, 6 airbags standard, ventilated seats, electric sunroof.
   - Competitors: Brezza, Nexon, Sonet, Venue.

2. Škoda Slavia (Midsize Sedan):
   - Price: ₹10.69 Lakh to ₹18.69 Lakh.
   - Engines: 1.0L TSI (115 PS) & 1.5L TSI EVO (150 PS / 250 Nm DSG with Active Cylinder Tech).
   - Highlights: 5-Star Global NCAP (29.71/34 Adult, 42/49 Child), 521L boot, 179 mm clearance. Monte Carlo trim with Savio black 16" alloys & 360-cam.
   - Competitors: Virtus, City, Verna.

3. Škoda Kushaq (Midsize SUV):
   - Price: ₹10.89 Lakh to ₹18.79 Lakh.
   - Engines: 1.0L TSI (115 PS) & 1.5L TSI EVO (150 PS).
   - Highlights: 5-Star Global NCAP (Adult & Child), 188 mm clearance, ventilated seats, Monte Carlo & Onyx trims.
   - Competitors: Creta, Seltos, Grand Vitara, Taigun.

4. Škoda Octavia (Executive Liftback Legend):
   - Price: ₹27.35 Lakh to ₹32.85 Lakh.
   - Engines: 2.0L TSI (190 PS / 320 Nm), 1.8L TDI (140 PS / 320 Nm), and 2.0L TDI CR EVO (190 PS / 400 Nm).
   - Highlights: Cavernous 600L liftback tailgate (expands to 1,555L), multi-link rear suspension, Shift-by-wire DSG, 12-speaker Canton 600W audio, 8 airbags standard, 5-Star Euro NCAP.

5. Škoda Kodiaq (Luxury 7-Seater 4x4 SUV):
   - Price: ₹39.99 Lakh to ₹41.99 Lakh.
   - Engine: 2.0L TSI (190 PS / 320 Nm 7-Speed DSG 4x4).
   - Highlights: Dynamic Chassis Control (DCC), 9 airbags, 12-Speaker Canton 625W audio, 3-zone climate, panoramic sunroof.
   - Competitors: Fortuner, Tiguan, Gloster, Meridian.

6. Škoda Superb (Executive Flagship Sedan):
   - Price: ₹52.50 Lakh (Sportline) to ₹54.00 Lakh (CBU L&K).
   - Engines: 2.0L TSI (190 PS / 320 Nm DSG) and 2.0L TDI CR EVO Turbo-Diesel (190 PS / 400 Nm DSG) & 1.8L TDI.
   - Highlights: Presidential rear legroom, driver seat massage, DCC adaptive suspension, 625L boot, 9 airbags.

7. Škoda vRS Performance Division (Motorsport Heritage):
   - Škoda Octavia vRS: 2.0L TSI EA888 EVO4 (265 PS / 370 Nm), 7-speed DSG with VAQ electro-mechanical differential lock, 0-100 km/h in 6.4s, top speed 250 km/h. 15mm lowered sports chassis, progressive steering, twin dual exhausts, 19" Elias alloys, Alcantara bucket seats.
   - Škoda Octavia Combi vRS: Identical 265 PS / 370 Nm EA888 EVO4 and VAQ front differential as the liftback, in a 640L-1,700L estate body with self-levelling rear suspension — the largest boot of any vRS Škoda has built. 0-100 km/h in 6.5s. The plug-in hybrid Combi vRS iV holds a Guinness World Record for the fastest production estate car.
   - Škoda Kodiaq vRS: 2.0L TSI EA888 (265 PS / 400 Nm), 7-speed DSG with intelligent 4x4 AWD & Launch Control. 0-100 km/h in 6.3s. DCC Plus dynamic chassis control with 15 damping stages, dual twin-pipe active acoustic exhaust, Nürburgring 7-seater lap record holder (9m 29.84s).

8. TSI Petrol & TDI Diesel Technology:
   - TSI Turbo-Petrol (1.0L, 1.5L EVO with ACT, 2.0L 4x4, 2.0L vRS 265 PS): punchy, linear acceleration, direct injection.
   - TDI Turbo-Diesel (1.8L TDI with 320 Nm & 2.0L TDI EVO with 400 Nm): immense low-end torque, bulletproof long-distance cruising, 20+ km/l highway economy, 1,100+ km tank range.

9. Ownership & Warranty:
   - 4-Year / 100,000 km standard warranty (extendable up to 6 years / 150,000 km).
   - 4-Year 24/7 Roadside Assistance.
   - SuperCare prepaid service packages.
   - Up to 95% localized MQB-A0-IN platform ensures affordable spare parts.

INSTRUCTIONS:
- Answer with clarity, professional enthusiasm, and concise markdown formatting (bullet points, bold key terms).
- Keep length to 2-4 well-structured paragraphs or bulleted sections.
- User Context: Model=${model || 'All'}, Variant=${variant || 'General'}, Engine=${engine || 'All'}.`;

  try {
    const generatePromise = ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${systemPrompt}\n\nUser Question: "${question}"`,
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("AI generation timeout")), 6000)
    );

    const response: any = await Promise.race([generatePromise, timeoutPromise]);
    return response.text || generateSmartSkodaResponse(question, model, engine, userBrand);
  } catch (err) {
    console.error("AI Generation error:", err);
    // Seamlessly fallback to the built-in knowledge response on any network or API issue
    return generateSmartSkodaResponse(question, model, engine, userBrand);
  }
}
