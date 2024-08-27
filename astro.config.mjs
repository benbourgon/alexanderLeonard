import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

import { sanityConfig } from "./src/config/sanity.config";
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), tailwind(), sanity(sanityConfig), react()],
});
