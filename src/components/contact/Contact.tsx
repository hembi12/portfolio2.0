import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async"; // SEO dinámico
import ContactForm from "./ContactForm";

const Contact = () => {
    const { t } = useTranslation();

    // Optimización con `useMemo`
    const contactDescription = useMemo(() => t("contact.description"), [t]);

    return (
        <section
            id="contact-section"
            aria-labelledby="contact-title"
            className="my-8 px-4 max-w-3xl mx-auto"
        >
            {/* SEO con Helmet */}
            <Helmet>
                <title>{t("contact.seoTitle")}</title>
                <meta name="description" content={contactDescription} />
                <meta name="keywords" content={t("contact.keywords")} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <h2
                id="contact-title"
                className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left"
            >
                {t("contact.title")}
            </h2>

            <p
                id="contact-description"
                className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left max-w-3xl mx-auto"
                aria-live="polite"
            >
                {contactDescription}
            </p>

            <div className="mt-6 max-w-3xl mx-auto">
                {/* Añadido `aria-describedby` para accesibilidad */}
                <ContactForm aria-describedby="contact-description" />
            </div>
        </section>
    );
};

export default Contact;
