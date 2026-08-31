"use client";

import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

export default function RapaNuiSection() {
  const { rapaNui, ui } = useContent();
  return (
    <section id="rapa-nui" className="bg-warm-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5 lg:col-start-1">
          <SectionIntro eyebrow={rapaNui.eyebrow} title={rapaNui.title} />
          <div className="mt-6 space-y-4">
            {rapaNui.body.map((p, i) => (
              <p key={i} className="max-w-md text-[15px] leading-relaxed text-stone-soft">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={120} className="lg:col-span-7">
          <PlaceholderMedia
            label={ui.placeholder.rapaNuiPhoto}
            className="aspect-[4/5] w-full sm:aspect-[16/10]"
          />
        </Reveal>
      </div>
    </section>
  );
}
