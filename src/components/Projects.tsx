import React from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';

const projects = [
    {
        title: 'llm.report',
        description:
            'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
        tags: [
            'Next.js',
            'Typescript',
            'PostgreSQL',
            'Prisma',
            'TailwindCSS',
            'Shadcn UI',
            'Magic UI',
            'Stripe',
            'Cloudflare Workers',
        ],
        image: 'https://via.placeholder.com/400x200', // Placeholder de imagen
    },
    {
        title: 'Automatic Chat',
        description:
            'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
        tags: [
            'Next.js',
            'Typescript',
            'PostgreSQL',
            'Prisma',
            'TailwindCSS',
            'Shadcn UI',
            'Magic UI',
            'Stripe',
            'Cloudflare Workers',
        ],
        image: 'https://via.placeholder.com/400x200', // Placeholder de imagen
    },
];

const generateColorFromText = (text: string): { background: string; color: string } => {
    const hash = text.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const hue = Math.abs(hash) % 360;
    return {
        background: `hsl(${hue}, 70%, 90%)`, // Pastel background color
        color: `hsl(${hue}, 70%, 30%)`, // Contrasting text color
    };
};

export const Projects: React.FC = () => {
    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <div className="text-center md:text-left mb-8">
                <h2 className="bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold mb-4">My Projects</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Here are some of the projects I have worked on recently, showcasing my skills in web development, 
                    open-source contributions, and modern UI/UX design.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col rounded-lg shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                        {/* Border Beam */}
                        <BorderBeam size={250} duration={12} delay={index * 2} />

                        {/* Imagen previa del proyecto */}
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="w-full h-48 object-cover"
                        />

                        {/* Contenido del proyecto */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
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
                            {/* Botones */}
                            <div className="mt-auto flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <InteractiveHoverButton text="Website" />
                                <InteractiveHoverButton text="Source" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
