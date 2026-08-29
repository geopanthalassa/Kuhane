"use client";

import Image from "next/image";
import { useContent } from "@/lib/content/LocaleProvider";

export default function Footer() {
  const { footer, nav, site, ui } = useContent();
  const year = new Date().getFullYear();
  const copyright = ui.footer.copyright.replace("{year}", String(year));

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
              {ui.footer.explore}
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
              {ui.footer.contact}
            </p>
            <ul className="space-y-2 text-sm text-warm-white/80">
              <li>{site.location}</li>
              <li>{ui.footer.whatsappLabel} {site.whatsapp}</li>
              <li>{ui.footer.emailLabel} {site.email}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl flex-col-reverse gap-3 text-xs text-warm-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>{copyright}</p>
        <p className="tracking-[0.15em] uppercase">{ui.footer.soulTagline}</p>
      </div>
    </footer>
  );
}
