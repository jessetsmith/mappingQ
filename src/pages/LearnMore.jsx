import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import './Page.css'

function LearnMore() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t.learnMore.title}</h1>
        
        <section className="page-section">
          <h2 className="section-heading">{t.learnMore.communityResources}</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>{t.learnMore.stayGold}</h3>
              <p>{t.learnMore.stayGoldText}</p>
              <a href="#" className="resource-link">{t.learnMore.learnMoreLink}</a>
            </div>
            <div className="resource-card">
              <h3>{t.learnMore.mentalHealthResources}</h3>
              <p>{t.learnMore.mentalHealthResourcesText}</p>
              <a href="#" className="resource-link">{t.learnMore.learnMoreLink}</a>
            </div>
            <div className="resource-card">
              <h3>{t.learnMore.azQueerArchive}</h3>
              <p>{t.learnMore.azQueerArchiveText}</p>
              <a href="#" className="resource-link">{t.learnMore.learnMoreLink}</a>
            </div>
            <div className="resource-card">
              <h3>{t.learnMore.groundWorks}</h3>
              <p>{t.learnMore.groundWorksText}</p>
              <a href="#" className="resource-link">{t.learnMore.learnMoreLink}</a>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">{t.learnMore.academicResearch}</h2>
          <p className="section-text">
            {t.learnMore.academicResearchText}
          </p>
          <div className="research-list">
            <div className="research-item">
              <h3>{t.learnMore.artAsResistance}</h3>
              <p className="research-authors">{t.learnMore.artAsResistanceAuthors}</p>
              <p className="research-abstract">
                {t.learnMore.artAsResistanceAbstract}
              </p>
            </div>
            <div className="research-item">
              <h3>{t.learnMore.virtualCommunity}</h3>
              <p className="research-authors">{t.learnMore.virtualCommunityAuthors}</p>
              <p className="research-abstract">
                {t.learnMore.virtualCommunityAbstract}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LearnMore

