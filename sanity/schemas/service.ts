export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "summary", title: "Summary", type: "text" },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
    { name: "ctaLabel", title: "CTA Label", type: "string" },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text" }
  ]
};
