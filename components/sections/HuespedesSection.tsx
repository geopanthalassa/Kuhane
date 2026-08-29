"use client";

import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

export default function HuespedesSection() {
  const { huespedes, ui } = useContent();
  return (
    <section id="huespedes" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-xl">
          <SectionIntro eyebrow={huespedes.eyebrow} title={huespedes.title} />
          <p className="mt-5 text-[15px] leading-relaxed text-stone-soft">{huespedes.body}</p>
          <button
            type="button"
            disabled
            className="mt-6 cursor-not-allowed rounded-full border border-teal/40 px-6 py-3 text-[12px] tracking-[0.2em] uppercase text-teal/50"
            title={ui.huespedes.availableSoonTitle}
          >
            {huespedes.cta}
          </button>
        </Reveal>

        <Reveal delayMs={120} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <PlaceholderMedia key={i} label="" className="aspect-square w-full" />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
