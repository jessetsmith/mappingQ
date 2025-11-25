// Gallery data structure - each folder becomes a gallery collection
export const galleryCollections = [
  {
    id: 'avatar',
    name: 'Mapping Q AVATAR',
    folder: 'Mapping Q AVATAR',
    description: 'A collection of works exploring identity, representation, and digital presence through the lens of LGBTQ+ youth artists.',
    instagramLinks: [],
    images: []
  },
  {
    id: 'black-white',
    name: 'Mapping Q Black and White Zine',
    folder: 'Mapping Q Black and White Zine ',
    description: 'A monochrome zine collection featuring powerful black and white imagery that explores themes of contrast, identity, and expression.',
    instagramLinks: [],
    images: []
  },
  {
    id: 'ghuleh',
    name: 'Mapping Q Ghuleh',
    folder: 'Mapping Q Ghuleh',
    description: 'A creative exploration of themes and narratives through the Ghuleh zine collection.',
    instagramLinks: [],
    images: []
  },
  {
    id: 'lgbtqia',
    name: 'Mapping Q LGBTQIA',
    folder: 'Mapping Q LGBTQIA',
    description: 'A vibrant collection celebrating LGBTQIA+ identities, experiences, and community through diverse artistic expressions.',
    instagramLinks: [],
    images: []
  },
  {
    id: 'red-zine',
    name: 'Mapping Q Red Zine',
    folder: 'Mapping Q Red Zine',
    description: 'A bold collection featuring works in red, exploring themes of passion, strength, and visibility within the LGBTQ+ community.',
    instagramLinks: [],
    images: []
  },
  {
    id: 'tye-dye',
    name: 'Mapping Q Tye dye',
    folder: 'Mapping Q Tye dye ',
    description: 'A colorful collection celebrating diversity and vibrancy through tie-dye inspired works.',
    instagramLinks: [],
    images: []
  },
  {
    id: 'asthma',
    name: 'Zine Mapping Q Asthma',
    folder: 'Zine Mapping Q Asthma ',
    description: 'A collection exploring themes of breath, struggle, and resilience through the Asthma zine.',
    instagramLinks: [],
    images: []
  },
  {
    id: 'green',
    name: 'Zine Mapping Q Green',
    folder: 'Zine Mapping Q Green ',
    description: 'A collection featuring works in green, exploring themes of growth, nature, and renewal.',
    instagramLinks: [],
    images: []
  },
  {
    id: 'nova-belle',
    name: 'Zine Mapping Q Nova Belle',
    folder: 'Zine Mapping Q Nova Belle ',
    description: 'A collection celebrating beauty, transformation, and new beginnings through the Nova Belle zine.',
    instagramLinks: [],
    images: []
  }
]

// Define which images exist in each folder
const folderImages = {
  'Mapping Q AVATAR': [
    'woman20251021.jpg',
    'woman20251021 copy.jpg',
    'woman20251021 copy 2.jpg',
    'woman20251021 copy 3.jpg',
    'woman20251021 copy 4.jpg'
  ],
  'Mapping Q Black and White Zine ': [
    'woman20251021.jpg',
    'woman20251021 copy.jpg',
    'woman20251021 copy 2.jpg',
    'woman20251021 copy 3.jpg',
    'woman20251021 copy 4.jpg'
  ],
  'Mapping Q Ghuleh': [
    'woman20251021.jpg',
    'woman20251021 copy.jpg',
    'woman20251021 copy 2.jpg',
    'woman20251021 copy 3.jpg',
    'woman20251021_0001.jpg'
  ],
  'Mapping Q LGBTQIA': [
    'woman20251021.jpg',
    'woman20251021 copy.jpg',
    'woman20251021 copy 2.jpg',
    'woman20251021 copy 3.jpg',
    'woman20251021 copy 4.jpg'
  ],
  'Mapping Q Red Zine': [
    'woman20251021.jpg',
    'woman20251021 copy.jpg',
    'woman20251021 copy 2.jpg',
    'woman20251021 copy 3.jpg',
    'woman20251021 copy 4.jpg'
  ],
  'Mapping Q Tye dye ': [
    'woman20251021.jpg',
    'woman20251021 copy.jpg',
    'woman20251021 copy 2.jpg',
    'woman20251021 copy 3.jpg',
    'woman20251021 copy 4.jpg'
  ],
  'Zine Mapping Q Asthma ': [
    'woman20251021.jpg',
    'woman20251021 copy.jpg',
    'woman20251021 copy 2.jpg',
    'woman20251021 copy 3.jpg',
    'woman20251021 copy 4.jpg',
    'woman20251021_0001.jpg'
  ],
  'Zine Mapping Q Green ': [
    'woman20251021.jpg',
    'woman20251021 copy.jpg',
    'woman20251021 copy 2.jpg',
    'woman20251021 copy 3.jpg',
    'woman20251021 copy 4.jpg'
  ],
  'Zine Mapping Q Nova Belle ': [
    'woman20251021.jpg',
    'woman20251021 copy.jpg',
    'woman20251021 copy 2.jpg',
    'woman20251021 copy 3.jpg',
    'woman20251021 copy 4.jpg'
  ]
}

import { getAssetPath } from './assetPath'

// Function to generate image paths based on folder structure
export function getImagePaths(folderName) {
  // Get the specific images for this folder
  const imageNames = folderImages[folderName] || []
  
  return imageNames.map((name, index) => ({
    src: getAssetPath(`MappingQ-Assets/${encodeURIComponent(folderName)}/${encodeURIComponent(name)}`),
    alt: `${folderName} - ${name.replace('.jpg', '').replace(/_/g, ' ')}`,
    id: `${folderName}-${index}-${name}`,
    name: name
  }))
}

// Initialize gallery collections with image paths
export function initializeGalleries() {
  return galleryCollections.map(collection => ({
    ...collection,
    images: getImagePaths(collection.folder)
  }))
}

