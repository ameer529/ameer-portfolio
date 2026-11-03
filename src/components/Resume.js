import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const contacts = [
  { icon: <FaMapMarkerAlt />, text: 'Faisalabad, Pakistan' },
  { icon: <FaPhoneAlt />, text: '+92 322 6518570', href: 'tel:+923226518570' },
  { icon: <FaEnvelope />, text: 'ameerhamza112281@gmail.com', href: 'mailto:ameerhamza112281@gmail.com' },
  { icon: <FaLinkedin />, text: 'linkedin.com/in/ameerhamzaror', href: 'https://www.linkedin.com/in/ameerhamzaror/' },
  { icon: <FaGithub />, text: 'github.com/ameer529', href: 'https://github.com/ameer529' },
  { icon: <FaGlobe />, text: 'ameer-portfolio-eight.vercel.app', href: 'https://ameer-portfolio-eight.vercel.app/' },
];

const skills = [
  { group: 'Backend', accent: true, items: ['Ruby', 'Ruby on Rails', 'Node.js', 'PostgreSQL', 'MySQL', 'Redis', 'Sidekiq', 'AASM'] },
  { group: 'Frontend', items: ['JavaScript', 'Hotwire', 'Turbo', 'Stimulus'] },
  { group: 'Cloud and DevOps', items: ['AWS ECS', 'EC2', 'S3', 'Lambda', 'DynamoDB', 'API Gateway', 'CloudWatch', 'Heroku', 'Docker', 'GitHub Actions'] },
  { group: 'APIs and integrations', items: ['REST design', 'OpenAPI', 'Webhooks', 'OAuth', 'Stripe', 'PayNetworx', 'Fluid Pay', 'PMS integrations', 'CRM integrations'] },
  { group: 'AI', accent: true, items: ['MCP servers', 'LLM features', 'AI agents (Claude)'] },
  { group: 'Practices', items: ['Multi-tenant SaaS', 'Incident response', 'SOC 2 documentation', 'Sentry', 'Code review', 'Team leadership'] },
];

const jobs = [
  {
    title: 'Senior Software Engineer',
    company: 'TeamCare',
    dates: 'Apr 2025 – Present',
    meta: 'US dental practice-management SaaS · Remote',
    bullets: [
      'Own the public partner REST API (v1 and v2): OpenAPI specs, developer docs and changelog, auth and rate limiting, partner onboarding and support.',
      'Designed and built a Model Context Protocol (MCP) connector exposing application data to AI agents behind existing authorization and multi-tenancy.',
      'Maintain integrations with five practice-management systems: incremental sync, cross-source deduplication, schedule normalization, data reconciliation.',
      'Lead production incident response: triage, root cause, fix and SOC 2 documentation across job throughput, scheduler concurrency and sync reliability.',
      'Shipped an AI assistant for performance insights, campaign analytics, payment capture with write-back to the practice system, review-request scheduling and CRM revenue sync.',
    ],
    tech: ['Rails 8.1', 'Ruby 4', 'PostgreSQL', 'Sidekiq', 'Hotwire', 'AWS ECS', 'GitHub Actions'],
  },
  {
    title: 'Senior Software Engineer, Associate Lead',
    company: 'Techcreatix',
    dates: 'Jan 2021 – Apr 2025',
    meta: 'Lahore, Pakistan · Client: QuickCard / Nanokard, US fintech and blockchain payments',
    bullets: [
      'Led 7 engineers (backend, iOS, Android) on the QuickCard mobile product and acted as Associate Lead for a 10-person team with direct US client updates.',
      'Integrated five payment gateways (Visa, MasterCard, Stripe, Fluid Pay, PayNetworx), gift-card purchasing and bank withdrawals for production users.',
      'Implemented RYVYL blockchain architecture synchronized with the existing Sequence chain with zero downtime.',
      'Built two internal Ruby gems: a secure microservice SDK and a shared-code library for the web and mobile backends.',
      'Stored encrypted card data behind AWS API Gateway and DynamoDB; cut dashboard load time 70% and system load 30% with a dedicated Sidekiq server.',
    ],
    tech: ['Rails', 'Heroku', 'Sidekiq', 'PostgreSQL', 'Sentry', 'AWS', 'GitHub CI/CD'],
  },
];

const Chip = ({ children, accent }) => (
  <span className={`chip inline-flex items-center h-[22px] leading-none text-[11.5px] font-medium px-2 rounded-full border ${accent ? 'bg-indigo-50 text-indigo-800 border-indigo-200' : 'bg-white text-gray-700 border-gray-200'}`}>
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h2 className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] uppercase text-indigo-600 mb-3">
    {children}
    <span className="flex-1 h-px bg-gray-200" />
  </h2>
);

