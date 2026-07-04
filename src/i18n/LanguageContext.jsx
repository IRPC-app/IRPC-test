import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
  { code: "ur", label: "اردو", dir: "rtl" },
  { code: "roman", label: "Roman Urdu", dir: "ltr" },
];

const LanguageContext = createContext(null);

export function t(field, language) {
  if (!field) return "";
  return field[language] || field.en || "";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const meta = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];
    document.documentElement.lang = language === "roman" ? "en" : language;
    document.documentElement.dir = meta.dir;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

export function useTranslate() {
  const { language } = useLanguage();
  return (field) => t(field, language);
}
