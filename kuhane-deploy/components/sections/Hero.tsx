"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/lib/site-content";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoAvailable, setVideoAvailable] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Only show the video once we confirm the real file actually exists —
    // until then the gradient/poster fallback below carries the hero.
    fetch(hero.videoSrc, { method: "HEAD" })
      .then((res) => setVideoAvailable(res.ok))
      .catch(() => setVideoAvailable(false));
  }, []);

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-teal-deep"
    >
      {/* Fallback backdrop: gradient standing in for hero-fallback.jpg until real media arrives */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-deep via-teal-deep/95 to-[#08201f]" />

      {videoAvailable && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={hero.posterSrc}
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Subtle dark overlay for text legibility over the video */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:px-10 sm:pb-24">
        <p className="text-sm tracking-[0.4em] text-warm-white/80">{hero.eyebrow}</p>
        <p className="font-display mt-1 text-lg italic text-gold-soft">{hero.place}</p>
        <h1 className="font-display mt-6 max-w-xl text-3xl leading-[1.2] text-warm-white sm:text-4xl md:text-5xl">
          {hero.line1}
          <br />
          {hero.line2}
        </h1>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#reserva"
            className="rounded-full bg-warm-white px-7 py-3 text-[12px] tracking-[0.2em] text-teal-deep transition-colors hover:bg-gold-soft"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#kuhane"
            className="text-[12px] tracking-[0.2em] text-warm-white/90 underline underline-offset-4 hover:text-warm-white"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <div className="h-9 w-[1px] animate-pulse bg-warm-white/50" />
      </div>
    </section>
  );
}
