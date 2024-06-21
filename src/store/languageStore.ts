import { create } from "zustand";

type lang = "ar_AR" | "fr_XX" | "es_XX"

interface LanguageState {
  language: lang
  setLang: (language:  lang) => void;
}

export const useLanguageStore = create<LanguageState>()(
    (set) => ({
      language: "ar_AR",
      setLang: (language:lang) => {
        set(() => ({ language: language }));
      }
    })
);
