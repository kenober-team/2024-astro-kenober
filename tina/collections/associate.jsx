import { RestartWarning } from "./commons/warning";

/** @type {import("tinacms").Collection} */
const team = {
  label: "Page: Complices",
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
    {
      type: "string",
      name: "_warning",
      ui: {
        component: () => {
          return <RestartWarning />;
        },
      },
    },
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
