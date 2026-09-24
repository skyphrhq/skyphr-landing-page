"use client";
import CTAButton from "@/app/components/common/ctaButton";
import CtaServiceButton from "@/app/components/common/ctaServiceBtn";
import SparkleIcon from "@/app/components/common/sparkleIcon";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import {
  SkyAiServiceCard,
  SkyAiServicesSection as SkyAiServicesSectionData,
} from "@/app/utils/interface/data.interface";
import { SkyAiServicesSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { HiCheckCircle } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

function SkyAiServicesSection({ data, classNames }: SkyAiServicesSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const titleElements = gsap.utils.toArray(".reveal-text-animation");
      const titleAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleElements, titleAnimation.FROM, titleAnimation.TO);

      const revealElements = gsap.utils.toArray(".reveal-animation");
      const revealAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 65%",
        end: "bottom top",
      });
      gsap.fromTo(revealElements, revealAnimation.FROM, revealAnimation.TO);
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id={data.id}
      className={twMerge(
        "w-full h-auto scroll-mt-20 bg-linear-to-b from-(--skyai-lavender-bg) to-(--root-white-color)",
        COMMON_SECTION_PADDING,

        classNames,
      )}>
      <div className="skyphr-container">
        <div className="flex flex-col items-center text-center pb-10 md:pb-15">
          <h2 className="font-instrument-sans text-(--text-main-color) text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-balance pt-6">
            {data.header.title.map((titleRow, rowIndex) => (
              <span className="reveal-text-animation block" key={rowIndex}>
                {titleRow.map((chunk, index) => (
                  <span
                    className={twMerge(
                      chunk?.variant === "italic" && "italic font-semibold font-playfair-display",
                      chunk?.classNames,
                    )}
                    key={index}>
                    {chunk.text}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          {data.header.description?.map((description, index) => (
            <p
              className="reveal-text-animation max-w-3xl font-instrument-sans text-base lg:text-lg xl:text-xl text-pretty text-(--text-secondary-color) pt-5"
              key={index}>
              {description.map((chunk, chunkIndex) => (
                <span className={twMerge(chunk?.classNames)} key={chunkIndex}>
                  {chunk.text}
                </span>
              ))}
            </p>
          ))}
        </div>

        {/* 3 × 2 on desktop, 2 columns on tablet, 1 on mobile; auto-rows-fr keeps every card the same height */}
        <div className="w-full max-w-280 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
          {data.cards.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
          {data.ctaCard && <ServiceCtaCard data={data.ctaCard} />}
        </div>
      </div>
    </div>
  );
}

// Tailwind v4 hover translate uses the `translate` property, so it doesn't fight GSAP's reveal transform
const CARD_BASE =
  "reveal-animation h-full flex flex-col rounded-[20px] p-6 md:p-8 transition-[translate,background-color,border-color] duration-200 hover:-translate-y-0.5";

function ServiceCard({ card }: { card: SkyAiServiceCard }) {
  return (
    <article
      id={card.id}
      className={twMerge(
        CARD_BASE,
        "scroll-mt-40 xl:scroll-mt-48 bg-(--root-white-color) border border-(--border-color) hover:bg-(--skyai-lavender-bg) hover:border-(--root-black-color)",
      )}>
      <div className="flex items-center gap-3.5">
        <span className="flex items-center justify-center shrink-0 size-11 rounded-xl bg-(--skyai-lavender-soft) text-xl text-(--cta-button-background)">
          {card.icon}
        </span>
        <h3 className="font-instrument-sans text-[22px] leading-tight font-semibold text-(--text-main-color)">
          {card.title}
        </h3>
      </div>

      <p className="font-instrument-sans text-[15px] leading-[1.55] text-(--text-secondary-color) pt-4">
        {card.description}
      </p>

      <ul className="flex flex-col gap-2.5 pt-5 pb-6">
        {card.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 font-instrument-sans text-[15px] text-(--text-main-color)">
            <HiCheckCircle className="shrink-0 text-lg text-(--cta-button-background)" />
            <span className="-mt-0.5">{point}</span>
          </li>
        ))}
      </ul>

      <CtaServiceButton
        href={card.link.href}
        label={card.link.label}
        theme="black"
        className="mt-auto text-sm md:text-[15px] lg:text-[15px]"
      />
    </article>
  );
}

function ServiceCtaCard({ data }: { data: NonNullable<SkyAiServicesSectionData["ctaCard"]> }) {
  return (
    // Solid brand blue through the text area, easing to the lighter shade only in the bottom-right corner, so white text stays AA
    <article
      className={twMerge(
        CARD_BASE,
        "relative overflow-hidden bg-linear-to-br from-(--cta-button-background) from-50% to-(--bg-blue-shade)",
      )}>
      <SparkleIcon className="absolute -right-10 -bottom-10 size-40 text-(--root-white-color) opacity-10 pointer-events-none animate-[spin_40s_linear_infinite] motion-reduce:animate-none" />

      <div className="w-full h-full flex flex-col items-start justify-between">
        <div>
          <span className="relative flex items-center justify-center shrink-0 size-11 rounded-xl bg-(--root-white-color)/15">
            <SparkleIcon className="size-5 text-(--root-white-color)" />
          </span>
          <h3 className="relative font-instrument-sans text-[22px] leading-tight font-semibold text-(--root-white-color) pt-4">
            {data.title}
          </h3>
          <p className="relative font-instrument-sans text-[15px] leading-[1.55] text-(--text-white-color)/90 pt-4 pb-6">
            {data.description}
          </p>
        </div>
        {/* Black fill (as in the hero) so the primary button stands out on the blue card */}
        <CTAButton
          btnStyle="CTA_SECONDARY"
          theme="LIGHT"
          href={data.cta.href}
          target={data.cta.target}
          rel={data.cta.rel}>
          {data.cta.label}
        </CTAButton>
      </div>
    </article>
  );
}

export default SkyAiServicesSection;
