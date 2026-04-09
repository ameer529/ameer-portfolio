import React from 'react';
import { FaCheckCircle, FaGraduationCap } from 'react-icons/fa';

const highlights = [
  'Served as Associate Lead for a team of 10 engineers across full product lifecycle',
  'Led a team of 7 engineers in mobile application development (iOS, Android, Backend)',
  'Built and shipped FinTech payment platforms processing real transactions',
  'Integrated AWS (EC2, DynamoDB, API Gateway, CloudWatch, Lambda) on production systems',
  'Designed custom Ruby Gems to manage shared code and microservices',
  'Improved code quality through TDD, CI/CD pipelines, and industry best practices',
];

const domains = ['Ruby on Rails', 'FinTech', 'Health Tech', 'SaaS', 'AWS', 'Full-Stack'];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">About Me</p>
          <h2 className="section-title mb-4">Ambitious. Detail-Oriented.<br />Result-Driven.</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A full-stack engineer with a strong Ruby on Rails foundation, passionate about
            building reliable systems and leading teams to deliver on time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Story */}
          <div className="card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">My Story</h3>
            <p className="text-gray-500 text-sm leading-7 mb-4">
              I'm a Full-Stack Engineer with 4 years of hands-on experience in Ruby on Rails,
              building and scaling web and mobile applications across FinTech and Dental Tech domains.
              I've worked in both associate lead and senior engineering roles — owning products
              end-to-end from requirements gathering to production deployment.
            </p>
            <p className="text-gray-500 text-sm leading-7 mb-6">
              I take pride in clean, maintainable code and a collaborative approach to engineering.
              Whether it's architecting a new feature, resolving legacy issues, or mentoring teammates,
              I show up focused on impact.
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
                  <p className="text-xs text-gray-400 mt-0.5">Sep 2016 – Jul 2020</p>
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
