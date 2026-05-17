"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Free Scoreboard — Two-Team Score Keeper & Timer",
  description: "Keep score for two teams with this free online scoreboard. Custom team names, quick +/- buttons, round counter, countdown timer and stopwatch. Perfect for board games, sports, and tournaments. Free, no signup.",
  keywords: [
    "scoreboard", "score keeper", "two team scoreboard", "game score tracker",
    "score counter", "board game score", "sports scoreboard", "free scoreboard",
    "online score keeper", "tournament scoreboard", "match timer",
  ],
  toolId: "scoreboard",
};

const COLORS = ["+1", "+5", "+10", "-1", "-5", "-10"] as const;
const PRESET_STEPS = [1, 5, 10];

const THEMES = [
  { id: "classic", name: "Classic", bg: "bg-zinc-50 dark:bg-zinc-900", teamBg: "bg-white dark:bg-zinc-800", accent: "bg-zinc-900 dark:bg-white", text: "text-zinc-900 dark:text-white", accentText: "text-white dark:text-zinc-900", border: "border-zinc-200 dark:border-zinc-700", btn: "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600", highlight: "bg-blue-600", highlightHover: "hover:bg-blue-700" },
  { id: "neon", name: "Neon", bg: "bg-slate-950", teamBg: "bg-slate-900", accent: "bg-cyan-400", text: "text-cyan-400", accentText: "text-slate-950", border: "border-slate-700", btn: "bg-slate-800 hover:bg-slate-700 text-cyan-300", highlight: "bg-fuchsia-500", highlightHover: "hover:bg-fuchsia-600" },
  { id: "sports", name: "Sports", bg: "bg-green-50 dark:bg-green-950/20", teamBg: "bg-white dark:bg-green-950/30", accent: "bg-green-700 dark:bg-green-500", text: "text-green-900 dark:text-green-100", accentText: "text-white", border: "border-green-200 dark:border-green-800", btn: "bg-green-100 hover:bg-green-200 dark:bg-green-900/50 dark:hover:bg-green-800/50 dark:text-green-200", highlight: "bg-orange-600", highlightHover: "hover:bg-orange-700" },
  { id: "dark", name: "Dark Mode", bg: "bg-neutral-950", teamBg: "bg-neutral-900", accent: "bg-amber-400", text: "text-amber-400", accentText: "text-neutral-950", border: "border-neutral-700", btn: "bg-neutral-800 hover:bg-neutral-700 text-amber-300", highlight: "bg-red-600", highlightHover: "hover:bg-red-700" },
];

type TimerMode = "stopwatch" | "countdown";

interface StoredData {
  teamA: { name: string; score: number };
  teamB: { name: string; score: number };
  round: number;
  theme: string;
}

const STORAGE_KEY = "tb_scoreboard";

function loadData(): StoredData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { teamA: { name: "", score: 0 }, teamB: { name: "", score: 0 }, round: 1, theme: "classic" };
}

function saveData(data: StoredData) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

