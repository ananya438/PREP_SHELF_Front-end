import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar-architect">
      <div className="nav-dark">
        <Link to="/">
          <img src="/assets/Logo/logo_2.png" alt="PrepShelf logo" className="nav-logo" />
        </Link>
      </div>

      <div className="nav-light">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/#notes">Notes</Link>
          <Link to="/#pyqs">PYQs</Link>
          <Link to="/#playlists">Playlists</Link>
        </nav>
        <Link to="#" className="nav-login">Login</Link>
      </div>
    </header>
  )
}

export default Navbar
