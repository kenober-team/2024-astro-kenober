import { RestartWarning } from "./commons/warning";

/** @type {import("tinacms").Collection} */
const siteData = {
  label: "Site Informations (SEO, etc.)",
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
      name: "_warning",
      ui: {
        component: () => {
          return <RestartWarning />;
        },
      },
    },
    {
      type: "string",
      name: "_seo",
      ui: {
        component: () => {
          return <h2 className="mb-2 text-xl font-black">SEO</h2>;
        },
      },
    },
    {
      type: "string",
      name: "title",
      label: "Default Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Default Description",
      ui: {
        component: "textarea",
      },
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
      type: "object",
      name: "image",
      label: "Default Image",
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
    {
      type: "string",
      name: "_footer",
      ui: {
        component: () => {
          return <h2 className="mb-2 text-xl font-black">Footer</h2>;
        },
      },
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
            "linkedIn",
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
