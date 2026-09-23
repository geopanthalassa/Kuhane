// ---------------------------------------------------------------------------
// English content dictionary.
//
// Same project rule as lib/site-content.ts: NO INVENTING DATA. Every field
// here is a translation of the verified Spanish content in
// lib/site-content.ts (via lib/content/es.ts) — nothing new is added, no
// price, contact detail, or fact is introduced that isn't already confirmed
// in the Spanish source. Guest reviews (`resenas.testimonios`) are kept in
// their original Spanish, unmodified — translating a direct quote would
// change it, and that conflicts with the "don't invent/alter data" rule.
//
// Shape must match lib/content/es.ts exactly (see `Content` type there).
// ---------------------------------------------------------------------------
import type {
  Habitacion,
  Libro,
  Resena,
} from "@/lib/site-content";
import { es } from "./es";

const TODO_PLACEHOLDER = "[TO BE CONFIRMED]";

const site = {
  name: "Kuhane Etno-Hostal",
  shortName: "Kuhane",
  location: "Hanga Roa, Rapa Nui",
  url: "https://kuhanehostal.com",
  // Updated per Sofía's edit (9/23/2026, confirmed by Andre) — replaces the
  // old Booking.com figure (1.2 km).
  tahaiDistance: "200 m",
  ratings: [
    { value: "9.4", scale: "/10", source: "Booking.com", count: 121 as number | string },
    { value: "4.7", scale: "/5", source: "Google", count: 15 as number | string },
    { value: "4.7", scale: "/5", source: "Tripadvisor", count: 7 as number | string },
  ],
  whatsapp: "+56 9 7766 8288",
  email: "contacto@kuhanehostal.com",
  address: "Kahu Mahau s/n, Hanga Roa, Easter Island, Chile",
};

const ubicacionGeo = es.ubicacionGeo;

const nav = [
  { label: "Rapa Nui", href: "#rapa-nui" },
  { label: "Kuhane", href: "#kuhane" },
  { label: "Experiences", href: "#experiencias" },
  { label: "Rooms", href: "#habitaciones" },
  { label: "Culture", href: "#cultura" },
  { label: "Gallery", href: "#galeria" },
  { label: "Reviews", href: "#resenas" },
  { label: "Location", href: "#ubicacion" },
];

const hero = {
  eyebrow: "KUHANE",
  place: "Rapa Nui",
  line1: "Arrive as a traveler.",
  line2: "Connect and feel part of the island.",
  ctaPrimary: "BOOK NOW",
  ctaSecondary: "DISCOVER KUHANE",
  videoSrc: "/media/hero-kuhane.mp4",
  posterSrc: "/images/hero/hero-fallback.jpg",
  posterAlt: "Milky Way over a moai, Rapa Nui",
};

const rapaNui = {
  eyebrow: "The territory",
  // Translated from Sofía's updated Spanish copy (9/23/2026).
  title: "The most remote inhabited place on Earth.",
  body: [
    "Located in the middle of the South Pacific, Rapa Nui is almost 4,000 kilometers from mainland Chile and roughly equidistant from Tahiti. A subtropical island, with spectacular landscapes, a history of grandeur and resilience, and an unmatched living culture.",
  ],
  foto: "/images/rapa-nui/territorio.jpg",
  fotoAlt: "Aerial view of the Rano Kau crater, Rapa Nui",
};

const kuhane = {
  eyebrow: "Kuhane",
  title: "A place to feel at home.",
  // Translated from Sofía's updated Spanish copy (9/23/2026).
  body: [
    "Kuhane, in the Rapanui language, means soul. Designed to help you connect with the best of yourself, it will also be your home for a few days.",
    "From the moment you step off your flight, in every sunrise and sunset, we're with you with practical information and cultural knowledge to help you build a memorable experience.",
  ],
  hosts:
    "Sofía Abarca, founder and host of Kuhane, is a multidisciplinary artist, writer, and researcher of Rapanui history and art — always ready to share the culture and mysteries of Rapa Nui with those who stay.",
  fotos: [
    "/images/experiencias/bienvenida.jpg",
    "/images/kuhane/kuhane_02.jpg",
    "/images/kuhane/kuhane_03.jpg",
    "/images/kuhane/kuhane_04.jpg",
  ],
};

