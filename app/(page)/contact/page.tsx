import JsonLd from "@/app/components/JsonLd";
import ContactPageClient from "@/app/components/contactPageClient";
import { createPageMetadata } from "@/app/utils/seo/metadata";
import { generateBreadcrumbSchema, generateContactPageSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";

const title = "Contact Skyphr | Start Your Digital Product Project";
const description =
  "Contact Skyphr to discuss SaaS development, AI automation, UI/UX design, custom software, or dedicated development support for your next digital product.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/contact",
});

function ContactUsPage() {
  return (
    <>
      <JsonLd
        data={[
          generateContactPageSchema({ title, description, path: "/contact" }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactPageClient />
    </>
  );
}

export default ContactUsPage;
