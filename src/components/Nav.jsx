import { useState } from 'react'
import { profile } from '../data.js'

const links = [['about', 'About'], ['impact', 'Gauges'], ['experience', 'Route'], ['skills', 'Garage'], ['contact', 'Ignition']]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo" aria-label="Hanu S Kumar — home">
          <span className="logo-mark"><i /></span>
          <span className="logo-text">HANU<b>S</b>KUMAR</span>
        </a>
        <nav className={open ? 'open' : ''}>
          {links.map(([id, l]) => (<a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="pill">Résumé ↗</a>
        </nav>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  )
}
