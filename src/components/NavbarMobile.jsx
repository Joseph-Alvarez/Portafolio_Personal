import React from 'react';
import { VIEWS } from '../constants';

const NAV_ITEMS = [
    { label: 'Home', view: VIEWS.HOME },
    { label: 'Technologies', view: VIEWS.LENGUAJES },
    { label: 'Games', view: VIEWS.JUEGOS },
    { label: 'Projects', view: VIEWS.PROJECTS },
    { label: 'Web Apps', view: VIEWS.PROGRAMAS },
];

const NavbarMobile = ({ activeView, setActiveView }) => {
    return (
        <ul className="menu d-none d-block d-lg-none">
            {NAV_ITEMS.map(({ label, view }) => (
                <li
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`nav-item nav-link${activeView === view ? ' select-opt' : ''}`}
                >
                    <h1 style={{ whiteSpace: 'nowrap' }}>{label}</h1>
                </li>
            ))}
        </ul>
    );
};

export default NavbarMobile;