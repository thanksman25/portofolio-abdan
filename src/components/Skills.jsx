import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: '90%' },
    { name: 'CSS3 / SASS', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '70%' },
    { name: 'PHP', level: '75%' },
    { name: 'Tailwind CSS', level: '85%' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-heading">
        <span className="number">02.</span> My Skills
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            <div className="skill-bar-bg">
              <div 
                className="skill-bar-fill" 
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
