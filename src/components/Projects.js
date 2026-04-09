import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: 'TeamCare Dental',
    period: 'Apr 2025 – Present',
    domain: 'Health Tech',
    domainColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Dental practice management SaaS platform with AI-powered goal tracking and insights.',
    points: [
      'Fixed critical bugs in Goal & Monthly Goal background job system, improving data reliability',
      'Integrated an AI-powered chatbot delivering goal-based insights for consulting firms and practices',
      'Revamped the Appointments dashboard to improve UX and streamline scheduling workflows',
      'Redesigned the Doctor landing page to surface daily goals and actionable insights',
      'Rebuilt the Consulting Firm landing page with dynamic filters and data visualizations',
    ],
    tech: ['Ruby on Rails', 'Sidekiq', 'Stimulus', 'Turbo', 'AWS'],
    links: [],
  },
  {
    name: 'QuickCard (Nanokard) Mobile',
    period: 'Feb 2022 – Apr 2025',
    domain: 'FinTech',
    domainColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'FinTech mobile application backend for digital card management and payment processing.',
    points: [
      'Led a team of 7 engineers (backend, iOS, Android) ensuring timely delivery of high-quality features',
      'Synchronized the database between QuickCard web and mobile, ensuring seamless data consistency',
      'Integrated PayNetworx payment gateway for production and Stripe for staging environments',
      'Integrated AWS API Gateway with DynamoDB to securely store encrypted card information',
      'Implemented Sentry for error monitoring and Sidekiq for background job processing',
      'Developed bank withdrawal functionality for secure fund transfers',
    ],
    tech: ['Ruby on Rails', 'Sidekiq', 'AWS (EC2, DynamoDB, API Gateway, Lambda)', 'Heroku', 'Stripe', 'Sentry'],
    links: [
      { label: 'QuickCard', url: 'https://portal.quickcard.me' },
      { label: 'Nanokard', url: 'https://portal.nanokard.com' },
    ],
  },
  {
    name: 'QuickCard (Nanokard) Web',
    period: 'Jun 2021 – Apr 2025',
    domain: 'FinTech',
    domainColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Full-featured FinTech web platform for digital card issuance and payment management.',
    points: [
      'Enhanced dashboard performance by 70%, reducing post-login load time',
      'Boosted overall system performance by 30% by migrating to a dedicated Sidekiq server',
      'Integrated multiple payment gateways: Visa, MasterCard, Stripe, Fluid Pay, PayNetworx',
      'Designed and developed a custom Ruby Gem (SDK) to manage microservices interactions',
      'Implemented RYVYL blockchain architecture synchronized with the existing Sequence blockchain',
      'Adopted TDD to deliver high-quality features faster with minimal bugs',
    ],
    tech: ['Ruby on Rails', 'Sidekiq', 'Heroku', 'AWS', 'Stripe', 'CI/CD', 'TDD'],
    links: [
      { label: 'epayaix', url: 'https://portal.epayaix.com' },
    ],
  },
  {
    name: 'Etyme',
    period: 'Jan 2021 – Sep 2021',
    domain: 'SaaS',
    domainColor: 'bg-violet-50 text-violet-700 border-violet-200',
    description: 'Freelance platform connecting companies and freelancers with real-time chat.',
    points: [
      'Designed and developed a custom real-time chat feature using HTML, HAML, and CSS',
      'Implemented authentication and role-based access control for freelancers and companies',
      'Integrated Sidekiq for background job processing, improving system performance',
      'Optimized database queries to reduce response times and improve scalability',
    ],
    tech: ['Ruby on Rails', 'Sidekiq', 'HAML', 'HTML/CSS'],
    links: [],
  },
  {
    name: 'Crawler App',
    period: 'Jan 2021 – Jun 2021',
    domain: 'Data',
    domainColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Web scraping application for extracting and displaying structured media content.',
    points: [
      'Developed and maintained the crawler using the Kimurai gem for efficient data extraction',
      'Scraped static pages from multiple showbiz websites to extract titles, content, and images',
      'Designed and implemented a data storage system for seamless integration and usability',
      'Developed an Instagram-inspired UI to display scraped posts with dynamic advertisements',
    ],
    tech: ['Ruby on Rails', 'Kimurai', 'PostgreSQL'],
    links: [],
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Projects</p>
          <h2 className="section-title mb-4">Things I've Built</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            A selection of real products I've contributed to or led across my career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="card p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">{project.name}</h3>
                  <p className="text-xs text-gray-400">{project.period}</p>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded border flex-shrink-0 ${project.domainColor}`}>
                  {project.domain}
                </span>
              </div>

              <p className="text-gray-500 text-sm mb-4">{project.description}</p>

              {/* Points */}
              <ul className="space-y-1.5 mb-4">
                {(expanded === i ? project.points : project.points.slice(0, 3)).map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-500 text-xs">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">›</span>
                    {point}
                  </li>
                ))}
              </ul>

              {project.points.length > 3 && (
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="text-xs text-indigo-600 hover:text-indigo-800 font-medium mb-4 text-left transition-colors"
                >
                  {expanded === i ? '↑ Show less' : `+ ${project.points.length - 3} more`}
                </button>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-medium">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links.length > 0 && (
                <div className="flex gap-3 mt-auto pt-3 border-t border-gray-100">
                  {project.links.map(({ label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    >
                      <FaExternalLinkAlt size={10} /> {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
