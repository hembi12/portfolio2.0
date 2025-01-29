import React from 'react';
import { useTranslation } from 'react-i18next';
import { OrbitingCircles } from '@/components/ui/orbiting-circles'; // Asegúrate de que esta ruta sea correcta
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap, SiOpenai, SiVite, SiExpress, SiVercel } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

export const Skills: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            {/* Título */}
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent font-extrabold text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                {t('skills.title')}
            </h2>

            {/* Descripción */}
            <p className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                {t('skills.description.part1')} <span className="text-cyan-200">{t('skills.highlights.dedicated')}</span>{' '}
                {t('skills.description.part2')} <span className="text-cyan-200">{t('skills.highlights.expertise')}</span>{' '}
                {t('skills.description.part3')} <span className="text-cyan-200">{t('skills.highlights.impactfulSolutions')}</span>.{' '}
                {t('skills.description.part4')} <span className="text-cyan-200">{t('skills.highlights.skills')}</span>{' '}
                {t('skills.description.part5')} <span className="text-cyan-200">{t('skills.highlights.collaborativeTeam')}</span>{' '}
                {t('skills.description.part6')} <span className="text-cyan-200">{t('skills.highlights.exceptionalProjects')}</span>{' '}
                {t('skills.description.part7')} <span className="text-cyan-200">{t('skills.highlights.developer')}</span>.
            </p>

            {/* Orbiting Circles */}
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
                <span className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent pointer-events-none whitespace-pre-wrap text-center text-7xl font-semibold leading-none">
                    15
                </span>

                {/* Órbita principal */}
                <OrbitingCircles radius={150} speed={1}>
                    <FaHtml5 color="#FF5733" size={50} />
                    <FaCss3Alt color="#2965F1" size={50} />
                    <SiJavascript color="#F7DF1E" size={50} />
                    <SiTypescript color="#007ACC" size={50} />
                    <FaReact color="#61DAFB" size={50} />
                    <SiTailwindcss color="#38BDF8" size={50} />
                    <SiBootstrap color="#A855F7" size={50} />
                    <SiExpress color="#ffffff" size={50} />
                </OrbitingCircles>


                {/* Órbita secundaria */}
                <OrbitingCircles radius={100} reverse speed={1}>
                    <BiLogoVisualStudio color="#0078D7" size={60} />
                    <SiVite color="#A855F7" size={60} />
                    <FaGitAlt color="#F14E32" size={60} />
                    <FaGithub color="#ffffff" size={60} />
                    <IoLogoFirebase color="#FFA000" size={60} />
                    <SiVercel color="#ffffff" size={60} />
                    <FaNodeJs color="#3C873A" size={50} />
                    <SiOpenai color="#ffffff" size={50} />
                </OrbitingCircles>
            </div>
        </section>
    );
};

export default Skills;
