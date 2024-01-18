/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1300px",
      // => @media (min-width: 1300px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
        h1: ["2.52632rem"],
        h2: ["2rem"],
        "h2-sub": ["1.47368rem"],
        h3: ["1.47368rem"],
      },
      colors: {
        primary: {
          DEFAULT: "#F6C700",
          content: "#000000",
        },
        neutre: {
          DEFAULT: "#000000",
          content: "#FFFFFF",
        },
        "gris-1": {
          DEFAULT: "#F2F2F2",
          content: "#000000",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0rem",
          md: "2rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
