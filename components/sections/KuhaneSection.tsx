import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { kuhane } from "@/lib/site-content";

export default function KuhaneSection() {
  return (
    <section id="kuhane" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="order-2 lg:order-1 lg:col-span-6">
          <div className="grid aspect-[4/5] w-full grid-cols-2 grid-rows-2 gap-2 sm:aspect-[4/3]">
            {kuhane.fotos.map((src, i) => (
              <div key={src} className="relative overflow-hidden">
                <Image
                  src={src}
                  alt="Kuhane Etno-Hostal"
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={120} className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
          <SectionIntro eyebrow={kuhane.eyebrow} title={kuhane.title} />
          <div className="mt-6 space-y-4">
            {kuhane.body.map((p, i) => (
              <p key={i} className="max-w-md text-[15px] leading-relaxed text-stone-soft">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
