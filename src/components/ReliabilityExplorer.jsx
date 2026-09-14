import { useState, useMemo } from "react";
import {
  Wrench,
  Circle,
  ChevronDown,
  BadgeCheck,
  Users,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RELIABILITY_PROFILES } from "../data/reliabilityData";

const RATING_META = {
  green: { label: "Common / Well-Proven", dot: "bg-emerald-500", text: "text-emerald-400", bg: "bg-emerald-950/50 border-emerald-800" },
  yellow: { label: "Occasional", dot: "bg-amber-500", text: "text-amber-400", bg: "bg-amber-950/50 border-amber-800" },
  red: { label: "Serious", dot: "bg-red-500", text: "text-red-400", bg: "bg-red-950/50 border-red-800" },
};

function RatingBadge({ rating, compact }) {
  const meta = RATING_META[rating];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold border ${meta.bg} ${meta.text}`}
    >
      <Circle className={`w-2 h-2 fill-current ${meta.dot} text-transparent rounded-full`} />
      {compact ? rating.toUpperCase() : meta.label}
    </span>
  );
}

function SectionRow({ section }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-zinc-950/60 border border-zinc-800 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 cursor-pointer hover:bg-zinc-900/60 transition-colors"
      >
        <div className="flex items-center gap-2.5 text-left">
          <span className="text-sm font-bold text-white">{section.title}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <RatingBadge rating={section.rating} />
          <ChevronDown
            className={`w-4 h-4 text-zinc-500 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 space-y-3 border-t border-zinc-800/80">
              <div className="flex gap-2.5">
                <BadgeCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    Manufacturer Information
                  </p>
                  <p className="text-xs text-zinc-300 mt-0.5 leading-relaxed">
                    {section.manufacturerInfo}
                  </p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <Users className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    Owner-Reported Experience
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    {section.ownerReported}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProfileCard({ profile, expanded, onToggle }) {
  const meta = RATING_META[profile.overallRating];
  return (
    <div className={`rounded-2xl bg-zinc-900/60 border overflow-hidden transition-colors ${expanded ? "border-zinc-700" : "border-zinc-800"}`}>
      <button
        onClick={onToggle}
        className="w-full text-left p-5 cursor-pointer hover:bg-zinc-800/30 transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Wrench className="w-4 h-4 text-emerald-400 shrink-0" />
              {profile.engineOrTransmission}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">{profile.summary}</p>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {profile.usedIn.map((m) => (
                <span
                  key={m}
                  className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px] border border-zinc-700"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-2">
            <RatingBadge rating={profile.overallRating} />
            <ChevronDown
              className={`w-4 h-4 text-zinc-500 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-2.5">
              {profile.sections.map((s) => (
                <SectionRow key={s.title} section={s} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const ReliabilityExplorer = () => {
  const [expandedId, setExpandedId] = useState(RELIABILITY_PROFILES[0]?.id ?? null);
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return RELIABILITY_PROFILES;
    return RELIABILITY_PROFILES.filter((p) => p.overallRating === filter);
  }, [filter]);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5" /> What Actually Breaks?
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
          Reliability Explorer
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          A candid look at common wear items, maintenance needs, and known behaviours for each
          engine and transmission combination — with manufacturer guidance kept clearly separate
          from owner-reported, real-world experience.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 flex-wrap">
        {["all", "green", "yellow", "red"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
              filter === f
                ? "bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-950"
                : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200"
            }`}
          >
            {f === "all" ? (
              "All Powertrains"
            ) : (
              <>
                <Circle className={`w-2 h-2 fill-current ${RATING_META[f].dot} text-transparent rounded-full`} />
                {RATING_META[f].label}
              </>
            )}
          </button>
        ))}
      </div>

      <div className="max-w-xl mx-auto flex items-start gap-2 text-[11px] text-amber-300 bg-amber-950/30 border border-amber-900/60 rounded-xl p-3">
        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
        <p>
          Owner-reported experiences are drawn from general patterns discussed in enthusiast and
          owner communities and should not be treated as a substitute for a professional
          pre-purchase inspection or official manufacturer guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filtered.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            expanded={expandedId === profile.id}
            onToggle={() => setExpandedId(expandedId === profile.id ? null : profile.id)}
          />
        ))}
      </div>
    </div>
  );
};
