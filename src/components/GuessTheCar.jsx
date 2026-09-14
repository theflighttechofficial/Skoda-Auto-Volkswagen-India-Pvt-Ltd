import { useState, useEffect } from "react";
import {
  Gamepad2,
  Trophy,
  Flame,
  Sparkles,
  CalendarDays,
  RotateCcw,
  Lightbulb,
  ChevronRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  getDailyPuzzle,
  getRandomPuzzle,
  isCorrectGuess,
  scoreForRound,
  DIFFICULTY_SETTINGS,
  loadGameStats,
  saveGameStats,
} from "../utils/guessTheCarGame";

const todayStr = () => new Date().toISOString().slice(0, 10);

export const GuessTheCar = () => {
  const [stats, setStats] = useState(loadGameStats);
  const [mode, setMode] = useState("daily"); // daily | practice
  const [difficulty, setDifficulty] = useState("medium");
  const [puzzle, setPuzzle] = useState(() => getDailyPuzzle(todayStr()));
  const [revealed, setRevealed] = useState(1);
  const [guess, setGuess] = useState("");
  const [status, setStatus] = useState("playing"); // playing | won | lost
  const [shake, setShake] = useState(false);

  const dailyAlreadyPlayed = stats.daily?.date === todayStr() && stats.daily?.played;
  const settings = DIFFICULTY_SETTINGS[mode === "daily" ? "medium" : difficulty];

  useEffect(() => {
    if (mode === "daily") {
      const today = getDailyPuzzle(todayStr());
      setPuzzle(today);
      if (dailyAlreadyPlayed) {
        setStatus(stats.daily.correct ? "won" : "lost");
        setRevealed(stats.daily.cluesUsed || 4);
      } else {
        setStatus("playing");
        setRevealed(1);
      }
    } else {
      startNewPractice(difficulty);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const startNewPractice = (diff) => {
    setPuzzle((prev) => getRandomPuzzle(diff, prev?.uid));
    setRevealed(1);
    setStatus("playing");
    setGuess("");
  };

  const persistStats = (next) => {
    setStats(next);
    saveGameStats(next);
  };

  const handleWin = () => {
    const points = scoreForRound(revealed, mode === "daily" ? "medium" : difficulty);
    const nextStreak = stats.currentStreak + 1;
    const next = {
      ...stats,
      totalScore: stats.totalScore + points,
      currentStreak: nextStreak,
      bestStreak: Math.max(stats.bestStreak, nextStreak),
      gamesPlayed: stats.gamesPlayed + 1,
      gamesWon: stats.gamesWon + 1,
      daily: mode === "daily" ? { date: todayStr(), played: true, correct: true, cluesUsed: revealed } : stats.daily,
    };
    persistStats(next);
    setStatus("won");
  };

  const handleLose = () => {
    const next = {
      ...stats,
      currentStreak: 0,
      gamesPlayed: stats.gamesPlayed + 1,
      daily: mode === "daily" ? { date: todayStr(), played: true, correct: false, cluesUsed: revealed } : stats.daily,
    };
    persistStats(next);
    setStatus("lost");
  };

  const submitGuess = () => {
    if (!guess.trim() || status !== "playing") return;
    if (isCorrectGuess(guess, puzzle)) {
      handleWin();
      return;
    }
    setShake(true);
    setTimeout(() => setShake(false), 400);
    if (revealed >= settings.maxClues) {
      handleLose();
    } else {
      setRevealed((r) => r + 1);
      setGuess("");
    }
  };

  const cluesShown = puzzle.clues.slice(0, revealed);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1 text-amber-400">
            <Gamepad2 className="w-4 h-4" />
            <span>Guess the Car</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Can you identify this car?</h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Real specs, one clue at a time. Guess before you run out — score more for guessing early.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex items-center gap-3 text-xs">
          <StatChip icon={Trophy} label="Score" value={stats.totalScore} color="text-amber-400" />
          <StatChip icon={Flame} label="Streak" value={stats.currentStreak} color="text-orange-400" />
          <StatChip icon={Sparkles} label="Best" value={stats.bestStreak} color="text-fuchsia-400" />
        </div>
      </div>

      {/* Mode & difficulty selectors */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-zinc-800">
          <button
            onClick={() => setMode("daily")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${mode === "daily" ? "bg-amber-600 text-white shadow-md" : "text-zinc-400 hover:text-white"}`}
          >
            <CalendarDays className="w-3.5 h-3.5" /> Daily Challenge
          </button>
          <button
            onClick={() => setMode("practice")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${mode === "practice" ? "bg-amber-600 text-white shadow-md" : "text-zinc-400 hover:text-white"}`}
          >
            <Gamepad2 className="w-3.5 h-3.5" /> Practice
          </button>
        </div>

        {mode === "practice" && (
          <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-zinc-800">
            {Object.entries(DIFFICULTY_SETTINGS).map(([key, s]) => (
              <button
                key={key}
                onClick={() => {
                  setDifficulty(key);
                  startNewPractice(key);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${difficulty === key ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-white"}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Game card */}
      <motion.div
        key={puzzle.uid + status}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, x: shake ? [0, -8, 8, -6, 6, 0] : 0 }}
        transition={{ duration: shake ? 0.4 : 0.3 }}
        className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 space-y-6"
      >
        {mode === "daily" && (
          <div className="text-[11px] uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5" /> Today's Challenge · {todayStr()}
          </div>
        )}

        {settings.bonusHint && status === "playing" && (
          <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/60 border border-zinc-800 rounded-lg px-3 py-2">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" /> {puzzle.hint}
          </div>
        )}

        {status === "playing" && (
          <>
            <div className="space-y-3">
              {cluesShown.map((clue, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800"
                >
                  <span className="text-[10px] font-black text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-1 rounded-md shrink-0">
                    CLUE #{i + 1}
                  </span>
                  <span className="text-xs text-zinc-500">{clue.label}:</span>
                  <span className="text-sm font-bold text-white">{clue.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitGuess()}
                placeholder="Type your guess... (e.g. Golf GTI)"
                className="flex-1 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
              />
              <button
                onClick={submitGuess}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                Guess <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-zinc-500">
              Clue {revealed} of {settings.maxClues} · {scoreForRound(revealed, mode === "daily" ? "medium" : difficulty)} pts if
              correct now
            </p>
          </>
        )}

        {status === "won" && (
          <ResultPanel
            win
            puzzle={puzzle}
            revealed={revealed}
            mode={mode}
            onPlayAgain={mode === "practice" ? () => startNewPractice(difficulty) : null}
          />
        )}
        {status === "lost" && (
          <ResultPanel
            win={false}
            puzzle={puzzle}
            revealed={revealed}
            mode={mode}
            onPlayAgain={mode === "practice" ? () => startNewPractice(difficulty) : null}
          />
        )}
      </motion.div>
    </div>
  );
};

function ResultPanel({ win, puzzle, mode, onPlayAgain }) {
  return (
    <div className="space-y-4 text-center py-4">
      {win ? (
        <>
          <div className="text-4xl">🎉</div>
          <h3 className="text-2xl font-black text-emerald-400">YOU GOT IT!</h3>
        </>
      ) : (
        <>
          <div className="text-4xl">😅</div>
          <h3 className="text-2xl font-black text-red-400">Out of Clues!</h3>
        </>
      )}
      <div className="flex items-center justify-center gap-3">
        {puzzle.image && (
          <img src={puzzle.image} alt={puzzle.name} className="w-28 h-20 object-cover rounded-xl border border-zinc-700" />
        )}
        <div className="text-left">
          <p className="text-xs text-zinc-500">The answer was</p>
          <p className="text-lg font-bold text-white flex items-center gap-1.5">
            <CheckCircle2 className={`w-4 h-4 ${win ? "text-emerald-400" : "text-zinc-500"}`} /> {puzzle.name}
          </p>
        </div>
      </div>
      {onPlayAgain ? (
        <button
          onClick={onPlayAgain}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" /> Next Car
        </button>
      ) : (
        <p className="text-xs text-zinc-500 flex items-center justify-center gap-1.5">
          <X className="w-3.5 h-3.5" /> Come back tomorrow for a new Daily Challenge
        </p>
      )}
    </div>
  );
}

function StatChip({ icon: Icon, label, value, color }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
      <Icon className={`w-3.5 h-3.5 ${color}`} />
      <span className="text-zinc-500">{label}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}
