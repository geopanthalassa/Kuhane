"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useContent } from "@/lib/content/LocaleProvider";

// Misma canción de fondo opcional que usa el Hero — se reutiliza acá para
// que, si hay música, ambos momentos de video del sitio puedan sonar con
// la canción de Sofía. Mientras el archivo no exista, el botón simplemente
// no aparece (mismo comportamiento que en Hero).
const CANCION_SRC = "/audio/sofia-cancion.m4a";

export default function KuhaneEsperaSection() {
  const { kuhaneEspera, ui } = useContent();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [videoAvailable, setVideoAvailable] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(false);
  const [audioOn, setAudioOn] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    fetch(kuhaneEspera.videoSrc, { method: "HEAD" })
      .then((res) => setVideoAvailable(res.ok))
      .catch(() => setVideoAvailable(false));

    fetch(CANCION_SRC, { method: "HEAD" })
      .then((res) => setAudioAvailable(res.ok))
      .catch(() => setAudioAvailable(false));
  }, [kuhaneEspera.videoSrc]);

  const toggleAudio = () => {
    const el = audioRef.current;
    if (!el) return;
    if (audioOn) {
      el.pause();
      setAudioOn(false);
    } else {
      el.play().catch(() => {});
      setAudioOn(true);
    }
  };

  return (
    <section className="relative flex h-[85svh] min-h-[480px] w-full items-center justify-center overflow-hidden bg-teal-deep">
      <Image
        src={kuhaneEspera.posterSrc}
        alt={kuhaneEspera.posterAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />

      {videoAvailable && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={kuhaneEspera.posterSrc}
        >
          <source src={kuhaneEspera.videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-[#08201f]/60 via-teal-deep/30 to-[#08201f]/70" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center sm:px-10">
        <h2 className="font-display text-3xl leading-tight text-warm-white sm:text-4xl md:text-5xl">
          {kuhaneEspera.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-warm-white/85">
          {kuhaneEspera.body}
        </p>
      </div>

      {audioAvailable && (
        <>
          <audio ref={audioRef} src={CANCION_SRC} loop preload="none" />
          <button
            type="button"
            onClick={toggleAudio}
            aria-label={audioOn ? ui.silenciar : ui.activarSonido}
            className="absolute bottom-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-warm-white/40 bg-stone/30 text-warm-white backdrop-blur-sm transition-colors hover:bg-stone/50"
          >
            {audioOn ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
                <path
                  d="M16 9c1 1 1 5 0 6M18.5 7c2 2 2 8 0 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
                <path
                  d="M16.5 8.5 21 15M21 8.5l-4.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </>
      )}
    </section>
  );
}
