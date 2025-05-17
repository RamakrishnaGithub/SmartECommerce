import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import en from "./en.json";
import te from "./te.json";
import hi from "./hi.json";
import ta from "./ta.json";
import kn from "./kn.json";
import ml from "./ml.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
const LANGUAGES = {
  en: {
    translation: en,
  },
  te: {
    translation: te,
  },
  hi: {
    translation: hi,
  },
  ta: {
    translation: ta,
  },
  kn: {
    translation: kn,
  },
  ml: {
    translation: ml,
  },
};

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: async (callback:(language:string)=>void) => {
    try {
      const savedUserLanguage = await AsyncStorage.getItem("user-language");
      if (savedUserLanguage) {
        callback(savedUserLanguage);
        return;
      }
    } catch (error) {
      console.error("error in Reading user language")
    }
    callback("en")
  },
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem("user-language", language);
    } catch (error) {
      console.error("error in setting user language", error);
    }
  },
};

i18n.use(languageDetector as any).use(initReactI18next).init({
  resources: LANGUAGES,
  fallbackLng: "en",
  defaultNS: "translation",
  ns: ["translation"],
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
