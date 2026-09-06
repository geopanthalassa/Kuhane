"use client";

import { useEffect, useRef, useState } from "react";
import DateRangeCalendar from "@/components/ui/DateRangeCalendar";
import { useContent } from "@/lib/content/LocaleProvider";

// Panel de disponibilidad minimalista, estilo barra ("Check Availability")
// en vez de una tarjeta grande. Al confirmar abre el sistema de reservas de
// Kuhane (Nuku OS) en una pestaña nueva con esos datos como parámetros.
// Nuku OS está en fase de pruebas (sin cobro automático todavía).
export default function ReservaPanel() {
  const { reserva, ui } = useContent();
  const monthsShort = ui.reserva.monthsShort;

  function formatShort(key: string) {
    if (!key) return "";
    const [, m, d] = key.split("-").map(Number);
    return `${d} ${monthsShort[m - 1]}`;
  }

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(2);
  const [openPanel, setOpenPanel] = useState<"dates" | "guests" | null>(null);
  const [showPromo, setShowPromo] = useState(false);
  const [promo, setPromo] = useState("");

  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function handleSubmit() {
    const params = new URLSearchParams();
    if (checkin) params.set("checkin", checkin);
    if (checkout) params.set("checkout", checkout);
    params.set("guests", String(guests));
    if (promo.trim()) params.set("promo", promo.trim().toUpperCase());
    window.open(`${reserva.nukuOsUrl}?${params.toString()}`, "_blank", "noopener,noreferrer");
  }

  const datesLabel =
    checkin && checkout
      ? `${formatShort(checkin)} — ${formatShort(checkout)}`
      : checkin
      ? `${formatShort(checkin)} — ${ui.reserva.departure}`
      : ui.reserva.arrivalDeparture;

  return (
    <div ref={wrapRef} className="w-full max-w-xl">
      <p className="mb-2 text-center text-[11px] tracking-[0.25em] uppercase text-warm-white/80">
        {reserva.eyebrow}
      </p>

      <div className="relative flex items-stretch overflow-visible rounded-full bg-warm-white/95 p-1.5 shadow-[0_15px_45px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm">
        <button
          type="button"
          onClick={() => setOpenPanel((p) => (p === "dates" ? null : "dates"))}
          className="flex-1 rounded-full px-4 py-2.5 text-left text-[13px] text-stone transition-colors hover:bg-sand/60"
        >
          <span className="block text-[10px] tracking-[0.1em] uppercase text-stone-soft/70">
            {ui.reserva.dates}
          </span>
          {datesLabel}
        </button>

        <span className="my-1.5 w-px shrink-0 bg-wood/15" />

        <button
          type="button"
          onClick={() => setOpenPanel((p) => (p === "guests" ? null : "guests"))}
          className="w-32 shrink-0 rounded-full px-4 py-2.5 text-left text-[13px] text-stone transition-colors hover:bg-sand/60"
        >
          <span className="block text-[10px] tracking-[0.1em] uppercase text-stone-soft/70">
            {ui.reserva.guests}
          </span>
          {guests} {guests === 1 ? ui.reserva.guestSingular : ui.reserva.guestPlural}
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          aria-label={ui.reserva.checkAvailabilityAria}
          className="ml-1 flex shrink-0 items-center justify-center rounded-full bg-teal-deep px-5 text-warm-white transition-colors hover:bg-teal"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
        </button>

        {openPanel === "dates" && (
          <div className="absolute left-0 top-[calc(100%+10px)] z-20 rounded-lg border border-wood/10 bg-warm-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)]">
            <DateRangeCalendar
              checkin={checkin}
              checkout={checkout}
              onChange={(next) => {
                setCheckin(next.checkin);
                setCheckout(next.checkout);
                if (next.checkin && next.checkout) setOpenPanel(null);
              }}
            />
          </div>
        )}

        {openPanel === "guests" && (
          <div className="absolute right-0 top-[calc(100%+10px)] z-20 w-48 rounded-lg border border-wood/10 bg-warm-white p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)]">
            <span className="block text-[10px] tracking-[0.1em] uppercase text-stone-soft/70">
              {ui.reserva.guests}
            </span>
            <div className="mt-2 flex items-center justify-between">
              <button
                type="button"
                aria-label={ui.reserva.fewerGuestsAria}
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-wood/20 text-teal hover:bg-sand"
              >
                −
              </button>
              <span className="text-sm text-stone">{guests}</span>
              <button
                type="button"
                aria-label={ui.reserva.moreGuestsAria}
                onClick={() => setGuests((g) => Math.min(10, g + 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-wood/20 text-teal hover:bg-sand"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mx-auto mt-4 max-w-sm text-center text-[12px] leading-relaxed text-warm-white/70">
        {reserva.helper}
      </p>

      <div className="mt-2 flex flex-col items-center">
        {!showPromo ? (
          <button
            type="button"
            onClick={() => setShowPromo(true)}
            className="text-[11px] tracking-[0.05em] text-warm-white/60 underline underline-offset-4 hover:text-warm-white/90"
          >
            {ui.reserva.promoQuestion}
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              placeholder={ui.reserva.promoPlaceholder}
              autoFocus
              className="w-40 rounded-full border border-warm-white/30 bg-transparent px-3 py-1 text-center text-[12px] uppercase tracking-[0.1em] text-warm-white placeholder:text-warm-white/50 outline-none focus:border-warm-white/70"
            />
          </div>
        )}
      </div>
    </div>
  );
}
