type GreetingConfig = {
    recipient: string;
    excited?: boolean;
};

function createGreeting(config: GreetingConfig): string {
    const punctuation = config.excited ? "!" : ".";
    return `Hello, ${config.recipient}${punctuation}`;
}

const args = process.argv.slice(2);
const positionalArgs = args.filter((arg) => !arg.startsWith("--"));
const flags = args.filter((arg) => !(arg in positionalArgs))
console.log(args)

const recipient = positionalArgs[0] ?? "World";
const excited = flags.includes("--excited");

const message = createGreeting({
    recipient,
    excited,
});

console.log(message);
