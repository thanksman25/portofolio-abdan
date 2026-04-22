import React from 'react';
import { Instagram, Github, Linkedin, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-overline">04. What's Next?</h2>
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-desc">
        Although I'm not currently looking for any new opportunities, my inbox is always open. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a className="btn-outline contact-btn" href="mailto:syakuraabdanby@gmail.com">
        Say Hello
      </a>
      
      <div className="social-links-footer">
        <a href="https://github.com/thanksman25" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
        <a href="https://www.instagram.com/abdan_syakura.by/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
        <a href="https://wa.me/6285951443082" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
        <a href="https://www.linkedin.com/in/abdan-syakura-bin-yasir-7b3ab4322?utm_source=share_via&utm_content=profile&utm_medium=member_ios" aria-label="Linkedin" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
      </div>
    </section>
  );
};

export default Contact;
