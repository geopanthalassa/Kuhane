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
  // Confirmado: 1,2 km según el propio listado de Kuhane en Booking.com
  // (sección "Alrededores del alojamiento", septiembre 2026).
  tahaiDistance: "1,2 km",
  // Confirmado directamente por Kuhane (septiembre 2026, capturas de
  // Google/Tripadvisor/Booking). Cifra exacta de Booking confirmada por
  // captura de pantalla de Andre el 6/9/2026: "9,4 Fantástico · 121 comentarios".
  ratings: [
    { value: "9,4", scale: "/10", source: "Booking.com", count: 121 as number | string },
    { value: "4,7", scale: "/5", source: "Google", count: 15 as number | string },
    { value: "4,7", scale: "/5", source: "Tripadvisor", count: 7 as number | string },
  ],
  whatsapp: TODO_PLACEHOLDER,
  email: TODO_PLACEHOLDER,
  // Dirección real de Kuhane, confirmada por Andre vía link de Google Maps
  // (7/9/2026): coordenadas -27.1343082, -109.4244693.
  address: "Kahu Mahau s/n, Hanga Roa, Isla de Pascua, Chile",
};

// Coordenadas reales de Kuhane (ver nota de site.address arriba) — las usa
// UbicacionSection para el mapa incrustado y el link "Cómo llegar".
export const ubicacionGeo = {
  lat: -27.1343082,
  lng: -109.4244693,
};

