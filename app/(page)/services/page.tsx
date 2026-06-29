import JsonLd from "@/app/components/JsonLd";
import ContactPageClient from "@/app/components/contactPageClient";
import { createPageMetadata } from "@/app/utils/seo/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";

const title = "Digital Product Development Services | Skyphr";
const description =
  "Explore Skyphr services for SaaS development, AI automation, custom software development, and product design for scalable digital products.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/services",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
});

function ContactUsPage() {
  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({ title, description, path: "/services" }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <ContactPageClient />
    </>
  );
}

export default ContactUsPage;
