import { SkyVoiceIntegrationCardInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function SkyVoiceIntegrationCard({ data, className }: SkyVoiceIntegrationCardInterface) {
  return (
    <article
      className={twMerge(
        "flex flex-col rounded-[20px] border p-6 font-instrument-sans",
        // The open-ended "Your tools" card is white with a dashed brand border, inviting a conversation
        data.isOpenEnded
          ? "border-dashed border-(--cta-button-background)/25 bg-(--root-white-color)"
          : "skyai-voice-integration-card skyai-voice-line-border",
        className,
      )}>
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="skyai-voice-line-border grid size-9 flex-none place-items-center rounded-[10px] border bg-(--root-white-color) text-lg text-(--cta-button-background)">
          {data.icon}
        </span>
        <h4 className="text-base font-semibold text-(--text-main-color)">{data.name}</h4>
        {data.role && (
          <span className="ml-auto rounded-full bg-(--skyai-lavender-soft) px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-(--cta-button-background)">
            {data.role}
          </span>
        )}
      </div>
      <p className="mt-3.5 text-sm leading-[1.55] text-(--skyai-voice-muted)">{data.description}</p>
    </article>
  );
}

export default SkyVoiceIntegrationCard;
