export type SectionFieldType = "STRING" | "TEXTAREA" | "NUMBER" | "BOOLEAN" | "IMAGE" | "ARRAY";

export type SectionSchemaField = {
  type: SectionFieldType;
  required?: boolean;
  fields?: SectionSchema;
};

export type SectionSchema = Record<string, SectionSchemaField>;
