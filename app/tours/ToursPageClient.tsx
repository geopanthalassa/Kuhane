"use client";

import Image from "next/image";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";
import type { Tour } from "@/lib/site-content";

// Página de tours de Kuhane. Sigue el mismo patrón que /sofia-abarca en su
// estructura (página de detalle standalone, vuelve al inicio con un link
// ancla), pero a diferencia de esa, SÍ pasa por useContent/LocaleProvider
// (agregado 23/9/2026, a pedido de Andre) para que el switch ES/EN del Nav
// también traduzca esta página — antes era solo español.
//
// Ningún tour muestra precio acá — decisión de Andre (23/9/2026): el valor
// se confirma recién en el total a pagar en el hostal, después de la
// reserva.
function TourCard({ tour, consultarNota, agregarCta }: { tour: Tour; consultarNota: string; agregarCta: string }) {
  return (
    <Reveal className="flex flex-col overflow-hidden rounded-2xl bg-warm-white shadow-[0_20px_50px_-25px_rgba(48,43,38,0.35)]">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={tour.foto}
          alt={tour.fotoAlt}
          fill
          sizes="(min-width: 1024px) 45vw, 90vw"
          quality={90}
          className="object-cover"
        />
      </div>

      {/* Pie de foto: qué muestra la imagen de arriba — pedido de Andre
          (23/9/2026): "la descripcion de la foto debe ir despues de la
          foto no despues de todo el desglose del tour". Va antes del resto
          de la ficha (nombre, paradas, etc.), como pie de foto. */}
      {tour.historia && (
        <div className="border-b border-stone/10 px-6 pt-4 pb-4 sm:px-7">
          <p className="text-[11px] tracking-[0.15em] uppercase text-teal">{tour.parada}</p>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-stone-soft">{tour.historia}</p>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[11px] tracking-[0.2em] uppercase text-teal">
          {tour.modalidad}
          {tour.duracion ? ` · ${tour.duracion}` : ""}
        </p>
        <h3 className="mt-2 font-display text-xl text-stone">{tour.nombre}</h3>
        <p className="mt-2 text-[13px] text-stone-soft">Máximo {tour.maxPersonas} personas.</p>

        {tour.descripcion && (
          <p className="mt-3 text-[14px] leading-relaxed text-stone-soft">{tour.descripcion}</p>
        )}

        {tour.paradas.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-[14px] leading-relaxed text-stone-soft">
            {tour.paradas.map((parada) => (
              <li key={parada} className="flex gap-2">
                <span className="text-teal">·</span>
                {parada}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6">
          <p className="text-[12px] leading-relaxed text-stone-soft/80">{consultarNota}</p>
          <a
            href={`/?tour=${tour.slug}#reserva`}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-teal-deep px-5 py-2.5 text-[12px] font-semibold tracking-[0.05em] text-warm-white transition-colors hover:bg-teal sm:w-auto"
          >
            {agregarCta}
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function ToursPageClient() {
  const { toursIntro, toursPrivados, toursGrupales } = useContent();

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-teal-deep pb-16 pt-36 text-warm-white sm:pt-44">
          <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">{toursIntro.eyebrow}</p>
              <h1 className="mt-3 font-display text-4xl text-warm-white sm:text-5xl">{toursIntro.title}</h1>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-warm-white/80">
                {toursIntro.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Tours privados */}
        <section className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-teal">{toursIntro.privadosTitle}</p>
              <h2 className="mt-3 font-display text-3xl text-stone sm:text-4xl">{toursIntro.privadosTitle}</h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-stone-soft">
                {toursIntro.privadosBody}
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {toursPrivados.map((tour) => (
                <TourCard
                  key={tour.slug}
                  tour={tour}
                  consultarNota={toursIntro.consultarNota}
                  agregarCta={toursIntro.agregarCta}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tours grupales */}
        <section className="bg-warm-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-teal">{toursIntro.grupalesTitle}</p>
              <h2 className="mt-3 font-display text-3xl text-stone sm:text-4xl">{toursIntro.grupalesTitle}</h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-stone-soft">
                {toursIntro.grupalesBody}
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {toursGrupales.map((tour) => (
                <TourCard
                  key={tour.slug}
                  tour={tour}
                  consultarNota={toursIntro.consultarNota}
                  agregarCta={toursIntro.agregarCta}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Volver */}
        <section className="bg-sand pb-24 pt-16 sm:pb-32">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
            <Reveal>
              <a
                href="/#experiencias"
                className="inline-block text-[12px] tracking-[0.18em] uppercase text-teal underline underline-offset-4 hover:text-teal-deep"
              >
                {toursIntro.volver}
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
