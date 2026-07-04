import JsonLd from "@/app/components/JsonLd";
import ContactPageClient from "@/app/components/contactPageClient";
import { createPageMetadata } from "@/app/utils/seo/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";

const title = "Hire Developers and Designers | Skyphr";
const description =
  "Hire dedicated developers and designers from Skyphr for SaaS platforms, AI products, custom software, and modern web application delivery.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/hire",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
});

function HireUSPage() {
  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({ title, description, path: "/hire" }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Hire", path: "/hire" },
          ]),
        ]}
      />
      <ContactPageClient />
    </>
  );
}

export default HireUSPage;
