
"use client";
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import content from '@/lib/content.json';

const LocaleContext = createContext<{ locale: string; setLocale: (l: string) => void; t: (path: string) => any }>({
  locale: content.defaultLocale,
  setLocale: () => {},
  t: () => '',
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('locale') || content.defaultLocale;
    return content.defaultLocale;
  });

  const setLocale = useCallback((l: string) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') localStorage.setItem('locale', l);
  }, []);

  const t = useCallback((path: string): any => {
    const keys = path.split('.');
    const locales = content.locales as Record<string, any>;
    let val: any = locales[locale];
    
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k];
      } else {
        val = undefined;
        break;
      }
    }
    
    if (val !== undefined) return val;
    
    // Fallback
    val = locales[content.defaultLocale];
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k];
      } else {
        val = undefined;
        break;
      }
    }
    return val ?? path;
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() { return useContext(LocaleContext); }
