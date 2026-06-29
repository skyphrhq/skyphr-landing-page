import type { JsonLd as JsonLdType } from "@/app/utils/seo/schema";

type JsonLdProps = {
  data: JsonLdType | JsonLdType[];
};

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default JsonLd;
