# Mapping Q - Online Archive & Gallery

A modern React-based online archive and gallery featuring the work of LGBTQ+ youth in Arizona. This site includes a 3D virtual gallery experience built with Three.js.

## Features

- **Modern React Architecture**: Built with Vite, React Router, and modern React patterns
- **3D Virtual Gallery**: Interactive Three.js gallery with mouse and keyboard navigation
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Color Palette**: Rainbow-themed design matching the original Mapping Q website
- **Navigation Structure**: Complete site navigation with About, History, Participate, Learn More, and Support sections

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Assets

The images need to be accessible from the public folder. You have two options:

**Option A: Copy assets to public folder (Recommended)**
```bash
# Copy the MappingQ-Assets folder to the public directory
cp -r MappingQ-Assets public/
```

**Option B: Create a symlink (Development only)**
```bash
# Create a symlink in the public folder
ln -s ../MappingQ-Assets public/MappingQ-Assets
```

### 3. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Project Structure

```
MappingQ/
├── public/
│   └── MappingQ-Assets/     # Image assets (copy from root)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx   # Main navigation component
│   │   ├── GalleryGrid.jsx  # Gallery grid display
│   │   └── GalleryModal.jsx # 3D Three.js gallery modal
│   ├── pages/
│   │   ├── Home.jsx         # Home page with gallery grid
│   │   ├── About.jsx        # About page
│   │   ├── History.jsx      # History page
│   │   ├── Participate.jsx  # Participate page
│   │   ├── LearnMore.jsx    # Learn More page
│   │   └── Support.jsx      # Support page
│   ├── utils/
│   │   └── galleryData.js   # Gallery data and image path utilities
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
└── vite.config.js
```

## Gallery Features

### 3D Gallery Modal
- **Mouse Navigation**: Click and drag to look around
- **Keyboard Controls**: Arrow keys for navigation, Escape to exit
- **Zoom**: Scroll to zoom in/out
- **Arrow Buttons**: On-screen controls for movement
- **Image Display**: Artworks displayed on gallery walls in a 3D space

### Gallery Collections
Each folder in `MappingQ-Assets` becomes a separate gallery collection:
- Mapping Q AVATAR
- Mapping Q Black and White Zine
- Mapping Q Ghuleh
- Mapping Q LGBTQIA
- Mapping Q Red Zine
- Mapping Q Tye dye
- Zine Mapping Q Asthma
- Zine Mapping Q Green
- Zine Mapping Q Nova Belle

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **Three.js**: 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for React Three Fiber

## Color Palette

The site uses a rainbow color palette inspired by the original Mapping Q website:
- Red: `#E63946`
- Orange: `#F77F00`
- Yellow: `#FCBF49`
- Green: `#06A77D`
- Light Blue: `#118AB2`
- Dark Blue: `#073B4C`
- Purple: `#7209B7`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Images are loaded from the `public/MappingQ-Assets` folder
- The gallery modal requires WebGL support for Three.js
- For production, ensure all image paths are correctly set up

## License

This project is created for the Mapping Q program at the University of Arizona Museum of Art.

