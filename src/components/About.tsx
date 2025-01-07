import React from 'react';

const About: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                About
            </h2>
            <p className="mt-4 text-gray-600 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS
                businesses. In the past, I <span className="text-blue-500">pursued a double degree in computer science and business</span>,
                interned at big tech companies in Silicon Valley, and <span className="text-blue-500">competed in over 21 hackathons for fun</span>.
            </p>
        </section>
    );
};

export default About;
