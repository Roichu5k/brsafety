export function ScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-x-0 h-12"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(0,255,136,0.05), transparent)',
          animation: 'scan-line 3s linear infinite',
          top: 0,
        }}
      />
    </div>
  );
}
