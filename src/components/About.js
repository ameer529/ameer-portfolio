import React from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const domains = ['Ruby on Rails', 'FinTech', 'Health Tech', 'SaaS', 'AI / LLM', 'Full-Stack'];

const brings = [
  'Led product development end-to-end as Associate Lead for a team of 10.',
  'Directed 7 engineers across backend, iOS and Android.',
  'Built and shipped FinTech payment platforms processing real transactions.',
  'Ran AWS in production: EC2, DynamoDB, API Gateway, CloudWatch, Lambda.',
  'Authored custom Ruby gems to share code across web and mobile.',
  'Raised quality with CI/CD pipelines and disciplined code review.',
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-paper-alt border-t border-line">
      <div className="max-w-editorial mx-auto px-6">
        <SectionHeader kicker="About" className="mb-14 max-w-3xl">
          Ambitious. Detail-oriented. <em className="italic text-accent">Result-driven.</em>
        </SectionHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* My Story (paper card) */}
          <Reveal className="ed-card p-8 md:p-10">
            <p className="kicker mb-5">My Story</p>
            <p className="text-body text-[16px] leading-relaxed mb-5">
              I'm a full-stack engineer with 5 years of hands-on experience in Ruby on Rails,
              building and scaling web and mobile applications across FinTech and Health Tech.
              I've worked in both associate-lead and senior engineering roles, owning everything
              from requirements-gathering to production deployment.
            </p>
            <p className="text-body text-[16px] leading-relaxed mb-8">
              I take pride in clean, maintainable code and a collaborative approach to engineering,
              whether it's architecting a new feature, resolving legacy issues, or mentoring
              teammates. I show up focused on impact.
            </p>

            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mb-3">
              Domain expertise
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {domains.map((d) => (
                <span key={d} className="chip">
                  {d}
                </span>
              ))}
            </div>

            <div className="border-t border-line pt-5 flex items-baseline justify-between gap-4">
              <span className="font-serif text-xl text-ink">B.S. Software Engineering</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                2016 – 2020
              </span>
            </div>
          </Reveal>

          {/* What I Bring (ink card) */}
          <Reveal delay={100} className="rounded-card bg-ink text-paper p-8 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent mb-6">
              What I Bring
            </p>
            <ul className="space-y-5">
              {brings.map((item, i) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="font-mono text-[12px] text-accent pt-1.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-paper/85 text-[15px] leading-relaxed border-b border-line-dark pb-5 w-full">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
