import './Page.css'

function LearnMore() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Learn More</h1>
        
        <section className="page-section">
          <h2 className="section-heading">Community Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Stay Gold</h3>
              <p>Support services and resources for LGBTQ+ youth.</p>
              <a href="#" className="resource-link">Learn More</a>
            </div>
            <div className="resource-card">
              <h3>Mental Health Resources</h3>
              <p>Counseling and mental health support specifically for LGBTQ+ individuals.</p>
              <a href="#" className="resource-link">Learn More</a>
            </div>
            <div className="resource-card">
              <h3>AZ Queer Archive</h3>
              <p>Historical documentation and preservation of Arizona's LGBTQ+ community.</p>
              <a href="#" className="resource-link">Learn More</a>
            </div>
            <div className="resource-card">
              <h3>Ground Works</h3>
              <p>Community organizing and advocacy for LGBTQ+ rights and visibility.</p>
              <a href="#" className="resource-link">Learn More</a>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">Academic Research</h2>
          <p className="section-text">
            Mapping Q has been the subject of academic research exploring the impact of art 
            programs on LGBTQ+ youth mental health and community building.
          </p>
          <div className="research-list">
            <div className="research-item">
              <h3>Art as Resistance: LGBTQ+ Youth Expression in Arizona</h3>
              <p className="research-authors">Smith, J., & Johnson, A. (2023)</p>
              <p className="research-abstract">
                This study examines how Mapping Q participants use art to express their 
                identities and navigate challenges faced by LGBTQ+ youth in Arizona.
              </p>
            </div>
            <div className="research-item">
              <h3>Virtual Community Building During COVID-19</h3>
              <p className="research-authors">Williams, M., et al. (2022)</p>
              <p className="research-abstract">
                An analysis of how Mapping Q adapted to virtual programming and maintained 
                community connections during the pandemic.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LearnMore

