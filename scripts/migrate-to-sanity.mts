/**
 * One-off: pushes the hardcoded blogs + homepage content into Sanity.
 * Run once, then edit everything in /studio.
 *
 *   node --experimental-strip-types scripts/migrate-to-sanity.mts
 *
 * Needs SANITY_WRITE_TOKEN in .env.local (Editor token from sanity.io/manage).
 * Safe to re-run: documents use fixed _ids, so it overwrites rather than duplicates.
 */
import { createClient } from "@sanity/client";
import { htmlToBlocks } from "@sanity/block-tools";
import { Schema } from "@sanity/schema";
import { JSDOM } from "jsdom";
import fs from "node:fs";
import path from "node:path";
import { BLOGS_DATA } from "../src/data/blogs.ts";
import { HOMEPAGE_DEFAULTS } from "../src/data/homepage.ts";

// --- env ---------------------------------------------------------------
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!token) {
  console.error(
    "\nMissing SANITY_WRITE_TOKEN in .env.local.\n" +
      `Create one at https://www.sanity.io/manage/project/${projectId}/api ` +
      "(Tokens -> Add API token -> Editor), then add:\n" +
      "  SANITY_WRITE_TOKEN=sk...\n"
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", token, useCdn: false });

// --- html -> portable text --------------------------------------------
const blockContentType = Schema.compile({
  name: "s",
  types: [
    {
      name: "blog",
      type: "document",
      fields: [{ name: "content", type: "array", of: [{ type: "block" }] }],
    },
  ],
})
  .get("blog")
  .fields.find((f: any) => f.name === "content").type;

const toBlocks = (html: string) =>
  htmlToBlocks(html, blockContentType, { parseHtml: (h) => new JSDOM(h).window.document });

// --- image upload ------------------------------------------------------
const uploaded = new Map<string, any>();

async function uploadImage(webPath: string) {
  if (!webPath) return undefined;
  if (uploaded.has(webPath)) return uploaded.get(webPath);

  const file = path.join("public", decodeURIComponent(webPath.replace(/^\//, "")));
  if (!fs.existsSync(file)) {
    console.warn(`  ! image not found, skipping: ${file}`);
    return undefined;
  }
  const asset = await client.assets.upload("image", fs.createReadStream(file), {
    filename: path.basename(file),
  });
  const ref = { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  uploaded.set(webPath, ref);
  console.log(`  uploaded ${path.basename(file)}`);
  return ref;
}

// --- run ---------------------------------------------------------------
console.log(`\nMigrating into project ${projectId} / ${dataset}\n`);

console.log("Blogs:");
for (const b of BLOGS_DATA) {
  const doc = {
    _id: `blog-${b.slug}`,
    _type: "blog",
    title: b.title,
    slug: { _type: "slug", current: b.slug },
    category: b.category,
    author: b.author,
    publishedAt: new Date(b.date).toISOString().slice(0, 10),
    excerpt: b.excerpt,
    coverImage: await uploadImage(b.coverImage),
    content: toBlocks(b.content),
    seoTitle: b.seoTitle,
    seoDescription: b.seoDescription,
  };
  await client.createOrReplace(doc);
  console.log(`  ok  ${b.slug} — ${b.title}`);
}

console.log("\nHomepage:");
const hp: any = { _id: "homepage", _type: "homepage", ...HOMEPAGE_DEFAULTS };
for (const f of [
  "heroImage",
  "eyeCampImage1",
  "eyeCampImage2",
  "aboutPrimaryImage",
  "aboutSecondaryImage1",
  "aboutSecondaryImage2",
]) {
  hp[f] = await uploadImage(HOMEPAGE_DEFAULTS[f as keyof typeof HOMEPAGE_DEFAULTS] as string);
}
await client.createOrReplace(hp);
console.log("  ok  homepage");

console.log("\nDone. Open /studio to edit.\n");
