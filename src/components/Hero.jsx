import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="brand">"EXAM KA SHORTCUT"</span>
        <h1>Built around what exams repeat.</h1>
        <p>
          Notes, PYQs and playlists — nothing extra, nothing random.
        </p>
        <Link to="/#pyqs" className="cta">Browse PYQs</Link>
      </div>

      <div className="hero-visual">
        <img src="/assets/Images/hero.jpg" alt="study aesthetic" />
      </div>
    </section>
  )
}

export default Hero
