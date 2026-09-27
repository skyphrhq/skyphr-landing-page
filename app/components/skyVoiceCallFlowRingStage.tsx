"use client";
import SkyVoiceCallFlowPill from "@/app/components/skyVoiceCallFlowPill";
import { gsap } from "@/app/lib/gsap";
import { SKY_VOICE_CALL_FLOW_STAGE_ANIMATION } from "@/app/utils/constants/animation.constant";
import { SkyVoiceCallFlowRingStageInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { LuPhone } from "react-icons/lu";

function SkyVoiceCallFlowRingStage({ data, isAnimating }: SkyVoiceCallFlowRingStageInterface) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringingRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".skyai-voice-flow-in", SKY_VOICE_CALL_FLOW_STAGE_ANIMATION.FROM, SKY_VOICE_CALL_FLOW_STAGE_ANIMATION.TO);

        // Looping "ringing" loop: three pulses rolling outwards and a phone shake. Paused while the section is off screen.
        const ringing = gsap.timeline({ paused: true });
        ringing.fromTo(
          ".skyai-voice-flow-ring-wave",
          { scale: 0.75, opacity: 0.9 },
          { scale: 1.55, opacity: 0, duration: 2.4, ease: "power2.out", stagger: { each: 0.8, repeat: -1 } },
          0,
        );
        ringing.to(
          ".skyai-voice-flow-ring-core",
          {
            keyframes: {
              "0%": { rotation: 0 },
              "60%": { rotation: 0 },
              "64%": { rotation: -8 },
              "68%": { rotation: 8 },
              "72%": { rotation: -5 },
              "76%": { rotation: 3 },
              "80%": { rotation: 0 },
              "100%": { rotation: 0 },
            },
            duration: 2.4,
            ease: "none",
            repeat: -1,
          },
          0,
        );
        ringingRef.current = ringing;

        return () => {
          ringingRef.current = null;
        };
      });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (isAnimating) ringingRef.current?.play();
    else ringingRef.current?.pause();
  }, [isAnimating]);

  return (
    <div ref={containerRef} className="flex w-full max-w-105 flex-col items-center gap-5.5">
      <div aria-hidden="true" className="relative grid size-42.5 place-items-center">
        <span className="skyai-voice-flow-ring-wave absolute inset-7.5 rounded-full" />
        <span className="skyai-voice-flow-ring-wave absolute inset-7.5 rounded-full" />
        <span className="skyai-voice-flow-ring-wave absolute inset-7.5 rounded-full" />
        <span className="skyai-voice-flow-ring-core relative grid size-26 place-items-center rounded-full text-(--root-white-color)">
          <LuPhone className="size-7.5" />
        </span>
      </div>
      <div data-flow-delay={0.15} className="skyai-voice-flow-in flex flex-col gap-1 text-center font-instrument-sans">
        <strong className="text-xl tracking-[-0.02em] text-(--text-main-color)">{data.title}</strong>
        <span className="text-sm tabular-nums text-(--skyai-voice-muted)">{data.number}</span>
      </div>
      <SkyVoiceCallFlowPill label={data.status} delay={0.9} className="skyai-voice-flow-in" />
    </div>
  );
}

export default SkyVoiceCallFlowRingStage;
