import { IsNavItemActive } from "@/app/utils/helpers/helper";
import { NavbarLinksInterface } from "@/app/utils/interface/data.interface";
import Link from "next/link";
import { MouseEvent } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export function NavBarCommonLinkComponent({
  item,
  isNested = false,
  className,
  openDropdowns,
  onToggleDropdown,
  onCloseMobileMenu,
  onNavigate,
  parentWrapperClassName,
  pathname,
}: {
  item: NavbarLinksInterface;
  isNested?: boolean;
  className?: string;
  parentWrapperClassName?: string;
  openDropdowns: Set<string>;
  onToggleDropdown: (id: string) => void;
  onCloseMobileMenu: () => void;
  onNavigate: () => void;
  pathname: string;
}) {
  const hasDropdown = item?.dropDown?.length > 0;
  const isOpen = openDropdowns.has(item?.id);
  const isActive = IsNavItemActive(item, pathname);
  const shouldRenderLink = item?.isLink ?? true;
  const navContent = (
    <>
      <span>{item?.label}</span>
      {hasDropdown ? (
        isNested ? (
          <FaChevronRight className="skyphr-nav-chevron-right text-xs shrink-0 transition-transform" />
        ) : (
          <FaChevronDown className="skyphr-nav-chevron-down text-xs shrink-0 transition-transform" />
        )
      ) : null}
    </>
  );
  const navLinkClassName = twMerge(
    "skyphr-nav-link flex items-center justify-between gap-2 font-medium font-instrument-sans transition-all text-(--text-secondary-color)",
    `${isNested ? "w-full min-w-64 px-4 py-3 text-base rounded" : "px-3 py-1 text-lg rounded"}`,
    `${hasDropdown && isOpen ? "max-xmd:bg-(--active-link-bg)" : ""}`,
    !shouldRenderLink && hasDropdown && "cursor-pointer",
    !shouldRenderLink && !hasDropdown && "cursor-default",
    className,
  );

  const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const isMobileNav = window.matchMedia("(max-width: 991px)").matches;

    if (isMobileNav && hasDropdown) {
      event.preventDefault();
      onToggleDropdown(item?.id);
      return;
    }

    onNavigate();
    event.currentTarget.blur();
  };

  return (
    <li
      className={twMerge(
        "skyphr-nav-item @container xmd:@container-normal",
        isActive && "is-active",
        parentWrapperClassName,
      )}>
      {shouldRenderLink ? (
        <Link href={item?.href} target={item?.target} onClick={handleNavLinkClick} className={navLinkClassName}>
          {navContent}
        </Link>
      ) : hasDropdown ? (
        <button
          type="button"
          onClick={handleNavLinkClick}
          className={twMerge(navLinkClassName, "w-full skyphr-nav-btn-link")}
          aria-haspopup="true"
          aria-expanded={isOpen}>
          {navContent}
        </button>
      ) : (
        <span className={navLinkClassName}>{navContent}</span>
      )}
      {hasDropdown ? (
        <div
          className={`skyphr-nav-dropdown ${isOpen ? "is-open" : ""} ${
            isNested
              ? "skyphr-nav-dropdown-nested left-full top-0 pl-2"
              : "skyphr-nav-dropdown-root left-1/2 top-full pt-3"
          }`}>
          <ul className="min-w-72 rounded-xl border border-(--border-color) bg-(--root-white-color) p-2 shadow-[0px_18px_45px_rgba(0,0,0,0.14)]">
            {item?.dropDown?.map((dropdownItem) => (
              <NavBarCommonLinkComponent
                key={dropdownItem?.id}
                item={dropdownItem}
                isNested
                className="px-4 py-2"
                openDropdowns={openDropdowns}
                onToggleDropdown={onToggleDropdown}
                onCloseMobileMenu={onCloseMobileMenu}
                onNavigate={onNavigate}
                pathname={pathname}
                parentWrapperClassName="px-0! py-0!"
              />
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}
