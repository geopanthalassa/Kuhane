"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { aeropuerto, experiencias, otrasExperiencias } from "@/lib/site-content";

export default function ExperienciasSection() {
  const [lightbox, setLightbox] = useState<{ fotos: string[]; alt: string; index: number } | null>(
    null
  );

  return (
    <section id="experiencias" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionIntro eyebrow={experiencias.eyebrow} title={experiencias.title} align="center" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {experiencias.items.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 120}>
              <PhotoCarousel
                photos={item.fotos}
                alt={item.title}
                className="aspect-[4/5] w-full"
                autoPlayMs={2500}
                onImageClick={(index) => setLightbox({ fotos: item.fotos, alt: item.title, index })}
              />
              <h3 className="font-display mt-6 text-xl text-stone">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-soft">{item.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Tours y otras experiencias de la isla (buceo, cabalgatas, etc.) */}
        <Reveal delayMs={160}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-stone-soft">
            {experiencias.extra}
          </p>
        </Reveal>

        {/* Experiencias extra: no son un tour de Kuhane, son contactos de
            confianza en la isla. A pedido de Andre (7/9/2026) se muestran
            de forma discreta — un ícono circular por actividad — para que
            lo que ofrece Kuhane siga siendo lo protagonista; el click abre
            las fotos de esa actividad. */}
        <Reveal delayMs={220}>
          <div className="mx-auto mt-14 max-w-2xl border-t border-stone/10 pt-12">
            <p className="text-center text-xs tracking-[0.25em] uppercase text-teal">
              {otrasExperiencias.eyebrow}
            </p>
            <h3 className="font-display mt-2 text-center text-xl text-stone">
              {otrasExperiencias.title}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-center text-[15px] leading-relaxed text-stone-soft">
              {otrasExperiencias.body}
            </p>
            <div className="mt-7 flex items-center justify-between gap-6 px-6 sm:px-16">
              {otrasExperiencias.actividades.map((actividad) => (
                <button
                  key={actividad.title}
                  type="button"
                  onClick={() =>
                    setLightbox({ fotos: actividad.fotos, alt: actividad.title, index: 0 })
                  }
                  className="group flex flex-col items-center gap-3"
                >
                  <span className="relative block h-32 w-32 overflow-hidden rounded-full ring-2 ring-stone/15 transition-transform duration-200 group-hover:scale-105 sm:h-40 sm:w-40">
                    <Image
                      src={actividad.fotos[0]}
                      alt={actividad.title}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </span>
                  <span className="text-sm font-medium tracking-[0.1em] uppercase text-stone">
                    {actividad.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Aeropuerto: presencia visual destacada, tal como pide el brief */}
        <Reveal delayMs={200}>
          <div className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-sm">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={aeropuerto.foto}
                alt="Traslado desde el aeropuerto — Kuhane"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/80 via-teal-deep/25 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end">
              <div className="max-w-lg px-8 pb-8 sm:px-14 sm:pb-10">
                <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">Llegada</p>
                <h3 className="font-display mt-3 text-2xl text-warm-white sm:text-3xl">
                  {aeropuerto.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-warm-white/85">
                  {aeropuerto.body}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-stone/95 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Cerrar"
            className="absolute right-6 top-6 text-3xl font-light text-warm-white/80 hover:text-warm-white"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <div
            className="relative aspect-[4/3] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.fotos[lightbox.index]}
              alt={lightbox.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
            {lightbox.fotos.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Foto anterior"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((lb) =>
                      lb
                        ? { ...lb, index: (lb.index - 1 + lb.fotos.length) % lb.fotos.length }
                        : lb
                    );
                  }}
                  className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-stone/50 text-warm-white hover:bg-stone/70"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Foto siguiente"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((lb) =>
                      lb ? { ...lb, index: (lb.index + 1) % lb.fotos.length } : lb
                    );
                  }}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-stone/50 text-warm-white hover:bg-stone/70"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
