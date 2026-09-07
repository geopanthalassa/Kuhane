"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import DateRangeCalendar from "@/components/ui/DateRangeCalendar";
import { useContent } from "@/lib/content/LocaleProvider";
import { buildFlightSearchLink } from "@/lib/travel-flights";

// Panel de disponibilidad minimalista, estilo barra ("Check Availability")
// en vez de una tarjeta grande. Al confirmar abre el sistema de reservas de
// Kuhane (Nuku OS) en una pestaña nueva con esos datos como parámetros.
// Nuku OS está en fase de pruebas (sin cobro automático todavía).
// Recuperado y adaptado de kuhane-web-vuelos/kuhane-final (sin la capa de
// i18n de esa versión, porque este sitio no es bilingüe).
export default function ReservaPanel() {
  const { reserva, ui } = useContent();
  const monthsShort = reserva.monthsShort;

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
  const [promoStatus, setPromoStatus] = useState<"idle" | "checking" | "valid" | "invalid">("idle");
  const [datesError, setDatesError] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);

  // Valida el código contra Nuku OS a medida que la persona escribe (debounce
  // de 500ms) — pedido de Andre (7/9/2026): "al momento de ponerlos en
  // kuhane se ve si son validos o no". No aplica el descuento acá, solo
  // confirma que existe y está activo; el descuento se aplica a mano al
  // cobrar (ver STRIPE.md del lado de Nuku OS).
  useEffect(() => {
    const trimmed = promo.trim();
    if (!trimmed) {
      setPromoStatus("idle");
      return;
    }
    setPromoStatus("checking");
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        const origin = new URL(reserva.nukuOsUrl).origin;
        const params = new URLSearchParams({ code: trimmed, account_id: reserva.nukuOsAccountId });
        const res = await fetch(`${origin}/api/public/promo?${params.toString()}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        setPromoStatus(data.valid ? "valid" : "invalid");
      } catch {
        if (!controller.signal.aborted) setPromoStatus("idle");
      }
    }, 500);
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [promo]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // No debe dejar avanzar sin fechas — pedido de Andre (7/9/2026): "no
  // debería dejarme avanzar si no lleno los campos de fechas y cantidad de
  // personas". Si faltan, abre el panel de fechas en vez de ir a Nuku OS.
  function handleSubmit() {
    if (!checkin || !checkout) {
      setDatesError(true);
      setOpenPanel("dates");
      return;
    }
    setDatesError(false);
    const params = new URLSearchParams();
    params.set("checkin", checkin);
    params.set("checkout", checkout);
    params.set("guests", String(guests));
    if (promo.trim()) params.set("promo", promo.trim().toUpperCase());
    window.open(`${reserva.nukuOsUrl}?${params.toString()}`, "_blank", "noopener,noreferrer");
  }

  const datesLabel =
    checkin && checkout
      ? `${formatShort(checkin)} — ${formatShort(checkout)}`
      : checkin
      ? `${formatShort(checkin)} — ${reserva.departure}`
      : reserva.arrivalDeparture;

  // Mismo checkin/checkout/guests que ya carga esta barra — así el link de
  // vuelos siempre refleja lo último que la persona eligió acá, sin pedirle
  // los datos de nuevo. Si todavía no eligió fechas, usa una ventana de
  // referencia (ver lib/travel-flights.ts).
  const flightSearchUrl = useMemo(
    () =>
      buildFlightSearchLink({
        departDate: checkin || undefined,
        returnDate: checkout || undefined,
        adults: guests,
      }),
    [checkin, checkout, guests]
  );

  return (
    <div ref={wrapRef} className="w-full max-w-xl">
      <p className="mb-2 text-center text-[11px] tracking-[0.25em] uppercase text-warm-white/80">
        {reserva.eyebrow}
      </p>

      <div
        className={`relative flex items-stretch overflow-visible rounded-full bg-warm-white/95 p-1.5 shadow-[0_15px_45px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm ${
          datesError ? "ring-2 ring-rose-400" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => setOpenPanel((p) => (p === "dates" ? null : "dates"))}
          className="flex-1 rounded-full px-4 py-2.5 text-left text-[13px] text-stone transition-colors hover:bg-sand/60"
        >
          <span className="block text-[10px] tracking-[0.1em] uppercase text-stone-soft/70">
            {reserva.dates}
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
            {reserva.guests}
          </span>
          {guests} {guests === 1 ? reserva.guestSingular : reserva.guestPlural}
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          aria-label={reserva.checkAvailabilityAria}
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
                if (next.checkin && next.checkout) {
                  setDatesError(false);
                  setOpenPanel(null);
                }
              }}
            />
          </div>
        )}

        {openPanel === "guests" && (
          <div className="absolute right-0 top-[calc(100%+10px)] z-20 w-48 rounded-lg border border-wood/10 bg-warm-white p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)]">
            <span className="block text-[10px] tracking-[0.1em] uppercase text-stone-soft/70">
              {reserva.guests}
            </span>
            <div className="mt-2 flex items-center justify-between">
              <button
                type="button"
                aria-label={reserva.fewerGuestsAria}
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-wood/20 text-teal hover:bg-sand"
              >
                −
              </button>
              <span className="text-sm text-stone">{guests}</span>
              <button
                type="button"
                aria-label={reserva.moreGuestsAria}
                onClick={() => setGuests((g) => Math.min(10, g + 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-wood/20 text-teal hover:bg-sand"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>

      {datesError ? (
        <p className="mx-auto mt-4 max-w-sm text-center text-[12px] leading-relaxed text-rose-300">
          {ui.elegirFechasError}
        </p>
      ) : (
        <p className="mx-auto mt-4 max-w-sm text-center text-[12px] leading-relaxed text-warm-white/70">
          {reserva.helper}
        </p>
      )}

      <div className="mt-6 flex flex-col items-center">
        <a
          href={flightSearchUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group inline-flex items-center gap-2.5 rounded-full bg-gold-soft px-6 py-3 text-[13px] font-semibold tracking-[0.03em] text-teal-deep shadow-[0_10px_30px_-8px_rgba(221,201,163,0.6)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_14px_36px_-8px_rgba(221,201,163,0.75)]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="h-4 w-4 -rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path d="M2 16l20-7-7 20-3-8-8-3z" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          {reserva.flightsCta}
        </a>
        <p className="mt-2 max-w-xs text-center text-[11px] leading-relaxed text-warm-white/55">
          {reserva.flightsHelper}
        </p>
      </div>

      <div className="mt-2 flex flex-col items-center">
        {!showPromo ? (
          <button
            type="button"
            onClick={() => setShowPromo(true)}
            className="text-[11px] tracking-[0.05em] text-warm-white/60 underline underline-offset-4 hover:text-warm-white/90"
          >
            {reserva.promoQuestion}
          </button>
        ) : (
          <div className="flex flex-col items-center gap-1.5">
            <div className="relative">
              <input
                type="text"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder={reserva.promoPlaceholder}
                autoFocus
                className={`w-44 rounded-full border bg-transparent px-3 py-1 pr-8 text-center text-[12px] uppercase tracking-[0.1em] text-warm-white placeholder:text-warm-white/50 outline-none transition-colors ${
                  promoStatus === "valid"
                    ? "border-emerald-300/70 focus:border-emerald-300"
                    : promoStatus === "invalid"
                    ? "border-rose-300/70 focus:border-rose-300"
                    : "border-warm-white/30 focus:border-warm-white/70"
                }`}
              />
              {promoStatus === "checking" && (
                <span className="pointer-events-none absolute right-2.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-pulse rounded-full bg-warm-white/50" />
              )}
              {promoStatus === "valid" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-emerald-300"
                >
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {promoStatus === "invalid" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-rose-300"
                >
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            {(promoStatus === "valid" || promoStatus === "invalid") && (
              <p
                className={`text-[11px] leading-snug ${
                  promoStatus === "valid" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {promoStatus === "valid" ? reserva.promoValid : reserva.promoInvalid}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
