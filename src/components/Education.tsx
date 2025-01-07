import React from 'react';

const education = [
    { institution: 'Harvard University', degree: 'Bachelor of Computer Science', date: '2015 - 2019' },
    { institution: 'Stanford University', degree: 'Master of Business Administration', date: '2020 - 2022' },
    { institution: 'Online Bootcamp', degree: 'Full-Stack Web Development', date: '2023' },
];

const Education: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                Education
            </h2>
            <ul className="mt-6 space-y-6">
                {education.map((edu, index) => (
                    <li key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
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
