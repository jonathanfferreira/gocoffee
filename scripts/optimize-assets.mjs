import sharp from "sharp";
import { mkdir } from "node:fs/promises";

await mkdir("public/images/concept", { recursive: true });
// Originais conceituais preservados. WebP mantém o canal alpha do recorte.
for (const name of ["iced-latte-placeholder", "berry-frappe-placeholder", "green-latte-placeholder"]) {
  const info = await sharp(`concept-assets/${name}.png`)
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 88, alphaQuality: 100, effort: 6 })
    .toFile(`public/images/concept/${name}.webp`);
  console.log(`${name}: ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`);
}
const atlas = await sharp("concept-assets/sprint02/ingredient-atlas-placeholder.png")
  .resize({ width: 900, withoutEnlargement: true })
  .webp({ quality: 82, alphaQuality: 100, effort: 6 })
  .toFile("public/images/concept/ingredient-atlas-placeholder.webp");
console.log(`ingredient atlas: ${Math.round(atlas.size / 1024)} KB`);
const mobileAtlas = await sharp("concept-assets/sprint02/ingredient-atlas-placeholder.png")
  .resize({ width: 600, withoutEnlargement: true })
  .webp({ quality: 72, alphaQuality: 95, effort: 6 })
  .toFile("public/images/concept/ingredient-atlas-mobile-placeholder.webp");
console.log(`mobile ingredient atlas: ${Math.round(mobileAtlas.size / 1024)} KB`);
