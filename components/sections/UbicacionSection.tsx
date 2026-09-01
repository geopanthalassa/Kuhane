"use client";

import dynamic from "next/dynamic";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";
import { buildFlightSearchLink } from "@/lib/travel-flights";

// Leaflet toca `window`, así que el mapa se carga solo en el cliente.
const UbicacionMap = dynamic(() => import("@/components/ui/UbicacionMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-sand" />,
});

export default function UbicacionSection() {
  const { ubicacion, ui } = useContent();
  const flightSearchUrl = buildFlightSearchLink();
  return (
    <section id="mapa" className="bg-warm-white py-24 sm:py-32">
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
          <div className="h-[420px] w-full sm:h-[480px]">
            <UbicacionMap />
          </div>
        </Reveal>

        <Reveal delayMs={200} className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-stone-soft">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full border-2 border-gold-soft bg-teal-deep" />
            {ui.ubicacion.legendKuhane}
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-warm-white bg-turquoise" />
            {ui.ubicacion.legendExperiencias}
          </span>
        </Reveal>

        <Reveal delayMs={240} className="mt-14 flex flex-col items-center border-t border-wood/10 pt-10 text-center">
          <p className="text-[13px] font-medium tracking-[0.05em] text-stone">
            {ui.ubicacion.flightsTitle}
          </p>
          <a
            href={flightSearchUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-deep underline decoration-teal-deep/40 underline-offset-4 transition-colors hover:decoration-teal-deep"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
              <path d="M2 16l20-7-7 20-3-8-8-3z" strokeLinejoin="round" />
            </svg>
            {ui.ubicacion.flightsCta}
          </a>
          <p className="mt-1.5 max-w-xs text-[11px] leading-relaxed text-stone-soft">
            {ui.ubicacion.flightsHelper}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
