import React from 'react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'TeamCare',
    location: 'Faisalabad, Pakistan',
    period: 'Apr 2025 - Present',
    domain: 'Health Tech',
    points: [
      "Own the public partner API (v1 and v2): the OpenAPI specs, developer docs and changelog, auth and rate limits, and getting new partners connected.",
      "Designed and built an MCP connector so AI agents can read practice data through the app's existing permissions and tenant boundaries.",
      "Keep five practice-management integrations healthy: incremental sync, matching the same patient across sources, normalizing schedules and reconciling data when systems disagree.",
      "First responder when production breaks: find the cause, fix it, write the SOC 2 incident report. Mostly background jobs, scheduler races and third-party sync.",
    ],
    tech: ['Ruby on Rails 8.1', 'PostgreSQL', 'Sidekiq', 'Hotwire', 'AWS ECS', 'GitHub Actions'],
  },
  {
    role: 'Senior Software Engineer, Associate Lead',
    company: 'Techcreatix',
    location: 'Lahore, Pakistan',
    period: 'Jan 2021 - Apr 2025',
    domain: 'FinTech',
    points: [
      "Led a team of 7 (backend, iOS, Android) on the QuickCard mobile app and was Associate Lead for a 10-person team, including the regular updates to the US client.",
      "Integrated five payment gateways (Visa, MasterCard, Stripe, Fluid Pay, PayNetworx), gift-card purchases and bank withdrawals, all handling real money.",
      "Implemented the RYVYL blockchain layer and kept it in sync with the existing Sequence chain with no downtime.",
      "Wrote two internal Ruby gems: an SDK for secure calls between microservices, and a shared-code library used by the web and mobile backends.",
      "Put encrypted card data behind AWS API Gateway and DynamoDB. Cut dashboard load time by 70% and overall system load by 30% by moving jobs to a dedicated Sidekiq server.",
    ],
    tech: ['Ruby on Rails', 'Sidekiq', 'Heroku', 'CI/CD', 'AWS (EC2, DynamoDB, API Gateway, Lambda)'],
  },
];

const domainColors = {
  'Health Tech': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'FinTech': 'bg-blue-50 text-blue-700 border-blue-200',
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Experience</p>
          <h2 className="section-title mb-4">Professional Journey</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            6 years building production-grade systems across regulated industries.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 mb-8 last:mb-0">
              <div className="absolute left-0 top-6 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md shadow-indigo-200">
                {i + 1}
              </div>

              <div className="card p-6">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-0.5">{exp.role}</h3>
                    <p className="text-indigo-600 text-sm font-semibold">{exp.company}</p>
                    <p className="text-xs text-gray-400">{exp.location}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded border ${domainColors[exp.domain]}`}>
                      {exp.domain}
                    </span>
                    <span className="text-xs text-gray-400">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-500 text-sm">
                      <span className="text-indigo-400 mt-1 flex-shrink-0">›</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
