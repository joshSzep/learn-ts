type GreetingConfig = {
    recipient: string;
    excited?: boolean;
};

function createGreeting(config: GreetingConfig): string {
    const punctuation = config.excited ? "!" : ".";
    return `Hello, ${config.recipient}${punctuation}`;
}

const message = createGreeting({
    recipient: "World",
    excited: true,
});

console.log(message);
