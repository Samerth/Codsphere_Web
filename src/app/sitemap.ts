import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codsphere.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/services/crm-development",
    "/services/erp-solutions",
    "/services/digital-marketing",
    "/services/web-and-mobile",
    "/success-stories",
    "/blog",
    "/case-studies",
    "/case-studies/connectcall-services",
    "/case-studies/sortify",
    "/case-studies/voltvera",
    "/contact",
    "/start-free-trial",
    "/solutions",
    "/sortify",
    "/cod-chat",
    "/cod-crm",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts
  const blogPages = blogPosts
    .filter((post) => post.published)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...blogPages];
}
