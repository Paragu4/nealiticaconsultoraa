
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  // One client per request: a module-level QueryClient leaks cached data between SSR requests.
  const queryClient = new QueryClient();

    if (typeof window !== "undefined") {
    console.log("[DEBUG ROUTER]", {
      baseUrl: import.meta.env.BASE_URL,
      pathname: window.location.pathname,
    });
  }
  
  const router = createRouter({
    routeTree,
    basepath: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

    if (typeof window !== "undefined") {
    console.log("[DEBUG ROUTER STATE]", {
      basepath: router.options.basepath,
      location: router.state.location.pathname,
      matches: router.state.matches.map((match) => ({
        routeId: match.routeId,
        status: match.status,
      })),
    });
  }
  
  return router;
};
