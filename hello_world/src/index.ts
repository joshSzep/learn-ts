import { fileURLToPath } from "node:url";

import { createGreeting, parseGreetingArgs } from "./greeting.js";

const isCliEntrypoint = process.argv[1] === fileURLToPath(import.meta.url);

if (isCliEntrypoint) {
    const config = parseGreetingArgs(process.argv.slice(2));
    const message = createGreeting(config);

    console.log(message);
}
