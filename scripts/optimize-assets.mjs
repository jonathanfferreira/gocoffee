import sharp from "sharp";
import { mkdir } from "node:fs/promises";

await mkdir("public/images/concept", { recursive: true });
// Originais conceituais preservados. WebP mantém o canal alpha do recorte.
for (const name of ["iced-latte-placeholder", "berry-frappe-placeholder"]) {
  const info = await sharp(`concept-assets/${name}.png`)
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 88, alphaQuality: 100, effort: 6 })
    .toFile(`public/images/concept/${name}.webp`);
  console.log(`${name}: ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`);
}
