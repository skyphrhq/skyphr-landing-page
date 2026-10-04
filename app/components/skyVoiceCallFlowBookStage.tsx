"use client";
import SkyVoiceCallFlowBubble from "@/app/components/skyVoiceCallFlowBubble";
import SkyVoiceCallFlowPill from "@/app/components/skyVoiceCallFlowPill";
import { gsap } from "@/app/lib/gsap";
import { SKY_VOICE_CALL_FLOW_STAGE_ANIMATION } from "@/app/utils/constants/animation.constant";
import { SkyVoiceCallFlowBookStageInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { Fragment, useRef } from "react";
import { LuCalendarCheck } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

function SkyVoiceCallFlowBookStage({ data }: SkyVoiceCallFlowBookStageInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".skyai-voice-flow-in", SKY_VOICE_CALL_FLOW_STAGE_ANIMATION.FROM, SKY_VOICE_CALL_FLOW_STAGE_ANIMATION.TO);
        // The booked slot pops in once Sky has offered it
        gsap.fromTo(
          ".skyai-voice-flow-slot-pick",
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, delay: 1.5, ease: "back.out(2.5)" },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="flex w-full max-w-105 flex-col gap-3.5 font-instrument-sans">
      <div data-flow-delay={0.1} className="skyai-voice-flow-in skyai-voice-card rounded-[18px] px-4.5 py-4">
        <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-(--cta-button-background)">
          <LuCalendarCheck aria-hidden="true" className="size-4" />
          {data.calendarTitle}
        </div>
        {/* Visual only; the bubble below says which slot is offered */}
        <div aria-hidden="true" className="grid grid-cols-[44px_repeat(5,1fr)] items-center gap-1.5">
          <span />
          {data.days.map((day) => (
            <b key={day} className="text-center text-xs font-semibold text-(--skyai-voice-muted)">
              {day}
            </b>
          ))}
          {data.times.map((time) => (
            <Fragment key={time}>
              <em className="text-xs not-italic tabular-nums text-(--skyai-voice-subtle)">{time}</em>
              {data.days.map((day) => {
                const slotId = `${day}-${time}`;
                return (
                  <span
                    key={slotId}
                    className={twMerge(
                      "skyai-voice-flow-slot relative h-6.5 rounded-lg",
                      data.busySlots.includes(slotId) && "is-busy",
                    )}>
                    {slotId === data.bookedSlot && (
                      <span className="skyai-voice-flow-slot-pick absolute -inset-px rounded-lg" />
                    )}
                  </span>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
      <SkyVoiceCallFlowBubble message={data.message} delay={0.7} className="skyai-voice-flow-in" />
      <SkyVoiceCallFlowPill label={data.status} delay={1.6} className="skyai-voice-flow-in" />
    </div>
  );
}

export default SkyVoiceCallFlowBookStage;
