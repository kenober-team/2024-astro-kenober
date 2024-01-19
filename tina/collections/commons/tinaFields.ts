import type { TinaField } from "tinacms";
import { imageBlock } from "./templates";

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
    label: "Title - SEO",
    isTitle: true,
    required: true,
  },
  {
    type: "datetime",
    name: "createdAt",
    label: "Creation date",
    ui: {
      component: "hidden",
    },
  },
  {
    type: "datetime",
    name: "updatedAt",
    label: "Updated date",
    ui: {
      component: "hidden",
    },
  },
  {
    type: "string",
    name: "description",
    label: "Description - SEO",
    required: true,
    ui: {
      component: "textarea",
    },
  },
  { type: "string", name: "hero_title", label: "Hero Title" },
  { type: "image", name: "hero_bg", label: "Hero Image" },
];
const shortPagesDefaultFields: TinaField[] = [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  { type: "string", name: "hero_title", label: "Hero Title" },
  {
    type: "string",
    name: "description",
    label: "Description - SEO",
    required: true,
    ui: {
      component: "textarea",
    },
  },
  { type: "image", name: "hero_bg", label: "Hero Image" },
];
export { shortPagesDefaultFields, pagesDefaultFields, completeRichText };
