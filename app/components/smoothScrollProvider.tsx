"use client";

import { gsap, ScrollTrigger } from "@/app/lib/gsap";
import { SmoothScrollProviderInterface } from "@/app/utils/interface/common.interface";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function SmoothScrollProvider({ children }: SmoothScrollProviderInterface) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;

    const lenis = lenisRef.current;

    // Reset scroll instantly
    lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    // Force resize + recalculation AFTER DOM settles
    requestAnimationFrame(() => {
      lenis.resize(); // 🔥 important
      ScrollTrigger.refresh(true); // force full refresh
    });
  }, [pathname]);

  return <>{children}</>;
}

export default SmoothScrollProvider;
