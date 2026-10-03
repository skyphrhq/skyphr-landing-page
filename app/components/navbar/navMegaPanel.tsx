import Button from "@/app/components/common/button";
import NavFeaturedCard from "@/app/components/navbar/navFeaturedCard";
import NavMegaPanelColumn from "@/app/components/navbar/navMegaPanelColumn";
import NavMegaPanelLink from "@/app/components/navbar/navMegaPanelLink";
import NavMegaPanelTab from "@/app/components/navbar/navMegaPanelTab";
import { IsNavItemActive } from "@/app/utils/helpers/helper";
import { NavMegaPanelInterface } from "@/app/utils/interface/common.interface";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

// For menus with grouped links (Services, Hire). Desktop: categories are tabs in a left rail and only the selected
// category's links show in the pane next to it, so the panel keeps its size however many links the data has.
// Mobile: the same markup becomes a drill-down screen inside the drawer with every category listed one under another
// (layout for both lives in globals.css under "Navbar dropdown panels").
function NavMegaPanel({ item, panelId, isOpen, pathname, onNavigate, onBack, className }: NavMegaPanelInterface) {
  const groups = item?.dropDown?.filter((child) => child?.dropDown?.length > 0) ?? [];
  // Items without children are plain links listed under the tabs in the rail
  const looseLinks = item?.dropDown?.filter((child) => !(child?.dropDown?.length > 0)) ?? [];
  // Opens on the category holding the current page, otherwise on the first one
  const defaultGroupId =
    groups.find((group) => group?.dropDown?.some((link) => IsNavItemActive(link, pathname)))?.id ?? groups[0]?.id;
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const [wasOpen, setWasOpen] = useState(isOpen);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeGroupId = selectedGroupId ?? defaultGroupId;

  // Back to the default category every time the panel closes
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (!isOpen) setSelectedGroupId(null);
  }

  const clearTabHover = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = null;
  };

  // A short delay on hover, so moving the mouse diagonally from a tab to its links doesn't switch to the tab below
  const handleTabHover = (groupId: string) => {
    clearTabHover();
    hoverTimeoutRef.current = setTimeout(() => setSelectedGroupId(groupId), 120);
  };

  useEffect(() => clearTabHover, []);

  const handleTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key) || groups.length === 0) return;
    event.preventDefault();
    const currentIndex = Math.max(
      groups.findIndex((group) => group?.id === activeGroupId),
      0,
    );
    const lastIndex = groups.length - 1;
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? lastIndex
          : event.key === "ArrowDown"
            ? (currentIndex + 1) % groups.length
            : (currentIndex - 1 + groups.length) % groups.length;
    // Focusing the tab selects it (onFocus)
    document.getElementById(`${panelId}-tab-${groups[nextIndex]?.id}`)?.focus();
  };

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
          <div className="skyphr-nav-mega-panel-rail">
            {groups.length > 0 ? (
              <div
                role="tablist"
                aria-orientation="vertical"
                aria-label={item?.label}
                onKeyDown={handleTabsKeyDown}
                className="skyphr-nav-mega-panel-tabs flex flex-col gap-0.5">
                {groups.map((group) => (
                  <NavMegaPanelTab
                    key={group?.id}
                    item={group}
                    tabId={`${panelId}-tab-${group?.id}`}
                    paneId={`${panelId}-pane-${group?.id}`}
                    isActive={group?.id === activeGroupId}
                    onActivate={() => {
                      clearTabHover();
                      setSelectedGroupId(group?.id);
                    }}
                    onHoverStart={() => handleTabHover(group?.id)}
                    onHoverEnd={clearTabHover}
                  />
                ))}
              </div>
            ) : null}
            {looseLinks.length > 0 ? (
              <ul className="skyphr-nav-mega-panel-loose-links flex flex-col gap-0.5">
                {looseLinks.map((child) => (
                  <li key={child?.id}>
                    <NavMegaPanelLink item={child} pathname={pathname} onNavigate={onNavigate} />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {/* Every category is rendered; desktop shows only the selected one, mobile shows them all */}
          <div className="skyphr-nav-mega-panel-panes">
            {groups.map((group) => (
              <div
                key={group?.id}
                id={`${panelId}-pane-${group?.id}`}
                role="tabpanel"
                aria-labelledby={`${panelId}-tab-${group?.id}`}
                className={twMerge("skyphr-nav-mega-panel-pane", group?.id === activeGroupId && "is-active")}>
                <ul>
                  <NavMegaPanelColumn
                    item={group}
                    headingId={`${panelId}-${group?.id}`}
                    pathname={pathname}
                    onNavigate={onNavigate}
                  />
                </ul>
              </div>
            ))}
          </div>
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
