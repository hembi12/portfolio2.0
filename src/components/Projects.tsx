import React from 'react';
import { useTranslation } from 'react-i18next';
import { BorderBeam } from '@/components/ui/border-beam';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';

const projects = [
    {
        titleKey: 'projects.portfolioV1.title',
        descriptionKey: 'projects.portfolioV1.description',
        tags: ['Javascript', 'React', 'Express', 'i18next', 'Git', 'Vercel', 'Tailwind', 'Node.js'],
        image: 'src/assets/project4.png',
        website: 'https://www.hectormartil.dev/',
        repository: 'https://github.com/hembi12/my-portfolio',
    },
    {
        titleKey: 'projects.landingPage.title',
        descriptionKey: 'projects.landingPage.description',
        tags: ['Javascript', 'React', 'Express', 'i18next', 'Git', 'Vercel', 'Tailwind', 'Node.js'],
        image: 'src/assets/project1.png',
        website: 'https://landing-page-woad-pi-82.vercel.app/',
        repository: 'https://github.com/hembi12/landing-page',
    },
    {
        titleKey: 'projects.birthdayInvitation.title',
        descriptionKey: 'projects.birthdayInvitation.description',
        tags: ['HTML 5', 'CSS', 'Javascript', 'Bootstrap', 'Git', 'Firebase'],
        image: 'src/assets/project3.png',
        website: 'https://rsvp-cumple.web.app/',
        repository: 'https://github.com/hembi12/cumplea-os_30',
    },
    {
        titleKey: 'projects.dentalClinic.title',
        descriptionKey: 'projects.dentalClinic.description',
        tags: ['Typescript', 'Next.js', 'React', 'Git', 'Vercel', 'Tailwind', 'Node.js'],
        image: 'src/assets/project2.png',
        website: 'https://appointments-liard.vercel.app/',
        repository: 'https://github.com/hembi12/appointments',
    },
];

const generateColorFromText = (text: string): { background: string; color: string } => {
    const colorMap: Record<string, { background: string; color: string }> = {
        'Javascript': { background: '#f7df1e', color: '#000' },
        'React': { background: '#61dafb', color: '#20232a' },
        'Express': { background: '#404040', color: '#fff' },
        'i18next': { background: '#007acc', color: '#fff' },
        'Git': { background: '#f05033', color: '#fff' },
        'Vercel': { background: '#000', color: '#fff' },
        'Tailwind': { background: '#38bdf8', color: '#fff' },
        'Node.js': { background: '#026e00', color: '#fff' },
        'HTML 5': { background: '#e34f26', color: '#fff' },
        'CSS': { background: '#1572b6', color: '#fff' },
        'Bootstrap': { background: '#7952b3', color: '#fff' },
        'Firebase': { background: '#ffca28', color: '#000' },
        'Typescript': { background: '#3178c6', color: '#fff' },
        'Next.js': { background: '#000', color: '#fff' },
    };

    return colorMap[text] || { background: '#ddd', color: '#000' }; // Default for unknown tags
};

const Projects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <div className="text-center md:text-left mb-8">
                <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent font-extrabold text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                    {t('projects.title')}
                </h2>
                <p className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                    {t('projects.description.part1')}{' '}
                    <span className="text-cyan-200">{t('projects.description.built')}</span>{' '}
                    {t('projects.description.part2')}{' '}
                    <span className="text-cyan-200">{t('projects.description.knowledge')}</span>{' '}
                    {t('projects.description.part3')}{' '}
                    <span className="text-cyan-200">{t('projects.description.skills')}</span>{' '}
                    {t('projects.description.part4')}{' '}
                    <span className="text-cyan-200">{t('projects.description.technologies')}</span>{' '}
                    {t('projects.description.part5')}.
                </p>
            </div>
            {/* Scrollable Section */}
            <div className="flex overflow-x-auto gap-4 scrollbar-thin pb-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 relative flex-shrink-0 flex flex-col rounded-lg shadow-md overflow-hidden w-80"
                    >
                        <BorderBeam />
                        <img
                            src={project.image}
                            alt={t(project.titleKey)}
                            className="w-full h-48 object-fit"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-gray-900 text-2xl font-bold mb-2">
                                {t(project.titleKey)}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {t(project.descriptionKey)}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        style={generateColorFromText(tag)}
                                        className="px-2 py-1 text-xs font-medium rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-auto flex gap-4 pt-4 border-t border-gray-900">
                                <InteractiveHoverButton
                                    text={t('projects.buttons.website')}
                                    href={project.website}
                                />
                                <InteractiveHoverButton
                                    text={t('projects.buttons.code')}
                                    href={project.repository}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
