import { MetadataRoute } from "next";
import { TREATMENTS_DATA } from "@/data/treatments";
import { BLOGS_DATA } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maanursinghome.in";

  // Static Pages
  const staticPages = [
    "",
    "/about",
    "/doctors",
    "/departments",
    "/departments/eye-care",
    "/departments/ivf",
    "/departments/gynecology",
    "/departments/laparoscopy",
    "/treatments",
    "/treatments/lasik",
    "/blogs",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Treatment Pages
  const treatmentPages = Object.keys(TREATMENTS_DATA).map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Blog Pages
  const blogPages = BLOGS_DATA.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...treatmentPages, ...blogPages];
}
