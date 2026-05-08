export function CornerFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const corner = 'absolute w-3 h-3 opacity-40';
  return (
    <div className={`relative ${className}`}>
      <span
        className={`${corner} top-0 left-0`}
        style={{ borderTop: '1px solid var(--color-accent)', borderLeft: '1px solid var(--color-accent)' }}
      />
      <span
        className={`${corner} top-0 right-0`}
        style={{ borderTop: '1px solid var(--color-accent)', borderRight: '1px solid var(--color-accent)' }}
      />
      <span
        className={`${corner} bottom-0 left-0`}
        style={{ borderBottom: '1px solid var(--color-accent)', borderLeft: '1px solid var(--color-accent)' }}
      />
      <span
        className={`${corner} bottom-0 right-0`}
        style={{ borderBottom: '1px solid var(--color-accent)', borderRight: '1px solid var(--color-accent)' }}
      />
      {children}
    </div>
  );
}
