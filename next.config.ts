import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json", </.well-known/agents.json>; rel="service-doc"; type="application/json", </.well-known/dns-aid-records.txt>; rel="service-doc"; type="text/plain", </.well-known/http-message-signatures-directory>; rel="service-doc"; type="application/http-message-signatures-directory+json", </.well-known/mcp/server-card.json>; rel="service-doc"; type="application/json", </.well-known/agent-skills/index.json>; rel="service-doc"; type="application/json", </.well-known/agent-card.json>; rel="service-doc"; type="application/json", </.well-known/oauth-protected-resource>; rel="service-doc"; type="application/json", </.well-known/oauth-authorization-server>; rel="service-doc"; type="application/json", </llms.txt>; rel="service-doc"; type="text/plain", </sitemap.xml>; rel="service-doc"; type="application/xml", </robots.txt>; rel="service-doc"; type="text/plain"',
          },
        ],
      },
      {
        source: "/.well-known/api-catalog",
        headers: [
          {
            key: "Content-Type",
            value: "application/linkset+json; charset=utf-8",
          },
        ],
      },
      {
        source: "/.well-known/agents.json",
        headers: [
          {
            key: "Content-Type",
            value: "application/json; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/.well-known/dns-aid-records.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/.well-known/http-message-signatures-directory",
        headers: [
          {
            key: "Content-Type",
            value: "application/http-message-signatures-directory+json; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/.well-known/mcp/server-card.json",
        headers: [
          {
            key: "Content-Type",
            value: "application/json; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/.well-known/agent-skills/index.json",
        headers: [
          {
            key: "Content-Type",
            value: "application/json; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/.well-known/agent-card.json",
        headers: [
          {
            key: "Content-Type",
            value: "application/json; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/.well-known/oauth-protected-resource",
        headers: [
          {
            key: "Content-Type",
            value: "application/json; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/.well-known/oauth-authorization-server",
        headers: [
          {
            key: "Content-Type",
            value: "application/json; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
        ],
      },
      {
        source: "/auth.md",
        headers: [
          {
            key: "Content-Type",
            value: "text/markdown; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(.*)text/markdown(.*)",
            },
          ],
          destination: "/agent",
        },
        {
          source: "/about-us",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(.*)text/markdown(.*)",
            },
          ],
          destination: "/agent/about-us",
        },
        {
          source: "/contact",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(.*)text/markdown(.*)",
            },
          ],
          destination: "/agent/contact",
        },
        {
          source: "/services/:path*",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(.*)text/markdown(.*)",
            },
          ],
          destination: "/agent/services/:path*",
        },
        {
          source: "/hire/:path*",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(.*)text/markdown(.*)",
            },
          ],
          destination: "/agent/hire/:path*",
        },
        {
          source: "/blog/:path*",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(.*)text/markdown(.*)",
            },
          ],
          destination: "/agent/blog/:path*",
        },
        {
          source: "/privacy-policy",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(.*)text/markdown(.*)",
            },
          ],
          destination: "/agent/privacy-policy",
        },
      ],
    };
  },
};

export default nextConfig;
