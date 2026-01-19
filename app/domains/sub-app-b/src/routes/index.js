import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/sub-app-b/")({
    validateSearch: (search) => {
        return {
            mode: typeof search.mode === "string" ? search.mode : undefined,
        };
    },
    component: SubAppBHome,
});
function SubAppBHome() {
    const { mode } = Route.useSearch();
    return (_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-xl font-semibold text-slate-100", children: "Sub-App-B Home" }), mode && (_jsx("div", { className: "rounded border border-amber-700 bg-amber-950 p-4", children: _jsxs("p", { className: "text-sm text-amber-400", children: ["Mode: ", _jsx("code", { className: "font-bold", children: mode })] }) })), _jsxs("p", { className: "text-slate-400", children: ["This sub-app is mounted using a", " ", _jsx("code", { className: "text-red-300", children: "physical()" }), " virtual route with a package alias:"] }), _jsx("pre", { className: "rounded bg-slate-900 p-4 text-sm", children: `// routes.ts
physical("/sub-app-b", "@tsvrm/sub-app-b/routes")` }), _jsx("p", { className: "text-slate-400", children: "The directory follows TanStack Router's file-based routing convention:" }), _jsx("pre", { className: "rounded bg-slate-900 p-4 text-sm", children: `@tsvrm/sub-app-b/src/routes/
  _layout.tsx   -> Layout for /sub-app-b
  index.tsx     -> /sub-app-b/
  products.tsx  -> /sub-app-b/products` }), _jsx(Link, { to: "/sub-app-b/products", className: "inline-block rounded bg-red-700 px-4 py-2 text-sm font-medium hover:bg-red-600", children: "View Products" })] }));
}
