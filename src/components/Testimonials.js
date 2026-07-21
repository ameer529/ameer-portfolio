import React from 'react';
import { FaQuoteLeft, FaUserTie } from 'react-icons/fa';

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
    name: null,
    initials: null,
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

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag mb-3">Testimonials</p>
          <h2 className="section-title mb-4">What People Say</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Recommendations from the people I've built products with across FinTech and Health Tech.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="card p-8 md:p-10 relative hover:border-indigo-200 transition-all duration-200"
            >
              <FaQuoteLeft className="text-indigo-200 text-3xl mb-5" />

              <blockquote className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                {t.quote.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </blockquote>

              <figcaption className="flex items-center gap-4 mt-7 pt-6 border-t border-gray-100">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}
                >
                  {t.initials ? t.initials : <FaUserTie className="text-lg" />}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900">
                    {t.name ? t.name : t.role}
                  </p>
                  <p className="text-xs text-gray-400 font-medium">
                    {t.name ? `${t.role}, ${t.company}` : t.company}
                    {t.context ? ` · ${t.context}` : ''}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
