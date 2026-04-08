import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ background: '#0f0f0f' }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-rose-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-rose-800/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full pt-28 pb-20 text-center relative z-10">

        {/* Status badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-medium px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Open to new opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-4 leading-none">
          <span className="text-white">Ameer </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #be123c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Hamza
          </span>
        </h1>

        {/* Role */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-zinc-700" />
          <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide">
            Senior Ruby on Rails Developer
          </p>
          <div className="h-px w-12 bg-zinc-700" />
        </div>

        {/* Bio */}
        <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          I build reliable, high-performance backend systems for{' '}
          <span className="text-zinc-300 font-medium">Health Tech</span>,{' '}
          <span className="text-zinc-300 font-medium">FinTech</span>, and{' '}
          <span className="text-zinc-300 font-medium">EdTech</span> companies —
          with a strong track record in HIPAA-compliant, production-grade products.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button className="btn-primary px-7 py-3 text-sm" onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
          <button className="btn-outline px-7 py-3 text-sm" onClick={() => scrollTo('about')}>
            Learn More
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {[
            { href: 'https://github.com/ameer529', icon: <FaGithub size={18} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/ameer-hamza-43415b180/', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
            { href: 'mailto:ameerhamza112281@gmail.com', icon: <FaEnvelope size={18} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-rose-500/50 hover:bg-rose-500/10 flex items-center justify-center text-zinc-500 hover:text-rose-400 transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800">
          {[
            { number: '5+', label: 'Years of Experience' },
            { number: '3', label: 'Industry Domains' },
            { number: '10+', label: 'Products Shipped' },
            { number: 'HIPAA', label: 'Compliant Systems' },
          ].map((stat) => (
            <div key={stat.label} className="bg-zinc-900/80 py-5 px-4 text-center hover:bg-zinc-900 transition-colors">
              <div className="text-2xl font-extrabold text-white mb-0.5">{stat.number}</div>
              <div className="text-xs text-zinc-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => scrollTo('about')}
          className="mt-12 text-zinc-700 hover:text-zinc-500 transition-colors animate-bounce inline-block"
          aria-label="Scroll down"
        >
          <FaChevronDown size={16} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
