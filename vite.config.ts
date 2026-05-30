import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    ssr: false,
    prerender: {
      enabled: true,
      routes: ["/", "/about", "/contact"],
    },
  },
});
