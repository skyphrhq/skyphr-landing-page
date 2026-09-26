import CtaServiceButton from "@/app/components/common/ctaServiceBtn";
import { SKYAI_SERVICE_CARD_BASE } from "@/app/utils/constants/common.constant";
import { SkyAiServiceCardInterface } from "@/app/utils/interface/common.interface";
import { HiCheckCircle } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

function SkyAiServiceCard({ card }: SkyAiServiceCardInterface) {
  return (
    <article
      id={card.id}
      className={twMerge(
        SKYAI_SERVICE_CARD_BASE,
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

export default SkyAiServiceCard;
