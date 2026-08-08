import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "maanursinghome-studio",
  title: "Maa Nursing Home CMS Studio",
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Website")
          .items([
            // Homepage is a singleton: one document, opened directly.
            S.listItem()
              .title("Homepage")
              .id("homepage")
              .child(S.document().schemaType("homepage").documentId("homepage")),
            S.divider(),
            S.documentTypeListItem("blog").title("Blog Posts"),
            S.documentTypeListItem("doctor").title("Doctors Directory"),
            S.documentTypeListItem("treatment").title("Treatments & Procedures"),
          ]),
    }),
  ],

  schema: {
    types: [
      {
        name: "homepage",
        title: "Homepage",
        type: "document",
        groups: [
          { name: "seo", title: "SEO", default: true },
          { name: "hero", title: "Hero Banner" },
          { name: "eyeCamp", title: "Free Eye Camp" },
          { name: "about", title: "What We Do" },
        ],
        fields: [
          // SEO
          { name: "seoTitle", title: "Page Title (Google)", type: "string", group: "seo" },
          { name: "seoDescription", title: "Meta Description", type: "text", rows: 4, group: "seo" },
          { name: "seoKeywords", title: "Keywords (comma separated)", type: "text", rows: 3, group: "seo" },

          // Hero
          { name: "heroBadge", title: "Small Badge Text", type: "string", group: "hero" },
          { name: "heroTitle", title: "Main Heading", type: "string", group: "hero" },
          {
            name: "heroDescription",
            title: "Paragraph",
            type: "text",
            rows: 5,
            description: "Basic HTML like <br> and <strong> is allowed.",
            group: "hero",
          },
          { name: "heroExperienceNumber", title: "Experience Number (e.g. 35+)", type: "string", group: "hero" },
          { name: "heroExperienceLabel", title: "Experience Label", type: "string", group: "hero" },
          { name: "heroImage", title: "Hero Image", type: "image", group: "hero" },

          // Free Eye Camp
          {
            name: "eyeCampEnabled",
            title: "Show Eye Camp section on homepage?",
            type: "boolean",
            initialValue: false,
            group: "eyeCamp",
          },
          { name: "eyeCampBadge", title: "Badge Text", type: "string", group: "eyeCamp" },
          { name: "eyeCampTitle", title: "Heading", type: "text", rows: 2, group: "eyeCamp" },
          { name: "eyeCampDescription", title: "Description", type: "text", rows: 4, group: "eyeCamp" },
          {
            name: "eyeCampFeatures",
            title: "What's Free (comma separated)",
            type: "text",
            rows: 3,
            group: "eyeCamp",
          },
          { name: "eyeCampVenue", title: "Venue", type: "text", rows: 3, group: "eyeCamp" },
          { name: "eyeCampDateTime", title: "Date & Time", type: "string", group: "eyeCamp" },
          { name: "eyeCampContacts", title: "Contact Numbers", type: "string", group: "eyeCamp" },
          { name: "eyeCampWhatsappLink", title: "WhatsApp Registration Link", type: "url", group: "eyeCamp" },
          { name: "eyeCampPhone", title: "Primary Phone (for Call button)", type: "string", group: "eyeCamp" },
          { name: "eyeCampImage1", title: "Camp Photo 1", type: "image", group: "eyeCamp" },
          { name: "eyeCampImage2", title: "Camp Photo 2", type: "image", group: "eyeCamp" },

          // About
          { name: "aboutHeading", title: "Heading", type: "string", group: "about" },
          { name: "aboutDescription", title: "Description", type: "text", rows: 10, group: "about" },
          { name: "aboutPrimaryImage", title: "Large Image", type: "image", group: "about" },
          { name: "aboutSecondaryImage1", title: "Small Image 1", type: "image", group: "about" },
          { name: "aboutSecondaryImage2", title: "Small Image 2", type: "image", group: "about" },
          { name: "aboutSatisfaction", title: "Patient Satisfaction % (number only)", type: "string", group: "about" },
          { name: "aboutLivesImproved", title: "Lives Improved in thousands (number only)", type: "string", group: "about" },
        ],
        preview: { prepare: () => ({ title: "Homepage" }) },
      },
      {
        name: "blog",
        title: "Blog Posts",
        type: "document",
        fields: [
          { name: "title", title: "Title", type: "string", validation: (R: any) => R.required() },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
            validation: (R: any) => R.required(),
          },
          { name: "category", title: "Category", type: "string" },
          { name: "author", title: "Author", type: "string", initialValue: "Dr. Jugal Shah" },
          { name: "publishedAt", title: "Published Date", type: "date" },
          { name: "excerpt", title: "Excerpt", type: "text" },
          { name: "coverImage", title: "Cover Image", type: "image" },
          {
            name: "content",
            title: "Body Content",
            type: "array",
            of: [{ type: "block" }, { type: "image" }],
          },
          { name: "seoTitle", title: "SEO Title", type: "string" },
          { name: "seoDescription", title: "SEO Description", type: "text" },
          { name: "seoKeywords", title: "SEO Keywords (comma separated)", type: "text", rows: 2 },
        ],
        preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
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
