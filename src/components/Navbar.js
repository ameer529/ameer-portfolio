import React, { useEffect, useState } from 'react';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-editorial mx-auto px-6 h-[68px] flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="font-serif text-2xl text-ink flex items-center gap-1.5"
          aria-label="Back to top"
        >
          Ameer Hamza
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mb-3" />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-mono text-[12px] uppercase tracking-[0.1em] pb-1 border-b-2 transition-colors ${
                active === link.id
                  ? 'text-ink border-accent'
                  : 'text-muted border-transparent hover:text-ink'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="pill-ink"
          >
            Hire me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink text-2xl leading-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper/95 backdrop-blur-md border-t border-line px-6 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-left font-mono text-[13px] uppercase tracking-[0.1em] ${
                active === link.id ? 'text-accent-dark' : 'text-ink'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} className="pill-ink mt-1 self-start">
            Hire me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
