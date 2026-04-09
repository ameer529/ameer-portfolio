import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const highlights = [
  'Built HIPAA-compliant patient management platforms from scratch',
  'Designed secure, audited data models and access control systems',
  'Developed transaction processing systems for FinTech clients',
  'Built high-traffic ad-serving pipelines in EdTech',
  'End-to-end ownership from database design to deployment',
  'Clean architecture with a focus on performance and reliability',
];

const domains = ['Health Tech', 'HIPAA Compliance', 'FinTech', 'EdTech', 'SaaS', 'REST APIs'];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">About Me</p>
          <h2 className="section-title mb-4">Passionate About Building<br />Impactful Products</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A senior engineer with a track record of delivering robust, scalable solutions
            across highly regulated and fast-paced industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Story */}
          <div className="card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">My Story</h3>
            <p className="text-gray-500 text-sm leading-7 mb-4">
              I'm a Senior Ruby on Rails Developer focused on result-driven projects.
              Throughout my career, I've worked on multiple products spanning health tech
              (HIPAA compliant), fintech, and edtech — building systems that are secure,
              scalable, and compliant with industry regulations.
            </p>
            <p className="text-gray-500 text-sm leading-7 mb-6">
              I believe great software is about more than code — it's about understanding
              the business problem, designing for reliability, and delivering measurable impact.
            </p>

            <h4 className="text-sm font-semibold text-gray-700 mb-3">Domain Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {domains.map((d) => (
                <span
                  key={d}
                  className="text-xs bg-rose-50 border border-rose-200 text-rose-700 px-3 py-1 rounded-md font-medium"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">What I Bring</h3>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
