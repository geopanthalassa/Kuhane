// ---------------------------------------------------------------------------
// Kuhane Etno-Hostal — site content (English).
//
// Project rule: DO NOT INVENT DATA. Anything not directly verified by Kuhane
// uses the TODO_PLACEHOLDER value (bracketed text) instead of a made-up
// fact — this file translates the confirmed copy in lib/content/es.ts, it
// never adds facts (room prices, collaborator details, reviews, etc.) that
// aren't already real in the Spanish source. Same shape/keys as es.ts —
// see Content in lib/content/es.ts.
// ---------------------------------------------------------------------------

import type { Content } from "./es";

export const TODO_PLACEHOLDER = "[TO CONFIRM]";

export const en: Content = {
  TODO_PLACEHOLDER,

  site: {
    name: "Kuhane Etno-Hostal",
    shortName: "Kuhane",
    location: "Hanga Roa, Rapa Nui",
    url: "https://kuhanehostal.com",
    // The exact distance to Ahu Tahai varies by public source (reviews
    // mention ~200 m, an aggregator mentions ~1.1 km) — needs to be
    // confirmed with Kuhane before publishing it as an exact figure.
    tahaiDistance: TODO_PLACEHOLDER,
    googleRating: {
      // Confirmed by Kuhane: 4.7 on Google. The exact review count and the
      // direct Google Maps profile link aren't confirmed yet (couldn't be
      // independently verified — Google Maps isn't reachable from this
      // assistant), so they stay as placeholders until Kuhane provides them.
      value: 4.7 as number | string,
      count: TODO_PLACEHOLDER as number | string,
      source: "Google",
      url: TODO_PLACEHOLDER as string, // direct link to Kuhane's Google Maps profile
    },
    whatsapp: "+56 9 7766 8288",
    email: TODO_PLACEHOLDER,
    address: "Kahu Mahau s/n, 2770000 Hanga Roa, Chile",
  },

  nav: [
    { label: "Rapa Nui", href: "#rapa-nui" },
    { label: "Kuhane", href: "#kuhane" },
    { label: "Experiences", href: "#experiencias" },
    { label: "Rooms", href: "#habitaciones" },
    { label: "Culture", href: "#cultura" },
    { label: "Gallery", href: "#galeria" },
    { label: "Reviews", href: "#resenas" },
  ],

  hero: {
    eyebrow: "KUHANE",
    place: "Rapa Nui",
    line1: "Arrive as a traveler.",
    line2: "Feel part of the island.",
    ctaPrimary: "BOOK NOW",
    ctaSecondary: "DISCOVER KUHANE",
    videoSrc: "/media/hero-kuhane.mp4", // TODO: replace once the real video arrives
    posterSrc: "/images/hero-fallback.jpg", // TODO: real fallback image
  },

  rapaNui: {
    eyebrow: "The territory",
    title: "The most remote inhabited place on Earth.",
    body: [
      "Rapa Nui sits thousands of kilometers from any other coast — a volcanic island in the middle of the Pacific, where the landscape, history, and Rapanui culture are still alive in every corner.",
      TODO_PLACEHOLDER + " — add 1–2 more lines about the territory here once confirmed with Kuhane.",
    ],
  },

  kuhane: {
    eyebrow: "Kuhane",
    title: "A place to feel at home.",
    body: [
      "Kuhane means soul, in the Rapanui language. It's also how we welcome each person who arrives: not as just another guest, but as someone joining, for a few days, the life of the island.",
      "From the airport pickup to the last night watching the sunset, we accompany the journey with the closeness and knowledge of those who live here.",
    ],
    hosts: TODO_PLACEHOLDER, // confirm how to introduce Sofía / José / the team
  },

  experiencias: {
    eyebrow: "The experience",
    title: "More than a room: a way of being on the island.",
    items: [
      {
        title: "Welcome to Kuhane",
        body: "We meet you at the airport and take you to Kuhane.",
        image: "/images/experiencias/bienvenida.jpg",
      },
      {
        title: "Living culture",
        body: TODO_PLACEHOLDER + " — description of real cultural experiences (stories, crafts, etc.) to confirm with Kuhane.",
        image: "/images/experiencias/cultura.jpg",
      },
      {
        title: "The sunset",
        body: TODO_PLACEHOLDER + " — confirm the distance and how to get to Ahu Tahai before publishing this.",
        image: "/images/experiencias/atardecer.jpg",
      },
    ],
  },

  cultura: {
    eyebrow: "Culture",
    title: "Rapa Nui, told from within.",
    body: "Stories, articles, book excerpts, and voices of those who know the island from the inside. This section will keep filling in with real content from Kuhane.",
  },

  libros: [
    {
      titulo: TODO_PLACEHOLDER,
      anio: TODO_PLACEHOLDER,
      descripcion: TODO_PLACEHOLDER,
      fragmento: TODO_PLACEHOLDER,
      enlace: TODO_PLACEHOLDER,
    },
  ],

  voces: [
    {
      nombre: TODO_PLACEHOLDER,
      rol: TODO_PLACEHOLDER,
      pregunta: TODO_PLACEHOLDER,
      respuesta: TODO_PLACEHOLDER,
    },
  ],

  // No views, air conditioning, or amenities are assumed: every field stays
  // a placeholder until we get the real spec sheet for each room.
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
  ],

  huespedes: {
    eyebrow: "Community",
    title: "Rapa Nui through our guests",
    cta: "Share your Rapa Nui",
    body: "Soon you'll be able to share your photos, videos, and stories right here.",
  },

  galeria: {
    eyebrow: "Gallery",
    title: "The island, in pictures.",
    // Real Rapa Nui photos shared by Kuhane.
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
    eyebrow: "What people say",
    title: "Voices of those who've already been here.",
  },

  cta: {
    title: "Come live your Rapa Nui.",
    body: "Message us and we'll help you plan your stay at Kuhane.",
    ctaPrimary: "BOOK NOW",
  },

  aeropuerto: {
    title: "Your arrival, accompanied.",
    body: "We meet you at the airport and take you to Kuhane.",
    image: "/images/aeropuerto-banner.jpg",
  },

  // Booking panel: for now it connects to Nuku OS (testing phase, no real
  // payments yet) rather than a Kuhane-owned backend.
  reserva: {
    nukuOsUrl: "https://nuku-os-app.vercel.app/reservar",
    eyebrow: "Availability",
    helper:
      "Choose your dates and number of guests. This takes you to Kuhane's booking system — currently in testing, so we'll confirm with you by WhatsApp or email before charging anything.",
  },

  colaboradores: {
    eyebrow: "With the community",
    title: "Experience the island alongside those who know it best.",
    body: "Friends and collaborators of Kuhane offer experiences directly in Rapa Nui. Add them to your stay when you book.",
    // "Promo packs": we don't have real names, prices, or terms for the
    // tours/packages yet (that depends on Kuhane sending us that info — see
    // the checklist), so for now this is an invitation to coordinate, not a
    // catalog with invented prices.
    ctaTitle: "Build your pack: your stay, your way",
    ctaBody:
      "Add diving, horseback riding, or an archaeological tour to your reservation. Tell us when you book, or write to us directly — we'll coordinate the activity along with your room.",
    ctaWhatsapp: "Message us on WhatsApp",
    ctaReserva: "Add it to my booking",
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
  ],

  // Location map: Kuhane (approximate, no exact address confirmed yet) +
  // real, public points of interest in Rapa Nui, for context on where
  // everything is. No coordinate here is invented: landmarks use their
  // known public locations; Kuhane uses the center of Hanga Roa as an
  // approximation until the exact address is available.
  ubicacion: {
    eyebrow: "How to get there",
    title: "Kuhane and the island, on the map.",
    body: "Hanga Roa is a small town — everything important is close by. Here's how the distance looks between Kuhane and some of Rapa Nui's must-see spots.",
    center: { lat: -27.1527, lng: -109.4265 },
    pins: [
      {
        id: "kuhane",
        nombre: "Kuhane Etno-Hostal",
        tipo: "kuhane",
        lat: -27.1500,
        lng: -109.4260,
        descripcion: "Kahu Mahau s/n, Hanga Roa — the pin is approximate; the exact address is already confirmed.",
        aproximado: true,
      },
      {
        id: "ahu-tahai",
        nombre: "Ahu Tahai",
        tipo: "experiencia",
        lat: -27.1505,
        lng: -109.4356,
        descripcion: "The best spot in town to watch the sunset next to the Moai.",
      },
      {
        id: "ahu-tongariki",
        nombre: "Ahu Tongariki",
        tipo: "experiencia",
        lat: -27.1256,
        lng: -109.2767,
        descripcion: "The island's 15 most famous Moai, facing the sea.",
      },
      {
        id: "rano-kau",
        nombre: "Rano Kau and Orongo",
        tipo: "experiencia",
        lat: -27.1867,
        lng: -109.4442,
        descripcion: "A volcano with an interior lagoon and the Orongo ceremonial site.",
      },
      {
        id: "aeropuerto",
        nombre: "Mataveri Airport",
        tipo: "experiencia",
        lat: -27.1648,
        lng: -109.4219,
        descripcion: "Arrival point — we'll meet you here as soon as you land.",
      },
    ],
  },

  footer: {
    tagline: "Kuhane Etno-Hostal — Hanga Roa, Rapa Nui",
  },

  // -------------------------------------------------------------------------
  // ui: strings that were hardcoded directly in JSX across components
  // (labels, button text, aria-labels, placeholders, calendar/legend text,
  // etc.) — same grouping as lib/content/es.ts.
  // -------------------------------------------------------------------------
  ui: {
    nav: {
      openMenuAria: "Open menu",
      reserve: "Book now",
      toggleLanguageAria: "Switch language",
    },
    footer: {
      explore: "Explore",
      contact: "Contact",
      whatsappLabel: "WhatsApp:",
      emailLabel: "Email:",
      copyright: "© {year} Kuhane Etno-Hostal. Rapa Nui, Chile.",
      soulTagline: "Soul, in the Rapanui language",
    },
    habitaciones: {
      eyebrow: "Rooms",
      title: "Every room, part of the experience.",
      capacidad: "Capacity",
      camas: "Beds",
      bano: "Bathroom",
      caracteristicas: "Features",
      servicios: "Amenities",
      consultar: "Check availability",
    },
    experiencias: {
      arrivalLabel: "Arrival",
    },
    huespedes: {
      availableSoonTitle: "Available soon",
    },
    cultura: {
      librosLabel: "Books",
      vocesLabel: "Voices of Rapa Nui",
    },
    resenas: {
      reviewsSuffix: "reviews",
      viewOn: "View on {source}",
      placeholderQuote: TODO_PLACEHOLDER + " — a real review from a Kuhane guest goes here.",
      placeholderName: "[Guest name]",
    },
    reserva: {
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      departure: "Departure",
      arrivalDeparture: "Arrival — Departure",
      dates: "Dates",
      guests: "Guests",
      guestSingular: "guest",
      guestPlural: "guests",
      checkAvailabilityAria: "Check availability",
      fewerGuestsAria: "Fewer guests",
      moreGuestsAria: "More guests",
      promoQuestion: "Have a promo code?",
      promoPlaceholder: "Promo code",
      flightsCta: "Search flights to Easter Island",
      flightsHelper: "Departure defaults to Santiago — change the origin in the search page if you're flying from elsewhere.",
    },
    ubicacion: {
      legendKuhane: "Kuhane (approximate location)",
      legendExperiencias: "Must-see spots",
      flightsTitle: "Don't have a flight yet?",
      flightsCta: "Search flights to Easter Island",
      flightsHelper: "Opens in Aviasales with the route already set — change the origin and dates there if you need to.",
    },
    placeholder: {
      rapaNuiPhoto: "Rapa Nui — photo coming soon",
      kuhanePhoto: "Kuhane — photo coming soon",
      roomPhoto: "Room — photo coming soon",
      collaboratorPhoto: "Photo coming soon",
      bookCover: "Cover",
      personPhoto: "Photo",
    },
    galeria: {
      closeAria: "Close",
      photoAlt: "Rapa Nui",
    },
    cta: {
      imageAlt: "Sunset in Rapa Nui",
    },
    whatsapp: {
      heading: "Message us on WhatsApp",
      subtext: "Leave your number and we'll reach out if you don't manage to finish the chat (optional).",
      phonePlaceholder: "+56 9 ...",
      sending: "One moment…",
      continueBtn: "Continue to WhatsApp",
      skipBtn: "Chat directly, without leaving my number",
      openAria: "Open WhatsApp",
      chatMessage: "Hi! I'd like to check availability at Kuhane Etno-Hostal.",
    },
    colaboradores: {
      waMessage: "Hi! I'd like to put together an experience pack (diving, horseback riding, an archaeological tour) along with my booking at Kuhane.",
      actividadPorConfirmar: "Activity to be confirmed",
      colaboradorPorConfirmar: "Collaborator to be confirmed",
      descripcionFallback: "We're coordinating with our friends on the island to add this experience. Soon you'll be able to book it along with your stay.",
      precioPorConfirmar: "Price to be confirmed",
      contactoPorConfirmar: "Contact to be confirmed",
    },
    calendar: {
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ],
      daysShort: ["M", "T", "W", "T", "F", "S", "S"],
      prevMonthAria: "Previous month",
      nextMonthAria: "Next month",
      pickCheckin: "Choose your check-in date",
      pickCheckout: "Now choose your check-out date",
    },
  },
};
