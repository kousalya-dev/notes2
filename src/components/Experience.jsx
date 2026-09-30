import { experience } from '../data.js'
import Reveal from './Reveal.jsx'
import { Head } from './About.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <Head n="03 / THE ROUTE" title="Miles driven" sub="Two stops so far — the road keeps going." />
      <div className="routeline">
        {experience.map((j, i) => (
          <Reveal key={j.company} delay={i * 80} className="stop">
            <div className="marker"><span>MILE</span><b>0{i + 1}</b></div>
            <article className="xcard">
              <header>
                <div>
                  <h3>{j.role}</h3>
                  <p className="co">{j.company} <span>· {j.place}</span></p>
                </div>
                <span className="period">{j.period}</span>
              </header>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <div className="tags">{j.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          </Reveal>
        ))}
        <div className="finish"><span>NEXT EXIT →</span> your team</div>
      </div>
    </section>
  )
}
