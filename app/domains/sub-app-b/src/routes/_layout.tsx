import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

// Type assertion needed because this route is in an external package
// without access to the core app's generated route tree types.
// See: https://github.com/TanStack/router/discussions/755
export const Route = (createFileRoute as any)("/sub-app-b/_layout")({
  component: SubAppBLayout,
});

function SubAppBLayout() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-red-800 bg-red-950/50 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-red-400">Sub-App-B</h2>
            <p className="text-sm text-slate-400">
              Physical mount using package alias
            </p>
          </div>
        </div>
        <nav className="mt-4 flex gap-4 border-t border-red-800 pt-4">
          <Link
            to="/sub-app-b"
            className="text-sm hover:text-red-400 [&.active]:text-red-400"
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/sub-app-b/products"
            className="text-sm hover:text-red-400 [&.active]:text-red-400"
          >
            Products
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
