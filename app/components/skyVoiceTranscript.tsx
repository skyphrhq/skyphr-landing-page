"use client";
import SkyVoiceBookedCard from "@/app/components/skyVoiceBookedCard";
import SkyVoiceTranscriptLine from "@/app/components/skyVoiceTranscriptLine";
import { SkyVoiceTranscriptInterface } from "@/app/utils/interface/common.interface";
import { useEffect, useRef } from "react";

function SkyVoiceTranscript({ data, booked, names, lines, phase }: SkyVoiceTranscriptInterface) {
  const listRef = useRef<HTMLDivElement>(null);

  // Keep the newest line in view as it types; scrolls only this panel, never the page
  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) listElement.scrollTop = listElement.scrollHeight;
  });

  return (
    // Absolutely fills its cell in the console, so its height always comes from the console and the list scrolls inside it
    <div className="skyai-voice-line-border absolute inset-0 flex min-h-0 flex-col rounded-[22px] border bg-(--root-white-color)">
      <div className="skyai-voice-line-border flex items-center justify-between border-b px-5 py-4.5 font-instrument-sans">
        <strong className="text-sm font-semibold text-(--text-main-color)">{data.title}</strong>
        <span className="text-xs text-(--skyai-voice-muted)">{data.note}</span>
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
        {lines.map((line, index) => (
          <SkyVoiceTranscriptLine key={index} line={line} name={names[line.speaker]} />
        ))}
        {phase === "ended" && <SkyVoiceBookedCard data={booked} />}
      </div>
    </div>
  );
}

export default SkyVoiceTranscript;
