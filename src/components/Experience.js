import React from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Socketier',
    domain: 'Health Tech',
    period: 'Apr 2025 – Present',
    place: 'Faisalabad, PK',
    points: [
      "Collaborate directly with TeamCare Dental's product team to translate business needs into scalable features.",
      'Build new functionality and modernize existing modules in a Ruby on Rails monolith with Stimulus & Turbo.',
      'Diagnose and resolve legacy issues, improving platform stability and reducing reported bugs.',
    ],
    stack: ['Ruby on Rails', 'Sidekiq', 'Hotwire', 'Stimulus', 'Turbo', 'AWS'],
  },
  {
    role: 'Senior Software Engineer · Associate Lead',
    company: 'Techcreatix',
    domain: 'FinTech',
    period: 'Jan 2021 – Apr 2025',
    place: 'Lahore, PK',
    points: [
      'Served as Associate Lead for a team of 10, owning product development from requirements to delivery.',
      'Led 7 engineers across backend, iOS and Android with technical guidance and regular client updates.',
      'Raised code quality and team velocity through code review and CI/CD practices.',
      'Designed custom Ruby gems to share code between web and mobile platforms.',
    ],
    stack: ['Ruby on Rails', 'Sidekiq', 'Hotwire', 'CI/CD', 'AWS (EC2, DynamoDB, API Gateway, Lambda)'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-paper border-t border-line">
      <div className="max-w-editorial mx-auto px-6">
        <SectionHeader kicker="Experience" className="mb-14 max-w-3xl">
          Professional <em className="italic text-accent">journey</em>
        </SectionHeader>

        <div className="border-t border-line-strong">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.company}
              delay={i * 90}
              className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-12 py-10 border-b border-line"
            >
              {/* Left: period / place / domain */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink">
                  {exp.period}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  {exp.place}
                </span>
                <span className="chip-accent w-fit">{exp.domain}</span>
              </div>

              {/* Right: role + bullets + stack */}
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                  {exp.role}
                </h3>
                <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent-dark mt-2 mb-6">
                  {exp.company}
                </p>

                <ul className="space-y-3 mb-7">
                  {exp.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-body text-[15px] leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0">→</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
