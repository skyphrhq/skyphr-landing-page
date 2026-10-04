import CTAButton from "@/app/components/common/ctaButton";
import SkyAiScoreRing from "@/app/components/skyAiScoreRing";
import { SkyAiLensCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyAiLensCard({ data }: SkyAiLensCardInterface) {
  return (
    <article className="h-full rounded-3xl bg-(--root-white-color) p-5 sm:p-7 xl:p-8 flex flex-col xl:flex-row xl:items-stretch gap-6 xl:gap-8">
      <div className="flex-1 min-w-0 flex flex-col items-start justify-center h-full">
        <h3 className="font-instrument-sans text-2xl lg:text-[26px] font-bold tracking-tight leading-tight text-(--text-main-color) text-balance card-text-reveal">
          {data.title}
        </h3>
        <p className="font-instrument-sans text-[15px] leading-[1.55] text-(--text-secondary-color) text-pretty pt-3 pb-6 card-text-reveal">
          {data.description}
        </p>
        <CTAButton
          btnStyle="CTA_SECONDARY"
          href={data.cta.href}
          target={data.cta.target}
          rel={data.cta.rel}
          className="w-full xs:w-fit card-text-reveal">
          {data.cta.label}
        </CTAButton>
      </div>

      {/* Sample audit result, drawn in HTML/SVG so it stays crisp and animates */}
      <div className="flex flex-col xs:flex-row items-center gap-5 rounded-2xl border border-(--skyai-lavender-border) bg-(--skyai-lavender-bg) p-4 sm:p-5 xl:shrink-0">
        <SkyAiScoreRing score={data.score} label={data.scoreLabel} />
        <ul aria-label="Top issues found" className="w-full xs:w-auto flex flex-col gap-2">
          {data.issues.map((issue) => (
            <li
              key={issue.label}
              className="flex items-center gap-2.5 rounded-xl bg-(--root-white-color) px-3 py-2 font-instrument-sans text-sm font-medium text-(--text-main-color) whitespace-nowrap card-text-reveal">
              <span
                aria-hidden="true"
                className={twMerge(
                  "size-2 shrink-0 rounded-full",
                  issue.severity === "high" ? "bg-red-500" : "bg-amber-500",
                )}
              />
              {issue.label}
              <span className="sr-only">({issue.severity === "high" ? "high" : "medium"} priority)</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default SkyAiLensCard;
