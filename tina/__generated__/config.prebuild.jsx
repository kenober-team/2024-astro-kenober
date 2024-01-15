// tina/collections/navDataPrimary.ts
var navDataPrimary = {
  label: "Primary Navigation",
  name: "navDataPrimary",
  path: "src/data",
  match: { include: "navDataPrimary" },
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  defaultItem() {
    return {
      isButton: false
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
          return { label: item?.name };
        },
        defaultItem() {
          return {
            isButton: false
          };
        }
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          required: true,
          isTitle: true
        },
        {
          type: "string",
          name: "path",
          label: "Path",
          required: true
        },
        {
          type: "string",
          name: "title",
          label: "Title (for SEO)",
          required: true
        },
        {
          type: "boolean",
          name: "isButton",
          label: "Display as a button",
          required: true
        },
        {
          type: "string",
          name: "target",
          label: "Target",
          description: "How to open the link",
          required: true,
          options: ["_self", "_blank"]
        },
        {
          type: "object",
          name: "children",
          label: "Sub Links",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.name };
            },
            defaultItem() {
              return {
                isButton: false
              };
            }
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
              isTitle: true
            },
            {
              type: "string",
              name: "title",
              label: "Title (for SEO)",
              required: true
            },
            {
              type: "boolean",
              name: "isButton",
              label: "Display as a button",
              required: true
            },
            {
              type: "string",
              name: "path",
              label: "Path",
              required: true
            },
            {
              type: "string",
              name: "target",
              label: "Target",
              description: "How to open the link",
              required: true,
              options: ["_self", "_blank"]
            }
          ]
        }
      ]
    }
  ]
};
var navDataPrimary_default = navDataPrimary;

// tina/collections/navDataSecondary.ts
var navDataSecondary = {
  label: "Secondary Navigation",
  name: "navDataSecondary",
  path: "src/data",
  match: { include: "navDataSecondary" },
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  defaultItem() {
    return {
      isButton: false
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
          return { label: item?.name };
        }
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          required: true,
          isTitle: true
        },
        {
          type: "string",
          name: "path",
          label: "Path",
          required: true
        },
        {
          type: "string",
          name: "title",
          label: "Title (for SEO)",
          required: true
        },
        {
          type: "boolean",
          name: "isButton",
          label: "Display as a button",
          required: true
        },
        {
          type: "string",
          name: "target",
          label: "Target",
          description: "How to open the link",
          required: true,
          options: ["_self", "_blank"]
        }
      ]
    }
  ]
};
var navDataSecondary_default = navDataSecondary;

// tina/collections/commons/templates.ts
var imageBlock = {
  name: "PositionableImage",
  label: "Image",
  ui: {
    itemProps: (item) => {
      return { label: `Image: ${item?.alt}` };
    }
  },
  fields: [
    {
      type: "image",
      label: "Image",
      name: "src",
      required: true
    },
    { type: "string", label: "Alt", name: "alt", required: true },
    { type: "string", label: "Caption", name: "caption" },
    { type: "string", label: "Class", name: "class" },
    {
      type: "string",
      label: "Position",
      name: "position",
      required: true,
      options: ["float-left", "float-right", "block"]
    },
    {
      type: "string",
      label: "Width",
      name: "imgWidth",
      required: true,
      options: [
        { label: "auto", value: "w-auto" },
        { label: "fullWidth", value: "w-full" },
        { label: "halfWidth", value: "w-full md:w-1/2" },
        { label: "thirdWidth", value: "w-full md:w-1/3" },
        { label: "quarterWidth", value: "w-full md:w-1/4" }
      ]
    }
  ]
};

// tina/collections/commons/tinaFields.ts
var completeRichText = {
  type: "rich-text",
  name: "body",
  label: "Body",
  isBody: true,
  templates: [imageBlock]
};
var pagesDefaultFields = [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true
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
      component: "textarea"
    }
  }
];

// src/js/utils.js
function slugify(text) {
  return text.toString().normalize("NFD").toLowerCase().replace(/['"]/g, " ").replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/[^\x00-\x7F]/g, "-").replace(/-+$/, "");
}

// tina/collections/commons/utils.ts
var onPagesBeforeSubmit_Page = async ({
  form,
  cms,
  values
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      filename: slugify(values.title)
    };
  }
  return {
    ...values,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
};

// tina/collections/page.ts
var page = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  format: "mdx",
  match: { exclude: "{about,home}" },
  ui: {
    router: ({ document }) => {
      return `/${document._sys.breadcrumbs.join("/")}`;
    },
    beforeSubmit: onPagesBeforeSubmit_Page
  },
  fields: [
    ...pagesDefaultFields,
    {
      ...completeRichText
    }
  ]
};
var page_default = page;

// tina/collections/siteData.ts
var siteData = {
  label: "Site Informations (Global)",
  name: "siteData",
  path: "src/data",
  match: { include: "siteData" },
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "titleTemplate",
      label: "Add to title, ex: '%s | Site'"
    },
    {
      type: "string",
      name: "twitterUsername",
      label: "Twitter Username"
    },
    {
      type: "string",
      name: "fbPageUrl",
      label: "Facebook Page/User URL"
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea"
      }
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
          required: true
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true
        }
      ]
    },
    { type: "rich-text", name: "informations", label: "Informations" },
    {
      type: "object",
      name: "networks",
      label: "Social Networks",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.url };
        }
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
            "tabler:brand-google-maps"
          ]
        }
      ]
    }
  ]
};
var siteData_default = siteData;

// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "/src/assets",
      publicFolder: ""
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [navDataPrimary_default, navDataSecondary_default, siteData_default, page_default]
  }
});
export {
  config_default as default
};