export const nav = [
  { label: "Rapa Nui", href: "#rapa-nui" },
  { label: "Kuhane", href: "#kuhane" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Habitaciones", href: "#habitaciones" },
  { label: "Cultura", href: "#cultura" },
  { label: "Galería", href: "#galeria" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Ubicación", href: "#ubicacion" },
];

export const hero = {
  eyebrow: "KUHANE",
  place: "Rapa Nui",
  line1: "Llega como viajero.",
  line2: "Siéntete parte de la isla.",
  ctaPrimary: "RESERVAR",
  ctaSecondary: "DESCUBRIR KUHANE",
  videoSrc: "/media/hero-kuhane.mp4", // TODO: reemplazar cuando llegue el video real
  // Foto real enviada por Andre — cielo estrellado (vía láctea) sobre un
  // moai, Rapa Nui. Sirve de fondo mientras no haya video, y de poster del
  // video cuando lo haya.
  posterSrc: "/images/hero/hero-fallback.jpg",
};

export const rapaNui = {
  eyebrow: "El territorio",
  title: "El lugar más remoto habitado del mundo.",
  body: [
    "Rapa Nui está a miles de kilómetros de cualquier otra costa — una isla volcánica en medio del Pacífico, donde el paisaje, la historia y la cultura Rapanui siguen vivos en cada rincón.",
  ],
  // Foto aérea del cráter Rano Kau, enviada por Andre — sept. 2026.
  foto: "/images/rapa-nui/territorio.jpg",
};

export const kuhane = {
  eyebrow: "Kuhane",
  title: "Un lugar para sentirte en casa.",
  body: [
    "Kuhane significa alma, en lengua rapanui. Es también la forma en que recibimos a cada persona que llega: no como un huésped más, sino como alguien que se suma, por unos días, a la vida de la isla.",
    "Desde la llegada al aeropuerto hasta la última noche mirando el atardecer, acompañamos el viaje con la cercanía y el conocimiento de quienes viven aquí.",
  ],
  // Fuente: descripción propia de Kuhane en Booking.com ("Información de la
  // empresa", septiembre 2026). No se usa todavía en ningún componente.
  hosts:
    "Sofía Abarca, fundadora y anfitriona de Kuhane, es artista multidisciplinaria, escritora e investigadora de la historia y el arte del pueblo rapanui — siempre dispuesta a compartir la cultura y los misterios de Rapa Nui con quienes se hospedan.",
  // Collage de fotos reales de Kuhane (comedor, bungalow, habitación,
  // jardín) — reemplaza el placeholder que estaba vacío. Pedido de Andre
  // (6/9/2026): "podemos hacer un collage de kuhane".
  fotos: [
    "/images/experiencias/bienvenida.jpg",
    "/images/kuhane/kuhane_02.jpg",
    "/images/kuhane/kuhane_03.jpg",
    "/images/kuhane/kuhane_04.jpg",
  ],
};

export const experiencias = {
  eyebrow: "La experiencia",
  title: "Más que un hostal, la mejor forma de explorar la isla.",
  items: [
    {
      title: "Bienvenida en Kuhane",
      body: "Te recibimos en el aeropuerto y te acompañamos hasta Kuhane.",
      // Fotos reales enviadas por Andre — sept. 2026. Carrusel (como en
      // Habitaciones), con autoplay cada 2s (pedido de Andre: "3-4 fotos
      // por sección, que se vayan cambiando").
      // 7/9/2026: Andre mandó 4 fotos nuevas (jardín, terraza, desayuno
      // con fruta y el letrero de entrada) para REEMPLAZAR las 4 fotos
      // anteriores de esta sección, no para sumarlas — se quedaron las
      // dos series mezcladas (8 fotos) por error; corregido acá.
      fotos: [
        "/images/experiencias/bienvenida-05.jpg",
        "/images/experiencias/bienvenida-06.jpg",
        "/images/experiencias/bienvenida-07.jpg",
        "/images/experiencias/bienvenida-08.jpg",
      ],
    },
    {
      title: "Cultura viva",
      // Fuente: descripción propia de Kuhane en Booking.com ("Información
      // del alojamiento", septiembre 2026).
      body: "Café al atardecer, degustaciones culinarias, música suave y conversación frente al mar — un ritual diario en la terraza de Kuhane.",
      fotos: [
        "/images/experiencias/cultura-viva.jpg",
        "/images/experiencias/cultura-viva-02.jpg",
        "/images/experiencias/cultura-viva-03.jpg",
        "/images/experiencias/cultura-viva-04.jpg",
      ],
    },
    {
      title: "El atardecer",
      // Distancia confirmada: listado de Kuhane en Booking.com (ver
      // site.tahaiDistance).
      body: "A solo 1,2 km caminando está Ahu Tahai, uno de los sitios más fotografiados de Rapa Nui — el lugar ideal para ver caer el sol sobre el Pacífico.",
      // Fotos reales en Ahu Tahai enviadas por Andre — sept. 2026.
      fotos: [
        "/images/experiencias/atardecer.jpg",
        "/images/experiencias/atardecer-05.jpg",
        "/images/experiencias/atardecer-06.jpg",
        "/images/experiencias/atardecer-07.jpg",
      ],
    },
  ],
  // Pedido de Andre (6/9/2026, reiterado 7/9/2026): dejar claro que,
  // además del tour que arma Kuhane, conectan al huésped con otras
  // experiencias de la isla. Redacción ajustada a la frase exacta que
  // pidió: "Kuhane, además de ofrecer tours, te conecta con otras
  // aventuras...".
  extra:
    "Kuhane, además de ofrecer tours, te conecta con otras aventuras en la isla — como buceo y cabalgatas — para que armes tu viaje a medida.",
};

// Experiencias extra: no son parte del tour de Kuhane, sino contactos con
// otros prestadores de la isla.
// 7/9/2026: a pedido de Andre, se sacaron los íconos circulares por
// actividad y se reemplazaron por UN solo carrusel de fotos (rectangular,
// igual que los de Bienvenida/Cultura viva/El atardecer) que mezcla las
// fotos de buceo y cabalgatas — "que cambies los círculos por un
// carrusel de cabalgatas y buceo, las fotos que están dentro de esos
// círculos". El click abre el lightbox con todas las fotos.
// Fotos de buceo enviadas por Andre; Sofía tiene permiso para usarlas
// (confirmado 6/9/2026). A pedido de Andre no se menciona el nombre del
// contacto de buceo en el sitio.
export const otrasExperiencias = {
  eyebrow: "Además",
  title: "Otras experiencias en la isla",
  body: "Kuhane te conecta con otras aventuras.",
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

export const cultura = {
  eyebrow: "Cultura",
  title: "Rapa Nui, contada desde dentro.",
  body: "Historias, libros y música rapanui, a través del trabajo de más de 30 años de Sofía Abarca, fundadora de Kuhane.",
};

// Resumen para el home; el texto completo (trayectoria, maestros, discografía,
// libros, premios) vive en /sofia-abarca. Fuente: texto entregado por Kuhane,
// tomado casi textual de su propio material de prensa.
export const sofia = {
  eyebrow: "Fundadora de Kuhane",
  foto: "/images/sofia/sofia-abarca.jpg",
  title: "Sofía Abarca",
  subtitle: "Polímata de la memoria y el patrimonio Rapa Nui",
  summary:
    "Música, recopiladora e investigadora etnomusicológica, gestora cultural y escritora de Isla de Pascua, especialista en las expresiones culturales del pueblo rapanui — su música y cantos ancestrales, su artesanía y arte escultórico, y su patrimonio alimentario. Es reconocida como la única recopiladora contemporánea del patrimonio musical de Rapa Nui: más de 450 registros de oralidad y canto antiguo entregados a la Biblioteca Nacional de Chile, y 64 producciones discográficas editadas por su sello Nuku te Mango Rec., el primero de la isla.",
  stats: [
    { value: "30+", label: "años de trayectoria" },
    { value: "450+", label: "registros patrimoniales resguardados" },
    { value: "64", label: "producciones discográficas" },
  ],
  ctaLabel: "Conoce su historia",
  ctaHref: "/sofia-abarca",
};

export type Libro = {
  titulo: string;
  anio: string;
  descripcion: string;
  fragmento: string;
  enlace: string;
  portada?: string; // foto real de la tapa, cuando la tenemos
};

// Selección de la obra publicada de Sofía Abarca (fundadora de Kuhane).
// fragmento/enlace quedan sin confirmar — CulturaSection no los muestra hoy.
export const libros: Libro[] = [
  {
    titulo: "Ríu: El Canto Primal de Rapa Nui",
    // Fuente: catálogo fonográfico de Nuku te Mango Rec. (referencia
    // entregada por Kuhane, septiembre 2026) — confirma 2026 para la
    // edición de Rapa Nui Press.
    anio: "2015 (LOM Ediciones) · 2026 (Rapa Nui Press)",
    descripcion:
      "Álbum etnomusicológico y libro de recopilación de los cantos ancestrales Ríu, fruto de años de trabajo junto a los maestros Papá Kiko Paté y María Elena Hotus.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    portada: "/images/libros/riu.jpg",
  },
  {
    titulo: "Kai-kai Rapanui: Ideograma de Hilos",
    anio: "2006",
    descripcion:
      "Libro-objeto con CD que recopila los tejidos manuales ideogramáticos Kai-kai y sus recitaciones ancestrales Pata'u-ta'u, junto a la maestra Isabel Pakarati Tepano.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    portada: "/images/libros/kai-kai.jpg",
  },
  {
    titulo: "Manos del Alma: Arte Escultórico Rapanui",
    anio: "2015",
    descripcion:
      "Investigación sobre el tallado tradicional en madera rapanui, a través de la obra del maestro escultor Tomás Tuki Tepano.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    portada: "/images/libros/manos-del-alma.jpg",
  },
];

// ---------------------------------------------------------------------------
// Sofía Abarca — contenido extendido para /sofia-abarca únicamente.
// Fuente: documento "Referencia Sofía Abarca Fariña" entregado por Kuhane
// (septiembre 2026), texto casi textual de su material de prensa. La home
// usa solo `sofia` (resumen) y `libros` (selección de 3); estos arrays
// completos son exclusivos de la página de detalle.
// ---------------------------------------------------------------------------

// Selección completa de libros de autoría individual (la home solo usa una
// selección de 3, ver `libros` arriba).
export const sofiaLibros: Libro[] = [
  {
    titulo: "Ríu: El Canto Primal de Rapa Nui",
    anio: "2015 (LOM Ediciones) · 2026 (Rapa Nui Press)",
    descripcion:
      "Álbum etnomusicológico y libro de recopilación de los cantos ancestrales Ríu, fruto de años de trabajo junto a los maestros Papá Kiko Paté y María Elena Hotus.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    portada: "/images/libros/riu.jpg",
  },
  {
    titulo: "Kai-kai Rapanui: Ideograma de Hilos, Juego Ancestral",
    anio: "2006 (Fondart)",
    descripcion:
      "Libro-objeto con CD que recopila los tejidos manuales ideogramáticos Kai-kai y sus recitaciones ancestrales Pata'u-ta'u, junto a la maestra Isabel Pakarati Tepano.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    portada: "/images/libros/kai-kai.jpg",
  },
  {
    titulo: "Moana",
    anio: "2012 (Fondart)",
    descripcion:
      "Libro-objeto audible y exploratorio para niños, con 6 radioteatros y 12 canciones en dos CDs. Narra la amistad entre una niña rapanui y un niño continental, como un llamado a la integración y no discriminación infantil.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
  },
  {
    titulo: "Apuntes de Rapa Nui",
    anio: "2010",
    descripcion:
      "Escrito en español y ruso como material promocional de Rapa Nui en la gira presidencial de Michelle Bachelet: una mirada general a la historia y las formas de arte de la isla. Editado por ProChile.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
  },
  {
    titulo: "Manos del Alma: Arte Escultórico Rapanui",
    anio: "2013–2015 (Fondart · presentado en CEPAL)",
    descripcion:
      "Investigación sobre el tallado tradicional en madera rapanui, a través de la obra del maestro escultor Tomás Tuki Tepano.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    portada: "/images/libros/manos-del-alma.jpg",
  },
  {
    titulo: "Ka Kai Mo Haka Hangu: Patrimonio Alimentario y del Arte Culinario de Rapa Nui",
    anio: "2021 (Fondart)",
    descripcion:
      "Investigación sobre la historia de los alimentos rapanui, hilo conductor esencial de sus tradiciones culinarias, nutricionales y rituales.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
  },
  {
    titulo: "Tarai, Iconografía Escultórica de la Tradición Oral de Rapa Nui",
    anio: "2021–2022 (Fondart · Rapa Nui Press)",
    descripcion:
      "Junto al arqueólogo Sergio Rapu Haoa, propone 30 ejercicios comparativos entre las oralidades ancestrales rapanui y sus piezas iconográficas escultóricas.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
  },
];

// Mención breve de libros donde participó como co-autora (no llevan
// descripción larga en la página de detalle, solo título · año).
export const sofiaCoautorias = [
  { titulo: "El Diablo, Dios y la Profetiza", autor: "Nelson Castro", anio: "2006" },
  { titulo: "La Compañía Explotadora de Isla de Pascua", autor: "Claudio Cristino y Miguel Fuentes", anio: "2011" },
  { titulo: "Cultura y Patrimonio Inmaterial de Rapa Nui", autor: "Valentina Fajreldin (U. de Chile)", anio: "2016" },
  { titulo: "Historias de Nuestra Tierra", autor: "FUCOA — Ministerio de Agricultura", anio: "2019" },
  { titulo: "Versos del Sur", autor: "Ángela Parga y Pedro Favaron", anio: "2021" },
  { titulo: "Mujeres Indígenas y Agencias Cotidianas en Contextos de Colonialidad", autor: "Xochitl Inostroza y Ángela Parga", anio: "2021" },
];

export type SofiaArea = { titulo: string; descripcion: string };

// Áreas de inmersión e investigación cultural (2000–hoy).
export const sofiaAreas: SofiaArea[] = [
  {
    titulo: "Kai-kai",
    descripcion:
      "Inventario de 32 tejidos ideo-gramáticos manuales originales y sus arcaicas oratorias Pata'u-tau asociadas — narraciones que sólo existen en Rapa Nui.",
  },
  {
    titulo: "Ríu",
    descripcion:
      "Recopilación de más de 150 cantos ancestrales, identificando y clasificando 30 tipos según sus usos sociales y rituales (antes sólo se reconocían 9 variantes).",
  },
  {
    titulo: "Tarai",
    descripcion:
      "Tipificación de 33 arquetipos escultóricos del tallado tradicional en madera y su relación con las oralidades ancestrales que los justifican.",
  },
  {
    titulo: "Patrimonio alimentario",
    descripcion:
      "Identificación de los alimentos autóctonos isleños y sus usos culinarios, nutricionales, medicinales y rituales, junto a yerbateras, ancianos y cocineros contemporáneos.",
  },
  {
    titulo: "Himene",
    descripcion:
      "Puesta en valor de la música local a través de un estudio de grabación instalado en Rapa Nui desde el año 2000, y un sello discográfico con 64 discos editados.",
  },
  {
    titulo: "Literatura y difusión",
    descripcion:
      "Difusión permanente de la cultura rapanui a través de sus libros, frente a la transculturación de sus expresiones y la fragilización de la lengua.",
  },
  {
    titulo: "Hauha'a Tupuna",
    descripcion:
      "Circulación internacional de las expresiones identitarias de Rapa Nui a través de exposiciones, congresos y espectáculos en Chile continental, América, Europa y Asia.",
  },
];

export type SofiaMaestro = { nombre: string; descripcion: string };

export const sofiaMaestros: SofiaMaestro[] = [
  {
    nombre: "Luis Avaka Paoa (Papá Kiko)",
    descripcion:
      "Patriarca cultural de Rapa Nui (†2008). Acogió a Sofía como discípula desde el 2000 hasta su partida, realizando juntos múltiples registros de oralidades y cantos ancestrales.",
  },
  {
    nombre: "Isabel Pakarati Tepano",
    descripcion:
      "Maestra de Kai-kai, Tesoro Humano Vivo (2018) y Premio Nacional de Cultura Tradicional (2025). Revisó la recopilación de tejidos manuales realizada por Sofía en 2004.",
  },
  {
    nombre: "Tomás Tuki Tepano",
    descripcion:
      "Maestro escultor, distinguido con el Sello de Excelencia UNESCO (2012). Transmisor del Tarai en el que se basó el libro Manos del Alma.",
  },
  {
    nombre: "María Elena Hotus",
    descripcion:
      "Gran maestra del canto antiguo. De su trabajo conjunto con Sofía nacen los dos libros Ríu, el Canto Primal de Rapa Nui (LOM 2015 y Rapa Nui Press 2026).",
  },
  {
    nombre: "Sergio Rapu Haoa",
    descripcion:
      "Arqueólogo PhD. Discípula suya desde 2005; juntos montaron las exposiciones \"Mata ki te Mata\" (2018) y \"Tarai\" (2025).",
  },
  {
    nombre: "Sonia Haoa Cardinali",
    descripcion:
      "Arqueóloga PhD (Universidad de Uppsala), ha marcado más de 23.000 puntos de valor arqueológico en la isla — base del entendimiento toponímico de las recopilaciones de Sofía.",
  },
];

export type SofiaReconocimiento = { anio: string; descripcion: string };

export const sofiaReconocimientos: SofiaReconocimiento[] = [
  { anio: "1999", descripcion: "Beca DIRAC del Ministerio de Relaciones Exteriores de Chile; graba en Francia el disco \"Sacre Coeur\"." },
  { anio: "2008", descripcion: "Gana el concurso de composición étnica \"Música de Este Lado del Sur\" con el sencillo \"Moai\" (Sello Azul, SCD)." },
  { anio: "2012", descripcion: "Mujer del Año, Gobernación de Isla de Pascua." },
  { anio: "2016", descripcion: "Nominada a los Premios Pulsar por \"Ríu, el Canto Primal de Rapa Nui\" (LOM)." },
  { anio: "2018", descripcion: "Mujer del Año, Fundación Mujer Activa de Isla de Pascua." },
  { anio: "2020 · 2022 · 2024", descripcion: "Gana reiteradamente el concurso literario \"Historia de Nuestra Tierra\" (FUCOA, Ministerio de Agricultura)." },
  { anio: "2000–2024", descripcion: "Adjudicación reiterada de fondos FONDART (Ministerio de las Culturas, las Artes y el Patrimonio)." },
];

// Resumen del sello y estudio (el catálogo completo de discos, ~64 títulos,
// no se lista entero en la web — se destacan los hitos).
export const sofiaCatalogo = {
  eyebrow: "Sello Nuku te Mango Rec.",
  body: "En 2001 instaló el primer estudio de grabación profesional de Rapa Nui, terminando con la necesidad de que los artistas locales viajaran al continente a grabar. En 2016 fundó Nuku te Mango Rec., el primer sello discográfico de la isla. Entre 2001 y 2024 editó 64 producciones discográficas — desde la restauración de cintas de 1952 hasta los últimos maestros de la tradición oral — con más de 60.000 unidades físicas editadas.",
};

export const sofiaAsociatividades: string[] = [
  "Ministerio de las Culturas, las Artes y el Patrimonio (FONDART)",
  "Ministerio de Agricultura (FUCOA)",
  "Ministerio de Relaciones Exteriores (ProChile / Imagen País)",
  "Ministerio de Educación",
  "Fundación Mata ki te Rangi",
  "Rapa Nui Heritage Foundation",
  "Biblioteca Nacional de Chile",
  "Sociedad Chilena del Derecho de Autor (SCD)",
  "IMI — Gremio de Sellos Discográficos Independientes de Chile",
  "ARCHI — Asociación de Radiodifusores de Chile",
  "CEPAL",
  "UNESCO",
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
  tipo: "Habitación" | "Bungalow";
  nombre: string;
  capacidad: string;
  camas: string;
  bano: string;
  servicios: string[];
  caracteristicas: string;
  precio: string;
  fotos: string[];
};

// Confirmado directamente con Kuhane (septiembre 2026). Precios todavía sin
// confirmar en las 7 unidades -> "A consultar". Toallas y sábanas van
// incluidas sin cargo en las 7. Son unidades frente al mar (Calipso, Uta,
// Moana) — no se afirma "vista al mar" porque no está confirmada desde adentro.
export const habitaciones: Habitacion[] = [
  {
    tipo: "Habitación",
    nombre: "Mahatu",
    capacidad: "2 personas",
    camas: "1 cama de 2 plazas",
    bano: "Privado, con bañera",
    servicios: ["Agua caliente", "Ventilador", "Wifi", "Toallas y sábanas incluidas"],
    caracteristicas: "Ventanal hacia terraza y jardín",
    precio: "A consultar",
    fotos: ["/images/habitaciones/mahatu/mahatu_01.jpg", "/images/habitaciones/mahatu/mahatu_02.jpg"],
  },
  {
    tipo: "Habitación",
    nombre: "Vaiana",
    capacidad: "2 personas",
    camas: "1 cama de 2 plazas",
    bano: "Privado, con ducha",
    servicios: ["Agua caliente", "Ventilador", "Wifi", "Toallas y sábanas incluidas"],
    caracteristicas: "Ventanal hacia terraza y jardín",
    precio: "A consultar",
    fotos: ["/images/habitaciones/vaiana/vaiana_01.jpg", "/images/habitaciones/vaiana/vaiana_02.jpg"],
  },
  {
    tipo: "Habitación",
    nombre: "Ohana",
    capacidad: "6 personas",
    camas: "1 cama de 2 plazas + 2 literas (4 colchones de 1.5 plazas)",
    bano: "Privado, con ducha nueva, cómoda y grande",
    servicios: ["Agua caliente", "Wifi", "Toallas y sábanas incluidas"],
    caracteristicas: "2 ambientes conectados · ventanal hacia terraza y jardín",
    precio: "A consultar",
    fotos: [
      "/images/habitaciones/ohana/ohana_02.jpg",
      "/images/habitaciones/ohana/ohana_01.jpg",
      "/images/habitaciones/ohana/ohana_03.jpg",
      "/images/habitaciones/ohana/ohana_04.jpg",
    ],
  },
  {
    tipo: "Habitación",
    nombre: "Haré",
    capacidad: "3 personas",
    camas: "1 cama individual + 1 cama doble",
    bano: "Privado, con bañera",
    servicios: ["Ventilador", "Wifi", "Toallas y sábanas incluidas"],
    caracteristicas: "Vista a jardín y patio interior",
    precio: "A consultar",
    // hare_01 (screenshot con flechas/puntos de un carrusel web) y
    // hare_02/03 (muestran 2 camas individuales, no coincide con "1
    // individual + 1 doble") se sacaron por dudosas — ver nota a Andre
    // (7/9/2026). Quedan solo las 2 fotos confiables: la cama y el baño.
    fotos: ["/images/habitaciones/hare/hare_04.jpg", "/images/habitaciones/hare/hare_05.jpg"],
  },
  {
    tipo: "Bungalow",
    nombre: "Calipso",
    capacidad: "3 personas",
    camas: "1 cama King + 1 cama de 1.5 plazas",
    bano: "Privado, con bañera",
    servicios: ["Agua caliente", "Aire acondicionado", "Wifi", "Toallas y sábanas incluidas"],
    caracteristicas: "Bungalow frente al mar, con terraza",
    precio: "A consultar",
    fotos: ["/images/habitaciones/calipso/calipso_01.jpg", "/images/habitaciones/calipso/calipso_02.jpg"],
  },
  {
    tipo: "Bungalow",
    nombre: "Uta",
    capacidad: "3 personas",
    camas: "1 cama King + 1 cama de 1.5 plazas",
    bano: "Privado, con bañera",
    servicios: ["Agua caliente", "Aire acondicionado", "Wifi", "Toallas y sábanas incluidas"],
    caracteristicas: "Bungalow frente al mar, con terraza",
    precio: "A consultar",
    fotos: ["/images/habitaciones/uta/uta_01.jpg", "/images/habitaciones/uta/uta_02.jpg"],
  },
  {
    tipo: "Bungalow",
    nombre: "Moana",
    capacidad: "4 personas",
    camas: "1 cama de 2 plazas + cama nido (2 colchones de 1.5 plazas)",
    bano: "Privado, con bañera",
    servicios: ["Agua caliente", "Aire acondicionado", "Wifi", "Toallas y sábanas incluidas"],
    caracteristicas: "Bungalow frente al mar, con terraza",
    precio: "A consultar",
    fotos: ["/images/habitaciones/moana/moana_02.jpg", "/images/habitaciones/moana/moana_01.jpg"],
  },
];

export const habitacionesIntro = {
  capacidadTotal: 23,
};

export const huespedes = {
  eyebrow: "Comunidad",
  title: "Rapa Nui a través de nuestros huéspedes",
  cta: "Comparte tu Rapa Nui",
  body: "Próximamente vas a poder compartir tus fotos, videos e historias directamente acá.",
};

export const galeria = {
  eyebrow: "Galería",
  title: "La isla, en imágenes.",
  // 1–17: fotos del hostal. 18–21: paisajes reales de Rapa Nui enviados por
  // Andre (sept. 2026) — arcoíris, cielo estrellado y atardeceres de la isla.
  fotos: Array.from({ length: 34 }, (_, i) => `/images/galeria/general_${String(i + 1).padStart(2, "0")}.jpg`),
};

export type Resena = { texto: string; nombre: string; fuente: string };

export const resenas = {
  eyebrow: "Lo que dicen",
  title: "Voces de quienes ya estuvieron acá.",
  // Selección de reseñas reales (Google y Tripadvisor), pegadas por Andre
  // el 6/9/2026. Se dejaron fuera reseñas mixtas/negativas y la del anillo
  // perdido (no es representativa como testimonio). Pequeños errores de
  // tipeo del original se corrigieron (tildes, "suoer" -> "súper"); el
  // contenido no se alteró.
  testimonios: [
    {
      texto: "Fuimos afortunadas en llegar a un hostal tan acogedor. Sofía hizo de nuestra estadía algo muy especial. Pudimos arrendar auto y recorrer gran parte de la isla.",
      nombre: "Z51LEcarolinap",
      fuente: "Tripadvisor",
    },
    {
      texto: "La anfitriona, Sofía, es súper amable, simpática, artista y escritora experta en cultura Rapa Nui. Su pareja, José, también es muy atento: nos recibieron con un city tour al llegar.",
      nombre: "auriissr",
      fuente: "Tripadvisor",
    },
    {
      texto: "Estuvimos 2 semanas hospedándonos en Kuhane y quedamos maravillados con la tranquilidad y belleza del lugar. Lo mejor de nuestra experiencia fue la hospitalidad de su anfitriona Sofía.",
      nombre: "Cristian G.",
      fuente: "Tripadvisor",
    },
    {
      texto: "KUHANE... lugar mágico, lo pasé increíble, una atención personalizada de Sofía, José y Thomas. Un lugar agradable, muy limpio, cómodo y sobretodo muy tranquilo.",
      nombre: "Susana Fuentes",
      fuente: "Google",
    },
    {
      texto: "Un lugar acogedor, pulcro y confortable en Rapa Nui. La atención de Sofía Abarca te hace sentir en casa y como en familia.",
      nombre: "Daniel Rivas",
      fuente: "Google",
    },
    {
      texto: "Súper bueno el recibimiento, nos esperaron con collar de flores y cuando llegamos al hostal nos dieron jugo de guayaba. Las habitaciones están súper cómodas.",
      nombre: "Alisson González",
      fuente: "Google",
    },
    // Reseñas de Booking.com pegadas por Andre el 6/9/2026 (de un listado
    // de más de 121). Se eligieron 3 que suman un ángulo que las anteriores
    // no cubrían: el desayuno.
    {
      texto: "El desayuno fue muy rico, variado, acogedor. La recepción por parte de Sofía, la administradora, es muy cálida.",
      nombre: "Ivan",
      fuente: "Booking.com",
    },
    {
      texto: "Desayuno muy abundante. Lugar muy hermoso, muy tranquilo.",
      nombre: "Liliana",
      fuente: "Booking.com",
    },
    {
      texto: "La tranquilidad del sector, la comodidad de la habitación y sus instalaciones, el rico desayuno que servían día a día y la amabilidad y buena voluntad de los anfitriones.",
      nombre: "Joselin",
      fuente: "Booking.com",
    },
  ] as Resena[],
};

export const cta = {
  title: "Ven a vivir tu Rapa Nui.",
  body: "Escríbenos y te ayudamos a planear tu estadía en Kuhane — con traslado al aeropuerto y de vuelta incluido en tu reserva.",
  ctaPrimary: "RESERVAR",
  // Ahu Tongariki al atardecer, foto real enviada por Andre — sept. 2026.
  foto: "/images/cta/reserva.jpg",
};

// Panel de disponibilidad (fechas + huéspedes + código promocional).
// Recuperado de un desarrollo anterior ("kuhane-web-vuelos", ago-sept
// 2026) que Andre tenía guardado y que no había llegado a esta copia del
// proyecto — confirmado con Andre (7/9/2026). Al confirmar, abre el
// sistema de reservas de Kuhane (Nuku OS) en una pestaña nueva con esos
// datos como parámetros. Nuku OS está en fase de pruebas (sin cobro
// automático todavía), por eso el mensaje de ayuda aclara que se confirma
// por WhatsApp o email antes de cobrar.
export const reserva = {
  nukuOsUrl: "https://nuku-os-app.vercel.app/reservar",
  // Cuenta real de Kuhane Etno-Hostal en Supabase/Nuku OS — confirmada
  // directo en la base de datos (9/9/2026), no inventada. La usa el campo
  // de código promocional para validar en vivo contra /api/public/promo.
  nukuOsAccountId: "057a625c-9036-4b1d-957b-8c436f71b4cd",
  eyebrow: "Disponibilidad",
  helper:
    "Elige tus fechas y cantidad de huéspedes. Te lleva al sistema de reservas de Kuhane — hoy en fase de pruebas, así que confirmamos contigo por WhatsApp o email antes de cobrar.",
  dates: "Fechas",
  guests: "Huéspedes",
  guestSingular: "persona",
  guestPlural: "personas",
  departure: "Salida",
  arrivalDeparture: "Llegada — Salida",
  checkAvailabilityAria: "Ver disponibilidad",
  fewerGuestsAria: "Menos huéspedes",
  moreGuestsAria: "Más huéspedes",
  promoQuestion: "¿Código promo?",
  promoPlaceholder: "Código promocional",
  promoChecking: "Comprobando…",
  promoValid: "Código válido — se aplica al confirmar tu reserva.",
  promoInvalid: "Ese código no es válido o ya venció.",
  flightsCta: "Buscar vuelos a Isla de Pascua",
  flightsHelper:
    "Salida sugerida desde Santiago — cambia el origen en el buscador si vuelas desde otra ciudad.",
  monthsShort: [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic",
  ],
};

// Confirmado por Kuhane (septiembre 2026): la reserva incluye el traslado
// de ida (aeropuerto -> Kuhane) y de vuelta (Kuhane -> aeropuerto tras el
// check-out), sin costo adicional.
export const aeropuerto = {
  title: "Tu llegada y tu vuelta, acompañadas.",
  body: "El traslado desde el aeropuerto hasta Kuhane, y de regreso al aeropuerto después del check-out, está incluido en tu reserva — sin costo adicional.",
  // Foto real de Kuhane enviada por Andre — sept. 2026.
  foto: "/images/experiencias/aeropuerto.jpg",
};

export const footer = {
  tagline: "Kuhane Etno-Hostal — Hanga Roa, Rapa Nui",
};

// Textos del botón flotante de WhatsApp (ver components/ui/WhatsAppButton).
// Recuperado del desarrollo anterior del sitio — se adaptó a tuteo (era
// voseo en su versión original con i18n).
export const whatsappWidget = {
  heading: "Escríbenos por WhatsApp",
  subtext: "Déjanos tu número y te contactamos, o escríbenos directo ahora.",
  phonePlaceholder: "Tu número (opcional)",
  continueBtn: "Continuar a WhatsApp",
  sending: "Un momento…",
  skipBtn: "Escribir directo",
  openAria: "Abrir WhatsApp",
  chatMessage: "Hola, quiero consultar por disponibilidad en Kuhane.",
};

// Dirección/mapa real, confirmado por Andre (7/9/2026) — ver ubicacionGeo
// y site.address más arriba.
export const ubicacion = {
  eyebrow: "Cómo llegar",
  title: "Encuéntranos en Hanga Roa.",
  body: "Kuhane queda a pasos del centro de Hanga Roa, cerca de Ahu Tahai — y si llegas en avión, el traslado desde el aeropuerto ya está incluido en tu reserva.",
  directionsCta: "Cómo llegar (Google Maps)",
};
