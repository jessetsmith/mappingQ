import { useEffect, useState, useRef } from 'react'
import GalleryGrid from '../components/GalleryGrid'
import { initializeGalleries } from '../utils/galleryData'
import { getAssetPath } from '../utils/assetPath'
import './Home.css'

function Home() {
  const [galleries, setGalleries] = useState([])
  const heroImageRef = useRef(null)
  const heroSectionRef = useRef(null)

  useEffect(() => {
    const loadedGalleries = initializeGalleries()
    setGalleries(loadedGalleries)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!heroImageRef.current || !heroSectionRef.current) return

      const heroSection = heroSectionRef.current
      const scrollY = window.scrollY || window.pageYOffset
      
      // Get the section's position from the top of the document
      const sectionOffsetTop = heroSection.offsetTop
      const sectionHeight = heroSection.offsetHeight
      
      // Calculate how much we've scrolled past the section start
      const scrolledPast = Math.max(0, scrollY - sectionOffsetTop)
      
      // Parallax effect: image moves at 50% of scroll speed
      // Stop when we've scrolled past the entire section (at bottom of text)
      const parallaxSpeed = 0.5
      const maxScroll = sectionHeight
      const parallaxOffset = Math.min(scrolledPast * parallaxSpeed, maxScroll * parallaxSpeed)
      
      // Apply transform - image moves down as we scroll (positive Y)
      heroImageRef.current.style.transform = `translateY(${parallaxOffset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="home-page">
      <section className="hero-section" ref={heroSectionRef}>
        <div className="hero-content">
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img 
                ref={heroImageRef}
                src={getAssetPath('MappingQ-Assets/VS_public-safety.jpg')} 
                alt="The Public is not Safe by Vanessa S., 2020, mixed media on paper" 
                className="hero-image"
              />
            </div>
          </div>
          <div className="hero-text-container">
            <h1 className="hero-title">
              <span className="title-mapping">MAPPING</span>
              <span className="title-q">Q</span>
            </h1>
            <div className="hero-text">
              <p>
                <strong>Mapping Q: 2020</strong> is an online exhibition featuring the work of eleven LGBTQ+ youth who reside in Arizona. These works reflect the issues and experiences impacting LGBTQ+ youth, as well as the incredible resiliency and creative imagination each artist holds. Their artwork responds to topics such as queer futurism, intersectionality, radical visibility, and more. Through this virtual exhibition we aim to build community and celebrate the stories and experiences of LGBTQ+ youth.
              </p>
              <p>
                Mapping Q is an annual art program, serving LGBTQ+ youth, created in collaboration with the University of Arizona Museum of Art and the Southern Arizona AIDS Foundation (SAAF). Since 2014, the program has worked to reduce stigma regarding queer and trans identities, queer and trans bodies, and youth mental health. This past year, COVID-19 has dramatically impacted many youth, limiting their ability to escape abusive or unsupportive home life, seek support from friends and peer groups, or access other social networks and supports. Mapping Q responded to this crisis by expanding our partnership to include One-n-Ten, Phoenix's LGBTQ youth center, allowing us to serve youth residing anywhere in Arizona. In a series of nine weekly virtual workshops, participants explored topics of art-making, self-care and harm reduction.
              </p>
              <p>
                Mapping Q is made possible by support from the LGBT&S Alliance Fund held at the Community Foundation of Southern Arizona. This program is also made possible through support from the UAMA's Stanley Glickman Outreach Endowment.
              </p>
              <p className="hero-image-credit">
                <em>Image credit: Vanessa S., <strong>The Public is not Safe</strong>, 2020, mixed media on paper</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="galleries-section">
        <div className="section-header">
          <h2 className="section-title">Explore the Archive</h2>
          <p className="section-description">
            Click on any gallery to enter a 3D virtual space and explore the artworks
          </p>
        </div>
        <GalleryGrid galleries={galleries} />
      </section>
    </div>
  )
}

export default Home

