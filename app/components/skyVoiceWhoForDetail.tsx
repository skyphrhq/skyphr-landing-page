"use client";
import SkyVoiceWhoForGreeting from "@/app/components/skyVoiceWhoForGreeting";
import { gsap } from "@/app/lib/gsap";
import { PrefersReducedMotion } from "@/app/utils/helpers/helper";
import { SkyVoiceWhoForDetailInterface } from "@/app/utils/interface/common.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { LuCheck } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

const OUT_SECONDS = 0.2;

function SkyVoiceWhoForDetail({
  industry,
  labels,
  isActive,
  isAnimating,
  tabId,
  panelId,
  className,
}: SkyVoiceWhoForDetailInterface) {
  const panelRef = useRef<HTMLDivElement>(null);
  const hasMountedRef = useRef(false);

  // Crossfade: the old detail fades out, then the new one rises in and its "handles" list staggers after it.
  // First render and reduced motion: just show or hide.
  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;
      const isInstant = !hasMountedRef.current || PrefersReducedMotion();
      hasMountedRef.current = true;

      if (isInstant) {
        gsap.set(panel, { autoAlpha: isActive ? 1 : 0, y: 0 });
        return;
      }

      if (!isActive) {
        gsap.to(panel, { autoAlpha: 0, duration: OUT_SECONDS, ease: "power1.out", overwrite: true });
        return;
      }

      const timeline = gsap.timeline({ delay: OUT_SECONDS });
      timeline.fromTo(
        panel,
        { autoAlpha: 0, y: 8 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out", overwrite: true },
      );
      timeline.fromTo(
        ".skyai-voice-who-handle",
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", stagger: 0.06 },
        0.1,
      );
    },
    { scope: panelRef, dependencies: [isActive] },
  );

  return (
    <div
      ref={panelRef}
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      tabIndex={isActive ? 0 : -1}
      className={twMerge(
        "skyai-voice-line-border flex flex-col rounded-[20px] border bg-(--root-white-color) px-4.5 py-5.5 font-instrument-sans focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--cta-button-background) sm:rounded-3xl sm:p-8",
        !isActive && "invisible opacity-0",
        className,
      )}>
      <div className="skyai-voice-line-border flex flex-wrap items-center gap-3.5 border-b pb-6">
        <span
          aria-hidden="true"
          className="grid size-11 flex-none place-items-center rounded-[13px] bg-(--skyai-lavender-soft) text-xl text-(--cta-button-background)">
          {industry.icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold tracking-[-0.015em] text-(--text-main-color)">{industry.name}</h3>
          <span className="text-[13.5px] text-(--skyai-voice-muted)">{industry.who}</span>
        </div>
        {/* <span className="ml-14.5 inline-flex h-8 items-center gap-1.5 rounded-full bg-(--skyai-lavender-soft) px-3 text-[13px] font-semibold whitespace-nowrap text-(--cta-button-background) sm:ml-0">
          <LuCalendarCheck aria-hidden="true" className="size-3.75" />
          {labels.books} {industry.books.toLowerCase()}
        </span> */}
      </div>

      <div className="skyai-voice-line-border border-b py-6.5">
        <span className="mb-3 block text-[13px] font-medium text-(--skyai-voice-subtle)">{labels.problem}</span>
        <p className="max-w-[34ch] text-xl leading-[1.35] font-medium tracking-[-0.02em] text-(--text-main-color) lg:text-2xl">
          {industry.problem}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-7 pt-6.5">
        <div>
          <span className="mb-3 block text-[13px] font-medium text-(--skyai-voice-subtle)">{labels.handles}</span>
          <ul className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
            {industry.handles.map((handle) => (
              <li
                key={handle}
                className="skyai-voice-who-handle skyai-voice-line-border flex items-start gap-3 border-t py-2.75 text-[14.5px] leading-normal text-(--skyai-voice-body) first:border-t-0 first:pt-0 sm:nth-2:border-t-0 sm:nth-2:pt-0">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-4.5 flex-none place-items-center rounded-full bg-(--cta-button-background) text-[11px] text-(--root-white-color)">
                  <LuCheck strokeWidth={3} />
                </span>
                {handle}
              </li>
            ))}
          </ul>
          {industry.important && (
            <p className="mt-3 text-[13.5px] leading-normal font-medium text-(--skyai-voice-red)">
              {industry.important}
            </p>
          )}
        </div>
        <div>
          <span className="mb-3 block text-[13px] font-medium text-(--skyai-voice-subtle)">{labels.answers}</span>
          <SkyVoiceWhoForGreeting
            name={labels.sky}
            greeting={industry.greeting}
            isAnimating={isActive && isAnimating}
          />
        </div>
      </div>

      {industry.note && (
        <p className="mt-auto flex items-center gap-2 pt-6 text-[13.5px] font-medium text-(--cta-button-background)">
          <span aria-hidden="true" className="skyai-voice-live-dot size-1.75 flex-none rounded-full" />
          {industry.note}
        </p>
      )}
    </div>
  );
}

export default SkyVoiceWhoForDetail;
