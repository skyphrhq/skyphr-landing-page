"use client";
import SkyVoiceCallFlowBubble from "@/app/components/skyVoiceCallFlowBubble";
import { gsap } from "@/app/lib/gsap";
import { SKY_VOICE_CALL_FLOW_STAGE_ANIMATION } from "@/app/utils/constants/animation.constant";
import { SkyVoiceCallFlowUnderstandStageInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { LuSparkles } from "react-icons/lu";

function SkyVoiceCallFlowUnderstandStage({ data }: SkyVoiceCallFlowUnderstandStageInterface) {
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
      <div className="skyai-voice-card flex flex-col gap-2 rounded-[18px] px-4.5 py-4">
        <div
          data-flow-delay={0.5}
          className="skyai-voice-flow-in mb-1 flex items-center gap-2 text-[13px] font-semibold text-(--cta-button-background)">
          <LuSparkles aria-hidden="true" className="size-3.75" />
          {data.detailsTitle}
        </div>
        {data.details.map((detail, index) => (
          <div
            key={detail.label}
            data-flow-delay={0.75 + index * 0.35}
            className="skyai-voice-flow-in flex items-center justify-between gap-3 rounded-xl bg-(--skyai-lavender-bg) px-3 py-2.5 text-sm">
            <span className="text-(--skyai-voice-muted)">{detail.label}</span>
            <strong className="font-semibold text-(--text-main-color)">{detail.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkyVoiceCallFlowUnderstandStage;
