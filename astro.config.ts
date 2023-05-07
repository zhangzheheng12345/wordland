import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://wordland.netlify.app",
  integrations: [mdx(), sitemap()],
});
