"use client";

import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

export default function ExperienciasSection() {
  const { aeropuerto, experiencias, ui } = useContent();
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
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </div>
              <h3 className="font-display mt-6 text-xl text-stone">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-soft">{item.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Aeropuerto: presencia visual destacada, tal como pide el brief */}
        <Reveal delayMs={200}>
          <div className="relative mt-20 aspect-[21/9] w-full overflow-hidden rounded-sm">
            <Image
              src={aeropuerto.image}
              alt={aeropuerto.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/80 via-teal-deep/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-lg px-8 sm:px-14">
                <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">{ui.experiencias.arrivalLabel}</p>
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
