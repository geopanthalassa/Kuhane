import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site-content";

// Política de cancelación — creada el 14/10/2026 a pedido de Andre. No
// existía ninguna versión de esto antes, ni en este sitio ni en Nuku OS
// (se revisó todo el código de ambos proyectos antes de escribir esto —
// regla del proyecto: NO INVENTAR DATOS). Los números de esta política
// fueron confirmados directamente por Andre en el chat (14/10/2026):
// seña 50% del total; más de 30 días antes se devuelve completa; entre
// 30 y 8 días se devuelve la mitad de la seña (25% del total); 7 días o
// menos, o no-show, se pierde la seña completa.
export const metadata: Metadata = {
  title: "Política de cancelación",
  description: `Cómo funciona la seña y la devolución si necesitas cancelar o cambiar tu reserva en ${site.name}.`,
};

export default function PoliticaCancelacionPage() {
  return (
    <>
      <Nav />
      <main className="bg-warm-white">
        <section className="bg-teal-deep px-6 pb-16 pt-36 text-warm-white sm:px-10 sm:pt-44">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">Reservas</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">Política de cancelación</h1>
            <p className="mt-4 text-sm text-warm-white/70">
              Última actualización: 14 de octubre de 2026
            </p>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 text-stone-soft">
            <p className="text-base leading-relaxed">
              Para reservar tu estadía en {site.name} te pedimos una seña equivalente al 50% del
              total de tu reserva. El 50% restante se paga directo en el hostal. Esta página
              explica qué pasa con esa seña si necesitas cancelar o cambiar tu fecha.
            </p>

            <div>
              <h2 className="font-display text-2xl text-stone">La seña</h2>
              <p className="mt-3 leading-relaxed">
                Al confirmar tu reserva, se solicita una seña del <strong className="text-stone">50% del total</strong> para
                guardar tu lugar. Esta seña forma parte del pago total de tu estadía, no es un cobro
                adicional.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-stone">Devoluciones según la anticipación</h2>
              <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed">
                <li>
                  <strong className="text-stone">Más de 30 días antes de tu llegada:</strong> se
                  devuelve el 100% de la seña.
                </li>
                <li>
                  <strong className="text-stone">Entre 30 y 8 días antes de tu llegada:</strong> se
                  devuelve el 50% de la seña — es decir, el 25% del total de tu reserva.
                </li>
                <li>
                  <strong className="text-stone">7 días o menos antes de tu llegada, o si no te
                  presentas (no-show):</strong> la seña no se devuelve.
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Estos plazos se cuentan sobre la fecha de llegada (check-in) que figura en tu
                reserva.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-stone">Cambios de fecha</h2>
              <p className="mt-3 leading-relaxed">
                Si necesitas mover tu reserva a otras fechas en vez de cancelarla, escríbenos antes
                de tu llegada — lo revisamos caso a caso, según disponibilidad.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-stone">¿Cómo cancelo o pido la devolución?</h2>
              <p className="mt-3 leading-relaxed">
                Escríbenos por WhatsApp al{" "}
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
                  className="text-teal underline underline-offset-2"
                >
                  {site.whatsapp}
                </a>{" "}
                o por email a{" "}
                <a href={`mailto:${site.email}`} className="text-teal underline underline-offset-2">
                  {site.email}
                </a>
                , indicando tu nombre y las fechas de tu reserva.
              </p>
            </div>

            <p className="text-sm text-stone-soft/70">
              {site.name} — {site.address}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
