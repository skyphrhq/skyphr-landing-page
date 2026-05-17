"use client";
import SkyPhrLogo from "@/app/assets/logo/skyphr-logo-transparent-black.webp";
import Button from "@/app/components/common/button";
import CTAButton from "@/app/components/common/ctaButton";
import { NAVBAR_LINKS_DATA } from "@/app/data/navbar.data";
import { gsap } from "@/app/lib/gsap";
import type { NavbarLinksInterface } from "@/app/utils/interface/data.interface";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useRef, useState } from "react";
import { FaChevronDown, FaChevronRight, FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { twMerge } from "tailwind-merge";

function normalizePath(path: string) {
  if (path === "/") {
    return path;
  }

  return path.replace(/\/$/, "");
}

function isNavItemActive(item: NavbarLinksInterface, pathname: string) {
  const shouldRenderLink = item?.isLink ?? true;
  const currentPath = normalizePath(pathname);
  const itemPath = normalizePath(item?.href);
  const isCurrentItemActive =
    shouldRenderLink &&
    (itemPath === "/" ? currentPath === itemPath : currentPath === itemPath || currentPath.startsWith(`${itemPath}/`));
  const isChildActive = item?.dropDown?.some((dropdownItem) => isNavItemActive(dropdownItem, pathname));

  return isCurrentItemActive || isChildActive;
}

function NavMenuItem({
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
  const isActive = isNavItemActive(item, pathname);
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
        <button type="button" onClick={handleNavLinkClick} className={twMerge(navLinkClassName, "w-full")} aria-haspopup="true" aria-expanded={isOpen}>
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
              <NavMenuItem
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

function NavBarComponent() {
  const navBarContainer = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [areDropdownsSuppressed, setAreDropdownsSuppressed] = useState(false);

  const handleToggleDropdown = (id: string) => {
    setOpenDropdowns((prevOpenDropdowns) => {
      const updatedOpenDropdowns = new Set(prevOpenDropdowns);

      if (updatedOpenDropdowns.has(id)) {
        updatedOpenDropdowns.delete(id);
      } else {
        updatedOpenDropdowns.add(id);
      }

      return updatedOpenDropdowns;
    });
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdowns(new Set());
  };

  const handleNavigate = () => {
    handleCloseMobileMenu();
    setAreDropdownsSuppressed(true);
  };

  useGSAP(() => {
    const navbarInnerWrapper = navBarContainer.current?.querySelector(".navbar-inner-wrapper");
    if (navbarInnerWrapper) {
      gsap.to(navBarContainer.current, {
        maxWidth: "100%",
        top: "0px",
        borderRadius: "10px",
        duration: 0.6,
        borderBottom: "0px",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: document.body,
          start: "top -100",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(navbarInnerWrapper, {
        padding: "10px 16px",
        duration: 0.6,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: document.body,
          start: "top -100",
          toggleActions: "play none none reverse",
        },
      });
    }
    const animationElement = navBarContainer.current?.querySelector(".bg-animation-element");
    if (animationElement) {
      gsap.to(animationElement, {
        opacity: 1,
        duration: 0.5,
        filter: "blur(0px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top -100",
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  return (
    <nav
      ref={navBarContainer}
      onPointerLeave={() => setAreDropdownsSuppressed(false)}
      className={twMerge(
        "w-full max-w-full top-0 left-1/2 -translate-x-1/2 fixed z-9999 bg-transparent border-b border-b-(--border-color) skyphr-navbar-main-wrapper",
        areDropdownsSuppressed && "is-dropdown-suppressed",
      )}>
      <div className="w-full skyphr-container flex items-center justify-between h-auto py-2.5! xl:py-5! backdrop-blur-[1px] relative z-2 navbar-inner-wrapper">
        <Link href="/" className="cursor-pointer skyphr-navbar-logo-wrapper -ml-3.75">
          <Image width={180} height={40} src={SkyPhrLogo} alt="SkyPhr Logo" className="w-45  h-10" priority />
        </Link>
        <div
          className={twMerge(
            "grow flex items-center justify-center skyphr-navbar-content-wrapper",
            isMobileMenuOpen && "is-open",
          )}>
          <Button
            type="button"
            aria-label="Close navigation menu"
            onClick={handleCloseMobileMenu}
            className="skyphr-mobile-nav-close-btn">
            <FaXmark className="text-xl text-(--text-main-color)" />
          </Button>
          <div className="w-full grow skyphr-navbar-links-wrapper">
            <ul className="w-full flex items-center justify-center gap-3 skyphr-nav-links-wrapper-list">
              {NAVBAR_LINKS_DATA?.map((item) => (
                <NavMenuItem
                  key={item?.id}
                  item={item}
                  openDropdowns={openDropdowns}
                  onToggleDropdown={handleToggleDropdown}
                  onCloseMobileMenu={handleCloseMobileMenu}
                  onNavigate={handleNavigate}
                  pathname={pathname}
                />
              ))}
            </ul>
          </div>
          <div className="w-fit skyphr-nav-cta-btn-wrapper">
            <CTAButton
              btnStyle="CTA_SECONDARY"
              className="reveal ml-auto"
              href="https://cal.com/skyphr/30min"
              target="_blank"
              rel="noopener noreferrer">
              Book a Call
            </CTAButton>
          </div>
        </div>
        <Button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => {
            setAreDropdownsSuppressed(false);
            setIsMobileMenuOpen(true);
          }}
          className="block xmd:hidden">
          <GiHamburgerMenu className="text-2xl text-(--text-main-color) transition-all" />
        </Button>
      </div>
      <span className="w-full h-full absolute blur-2xl inset-0 opacity-20 bg-(--root-white-color) z-1 origin-center bg-animation-element"></span>
    </nav>
  );
}

export default NavBarComponent;
