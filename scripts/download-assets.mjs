// Downloads every binary asset used by the MiradorWaikiki menu clone into public/.
// Usage: node scripts/download-assets.mjs
// Behind an HTTPS proxy run with NODE_USE_ENV_PROXY=1 (Node >= 22.21).
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const SITE = "https://mimenulatech.com/static/media/";
const FB = "https://firebasestorage.googleapis.com/v0/b/mi-menu-948f9.appspot.com/o/";
const DO = "https://mimenu.nyc3.digitaloceanspaces.com/";

const ui = {
  "close.svg": "close.310b3ad2.svg",
  "black-cross.svg": "black-cross-icon.310b3ad2.svg",
  "hamburger.svg": "hamburger-icon.0f636b40.svg",
  "sug.svg": "sug.3d5ad836.svg",
  "sug-icon.svg": "sug-icon.654e3161.svg",
  "star.svg": "star.886644c8.svg",
  "heart.svg": "heart-icon.a9a1a99e.svg",
  "heart-filled.svg": "filled-heart-icon.89d0c5af.svg",
  "favoritos.svg": "Favoritos.beeb8e0a.svg",
  "favoritos-4.svg": "Favoritos_4.ccffcfab.svg",
  "item-border.svg": "item-border.caa4f1e3.svg",
  "item-border-selected.svg": "item-border-selected.696661a6.svg",
  "divisor.svg": "divisor.937be675.svg",
  "thx.svg": "thx.ee5205c9.svg",
  "sign.svg": "sign.e0d232db.svg",
  "flag-es.svg": "ESP.56d58fa9.svg",
  "flag-en.svg": "ENG.7c788a1e.svg",
  "slider-elegi.svg": "slider-elegi.f1873c87.svg",
  "slider-sugeridos.svg": "slider-sugeridos.2be45316.svg",
  "mercado-pago.png": "mercado-pago.5f342bd1.png",
  "onboarding-bg-1.jpg": "background1.0a37e8cb.jpg",
  "onboarding-bg-2.jpg": "background2.6bd3ad9b.jpg",
};

const categories = {
  "generico.png": "Categor%C3%ADas%2Fgen%C3%A9rico.png?alt=media&token=d6f589f1-3e3a-46b4-9847-ac0ec8415952",
  "cafeteria.png": "Categor%C3%ADas%2Fcafeteria.png?alt=media&token=d51a7405-43e1-4384-80cd-6c95fb3ff3fa",
  "big-cake.png": "Categor%C3%ADas%2Fbig-cake.png?alt=media&token=11930ebf-2693-44f8-a4b6-711d93b591ab",
  "pie.png": "Categor%C3%ADas%2Fpie.png?alt=media&token=cc25333a-38d0-4456-8109-80691dfbad78",
  "platos.png": "Categor%C3%ADas%2Fplatos.png?alt=media&token=dc49ebac-3243-4766-b22c-1a6ddf81799f",
  "children.png": "Categor%C3%ADas%2Fchildren.png?alt=media&token=b0ccaf00-894b-4dcf-8ac0-363d3413bed4",
  "postres.png": "Categor%C3%ADas%2Fpostres.png?alt=media&token=327f30f3-f326-4b5b-96e3-5840a02c77b2",
  "tragos.png": "Categor%C3%ADas%2Ftragos.png?alt=media&token=763dac22-0365-480d-bd21-b588bf8b612f",
  "bodega.png": "Categor%C3%ADas%2Fbodega.png?alt=media&token=3d4cecad-dda3-4ed9-a17e-3f6eca83c1f2",
};

// Hosted on DigitalOcean Spaces; the app hotlinks these, this only makes local copies.
const remote = {
  "remote/logo": "Imagenes/Logo/miradorwaikiki/logoImage",
  "remote/bebidas.png": "Imagenes/Categorias/botella%20y%20vaso%20de%20whisky.png",
  "remote/cortado": "Imagenes/Productos/ZaGkEnvttDfhH3oERWWNWStc5Ag2/lvvc57e0",
};

const jobs = [
  ...Object.entries(ui).map(([to, from]) => [`images/ui/${to}`, SITE + from]),
  ...Object.entries(categories).map(([to, from]) => [`images/categories/${to}`, FB + from]),
  ...Object.entries(remote).map(([to, from]) => [`images/${to}`, DO + from]),
];

async function download([to, url]) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const out = join(root, to);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, Buffer.from(await res.arrayBuffer()));
  return to;
}

let ok = 0;
const failed = [];
for (let i = 0; i < jobs.length; i += 4) {
  const batch = jobs.slice(i, i + 4);
  const results = await Promise.allSettled(batch.map(download));
  results.forEach((r, j) => {
    if (r.status === "fulfilled") ok++;
    else failed.push(`${batch[j][0]} <- ${r.reason?.cause?.message ?? r.reason?.message}`);
  });
}
console.log(`downloaded ${ok}/${jobs.length}`);
if (failed.length) console.log("failed:\n  " + failed.join("\n  "));
