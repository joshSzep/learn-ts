import { Command } from "commander";

export type GreetingConfig = {
  recipient: string;
  excited?: boolean;
};

export function createGreeting(config: GreetingConfig): string {
  const punctuation = config.excited ? "!" : ".";
  return `Hello, ${config.recipient}${punctuation}`;
}

export function parseGreetingArgs(args: readonly string[]): GreetingConfig {
  const program = new Command()
    .name("hello-world-modern")
    .description("Print a friendly greeting.")
    .argument("[recipient]", "name to greet")
    .option("-e, --excited", "use excited punctuation", false)
    .exitOverride()
    .configureOutput({
      writeErr: () => undefined,
      writeOut: () => undefined,
    });

  program.parse([...args], { from: "user" });

  const options = program.opts<{ excited: boolean }>();

  return {
    recipient: program.args[0] ?? "World",
    excited: options.excited,
  };
}
