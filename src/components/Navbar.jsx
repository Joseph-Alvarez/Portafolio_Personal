import React, { useState, useEffect } from 'react';
import { VIEWS } from '../constants';

const NAV_ITEMS = [
    { label: 'Home', view: VIEWS.HOME },
    { label: 'Technologies', view: VIEWS.LENGUAJES },
    // { label: 'Projects', view: VIEWS.PROJECTS },
    { label: 'Web Apps', view: VIEWS.PROGRAMAS },
    { label: 'Games', view: VIEWS.JUEGOS },
];

const Navbar = ({ activeView, setActiveView }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar-custom fixed-top${scrolled ? ' navbar-scrolled' : ''}`}>
            {/* ── Logo ── */}
            <span className="navbar-logo" onClick={() => setActiveView(VIEWS.HOME)}>
                Joseph Ordoñez<span className="logo-dot">.</span>
            </span>

            {/* ── Links desktop ── */}
            <ul className="navbar-links">
                {NAV_ITEMS.map(({ label, view }) => (
                    <li key={view}>
                        <button
                            onClick={() => setActiveView(view)}
                            className={`nav-pill${activeView === view ? ' nav-pill-active' : ''}`}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* ── CTA desktop ── */}
            <button onClick={() => setActiveView(VIEWS.CONTACT)} className="navbar-cta">
                Contáctame
            </button>

            {/* ── Hamburger móvil ── */}
            <button
                className={`hamburger${menuOpen ? ' hamburger-open' : ''}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Menú"
            >
                <span /><span /><span />
            </button>

            {/* ── Menú móvil ── */}
            {menuOpen && (
                <div className="mobile-menu">
                    {NAV_ITEMS.map(({ label, view }) => (
                        <button
                            key={view}
                            onClick={() => { setActiveView(view); setMenuOpen(false); }}
                            className={`mobile-nav-item${activeView === view ? ' mobile-nav-active' : ''}`}
                        >
                            {label}
                        </button>
                    ))}
                    <button onClick={() => setActiveView(VIEWS.CONTACT)} className="mobile-cta">
                        Contáctame
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;