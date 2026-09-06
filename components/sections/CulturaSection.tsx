import Image from "next/image";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { cultura, libros, sofia } from "@/lib/site-content";

export default function CulturaSection() {
  return (
    <section id="cultura" className="bg-teal-deep py-24 text-warm-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <SectionIntro eyebrow={cultura.eyebrow} title={cultura.title} tone="light" />
          <p className="mt-6 text-[15px] leading-relaxed text-warm-white/75">{cultura.body}</p>
        </Reveal>

        {/* Sofía Abarca */}
        <Reveal delayMs={60}>
          <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={sofia.foto}
                  alt="Sofía Abarca, fundadora de Kuhane"
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  quality={95}
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">{sofia.eyebrow}</p>
              <h3 className="mt-3 font-display text-2xl text-warm-white sm:text-3xl">{sofia.title}</h3>
              <p className="mt-1 text-sm italic text-warm-white/70">{sofia.subtitle}</p>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-warm-white/80">
                {sofia.summary}
              </p>
              <dl className="mt-8 grid max-w-md grid-cols-3 gap-4">
                {sofia.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-2xl text-warm-white">{stat.value}</dt>
                    <dd className="mt-1 text-xs leading-snug text-warm-white/65">{stat.label}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={sofia.ctaHref}
                className="mt-8 inline-block text-[12px] tracking-[0.18em] uppercase text-gold-soft underline underline-offset-4 hover:text-warm-white"
              >
                {sofia.ctaLabel} →
              </a>
            </div>
          </div>
        </Reveal>

        {/* Libros */}
        <Reveal delayMs={100}>
          <div className="motif-divider my-16 h-4 opacity-70" />
          <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">Libros</p>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {libros.map((libro, i) => (
              <div key={i} className="flex gap-5">
                {libro.portada ? (
                  <div className="relative h-40 w-28 shrink-0 overflow-hidden">
                    <Image
                      src={libro.portada}
                      alt={`Portada de ${libro.titulo}`}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PlaceholderMedia tone="teal" label="Portada" className="h-40 w-28 shrink-0" />
                )}
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
      </div>
    </section>
  );
}
