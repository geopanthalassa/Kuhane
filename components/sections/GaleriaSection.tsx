"use client";

import { useState } from "react";
import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { galeria } from "@/lib/site-content";

export default function GaleriaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionIntro eyebrow={galeria.eyebrow} title={galeria.title} align="center" />
        </Reveal>

        <Reveal delayMs={100} className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:grid-cols-4">
          {galeria.fotos.map((src, i) => (
            <button
              key={src}
              onClick={() => setOpenIndex(i)}
              className={`relative overflow-hidden text-left ${
                i % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={src}
                alt="Kuhane Etno-Hostal — Rapa Nui"
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </button>
          ))}
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
