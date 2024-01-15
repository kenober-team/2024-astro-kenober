import { pagesDefaultFields, completeRichText } from "./commons/tinaFields";
import { onPagesBeforeSubmit_Page } from "./commons/utils";
import type { Collection, Form, TinaCMS } from "tinacms";

const page: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  format: "mdx",
  match: { exclude: "{about,index,contact}" },
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      // return document._sys.path;
      return `/${document._sys.breadcrumbs.join("/")}`;
    },
    beforeSubmit: onPagesBeforeSubmit_Page,
  },
  fields: [
    ...pagesDefaultFields,

    { type: "boolean", name: "useProse", label: "Utiliser le style 'Prose'" },
    {
      ...completeRichText,
    },
  ],
};

export default page;
