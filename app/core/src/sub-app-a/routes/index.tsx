import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sub-app-a/")({
  component: SubAppAHome,
});

function SubAppAHome() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-100">Sub-App-A Home</h3>
      <p className="text-slate-400">
        This sub-app is mounted using a{" "}
        <code className="text-emerald-300">physical()</code> virtual route with
        a TypeScript path alias:
      </p>
      <pre className="rounded bg-slate-900 p-4 text-sm">
{`// routes.ts
physical("/sub-app-a", "@sub-app-a/routes")`}
      </pre>
      <p className="text-slate-400">
        The alias is defined in <code>tsconfig.json</code> and{" "}
        <code>vite.config.ts</code>:
      </p>
      <pre className="rounded bg-slate-900 p-4 text-sm">
{`// tsconfig.json
"paths": {
  "@sub-app-a/*": ["./src/sub-app-a/*"]
}`}
      </pre>
      <Link
        to="/sub-app-b"
        search={{ mode: "bar" }}
        className="inline-block rounded bg-red-700 px-4 py-2 text-sm font-medium hover:bg-red-600"
      >
        Go to Sub-App-B?mode=bar
      </Link>
    </div>
  );
}
