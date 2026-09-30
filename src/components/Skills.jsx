import { skills } from '../data.js'
import Reveal from './Reveal.jsx'
import { Head } from './About.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <Head n="04 / UNDER THE HOOD" title="The garage" sub="What powers the build, part by part." />
      <div className="parts">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 90} className="part">
            <span className="mono tag">{`0${i + 1} · ${g.part}`}</span>
            <h3>{g.title}</h3>
            <div className="tags">{g.items.map((t) => <span key={t}>{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
