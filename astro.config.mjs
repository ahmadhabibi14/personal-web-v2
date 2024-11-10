import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://habi14.pages.dev/",
  integrations: [react(), tailwind(), icon(), mdx()],
  output: "server",
  adapter: cloudflare(),
});