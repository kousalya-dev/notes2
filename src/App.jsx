import Preloader from './components/Preloader.jsx'
import Background from './components/Background.jsx'
import Nav from './components/Nav.jsx'
import GearIndicator from './components/GearIndicator.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Impact from './components/Impact.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Preloader />
      <Background />
      <Nav />
      <GearIndicator />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
