// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationsHI from './translations/hi.json';
import translationsTL from "./translations/Tamil/tl.json"
import translationsGJ from "./translations/Gujarati/gj.json"
i18n
  .use(initReactI18next)
  .init({
    resources: {
      hi: {
        translation: translationsHI,
      },

      tl:{
        translation:translationsTL
      },
      gj:{
        translation:translationsGJ
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
