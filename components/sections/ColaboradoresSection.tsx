"use client";

import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

function whatsappDigits(raw: string) {
  return raw.replace(/[^0-9]/g, "");
}

// Estructura para experiencias vendidas por amigos/colaboradores de Kuhane.
// Sin datos reales todavía (nombre, actividad, precio, contacto) — placeholders
// explícitos hasta que Kuhane confirme cada colaborador.
export default function ColaboradoresSection() {
  const { colaboradores, colaboradoresList, site, TODO_PLACEHOLDER, ui } = useContent();
  const waNumber = whatsappDigits(site.whatsapp as string);
  const waText = encodeURIComponent(ui.colaboradores.waMessage);
  const waHref = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <section id="colaboradores" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionIntro eyebrow={colaboradores.eyebrow} title={colaboradores.title} align="center" />
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-stone-soft">
            {colaboradores.body}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {colaboradoresList.map((c, i) => (
            <Reveal key={i} delayMs={i * 120}>
              <div className="overflow-hidden rounded-sm border border-wood/15 bg-warm-white">
                <PlaceholderMedia label={ui.placeholder.collaboratorPhoto} className="aspect-[4/3] w-full" />
                <div className="p-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-teal">
                    {c.actividad === TODO_PLACEHOLDER ? ui.colaboradores.actividadPorConfirmar : c.actividad}
                  </p>
                  <h3 className="font-display mt-2 text-lg text-stone">
                    {c.nombre === TODO_PLACEHOLDER ? ui.colaboradores.colaboradorPorConfirmar : c.nombre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-soft">
                    {c.descripcion === TODO_PLACEHOLDER
                      ? ui.colaboradores.descripcionFallback
                      : c.descripcion}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-stone-soft/70">
                      {c.precio === TODO_PLACEHOLDER ? ui.colaboradores.precioPorConfirmar : c.precio}
                    </span>
                    <span className="text-teal">
                      {c.contacto === TODO_PLACEHOLDER ? ui.colaboradores.contactoPorConfirmar : c.contacto}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={280}>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-5 rounded-sm border border-wood/15 bg-warm-white px-8 py-10 text-center">
            <h3 className="font-display text-2xl text-stone">{colaboradores.ctaTitle}</h3>
            <p className="max-w-lg text-[15px] leading-relaxed text-stone-soft">{colaboradores.ctaBody}</p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                {colaboradores.ctaWhatsapp}
              </a>
              <a
                href="#reserva"
                className="rounded-full border border-teal px-6 py-3 text-sm font-medium text-teal transition-colors hover:bg-teal hover:text-warm-white"
              >
                {colaboradores.ctaReserva}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
