import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { cultura, libros, voces } from "@/lib/site-content";

export default function CulturaSection() {
  return (
    <section id="cultura" className="bg-teal-deep py-24 text-warm-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <SectionIntro eyebrow={cultura.eyebrow} title={cultura.title} tone="light" />
          <p className="mt-6 text-[15px] leading-relaxed text-warm-white/75">{cultura.body}</p>
        </Reveal>

        {/* Libros */}
        <Reveal delayMs={100}>
          <div className="motif-divider my-16 h-4 opacity-70" />
          <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">Libros</p>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {libros.map((libro, i) => (
              <div key={i} className="flex gap-5">
                <PlaceholderMedia
                  tone="teal"
                  label="Portada"
                  className="h-40 w-28 shrink-0"
                />
                <div>
                  <h4 className="font-display text-lg text-warm-white">{libro.titulo}</h4>
                  <p className="mt-1 text-xs text-gold-soft">{libro.anio}</p>
                  <p className="mt-2 text-sm leading-relaxed text-warm-white/70">
                    {libro.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Voces de Rapa Nui */}
        <Reveal delayMs={150}>
          <div className="motif-divider my-16 h-4 opacity-70" />
          <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">Voces de Rapa Nui</p>
          <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {voces.map((voz, i) => (
              <div key={i} className="flex gap-5">
                <PlaceholderMedia tone="teal" label="Foto" className="h-16 w-16 shrink-0 rounded-full" />
                <div>
                  <p className="font-display text-base text-warm-white">{voz.nombre}</p>
                  <p className="text-xs text-gold-soft">{voz.rol}</p>
                  <p className="mt-3 text-sm italic text-warm-white/70">“{voz.pregunta}”</p>
                  <p className="mt-2 text-sm leading-relaxed text-warm-white/85">{voz.respuesta}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
