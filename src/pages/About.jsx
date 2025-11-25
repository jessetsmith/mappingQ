import './Page.css'

function About() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">About Mapping Q</h1>
        
        <section className="page-section">
          <h2 className="section-heading">Overview</h2>
          <p className="section-text">
            Mapping Q is an annual art program, serving LGBTQ+ youth, created in collaboration 
            with the University of Arizona Museum of Art and the Southern Arizona AIDS Foundation (SAAF). 
            Since 2014, the program has worked to reduce stigma regarding queer and trans identities, 
            queer and trans bodies, and youth mental health.
          </p>
        </section>

        <section className="page-section">
          <h2 className="section-heading">Our Mission</h2>
          <p className="section-text">
            Through this virtual exhibition we aim to build community and celebrate the stories 
            and experiences of LGBTQ+ youth. The works featured in this archive reflect the issues 
            and experiences impacting LGBTQ+ youth, as well as the incredible resiliency and 
            creative imagination each artist holds.
          </p>
        </section>

        <section className="page-section">
          <h2 className="section-heading">Program Impact</h2>
          <p className="section-text">
            This past year, COVID-19 has dramatically impacted many youth, limiting their ability 
            to escape abusive or unsupportive home life, seek support from friends and peer groups, 
            or access other social networks and supports. Mapping Q responded to this crisis by 
            expanding our partnership to include One-n-Ten, Phoenix's LGBTQ youth center, allowing 
            us to serve youth residing anywhere in Arizona. In a series of nine weekly virtual 
            workshops, participants explored topics of art-making, self-care and harm reduction.
          </p>
        </section>

        <section className="page-section">
          <h2 className="section-heading">Artistic Themes</h2>
          <p className="section-text">
            The artwork in this archive responds to topics such as queer futurism, intersectionality, 
            radical visibility, and more. Each piece tells a unique story and contributes to the 
            rich tapestry of LGBTQ+ youth experiences in Arizona.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About

