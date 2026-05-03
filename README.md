# Learn TypeScript

This repository is a small TypeScript learning space. Right now it contains two tiny Node CLI projects:

- `hello_world`, a minimal TypeScript CLI that demonstrates typed objects, optional properties, hand-written argument parsing, ESM imports, and tests.
- `hello_world_modern`, the same idea using a more modern CLI stack: Commander for parsing, tsx for development, tsdown for clean builds, and Vitest for tests.

## Project

```text
hello_world/
  src/
    greeting.ts       # Pure TypeScript functions
    index.ts          # CLI entrypoint
  tests/
    greeting.test.ts  # Vitest examples
  tsconfig.json       # Type checking settings
  tsconfig.build.json # Production build settings
  vitest.config.ts    # Test runner settings

hello_world_modern/
  src/
    greeting.ts       # Pure TypeScript functions plus Commander parsing
    index.ts          # CLI entrypoint
  tests/
    greeting.test.ts  # Vitest examples
  tsdown.config.ts    # Clean production build settings
  tsconfig.json       # Type checking settings
  vitest.config.ts    # Test runner settings
```

## Try It

From either `hello_world` or `hello_world_modern`:

```bash
npm run dev
npm run dev -- Josh
npm run dev -- Josh --excited
```

## Check Your Work

```bash
npm test
npm run typecheck
npm run build
npm run start -- Josh --excited
```

## Things To Notice

- `GreetingConfig` models the data the greeting function needs.
- `excited?: boolean` means the property can be omitted.
- `parseGreetingArgs` accepts `readonly string[]`, so it promises not to mutate the CLI arguments.
- Tests make the old argument parsing mistake visible: `in` checks array indexes, while `includes` checks values.
- `hello_world_modern` uses `tsdown` with `clean: true`, so stale files do not hang around in `dist/` after builds.

## Practice Ideas

1. Add a `--shout` flag that uppercases the greeting.
2. Support `--recipient Josh` in addition to positional names.
3. Turn unknown flags into a helpful error message.
