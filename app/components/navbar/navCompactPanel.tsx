import NavMegaPanelLink from "@/app/components/navbar/navMegaPanelLink";
import { NavCompactPanelInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

// For menus with a flat list of links (Services). Desktop: a small dropdown under its trigger. Mobile: the same
// markup expands in place inside the drawer (layout for both lives in globals.css under "Navbar dropdown panels").
function NavCompactPanel({ item, panelId, isOpen, pathname, onNavigate, className }: NavCompactPanelInterface) {
  return (
    <div
      id={panelId}
      role="region"
      aria-label={item?.label}
      className={twMerge("skyphr-nav-panel skyphr-nav-compact-panel", isOpen && "is-open", className)}>
      <div className="skyphr-nav-panel-inner">
        <ul className="skyphr-nav-compact-panel-list flex flex-col gap-0.5">
          {item?.dropDown?.map((child) => (
            <li key={child?.id}>
              {/* No negative margin here: there is no column heading to line the label up with */}
              <NavMegaPanelLink item={child} pathname={pathname} onNavigate={onNavigate} className="mx-0" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavCompactPanel;
