import { describe, expect, it } from "vitest";

import { createGreeting, parseGreetingArgs } from "../src/greeting";

describe("createGreeting", () => {
    it("greets the configured recipient", () => {
        expect(createGreeting({ recipient: "Josh" })).toBe("Hello, Josh.");
    });

    it("uses an exclamation point when excited", () => {
        expect(createGreeting({ recipient: "TypeScript", excited: true })).toBe(
            "Hello, TypeScript!",
        );
    });
});

describe("parseGreetingArgs", () => {
    it("defaults to World with no args", () => {
        expect(parseGreetingArgs([])).toEqual({
            recipient: "World",
            excited: false,
        });
    });

    it("separates positional args from flags", () => {
        expect(parseGreetingArgs(["Josh", "--excited"])).toEqual({
            recipient: "Josh",
            excited: true,
        });
    });
});
