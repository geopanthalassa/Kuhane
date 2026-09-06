"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { habitaciones, habitacionesIntro } from "@/lib/site-content";

export default function HabitacionesSection() {
  const [lightbox, setLightbox] = useState<{ fotos: string[]; alt: string; index: number } | null>(null);

  return (
    <section id="habitaciones" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionIntro
            eyebrow="Habitaciones"
            title="Cada habitación, parte de la experiencia."
          />
          <p className="mt-4 max-w-xl text-[15px] text-stone-soft">
            4 habitaciones y 3 bungalows frente al mar — capacidad total para{" "}
            {habitacionesIntro.capacidadTotal} personas.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2">
          {habitaciones.map((h, i) => (
            <Reveal key={h.nombre} delayMs={i * 100}>
              <PhotoCarousel
                photos={h.fotos}
                alt={h.nombre}
                className="aspect-[4/3] w-full"
                onImageClick={(index) => setLightbox({ fotos: h.fotos, alt: h.nombre, index })}
              />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] tracking-[0.18em] uppercase text-teal">{h.tipo}</span>
                  <h3 className="font-display text-xl text-stone">{h.nombre}</h3>
                </div>
                <span className="whitespace-nowrap text-sm text-stone-soft">{h.precio}</span>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] text-stone-soft">
                <div className="flex justify-between border-b border-stone/10 py-1">
                  <dt>Capacidad</dt>
                  <dd>{h.capacidad}</dd>
                </div>
                <div className="flex justify-between border-b border-stone/10 py-1">
                  <dt>Baño</dt>
                  <dd className="text-right">{h.bano}</dd>
                </div>
                <div className="col-span-2 flex justify-between border-b border-stone/10 py-1">
                  <dt>Camas</dt>
                  <dd className="text-right">{h.camas}</dd>
                </div>
                <div className="col-span-2 flex justify-between border-b border-stone/10 py-1">
                  <dt>Características</dt>
                  <dd className="text-right">{h.caracteristicas}</dd>
                </div>
              </dl>
              <p className="mt-3 text-[13px] text-stone-soft">
                Servicios: {h.servicios.join(", ")}
              </p>
              <a
                href="#reserva"
                className="mt-5 inline-block text-[12px] tracking-[0.18em] uppercase text-teal underline underline-offset-4 hover:text-teal-deep"
              >
                Consultar disponibilidad
              </a>
            </Reveal>
          ))}
        </div>
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
          </div>
        </div>
      )}
    </section>
  );
}
