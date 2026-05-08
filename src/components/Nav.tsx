'use client';

import { useState } from 'react';
import { copy } from '@/content/copy';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: 'rgba(10,10,10,0.8)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <div
            className="w-9 h-9 flex items-center justify-center rounded"
            style={{
              background: 'linear-gradient(135deg, #0d1f1a, #1d3a31)',
              boxShadow: '0 0 0 1px rgba(0,255,136,0.3) inset',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path
                d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z"
                stroke="#00ff88"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-semibold text-sm" style={{ color: 'var(--color-fg)' }}>
              {copy.nav.logo}
            </span>
            <span className="font-mono text-[10px]" style={{ color: 'var(--color-fg-dim)' }}>
              {copy.nav.claim}
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {copy.nav.links.map((link) => {
            const anchor = link.toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${anchor}`}
                  className="font-mono text-sm transition-colors"
                  style={{ color: 'var(--color-fg-dim)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-fg)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-fg-dim)';
                  }}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 font-mono text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            background: 'var(--color-accent)',
            color: '#0a0a0a',
          }}
        >
          {copy.nav.cta}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              background: 'var(--color-fg)',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '',
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              background: 'var(--color-fg)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              background: 'var(--color-fg)',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-6 flex flex-col gap-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          {copy.nav.links.map((link) => {
            const anchor = link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${anchor}`}
                className="font-mono text-sm py-2"
                style={{ color: 'var(--color-fg-dim)' }}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            );
          })}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-4 py-2.5 font-mono text-sm font-semibold"
            style={{
              background: 'var(--color-accent)',
              color: '#0a0a0a',
            }}
            onClick={() => setMenuOpen(false)}
          >
            {copy.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
