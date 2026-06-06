import React, { useEffect, useRef } from 'react';

const GAME_CARDS = [
    {
        src: '/img/Ping.jpg',
        border: '#4bb95e',
        title: 'Ping Pong',
        desc: 'Juego clásico de ping pong con controles de teclado y sistema de puntuación.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: '#',
    },
    {
        src: '/img/flappy.jpg',
        border: '#ec1313',
        title: 'Flappy Bird',
        desc: 'Clon del icónico juego con físicas de gravedad y obstáculos aleatorios.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: '#',
    },
    {
        src: '',
        border: '#7c6fee',
        title: 'Próximamente',
        desc: 'Nuevo juego en desarrollo.',
        tech: [],
        link: '',
    },
    {
        src: '',
        border: '#7c6fee',
        title: 'Próximamente',
        desc: 'Nuevo juego en desarrollo.',
        tech: [],
        link: '',
    },
];

const Games = () => {
    const animationRef = useRef(null);

    useEffect(() => {
        if (animationRef.current && window.bodymovin) {
            const anim = window.bodymovin.loadAnimation({
                container: animationRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/data/Games_3.json',
            });
            return () => anim.destroy();
        }
    }, []);

    return (
        <section id="contenido-3">
            <div className="animation-side3">
                <div ref={animationRef} id="animation4" />
            </div>

            <div className="cards-side4">
                {GAME_CARDS.map(({ src, border, title, desc, tech, link }, i) => {
                    const isEmpty = !src;
                    return (
                        <div key={i} className={`card4${isEmpty ? ' card4--empty' : ''}`}>
                            <div className="card-img-wrap4">
                                {isEmpty ? (
                                    <div className="card-placeholder4">
                                        <span className="card-placeholder-icon4">🎮</span>
                                        <span className="card-placeholder-text4">En construcción</span>
                                    </div>
                                ) : (
                                    <>
                                        <img
                                            className="web4"
                                            src={src}
                                            alt={title}
                                        />
                                        <div
                                            className="card-accent4"
                                            style={{ background: border }}
                                        />
                                        {link && (
                                            <a
                                                href={link}
                                                className="card-overlay4"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Ver ${title}`}
                                            >
                                                <span className="card-overlay-icon4">↗</span>
                                            </a>
                                        )}
                                    </>
                                )}
                            </div>

                            <div className="card-body4">
                                <div className="card-header4">
                                    <h3 className="card-title4">{title}</h3>
                                    {!isEmpty && (
                                        <div
                                            className="card-dot4"
                                            style={{ background: border }}
                                        />
                                    )}
                                </div>
                                <p className="card-desc4">{desc}</p>
                                {tech.length > 0 && (
                                    <div className="card-tags4">
                                        {tech.map((t) => (
                                            <span key={t} className="tag4">{t}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Games;