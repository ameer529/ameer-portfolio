import React from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

// PLACEHOLDER POSTS — replace with real articles before publishing (or remove the section).
const posts = [
  {
    date: '2026',
    title: 'Designing multi-tenant Rails apps that stay reliable',
    tag: 'Architecture',
  },
  {
    date: '2026',
    title: 'Moving real money: lessons from payment-gateway integrations',
    tag: 'FinTech',
  },
  {
    date: '2025',
    title: 'Shipping AI/LLM features that behave under production load',
    tag: 'AI / LLM',
  },
];

const Writing = () => {
  return (
    <section id="writing" className="py-24 md:py-32 bg-paper border-t border-line">
      <div className="max-w-editorial mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <SectionHeader kicker="Writing" className="max-w-3xl">
            Notes from the <em className="italic text-accent">field</em>
          </SectionHeader>
          <Reveal className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-dark border border-accent/40 rounded-full px-3 py-1 whitespace-nowrap">
            Placeholder
          </Reveal>
        </div>

        <div className="border-t border-line-strong">
          {posts.map((post, i) => (
            <Reveal
              key={post.title}
              delay={i * 70}
              className="group grid grid-cols-[64px_1fr_auto] items-center gap-4 md:gap-8 py-7 border-b border-line cursor-default"
            >
              <span className="font-mono text-[12px] text-muted">{post.date}</span>
              <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                {post.title}
              </h3>
              <div className="flex items-center gap-5 justify-end">
                <span className="chip hidden sm:inline-flex">{post.tag}</span>
                <span className="text-muted group-hover:text-accent transition-colors">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
