import { useState, useEffect, useRef, useCallback } from "react";

// Any keyboard typing anywhere on the page is watched for these trigger
// words (case-insensitive, using a rolling buffer of the last N keys typed —
// the same technique as a classic "Konami code" listener).
const KEYWORD_TRIGGERS = {
  dsg: "racingHud",
  gti: "gtiTheme",
  quattro: "quattroViz",
};
const MAX_BUFFER = 12;

export function useEasterEggs() {
  const [racingHud, setRacingHud] = useState(false);
  const [gtiTheme, setGtiTheme] = useState(false);
  const [quattroViz, setQuattroViz] = useState(false);
  const [wolfsburgMode, setWolfsburgMode] = useState(false);
  const bufferRef = useRef("");
  const logoClickCountRef = useRef(0);
  const logoClickTimerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable) return;
      if (!/^[a-zA-Z]$/.test(e.key)) return;
      bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-MAX_BUFFER);
      for (const [word, flag] of Object.entries(KEYWORD_TRIGGERS)) {
        if (bufferRef.current.endsWith(word)) {
          bufferRef.current = "";
          if (flag === "racingHud") {
            setRacingHud(true);
            setTimeout(() => setRacingHud(false), 4000);
          } else if (flag === "gtiTheme") {
            setGtiTheme(true);
            setTimeout(() => setGtiTheme(false), 5000);
          } else if (flag === "quattroViz") {
            setQuattroViz(true);
            setTimeout(() => setQuattroViz(false), 5000);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const registerLogoClick = useCallback(() => {
    logoClickCountRef.current += 1;
    if (logoClickTimerRef.current) clearTimeout(logoClickTimerRef.current);
    logoClickTimerRef.current = setTimeout(() => {
      logoClickCountRef.current = 0;
    }, 2500);
    if (logoClickCountRef.current >= 7) {
      logoClickCountRef.current = 0;
      setWolfsburgMode(true);
      setTimeout(() => setWolfsburgMode(false), 6000);
    }
  }, []);

  return { racingHud, gtiTheme, quattroViz, wolfsburgMode, registerLogoClick };
}
