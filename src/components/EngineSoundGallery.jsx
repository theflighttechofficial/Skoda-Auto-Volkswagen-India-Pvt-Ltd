import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, Play, Square, Gauge, Fuel } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ENGINE_SOUND_PROFILES, SOUND_EVENTS } from "../data/engineSoundData";

// All audio here is synthesized in-browser via the Web Audio API — no
// copyrighted engine recordings are used or required.
function useEngineSynth() {
  const ctxRef = useRef(null);
  const nodesRef = useRef(null);
  const rafRef = useRef(null);

  const ensureCtx = useCallback(() => {
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new AudioCtx();
    }
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    return ctxRef.current;
  }, []);

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    const nodes = nodesRef.current;
    if (nodes) {
      const now = ctxRef.current.currentTime;
      nodes.gain.gain.cancelScheduledValues(now);
      nodes.gain.gain.setTargetAtTime(0, now, 0.08);
      const osc1 = nodes.osc1,
        osc2 = nodes.osc2,
        noise = nodes.noise;
      setTimeout(() => {
        try {
          osc1.stop();
          osc2.stop();
          noise.stop();
        } catch {
          /* already stopped */
        }
      }, 200);
      nodesRef.current = null;
    }
  }, []);

  const play = useCallback(
    (profile, eventId, onRpmChange, onEnd) => {
      stop();
      const ctx = ensureCtx();
      const master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);

      const osc1 = ctx.createOscillator();
      osc1.type = profile.timbre === "deep-v8" ? "sawtooth" : "sawtooth";
      const osc2 = ctx.createOscillator();
      osc2.type = "square";
      const oscGain2 = ctx.createGain();
      oscGain2.gain.value = profile.timbre === "clattery" || profile.timbre === "gruff" ? 0.35 : 0.18;
      osc2.connect(oscGain2);
      oscGain2.connect(master);
      osc1.connect(master);

      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.value = profile.baseFrequency * 4;
      const noiseGain = ctx.createGain();
      noiseGain.gain.value = 0.05;
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(master);

      osc1.start();
      osc2.start();
      noise.start();
      nodesRef.current = { osc1, osc2, noise, gain: master };

      const now = ctx.currentTime;
      master.gain.setTargetAtTime(0.22, now, 0.05);

      const rpmToFreq = (rpm) => (rpm / 60) * (profile.baseFrequency / 14);
      const setRpm = (rpm, time = 0.05) => {
        const f = Math.max(20, rpmToFreq(rpm));
        osc1.frequency.setTargetAtTime(f, ctx.currentTime, time);
        osc2.frequency.setTargetAtTime(f * 1.5, ctx.currentTime, time);
        noiseFilter.frequency.setTargetAtTime(200 + rpm / 4, ctx.currentTime, time);
      };

      const idle = profile.idleRpm;
      const redline = profile.redlineRpm;
      let schedule = [];
      if (eventId === "cold-start") {
        schedule = [
          { rpm: idle * 2.2, dur: 700 },
          { rpm: idle * 1.6, dur: 700 },
          { rpm: idle, dur: 1400 },
        ];
      } else if (eventId === "idle") {
        schedule = [
          { rpm: idle, dur: 1200 },
          { rpm: idle * 1.05, dur: 900 },
          { rpm: idle, dur: 1200 },
        ];
      } else if (eventId === "rev") {
        schedule = [
          { rpm: idle, dur: 300 },
          { rpm: redline * 0.4, dur: 500 },
          { rpm: redline * 0.75, dur: 500 },
          { rpm: redline, dur: 600 },
          { rpm: idle * 1.3, dur: 700 },
        ];
      } else if (eventId === "launch") {
        schedule = [
          { rpm: redline * 0.55, dur: 900 },
          { rpm: redline * 0.55, dur: 500 },
          { rpm: redline * 0.95, dur: 450 },
          { rpm: redline * 0.7, dur: 350 },
          { rpm: redline * 0.9, dur: 450 },
          { rpm: idle * 1.4, dur: 600 },
        ];
      } else if (eventId === "downshift") {
        schedule = [
          { rpm: redline * 0.5, dur: 500 },
          { rpm: redline * 0.5, dur: 250 },
          { rpm: redline * 0.85, dur: 300 },
          { rpm: redline * 0.6, dur: 500 },
        ];
      }

      let elapsed = 0;
      const timeouts = [];
      schedule.forEach((step) => {
        const t = elapsed;
        timeouts.push(
          setTimeout(() => setRpm(step.rpm, step.dur / 2000), t),
        );
        elapsed += step.dur;
      });

      const startTime = performance.now();
      const totalMs = elapsed;
      const animate = () => {
        const t = performance.now() - startTime;
        let acc = 0;
        let currentRpm = idle;
        for (const step of schedule) {
          if (t < acc + step.dur) {
            currentRpm = step.rpm;
            break;
          }
          acc += step.dur;
          currentRpm = step.rpm;
        }
        onRpmChange(Math.min(currentRpm, redline));
        if (t < totalMs) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          onRpmChange(0);
        }
      };
      rafRef.current = requestAnimationFrame(animate);

      timeouts.push(
        setTimeout(() => {
          stop();
          onEnd();
        }, totalMs + 250),
      );

      return () => timeouts.forEach(clearTimeout);
    },
    [ensureCtx, stop],
  );

  useEffect(() => stop, [stop]);

  return { play, stop };
}

