import type { MetadataRoute } from "next";
import { site } from "@/lib/site-content";

// 24/9/2026: antes el sitemap solo listaba el home — Google no se enteraba
// de que /tours y /sofia-abarca también existen como páginas propias (cada
// una ya tiene su <title>/<description>, ver app/tours/page.tsx y
// app/sofia-abarca/page.tsx). Parte del pedido de SEO de Andre.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/tours`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/sofia-abarca`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
