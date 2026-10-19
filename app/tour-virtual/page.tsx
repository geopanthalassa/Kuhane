import type { Metadata } from "next";
import { Suspense } from "react";
import { tourVirtual } from "@/lib/site-content";
import TourVirtualPageClient from "./TourVirtualPageClient";

// El <head> (title/description) lo genera el servidor una sola vez, así
// que se queda en español (mismo patrón que /tours — ver la nota en su
// page.tsx) aunque la página en sí soporte el switch ES/EN.
export const metadata: Metadata = {
  title: tourVirtual.title,
  description: tourVirtual.body,
};

export default function TourVirtualPage() {
  // Suspense exigido por Next para poder leer ?scene=... con
  // useSearchParams() dentro de TourVirtualPageClient (19/10/2026).
  return (
    <Suspense>
      <TourVirtualPageClient />
    </Suspense>
  );
}
