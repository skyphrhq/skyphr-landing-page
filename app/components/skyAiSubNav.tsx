"use client";
import SkyAiSubNavDropdown from "@/app/components/skyAiSubNavDropdown";
import { SkyAiSubNavItem } from "@/app/utils/interface/data.interface";
import { Fragment, useEffect, useRef, useState } from "react";
import { HiArrowRight, HiChevronDown } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

const NAVBAR_GAP = 12;
// Half the dropdown width (w-66) plus the wrapper's px-4, so the dropdown never overflows the screen edges
const DROPDOWN_EDGE_OFFSET = 132 + 16;
const DROPDOWN_CLOSE_DELAY = 120;

function SkyAiSubNav({ items }: { items: SkyAiSubNavItem[] }) {
  const barRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [dropdownLeft, setDropdownLeft] = useState(0);

  // The main navbar is fixed and changes height as it animates on scroll, so follow its bottom edge
  useEffect(() => {
    const navbar = document.querySelector<HTMLElement>(".skyphr-navbar-main-wrapper");
    const bar = barRef.current;
    if (!navbar || !bar) return;

    const sync = () => {
      bar.style.top = `${navbar.getBoundingClientRect().bottom + NAVBAR_GAP}px`;
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(navbar);
    return () => observer.disconnect();
  }, []);

  // Close the open dropdown on outside click, Escape or page scroll
  useEffect(() => {
    if (openIndex === null) return;

    const close = () => setOpenIndex(null);
    const onPointerDown = (event: PointerEvent) => {
      if (!barRef.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      triggerRefs.current[openIndex]?.focus();
      close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", close, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", close);
    };
  }, [openIndex]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openDropdown = (index: number) => {
    clearTimeout(closeTimer.current);
    const trigger = triggerRefs.current[index];
    const bar = barRef.current;
    if (!trigger || !bar) return;

    const triggerRect = trigger.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();
    const centre = triggerRect.left + triggerRect.width / 2 - barRect.left;
    setDropdownLeft(Math.min(Math.max(centre, DROPDOWN_EDGE_OFFSET), barRect.width - DROPDOWN_EDGE_OFFSET));
    setOpenIndex(index);
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), DROPDOWN_CLOSE_DELAY);
  };

  const openItem = openIndex !== null ? items[openIndex] : undefined;

  return (
    <div className="sticky top-0 h-0 z-50 pointer-events-none">
      <div ref={barRef} className="absolute inset-x-0 top-18.25 xl:top-24.25 px-4">
        <nav
          aria-label="SkyAI services"
          onScroll={() => setOpenIndex(null)}
          className="skyai-subnav-scroll pointer-events-auto w-fit max-w-full mx-auto overflow-x-auto rounded-full bg-white/70 backdrop-blur-md border border-(--border-color) shadow-[0_4px_20px_rgba(15,15,15,0.04)]">
          <ul className="flex items-center w-max px-2 py-1.5">
            {items.map((item, index) => {
              const linkClassName =
                "group/subnav flex items-center gap-2 px-3.5 py-2 rounded-full whitespace-nowrap font-instrument-sans text-sm font-medium text-(--text-main-color) transition-colors duration-200 hover:bg-(--active-hover-link-bg)/60";
              const content = (
                <>
                  <span className="text-base text-(--cta-button-background)">{item.icon}</span>
                  {item.label}
                </>
              );

              return (
                <Fragment key={item.label}>
                  {index > 0 && <li aria-hidden="true" className="w-px h-4 bg-(--border-color)" />}
                  <li>
                    {item.children?.length ? (
                      <button
                        ref={(element) => {
                          triggerRefs.current[index] = element;
                        }}
                        type="button"
                        aria-expanded={openIndex === index}
                        aria-controls={`skyai-subnav-dropdown-${index}`}
                        onClick={() => (openIndex === index ? setOpenIndex(null) : openDropdown(index))}
                        onMouseEnter={() => openDropdown(index)}
                        onMouseLeave={scheduleClose}
                        className={twMerge(
                          linkClassName,
                          "cursor-pointer",
                          openIndex === index && "bg-(--active-hover-link-bg)/60",
                        )}>
                        {content}
                        <HiChevronDown
                          className={twMerge(
                            "text-xs text-(--text-secondary-color) transition-transform duration-200",
                            openIndex === index && "rotate-180",
                          )}
                        />
                      </button>
                    ) : (
                      <a href={item.href} title={item.label} className={linkClassName}>
                        {content}
                        {item.trailingIcon === "chevron" ? (
                          <HiChevronDown className="text-xs text-(--text-secondary-color)" />
                        ) : (
                          <HiArrowRight className="text-xs text-(--text-secondary-color) transition-transform duration-200 group-hover/subnav:translate-x-0.5" />
                        )}
                      </a>
                    )}
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </nav>

        {openItem?.children?.length ? (
          <SkyAiSubNavDropdown
            id={`skyai-subnav-dropdown-${openIndex}`}
            label={openItem.label}
            items={openItem.children}
            left={dropdownLeft}
            onMouseEnter={() => clearTimeout(closeTimer.current)}
            onMouseLeave={scheduleClose}
            onNavigate={() => setOpenIndex(null)}
          />
        ) : null}
      </div>
    </div>
  );
}

export default SkyAiSubNav;
