// tina/collections/commons/warning.jsx
import { jsx, jsxs } from "react/jsx-runtime";
var WarningIcon = (props) => {
  return jsxs(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 24 24",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        jsx("path", { d: "M11.001 10h2v5h-2zM11 16h2v2h-2z" }),
        jsx("path", { d: "M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z" })
      ]
    }
  );
};
var RestartWarning = (view) => {
  console.log("\u{1F680} ~ RestartWarning ~ view:", view);
  return jsx("p", { className: "mb-4 rounded-lg border border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100 px-4 py-2.5 shadow", children: jsxs("div", { className: "flex items-center gap-2", children: [
    jsx(WarningIcon, { className: `h-auto w-6 flex-shrink-0 text-yellow-400` }),
    jsxs("div", { className: `flex-1 whitespace-normal text-sm text-yellow-700	`, children: [
      "Pour voir les modifications, il faut sauvegarder pour d\xE9clencher un refresh.",
      " ",
      view.view && jsx(
        "a",
        {
          href: `${view.view}`,
          className: "underline",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "consulter la page"
        }
      )
    ] })
  ] }) });
};

// tina/collections/associate.jsx
import { jsx as jsx2 } from "react/jsx-runtime";
var team = {
  label: "Page: Complices",
  name: "associate",
  path: "src/data",
  match: { include: "associate" },
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "string",
      name: "_warning",
      ui: {
        component: () => {
          return jsx2(RestartWarning, {});
        }
      }
    },
    { type: "string", name: "title", label: "Titre", required: true },
    { type: "image", name: "hero_bg", label: "Hero Image", required: true },
    { type: "rich-text", name: "intro", label: "Intro" },
    {
      type: "object",
      name: "associates",
      label: "Complices",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: `${item?.name}, publi\xE9: ${item?.published || false}`
          };
        },
        defaultItem: () => {
          return { isButton: false };
        }
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Nom",
          required: true,
          isTitle: true
        },
        {
          type: "string",
          name: "url",
          label: "URL"
        },
        {
          type: "boolean",
          name: "published",
          label: "Published",
          required: true
        },
        {
          type: "rich-text",
          name: "description",
          label: "Description",
          required: true
        },
        {
          type: "object",
          name: "image",
          label: "Image",
          fields: [
            { type: "image", name: "src", label: "Image", required: true },
            { type: "string", name: "alt", label: "Alt", required: true }
          ]
        }
      ]
    }
  ]
};
var associate_default = team;

// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/home.jsx
import { jsx as jsx3 } from "react/jsx-runtime";
var home = {
  label: "Page: Accueil",
  name: "homeData",
  path: "src/data",
  match: { include: "homeData" },
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
    // router: ({ document }) => {
    //   console.log("🚀 ~ home.ui.document:", document);
    //   // navigate to the post that was clicked
    //   // return document._sys.path;
    //   return `/${document._sys.breadcrumbs.join("/")}`;
    //   return `/`;
    // },
  },
  fields: [
    {
      type: "string",
      name: "_warning",
      ui: {
        component: () => {
          return jsx3(RestartWarning, { view: `/` });
        }
      }
    },
    // ...pagesDefaultFields,
    { type: "rich-text", name: "hero_text", label: "Hero Texte" },
    { type: "image", name: "hero_bg", label: "Hero Image", required: true },
    { type: "string", name: "intro_title", label: "Intro - Title" },
    { type: "rich-text", name: "intro_text", label: "Intro - Texte" },
    { type: "string", name: "intro_offre", label: "Intro - Offre" },
    {
      type: "object",
      name: "offres",
      label: "Offres",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        }
      },
      fields: [
        { type: "string", name: "title", label: "Title" },
        {
          type: "string",
          name: "base_line",
          label: "Base line (bold)",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "object",
          name: "image",
          label: "Image",
          fields: [
            { type: "image", name: "src", label: "Image", required: true },
            { type: "string", name: "alt", label: "Alt", required: true }
          ]
        }
      ]
    },
    { type: "string", name: "principe_title", label: "Principe - Titre" },
    {
      type: "rich-text",
      name: "principe_sub_title",
      label: "Principe - Sous titre"
    },
    { type: "rich-text", name: "principe_text", label: "Principe - Text" },
    {
      type: "object",
      name: "principe_image",
      label: "Principe - Image",
      fields: [
        { type: "image", name: "src", label: "Image", required: true },
        { type: "string", name: "alt", label: "Alt", required: true }
      ]
    },
    {
      type: "rich-text",
      name: "principe_text_image",
      label: "Principe - Image > Text"
    },
    {
      type: "string",
      name: "principe_text_bt_label",
      label: "Principe - Image > BT > Label"
    },
    {
      type: "string",
      name: "principe_text_bt_url",
      label: "Principe - Image > BT > URL"
    },
    {
      type: "object",
      name: "testimonial",
      label: "T\xE9moignages",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.name };
        }
      },
      fields: [
        {
          type: "string",
          name: "text",
          label: "Texte",
          ui: {
            component: "textarea"
          }
        },
        { type: "string", name: "name", label: "Nom" }
      ]
    },
    {
      type: "object",
      name: "gallery",
      label: "Gallerie",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.alt };
        }
      },
      fields: [
        { type: "image", name: "src", label: "Image", required: true },
        { type: "string", name: "alt", label: "Alt", required: true }
      ]
    }
  ]
};
var home_default = home;

