export default function AarvoChip({
  domain = 'aarvo.com',
  icon = '/aarvo-icon.svg',
  label = domain,
}: {
  domain?: string
  icon?: string
  label?: string // shown text, when it differs from the linked domain
}) {
  return (
    <a
      href={`https://${domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="aarvo-chip"
      aria-label={`${label} (opens in a new tab)`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" width={14} height={14} />
      <span>
        {label}
      </span>
      <svg className="aarvo-chip__arrow" width={10} height={10} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
