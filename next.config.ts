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
              '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json", </.well-known/http-message-signatures-directory>; rel="service-doc"; type="application/http-message-signatures-directory+json", </llms.txt>; rel="service-doc"; type="text/plain", </sitemap.xml>; rel="service-doc"; type="application/xml", </robots.txt>; rel="service-doc"; type="text/plain"',
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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6b62-2405-201-2036-4845-ad87-fe59-2ed9-b189.ngrok-free.app/",
      },
    ],
  },
};

export default nextConfig;
