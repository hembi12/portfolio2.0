import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';
import CVFile from '@/assets/Hector_Martil_CV.pdf'; // Importar el archivo PDF
import TPLogo from '@/assets/tp.png'; // Teleperformance logo
import SilaLogo from '@/assets/sila.jpg'; // Grupo SILA logo
import PayPalLogo from '@/assets/paypal.svg'; // PayPal logo

const experiences = [
    { company: 'workexperience.experience.paypalCompany', role: 'workexperience.experience.paypalRole', date: 'workexperience.experience.paypalDate', logo: PayPalLogo },
    { company: 'workexperience.experience.tpCompany', role: 'workexperience.experience.tpRole', date: 'workexperience.experience.tpDate', logo: TPLogo },
    { company: 'workexperience.experience.silaCompany', role: 'workexperience.experience.silaRole', date: 'workexperience.experience.silaDate', logo: SilaLogo },
];

const WorkExperience: React.FC = () => {
    const { t } = useTranslation();

    // ✅ Optimización de la Descarga del CV con `useCallback`
    const handleDownloadCV = useCallback(() => {
        const link = document.createElement('a');
        link.href = CVFile;
        link.download = 'Hector_Martil_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                {t('workexperience.title')}
            </h2>
            <ul className="mt-6 space-y-6">
                {experiences.map((exp, index) => (
                    <li
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4"
                    >
                        {/* ✅ Logo accesible con `t()` para traducción */}
                        <div className="w-16 h-16 flex-shrink-0">
                            <img
                                src={exp.logo}
                                alt={t('workexperience.logoAlt', { company: t(exp.company) })}
                                className="w-full h-full object-cover rounded-full"
                                width={64}
                                height={64}
                                loading="lazy"
                            />
                        </div>
                        {/* ✅ Mejora en la accesibilidad */}
                        <div className="text-center md:text-left">
                            <h3 className="text-cyan-200 text-lg sm:text-xl font-semibold">{t(exp.company)}</h3>
                            <p className="text-gray-300 text-md sm:text-base">{t(exp.role)}</p>
                            <p className="text-gray-400 text-md sm:text-base">{t(exp.date)}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* ✅ Botones optimizados con `rel="noopener noreferrer"` */}
            <div className="mt-8 flex border-t border-gray-100 justify-center md:justify-start gap-4 pt-4">
                <InteractiveHoverButton
                    text={t('workexperience.buttons.viewCV')}
                    onClick={() => window.open(CVFile, '_blank', 'noopener,noreferrer')}
                    aria-label={t('workexperience.buttons.viewCV')}
                />
                <InteractiveHoverButton
                    text={t('workexperience.buttons.download')}
                    onClick={handleDownloadCV}
                    aria-label={t('workexperience.buttons.download')}
                    rel="noopener noreferrer"
                />
            </div>
        </section>
    );
};

export default WorkExperience;
