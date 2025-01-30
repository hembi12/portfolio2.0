// src/components/projects/Projects.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BorderBeam } from '@/components/ui/border-beam';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';
import { projects } from './projectList';
import { generateColorFromText } from './generateColor';

const Projects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <div className="text-center md:text-left mb-8">
                <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent font-extrabold text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                    {t('projects.title')}
                </h2>
                <p className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                    {t('projects.description')}
                </p>
            </div>
            <div className="flex overflow-x-auto gap-4 scrollbar-thin pb-2">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-100 relative flex-shrink-0 flex flex-col rounded-lg shadow-md overflow-hidden w-80">
                        <BorderBeam />
                        <img src={project.image} alt={t(project.titleKey)} className="w-full h-48 object-fit" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-gray-900 text-2xl font-bold mb-2">{t(project.titleKey)}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{t(project.descriptionKey)}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} style={generateColorFromText(tag)} className="px-2 py-1 text-xs font-medium rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-auto flex gap-4 pt-4 border-t border-gray-900">
                                <InteractiveHoverButton text={t('projects.buttons.website')} href={project.website} />
                                <InteractiveHoverButton text={t('projects.buttons.code')} href={project.repository} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
