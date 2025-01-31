import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import InterestsList from "./InterestsList";

const About: React.FC = () => {
    const { t, ready } = useTranslation();

    // Skeleton Loader mientras se carga i18next
    if (!ready) {
        return (
            <div className="animate-pulse flex flex-col items-center h-40 space-y-4">
                <div className="w-40 h-8 bg-gray-700 rounded-md"></div>
                <div className="w-60 h-6 bg-gray-700 rounded-md"></div>
            </div>
        );
    }

    return (
        <>
            {/* 🏆 SEO Meta Tags */}
            <Helmet>
                <title>{t("about.seoTitle")}</title>
                <meta name="description" content={t("about.seoDescription")} />
                <meta property="og:title" content={t("about.seoTitle")} />
                <meta property="og:description" content={t("about.seoDescription")} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tu-dominio.com/about" />
            </Helmet>

            <section className="my-8 px-4 max-w-3xl mx-auto">
                <h2
                    className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent font-extrabold text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left"
                    aria-label={t("about.title")}
                >
                    {t("about.title")}
                </h2>

                <p className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                    {t("about.description")}
                </p>

                <InterestsList />
            </section>
        </>
    );
};

export default About;
