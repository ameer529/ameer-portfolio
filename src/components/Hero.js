import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a0505 50%, #0f0f0f 100%)' }}
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-rose-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-medium px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                Available for opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-2">
              Hi, I'm
            </h1>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-rose-500 mb-6">
              Ameer Hamza
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
              Senior Ruby on Rails Developer
            </p>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
              Senior engineer focused on result-driven projects. Experienced building
              scalable products across{' '}
              <span className="text-gray-200 font-medium">Health Tech (HIPAA)</span>,{' '}
              <span className="text-gray-200 font-medium">FinTech</span>, and{' '}
              <span className="text-gray-200 font-medium">AdTech</span>.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                className="btn-primary"
                onClick={() => scrollTo('contact')}
              >
                Get In Touch
              </button>
              <button
                className="btn-outline"
                onClick={() => scrollTo('experience')}
              >
                View Experience
              </button>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
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
                  className="w-10 h-10 bg-zinc-800 hover:bg-rose-500/20 border border-zinc-700 hover:border-rose-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-rose-400 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '3', label: 'Industry Domains' },
              { number: '10+', label: 'Products Built' },
              { number: '100%', label: 'HIPAA Compliant' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card-dark p-6 text-center hover:border-rose-500/30 transition-colors"
              >
                <div className="text-3xl font-extrabold text-rose-500 mb-1">{stat.number}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-16 opacity-30">
          <button
            onClick={() => scrollTo('about')}
            className="text-gray-400 hover:text-white transition-colors animate-bounce"
          >
            <FaArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
