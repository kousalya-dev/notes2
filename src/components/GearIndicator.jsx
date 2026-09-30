import { useEffect, useState } from 'react'

const gears = [['top', 'N'], ['about', '1'], ['impact', '2'], ['experience', '3'], ['skills', '4'], ['contact', '5']]

// Fixed shifter display: the "gear" follows the section you're in, the bar is RPM = scroll progress.
export default function GearIndicator() {
  const [gear, setGear] = useState('N')
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setP(max > 0 ? scrollY / max : 0)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setGear(gears.find(([id]) => id === e.target.id)[1])),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    gears.forEach(([id]) => document.getElementById(id) && io.observe(document.getElementById(id)))
    return () => {
      removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])
  return (
    <div className="gear" aria-hidden="true">
      <div className="gear-rpm"><i style={{ height: `${Math.max(p, 0.04) * 100}%` }} /></div>
      <div className="gear-box">
        <small>GEAR</small>
        <b key={gear}>{gear}</b>
      </div>
    </div>
  )
}
