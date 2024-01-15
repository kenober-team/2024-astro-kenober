import type { Collection } from "tinacms";

const navDataSecondary: Collection = {
  label: "Secondary Navigation",
  name: "navDataSecondary",
  path: "src/data",
  match: { include: "navDataSecondary" },
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  defaultItem() {
    return {
      isButton: false,
    };
  },
  fields: [
    {
      type: "object",
      name: "links",
      label: "Links",
      list: true,
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.name };
        },
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          required: true,
          isTitle: true,
        },
        {
          type: "string",
          name: "path",
          label: "Path",
          required: true,
        },
        {
          type: "string",
          name: "title",
          label: "Title (for SEO)",
          required: true,
        },
        {
          type: "boolean",
          name: "isButton",
          label: "Display as a button",
          required: true,
        },
        {
          type: "string",
          name: "target",
          label: "Target",
          description: "How to open the link",
          required: true,
          options: ["_self", "_blank"],
        },
      ],
    },
  ],
};
export default navDataSecondary;
