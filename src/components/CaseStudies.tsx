import { copy } from '@/content/copy';

export function CaseStudies() {
  return (
    <section
      id="trabajos"
      className="py-16 md:py-24"
      style={{ background: 'var(--color-bg-elev)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="font-mono text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--color-fg)' }}
          >
            {copy.caseStudies.sectionTitle}
          </h2>
          <p
            className="text-sm font-mono"
            style={{ color: 'var(--color-fg-dim)' }}
          >
            {copy.caseStudies.disclaimer}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {copy.caseStudies.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 border flex flex-col gap-4"
              style={{
                background: 'var(--color-bg)',
                borderColor: 'var(--color-border)',
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-4">
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--color-fg-dim)' }}
                >
                  {item.sector}
                </span>
                <span
                  className="font-mono text-xs px-2 py-0.5 border shrink-0"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-accent)',
                    background: 'var(--color-accent-dim)',
                  }}
                >
                  {item.service}
                </span>
              </div>

              {/* Metric */}
              <div>
                <div
                  className="font-mono text-3xl font-bold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {item.metric}
                </div>
                <div
                  className="font-mono text-xs mt-0.5"
                  style={{ color: 'var(--color-fg-dim)' }}
                >
                  {item.metricLabel}
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-fg-dim)' }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
