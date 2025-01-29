import React from "react";
import { useTranslation } from "react-i18next";
import ProfilePicture from "../assets/ProfilePicture.webp";
import ProfilePicture2x from "../assets/ProfilePicture@2x.jpg";
import WordRotate from "@/components/ui/word-rotate";

const Header: React.FC = () => {
    const { t, ready } = useTranslation();

    // Mostrar un "skeleton loader" si i18n no está listo
    if (!ready) {
        return (
            <div className="animate-pulse flex justify-center items-center h-40">
                <p className="text-gray-400">Loading translations...</p>
            </div>
        );
    }

    // Asegurar que t('header.roles') sea siempre un array
    const roles = t("header.roles", { returnObjects: true }) || [];
    const roleWords = Array.isArray(roles) ? roles.map(String) : [];

    return (
        <header className="flex flex-col md:flex-row items-center md:items-start justify-between mt-16 px-4 max-w-3xl mx-auto gap-6">
            {/* Texto del encabezado */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold leading-tight flex items-center gap-2">
                    <span className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent">
                        {t("header.greeting")}
                    </span>
                    <WordRotate
                        className="bg-gradient-to-b from-cyan-500 to-cyan-200 bg-clip-text text-transparent"
                        words={roleWords}
                    />
                    <span>👋</span>
                </h1>
                <p className="text-gray-200 text-md sm:text-base lg:text-xl leading-relaxed">
                    <span className="text-cyan-200">{t("header.roleHighlights.customerService")}</span>{" "}
                    {t("header.description.part1")}{" "}
                    <span className="text-cyan-200">{t("header.roleHighlights.fullStack")}</span>{" "}
                    {t("header.description.part2")}{" "}
                    <span className="text-cyan-200">{t("header.roleHighlights.learnNew")}</span>{" "}
                    {t("header.description.part3")}{" "}
                </p>
            </div>

            {/* Imagen de perfil */}
            <div className="flex-shrink-0 mt-6 -mr-6">
                <img
                    src={ProfilePicture}
                    srcSet={`${ProfilePicture} 1x, ${ProfilePicture2x} 2x`}
                    alt={t("header.profileAlt") || "User profile picture"}
                    role="img"
                    aria-label={t("header.profileAlt") || "User profile picture"}
                    className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
                    loading="lazy"
                />
            </div>
        </header>
    );
};

export default Header;
