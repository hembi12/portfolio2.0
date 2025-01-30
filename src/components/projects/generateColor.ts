// src/components/projects/generateColor.ts
export const generateColorFromText = (text: string): { background: string; color: string } => {
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

    return colorMap[text] || { background: '#ddd', color: '#000' };
};