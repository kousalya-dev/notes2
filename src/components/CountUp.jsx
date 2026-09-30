import { useEffect, useState } from 'react'
import { useInView, reduced } from '../hooks.js'

export default function CountUp({ to, prefix = '', suffix = '', duration = 1800 }) {
  const [ref, seen] = useInView({ threshold: 0.5 })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!seen) return
    if (reduced()) return setV(to)
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1)
      setV(Math.round(to * (1 - Math.pow(1 - p, 4))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])
  return <span ref={ref}>{prefix}{v}{suffix}</span>
}
