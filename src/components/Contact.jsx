import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/Contact.css';


const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const CONTACT_INFO = [
    {
        icon: '✉️',
        label: 'Email',
        value: 'phordonez42@gmail.com',
        href: 'mailto:phordonez42@gmail.com',
    },
    {
        icon: '💬',
        label: 'WhatsApp / Telegram',
        value: '+504 9677-8536',
        href: 'https://wa.me/qr/A5BIVHFLOGYLL1',
    },
    {
        icon: '📍',
        label: 'Ubicación',
        value: 'Honduras · Remoto disponible',
        href: null,
    },
    {
        icon: '🐙',
        label: 'GitHub',
        value: 'github.com/Joseph-Alvarez',
        href: 'https://github.com/Joseph-Alvarez',
    },
];

const SUBJECTS = [
    'Proyecto',
    'Otro',
];

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', subject: SUBJECTS[0], message: '' });
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Ingresa tu nombre';
        if (!form.email.trim()) e.email = 'Ingresa tu email';
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido';
        if (!form.message.trim()) e.message = 'Escribe tu mensaje';
        return e;
    };

    const handleChange = ({ target: { name, value } }) => {
        setForm(f => ({ ...f, [name]: value }));
        if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setStatus('sending');
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setForm({ name: '', email: '', subject: SUBJECTS[0], message: '' });
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        }
    };

    return (
        <section id="contenido-contact">

            <div className="contact-header">
                <div className="contact-eyebrow">Contacto</div>
                <h2 className="contact-title">
                    ¿Hablamos de tu <span className="contact-title-accent">proyecto</span>?
                </h2>
                <p className="contact-subtitle">Respondo en menos de 24 horas</p>
            </div>

            <div className="contact-grid">

                {/* ── Columna izquierda: info ── */}
                <div className="contact-info">

                    <div className="avail-card">
                        <span className="avail-dot" />
                        <span className="avail-text">Disponible para proyectos</span>
                    </div>

                    {CONTACT_INFO.map(({ icon, label, value, href }) => (
                        <div key={label} className="info-card">
                            <div className="info-icon">{icon}</div>
                            <div>
                                <p className="info-label">{label}</p>
                                {href
                                    ? <a href={href} target="_blank" rel="noreferrer" className="info-value info-link">{value}</a>
                                    : <p className="info-value">{value}</p>
                                }
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Columna derecha: formulario ── */}
                <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>

                    <div className="form-row">
                        <div className="field">
                            <label htmlFor="name">Nombre</label>
                            <input
                                id="name"
                                name="from_name"
                                type="text"
                                placeholder="Tu nombre"
                                value={form.name}
                                onChange={e => handleChange({ target: { name: 'name', value: e.target.value } })}
                                className={errors.name ? 'input-error' : ''}
                            />
                            {errors.name && <span className="field-error">{errors.name}</span>}
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="from_email"
                                type="email"
                                placeholder="tu@email.com"
                                value={form.email}
                                onChange={e => handleChange({ target: { name: 'email', value: e.target.value } })}
                                className={errors.email ? 'input-error' : ''}
                            />
                            {errors.email && <span className="field-error">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="subject">Asunto</label>
                        <select
                            id="subject"
                            name="subject"
                            value={form.subject}
                            onChange={e => handleChange({ target: { name: 'subject', value: e.target.value } })}
                        >
                            {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Cuéntame de tu proyecto..."
                            value={form.message}
                            onChange={e => handleChange({ target: { name: 'message', value: e.target.value } })}
                            className={errors.message ? 'input-error' : ''}
                            rows={5}
                        />
                        {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className={`btn-send${status === 'sending' ? ' btn-sending' : ''}`}
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje →'}
                    </button>

                    {status === 'success' && (
                        <div className="form-feedback form-success">
                            ✅ ¡Mensaje enviado! Te responderé pronto.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="form-feedback form-error">
                            ❌ Hubo un error. Intenta por WhatsApp o email.
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;