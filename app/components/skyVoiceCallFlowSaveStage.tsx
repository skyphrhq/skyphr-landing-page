"use client";
import { gsap } from "@/app/lib/gsap";
import { SKY_VOICE_CALL_FLOW_STAGE_ANIMATION } from "@/app/utils/constants/animation.constant";
import { SkyVoiceCallFlowSaveStageInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { LuUserRound } from "react-icons/lu";

function SkyVoiceCallFlowSaveStage({ data }: SkyVoiceCallFlowSaveStageInterface) {
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
    <div ref={containerRef} className="flex w-full max-w-105 flex-col font-instrument-sans">
      <div data-flow-delay={0.1} className="skyai-voice-flow-in skyai-voice-card rounded-[18px] p-5">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-11 flex-none place-items-center rounded-full bg-(--skyai-lavender-bg) text-(--cta-button-background)">
            <LuUserRound className="size-5" />
          </span>
          <div className="min-w-0">
            <strong className="block text-base text-(--text-main-color)">{data.lead.name}</strong>
            <span className="text-[13px] text-(--skyai-voice-muted)">{data.lead.company}</span>
          </div>
          <span className="ml-auto flex-none rounded-full bg-(--skyai-voice-success-bg) px-2.5 py-1 text-xs font-semibold text-(--skyai-voice-green)">
            {data.lead.tag}
          </span>
        </div>
        <p className="mt-3.5 rounded-xl bg-(--skyai-lavender-bg) px-3.5 py-3 text-sm leading-[1.55] text-(--skyai-voice-body)">
          {data.summary}
        </p>
        <ul className="mt-3 flex flex-col">
          {data.items.map((item, index) => (
            <li
              key={item.label}
              data-flow-delay={0.6 + index * 0.25}
              className="skyai-voice-flow-in skyai-voice-line-border grid grid-cols-[20px_1fr_auto] items-center gap-2.5 border-t border-dashed py-2.5 text-sm">
              <span aria-hidden="true" className="text-[15px] text-(--cta-button-background)">
                {item.icon}
              </span>
              <span className="text-(--skyai-voice-muted)">{item.label}</span>
              <b className="font-semibold text-(--text-main-color)">{item.value}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkyVoiceCallFlowSaveStage;
