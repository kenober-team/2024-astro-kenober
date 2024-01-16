/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {},
    extend: {
      fontFamily: {
        arial: ["Arial", "Helvetica", "sans-serif"],
        mesmerize: ["Mesmerize", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        "hero-home": ["1.789rem", "2.053rem"],
        "h1-home": ["1.94737rem", "1.5rem"],
        "nav-principal": ["1.211rem", "1.368rem"],
        base: ["1.316rem", "1.842rem"],
        h2: ["2rem"],
        h3: ["1.47368rem"],
      },
      colors: {
        primary: "#F6C700",
        neutre: "#000000",
        "gris-1": "#F2F2F2",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
