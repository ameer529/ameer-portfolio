import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">Ameer Hamza</span>. All rights reserved.
        </p>
        <div className="flex gap-4">
          {[
            { href: 'https://github.com/ameer529', icon: <FaGithub />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/ameer-hamza-43415b180/', icon: <FaLinkedin />, label: 'LinkedIn' },
            { href: 'mailto:ameerhamza112281@gmail.com', icon: <FaEnvelope />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-500 hover:text-rose-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