const Resume = () => {
  return (
  <section id="resume" className="bg-white text-gray-900 text-[14px] leading-relaxed pt-28 pb-20 px-6">
    <div className="max-w-[920px] mx-auto flex flex-wrap items-end justify-between gap-4 mb-8 print:hidden">
      <div>
        <p className="section-tag mb-2">Resume</p>
        <h2 className="section-title">My resume</h2>
        <p className="section-subtitle mt-1">Senior Software Engineer · Ruby on Rails</p>
      </div>
    </div>

    <main className="max-w-[920px] mx-auto bg-white border border-gray-200 overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(17,24,39,0.06)] print:max-w-none print:m-0 print:border-0 print:rounded-none print:shadow-none">
      <header className="sheet-head relative overflow-hidden px-10 pt-9 pb-7 border-b border-gray-200 print:px-6 print:py-4">
        <div
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />
        <div className="absolute -right-32 -top-40 w-[420px] h-[420px] rounded-full bg-indigo-100 blur-[90px] opacity-70 pointer-events-none print:hidden" />
        <div className="relative z-10">
          <h1 className="text-[38px] font-extrabold tracking-tight leading-none m-0 print:text-[28px]">
            Ameer{' '}
            <span className="print:text-indigo-600" style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Hamza
            </span>
          </h1>
          <p className="mt-2 text-[16px] font-semibold text-gray-700">
            Senior Software Engineer <span className="font-medium text-gray-500">· Ruby on Rails</span>
          </p>
          <p className="tagline mt-3 max-w-[640px] text-gray-500">
            Integration-heavy SaaS for US healthcare and fintech: public APIs, third-party integrations and AI-agent connectivity, owned end to end from design through production support.
          </p>
          <ul className="flex flex-wrap gap-x-[18px] gap-y-2 mt-4 text-[13px] text-gray-700">
            {contacts.map((c) => (
              <li key={c.text} className="inline-flex items-center gap-[7px]">
                <span className="text-indigo-600 text-[13px]">{c.icon}</span>
                {c.href ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="hover:text-indigo-600">{c.text}</a> : c.text}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="body-grid grid grid-cols-1 md:grid-cols-[240px_1fr] print:grid-cols-[190px_1fr]">
        <aside className="side-col px-7 pt-7 pb-8 border-b md:border-b-0 md:border-r border-gray-200 bg-[#fafbff] print:px-4 print:py-4">
          <section className="block mb-6">
            <SectionTitle>Skills</SectionTitle>
            {skills.map((s) => (
              <div key={s.group} className="skill-group mb-3.5">
                <h3 className="text-[12px] font-semibold text-gray-700 mb-1.5">{s.group}</h3>
                <div className="flex flex-wrap gap-[5px]">
                  {s.items.map((i) => <Chip key={i} accent={s.accent}>{i}</Chip>)}
                </div>
              </div>
            ))}
          </section>

          <section className="block mb-6">
            <SectionTitle>Education</SectionTitle>
            <strong className="block text-[13px]">BS Software Engineering</strong>
            <span className="block text-[12.5px] text-gray-500">PUCIT, University of the Punjab, Lahore</span>
            <span className="block text-[12.5px] text-gray-500">2016 – 2020</span>
          </section>

          <section>
            <SectionTitle>Languages</SectionTitle>
            <strong className="block text-[13px]">English</strong>
            <span className="block text-[12.5px] text-gray-500">Professional working proficiency</span>
            <strong className="block text-[13px] mt-1.5">Urdu</strong>
            <span className="block text-[12.5px] text-gray-500">Native</span>
          </section>
        </aside>

        <div className="main-col px-10 pt-7 pb-9 print:px-6 print:py-4">
          <section className="block mb-6">
            <SectionTitle>Summary</SectionTitle>
            <p className="text-gray-700 m-0">
              Senior Software Engineer with 6 years building and operating integration-heavy SaaS in Ruby on Rails for US healthcare (HIPAA, SOC 2) and US fintech. Owns public REST APIs, third-party integrations and AI-agent connectivity end to end, from design and documentation through production support and incident response. Led a team of 7 engineers across backend, iOS and Android.
            </p>
          </section>

          <section>
            <SectionTitle>Experience</SectionTitle>
            {jobs.map((job, idx) => (
              <article key={job.company} className="job relative pl-[22px] mb-6 last:mb-0 print:break-inside-avoid">
                <span className="absolute left-1 top-[7px] w-[9px] h-[9px] rounded-full bg-white border-2 border-indigo-600" />
                {idx < jobs.length - 1 && <span className="absolute left-2 top-5 -bottom-6 w-px bg-gray-200" />}
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-[15.5px] font-bold m-0">
                    {job.title} <span className="font-medium text-gray-500 text-[13px]">· {job.company}</span>
                  </h3>
                  <span className="text-[12.5px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full whitespace-nowrap">{job.dates}</span>
                </div>
                <p className="mt-0.5 mb-2 text-[12.5px] text-gray-500">{job.meta}</p>
                <ul className="list-disc pl-4 m-0 text-gray-700 marker:text-indigo-600">
                  {job.bullets.map((b) => <li key={b} className="my-1 pl-0.5">{b}</li>)}
                </ul>
                <div className="flex flex-wrap gap-[5px] mt-2.5">
                  {job.tech.map((t) => <Chip key={t}>{t}</Chip>)}
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>

      <footer className="flex flex-wrap justify-between gap-1.5 px-10 py-3.5 border-t border-gray-200 text-[12px] text-gray-500 print:px-6 print:py-2">
        <span>Ameer Hamza · Senior Software Engineer (Ruby on Rails)</span>
        <span>ameerhamza112281@gmail.com · +92 322 6518570</span>
      </footer>
    </main>
  </section>
  );
};

export default Resume;
