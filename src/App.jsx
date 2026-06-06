import React, { useState } from 'react';
import { VIEWS } from './constants';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import SocialLinks from './components/SocialLinks';
import Home from './components/Home';
import Technologies from './components/Technologies';
import Games from './components/Games';
import Projects from './components/Projects';
import WebApps from './components/WebApps';
import Contact from './components/Contact';

const App = () => {
  const [activeView, setActiveView] = useState(VIEWS.HOME);

  const renderContent = () => {
    switch (activeView) {
      case VIEWS.HOME: return <Home setActiveView={setActiveView} />;
      case VIEWS.LENGUAJES: return <Technologies />;
      case VIEWS.JUEGOS: return <Games />;
      case VIEWS.PROJECTS: return <Projects />;
      case VIEWS.PROGRAMAS: return <WebApps />;
      case VIEWS.CONTACT: return <Contact />;
      default: return <Home setActiveView={setActiveView} />;
    }
  };

  return (
    <div id="app-wrapper">
      <div id="particles-js" />

      <Navbar activeView={activeView} setActiveView={setActiveView} />
      <NavbarMobile activeView={activeView} setActiveView={setActiveView} />

      <div id="main-content">
        {renderContent()}
      </div>

      <SocialLinks />
    </div>
  );
};

export default App;