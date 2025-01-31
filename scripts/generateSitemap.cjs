const fs = require('fs');
const path = require('path');

// 🛠 Definir las páginas estáticas importantes
const pages = [
    { url: 'https://tu-dominio.com/', priority: 1.0 },
    { url: 'https://tu-dominio.com/about', priority: 0.8 },
    { url: 'https://tu-dominio.com/projects', priority: 0.8 },
    { url: 'https://tu-dominio.com/skills', priority: 0.8 },
    { url: 'https://tu-dominio.com/contact', priority: 0.8 },
    { url: 'https://tu-dominio.com/work-experience', priority: 0.8 },
    { url: 'https://tu-dominio.com/education', priority: 0.8 },
    { url: 'https://tu-dominio.com/privacy-policy', priority: 0.7 },
];

// 🔥 Cargar proyectos dinámicos desde projectList.js
const projectsPath = path.join(__dirname, '../src/components/projects/projectList.js');
if (fs.existsSync(projectsPath)) {
    const { projects } = require(projectsPath);
    projects.forEach((project) => {
        pages.push({ url: `https://tu-dominio.com/projects/${project.titleKey}`, priority: 0.6 });
    });
}

// 📅 Fecha de última modificación
const lastmod = new Date().toISOString().split('T')[0];

// 📜 Generar el contenido del sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
        .map(
            (page) => `
    <url>
        <loc>${page.url}</loc>
        <lastmod>${lastmod}</lastmod>
        <priority>${page.priority}</priority>
    </url>`
        )
        .join('')}
</urlset>`;

// 📂 Guardar el sitemap en public/
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log('✅ Sitemap actualizado con URLs dinámicas y guardado en public/sitemap.xml');