const experiencias = {
  eyebrow: "The experience",
  // Translated from Sofía's updated Spanish copy (9/23/2026).
  title: "Not just a hostel: the best way to explore and understand Rapa Nui and its culture.",
  items: [
    {
      title: "Welcome to Kuhane",
      body: "The moment you arrive, we welcome you with flower necklaces from the island and bring you home.",
      fotos: [
        "/images/experiencias/bienvenida-05.jpg",
        "/images/experiencias/bienvenida-06.jpg",
        "/images/experiencias/bienvenida-07.jpg",
        "/images/experiencias/bienvenida-08.jpg",
      ],
    },
    {
      title: "Living culture",
      body: "Island flavors, colors, and aromas, soft music, conversation by the sea, and plenty of culture: the daily ritual on Kuhane's terrace.",
      fotos: [
        "/images/experiencias/cultura-viva.jpg",
        "/images/experiencias/cultura-viva-02.jpg",
        "/images/experiencias/cultura-viva-03.jpg",
        "/images/experiencias/cultura-viva-04.jpg",
      ],
    },
    {
      title: "The sunset",
      // Distances updated per Sofía's edit (9/23/2026, confirmed by Andre),
      // replacing the old Booking.com figure (1.2 km).
      body: "Just 200 meters from the Tahai Ceremonial Complex and only 20 meters from the Akapu Sacred Platform, you'll have the privilege of being at the closest point to the most beautiful sunsets.",
      fotos: [
        "/images/experiencias/atardecer.jpg",
        "/images/experiencias/atardecer-05.jpg",
        "/images/experiencias/atardecer-06.jpg",
        "/images/experiencias/atardecer-07.jpg",
      ],
    },
  ],
  // Translated from Sofía's updated Spanish copy (9/23/2026) — expands the
  // list of services Kuhane connects guests with.
  extra:
    "Kuhane offers its own tours and also connects you with horseback riding, diving, sailing, stargazing, hiking, art galleries, cultural shows, restaurants and bars, canoeing, photo sessions, and massages — plus a free cultural induction to help you understand the place you're visiting.",
};

const otrasExperiencias = {
  eyebrow: "Also",
  title: "Other experiences on the island",
  body: "Kuhane connects you with other adventures.",
  fotos: [
    "/images/experiencias/buceo-01.jpg",
    "/images/experiencias/buceo-02.jpg",
    "/images/experiencias/buceo-03.jpg",
    "/images/experiencias/buceo-04.jpg",
    "/images/experiencias/buceo-05.jpg",
    "/images/experiencias/buceo-06.jpg",
    "/images/experiencias/buceo-07.jpg",
    "/images/experiencias/buceo-08.jpg",
    "/images/cabalgatas/cabalgata_01.jpg",
    "/images/cabalgatas/cabalgata_02.jpg",
    "/images/cabalgatas/cabalgata_03.jpg",
  ],
};

const experienciasKuhaneTours = {
  eyebrow: "Guided tours",
  title: "Kuhane Experiences",
  body: "Private and group tours run by Kuhane to explore the island with a guide, at your own pace. Each tour's price is confirmed with your reservation, not shown on the page.",
  cta: "See tours",
  foto: es.experienciasKuhaneTours.foto,
  fotoAlt: "Rano Raraku, one of the Kuhane Tours routes",
};

const cultura = {
  eyebrow: "Culture",
  title: "Rapa Nui, told from within.",
  body: "Stories, books, and Rapanui music, through more than 30 years of work by Sofía Abarca, founder of Kuhane.",
};

