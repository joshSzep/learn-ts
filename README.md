# Learn TypeScript

This repository is a small TypeScript learning space. Right now it contains one project: `hello_world`, a tiny Node CLI that demonstrates typed objects, optional properties, argument parsing, ESM imports, and tests.

## Project

```text
hello_world/
  src/
    greeting.ts       # Pure TypeScript functions
    greeting.test.ts  # Vitest examples
    index.ts          # CLI entrypoint
  tsconfig.json       # Type checking settings
  tsconfig.build.json # Production build settings
  vitest.config.ts    # Test runner settings
```

## Try It

From `hello_world`:

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

## Practice Ideas

1. Add a `--shout` flag that uppercases the greeting.
2. Support `--recipient Josh` in addition to positional names.
3. Turn unknown flags into a helpful error message.
