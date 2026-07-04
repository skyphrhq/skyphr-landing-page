import JsonLd from "@/app/components/JsonLd";
import NavBarComponent from "@/app/components/navbar/navBar";
import FooterScreen from "@/app/screens/common/footerScreen";
import "@/app/styles/globals.css";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { createPageMetadata } from "@/app/utils/seo/metadata";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";
import { Instrument_Sans, Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import SmoothScrollProvider from "./components/smoothScrollProvider";
import { RootLayoutInterface } from "./utils/interface/common.interface";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Skyphr | AI, SaaS, and Custom Software Development Company",
    description:
      "Skyphr designs and builds scalable digital products, SaaS platforms, AI systems, and modern web applications for startups, SaaS companies, and enterprises.",
    path: "/",
  }),
  metadataBase: new URL(SITE_BASE_URL),
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: RootLayoutInterface) {
  return (
    <html
      lang="en-US"
      dir="ltr"
      className={`${playfairDisplay.variable} ${inter.variable} ${instrumentSans.variable} antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M5ST3QB7');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body className="w-full">
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5ST3QB7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager noscript */}

        <JsonLd data={[generateOrganizationSchema(), generateWebsiteSchema()]} />

        <SmoothScrollProvider>
          <NavBarComponent />

          {children}

          <footer className="w-full overflow-hidden">
            <FooterScreen />
          </footer>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
