import { createFileRoute, Link } from "@tanstack/react-router";

type SearchParams = {
  mode?: string;
};

// Type assertion needed because this route is in an external package
// without access to the core app's generated route tree types.
// See: https://github.com/TanStack/router/discussions/755
export const Route = (createFileRoute as any)("/sub-app-b/")({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      mode: typeof search.mode === "string" ? search.mode : undefined,
    };
  },
  component: SubAppBHome,
});

function SubAppBHome() {
  const { mode } = Route.useSearch();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-100">Sub-App-B Home</h3>

      {mode && (
        <div className="rounded border border-amber-700 bg-amber-950 p-4">
          <p className="text-sm text-amber-400">
            Mode: <code className="font-bold">{mode}</code>
          </p>
        </div>
      )}

      <p className="text-slate-400">
        This sub-app is mounted using a{" "}
        <code className="text-red-300">physical()</code> virtual route with a
        package alias:
      </p>
      <pre className="rounded bg-slate-900 p-4 text-sm">
{`// routes.ts
physical("/sub-app-b", "@tsvrm/sub-app-b/routes")`}
      </pre>
      <p className="text-slate-400">
        The directory follows TanStack Router's file-based routing convention:
      </p>
      <pre className="rounded bg-slate-900 p-4 text-sm">
{`@tsvrm/sub-app-b/src/routes/
  _layout.tsx   -> Layout for /sub-app-b
  index.tsx     -> /sub-app-b/
  products.tsx  -> /sub-app-b/products`}
      </pre>
      <Link
        to="/sub-app-b/products"
        className="inline-block rounded bg-red-700 px-4 py-2 text-sm font-medium hover:bg-red-600"
      >
        View Products
      </Link>
    </div>
  );
}
