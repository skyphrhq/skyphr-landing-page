"use client";
import SkyVoiceCallControl from "@/app/components/skyVoiceCallControl";
import SkyVoiceCallParty from "@/app/components/skyVoiceCallParty";
import SkyVoiceOrbSkeleton from "@/app/components/skyVoiceOrbSkeleton";
import SkyVoiceTranscript from "@/app/components/skyVoiceTranscript";
import { FormatCallTime } from "@/app/utils/helpers/helper";
import {
  SkyVoiceCallConsoleInterface,
  SkyVoiceCallPhase,
  SkyVoiceTranscriptLine,
} from "@/app/utils/interface/common.interface";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { LuUserRound } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

// The Spline runtime only loads in the browser; the skeleton has the same footprint, so nothing shifts when it swaps in
const SkyVoiceOrb = dynamic(() => import("@/app/components/skyVoiceOrb"), {
  ssr: false,
  loading: () => <SkyVoiceOrbSkeleton />,
});

const TYPING_SPEED_MS = 26;
const LINE_PAUSE_MS = 800;
const END_DELAY_MS = 600;
const AUTO_START_DELAY_MS = 700;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeToReducedMotion = (onChange: () => void) => {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
};
const getReducedMotion = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;
const getServerReducedMotion = () => false;

// The transcript language lives in the URL, so a reload keeps it. Read straight from `window.location` instead of
// `useSearchParams`, which would force the whole page out of static rendering
const LANGUAGE_CHANGE_EVENT = "skyai-voice-language-change";
const subscribeToLanguageParam = (onChange: () => void) => {
  window.addEventListener("popstate", onChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onChange);
  };
};
const getServerLanguageParam = () => null;

const getSecondsSince = (startedAt: number) => Math.floor((Date.now() - startedAt) / 1000);

// Where each line would start if typed at normal speed; used to show real-looking timestamps without the animation
const getScriptTimeline = (script: { characters: string[] }[]) => {
  const starts: number[] = [];
  let elapsedMs = 0;
  for (const line of script) {
    starts.push(Math.floor(elapsedMs / 1000));
    elapsedMs += line.characters.length * TYPING_SPEED_MS + LINE_PAUSE_MS;
  }
  return { starts, totalSeconds: Math.floor(elapsedMs / 1000) };
};

