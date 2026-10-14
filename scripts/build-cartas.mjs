// Builds every menu in src/venues/ (or the ones named: `npm run build:cartas -- hulakai`)
// into dist/carta/<carta>/. dist/carta/ is then copied as is to the website's
// public/carta/.
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const all = readdirSync("src/venues", { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(`src/venues/${d.name}/index.ts`))
  .map((d) => d.name);
const cartas = process.argv.slice(2).length ? process.argv.slice(2) : all;

for (const carta of cartas) {
  if (!all.includes(carta)) throw new Error(`Unknown carta "${carta}". Use one of: ${all.join(", ")}.`);
  execFileSync("npx", ["next", "build"], { stdio: "inherit", env: { ...process.env, CARTA: carta } });
  // public/ holds every menu's photos; keep only this one's.
  for (const other of readdirSync("out/venues")) {
    if (other !== carta) rmSync(`out/venues/${other}`, { recursive: true });
  }
  const dest = `dist/carta/${carta}`;
  rmSync(dest, { recursive: true, force: true });
  cpSync("out", dest, { recursive: true });
  console.log(`\n${carta} → ${dest}\n`);
}

// miradorwaikiki.com/carta/ was Mirador Waikiki's menu before there were
// four, and it is on printed QR codes: send it there. (The website's
// .htaccess does the same with a redirect; this page covers servers without it.)
writeFileSync(
  "dist/carta/index.html",
  `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Carta | Mirador Waikiki</title>
<meta http-equiv="refresh" content="0; url=/carta/miradorwaikiki/">
<link rel="canonical" href="https://miradorwaikiki.com/carta/miradorwaikiki/">
<script>location.replace("/carta/miradorwaikiki/" + location.search + location.hash)</script>
</head>
<body><a href="/carta/miradorwaikiki/">Ver la carta de Mirador Waikiki</a></body>
</html>
`,
);
