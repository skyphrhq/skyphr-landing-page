"use client";
import CTAButton from "@/app/components/common/ctaButton";
import SkyAiStatusPill from "@/app/components/skyAiStatusPill";
import { SkyAiSkyAgentCardInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";
import { HiPhone, HiPlay } from "react-icons/hi2";

function SkyAiSkyAgentCard({ data }: SkyAiSkyAgentCardInterface) {
  return (
    <article className="relative overflow-hidden rounded-[28px] bg-(--root-white-color) grid grid-cols-1 lg:grid-cols-[55fr_45fr]">
      <div className="p-5 pb-6 sm:p-8 lg:p-10 xl:p-12 xl:pr-6 relative z-10">
        <SkyAiStatusPill label={data.status} tone="green" pulse />

        <h3 className="font-instrument-sans text-[28px] sm:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-(--text-main-color) text-balance pt-4 card-text-reveal">
          {data.title}
        </h3>
        <p className="max-w-xl font-instrument-sans text-base lg:text-[17px] leading-[1.6] text-(--text-secondary-color) text-pretty pt-3 card-text-reveal">
          {data.description}
        </p>

        {/* Scrolls sideways below lg so the long values ("Multilingual") never squeeze or wrap */}
        <ul
          tabIndex={0}
          aria-label="Sky at a glance"
          className="skyai-subnav-scroll -mx-5 px-5 sm:mx-0 sm:px-0 flex gap-3 overflow-x-auto pt-6 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {data.stats.map((stat) => (
            <li
              key={stat.value}
              className="shrink-0 min-w-38 lg:min-w-0 rounded-2xl bg-(--skyai-lavender-soft) px-4 py-3.5 card-text-reveal">
              <p className="font-instrument-sans text-lg xl:text-xl font-bold leading-tight tracking-tight text-(--cta-button-background) whitespace-nowrap">
                {stat.value}
              </p>
              <p className="font-instrument-sans text-sm text-(--text-secondary-color) pt-1">{stat.label}</p>
            </li>
          ))}
        </ul>

        <ul aria-label="Built with" className="flex flex-wrap gap-2 pt-5">
          {data.stack.map((chip) => (
            <li
              key={chip.label}
              className="flex items-center gap-2 rounded-full border border-(--skyai-lavender-border) px-3.5 py-1.5 font-instrument-sans text-sm font-medium text-(--text-main-color) card-text-reveal">
              <span className="text-base text-(--cta-button-background)" aria-hidden="true">
                {chip.icon}
              </span>
              {chip.label}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 pt-7">
          <CTAButton
            type="button"
            btnStyle="CTA_PRIMARY"
            aria-haspopup="dialog"
            icon={<HiPlay aria-hidden="true" />}
            className="w-full sm:w-fit min-w-0 card-text-reveal">
            {data.demo.label}
          </CTAButton>
          <CTAButton type="button" btnStyle="CTA_SECONDARY" aria-haspopup="dialog" className="w-full sm:w-fit card-text-reveal">
            <span className="flex items-center gap-2">
              <HiPhone className="size-4" aria-hidden="true" />
              {data.liveCall.label}
            </span>
          </CTAButton>
        </div>
      </div>

      {/* Anchored to the bottom so the phone runs off the card edge. It bleeds 12px below the card so the float never shows a gap */}
      <div className="relative flex items-end justify-center lg:justify-end card-text-reveal">
        <div className="w-full max-w-2xl lg:max-w-none -mt-10">
          <Image
            src={data.imageOptions.imagePath}
            alt={data.imageOptions.alt}
            width={data.imageOptions.width}
            height={data.imageOptions.height}
            sizes="(min-width: 1540px) 700px, (min-width: 1024px) 45vw, (min-width: 672px) 672px, 100vw"
            loading="lazy"
            className="block w-full h-auto object-contain object-bottom"
          />
        </div>
      </div>
    </article>
  );
}

export default SkyAiSkyAgentCard;
