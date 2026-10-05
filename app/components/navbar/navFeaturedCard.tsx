import CTAButton from "@/app/components/common/ctaButton";
import SkyVoiceWaveBars from "@/app/components/skyVoiceWaveBars";
import { NavFeaturedCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

// Promo card for a mega panel. All copy and the CTA come from the nav data (`featured` in navbar.data.tsx)
function NavFeaturedCard({ data, isActive, onNavigate, className }: NavFeaturedCardInterface) {
  return (
    <div
      className={twMerge(
        "flex h-full flex-col items-start justify-between rounded-xl border border-(--skyai-lavender-border) bg-(--skyai-lavender-bg) p-5",
        className,
      )}>
      <div>
        <SkyVoiceWaveBars tone="sky" isActive={isActive} className="skyai-voice-bars-calm mt-0 h-8" />
        <p className="pt-4 font-instrument-sans text-lg font-semibold text-(--text-main-color)">{data?.title}</p>
        <p className="pt-1.5 font-instrument-sans text-sm text-(--text-secondary-color)">{data?.subtitle}</p>
      </div>
      <CTAButton btnStyle="CTA_PRIMARY" href={data?.cta?.href} target={data?.cta?.target}>
        {data?.cta?.label}
      </CTAButton>
    </div>
  );
}

export default NavFeaturedCard;
