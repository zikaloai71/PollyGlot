import { create } from "zustand";

type lang = "ar" | "fr" | "es"

interface LanguageState {
  language: lang
  setLang: (language:  lang) => void;
}

export const useLanguageStore = create<LanguageState>()(
    (set) => ({
      language: "ar",
      setLang: (language:lang) => {
        set(() => ({ language: language }));
      }
    })
);
