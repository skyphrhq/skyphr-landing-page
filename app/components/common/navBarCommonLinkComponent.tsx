import NavCompactPanel from "@/app/components/navbar/navCompactPanel";
import NavMegaPanel from "@/app/components/navbar/navMegaPanel";
import { NAV_MOBILE_MEDIA_QUERY } from "@/app/utils/constants/common.constant";
import { IsNavItemActive } from "@/app/utils/helpers/helper";
import { NavBarCommonLinkComponentInterface } from "@/app/utils/interface/common.interface";
import Link from "next/link";
import { FocusEvent, MouseEvent, PointerEvent, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export function NavBarCommonLinkComponent({
  item,
  className,
  isPanelOpen,
  onOpenPanel,
  onHoverPanel,
  onClosePanel,
  onScheduleClosePanel,
  onNavigate,
  parentWrapperClassName,
  pathname,
}: NavBarCommonLinkComponentInterface) {
  const itemRef = useRef<HTMLLIElement | null>(null);
  // True while the panel is open only because the mouse is over it, so the first click pins it instead of closing it
  const isHoverOpenedRef = useRef(false);
  const hasDropdown = item?.dropDown?.length > 0;
  // Grouped sub-links (children with their own children) get the mega panel; a flat list gets the compact dropdown
  const hasMegaPanel = hasDropdown && item.dropDown.some((child) => child?.dropDown?.length > 0);
  const isActive = IsNavItemActive(item, pathname);
  const shouldRenderLink = item?.isLink ?? true;
  const panelId = `skyphr-nav-panel-${item?.id}`;
  const navContent = (
    <>
      <span>{item?.label}</span>
      {hasDropdown ? <FaChevronDown className="skyphr-nav-chevron-down text-xs shrink-0 transition-transform" /> : null}
    </>
  );
  const navLinkClassName = twMerge(
    "skyphr-nav-link flex items-center justify-between gap-2 font-medium font-instrument-sans transition-all text-(--text-secondary-color)",
    "h-9 px-3.5 text-lg rounded-full",
    !shouldRenderLink && hasDropdown && "cursor-pointer",
    !shouldRenderLink && !hasDropdown && "cursor-default",
    className,
  );
  const panelTriggerProps = hasDropdown
    ? ({ "aria-haspopup": "true", "aria-expanded": isPanelOpen, "aria-controls": panelId } as const)
    : {};

  const isMobileNav = () => window.matchMedia(NAV_MOBILE_MEDIA_QUERY).matches;

  const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const isMobile = isMobileNav();

    if (hasDropdown && (isMobile || !shouldRenderLink)) {
      event.preventDefault();
      const shouldClose = isPanelOpen && !isHoverOpenedRef.current;
      isHoverOpenedRef.current = false;

      if (shouldClose) {
        onClosePanel();
      } else {
        onOpenPanel(item?.id);
      }

      if (isMobile && hasMegaPanel) {
        // Move focus into the drill-down screen; preventScroll because it is still sliding in
        requestAnimationFrame(() => {
          itemRef.current
            ?.querySelector<HTMLButtonElement>(".skyphr-nav-mega-panel-back-btn")
            ?.focus({ preventScroll: true });
        });
      } else if (!isMobile && event.detail > 0) {
        // Mouse clicks shouldn't leave the focus pill behind; keyboard activation keeps focus so Tab enters the panel
        event.currentTarget.blur();
      }
      return;
    }

    onNavigate();
    event.currentTarget.blur();
  };

  const handlePointerEnter = (event: PointerEvent<HTMLLIElement>) => {
    if (!hasDropdown || event.pointerType !== "mouse" || isMobileNav()) return;

    if (!isPanelOpen) {
      isHoverOpenedRef.current = true;
    }
    onHoverPanel(item?.id);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLLIElement>) => {
    if (!hasDropdown || event.pointerType !== "mouse" || isMobileNav()) return;

    onScheduleClosePanel();
  };

  // Tabbing out of the panel closes it. Focus moving to nothing (a click on empty space) is left to the outside-click handler
  const handleBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!hasDropdown || !isPanelOpen || isMobileNav()) return;

    const nextFocused = event.relatedTarget;
    if (nextFocused instanceof Node && !event.currentTarget.contains(nextFocused)) {
      onClosePanel();
    }
  };

  const handleBack = () => {
    onClosePanel();
    itemRef.current?.querySelector<HTMLElement>(".skyphr-nav-link")?.focus({ preventScroll: true });
  };

  return (
    <li
      ref={itemRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onBlur={handleBlur}
      className={twMerge(
        "skyphr-nav-item",
        // The mega panel is positioned against the navbar container / drawer, so its item can't be a containing block
        hasDropdown ? (hasMegaPanel ? "has-mega-panel" : "has-compact-panel") : "@container xmd:@container-normal",
        isActive && "is-active",
        hasDropdown && isPanelOpen && "is-open",
        parentWrapperClassName,
      )}>
      {shouldRenderLink ? (
        <Link
          href={item?.href}
          target={item?.target}
          title={item?.label}
          onClick={handleNavLinkClick}
          className={navLinkClassName}
          {...panelTriggerProps}>
          {navContent}
        </Link>
      ) : hasDropdown ? (
        <button
          type="button"
          onClick={handleNavLinkClick}
          className={twMerge(navLinkClassName, "w-full skyphr-nav-btn-link")}
          {...panelTriggerProps}>
          {navContent}
        </button>
      ) : (
        <span className={navLinkClassName}>{navContent}</span>
      )}
      {hasMegaPanel ? (
        <NavMegaPanel
          item={item}
          panelId={panelId}
          isOpen={isPanelOpen}
          pathname={pathname}
          onNavigate={onNavigate}
          onBack={handleBack}
        />
      ) : hasDropdown ? (
        <NavCompactPanel
          item={item}
          panelId={panelId}
          isOpen={isPanelOpen}
          pathname={pathname}
          onNavigate={onNavigate}
        />
      ) : null}
    </li>
  );
}
