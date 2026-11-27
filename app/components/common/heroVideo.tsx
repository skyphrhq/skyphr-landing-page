"use client";
import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { HeroVideoInterface } from "@/app/utils/interface/common.interface";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

function HeroVideo({ data, className }: HeroVideoInterface) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Safari ignores the `muted` prop React renders, so it blocks autoplay. Set muted/playsinline on the
  // element itself and call play() so the video starts on iOS/macOS Safari too.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.play().catch(() => {});
  }, [data.src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload={data.preload ?? "auto"}
      poster={data.poster?.src}
      width={data.width}
      height={data.height}
      aria-label={data.alt}
      className={twMerge("w-full h-auto select-none pointer-events-none", COMMON_BORDER_RADIUS, data.className, className)}>
      <source src={data.src} type={data.type ?? "video/mp4"} />
    </video>
  );
}

export default HeroVideo;
