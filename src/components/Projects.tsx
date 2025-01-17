import React from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';

const projects = [
    {
        title: 'Landing page',
        description:
            'I developed an interactive landing page mockup focused on optimizing the presentation of key elements, such as an eye-catching headline, highlighted benefits, and clear action buttons.',
        tags: ['Javascript', 'React', 'Express', 'i18next', 'Git', 'Vercel', 'Tailwind', 'Node.js'],
        image: 'https://via.placeholder.com/400x200',
    },
    {
        title: 'Dental clinic website',
        description:
            'I designed a mockup for a dental clinic website. The design included a clear call to action for scheduling appointments, ensuring a fluid user experience before its development and implementation.',
        tags: ['Typescript', 'Next.js', 'React', 'Git', 'Vercel', 'Tailwind', 'Node.js'],
        image: 'https://via.placeholder.com/400x200',
    },
    {
        title: 'Birthday invitation',
        description:
            'I created an interactive invitation page for my birthday celebration, a personalized RSVP form, and detailed event information to ensure a memorable experience for all my guests.',
        tags: ['HTML 5', 'CSS', 'Javascript', 'Bootstrap', 'Git', 'Firebase'],
        image: 'https://via.placeholder.com/400x200',
    },
    {
        title: 'Portfolio Website',
        description:
            'I developed the first version of my portfolio website to showcase my skills, projects, and experience responsive design, and a clear structure to effectively present my work to potential employers.',
        tags: ['Javascript', 'React', 'Express', 'i18next', 'Git', 'Vercel', 'Tailwind', 'Node.js'],
        image: 'https://via.placeholder.com/400x200',
    },
];

const generateColorFromText = (text: string): { background: string; color: string } => {
    const hash = text.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const hue = Math.abs(hash) % 360;
    return {
        background: `hsl(${hue}, 70%, 90%)`,
        color: `hsl(${hue}, 70%, 30%)`,
    };
};

const Projects: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <div className="text-center md:text-left mb-8">
                <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent font-extrabold text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                    Built from Scratch
                </h2>
                <p className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                    I have <span className="text-cyan-200">built</span> these projects from{' '}
                    <span className="text-cyan-200">scratch</span>, applying the{' '}
                    <span className="text-cyan-200">knowledge</span> and{' '}
                    <span className="text-cyan-200">skills</span> I’ve gained through my{' '}
                    <span className="text-cyan-200">dedicated learning</span> of various{' '}
                    <span className="text-cyan-200">technologies</span> and{' '}
                    <span className="text-cyan-200">tools</span>.
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
                            alt={`${project.title} preview`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-gray-900 text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
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
                                <InteractiveHoverButton text="Website" />
                                <InteractiveHoverButton text="Code" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
