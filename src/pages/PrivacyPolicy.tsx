import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface PrivacyPolicyProps {
    onBackToPortfolio: () => void; // Prop para manejar la navegación al portafolio
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToPortfolio }) => {
    const { t } = useTranslation();

    // Asegura que la página siempre se abra en la parte superior con scroll suave
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleBackClick = () => {
        onBackToPortfolio(); // Navega a la página principal
        requestAnimationFrame(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    };

    return (
        <section className="max-w-3xl mx-auto my-12 px-4 text-gray-200">
            <h1 className="text-4xl font-bold mb-6">{t('privacy.title')}</h1>

            <p className="mb-4">
                {t('privacy.lastUpdate')}: <strong>{new Date().toLocaleDateString()}</strong>
            </p>

            <h2 className="text-2xl font-semibold mt-6">{t('privacy.section1.title')}</h2>
            <p>{t('privacy.section1.description')}</p>
            <ul className="list-disc list-inside mt-2">
                <li>{t('privacy.section1.point1')}</li>
                <li>{t('privacy.section1.point2')}</li>
                <li>{t('privacy.section1.point3')}</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">{t('privacy.section2.title')}</h2>
            <p>{t('privacy.section2.description')}</p>
            <ul className="list-disc list-inside mt-2">
                <li>{t('privacy.section2.point1')}</li>
                <li>{t('privacy.section2.point2')}</li>
                <li>{t('privacy.section2.point3')}</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">{t('privacy.section3.title')}</h2>
            <p>{t('privacy.section3.description')}</p>
            <ul className="list-disc list-inside mt-2">
                <li>{t('privacy.section3.point1')}</li>
                <li>{t('privacy.section3.point2')}</li>
                <li>{t('privacy.section3.point3')}</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">{t('privacy.section4.title')}</h2>
            <p>{t('privacy.section4.description')}</p>
            <ul className="list-disc list-inside mt-2">
                <li>{t('privacy.section4.point1')}</li>
                <li>{t('privacy.section4.point2')}</li>
                <li>{t('privacy.section4.point3')}</li>
            </ul>
            <p>{t('privacy.contact')} <strong>{t('privacy.contactEmail')}</strong>.</p>

            <h2 className="text-2xl font-semibold mt-6">{t('privacy.section5.title')}</h2>
            <p>{t('privacy.section5.description')}</p>

            <h2 className="text-2xl font-semibold mt-6">{t('privacy.section6.title')}</h2>
            <p>{t('privacy.section6.description')}</p>

            <h2 className="text-2xl font-semibold mt-6">{t('privacy.section7.title')}</h2>
            <p>{t('privacy.section7.description')}</p>

            <h2 className="text-2xl font-semibold mt-6">{t('privacy.section8.title')}</h2>
            <p>{t('privacy.section8.description')}</p>

            <h2 className="text-2xl font-semibold mt-6">{t('privacy.section9.title')}</h2>
            <p>{t('privacy.section9.description')} <strong>{t('privacy.contactEmail')}</strong>.</p>

            <div className="text-center mt-4 mb-6">
                <button
                    onClick={handleBackClick}
                    className="text-cyan-200 hover:text-cyan-50 hover:underline transition"
                    aria-label={t('privacy.backButton')}
                >
                    {t('privacy.backButton')}
                </button>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
