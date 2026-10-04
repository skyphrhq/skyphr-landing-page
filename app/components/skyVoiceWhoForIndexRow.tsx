import { SkyVoiceWhoForIndexRowInterface } from "@/app/utils/interface/common.interface";
import { LuArrowRight } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

// The active look (bordered white card, blue tile, arrow) is a set of layers GSAP fades in SkyVoiceWhoForIndex.
// The isActive classes only cover the first paint; after that GSAP's inline styles take over.
function SkyVoiceWhoForIndexRow({ industry, isActive, tabId, panelId, onSelect, onKeyDown }: SkyVoiceWhoForIndexRowInterface) {
  return (
    <button
      type="button"
      role="tab"
      id={tabId}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className="skyai-voice-who-row group/row relative grid w-full cursor-pointer grid-cols-[40px_1fr] items-center gap-3.5 rounded-[18px] px-4 py-3.5 text-left transition-colors duration-300 hover:bg-(--root-white-color)/60 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--cta-button-background) motion-reduce:transition-none xmd:grid-cols-[40px_1fr_auto]">
      <span
        aria-hidden="true"
        className={twMerge(
          "skyai-voice-who-row-card absolute inset-0 rounded-[18px] border border-(--border-color) bg-(--root-white-color)",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />
      <span aria-hidden="true" className="relative grid size-10 place-items-center rounded-xl bg-(--skyai-navy)/4">
        <span
          className={twMerge(
            "skyai-voice-who-row-tile skyai-voice-who-tile-active absolute inset-0 rounded-xl",
            isActive ? "opacity-100" : "opacity-0",
          )}
        />
        <span
          className={twMerge(
            "skyai-voice-who-row-icon relative text-lg",
            isActive ? "text-(--root-white-color)" : "text-(--skyai-voice-subtle)",
          )}>
          {industry.icon}
        </span>
      </span>
      <span className="relative flex min-w-0 flex-col gap-0.5 font-instrument-sans">
        <strong
          className={twMerge(
            "skyai-voice-who-row-name text-base font-semibold tracking-[-0.01em]",
            isActive ? "text-(--text-main-color)" : "text-(--skyai-voice-body)",
          )}>
          {industry.name}
        </strong>
        <span className="truncate text-[13px] text-(--skyai-voice-subtle)">{industry.who}</span>
      </span>
      <LuArrowRight
        aria-hidden="true"
        className={twMerge(
          "skyai-voice-who-row-arrow relative hidden size-4.5 text-(--cta-button-background) xmd:block",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />
    </button>
  );
}

export default SkyVoiceWhoForIndexRow;
