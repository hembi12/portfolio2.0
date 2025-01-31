export interface Project {
    readonly titleKey: string;
    readonly descriptionKey: string;
    readonly tags: readonly string[];
    readonly image: string;
    readonly website: string;
    readonly repository: string;
}

export const projects: ReadonlyArray<Project> = [
    {
        titleKey: 'projects.portfolioV1.title',
        descriptionKey: 'projects.portfolioV1.description',
        tags: ['Javascript', 'React', 'Express', 'i18next', 'Git', 'Vercel', 'Tailwind', 'Node.js'],
        image: 'src/assets/project4.png', // ✅ Corrección de ruta
        website: 'https://www.hectormartil.dev/',
        repository: 'https://github.com/hembi12/my-portfolio',
    },
    {
        titleKey: 'projects.landingPage.title',
        descriptionKey: 'projects.landingPage.description',
        tags: ['Javascript', 'React', 'Express', 'i18next', 'Git', 'Vercel', 'Tailwind', 'Node.js'],
        image: 'src/assets/project1.png', // ✅ Corrección de ruta
        website: 'https://landing-page-woad-pi-82.vercel.app/',
        repository: 'https://github.com/hembi12/landing-page',
    },
    {
        titleKey: 'projects.birthdayInvitation.title',
        descriptionKey: 'projects.birthdayInvitation.description',
        tags: ['HTML 5', 'CSS', 'Javascript', 'Bootstrap', 'Git', 'Firebase'],
        image: 'src/assets/project3.png', // ✅ Corrección de ruta
        website: 'https://rsvp-cumple.web.app/',
        repository: 'https://github.com/hembi12/cumplea-os_30',
    },
    {
        titleKey: 'projects.dentalClinic.title',
        descriptionKey: 'projects.dentalClinic.description',
        tags: ['Typescript', 'Next.js', 'React', 'Git', 'Vercel', 'Tailwind', 'Node.js'],
        image: 'src/assets/project2.png', // ✅ Corrección de ruta
        website: 'https://appointments-liard.vercel.app/',
        repository: 'https://github.com/hembi12/appointments',
    },
];
