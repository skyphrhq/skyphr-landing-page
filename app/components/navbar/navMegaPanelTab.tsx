import Button from "@/app/components/common/button";
import { NavMegaPanelTabInterface } from "@/app/utils/interface/common.interface";
import { FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

// One category in the mega panel's left rail. Hover, focus or click shows its links in the pane next to it
function NavMegaPanelTab({
  item,
  tabId,
  paneId,
  isActive,
  onActivate,
  onHoverStart,
  onHoverEnd,
  className,
}: NavMegaPanelTabInterface) {
  return (
    <Button
      id={tabId}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={paneId}
      // Roving tabindex: only the selected tab is in the Tab order, the arrow keys move between tabs
      tabIndex={isActive ? 0 : -1}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onActivate}
      onClick={onActivate}
      className={twMerge(
        "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left font-instrument-sans text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--cta-button-background)",
        isActive
          ? "bg-(--skyai-lavender-soft) text-(--cta-button-background)"
          : "text-(--text-main-color) hover:bg-(--skyai-lavender-bg)",
        className,
      )}>
      <span>{item?.label}</span>
      <FaChevronRight
        aria-hidden="true"
        className={twMerge("shrink-0 text-xs transition-opacity duration-200", isActive ? "opacity-100" : "opacity-0")}
      />
    </Button>
  );
}

export default NavMegaPanelTab;
