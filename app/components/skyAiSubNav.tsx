"use client";
import { SkyAiSubNavItem } from "@/app/utils/interface/data.interface";
import { Fragment, useEffect, useRef } from "react";
import { HiArrowRight, HiChevronDown } from "react-icons/hi2";

const NAVBAR_GAP = 12;

function SkyAiSubNav({ items }: { items: SkyAiSubNavItem[] }) {
  const barRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="sticky top-0 h-0 z-50 pointer-events-none">
      <div ref={barRef} className="absolute inset-x-0 top-18.25 xl:top-24.25 px-4">
        <nav
          aria-label="SkyAI services"
          className="skyai-subnav-scroll pointer-events-auto w-fit max-w-full mx-auto overflow-x-auto rounded-full bg-white/70 backdrop-blur-md border border-(--border-color) shadow-[0_4px_20px_rgba(15,15,15,0.04)]">
          <ul className="flex items-center w-max px-2 py-1.5">
            {items.map((item, index) => (
              <Fragment key={item.label}>
                {index > 0 && <li aria-hidden="true" className="w-px h-4 bg-(--border-color)" />}
                <li>
                  <a
                    href={item.href}
                    title={item.label}
                    className="group/subnav flex items-center gap-2 px-3.5 py-2 rounded-full whitespace-nowrap font-instrument-sans text-sm font-medium text-(--text-main-color) transition-colors duration-200 hover:bg-(--active-hover-link-bg)/60">
                    <span className="text-base text-(--cta-button-background)">{item.icon}</span>
                    {item.label}
                    {item.trailingIcon === "chevron" ? (
                      <HiChevronDown className="text-xs text-(--text-secondary-color)" />
                    ) : (
                      <HiArrowRight className="text-xs text-(--text-secondary-color) transition-transform duration-200 group-hover/subnav:translate-x-0.5" />
                    )}
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SkyAiSubNav;