// tina/collections/navDataPrimary.jsx
import { jsx as jsx4 } from "react/jsx-runtime";
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
      type: "string",
      name: "_warning",
      ui: {
        component: () => {
          return jsx4(RestartWarning, {});
        }
      }
    },
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

// tina/collections/navDataSecondary.jsx
import { jsx as jsx5 } from "react/jsx-runtime";
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
      type: "string",
      name: "_warning",
      ui: {
        component: () => {
          return jsx5(RestartWarning, {});
        }
      }
    },
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
  { type: "image", name: "hero_bg", label: "Hero Image", required: true },
  {
    type: "datetime",
    name: "createdAt",
    label: "Creation date",
    ui: {
      component: "hidden"
    }
  },
  {
    type: "datetime",
    name: "updatedAt",
    label: "Updated date",
    ui: {
      component: "hidden"
    }
  },
  {
    type: "string",
    name: "description",
    label: "Description - SEO",
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

// tina/collections/page.jsx
import { jsx as jsx6 } from "react/jsx-runtime";
var page = {
  name: "page",
  label: "Autres pages",
  path: "src/content/pages",
  format: "mdx",
  match: { exclude: "{index,contact,complices,equipe}" },
  ui: {
    router: ({ document }) => {
      return `/${document._sys.breadcrumbs.join("/")}`;
    },
    beforeSubmit: onPagesBeforeSubmit_Page
  },
  fields: [
    {
      type: "string",
      name: "_warning",
      ui: {
        component: () => {
          return jsx6(RestartWarning, {});
        }
      }
    },
    ...pagesDefaultFields,
    { type: "boolean", name: "useProse", label: "Utiliser le style 'Prose'" },
    {
      ...completeRichText
    }
  ]
};
var page_default = page;

// tina/collections/siteData.jsx
import { jsx as jsx7 } from "react/jsx-runtime";
var siteData = {
  label: "Site Informations (SEO, etc.)",
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
      name: "_warning",
      ui: {
        component: () => {
          return jsx7(RestartWarning, {});
        }
      }
    },
    {
      type: "string",
      name: "_seo",
      ui: {
        component: () => {
          return jsx7("h2", { className: "mb-2 text-xl font-black", children: "SEO" });
        }
      }
    },
    {
      type: "string",
      name: "title",
      label: "Default Title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Default Description",
      ui: {
        component: "textarea"
      }
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
      type: "object",
      name: "image",
      label: "Default Image",
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
    {
      type: "string",
      name: "_footer",
      ui: {
        component: () => {
          return jsx7("h2", { className: "mb-2 text-xl font-black", children: "Footer" });
        }
      }
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

// tina/collections/team.jsx
import { jsx as jsx8 } from "react/jsx-runtime";
var team2 = {
  label: "Page: \xC9quipe / Contact",
  name: "team",
  path: "src/data",
  match: { include: "team" },
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "string",
      name: "_warning",
      ui: {
        component: () => {
          return jsx8(RestartWarning, {});
        }
      }
    },
    {
      type: "string",
      name: "_team",
      ui: {
        component: () => {
          return jsx8("h2", { className: "mb-2 text-xl font-black", children: "Sp\xE9cifique page \xC9quipe" });
        }
      }
    },
    {
      type: "object",
      name: "equipe",
      label: "Contenu page \xE9quipe",
      fields: [
        { type: "string", name: "title", label: "Titre", required: true },
        { type: "image", name: "hero_bg", label: "Hero Image", required: true }
      ]
    },
    {
      type: "string",
      name: "_contact",
      ui: {
        component: () => {
          return jsx8("h2", { className: "mb-2 text-xl font-black", children: "Sp\xE9cifique page Contact" });
        }
      }
    },
    {
      type: "object",
      name: "contact",
      label: "Contenu page contact",
      fields: [
        { type: "string", name: "title", label: "Titre", required: true },
        { type: "image", name: "hero_bg", label: "Hero Image", required: true },
        { type: "string", name: "before_text", label: "Intro" },
        { type: "string", name: "after_title", label: "Bas de page - Titre" },
        {
          type: "string",
          name: "after_text",
          label: "Bas de page - Texte",
          ui: {
            component: "textarea"
          }
        }
      ]
    },
    {
      type: "object",
      name: "members",
      label: "Membres",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: `${item?.name}, publi\xE9: ${item?.published || false}`
          };
        },
        defaultItem: () => {
          return { isButton: false };
        }
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Nom",
          required: true,
          isTitle: true
        },
        {
          type: "boolean",
          name: "published",
          label: "Published",
          required: true
        },
        { type: "string", name: "role", label: "R\xF4le(s)", required: true },
        {
          type: "string",
          name: "education",
          label: "\xC9tude(s)",
          required: true
        },
        { type: "string", name: "citation", label: "Citation", required: true },
        {
          type: "rich-text",
          name: "bio",
          label: "Bio",
          required: true
        },
        {
          type: "image",
          name: "image_inactive",
          label: "Image - inactive",
          required: true
        },
        {
          type: "image",
          name: "image_active",
          label: "Image - active",
          required: true
        },
        {
          type: "string",
          name: "linkedin",
          label: "Linkedin",
          required: false
        },
        { type: "string", name: "email", label: "Email", required: false }
      ]
    }
  ]
};
var team_default = team2;

// tina/config.ts
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
    collections: [
      home_default,
      team_default,
      associate_default,
      page_default,
      navDataPrimary_default,
      navDataSecondary_default,
      siteData_default
    ]
  }
});
export {
  config_default as default
};
