"use client";
import { gsap, ScrollTrigger } from "@/app/lib/gsap";
import { SmoothScrollProviderInterface } from "@/app/utils/interface/common.interface";
import { LenisRef, ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function SmoothScrollProvider({ children }: SmoothScrollProviderInterface) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000); // Convert seconds to milliseconds
    }

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  // Lenis keeps its own scroll position across client navigations, so a new page would open mid-scroll.
  // Jump to the top on every route change, unless the link targets a #section.
  // Skipped on the first load: the page already starts at the top, and a refresh re-measures every trigger (forced reflow).
  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    if (window.location.hash) return;
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <ReactLenis ref={lenisRef} root options={{ autoRaf: false }}>
      <main className="w-full h-auto skyphr-main-wrapper">{children}</main>
    </ReactLenis>
  );
}

export default SmoothScrollProvider;
