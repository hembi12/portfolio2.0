import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';

// Lazy loading de iconos
const FaReact = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaReact })));
const FaNodeJs = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaNodeJs })));
const FaHtml5 = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaHtml5 })));
const FaCss3Alt = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCss3Alt })));
const FaGitAlt = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaGitAlt })));
const FaGithub = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaGithub })));
const SiTypescript = lazy(() => import('react-icons/si').then(module => ({ default: module.SiTypescript })));
const SiJavascript = lazy(() => import('react-icons/si').then(module => ({ default: module.SiJavascript })));
const SiTailwindcss = lazy(() => import('react-icons/si').then(module => ({ default: module.SiTailwindcss })));
const SiBootstrap = lazy(() => import('react-icons/si').then(module => ({ default: module.SiBootstrap })));
const SiOpenai = lazy(() => import('react-icons/si').then(module => ({ default: module.SiOpenai })));
const SiVite = lazy(() => import('react-icons/si').then(module => ({ default: module.SiVite })));
const SiExpress = lazy(() => import('react-icons/si').then(module => ({ default: module.SiExpress })));
const SiVercel = lazy(() => import('react-icons/si').then(module => ({ default: module.SiVercel })));
const BiLogoVisualStudio = lazy(() => import('react-icons/bi').then(module => ({ default: module.BiLogoVisualStudio })));
const IoLogoFirebase = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoLogoFirebase })));

export const Skills: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent font-extrabold text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                {t('skills.title')}
            </h2>

            <p className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                {t('skills.description')}
            </p>

            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                <span className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent pointer-events-none whitespace-pre-wrap text-center text-7xl font-semibold leading-none">
                    15
                </span>

                <Suspense fallback={<div className="text-gray-400 text-center">Loading Icons...</div>}>
                    <OrbitingCircles radius={150} speed={1}>
                        <FaHtml5 color="#FF5733" size={50} aria-label="HTML5" />
                        <FaCss3Alt color="#2965F1" size={50} aria-label="CSS3" />
                        <SiJavascript color="#F7DF1E" size={50} aria-label="JavaScript" />
                        <SiTypescript color="#007ACC" size={50} aria-label="TypeScript" />
                        <FaReact color="#61DAFB" size={50} aria-label="React.js" />
                        <SiTailwindcss color="#38BDF8" size={50} aria-label="Tailwind CSS" />
                        <SiBootstrap color="#A855F7" size={50} aria-label="Bootstrap" />
                        <SiExpress color="#ffffff" size={50} aria-label="Express.js" />
                    </OrbitingCircles>

                    <OrbitingCircles radius={100} reverse speed={1}>
                        <BiLogoVisualStudio color="#0078D7" size={60} aria-label="Visual Studio Code" />
                        <SiVite color="#A855F7" size={60} aria-label="Vite" />
                        <FaGitAlt color="#F14E32" size={60} aria-label="Git" />
                        <FaGithub color="#ffffff" size={60} aria-label="GitHub" />
                        <IoLogoFirebase color="#FFA000" size={60} aria-label="Firebase" />
                        <SiVercel color="#ffffff" size={60} aria-label="Vercel" />
                        <FaNodeJs color="#3C873A" size={50} aria-label="Node.js" />
                        <SiOpenai color="#ffffff" size={50} aria-label="OpenAI" />
                    </OrbitingCircles>
                </Suspense>
            </div>
        </section>
    );
};

export default Skills;
