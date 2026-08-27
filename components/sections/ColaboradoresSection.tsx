import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { colaboradores, colaboradoresList, TODO_PLACEHOLDER } from "@/lib/site-content";

// Estructura para experiencias vendidas por amigos/colaboradores de Kuhane.
// Sin datos reales todavía (nombre, actividad, precio, contacto) — placeholders
// explícitos hasta que Kuhane confirme cada colaborador.
export default function ColaboradoresSection() {
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
                <PlaceholderMedia label="Foto próximamente" className="aspect-[4/3] w-full" />
                <div className="p-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-teal">
                    {c.actividad === TODO_PLACEHOLDER ? "Actividad por confirmar" : c.actividad}
                  </p>
                  <h3 className="font-display mt-2 text-lg text-stone">
                    {c.nombre === TODO_PLACEHOLDER ? "Colaborador por confirmar" : c.nombre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-soft">
                    {c.descripcion === TODO_PLACEHOLDER
                      ? "Estamos coordinando con nuestros amigos en la isla para sumar esta experiencia. Pronto vas a poder reservarla junto con tu estadía."
                      : c.descripcion}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-stone-soft/70">
                      {c.precio === TODO_PLACEHOLDER ? "Precio por confirmar" : c.precio}
                    </span>
                    <span className="text-teal">
                      {c.contacto === TODO_PLACEHOLDER ? "Contacto por confirmar" : c.contacto}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
