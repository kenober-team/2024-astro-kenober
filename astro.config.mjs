import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
const SITE_URL = process.env.SITE_URL || "http://localhost:4321";
const REPO_NAME = process.env.REPO_NAME || "2024-astro-kenober";
const tina = ({ directiveName = "tina" } = {}) => ({
  name: "tina-cms",
  hooks: {
    "astro:config:setup": ({ addClientDirective, opts }) => {
      addClientDirective({
        name: directiveName,
        entrypoint: "./tina/tina.mjs",
      });
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: `/${REPO_NAME}`,
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true,
    }),
    sitemap({
      filter: (page) => page !== `${SITE_URL}/style-guide/`,
    }),
    robotsTxt(),
    mdx(),
    react(),
    icon({
      iconDir: "src/assets/icons",
      include: {
        tabler: ["*"],
      },
    }),
    tina(),
    partytown(),
  ],
});
