import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://xeraph.dev",
  integrations: [
    tailwind(),
    compress(),
    robotsTxt(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
    mdx(),
    astroI18next(),
    svelte(),
  ],
});
