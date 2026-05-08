'use client';

import { useState } from 'react';
import { copy } from '@/content/copy';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="py-16 md:py-24"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-mono text-3xl md:text-4xl font-bold mb-10"
          style={{ color: 'var(--color-fg)' }}
        >
          {copy.faq.sectionTitle}
        </h2>

        <div className="flex flex-col" style={{ borderTop: '1px solid var(--color-border)' }}>
          {copy.faq.items.map((item, idx) => (
            <div
              key={idx}
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span
                  className="font-medium text-base"
                  style={{ color: 'var(--color-fg)' }}
                >
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 font-mono text-lg transition-transform duration-200"
                  style={{
                    color: 'var(--color-accent)',
                    transform: open === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              {open === idx && (
                <p
                  className="pb-5 text-sm leading-relaxed"
                  style={{ color: 'var(--color-fg-dim)' }}
                >
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
