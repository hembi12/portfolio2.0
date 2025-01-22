import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to Portfolio 2.0",
            description: "This is an example project."
        }
    },
    es: {
        translation: {
            welcome: "Bienvenido a Portfolio 2.0",
            description: "Este es un proyecto de ejemplo."
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // Idioma predeterminado
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false // react ya se encarga de escapar los valores
    }
});

export default i18n;
