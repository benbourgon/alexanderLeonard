import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
const {
  PUBLIC_SANITY_API_VERSION,
  PUBLIC_SANITY_PROJECT_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_USE_CDN,
  PUBLIC_SANITY_BASE_PATH,
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://alexanderleonard.netlify.app/",
  output: "static",

  env: {
    schema: {
      PUBLIC_SANITY_PROJECT_ID: envField.string({
        context: "client",
        access: "public",
      }),
      PUBLIC_SANITY_PROJECT_DATASET: envField.string({
        context: "client",
        access: "public",
        default: "production",
      }),
      PUBLIC_SANITY_USE_CDN: envField.boolean({
        context: "client",
        access: "public",
        default: false,
      }),
      PUBLIC_SANITY_API_VERSION: envField.string({
        context: "client",
        access: "public",
        default: "2024-08-28",
      }),
    },
  },

  integrations: [
    sitemap(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_PROJECT_DATASET,
      useCdn: PUBLIC_SANITY_USE_CDN,
      apiVersion: PUBLIC_SANITY_API_VERSION,
      studioBasePath: PUBLIC_SANITY_BASE_PATH,
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});