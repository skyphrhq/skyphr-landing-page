"use client";
import { SkyAiNetworkLinesInterface } from "@/app/utils/interface/common.interface";
import { useEffect, useId, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface OrbitDot {
  duration: number; // seconds per loop
  offset: number; // seconds already travelled at load, so dots don't move in sync
  pulseDelay?: number; // seconds; only pulsing dots have it
}

interface OrbitLine {
  id: string;
  d: string;
  dots: OrbitDot[];
}

// Paths are drawn in a 768x1024 box measured from the page edge. The right side is mirrored,
// so on both sides x = 0 is the outer edge. Each path starts and ends off-canvas, so a dot
// restarting its loop is never seen jumping.
const LEFT_LINES: OrbitLine[] = [
  {
    id: "skyai-orbit-l1",
    d: "M -80 110 C 170 290 310 500 250 690 C 200 850 90 940 -80 1010",
    dots: [
      { duration: 26, offset: 4, pulseDelay: 0 },
      { duration: 26, offset: 15 },
    ],
  },
  {
    id: "skyai-orbit-l2",
    d: "M -80 280 C 60 300 200 250 300 170 C 360 120 410 50 440 -60",
    dots: [
      { duration: 20, offset: 6 },
      { duration: 20, offset: 14, pulseDelay: 1.2 },
    ],
  },
  {
    id: "skyai-orbit-l3",
    d: "M -80 460 C 50 500 150 580 190 700 C 220 800 210 920 170 1100",
    dots: [
      { duration: 30, offset: 9, pulseDelay: 2.4 },
      { duration: 30, offset: 22 },
    ],
  },
  {
    id: "skyai-orbit-l4",
    d: "M -80 40 C 60 60 150 20 230 -80",
    dots: [{ duration: 18, offset: 7 }],
  },
];

const RIGHT_LINES: OrbitLine[] = [
  {
    id: "skyai-orbit-r1",
    d: "M -80 60 C 60 150 150 220 180 300 C 220 400 150 520 60 620 C 0 690 -40 730 -80 760",
    dots: [
      { duration: 28, offset: 3 },
      { duration: 28, offset: 17, pulseDelay: 0.6 },
    ],
  },
  {
    id: "skyai-orbit-r2",
    d: "M 460 -60 C 380 110 290 200 180 250 C 90 290 20 290 -80 280",
    dots: [
      { duration: 22, offset: 11, pulseDelay: 1.8 },
      { duration: 22, offset: 2 },
    ],
  },
  {
    id: "skyai-orbit-r3",
    d: "M -80 400 C 60 470 150 560 170 680 C 190 800 150 920 90 1100",
    dots: [
      { duration: 24, offset: 5 },
      { duration: 24, offset: 16, pulseDelay: 3 },
    ],
  },
  {
    id: "skyai-orbit-r4",
    d: "M -80 560 C 10 540 90 500 150 440 C 220 370 290 230 320 -80",
    dots: [{ duration: 24, offset: 8 }],
  },
];

interface OrbitSideProps {
  lines: OrbitLine[];
  mirrored?: boolean;
  delayStart: number;
  idPrefix: string;
  color: string;
  dotOpacity: number;
  layer: "lines" | "dots";
}

function OrbitSide({ lines, mirrored, delayStart, idPrefix, color, dotOpacity, layer }: OrbitSideProps) {
  return (
    <g transform={mirrored ? "translate(768 0) scale(-1 1)" : undefined}>
      {layer === "lines" ? (
        <g className="skyai-orbit-lines" stroke={color} strokeWidth="1" fill="none">
          {lines.map((line, index) => (
            <path
              key={line.id}
              id={`${idPrefix}-${line.id}`}
              d={line.d}
              pathLength={1}
              className={`skyai-orbit-line ${index >= 2 ? "max-md:hidden" : ""}`}
              style={{
                ["--skyai-line-delay" as string]: `${(delayStart + index) * 150}ms`,
              }}
            />
          ))}
        </g>
      ) : (
        // Dots stay off on mobile so nothing moves behind the text
        <g className="skyai-orbit-dots max-md:hidden" fill={color}>
          {lines.flatMap((line) =>
            line.dots.map((dot, dotIndex) => (
              <g key={`${line.id}-${dotIndex}`} opacity={dotOpacity}>
                <animateMotion dur={`${dot.duration}s`} begin={`-${dot.offset}s`} repeatCount="indefinite">
                  <mpath href={`#${idPrefix}-${line.id}`} />
                </animateMotion>
                <circle
                  r="3.5"
                  opacity={dot.pulseDelay === undefined ? 0.6 : undefined}
                  className={dot.pulseDelay === undefined ? undefined : "skyai-orbit-dot-pulse"}
                  style={
                    dot.pulseDelay === undefined
                      ? undefined
                      : {
                          ["--skyai-pulse-delay" as string]: `-${dot.pulseDelay}s`,
                        }
                  }
                />
              </g>
            )),
          )}
        </g>
      )}
    </g>
  );
}

function SkyAiNetworkLines({
  color = "var(--cta-button-background)",
  lineOpacity = 0.22,
  dotOpacity = 1,
  className,
}: SkyAiNetworkLinesInterface) {
  const svgRef = useRef<SVGSVGElement>(null);
  // Unique ids so the network can render in more than one section without the paths and masks colliding
  const idPrefix = `skyai-orbit-${useId().replace(/:/g, "")}`;

  // SMIL motion ignores prefers-reduced-motion, so pause it here (CSS covers the rest)
  useEffect(() => {
    const svg = svgRef.current;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (!svg) return;
      if (query.matches) svg.pauseAnimations();
      else svg.unpauseAnimations();
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const sideProps = { idPrefix, color, dotOpacity };

  const renderHalves = (layer: OrbitSideProps["layer"]) => (
    <>
      <svg x="0" y="0" width="50%" height="100%" viewBox="0 0 768 1024" preserveAspectRatio="xMinYMid slice">
        <g strokeOpacity={lineOpacity}>
          <OrbitSide lines={LEFT_LINES} delayStart={0} layer={layer} {...sideProps} />
        </g>
      </svg>
      <svg x="50%" y="0" width="50%" height="100%" viewBox="0 0 768 1024" preserveAspectRatio="xMaxYMid slice">
        <g strokeOpacity={lineOpacity}>
          <OrbitSide lines={RIGHT_LINES} mirrored delayStart={LEFT_LINES.length} layer={layer} {...sideProps} />
        </g>
      </svg>
    </>
  );

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      focusable="false"
      className={twMerge("absolute inset-0 w-full h-full z-10 pointer-events-none", className)}>
      <defs>
        {/* Fades the network out towards the centre so the wordmark, copy and buttons stay clear */}
        <radialGradient id={`${idPrefix}-fade`} cx="50%" cy="45%" r="50%">
          <stop offset="0.3" stopColor="black" />
          <stop offset="0.85" stopColor="white" />
        </radialGradient>
        {/* Dots are much brighter than the faint lines, so they fade out sooner; otherwise a dot keeps
            showing where its line has already faded and looks detached from it */}
        <radialGradient id={`${idPrefix}-dot-fade`} cx="50%" cy="45%" r="50%">
          <stop offset="0.5" stopColor="black" />
          <stop offset="0.85" stopColor="white" />
        </radialGradient>
        <mask id={`${idPrefix}-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
          <rect width="100%" height="100%" fill={`url(#${idPrefix}-fade)`} />
        </mask>
        <mask id={`${idPrefix}-dot-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
          <rect width="100%" height="100%" fill={`url(#${idPrefix}-dot-fade)`} />
        </mask>
      </defs>
      <g mask={`url(#${idPrefix}-mask)`} className="opacity-60 md:opacity-100">
        {renderHalves("lines")}
      </g>
      <g mask={`url(#${idPrefix}-dot-mask)`}>{renderHalves("dots")}</g>
    </svg>
  );
}

export default SkyAiNetworkLines;
