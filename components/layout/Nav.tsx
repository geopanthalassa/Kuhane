"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site-content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-warm-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(36,31,26,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="relative block h-9 w-[150px] shrink-0">
          <Image
            src="/logo/kuhane-wordmark.png"
            alt="Kuhane Etno-Hostal"
            fill
            className={`object-contain object-left transition-[filter] duration-500 ${
              solid ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] tracking-[0.12em] uppercase transition-colors ${
                solid ? "text-stone hover:text-teal" : "text-warm-white/90 hover:text-warm-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#reserva"
            className={`rounded-full border px-5 py-2 text-[12px] tracking-[0.18em] uppercase transition-colors ${
              solid
                ? "border-teal text-teal hover:bg-teal hover:text-warm-white"
                : "border-warm-white/70 text-warm-white hover:bg-warm-white hover:text-teal-deep"
            }`}
          >
            Reservar
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden`}
        >
          <span className={`h-px w-6 transition-colors ${solid ? "bg-stone" : "bg-warm-white"}`} />
          <span className={`h-px w-6 transition-colors ${solid ? "bg-stone" : "bg-warm-white"}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-stone/10 bg-warm-white px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.12em] uppercase text-stone"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#reserva"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit rounded-full border border-teal px-5 py-2 text-[12px] tracking-[0.18em] uppercase text-teal"
            >
              Reservar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
