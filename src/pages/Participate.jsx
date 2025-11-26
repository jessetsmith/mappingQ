import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import './Page.css'

function Participate() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t.participate.title}</h1>
        
        <section className="page-section">
          <h2 className="section-heading">{t.participate.popUpGallery}</h2>
          <p className="section-text">
            {t.participate.popUpGalleryText}
          </p>
          <div className="activity-cards">
            <div className="activity-card">
              <h3>{t.participate.artMakingWorkshops}</h3>
              <p>{t.participate.artMakingWorkshopsText}</p>
            </div>
            <div className="activity-card">
              <h3>{t.participate.selfCarePractices}</h3>
              <p>{t.participate.selfCarePracticesText}</p>
            </div>
            <div className="activity-card">
              <h3>{t.participate.harmReduction}</h3>
              <p>{t.participate.harmReductionText}</p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.participate.submitWork}</h2>
          <p className="section-text">
            {t.participate.submitWorkText}
          </p>
          <div className="submit-form-container">
            <a 
              href="https://forms.gle/example" 
              target="_blank" 
              rel="noopener noreferrer"
              className="submit-button"
            >
              <span>{t.participate.submitArtwork}</span>
            </a>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.participate.stayConnected}</h2>
          <p className="section-text">
            {t.participate.stayConnectedText}
          </p>
          <div className="social-links">
            <a 
              href="https://www.facebook.com/mappingq.uama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/MAPPINGQ.UAMA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.youtube.com/channel/UC2UI8TVHdMR8Ob_JhX3I98w" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>YouTube</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Participate

