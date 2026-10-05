"use client";
import SkyVoiceOrbPlaceholder from "@/app/components/skyVoiceOrbPlaceholder";
import SkyVoiceOrbSkeleton from "@/app/components/skyVoiceOrbSkeleton";
import { SKY_VOICE_ORB_SCENE_URL } from "@/app/utils/constants/common.constant";
import { SkyVoiceOrbInterface } from "@/app/utils/interface/common.interface";
import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const FIRST_FRAME_DELAY_MS = 800;

const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    // Free the probe context straight away; browsers cap how many can be alive at once
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    return Boolean(context);
  } catch {
    return false;
  }
};

// Only ever rendered on the client (next/dynamic with ssr: false), so reading `document` during init is safe
function SkyVoiceOrb({ reducedMotion }: SkyVoiceOrbInterface) {
  const hostRef = useRef<HTMLDivElement>(null);
  const splineAppRef = useRef<Application | null>(null);
  const isInViewRef = useRef(false);
  const isPlayingRef = useRef(true);
  const [status, setStatus] = useState<"loading" | "ready" | "unsupported">(() =>
    isWebGLAvailable() ? "loading" : "unsupported",
  );

  // The scene plays only while it's on screen and the tab is visible; reduced motion keeps it still
  const syncPlayback = useCallback(() => {
    const splineApp = splineAppRef.current;
    if (!splineApp) return;
    const shouldPlay = isInViewRef.current && !document.hidden && !reducedMotion;
    if (shouldPlay && !isPlayingRef.current) splineApp.play();
    if (!shouldPlay && isPlayingRef.current) splineApp.stop();
    isPlayingRef.current = shouldPlay;
  }, [reducedMotion]);

  const handleLoad = (splineApp: Application) => {
    splineAppRef.current = splineApp;
    splineApp.setGlobalEvents(false);
    setStatus("ready");
    window.setTimeout(syncPlayback, FIRST_FRAME_DELAY_MS);
  };

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
        syncPlayback();
      },
      { rootMargin: "100px" },
    );
    intersectionObserver.observe(host);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, [syncPlayback]);

  // react-spline disposes the runtime on unmount; drop our handle so nothing calls into a disposed app
  useEffect(
    () => () => {
      splineAppRef.current = null;
    },
    [],
  );

  return (
    <div ref={hostRef} aria-hidden="true" className="absolute inset-0">
      {status === "unsupported" ? (
        <SkyVoiceOrbPlaceholder />
      ) : (
        <SkyVoiceOrbSkeleton
          className={twMerge("transition-opacity duration-500", status === "ready" && "opacity-0")}
        />
      )}
      {status !== "unsupported" && (
        <Spline
          scene={SKY_VOICE_ORB_SCENE_URL}
          onLoad={handleLoad}
          className={twMerge(
            "skyai-voice-orb-scene pointer-events-none absolute inset-0 transition-opacity duration-500 [&_canvas]:block",
            status === "ready" ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </div>
  );
}

export default SkyVoiceOrb;
