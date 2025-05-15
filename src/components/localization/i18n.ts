import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import en from "./en.json"
import te from "./te.json"
import hi from "./hi.json"
import ta from "./ta.json"
import kn from "./kn.json"
import ml from "./ml.json"
const LANGUAGES = {
  en: {
    translation:en
  },
  te:{
    translation:te
  },
  hi:{
    translation:hi
  },
  ta:{
    translation:ta
  },
  kn:{
    translation:kn
  },
  ml:{
    translation:ml
  },
};
i18n.use(initReactI18next).init({
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