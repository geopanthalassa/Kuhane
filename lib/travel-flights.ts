// Link de búsqueda de vuelos a Isla de Pascua vía Aviasales, con la marca
// de afiliado de Kuhane en Travelpayouts (programa: Aviasales, proyecto:
// Kuhane). Los cuatro valores de abajo son fijos — salen del link real que
// Andre generó en su panel de Travelpayouts, NO son inventados:
//   https://tp.media/r?campaign_id=100&marker=711539&p=4114&trs=569103&u=...
// Si algún día cambia de cuenta o de campaña, solo hay que actualizar acá.
const TP_CAMPAIGN_ID = "100";
const TP_MARKER = "711539";
const TP_P = "4114";
const TP_TRS = "569103";

// Aeropuerto de destino: Mataveri, Isla de Pascua. Origen por defecto:
// Santiago, porque prácticamente todo vuelo a Rapa Nui conecta por ahí —
// la página de resultados de Aviasales sigue siendo un buscador real, así
// que quien vuele desde otra ciudad cambia el origen ahí mismo.
const DESTINATION_IATA = "IPC";
const DEFAULT_ORIGIN_IATA = "SCL";

function toDDMM(isoDate: string): string {
  // isoDate viene como "YYYY-MM-DD"
  const parts = isoDate.split("-");
  const month = parts[1];
  const day = parts[2];
  return `${day}${month}`;
}

function clampAdults(n: number): number {
  if (!Number.isFinite(n)) return 2;
  return Math.min(9, Math.max(1, Math.round(n)));
}

function isoDaysFromNow(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export type FlightSearchOptions = {
  /** "YYYY-MM-DD" — fecha de llegada a la isla (check-in de Kuhane) */
  departDate?: string;
  /** "YYYY-MM-DD" — fecha de salida de la isla (check-out de Kuhane) */
  returnDate?: string;
  /** cantidad de personas — se usa como "adultos" en la búsqueda */
  adults?: number;
  /** código IATA de origen; por defecto Santiago (SCL) */
  origin?: string;
};

/**
 * Arma la URL de búsqueda de Aviasales para un viaje redondo a Isla de
 * Pascua (IPC). Si no se pasan fechas, usa una ventana de referencia (30
 * días desde hoy, 7 noches) — no representa una fecha real de nadie, es
 * solo para que el link tenga algo válido cargado antes de que el huésped
 * elija las suyas.
 */
export function buildAviasalesSearchUrl(opts: FlightSearchOptions = {}): string {
  const origin = (opts.origin ?? DEFAULT_ORIGIN_IATA).toUpperCase();
  const adults = clampAdults(opts.adults ?? 2);

  const departDate = opts.departDate || isoDaysFromNow(30);
  const returnDate = opts.returnDate || isoDaysFromNow(37);

  const path = `${origin}${toDDMM(departDate)}${DESTINATION_IATA}${toDDMM(returnDate)}${adults}`;
  return `https://www.aviasales.com/search/${path}`;
}

/** Envuelve cualquier URL de Aviasales en el link rastreado de Travelpayouts (comisión para Kuhane). */
export function buildTravelpayoutsLink(targetUrl: string): string {
  const params = new URLSearchParams({
    campaign_id: TP_CAMPAIGN_ID,
    marker: TP_MARKER,
    p: TP_P,
    trs: TP_TRS,
    u: targetUrl,
  });
  return `https://tp.media/r?${params.toString()}`;
}

/** Atajo para el caso común: arma la búsqueda y la envuelve en el link rastreado, de una. */
export function buildFlightSearchLink(opts: FlightSearchOptions = {}): string {
  return buildTravelpayoutsLink(buildAviasalesSearchUrl(opts));
}
