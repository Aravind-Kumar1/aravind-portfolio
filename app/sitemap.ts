import { MetadataRoute } from "next";
import { projects } from "@/lib/data/project";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aravindchamaakuri.com";

  // Base pages
  const staticPages = ["", "/about", "/projects", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
