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
  // Actualizado a pedido de Sofía (23/9/2026, confirmado por Andre)
  // reemplaza el dato anterior de Booking.com (1,2 km).
  tahaiDistance: "200 m",
  // Confirmado directamente por Kuhane (septiembre 2026, capturas de
  // Google/Tripadvisor/Booking). Cifra exacta de Booking confirmada por
  // captura de pantalla de Andre el 6/9/2026: "9,4 Fantástico · 121 comentarios".
  ratings: [
    { value: "9,4", scale: "/10", source: "Booking.com", count: 121 as number | string },
    { value: "4,7", scale: "/5", source: "Google", count: 15 as number | string },
    { value: "4,7", scale: "/5", source: "Tripadvisor", count: 7 as number | string },
  ],
  // Número temporal mientras se define el definitivo — pedido de Andre
  // (22/9/2026): "el numero mientras tanto sera este +56 9 7766 8288".
  whatsapp: "+56 9 7766 8288",
  // Correo del dominio propio, ya activo y recibiendo/enviando por Gmail
  // (contacto@kuhanehostal.com) — pedido de Andre (22/9/2026): "el correo
  // sera el de @kuhanehostal.com".
  email: "contacto@kuhanehostal.com",
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

// Los href llevan "/" adelante (no solo "#seccion") a propósito — pedido de
// Andre (22/9/2026): "los botones de arriba no funcionan cuando estas
// dentro de la pagina de sofia". Un link tipo "#rapa-nui" solo funciona si
// ya estás en la home (busca esa sección en la página actual); con "/#rapa-nui"
// el navegador va primero a la home y ahí salta a la sección, así que
// también funciona desde /sofia-abarca o cualquier otra página del sitio.
export const nav = [
  { label: "Rapa Nui", href: "/#rapa-nui" },
  { label: "Kuhane", href: "/#kuhane" },
  { label: "Experiencias", href: "/#experiencias" },
  { label: "Habitaciones", href: "/#habitaciones" },
  { label: "Cultura", href: "/#cultura" },
  { label: "Galería", href: "/#galeria" },
  { label: "Reseñas", href: "/#resenas" },
  { label: "Ubicación", href: "/#ubicacion" },
];

export const hero = {
  eyebrow: "KUHANE",
  place: "Rapa Nui",
  line1: "Llega como viajero.",
  line2: "Conéctate y siéntete parte de la isla.",
  ctaPrimary: "RESERVAR",
  ctaSecondary: "DESCUBRIR KUHANE",
  // Video real enviado por Andre (7/9/2026), reemplaza el fallback estático.
  videoSrc: "/media/hero-kuhane.mp4",
  // Foto real enviada por Andre — cielo estrellado (vía láctea) sobre un
  // moai, Rapa Nui. Sirve de fondo mientras no haya video, y de poster del
  // video cuando lo haya.
  posterSrc: "/images/hero/hero-fallback.jpg",
  posterAlt: "Vía láctea sobre un moai, Rapa Nui",
};

export const rapaNui = {
  eyebrow: "El territorio",
  // Texto actualizado a pedido de Sofía (23/9/2026).
  title: "El lugar habitado más remoto del mundo.",
  body: [
    "Ubicada al centro del Pacífico Sur, Rapa Nui está a casi 4.000 kilómetros de Chile continental y equidistante de Tahití. Isla de clima subtropical, con paisajes espectaculares, una historia de grandeza y resiliencia, y una inigualable cultura viva.",
  ],
  // Foto aérea del cráter Rano Kau, enviada por Andre — sept. 2026.
  foto: "/images/rapa-nui/territorio.jpg",
  fotoAlt: "Vista aérea del cráter Rano Kau, Rapa Nui",
};

