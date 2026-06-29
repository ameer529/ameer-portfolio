import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const projects = [
  {
    name: 'TeamCare Dental',
    domain: 'Health Tech',
    period: 'Apr 2025 – Present',
    blurb: 'Dental practice-management SaaS with AI-powered goal tracking, scheduling and clinic insights.',
    highlights: [
      'Fixed critical bugs in the Goal & Monthly Goal background-job system, improving data reliability.',
      'Integrated an AI-powered chatbot delivering goal-based insights for consulting firms and practices.',
      'Revamped the Appointments dashboard to improve UX and streamline scheduling workflows.',
      'Redesigned the Doctor landing page to surface daily goals and actionable insights.',
      'Rebuilt the Consulting Firm landing page with dynamic filters and data visualizations.',
    ],
    tags: ['Ruby on Rails', 'Hotwire', 'Sidekiq', 'AWS', 'AI / LLM'],
    links: [],
  },
  {
    name: 'QuickCard – Mobile',
    sub: 'Nanokard',
    domain: 'FinTech',
    period: 'Feb 2022 – Apr 2025',
    blurb: 'Backend powering a digital card-management and payments app for iOS and Android.',
    highlights: [
      'Led a team of 7 engineers (backend, iOS, Android) ensuring timely delivery of high-quality features.',
      'Integrated the PayNetworx gateway for production and Stripe for staging environments.',
      'Integrated AWS API Gateway with DynamoDB to securely store encrypted card information.',
      'Synchronized the database between QuickCard web and mobile for seamless data consistency.',
      'Implemented Sentry for error monitoring and Sidekiq for background-job processing.',
      'Developed bank-withdrawal functionality for secure fund transfers.',
    ],
    tags: ['Ruby on Rails', 'AWS', 'Sidekiq', 'Payments'],
    links: [
      { label: 'QuickCard', url: 'https://portal.quickcard.me' },
      { label: 'Nanokard', url: 'https://portal.nanokard.com' },
    ],
  },
  {
    name: 'QuickCard – Web',
    sub: 'Nanokard',
    domain: 'FinTech',
    period: 'Jun 2021 – Apr 2025',
    blurb: 'Web platform for digital card issuance, billing and payment management.',
    highlights: [
      'Enhanced dashboard performance by 70%, reducing post-login load time.',
      'Boosted overall system performance by 30% by migrating to a dedicated Sidekiq server.',
      'Integrated multiple payment gateways: Visa, MasterCard, Stripe, Fluid Pay, PayNetworx.',
      'Designed a custom Ruby gem (SDK) to manage microservices interactions.',
      'Implemented RYVYL blockchain architecture synchronized with the existing Sequence blockchain.',
    ],
    tags: ['Ruby on Rails', 'Stripe', 'AWS', 'CI/CD'],
    links: [{ label: 'epayaix', url: 'https://portal.epayaix.com' }],
  },
  {
    name: 'Etyme',
    domain: 'SaaS',
    period: 'Jan 2021 – Sep 2021',
    blurb: 'Two-sided freelance marketplace connecting companies and freelancers with real-time chat.',
    highlights: [
      'Designed and developed a custom real-time chat feature using HTML, HAML and CSS.',
      'Implemented authentication and role-based access control for freelancers and companies.',
      'Integrated Sidekiq for background-job processing, improving system performance.',
      'Optimized database queries to reduce response times and improve scalability.',
    ],
    tags: ['Ruby on Rails', 'HAML', 'Sidekiq', 'PostgreSQL'],
    links: [],
  },
  {
    name: 'Crawler App',
    domain: 'Data',
    period: 'Jan 2021 – Jun 2021',
    blurb: 'Web-scraping service that extracts and presents structured media content at scale.',
    highlights: [
      'Built and maintained the crawler with the Kimurai gem for efficient data extraction.',
      'Scraped static pages from multiple showbiz sites to extract titles, content and images.',
      'Designed a data-storage system for seamless integration and usability.',
      'Built an Instagram-inspired UI to display scraped posts with dynamic advertisements.',
    ],
    tags: ['Ruby on Rails', 'Kimurai', 'PostgreSQL'],
    links: [],
  },
];

const filters = ['All', 'FinTech', 'Health Tech', 'SaaS', 'Data'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const shown = projects
    .map((p, i) => ({ ...p, _i: i }))
    .filter((p) => filter === 'All' || p.domain === filter);

  const active = openIndex === null ? null : projects[openIndex];

  // Close on Esc + lock body scroll while modal is open.
  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIndex(null);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section id="projects" className="py-24 md:py-32 bg-paper-alt border-t border-line">
      <div className="max-w-editorial mx-auto px-6">
        <SectionHeader kicker="Selected work" className="mb-10 max-w-3xl">
          Products I've <em className="italic text-accent">shipped</em>
        </SectionHeader>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-[11px] uppercase tracking-[0.08em] rounded-full px-4 py-1.5 border transition-colors ${
                filter === f
                  ? 'bg-ink text-paper border-ink'
                  : 'border-line text-body hover:border-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {shown.map((p) => (
            <Reveal key={p.name}>
              <button
                onClick={() => setOpenIndex(p._i)}
                className="group text-left w-full h-full ed-card p-7 flex flex-col transition-all duration-200 hover:-translate-y-[5px] hover:border-ink hover:shadow-lift"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[12px] text-accent">
                    {String(p._i + 1).padStart(2, '0')}
                  </span>
                  <span className="chip-accent">{p.domain}</span>
                </div>

                <h3 className="font-serif text-3xl text-ink leading-tight">
                  {p.name}
                  {p.sub && <span className="text-muted text-xl"> ({p.sub})</span>}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted mt-2 mb-4">
                  {p.period}
                </p>
                <p className="text-body text-[15px] leading-relaxed mb-6">{p.blurb}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-dark mt-6 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View case study →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} case study`}
        >
          <div
            className="absolute inset-0 bg-ink/55 backdrop-blur-sm"
            onClick={() => setOpenIndex(null)}
          />
          <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-paper rounded-card border border-line-strong shadow-lift p-8 md:p-10">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="chip-accent mb-3">{active.domain}</span>
                <h3 className="font-serif text-4xl text-ink leading-tight">
                  {active.name}
                  {active.sub && <span className="text-muted text-2xl"> ({active.sub})</span>}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted mt-2">
                  {active.period}
                </p>
              </div>
              <button
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
                className="shrink-0 w-9 h-9 rounded-full border border-line-strong text-ink hover:bg-ink hover:text-paper transition-colors flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <p className="text-body text-[16px] leading-relaxed mb-7">{active.blurb}</p>

            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-dark mb-4">
              Highlights
            </p>
            <ul className="space-y-3 mb-8">
              {active.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-body text-[15px] leading-relaxed">
                  <span className="text-accent mt-1.5 shrink-0">→</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-7">
              {active.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            {active.links.length > 0 && (
              <div className="flex flex-wrap gap-3 border-t border-line pt-6">
                {active.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-outline"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
