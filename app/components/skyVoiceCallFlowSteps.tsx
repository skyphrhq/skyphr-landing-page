"use client";
import SkyVoiceCallFlowStep from "@/app/components/skyVoiceCallFlowStep";
import { gsap } from "@/app/lib/gsap";
import { PrefersReducedMotion } from "@/app/utils/helpers/helper";
import { SkyVoiceCallFlowStepsInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function SkyVoiceCallFlowSteps({ steps, activeIndex, onSelect, className }: SkyVoiceCallFlowStepsInterface) {
  const listRef = useRef<HTMLOListElement>(null);
  const hasMountedRef = useRef(false);

  // Only the active step shows its description: expand it to its natural height, collapse the others
  useGSAP(
    () => {
      const duration = hasMountedRef.current && !PrefersReducedMotion() ? 0.45 : 0;
      hasMountedRef.current = true;

      gsap.utils.toArray<HTMLElement>(".skyai-voice-flow-step-body").forEach((body, index) => {
        const isActive = index === activeIndex;
        gsap.to(body, {
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0,
          duration,
          ease: "power3.out",
          overwrite: true,
          // GSAP ends on a pixel height; switch back to auto so the open step still fits if its text rewraps on resize.
          // The inline height always wins over the h-0 class, so collapsing animates from the real height.
          onComplete: isActive ? () => gsap.set(body, { height: "auto" }) : undefined,
        });
      });
    },
    { scope: listRef, dependencies: [activeIndex] },
  );

  return (
    <ol ref={listRef} className={twMerge("flex flex-col gap-1", className)}>
      {steps.map((step, index) => (
        <SkyVoiceCallFlowStep
          key={step.time}
          step={step}
          isActive={index === activeIndex}
          isPast={index < activeIndex}
          onSelect={() => onSelect(index)}
        />
      ))}
    </ol>
  );
}

export default SkyVoiceCallFlowSteps;
