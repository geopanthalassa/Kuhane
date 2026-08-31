"use client";

import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

const placeholderReviews = [1, 2, 3];

export default function ResenasSection() {
  const { resenas, site, TODO_PLACEHOLDER, ui } = useContent();
  const hasReviewCount = site.googleRating.count !== TODO_PLACEHOLDER;
  const hasReviewsUrl = site.googleRating.url !== TODO_PLACEHOLDER;

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
                <span>{site.googleRating.count} {ui.resenas.reviewsSuffix}</span>
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
                {ui.resenas.viewOn.replace("{source}", site.googleRating.source)}
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
                  “{ui.resenas.placeholderQuote}”
                </p>
                <p className="mt-5 text-xs tracking-[0.15em] uppercase text-stone-soft/70">
                  {ui.resenas.placeholderName}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
