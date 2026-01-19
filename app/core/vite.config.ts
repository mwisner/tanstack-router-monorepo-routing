import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { routes } from "./src/routes";
import path from "path";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
      virtualRouteConfig: routes,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@sub-app-a": path.resolve(__dirname, "./src/sub-app-a"),
    },
  },
});