export const kuhane = {
  eyebrow: "Kuhane",
  title: "Un lugar para sentirte en casa.",
  // Texto actualizado a pedido de Sofía (23/9/2026).
  body: [
    "Kuhane, en lengua rapanui, significa alma. Pensada para ayudarte a conectar con lo mejor de ti, será también tu hogar por unos días.",
    "Desde que bajas de tu vuelo, en cada amanecer y atardecer, te acompañamos con información práctica y conocimiento cultural para ayudarte a construir una experiencia memorable.",
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
  // Texto actualizado a pedido de Sofía (23/9/2026).
  title: "No solo un hostal: la mejor forma de explorar y comprender Rapa Nui y su cultura.",
  items: [
    {
      title: "Bienvenidos a Kuhane",
      body: "A tu llegada, te recibimos con collares de flores de la isla y te traemos a casa.",
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
      // Texto actualizado a pedido de Sofía (23/9/2026).
      body: "Sabores, colores y aromas insulares, música suave, conversaciones frente al mar y mucha cultura: son el ritual diario en la terraza de Kuhane.",
      fotos: [
        "/images/experiencias/cultura-viva.jpg",
        "/images/experiencias/cultura-viva-02.jpg",
        "/images/experiencias/cultura-viva-03.jpg",
        "/images/experiencias/cultura-viva-04.jpg",
      ],
    },
    {
      title: "El atardecer",
      // Distancias actualizadas a pedido de Sofía (23/9/2026, confirmado
      // por Andre "es tal cual lo dice sofia") — reemplaza el dato anterior
      // (1,2 km, sacado de Booking.com) por las distancias reales a Tahai
      // y Akapu que dio Sofía.
      body: "A 200 metros del Complejo Ceremonial Tahai y a solo 20 metros de la Plataforma Sagrada de Akapu, tendrás el privilegio de estar en el punto más cercano a los más bellos atardeceres.",
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
  // Texto actualizado a pedido de Sofía (23/9/2026): amplía la lista de
  // servicios con los que Kuhane conecta al huésped (antes solo mencionaba
  // buceo y cabalgatas). Pendiente de confirmar con Andre que los rubros
  // nuevos (navegación, observación astronómica, shows culturales,
  // canotaje, masajes, etc.) son contactos reales y activos.
  extra:
    "Kuhane pone a tu disposición sus tours y te conecta con servicios de cabalgatas, buceo, navegación, observación astronómica, caminatas, galerías de arte, shows culturales, restaurantes y bares, canotaje, sesiones fotográficas y masajes — y te regala una inducción cultural para comprender mejor el lugar que visitas.",
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

// Tours Kuhane — información enviada por Andre (22–23/9/2026).
// Confirmado: 4 tours privados (máx. 4 personas) + 2 tours grupales (máx.
// 14 personas en minibús, guía español-inglés). Decisión final de Andre
// (23/9/2026): ningún tour muestra precio en la página — el valor se
// calcula y se muestra recién en el total a pagar en el hostal, después
// de la reserva, con exactamente dos niveles (Chile/Latinoamérica y el
// resto). Acá NO se menciona esa diferenciación — solo "el valor se
// confirma en tu reserva".
// paradas: lista real de itinerario, mandada por Andre (23/9/2026). Además
// de la lista, cada tour tiene un sitio destacado (el de la foto que mandó
// Andre) con una historia investigada (fuentes reales, no inventadas — ver
// el comentario junto a cada `historia`).
export type TourParada = string;

export type Tour = {
  slug: string;
  nombre: string;
  // string (no unión literal) para que en.ts pueda traducir la etiqueta
  // ("Private tour" / "Group tour") sin pelear con el tipo.
  modalidad: string;
  duracion?: "Full day" | "Half day";
  maxPersonas: number;
  paradas: TourParada[];
  // Bajada general del tour (solo los 2 tours grupales la tienen por ahora
  // — texto mandado por Andre 23/9/2026 — los 4 tours privados no tienen
  // una bajada propia, solo la lista de paradas).
  descripcion?: string;
  parada: string;
  historia: string;
  foto: string;
  fotoAlt: string;
};

export const toursPrivados: Tour[] = [
  {
    slug: "full-day-rapa-nui",
    nombre: "Full Day Rapa Nui",
    modalidad: "Tour privado",
    duracion: "Full day",
    maxPersonas: 4,
    paradas: [
      "Mirador hacia el pueblo de Hanga Roa",
      "Mirador del cráter del volcán Rano Kau",
      "Ciudadela ceremonial de Orongo",
      "Muros de corte perfecto del altar de Vinapu",
      "Centro ceremonial y caleta de Vaihu",
      "Plataforma ceremonial Ahu Akahanga",
      "Cantera de los moai en el volcán Rano Raraku",
      "Plataforma de Tongariki, con 15 moai",
    ],
    parada: "Rano Raraku",
    // Fuente: Wikipedia, "Rano Raraku" (en.wikipedia.org/wiki/Rano_Raraku),
    // consultado 23/9/2026.
    historia:
      "El cráter que fue cantera de los moai: durante unos 500 años, hasta comienzos del 1700, de aquí se extrajo la piedra volcánica de cerca del 95% de las estatuas de la isla. Hoy quedan 887 moai en distintas etapas de talla, muchos semienterrados hasta los hombros — entre ellos el más grande jamás tallado, de 21,6 metros.",
    foto: "/images/tours/rano-raraku_full-day.png",
    fotoAlt: "Rano Raraku, en el recorrido Full Day Rapa Nui",
  },
  {
    slug: "half-day-punta-oeste",
    nombre: "Half Day Punta Oeste",
    modalidad: "Tour privado",
    duracion: "Half day",
    maxPersonas: 4,
    paradas: [
      "Sector de la cueva Ana Kai Tangata y alrededores",
      "Mirador hacia el pueblo de Hanga Roa",
      "Mirador del cráter del volcán Rano Kau",
      "Ciudadela ceremonial de Orongo",
      "Muros de corte perfecto del altar de Vinapu",
      "Centro ceremonial y caleta de Vaihu",
    ],
    parada: "Orongo",
    // Fuente: Wikipedia, "Orongo" (en.wikipedia.org/wiki/Orongo), consultado
    // 23/9/2026.
    historia:
      "Aldea ceremonial en el borde del volcán Rano Kau, centro del culto al hombre-pájaro (tangata manu) entre los siglos XVIII y XIX. Cada año, los competidores bajaban el acantilado y cruzaban el mar hasta el islote Motu Nui para traer el primer huevo de manutara — una carrera de alto riesgo que definía la autoridad del año siguiente en la isla.",
    foto: "/images/tours/orongo_punta-oeste.png",
    fotoAlt: "Orongo, en el recorrido Half Day Punta Oeste",
  },
  {
    slug: "half-day-costa-sur",
    nombre: "Half Day Costa Sur",
    modalidad: "Tour privado",
    duracion: "Half day",
    maxPersonas: 4,
    paradas: [
      "Plataforma ceremonial Ahu Akahanga",
      "Cantera de los moai en el volcán Rano Raraku",
      "Plataforma de Tongariki, con 15 moai",
      "Te Pito Kura, el ombligo del mundo",
      "Sector de petroglifos de Papa Vaka",
      "Plataforma Ahu Nau Nau, en la playa de Anakena",
    ],
    parada: "Ahu Tongariki",
    // Fuente: Wikipedia, "Ahu Tongariki" (en.wikipedia.org/wiki/Ahu_Tongariki),
    // consultado 23/9/2026.
    historia:
      "La plataforma ceremonial más grande de Rapa Nui, con 15 moai en fila frente al mar. Fue derribada durante las guerras internas y arrasada por el tsunami de 1960; recién se restauró en los años 90, en un trabajo de cinco años liderado por los arqueólogos Claudio Cristino y Patricia Vargas, con apoyo del gobierno de Chile y de la empresa japonesa Tadano.",
    foto: "/images/tours/ahu-tongariki_costa-sur.jpg",
    fotoAlt: "Ahu Tongariki, en el recorrido Half Day Costa Sur",
  },
  {
    slug: "half-day-isla-centro",
    nombre: "Half Day Isla Centro",
    modalidad: "Tour privado",
    duracion: "Half day",
    maxPersonas: 4,
    paradas: [
      "Muros de corte perfecto del altar de Vinapu",
      "Centro ceremonial y caleta de Vaihu",
      "Ahu Huri a Urenga, con el moai de cuatro manos",
      "Puna Pau, la cantera de los sombreros (pukao) de los moai",
      "Centro ceremonial Ahu Akivi, con 7 moai",
      "Complejo ceremonial de Tahai",
    ],
    parada: "Ahu Akivi",
    // Fuente: Wikipedia, "Ahu Akivi" (en.wikipedia.org/wiki/Ahu_Akivi),
    // consultado 23/9/2026.
    historia:
      "Siete moai idénticos, únicos en mirar hacia el mar en vez de hacia un poblado. Su alineación es tan precisa que miran de frente la puesta de sol del equinoccio de primavera. Lo restauraron en 1960 el arqueólogo estadounidense William Mulloy y el chileno Gonzalo Figueroa.",
    foto: "/images/tours/ahu-akivi_isla-centro.png",
    fotoAlt: "Ahu Akivi, en el recorrido Half Day Isla Centro",
  },
];

export const toursGrupales: Tour[] = [
  {
    slug: "fullday-dream",
    nombre: "Fullday Dream",
    modalidad: "Tour grupal",
    maxPersonas: 14,
    // Bajada mandada por Andre (23/9/2026).
    descripcion:
      "Conocerás gran parte de la isla con la narrativa histórica del culto al moai y visitarás réplicas de aldeas. Disfrutarás de la playa de Anakena, hito de gran importancia al que llegaron los primeros polinesios.",
    paradas: ["Vaihu", "Akahanga", "Rano Raraku", "Ahu Tongariki", "Te Pito Kura", "Ahu Nau Nau", "Anakena"],
    parada: "Ahu Nau Nau, Anakena",
    // Fuente: Wikipedia, "Anakena" (en.wikipedia.org/wiki/Anakena),
    // consultado 23/9/2026.
    historia:
      "La playa de arena blanca donde, según la tradición rapanui, desembarcó Hotu Matu'a, el primer poblador de la isla. Ahí está el Ahu Nau Nau, con moai restaurados — una de las postales más fotografiadas de Rapa Nui.",
    foto: "/images/tours/ahu-nau-nau_dream.png",
    fotoAlt: "Ahu Nau Nau, en el tour grupal Fullday Dream",
  },
  {
    slug: "fullday-explore",
    nombre: "Fullday Explore",
    modalidad: "Tour grupal",
    maxPersonas: 14,
    // Bajada mandada por Andre (23/9/2026).
    descripcion:
      "Conocerás una cara diferente de la isla, explorando sitios arqueológicos vinculados a la vida cotidiana, el desarrollo cultural y las antiguas tradiciones de Rapa Nui. La ciudadela ceremonial de Orongo, donde se realizaba la famosa competencia tangata manu (hombre-pájaro), el cráter de Rano Kau y otros lugares de gran importancia histórica y arqueológica.",
    paradas: ["Rano Kau", "Orongo", "Vinapu", "Ahu Akivi", "Puna Pau", "Ahu Huri a Urenga", "Tahai"],
    parada: "Tahai",
    // Fuente: Wikipedia, "Tahai" (en.wikipedia.org/wiki/Tahai). Distancia
    // corregida (23/9/2026) para que coincida con la de experiencias.items
    // ("El atardecer") — ver esa nota: Sofía confirmó 200 m, reemplazando el
    // dato anterior de Booking.com (1,2 km).
    historia:
      "Conjunto ceremonial a solo 200 metros caminando desde Hanga Roa, restaurado por el arqueólogo William Mulloy en 1974. Reúne tres plataformas alineadas de norte a sur y, por su cercanía al pueblo, es uno de los lugares favoritos de la isla para ver el atardecer.",
    foto: "/images/tours/tahai_explore.jpg",
    fotoAlt: "Tahai, en el tour grupal Fullday Explore",
  },
];

// Todos los tours juntos — para buscar por slug (ej. desde el parámetro
// ?tour= que llega desde /tours hasta el panel de reserva).
export const toursTodos: Tour[] = [...toursPrivados, ...toursGrupales];

export const toursIntro = {
  eyebrow: "Experiencias Kuhane",
  // Texto actualizado a pedido de Andre (23/9/2026).
  title: "Tours privados o grupales por Rapa Nui.",
  body: "Nuestros tours entretenidos y llenos de contenido son un servicio extra, que puedes agregar a tu reserva.",
  privadosTitle: "Tours privados",
  privadosBody: "Grupos reducidos, de hasta 4 personas.",
  grupalesTitle: "Tours grupales",
  grupalesBody: "Hasta 14 personas en minibús, con guía en español e inglés.",
  agregarCta: "Agregar a la reserva",
  consultarNota: "El valor de este tour se confirma en tu reserva y se incluye en el total a pagar en el hostal.",
  paradasPendientes: "Detalle del recorrido — próximamente.",
  volver: "← Volver a Kuhane",
};

// Tarjeta de enlace desde la sección Experiencias del inicio hacia /tours.
export const experienciasKuhaneTours = {
  eyebrow: "Tours guiados",
  title: "Experiencias Kuhane",
  body: "Tours privados y tours grupales armados por Kuhane para recorrer la isla con guía, sin apuro. El valor de cada tour queda en tu reserva, no en la página.",
  cta: "Ver tours",
  foto: "/images/tours/rano-raraku_full-day.png",
  fotoAlt: "Rano Raraku, uno de los recorridos de Kuhane Tours",
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
  fotoAlt: "Sofía Abarca, fundadora de Kuhane",
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
    portada: "/images/libros/moana.jpg",
  },
  {
    titulo: "Apuntes de Rapa Nui",
    anio: "2010",
    descripcion:
      "Escrito en español y ruso como material promocional de Rapa Nui en la gira presidencial de Michelle Bachelet: una mirada general a la historia y las formas de arte de la isla. Editado por ProChile.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    // Aún sin foto de portada — se muestra el logo de Kuhane como reemplazo
    // (ver render en app/sofia-abarca/page.tsx, que lo dibuja distinto a
    // una portada real para que no se vea como una foto recortada).
    portada: "/logo/kuhane-wordmark-web.png",
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
    portada: "/images/libros/ka-kai-mo-haka-hangu.jpg",
  },
  {
    titulo: "Tarai, Iconografía Escultórica de la Tradición Oral de Rapa Nui",
    anio: "2021–2022 (Fondart · Rapa Nui Press)",
    descripcion:
      "Junto al arqueólogo Sergio Rapu Haoa, propone 30 ejercicios comparativos entre las oralidades ancestrales rapanui y sus piezas iconográficas escultóricas.",
    fragmento: TODO_PLACEHOLDER,
    enlace: TODO_PLACEHOLDER,
    // Aún sin foto de portada — logo de Kuhane como reemplazo (ver nota arriba).
    portada: "/logo/kuhane-wordmark-web.png",
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

export type SofiaMaestro = { nombre: string; descripcion: string; foto?: string };

export const sofiaMaestros: SofiaMaestro[] = [
  {
    nombre: "Luis Avaka Paoa (Papá Kiko)",
    descripcion:
      "Patriarca cultural de Rapa Nui (†2008). Acogió a Sofía como discípula desde el 2000 hasta su partida, realizando juntos múltiples registros de oralidades y cantos ancestrales.",
    foto: "/images/maestros/papa-kiko-avaka.jpg",
  },
  {
    nombre: "Isabel Pakarati Tepano",
    descripcion:
      "Maestra de Kai-kai, Tesoro Humano Vivo (2018) y Premio Nacional de Cultura Tradicional (2025). Revisó la recopilación de tejidos manuales realizada por Sofía en 2004.",
    foto: "/images/maestros/isabel-pakarati-tepano.jpg",
  },
  {
    nombre: "Tomás Tuki Tepano",
    descripcion:
      "Maestro escultor, distinguido con el Sello de Excelencia UNESCO (2012). Transmisor del Tarai en el que se basó el libro Manos del Alma.",
    foto: "/images/maestros/tomas-tuki-tepano.jpg",
  },
  {
    nombre: "María Elena Hotus",
    descripcion:
      "Gran maestra del canto antiguo. De su trabajo conjunto con Sofía nacen los dos libros Ríu, el Canto Primal de Rapa Nui (LOM 2015 y Rapa Nui Press 2026).",
    foto: "/images/maestros/maria-elena-hotus.jpg",
  },
  {
    nombre: "Sergio Rapu Haoa",
    descripcion:
      "Arqueólogo PhD. Discípula suya desde 2005; juntos montaron las exposiciones \"Mata ki te Mata\" (2018) y \"Tarai\" (2025).",
    foto: "/images/maestros/sergio-rapu-haoa.jpg",
  },
  {
    nombre: "Sonia Haoa Cardinali",
    descripcion:
      "Arqueóloga PhD (Universidad de Uppsala), ha marcado más de 23.000 puntos de valor arqueológico en la isla — base del entendimiento toponímico de las recopilaciones de Sofía.",
    // TODO_PLACEHOLDER: aún no tenemos foto de Sonia Haoa Cardinali — mientras
    // llega, se muestra uno de los motivos rapanui del logo como respaldo.
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
  // Texto libre, no se usa para filtrar (ver tipoCodigo abajo) — así puede
  // traducirse en lib/content/en.ts sin romper nada.
  tipo: string;
  // Código estable (no se traduce) para poder agrupar/filtrar habitaciones
  // vs. bungalows sin depender del texto de `tipo`, que sí se traduce en
  // lib/content/en.ts. Agregado al construir el switch ES/EN (7/9/2026).
  tipoCodigo: "habitacion" | "bungalow";
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
    tipoCodigo: "habitacion",
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
    tipoCodigo: "habitacion",
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
    tipoCodigo: "habitacion",
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
    tipoCodigo: "habitacion",
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
    tipoCodigo: "bungalow",
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
    tipoCodigo: "bungalow",
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
    tipoCodigo: "bungalow",
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
  title: "Cada habitación, parte de la experiencia.",
  // El componente arma la frase completa como
  // `${bodyPrefix} ${capacidadTotal} ${bodySuffix}` para poder traducir el
  // texto sin tocar el número real de personas.
  bodyPrefix: "4 habitaciones y 3 bungalows frente al mar — capacidad total para",
  capacidadTotal: 23,
  bodySuffix: "personas.",
  // Pedido de Andre (23/9/2026): que quede explícito en habitaciones y en
  // reserva que el desayuno continental y el traslado aeropuerto-hostal-
  // aeropuerto van incluidos, sin costo adicional.
  incluye: "El desayuno continental y el traslado desde y hacia el aeropuerto están incluidos en tu estadía.",
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

// Video de Kuhane (jardines, bungalows, atardecer) enviado por Andre —
// sept. 2026, versión editada final. Poster extraído del propio video
// (fotograma del atardecer con moai sobre el mar) para que siempre haya
// una imagen de respaldo real.
export const kuhaneEspera = {
  title: "Kuhane te espera.",
  body: "En el corazón de Hanga Roa, con el jardín, el atardecer y la casa siempre listos para recibirte.",
  videoSrc: "/media/kuhane-exterior.mp4",
  posterSrc: "/images/kuhane/kuhane-exterior-poster.jpg",
  posterAlt: "Moai y atardecer sobre el mar, Rapa Nui",
};

export const cta = {
  title: "Ven a vivir tu Rapa Nui.",
  body: "Escríbenos y te ayudamos a planear tu estadía en Kuhane — con traslado al aeropuerto y de vuelta incluido en tu reserva.",
  ctaPrimary: "RESERVAR",
  // Ahu Tongariki al atardecer, foto real enviada por Andre — sept. 2026.
  foto: "/images/cta/reserva.jpg",
  fotoAlt: "Ahu Tongariki al atardecer, Rapa Nui",
};

// Panel de disponibilidad (fechas + huéspedes + código promocional).
// Recuperado de un desarrollo anterior ("kuhane-web-vuelos", ago-sept
// 2026) que Andre tenía guardado y que no había llegado a esta copia del
// proyecto — confirmado con Andre (7/9/2026). Al confirmar, abre el
// sistema de reservas de Kuhane (Nuku OS) en una pestaña nueva con esos
// datos como parámetros. La reserva y el correo de confirmación son
// reales y efectivos desde que se completan (no es una fase de pruebas)
// — confirmado por Andre (22/9/2026), que pidió sacar todo el lenguaje de
// "fase de pruebas"/"periodo de prueba". El pago no se procesa online: se
// hace directo en el hostal (ver paymentNote).
export const reserva = {
  nukuOsUrl: "https://nuku-os-app.vercel.app/reservar",
  // Cuenta real de Kuhane Etno-Hostal en Supabase/Nuku OS — confirmada
  // directo en la base de datos (9/9/2026), no inventada. La usa el campo
  // de código promocional para validar en vivo contra /api/public/promo.
  nukuOsAccountId: "057a625c-9036-4b1d-957b-8c436f71b4cd",
  eyebrow: "Disponibilidad",
  helper:
    "Elige tus fechas y cantidad de huéspedes. Te lleva al sistema de reservas de Kuhane, donde tu reserva queda registrada y recibes tu correo de confirmación al instante — el pago se hace directo en el hostal.",
  dates: "Fechas",
  guests: "Huéspedes",
  guestSingular: "persona",
  guestPlural: "personas",
  departure: "Salida",
  arrivalDeparture: "Llegada — Salida",
  checkAvailabilityAria: "Ver disponibilidad",
  fewerGuestsAria: "Menos huéspedes",
  moreGuestsAria: "Más huéspedes",
  // Vuelto a la versión completa a pedido de Andre (7/9/2026): el recorte
  // a "¿Código promo?" era para que no se cortara el botón, pero una vez
  // que el switch ES/EN esté funcionando la versión en inglés es corta de
  // por sí ("Promo code?"), así que no hace falta abreviar el español.
  promoQuestion: "¿Código promocional?",
  promoPlaceholder: "Código promocional",
  promoChecking: "Comprobando…",
  promoValid: "Código válido — se aplica al confirmar tu reserva.",
  promoInvalid: "Ese código no es válido o ya venció.",
  flightsCta: "Buscar vuelos a Isla de Pascua",
  flightsHelper:
    "Salida sugerida desde Santiago — cambia el origen en el buscador si vuelas desde otra ciudad.",
  // Confirmado por Andre (22/9/2026): "los pagos se hacen en el hostal
  // puede ser efectivo, debito o credito local o extranjera".
  paymentNote:
    "El pago se hace en el hostal — aceptamos efectivo, y débito o crédito (nacional o extranjera).",
  // Mismo pedido de Andre (23/9/2026) que en habitacionesIntro.incluye.
  incluye: "Tu reserva incluye desayuno continental y traslado desde y hacia el aeropuerto.",
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
  fotoAlt: "Traslado desde el aeropuerto — Kuhane",
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
