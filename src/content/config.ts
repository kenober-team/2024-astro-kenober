// Importe les propriétés depuis `astro:content`
import { date } from "astro/zod";
import {
  type ImageFunction,
  defineCollection,
  z,
  reference,
} from "astro:content";

// import { type TinaMarkdownContent } from "tinacms/dist/rich-text";
// Exporter un objet `collections` unique pour y enregistrer vos collections

export const collections = {
  // Définir un `type` et un `schema` pour chaque collection
  pages: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
        useProse: z.boolean().optional(),
      }),
  }),
};
