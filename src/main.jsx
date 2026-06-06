import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/css/Global.css';
import './assets/css/Home.css';
import './assets/css/Contact.css';
import './assets/css/Technologies.css';
import './assets/css/Games.css';
import './assets/css/Projects.css';
import './assets/css/WebApps.css';
import './assets/css/Navbar.css';
import './assets/css/SocialLinks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../src/assets/data/particles-js.json';

window.addEventListener('DOMContentLoaded', () => {
  if (window.particlesJS) {
    window.particlesJS.load('particles-js', '/data/particles-js.json', () => {
      console.log('particles.js loaded');
    });
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);