import type { MetadataRoute } from "next";
import { services } from "@/lib/data";

const SITE_URL = "https://chconstruccion.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/servicios", "/contacto"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8
  }));
  const serviceUrls = services.map((s) => ({
    url: `${SITE_URL}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));
  return [...staticPages, ...serviceUrls];
}
