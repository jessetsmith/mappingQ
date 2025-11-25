import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import History from './pages/History'
import Artworks from './pages/Artworks'
import ArtworksDetail from './pages/ArtworksDetail'
import ArtistDetail from './pages/ArtistDetail'
import GalleryDetail from './pages/GalleryDetail'
import Participate from './pages/Participate'
import LearnMore from './pages/LearnMore'
import Support from './pages/Support'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/artworks" element={<Artworks />} />
            <Route path="/artworks/detail" element={<ArtworksDetail />} />
            <Route path="/artworks/artist/:artistSlug" element={<ArtistDetail />} />
            <Route path="/gallery/:galleryId" element={<GalleryDetail />} />
            <Route path="/participate" element={<Participate />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

