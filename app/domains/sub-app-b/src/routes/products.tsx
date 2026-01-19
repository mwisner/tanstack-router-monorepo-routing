import { createFileRoute } from "@tanstack/react-router";

// Type assertion needed because this route is in an external package
// without access to the core app's generated route tree types.
// See: https://github.com/TanStack/router/discussions/755
export const Route = (createFileRoute as any)("/sub-app-b/products")({
  component: SubAppBProducts,
});

const PRODUCTS = [
  { id: "b-001", name: "Enterprise Widget", price: "$299.00" },
  { id: "b-002", name: "Premium Gadget", price: "$449.00" },
  { id: "b-003", name: "Ultimate Tool", price: "$599.00" },
];

function SubAppBProducts() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-100">
        Sub-App-B Products
      </h3>
      <p className="text-slate-400">
        Products list from Sub-App-B (physical mount with package alias).
      </p>
      <ul className="grid gap-3">
        {PRODUCTS.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between rounded border border-slate-800 bg-slate-900 px-4 py-3"
          >
            <div>
              <p className="font-medium text-slate-200">{product.name}</p>
              <p className="text-xs text-slate-500">SKU: {product.id}</p>
            </div>
            <p className="text-red-400">{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
