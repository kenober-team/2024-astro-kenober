import { RestartWarning } from "./commons/warning";

/** @type {import("tinacms").Collection} */
const team = {
  label: "Page: Équipe / Contact",
  name: "team",
  path: "src/data",
  match: { include: "team" },
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
    {
      type: "string",
      name: "_team",
      ui: {
        component: () => {
          return (
            <h2 className="mb-2 text-xl font-black">Spécifique page Équipe</h2>
          );
        },
      },
    },
    {
      type: "object",
      name: "equipe",
      label: "Contenu page équipe",
      fields: [
        { type: "string", name: "title", label: "Titre", required: true },
        { type: "image", name: "hero_bg", label: "Hero Image", required: true },
      ],
    },
    {
      type: "string",
      name: "_contact",
      ui: {
        component: () => {
          return (
            <h2 className="mb-2 text-xl font-black">Spécifique page Contact</h2>
          );
        },
      },
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
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "members",
      label: "Membres",
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
        { type: "string", name: "role", label: "Rôle(s)", required: true },
        {
          type: "string",
          name: "education",
          label: "Étude(s)",
          required: true,
        },
        { type: "string", name: "citation", label: "Citation", required: true },
        {
          type: "rich-text",
          name: "bio",
          label: "Bio",
          required: true,
        },
        {
          type: "image",
          name: "image_inactive",
          label: "Image - inactive",
          required: true,
        },
        {
          type: "image",
          name: "image_active",
          label: "Image - active",
          required: true,
        },
        {
          type: "string",
          name: "linkedin",
          label: "Linkedin",
          required: false,
        },
        { type: "string", name: "email", label: "Email", required: false },
      ],
    },
  ],
};
export default team;
