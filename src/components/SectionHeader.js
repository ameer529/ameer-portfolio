import React from 'react';
import Reveal from './Reveal';

// Editorial section header: mono kicker (e.g. "About") + big serif title.
// `dark` flips colors for ink-background sections.
const SectionHeader = ({ kicker, children, dark = false, className = '' }) => (
  <div className={className}>
    <Reveal className={`kicker mb-5 ${dark ? 'text-accent' : ''}`}>
      {kicker}
    </Reveal>
    <Reveal
      as="h2"
      delay={80}
      className={`display text-[clamp(38px,5.5vw,72px)] ${dark ? 'text-paper' : 'text-ink'}`}
    >
      {children}
    </Reveal>
  </div>
);

export default SectionHeader;
