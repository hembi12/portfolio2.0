import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';

// ✅ Función para carga dinámica de iconos
const loadIcon = (icon: keyof typeof import('react-icons/fa')) =>
    React.lazy(() => import('react-icons/fa').then(module => ({ default: module[icon] })));

// 🔹 Mapeo de iconos
const icons = {
    FaReact: loadIcon('FaReact'),
    FaNodeJs: loadIcon('FaNodeJs'),
    FaHtml5: loadIcon('FaHtml5'),
    FaCss3Alt: loadIcon('FaCss3Alt'),
    FaGitAlt: loadIcon('FaGitAlt'),
    FaGithub: loadIcon('FaGithub'),
    SiTypescript: React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiTypescript }))),
    SiJavascript: React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiJavascript }))),
    SiTailwindcss: React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiTailwindcss }))),
    SiBootstrap: React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiBootstrap }))),
    SiOpenai: React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiOpenai }))),
    SiVite: React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiVite }))),
    SiExpress: React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiExpress }))),
    SiVercel: React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiVercel }))),
    BiLogoVisualStudio: React.lazy(() => import('react-icons/bi').then(module => ({ default: module.BiLogoVisualStudio }))),
    IoLogoFirebase: React.lazy(() => import('react-icons/io5').then(module => ({ default: module.IoLogoFirebase }))),
};

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
                    16
                </span>

                <Suspense fallback={<div className="text-gray-400 text-center">Loading Icons...</div>}>
                    <OrbitingCircles radius={150} speed={1}>
                        <icons.FaHtml5 color="#FF5733" size={50} aria-label="HTML5" />
                        <icons.FaCss3Alt color="#2965F1" size={50} aria-label="CSS3" />
                        <icons.SiJavascript color="#F7DF1E" size={50} aria-label="JavaScript" />
                        <icons.SiTypescript color="#007ACC" size={50} aria-label="TypeScript" />
                        <icons.FaReact color="#61DAFB" size={50} aria-label="React.js" />
                        <icons.SiTailwindcss color="#38BDF8" size={50} aria-label="Tailwind CSS" />
                        <icons.SiBootstrap color="#A855F7" size={50} aria-label="Bootstrap" />
                        <icons.SiExpress color="#ffffff" size={50} aria-label="Express.js" />
                    </OrbitingCircles>

                    <OrbitingCircles radius={100} reverse speed={1}>
                        <icons.BiLogoVisualStudio color="#0078D7" size={60} aria-label="Visual Studio Code" />
                        <icons.SiVite color="#A855F7" size={60} aria-label="Vite" />
                        <icons.FaGitAlt color="#F14E32" size={60} aria-label="Git" />
                        <icons.FaGithub color="#ffffff" size={60} aria-label="GitHub" />
                        <icons.IoLogoFirebase color="#FFA000" size={60} aria-label="Firebase" />
                        <icons.SiVercel color="#ffffff" size={60} aria-label="Vercel" />
                        <icons.FaNodeJs color="#3C873A" size={50} aria-label="Node.js" />
                        <icons.SiOpenai color="#ffffff" size={50} aria-label="OpenAI" />
                    </OrbitingCircles>
                </Suspense>
            </div>
        </section>
    );
};

export default Skills;
