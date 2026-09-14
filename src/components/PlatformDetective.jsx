import { useState, useMemo, useCallback } from "react";
import { Search, RotateCcw, CheckCircle2, XCircle, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SKODA_MODELS } from "../data/skodaData";
import { VW_MODELS } from "../data/vwData";
import { AUDI_MODELS } from "../data/audiData";
import { SkodaLogo } from "./SkodaLogo";
import { VolkswagenLogo } from "./VolkswagenLogo";
import { AudiLogo } from "./AudiLogo";
import { derivePlatform, normalizePlatformName, PLATFORM_DESCRIPTIONS, getPlatformSiblings } from "../utils/underTheSkin";

const ALL_BRAND_MODELS = { skoda: SKODA_MODELS, volkswagen: VW_MODELS, audi: AUDI_MODELS };
const BRAND_LOGO = { skoda: SkodaLogo, volkswagen: VolkswagenLogo, audi: AudiLogo };
const BRAND_LABEL = { skoda: "Škoda", volkswagen: "Volkswagen", audi: "Audi" };
const OPTIONS = ["MQB-A0-IN", "MQB Evo", "MLB Evo", "Other"];

function pickRandomModel(excludeId) {
  const pool = [];
  Object.entries(ALL_BRAND_MODELS).forEach(([brand, models]) => {
    models.forEach((m) => pool.push({ model: m, brand }));
  });
  let choice;
  do {
    choice = pool[Math.floor(Math.random() * pool.length)];
  } while (excludeId && choice.model.id === excludeId && pool.length > 1);
  return choice;
}

export const PlatformDetective = () => {
  const [round, setRound] = useState(() => pickRandomModel());
  const [guess, setGuess] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const correctPlatform = useMemo(() => {
    const raw = normalizePlatformName(derivePlatform(round.model, round.brand));
    return OPTIONS.includes(raw) ? raw : "Other";
  }, [round]);

  const siblings = useMemo(() => {
    if (!guess) return [];
    return getPlatformSiblings(round.model, round.brand, ALL_BRAND_MODELS).siblings;
  }, [guess, round]);

  const handleGuess = useCallback(
    (option) => {
      if (guess) return;
      setGuess(option);
      setScore((s) => ({ correct: s.correct + (option === correctPlatform ? 1 : 0), total: s.total + 1 }));
    },
    [guess, correctPlatform],
  );

  const nextRound = useCallback(() => {
    setRound(pickRandomModel(round.model.id));
    setGuess(null);
  }, [round]);

  const Logo = BRAND_LOGO[round.brand];
  const isCorrect = guess === correctPlatform;

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800 text-sky-300 text-[11px] font-bold uppercase tracking-wider">
          <Search className="w-3.5 h-3.5" /> Platform Detective
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
          What Platform Is Hiding Underneath?
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          Every model is built on a shared Group architecture. Guess it before the reveal.
        </p>
        <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
          <Trophy className="w-3.5 h-3.5 text-amber-400" /> Score: {score.correct} / {score.total}
        </div>
      </div>

      <div className="max-w-2xl mx-auto rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={round.model.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 justify-center">
              <Logo variant="emblem" size="lg" />
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  {BRAND_LABEL[round.brand]}
                </span>
                <h3 className="text-2xl font-black text-white">{round.model.name}</h3>
                <p className="text-xs text-zinc-500">{round.model.bodyType} • {round.model.priceRange}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mt-6">
              {OPTIONS.map((opt) => {
                const isChosen = guess === opt;
                const revealCorrect = guess && opt === correctPlatform;
                return (
                  <button
                    key={opt}
                    onClick={() => handleGuess(opt)}
                    disabled={!!guess}
                    className={`px-3 py-3 rounded-xl text-sm font-bold border transition-all ${
                      guess
                        ? revealCorrect
                          ? "bg-emerald-600 text-white border-emerald-500"
                          : isChosen
                            ? "bg-red-950/60 text-red-300 border-red-800"
                            : "bg-zinc-950 text-zinc-600 border-zinc-800"
                        : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-sky-600 hover:text-white cursor-pointer"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {guess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div
                    className={`mt-5 rounded-xl border p-4 ${
                      isCorrect ? "bg-emerald-950/40 border-emerald-800" : "bg-red-950/30 border-red-900"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-sm">
                      {isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400" />
                      )}
                      <span className={isCorrect ? "text-emerald-400" : "text-red-400"}>
                        {isCorrect ? "Correct!" : `Not quite — it's ${correctPlatform}`}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">
                      {PLATFORM_DESCRIPTIONS[correctPlatform] || "A shared modular Group architecture."}
                    </p>
                    {siblings.length > 0 && (
                      <div className="mt-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                          Shares this platform with
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {siblings.map((sib) => (
                            <span
                              key={`${sib.brand}-${sib.id}`}
                              className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] border border-zinc-700"
                            >
                              {sib.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={nextRound}
                    className="w-full mt-4 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-sm font-bold text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" /> Next Car
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
