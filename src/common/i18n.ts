import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const getBrowserLanguage = () => {
  const browserLang = navigator.language.split('-')[0].toUpperCase();
  return ['EN', 'TR'].includes(browserLang) ? browserLang : 'EN';
};

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: {
        welcome: 'Welcome',
      },
    },
    TR: {
      translation: {
        welcome: 'Hoş geldiniz',
      },
    },
  },
  lng: getBrowserLanguage(),
  fallbackLng: 'EN',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

