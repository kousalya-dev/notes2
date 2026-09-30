import { useEffect, useState } from 'react'
import { profile, readouts, lights } from '../data.js'
import { reduced, magnet, unmagnet } from '../hooks.js'
import Gauge from './Gauge.jsx'
import Car from './Car.jsx'

export default function Hero() {
  const [i, setI] = useState(0)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const start = setTimeout(() => setReady(true), reduced() ? 0 : 2600) // after preloader
    return () => clearTimeout(start)
  }, [])
  useEffect(() => {
    if (!ready || reduced()) return
    const id = setInterval(() => setI((n) => (n + 1) % readouts.length), 2800)
    return () => clearInterval(id)
  }, [ready])
  const r = readouts[i]

  return (
    <section id="top" className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="badge"><i />ENGINE ON · Open to new roles · {profile.location}</span>
          <h1>
            <span className="l1">Hanu</span>
            <span className="l2">S Kumar<b>.</b></span>
          </h1>
          <p className="role">FULL-STACK DEVELOPER <em>//</em> MODULE LEAD</p>
          <p className="tagline">{profile.tagline}</p>
          <p className="sub">{profile.summary}</p>
          <div className="cta">
            <a href="#experience" className="btn solid" onPointerMove={magnet} onPointerLeave={unmagnet}>Take the route ↓</a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn" onPointerMove={magnet} onPointerLeave={unmagnet}>Résumé ↗</a>
          </div>
        </div>

        <div className="dash">
          <Gauge value={r.f} active={ready} className="main-gauge" ticks={31}>
            <div className="digital" key={i}>
              <strong>{r.big}</strong>
              <span>{r.label}</span>
            </div>
          </Gauge>
          <div className="lights">
            {lights.map((l, n) => (<span key={l} style={{ '--n': n }}><i />{l}</span>))}
          </div>
        </div>
      </div>

      <div className="road" aria-hidden="true">
        <div className="lane" />
        <div className="drive"><Car /></div>
        <div className="speed"><i /><i /><i /><i /></div>
      </div>
    </section>
  )
}
