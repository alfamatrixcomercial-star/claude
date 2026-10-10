// Builds every menu in cartas.json (or the ones named: `npm run build:cartas -- hulakai`)
// into dist/<path>, e.g. dist/carta and dist/hulakai, ready to copy into the
// website's public/ folder.
import { execFileSync } from "node:child_process";
import { cpSync, readFileSync, readdirSync, rmSync } from "node:fs";

const basePaths = JSON.parse(readFileSync(new URL("../cartas.json", import.meta.url), "utf8"));
const cartas = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(basePaths);

for (const carta of cartas) {
  if (!basePaths[carta]) throw new Error(`Unknown carta "${carta}"`);
  execFileSync("npx", ["next", "build"], { stdio: "inherit", env: { ...process.env, CARTA: carta } });
  // public/ holds every menu's photos; keep only this one's.
  for (const other of readdirSync("out/venues")) {
    if (other !== carta) rmSync(`out/venues/${other}`, { recursive: true });
  }
  const dest = `dist${basePaths[carta]}`;
  rmSync(dest, { recursive: true, force: true });
  cpSync("out", dest, { recursive: true });
  console.log(`\n${carta} → ${dest}\n`);
}
