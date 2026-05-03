# hello_world_modern

A tiny TypeScript CLI that does what `hello_world` does, but with a more modern CLI stack.

## What It Uses

- `commander` for real command-line argument parsing.
- `tsx` for fast TypeScript dev runs.
- `tsdown` for clean ESM builds with declaration files.
- `vitest` for tests.

## Try It

```bash
npm run dev
npm run dev -- Josh
npm run dev -- Josh --excited
npm run dev -- Josh -e
```

## Check Your Work

```bash
npm test
npm run typecheck
npm run build
npm run start -- Josh --excited
```

`tsdown` runs with `clean: true`, so `dist/` is wiped before each build. That fixes the stale-output problem where old compiled test files can hang around after the build inputs change.
