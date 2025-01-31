interface ColorSchema {
    readonly background: string;
    readonly color: string;
}

const colorMap: Record<string, ColorSchema> = {
    'javascript': { background: '#f7df1e', color: '#000' },
    'react': { background: '#61dafb', color: '#20232a' },
    'express': { background: '#404040', color: '#fff' },
    'i18next': { background: '#007acc', color: '#fff' },
    'git': { background: '#f05033', color: '#fff' },
    'vercel': { background: '#000', color: '#fff' },
    'tailwind': { background: '#38bdf8', color: '#fff' },
    'node.js': { background: '#026e00', color: '#fff' },
    'html 5': { background: '#e34f26', color: '#fff' },
    'css': { background: '#1572b6', color: '#fff' },
    'bootstrap': { background: '#7952b3', color: '#fff' },
    'firebase': { background: '#ffca28', color: '#000' },
    'typescript': { background: '#3178c6', color: '#fff' },
    'next.js': { background: '#000', color: '#fff' },
};

export const generateColorFromText = (text: string): ColorSchema => {
    const normalizedText = text.trim().toLowerCase();
    return colorMap[normalizedText] || { background: '#ddd', color: '#000' };
};