import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const contacts = [
  {
    label: 'Email',
    value: 'ameerhamza112281@gmail.com',
    href: 'mailto:ameerhamza112281@gmail.com',
    icon: <FaEnvelope />,
    desc: 'Best way to reach me',
  },
  {
    label: 'GitHub',
    value: 'github.com/ameer529',
    href: 'https://github.com/ameer529',
    icon: <FaGithub />,
    desc: 'View my repositories',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ameer-hamza-43415b180',
    href: 'https://www.linkedin.com/in/ameer-hamza-43415b180/',
    icon: <FaLinkedin />,
    desc: 'Connect professionally',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Contact</p>
          <h2 className="section-title mb-4">Let's Work Together</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* CTA card */}
          <div className="rounded-2xl p-8 mb-6 text-center border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white shadow-sm">
            <div className="w-16 h-16 bg-indigo-100 border border-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Open to Opportunities</h3>
            <p className="text-gray-500 text-sm mb-6">
              Whether it's a full-time role, contract work, or a consultation —
              reach out and let's talk.
            </p>
            <a href="mailto:ameerhamza112281@gmail.com" className="btn-primary">
              Send Me an Email
            </a>
          </div>

          {/* Contact links */}
          <div className="space-y-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 card p-4 hover:border-indigo-200 hover:translate-x-1 transition-all duration-200 group"
              >
                <div className="w-11 h-11 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 text-lg flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 font-medium mb-0.5">{c.desc}</p>
                  <p className="text-sm text-gray-700 font-semibold truncate">{c.value}</p>
                </div>
                <span className="text-gray-300 group-hover:text-indigo-500 transition-colors text-sm">›</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
