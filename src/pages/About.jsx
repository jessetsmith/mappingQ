import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import './Page.css'

function About() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t.about.title}</h1>
        
        <section className="page-section">
          <h2 className="section-heading">{t.about.overview}</h2>
          <p className="section-text">
            {t.about.overviewText}
          </p>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.about.mission}</h2>
          <p className="section-text">
            {t.about.missionText}
          </p>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.about.impact}</h2>
          <p className="section-text">
            {t.about.impactText}
          </p>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.about.themes}</h2>
          <p className="section-text">
            {t.about.themesText}
          </p>
        </section>
      </div>
    </div>
  )
}

export default About

