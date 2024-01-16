import { RestartWarning } from "./commons/warning";

/** @type {import("tinacms").Collection} */
const navDataPrimary = {
  label: "Primary Navigation",
  name: "navDataPrimary",
  path: "src/data",
  match: { include: "navDataPrimary" },
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
      type: "string",
      name: "_warning",
      ui: {
        component: () => {
          return <RestartWarning />;
        },
      },
    },
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
        defaultItem() {
          return {
            isButton: false,
          };
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
        {
          type: "object",
          name: "children",
          label: "Sub Links",
          list: true,
          ui: {
            itemProps: (item) => {
              // Field values are accessed by item?.<Field name>
              return { label: item?.name };
            },
            defaultItem() {
              return {
                isButton: false,
              };
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
              name: "path",
              label: "Path",
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
    },
  ],
};
export default navDataPrimary;
