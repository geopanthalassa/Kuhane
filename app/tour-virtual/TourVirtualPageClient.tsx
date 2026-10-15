"use client";

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { useContent } from "@/lib/content/LocaleProvider";

// Página del tour virtual 360° de Kuhane — creada el 15/10/2026 a pedido de
// Andre ("quiero que veas esto y me digas como hacemos para incorporarlo" /
// "me gusta tour virtual por kuhane"). Mismo patrón que /tours: página
// standalone con Nav + Footer, pasando por useContent/LocaleProvider para
// que el switch ES/EN también traduzca esta página.
//
// El link viene de la plataforma Tourify y es el mismo que Andre compartió.
// No se pudo verificar desde este lado qué muestra el visor puertas adentro
// (carga con JavaScript), así que si algo no se ve bien hay que revisarlo
// directamente en el panel de Tourify.
export default function TourVirtualPageClient() {
  const { tourVirtual } = useContent();

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-teal-deep pb-16 pt-36 text-warm-white sm:pt-44">
          <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">{tourVirtual.eyebrow}</p>
              <h1 className="mt-3 font-display text-4xl text-warm-white sm:text-5xl">{tourVirtual.title}</h1>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-warm-white/80">
                {tourVirtual.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Visor del tour 360° */}
        <section className="bg-sand py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_-25px_rgba(48,43,38,0.35)]">
                <div className="relative aspect-video w-full bg-stone">
                  <iframe
                    src={tourVirtual.embedUrl}
                    title={tourVirtual.title}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="fullscreen; vr; xr-spatial-tracking; gyroscope; accelerometer"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Volver */}
        <section className="bg-sand pb-24 sm:pb-32">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
            <Reveal>
              <a
                href="/#galeria"
                className="inline-block text-[12px] tracking-[0.18em] uppercase text-teal underline underline-offset-4 hover:text-teal-deep"
              >
                {tourVirtual.volver}
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
