import React from 'react';
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import './Social.css';

const Social = () => {
  return (
    <div className="social-sidebar fade-in-up delay-5">
      <ul className="social-list">
        <li><a href="https://github.com/thanksman25" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={20} /></a></li>
        <li><a href="https://www.instagram.com/abdan_syakura.by/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a></li>
        <li><a href="https://wa.me/6285951443082" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a></li>
        <li><a href="https://www.linkedin.com/in/abdan-syakura-bin-yasir-7b3ab4322?utm_source=share_via&utm_content=profile&utm_medium=member_ios" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a></li>
      </ul>
    </div>
  );
};

export default Social;
