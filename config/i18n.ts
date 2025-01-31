import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend) // Permite cargar archivos JSON desde `public/locales`
    .use(LanguageDetector) // Detectar idioma automáticamente
    .use(initReactI18next) // Conectar i18n con React
    .init({
        fallbackLng: 'en', // Idioma por defecto si no se encuentra traducción
        lng: localStorage.getItem('i18nextLng') || 'en', // Recuperar idioma guardado
        interpolation: { escapeValue: false }, // React maneja la seguridad de cadenas
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // Carga desde `public/locales/`
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'],
            caches: ['localStorage'], // Guarda el idioma en `localStorage`
        },
        debug: import.meta.env.MODE === 'development', // Activa logs solo en desarrollo
    });

export default i18n;
