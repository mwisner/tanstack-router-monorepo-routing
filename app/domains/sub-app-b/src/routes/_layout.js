import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/sub-app-b/_layout")({
    component: SubAppBLayout,
});
function SubAppBLayout() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "rounded-lg border border-red-800 bg-red-950/50 p-4", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsxs("div", { children: [_jsx("h2", { className: "text-lg font-semibold text-red-400", children: "Sub-App-B" }), _jsx("p", { className: "text-sm text-slate-400", children: "Physical mount using package alias" })] }) }), _jsxs("nav", { className: "mt-4 flex gap-4 border-t border-red-800 pt-4", children: [_jsx(Link, { to: "/sub-app-b", className: "text-sm hover:text-red-400 [&.active]:text-red-400", activeOptions: { exact: true }, children: "Home" }), _jsx(Link, { to: "/sub-app-b/products", className: "text-sm hover:text-red-400 [&.active]:text-red-400", children: "Products" })] })] }), _jsx(Outlet, {})] }));
}
