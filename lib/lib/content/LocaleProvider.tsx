"use client";

// ---------------------------------------------------------------------------
// Switch ES/EN — igual al que existía en la versión anterior/en vivo del
// sitio (pedido explícito y reiterado de Andre: "le quitaste el switch
// ingles-español"). Contexto de React + un hook `useContent()` que devuelve
// el diccionario del idioma activo (es.ts o en.ts), con el idioma elegido
// guardado en localStorage para que se recuerde entre visitas.
// ---------------------------------------------------------------------------
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { es, type Content } from "./es";
import { en } from "./en";

export type Locale = "es" | "en";

const DICTIONARIES: Record<Locale, Content> = { es, en };

const STORAGE_KEY = "kuhane-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: Content;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  // Al montar, recupera el idioma elegido en una visita anterior (si hay).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") setLocaleState(saved);
    } catch {
      // localStorage puede fallar (modo privado, etc.) — el sitio sigue
      // funcionando en español por defecto.
    }
  }, []);

  // Mantiene el atributo lang del documento sincronizado con el idioma
  // elegido, por accesibilidad y SEO on-page.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignorar: el cambio de idioma igual aplica en esta sesión.
    }
  }

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, content: DICTIONARIES[locale] }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale debe usarse dentro de <LocaleProvider>.");
  }
  return ctx;
}

// Hook principal que van a usar los componentes: reemplaza los imports
// directos de "@/lib/site-content" por `const { campo } = useContent();`.
export function useContent(): Content {
  return useLocale().content;
}
