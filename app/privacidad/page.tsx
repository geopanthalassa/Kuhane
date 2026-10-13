import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site-content";

// Política de privacidad — creada el 13/10/2026 porque Meta exige una URL
// de política de privacidad real para poder configurar la app de WhatsApp
// Business Platform conectada a Nuku OS (ver conversación con soporte de
// Meta sobre registro del número +56 9 9504 5737). No existía ninguna
// página de privacidad en el sitio antes de esta — se verificó revisando
// todo app/ y no había ninguna ruta parecida.
//
// Contenido: describe lo que el sitio y el flujo de reservas/WhatsApp
// REALMENTE hacen hoy, no una plantilla genérica — no hay Google Analytics
// ni píxeles de publicidad en el sitio (se revisó el código, no se
// encontró ninguno), así que no se menciona nada de eso. Regla del
// proyecto: NO INVENTAR DATOS.
//
// Esto NO reemplaza una revisión legal. Es un punto de partida razonable,
// no asesoría legal — recomendable que alguien con conocimiento del rubro
// en Chile lo revise antes de darlo por definitivo.
export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo ${site.name} recopila, usa y protege los datos de quienes reservan o escriben por WhatsApp, email o el sitio web.`,
};

export default function PrivacidadPage() {
  return (
    <>
      <Nav />
      <main className="bg-warm-white">
        <section className="bg-teal-deep px-6 pb-16 pt-36 text-warm-white sm:px-10 sm:pt-44">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs tracking-[0.25em] uppercase text-gold-soft">Legal</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">Política de privacidad</h1>
            <p className="mt-4 text-sm text-warm-white/70">
              Última actualización: 13 de octubre de 2026
            </p>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 text-stone-soft">
            <p className="text-base leading-relaxed">
              {site.name} ("Kuhane", "nosotros") respeta la privacidad de quienes nos visitan,
              reservan una estadía o nos escriben. Esta política explica qué información
              recopilamos, para qué la usamos y qué opciones tienes sobre ella.
            </p>

            <div>
              <h2 className="font-display text-2xl text-stone">Qué información recopilamos</h2>
              <p className="mt-3 leading-relaxed">
                Recopilamos información que tú nos entregas directamente, en estos momentos:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>
                  <strong className="text-stone">Al reservar:</strong> nombre completo, email,
                  teléfono, nacionalidad, fecha de nacimiento y número de documento (RUT o
                  pasaporte) de cada persona incluida en la reserva — este último dato es exigido
                  por la normativa de ingreso a Rapa Nui, no una decisión nuestra. También, si tú
                  lo indicas de forma voluntaria, preferencias alimentarias o necesidades de
                  movilidad, para poder atenderte mejor durante tu estadía.
                </li>
                <li>
                  <strong className="text-stone">Al escribirnos:</strong> el contenido de tus
                  mensajes y tu número de teléfono o email, cuando nos contactas por WhatsApp,
                  email o un formulario de este sitio.
                </li>
              </ul>
              <p className="mt-3 leading-relaxed">
                No usamos cookies de publicidad ni herramientas de seguimiento de terceros en este
                sitio. Guardamos tu idioma preferido (español o inglés) únicamente en tu propio
                navegador, para recordarlo en tu próxima visita.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-stone">Para qué usamos tu información</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>Gestionar tu reserva, tu estadía y el cobro correspondiente.</li>
                <li>
                  Responder tus consultas, incluyendo respuestas automáticas de nuestro asistente
                  de conserjería cuando escribes por WhatsApp — siempre puedes pedir hablar con una
                  persona del equipo.
                </li>
                <li>Cumplir con la normativa de registro de huéspedes aplicable en Isla de Pascua.</li>
                <li>Enviarte confirmaciones, recordatorios o información relacionada con tu reserva.</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                No vendemos ni arrendamos tu información a terceros, y no la usamos para publicidad.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-stone">Con quién la compartimos</h2>
              <p className="mt-3 leading-relaxed">
                Compartimos información solo con los proveedores que necesitamos para operar:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                <li>
                  <strong className="text-stone">Meta / WhatsApp Business Platform</strong>, para
                  enviar y recibir los mensajes de WhatsApp.
                </li>
                <li>
                  <strong className="text-stone">Nuestro proveedor de base de datos y hosting</strong>,
                  donde se almacena la información de reservas y conversaciones de forma segura.
                </li>
                <li>
                  <strong className="text-stone">Nuestro procesador de pagos</strong>, al momento de
                  cobrar una reserva.
                </li>
              </ul>
              <p className="mt-3 leading-relaxed">
                Cada uno de estos proveedores procesa la información únicamente para prestarnos su
                servicio, no para fines propios.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-stone">
                Cuánto tiempo guardamos tu información
              </h2>
              <p className="mt-3 leading-relaxed">
                Guardamos los datos de reservas y huéspedes mientras sea necesario para fines
                operativos, contables y legales (incluyendo el registro de huéspedes exigido en
                Isla de Pascua). El historial de conversaciones se conserva para poder darte
                seguimiento si vuelves a escribirnos.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-stone">Tus derechos</h2>
              <p className="mt-3 leading-relaxed">
                Puedes pedirnos en cualquier momento acceder, corregir o eliminar la información
                que tenemos sobre ti, escribiéndonos a{" "}
                <a href={`mailto:${site.email}`} className="text-teal underline underline-offset-2">
                  {site.email}
                </a>
                . Responderemos tu solicitud dentro de un plazo razonable. Ten en cuenta que, si la
                reserva ya se realizó, es posible que debamos conservar cierta información por
                obligaciones legales o contables aunque pidas su eliminación.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-stone">Contacto</h2>
              <p className="mt-3 leading-relaxed">
                Si tienes preguntas sobre esta política o sobre tus datos, escríbenos a{" "}
                <a href={`mailto:${site.email}`} className="text-teal underline underline-offset-2">
                  {site.email}
                </a>{" "}
                o por WhatsApp al número publicado en este sitio.
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
