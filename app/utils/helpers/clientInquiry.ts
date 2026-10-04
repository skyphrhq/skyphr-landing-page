import type { RefObject } from "react";

type TurnstileWidgetId = string;

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      size: "invisible";
      callback: (token: string) => void;
      "error-callback": () => void;
      "expired-callback": () => void;
    },
  ) => TurnstileWidgetId;
  execute: (widgetId: TurnstileWidgetId) => void;
  remove?: (widgetId: TurnstileWidgetId) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const TURNSTILE_SCRIPT_URL = process.env.NEXT_PUBLIC_TURNSTILE_SCRIPT_URL;
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const CLIENT_INQUIRY_API_URL = process.env.NEXT_PUBLIC_CLIENT_INQUIRY_API_URL;
const CLIENT_INQUIRY_API_KEY = process.env.NEXT_PUBLIC_CLIENT_INQUIRY_API_KEY;
const CLIENT_INQUIRY_API_SECRET = process.env.NEXT_PUBLIC_CLIENT_INQUIRY_API_SECRET;

if (!TURNSTILE_SCRIPT_URL) throw new Error("TURNSTILE_SCRIPT_URL is not defined in the environment variables.");
if (!TURNSTILE_SITE_KEY) throw new Error("TURNSTILE_SITE_KEY is not defined in the environment variables.");
if (!CLIENT_INQUIRY_API_URL) throw new Error("CLIENT_INQUIRY_API_URL is not defined in the environment variables.");
if (!CLIENT_INQUIRY_API_KEY) throw new Error("CLIENT_INQUIRY_API_KEY is not defined in the environment variables.");
if (!CLIENT_INQUIRY_API_SECRET)
  throw new Error("CLIENT_INQUIRY_API_SECRET is not defined in the environment variables.");

let turnstileScriptPromise: Promise<void> | null = null;

const LoadTurnstileScript = () => {
  if (typeof window === "undefined") return Promise.reject(new Error("Turnstile is only available in the browser."));
  if (window.turnstile) return Promise.resolve();
  if (turnstileScriptPromise) return turnstileScriptPromise;

  turnstileScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SCRIPT_URL}"]`);

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Unable to load Turnstile.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error("Unable to load Turnstile.")), { once: true });
    document.head.appendChild(script);
  });

  return turnstileScriptPromise;
};

export const RemoveTurnstileWidget = (widgetIdRef: RefObject<TurnstileWidgetId | null>) => {
  if (!widgetIdRef.current) return;

  window.turnstile?.remove?.(widgetIdRef.current);
  widgetIdRef.current = null;
};

// Renders an invisible Turnstile widget in `container` and resolves with its token.
// Forms with their own Turnstile widget pass `siteKey`; the rest use the default site key.
export const GetTurnstileToken = async (
  container: HTMLElement | null,
  widgetIdRef: RefObject<TurnstileWidgetId | null>,
  siteKey: string | undefined = TURNSTILE_SITE_KEY,
) => {
  if (!siteKey) throw new Error("Turnstile site key is missing.");
  if (!container) throw new Error("Turnstile container is missing.");

  await LoadTurnstileScript();

  return await new Promise<string>((resolve, reject) => {
    const turnstile = window.turnstile;

    if (!turnstile) {
      reject(new Error("Turnstile is not ready."));
      return;
    }

    RemoveTurnstileWidget(widgetIdRef);

    widgetIdRef.current = turnstile.render(container, {
      sitekey: siteKey,
      size: "invisible",
      callback: (token) => resolve(token),
      "error-callback": () => reject(new Error("Turnstile verification failed.")),
      "expired-callback": () => reject(new Error("Turnstile verification expired. Please try again.")),
    });

    turnstile.execute(widgetIdRef.current);
  });
};

// Posts a form to the client inquiry API; every form shares the key/secret and is told apart by its form_id
export const SubmitClientInquiry = async (formId: string | undefined, payload: FormData, turnstileToken: string) => {
  if (!formId || formId === "YOUR_FORM_ID") throw new Error("Client inquiry API configuration is missing.");

  const url = new URL(CLIENT_INQUIRY_API_URL);
  url.searchParams.set("form_id", formId);

  const response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "X-API-Key": CLIENT_INQUIRY_API_KEY,
      "X-API-Secret": CLIENT_INQUIRY_API_SECRET,
      "X-Turnstile-Token": turnstileToken,
    },
    body: payload,
  });

  if (!response.ok) throw new Error("Unable to submit the form. Please try again.");
};
