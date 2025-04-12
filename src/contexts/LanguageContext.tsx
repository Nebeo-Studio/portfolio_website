
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define supported languages
export const LANGUAGES = {
  en: "English",
  de: "Deutsch",          // German
  fr: "Français",         // French
  es: "Español",          // Spanish
  it: "Italiano",         // Italian
  pt_BR: "Português (Brasil)", // Portuguese (Brazil)
  nl: "Nederlands",       // Dutch
  sv: "Svenska",          // Swedish
  da: "Dansk",            // Danish
  fi: "Suomi",            // Finnish
  nb: "Norsk (Bokmål)",   // Norwegian (Bokmål)
  pl: "Polski",           // Polish
  cs: "Čeština",          // Czech
  sk: "Slovenčina",       // Slovak
  hu: "Magyar",           // Hungarian
  ro: "Română",           // Romanian
  hr: "Hrvatski",         // Croatian
  lt: "Lietuvių",         // Lithuanian
  tr: "Türkçe",           // Turkish
  vi: "Tiếng Việt",       // Vietnamese
  id: "Bahasa Indonesia", // Indonesian
  fil: "Filipino",        // Filipino
  zh: "中文",              // Chinese
  hi: "हिन्दी",            // Hindi/Indian
  ja: "日本語",            // Japanese
  ru: "Русский"           // Russian
};

export type LanguageCode = keyof typeof LANGUAGES;

// Context type
type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations interface
interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Provider Props
interface LanguageProviderProps {
  children: ReactNode;
  initialTranslations: Translations;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialTranslations }) => {
  // Try to get stored language from localStorage, default to 'en'
  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [translations, setTranslations] = useState<Translations>(initialTranslations);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageCode;
    if (savedLanguage && LANGUAGES[savedLanguage]) {
      setLanguageState(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0] as LanguageCode;
      // Special case for Portuguese (Brazil)
      const isBrazilianPortuguese = 
        navigator.language === 'pt-BR' || 
        navigator.language === 'pt-br';
      
      if (isBrazilianPortuguese) {
        setLanguageState('pt_BR');
      } else if (LANGUAGES[browserLang]) {
        setLanguageState(browserLang);
      }
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang.replace('_', '-'));
  };

  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || translations[key]['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
