export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text" },
    { name: "status", title: "Approval Status", type: "string", options: { list: ["Draft", "In review", "Approved"] } },
    { name: "lastReviewed", title: "Last Reviewed", type: "date" }
  ]
};
