import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { aeropuerto, experiencias } from "@/lib/site-content";

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
              <PlaceholderMedia label={`${item.title} — foto próximamente`} className="aspect-[4/5] w-full" />
              <h3 className="font-display mt-6 text-xl text-stone">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-soft">{item.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Aeropuerto: presencia visual destacada, tal como pide el brief */}
        <Reveal delayMs={200}>
          <div className="relative mt-20 overflow-hidden rounded-sm">
            <PlaceholderMedia tone="teal" label="Traslado desde el aeropuerto — foto próximamente" className="aspect-[21/9] w-full" />
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
