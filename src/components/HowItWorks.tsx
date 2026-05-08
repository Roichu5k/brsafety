import { copy } from '@/content/copy';

export function HowItWorks() {
  return (
    <section
      id="como-trabajamos"
      className="py-16 md:py-24"
      style={{ background: 'var(--color-bg-elev)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2
            className="font-mono text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--color-fg)' }}
          >
            {copy.howItWorks.sectionTitle}
          </h2>
          <p style={{ color: 'var(--color-fg-dim)' }}>
            {copy.howItWorks.sectionSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.howItWorks.steps.map((step, idx) => (
            <div key={step.num} className="relative flex flex-col gap-4">
              {/* Connector line between steps (desktop) */}
              {idx < copy.howItWorks.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-5 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px"
                  style={{ background: 'var(--color-border)' }}
                />
              )}

              {/* Step number bubble */}
              <div
                className="w-10 h-10 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0"
                style={{
                  background: 'var(--color-accent-dim)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-accent)',
                }}
              >
                {step.num}
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold text-base"
                  style={{ color: 'var(--color-fg)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-fg-dim)' }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
