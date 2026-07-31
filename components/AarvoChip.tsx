const GS = 'var(--font-geist-sans), system-ui, sans-serif'

export default function AarvoChip({ size = 'desktop' }: { size?: 'desktop' | 'mobile' }) {
  const icon = size === 'desktop' ? 17 : 17
  const labelSize = size === 'desktop' ? '13px' : '12px'
  const arrow = size === 'desktop' ? 12 : 11

  return (
    <a
      href="https://aarvo.com"
      target="_blank"
      rel="noopener noreferrer"
      className="aarvo-chip"
      style={{
        alignItems: 'center',
        backgroundColor: '#ECEAE1',
        borderColor: '#CCCAB8',
        borderRadius: '7px',
        borderStyle: 'solid',
        borderWidth: '1px',
        display: 'inline-flex',
        flexShrink: 0,
        gap: '5px',
        paddingBottom: '3px',
        paddingLeft: '4px',
        paddingRight: '9px',
        paddingTop: '3px',
        verticalAlign: 'middle',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/aarvo-icon.svg"
        alt="aarvo"
        width={icon}
        height={icon}
        style={{
          borderRadius: '4px',
          display: 'block',
          flexShrink: 0,
          outline: '1px solid oklch(0 0 0 / 0.1)',
          outlineOffset: '-1px',
        }}
      />
      <span
        style={{
          color: '#1B1C18',
          fontFamily: GS,
          fontSize: labelSize,
          fontWeight: 600,
          letterSpacing: '-0.01em',
          lineHeight: '100%',
        }}
      >
        aarvo.com
      </span>
      <svg width={arrow} height={arrow} viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <path d="M11.7119 11.3586C11.5775 11.2243 11.4927 11.0333 11.4927 10.8283L11.4927 4.50674L5.17113 4.50674C4.75394 4.50674 4.41806 4.17086 4.4216 3.7572C4.4216 3.34001 4.75747 3.00413 5.17113 3.00767H12.2422C12.6594 3.00767 12.9953 3.34354 12.9917 3.7572L12.9917 10.8283C12.9917 11.2455 12.6559 11.5813 12.2422 11.5778C12.0371 11.5778 11.8462 11.493 11.7119 11.3586Z" fill="currentColor" />
        <path d="M3.22659 12.7728C2.93314 12.4794 2.93314 12.0056 3.22659 11.7122L11.2947 3.64407C11.5881 3.35062 12.0619 3.35062 12.3553 3.64407C12.6488 3.93751 12.6488 4.41128 12.3553 4.70473L4.28725 12.7728C3.9938 13.0663 3.52004 13.0663 3.22659 12.7728Z" fill="currentColor" />
      </svg>
    </a>
  )
}
