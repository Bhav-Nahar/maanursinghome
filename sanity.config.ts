import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "maanursinghome-studio",
  title: "Maa Nursing Home CMS Studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [structureTool()],

  schema: {
    types: [
      {
        name: "blog",
        title: "Blog Posts",
        type: "document",
        fields: [
          { name: "title", title: "Title", type: "string" },
          { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
          { name: "category", title: "Category", type: "string" },
          { name: "author", title: "Author", type: "string" },
          { name: "publishedAt", title: "Published Date", type: "date" },
          { name: "excerpt", title: "Excerpt", type: "text" },
          { name: "coverImage", title: "Cover Image", type: "image" },
          { name: "content", title: "Body Content", type: "array", of: [{ type: "block" }] },
          { name: "seoTitle", title: "SEO Title", type: "string" },
          { name: "seoDescription", title: "SEO Description", type: "text" },
        ],
      },
      {
        name: "doctor",
        title: "Doctors Directory",
        type: "document",
        fields: [
          { name: "name", title: "Doctor Name", type: "string" },
          { name: "degrees", title: "Degrees / Qualifications", type: "string" },
          { name: "specialty", title: "Specialty", type: "string" },
          { name: "experience", title: "Years of Experience", type: "string" },
          { name: "bio", title: "Biography", type: "text" },
          { name: "photo", title: "Doctor Photo", type: "image" },
        ],
      },
      {
        name: "treatment",
        title: "Treatments & Procedures",
        type: "document",
        fields: [
          { name: "title", title: "Treatment Title", type: "string" },
          { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
          { name: "department", title: "Department", type: "string" },
          { name: "summary", title: "Summary", type: "text" },
          { name: "benefits", title: "Key Benefits", type: "array", of: [{ type: "string" }] },
        ],
      },
    ],
  },
});
