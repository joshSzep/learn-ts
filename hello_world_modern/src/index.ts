#!/usr/bin/env node
import { fileURLToPath } from "node:url";

import { createGreeting, parseGreetingArgs } from "./greeting.js";

export function runCli(args: readonly string[] = process.argv.slice(2)): string {
  const config = parseGreetingArgs(args);
  const message = createGreeting(config);

  console.log(message);
  return message;
}

const isCliEntrypoint = process.argv[1] === fileURLToPath(import.meta.url);

if (isCliEntrypoint) {
  runCli();
}
