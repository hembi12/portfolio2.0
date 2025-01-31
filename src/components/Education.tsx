import React from 'react';
import { useTranslation } from 'react-i18next';
import UtelLogo from '@/assets/utel.jpg';
import DevfLogo from '@/assets/devf.jpg';

const education = [
    {
        institution: 'education.institution.utel',
        degree: 'education.degree.utel',
        date: 'education.date.utel',
        logo: UtelLogo,
    },
    {
        institution: 'education.institution.devf',
        degree: 'education.degree.devf',
        date: 'education.date.devf',
        logo: DevfLogo,
    },
];

const certificates = [
    {
        title: 'education.certificates.title',
        issuer: 'education.certificates.issuer',
        date: 'education.certificates.date',
        logo: UtelLogo,
        link: 'education.certificates.link',
    },
];

const Education: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <>
                <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                    {t('education.title')}
                </h2>
            </>
            
            <ul className="mt-6 space-y-6">
                {education.map((edu) => (
                    <li key={edu.institution} className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                                src={edu.logo} 
                                alt={t('education.logoAlt', { institution: t(edu.institution) })} 
                                className="w-full h-full object-cover" 
                                loading="lazy" 
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-cyan-200 text-lg sm:text-xl font-semibold">{t(edu.institution)}</h3>
                            <p className="text-gray-300 text-md sm:text-base">{t(edu.degree)}</p>
                            <p className="text-gray-400 text-md sm:text-base">{t(edu.date)}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <>
                <h2 className="mt-12 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-3xl sm:text-3xl lg:text-4xl font-semibold text-center md:text-left">
                    {t('education.certifications')}
                </h2>
            </>
            
            <ul className="mt-6 space-y-6">
                {certificates.map((cert) => (
                    <li key={cert.title} className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                                src={cert.logo} 
                                alt={t('education.certLogoAlt', { title: t(cert.title) })} 
                                className="w-full h-full object-cover" 
                                loading="lazy" 
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-cyan-200 text-lg sm:text-xl font-semibold">
                                <a 
                                    href={t(cert.link)} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:underline hover:text-cyan-300" 
                                    aria-label={t('education.viewCertificate', { title: t(cert.title) })}
                                >
                                    {t(cert.title)}
                                </a>
                            </h3>
                            <p className="text-gray-300 text-md sm:text-base">{t(cert.issuer)}</p>
                            <p className="text-gray-400 text-md sm:text-base">{t(cert.date)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Education;
