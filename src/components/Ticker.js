import React from 'react';

const items = [
  'Ruby on Rails',
  'Hotwire',
  'AWS',
  'PostgreSQL',
  'FinTech',
  'Payments',
  'Health Tech',
  'Multi-tenant SaaS',
  'AI / LLM',
  'Sidekiq',
  'CI/CD',
];

const Row = () => (
  <div className="flex shrink-0 items-center" aria-hidden="true">
    {items.map((item) => (
      <span key={item} className="flex items-center">
        <span className="font-serif text-2xl md:text-3xl text-paper/90 px-6">{item}</span>
        <span className="text-accent text-xl">·</span>
      </span>
    ))}
  </div>
);

// Slow horizontal marquee band on ink background.
const Ticker = () => {
  return (
    <div className="bg-ink py-5 overflow-hidden border-y border-line-dark">
      <div className="flex w-max marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
};

export default Ticker;
