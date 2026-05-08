'use client';
export function TerminalChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase"
      style={{
        background: 'var(--color-accent-dim)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-accent)',
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{
          background: 'var(--color-accent)',
          animation: 'pulse-dot 2s ease-in-out infinite',
        }}
      />
      {children}
    </span>
  );
}
