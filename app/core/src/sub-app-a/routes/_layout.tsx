import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/sub-app-a/_layout")({
  component: SubAppALayout,
});

function SubAppALayout() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-emerald-800 bg-emerald-950/50 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-emerald-400">
              Sub-App-A
            </h2>
            <p className="text-sm text-slate-400">
              Physical mount using TypeScript path alias
            </p>
          </div>
        </div>
        <nav className="mt-4 flex gap-4 border-t border-emerald-800 pt-4">
          <Link
            to="/sub-app-a"
            className="text-sm hover:text-emerald-400 [&.active]:text-emerald-400"
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/sub-app-a/products"
            className="text-sm hover:text-emerald-400 [&.active]:text-emerald-400"
          >
            Products
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
