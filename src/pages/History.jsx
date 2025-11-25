import { Link } from 'react-router-dom'
import './Page.css'

function History() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">History</h1>
        
        <section className="page-section">
          <h2 className="section-heading">Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2014</div>
              <div className="timeline-content">
                <h3>Program Launch</h3>
                <p>Mapping Q program begins as a collaboration between the University of Arizona Museum of Art and the Southern Arizona AIDS Foundation.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Virtual Expansion</h3>
                <p>Program expands to serve youth across Arizona through virtual workshops, partnering with One-n-Ten in Phoenix.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Present</div>
              <div className="timeline-content">
                <h3>Online Archive</h3>
                <p>Launch of the digital archive to preserve and share the incredible work of LGBTQ+ youth artists.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">Participant Projects</h2>
          <div className="projects-grid">
            <Link to="/artworks" className="project-category project-category-link">
              <h3>Artworks</h3>
              <p>Visual art pieces created by participants exploring themes of identity, community, and resilience.</p>
            </Link>
            <div className="project-category">
              <h3>Photovoice</h3>
              <p>Photographic documentation of experiences and perspectives through the lens of LGBTQ+ youth.</p>
            </div>
            <div className="project-category">
              <h3>Scanned Zines</h3>
              <p>Self-published zines featuring personal narratives, poetry, and artistic expressions.</p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">Exhibitions</h2>
          <p className="section-text">
            Over the years, Mapping Q has hosted numerous exhibitions showcasing the work of participants. 
            These exhibitions have been displayed at the University of Arizona Museum of Art and various 
            community spaces throughout Arizona.
          </p>
        </section>

        <section className="page-section">
          <h2 className="section-heading">News & Media</h2>
          <p className="section-text">
            Mapping Q has been featured in various news articles and media coverage highlighting the 
            importance of supporting LGBTQ+ youth through art and community building.
          </p>
        </section>
      </div>
    </div>
  )
}

export default History

