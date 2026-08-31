// ---------------------------------------------------------------------------
// Kuhane Etno-Hostal — contenido central del sitio (Español).
//
// Regla del proyecto: NO INVENTAR DATOS. Todo lo que no está verificado
// directamente por Kuhane usa el valor TODO_PLACEHOLDER (o un texto entre
// corchetes "[POR CONFIRMAR]") en vez de un dato inventado. Editar este
// archivo es la forma más rápida de ir reemplazando placeholders por
// contenido real a medida que Kuhane lo confirma.
//
// Este archivo reemplaza (reorganizado, contenido verbatim) al antiguo
// lib/site-content.ts. Ver lib/content/en.ts para la traducción al inglés
// y lib/content/LocaleProvider.tsx para el selector de idioma en runtime.
// ---------------------------------------------------------------------------

import type { Colaborador, Habitacion, Libro, MapaPin, NavItem, Voz } from "./types";

export const TODO_PLACEHOLDER = "[POR CONFIRMAR]";

export const es = {
  TODO_PLACEHOLDER,

  site: {
    name: "Kuhane Etno-Hostal",
    shortName: "Kuhane",
    location: "Hanga Roa, Rapa Nui",
    url: "https://kuhanehostal.com",
    // La distancia exacta a Ahu Tahai varía según la fuente pública consultada
    // (reseñas mencionan ~200 m, un agregador menciona ~1,1 km) — hay que
    // confirmar la cifra real con Kuhane antes de publicarla como dato exacto.
    tahaiDistance: TODO_PLACEHOLDER,
    googleRating: {
      // Confirmado por Kuhane: 4.7 en Google. La cantidad exacta de reseñas y
      // el link directo al perfil de Google Maps todavía no están confirmados
      // (no se pudieron verificar de forma independiente — Google Maps no es
      // accesible para este asistente), así que quedan en placeholder hasta
      // que Kuhane los pase.
      value: 4.7 as number | string,
      count: TODO_PLACEHOLDER as number | string,
      source: "Google",
      url: TODO_PLACEHOLDER as string, // link directo al perfil de Google Maps de Kuhane
    },
    whatsapp: "+56 9 7766 8288",
    email: TODO_PLACEHOLDER,
    address: "Kahu Mahau s/n, 2770000 Hanga Roa, Chile",
  },

  nav: [
    { label: "Rapa Nui", href: "#rapa-nui" },
    { label: "Kuhane", href: "#kuhane" },
    { label: "Experiencias", href: "#experiencias" },
    { label: "Habitaciones", href: "#habitaciones" },
    { label: "Cultura", href: "#cultura" },
    { label: "Galería", href: "#galeria" },
    { label: "Reseñas", href: "#resenas" },
  ] as NavItem[],

  hero: {
    eyebrow: "KUHANE",
    place: "Rapa Nui",
    line1: "Llega como viajero.",
    line2: "Siéntete parte de la isla.",
    ctaPrimary: "RESERVAR",
    ctaSecondary: "DESCUBRIR KUHANE",
    videoSrc: "/media/hero-kuhane.mp4", // TODO: reemplazar cuando llegue el video real
    posterSrc: "/images/hero-fallback.jpg", // TODO: imagen de respaldo real
  },

  rapaNui: {
    eyebrow: "El territorio",
    title: "El lugar más remoto habitado del mundo.",
    body: [
      "Rapa Nui está a miles de kilómetros de cualquier otra costa — una isla volcánica en medio del Pacífico, donde el paisaje, la historia y la cultura Rapanui siguen vivos en cada rincón.",
      TODO_PLACEHOLDER + " — agregar aquí 1–2 líneas adicionales sobre el territorio una vez confirmadas con Kuhane.",
    ],
  },

  kuhane: {
    eyebrow: "Kuhane",
    title: "Un lugar para sentirte en casa.",
    body: [
      "Kuhane significa alma, en lengua rapanui. Es también la forma en que recibimos a cada persona que llega: no como un huésped más, sino como alguien que se suma, por unos días, a la vida de la isla.",
      "Desde la llegada al aeropuerto hasta la última noche mirando el atardecer, acompañamos el viaje con la cercanía y el conocimiento de quienes viven aquí.",
    ],
    hosts: TODO_PLACEHOLDER, // confirmar cómo presentar a Sofía / José / equipo
  },

  experiencias: {
    eyebrow: "La experiencia",
    title: "Más que una habitación: una forma de estar en la isla.",
    items: [
      {
        title: "Bienvenida en Kuhane",
        body: "Te recibimos en el aeropuerto y te acompañamos hasta Kuhane.",
        image: "/images/experiencias/bienvenida.jpg",
      },
      {
        title: "Cultura viva",
        body: TODO_PLACEHOLDER + " — descripción de experiencias culturales reales (historias, artesanía, etc.) a confirmar con Kuhane.",
        image: "/images/experiencias/cultura.jpg",
      },
      {
        title: "El atardecer",
        body: TODO_PLACEHOLDER + " — confirmar distancia y forma de llegar a Ahu Tahai antes de publicar el dato.",
        image: "/images/experiencias/atardecer.jpg",
      },
    ],
  },

  cultura: {
    eyebrow: "Cultura",
    title: "Rapa Nui, contada desde dentro.",
    body: "Historias, artículos, fragmentos de libros y voces de quienes conocen la isla por dentro. Esta sección se irá completando con contenido real de Kuhane.",
  },

  libros: [
    {
      titulo: TODO_PLACEHOLDER,
      anio: TODO_PLACEHOLDER,
      descripcion: TODO_PLACEHOLDER,
      fragmento: TODO_PLACEHOLDER,
      enlace: TODO_PLACEHOLDER,
    },
  ] as Libro[],

  voces: [
    {
      nombre: TODO_PLACEHOLDER,
      rol: TODO_PLACEHOLDER,
      pregunta: TODO_PLACEHOLDER,
      respuesta: TODO_PLACEHOLDER,
    },
  ] as Voz[],

  // No se asumen vistas, aire acondicionado ni servicios: todos los campos
  // quedan como placeholder hasta recibir la ficha real de cada habitación.
  habitaciones: [
    {
      nombre: TODO_PLACEHOLDER,
      capacidad: TODO_PLACEHOLDER,
      camas: TODO_PLACEHOLDER,
      bano: TODO_PLACEHOLDER,
      servicios: [TODO_PLACEHOLDER],
      caracteristicas: TODO_PLACEHOLDER,
      precio: TODO_PLACEHOLDER,
    },
    {
      nombre: TODO_PLACEHOLDER,
      capacidad: TODO_PLACEHOLDER,
      camas: TODO_PLACEHOLDER,
      bano: TODO_PLACEHOLDER,
      servicios: [TODO_PLACEHOLDER],
      caracteristicas: TODO_PLACEHOLDER,
      precio: TODO_PLACEHOLDER,
    },
  ] as Habitacion[],

  huespedes: {
    eyebrow: "Comunidad",
    title: "Rapa Nui a través de nuestros huéspedes",
    cta: "Comparte tu Rapa Nui",
    body: "Próximamente vas a poder compartir tus fotos, videos e historias directamente acá.",
  },

  galeria: {
    eyebrow: "Galería",
    title: "La isla, en imágenes.",
    // Fotos reales de Rapa Nui compartidas por Kuhane.
    photos: [
      "/images/gallery/01.jpg",
      "/images/gallery/02.jpg",
      "/images/gallery/03.jpg",
      "/images/gallery/04.jpg",
      "/images/gallery/05.jpg",
      "/images/gallery/06.jpg",
      "/images/gallery/07.jpg",
      "/images/gallery/08.jpg",
    ],
  },

  resenas: {
    eyebrow: "Lo que dicen",
    title: "Voces de quienes ya estuvieron acá.",
  },

  cta: {
    title: "Vení a vivir tu Rapa Nui.",
    body: "Escribinos y te ayudamos a planear tu estadía en Kuhane.",
    ctaPrimary: "RESERVAR",
  },

  aeropuerto: {
    title: "Tu llegada, acompañada.",
    body: "Te recibimos en el aeropuerto y te acompañamos hasta Kuhane.",
    image: "/images/aeropuerto-banner.jpg",
  },

  // Panel de reserva: por ahora conecta con Nuku OS (fase de pruebas, sin
  // pagos reales todavía) en vez de un backend propio de Kuhane.
  reserva: {
    nukuOsUrl: "https://nuku-os-app.vercel.app/reservar",
    eyebrow: "Disponibilidad",
    helper:
      "Elige tus fechas y cantidad de huéspedes. Te lleva al sistema de reservas de Kuhane — hoy en fase de pruebas, así que confirmamos contigo por WhatsApp o email antes de cobrar.",
  },

  colaboradores: {
    eyebrow: "Con la comunidad",
    title: "Vive la isla junto a quienes la conocen de cerca.",
    body: "Amigos y colaboradores de Kuhane ofrecen experiencias directamente en Rapa Nui. Súmalas a tu estadía cuando reserves.",
    // "Packs promocionales": todavía no tenemos nombres, precios ni condiciones
    // reales de los tours/paquetes (eso depende de que Kuhane nos pase esa
    // información — ver checklist), así que por ahora esto es una invitación a
    // coordinar, no un catálogo con precios inventados.
    ctaTitle: "Arma tu pack: tu estadía a tu medida",
    ctaBody:
      "Sumá buceo, cabalgatas o un tour arqueológico a tu reserva. Cuéntanoslo al reservar o escríbenos directo — coordinamos la actividad junto con tu habitación.",
    ctaWhatsapp: "Escribir por WhatsApp",
    ctaReserva: "Sumarlo a mi reserva",
  },

  colaboradoresList: [
    {
      nombre: TODO_PLACEHOLDER,
      actividad: TODO_PLACEHOLDER,
      descripcion: TODO_PLACEHOLDER,
      precio: TODO_PLACEHOLDER,
      contacto: TODO_PLACEHOLDER,
    },
    {
      nombre: TODO_PLACEHOLDER,
      actividad: TODO_PLACEHOLDER,
      descripcion: TODO_PLACEHOLDER,
      precio: TODO_PLACEHOLDER,
      contacto: TODO_PLACEHOLDER,
    },
    {
      nombre: TODO_PLACEHOLDER,
      actividad: TODO_PLACEHOLDER,
      descripcion: TODO_PLACEHOLDER,
      precio: TODO_PLACEHOLDER,
      contacto: TODO_PLACEHOLDER,
    },
  ] as Colaborador[],

  // Mapa de ubicación: Kuhane (aproximado, sin dirección exacta confirmada
  // todavía) + puntos de interés reales y públicos de Rapa Nui, para dar
  // contexto de dónde queda todo. Ninguna coordenada acá es inventada: los
  // hitos usan sus ubicaciones públicas conocidas; Kuhane usa el centro de
  // Hanga Roa como aproximación hasta tener la dirección exacta.
  ubicacion: {
    eyebrow: "Cómo llegar",
    title: "Kuhane y la isla, en el mapa.",
    body: "Hanga Roa es un pueblo pequeño — todo lo importante queda cerca. Así se ve la distancia entre Kuhane y algunos de los lugares imperdibles de Rapa Nui.",
    center: { lat: -27.1527, lng: -109.4265 },
    pins: [
      {
        id: "kuhane",
        nombre: "Kuhane Etno-Hostal",
        tipo: "kuhane",
        lat: -27.1500,
        lng: -109.4260,
        descripcion: "Kahu Mahau s/n, Hanga Roa — el pin es aproximado, la dirección exacta ya está confirmada.",
        aproximado: true,
      },
      {
        id: "ahu-tahai",
        nombre: "Ahu Tahai",
        tipo: "experiencia",
        lat: -27.1505,
        lng: -109.4356,
        descripcion: "El mejor lugar del pueblo para ver el atardecer junto a los Moái.",
      },
      {
        id: "ahu-tongariki",
        nombre: "Ahu Tongariki",
        tipo: "experiencia",
        lat: -27.1256,
        lng: -109.2767,
        descripcion: "Los 15 Moái más famosos de la isla, frente al mar.",
      },
      {
        id: "rano-kau",
        nombre: "Rano Kau y Orongo",
        tipo: "experiencia",
        lat: -27.1867,
        lng: -109.4442,
        descripcion: "Volcán con una laguna interior y el sitio ceremonial de Orongo.",
      },
      {
        id: "aeropuerto",
        nombre: "Aeropuerto Mataveri",
        tipo: "experiencia",
        lat: -27.1648,
        lng: -109.4219,
        descripcion: "Punto de llegada — te recibimos acá apenas aterrizas.",
      },
    ] as MapaPin[],
  },

  footer: {
    tagline: "Kuhane Etno-Hostal — Hanga Roa, Rapa Nui",
  },

  // -------------------------------------------------------------------------
  // ui: strings hardcoded directly in JSX across components (labels, button
  // text, aria-labels, placeholders, calendar/legend text, etc.) — pulled
  // out here so the whole site is switchable, not just the "big" sections.
  // -------------------------------------------------------------------------
  ui: {
    nav: {
      openMenuAria: "Abrir menú",
      reserve: "Reservar",
      toggleLanguageAria: "Cambiar idioma",
    },
    footer: {
      explore: "Explorar",
      contact: "Contacto",
      whatsappLabel: "WhatsApp:",
      emailLabel: "Email:",
      copyright: "© {year} Kuhane Etno-Hostal. Rapa Nui, Chile.",
      soulTagline: "Alma, en lengua rapanui",
    },
    habitaciones: {
      eyebrow: "Habitaciones",
      title: "Cada habitación, parte de la experiencia.",
      capacidad: "Capacidad",
      camas: "Camas",
      bano: "Baño",
      caracteristicas: "Características",
      servicios: "Servicios",
      consultar: "Consultar disponibilidad",
    },
    experiencias: {
      arrivalLabel: "Llegada",
    },
    huespedes: {
      availableSoonTitle: "Disponible próximamente",
    },
    cultura: {
      librosLabel: "Libros",
      vocesLabel: "Voces de Rapa Nui",
    },
    resenas: {
      reviewsSuffix: "reseñas",
      viewOn: "Ver en {source}",
      placeholderQuote: TODO_PLACEHOLDER + " — acá va una reseña real de un huésped de Kuhane.",
      placeholderName: "[Nombre del huésped]",
    },
    reserva: {
      monthsShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      departure: "Salida",
      arrivalDeparture: "Llegada — Salida",
      dates: "Fechas",
      guests: "Huéspedes",
      guestSingular: "persona",
      guestPlural: "personas",
      checkAvailabilityAria: "Ver disponibilidad",
      fewerGuestsAria: "Menos huéspedes",
      moreGuestsAria: "Más huéspedes",
      promoQuestion: "¿Tenés un código promocional?",
      promoPlaceholder: "Código promocional",
    },
    ubicacion: {
      legendKuhane: "Kuhane (ubicación aproximada)",
      legendExperiencias: "Lugares imperdibles",
    },
    placeholder: {
      rapaNuiPhoto: "Rapa Nui — fotografía próximamente",
      kuhanePhoto: "Kuhane — fotografía próximamente",
      roomPhoto: "Habitación — fotografía próximamente",
      collaboratorPhoto: "Foto próximamente",
      bookCover: "Portada",
      personPhoto: "Foto",
    },
    galeria: {
      closeAria: "Cerrar",
      photoAlt: "Rapa Nui",
    },
    cta: {
      imageAlt: "Atardecer en Rapa Nui",
    },
    whatsapp: {
      heading: "Escríbenos por WhatsApp",
      subtext: "Dejanos tu número y te contactamos si no alcanzas a terminar la conversación (opcional).",
      phonePlaceholder: "+56 9 ...",
      sending: "Un momento…",
      continueBtn: "Continuar a WhatsApp",
      skipBtn: "Escribir directo, sin dejar mi número",
      openAria: "Abrir WhatsApp",
      chatMessage: "¡Hola! Quisiera consultar disponibilidad en Kuhane Etno-Hostal.",
    },
    colaboradores: {
      waMessage: "¡Hola! Quisiera armar un pack de experiencias (buceo, cabalgatas, tour arqueológico) junto con mi reserva en Kuhane.",
      actividadPorConfirmar: "Actividad por confirmar",
      colaboradorPorConfirmar: "Colaborador por confirmar",
      descripcionFallback: "Estamos coordinando con nuestros amigos en la isla para sumar esta experiencia. Pronto vas a poder reservarla junto con tu estadía.",
      precioPorConfirmar: "Precio por confirmar",
      contactoPorConfirmar: "Contacto por confirmar",
    },
    calendar: {
      months: [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
      ],
      daysShort: ["L", "M", "M", "J", "V", "S", "D"],
      prevMonthAria: "Mes anterior",
      nextMonthAria: "Mes siguiente",
      pickCheckin: "Elige la fecha de llegada",
      pickCheckout: "Ahora elige la fecha de salida",
    },
  },
};

export type Content = typeof es;
