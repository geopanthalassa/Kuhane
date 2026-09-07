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
            confianza en la isla (buceo y cabalgatas). 7/9/2026: a pedido
            de Andre se sacaron los íconos circulares por actividad y se
            reemplazaron por un solo carrusel de fotos rectangular, igual
            que los de arriba — "que cambies los círculos por un carrusel
            de cabalgatas y buceo". El click abre el lightbox con todas
            las fotos. */}
        <Reveal delayMs={220}>
          <div className="mx-auto mt-14 max-w-md border-t border-stone/10 pt-12">
            <p className="text-center text-xs tracking-[0.25em] uppercase text-teal">
              {otrasExperiencias.eyebrow}
            </p>
            <h3 className="font-display mt-2 text-center text-xl text-stone">
              {otrasExperiencias.title}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-center text-[15px] leading-relaxed text-stone-soft">
              {otrasExperiencias.body}
            </p>
            <div className="mt-7">
              <PhotoCarousel
                photos={otrasExperiencias.fotos}
                alt={otrasExperiencias.title}
                autoPlayMs={2500}
                className="aspect-[4/5] w-full"
                onImageClick={(index) =>
                  setLightbox({ fotos: otrasExperiencias.fotos, alt: otrasExperiencias.title, index })
                }
              />
            </div>
          </div>
        </Reveal>

        {/* Aeropuerto: presencia visual destacada, tal como pide el brief */}
        <Reveal delayMs={200}>
          {/* Banner de aeropuerto a todo el ancho de la pantalla — pedido
              de Andre (7/9/2026): "debe ocupar toda la hoja como banner,
              no como una foto anexa encima". Se sale del contenedor
              max-w-7xl con el truco clásico de full-bleed.
              7/9/2026 (2): la foto real que tenemos es de ~700px de ancho
              (foto de los moai con el avión llegando, enviada por Andre) —
              estirarla a un recorte panorámico 3:1 en 100vw se veía
              borrosa y cortaba mal la composición. Se usa un recorte más
              cercano a la proporción real de la foto (así casi no hay que
              recortar) y se limita el ancho máximo de render para que en
              monitores enormes no se vea pixelada — en laptop y celular
              (la gran mayoría de las visitas) sigue yendo de borde a
              borde igual que antes. */}
          <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-14 w-screen overflow-hidden">
            <div className="relative mx-auto max-w-[1800px]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
                <Image
                  src={aeropuerto.foto}
                  alt="Traslado desde el aeropuerto — Kuhane"
                  fill
                  sizes="(min-width: 1800px) 1800px, 100vw"
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
