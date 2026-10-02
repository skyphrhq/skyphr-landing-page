"use client";
import SkyPhrLogo from "@/app/assets/logo/skyphr-logo-transparent-black.webp";
import Button from "@/app/components/common/button";
import CTAButton from "@/app/components/common/ctaButton";
import { NavBarCommonLinkComponent } from "@/app/components/common/navBarCommonLinkComponent";
import { SkyAiNavPill } from "@/app/components/navbar/skyAiNavPill";
import { NAVBAR_LINKS_DATA } from "@/app/content/pageContent/navbar.data";
import { gsap } from "@/app/lib/gsap";
import {
  NAV_MOBILE_MEDIA_QUERY,
  NAV_PANEL_CLOSE_DELAY_MS,
  NAV_PANEL_SWITCH_DELAY_MS,
} from "@/app/utils/constants/common.constant";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { twMerge } from "tailwind-merge";



function NavBarComponent() {
  const navBarContainer = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  // The open mega panel (desktop) / drill-down screen (mobile). Storing the pathname closes it on any route change
  const [openPanel, setOpenPanel] = useState<{ id: string; pathname: string } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // One pending hover action at a time: a delayed close or a delayed switch to another panel
  const panelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openPanelId = openPanel?.pathname === pathname ? openPanel.id : null;

  const clearPanelTimer = () => {
    if (panelTimerRef.current) {
      clearTimeout(panelTimerRef.current);
      panelTimerRef.current = null;
    }
  };

  const handleOpenPanel = (id: string) => {
    clearPanelTimer();
    setOpenPanel({ id, pathname });
  };

  const handleClosePanel = () => {
    clearPanelTimer();
    setOpenPanel(null);
  };

  const handleHoverPanel = (id: string) => {
    clearPanelTimer();

    if (openPanelId && openPanelId !== id) {
      panelTimerRef.current = setTimeout(() => setOpenPanel({ id, pathname }), NAV_PANEL_SWITCH_DELAY_MS);
      return;
    }

    setOpenPanel({ id, pathname });
  };

  const handleScheduleClosePanel = () => {
    clearPanelTimer();
    panelTimerRef.current = setTimeout(() => setOpenPanel(null), NAV_PANEL_CLOSE_DELAY_MS);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
    handleClosePanel();
  };

  const handleNavigate = () => {
    handleCloseMobileMenu();
  };

  useEffect(() => clearPanelTimer, []);

  // Escape and outside clicks close the open panel
  useEffect(() => {
    if (!openPanelId) return;

    const getOpenItem = () => navBarContainer.current?.querySelector<HTMLElement>(".skyphr-nav-item.is-open");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      const openItem = getOpenItem();
      if (openItem?.contains(document.activeElement)) {
        openItem.querySelector<HTMLElement>(".skyphr-nav-link")?.focus({ preventScroll: true });
      }
      setOpenPanel(null);
    };

    const handlePointerDown = (event: PointerEvent) => {
      // In the mobile drawer the drill-down screen is closed with Back / the close button
      if (window.matchMedia(NAV_MOBILE_MEDIA_QUERY).matches) return;

      const openItem = getOpenItem();
      if (openItem && event.target instanceof Node && !openItem.contains(event.target)) {
        setOpenPanel(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [openPanelId]);

  useEffect(() => {
    document.body.classList.toggle("fixed-body-container", isMobileMenuOpen);

    return () => {
      document.body.classList.remove("fixed-body-container");
    };
  }, [isMobileMenuOpen]);

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
        padding: "16px 16px",
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
      className="w-full max-w-full top-0 left-1/2 -translate-x-1/2 fixed z-9999 bg-transparent border-b border-b-(--border-color) skyphr-navbar-main-wrapper">
      <div className="w-full skyphr-container h-auto backdrop-blur-[1px] relative z-2">
        <div className="py-2.5 xl:py-5 navbar-inner-wrapper  flex items-center justify-between px-0!">
          <Link href="/" title="Skyphr Home" aria-label="Skyphr home" className="cursor-pointer skyphr-navbar-logo-wrapper -ml-3.75">
            <Image
              width={180}
              height={40}
              src={SkyPhrLogo}
              alt="Skyphr"
              title="Skyphr"
              className="w-45  h-10"
              priority
            />
          </Link>
          <div
            data-lenis-prevent
            data-lenis-prevent-touch
            data-lenis-prevent-wheel
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                handleCloseMobileMenu();
              }
            }}
            onTouchMove={(event) => event.stopPropagation()}
            onWheel={(event) => event.stopPropagation()}
            className={twMerge(
              "grow flex items-center justify-center skyphr-navbar-content-wrapper",
              isMobileMenuOpen && "is-open",
            )}>
            <div className="skyphr-mobile-nav-close-btn-wrapper">
              <Link href="/" title="Skyphr Home" aria-label="Skyphr home" className="cursor-pointer skyphr-navbar-logo-wrapper -ml-3.75">
                <Image
                  width={130}
                  height={30}
                  src={SkyPhrLogo}
                  alt="Skyphr"
                  title="Skyphr"
                  className="w-45  h-10"
                  priority
                />
              </Link>
              <Button
                type="button"
                aria-label="Close navigation menu"
                onClick={handleCloseMobileMenu}
                className="skyphr-mobile-nav-close-btn">
                <FaXmark className="text-xl text-(--text-main-color)" />
              </Button>
            </div>
            <div
              data-lenis-prevent
              data-lenis-prevent-touch
              data-lenis-prevent-wheel
              className="w-full grow skyphr-navbar-links-wrapper">
              <ul className="w-full flex items-center justify-center gap-2 skyphr-nav-links-wrapper-list">
                <SkyAiNavPill pathname={pathname} onNavigate={handleNavigate} />
                {NAVBAR_LINKS_DATA?.map((item) => {
                  if (item.type === "listing" || item.id === "home") {
                    return null; // Skip rendering this item in the navbar (Home is reached via the logo)
                  } else {
                    return (
                      <NavBarCommonLinkComponent
                        key={item?.id}
                        item={item}
                        isPanelOpen={openPanelId === item?.id}
                        onOpenPanel={handleOpenPanel}
                        onHoverPanel={handleHoverPanel}
                        onClosePanel={handleClosePanel}
                        onScheduleClosePanel={handleScheduleClosePanel}
                        onNavigate={handleNavigate}
                        pathname={pathname}
                      />
                    );
                  }
                })}
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
            onClick={() => setIsMobileMenuOpen(true)}
            className="block xmd:hidden">
            <GiHamburgerMenu className="text-2xl text-(--text-main-color) transition-all" />
          </Button>
        </div>
      </div>
      <span className="w-full h-full absolute blur-2xl inset-0 opacity-20 bg-(--root-white-color) z-1 origin-center bg-animation-element"></span>
    </nav>
  );
}

export default NavBarComponent;
