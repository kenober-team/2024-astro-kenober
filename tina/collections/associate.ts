import { onPagesBeforeSubmit_Page } from "./commons/utils";
import type { Collection, Form, TinaCMS } from "tinacms";

const team: Collection = {
  label: "Complices",
  name: "associate",
  path: "src/data",
  match: { include: "associate" },
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    { type: "string", name: "title", label: "Titre", required: true },
    { type: "image", name: "hero_bg", label: "Hero Image", required: true },
    { type: "string", name: "intro", label: "Intro" },
    {
      type: "object",
      name: "associates",
      label: "Complices",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: `${item?.name}, publié: ${item?.published || false}`,
          };
        },
        defaultItem: () => {
          return { isButton: false };
        },
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Nom",
          required: true,
          isTitle: true,
        },
        {
          type: "boolean",
          name: "published",
          label: "Published",
          required: true,
        },
        {
          type: "rich-text",
          name: "description",
          label: "Description",
          required: true,
        },
        {
          type: "object",
          name: "image",
          label: "Image",
          fields: [
            { type: "image", name: "src", label: "Image", required: true },
            { type: "string", name: "alt", label: "Alt", required: true },
          ],
        },
      ],
    },
  ],
};
export default team;
