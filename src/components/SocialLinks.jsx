import React, { useState } from 'react';
import '../assets/css/SocialLinks.css';

const SOCIAL_LINKS = [
    {
        href: 'https://www.linkedin.com/in/joseph-ordo%C3%B1ez/',
        icon: 'fab fa-linkedin',
        label: 'LinkedIn',
        color: '#0a66c2',
    },
    {
        href: 'https://github.com/Joseph-Alvarez',
        icon: 'fa-brands fa-github',
        label: 'GitHub',
        color: '#e6edf3',
    },
    {
        href: 'https://t.me/+50496778536',
        icon: 'fab fa-telegram',
        label: 'Telegram',
        color: '#26a5e4',
    },
    {
        href: 'https://www.facebook.com/josephonan.ordonezalvarez?mibextid=ZbWKwL',
        icon: 'fa-brands fa-facebook',
        label: 'Facebook',
        color: '#1877f2',
    },
    {
        href: 'https://wa.me/qr/A5BIVHFLOGYLL1',
        icon: 'fa-brands fa-whatsapp',
        label: 'WhatsApp',
        color: '#25d366',
    },
    {
        href: 'https://instagram.com/joseph_onan?igshid=ZDdkNTZiNTM=',
        icon: 'fa-brands fa-instagram',
        label: 'Instagram',
        color: '#e1306c',
    },
];

const SocialLinks = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <nav className="social-sidebar" aria-label="Redes sociales">
            <div className="social-line social-line-top" />

            {SOCIAL_LINKS.map(({ href, icon, label, color }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`social-icon-wrap${hovered === label ? ' social-hovered' : ''}`}
                    style={{ '--brand-color': color }}
                    onMouseEnter={() => setHovered(label)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <i className={icon} />
                    <span className="social-tooltip">{label}</span>
                </a>
            ))}

            <div className="social-line social-line-bottom" />
        </nav>
    );
};

export default SocialLinks;