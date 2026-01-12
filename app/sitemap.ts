import type { MetadataRoute } from "next";
import { blogPosts, projects } from "@/content";

const siteUrl = "https://mayowa-sunusi.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = ["", "/blog", "/work"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: now,
  }));

  return [...routes, ...blogEntries, ...projectEntries];
}
