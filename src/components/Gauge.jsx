import { useId } from 'react'

// SVG dashboard gauge: 270° sweep, needle + filled arc animate to `value` (0–1).
const C = 100
const pt = (deg, r) => [C + r * Math.cos((deg * Math.PI) / 180), C + r * Math.sin((deg * Math.PI) / 180)]
const arc = (r) => {
  const [x1, y1] = pt(135, r)
  const [x2, y2] = pt(45, r)
  return `M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`
}

export default function Gauge({ value = 0, active = true, ticks = 27, children, className = '', needle = true }) {
  const f = active ? value : 0
  const gid = 'gf' + useId().replace(/:/g, '')
  return (
    <div className={`gauge ${className}`}>
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#ffb020" />
            <stop offset="1" stopColor="#ff2d3d" />
          </linearGradient>
        </defs>
        <circle cx={C} cy={C} r="96" className="g-rim" />
        {Array.from({ length: ticks }, (_, i) => {
          const major = i % 3 === 0
          const deg = 135 + (270 * i) / (ticks - 1)
          const [x1, y1] = pt(deg, 88)
          const [x2, y2] = pt(deg, major ? 76 : 82)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className={`g-tick ${major ? 'maj' : ''} ${i > ticks * 0.82 ? 'red' : ''}`} />
        })}
        <path d={arc(66)} className="g-track" />
        <path d={arc(66)} pathLength="1" className="g-fill" stroke={`url(#${gid})`} style={{ strokeDashoffset: 1 - f }} />
        {needle && (
          <g className="g-needle" style={{ transform: `rotate(${135 + 270 * f}deg)` }}>
            <line x1="100" y1="100" x2="168" y2="100" />
            <line x1="100" y1="100" x2="84" y2="100" className="tail" />
          </g>
        )}
        <circle cx={C} cy={C} r="7" className="g-hub" />
      </svg>
      <div className="g-center">{children}</div>
    </div>
  )
}
