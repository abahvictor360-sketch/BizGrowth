export default function Logo() {
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="lg-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b7dff" />
          <stop offset="1" stopColor="#4f3fe0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="#0f0d24" />
      <rect x="14" y="34" width="9" height="16" rx="4.5" fill="url(#lg-a)" />
      <rect x="27.5" y="24" width="9" height="26" rx="4.5" fill="url(#lg-a)" />
      <rect x="41" y="14" width="9" height="36" rx="4.5" fill="#fff" opacity=".92" />
    </svg>
  )
}
