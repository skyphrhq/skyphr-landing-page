import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { SkyAiChallengeCardInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function SkyAiChallengeCard({ card }: SkyAiChallengeCardInterface) {
  return (
    <article
      className={twMerge(
        "reveal-animation h-full flex flex-col bg-(--root-white-color) border border-(--skyai-lavender-border) p-2.5 md:p-4",
        COMMON_BORDER_RADIUS,
      )}>
      <span className="flex items-center justify-center shrink-0 size-12 md:size-14 rounded-xl bg-(--skyai-lavender-soft) text-2xl md:text-[28px] text-(--cta-button-background)">
        {card.icon}
      </span>
      <div className="pt-5">
        <h3 className="font-instrument-sans text-xl lg:text-2xl leading-tight font-bold text-(--text-main-color) text-balance pt-1">
          {card.title}
        </h3>
        <p className="font-instrument-sans text-[15px] leading-[1.55] text-(--text-secondary-color) pt-3 pb-6">
          {card.description}
        </p>
      </div>

      <Image
        alt={card.imageOptions.alt}
        title={card.imageOptions.alt}
        src={card.imageOptions.imagePath}
        width={card.imageOptions.width}
        height={card.imageOptions.height}
        loading="lazy"
        sizes="(min-width: 768px) 50vw, 100vw"
        className={twMerge("mt-auto w-full h-auto object-cover object-center bg-(--skyai-lavender-bg)", COMMON_BORDER_RADIUS)}
      />
    </article>
  );
}

export default SkyAiChallengeCard;
