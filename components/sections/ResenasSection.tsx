import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { resenas, site, TODO_PLACEHOLDER } from "@/lib/site-content";

const placeholderReviews = [1, 2, 3];
const hasReviewCount = site.googleRating.count !== TODO_PLACEHOLDER;
const hasReviewsUrl = site.googleRating.url !== TODO_PLACEHOLDER;

export default function ResenasSection() {
  return (
    <section id="resenas" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionIntro eyebrow={resenas.eyebrow} title={resenas.title} align="center" />
          <div className="mt-5 flex items-center gap-2 text-sm text-stone-soft">
            <span className="text-gold">★</span>
            <span className="font-display text-2xl text-stone">{site.googleRating.value}</span>
            {hasReviewCount && (
              <>
                <span>·</span>
                <span>{site.googleRating.count} reseñas</span>
              </>
            )}
            <span>·</span>
            {hasReviewsUrl ? (
              <a
                href={site.googleRating.url as string}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-stone"
              >
                Ver en {site.googleRating.source}
              </a>
            ) : (
              <span>{site.googleRating.source}</span>
            )}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {placeholderReviews.map((n) => (
            <Reveal key={n} delayMs={n * 100}>
              <div className="h-full rounded-sm border border-stone/10 p-7">
                <p className="text-gold">★★★★★</p>
                <p className="mt-4 text-[15px] italic leading-relaxed text-stone-soft">
                  “[POR CONFIRMAR] — acá va una reseña real de un huésped de Kuhane.”
                </p>
                <p className="mt-5 text-xs tracking-[0.15em] uppercase text-stone-soft/70">
                  [Nombre del huésped]
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
