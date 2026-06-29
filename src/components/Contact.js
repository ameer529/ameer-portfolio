import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Reveal from './Reveal';

const EMAIL = 'ameerhamza112281@gmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const t = document.createElement('textarea');
      t.value = EMAIL;
      document.body.appendChild(t);
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-paper-alt border-t border-line">
      <div className="max-w-editorial mx-auto px-6">
        <Reveal className="kicker mb-5">Contact</Reveal>
        <Reveal as="h2" delay={80} className="display text-[clamp(44px,7vw,92px)] text-ink max-w-4xl">
          Let's build something <em className="italic text-accent">reliable.</em>
        </Reveal>

        <Reveal delay={120} className="text-body text-[17px] md:text-[19px] leading-relaxed max-w-2xl mt-8">
          Have a project in mind or want to discuss opportunities? Whether it's full-time roles,
          contract work, or consulting, I'd love to hear from you.
        </Reveal>

        <Reveal delay={160} className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
          <button onClick={copyEmail} className="pill-ink text-[13px] px-7 py-3.5">
            {copied ? 'Copied to clipboard ✓' : EMAIL}
          </button>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            Click to copy
          </span>
        </Reveal>

        <Reveal delay={200} className="flex flex-wrap gap-3 mt-8">
          <a
            href="https://github.com/ameer529"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-outline"
          >
            <FaGithub size={14} /> github.com/ameer529
          </a>
          <a
            href="https://www.linkedin.com/in/ameerhamzaror/"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-outline"
          >
            <FaLinkedinIn size={14} /> linkedin.com/in/ameerhamzaror
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
