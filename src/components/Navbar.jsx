import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="logo fade-in-up delay-1">
          <a href="#">A</a>
        </div>
        <div className="nav-links">
          <ol>
            <li className="fade-in-up delay-1"><a href="#about">About</a></li>
            <li className="fade-in-up delay-2"><a href="#skills">Skills</a></li>
            <li className="fade-in-up delay-3"><a href="#projects">Projects</a></li>
            <li className="fade-in-up delay-4"><a href="#contact">Contact</a></li>
          </ol>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
