
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env["GITHUB_ACTIONS"] === "true";
export default defineConfig({
  vite: {
    base: isGitHubPages
      ? "/nealiticaconsultoraa/"
      : "/",
  },

  ...(isGitHubPages
    ? {
        nitro: {
          preset: "github_pages",
        },
      }
    : {}),

tanstackStart: {
  server: { entry: "server" },

router: {
  basepath: "/",
},
},
});
