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

  // Carrusel solo en mobile (< sm) — pedido de Andre (21/9/2026): "en
  // version movil deberian estar en formato de carrusel asi no ocupa tanto
  // espacio". De sm para arriba se mantiene la grilla de siempre; en mobile
  // se reemplaza por scroll horizontal con snap + puntitos. Los puntitos se
  // sincronizan con scroll real (sin librerías), redondeando la posición de
  // scroll al ancho de una tarjeta.
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
          <>
            {/* Desktop/tablet: grilla de siempre */}
            <div className="mt-14 hidden gap-8 sm:grid sm:grid-cols-3">
              {resenas.testimonios.map((r, i) => (
                <Reveal key={r.nombre + i} delayMs={i * 100}>
                  <TestimonioCard nombre={r.nombre} fuente={r.fuente} texto={r.texto} />
                </Reveal>
              ))}
            </div>

            {/* Mobile: carrusel horizontal con snap, para no ocupar tanto espacio */}
            <div className="mt-14 sm:hidden">
              <div
                ref={scrollerRef}
                onScroll={handleScroll}
                className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {resenas.testimonios.map((r, i) => (
                  <div key={r.nombre + i} className="w-[85%] shrink-0 snap-center">
                    <TestimonioCard nombre={r.nombre} fuente={r.fuente} texto={r.texto} />
                  </div>
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
          </>
        )}
      </div>
    </section>
  );
}
