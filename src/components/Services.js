import React from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const services = [
  {
    title: 'Product Engineering',
    sub: 'Web applications · APIs · Multi-tenant SaaS',
    body: 'I ship end-to-end Rails products, from MVP to systems your team can depend on in production.',
  },
  {
    title: 'FinTech & Payments',
    sub: 'Payment gateways · Card issuance · Secure transactions',
    body: 'I build payment platforms that move real money reliably, with auditable, secure flows.',
  },
  {
    title: 'AI & Integrations',
    sub: 'LLM features · API integrations · Automation',
    body: 'I add AI/LLM features and third-party integrations that behave under real production load.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-paper border-t border-line">
      <div className="max-w-editorial mx-auto px-6">
        <SectionHeader kicker="Services" className="mb-14 max-w-3xl">
          How I can help bring <em className="italic text-accent">products</em> to life
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 90}
              className="ed-card p-8 flex flex-col h-full hover:border-line-strong transition-colors"
            >
              <span className="font-mono text-[12px] text-accent mb-6">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-3xl text-ink leading-tight mb-3">{s.title}</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted mb-5">
                {s.sub}
              </p>
              <p className="text-body text-[15px] leading-relaxed mt-auto">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
