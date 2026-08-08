import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { toHTML } from "@portabletext/to-html";
import type { BlogPost } from "@/data/blogs";
import { HOMEPAGE_DEFAULTS, type Homepage } from "@/data/homepage";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion: "2024-01-01", useCdn: true })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export async function getSanityBlogs(): Promise<BlogPost[]> {
  if (!client) return []; // ponytail: no project id = site works off static BLOGS_DATA

  let docs: any[];
  try {
    docs = await client.fetch<any[]>(
      `*[_type == "blog" && defined(slug.current)]|order(publishedAt desc)`
    );
  } catch (err) {
    // ponytail: unreachable/misconfigured Sanity must not break the build or the live site.
    console.warn("[sanity] blog fetch failed, using static blogs:", err);
    return [];
  }

  return docs.map((d) => ({
    id: d._id,
    title: d.title || "",
    slug: d.slug.current,
    category: d.category || "Health",
    date: d.publishedAt
      ? new Date(d.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "",
    author: d.author || "Maa Nursing Home",
    excerpt: d.excerpt || "",
    coverImage: d.coverImage && builder ? builder.image(d.coverImage).width(1200).url() : "",
    seoTitle: d.seoTitle || d.title || "",
    seoDescription: d.seoDescription || d.excerpt || "",
    seoKeywords: d.seoKeywords || "",
    content: d.content ? toHTML(d.content) : "",
  }));
}

const IMAGE_FIELDS = [
  "heroImage",
  "eyeCampImage1",
  "eyeCampImage2",
  "aboutPrimaryImage",
  "aboutSecondaryImage1",
  "aboutSecondaryImage2",
] as const;

export async function getHomepage(): Promise<Homepage> {
  if (!client) return HOMEPAGE_DEFAULTS;

  let doc: any;
  try {
    doc = await client.fetch<any>(`*[_id == "homepage"][0]`);
  } catch (err) {
    console.warn("[sanity] homepage fetch failed, using defaults:", err);
    return HOMEPAGE_DEFAULTS;
  }
  if (!doc) return HOMEPAGE_DEFAULTS;

  // ponytail: shallow merge — any field left blank in the Studio falls back to the default.
  const out: any = { ...HOMEPAGE_DEFAULTS };
  for (const [k, v] of Object.entries(doc)) {
    if (k.startsWith("_") || v === null || v === undefined || v === "") continue;
    out[k] = v;
  }
  for (const f of IMAGE_FIELDS) {
    const raw = doc[f];
    if (raw?.asset && builder) out[f] = builder.image(raw).width(1400).url();
  }
  return out as Homepage;
}

/**
 * Sanity is the source of truth. The hardcoded posts are only a fallback for
 * when Sanity is empty or unreachable — see scripts/migrate-to-sanity.mts.
 */
export async function getAllBlogs(): Promise<BlogPost[]> {
  const fromSanity = await getSanityBlogs();
  if (fromSanity.length) return fromSanity;

  const { BLOGS_DATA } = await import("@/data/blogs");
  return BLOGS_DATA;
}
