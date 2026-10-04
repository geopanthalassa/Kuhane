"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";
import { useUsdRate } from "@/lib/useUsdRate";
import type { Habitacion } from "@/lib/site-content";

// Rediseño más compacto (pedido de Andre, 7/9/2026: "la sección de
// habitaciones ocupa demasiado espacio"). Antes: grilla de 2 columnas con
// una ficha grande y muy alta por unidad (7 fichas = mucho scroll). Ahora:
// se agrupan las unidades por tipo real (Habitación / Bungalow, vía el
// campo `tipoCodigo` — estable entre idiomas) en dos filas de tarjetas más
// chicas y en 3 columnas, con los datos condensados en 2 líneas en vez de
// una tabla de 4 filas por ficha.
function RoomCard({
  h,
  consultarLabel,
  usdRate,
  aproxUsdPrefix,
  aproxUsdSuffix,
  onOpen,
}: {
  h: Habitacion;
  consultarLabel: string;
  usdRate: number | null;
  aproxUsdPrefix: string;
  aproxUsdSuffix: string;
  onOpen: (fotos: string[], alt: string) => void;
}) {
  return (
    <Reveal>
      <PhotoCarousel
        photos={h.fotos}
        alt={h.nombre}
        className="aspect-[4/3] w-full"
        onImageClick={() => onOpen(h.fotos, h.nombre)}
      />
      <div className="mt-4">
        <h3 className="font-display text-lg text-stone">{h.nombre}</h3>
      </div>
      <p className="mt-1 text-[13px] text-stone-soft">
        {h.capacidad} · {h.bano}
      </p>
      <p className="mt-1 text-[13px] text-stone-soft">{h.camas}</p>
      {/* 25/9/2026: el precio pasó a su propia línea (antes iba pegado al
          nombre, en una sola línea que no permitía cortar texto) porque
          ahora puede traer 2 tarifas — 1 y 2 personas, pedido de Andre: el
          precio por persona baja si reservan de a 2. */}
      <p className="mt-2 text-[13px] font-medium text-teal-deep">{h.precio}</p>
      {/* 4/10/2026: conversor de moneda a USD (pedido de Andre: que la
          gente de afuera vea el precio directamente en dólares). Se
          calcula en el navegador del visitante con un tipo de cambio en
          vivo (ver lib/useUsdRate.ts) y solo se muestra si esa consulta
          tuvo éxito — si falla, esta línea simplemente no aparece, nunca
          se inventa un número. */}
      {usdRate !== null && (
        <p className="mt-0.5 text-[12px] text-stone-soft">
          {aproxUsdPrefix} {Math.round(h.precioPersonaCLP * usdRate).toLocaleString("en-US")}{" "}
          <span className="text-stone-soft/70">({aproxUsdSuffix})</span>
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {h.servicios.map((s) => (
          <span
            key={s}
            className="rounded-full border border-stone/15 px-2.5 py-0.5 text-[11px] text-stone-soft"
          >
            {s}
          </span>
        ))}
      </div>
      <a
        href="#reserva"
        className="mt-4 inline-block text-[12px] tracking-[0.18em] uppercase text-teal underline underline-offset-4 hover:text-teal-deep"
      >
        {consultarLabel}
      </a>
    </Reveal>
  );
}

export default function HabitacionesSection() {
  const { habitaciones, habitacionesIntro, ui } = useContent();
  const [lightbox, setLightbox] = useState<{ fotos: string[]; alt: string; index: number } | null>(null);
  // Un solo pedido de red para las 7 fichas (ver lib/useUsdRate.ts).
  const usdRate = useUsdRate();

  const soloHabitaciones = habitaciones.filter((h) => h.tipoCodigo === "habitacion");
  const bungalows = habitaciones.filter((h) => h.tipoCodigo === "bungalow");

  return (
    <section id="habitaciones" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionIntro
            eyebrow={ui.habitacionesGroupTitle}
            title={habitacionesIntro.title}
          />
          <p className="mt-4 max-w-xl text-[15px] text-stone-soft">
            {habitacionesIntro.bodyPrefix} {habitacionesIntro.capacidadTotal}{" "}
            {habitacionesIntro.bodySuffix}
          </p>
          <p className="mt-2 max-w-xl text-[13px] text-teal-deep">{habitacionesIntro.incluye}</p>
        </Reveal>

        <Reveal delayMs={60}>
          <p className="mt-14 text-[11px] tracking-[0.2em] uppercase text-teal">
            {ui.habitacionesGroupTitle}
          </p>
        </Reveal>
        <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {soloHabitaciones.map((h, i) => (
            <div key={h.nombre} style={{ transitionDelay: `${i * 60}ms` }}>
              <RoomCard
                h={h}
                consultarLabel={ui.consultarDisponibilidad}
                usdRate={usdRate}
                aproxUsdPrefix={ui.aproxUsdPrefix}
                aproxUsdSuffix={ui.aproxUsdSuffix}
                onOpen={(fotos, alt) => setLightbox({ fotos, alt, index: 0 })}
              />
            </div>
          ))}
        </div>

        <Reveal delayMs={60}>
          <p className="mt-16 text-[11px] tracking-[0.2em] uppercase text-teal">
            {ui.bungalowsGroupTitle}
          </p>
        </Reveal>
        <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {bungalows.map((h, i) => (
            <div key={h.nombre} style={{ transitionDelay: `${i * 60}ms` }}>
              <RoomCard
                h={h}
                consultarLabel={ui.consultarDisponibilidad}
                usdRate={usdRate}
                aproxUsdPrefix={ui.aproxUsdPrefix}
                aproxUsdSuffix={ui.aproxUsdSuffix}
                onOpen={(fotos, alt) => setLightbox({ fotos, alt, index: 0 })}
              />
            </div>
          ))}
        </div>
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
          </div>
        </div>
      )}
    </section>
  );
}
