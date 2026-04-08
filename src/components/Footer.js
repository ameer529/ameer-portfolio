import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { href: 'https://github.com/ameer529', icon: <FaGithub size={16} />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ameer-hamza-43415b180/', icon: <FaLinkedin size={16} />, label: 'LinkedIn' },
  { href: 'mailto:ameerhamza112281@gmail.com', icon: <FaEnvelope size={16} />, label: 'Email' },
];

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800/60">

      {/* CTA strip */}
      <div className="border-b border-zinc-800/60 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-rose-500 mb-3">Let's Connect</p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Have a project in mind?
          </h3>
          <p className="text-zinc-500 text-sm mb-6 max-w-sm mx-auto">
            I'm open to full-time roles, contracts, and consulting — let's talk.
          </p>
          <a
            href="mailto:ameerhamza112281@gmail.com"
            className="btn-primary inline-block text-sm px-6 py-2.5"
          >
            Send an Email
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* Brand */}
          <div>
            <p className="text-xl font-extrabold text-white mb-1">
              Ameer<span className="text-rose-500">.</span>
            </p>
            <p className="text-zinc-500 text-xs max-w-xs leading-relaxed">
              Senior Ruby on Rails Developer specializing in
              Health Tech, FinTech &amp; EdTech products.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">Navigation</p>
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">Connect</p>
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-rose-400 transition-colors"
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800/60 py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
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
