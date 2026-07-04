// components/SmoothScroll.tsx
"use client";

import gsap from "gsap";
import { LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000); // Convert seconds to milliseconds
    }

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis ref={lenisRef} root options={{ autoRaf: false }}>
      <main className="w-full h-auto skyphr-main-wrapper">{children}</main>
    </ReactLenis>
  );
}
