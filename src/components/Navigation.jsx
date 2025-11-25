import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { getAssetPath } from '../utils/assetPath'
import './Navigation.css'

function Navigation() {
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <img 
            src={getAssetPath('MappingQ-Logo.svg')} 
            alt="Mapping Q Logo" 
            className="logo-img"
          />
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            {t.nav.about}
          </Link>
          <Link 
            to="/history" 
            className={`nav-link ${isActive('/history') ? 'active' : ''}`}
          >
            {t.nav.history}
          </Link>
          <Link 
            to="/participate" 
            className={`nav-link ${isActive('/participate') ? 'active' : ''}`}
          >
            {t.nav.participate}
          </Link>
          <Link 
            to="/learn-more" 
            className={`nav-link ${isActive('/learn-more') ? 'active' : ''}`}
          >
            {t.nav.learnMore}
          </Link>
          <Link 
            to="/support" 
            className={`nav-link ${isActive('/support') ? 'active' : ''}`}
          >
            {t.nav.support}
          </Link>
        </div>

        <div className="language-toggle">
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={toggleLanguage}
          >
            English
          </button>
          <span className="lang-separator">|</span>
          <button 
            className={`lang-btn ${language === 'es' ? 'active' : ''}`}
            onClick={toggleLanguage}
          >
            Español
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

