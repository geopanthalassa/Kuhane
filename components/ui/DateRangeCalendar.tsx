"use client";

import { useState } from "react";

// Calendario de rango minimalista, sin dependencias externas: un mes a la
// vez, clic para llegada, segundo clic (fecha posterior) para salida.
// Fechas se manejan como strings "YYYY-MM-DD" en horario local, evitando
// líos de zona horaria con Date/UTC.

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const DIAS = ["L", "M", "M", "J", "V", "S", "D"];

function toKey(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function todayKey() {
  const t = new Date();
  return toKey(t.getFullYear(), t.getMonth(), t.getDate());
}

export default function DateRangeCalendar({
  checkin,
  checkout,
  onChange,
}: {
  checkin: string;
  checkout: string;
  onChange: (next: { checkin: string; checkout: string }) => void;
}) {
  const start = checkin ? new Date(checkin + "T00:00:00") : new Date();
  const [viewYear, setViewYear] = useState(start.getFullYear());
  const [viewMonth, setViewMonth] = useState(start.getMonth());
  const today = todayKey();

  function daysInMonth(y: number, m: number) {
    return new Date(y, m + 1, 0).getDate();
  }
  function firstWeekday(y: number, m: number) {
    // Lunes = 0 ... Domingo = 6
    return (new Date(y, m, 1).getDay() + 6) % 7;
  }

  function handlePick(key: string) {
    if (key < today) return;
    if (!checkin || (checkin && checkout)) {
      onChange({ checkin: key, checkout: "" });
    } else if (key <= checkin) {
      onChange({ checkin: key, checkout: "" });
    } else {
      onChange({ checkin, checkout: key });
    }
  }

  function renderMonth(y: number, m: number) {
    const total = daysInMonth(y, m);
    const offset = firstWeekday(y, m);
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let d = 1; d <= total; d++) cells.push(d);

    return (
      <div className="w-full">
        <p className="mb-3 text-center text-xs font-medium tracking-[0.1em] uppercase text-stone">
          {MESES[m]} {y}
        </p>
        <div className="grid grid-cols-7 gap-y-1 text-center text-[11px] text-stone-soft/70">
          {DIAS.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-y-1 text-center text-[13px]">
          {cells.map((d, i) => {
            if (d === null) return <span key={i} />;
            const key = toKey(y, m, d);
            const disabled = key < today;
            const isCheckin = key === checkin;
            const isCheckout = key === checkout;
            const inRange = checkin && checkout && key > checkin && key < checkout;
            const edge = isCheckin || isCheckout;

            return (
              <button
                key={i}
                type="button"
                disabled={disabled}
                onClick={() => handlePick(key)}
                className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                  disabled
                    ? "cursor-default text-stone-soft/30"
                    : edge
                    ? "bg-teal-deep text-warm-white"
                    : inRange
                    ? "bg-teal/15 text-stone"
                    : "text-stone hover:bg-sand"
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }
  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  return (
    <div className="w-[280px] p-4">
      <div className="mb-1 flex items-center justify-between">
        <button
          type="button"
          aria-label="Mes anterior"
          onClick={prevMonth}
          className="flex h-7 w-7 items-center justify-center rounded-full text-stone-soft hover:bg-sand"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Mes siguiente"
          onClick={nextMonth}
          className="flex h-7 w-7 items-center justify-center rounded-full text-stone-soft hover:bg-sand"
        >
          ›
        </button>
      </div>
      {renderMonth(viewYear, viewMonth)}
      <p className="mt-3 text-center text-[11px] leading-relaxed text-stone-soft/70">
        {!checkin
          ? "Elige la fecha de llegada"
          : !checkout
          ? "Ahora elige la fecha de salida"
          : `${checkin} → ${checkout}`}
      </p>
    </div>
  );
}
