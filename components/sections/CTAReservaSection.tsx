import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { cta } from "@/lib/site-content";

export default function CTAReservaSection() {
  return (
    <section id="reserva" className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src={cta.foto}
        alt="Ahu Tongariki al atardecer, Rapa Nui"
        fill
        sizes="100vw"
        className="object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-teal-deep/60" />

      <Reveal className="relative mx-auto max-w-2xl px-6 text-center sm:px-10">
        <h2 className="font-display text-3xl leading-tight text-warm-white sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-warm-white/80">{cta.body}</p>
        <a
          href="#"
          className="mt-8 inline-block rounded-full bg-warm-white px-9 py-3.5 text-[12px] tracking-[0.2em] text-teal-deep transition-colors hover:bg-gold-soft"
        >
          {cta.ctaPrimary}
        </a>
      </Reveal>
    </section>
  );
}
