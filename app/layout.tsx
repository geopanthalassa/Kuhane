import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site-content";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.location}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Kuhane Etno-Hostal: un lugar para sentirte en casa en Rapa Nui. Llega como viajero, siéntete parte de la isla.",
  openGraph: {
    title: `${site.name} — ${site.location}`,
    description:
      "Un lugar para sentirte en casa en Rapa Nui. Llega como viajero, siéntete parte de la isla.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <LocaleProvider>
          {children}
          <WhatsAppButton />
        </LocaleProvider>
      </body>
    </html>
  );
}
