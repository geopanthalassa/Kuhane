"use client";

import { useEffect, useState } from "react";

// Conversor de moneda CLP -> USD (pedido de Andre, 4/10/2026: "necesito que
// coloques un conversor de moneda a usd asi la gente de afuera puede ver el
// precio directamente en dolares"). Se consulta una API pública y gratuita
// de tipo de cambio (open.er-api.com — no pide API key, pensada para que la
// llame el navegador del visitante directamente, sin backend propio).
//
// Regla NO INVENTAR DATOS: si la consulta falla (sin internet, API caída,
// cambios en su formato, etc.) esto devuelve `null` y el componente que lo
// usa simplemente no muestra el precio en USD — nunca se deja un tipo de
// cambio viejo/fijo como respaldo silencioso.
//
// Nota para Andre: esta llamada no se pudo probar en vivo desde el entorno
// donde trabaja Claude (un sandbox que por seguridad bloquea casi toda
// salida a internet), pero el navegador de cada visitante real no tiene esa
// restricción. Conviene revisarlo juntos apenas esté arriba en
// kuhanehostal.com para confirmar que el número en dólares aparece bien.
const EXCHANGE_RATE_API_URL = "https://open.er-api.com/v6/latest/CLP";

// Una sola consulta compartida por toda la página (no una por habitación):
// las 7 fichas de habitaciones/bungalows usan este mismo hook, y así solo se
// hace un pedido de red en vez de 7.
let cachedRate: number | null | undefined; // undefined = todavía no se consultó
let pendingFetch: Promise<number | null> | null = null;

async function fetchUsdPerClp(): Promise<number | null> {
  try {
    const res = await fetch(EXCHANGE_RATE_API_URL);
    if (!res.ok) return null;
    const data = await res.json();
    const rate = data?.rates?.USD;
    return typeof rate === "number" && rate > 0 ? rate : null;
  } catch {
    // Sin internet, API caída, CORS bloqueado, etc. — se oculta el USD,
    // no se inventa un número.
    return null;
  }
}

/**
 * Devuelve cuántos dólares vale 1 peso chileno (CLP) en este momento, o
 * `null` mientras se consulta o si la consulta falló. Multiplicar por un
 * precio en CLP da el equivalente aproximado en USD.
 */
export function useUsdRate(): number | null {
  const [rate, setRate] = useState<number | null>(cachedRate ?? null);

  useEffect(() => {
    if (cachedRate !== undefined) {
      setRate(cachedRate);
      return;
    }
    if (!pendingFetch) {
      pendingFetch = fetchUsdPerClp().then((r) => {
        cachedRate = r;
        return r;
      });
    }
    let active = true;
    pendingFetch.then((r) => {
      if (active) setRate(r);
    });
    return () => {
      active = false;
    };
  }, []);

  return rate;
}
