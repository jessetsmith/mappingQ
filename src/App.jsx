import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './App.css'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const History = lazy(() => import('./pages/History'))
const Artworks = lazy(() => import('./pages/Artworks'))
const ArtworksDetail = lazy(() => import('./pages/ArtworksDetail'))
const ArtistDetail = lazy(() => import('./pages/ArtistDetail'))
const GalleryDetail = lazy(() => import('./pages/GalleryDetail'))
const ScannedZines = lazy(() => import('./pages/ScannedZines'))
const Participate = lazy(() => import('./pages/Participate'))
const LearnMore = lazy(() => import('./pages/LearnMore'))
const Support = lazy(() => import('./pages/Support'))

// Loading component
function PageLoader() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '50vh' 
    }}>
      <div>Loading...</div>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Router basename="/mappingQ">
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/history" element={<History />} />
                <Route path="/artworks" element={<Artworks />} />
                  <Route path="/artworks/detail" element={<ArtworksDetail />} />
                  <Route path="/artworks/artist/:artistSlug" element={<ArtistDetail />} />
                  <Route path="/gallery/:galleryId" element={<GalleryDetail />} />
                  <Route path="/scanned-zines" element={<ScannedZines />} />
                  <Route path="/participate" element={<Participate />} />
                <Route path="/learn-more" element={<LearnMore />} />
                <Route path="/support" element={<Support />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App

