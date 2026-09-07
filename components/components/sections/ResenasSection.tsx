import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { resenas, site, TODO_PLACEHOLDER } from "@/lib/site-content";

export default function ResenasSection() {
  return (
    <section id="resenas" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionIntro eyebrow={resenas.eyebrow} title={resenas.title} align="center" />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-stone-soft">
            {site.ratings.map((r) => (
              <div key={r.source} className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl text-stone">{r.value}</span>
                <span className="text-xs text-stone-soft/70">{r.scale}</span>
                <span className="ml-1">{r.source}</span>
                {r.count !== TODO_PLACEHOLDER && (
                  <span className="text-stone-soft/70">· {r.count} reseñas</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {resenas.testimonios.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {resenas.testimonios.map((r, i) => (
              <Reveal key={r.nombre + i} delayMs={i * 100}>
                <div className="h-full rounded-sm border border-stone/10 p-7">
                  <p className="text-gold">★★★★★</p>
                  <p className="mt-4 text-[15px] italic leading-relaxed text-stone-soft">
                    &ldquo;{r.texto}&rdquo;
                  </p>
                  <p className="mt-5 text-xs tracking-[0.15em] uppercase text-stone-soft/70">
                    {r.nombre} — {r.fuente}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
