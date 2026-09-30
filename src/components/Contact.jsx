import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [rev, setRev] = useState(false)
  const [copied, setCopied] = useState(false)
  const start = () => {
    setRev(true)
    setTimeout(() => setRev(false), 1400)
    setTimeout(() => { location.href = `mailto:${profile.email}` }, 900)
  }
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      location.href = `mailto:${profile.email}`
    }
  }
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="num">05 / IGNITION</span>
        <h2 className="mega">Ready when<br /><em>you are.</em></h2>
        <div className="ignite">
          <button className={`start ${rev ? 'rev' : ''}`} onClick={start} aria-label="Start engine — email Hanu">
            <span>ENGINE</span><b>START</b><span>STOP</span>
          </button>
          <div className="ignite-info">
            <p>Push to start a conversation — I’m an immediate-fit for full-stack roles.</p>
            <div className="cta">
              <button className="btn solid" onClick={copy}>{copied ? 'Copied ✓' : profile.email}</button>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
            </div>
          </div>
        </div>
        <footer>© {new Date().getFullYear()} {profile.name} · Built with React + Vite</footer>
      </div>
    </section>
  )
}
