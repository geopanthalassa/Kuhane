"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ReservaPanel from "@/components/sections/ReservaPanel";
import { useContent } from "@/lib/content/LocaleProvider";

export default function CTAReservaSection() {
  const { cta, ui } = useContent();
  return (
    <section id="reserva" className="relative overflow-x-clip py-28 sm:py-36">
      <Image
        src="/images/cta-sunset.jpg"
        alt={ui.cta.imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-teal-deep/60" />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-warm-white sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-warm-white/80">{cta.body}</p>
        </Reveal>

        <Reveal delayMs={120} className="mt-10 flex justify-center">
          <ReservaPanel />
        </Reveal>
      </div>
    </section>
  );
}
