import React from 'react';
import { Instagram, Github, Linkedin, Twitter, Mail } from 'lucide-react';
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
      <a className="btn-outline contact-btn" href="mailto:hello@example.com">
        Say Hello
      </a>
      
      <div className="social-links-footer">
        <a href="#" aria-label="GitHub"><Github size={20} /></a>
        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
        <a href="#" aria-label="Linkedin"><Linkedin size={20} /></a>
      </div>
    </section>
  );
};

export default Contact;
