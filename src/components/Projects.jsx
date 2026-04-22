import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Boncar - Carbon Calculator',
      description: 'A web application that helps users calculate their daily carbon footprint and provides actionable insights to reduce environmental impact. Features include dynamic data visualization and interactive forms.',
      techStack: ['React', 'CSS', 'JavaScript'],
      github: '#',
      external: 'https://boncar-carboncalculator.vercel.app',
      image: '/boncar.jpeg'
    },
    {
      title: 'SiagaKita App UI',
      description: 'A comprehensive mobile emergency response application interface. Includes an SOS trigger, multi-step registration with biometric KYC, and a detailed disaster reporting screen.',
      techStack: ['Flutter', 'Dart', 'Firebase'],
      github: '#',
      external: '#',
      image: '/eduparlemen.png' // using available placeholder image
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">
        <span className="number">03.</span> Some Things I've Built
      </h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <a href={project.external} target="_blank" rel="noopener noreferrer">
                <div className="img-wrapper">
                  <img src={project.image} alt={project.title} />
                </div>
              </a>
            </div>
            <div className="project-content">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">
                <a href={project.external} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              <ul className="project-tech-list">
                {project.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href={project.external} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
