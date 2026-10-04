"use client";
import SkyVoiceCallFlowBubble from "@/app/components/skyVoiceCallFlowBubble";
import { gsap } from "@/app/lib/gsap";
import { SKY_VOICE_CALL_FLOW_STAGE_ANIMATION } from "@/app/utils/constants/animation.constant";
import { SkyVoiceCallFlowGreetStageInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { LuBuilding2 } from "react-icons/lu";

function SkyVoiceCallFlowGreetStage({ data }: SkyVoiceCallFlowGreetStageInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".skyai-voice-flow-in", SKY_VOICE_CALL_FLOW_STAGE_ANIMATION.FROM, SKY_VOICE_CALL_FLOW_STAGE_ANIMATION.TO);
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="flex w-full max-w-105 flex-col gap-3.5 font-instrument-sans">
      <SkyVoiceCallFlowBubble message={data.message} delay={0.1} className="skyai-voice-flow-in" />
      <div data-flow-delay={0.55} className="skyai-voice-flow-in skyai-voice-card rounded-[18px] px-4.5 py-4">
        <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-(--cta-button-background)">
          <LuBuilding2 aria-hidden="true" className="size-4" />
          {data.profileTitle}
        </div>
        <dl className="flex flex-col">
          {data.profile.map((row) => (
            <div
              key={row.label}
              className="skyai-voice-line-border flex justify-between gap-3 border-t border-dashed py-2.25 text-sm">
              <dt className="text-(--skyai-voice-muted)">{row.label}</dt>
              <dd className="text-right font-medium text-(--text-main-color)">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default SkyVoiceCallFlowGreetStage;
