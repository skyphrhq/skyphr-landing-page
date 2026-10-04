"use client";
import { gsap } from "@/app/lib/gsap";
import { SkyVoiceWhoForGreetingInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const BAR_COUNT = 9;

function SkyVoiceWhoForGreeting({ name, greeting, isAnimating }: SkyVoiceWhoForGreetingInterface) {
  const bubbleRef = useRef<HTMLDivElement>(null);

  // Subtle looping waveform; reverted (back to the static bars) as soon as it shouldn't run, and on unmount
  useGSAP(
    () => {
      if (!isAnimating) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".skyai-voice-who-bar",
          { scaleY: 0.25 },
          {
            scaleY: 1,
            duration: 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: (index: number) => (index % 5) * 0.14,
          },
        );
      });
    },
    { scope: bubbleRef, dependencies: [isAnimating], revertOnUpdate: true },
  );

  return (
    <div
      ref={bubbleRef}
      className="skyai-voice-bubble-sky rounded-[20px] rounded-br-md px-4.5 pt-3.5 pb-4 font-instrument-sans text-(--root-white-color)">
      <div className="flex items-center justify-between text-xs font-semibold opacity-80">
        <span>{name}</span>
        <span aria-hidden="true" className="flex h-3.5 items-center gap-0.5">
          {Array.from({ length: BAR_COUNT }, (_, index) => (
            <i
              key={index}
              className="skyai-voice-who-bar block h-full w-0.5 rounded-full bg-(--root-white-color)"
              style={{ transform: "scaleY(0.45)" }}
            />
          ))}
        </span>
      </div>
      <p className="mt-2 text-[15px] leading-[1.55]">{greeting}</p>
    </div>
  );
}

export default SkyVoiceWhoForGreeting;
