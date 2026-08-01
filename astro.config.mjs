import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://oaky.ltd",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
