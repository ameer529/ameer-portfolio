import React from 'react';

const Footer = () => {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-editorial mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <button onClick={toTop} className="font-serif text-2xl text-paper flex items-center gap-1.5">
          Ameer Hamza
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mb-3" />
        </button>

        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/60 text-center">
          © 2026 · Senior Software Engineer · FinTech &amp; Health Tech
        </p>

        <button
          onClick={toTop}
          className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper hover:text-accent transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
