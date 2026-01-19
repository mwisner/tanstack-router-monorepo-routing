import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-100">
          Virtual Routes Bug Reproduction
        </h2>
        <p className="text-slate-400">
          This reproduction demonstrates{" "}
          <a
            href="https://github.com/TanStack/router/issues/4984"
            className="text-amber-400 underline hover:text-amber-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            bug #4984
          </a>{" "}
          - virtual routes failing to resolve aliases in monorepos.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-emerald-800 bg-emerald-950 p-6">
          <h3 className="mb-2 font-semibold text-emerald-400">
            Sub-App-A (TypeScript Path Alias)
          </h3>
          <p className="mb-4 text-sm text-slate-400">
            Uses <code className="text-emerald-300">physical()</code> with a
            TypeScript path alias{" "}
            <code className="text-emerald-300">@sub-app-a</code> pointing to a
            directory inside the core app.
          </p>
          <Link
            to="/sub-app-a"
            className="inline-block rounded bg-emerald-700 px-4 py-2 text-sm font-medium hover:bg-emerald-600"
          >
            Go to Sub-App-A
          </Link>
        </div>

        <div className="rounded-lg border border-red-800 bg-red-950 p-6">
          <h3 className="mb-2 font-semibold text-red-400">
            Sub-App-B (Workspace Package)
          </h3>
          <p className="mb-4 text-sm text-slate-400">
            Uses <code className="text-red-300">physical()</code> with a
            workspace package{" "}
            <code className="text-red-300">@tsvrm/sub-app-b</code>.
          </p>
          <Link
            to="/sub-app-b"
            className="inline-block rounded bg-red-700 px-4 py-2 text-sm font-medium hover:bg-red-600"
          >
            Go to Sub-App-B
          </Link>
        </div>
      </div>

      <section className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h3 className="mb-4 font-semibold text-slate-200">The Problem</h3>
        <p className="mb-4 text-sm text-slate-400">
          When using <code>@tanstack/virtual-file-routes</code> with{" "}
          <code>physical()</code> to mount routes via aliases, the router treats
          them as relative file paths instead of resolving through module
          resolution.
        </p>
        <p className="text-sm text-slate-400">
          The router plugin looks for{" "}
          <code>src/routes/@sub-app-a/routes</code> instead of resolving the
          alias through TypeScript/Vite configuration.
        </p>
      </section>
    </div>
  );
}
