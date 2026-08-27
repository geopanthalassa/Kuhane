// ---------------------------------------------------------------------------
// Kuhane Etno-Hostal — contenido central del sitio.
//
// Regla del proyecto: NO INVENTAR DATOS. Todo lo que no está verificado
// directamente por Kuhane usa el valor TODO_PLACEHOLDER (o un texto entre
// corchetes "[POR CONFIRMAR]") en vez de un dato inventado. Editar este
// archivo es la forma más rápida de ir reemplazando placeholders por
// contenido real a medida que Kuhane lo confirma.
// ---------------------------------------------------------------------------

export const TODO_PLACEHOLDER = "[POR CONFIRMAR]";

export const site = {
  name: "Kuhane Etno-Hostal",
  shortName: "Kuhane",
  location: "Hanga Roa, Rapa Nui",
  url: "https://kuhanehostal.com",
  // La distancia exacta a Ahu Tahai varía según la fuente pública consultada
  // (reseñas mencionan ~200 m, un agregador menciona ~1,1 km) — hay que
  // confirmar la cifra real con Kuhane antes de publicarla como dato exacto.
  tahaiDistance: TODO_PLACEHOLDER,
  googleRating: {
    value: TODO_PLACEHOLDER as number | string,
    count: TODO_PLACEHOLDER as number | string,
    source: TODO_PLACEHOLDER, // confirmar si es Google, TripAdvisor o Booking
  },
  whatsapp: TODO_PLACEHOLDER,
  email: TODO_PLACEHOLDER,
  address: TODO_PLACEHOLDER,
};

export const nav = [
  { label: "Rapa Nui", href: "#rapa-nui" },
  { label: "Kuhane", href: "#kuhane" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Habitaciones", href: "#habitaciones" },
  { label: "Cultura", href: "#cultura" },
  { label: "Galería", href: "#galeria" },
  { label: "Reseñas", href: "#resenas" },
];

export const hero = {
  eyebrow: "KUHANE",
  place: "Rapa Nui",
  line1: "Llega como viajero.",
  line2: "Siéntete parte de la isla.",
  ctaPrimary: "RESERVAR",
  ctaSecondary: "DESCUBRIR KUHANE",
  videoSrc: "/media/hero-kuhane.mp4", // TODO: reemplazar cuando llegue el video real
  posterSrc: "/images/hero-fallback.jpg", // TODO: imagen de respaldo real
};

export const rapaNui = {
  eyebrow: "El territorio",
  title: "El lugar más remoto habitado del mundo.",
  body: [
    "Rapa Nui está a miles de kilómetros de cualquier otra costa — una isla volcánica en medio del Pacífico, donde el paisaje, la historia y la cultura Rapanui siguen vivos en cada rincón.",
    TODO_PLACEHOLDER + " — agregar aquí 1–2 líneas adicionales sobre el territorio una vez confirmadas con Kuhane.",
  ],
};

export const kuhane = {
  eyebrow: "Kuhane",
  title: "Un lugar para sentirte en casa.",
  body: [
    "Kuhane significa alma, en lengua rapanui. Es también la forma en que recibimos a cada persona que llega: no como un huésped más, sino como alguien que se suma, por unos días, a la vida de la isla.",
    "Desde la llegada al aeropuerto hasta la última noche mirando el atardecer, acompañamos el viaje con la cercanía y el conocimiento de quienes viven aquí.",
  ],
  hosts: TODO_PLACEHOLDER, // confirmar cómo presentar a Sofía / José / equipo
};

export const experiencias = {
  eyebrow: "La experiencia",
  title: "Más que una habitación: una forma de estar en la isla.",
  items: [
    {
      title: "Bienvenida en Kuhane",
      body: "Te recibimos en el aeropuerto y te acompañamos hasta Kuhane.",
    },
    {
      title: "Cultura viva",
      body: TODO_PLACEHOLDER + " — descripción de experiencias culturales reales (historias, artesanía, etc.) a confirmar con Kuhane.",
    },
    {
      title: "El atardecer",
      body: TODO_PLACEHOLDER + " — confirmar distancia y forma de llegar a Ahu Tahai antes de publicar el dato.",
    },
  ],
};

export const cultura = {
  eyebrow: "Cultura",
  title: "Rapa Nui, contada desde dentro.",
  body: "Historias, artículos, fragmentos de libros y voces de quienes conocen la isla por dentro. Esta sección se irá completando con contenido real de Kuhane.",
};

export type Libro = {
  titulo: string;
  anio: string;
  descripcion: string;
  fragmento: string;
  enlace: string;
};

export const libros: Libro[] = [
  {
    titulo: TODO_PLACEHOLDER,
    anio: TODO_PLACEHOLDER,
    descripcion: TODO_PLACEHOLDER,
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
  },
];

export type Voz = {
  nombre: string;
  rol: string;
  pregunta: string;
  respuesta: string;
};

export const voces: Voz[] = [
  {
    nombre: TODO_PLACEHOLDER,
    rol: TODO_PLACEHOLDER,
    pregunta: TODO_PLACEHOLDER,
    respuesta: TODO_PLACEHOLDER,
  },
];

export type Habitacion = {
  nombre: string;
  capacidad: string;
  camas: string;
  bano: string;
  servicios: string[];
  caracteristicas: string;
  precio: string;
};

// No se asumen vistas, aire acondicionado ni servicios: todos los campos
// quedan como placeholder hasta recibir la ficha real de cada habitación.
export const habitaciones: Habitacion[] = [
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
];

export const huespedes = {
  eyebrow: "Comunidad",
  title: "Rapa Nui a través de nuestros huéspedes",
  cta: "Comparte tu Rapa Nui",
  body: "Próximamente vas a poder compartir tus fotos, videos e historias directamente acá.",
};

export const galeria = {
  eyebrow: "Galería",
  title: "La isla, en imágenes.",
  // Placeholders tipados: se completan con fotos reales apenas lleguen.
  count: 8,
};

export const resenas = {
  eyebrow: "Lo que dicen",
  title: "Voces de quienes ya estuvieron acá.",
};

export const cta = {
  title: "Vení a vivir tu Rapa Nui.",
  body: "Escribinos y te ayudamos a planear tu estadía en Kuhane.",
  ctaPrimary: "RESERVAR",
};

export const aeropuerto = {
  title: "Tu llegada, acompañada.",
  body: "Te recibimos en el aeropuerto y te acompañamos hasta Kuhane.",
};

export const footer = {
  tagline: "Kuhane Etno-Hostal — Hanga Roa, Rapa Nui",
};
