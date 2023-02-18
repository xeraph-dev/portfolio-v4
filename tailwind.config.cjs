/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        amita: ["Amita", "sans-erif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [
    require("autoprefixer"),
    require("postcss"),
    require("@tailwindcss/line-clamp"),
  ],
};
