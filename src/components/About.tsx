import React from 'react';

const About: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="font-extrabold text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                Driven by Creativity
            </h2>
            <p className="mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                I want to start a <span className="text-cyan-200">new career</span> dedicated to the
                <span className="text-cyan-200"> creativity </span> that comes from starting a
                <span className="text-cyan-200"> new project </span> and developing it until I see it
                <span className="text-cyan-200"> deployed and working </span>, aware that there are always things to learn and improve.
                <span className="block h-4"></span>
                Looking for constant <span className="text-cyan-200"> professional and personal growth </span> that keeps me
                <span className="text-cyan-200"> motivated </span> to
                <span className="text-cyan-200"> improve myself </span> both individually and as a couple day by day.
            </p>
        </section>
    );
};

export default About;
