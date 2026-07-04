"use client";

import CTAButton from "@/app/components/common/ctaButton";
import HeroBgAbstract from "@/app/components/heroBgAbstract";
import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

type ContactFormSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function ContactFormSuccessModal({ isOpen, onClose }: ContactFormSuccessModalProps) {
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() => {
      setHasHydrated(true);
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() => {
      setIsMounted(isOpen);
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isOpen]);

  const handleClose = () => {
    setIsMounted(false);
    onClose();
  };
  if (!hasHydrated) return null;

  return createPortal(
    <div
      aria-labelledby="contact-form-success-title"
      aria-modal="true"
      data-lenis-prevent
      data-lenis-prevent-touch
      data-lenis-prevent-wheel
      className={twMerge(
        "fixed inset-0 z-500000 flex items-start justify-center overflow-y-auto overscroll-contain bg-(--root-black-color)/70 px-4 py-6 sm:items-center transition-all",
        isMounted ? "visible pointer-events-auto opacity-100" : "pointer-events-none opacity-0 invisible",
      )}
      role="dialog">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close thank you popup"
        title="Close thank you popup"
        onClick={handleClose}
      />

      <div
        data-lenis-prevent
        data-lenis-prevent-touch
        data-lenis-prevent-wheel
        className={twMerge(
          "relative z-10 my-auto w-full max-w-200 shrink-0 transform-gpu overflow-y-auto rounded-2xl border border-(--border-color) bg-(--root-white-color) text-(--text-main-color) shadow-xl md:max-h-[calc(100dvh-48px)] transition-all delay-200",
          isMounted
            ? "visible pointer-events-auto opacity-100 scale-100"
            : "pointer-events-none opacity-0 invisible scale-95",
          COMMON_BORDER_RADIUS,
        )}>
        <button
          type="button"
          aria-label="Close thank you popup"
          title="Close thank you popup"
          onClick={handleClose}
          className="absolute right-4 top-4 z-30 flex size-10 items-center justify-center rounded-full border border-(--border-color) bg-(--root-white-color) text-(--text-main-color) transition-all hover:bg-(--root-black-color) hover:text-(--text-white-color)">
          <FiX className="size-5" aria-hidden="true" />
        </button>

        <div className="w-full relative overflow-hidden p-6 md:p-10 lg:p-12">
          <HeroBgAbstract className="opacity-35" />

          <div className="relative z-10 flex min-h-82 flex-col justify-center pr-9">
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-(--cta-button-background)">
              Thanks for reaching out
            </p>
            <h2
              id="contact-form-success-title"
              className="mt-4 max-w-140 font-instrument-sans text-4xl font-bold leading-[1.05] tracking-tight text-(--text-main-color) md:text-6xl">
              Thanks for <span className="font-playfair-display italic font-semibold">connecting.</span>
            </h2>
            <p className="mt-6 max-w-130 font-inter text-base font-medium leading-7 text-(--text-secondary-color) md:text-xl md:leading-8">
              We have received your message and will connect with you within 24 hours.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton
                btnStyle="CTA_SECONDARY"
                className={twMerge("reveal-animation w-full @max-xs:max-w-62! @max-xs:min-w-62! xs:w-fit")}
                onClick={handleClose}>
                Back to site
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ContactFormSuccessModal;
