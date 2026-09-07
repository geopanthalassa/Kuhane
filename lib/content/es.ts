// ---------------------------------------------------------------------------
// Diccionario de contenido en español — es el idioma por defecto del sitio.
// Reexporta el contenido real ya verificado de lib/site-content.ts (misma
// regla NO INVENTAR DATOS) y le suma un puñado de textos de interfaz que
// antes estaban escritos directo en los componentes (título de los grupos
// de Habitaciones, botones del lightbox, etc.) para que también puedan
// traducirse en en.ts.
// ---------------------------------------------------------------------------
import {
  site,
  ubicacionGeo,
  nav,
  hero,
  rapaNui,
  kuhane,
  experiencias,
  otrasExperiencias,
  cultura,
  sofia,
  libros,
  habitaciones,
  habitacionesIntro,
  huespedes,
  galeria,
  resenas,
  cta,
  reserva,
  aeropuerto,
  footer,
  ubicacion,
  whatsappWidget,
  TODO_PLACEHOLDER,
} from "@/lib/site-content";

const ui = {
  consultarDisponibilidad: "Consultar disponibilidad",
  habitacionesGroupTitle: "Habitaciones",
  bungalowsGroupTitle: "Bungalows frente al mar",
  cerrar: "Cerrar",
  fotoAnterior: "Foto anterior",
  fotoSiguiente: "Foto siguiente",
  abrirMenu: "Abrir menú",
  reservarNav: "Reservar",
  elegirFechasError: "Elige fechas de llegada y salida para continuar.",
  // Sumados al construir el switch ES/EN (7/9/2026): textos que antes
  // estaban escritos directo en los componentes.
  exploreLabel: "Explorar",
  contactLabel: "Contacto",
  sernaturCertLabel: "Certificado SERNATUR",
  almaLabel: "Alma, en lengua rapanui",
  librosLabel: "Libros",
  llegadaLabel: "Llegada",
  anterior: "Anterior",
  siguiente: "Siguiente",
  reviewsCountSuffix: "reseñas",
  disponibleProximamente: "Disponible próximamente",
};

export const es = {
  site,
  ubicacionGeo,
  nav,
  hero,
  rapaNui,
  kuhane,
  experiencias,
  otrasExperiencias,
  cultura,
  sofia,
  libros,
  habitaciones,
  habitacionesIntro,
  huespedes,
  galeria,
  resenas,
  cta,
  reserva,
  aeropuerto,
  footer,
  ubicacion,
  whatsappWidget,
  ui,
  TODO_PLACEHOLDER,
};

export type Content = typeof es;
