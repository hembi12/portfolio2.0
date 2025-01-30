import React from "react";
import { useTranslation } from "react-i18next";
import InterestsList from "./InterestsList";

const About: React.FC = () => {
    const { t, ready } = useTranslation();
    if (!ready) return <div className="animate-pulse text-gray-400 text-center">{t("loading")}</div>;

    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent font-extrabold text-4xl sm:text-4xl lg:text-5xl text-center md:text-left">
                {t("about.title")}
            </h2>
            <p className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                {t("about.description")}
            </p>
            <InterestsList />
        </section>
    );
};

export default About;
