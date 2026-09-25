import CTAButton from "@/app/components/common/ctaButton";
import SparkleIcon from "@/app/components/common/sparkleIcon";
import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { SkyAiChallengeCtaCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyAiChallengeCtaCard({ data }: SkyAiChallengeCtaCardInterface) {
  return (
    // Dark banner (vs. the blue services CTA) with a brand-blue glow, so it reads as the answer to the four problems above
    <article
      className={twMerge(
        "reveal-animation relative overflow-hidden mt-4 lg:mt-6 bg-(--root-black-color) p-6 md:p-8 lg:p-10",
        COMMON_BORDER_RADIUS,
      )}>
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-96 pointer-events-none bg-[radial-gradient(closest-side,rgba(105,116,226,0.45),transparent)]"
      />
      <SparkleIcon className="absolute right-6 -bottom-12 size-40 text-(--bg-blue-shade) opacity-20 pointer-events-none animate-[spin_40s_linear_infinite] motion-reduce:animate-none" />

      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
        <div className="flex items-start gap-4">
          <span className="flex items-center justify-center shrink-0 size-12 md:size-14 rounded-xl bg-(--cta-button-background)">
            <SparkleIcon className="size-6 text-(--root-white-color)" />
          </span>
          <div>
            <h3 className="font-instrument-sans text-xl lg:text-2xl leading-tight font-bold text-(--root-white-color) text-balance">
              {data.title}
            </h3>
            <p className="max-w-2xl font-instrument-sans text-[15px] leading-[1.55] text-(--text-white-color)/75 pt-2">
              {data.description}
            </p>
          </div>
        </div>

        <CTAButton
          btnStyle="CTA_PRIMARY"
          href={data.cta.href}
          target={data.cta.target}
          rel={data.cta.rel}
          className="shrink-0 self-start md:self-auto">
          {data.cta.label}
        </CTAButton>
      </div>
    </article>
  );
}

export default SkyAiChallengeCtaCard;
