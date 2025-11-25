import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import ArtworksGallery from '../components/ArtworksGallery'
import './Page.css'

function Artworks() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t.artworks.artworks}</h1>
        
        <section className="page-section">
          <p className="section-text">
            {language === 'en'
              ? 'Visual art pieces created by participants exploring themes of identity, community, and resilience. Click on the gallery below to explore all artworks.'
              : 'Piezas de arte visual creadas por participantes que exploran temas de identidad, comunidad y resiliencia. Haz clic en la galería a continuación para explorar todas las obras de arte.'
            }
          </p>
        </section>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--spacing-lg)' }}>
          <ArtworksGallery />
        </div>
      </div>
    </div>
  )
}

export default Artworks

