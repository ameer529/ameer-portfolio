import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.35,
        }}
      />

      {/* Soft indigo glow top-right */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      {/* Soft ruby glow bottom-left */}
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-rose-100 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full pt-28 pb-20 text-center relative z-10">

        {/* Status badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Open to new opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-4 leading-none text-gray-900">
          Ameer{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
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
          <div className="h-px w-12 bg-gray-300" />
          <p className="text-gray-500 text-lg md:text-xl font-medium tracking-wide">
            Senior Ruby on Rails Developer
          </p>
          <div className="h-px w-12 bg-gray-300" />
        </div>

        {/* Bio */}
        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          I build reliable, high-performance backend systems for{' '}
          <span className="text-gray-800 font-semibold">Health Tech</span>,{' '}
          <span className="text-gray-800 font-semibold">FinTech</span>, and{' '}
          <span className="text-gray-800 font-semibold">EdTech</span> companies —
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
              className="w-11 h-11 rounded-xl bg-gray-100 border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 flex items-center justify-center text-gray-500 hover:text-indigo-600 transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          {[
            { number: '5+', label: 'Years of Experience' },
            { number: '3', label: 'Industry Domains' },
            { number: '10+', label: 'Products Shipped' },
            { number: 'HIPAA', label: 'Compliant Systems' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white py-5 px-4 text-center hover:bg-indigo-50 transition-colors">
              <div className="text-2xl font-extrabold text-gray-900 mb-0.5">{stat.number}</div>
              <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => scrollTo('about')}
          className="mt-12 text-gray-300 hover:text-gray-400 transition-colors animate-bounce inline-block"
          aria-label="Scroll down"
        >
          <FaChevronDown size={16} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
