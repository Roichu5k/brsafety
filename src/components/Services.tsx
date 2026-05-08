'use client';

import { copy } from '@/content/copy';
import { CornerFrame } from '@/components/ui/CornerFrame';
import { ScanLine } from '@/components/ui/ScanLine';

const serviceIcons: Record<string, React.ReactNode> = {
  '01': (
    // Globe icon
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  '02': (
    // Server icon
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  '03': (
    // Wifi icon
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  ),
  '04': (
    // Target icon
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

export function Services() {
  return (
    <section
      id="servicios"
      className="py-16 md:py-24"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="font-mono text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--color-fg)' }}
          >
            {copy.services.sectionTitle}
          </h2>
          <p
            className="text-base"
            style={{ color: 'var(--color-fg-dim)' }}
          >
            {copy.services.sectionSub}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {copy.services.items.map((item) => (
            <CornerFrame key={item.num}>
              <div
                className="group relative p-6 border transition-colors"
                style={{
                  background: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,255,136,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)';
                }}
              >
                <ScanLine />

                {/* Number */}
                <div
                  className="font-mono text-sm mb-4"
                  style={{ color: 'rgba(0,255,136,0.4)' }}
                >
                  {item.num}.
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <span style={{ color: 'var(--color-accent)' }}>
                    {serviceIcons[item.num]}
                  </span>
                  <h3
                    className="font-mono font-semibold text-lg"
                    style={{ color: 'var(--color-fg)' }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Pitch */}
                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: 'var(--color-fg-dim)' }}
                >
                  {item.pitch}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 border"
                      style={{
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-fg-dim)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-1.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm flex items-start gap-2"
                      style={{ color: 'rgba(154,166,173,0.7)' }}
                    >
                      <span style={{ color: 'var(--color-accent)' }}>·</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </CornerFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
