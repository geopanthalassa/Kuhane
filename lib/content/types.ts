// ---------------------------------------------------------------------------
// Shared row/shape types for the bilingual content dictionaries
// (lib/content/es.ts, lib/content/en.ts). Kept separate from the
// dictionaries themselves so both locale files — and any legacy code still
// importing from lib/site-content.ts — can share the same types.
// ---------------------------------------------------------------------------

export type NavItem = {
  label: string;
  href: string;
};

export type Libro = {
  titulo: string;
  anio: string;
  descripcion: string;
  fragmento: string;
  enlace: string;
};

export type Voz = {
  nombre: string;
  rol: string;
  pregunta: string;
  respuesta: string;
};

export type Habitacion = {
  nombre: string;
  capacidad: string;
  camas: string;
  bano: string;
  servicios: string[];
  caracteristicas: string;
  precio: string;
};

export type Colaborador = {
  nombre: string;
  actividad: string;
  descripcion: string;
  precio: string;
  contacto: string;
};

export type MapaPin = {
  id: string;
  nombre: string;
  tipo: "kuhane" | "experiencia";
  lat: number;
  lng: number;
  descripcion: string;
  aproximado?: boolean;
};
