import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { habitaciones } from "@/lib/site-content";

export default function HabitacionesSection() {
  return (
    <section id="habitaciones" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionIntro
            eyebrow="Habitaciones"
            title="Cada habitación, parte de la experiencia."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2">
          {habitaciones.map((h, i) => (
            <Reveal key={i} delayMs={i * 120}>
              <PlaceholderMedia label="Habitación — fotografía próximamente" className="aspect-[4/3] w-full" />
              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="font-display text-xl text-stone">{h.nombre}</h3>
                <span className="whitespace-nowrap text-sm text-stone-soft">{h.precio}</span>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] text-stone-soft">
                <div className="flex justify-between border-b border-stone/10 py-1">
                  <dt>Capacidad</dt>
                  <dd>{h.capacidad}</dd>
                </div>
                <div className="flex justify-between border-b border-stone/10 py-1">
                  <dt>Camas</dt>
                  <dd>{h.camas}</dd>
                </div>
                <div className="flex justify-between border-b border-stone/10 py-1">
                  <dt>Baño</dt>
                  <dd>{h.bano}</dd>
                </div>
                <div className="flex justify-between border-b border-stone/10 py-1">
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
    </section>
  );
}
