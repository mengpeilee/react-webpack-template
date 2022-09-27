import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import tw from './locales/zh-TW.json';

const EN_LANG = 'en';
const TW_LANG = 'zh-TW';

const resources = {
  [EN_LANG]: {
    translation: en,
  },
  [TW_LANG]: {
    translation: tw,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: TW_LANG,
    fallbackLng: TW_LANG,
    interpolation: {
      escapeValue: false,
    },
  });

const translates = s => i18n.t(s);

export {i18n, translates, EN_LANG, TW_LANG};
