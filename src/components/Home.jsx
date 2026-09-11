import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { VIEWS } from '../constants';
import '../assets/css/Home.css';

const Home = ({ setActiveView }) => {
    const typedRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (!typedRef.current) return;
        const typed = new Typed(typedRef.current, {
            strings: [
                "Ingeniero en Sistemas.",
                "Desarrollador Full Stack.",
                "Apasionado por el código.",
            ],
            typeSpeed: 55,
            backSpeed: 30,
            startDelay: 400,
            backDelay: 1800,
            loop: true,
        });
        return () => typed.destroy();
    }, []);

    useEffect(() => {
        const bodymovin = window.bodymovin || window.lottie;
        if (!animationRef.current || !bodymovin) return;
        const anim = bodymovin.loadAnimation({
            container: animationRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/data/Developer_1.json',
        });
        return () => anim.destroy();
    }, []);

    const techs = ['React', 'JavaScript', 'C# Sharp', , 'Java', 'Python', 'HTML/CSS', 'SQL Sever'];

    const stats = [
        { num: '1+', label: 'Años de exp.' },
        { num: '5+', label: 'Proyectos' },
        { num: '5+', label: 'Tecnologías' },
    ];

    return (
        <>
            <section id="contenido-1">
                <div className="porta">

                    <div className="availability-badge">
                        <span className="availability-dot" />
                        Disponible para proyectos
                    </div>

                    <h1 className="hero-name">
                        Hola, soy <span className="hero-name-accent">Joseph Ordoñez</span>
                    </h1>

                    <div className="typed-wrapper">
                        <span ref={typedRef} id="typed-text" />
                    </div>

                    <div className="perfil-wrap">
                        <img id="perfil" src="/img/Perfil.jpg" alt="Joseph Ordoñez" />
                    </div>

                    <div className="tech-pills">
                        {techs.map(t => (
                            <span key={t} className="tech-pill">{t}</span>
                        ))}
                    </div>

                    <div className="cta-group">
                        <button
                            onClick={() => setActiveView(VIEWS.PROJECTS)}
                            className="btn-cta btn-primary-cta"
                        >
                            Ver proyectos
                        </button>
                        <a href="/cv/Joseph_Ordoñez_CV.pdf" download className="btn-cta btn-secondary-cta">
                            Descargar CV
                        </a>
                    </div>
                </div>

                <div ref={animationRef} id="animation" />
            </section>

            <div className="stats-bar">
                {stats.map(({ num, label }) => (
                    <div key={label} className="stat-item">
                        <span className="stat-num">{num}</span>
                        <span className="stat-label">{label}</span>
                    </div>
                ))}
            </div>

            <section id="contenido-2">
                <img
                    src="/img/1.jpg"
                    className="porta2 rounded-start"
                    alt="Información"
                />

                <div id="primer-contenido">
                    <div className="card-body2">
                        <div className="content">
                            <p className="heading">
                                <span className="heading-accent">_</span> Acerca de mí
                            </p>
                            <p className="para">
                                ¡Hola! Soy <strong>Joseph Ordoñez</strong>, Ingeniero en Sistemas.
                                Desde que descubrí mi pasión por la programación y el diseño web,
                                me he enfocado en desarrollar mis habilidades para convertirme en
                                un profesional altamente competente.
                                <br /><br />
                                Soy una persona responsable y comprometida con cada proyecto.
                                Disfruto trabajar en equipo y considero que la colaboración es
                                esencial para lograr resultados excepcionales.
                                <br /><br />
                                Mi objetivo siempre es aportar mis conocimientos para alcanzar
                                los objetivos del equipo de manera eficiente.
                            </p>

                            <div className="card-stats">
                                {stats.map(({ num, label }) => (
                                    <div key={label} className="card-stat">
                                        <span className="card-stat-num">{num}</span>
                                        <span className="card-stat-label">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;