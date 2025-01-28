import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend) // Cargar traducciones de manera asíncrona
    .use(LanguageDetector) // Detectar idioma automáticamente
    .use(initReactI18next) // Conectar i18n con React
    .init({
        fallbackLng: 'en', // Idioma por defecto
        lng: localStorage.getItem('i18nextLng') || 'en', // Cargar el idioma guardado
        interpolation: {
            escapeValue: false, // React maneja la seguridad de las cadenas
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // Ruta corregida para Vite
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'], // Prioridad de detección
            caches: ['localStorage'], // Guardar idioma en localStorage
        },
        debug: true, // Habilitar logs en la consola para depuración
    });

export default i18n;
