import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';
import Email from './components/Email';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Social />
      <Email />
      <main className="content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
