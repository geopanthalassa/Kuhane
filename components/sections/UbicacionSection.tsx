import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { ubicacion, ubicacionGeo } from "@/lib/site-content";

// Mapa incrustado sin API key: el formato público de Google Maps
// (`/maps?q=lat,lng&output=embed`) alcanza para un mapa con un solo pin.
// Coordenadas reales de Kuhane confirmadas por Andre (7/9/2026) — ver
// ubicacionGeo en site-content.ts.
const mapEmbedSrc = `https://www.google.com/maps?q=${ubicacionGeo.lat},${ubicacionGeo.lng}&z=15&output=embed`;
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${ubicacionGeo.lat},${ubicacionGeo.lng}`;

export default function UbicacionSection() {
  return (
    <section id="ubicacion" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionIntro eyebrow={ubicacion.eyebrow} title={ubicacion.title} align="center" />
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-stone-soft">
            {ubicacion.body}
          </p>
        </Reveal>

        <Reveal delayMs={140} className="mt-14 overflow-hidden rounded-sm border border-wood/15">
          <div className="h-[380px] w-full sm:h-[440px]">
            <iframe
              src={mapEmbedSrc}
              title="Ubicación de Kuhane Etno-Hostal en el mapa"
              className="h-full w-full grayscale-[15%]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delayMs={200} className="mt-6 flex justify-center">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-deep underline decoration-teal-deep/40 underline-offset-4 transition-colors hover:decoration-teal-deep"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
              <path d="M12 21s-7-6.4-7-11a7 7 0 1 1 14 0c0 4.6-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {ubicacion.directionsCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
