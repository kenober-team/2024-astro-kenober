import { imageBlock } from "./templates";
import type { TinaField } from "tinacms";

/**
 * This constant represents a template for a rich text block.
 * It should be an object that conforms to the `TinaField` type from `@tinacms/schema-tools`.
 * The object should define the fields and other properties for the rich text block.
 *
 * @type {TinaField}
 */
const completeRichText: TinaField = {
  type: "rich-text",
  name: "body",
  label: "Body",
  isBody: true,
  templates: [imageBlock],
};

const pagesDefaultFields: TinaField[] = [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  { type: "datetime", name: "createdAt", label: "Creation date" },
  { type: "datetime", name: "updatedAt", label: "Updated date" },
  { type: "boolean", name: "useProse", label: "Utiliser le style 'Prose'" },
  {
    type: "string",
    name: "description",
    label: "Description",
    required: true,
    ui: {
      component: "textarea",
    },
  },
];
export { pagesDefaultFields, completeRichText };
