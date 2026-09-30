export default function Car() {
  return (
    <svg className="car" viewBox="0 0 320 100" aria-hidden="true">
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff4655" />
          <stop offset="0.55" stopColor="#d3121f" />
          <stop offset="1" stopColor="#7a0a12" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fd3ff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#1b2a3a" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="beam" cx="0" cy="0.5" r="1">
          <stop offset="0" stopColor="#fff6c8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff6c8" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* headlight beam */}
      <path d="M296 56 L420 20 L420 92 Z" fill="url(#beam)" className="beam" />
      {/* body */}
      <path d="M12 70 C12 60 22 57 42 52 L86 34 C104 24 124 20 148 20 L190 20 C212 20 228 30 246 44 L286 52 C302 55 310 60 310 70 L310 76 L12 76 Z" fill="url(#body)" />
      {/* windows */}
      <path d="M96 38 C110 30 126 27 146 27 L166 27 L166 47 L82 47 Z" fill="url(#glass)" />
      <path d="M174 27 L192 27 C208 28 220 36 232 47 L174 47 Z" fill="url(#glass)" />
      {/* body line + details */}
      <path d="M30 60 L290 60" stroke="#ff8a94" strokeWidth="1" opacity="0.5" />
      <rect x="298" y="58" width="12" height="6" rx="2" fill="#fff6c8" />
      <rect x="12" y="58" width="8" height="6" rx="2" fill="#ff2d3d" className="tail" />
      <path d="M12 76 L310 76 L310 80 L12 80 Z" fill="#111" />
      {/* wheels */}
      {[72, 250].map((cx) => (
        <g key={cx} transform={`translate(${cx} 76)`}>
          <circle r="19" fill="#0c0c0e" />
          <g className="wheel">
            <circle r="13" fill="#1d1d22" stroke="#c9ced6" strokeWidth="1.5" />
            {[0, 72, 144, 216, 288].map((a) => (
              <line key={a} x1="0" y1="0" x2="0" y2="-12" stroke="#c9ced6" strokeWidth="2.4" strokeLinecap="round" transform={`rotate(${a})`} />
            ))}
            <circle r="3" fill="#ffb020" />
          </g>
        </g>
      ))}
    </svg>
  )
}
