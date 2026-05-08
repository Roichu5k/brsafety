'use client';

import { copy } from '@/content/copy';
import { HeroGlobe } from '@/components/HeroGlobe';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Copy column */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span style={{ color: 'var(--color-fg)' }}>
                {copy.hero.h1Line1}
              </span>
              <br />
              <span style={{ color: 'var(--color-fg)' }}>
                {copy.hero.h1Line2}
              </span>
              <br />
              <em
                className="font-mono not-italic"
                style={{ color: 'var(--color-accent)' }}
              >
                {copy.hero.h1Line3}
              </em>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: 'var(--color-fg-dim)' }}
            >
              {copy.hero.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3 font-mono font-semibold text-sm transition-opacity hover:opacity-90"
                style={{
                  background: 'var(--color-accent)',
                  color: '#0a0a0a',
                }}
              >
                {copy.hero.ctaPrimary}
              </a>
              <a
                href="#como-trabajamos"
                className="inline-flex items-center justify-center px-6 py-3 font-mono text-sm border transition-colors"
                style={{
                  color: 'var(--color-fg-dim)',
                  borderColor: 'var(--color-border)',
                }}
              >
                {copy.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Globe column */}
          <div
            className="flex flex-col items-center justify-center gap-3"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 70% 40%, #112620 0%, #060a0c 55%, #03060a 100%)',
            }}
          >
            <HeroGlobe className="w-full max-w-sm md:max-w-none" />
            <p className="font-mono text-xs text-center" style={{ color: 'rgba(154,166,173,0.5)' }}>
              {copy.hero.globeCaption}
            </p>
          </div>
        </div>
      </div>

      {/* Services strip */}
      <div
        className="border-t"
        style={{
          background: 'var(--color-bg-elev)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {copy.services.items.map((service) => (
              <div
                key={service.num}
                className="px-4 py-4 flex flex-col gap-1"
              >
                <span
                  className="font-mono text-xs"
                  style={{ color: 'rgba(0,255,136,0.4)' }}
                >
                  {service.num}.
                </span>
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: 'var(--color-fg)' }}
                >
                  {service.title}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--color-fg-dim)' }}
                >
                  {service.tags.join(' · ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
