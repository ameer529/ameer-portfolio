import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 shadow-lg shadow-black/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="text-xl font-extrabold text-white hover:text-indigo-200 transition-colors"
        >
          Ameer<span className="text-rose-400">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm text-gray-300 hover:text-white transition-colors font-medium"
            >
              {link}
            </button>
          ))}
          <a
            href="/ameerhamzaROR.pdf"
            download="Ameer_Hamza_Resume.pdf"
            className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors font-medium border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
            </svg>
            Resume
          </a>
          <a
            href="mailto:ameerhamza112281@gmail.com"
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-rose-600/25 inline-block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-indigo-200 hover:text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-gray-300 hover:text-white py-1 text-base font-medium"
            >
              {link}
            </button>
          ))}
          <a
            href="/ameerhamzaROR.pdf"
            download="Ameer_Hamza_Resume.pdf"
            className="flex items-center gap-1.5 text-sm text-gray-300 border border-gray-700 px-4 py-2 rounded-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
            </svg>
            Download Resume
          </a>
          <a
            href="mailto:ameerhamza112281@gmail.com"
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-5 py-2 rounded-lg text-sm text-center transition-all duration-200 inline-block"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
