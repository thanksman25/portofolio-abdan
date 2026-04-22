import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-heading">
        <span className="number">01.</span> About Me
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! My name is Abdan and I enjoy creating things that live on the internet. 
            My interest in web development started back when I was exploring how digital 
            interfaces are built, which taught me a lot about HTML, CSS, and modern web frameworks!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of building software and 
            digital experiences. My main focus these days is building accessible, inclusive 
            products and digital experiences for a variety of clients.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>PHP</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="about-pic">
          <div className="wrapper">
            <img src="/foto.jpeg" alt="Abdan" className="img" onError={(e) => {
              e.target.onerror = null; 
              e.target.src = '/abdan.jpeg';
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
