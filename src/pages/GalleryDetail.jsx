import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import GalleryModal from '../components/GalleryModal'
import { initializeGalleries } from '../utils/galleryData'
import './GalleryDetail.css'

function GalleryDetail() {
  const { galleryId } = useParams()
  const navigate = useNavigate()
  const [gallery, setGallery] = useState(null)
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const galleries = initializeGalleries()
    const foundGallery = galleries.find(g => g.id === galleryId)
    setGallery(foundGallery)
  }, [galleryId])

  const handleThumbnailClick = (image, index) => {
    if (!gallery) return
    
    // Create a gallery starting from the clicked image
    const galleryForModal = {
      ...gallery,
      images: [
        ...gallery.images.slice(index),
        ...gallery.images.slice(0, index)
      ]
    }
    
    setSelectedGallery(galleryForModal)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedGallery(null)
  }

  if (!gallery) {
    return (
      <div className="page-container">
        <div className="page-content">
          <p>Gallery not found</p>
          <button onClick={() => navigate('/')}>Return to Home</button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="page-container gallery-detail-container">
        <div className="page-content gallery-detail-content-wrapper">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Archive
          </button>
          
          <h1 className="gallery-detail-title">{gallery.name}</h1>
          
          {gallery.description && (
            <div className="gallery-description">
              <p>{gallery.description}</p>
            </div>
          )}

          {gallery.instagramLinks && gallery.instagramLinks.length > 0 && (
            <div className="gallery-instagram-links">
              <h3>Follow the Artists</h3>
              <div className="instagram-links-list">
                {gallery.instagramLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <span className="instagram-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="gallery-thumbnails-section">
            <h2 className="thumbnails-heading">
              {gallery.images.length} {gallery.images.length === 1 ? 'Work' : 'Works'}
            </h2>
            <div className="gallery-thumbnails-grid">
              {gallery.images.map((image, index) => (
                <div
                  key={image.id || index}
                  className="gallery-thumbnail-item"
                  onClick={() => handleThumbnailClick(image, index)}
                >
                  <div className="thumbnail-image-wrapper">
                    <img
                      src={image.src}
                      alt={image.alt || `Image ${index + 1}`}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && selectedGallery && (
        <GalleryModal
          gallery={selectedGallery}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default GalleryDetail

