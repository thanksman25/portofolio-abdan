import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1 className="hero-intro fade-in-up delay-1">Hi, my name is</h1>
        <h2 className="hero-name fade-in-up delay-2">Abdan.</h2>
        <h3 className="hero-tagline fade-in-up delay-3">I build things for the web.</h3>
        <p className="hero-desc fade-in-up delay-4">
          I'm a software engineer and web developer specializing in building 
          exceptional digital experiences. Currently, I'm focused on building 
          accessible, human-centered products.
        </p>
        <div className="fade-in-up delay-5">
          <a href="#projects" className="btn-outline hero-btn">
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
