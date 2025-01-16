import React from 'react';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';

const experiences = [
    { company: 'Atomic Finance', role: 'Bitcoin Protocol Engineer', date: 'May 2021 - Oct 2022' },
    { company: 'Shopify', role: 'Software Engineer', date: 'January 2021 - April 2021' },
    { company: 'Nvidia', role: 'Software Engineer', date: 'January 2020 - April 2020' },
];

const WorkExperience: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
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
                <InteractiveHoverButton text="View CV" />
                <InteractiveHoverButton text="Download" />
            </div>
        </section>
    );
};

export default WorkExperience;
