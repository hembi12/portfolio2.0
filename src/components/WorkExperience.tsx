import React from 'react';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';
import CVFile from '@/assets/Hector_Martil_CV.pdf'; // Importar el archivo PDF
import TPLogo from '@/assets/tp.png'; // Teleperformance logo
import SilaLogo from '@/assets/sila.jpg'; // Grupo SILA logo
import PayPalLogo from '@/assets/paypal.svg'; // PayPal logo

const experiences = [
    { company: 'PayPal', role: 'Customer Solutions Agent', date: 'July 2023 - Present', logo: PayPalLogo },
    { company: 'Teleperformance', role: 'Customer Solutions Agent - Team Lead', date: 'August 2019 - June 2023', logo: TPLogo },
    { company: 'Grupo SILA', role: 'Security Monitoring Operator - Team Lead', date: 'November 2015 - July 2019', logo: SilaLogo },
];

const WorkExperience: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                Steps in My Career
            </h2>
            <ul className="mt-6 space-y-6">
                {experiences.map((exp, index) => (
                    <li
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4"
                    >
                        {/* Logo de la compañía */}
                        <div className="w-16 h-16 flex-shrink-0">
                            <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        {/* Detalles de la experiencia */}
                        <div className="text-center md:text-left">
                            <h3 className="text-cyan-200 text-lg sm:text-xl font-semibold">{exp.company}</h3>
                            <p className="text-gray-300 text-md sm:text-base">{exp.role}</p>
                            <p className="text-gray-400 text-md sm:text-base">{exp.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {/* Botones para el CV */}
            <div className="mt-8 flex border-t border-gray-100 justify-center md:justify-start gap-4 pt-4">
                <InteractiveHoverButton
                    text="View CV"
                    onClick={() => window.open(CVFile, '_blank', 'noopener,noreferrer')}
                />
                <InteractiveHoverButton
                    text="Download"
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = CVFile;
                        link.download = 'Hector_Martil_CV.pdf';
                        link.click();
                    }}
                />
            </div>
        </section>
    );
};

export default WorkExperience;
