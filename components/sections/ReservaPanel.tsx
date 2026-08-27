"use client";

import { useState } from "react";
import { reserva } from "@/lib/site-content";

// Panel de disponibilidad estilo "Check Availability": fechas + huéspedes,
// abre el sistema de reservas de Kuhane (Nuku OS) en una pestaña nueva con
// esos datos como parámetros. Nuku OS está en fase de pruebas (sin cobro
// automático todavía), así que no hacemos ninguna promesa de pago aquí.
export default function ReservaPanel() {
  const today = new Date().toISOString().slice(0, 10);

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(2);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkin) params.set("checkin", checkin);
    if (checkout) params.set("checkout", checkout);
    params.set("guests", String(guests));
    window.open(`${reserva.nukuOsUrl}?${params.toString()}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="w-full max-w-3xl rounded-sm bg-warm-white/95 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-8">
      <p className="text-xs tracking-[0.25em] uppercase text-teal">{reserva.eyebrow}</p>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end">
        <label className="flex-1">
          <span className="mb-1.5 block text-[11px] tracking-[0.15em] uppercase text-stone-soft">
            Llegada
          </span>
          <input
            type="date"
            required
            min={today}
            value={checkin}
            onChange={(e) => {
              setCheckin(e.target.value);
              if (checkout && e.target.value >= checkout) setCheckout("");
            }}
            className="w-full rounded-sm border border-wood/25 bg-warm-white px-3 py-2.5 text-sm text-stone outline-none transition-colors focus:border-teal"
          />
        </label>

        <label className="flex-1">
          <span className="mb-1.5 block text-[11px] tracking-[0.15em] uppercase text-stone-soft">
            Salida
          </span>
          <input
            type="date"
            required
            min={checkin || today}
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="w-full rounded-sm border border-wood/25 bg-warm-white px-3 py-2.5 text-sm text-stone outline-none transition-colors focus:border-teal disabled:opacity-50"
            disabled={!checkin}
          />
        </label>

        <label className="sm:w-40">
          <span className="mb-1.5 block text-[11px] tracking-[0.15em] uppercase text-stone-soft">
            Huéspedes
          </span>
          <div className="flex items-center justify-between rounded-sm border border-wood/25 px-3 py-2">
            <button
              type="button"
              aria-label="Menos huéspedes"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="flex h-6 w-6 items-center justify-center text-lg text-teal hover:text-teal-deep"
            >
              −
            </button>
            <span className="text-sm text-stone">{guests}</span>
            <button
              type="button"
              aria-label="Más huéspedes"
              onClick={() => setGuests((g) => Math.min(10, g + 1))}
              className="flex h-6 w-6 items-center justify-center text-lg text-teal hover:text-teal-deep"
            >
              +
            </button>
          </div>
        </label>

        <button
          type="submit"
          className="rounded-full bg-teal-deep px-8 py-3 text-[12px] tracking-[0.2em] text-warm-white transition-colors hover:bg-teal sm:shrink-0"
        >
          VER DISPONIBILIDAD
        </button>
      </form>

      <p className="mt-4 text-xs leading-relaxed text-stone-soft/80">{reserva.helper}</p>
    </div>
  );
}