const sofia = {
  eyebrow: "Founder of Kuhane",
  foto: "/images/sofia/sofia-abarca.jpg",
  fotoAlt: "Sofía Abarca, founder of Kuhane",
  title: "Sofía Abarca",
  subtitle: "Polymath of Rapa Nui memory and heritage",
  summary:
    "Musician, ethnomusicological researcher and collector, cultural manager, and writer from Easter Island, specializing in the cultural expressions of the Rapanui people — its ancestral music and chants, its craftsmanship and sculptural art, and its culinary heritage. She is recognized as the only contemporary collector of Rapa Nui's musical heritage: more than 450 recordings of oral tradition and ancient chant delivered to the National Library of Chile, and 64 albums released through her label Nuku te Mango Rec., the first of its kind on the island.",
  stats: [
    { value: "30+", label: "years of work" },
    { value: "450+", label: "heritage recordings preserved" },
    { value: "64", label: "albums released" },
  ],
  ctaLabel: "Discover her story",
  ctaHref: "/sofia-abarca",
};

const libros: Libro[] = [
  {
    titulo: "Ríu: El Canto Primal de Rapa Nui",
    anio: "2015 (LOM Ediciones) · 2026 (Rapa Nui Press)",
    descripcion:
      "An ethnomusicological album and companion book collecting the ancestral Ríu chants, the fruit of years of work alongside masters Papá Kiko Paté and María Elena Hotus.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    portada: "/images/libros/riu.jpg",
  },
  {
    titulo: "Kai-kai Rapanui: Ideograma de Hilos",
    anio: "2006",
    descripcion:
      "An object-book with CD collecting the hand-woven Kai-kai ideograms and their ancestral Pata'u-ta'u recitations, made together with master weaver Isabel Pakarati Tepano.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    portada: "/images/libros/kai-kai.jpg",
  },
  {
    titulo: "Manos del Alma: Arte Escultórico Rapanui",
    anio: "2015",
    descripcion:
      "A study of traditional Rapanui wood carving, through the work of master sculptor Tomás Tuki Tepano.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    portada: "/images/libros/manos-del-alma.jpg",
  },
];