function RpmBars({ rpm, redline }) {
  const bars = 24;
  const filled = Math.round((rpm / redline) * bars);
  return (
    <div className="flex items-end gap-[2px] h-10 w-full">
      {Array.from({ length: bars }).map((_, i) => {
        const active = i < filled;
        const pct = 20 + (i / bars) * 80;
        const isRedzone = i > bars * 0.85;
        return (
          <div
            key={i}
            className={`flex-1 rounded-sm transition-all duration-75 ${
              active
                ? isRedzone
                  ? "bg-red-500 shadow-sm shadow-red-500/50"
                  : "bg-emerald-400"
                : "bg-zinc-800"
            }`}
            style={{ height: `${pct}%` }}
          />
        );
      })}
    </div>
  );
}

const TIMBRE_LABEL = {
  smooth: "Smooth & Refined",
  gruff: "Gruff Diesel Clatter",
  sporty: "Sporty & Aggressive",
  clattery: "Characterful 3-Cyl Thrum",
  "deep-v8": "Deep & Cultured",
};

function SoundCard({ profile }) {
  const { play, stop } = useEngineSynth();
  const [playingEvent, setPlayingEvent] = useState(null);
  const [rpm, setRpm] = useState(0);

  const handlePlay = (eventId) => {
    if (playingEvent === eventId) {
      stop();
      setPlayingEvent(null);
      setRpm(0);
      return;
    }
    setPlayingEvent(eventId);
    play(
      profile,
      eventId,
      (r) => setRpm(r),
      () => {
        setPlayingEvent(null);
        setRpm(0);
      },
    );
  };

  useEffect(() => stop, [stop]);

  return (
    <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-black text-white flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-emerald-400" />
            {profile.label}
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            {profile.displacement} • {profile.cylinders}
          </p>
        </div>
        <span
          className={`shrink-0 flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold border ${
            profile.fuelType === "Diesel"
              ? "bg-amber-950/60 text-amber-300 border-amber-800"
              : "bg-emerald-950/60 text-emerald-300 border-emerald-800"
          }`}
        >
          <Fuel className="w-3 h-3" />
          {profile.fuelType}
        </span>
      </div>

      <p className="text-xs text-zinc-400 leading-relaxed">{profile.character}</p>

      <div className="flex flex-wrap gap-1.5">
        {profile.usedIn.map((m) => (
          <span
            key={m}
            className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px] border border-zinc-700"
          >
            {m}
          </span>
        ))}
      </div>

      <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-3 space-y-2">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-500">
          <span className="flex items-center gap-1">
            <Gauge className="w-3 h-3" /> RPM
          </span>
          <span className={rpm > profile.redlineRpm * 0.85 ? "text-red-400" : "text-emerald-400"}>
            {Math.round(rpm) || profile.idleRpm} / {profile.redlineRpm}
          </span>
        </div>
        <RpmBars rpm={rpm || 0} redline={profile.redlineRpm} />
        <p className="text-[10px] text-zinc-500 text-center pt-1">
          {TIMBRE_LABEL[profile.timbre]}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
        {SOUND_EVENTS.map((ev) => {
          const isActive = playingEvent === ev.id;
          return (
            <button
              key={ev.id}
              onClick={() => handlePlay(ev.id)}
              title={ev.description}
              className={`flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer border ${
                isActive
                  ? "bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-950"
                  : "bg-zinc-800/80 text-zinc-300 border-zinc-700 hover:bg-zinc-700"
              }`}
            >
              {isActive ? <Square className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              {ev.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export const EngineSoundGallery = () => {
  const [supported] = useState(
    () => typeof window !== "undefined" && !!(window.AudioContext || window.webkitAudioContext),
  );

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
          <Volume2 className="w-3.5 h-3.5" /> The Sound of the Group
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
          Engine Sound Gallery
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          Every engine in the Škoda, Volkswagen, and Audi India lineup has a distinct acoustic
          signature. Press play to hear a synthesized approximation of each engine's character
          across cold start, idle, rev, launch, and downshift.
        </p>
        <p className="text-[11px] text-zinc-600 mt-2 italic">
          All sound here is generated live in your browser via the Web Audio API — no copyrighted
          recordings are used.
        </p>
      </div>

      {!supported && (
        <div className="max-w-md mx-auto text-center text-xs text-amber-300 bg-amber-950/40 border border-amber-800 rounded-xl p-3">
          Your browser does not support the Web Audio API, so playback is unavailable. The RPM
          visualizer will still respond if you interact with the buttons.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {ENGINE_SOUND_PROFILES.map((profile) => (
          <SoundCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};
