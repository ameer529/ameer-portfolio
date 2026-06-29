import React from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const groups = [
  {
    label: 'Core',
    items: [
      'Ruby on Rails',
      'PostgreSQL',
      'JavaScript',
      'REST APIs',
      'API Integration',
      'Payment Integrations',
      'Multi-tenant SaaS',
      'AI / LLM Features',
    ],
  },
  {
    label: 'Frontend & Realtime',
    items: ['Hotwire', 'Turbo', 'Stimulus'],
  },
  {
    label: 'Infrastructure & Tooling',
    items: ['AWS', 'Sidekiq', 'Heroku', 'CI/CD', 'GitHub', 'Kimurai'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-paper-alt border-t border-line">
      <div className="max-w-editorial mx-auto px-6">
        <SectionHeader kicker="Toolkit" className="mb-14 max-w-3xl">
          Tools &amp; <em className="italic text-accent">technologies</em>
        </SectionHeader>

        <div className="border-t border-line-strong">
          {groups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 80}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 border-b border-line"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-muted pt-1">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center font-mono text-[12px] tracking-[0.04em] rounded-full border border-line px-4 py-1.5 text-ink bg-card hover:border-ink transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
