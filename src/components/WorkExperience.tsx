import React from 'react';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';
import CVFile from '@/assets/Hector_Martil_CV.pdf'; // Importar el archivo PDF

const experiences = [
    { company: 'PayPal', role: 'Customer Solutions Agent', date: 'July 2023 - Present' },
    { company: 'Teleperformance', role: 'Customer Solutions Agent - Team Lead', date: 'August 2019 - June 2023' },
    { company: 'Grupo SILA', role: 'Security Monitoring Operator - Team Lead', date: 'November 2015 - July 2019' },
];

const WorkExperience: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                Work Experience
            </h2>
            <ul className="mt-6 space-y-6">
                {experiences.map((exp, index) => (
                    <li
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4"
                    >
                        {/* Placeholder para el logo o imagen */}
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                        {/* Detalles de la experiencia */}
                        <div className="text-center md:text-left">
                            <h3 className="text-lg sm:text-xl font-semibold">{exp.company}</h3>
                            <p className="text-md sm:text-base text-gray-600">{exp.role}</p>
                            <p className="text-md sm:text-base text-gray-400">{exp.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {/* Botones para el CV */}
            <div className="mt-8 flex border-t border-gray-200 justify-center md:justify-start gap-4 pt-4">
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
