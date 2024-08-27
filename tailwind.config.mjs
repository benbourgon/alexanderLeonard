/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      // https://github.com/system-fonts/modern-font-stacks
      systemui: ["system-ui", "sans-serif"],
      oldstyle: [
        "Iowan Old Style",
        "Palatino Linotype",
        "URW Palladio L",
        "P052",
        "serif",
      ],
      slabserif: [
        "Rockwell",
        "Rockwell Nova",
        "Roboto Slab",
        "DejaVu Serif",
        "Sitka Small",
        "serif",
      ],
    },
    extend: {},
  },
  plugins: [],
};
