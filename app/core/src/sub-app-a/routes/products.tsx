import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sub-app-a/products")({
  component: SubAppAProducts,
});

const PRODUCTS = [
  { id: "a-001", name: "Widget Pro", price: "$99.00" },
  { id: "a-002", name: "Gadget Plus", price: "$149.00" },
  { id: "a-003", name: "Tool Elite", price: "$199.00" },
];

function SubAppAProducts() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-100">
        Sub-App-A Products
      </h3>
      <p className="text-slate-400">
        Products list from Sub-App-A (physical mount with TypeScript path alias).
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
            <p className="text-emerald-400">{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