// tipoCodigo stays the same language-independent value as the Spanish
// source ("habitacion" / "bungalow") — only the display text changes.
const habitaciones: Habitacion[] = [
  {
    tipo: "Room",
    tipoCodigo: "habitacion",
    nombre: "Mahatu",
    capacidad: "2 guests",
    camas: "1 double bed",
    bano: "Private, with bathtub",
    servicios: ["Hot water", "Fan", "Wifi", "Towels and linens included"],
    caracteristicas: "Large window facing the terrace and garden",
    precio: "Price on request",
    fotos: ["/images/habitaciones/mahatu/mahatu_01.jpg", "/images/habitaciones/mahatu/mahatu_02.jpg"],
  },
  {
    tipo: "Room",
    tipoCodigo: "habitacion",
    nombre: "Vaiana",
    capacidad: "2 guests",
    camas: "1 double bed",
    bano: "Private, with shower",
    servicios: ["Hot water", "Fan", "Wifi", "Towels and linens included"],
    caracteristicas: "Large window facing the terrace and garden",
    precio: "Price on request",
    fotos: ["/images/habitaciones/vaiana/vaiana_01.jpg", "/images/habitaciones/vaiana/vaiana_02.jpg"],
  },
  {
    tipo: "Room",
    tipoCodigo: "habitacion",
    nombre: "Ohana",
    capacidad: "6 guests",
    camas: "1 double bed + 2 bunk beds (4 single mattresses)",
    bano: "Private, with a new, spacious, comfortable shower",
    servicios: ["Hot water", "Wifi", "Towels and linens included"],
    caracteristicas: "2 connected rooms · window facing the terrace and garden",
    precio: "Price on request",
    fotos: [
      "/images/habitaciones/ohana/ohana_02.jpg",
      "/images/habitaciones/ohana/ohana_01.jpg",
      "/images/habitaciones/ohana/ohana_03.jpg",
      "/images/habitaciones/ohana/ohana_04.jpg",
    ],
  },
  {
    tipo: "Room",
    tipoCodigo: "habitacion",
    nombre: "Haré",
    capacidad: "3 guests",
    camas: "1 single bed + 1 double bed",
    bano: "Private, with bathtub",
    servicios: ["Fan", "Wifi", "Towels and linens included"],
    caracteristicas: "View of the garden and interior patio",
    precio: "Price on request",
    fotos: ["/images/habitaciones/hare/hare_04.jpg", "/images/habitaciones/hare/hare_05.jpg"],
  },
  {
    tipo: "Bungalow",
    tipoCodigo: "bungalow",
    nombre: "Calipso",
    capacidad: "3 guests",
    camas: "1 king bed + 1 single-and-a-half bed",
    bano: "Private, with bathtub",
    servicios: ["Hot water", "Air conditioning", "Wifi", "Towels and linens included"],
    caracteristicas: "Beachfront bungalow, with terrace",
    precio: "Price on request",
    fotos: ["/images/habitaciones/calipso/calipso_01.jpg", "/images/habitaciones/calipso/calipso_02.jpg"],
  },
  {
    tipo: "Bungalow",
    tipoCodigo: "bungalow",
    nombre: "Uta",
    capacidad: "3 guests",
    camas: "1 king bed + 1 single-and-a-half bed",
    bano: "Private, with bathtub",
    servicios: ["Hot water", "Air conditioning", "Wifi", "Towels and linens included"],
    caracteristicas: "Beachfront bungalow, with terrace",
    precio: "Price on request",
    fotos: ["/images/habitaciones/uta/uta_01.jpg", "/images/habitaciones/uta/uta_02.jpg"],
  },
  {
    tipo: "Bungalow",
    tipoCodigo: "bungalow",
    nombre: "Moana",
    capacidad: "4 guests",
    camas: "1 double bed + trundle bed (2 single-and-a-half mattresses)",
    bano: "Private, with bathtub",
    servicios: ["Hot water", "Air conditioning", "Wifi", "Towels and linens included"],
    caracteristicas: "Beachfront bungalow, with terrace",
    precio: "Price on request",
    fotos: ["/images/habitaciones/moana/moana_02.jpg", "/images/habitaciones/moana/moana_01.jpg"],
  },
];

const habitacionesIntro = {
  title: "Every room, part of the experience.",
  bodyPrefix: "4 rooms and 3 beachfront bungalows — total capacity for",
  capacidadTotal: 23,
  bodySuffix: "guests.",
  incluye: "Continental breakfast and airport transfer both ways are included in your stay.",
};

const huespedes = {
  eyebrow: "Community",
  title: "Rapa Nui through our guests",
  cta: "Share your Rapa Nui",
  body: "Soon you'll be able to share your photos, videos, and stories right here.",
};

const galeria = {
  eyebrow: "Gallery",
  title: "The island, in pictures.",
  fotos: es.galeria.fotos,
};

// Reviews stay in their original Spanish — see the file header note.
const resenas: { eyebrow: string; title: string; testimonios: Resena[] } = {
  eyebrow: "What people say",
  title: "Voices of those who've been here.",
  testimonios: es.resenas.testimonios,
};

const kuhaneEspera = {
  title: "Kuhane awaits you.",
  body: "In the heart of Hanga Roa, with the garden, the sunset and the house always ready to welcome you.",
  videoSrc: es.kuhaneEspera.videoSrc,
  posterSrc: es.kuhaneEspera.posterSrc,
  posterAlt: "Moai and sunset over the ocean, Rapa Nui",
};

const cta = {
  title: "Come live your Rapa Nui.",
  body: "Write to us and we'll help you plan your stay at Kuhane — with airport transfer both ways included in your booking.",
  ctaPrimary: "BOOK NOW",
  foto: "/images/cta/reserva.jpg",
  fotoAlt: "Ahu Tongariki at sunset, Rapa Nui",
};

