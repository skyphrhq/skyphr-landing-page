"use client";
import SkyAiModal from "@/app/components/skyAiModal";
import { SkyAiLiveCallModalInterface } from "@/app/utils/interface/common.interface";
import { useEffect, useState } from "react";
import { HiCheck, HiOutlineClipboardDocument, HiPhone } from "react-icons/hi2";

function SkyAiLiveCallModal({ isOpen, onClose, data }: SkyAiLiveCallModalInterface) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timeoutId = window.setTimeout(() => setIsCopied(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.phoneNumber);
      setIsCopied(true);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the number stays visible to copy by hand
    }
  };

  return (
    <SkyAiModal isOpen={isOpen} onClose={onClose} title={data.modalTitle}>
      <div className="flex items-center gap-3 rounded-2xl bg-(--skyai-lavender-soft) p-3 pl-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-(--cta-button-background) text-(--root-white-color)">
          <HiPhone className="size-5" aria-hidden="true" />
        </span>
        {/* Tappable on phones; plain text on desktop where tel: links rarely do anything useful */}
        <a
          href={`tel:${data.phoneNumber}`}
          className="md:hidden font-instrument-sans text-lg font-bold tracking-tight text-(--text-main-color) underline decoration-(--cta-button-background)/40 underline-offset-4">
          {data.displayNumber}
        </a>
        <span className="hidden md:inline font-instrument-sans text-xl font-bold tracking-tight text-(--text-main-color) select-all">
          {data.displayNumber}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="ml-auto flex items-center gap-1.5 rounded-full border border-(--skyai-lavender-border) bg-(--root-white-color) px-3.5 py-2 font-instrument-sans text-sm font-semibold text-(--text-main-color) transition-colors hover:border-(--cta-button-background) hover:text-(--cta-button-background)">
          {isCopied ? (
            <HiCheck className="size-4" aria-hidden="true" />
          ) : (
            <HiOutlineClipboardDocument className="size-4" aria-hidden="true" />
          )}
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="font-instrument-sans text-sm text-(--text-secondary-color) pt-4" aria-live="polite">
        {data.note}
        {isCopied && <span className="sr-only"> Number copied to clipboard.</span>}
      </p>
    </SkyAiModal>
  );
}

export default SkyAiLiveCallModal;
