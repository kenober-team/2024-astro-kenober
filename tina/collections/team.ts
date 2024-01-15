import { onPagesBeforeSubmit_Page } from "./commons/utils";
import type { Collection, Form, TinaCMS } from "tinacms";

const team: Collection = {
  label: "Équipe",
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
      type: "object",
      name: "equipe",
      label: "Page équipe",
      fields: [
        { type: "string", name: "title", label: "Titre", required: true },
        { type: "image", name: "hero_bg", label: "Hero Image", required: true },
      ],
    },
    {
      type: "object",
      name: "Contact",
      label: "Page contact",
      fields: [
        { type: "string", name: "title", label: "Titre", required: true },
        { type: "image", name: "hero_bg", label: "Hero Image", required: true },
        { type: "string", name: "before_text", label: "Intro" },
        { type: "string", name: "after_title", label: "Bas de page - Titre" },
        { type: "string", name: "after_text", label: "Bas de page - Texte" },
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
