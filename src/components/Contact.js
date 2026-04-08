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
    <section id="contact" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Contact</p>
          <h2 className="section-title mb-4">Let's Work Together</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities?
            I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* CTA card */}
          <div
            className="card-dark p-8 mb-6 text-center rounded-2xl"
            style={{ background: 'linear-gradient(135deg, #1a0a0a, #1a1a1a)' }}
          >
            <div className="w-16 h-16 bg-rose-500/15 border border-rose-500/25 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-rose-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Open to Opportunities</h3>
            <p className="text-gray-400 text-sm mb-6">
              Whether it's a full-time role, contract work, or a consultation —
              reach out and let's talk.
            </p>
            <a
              href="mailto:ameerhamza112281@gmail.com"
              className="btn-primary inline-block"
            >
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
                className="flex items-center gap-4 card-dark p-4 hover:border-rose-500/30 hover:translate-x-1 transition-all duration-200 group"
              >
                <div className="w-11 h-11 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center justify-center text-rose-400 text-lg flex-shrink-0 group-hover:bg-rose-500/20 transition-colors">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-zinc-500 font-medium mb-0.5">{c.label}</p>
                  <p className="text-sm text-gray-300 font-medium truncate">{c.value}</p>
                </div>
                <span className="text-zinc-600 group-hover:text-rose-400 transition-colors text-sm">›</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
