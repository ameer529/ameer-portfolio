import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { href: 'https://github.com/ameer529', icon: <FaGithub size={15} />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ameer-hamza-43415b180/', icon: <FaLinkedin size={15} />, label: 'LinkedIn' },
  { href: 'mailto:ameerhamza112281@gmail.com', icon: <FaEnvelope size={15} />, label: 'Email' },
];

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">

      {/* CTA strip */}
      <div className="border-b border-gray-800 py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="section-tag mb-3">Let's Connect</p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Have a project in mind?
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
            I'm open to full-time roles, contracts, and consulting — let's talk.
          </p>
          <a href="mailto:ameerhamza112281@gmail.com" className="btn-primary text-sm px-6 py-2.5">
            Send an Email
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* Brand */}
          <div>
            <p className="text-xl font-extrabold text-white mb-1">
              Ameer<span className="text-rose-600">.</span>
            </p>
            <p className="text-gray-500 text-xs max-w-xs leading-relaxed">
              Senior Ruby on Rails Developer specializing in
              Health Tech &amp; FinTech products.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Navigation</p>
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Connect</p>
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Ameer Hamza. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with <FaHeart className="text-rose-500 mx-1" size={10} /> React &amp; Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
