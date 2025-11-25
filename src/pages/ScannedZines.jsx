import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import GalleryGrid from '../components/GalleryGrid'
import { initializeGalleries } from '../utils/galleryData'
import './Page.css'
import './GalleryDetail.css'

function ScannedZines() {
  const { language } = useLanguage()
  const t = translations[language]
  const navigate = useNavigate()
  const [galleries, setGalleries] = useState([])

  useEffect(() => {
    const loadedGalleries = initializeGalleries()
    setGalleries(loadedGalleries)
  }, [])

  return (
    <div className="page-container gallery-detail-container">
      <div className="page-content gallery-detail-content-wrapper">
        <button className="back-button" onClick={() => navigate('/')}>
          {t.common.returnHome}
        </button>
        
        <h1 className="gallery-detail-title">{t.scannedZines.title}</h1>
        
        <div className="gallery-description">
          <p>{t.scannedZines.description}</p>
        </div>

        <div className="gallery-thumbnails-section">
          <GalleryGrid galleries={galleries} />
        </div>
      </div>
    </div>
  )
}

export default ScannedZines

