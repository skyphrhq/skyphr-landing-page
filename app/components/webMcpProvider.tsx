"use client";

import { useEffect } from "react";

type JsonSchema = {
  type: "object";
  properties?: Record<string, { type: string; description?: string }>;
  required?: string[];
  additionalProperties?: boolean;
};

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: JsonSchema;
  annotations?: {
    readOnlyHint?: boolean;
    untrustedContentHint?: boolean;
  };
  execute: (input: Record<string, string>) => Promise<unknown>;
};

type ModelContext = {
  registerTool: (tool: WebMcpTool, options?: { signal?: AbortSignal }) => Promise<void>;
};

declare global {
  interface Navigator {
    modelContext?: ModelContext;
  }

  interface Document {
    modelContext?: ModelContext;
  }
}

const navigationSchema: JsonSchema = {
  type: "object",
  properties: {
    path: {
      type: "string",
      description: "A same-origin site path such as /about-us or /services.",
    },
  },
  required: ["path"],
  additionalProperties: false,
};

const searchSchema: JsonSchema = {
  type: "object",
  properties: {
    query: {
      type: "string",
      description: "A service, page, capability, or topic to search for.",
    },
  },
  required: ["query"],
  additionalProperties: false,
};

const pageSchema: JsonSchema = {
  type: "object",
  properties: {
    path: {
      type: "string",
      description: "A public page path such as / or /services/ai-development-services.",
    },
  },
  required: ["path"],
  additionalProperties: false,
};

function sameOriginPath(path: string) {
  const url = new URL(path, window.location.origin);

  if (url.origin !== window.location.origin || !url.pathname.startsWith("/")) {
    throw new Error("Only same-origin site paths are supported.");
  }

  return `${url.pathname}${url.search}${url.hash}`;
}

async function navigateToSite({ path }: Record<string, string>) {
  const destination = sameOriginPath(path);
  window.location.assign(destination);
  return { navigatingTo: destination };
}

async function searchSite({ query }: Record<string, string>) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    throw new Error("A search query is required.");
  }

  const response = await fetch("/llms.txt", { headers: { Accept: "text/plain" } });

  if (!response.ok) {
    throw new Error("The site search index could not be loaded.");
  }

  const lines = (await response.text()).split("\\n");
  const matches = lines.filter((line) => line.toLowerCase().includes(normalizedQuery)).slice(0, 10);

  return {
    query,
    results: matches.length ? matches : ["No matching public pages were found."],
  };
}

async function retrievePage({ path }: Record<string, string>) {
  const pagePath = sameOriginPath(path);
  const response = await fetch(pagePath, {
    headers: { Accept: "text/markdown, text/html;q=0.8" },
  });

  if (!response.ok) {
    throw new Error(`Unable to retrieve ${pagePath} (${response.status}).`);
  }

  return {
    path: pagePath,
    contentType: response.headers.get("content-type"),
    content: await response.text(),
  };
}

export default function WebMcpProvider() {
  useEffect(() => {
    const modelContext = navigator.modelContext ?? document.modelContext;

    if (!modelContext) {
      return;
    }

    const controller = new AbortController();
    const options = { signal: controller.signal };
    const tools: WebMcpTool[] = [
      {
        name: "navigate_site",
        description: "Navigate the Skyphr website to a public same-origin page.",
        inputSchema: navigationSchema,
        annotations: { readOnlyHint: true },
        execute: navigateToSite,
      },
      {
        name: "search_site",
        description: "Search Skyphr's public agent-readable site index for pages and capabilities.",
        inputSchema: searchSchema,
        annotations: { readOnlyHint: true, untrustedContentHint: true },
        execute: searchSite,
      },
      {
        name: "retrieve_page",
        description: "Retrieve the public content of a Skyphr page by same-origin path.",
        inputSchema: pageSchema,
        annotations: { readOnlyHint: true, untrustedContentHint: true },
        execute: retrievePage,
      },
    ];

    for (const tool of tools) {
      void modelContext.registerTool(tool, options).catch(() => {
        // WebMCP is an optional browser API; unsupported or duplicate tools
        // should not affect the site's normal page experience.
      });
    }

    return () => controller.abort();
  }, []);

  return null;
}
