import './Page.css'

function Support() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Support</h1>
        
        <section className="page-section">
          <h2 className="section-heading">Donate</h2>
          <p className="section-text">
            Your support helps us continue providing art programs, workshops, and resources 
            for LGBTQ+ youth in Arizona. Every contribution makes a difference.
          </p>
          <div className="donate-container">
            <a 
              href="https://artmuseum.arizona.edu/support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="donate-button"
            >
              <span>Donate to UAMA</span>
            </a>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">Volunteer</h2>
          <p className="section-text">
            We're always looking for dedicated volunteers to help with workshops, events, 
            and program administration. If you're interested in getting involved, please 
            reach out to our team.
          </p>
          <div className="contact-info">
            <p><strong>University of Arizona Museum of Art</strong></p>
            <p>1031 N Olive Road, Tucson, AZ 85721-0002</p>
            <p>Phone: 520-621-7567</p>
            <p>Email: <a href="mailto:artmuseum@email.arizona.edu">artmuseum@email.arizona.edu</a></p>
          </div>
        </section>

        <section className="page-section">
          <h2 className="section-heading">Sustaining Partners</h2>
          <p className="section-text">
            Mapping Q is made possible through the generous support of our partners and funders.
          </p>
          <div className="partners-grid">
            <div className="partner-logo">
              <p>LGBT&S Alliance Fund</p>
              <p className="partner-subtitle">Community Foundation of Southern Arizona</p>
            </div>
            <div className="partner-logo">
              <p>UAMA Stanley Glickman</p>
              <p className="partner-subtitle">Outreach Endowment</p>
            </div>
            <div className="partner-logo">
              <p>Southern Arizona AIDS Foundation</p>
              <p className="partner-subtitle">(SAAF)</p>
            </div>
            <div className="partner-logo">
              <p>One-n-Ten</p>
              <p className="partner-subtitle">Phoenix LGBTQ Youth Center</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Support

