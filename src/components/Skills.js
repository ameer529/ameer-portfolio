import React from 'react';
import { FaGem, FaGithub, FaDatabase, FaServer, FaTools, FaProjectDiagram } from 'react-icons/fa';
import { SiPostgresql, SiJira, SiPostman, SiClickup } from 'react-icons/si';

const skills = [
  {
    category: 'Core',
    items: [
      { name: 'Ruby on Rails', icon: <FaGem className="text-rose-600" />, level: 'Expert' },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" />, level: 'Expert' },
      { name: 'SQL', icon: <FaDatabase className="text-amber-500" />, level: 'Advanced' },
      { name: 'REST APIs', icon: <FaServer className="text-emerald-500" />, level: 'Expert' },
    ],
  },
  {
    category: 'Tools & Workflow',
    items: [
      { name: 'GitHub', icon: <FaGithub className="text-gray-700" />, level: 'Advanced' },
      { name: 'Jira', icon: <SiJira className="text-blue-600" />, level: 'Advanced' },
      { name: 'ClickUp', icon: <SiClickup className="text-violet-600" />, level: 'Advanced' },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" />, level: 'Advanced' },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'DevOps', icon: <FaTools className="text-gray-500" />, level: 'Intermediate' },
      { name: 'Architecture', icon: <FaProjectDiagram className="text-indigo-500" />, level: 'Advanced' },
    ],
  },
];

const levelStyles = {
  Expert: 'bg-rose-50 text-rose-700 border-rose-200',
  Advanced: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Intermediate: 'bg-gray-100 text-gray-500 border-gray-200',
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Technical Skills</p>
          <h2 className="section-title mb-4">Tools & Technologies</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            The core stack I rely on to build reliable, production-grade applications.
          </p>
        </div>

        <div className="space-y-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="card p-5 flex flex-col items-center text-center gap-3 hover:border-indigo-200 hover:-translate-y-1 transition-all duration-200 cursor-default"
                  >
                    <div className="text-3xl">{skill.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-1">{skill.name}</p>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${levelStyles[skill.level]}`}>
                        {skill.level}
                      </span>
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
