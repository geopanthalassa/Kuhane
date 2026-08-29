"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { es, type Content } from "./es";
import { en } from "./en";

export type Locale = "es" | "en";

const dictionaries: Record<Locale, Content> = { es, en };

const STORAGE_KEY = "kuhane-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function isLocale(value: unknown): value is Locale {
  return value === "es" || value === "en";
}

// Default locale is always "es" on first render (server and client) so the
// server-rendered HTML and the first client render match exactly — no
// cookies/localStorage read during SSR. Once mounted, we read a saved
// preference from localStorage and apply it (localStorage is unavailable
// during SSR anyway, so this can only run client-side, after hydration).
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(saved)) {
        setLocaleState(saved);
      }
    } catch {
      // localStorage can throw (private browsing, disabled storage, etc.) —
      // just keep the default "es" locale in that case.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore write failures — the in-memory locale still updates.
    }
  }

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}

// The main hook components use to source their copy: returns the whole
// content dictionary for the current locale — e.g.
// const { hero, ui } = useContent();
export function useContent(): Content {
  const { locale } = useLocale();
  return dictionaries[locale];
}
