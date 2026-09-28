"use client";

import Image from "next/image";
import { useContent } from "@/lib/content/LocaleProvider";

export default function Footer() {
  const { footer, nav, site, ui } = useContent();

  return (
    <footer className="bg-teal-deep px-6 pb-10 pt-16 text-warm-white sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 border-b border-warm-white/10 pb-12 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <div className="relative h-16 w-40">
            <Image
              src="/logo/kuhane-lockup-full.png"
              alt="Kuhane Etno-Hostal"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-warm-white/70">
            {footer.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-gold-soft">
              {ui.exploreLabel}
            </p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-warm-white/80 hover:text-warm-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-gold-soft">
              {ui.contactLabel}
            </p>
            <ul className="space-y-2 text-sm text-warm-white/80">
              <li>{site.address}</li>
              <li>WhatsApp: {site.whatsapp}</li>
              <li>Email: {site.email}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 24/9/2026: sm:pr-24 — el nuevo link "Desarrollado por Nuku
          Marketing" quedaba parcialmente tapado por el botón flotante de
          WhatsApp (fixed bottom-7 right-7, 56px) en pantallas de escritorio,
          porque es el elemento más a la derecha de esta fila. Se le da
          espacio de sobra al botón en vez de mover el botón. */}
      <div className="mx-auto mt-6 flex max-w-7xl flex-col-reverse gap-3 text-xs text-warm-white/50 sm:flex-row sm:items-center sm:justify-between sm:pr-24">
        <p>© {new Date().getFullYear()} Kuhane Etno-Hostal. Rapa Nui, Chile.</p>
        <div className="flex items-center gap-5">
          {/* Certificado SERNATUR (registro N.º 110415) — enviado por
              Andre (7/9/2026), "por si alguien quiere leerlo". Discreto,
              al pie de página, no es el foco de la sección.
              28/9/2026: Andre pidió que el sello oficial (el círculo
              "Servicio Turístico Registrado") esté también como imagen,
              no solo el link de texto al PDF. Se agrega chico al lado,
              mismo destino (el PDF del certificado), mismo tono discreto. */}
          <a
            href="/documents/certificado-sernatur.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-warm-white/80"
          >
            <Image
              src="/logo/sernatur-sello.png"
              alt="Servicio Turístico Registrado — SERNATUR"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0"
            />
            <span className="underline underline-offset-2">{ui.sernaturCertLabel}</span>
          </a>
          <p className="tracking-[0.15em] uppercase">{ui.almaLabel}</p>
          {/* 24/9/2026: crédito "Desarrollado por Nuku Marketing" — pedido
              explícito de Andre, con link a https://www.nukumarketing.com/
              (URL que él mismo dio, no inventada). Mismo estilo discreto
              (underline) que el link del certificado SERNATUR, así no
              compite visualmente con el resto del footer. */}
          <a
            href="https://www.nukumarketing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-warm-white/80"
          >
            {ui.developedByLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
