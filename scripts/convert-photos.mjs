import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = "/Users/omrane/Documents/Photo";
const OUT = path.resolve("public/images");

const jobs = [
  { in: "Exterieur.JPG",     out: "clinique-facade.webp"    },
  { in: "Entree.JPG",        out: "clinique-entree.webp"    },
  { in: "Reception.JPG",     out: "clinique-reception.webp" },
  { in: "SalleDiaylise.JPG", out: "salle-dialyse.webp"      },
  { in: "Machine.JPG",       out: "generateur-dialyse.webp" },
  { in: "Zoomlit.JPG",       out: "poste-dialyse.webp"      },
];

await mkdir(OUT, { recursive: true });

for (const j of jobs) {
  const src = path.join(SRC, j.in);
  const dst = path.join(OUT, j.out);
  const info = await sharp(src)
    .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(dst);
  console.log(`${j.out.padEnd(32)}  ${info.width}x${info.height}  ${(info.size/1024).toFixed(0)} KB`);
}
