import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import './Page.css'

function History() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t.history.title}</h1>
        
        <section className="page-section">
          <h2 className="section-heading">{t.history.timeline}</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2014</div>
              <div className="timeline-content">
                <h3>{t.history.programLaunch}</h3>
                <p>{t.history.programLaunchText}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>{t.history.virtualExpansion}</h3>
                <p>{t.history.virtualExpansionText}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">{language === 'en' ? 'Present' : 'Presente'}</div>
              <div className="timeline-content">
                <h3>{t.history.onlineArchive}</h3>
                <p>{t.history.onlineArchiveText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.history.participantProjects}</h2>
          <div className="projects-grid">
            <Link to="/artworks" className="project-category project-category-link">
              <h3>{t.history.artworks}</h3>
              <p>{t.history.artworksDescription}</p>
            </Link>
            <div className="project-category">
              <h3>{t.history.photovoice}</h3>
              <p>{t.history.photovoiceDescription}</p>
            </div>
            <Link to="/scanned-zines" className="project-category project-category-link">
              <h3>{t.history.scannedZines}</h3>
              <p>{t.history.scannedZinesDescription}</p>
            </Link>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.history.exhibitions}</h2>
          <p className="section-text">
            {t.history.exhibitionsText}
          </p>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.history.newsMedia}</h2>
          <p className="section-text">
            {t.history.newsMediaText}
          </p>
        </section>
      </div>
    </div>
  )
}

export default History

