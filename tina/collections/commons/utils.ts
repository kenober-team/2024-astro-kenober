import { slugify } from "../../../src/js/utils";
import type { Form, TinaCMS } from "tinacms";

const onPagesBeforeSubmit_Page = async ({
  form,
  cms,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename: slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
  };
};

export { onPagesBeforeSubmit_Page };
