"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

export default function ExperienciasSection() {
  const { aeropuerto, experiencias, otrasExperiencias, experienciasKuhaneTours, ui } = useContent();
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
            ponlo debajo de la imagen de tours guiados y del otro". */}
        <Reveal delayMs={190}>
          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-stone/10 pt-12 lg:grid-cols-2 lg:gap-14">
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
              <p className="mt-3 text-[13px] leading-relaxed text-stone-soft">
                {experienciasKuhaneTours.footnote}
              </p>
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
                  <p className="text-xs tracking-[0.25em] uppercase text-teal">
                    {otrasExperiencias.eyebrow}
                  </p>
                  <h3 className="font-display mt-2 text-xl text-stone">{otrasExperiencias.title}</h3>
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
