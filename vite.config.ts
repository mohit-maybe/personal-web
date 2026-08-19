import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Rebuild optimized TanStack Router modules after dependency updates so the
  // preview never requests stale dynamically imported chunks.
  optimizeDeps: {
    force: true,
    include: ["@tanstack/react-router", "@tanstack/react-router/routerStores"],
  },
  tanstackStart: {
    ssr: false,
    prerender: {
      enabled: true,
      routes: ["/", "/about", "/contact"],
    },
  },
});
