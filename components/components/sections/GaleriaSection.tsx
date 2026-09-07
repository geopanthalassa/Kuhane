"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { galeria } from "@/lib/site-content";

// Carrusel horizontal (no grilla vertical completa) — mantiene la sección
// corta y con ritmo, en vez de volcar las 17 fotos una debajo de la otra.
export default function GaleriaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 320) + 16;
    el.scrollBy({ left: dir * amount * 2, behavior: "smooth" });
  };

  return (
    <section id="galeria" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionIntro eyebrow={galeria.eyebrow} title={galeria.title} />
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => scrollByCard(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone/20 text-stone hover:bg-stone/5"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => scrollByCard(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone/20 text-stone hover:bg-stone/5"
            >
              ›
            </button>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div
            ref={trackRef}
            className="mt-10 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] snap-x snap-mandatory [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {galeria.fotos.map((src, i) => (
              <button
                key={src}
                data-card
                onClick={() => setOpenIndex(i)}
                className="relative aspect-[4/5] w-[70vw] shrink-0 snap-start overflow-hidden sm:w-[300px]"
              >
                <Image
                  src={src}
                  alt="Kuhane Etno-Hostal — Rapa Nui"
                  fill
                  sizes="(min-width: 640px) 300px, 70vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-stone/95 p-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            aria-label="Cerrar"
            className="absolute right-6 top-6 text-3xl font-light text-warm-white/80 hover:text-warm-white"
            onClick={() => setOpenIndex(null)}
          >
            ×
          </button>
          <div className="relative aspect-[4/3] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galeria.fotos[openIndex]}
              alt="Kuhane Etno-Hostal — Rapa Nui"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
