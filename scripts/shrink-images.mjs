// One-off: shrink oversized images in public/ in place, same filenames so no
// code references break. Re-runnable — already-small files are skipped.
// ponytail: fixed 1600px cap, no per-image art direction. Tune MAX if a hero
// ever needs to be sharper.
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const MAX = 1600;
const THRESHOLD = 200 * 1024; // leave anything already small alone
const EXTS = new Set([".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let saved = 0, count = 0;
for await (const file of walk("public")) {
  const ext = extname(file).toLowerCase();
  if (!EXTS.has(ext)) continue;
  const before = (await stat(file)).size;
  if (before < THRESHOLD) continue;

  // sharp can't read and write the same path — go via a temp file.
  const tmp = `${file}.tmp`;
  const img = sharp(file).rotate(); // rotate() honours EXIF orientation
  const { width } = await img.metadata();
  const pipe = width > MAX ? img.resize({ width: MAX }) : img;
  await (ext === ".png"
    ? pipe.png({ quality: 80, compressionLevel: 9, palette: true })
    : pipe.jpeg({ quality: 80, mozjpeg: true })
  ).toFile(tmp);

  const after = (await stat(tmp)).size;
  if (after >= before) { await unlink(tmp); continue; } // never make it worse
  await rename(tmp, file);
  saved += before - after; count++;
  console.log(`${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB  ${file}`);
}
console.log(`\n${count} images, saved ${(saved / 1048576).toFixed(1)} MB`);
