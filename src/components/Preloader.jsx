import { useEffect, useState } from 'react'
import { reduced } from '../hooks.js'
import Gauge from './Gauge.jsx'

// "Ignition": needle revs up, then the screen lifts. Exit is timer-driven.
export default function Preloader() {
  const [gone, setGone] = useState(reduced())
  const [hide, setHide] = useState(false)
  const [f, setF] = useState(0)

  useEffect(() => {
    if (gone) return
    document.body.style.overflow = 'hidden'
    const t = [
      setTimeout(() => setF(1), 150),
      setTimeout(() => setF(0.18), 950),
      setTimeout(() => setHide(true), 1600),
      setTimeout(() => setGone(true), 2500),
    ]
    return () => {
      t.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [gone])

  if (gone) return null
  return (
    <div className={`preloader ${hide ? 'hide' : ''}`} aria-hidden="true">
      <Gauge value={f} className="pre-gauge">
        <b>{f > 0.5 ? 'REV' : 'IDLE'}</b>
      </Gauge>
      <div className="pre-text">STARTING ENGINE<span>…</span></div>
    </div>
  )
}
