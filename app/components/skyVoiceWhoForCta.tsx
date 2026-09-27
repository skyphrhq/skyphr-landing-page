import CTAButton from "@/app/components/common/ctaButton";
import { SkyVoiceWhoForCtaInterface } from "@/app/utils/interface/common.interface";
import { LuArrowRight } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

function SkyVoiceWhoForCta({ data, isCompact = false, className }: SkyVoiceWhoForCtaInterface) {
  return (
    <div
      className={twMerge(
        "skyai-voice-who-cta skyai-voice-line-border flex flex-col items-start justify-between gap-5 rounded-3xl border bg-(--root-white-color) p-5.5",
        // Compact: stacked card that fits under the industry list; otherwise a full-width bar from sm up
        isCompact ? "gap-4 rounded-[18px] p-5" : "sm:flex-row sm:items-center sm:gap-6 sm:py-5.5 sm:pr-5.5 sm:pl-7",
        className,
      )}>
      <div className="flex flex-col gap-1 font-instrument-sans">
        <strong className="text-[17px] font-semibold tracking-[-0.015em] text-(--text-main-color)">{data.title}</strong>
        <span className="text-[14.5px] leading-normal text-(--skyai-voice-muted)">{data.description}</span>
      </div>
      <CTAButton
        btnStyle={data.button.variant}
        href={data.button.href}
        target={data.button.target}
        rel={data.button.rel}
        icon={<LuArrowRight aria-hidden="true" />}
        className={twMerge(
          "w-full min-w-0 shrink-0",
          !isCompact && "sm:w-fit sm:min-w-[270px]",
          data.button.classNames,
        )}>
        {data.button.label}
      </CTAButton>
    </div>
  );
}

export default SkyVoiceWhoForCta;
