import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';

// PLACEHOLDER CONTENT — replace with real quotes before publishing (or remove the section).
const quotes = [
  {
    quote:
      'Placeholder testimonial. Replace this with a real quote from a manager, client or teammate before publishing.',
    name: 'Name Placeholder',
    role: 'Role · Company',
  },
  {
    quote:
      'Placeholder testimonial. A second sample pull-quote to show how the carousel reads with two-to-three sentences of copy.',
    name: 'Name Placeholder',
    role: 'Role · Company',
  },
  {
    quote:
      'Placeholder testimonial. Swap in genuine feedback that speaks to reliability, ownership and delivery.',
    name: 'Name Placeholder',
    role: 'Role · Company',
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const count = quotes.length;
  const go = (n) => setI((n + count) % count);

  // Auto-advance.
  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  const active = quotes[i];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-ink text-paper border-t border-line-dark">
      <div className="max-w-editorial mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <Reveal className="kicker text-accent mb-5">In their words</Reveal>
            <Reveal as="h2" delay={80} className="display text-[clamp(38px,5.5vw,72px)] text-paper">
              Trusted by <em className="italic text-accent">teams</em>
            </Reveal>
          </div>
          <Reveal className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent border border-accent/40 rounded-full px-3 py-1 whitespace-nowrap">
            Placeholder
          </Reveal>
        </div>

        <Reveal className="max-w-3xl">
          <blockquote className="font-serif text-[clamp(26px,3.4vw,40px)] leading-[1.15] text-paper">
            “{active.quote}”
          </blockquote>

          <div className="flex items-center gap-4 mt-10">
            <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-serif text-xl text-paper">
              {active.name.charAt(0)}
            </div>
            <div>
              <p className="text-paper text-[15px] font-semibold">{active.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/60">
                {active.role}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-12">
          <button
            onClick={() => go(i - 1)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-line-dark text-paper hover:bg-paper hover:text-ink transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => go(i + 1)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-line-dark text-paper hover:bg-paper hover:text-ink transition-colors"
          >
            →
          </button>
          <div className="flex items-center gap-2 ml-3">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? 'w-6 bg-accent' : 'w-1.5 bg-paper/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
