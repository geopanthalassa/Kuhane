"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

// 24/9/2026: esta franja (Kuhane Tours + "Otras experiencias en la isla")
// vivía dentro de ExperienciasSection, justo debajo del carrusel de
// Bienvenidos/Cultura viva/El atardecer. Andre pidió moverla para que
// quede entre el video "Kuhane te espera" y la Galería — pero SOLO esta
// franja, no la sección de Experiencias completa (esa se devolvió a su
// posición original, entre Kuhane y Cultura). Se separó en su propio
// componente/sección para poder ubicarla de forma independiente en
// app/page.tsx. El contenido, textos y comportamiento (carrusel
// arrastrable + lightbox) quedan exactamente igual que antes — ver el
// historial de comentarios más abajo, que se mantuvo tal cual.
export default function OtrasExperienciasSection() {
  const { otrasExperiencias, experienciasKuhaneTours, ui } = useContent();
  const [lightbox, setLightbox] = useState<{ fotos: string[]; alt: string; index: number } | null>(
    null
  );
  const otrasTrackRef = useRef<HTMLDivElement>(null);

  const scrollOtras = (dir: -1 | 1) => {
    const el = otrasTrackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-thumb]") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 176) + 12;
    el.scrollBy({ left: dir * amount * 3, behavior: "smooth" });
  };

  return (
    <section id="otras-experiencias" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Una sola franja con dos mitades — pedido de Andre (23/9/2026):
            "poner en un lado eso de tours guiados kuhane y al lado una
            pequeña galeria y el 'ademas te conectamos con otras
            experiencias', en una sola franja". Izquierda: Kuhane Tours
            (link a /tours, foto con texto encima — ya probamos la versión
            full-bleed antes y era demasiado grande/desbalanceaba la
            sección). Derecha: la galería de "otras experiencias" que ya
            existía (buceo, cabalgatas), sin cambios de comportamiento.
            23/9/2026 (2): antes la tarjeta de la izquierda perdía su
            relación de aspecto en desktop (lg:aspect-auto) y terminaba con
            la altura mínima que le marcaba el contenido de la derecha —
            se veía chica/apretada al lado del banner de aeropuerto de
            abajo, que sí es grande. Se mantiene 16:10 también en desktop
            (sin llegar a full-bleed, que ya se probó y no funcionó) para
            que la franja tenga más presencia y las proporciones no salten
            tanto entre esta sección y la siguiente.
            23/9/2026 (3): el párrafo "Kuhane pone a tu disposición sus
            tours..." que antes iba suelto arriba de esta franja se dividió
            en dos y cada mitad quedó como pie de foto bajo la tarjeta que
            le corresponde (footnote en experienciasKuhaneTours y en
            otrasExperiencias, site-content.ts) — pedido explícito de
            Andre: "debe resaltar, debe ser igual a las otras secciones...
            ponlo debajo de la imagen de tours guiados y del otro".
            23/9/2026 (5): Andre pidió sacar el pie de foto de la tarjeta
            de Tours Kuhane ("Kuhane pone a tu disposición sus tours.") —
            quedaba redundante con el texto que ya está encima de la
            imagen. También sacó el eyebrow "ADEMÁS" de la columna derecha
            y pidió alinear la franja porque el texto de la derecha se
            veía más ancho/desbalanceado respecto a la tarjeta de la
            izquierda — se le puso el mismo ancho máximo (max-w-md) que
            usa el párrafo de arriba, para que no se extienda más que el
            resto del contenido de esa columna.
            23/9/2026 (6): Andre pidió lo contrario para el pie de foto de
            "otras experiencias" — que ocupe todo el ancho del carrusel de
            fotos en vez de cortarse antes de la tercera foto. Se le saca
            el max-w-md (ese límite se mantiene solo en el párrafo de
            arriba, que es más corto).
            24/9/2026: se saca el border-t/pt-12 que antes separaba esta
            franja del carrusel de arriba (eran la misma sección) — ahora
            es su propia sección con su propio padding vertical (py-24
            sm:py-32), no necesita ese borde/espacio extra. */}
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <a
                href="/tours"
                className="group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden sm:aspect-[16/10]"
              >
                <Image
                  src={experienciasKuhaneTours.foto}
                  alt={experienciasKuhaneTours.fotoAlt}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/90 via-teal-deep/35 to-transparent" />
                <div className="relative px-6 pb-6 sm:px-8 sm:pb-8">
                  <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">
                    {experienciasKuhaneTours.eyebrow}
                  </p>
                  <h3 className="font-display mt-2 text-2xl text-warm-white sm:text-3xl">
                    {experienciasKuhaneTours.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-warm-white/85">
                    {experienciasKuhaneTours.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-soft px-6 py-2.5 text-[12px] font-semibold tracking-[0.05em] text-teal-deep shadow-[0_10px_30px_-8px_rgba(221,201,163,0.6)] transition-transform duration-200 group-hover:scale-[1.03]">
                    {experienciasKuhaneTours.cta}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </div>

            {/* Experiencias extra: no son un tour de Kuhane, son contactos
                de confianza en la isla (buceo y cabalgatas). 7/9/2026: a
                pedido de Andre se sacaron los íconos circulares por
                actividad y quedó un carrusel de fotos chicas que el
                usuario cambia arrastrando o con las flechas, no un
                auto-scroll. El click sobre cualquier foto abre el
                lightbox con todas.
                23/9/2026 (4): pedido de Andre — las fotos de este carrusel
                se veían chicas al lado de las demás fotos de la sección;
                se agrandaron (112→144px en mobile, 128→176px en desktop)
                para que la franja se vea más armónica con el resto. */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-xl text-stone">{otrasExperiencias.title}</h3>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    aria-label={ui.anterior}
                    onClick={() => scrollOtras(-1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-stone/20 text-stone hover:bg-stone/5"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label={ui.siguiente}
                    onClick={() => scrollOtras(1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-stone/20 text-stone hover:bg-stone/5"
                  >
                    ›
                  </button>
                </div>
              </div>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-stone-soft">
                {otrasExperiencias.body}
              </p>
              <div
                ref={otrasTrackRef}
                className="mt-7 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] snap-x snap-mandatory [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {otrasExperiencias.fotos.map((foto, i) => (
                  <button
                    key={foto}
                    data-thumb
                    type="button"
                    onClick={() =>
                      setLightbox({ fotos: otrasExperiencias.fotos, alt: otrasExperiencias.title, index: i })
                    }
                    className="relative h-36 w-36 shrink-0 snap-start overflow-hidden sm:h-44 sm:w-44"
                  >
                    <Image
                      src={foto}
                      alt={otrasExperiencias.title}
                      fill
                      sizes="176px"
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-stone-soft">
                {otrasExperiencias.footnote}
              </p>
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
