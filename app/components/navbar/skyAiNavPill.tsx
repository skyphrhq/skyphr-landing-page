import { SPARKLE_PATH_D } from "@/app/components/common/sparkleIcon";
import { NormalizePath } from "@/app/utils/helpers/helper";
import Link from "next/link";
import { MouseEvent, useId } from "react";
import { twMerge } from "tailwind-merge";

const SKYAI_HREF = "/sky-ai";

export function SkyAiNavPill({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  const gradientId = `skyai-nav-sparkle-${useId().replace(/:/g, "")}`;
  const currentPath = NormalizePath(pathname);
  const isActive = currentPath === SKYAI_HREF || currentPath.startsWith(`${SKYAI_HREF}/`);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate();
    event.currentTarget.blur();
  };

  return (
    <li className={twMerge("skyphr-nav-item skyai-nav-item", isActive && "is-active")}>
      <Link
        href={SKYAI_HREF}
        onClick={handleClick}
        aria-current={isActive ? "page" : undefined}
        className="skyai-nav-pill">
        <span className="skyai-nav-pill-inner px-5!">
          <span className="skyai-nav-pill-text">SkyAI</span>
          <span className="skyai-nav-pill-sparkle-wrapper" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="skyai-nav-pill-sparkle" focusable="false">
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#3846da" />
                  <stop offset="100%" stopColor="#6974e2" />
                </linearGradient>
              </defs>
              <path d={SPARKLE_PATH_D} fill={`url(#${gradientId})`} />
            </svg>
          </span>
        </span>
      </Link>
    </li>
  );
}
