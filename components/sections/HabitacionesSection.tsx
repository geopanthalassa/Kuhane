"use client";

import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

export default function HabitacionesSection() {
  const { habitaciones, ui } = useContent();
  return (
    <section id="habitaciones" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionIntro
            eyebrow={ui.habitaciones.eyebrow}
            title={ui.habitaciones.title}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2">
          {habitaciones.map((h, i) => (
            <Reveal key={i} delayMs={i * 120}>
              <PlaceholderMedia label={ui.placeholder.roomPhoto} className="aspect-[4/3] w-full" />
              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="font-display text-xl text-stone">{h.nombre}</h3>
                <span className="whitespace-nowrap text-sm text-stone-soft">{h.precio}</span>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] text-stone-soft">
                <div className="flex justify-between border-b border-stone/10 py-1">
                  <dt>{ui.habitaciones.capacidad}</dt>
                  <dd>{h.capacidad}</dd>
                </div>
                <div className="flex justify-between border-b border-stone/10 py-1">
                  <dt>{ui.habitaciones.camas}</dt>
                  <dd>{h.camas}</dd>
                </div>
                <div className="flex justify-between border-b border-stone/10 py-1">
                  <dt>{ui.habitaciones.bano}</dt>
                  <dd>{h.bano}</dd>
                </div>
                <div className="flex justify-between border-b border-stone/10 py-1">
                  <dt>{ui.habitaciones.caracteristicas}</dt>
                  <dd className="text-right">{h.caracteristicas}</dd>
                </div>
              </dl>
              <p className="mt-3 text-[13px] text-stone-soft">
                {ui.habitaciones.servicios}: {h.servicios.join(", ")}
              </p>
              <a
                href="#reserva"
                className="mt-5 inline-block text-[12px] tracking-[0.18em] uppercase text-teal underline underline-offset-4 hover:text-teal-deep"
              >
                {ui.habitaciones.consultar}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
