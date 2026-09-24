"use client";

import { useRef, useState } from "react";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

function TestimonioCard({ nombre, fuente, texto }: { nombre: string; fuente: string; texto: string }) {
  return (
    <div className="h-full rounded-sm border border-stone/10 p-7">
      <p className="text-gold">★★★★★</p>
      <p className="mt-4 text-[15px] italic leading-relaxed text-stone-soft">&ldquo;{texto}&rdquo;</p>
      <p className="mt-5 text-xs tracking-[0.15em] uppercase text-stone-soft/70">
        {nombre} — {fuente}
      </p>
    </div>
  );
}

export default function ResenasSection() {
  const { resenas, site, TODO_PLACEHOLDER, ui } = useContent();

  // Carrusel en todos los tamaños — pedido de Andre (21/9/2026): "en
  // version movil deberian estar en formato de carrusel asi no ocupa tanto
  // espacio" (implementado solo para mobile en ese momento). 24/9/2026:
  // Andre pidió extenderlo — "necesito que las reseñas esten en carrusel
  // tal como esta en la version movil" — ahora el mismo carrusel horizontal
  // con snap + puntitos corre también en desktop/tablet, ya no hay grilla
  // estática aparte. Las tarjetas usan un ancho fijo más grande a partir de
  // sm/lg para que en pantallas anchas se vean 2-3 a la vez en vez de una
  // sola tarjeta enorme con espacio vacío al lado (en mobile se mantiene el
  // 85% de siempre). Los puntitos se sincronizan con scroll real (sin
  // librerías), redondeando la posición de scroll al ancho de una tarjeta.
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleScroll() {
    const el = scrollerRef.current;
    if (!el || el.children.length === 0) return;
    const card = el.children[0] as HTMLElement;
    const cardWidth = card.offsetWidth + 16; // + gap-4
    const i = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.max(0, Math.min(i, el.children.length - 1)));
  }

  function scrollToIndex(i: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    el.scrollTo({ left: i * cardWidth, behavior: "smooth" });
    setActiveIndex(i);
  }

  return (
    <section id="resenas" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionIntro eyebrow={resenas.eyebrow} title={resenas.title} align="center" />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-stone-soft">
            {site.ratings.map((r) => (
              <div key={r.source} className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl text-stone">{r.value}</span>
                <span className="text-xs text-stone-soft/70">{r.scale}</span>
                <span className="ml-1">{r.source}</span>
                {r.count !== TODO_PLACEHOLDER && (
                  <span className="text-stone-soft/70">
                    · {r.count} {ui.reviewsCountSuffix}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {resenas.testimonios.length > 0 && (
          <div className="mt-14">
            {/* Carrusel horizontal con snap, en todos los tamaños de
                pantalla — ver comentario arriba (24/9/2026). El ancho de
                la tarjeta crece en sm/lg para que en desktop se alcancen
                a ver 2-3 a la vez en vez de una sola ocupando casi todo
                el ancho. El -mx-6/px-6 (bleed hasta el borde) sigue el
                mismo padding del contenedor en cada breakpoint
                (px-6 en mobile, sm:px-10 de sm para arriba). */}
            <div
              ref={scrollerRef}
              onScroll={handleScroll}
              className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-1 sm:-mx-10 sm:scroll-px-10 sm:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {resenas.testimonios.map((r, i) => (
                <Reveal key={r.nombre + i} delayMs={i * 60} className="w-[85%] shrink-0 snap-center sm:w-[320px] lg:w-[360px]">
                  <TestimonioCard nombre={r.nombre} fuente={r.fuente} texto={r.texto} />
                </Reveal>
              ))}
            </div>

            {resenas.testimonios.length > 1 && (
              <div className="mt-5 flex items-center justify-center gap-2">
                {resenas.testimonios.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Reseña ${i + 1} de ${resenas.testimonios.length}`}
                    onClick={() => scrollToIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex ? "w-5 bg-teal-deep" : "w-1.5 bg-stone/25"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
