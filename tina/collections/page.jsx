import { pagesDefaultFields, completeRichText } from "./commons/tinaFields";
import { onPagesBeforeSubmit_Page } from "./commons/utils";
import { RestartWarning } from "./commons/warning";

/** @type {import("tinacms").Collection} */
const page = {
  name: "page",
  label: "Autres pages",
  path: "src/content/pages",
  format: "mdx",
  match: { exclude: "{index,contact,complices,equipe}" },
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      // return document._sys.path;
      return `/${document._sys.breadcrumbs.join("/")}`;
    },
    beforeSubmit: onPagesBeforeSubmit_Page,
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
    ...pagesDefaultFields,

    { type: "boolean", name: "useProse", label: "Utiliser le style 'Prose'" },
    {
      ...completeRichText,
    },
  ],
};

export default page;
