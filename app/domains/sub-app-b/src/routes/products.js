import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/sub-app-b/products")({
    component: SubAppBProducts,
});
const PRODUCTS = [
    { id: "b-001", name: "Enterprise Widget", price: "$299.00" },
    { id: "b-002", name: "Premium Gadget", price: "$449.00" },
    { id: "b-003", name: "Ultimate Tool", price: "$599.00" },
];
function SubAppBProducts() {
    return (_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-xl font-semibold text-slate-100", children: "Sub-App-B Products" }), _jsx("p", { className: "text-slate-400", children: "Products list from Sub-App-B (physical mount with package alias)." }), _jsx("ul", { className: "grid gap-3", children: PRODUCTS.map((product) => (_jsxs("li", { className: "flex items-center justify-between rounded border border-slate-800 bg-slate-900 px-4 py-3", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium text-slate-200", children: product.name }), _jsxs("p", { className: "text-xs text-slate-500", children: ["SKU: ", product.id] })] }), _jsx("p", { className: "text-red-400", children: product.price })] }, product.id))) })] }));
}
