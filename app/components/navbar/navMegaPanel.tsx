import Button from "@/app/components/common/button";
import NavFeaturedCard from "@/app/components/navbar/navFeaturedCard";
import NavMegaPanelColumn from "@/app/components/navbar/navMegaPanelColumn";
import NavMegaPanelLink from "@/app/components/navbar/navMegaPanelLink";
import { NavMegaPanelInterface } from "@/app/utils/interface/common.interface";
import { FaChevronLeft } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

// For menus with grouped links (Hire). Desktop: a content-width panel centered under the navbar. Mobile: the same
// markup becomes a drill-down screen inside the drawer (layout for both lives in globals.css under "Navbar dropdown panels").
function NavMegaPanel({ item, panelId, isOpen, pathname, onNavigate, onBack, className }: NavMegaPanelInterface) {
  return (
    <div
      id={panelId}
      role="region"
      aria-label={item?.label}
      className={twMerge("skyphr-nav-panel skyphr-nav-mega-panel", isOpen && "is-open", className)}>
      <div data-lenis-prevent className="skyphr-nav-panel-inner">
        <div className="skyphr-nav-mega-panel-mobile-header">
          <Button
            type="button"
            onClick={onBack}
            className="skyphr-nav-mega-panel-back-btn flex w-fit items-center gap-2 -ml-3 rounded-full px-3 py-1.5 font-instrument-sans text-base font-medium text-(--text-secondary-color) transition-colors duration-200 hover:text-(--cta-button-background) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--cta-button-background)">
            <FaChevronLeft aria-hidden="true" className="text-xs shrink-0" />
            <span>Back</span>
          </Button>
          <p className="font-instrument-sans text-2xl font-semibold text-(--text-main-color)">{item?.label}</p>
        </div>
        <div className="skyphr-nav-mega-panel-body">
          {/* Each category is a column; items without children sit in the same grid as plain links */}
          <ul className="skyphr-nav-mega-panel-grid">
            {item?.dropDown?.map((child) =>
              child?.dropDown?.length > 0 ? (
                <NavMegaPanelColumn
                  key={child?.id}
                  item={child}
                  headingId={`${panelId}-${child?.id}`}
                  pathname={pathname}
                  onNavigate={onNavigate}
                />
              ) : (
                <li key={child?.id} className="min-w-0">
                  <NavMegaPanelLink item={child} pathname={pathname} onNavigate={onNavigate} />
                </li>
              ),
            )}
          </ul>
          {/* Sidebar on desktop, full-width block under the links in the mobile drill-down */}
          {item?.featured ? (
            <div className="skyphr-nav-mega-panel-featured">
              <NavFeaturedCard data={item.featured} isActive={isOpen} onNavigate={onNavigate} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NavMegaPanel;
