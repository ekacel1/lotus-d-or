import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_WEBSITE_URL || "https://example.com";
  const routes = [
    "",
    "/a-propos",
    "/menu",
    "/galerie",
    "/reservations",
    "/livraison",
    "/avis",
    "/blog",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ];

  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
}
