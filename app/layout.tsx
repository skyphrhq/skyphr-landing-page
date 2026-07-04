import NavBarComponent from "@/app/components/navbar/navBar";
import JsonLd from "@/app/components/JsonLd";
import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Instrument_Sans, Inter, Playfair_Display } from "next/font/google";
import SmoothScrollProvider from "./components/smoothScrollProvider";
import { RootLayoutInterface } from "./utils/interface/common.interface";
import FooterScreen from "@/app/screens/common/footerScreen";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { createPageMetadata } from "@/app/utils/seo/metadata";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/app/utils/seo/schema";

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
      <body className="w-full">
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