const reserva = {
  nukuOsUrl: es.reserva.nukuOsUrl,
  nukuOsAccountId: es.reserva.nukuOsAccountId,
  eyebrow: "Availability",
  helper:
    "Choose your dates and number of guests. It takes you to Kuhane's booking system, where your reservation is recorded and you get your confirmation email right away — payment is made directly at the hostel.",
  dates: "Dates",
  guests: "Guests",
  guestSingular: "guest",
  guestPlural: "guests",
  departure: "Departure",
  arrivalDeparture: "Arrival — Departure",
  checkAvailabilityAria: "Check availability",
  fewerGuestsAria: "Fewer guests",
  moreGuestsAria: "More guests",
  promoQuestion: "Promo code?",
  promoPlaceholder: "Promo code",
  promoChecking: "Checking…",
  promoValid: "Valid code — it will be applied when you confirm your booking.",
  promoInvalid: "That code isn't valid or has expired.",
  flightsCta: "Search flights to Easter Island",
  flightsHelper:
    "Suggested departure from Santiago — change the origin in the search if you're flying from another city.",
  paymentNote:
    "Payment is made at the hostel — we accept cash, and debit or credit cards (Chilean or international).",
  incluye: "Your booking includes continental breakfast and airport transfer both ways.",
  monthsShort: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
};

const aeropuerto = {
  title: "Your arrival and departure, taken care of.",
  body: "The transfer from the airport to Kuhane, and back to the airport after check-out, is included in your booking — at no extra cost.",
  foto: "/images/experiencias/aeropuerto.jpg",
  fotoAlt: "Airport transfer — Kuhane",
};

const footer = {
  tagline: "Kuhane Etno-Hostal — Hanga Roa, Rapa Nui",
};

const whatsappWidget = {
  heading: "Message us on WhatsApp",
  subtext: "Leave us your number and we'll reach out, or message us directly right now.",
  phonePlaceholder: "Your number (optional)",
  continueBtn: "Continue to WhatsApp",
  sending: "One moment…",
  skipBtn: "Message directly",
  openAria: "Open WhatsApp",
  chatMessage: "Hi, I'd like to ask about availability at Kuhane.",
};

const ubicacion = {
  eyebrow: "How to get here",
  title: "Find us in Hanga Roa.",
  body: "Kuhane is steps from the center of Hanga Roa, near Ahu Tahai — and if you're arriving by plane, the transfer from the airport is already included in your booking.",
  directionsCta: "Directions (Google Maps)",
};

const ui = {
  consultarDisponibilidad: "Check availability",
  habitacionesGroupTitle: "Rooms",
  bungalowsGroupTitle: "Beachfront bungalows",
  cerrar: "Close",
  fotoAnterior: "Previous photo",
  fotoSiguiente: "Next photo",
  abrirMenu: "Open menu",
  reservarNav: "Book now",
  elegirFechasError: "Choose arrival and departure dates to continue.",
  exploreLabel: "Explore",
  contactLabel: "Contact",
  sernaturCertLabel: "SERNATUR Certificate",
  almaLabel: "Alma, in the Rapanui language",
  librosLabel: "Books",
  llegadaLabel: "Arrival",
  anterior: "Previous",
  siguiente: "Next",
  reviewsCountSuffix: "reviews",
  disponibleProximamente: "Coming soon",
  activarSonido: "Turn on sound",
  silenciar: "Mute",
};

export const en = {
  site,
  ubicacionGeo,
  nav,
  hero,
  rapaNui,
  kuhane,
  experiencias,
  otrasExperiencias,
  experienciasKuhaneTours,
  cultura,
  sofia,
  libros,
  habitaciones,
  habitacionesIntro,
  huespedes,
  galeria,
  resenas,
  kuhaneEspera,
  cta,
  reserva,
  aeropuerto,
  footer,
  ubicacion,
  whatsappWidget,
  ui,
  TODO_PLACEHOLDER,
};
