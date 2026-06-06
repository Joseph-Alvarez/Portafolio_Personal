import React, { useEffect, useRef } from 'react';

const WEBAPP_CARDS = [
    {
        src: '/img/Netflix.jpg',
        border: '#4bb95e',
        title: 'Netflix Clone',
        desc: 'Réplica visual de la interfaz de Netflix con diseño responsivo y componentes de cards.',
        tech: ['HTML', 'CSS', 'Bootstrap'],
        link: '#',
    },
    {
        src: '/img/LUGO.jpg',
        border: '#ec1313',
        title: 'LUGO App',
        desc: 'Maquetación completa de una plataforma empresarial con navegación y layouts complejos.',
        tech: ['HTML', 'CSS', 'Bootstrap'],
        link: '#',
    },
    {
        src: '/img/facebook.jpg',
        border: '#ddf314',
        title: 'Facebook Clone',
        desc: 'Clon de la interfaz de Facebook con feed, sidebar y componentes de publicaciones.',
        tech: ['HTML', 'CSS', 'Bootstrap'],
        link: '#',
    },
    {
        src: '/img/Play Store.jpg',
        border: '#2926ce',
        title: 'Play Store UI',
        desc: 'Réplica de Google Play Store con grid de apps, categorías y diseño responsivo.',
        tech: ['HTML', 'CSS', 'Bootstrap'],
        link: '#',
    },
];

const WebApps = () => {
    const animationRef = useRef(null);

    useEffect(() => {
        if (animationRef.current && window.bodymovin) {
            const anim = window.bodymovin.loadAnimation({
                container: animationRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/data/paginas_5.json',
            });
            return () => anim.destroy();
        }
    }, []);

    return (
        <section id="contenido-5">
            <div className="animation-side4">
                <div ref={animationRef} id="animation6" />
            </div>

            <div className="cards-side3">
                {WEBAPP_CARDS.map(({ src, border, title, desc, tech, link }) => (
                    <div key={title} className="card3">
                        <div className="card-img-wrap3">
                            <img
                                className="web3"
                                src={src}
                                alt={title}
                            />
                            <div
                                className="card-accent3"
                                style={{ background: border }}
                            />
                            <a
                                href={link}
                                className="card-overlay3"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ver ${title}`}
                            >
                                <span className="card-overlay-icon3">↗</span>
                            </a>
                        </div>

                        <div className="card-body3">
                            <div className="card-header3">
                                <h3 className="card-title3">{title}</h3>
                                <div
                                    className="card-dot3"
                                    style={{ background: border }}
                                />
                            </div>
                            <p className="card-desc3">{desc}</p>
                            <div className="card-tags3">
                                {tech.map((t) => (
                                    <span key={t} className="tag3">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WebApps;