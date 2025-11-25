import { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import './GalleryModal.css'

// Create a placeholder texture for missing images
function createPlaceholderTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#f0f0f0'
  ctx.fillRect(0, 0, 512, 512)
  ctx.fillStyle = '#999'
  ctx.font = '24px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('Image not found', 256, 256)
  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.wrapS = THREE.ClampToEdgeWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  texture.generateMipmaps = false
  texture.flipY = true
  return texture
}

// 3D Frame component for displaying images
function ImageFrame({ image, texture, isActive, onClick }) {
  const frameRef = useRef()
  const materialRef = useRef()
  
  // Ensure texture is properly configured
  useEffect(() => {
    if (texture) {
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
      texture.wrapS = THREE.ClampToEdgeWrapping
      texture.wrapT = THREE.ClampToEdgeWrapping
      texture.generateMipmaps = false
      texture.flipY = true // Fix upside down images
      texture.needsUpdate = true
    }
  }, [texture])
  
  // Update material when texture changes
  useEffect(() => {
    if (materialRef.current && texture) {
      materialRef.current.map = texture
      materialRef.current.needsUpdate = true
    }
  }, [texture])
  
  // Subtle animation when active
  useFrame((state) => {
    if (frameRef.current && isActive) {
      frameRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
      frameRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })
  
  if (!isActive) return null
  
  return (
    <group ref={frameRef} position={[0, 0, 0]}>
      {/* Frame outer border - darker for contrast */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[4.2, 5.2]} />
        <meshStandardMaterial 
          color="#6b5d4d" 
          metalness={0.1}
          roughness={0.7}
        />
      </mesh>
      
      {/* Frame inner mat - white for contrast */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[4, 5]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Image - clickable */}
      <mesh 
        position={[0, 0, 0]}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default'
        }}
      >
        <planeGeometry args={[3.5, 4.5]} />
        <meshStandardMaterial 
          ref={materialRef}
          map={texture}
          side={THREE.DoubleSide}
          toneMapped={true}
        />
      </mesh>
    </group>
  )
}

// Individual image loader component
function ImageLoader({ image, isActive, onClick }) {
  const [texture, setTexture] = useState(null)
  
  useEffect(() => {
    if (!isActive || !image || !image.src) return
    
    let currentTexture = null
    let img = null
    
    const loadImage = (useCrossOrigin = true) => {
      img = new Image()
      
      if (useCrossOrigin) {
        img.crossOrigin = 'anonymous'
      }
      
      img.onload = () => {
        try {
          // Create texture from the loaded image
          const loadedTexture = new THREE.Texture(img)
          
          // Configure texture for smooth rendering
          loadedTexture.minFilter = THREE.LinearFilter
          loadedTexture.magFilter = THREE.LinearFilter
          loadedTexture.wrapS = THREE.ClampToEdgeWrapping
          loadedTexture.wrapT = THREE.ClampToEdgeWrapping
          loadedTexture.generateMipmaps = false
          loadedTexture.flipY = true // Fix upside down images
          loadedTexture.needsUpdate = true
          
          currentTexture = loadedTexture
          setTexture(loadedTexture)
        } catch (err) {
          console.warn(`Failed to create texture from image: ${image.src}`, err)
          if (useCrossOrigin) {
            // Try without crossOrigin as fallback
            loadImage(false)
          } else {
            const placeholder = createPlaceholderTexture()
            placeholder.flipY = true
            currentTexture = placeholder
            setTexture(placeholder)
          }
        }
      }
      
      img.onerror = (err) => {
        console.warn(`Failed to load image: ${image.src}`, err)
        if (useCrossOrigin) {
          // Try without crossOrigin as fallback
          loadImage(false)
        } else {
          const placeholder = createPlaceholderTexture()
          placeholder.flipY = true
          currentTexture = placeholder
          setTexture(placeholder)
        }
      }
      
      img.src = image.src
    }
    
    // Start loading with crossOrigin
    loadImage(true)
    
    return () => {
      if (currentTexture && currentTexture.dispose) {
        currentTexture.dispose()
      }
      if (img) {
        img.onload = null
        img.onerror = null
        img.src = ''
      }
    }
  }, [image?.src, isActive])

  if (!texture) {
    return null
  }

  return <ImageFrame image={image} texture={texture} isActive={isActive} onClick={onClick} />
}

// Simple scene with just the frame
function FrameScene({ image, isActive, onImageClick }) {
  const { gl } = useThree()

  // Configure renderer
  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    gl.antialias = true
    gl.outputEncoding = THREE.sRGBEncoding
    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = 1.2
  }, [gl])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
      
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} />
      <directionalLight position={[-5, 5, -5]} intensity={1.0} />
      <directionalLight position={[0, 5, 0]} intensity={0.8} />
      <directionalLight position={[0, -5, 0]} intensity={0.5} />
      
      {/* Background plane - brighter with subtle gradient */}
      <mesh position={[0, 0, -3]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      
      {/* Image frame */}
      {image && <ImageLoader image={image} isActive={isActive} onClick={onImageClick} />}
    </>
  )
}

