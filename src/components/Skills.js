import React from 'react';
import { FaGem, FaGithub, FaDatabase, FaServer, FaTools, FaProjectDiagram } from 'react-icons/fa';
import { SiPostgresql, SiJira, SiPostman, SiClickup } from 'react-icons/si';

const skills = [
  {
    category: 'Core',
    items: [
      { name: 'Ruby on Rails', icon: <FaGem className="text-red-400" />, level: 'Expert' },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" />, level: 'Expert' },
      { name: 'SQL', icon: <FaDatabase className="text-yellow-400" />, level: 'Advanced' },
      { name: 'REST APIs', icon: <FaServer className="text-emerald-400" />, level: 'Expert' },
    ],
  },
  {
    category: 'Tools & Workflow',
    items: [
      { name: 'GitHub', icon: <FaGithub className="text-gray-200" />, level: 'Advanced' },
      { name: 'Jira', icon: <SiJira className="text-blue-500" />, level: 'Advanced' },
      { name: 'ClickUp', icon: <SiClickup className="text-violet-400" />, level: 'Advanced' },
      { name: 'Postman', icon: <SiPostman className="text-orange-400" />, level: 'Advanced' },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'DevOps', icon: <FaTools className="text-gray-400" />, level: 'Intermediate' },
      { name: 'Architecture', icon: <FaProjectDiagram className="text-purple-400" />, level: 'Advanced' },
    ],
  },
];

const levelStyles = {
  Expert: 'bg-rose-500/15 text-rose-400 border-rose-500/20',
  Advanced: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  Intermediate: 'bg-zinc-700/50 text-zinc-400 border-zinc-600/30',
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
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
              <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="card-dark p-5 flex flex-col items-center text-center gap-3 hover:border-rose-500/30 hover:-translate-y-1 transition-all duration-200 cursor-default"
                  >
                    <div className="text-3xl">{skill.icon}</div>
                    <div>
                      <p className="text-sm font-medium text-gray-200 mb-1">{skill.name}</p>
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
