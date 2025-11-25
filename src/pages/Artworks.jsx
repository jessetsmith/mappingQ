import ArtworksGallery from '../components/ArtworksGallery'
import './Page.css'

function Artworks() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Artworks</h1>
        
        <section className="page-section">
          <p className="section-text">
            Visual art pieces created by participants exploring themes of identity, community, and resilience. 
            Click on the gallery below to explore all artworks.
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

