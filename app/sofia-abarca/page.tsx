import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import Reveal from "@/components/ui/Reveal";
import {
  sofia,
  sofiaLibros,
  sofiaCoautorias,
  sofiaAreas,
  sofiaMaestros,
  sofiaReconocimientos,
  sofiaCatalogo,
  sofiaAsociatividades,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: sofia.title,
  description: sofia.summary,
};

// Página de detalle de Sofía Abarca (fundadora de Kuhane). Contenido
// completo tomado de la referencia entregada por Kuhane (septiembre 2026).
// Regla del proyecto: NO INVENTAR DATOS — todo lo que aparece acá viene de
// ese documento o de site-content.ts.
export default function SofiaAbarcaPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-teal-deep pb-20 pt-36 text-warm-white sm:pt-44">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={sofia.foto}
                    alt="Sofía Abarca, fundadora de Kuhane"
                    fill
                    sizes="(min-width: 1024px) 35vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">{sofia.eyebrow}</p>
                <h1 className="mt-3 font-display text-4xl text-warm-white sm:text-5xl">{sofia.title}</h1>
                <p className="mt-2 text-base italic text-warm-white/70">{sofia.subtitle}</p>
                <dl className="mt-8 grid max-w-md grid-cols-3 gap-4">
                  {sofia.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="font-display text-2xl text-warm-white">{stat.value}</dt>
                      <dd className="mt-1 text-xs leading-snug text-warm-white/65">{stat.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Trayectoria */}
        <section className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-teal">Trayectoria</p>
              <p className="mt-5 font-display text-xl italic leading-snug text-stone sm:text-2xl">
                &ldquo;Hablar de Sofía es referir a una figura esencial para la salvaguarda de la
                identidad oceánica de Chile.&rdquo;
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-stone">
                Música, recopiladora e investigadora etnomusicológica, gestora cultural y escritora
                de Isla de Pascua, especialista en las expresiones culturales del pueblo rapanui — su
                música y cantos ancestrales, su artesanía y arte escultórico, y su patrimonio
                alimentario.
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-stone">
                Es reconocida como la única recopiladora contemporánea del patrimonio musical de
                Rapa Nui: más de 450 registros de oralidad y canto antiguo entregados a la Biblioteca
                Nacional de Chile en 2015, y 64 producciones discográficas editadas por su sello Nuku
                te Mango Rec., el primero de la isla.
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-stone">
                Su capacidad de gestión ha movilizado a instituciones como la UNESCO, la CEPAL y
                distintos ministerios del Estado de Chile, llevando muestras culturales rapanui a
                giras diplomáticas en América, Europa y Asia.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Áreas de investigación */}
        <section className="bg-warm-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-teal">Desde el año 2000</p>
              <h2 className="mt-3 font-display text-3xl text-stone sm:text-4xl">
                Áreas de investigación cultural
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {sofiaAreas.map((area, i) => (
                <Reveal key={area.titulo} delayMs={i * 60}>
                  <h3 className="font-display text-lg text-teal-deep">{area.titulo}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-stone-soft">{area.descripcion}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Maestros y referentes */}
        <section className="bg-teal-deep py-20 text-warm-white sm:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">Linaje cultural</p>
              <h2 className="mt-3 font-display text-3xl text-warm-white sm:text-4xl">
                Sus maestros y referentes
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {sofiaMaestros.map((maestro, i) => (
                <Reveal key={maestro.nombre} delayMs={i * 60} className="flex gap-5">
                  <PlaceholderMedia tone="teal" label="" className="h-14 w-14 shrink-0 rounded-full" />
                  <div>
                    <h3 className="font-display text-base text-warm-white">{maestro.nombre}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-warm-white/75">
                      {maestro.descripcion}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Libros y recopilaciones */}
        <section className="bg-warm-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-teal">Obra publicada</p>
              <h2 className="mt-3 font-display text-3xl text-stone sm:text-4xl">Libros y recopilaciones</h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
              {sofiaLibros.map((libro, i) => (
                <Reveal key={libro.titulo} delayMs={i * 60} className="flex gap-5">
                  {libro.portada ? (
                    <div className="relative h-40 w-28 shrink-0 overflow-hidden">
                      <Image
                        src={libro.portada}
                        alt={`Portada de ${libro.titulo}`}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <PlaceholderMedia tone="sand" label="Portada" className="h-40 w-28 shrink-0" />
                  )}
                  <div>
                    <h3 className="font-display text-lg text-stone">{libro.titulo}</h3>
                    <p className="mt-1 text-xs text-teal">{libro.anio}</p>
                    <p className="mt-2 text-sm leading-relaxed text-stone-soft">{libro.descripcion}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delayMs={200} className="mt-16 border-t border-stone/10 pt-10">
              <p className="text-xs tracking-[0.25em] uppercase text-teal">También ha participado como co-autora en</p>
              <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 text-[14px] text-stone-soft sm:grid-cols-2">
                {sofiaCoautorias.map((libro) => (
                  <li key={libro.titulo}>
                    <span className="text-stone">{libro.titulo}</span> — {libro.autor} ({libro.anio})
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Sello y estudio */}
        <section className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-teal">{sofiaCatalogo.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl text-stone sm:text-4xl">
                El primer estudio y sello discográfico de la isla
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-stone">{sofiaCatalogo.body}</p>
            </Reveal>
          </div>
        </section>

        {/* Reconocimientos */}
        <section className="bg-warm-white py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-teal">Reconocimientos</p>
              <h2 className="mt-3 font-display text-3xl text-stone sm:text-4xl">Premios y distinciones</h2>
            </Reveal>
            <div className="mt-10 space-y-6">
              {sofiaReconocimientos.map((r, i) => (
                <Reveal key={r.anio} delayMs={i * 50}>
                  <div className="flex flex-col gap-1 border-b border-stone/10 pb-6 sm:flex-row sm:gap-8">
                    <span className="font-display shrink-0 text-lg text-teal sm:w-40">{r.anio}</span>
                    <p className="text-[15px] leading-relaxed text-stone-soft">{r.descripcion}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Asociatividades y respaldos */}
        <section className="bg-teal-deep py-20 text-warm-white sm:py-28">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">Asociatividades y respaldos</p>
              <h2 className="mt-3 font-display text-3xl text-warm-white sm:text-4xl">
                Instituciones que respaldan su trabajo
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-[15px] text-warm-white/80 sm:grid-cols-2">
                {sofiaAsociatividades.map((inst) => (
                  <li key={inst} className="border-b border-warm-white/10 pb-3">
                    {inst}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Volver */}
        <section className="bg-sand pb-24 pt-16 sm:pb-32">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
            <Reveal>
              <a
                href="/#cultura"
                className="inline-block text-[12px] tracking-[0.18em] uppercase text-teal underline underline-offset-4 hover:text-teal-deep"
              >
                ← Volver a Kuhane
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
