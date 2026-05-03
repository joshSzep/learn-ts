export type GreetingConfig = {
    recipient: string;
    excited?: boolean;
};

export function createGreeting(config: GreetingConfig): string {
    const punctuation = config.excited ? "!" : ".";
    return `Hello, ${config.recipient}${punctuation}`;
}

export function parseGreetingArgs(args: readonly string[]): GreetingConfig {
    const positionalArgs = args.filter((arg) => !arg.startsWith("--"));
    const flags = args.filter((arg) => arg.startsWith("--"));

    return {
        recipient: positionalArgs[0] ?? "World",
        excited: flags.includes("--excited"),
    };
}
