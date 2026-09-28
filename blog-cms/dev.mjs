// `pnpm dev` entry: starts the landing page (3000) and the blog CMS (5175) together.
// If either one exits, the other is stopped too, so Ctrl+C never leaves a stray server behind.
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const PROJECT_ROOT = fileURLToPath(new URL("..", import.meta.url));

const PROCESSES = [
  { name: "cms", command: process.execPath, args: [fileURLToPath(new URL("./server.mjs", import.meta.url))] },
  {
    name: "site",
    command: process.execPath,
    args: [fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url)), "dev", "-p", "3000"],
  },
];

const children = PROCESSES.map(({ name, command, args }) => {
  const child = spawn(command, args, { cwd: PROJECT_ROOT, stdio: "inherit", shell: process.platform === "win32" });

  child.on("exit", (code) => {
    console.log(`[${name}] exited with code ${code}`);
    shutdown(code ?? 0);
  });

  return child;
});

let isShuttingDown = false;

function shutdown(code) {
  if (isShuttingDown) return;
  isShuttingDown = true;
  children.forEach((child) => child.exitCode === null && child.kill("SIGTERM"));
  process.exit(code);
}

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));
