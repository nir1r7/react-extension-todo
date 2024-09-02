import { commands, ExtensionContext } from "vscode";
import { TodoPanel } from "./panels/TodoPanel";

export function activate(context: ExtensionContext) {
  // Create the show hello world command
  const runCommand = commands.registerCommand("react-extension-todo.run", () => {
    TodoPanel.render(context.extensionUri);
  });

  // Add command to the extension context
  context.subscriptions.push(runCommand);
}