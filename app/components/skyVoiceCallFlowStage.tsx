"use client";
import SkyVoiceCallFlowBookStage from "@/app/components/skyVoiceCallFlowBookStage";
import SkyVoiceCallFlowGreetStage from "@/app/components/skyVoiceCallFlowGreetStage";
import SkyVoiceCallFlowRingStage from "@/app/components/skyVoiceCallFlowRingStage";
import SkyVoiceCallFlowSaveStage from "@/app/components/skyVoiceCallFlowSaveStage";
import SkyVoiceCallFlowUnderstandStage from "@/app/components/skyVoiceCallFlowUnderstandStage";
import { gsap } from "@/app/lib/gsap";
import { PrefersReducedMotion } from "@/app/utils/helpers/helper";
import { SkyVoiceCallFlowStageInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

function SkyVoiceCallFlowStage({ data, steps, activeIndex, isAnimating, className }: SkyVoiceCallFlowStageInterface) {
  const stageRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  // The visual on screen lags the active step by the length of the exit animation
  const [displayedIndex, setDisplayedIndex] = useState(activeIndex);

  // Step changed: slide the current visual out, then swap. The new visual runs its own entrance when it mounts.
  useGSAP(
    () => {
      const inner = innerRef.current;
      if (!inner) return;

      // Switched back to the visual that's still leaving: bring it back instead of swapping
      if (activeIndex === displayedIndex) {
        gsap.to(inner, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out", overwrite: true });
        return;
      }

      gsap.to(inner, {
        opacity: 0,
        y: -8,
        duration: PrefersReducedMotion() ? 0 : 0.25,
        ease: "power2.in",
        // Kills an exit still running from a quick earlier click, so only the latest step is shown
        overwrite: true,
        onComplete: () => setDisplayedIndex(activeIndex),
      });
    },
    { scope: stageRef, dependencies: [activeIndex] },
  );

  // Runs before paint (useGSAP is a layout effect), after the new visual has hidden its elements for its entrance
  useGSAP(
    () => {
      gsap.set(innerRef.current, { opacity: 1, y: 0 });
    },
    { scope: stageRef, dependencies: [displayedIndex] },
  );

  const step = steps[displayedIndex];

  return (
    <div
      ref={stageRef}
      aria-live="polite"
      className={twMerge(
        "skyai-voice-card relative flex min-h-107.5 flex-col overflow-hidden rounded-3xl xmd:min-h-117.5",
        className,
      )}>
      <span
        aria-hidden="true"
        className="skyai-voice-flow-stage-glow pointer-events-none absolute top-[55%] left-1/2 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
      <div className="skyai-voice-line-border relative flex items-center gap-2 border-b px-5.5 py-4.5 font-instrument-sans text-[13px] font-semibold text-(--text-main-color)">
        <span aria-hidden="true" className="skyai-voice-live-dot size-2 rounded-full" />
        <span className="tabular-nums">{step.time}</span>
        {step.title}
      </div>
      <div ref={innerRef} className="relative grid flex-1 place-items-center px-4 py-5 sm:p-7">
        {displayedIndex === 0 && <SkyVoiceCallFlowRingStage data={data.ring} isAnimating={isAnimating} />}
        {displayedIndex === 1 && <SkyVoiceCallFlowGreetStage data={data.greet} />}
        {displayedIndex === 2 && <SkyVoiceCallFlowUnderstandStage data={data.understand} />}
        {displayedIndex === 3 && <SkyVoiceCallFlowBookStage data={data.book} />}
        {displayedIndex === 4 && <SkyVoiceCallFlowSaveStage data={data.save} />}
      </div>
    </div>
  );
}

export default SkyVoiceCallFlowStage;
