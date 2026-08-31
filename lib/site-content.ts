// ---------------------------------------------------------------------------
// Kuhane Etno-Hostal — contenido central del sitio.
//
// Este archivo ahora es un re-export de compatibilidad: el contenido real
// (bilingüe ES/EN) vive en lib/content/es.ts y lib/content/en.ts, servido en
// runtime a través de lib/content/LocaleProvider.tsx (useContent()). Los
// componentes de app/ y components/ deben usar useContent() para poder
// cambiar de idioma; este archivo queda solo para código que necesita el
// contenido en español de forma estática (p. ej. metadata del servidor en
// app/layout.tsx, app/sitemap.ts, app/robots.ts).
//
// Regla del proyecto: NO INVENTAR DATOS — ver lib/content/es.ts.
// ---------------------------------------------------------------------------

import { es, TODO_PLACEHOLDER } from "./content/es";

export { TODO_PLACEHOLDER };
export { es };
export default es;

export const site = es.site;
export const nav = es.nav;
export const hero = es.hero;
export const rapaNui = es.rapaNui;
export const kuhane = es.kuhane;
export const experiencias = es.experiencias;
export const cultura = es.cultura;
export const libros = es.libros;
export const voces = es.voces;
export const habitaciones = es.habitaciones;
export const huespedes = es.huespedes;
export const galeria = es.galeria;
export const resenas = es.resenas;
export const cta = es.cta;
export const aeropuerto = es.aeropuerto;
export const reserva = es.reserva;
export const colaboradores = es.colaboradores;
export const colaboradoresList = es.colaboradoresList;
export const ubicacion = es.ubicacion;
export const footer = es.footer;

export type { Libro, Voz, Habitacion, Colaborador, MapaPin, NavItem } from "./content/types";
