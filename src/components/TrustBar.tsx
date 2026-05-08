import { copy } from '@/content/copy';

export function TrustBar() {
  return (
    <div
      style={{
        background: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {copy.trust.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 md:px-8 first:pl-0 last:pr-0"
            >
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: 'var(--color-fg-dim)' }}
              >
                {item.label}
              </span>
              <span
                className="font-mono font-semibold text-sm"
                style={{ color: 'var(--color-accent)' }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
