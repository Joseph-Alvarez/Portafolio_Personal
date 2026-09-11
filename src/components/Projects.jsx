import React, { useState } from 'react';
import '../assets/css/Projects.css';

const PROJECTS = [
    {
        id: 1,
        name: 'Tienda en Linea MobileTech',
        desc: 'MobileTech es una Plataforma web dedicada a la venta de accesorios para celulares y laptops, con catálogo organizado por categorías mostrando los productos disponibles.',
        tags: ['React', 'Tailwind CSS'],
        db: 'Supabase',
        demo: 'https://mobile-tech-hn.vercel.app/',
        code: 'https://github.com/Joseph-Alvarez/Mobile_Tech',
        image: '/img/MobileTech.png',
    },
    {
        id: 2,
        name: 'Plataforma de Delivery "MOVU"',
        desc: 'MOVU, una aplicación móvil especializada exclusivamente en servicios de fletes y mudanzas en Honduras.',
        tags: ['NodeJs', 'React', 'NextJs'],
        db: 'Supabase',
        demo: 'https://movu-o7mxufdp8-albertorg153s-projects.vercel.app',
        code: 'https://github.com/AlbertoRG153/movu',
        image: '/img/Proyecto_1.jpg',
    },
    {
        id: 3,
        name: 'Plataforma Crowdfunding',
        desc: 'Plataforma que conecta productores locales con inversionistas, facilitando el acceso a financiamiento mediante un sistema con módulos de registro, perfiles de usuario, pool de proyectos, métodos de pago y panel administrativo',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        db: 'Supabase',
        demo: 'https://crowdfunding-platform-2026.vercel.app/',
        code: 'https://github.com/Joseph-Alvarez/Crowdfunding_Platform_2026',
        image: '/img/Proyecto_3.png',
    },
    {
        id: 4,
        name: 'Dashboard con Autenticación',
        desc: 'Plataforma web que incluye sistema de autenticación,con diseño oscuro moderno, y un panel de control organizado por áreas departamentales con control de acceso basado en permisos.',
        tags: ['NodeJs', 'Chart.js'],
        db: 'SQL Server',
        demo: 'https://tu-demo.com',
        code: 'https://github.com/Joseph-Alvarez/PROYECTO_DASHBOARD',
        image: '/img/Proyecto_4a.png',
    },
    {
        id: 5,
        name: 'Dashboard',
        desc: 'Aplicación web CRUD para gestión de usuarios, con operaciones de creación, edición y eliminación. Desarrollada con ASP.NET Core Razor Pages y Entity Framework Core para el acceso a datos.',
        tags: ['C#', 'ASP.NET Core'],
        db: 'SQL Sever',
        demo: 'https://tu-demo.com',
        code: 'https://github.com/Joseph-Alvarez/CRUD',
        image: '/img/Proyecto_5.png',
    },

];

const ALL_TAGS = ['Todos', ...new Set(PROJECTS.flatMap(p => p.tags))];

const Projects = () => {
    const [active, setActive] = useState('Todos');
    const [previewImg, setPreviewImg] = useState(null); // { src, alt }

    const filtered = active === 'Todos'
        ? PROJECTS
        : PROJECTS.filter(p => p.tags.includes(active));

    const openPreview = (src, alt) => setPreviewImg({ src, alt });
    const closePreview = () => setPreviewImg(null);

    return (
        <section id="contenido-projects">

            <div className="projects-header">
                <div className="projects-eyebrow">Portafolio</div>
                <h2 className="projects-title">
                    Mis <span className="projects-title-accent">Proyectos</span>
                </h2>
                <p className="projects-subtitle">
                    Una selección de lo que he construido
                </p>
            </div>

            {/* Filtros */}
            <div className="projects-filters">
                {ALL_TAGS.map(tag => (
                    <button
                        key={tag}
                        className={`filter-btn${active === tag ? ' filter-btn-active' : ''}`}
                        onClick={() => setActive(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="projects-grid">
                {filtered.map(({ id, name, desc, tags, db, demo, code, color, isNew, image }) => (
                    <div key={id} className="project-card">
                        <div
                            className="project-card-img"
                            onClick={() => openPreview(image, `Preview de ${name}`)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter') openPreview(image, `Preview de ${name}`); }}
                        >
                            <img
                                src={image}
                                alt={`Preview de ${name}`}
                                className="project-card-screenshot"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.style.background = color;
                                }}
                            />
                            {isNew && <span className="badge-new">Nuevo</span>}
                        </div>
                        <div className="project-card-body">
                            <p className="project-card-name">{name}</p>
                            <p className="project-card-desc">{desc}</p>

                            {/* Lenguajes / Tecnologías */}
                            <div className="project-card-tags">
                                {tags.map(t => (
                                    <span key={t} className="project-tag">{t}</span>
                                ))}
                            </div>

                            {/* Base de datos */}
                            {db && (
                                <div className="project-card-db">
                                    {(Array.isArray(db) ? db : [db]).map(d => (
                                        <span key={d} className="project-tag tag-db"> {d}</span>
                                    ))}
                                </div>
                            )}

                            <div className="project-card-links">
                                {demo && (
                                    <a href={demo} target="_blank" rel="noreferrer" className="project-link link-demo">
                                        Demo →
                                    </a>
                                )}
                                <a href={code} target="_blank" rel="noreferrer" className="project-link link-code">
                                    Código
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="projects-empty">
                    No hay proyectos con esa tecnología aún.
                </div>
            )}

            {/* Modal / Lightbox */}
            {previewImg && (
                <div className="image-modal-overlay" onClick={closePreview}>
                    <button className="image-modal-close" onClick={closePreview} aria-label="Cerrar">
                        ✕
                    </button>
                    <img
                        src={previewImg.src}
                        alt={previewImg.alt}
                        className="image-modal-full"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Projects;