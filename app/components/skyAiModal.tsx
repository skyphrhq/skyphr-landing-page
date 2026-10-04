"use client";
import { SkyAiModalInterface } from "@/app/utils/interface/common.interface";
import { useLenis } from "lenis/react";
import { useEffect, useId, useRef } from "react";
import { FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

// Native modal <dialog>: the browser makes the rest of the page inert (focus stays inside),
// closes on Escape and returns focus to the button that opened it.
function SkyAiModal({ isOpen, onClose, title, children, className }: SkyAiModalInterface) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const lenis = useLenis();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      lenis?.stop();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen, lenis]);

  // Page scroll resumes however the dialog closed (Escape, backdrop, close button)
  useEffect(() => {
    if (!isOpen) lenis?.start();
  }, [isOpen, lenis]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      data-lenis-prevent
      onClose={onClose}
      onClick={(event) => {
        // A click on the dialog element itself is a click on the backdrop
        if (event.target === event.currentTarget) onClose();
      }}
      className={twMerge(
        "m-auto w-[calc(100%-32px)] max-w-md rounded-3xl bg-(--root-white-color) p-0 text-(--text-main-color) shadow-[0_30px_80px_rgba(21,20,58,0.45)] backdrop:bg-(--skyai-night-start)/70 backdrop:backdrop-blur-sm",
        className,
      )}>
      <div className="relative p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 pb-5">
          <h2 id={titleId} className="font-instrument-sans text-xl md:text-2xl font-bold leading-tight">
            {title}
          </h2>
          <button
            type="button"
            aria-label="Close"
            title="Close"
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-(--border-color) bg-(--root-white-color) text-(--text-main-color) transition-colors hover:bg-(--root-black-color) hover:text-(--text-white-color)">
            <FiX className="size-5" aria-hidden="true" />
          </button>
        </div>
        {isOpen && children}
      </div>
    </dialog>
  );
}

export default SkyAiModal;
