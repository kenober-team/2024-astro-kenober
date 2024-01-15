import type { Template } from "tinacms";

// generate jsdoc
/**
 * Template for a positionable image
 * @typedef {Object} Template
 */
const imageBlock: Template = {
  name: "PositionableImage",
  label: "Image",
  ui: {
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return { label: `Image: ${item?.alt}` };
    },
  },
  fields: [
    {
      type: "image",
      label: "Image",
      name: "src",
      required: true,
    },
    { type: "string", label: "Alt", name: "alt", required: true },
    { type: "string", label: "Caption", name: "caption" },
    { type: "string", label: "Class", name: "class" },
    {
      type: "string",
      label: "Position",
      name: "position",
      required: true,
      options: ["float-left", "float-right", "block"],
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
        { label: "quarterWidth", value: "w-full md:w-1/4" },
      ],
    },
  ],
};

export { imageBlock };
