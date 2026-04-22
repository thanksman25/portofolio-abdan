import React from 'react';
import { Github, Instagram, Twitter, Linkedin } from 'lucide-react';
import './Social.css';

const Social = () => {
  return (
    <div className="social-sidebar fade-in-up delay-5">
      <ul className="social-list">
        <li><a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={20} /></a></li>
        <li><a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a></li>
        <li><a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a></li>
        <li><a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a></li>
      </ul>
    </div>
  );
};

export default Social;
