import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { aeropuerto, experiencias, otrasExperiencias } from "@/lib/site-content";

export default function ExperienciasSection() {
  return (
    <section id="experiencias" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionIntro eyebrow={experiencias.eyebrow} title={experiencias.title} align="center" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {experiencias.items.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 120}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.foto}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 90vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display mt-6 text-xl text-stone">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-soft">{item.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Tours y otras experiencias de la isla (buceo, cabalgatas, etc.) */}
        <Reveal delayMs={160}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-stone-soft">
            {experiencias.extra}
          </p>
        </Reveal>

        {/* Experiencia extra: buceo — no es un tour de Kuhane, es un contacto
            de confianza en la isla. Se muestra aparte, con crédito de las
            fotos, para distinguirla de las experiencias propias de arriba. */}
        <Reveal delayMs={220}>
          <div className="mx-auto mt-14 max-w-4xl border-t border-stone/10 pt-14">
            <p className="text-center text-xs tracking-[0.25em] uppercase text-teal">
              {otrasExperiencias.eyebrow}
            </p>
            <h3 className="font-display mt-2 text-center text-2xl text-stone">
              {otrasExperiencias.title}
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-center text-[15px] leading-relaxed text-stone-soft">
              {otrasExperiencias.body}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {otrasExperiencias.fotos.map((src) => (
                <div key={src} className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={src}
                    alt="Buceo en Rapa Nui"
                    fill
                    sizes="(min-width: 640px) 22vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Aeropuerto: presencia visual destacada, tal como pide el brief */}
        <Reveal delayMs={200}>
          <div className="relative mt-14 overflow-hidden rounded-sm">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={aeropuerto.foto}
                alt="Traslado desde el aeropuerto — Kuhane"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-teal-deep/45" />
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-lg px-8 sm:px-14">
                <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">Llegada</p>
                <h3 className="font-display mt-3 text-2xl text-warm-white sm:text-3xl">
                  {aeropuerto.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-warm-white/85">
                  {aeropuerto.body}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
