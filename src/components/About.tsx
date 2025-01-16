import React from 'react';

const About: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                About Me
            </h2>
            <p className="mt-4 text-gray-600 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                I transitioned into the tech industry, specializing in frontend and backend development. 
                My journey is driven by a passion for building innovative and user-friendly web solutions. 
                Currently, I am advancing my expertise by pursuing a degree in Information Technology Administration and a master’s program in coding.
            </p>
        </section>
    );
};

export default About;
