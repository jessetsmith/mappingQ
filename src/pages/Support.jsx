import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import './Page.css'

function Support() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t.support.title}</h1>
        
        <section className="page-section">
          <h2 className="section-heading">{t.support.donate}</h2>
          <p className="section-text">
            {t.support.donateText}
          </p>
          <div className="donate-container">
            <a 
              href="https://artmuseum.arizona.edu/support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="donate-button"
            >
              <span>{t.support.donateToUAMA}</span>
            </a>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.support.volunteer}</h2>
          <p className="section-text">
            {t.support.volunteerText}
          </p>
          <div className="contact-info">
            <p><strong>{language === 'en' ? 'University of Arizona Museum of Art' : 'Museo de Arte de la Universidad de Arizona'}</strong></p>
            <p>1031 N Olive Road, Tucson, AZ 85721-0002</p>
            <p>{language === 'en' ? 'Phone' : 'Teléfono'}: 520-621-7567</p>
            <p>{language === 'en' ? 'Email' : 'Correo electrónico'}: <a href="mailto:artmuseum@email.arizona.edu">artmuseum@email.arizona.edu</a></p>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.support.sustainingPartners}</h2>
          <p className="section-text">
            {t.support.sustainingPartnersText}
          </p>
          <div className="partners-grid">
            <div className="partner-logo">
              <p>{t.support.lgbtAllianceFund}</p>
              <p className="partner-subtitle">{t.support.communityFoundation}</p>
            </div>
            <div className="partner-logo">
              <p>{t.support.uamaGlickman}</p>
              <p className="partner-subtitle">{t.support.outreachEndowment}</p>
            </div>
            <div className="partner-logo">
              <p>{t.support.saaf}</p>
              <p className="partner-subtitle">{t.support.saafSubtitle}</p>
            </div>
            <div className="partner-logo">
              <p>{t.support.oneNTen}</p>
              <p className="partner-subtitle">{t.support.oneNTenSubtitle}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Support

