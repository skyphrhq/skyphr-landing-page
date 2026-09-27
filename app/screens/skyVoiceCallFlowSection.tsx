"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import SkyVoiceCallFlowScrubber from "@/app/components/skyVoiceCallFlowScrubber";
import SkyVoiceCallFlowStage from "@/app/components/skyVoiceCallFlowStage";
import SkyVoiceCallFlowSteps from "@/app/components/skyVoiceCallFlowSteps";
import { gsap, ScrollTrigger } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { SkyVoiceCallFlowSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { FocusEvent, PointerEvent, useCallback, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const STEP_SECONDS = 5.2;
// A dot lights up just before the fill reaches it, so seeking to a step always shows its dot as reached
const DOT_LIGHT_SECONDS = 0.3;
const LOOP_FADE_SECONDS = 0.4;

function SkyVoiceCallFlowSection({ data, classNames }: SkyVoiceCallFlowSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const activeIndexRef = useRef(0);
  // Everything that can pause autoplay; kept in a ref so pausing never re-renders
  const playbackRef = useRef({ canAutoplay: false, isInView: false, isHovered: false, isFocused: false });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const lastIndex = data.steps.length - 1;

  const showStep = useCallback((index: number) => {
    if (activeIndexRef.current === index) return;
    activeIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const syncPlayback = useCallback(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const { canAutoplay, isInView, isHovered, isFocused } = playbackRef.current;
    if (canAutoplay && isInView && !isHovered && !isFocused && !document.hidden) timeline.resume();
    else timeline.pause();
  }, []);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const fill = container.querySelector(".skyai-voice-flow-fill");
      const doneDots = gsap.utils.toArray<HTMLElement>(".skyai-voice-flow-dot-done");
      const finalDot = gsap.utils.toArray<HTMLElement>(".skyai-voice-flow-dot")[lastIndex];
      const completeLayer = container.querySelector(".skyai-voice-flow-dot-complete");
      const stepLines = gsap.utils.toArray<HTMLElement>(".skyai-voice-flow-step-line");
      // The track is split evenly between the marks; the fill slides in from the left (xPercent -100 = empty)
      const markPercent = 100 / lastIndex;

      // x: 0 drops the px translate GSAP parses from the SSR `translateX(-100%)`, so only xPercent moves them
      gsap.set([fill, ...stepLines], { x: 0, xPercent: -100 });

      // One master timeline drives the scrubber fill, the dots and every step's progress line, so they can't drift apart.
      // Step i runs from i * STEP_SECONDS; after the last step everything fades out and the timeline repeats.
      const timeline = gsap.timeline({
        paused: true,
        repeat: -1,
        defaults: { immediateRender: false },
        // Derive the step from the playhead instead of per-segment callbacks, so seeking and repeating always agree.
        // showStep only sets state when the step actually changes, not every frame.
        onUpdate: () => showStep(Math.min(lastIndex, Math.floor((timeline.time() + 1e-6) / STEP_SECONDS))),
      });

      data.steps.forEach((_, index) => {
        const start = index * STEP_SECONDS;
        timeline.addLabel(`step-${index}`, start);
        timeline.fromTo(stepLines[index], { xPercent: -100 }, { xPercent: 0, duration: STEP_SECONDS, ease: "none" }, start);

        if (index === lastIndex) return;
        // The fill eases from this mark to the next; the same distance every step, so the pace looks even
        timeline.fromTo(
          fill,
          { xPercent: -100 + index * markPercent },
          { xPercent: -100 + (index + 1) * markPercent, duration: STEP_SECONDS, ease: "power2.inOut" },
          start,
        );
        timeline.fromTo(
          doneDots[index + 1],
          { opacity: 0 },
          { opacity: 1, duration: DOT_LIGHT_SECONDS, ease: "power1.out" },
          start + STEP_SECONDS - DOT_LIGHT_SECONDS,
        );
      });

      // Last step: the fill is already at the final mark, so the final dot completes with a soft pulse instead
      const lastStart = lastIndex * STEP_SECONDS;
      timeline.fromTo(completeLayer, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, lastStart + 0.1);
      timeline.fromTo(finalDot, { scale: 1 }, { scale: 1.15, duration: 0.3, ease: "power2.out" }, lastStart + 0.1);
      timeline.fromTo(finalDot, { scale: 1.15 }, { scale: 1, duration: 0.45, ease: "power2.inOut" }, ">");

      // Loop: fade the fill and the reached dots out (the first dot stays, step 1 is next), then reset the empty fill
      const loopStart = data.steps.length * STEP_SECONDS;
      timeline.fromTo(
        [fill, ...doneDots.slice(1), completeLayer],
        { opacity: 1 },
        { opacity: 0, duration: LOOP_FADE_SECONDS, ease: "power1.inOut" },
        loopStart,
      );
      timeline.set(fill, { xPercent: -100, opacity: 1 }, loopStart + LOOP_FADE_SECONDS);

      timelineRef.current = timeline;

      // With reduced motion the timeline is only ever seeked (clicks jump straight to a step), never played
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        playbackRef.current.canAutoplay = true;

        const revealAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: container, start: "top 70%" });
        gsap.fromTo(".reveal-text-animation, .reveal-animation", revealAnimation.FROM, revealAnimation.TO);

        // "In view" = at least 35% of the section is on screen
        ScrollTrigger.create({
          trigger: container,
          start: "35% bottom",
          end: "65% top",
          onToggle: (self) => {
            playbackRef.current.isInView = self.isActive;
            setIsInView(self.isActive);
            syncPlayback();
          },
        });

        document.addEventListener("visibilitychange", syncPlayback);

        return () => {
          playbackRef.current.canAutoplay = false;
          document.removeEventListener("visibilitychange", syncPlayback);
          syncPlayback();
        };
      });

      return () => {
        timelineRef.current = null;
      };
    },
    { scope: containerRef },
  );

  // Clicking a step restarts the timeline from that step's start; it keeps playing unless something is pausing it
  const handleSelectStep = (index: number) => {
    showStep(index);
    timelineRef.current?.seek(`step-${index}`);
    syncPlayback();
  };

  // Mouse only: a tap on touch fires pointerenter without a matching leave, which would pause autoplay for good
  const handlePointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    playbackRef.current.isHovered = true;
    syncPlayback();
  };

  const handlePointerLeave = () => {
    playbackRef.current.isHovered = false;
    syncPlayback();
  };

  // Keyboard focus pauses; a mouse click also focuses the button, but that shouldn't keep autoplay paused after the mouse leaves
  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    playbackRef.current.isFocused = event.target.matches(":focus-visible");
    syncPlayback();
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (panelRef.current?.contains(event.relatedTarget as Node | null)) return;
    playbackRef.current.isFocused = false;
    syncPlayback();
  };

  return (
    <div
      ref={containerRef}
      id={data.id}
      className={twMerge("relative w-full h-auto scroll-mt-20 bg-(--root-white-color)", COMMON_SECTION_PADDING, classNames)}>
      <CommonSectionHeader
        header={data.header}
        className="pb-10! md:pb-16!"
        headerParentClass="tracking-tight"
        descriptionClass="max-w-170 text-(--skyai-voice-muted)"
      />

      <div className="skyphr-container">
        <div
          ref={panelRef}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="skyai-voice-panel reveal-animation mx-auto max-w-295 rounded-3xl p-4 sm:rounded-[32px] sm:p-7">
          <SkyVoiceCallFlowScrubber steps={data.steps} activeIndex={activeIndex} className="mx-1.5 mt-1 mb-5 sm:mx-3 sm:mb-7" />

          {/* Below xmd the stage sits above the steps */}
          <div className="grid grid-cols-1 gap-5 xmd:grid-cols-[0.92fr_1.08fr]">
            <SkyVoiceCallFlowSteps steps={data.steps} activeIndex={activeIndex} onSelect={handleSelectStep} />
            <SkyVoiceCallFlowStage
              data={data.stages}
              steps={data.steps}
              activeIndex={activeIndex}
              isAnimating={isInView}
              className="order-first xmd:order-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkyVoiceCallFlowSection;
