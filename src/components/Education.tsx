import React from 'react';
import UtelLogo from '@/assets/utel.jpg'; // Grupo SILA logo
import DevfLogo from '@/assets/devf.jpg'; // PayPal logo

const education = [
    {
        institution: 'Universidad Tecnológica Latinoamericana en Línea',
        degree: "Bachelor's Degree in Information Technology Administration",
        date: 'February 2022 - Present',
        logo: UtelLogo,
    },
    {
        institution: 'DEV.F',
        degree: 'Master in Coding: Backend, Frontend, and Fullstack Development',
        date: 'June 2024 - Present',
        logo: DevfLogo,
    },
];

const Education: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                Learning Journey
            </h2>
            <ul className="mt-6 space-y-6">
                {education.map((edu, index) => (
                    <li
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4"
                    >
                        {/* Logo del instituto */}
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                            <img
                                src={edu.logo}
                                alt={`${edu.institution} logo`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Detalles de la educación */}
                        <div className="text-center md:text-left">
                            <h3 className="text-cyan-200 text-lg sm:text-xl font-semibold">{edu.institution}</h3>
                            <p className="text-gray-300 text-md sm:text-base">{edu.degree}</p>
                            <p className="text-gray-400 text-md sm:text-base">{edu.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Education;
