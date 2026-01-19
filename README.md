# TanStack Router Virtual Routes Bug #4984 - Reproduction

This monorepo reproduces [bug #4984](https://github.com/TanStack/router/issues/4984) - virtual routes failing to resolve aliases in monorepos.

## The Bug

When using `@tanstack/virtual-file-routes` with `physical()` to mount routes via aliases (TypeScript path aliases or workspace packages), the router treats them as relative file paths instead of resolving through module resolution.

## Project Structure

```
/app/core/                      # Main application (Vite + React)
  src/
    routes.ts                   # Virtual route configuration
    routes/                     # Core routes (home, root layout)
    sub-app-a/                  # Sub-app using TypeScript path alias
      routes/
        _layout.tsx
        index.tsx
        products.tsx

/app/domains/sub-app-b/         # Workspace package @tsvrm/sub-app-b
  src/routes/
    _layout.tsx
    index.tsx
    products.tsx
```

## Routes Configuration

```typescript
// app/core/src/routes.ts

// What we WANT to write (triggers bug #4984):
physical("/sub-app-a", "@sub-app-a/routes"),        // TypeScript path alias
physical("/sub-app-b", "@tsvrm/sub-app-b/routes"),  // Workspace package

// Workarounds that work:
physical("/sub-app-a", "../sub-app-a/routes"),
physical("/sub-app-b", "../../node_modules/@tsvrm/sub-app-b/src/routes"),
```

## How to Reproduce

```bash
# Use Node 24
nvm use

# Install dependencies
pnpm install

# Run dev server (works with workarounds)
pnpm dev

# To see the bug, edit routes.ts and uncomment the alias versions
```

## Expected Behavior

Both sub-apps should mount correctly using `physical()` with:
- TypeScript path aliases (`@sub-app-a/routes`)
- Workspace package imports (`@tsvrm/sub-app-b/routes`)

## Actual Behavior

The router plugin treats alias paths as literal relative paths:
- `@sub-app-a/routes` → looks for `src/routes/@sub-app-a/routes`
- `@tsvrm/sub-app-b/routes` → looks for `src/routes/@tsvrm/sub-app-b/routes`

Error:
```
ENOENT: no such file or directory, scandir 'src/routes/@sub-app-a/routes'
```

## Environment

- Node.js: 24
- @tanstack/react-router: 1.151.6
- @tanstack/router-plugin: 1.151.6
- @tanstack/virtual-file-routes: 1.145.4
- Vite: 7.3.1

## Related

- [GitHub Issue #4984](https://github.com/TanStack/router/issues/4984)
