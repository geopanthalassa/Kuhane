"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Simple, dependency-free photo carousel for a set of local images.
 * Used on room cards (2-4 photos each) — arrows + dot indicators, no
 * autoplay. Falls back gracefully with a single static image when there's
 * only one photo.
 */
export default function PhotoCarousel({
  photos,
  alt,
  className = "",
  onImageClick,
}: {
  photos: string[];
  alt: string;
  className?: string;
  onImageClick?: (index: number) => void;
}) {
  const [index, setIndex] = useState(0);

  if (photos.length === 0) return null;

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + photos.length) % photos.length);

  return (
    <div className={`group relative overflow-hidden bg-stone/5 ${className}`}>
      <button
        type="button"
        onClick={() => onImageClick?.(index)}
        className="absolute inset-0 h-full w-full cursor-zoom-in"
        aria-label={`Ampliar foto de ${alt}`}
      >
        <Image
          src={photos[index]}
          alt={`${alt} — foto ${index + 1} de ${photos.length}`}
          fill
          sizes="(min-width: 768px) 45vw, 90vw"
          className="object-cover transition-opacity duration-300"
        />
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-stone/50 text-warm-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-stone/50 text-warm-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100"
          >
            ›
          </button>
          <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {photos.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-warm-white" : "bg-warm-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
