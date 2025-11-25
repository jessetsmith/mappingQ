import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { initializeGalleries } from '../utils/galleryData'
import { getArtworksGallery } from '../utils/artworksData'
import { getAssetPath } from '../utils/assetPath'
import './Home.css'

function Home() {
  const { language } = useLanguage()
  const t = translations[language]
  const [scannedZinesImage, setScannedZinesImage] = useState(null)
  const [artworksImage, setArtworksImage] = useState(null)
  const heroImageRef = useRef(null)
  const heroSectionRef = useRef(null)

  useEffect(() => {
    // Get first image from scanned zines galleries
    const loadedGalleries = initializeGalleries()
    if (loadedGalleries.length > 0 && loadedGalleries[0].images.length > 0) {
      setScannedZinesImage(loadedGalleries[0].images[0].src)
    }
    
    // Get first image from artworks gallery
    const artworksGallery = getArtworksGallery()
    if (artworksGallery.images.length > 0) {
      setArtworksImage(artworksGallery.images[0].src)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!heroImageRef.current || !heroSectionRef.current) return

      const heroSection = heroSectionRef.current
      const scrollY = window.scrollY || window.pageYOffset
      
      // Get the section's position from the top of the document
      const sectionOffsetTop = heroSection.offsetTop
      const sectionHeight = heroSection.offsetHeight
      
      // Calculate how much we've scrolled past the section start
      const scrolledPast = Math.max(0, scrollY - sectionOffsetTop)
      
      // Parallax effect: image moves at 50% of scroll speed
      // Stop when we've scrolled past the entire section (at bottom of text)
      const parallaxSpeed = 0.5
      const maxScroll = sectionHeight
      const parallaxOffset = Math.min(scrolledPast * parallaxSpeed, maxScroll * parallaxSpeed)
      
      // Apply transform - image moves down as we scroll (positive Y)
      heroImageRef.current.style.transform = `translateY(${parallaxOffset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="home-page">
      <section className="hero-section" ref={heroSectionRef}>
        <div className="hero-content">
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img 
                ref={heroImageRef}
                src={getAssetPath('MappingQ-Assets/Vanessa S/VS_public-safety.jpg')} 
                alt="The Public is not Safe by Vanessa S., 2020, mixed media on paper" 
                className="hero-image"
              />
            </div>
          </div>
          <div className="hero-text-container">
            {/* <h1 className="hero-title">
              <span className="title-mapping">MAPPING</span>
              <span className="title-q">Q</span>
            </h1> */}
            <div className="hero-text">
              <p>
                <strong>{t.home.heroTitle}</strong> {t.home.heroText1}
              </p>
              <p>
                {t.home.heroText2}
              </p>
              <p>
                {t.home.heroText3}
              </p>
              <p className="hero-image-credit">
                <em>{t.home.heroImageCredit} <strong>{t.home.heroImageCreditTitle}</strong>, {t.home.heroImageCreditYear}</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="galleries-section">
        <div className="section-header">
          <h2 className="section-title">{t.home.exploreArchive}</h2>
          <p className="section-description">
            {t.home.archiveDescription}
          </p>
        </div>
        
        <div className="archive-links">
          <Link to="/scanned-zines" className="archive-link">
            <div className="archive-link-image">
              {scannedZinesImage ? (
                <img
                  src={scannedZinesImage}
                  alt={t.scannedZines.title}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3EImage%3C/text%3E%3C/svg%3E'
                  }}
                />
              ) : (
                <div className="gallery-placeholder">
                  <span>No images</span>
                </div>
              )}
            </div>
            <div className="archive-link-info">
              <h3 className="archive-link-title">{t.scannedZines.title}</h3>
              <p className="archive-link-description">{t.scannedZines.description}</p>
            </div>
          </Link>
          <Link to="/artworks/detail" className="archive-link">
            <div className="archive-link-image">
              {artworksImage ? (
                <img
                  src={artworksImage}
                  alt={t.home.artworks2020}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3EImage%3C/text%3E%3C/svg%3E'
                  }}
                />
              ) : (
                <div className="gallery-placeholder">
                  <span>No images</span>
                </div>
              )}
            </div>
            <div className="archive-link-info">
              <h3 className="archive-link-title">{t.home.artworks2020}</h3>
              <p className="archive-link-description">{t.home.artworks2020Description}</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

