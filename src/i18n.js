import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './i18n/en'
import ko from './i18n/ko'

const resources = {
  en,
  ko
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    supportedLngs: ['en', 'ko'],
    fallbackLng: 'en'
  })

export default i18n