function SkyVoiceCallConsole({ data, className }: SkyVoiceCallConsoleInterface) {
  const [phase, setPhase] = useState<SkyVoiceCallPhase>("idle");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [timestamps, setTimestamps] = useState<number[]>([]);
  const [staggeredLineCount, setStaggeredLineCount] = useState(0);
  const consoleRef = useRef<HTMLDivElement>(null);
  const startedAtRef = useRef(0);
  const reducedMotion = useSyncExternalStore(subscribeToReducedMotion, getReducedMotion, getServerReducedMotion);

  const { queryParam, defaultCode, options } = data.languages;
  const languageParam = useSyncExternalStore(
    subscribeToLanguageParam,
    () => new URLSearchParams(window.location.search).get(queryParam),
    getServerLanguageParam,
  );
  // Unknown or missing `?lang=` falls back to the default language
  const language =
    options.find((option) => option.code === languageParam) ??
    options.find((option) => option.code === defaultCode) ??
    options[0];

  // Split into code points so the typewriter never cuts a character in half
  const script = useMemo(
    () => language.script.map((line) => ({ ...line, characters: Array.from(line.text) })),
    [language.script],
  );

  const scriptTimeline = useMemo(() => getScriptTimeline(script), [script]);

  const startCall = useCallback(() => {
    setCharIndex(0);
    setStaggeredLineCount(0);
    if (reducedMotion) {
      // No typing animation: show the finished call straight away
      setTimestamps(scriptTimeline.starts);
      setElapsedSeconds(scriptTimeline.totalSeconds);
      setLineIndex(script.length);
      setPhase("ended");
      return;
    }
    startedAtRef.current = Date.now();
    setTimestamps([0]);
    setElapsedSeconds(0);
    setLineIndex(0);
    setPhase("live");
  }, [reducedMotion, script.length, scriptTimeline]);

  const endCall = () => {
    const endedAt = getSecondsSince(startedAtRef.current);
    setTimestamps((previous) => script.map((_, index) => previous[index] ?? endedAt));
    setLineIndex(script.length);
    setPhase("ended");
  };

  // `startCall` changes with the language; the ref lets the auto-play effect below run once and still call the latest one
  const startCallRef = useRef(startCall);
  useEffect(() => {
    startCallRef.current = startCall;
  }, [startCall]);

  // Auto-play once, the first time the console scrolls into view (switching language must not restart the call)
  useEffect(() => {
    const consoleElement = consoleRef.current;
    if (!consoleElement) return;

    let timeoutId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timeoutId = window.setTimeout(() => startCallRef.current(), AUTO_START_DELAY_MS);
      },
      { threshold: 0.2 },
    );
    observer.observe(consoleElement);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, []);

  // Typewriter: one character at a time, a pause between lines, then the "booked" card
  useEffect(() => {
    if (phase !== "live") return;

    if (lineIndex >= script.length) {
      const timeoutId = window.setTimeout(() => setPhase("ended"), END_DELAY_MS);
      return () => window.clearTimeout(timeoutId);
    }

    if (charIndex < script[lineIndex].characters.length) {
      const timeoutId = window.setTimeout(() => setCharIndex((current) => current + 1), TYPING_SPEED_MS);
      return () => window.clearTimeout(timeoutId);
    }

    const timeoutId = window.setTimeout(() => {
      const nextLineIndex = lineIndex + 1;
      if (nextLineIndex < script.length) {
        setTimestamps((previous) => [...previous, getSecondsSince(startedAtRef.current)]);
      }
      setLineIndex(nextLineIndex);
      setCharIndex(0);
    }, LINE_PAUSE_MS);
    return () => window.clearTimeout(timeoutId);
  }, [phase, lineIndex, charIndex, script]);

  // Call timer, measured from the start so it stays accurate if the tab throttles timers
  useEffect(() => {
    if (phase !== "live") return;
    const intervalId = window.setInterval(() => setElapsedSeconds(getSecondsSince(startedAtRef.current)), 500);
    return () => window.clearInterval(intervalId);
  }, [phase]);

  const activeLine = phase === "live" ? script[lineIndex] : undefined;
  const speaker = activeLine && charIndex < activeLine.characters.length ? activeLine.speaker : null;

  const visibleLineCount = phase === "idle" ? 0 : phase === "ended" ? script.length : Math.min(lineIndex + 1, script.length);
  const transcriptLines: SkyVoiceTranscriptLine[] = script.slice(0, visibleLineCount).map((line, index) => {
    const isTyping = phase === "live" && index === lineIndex && charIndex < line.characters.length;
    return {
      speaker: line.speaker,
      text: isTyping ? line.characters.slice(0, charIndex).join("") : line.text,
      timestamp: timestamps[index] ?? 0,
      isTyping,
    };
  });

  // The call keeps its place (phase, line, timestamps); only the text changes, and the visible lines fade back in
  const handleLanguageChange = (code: string) => {
    if (code === language.code) return;
    const url = new URL(window.location.href);
    if (code === defaultCode) url.searchParams.delete(queryParam);
    else url.searchParams.set(queryParam, code);
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
    setStaggeredLineCount(visibleLineCount);
  };

  return (
    <div
      ref={consoleRef}
      className={twMerge(
        "skyai-voice-console grid w-full grid-cols-1 gap-3.5 rounded-3xl p-2 text-left sm:rounded-[32px] sm:p-3.5 xmd:grid-cols-[1.45fr_1fr]",
        className,
      )}>
      <div className="skyai-voice-stage relative flex flex-col rounded-[22px] px-3.5 py-4.5 sm:px-6 sm:pt-5.5 sm:pb-6">
        <div className="flex items-center justify-between font-instrument-sans text-[13px] font-semibold">
          <span className="inline-flex items-center gap-2 text-(--text-main-color)">
            <span
              aria-hidden="true"
              className={twMerge(
                "size-2 rounded-full bg-(--skyai-voice-idle)",
                phase === "live" && "skyai-voice-live-dot skyai-voice-blink",
              )}
            />
            {data.statusLabels[phase]}
          </span>
          <span className="tabular-nums text-(--skyai-voice-muted)">
            <span className="sr-only">Call duration </span>
            {FormatCallTime(elapsedSeconds)}
          </span>
        </div>

        {/* Mobile: orb on its own row, caller and Sky side by side below it. sm and up: caller | orb | Sky */}
        <div className="grid flex-1 grid-cols-2 items-start gap-x-2 gap-y-1 py-2 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-2">
          <SkyVoiceCallParty
            participant={data.caller}
            tone="caller"
            avatar={<LuUserRound className="size-6.5" />}
            isSpeaking={speaker === "caller"}
            activityLabels={data.activityLabels}
          />

          <div className="relative col-span-2 row-start-1 aspect-square w-60 justify-self-center sm:col-span-1 sm:row-start-auto sm:w-[clamp(240px,21vw,310px)]">
            <span aria-hidden="true" className="skyai-voice-orb-glow absolute inset-[14%] rounded-full" />
            <SkyVoiceOrb reducedMotion={reducedMotion} />
          </div>

          <SkyVoiceCallParty
            participant={data.sky}
            tone="sky"
            avatar={data.sky.initial}
            isSpeaking={speaker === "sky"}
            activityLabels={data.activityLabels}
          />
        </div>

        <SkyVoiceCallControl phase={phase} labels={data.controlLabels} onStart={startCall} onEnd={endCall} />
      </div>

      {/* The transcript never sizes the console: stacked it gets a fixed height, side by side it fills the row
          (at least 520px, or the stage's height if that's taller) and scrolls its lines, booked card included.
          So switching language can never change the card's height */}
      <div className="relative h-115 xmd:h-auto xmd:min-h-130">
        <SkyVoiceTranscript
          data={data.transcript}
          languages={data.languages}
          language={language}
          onLanguageChange={handleLanguageChange}
          names={{ caller: data.caller.name, sky: data.sky.name }}
          lines={transcriptLines}
          staggeredLineCount={staggeredLineCount}
          phase={phase}
        />
      </div>
    </div>
  );
}

export default SkyVoiceCallConsole;
