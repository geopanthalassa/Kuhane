"use client";

import { useEffect, useState } from "react";

/**
 * 25/9/2026: pedido de Andre — va a recibir fotos nuevas del hostal y no
 * quiere que cualquiera las baje y las use como si fueran propias. Esto
 * es la mitad "en el navegador" de la protección (la otra mitad es la
 * marca de agua metida en el archivo de la foto en sí, ver
 * scripts/watermark-photos.mjs — esa es la protección real; esto de acá
 * es solo un freno para el visitante casual).
 *
 * Honestidad con Andre: NINGÚN sitio web puede bloquear de verdad que
 * alguien baje una imagen — el navegador ya la tiene descargada para
 * poder mostrarla, así que con las herramientas de desarrollador (F12) o
 * viendo el código fuente, siempre se puede sacar igual. Lo que sí se
 * puede hacer es sacarle el clic derecho "Guardar imagen como" y el
 * arrastrar-y-soltar, que es como el 95% de la gente intentaría bajarla.
 * En vez de dejar que aparezca el menú normal del navegador, mostramos un
 * aviso propio de que la foto está protegida.
 */
export default function ImageProtection() {
  const [toast, setToast] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const isProtectedImage = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      return el.closest("img") !== null;
    };

    const onContextMenu = (e: MouseEvent) => {
      if (!isProtectedImage(e.target)) return;
      e.preventDefault();
      setToast({ x: e.clientX, y: e.clientY });
      window.setTimeout(() => setToast(null), 2200);
    };

    const onDragStart = (e: DragEvent) => {
      if (!isProtectedImage(e.target)) return;
      e.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  if (!toast) return null;

  return (
    <div
      role="status"
      className="pointer-events-none fixed z-[80] -translate-x-1/2 -translate-y-full rounded-full bg-stone/90 px-3 py-1.5 text-[12px] text-warm-white shadow-lg"
      style={{ left: toast.x, top: toast.y - 10 }}
    >
      Imagen protegida © Kuhane Etno Hostal
    </div>
  );
}
