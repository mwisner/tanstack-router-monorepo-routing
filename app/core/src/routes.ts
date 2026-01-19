import { rootRoute, index, physical } from "@tanstack/virtual-file-routes";

export const routes = rootRoute("__root.tsx", [
  index("index.tsx"),

  // Sub-App-A: Physical mount using TypeScript path alias (triggers bug #4984)
  // The alias @sub-app-a is defined in tsconfig.json and vite.config.ts

  // Doesn't work
  //physical("/sub-app-a", "@sub-app-a/routes"),
  // This works
  physical("/sub-app-a", "../sub-app-a/routes"),

  // Sub-App-B: Physical mount using workspace package (triggers bug #4984)
  // doesn't work
  //physical("/sub-app-b", "@tsvrm/sub-app-b/routes"),

  // Works
  physical("/sub-app-b", "../../node_modules/@tsvrm/sub-app-b/src/routes"),

]);
