import React from 'react';

const experiences = [
  {
    role: 'Senior Ruby on Rails Developer',
    company: 'Health Tech Platform (HIPAA Compliant)',
    period: '2022 – Present',
    type: 'Full-Time',
    domain: 'Health Tech',
    points: [
      'Led backend development of a HIPAA-compliant patient management platform',
      'Designed secure, audited data models and granular access control systems',
      'Built and maintained RESTful APIs consumed by web and mobile clients',
      'Implemented PHI data encryption, audit logging, and compliance workflows',
      'Owned performance optimization including N+1 query fixes and caching strategies',
    ],
  },
  {
    role: 'Ruby on Rails Developer',
    company: 'FinTech Platform',
    period: '2020 – 2022',
    type: 'Full-Time',
    domain: 'FinTech',
    points: [
      'Developed transaction processing and reconciliation systems',
      'Integrated third-party payment gateways and banking APIs',
      'Built robust background job infrastructure using Sidekiq',
      'Improved system reliability with comprehensive error handling and alerting',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'AdTech Company',
    period: '2019 – 2020',
    type: 'Full-Time',
    domain: 'AdTech',
    points: [
      'Built high-traffic ad-serving and click-tracking pipelines in Rails',
      'Handled large-scale event ingestion and analytics reporting dashboards',
      'Collaborated with frontend and data teams to deliver real-time analytics features',
    ],
  },
];

const domainColors = {
  'Health Tech': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'FinTech': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'AdTech': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Experience</p>
          <h2 className="section-title mb-4">Professional Journey</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            A track record of building production-grade systems across regulated industries.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />

            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 mb-8 last:mb-0">
                {/* Dot */}
                <div className="absolute left-0 top-6 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-rose-500/25">
                  {i + 1}
                </div>

                <div className="card-dark p-6 hover:border-zinc-700 transition-colors">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-rose-400 text-sm font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded border ${domainColors[exp.domain]}`}>
                        {exp.domain}
                      </span>
                      <span className="text-xs text-zinc-500">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-rose-500 mt-1 flex-shrink-0">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
