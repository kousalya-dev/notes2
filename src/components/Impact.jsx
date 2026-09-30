import { impact } from '../data.js'
import Reveal from './Reveal.jsx'
import CountUp from './CountUp.jsx'
import Gauge from './Gauge.jsx'
import { Head } from './About.jsx'
import { useInView } from '../hooks.js'

function Card({ s, i }) {
  const [ref, seen] = useInView({ threshold: 0.35 })
  return (
    <Reveal delay={i * 90} className="icard">
      <div ref={ref}>
        <Gauge value={s.f} active={seen} ticks={21}>
          <div className="digital sm"><strong><CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} /></strong></div>
        </Gauge>
      </div>
      <h3>{s.label}</h3>
      <p>{s.note}</p>
    </Reveal>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="section container">
      <Head n="02 / INSTRUMENT CLUSTER" title="Numbers that moved" sub="Measured results from production work at Unifo." />
      <div className="cluster">{impact.map((s, i) => <Card key={s.label} s={s} i={i} />)}</div>
    </section>
  )
}