function ImageDetailView({ image, onClose, onNext, onPrevious, hasNext, hasPrevious, showDescription = false }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext()
      } else if (e.key === 'ArrowLeft' && hasPrevious) {
        onPrevious()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious])

  return (
    <div className="image-detail-overlay" onClick={onClose}>
      <div className={`image-detail-wrapper ${showDescription ? 'with-description' : 'centered-only'}`} onClick={(e) => e.stopPropagation()}>
        <button className="image-detail-close" onClick={onClose}>×</button>
        
        {hasPrevious && (
          <button className="image-detail-nav image-detail-prev" onClick={onPrevious}>
            ‹
          </button>
        )}
        {hasNext && (
          <button className="image-detail-nav image-detail-next" onClick={onNext}>
            ›
          </button>
        )}

        {showDescription ? (
          <div className="image-detail-content">
            <div className="image-detail-column image-detail-image-column">
              <img src={image.src} alt={image.alt || image.title} className="image-detail-img" />
            </div>
            <div className="image-detail-column image-detail-info-column">
              <div className="image-detail-info-box">
                {image.title && <h3 className="image-detail-title">{image.title}</h3>}
                {image.artist && <p className="image-detail-artist">by {image.artist}</p>}
                {image.medium && <p className="image-detail-medium">{image.medium}</p>}
                {image.description && (
                  <div className="image-detail-description">
                    <p>{image.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="image-detail-content-centered">
            <img src={image.src} alt={image.alt || image.title} className="image-detail-img" />
          </div>
        )}
      </div>
    </div>
  )
}

function GalleryModal({ gallery, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const canvasRef = useRef(null)

  const validImages = gallery?.images?.filter(img => img && img.src) || []
  const currentImage = validImages[currentIndex] || null

  // Debug logging
  useEffect(() => {
    if (gallery && gallery.images) {
      console.log('Gallery images:', gallery.images.length)
      if (currentImage) {
        console.log('Current image:', currentImage.src)
      }
    }
  }, [gallery, currentImage])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        handleNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        handlePrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, validImages.length, onClose])

  const handleNext = () => {
    if (isTransitioning || validImages.length === 0) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length)
      setIsTransitioning(false)
    }, 200)
  }

  const handlePrevious = () => {
    if (isTransitioning || validImages.length === 0) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length)
      setIsTransitioning(false)
    }, 200)
  }

  const handleImageClick = () => {
    if (currentImage) {
      setSelectedImage(currentImage)
    }
  }

  const handleNextImage = () => {
    if (currentIndex < validImages.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      setSelectedImage(validImages[nextIndex])
    }
  }

  const handlePreviousImage = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1
      setCurrentIndex(prevIndex)
      setSelectedImage(validImages[prevIndex])
    }
  }

  // Initialize with first image
  useEffect(() => {
    if (validImages.length > 0 && currentIndex === 0) {
      setCurrentIndex(0)
    }
  }, [validImages.length])

  if (!gallery || validImages.length === 0) {
    return null
  }

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="gallery-modal-header">
          <h2 className="gallery-modal-title">{gallery.name}</h2>
          <p className="gallery-modal-subtitle">
            {currentIndex + 1} of {validImages.length}
          </p>
          {currentImage && (
            <div className="gallery-modal-artwork-info">
              {currentImage.title && (
                <h3 className="gallery-modal-artwork-title">{currentImage.title}</h3>
              )}
              {currentImage.artist && (
                <p className="gallery-modal-artwork-artist">by {currentImage.artist}</p>
              )}
              {currentImage.medium && (
                <p className="gallery-modal-artwork-medium">{currentImage.medium}</p>
              )}
            </div>
          )}
        </div>

          <div className="gallery-modal-canvas-container" ref={canvasRef}>
            <Canvas
              gl={{
                antialias: true,
                alpha: false,
                powerPreference: "high-performance",
                stencil: false,
                depth: true,
              }}
              dpr={[1, 2]}
            >
              <Suspense fallback={null}>
                <FrameScene 
                  image={currentImage}
                  isActive={!isTransitioning}
                  onImageClick={handleImageClick}
                />
              </Suspense>
            </Canvas>
          </div>

        <div className="gallery-modal-controls">
          <div className="gallery-control-instructions">
            <p>Use arrow buttons or keyboard arrows to navigate</p>
          </div>
          <div className="gallery-control-buttons">
            <button 
              className="control-btn control-btn-left"
              onClick={handlePrevious}
              disabled={isTransitioning}
              aria-label="Previous image"
            >
              ←
            </button>
            <button 
              className="control-btn control-btn-right"
              onClick={handleNext}
              disabled={isTransitioning}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageDetailView
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
          hasNext={currentIndex < validImages.length - 1}
          hasPrevious={currentIndex > 0}
          showDescription={false}
        />
      )}
    </div>
  )
}

export default GalleryModal
