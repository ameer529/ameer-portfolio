import React from 'react';
import { FaCheckCircle, FaGraduationCap } from 'react-icons/fa';

const highlights = [
  'Associate Lead for a 10-person team, from requirements through release',
  'Led 7 engineers across backend, iOS and Android on a fintech mobile app',
  'Shipped payment flows that move real money through five gateways',
  'Run production on AWS: ECS, EC2, DynamoDB, API Gateway, Lambda, CloudWatch',
  'Wrote internal Ruby gems for shared code and microservice calls',
  'Keep quality up with code review, CI and honest incident reports',
];

const domains = ['Ruby on Rails', 'FinTech', 'Health Tech', 'SaaS', 'AWS', 'Full-Stack'];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">About Me</p>
          <h2 className="section-title mb-4">I build the parts<br />where mistakes are expensive.</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Payment gateways, practice-management integrations, public APIs and AI agents,
            for US Health Tech and FinTech SaaS that can't afford to be wrong.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Story */}
          <div className="card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">My Story</h3>
            <p className="text-gray-500 text-sm leading-7 mb-4">
              I'm a Senior Software Engineer with six years in Ruby on Rails. I've spent that time on
              integration-heavy SaaS for US Health Tech and FinTech: payment gateways, practice-management
              systems, public APIs and, lately, AI agents. I own that work end to end, from the OpenAPI spec
              to the incident report. Earlier I led a team of 7 across backend, iOS and Android.
            </p>
            <p className="text-gray-500 text-sm leading-7 mb-6">
              I like clean code, but I care more about whether the thing still works when a sync job
              fails at 2am. I'd rather fix the root cause than patch the symptom, and when something
              breaks I tell the customer what changed in plain words.
            </p>

            <h4 className="text-sm font-semibold text-gray-700 mb-3">Domain Expertise</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {domains.map((d) => (
                <span key={d} className="text-xs bg-rose-50 border border-rose-200 text-rose-700 px-3 py-1 rounded-md font-medium">
                  {d}
                </span>
              ))}
            </div>

            {/* Education */}
            <div className="border-t border-gray-100 pt-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-indigo-50 border border-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-indigo-600 text-sm" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">BS Software Engineering</p>
                  <p className="text-xs text-indigo-600 font-medium">PUCIT</p>
                  <p className="text-xs text-gray-400 mt-0.5">Sep 2016 - Jul 2020</p>
                </div>
              </div>
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
