import type { Metadata } from "next";
import "./globals.css";
import { site, ubicacionGeo } from "@/lib/site-content";
import { LocaleProvider } from "@/lib/content/LocaleProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

// NOTA: este entorno de desarrollo no tiene salida a internet hacia
// fonts.googleapis.com, así que por ahora la tipografía se resuelve con
// fuentes del sistema (ver app/globals.css). Para activar las fuentes de
// marca (Fraunces + Inter vía next/font/google) en tu máquina o en Vercel
// —donde sí hay internet— solo hay que:
//   1) descomentar el import de next/font/google acá abajo
//   2) volver a pasar fraunces.variable / inter.variable al <body>
// TODO: activar next/font/google (Fraunces + Inter) en un entorno con internet.
// import { Fraunces, Inter } from "next/font/google";
// const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["normal", "italic"], weight: ["400", "500", "600"], display: "swap" });
// const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

// 24/9/2026: SEO — pedido de Andre ("necesitamos hacer seo urgente como
// hostal, ecolodge o lo que sea cuando la gente busque"). Confirmó
// explícitamente que se describan como "hostal, etno-hostal y ecolodge",
// y se suma "Isla de Pascua" junto a "Rapa Nui" en el título/descripción
// porque mucha gente busca por ese nombre (más conocido internacionalmente
// que "Rapa Nui" para quienes no son chilenos). No es una sección nueva ni
// un texto visible distinto al que ya existe en la página — solo el title/
// description que ve Google y las redes sociales al compartir el link.
const seoTitle = `${site.name} — Hostal Ecolodge en Rapa Nui, Isla de Pascua`;
const seoDescription =
  "Kuhane Etno-Hostal: hostal boutique tipo ecolodge en Hanga Roa, Rapa Nui (Isla de Pascua), Chile. Un lugar para sentirte en casa — llega como viajero, siéntete parte de la isla.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seoTitle,
    template: `%s — ${site.name}`,
  },
  description: seoDescription,
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: site.url,
    siteName: site.name,
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Datos estructurados (JSON-LD, schema.org/Hostel) — para que Google
// entienda que kuhanehostal.com es un alojamiento real, con su dirección,
// coordenadas y perfiles en Booking/Tripadvisor, no solo texto suelto.
// Todos los datos acá son los mismos ya confirmados en lib/site-content.ts
// (dirección, coordenadas, teléfono, correo) — nada inventado. Ojo: a
// propósito NO se incluye "aggregateRating" (el puntaje 9,4/4,7 que se
// muestra en la sección de Reseñas) — Google prohíbe explícitamente marcar
// reseñas/puntajes de tu PROPIO negocio con datos estructurados en tu
// propio sitio ("self-serving reviews"); ese puntaje solo puede salir como
// estrellitas en el buscador si viene de un agregador externo (Google
// Business Profile, Booking, Tripadvisor), no del sitio propio.
const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hostel",
  name: site.name,
  description: seoDescription,
  url: site.url,
  telephone: site.whatsapp,
  email: site.email,
  image: `${site.url}/images/hero/hero-fallback.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kahu Mahau s/n",
    addressLocality: "Hanga Roa",
    addressRegion: "Isla de Pascua",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: ubicacionGeo.lat,
    longitude: ubicacionGeo.lng,
  },
  // Perfiles reales encontrados vía búsqueda web (24/9/2026), no inventados.
  sameAs: [
    "https://www.booking.com/hotel/cl/kuhane-etno-hostal.en-gb.html",
    "https://www.tripadvisor.com/Hotel_Review-g1049073-d32904935-Reviews-Kuhane_Etno_hostal-Hanga_Roa_Easter_Island.html",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {/* El <script> de JSON-LD puede ir en cualquier parte del HTML —
            no se renderiza visualmente, los buscadores lo leen igual esté
            en el <head> o el <body>. Ver definición de lodgingJsonLd más
            arriba. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
        {/* LocaleProvider envuelve todo el árbol para que cualquier
            componente pueda usar useContent() y cambiar entre ES/EN — ver
            lib/content/LocaleProvider.tsx. El <html lang="es"> de arriba es
            el idioma por defecto en el primer render server-side; una vez en
            el cliente, LocaleProvider actualiza document.documentElement.lang
            según el idioma elegido (o recordado en localStorage). */}
        <LocaleProvider>
          {children}
          <WhatsAppButton />
        </LocaleProvider>
      </body>
    </html>
  );
}
