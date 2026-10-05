import { SkyAiSubNavDropdownInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

// Rendered outside the sub nav's horizontal scroller (which would clip it), centred under its trigger
function SkyAiSubNavDropdown({
  id,
  label,
  items,
  left,
  onMouseEnter,
  onMouseLeave,
  onNavigate,
  className,
}: SkyAiSubNavDropdownInterface) {
  return (
    <div
      id={id}
      role="region"
      aria-label={label}
      style={{ left }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={twMerge(
        "pointer-events-auto absolute top-full -translate-x-1/2 pt-2 w-66 max-w-[calc(100vw-2rem)]",
        className,
      )}>
      <ul className="flex flex-col gap-0.5 p-1.5 rounded-2xl bg-(--root-white-color) border border-(--border-color) shadow-[0_8px_30px_rgba(15,15,15,0.08)]">
        {items.map((child) => (
          <li key={child.href}>
            <a
              href={child.href}
              title={child.label}
              onClick={onNavigate}
              className="flex items-start gap-2.5 px-3 py-2 rounded-xl font-instrument-sans transition-colors duration-200 hover:bg-(--active-hover-link-bg)/60">
              {child.icon && <span className="mt-0.5 text-base text-(--cta-button-background)">{child.icon}</span>}
              <span className="flex flex-col">
                <span className="text-sm font-medium text-(--text-main-color)">{child.label}</span>
                {child.description && (
                  <span className="text-xs text-(--text-secondary-color)">{child.description}</span>
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkyAiSubNavDropdown;
