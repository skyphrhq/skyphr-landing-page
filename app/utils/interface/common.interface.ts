import { StaticImageData } from "next/image";
import { ButtonHTMLAttributes } from "react";

export interface RootLayoutInterface {
  children: React.ReactNode;
}

export interface SmoothScrollProviderInterface {
  children: React.ReactNode;
}

export interface ButtonEleInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle: "CTA_PRIMARY" | "CTA_SECONDARY";
}

export interface TrustedPillInterface {
  className?: string;
}

export type ANIMATION_DIRECTION = "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";

export interface AboutUsCardsDataArrayInterface {
  direction: ANIMATION_DIRECTION;
  icon: React.ReactNode;
  count: number;
  label: string;
}
export interface AboutUsCardInterface {
  data: AboutUsCardsDataArrayInterface;

  className?: string;
}

export interface RollingCounterNumberInterface {
  className?: string;
  count: number;
}
export interface OurProcessCardInterface {
  imageOptions: {
    imagePath: StaticImageData;
    width: number;
    height: number;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager";
  };
  title: string;
  description: string;
  gridStyle: "col-span-3" | "col-span-2" | "col-span-1";
}
