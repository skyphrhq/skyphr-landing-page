"use client";
import { gsap } from "@/app/lib/gsap";
import { SkyAiScoreRingInterface } from "@/app/utils/interface/common.interface";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function SkyAiScoreRing({ score, max = 100, label, className }: SkyAiScoreRingInterface) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<SVGCircleElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);

  // Counts up from 0 the first time the ring scrolls into view; jumps straight to the score with reduced motion
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const render = (value: number) => {
      if (arcRef.current) arcRef.current.style.strokeDashoffset = `${CIRCUMFERENCE * (1 - value / max)}`;
      if (valueRef.current) valueRef.current.textContent = `${Math.round(value)}`;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      render(score);
      return;
    }

    const progress = { value: 0 };
    let tween: gsap.core.Tween | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        tween = gsap.to(progress, {
          value: score,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => render(progress.value),
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(wrapper);

    return () => {
      observer.disconnect();
      tween?.kill();
    };
  }, [score, max]);

  return (
    <div
      ref={wrapperRef}
      role="img"
      aria-label={`${label}: ${score} out of ${max}`}
      className={twMerge("relative aspect-square w-28 md:w-32 shrink-0", className)}>
      <svg viewBox="0 0 120 120" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="60" cy="60" r={RADIUS} fill="none" stroke="var(--skyai-lavender-border)" strokeWidth="10" />
        <circle
          ref={arcRef}
          cx="60"
          cy="60"
          r={RADIUS}
          fill="none"
          stroke="var(--cta-button-background)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
      </svg>
      <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center font-instrument-sans">
        <span className="flex items-baseline">
          <span
            ref={valueRef}
            className="text-3xl md:text-[34px] font-bold leading-none tracking-tight text-(--cta-button-background) tabular-nums">
            0
          </span>
          <span className="text-sm font-semibold text-(--text-secondary-color)">/{max}</span>
        </span>
      </span>
    </div>
  );
}

export default SkyAiScoreRing;
