import { useNavigate } from 'react-router-dom'
import { getArtworksGallery } from '../utils/artworksData'
import './ArtworksGallery.css'

function ArtworksGallery() {
  const navigate = useNavigate()
  const gallery = getArtworksGallery()

  const handleClick = () => {
    navigate('/artworks/detail')
  }

  return (
    <div className="artworks-gallery-card" onClick={handleClick}>
      <div className="artworks-gallery-card-image">
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
      <div className="artworks-gallery-card-info">
        <h3 className="artworks-gallery-card-title">{gallery.name}</h3>
        <p className="artworks-gallery-card-count">
          {gallery.images.length} {gallery.images.length === 1 ? 'work' : 'works'}
        </p>
        <p className="artworks-gallery-card-description">
          Visual art pieces created by participants exploring themes of identity, community, and resilience.
        </p>
      </div>
    </div>
  )
}

export default ArtworksGallery
