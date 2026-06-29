import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import Reveal from './Reveal';
import CountUp from './CountUp';

const EMAIL = 'ameerhamza112281@gmail.com';

const stats = [
  { value: 5, suffix: '+', label: 'Years building' },
  { value: 10, suffix: '', label: 'Engineers led' },
  { value: 5, suffix: '+', label: 'Products shipped' },
  { value: 2, suffix: '', label: 'Regulated domains' },
];

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const t = document.createElement('textarea');
      t.value = EMAIL;
      document.body.appendChild(t);
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-editorial mx-auto px-6">
        {/* Status row */}
        <Reveal className="flex flex-wrap items-center gap-4 mb-10">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
            Open to new opportunities
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            Portfolio · 2026
          </span>
        </Reveal>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
          {/* LEFT: headline + CTAs */}
          <div>
            <Reveal as="h1" className="display text-ink text-[clamp(56px,8.5vw,128px)]">
              Senior Software
              <br />
              <em className="italic text-accent">Engineer</em> who ships
              <br />
              systems that hold.
            </Reveal>

            <Reveal delay={120} className="flex flex-wrap gap-3 mt-9">
              <button onClick={() => scrollTo('projects')} className="pill-ink">
                View work →
              </button>
              <button onClick={() => scrollTo('contact')} className="pill-outline">
                Get in touch
              </button>
            </Reveal>
          </div>

          {/* RIGHT: photo + intro + socials */}
          <div className="flex flex-col gap-7">
            {/* Portrait. Place the file at public/ameer.jpg; the monogram shows if it is missing. */}
            <Reveal className="relative">
              <div className="aspect-[4/5] w-full max-w-[320px] rounded-card border border-line-strong bg-paper-alt overflow-hidden flex items-center justify-center">
                {imgOk ? (
                  <img
                    src={process.env.PUBLIC_URL + '/ameer.jpg'}
                    alt="Ameer Hamza"
                    className="w-full h-full object-cover"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <span className="font-serif text-[clamp(64px,12vw,96px)] text-ink/70 select-none">
                    AH
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-body text-[16px] md:text-[18px] leading-relaxed max-w-md">
                Senior Ruby on Rails engineer with 5 years building backend &amp; integration
                systems for FinTech and Health Tech: payment gateways, AI features, and
                multi-tenant SaaS that stay reliable when{' '}
                <span className="marker">money and sensitive data</span> are moving through them.
              </p>
            </Reveal>

            {/* Socials */}
            <Reveal delay={140} className="flex items-center gap-3">
              {[
                { href: 'https://github.com/ameer529', icon: <FaGithub size={16} />, label: 'GitHub' },
                {
                  href: 'https://www.linkedin.com/in/ameerhamzaror/',
                  icon: <FaLinkedinIn size={16} />,
                  label: 'LinkedIn',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-line-strong text-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
                >
                  {s.icon}
                </a>
              ))}
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="w-10 h-10 rounded-full border border-line-strong text-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
              >
                <FaEnvelope size={15} />
              </button>
              <span
                className={`font-mono text-[11px] uppercase tracking-[0.1em] transition-opacity duration-200 ${
                  copied ? 'opacity-100 text-success' : 'opacity-0'
                }`}
              >
                Copied ✓
              </span>
            </Reveal>
          </div>
        </div>

        {/* Stats row */}
        <Reveal delay={120} className="grid grid-cols-2 md:grid-cols-4 mt-16 border-t border-line">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-7 px-2 border-line ${i % 2 === 1 ? 'border-l' : ''} ${
                i > 0 ? 'md:border-l' : 'md:border-l-0'
              } ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
            >
              <div className="font-serif text-[clamp(40px,6vw,64px)] leading-none text-ink">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
