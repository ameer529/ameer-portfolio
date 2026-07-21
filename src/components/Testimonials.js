import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Yauheni Statsenka',
    initials: 'YS',
    role: 'Product Owner',
    company: 'RYVYL',
    context: 'QuickCard, FinTech payments',
    quote: [
      "I had the pleasure of working with Ameer Hamza while he was a Senior Software Engineer at Techcreatix, our development partner on a fintech payments product. Ameer played a key role in delivering critical features end-to-end, from gathering requirements with our US-based team to releasing stable, scalable solutions in production.",
      "His expertise in Ruby on Rails, payment gateway integrations, and blockchain-based data synchronization was evident in the reliability and performance of the product. I especially appreciated his strong sense of ownership, clear communication across time zones, and focus on delivering complete, well-thought-out solutions rather than just writing code.",
      "I highly recommend Ameer Hamza for any team looking for a strong engineer who can collaborate effectively and deliver high-impact results.",
    ],
  },
  {
    name: 'Colin Ambler',
    initials: 'CA',
    role: 'CEO',
    company: 'TeamCare',
    context: 'Dental practice management SaaS',
    quote: [
      "Ameer has quietly emerged as one of the most senior and trusted engineers on our team. His work is marked by quality and proper problem solving. He has built full modules, debugged difficult problems and worked in all facets of our application. He's a great teammate, never disappoints and always takes great pride in his work.",
    ],
  },
  {
    name: 'Rajab Ali',
    initials: 'RA',
    role: 'Scrum Master',
    company: 'QuickCard (Techcreatix)',
    context: 'FinTech payments platform',
    quote: [
      "I had the pleasure of working with Ameer Hamza, and I can confidently say he is an exceptional Backend Developer with strong expertise in Ruby on Rails. What sets Ameer apart is not only his technical knowledge but also his versatility: he's the kind of professional who is always ready to step in and help across different areas whenever the team needs support.",
      "He has a solid understanding of backend architecture, API development, database design, and troubleshooting complex issues. He consistently delivers reliable, high-quality solutions while writing clean, scalable, and maintainable code. Ameer approaches challenges with a calm, solution-oriented mindset and takes ownership of his work from start to finish.",
      "Beyond his technical expertise, Ameer is an excellent teammate. He communicates effectively, collaborates well with cross-functional teams, and is always willing to share his knowledge and support others. His positive attitude, reliability, and eagerness to learn make him someone you can always count on.",
      "I highly recommend Ameer Hamza to any organization looking for a talented Ruby on Rails developer who combines strong technical skills with a collaborative mindset and a genuine commitment to delivering quality results. It has been a pleasure working with him, and I'm confident he will continue to make a positive impact wherever he goes.",
    ],
  },
];

const Avatar = ({ initials, size = 'md' }) => {
  const dim = size === 'lg' ? 'w-14 h-14 text-base' : 'w-11 h-11 text-sm';
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold shadow-sm`}
      style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}
    >
      {initials}
    </div>
  );
};

const Card = ({ t, onOpen }) => (
  <button
    type="button"
    onClick={onOpen}
    className="group text-left w-[320px] sm:w-[380px] flex-shrink-0 card p-7 flex flex-col cursor-pointer hover:border-indigo-200 hover:-translate-y-1 transition-all duration-200"
    style={{ height: '340px' }}
  >
    <FaQuoteLeft className="text-indigo-200 text-2xl mb-4 flex-shrink-0" />

    <p className="text-gray-600 text-sm leading-relaxed line-clamp-6 flex-1">
      {t.quote[0]}
    </p>

    <span className="text-xs font-semibold text-indigo-600 mt-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
      Read full recommendation ›
    </span>

    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
      <Avatar initials={t.initials} />
      <div className="min-w-0">
        <p className="text-sm font-bold text-gray-900 truncate">{t.name}</p>
        <p className="text-xs text-gray-400 font-medium truncate">
          {t.role}, {t.company}
        </p>
      </div>
    </div>
  </button>
);

const Modal = ({ t, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        <FaQuoteLeft className="text-indigo-200 text-3xl mb-5" />

        <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
          {t.quote.map((para, j) => (
            <p key={j}>{para}</p>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
          <Avatar initials={t.initials} size="lg" />
          <div className="min-w-0">
            <p className="text-base font-bold text-gray-900">{t.name}</p>
            <p className="text-sm text-gray-400 font-medium">
              {t.role}, {t.company}
            </p>
            {t.context && <p className="text-xs text-gray-400 mt-0.5">{t.context}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [active, setActive] = useState(null);
  // Duplicate the list so the marquee can loop seamlessly (translateX -50%).
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-tag mb-3">Testimonials</p>
          <h2 className="section-title mb-4">What People Say</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Recommendations from the people I've built products with across FinTech and Health Tech.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-viewport w-full overflow-hidden">
        <div className="marquee-track flex gap-6 w-max px-6">
          {loop.map((t, i) => (
            <Card key={i} t={t} onOpen={() => setActive(t)} />
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-8">
        Hover to pause · click a card to read the full recommendation
      </p>

      {active && <Modal t={active} onClose={() => setActive(null)} />}
    </section>
  );
};

export default Testimonials;
