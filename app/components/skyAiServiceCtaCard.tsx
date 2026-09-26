import CTAButton from "@/app/components/common/ctaButton";
import SparkleIcon from "@/app/components/common/sparkleIcon";
import { SKYAI_SERVICE_CARD_BASE } from "@/app/utils/constants/common.constant";
import { SkyAiServiceCtaCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyAiServiceCtaCard({ data, variant = "solid", className }: SkyAiServiceCtaCardInterface) {
  const isFrosted = variant === "frosted";

  return (
    // Solid: brand blue through the text area, easing to the lighter shade only in the bottom-right corner, so white text stays AA.
    // Frosted: glass panel for dark section backgrounds.
    <article
      className={twMerge(
        SKYAI_SERVICE_CARD_BASE,
        "relative overflow-hidden",
        isFrosted
          ? "bg-(--root-white-color)/10 border border-(--root-white-color)/20 backdrop-blur-md"
          : "bg-linear-to-br from-(--cta-button-background) from-50% to-(--bg-blue-shade)",
        className,
      )}>
      <SparkleIcon className="absolute -right-10 -bottom-10 size-40 text-(--root-white-color) opacity-10 pointer-events-none animate-[spin_40s_linear_infinite] motion-reduce:animate-none" />

      <div className="w-full h-full flex flex-col items-start justify-between">
        <div>
          <span
            className={twMerge(
              "relative flex items-center justify-center shrink-0 size-11 rounded-xl",
              isFrosted ? "bg-(--bg-blue-shade)" : "bg-(--root-white-color)/15",
            )}>
            <SparkleIcon className="size-5 text-(--root-white-color)" />
          </span>
          <h3 className="relative font-instrument-sans text-[22px] leading-tight font-semibold text-(--root-white-color) pt-4 card-text-reveal">
            {data.title}
          </h3>
          <p
            className={twMerge(
              "relative font-instrument-sans text-[15px] leading-[1.55] pt-4 pb-6 card-text-reveal",
              isFrosted ? "text-(--text-white-color)/80" : "text-(--text-white-color)/90",
            )}>
            {data.description}
          </p>
        </div>
        {/* Black fill (as in the hero) so the primary button stands out on the blue card */}
        <CTAButton
          btnStyle="CTA_SECONDARY"
          theme="LIGHT"
          href={data.cta.href}
          target={data.cta.target}
          rel={data.cta.rel}
          className={isFrosted ? "w-full xs:w-fit card-text-reveal" : undefined}>
          {data.cta.label}
        </CTAButton>
      </div>
    </article>
  );
}

export default SkyAiServiceCtaCard;
