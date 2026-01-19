import { createRootRouteWithContext, Link, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { QueryClient } from "@tanstack/react-query";

export interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="border-b border-slate-800 bg-slate-900 px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="text-lg font-bold text-amber-400">
            TanStack Router Bug #4984
          </h1>
          <div className="flex gap-4">
            <Link
              to="/"
              className="hover:text-amber-400 [&.active]:text-amber-400"
            >
              Home
            </Link>
            <Link
              to="/sub-app-a"
              className="hover:text-amber-400 [&.active]:text-amber-400"
            >
              Sub-App-A (TS Alias)
            </Link>
            <Link
              to="/sub-app-b"
              className="hover:text-amber-400 [&.active]:text-amber-400"
            >
              Sub-App-B (Pkg Alias)
            </Link>
            <Link
              to="/sub-app-b"
              search={{ mode: "foo" }}
              className="hover:text-amber-400 [&.active]:text-amber-400"
            >
              Sub-App-B?mode=foo
            </Link>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-4xl px-6 py-8">
        <Outlet />
      </main>
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
