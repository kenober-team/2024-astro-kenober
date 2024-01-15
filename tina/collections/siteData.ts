import type { Collection } from "tinacms";

const siteData: Collection = {
  label: "Site Informations (Global)",
  name: "siteData",
  path: "src/data",
  match: { include: "siteData" },
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "titleTemplate",
      label: "Add to title, ex: '%s | Site'",
    },
    {
      type: "string",
      name: "twitterUsername",
      label: "Twitter Username",
    },
    {
      type: "string",
      name: "fbPageUrl",
      label: "Facebook Page/User URL",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "image",
      label: "Image",
      fields: [
        {
          type: "image",
          name: "url",
          label: "URL",
          required: true,
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true,
        },
      ],
    },
    { type: "rich-text", name: "informations", label: "Informations" },
    {
      type: "object",
      name: "networks",
      label: "Social Networks",
      list: true,
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.url };
        },
      },
      fields: [
        { type: "string", name: "url", label: "URL", required: true },
        { type: "string", name: "title", label: "Title", required: true },
        {
          type: "string",
          name: "icon",
          label: "Network",
          required: true,
          options: [
            "tabler:brand-github",
            "tabler:brand-linkedin",
            "tabler:brand-facebook",
            "tabler:brand-instagram",
            "tabler:brand-google-maps",
          ],
        },
      ],
    },
  ],
};

export default siteData;
