import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-6">
            <div className="max-w-3xl mx-auto px-4 text-center border-t border-gray-100 pt-4 pb-16">
                <p className="text-xs sm:text-sm mb-4">
                    {t("footer.designedBy")} <span className="text-cyan-200 font-semibold">Héctor Martil</span>.
                </p>
                <p className="text-xs sm:text-sm">
                    © {currentYear} {t("footer.rightsReserved")}
                </p>
                <div className="mt-4 flex justify-center gap-4">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-200 hover:text-cyan-50 hover:underline transition"
                        aria-label={t("footer.socialLink", { platform: "GitHub" })}
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-200 hover:text-cyan-50 hover:underline transition"
                        aria-label={t("footer.socialLink", { platform: "LinkedIn" })}
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
