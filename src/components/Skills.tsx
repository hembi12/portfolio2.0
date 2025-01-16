import React from 'react';
import { OrbitingCircles } from '@/components/ui/orbiting-circles'; // Asegúrate de que esta ruta sea correcta
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap, SiOpenai, SiVite, SiExpress, SiVercel } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

export const Skills: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            {/* Título */}
            <h2 className="bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left mb-6">
                Tech Stack & Skills
            </h2>

            {/* Descripción */}
            <p className="text-md sm:text-lg lg:text-xl text-gray-600 text-center md:text-left mb-6 leading-relaxed">
                I am dedicated to continuously growing my expertise and delivering impactful solutions. 
                I am eager to bring my skills to a collaborative team, where I can contribute to building exceptional projects while continuing to grow as a developer.
            </p>

            {/* Orbiting Circles */}
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent">
                    16
                </span>

                {/* Órbita principal */}
                <OrbitingCircles radius={150} speed={1}>
                    <FaHtml5 color="#E34F26" size={50} />
                    <FaCss3Alt color="#1572B6" size={50} />
                    <SiJavascript color="#F7DF1E" size={50} />
                    <SiTypescript color="#3178C6" size={50} />
                    <FaReact color="#61DBFB" size={50} />
                    <SiTailwindcss color="#06B6D4" size={50} />
                    <SiBootstrap color="#7952B3" size={50} />
                    <SiExpress color="#000000" size={50} />
                </OrbitingCircles>

                {/* Órbita secundaria */}
                <OrbitingCircles radius={100} reverse speed={1}>
                    <BiLogoVisualStudio color="#007ACC" size={60} />
                    <SiVite color="#646CFF" size={60} />
                    <FaGitAlt color="#F05032" size={60} />
                    <FaGithub color="#181717" size={60} />
                    <IoLogoFirebase color="#FFCA28" size={60} />
                    <SiVercel color="#000000" size={60} />
                    <FaNodeJs color="#339933" size={50} />
                    <SiOpenai color="#000000" size={50} />
                </OrbitingCircles>
            </div>
        </section>
    );
};

export default Skills;
