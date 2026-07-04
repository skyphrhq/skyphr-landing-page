import JsonLd from "@/app/components/JsonLd";
import ContactPageClient from "@/app/components/contactPageClient";
import { CONTACT_PAGE_DATA } from "@/app/content/pageContent/pageData/contact.data";
import { normalizePageMetadata } from "@/app/utils/seo/metadata";
import { generateBreadcrumbSchema, generateContactPageSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";

const title =
  typeof CONTACT_PAGE_DATA.metadata?.title === "string"
    ? CONTACT_PAGE_DATA.metadata.title
    : "Contact Skyphr | Start Your Digital Product Project";
const description =
  CONTACT_PAGE_DATA.metadata?.description ??
  "Contact Skyphr to discuss SaaS development, AI automation, UI/UX design, custom software, or dedicated development support for your next digital product.";
const path = "/contact";

export const metadata: Metadata = CONTACT_PAGE_DATA.metadata
  ? normalizePageMetadata(CONTACT_PAGE_DATA.metadata, path)
  : { title, description };

function ContactUsPage() {
  return (
    <>
      <JsonLd
        data={[
          generateContactPageSchema({ title, description, path }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path },
          ]),
        ]}
      />
      <ContactPageClient />
    </>
  );
}

export default ContactUsPage;
