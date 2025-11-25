import { useNavigate } from 'react-router-dom'
import './GalleryGrid.css'

function GalleryGrid({ galleries }) {
  const navigate = useNavigate()

  const handleGalleryClick = (gallery) => {
    navigate(`/gallery/${gallery.id}`)
  }

  return (
    <>
      <div className="gallery-grid">
        {galleries.map((gallery) => (
          <div
            key={gallery.id}
            className="gallery-card"
            onClick={() => handleGalleryClick(gallery)}
          >
            <div className="gallery-card-image">
              {gallery.images.length > 0 ? (
                <img
                  src={gallery.images[0].src}
                  alt={gallery.name}
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
            <div className="gallery-card-info">
              <h3 className="gallery-card-title">{gallery.name}</h3>
              <p className="gallery-card-count">
                {gallery.images.length} {gallery.images.length === 1 ? 'work' : 'works'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default GalleryGrid

