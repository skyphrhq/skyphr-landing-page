"use client";
import SkyVoiceBookedCard from "@/app/components/skyVoiceBookedCard";
import SkyVoiceLanguageSelector from "@/app/components/skyVoiceLanguageSelector";
import SkyVoiceTranscriptLine from "@/app/components/skyVoiceTranscriptLine";
import { SkyVoiceTranscriptInterface } from "@/app/utils/interface/common.interface";
import { useEffect, useRef } from "react";

const LANGUAGE_SWITCH_STAGGER_MS = 70;

function SkyVoiceTranscript({
  data,
  languages,
  language,
  onLanguageChange,
  names,
  lines,
  staggeredLineCount,
  phase,
}: SkyVoiceTranscriptInterface) {
  const listRef = useRef<HTMLDivElement>(null);

  // Keep the newest line in view as it types; scrolls only this panel, never the page
  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) listElement.scrollTop = listElement.scrollHeight;
  });

  return (
    // Absolutely fills its cell in the console, so its height always comes from the console and the list scrolls inside it
    <div className="skyai-voice-line-border absolute inset-0 flex min-h-0 flex-col rounded-[22px] border bg-(--root-white-color)">
      <div className="skyai-voice-line-border border-b px-5 py-4.5">
        <div className="flex items-center justify-between font-instrument-sans">
          <strong className="text-sm font-semibold text-(--text-main-color)">{data.title}</strong>
          <span lang={language.code} className="text-xs text-(--skyai-voice-muted)">
            {language.note}
          </span>
        </div>
        <SkyVoiceLanguageSelector
          data={languages}
          activeCode={language.code}
          onChange={onLanguageChange}
          className="mt-3.5"
        />
      </div>
      {/* data-lenis-prevent: let the wheel scroll this panel instead of Lenis scrolling the page */}
      <div
        ref={listRef}
        role="log"
        aria-live="polite"
        aria-label={data.title}
        tabIndex={0}
        data-lenis-prevent
        className="skyai-voice-scroll flex flex-1 flex-col gap-4.5 overflow-y-auto scroll-smooth rounded-b-[22px] px-5 pt-4.5 pb-5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-(--cta-button-background) motion-reduce:scroll-auto">
        {phase === "idle" && (
          <p className="m-auto max-w-55 text-center font-instrument-sans text-sm leading-normal text-(--skyai-voice-muted)">
            {data.emptyText}
          </p>
        )}
        {/* Keyed by language: switching remounts the lines, which replays their enter animation */}
        {lines.map((line, index) => (
          <SkyVoiceTranscriptLine
            key={`${language.code}-${index}`}
            line={line}
            name={names[line.speaker]}
            lang={language.code}
            enterDelayMs={index < staggeredLineCount ? index * LANGUAGE_SWITCH_STAGGER_MS : undefined}
          />
        ))}
        {phase === "ended" && (
          <SkyVoiceBookedCard
            key={language.code}
            data={language.booked}
            lang={language.code}
            enterDelayMs={staggeredLineCount > 0 ? staggeredLineCount * LANGUAGE_SWITCH_STAGGER_MS : undefined}
          />
        )}
      </div>
    </div>
  );
}

export default SkyVoiceTranscript;
