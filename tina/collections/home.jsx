import { RestartWarning } from "./commons/warning";

/** @type {import("tinacms").Collection} */
const home = {
  label: "Page: Accueil",
  name: "homeData",
  path: "src/data",
  match: { include: "homeData" },
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
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
          return <RestartWarning view={`/`} />;
        },
      },
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
          // Field values are accessed by item?.<Field name>
          return { label: item?.title };
        },
      },
      fields: [
        { type: "string", name: "title", label: "Title" },
        {
          type: "string",
          name: "base_line",
          label: "Base line (bold)",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
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
    { type: "string", name: "principe_title", label: "Principe - Titre" },
    {
      type: "rich-text",
      name: "principe_sub_title",
      label: "Principe - Sous titre",
    },
    { type: "rich-text", name: "principe_text", label: "Principe - Text" },
    {
      type: "object",
      name: "principe_image",
      label: "Principe - Image",
      fields: [
        { type: "image", name: "src", label: "Image", required: true },
        { type: "string", name: "alt", label: "Alt", required: true },
      ],
    },
    {
      type: "rich-text",
      name: "principe_text_image",
      label: "Principe - Image > Text",
    },
    {
      type: "string",
      name: "principe_text_bt_label",
      label: "Principe - Image > BT > Label",
    },
    {
      type: "string",
      name: "principe_text_bt_url",
      label: "Principe - Image > BT > URL",
    },
    {
      type: "object",
      name: "testimonial",
      label: "Témoignages",
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
          name: "text",
          label: "Texte",
          ui: {
            component: "textarea",
          },
        },
        { type: "string", name: "name", label: "Nom" },
      ],
    },
    {
      type: "object",
      name: "gallery",
      label: "Gallerie",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.alt };
        },
      },
      fields: [
        { type: "image", name: "src", label: "Image", required: true },
        { type: "string", name: "alt", label: "Alt", required: true },
      ],
    },
  ],
};

export default home;
