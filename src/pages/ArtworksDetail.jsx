import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { artworksData } from '../utils/artworksData'
import './GalleryDetail.css'

function ArtworksDetail() {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const t = translations[language]

  // Get unique artists with their Instagram links and artwork counts
  const artistInstagramMap = {
    'Artemis W.': { name: 'Artemis W.', url: 'https://instagram.com/artie_doodle' },
    'Austen D.': { name: 'Austen D.', url: 'https://instagram.com/punx_not_dead_but_i_am_inside' },
    'Vanessa S.': { name: 'Vanessa S.', url: 'https://instagram.com/vanessasoncco' }
  }

  // Group artworks by artist
  const artistsMap = new Map()
  artworksData.forEach(artwork => {
    if (!artistsMap.has(artwork.artist)) {
      artistsMap.set(artwork.artist, {
        name: artwork.artist,
        artworks: [],
        instagram: artistInstagramMap[artwork.artist] || null
      })
    }
    artistsMap.get(artwork.artist).artworks.push(artwork)
  })

  const artists = Array.from(artistsMap.values())

  const handleArtistClick = (artistName) => {
    // Navigate to artist detail page
    const artistSlug = artistName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    navigate(`/artworks/artist/${artistSlug}`)
  }

  return (
    <div className="page-container gallery-detail-container">
      <div className="page-content">
        <button className="back-button" onClick={() => navigate('/artworks')}>
          {t.artworks.backToArtworks}
        </button>
        
        <h1 className="gallery-detail-title">Mapping Q: 2020 {t.artworks.artworks}</h1>
        
        <div className="gallery-description">
          <p>
            {language === 'en' 
              ? 'Visual art pieces created by participants exploring themes of identity, community, and resilience. These works reflect the issues and experiences impacting LGBTQ+ youth, as well as the incredible resiliency and creative imagination each artist holds. Their artwork responds to topics such as queer futurism, intersectionality, radical visibility, and more.'
              : 'Piezas de arte visual creadas por participantes que exploran temas de identidad, comunidad y resiliencia. Estas obras reflejan los problemas y experiencias que impactan a los jóvenes LGBTQ+, así como la increíble resiliencia e imaginación creativa que cada artista posee. Su arte responde a temas como el futurismo queer, la interseccionalidad, la visibilidad radical y más.'
            }
          </p>
        </div>

        <div className="artists-section">
          <h2 className="thumbnails-heading">{language === 'en' ? 'Artists' : 'Artistas'}</h2>
          <div className="artists-grid">
            {artists.map((artist) => (
              <div
                key={artist.name}
                className="artist-card"
                onClick={() => handleArtistClick(artist.name)}
              >
                <div className="artist-card-image">
                  {artist.artworks.length > 0 && artist.artworks[0].thumbnailUrl ? (
                    <img
                      src={artist.artworks[0].thumbnailUrl}
                      alt={artist.name}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3EImage%3C/text%3E%3C/svg%3E'
                      }}
                    />
                  ) : (
                    <div className="artist-placeholder">
                      <span>No preview</span>
                    </div>
                  )}
                </div>
                <div className="artist-card-info">
                  <h3 className="artist-card-name">{artist.name}</h3>
                  <p className="artist-card-count">
                    {artist.artworks.length} {artist.artworks.length === 1 ? t.gallery.work : t.gallery.works}
                  </p>
                  {artist.instagram && (
                    <a
                      href={artist.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="artist-instagram-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="instagram-icon-small">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </span>
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtworksDetail
