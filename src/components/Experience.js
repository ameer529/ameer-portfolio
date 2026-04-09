import React from 'react';

const experiences = [
  {
    role: 'Senior Ruby on Rails Developer',
    company: 'Health Tech Platform (HIPAA Compliant)',
    period: '2022 – Present',
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
    company: 'EdTech Company',
    period: '2019 – 2020',
    domain: 'EdTech',
    points: [
      'Built high-traffic ad-serving and click-tracking pipelines in Rails',
      'Handled large-scale event ingestion and analytics reporting dashboards',
      'Collaborated with frontend and data teams to deliver real-time analytics features',
    ],
  },
];

const domainColors = {
  'Health Tech': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'FinTech':     'bg-blue-50 text-blue-700 border-blue-200',
  'EdTech':      'bg-violet-50 text-violet-700 border-violet-200',
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Experience</p>
          <h2 className="section-title mb-4">Professional Journey</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            A track record of building production-grade systems across regulated industries.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 mb-8 last:mb-0">
              {/* Dot — ruby red to keep brand */}
              <div className="absolute left-0 top-6 w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md shadow-rose-200">
                {i + 1}
              </div>

              <div className="card p-6">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-0.5">{exp.role}</h3>
                    <p className="text-indigo-600 text-sm font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded border ${domainColors[exp.domain]}`}>
                      {exp.domain}
                    </span>
                    <span className="text-xs text-gray-400">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-500 text-sm">
                      <span className="text-indigo-400 mt-1 flex-shrink-0">›</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
