import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { artworksData, artistMetadata } from '../utils/artworksData'
import './GalleryDetail.css'
import '../components/GalleryModal.css'

// Enlarged Image View
function EnlargedImageView({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="enlarged-image-overlay" onClick={onClose}>
      <div className="enlarged-image-content" onClick={(e) => e.stopPropagation()}>
        <button className="enlarged-image-close" onClick={onClose}>×</button>
        <img src={image.src} alt={image.alt || image.title} className="enlarged-image-img" />
      </div>
    </div>
  )
}

// ImageDetailView component extracted from GalleryModal
function ImageDetailView({ image, onClose, onNext, onPrevious, hasNext, hasPrevious, showDescription = true }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })
  const [isPortrait, setIsPortrait] = useState(false)
  const [showEnlarged, setShowEnlarged] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (showEnlarged) {
          setShowEnlarged(false)
        } else {
          onClose()
        }
      } else if (e.key === 'ArrowRight' && hasNext && !showEnlarged) {
        onNext()
      } else if (e.key === 'ArrowLeft' && hasPrevious && !showEnlarged) {
        onPrevious()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious, showEnlarged])

  useEffect(() => {
    const img = imgRef.current
    if (img) {
      const handleLoad = () => {
        const width = img.naturalWidth || img.offsetWidth
        const height = img.naturalHeight || img.offsetHeight
        setImageDimensions({ width, height })
        setIsPortrait(height > width)
      }

      if (img.complete) {
        handleLoad()
      } else {
        img.addEventListener('load', handleLoad)
        return () => img.removeEventListener('load', handleLoad)
      }
    }
  }, [image.src])

  const handleImageClick = (e) => {
    e.stopPropagation()
    setShowEnlarged(true)
  }

  // Determine if we should show description based on prop or if description exists
  const shouldShowDescription = showDescription && (image.title || image.artist || image.medium || image.description)

  return (
    <>
      <div className="image-detail-overlay" onClick={onClose}>
        <div className={`image-detail-wrapper ${shouldShowDescription ? 'with-description' : 'centered-only'}`} onClick={(e) => e.stopPropagation()}>
          <button className="image-detail-close" onClick={onClose}>×</button>

          {shouldShowDescription ? (
            <>
              <div className="image-detail-content">
                <div className="image-detail-column image-detail-image-column">
                  <div className="image-detail-img-wrapper" onClick={handleImageClick}>
                    <img 
                      ref={imgRef}
                      src={image.src} 
                      alt={image.alt || image.title} 
                      className={`image-detail-img ${isPortrait ? 'portrait' : ''}`}
                    />
                    <div className="image-detail-click-hint">
                      Click to enlarge
                    </div>
                  </div>
                </div>

                <div className="image-detail-column image-detail-info-column">
                  <div className="image-detail-info-box">
                    {image.title && (
                      <h3 className="image-detail-title">{image.title}</h3>
                    )}
                    {image.artist && (
                      <p className="image-detail-artist">{t.artworks.by} {image.artist}</p>
                    )}
                    {image.medium && (
                      <p className="image-detail-medium">{image.medium}</p>
                    )}
                    {image.description && (
                      <div className="image-detail-description">
                        <p>{image.description}</p>
                      </div>
                    )}
                    {!image.title && !image.artist && !image.medium && !image.description && (
                      <p>{image.alt}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="image-detail-nav-bottom">
                {hasPrevious && (
                  <button className="image-detail-nav-btn image-detail-nav-prev" onClick={onPrevious}>
                    ‹ Previous
                  </button>
                )}
                {hasNext && (
                  <button className="image-detail-nav-btn image-detail-nav-next" onClick={onNext}>
                    Next ›
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="image-detail-content-centered">
                <div className="image-detail-img-wrapper" onClick={handleImageClick}>
                  <img 
                    ref={imgRef}
                    src={image.src} 
                    alt={image.alt || image.title} 
                    className={`image-detail-img ${isPortrait ? 'portrait' : ''}`}
                  />
                  <div className="image-detail-click-hint">
                    Click to enlarge
                  </div>
                </div>
              </div>
              <div className="image-detail-nav-bottom">
                {hasPrevious && (
                  <button className="image-detail-nav-btn image-detail-nav-prev" onClick={onPrevious}>
                    ‹ Previous
                  </button>
                )}
                {hasNext && (
                  <button className="image-detail-nav-btn image-detail-nav-next" onClick={onNext}>
                    Next ›
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {showEnlarged && (
        <EnlargedImageView image={image} onClose={() => setShowEnlarged(false)} />
      )}
    </>
  )
}

function ArtistDetail() {
  const { artistSlug } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const t = translations[language]
  const [artistArtworks, setArtistArtworks] = useState([])
  const [artistName, setArtistName] = useState('')
  const [artistInfo, setArtistInfo] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  useEffect(() => {
    // Find artist by slug
    const artistsMap = new Map()
    artworksData.forEach(artwork => {
      if (!artistsMap.has(artwork.artist)) {
        artistsMap.set(artwork.artist, [])
      }
      artistsMap.get(artwork.artist).push(artwork)
    })

    // Find matching artist
    for (const [artist, artworks] of artistsMap.entries()) {
      const slug = artist.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      if (slug === artistSlug) {
        setArtistName(artist)
        setArtistArtworks(artworks)
        const info = artistMetadata[artist] || null
        setArtistInfo(info)
        // Debug: log to verify data
        if (info) {
          console.log('Setting artist info for:', artist)
          console.log('Has description:', !!info.description)
          console.log('Description value:', info.description)
        }
        break
      }
    }
  }, [artistSlug])

  const handleThumbnailClick = (artwork, index) => {
    setSelectedImageIndex(index)
  }

  const handleCloseDetail = () => {
    setSelectedImageIndex(null)
  }

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < artistArtworks.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  // Convert artwork to image format for ImageDetailView
  const getImageFromArtwork = (artwork) => ({
    src: artwork.imageUrl,
    alt: `${artwork.title} by ${artwork.artist} - ${artwork.medium}`,
    id: artwork.id,
    name: artwork.title,
    title: artwork.title,
    artist: artwork.artist,
    medium: artwork.medium,
    description: artwork.description
  })

  if (artistArtworks.length === 0) {
    return (
      <div className="page-container">
        <div className="page-content">
          <p>Artist not found</p>
          <button onClick={() => navigate('/artworks/detail')}>Return to Artists</button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="page-container gallery-detail-container">
        <div className="page-content">
          <button className="back-button" onClick={() => navigate('/artworks/detail')}>
            {t.artworks.backToArtists}
          </button>
          
          <div className="artist-header">
            <h1 className="gallery-detail-title">{artistName}</h1>
            {artistInfo && artistInfo.description && (
              <div className="artist-description" style={{ display: 'block' }}>
                <p>{artistInfo.description}</p>
              </div>
            )}
            {artistInfo && (
              <div className="artist-info">
                {artistInfo.pronouns && (
                  <span className="artist-pronouns">({artistInfo.pronouns})</span>
                )}
                {artistInfo.instagram && (
                  <a
                    href={artistInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="artist-instagram-link-large"
                  >
                    <span className="instagram-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </span>
                    {artistInfo.instagramHandle}
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="gallery-thumbnails-section">
            <h2 className="thumbnails-heading">
              {artistArtworks.length} {artistArtworks.length === 1 ? t.gallery.work : t.gallery.works}
            </h2>
            <div className="gallery-thumbnails-grid">
              {artistArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className="gallery-thumbnail-item"
                  onClick={() => handleThumbnailClick(artwork, index)}
                >
                  <div className="thumbnail-image-wrapper">
                    <img
                      src={artwork.thumbnailUrl}
                      alt={artwork.title}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3EImage%3C/text%3E%3C/svg%3E'
                      }}
                    />
                    <div className="thumbnail-overlay">
                      <svg 
                        className="eye-icon" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                  </div>
                  <div className="thumbnail-info">
                    <h4 className="thumbnail-title">{artwork.title}</h4>
                    <p className="thumbnail-medium">{artwork.medium}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && artistArtworks[selectedImageIndex] && (
        <ImageDetailView
          image={getImageFromArtwork(artistArtworks[selectedImageIndex])}
          onClose={handleCloseDetail}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
          hasNext={selectedImageIndex < artistArtworks.length - 1}
          hasPrevious={selectedImageIndex > 0}
          showDescription={true}
        />
      )}
    </>
  )
}

export default ArtistDetail

