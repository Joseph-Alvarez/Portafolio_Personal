import React, { useEffect, useRef } from 'react';

const TECH_DATA = [
    { src: '/img/CSharp.svg', alt: 'C#', level: 74, category: 'Lenguajes' },
    { src: '/img/java.svg', alt: 'Java', level: 74, category: 'Lenguajes' },
    { src: '/img/javascript.svg', alt: 'JavaScript', level: 74, category: 'Lenguajes' },
    { src: '/img/html.svg', alt: 'HTML5', level: 90, category: 'Frontend' },
    { src: '/img/css3.svg', alt: 'CSS', level: 85, category: 'Frontend' },
    { src: '/img/react2.svg', alt: 'React', level: 74, category: 'Frontend' },
    { src: '/img/bootstrap.svg', alt: 'Bootstrap', level: 75, category: 'Frontend' },
    { src: '/img/nodejs.svg', alt: 'Node.js', level: 70, category: 'Backend' },
    { src: '/img/python.svg', alt: 'Python', level: 65, category: 'Backend' },
    { src: '/img/net.svg', alt: '.NET', level: 60, category: 'Backend' },
    { src: '/img/supabase.svg', alt: 'Supabase', level: 74, category: 'Base de Datos' },
    { src: '/img/sql.svg', alt: 'SQL Server', level: 70, category: 'Base de Datos' },
    { src: '/img/mysql.svg', alt: 'MySQL', level: 74, category: 'Base de Datos' },
];

const LEVEL_LABEL = (n) => n >= 88 ? 'Experto' : n >= 75 ? 'Avanzado' : 'Intermedio';

const CATEGORIES = ['Lenguajes', 'Frontend', 'Backend', 'Base de Datos'];

const Technologies = () => {
    const animationRef = useRef(null);

    useEffect(() => {
        if (animationRef.current && window.bodymovin) {
            const anim = window.bodymovin.loadAnimation({
                container: animationRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/data/Lenguajes_2.json',
            });
            return () => anim.destroy();
        }
    }, []);

    return (
        <section id="contenido-2">
            <div className="animation-side6">
                <div ref={animationRef} id="animation3" />
            </div>

            <div className="tech-panel">
                <p className="tech-intro">Herramientas y lenguajes con los que trabajo</p>

                {CATEGORIES.map((cat) => (
                    <div key={cat} className="tech-category">
                        <span className="tech-category-label">{cat}</span>
                        <div className="tech-grid">
                            {TECH_DATA.filter((t) => t.category === cat).map(({ src, alt, level }) => (
                                <div key={alt} className="tech-card">
                                    <img className="tech-logo" src={src} alt={alt} />
                                    <div className="tech-info">
                                        <span className="tech-name">{alt}</span>
                                        <div className="tech-bar-bg">
                                            <div
                                                className="tech-bar"
                                                style={{ '--bar-width': `${level}%` }}
                                            />
                                        </div>
                                        <span className="tech-level">{LEVEL_LABEL(level)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;