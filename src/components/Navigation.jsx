import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <img 
            src="/MappingQ-Logo.svg" 
            alt="Mapping Q Logo" 
            className="logo-img"
          />
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About Mapping Q
          </Link>
          <Link 
            to="/history" 
            className={`nav-link ${isActive('/history') ? 'active' : ''}`}
          >
            History
          </Link>
          <Link 
            to="/participate" 
            className={`nav-link ${isActive('/participate') ? 'active' : ''}`}
          >
            Participate
          </Link>
          <Link 
            to="/learn-more" 
            className={`nav-link ${isActive('/learn-more') ? 'active' : ''}`}
          >
            Learn More
          </Link>
          <Link 
            to="/support" 
            className={`nav-link ${isActive('/support') ? 'active' : ''}`}
          >
            Support
          </Link>
        </div>

        <div className="language-toggle">
          <button className="lang-btn">English</button>
          <span className="lang-separator">|</span>
          <button className="lang-btn">Español</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

