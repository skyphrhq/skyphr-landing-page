export type SectionFieldType = "STRING" | "TEXTAREA" | "RICH_TEXT" | "NUMBER" | "BOOLEAN" | "IMAGE" | "ARRAY";

export type SectionSchemaField = {
  type: SectionFieldType;
  required?: boolean;
  // IMAGE fields only: the CMS asks the editor for alt text
  alt?: boolean;
  fields?: SectionSchema;
};

export type SectionSchema = Record<string, SectionSchemaField>;

// Shape the CMS saves for an IMAGE field
export type CMSImageData = {
  url: string;
  alt?: string;
  width: number;
  height: number;
};
