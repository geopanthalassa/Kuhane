import type { Metadata } from "next";
import { toursIntro } from "@/lib/site-content";
import ToursPageClient from "./ToursPageClient";

// El <head> (title/description) lo genera el servidor una sola vez, así
// que se queda en español (igual que el resto del <head> del sitio) aunque
// la página en sí ya soporte el switch ES/EN — ver ToursPageClient.tsx.
export const metadata: Metadata = {
  title: toursIntro.title,
  description: toursIntro.body,
};

export default function ToursPage() {
  return <ToursPageClient />;
}
