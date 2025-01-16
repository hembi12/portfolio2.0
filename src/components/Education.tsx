import React from 'react';

const education = [
    {
        institution: 'Universidad Tecnológica Latinoamericana en Línea',
        degree: "Bachelor's Degree in Information Technology Administration",
        date: 'February 2022 - Present',
    },
    {
        institution: 'DEV.F',
        degree: 'Master in Coding: Backend, Frontend, and Fullstack Development',
        date: 'June 2024 - Present',
    },
];

const Education: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                Education
            </h2>
            <ul className="mt-6 space-y-6">
                {education.map((edu, index) => (
                    <li
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4"
                    >
                        {/* Placeholder para el logo o imagen */}
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                        {/* Detalles de la educación */}
                        <div className="text-center md:text-left">
                            <h3 className="text-lg sm:text-xl font-semibold">{edu.institution}</h3>
                            <p className="text-md sm:text-base text-gray-600">{edu.degree}</p>
                            <p className="text-md sm:text-base text-gray-400">{edu.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Education;
