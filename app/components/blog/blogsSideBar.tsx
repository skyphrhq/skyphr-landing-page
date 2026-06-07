"use client";

import Button from "@/app/components/common/button";
import { SectionSchema } from "@/types/type";
import { FormEvent, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

type BlogsSideBarProps = {
  tags: string;
  newsletterTitle: string;
  newsletterDescription: string;
};
export const UIComponent = ({ tags, newsletterTitle, newsletterDescription }: BlogsSideBarProps) => {
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const modalTitleId = useId();

  const handleSubscribeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubscribed(true);
  };

  const handleOpenSubscribeModal = () => {
    setIsSubscribed(false);
    setIsSubscribeModalOpen(true);
  };
  useEffect(() => {
    const initialize = () => {
      setIsMounted(true);
    };

    initialize();
  }, []);
  return (
    <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
      <div>
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-(--text-secondary-color)">
          Tags
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.split(",").map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-(--border-color) px-3 py-1 text-xs font-medium text-(--text-secondary-color)">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-lg bg-(--text-main-color) p-5 text-white">
        <p className="font-instrument-sans text-xl font-bold">{newsletterTitle}</p>
        <p className="mt-2 font-inter text-sm leading-5 text-white/70">{newsletterDescription}</p>
        <Button
          type="button"
          onClick={handleOpenSubscribeModal}
          className="mt-4 w-full rounded-md bg-(--cta-button-background) px-4 py-2.5 text-base font-bold text-(--root-white-color)">
          Subscribe
        </Button>
      </div>

      {isMounted &&
        createPortal(
          <div
            aria-labelledby={modalTitleId}
            aria-modal="true"
            data-lenis-prevent
            data-lenis-prevent-touch
            data-lenis-prevent-wheel
            className={twMerge(
              "fixed inset-0 z-500000 flex items-start justify-center overflow-y-auto overscroll-contain bg-(--root-black-color)/70 px-4 py-6 sm:items-center transition-all",
              isSubscribeModalOpen
                ? "visible pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0 invisible",
            )}
            role="dialog">
            <button
              type="button"
              className="absolute inset-0 cursor-default"
              aria-label="Close newsletter popup"
              onClick={() => setIsSubscribeModalOpen(false)}
            />

            <div
              data-lenis-prevent
              data-lenis-prevent-touch
              data-lenis-prevent-wheel
              className={twMerge(
                "relative z-10 my-auto w-full max-w-120 shrink-0 transform-gpu overflow-y-auto rounded-2xl border border-(--border-color) bg-(--root-white-color) p-6 text-(--text-main-color) shadow-xl md:max-h-[calc(100dvh-48px)] md:p-8 transition-all delay-200",
                isSubscribeModalOpen
                  ? "visible pointer-events-auto opacity-100 scale-100"
                  : "pointer-events-none opacity-0 invisible scale-95",
              )}>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h2 id={modalTitleId} className="mt-2 font-instrument-sans text-2xl font-bold">
                    Subscribe to Skyphr insights
                  </h2>
                  <p className="mt-3 font-inter text-sm leading-6 text-(--text-secondary-color)">
                    Get concise product, design, and engineering notes delivered to your inbox.
                  </p>
                </div>

                <Button
                  type="button"
                  aria-label="Close newsletter popup"
                  onClick={() => setIsSubscribeModalOpen(false)}
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-(--border-color) text-(--text-main-color) hover:bg-(--root-black-color) hover:text-(--text-white-color) transition-all">
                  <FiX className="size-5" aria-hidden="true" />
                </Button>
              </div>

              {isSubscribed ? (
                <div className="mt-6 rounded-xl bg-(--about-us-card-bg) p-5">
                  <p className="font-instrument-sans text-lg font-bold">You are on the list.</p>
                  <p className="mt-2 font-inter text-sm leading-6 text-(--text-secondary-color)">
                    Thanks for subscribing. We will send useful notes, not inbox clutter.
                  </p>
                </div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubscribeSubmit}>
                  <label className="block">
                    <span className="font-inter text-sm font-semibold text-(--text-main-color)">Name</span>
                    <input
                      className="mt-2 w-full rounded-lg border border-(--border-color) bg-(--root-white-color) px-4 py-3 font-inter text-sm text-(--text-main-color) outline-none transition-colors placeholder:text-(--placeholder-color) focus:border-(--cta-button-background)"
                      name="name"
                      placeholder="Your name"
                      type="text"
                    />
                  </label>

                  <label className="block">
                    <span className="font-inter text-sm font-semibold text-(--text-main-color)">Email</span>
                    <input
                      className="mt-2 w-full rounded-lg border border-(--border-color) bg-(--root-white-color) px-4 py-3 font-inter text-sm text-(--text-main-color) outline-none transition-colors placeholder:text-(--placeholder-color) focus:border-(--cta-button-background)"
                      name="email"
                      placeholder="you@company.com"
                      required
                      type="email"
                    />
                  </label>
                  <Button
                    type="submit"
                    className="w-full rounded-lg bg-(--cta-button-background) px-5 py-3 font-instrument-sans text-base font-bold text-(--root-white-color)">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>,
          document.body,
        )}
    </aside>
  );
};

export const Schema: SectionSchema = {
  tags: { type: "STRING", required: true },
  newsletterTitle: { type: "STRING", required: true },
  newsletterDescription: { type: "TEXTAREA", required: true },
};
