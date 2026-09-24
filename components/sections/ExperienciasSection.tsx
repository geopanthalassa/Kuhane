"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

export default function ExperienciasSection() {
  const { aeropuerto, experiencias, ui } = useContent();
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

        {/* 24/9/2026: la franja de "Kuhane Tours + Otras experiencias en la
            isla" que iba acá se movió a su propio componente
            (OtrasExperienciasSection.tsx) para poder ubicarla en otra
            parte de la página (entre el video de Kuhane y la Galería) sin
            mover esta sección completa — pedido explícito de Andre: "no
            todo el bloque de experiencias". Ver ese archivo para el
            contenido/historial de esa franja. */}

        {/* Aeropuerto: presencia visual destacada, tal como pide el brief */}
        <Reveal delayMs={200}>
          {/* Banner de aeropuerto a todo el ancho de la pantalla — pedido
              de Andre (7/9/2026): "debe ocupar toda la hoja como banner,
              no como una foto anexa encima". Se sale del contenedor
              max-w-7xl con el truco clásico de full-bleed.
              7/9/2026 (3): la foto (la de los moai + el avión que mandó
              Andre) es de 1125px de ancho real. Se vio pixelada porque
              Next.js estaba: (a) agrandándola hasta 1800px — más grande
              que el archivo real, o sea estirando sin tener más detalle
              que mostrar — y (b) comprimiéndola con la calidad por
              defecto (75). Se bajó el ancho máximo a la resolución real
              de la foto y se subió la calidad a 90 para que no se vea
              pixelada/con bloques en el cielo. */}
          <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-14 w-screen overflow-hidden">
            <div className="relative mx-auto max-w-[1125px]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
                <Image
                  src={aeropuerto.foto}
                  alt={aeropuerto.fotoAlt}
                  fill
                  quality={90}
                  sizes="(min-width: 1125px) 1125px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/80 via-teal-deep/25 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end">
                <div className="max-w-lg px-8 pb-8 sm:px-14 sm:pb-10">
                  <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">{ui.llegadaLabel}</p>
                  <h3 className="font-display mt-3 text-2xl text-warm-white sm:text-3xl">
                    {aeropuerto.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-warm-white/85">
                    {aeropuerto.body}
                  </p>
                </div>
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
            aria-label={ui.cerrar}
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
                  aria-label={ui.fotoAnterior}
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
                  aria-label={ui.fotoSiguiente}
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
