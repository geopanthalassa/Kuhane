"use client";

import dynamic from "next/dynamic";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

// Leaflet toca `window`, así que el mapa se carga solo en el cliente.
const UbicacionMap = dynamic(() => import("@/components/ui/UbicacionMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-sand" />,
});

export default function UbicacionSection() {
  const { ubicacion, ui } = useContent();
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
      </div>
    </section>
  );
}
