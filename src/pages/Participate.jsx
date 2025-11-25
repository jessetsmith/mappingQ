import './Page.css'

function Participate() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Participate</h1>
        
        <section className="page-section">
          <h2 className="section-heading">Pop Up Gallery Activities</h2>
          <p className="section-text">
            Explore lesson plans and activities developed by Carissa's students. These resources 
            are designed to help educators and community members engage with the themes and 
            artistic practices featured in Mapping Q.
          </p>
          <div className="activity-cards">
            <div className="activity-card">
              <h3>Art-Making Workshops</h3>
              <p>Hands-on activities for creating art that explores identity and community.</p>
            </div>
            <div className="activity-card">
              <h3>Self-Care Practices</h3>
              <p>Resources for mental health and wellness through creative expression.</p>
            </div>
            <div className="activity-card">
              <h3>Harm Reduction</h3>
              <p>Educational materials on safety and support for LGBTQ+ youth.</p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">Submit Your Work</h2>
          <p className="section-text">
            Are you an LGBTQ+ youth artist in Arizona? We'd love to see your work! Submit your 
            artwork or responses to our prompts through the form below.
          </p>
          <div className="submit-form-container">
            <a 
              href="https://forms.gle/example" 
              target="_blank" 
              rel="noopener noreferrer"
              className="submit-button"
            >
              <span>Submit Your Artwork</span>
            </a>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">Stay Connected</h2>
          <p className="section-text">
            Follow us on social media for updates, upcoming workshops, and new additions to the archive.
          </p>
          <div className="social-links">
            <a 
              href="https://www.facebook.com/mappingq.uama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/MAPPINGQ.UAMA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.youtube.com/channel/UC2UI8TVHdMR8Ob_JhX3I98w" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>YouTube</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Participate

