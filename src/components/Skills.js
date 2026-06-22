import React from 'react';
import { FaGem, FaGithub, FaDatabase, FaServer, FaCloud, FaJs } from 'react-icons/fa';
import { SiPostgresql, SiSidekiq, SiHeroku, SiTurbo, SiHotwire } from 'react-icons/si';

const skills = [
  {
    category: 'Core',
    items: [
      { name: 'Ruby on Rails', icon: <FaGem className="text-rose-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'REST APIs', icon: <FaServer className="text-emerald-500" /> },
      { name: 'API Integration', icon: <FaServer className="text-emerald-500" /> },
      { name: 'Payment Integrations', icon: <FaServer className="text-emerald-600" /> },
      { name: 'Multi-tenant SaaS', icon: <FaDatabase className="text-indigo-500" /> },
      { name: 'AI / LLM Features', icon: <FaGem className="text-violet-600" /> },
    ],
  },
  {
    category: 'Frontend & Realtime',
    items: [
      { name: 'Stimulus', icon: <FaJs className="text-sky-500" /> },
      { name: 'Turbo', icon: <SiTurbo className="text-orange-500" /> },
      { name: 'Hotwire', icon: <SiHotwire className="text-red-500" /> },
    ],
  },
  {
    category: 'Infrastructure & Tools',
    items: [
      { name: 'AWS', icon: <FaCloud className="text-amber-500" /> },
      { name: 'Sidekiq', icon: <SiSidekiq className="text-red-600" /> },
      { name: 'Heroku', icon: <SiHeroku className="text-violet-500" /> },
      { name: 'CI/CD', icon: <FaCloud className="text-gray-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-700" /> },
      { name: 'Kimurai', icon: <FaDatabase className="text-green-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Technical Skills</p>
          <h2 className="section-title mb-4">Tools & Technologies</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            The stack I've used in production across multiple companies and products.
          </p>
        </div>

        <div className="space-y-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="card p-5 flex flex-col items-center text-center gap-3 hover:border-indigo-200 hover:-translate-y-1 transition-all duration-200 cursor-default"
                  >
                    <div className="text-3xl">{skill.icon}</div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800 mb-1">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
