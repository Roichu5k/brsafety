import { copy } from '@/content/copy';

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: 'var(--color-bg-elev)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo + claim */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 flex items-center justify-center rounded"
                style={{
                  background: 'linear-gradient(135deg, #0d1f1a, #1d3a31)',
                  boxShadow: '0 0 0 1px rgba(0,255,136,0.3) inset',
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path
                    d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z"
                    stroke="#00ff88"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span
                className="font-mono font-semibold text-sm"
                style={{ color: 'var(--color-fg)' }}
              >
                {copy.nav.logo}
              </span>
            </div>
            <p
              className="font-mono text-xs"
              style={{ color: 'var(--color-fg-dim)' }}
            >
              {copy.footer.claim}
            </p>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-mono text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-fg)' }}
            >
              {copy.footer.columns.services.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {copy.footer.columns.services.links.map((link) => (
                <li key={link}>
                  <a
                    href="#servicios"
                    className="font-mono text-xs transition-colors"
                    style={{ color: 'var(--color-fg-dim)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-mono text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-fg)' }}
            >
              {copy.footer.columns.company.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {copy.footer.columns.company.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-mono text-xs transition-colors"
                    style={{ color: 'var(--color-fg-dim)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-mono text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-fg)' }}
            >
              {copy.footer.columns.legal.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {copy.footer.columns.legal.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-mono text-xs transition-colors"
                    style={{ color: 'var(--color-fg-dim)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <span
            className="font-mono text-xs"
            style={{ color: 'var(--color-accent)' }}
          >
            {copy.footer.terminal}
          </span>
          <span
            className="font-mono text-xs"
            style={{ color: 'var(--color-fg-dim)' }}
          >
            © BR Safety S.L. {new Date().getFullYear()} · Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