export default function ScoreboardClient({
  locale = "en", dict, titleOverride, descriptionOverride,
}: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string; descriptionOverride?: string;
}) {
  const sb = (dict as any)?.scoreboard || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;
  const isRtl = locale === "ar";

  const [teamA, setTeamA] = useState({ name: "", score: 0 });
  const [teamB, setTeamB] = useState({ name: "", score: 0 });
  const [round, setRound] = useState(1);
  const [themeId, setThemeId] = useState("classic");
  const [editName, setEditName] = useState<"A" | "B" | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [manualInput, setManualInput] = useState<"A" | "B" | null>(null);
  const [manualValue, setManualValue] = useState("");

  // Timer
  const [timerMode, setTimerMode] = useState<TimerMode>("stopwatch");
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [countdownInput, setCountdownInput] = useState("300"); // 5 min default
  const [countdownRemaining, setCountdownRemaining] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const data = loadData();
    setTeamA(data.teamA);
    setTeamB(data.teamB);
    setRound(data.round);
    setThemeId(data.theme || "classic");
    if (!timerRunning && data.theme) {
      // restore countdown input
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const persist = useCallback((a: typeof teamA, b: typeof teamB, r: number, t: string) => {
    saveData({ teamA: a, teamB: b, round: r, theme: t });
  }, []);

  const theme = THEMES.find((t) => t.id === themeId) || THEMES[0];

  const updateTeamA = useCallback((updates: Partial<typeof teamA>) => {
    setTeamA((prev) => {
      const next = { ...prev, ...updates };
      persist(next, teamB, round, themeId);
      return next;
    });
  }, [teamB, round, themeId, persist]);

  const updateTeamB = useCallback((updates: Partial<typeof teamB>) => {
    setTeamB((prev) => {
      const next = { ...prev, ...updates };
      persist(teamA, next, round, themeId);
      return next;
    });
  }, [teamA, round, themeId, persist]);

  const changeScore = useCallback((team: "A" | "B", delta: number) => {
    if (team === "A") {
      setTeamA((prev) => {
        const next = { ...prev, score: prev.score + delta };
        persist(next, teamB, round, themeId);
        return next;
      });
    } else {
      setTeamB((prev) => {
        const next = { ...prev, score: prev.score + delta };
        persist(teamA, next, round, themeId);
        return next;
      });
    }
  }, [teamA, teamB, round, themeId, persist]);

  const swapScores = useCallback(() => {
    setTeamA((prevA) => {
      setTeamB((prevB) => {
        const newA = { ...prevA, score: prevB.score };
        const newB = { ...prevB, score: prevA.score };
        persist(newA, newB, round, themeId);
        return newB;
      });
      return { ...prevA, score: teamB.score };
    });
  }, [teamB.score, round, themeId, persist]);

  const resetAll = useCallback(() => {
    const a = { name: "", score: 0 };
    const b = { name: "", score: 0 };
    setTeamA(a); setTeamB(b); setRound(1);
    persist(a, b, 1, themeId);
    // reset timer
    if (timerRef.current) clearInterval(timerRef.current);
    setTimerRunning(false); setTimerSeconds(0); setCountdownRemaining(0);
  }, [themeId, persist]);

  // Timer logic
  useEffect(() => {
    if (timerRunning) {
      timerRef.current = setInterval(() => {
        if (timerMode === "stopwatch") {
          setTimerSeconds((s) => s + 1);
        } else {
          setCountdownRemaining((s) => {
            if (s <= 1) { setTimerRunning(false); return 0; }
            return s - 1;
          });
        }
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [timerRunning, timerMode]);

  const startTimer = () => {
    if (timerMode === "countdown" && countdownRemaining === 0) {
      const secs = parseInt(countdownInput) || 0;
      if (secs <= 0) return;
      setCountdownRemaining(secs);
    }
    setTimerRunning(true);
  };
  const stopTimer = () => setTimerRunning(false);
  const resetTimer = () => { setTimerRunning(false); setTimerSeconds(0); setCountdownRemaining(0); };

  const displayTime = timerMode === "stopwatch"
    ? timerSeconds
    : (timerRunning ? countdownRemaining : (parseInt(countdownInput) || 0));
  const mm = Math.floor(displayTime / 60);
  const ss = displayTime % 60;
  const timeStr = `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;

  const startEditName = (team: "A" | "B", current: string) => {
    setEditName(team); setNameInput(current);
  };
  const confirmEditName = () => {
    if (editName === "A") updateTeamA({ name: nameInput });
    else if (editName === "B") updateTeamB({ name: nameInput });
    setEditName(null);
  };
  const startManual = (team: "A" | "B") => {
    setManualInput(team); setManualValue("");
  };
  const confirmManual = () => {
    const val = parseInt(manualValue);
    if (!isNaN(val)) {
      changeScore(manualInput as "A" | "B", val - (manualInput === "A" ? teamA.score : teamB.score));
    }
    setManualInput(null);
  };

  const TeamPanel = ({ team, data }: { team: "A" | "B"; data: typeof teamA }) => (
    <div className={`flex-1 rounded-2xl border ${theme.border} ${theme.teamBg} p-4 sm:p-6 flex flex-col items-center gap-3`}>
      {/* Team name */}
      {editName === team ? (
        <div className="flex items-center gap-2 w-full">
          <input
            autoFocus
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && confirmEditName()}
            onBlur={confirmEditName}
            className={`flex-1 rounded-lg border ${theme.border} bg-white dark:bg-zinc-800 px-3 py-1.5 text-sm font-medium text-center ${theme.text}`}
            placeholder={team === "A" ? (sb.teamA || "Team A") : (sb.teamB || "Team B")}
            maxLength={20}
          />
        </div>
      ) : (
        <button
          onClick={() => startEditName(team, data.name)}
          className={`text-base sm:text-lg font-bold ${theme.text} hover:opacity-70 transition-opacity max-w-full truncate px-2`}
          title={sb.tapToEdit || "Tap to edit name"}
        >
          {data.name || (team === "A" ? (sb.teamA || "Team A") : (sb.teamB || "Team B"))}
          <span className="ml-1 text-xs opacity-40">✎</span>
        </button>
      )}

      {/* Score */}
      <div className={`text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter tabular-nums select-all ${theme.text}`}>
        {data.score}
      </div>

      {/* Quick buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {[1, 5, 10].map((n) => (
          <button
            key={`+${n}`}
            onClick={() => changeScore(team, n)}
            className={`rounded-xl ${theme.btn} px-4 py-2.5 text-lg font-bold transition-colors active:scale-95 min-w-[56px]`}
          >+{n}</button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {[1, 5, 10].map((n) => (
          <button
            key={`-${n}`}
            onClick={() => changeScore(team, -n)}
            className={`rounded-xl ${theme.btn} px-4 py-2.5 text-lg font-bold transition-colors active:scale-95 min-w-[56px]`}
          >-{n}</button>
        ))}
      </div>

      {/* Manual set */}
      {manualInput === team ? (
        <div className="flex items-center gap-2">
          <input
            autoFocus
            type="number"
            value={manualValue}
            onChange={(e) => setManualValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && confirmManual()}
            onBlur={confirmManual}
            className={`w-24 rounded-lg border ${theme.border} bg-white dark:bg-zinc-800 px-3 py-1.5 text-sm text-center ${theme.text}`}
          />
        </div>
      ) : (
        <button
          onClick={() => startManual(team)}
          className={`text-xs ${theme.text} opacity-50 hover:opacity-100 transition-opacity`}
        >
          {sb.manualSet || "Set score manually"}
        </button>
      )}
    </div>
  );

  return (
    <ToolLayout title={title} description={description} keywords={metadata.keywords} toolId={metadata.toolId} locale={locale as any} dict={dict}>
      <div className="mx-auto max-w-4xl">
        {/* Theme + Controls Bar */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium ${theme.text} opacity-60`}>{sb.theme || "Theme"}:</span>
            <select value={themeId} onChange={(e) => { setThemeId(e.target.value); persist(teamA, teamB, round, e.target.value); }}
              className={`rounded-lg border ${theme.border} bg-white dark:bg-zinc-800 px-2 py-1 text-xs ${theme.text}`}>
              {THEMES.map((t) => (<option key={t.id} value={t.id}>{t.name}</option>))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={swapScores} className={`rounded-lg border ${theme.border} px-3 py-1.5 text-xs font-medium ${theme.btn}`}>
              ⇄ {sb.swap || "Swap"}
            </button>
            <button onClick={resetAll} className="rounded-lg border border-red-300 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-100 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/50 transition-colors">
              ↺ {sb.reset || "Reset All"}
            </button>
          </div>
        </div>

        {/* Two Teams */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <TeamPanel team="A" data={teamA} />
          <div className={`hidden sm:flex items-center justify-center text-3xl font-black ${theme.text} opacity-30`}>VS</div>
          <div className={`flex sm:hidden items-center justify-center text-xl font-black ${theme.text} opacity-30`}>VS</div>
          <TeamPanel team="B" data={teamB} />
        </div>

        {/* Round counter + Timer */}
        <div className={`rounded-2xl border ${theme.border} ${theme.teamBg} p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4`}>
          {/* Round */}
          <div className="flex flex-col items-center gap-3">
            <span className={`text-xs font-medium ${theme.text} opacity-60`}>{sb.round || "Round"}</span>
            <div className="flex items-center gap-3">
              <button onClick={() => { const r = Math.max(1, round - 1); setRound(r); persist(teamA, teamB, r, themeId); }}
                className={`rounded-lg ${theme.btn} px-3 py-2 text-lg font-bold transition-colors active:scale-95`}>−</button>
              <span className={`text-4xl sm:text-5xl font-black tabular-nums min-w-[80px] text-center ${theme.text}`}>{round}</span>
              <button onClick={() => { const r = round + 1; setRound(r); persist(teamA, teamB, r, themeId); }}
                className={`rounded-lg ${theme.btn} px-3 py-2 text-lg font-bold transition-colors active:scale-95`}>+</button>
            </div>
          </div>

          {/* Timer */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <button onClick={() => { setTimerMode("stopwatch"); resetTimer(); }}
                className={`rounded-lg px-2 py-2 text-xs font-medium transition-colors ${timerMode === "stopwatch" ? `${theme.accent} ${theme.accentText}` : theme.btn}`}>
                ⏱ {sb.stopwatch || "Stopwatch"}
              </button>
              <button onClick={() => { setTimerMode("countdown"); resetTimer(); }}
                className={`rounded-lg px-2 py-2 text-xs font-medium transition-colors ${timerMode === "countdown" ? `${theme.accent} ${theme.accentText}` : theme.btn}`}>
                ⏰ {sb.countdown || "Countdown"}
              </button>
            </div>

            {/* Countdown setter */}
            {timerMode === "countdown" && !timerRunning && countdownRemaining === 0 && (
              <div className="flex items-center gap-2">
                <input type="number" value={countdownInput} onChange={(e) => setCountdownInput(e.target.value)}
                  className={`w-20 rounded-lg border ${theme.border} bg-white dark:bg-zinc-800 px-2 py-2 text-xs text-center ${theme.text}`}
                  min="1" step="1" />
                <span className={`text-xs ${theme.text} opacity-50`}>{sb.seconds || "sec"}</span>
              </div>
            )}

            <div className={`text-4xl sm:text-5xl font-black tabular-nums font-mono ${theme.text}`}>
              {timeStr}
            </div>

            <div className="flex gap-2">
              {!timerRunning ? (
                <button onClick={startTimer} className={`rounded-xl ${theme.highlight} ${theme.highlightHover} px-6 py-2 text-sm font-bold text-white transition-colors active:scale-95`}>
                  ▶ {sb.start || "Start"}
                </button>
              ) : (
                <button onClick={stopTimer} className={`rounded-xl bg-amber-500 hover:bg-amber-600 px-6 py-2 text-sm font-bold text-white transition-colors active:scale-95`}>
                  ⏸ {sb.pause || "Pause"}
                </button>
              )}
              <button onClick={resetTimer} className={`rounded-xl ${theme.btn} px-4 py-2 text-sm font-bold transition-colors active:scale-95`}>
                ↺
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-zinc-400">
          🎮 {sb.disclaimer || "For entertainment and casual use only. Not intended for professional or official scoring."}
        </p>
      </div>
    </ToolLayout>
  );
}
