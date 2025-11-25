export const translations = {
  en: {
    nav: {
      about: 'About Mapping Q',
      history: 'History',
      participate: 'Participate',
      learnMore: 'Learn More',
      support: 'Support',
    },
    home: {
      heroTitle: 'Mapping Q: 2020',
      heroText1: 'is an online exhibition featuring the work of eleven LGBTQ+ youth who reside in Arizona. These works reflect the issues and experiences impacting LGBTQ+ youth, as well as the incredible resiliency and creative imagination each artist holds. Their artwork responds to topics such as queer futurism, intersectionality, radical visibility, and more. Through this virtual exhibition we aim to build community and celebrate the stories and experiences of LGBTQ+ youth.',
      heroText2: 'Mapping Q is an annual art program, serving LGBTQ+ youth, created in collaboration with the University of Arizona Museum of Art and the Southern Arizona AIDS Foundation (SAAF). Since 2014, the program has worked to reduce stigma regarding queer and trans identities, queer and trans bodies, and youth mental health. This past year, COVID-19 has dramatically impacted many youth, limiting their ability to escape abusive or unsupportive home life, seek support from friends and peer groups, or access other social networks and supports. Mapping Q responded to this crisis by expanding our partnership to include One-n-Ten, Phoenix\'s LGBTQ youth center, allowing us to serve youth residing anywhere in Arizona. In a series of nine weekly virtual workshops, participants explored topics of art-making, self-care and harm reduction.',
      heroText3: 'Mapping Q is made possible by support from the LGBT&S Alliance Fund held at the Community Foundation of Southern Arizona. This program is also made possible through support from the UAMA\'s Stanley Glickman Outreach Endowment.',
      heroImageCredit: 'Image credit: Vanessa S.,',
      heroImageCreditTitle: 'The Public is not Safe',
      heroImageCreditYear: '2020, mixed media on paper',
      exploreArchive: 'Explore the Archive',
      archiveDescription: 'Click on any gallery to enter a 3D virtual space and explore the artworks',
      artworks2020: 'MappingQ 2020 Artworks',
      artworks2020Description: 'Visual art pieces created by participants exploring themes of identity, community, and resilience.',
    },
    gallery: {
      backToArchive: '← Back to Archive',
      followArtists: 'Follow the Artists',
      works: 'Works',
      work: 'Work',
      of: 'of',
      useArrows: 'Use arrow buttons or keyboard arrows to navigate',
      previous: 'Previous',
      next: 'Next',
      clickToEnlarge: 'Click to enlarge',
    },
    artworks: {
      backToArtists: '← Back to Artists',
      backToArtworks: '← Back to Artworks',
      artworks: 'Artworks',
      by: 'by',
    },
    common: {
      loading: 'Loading...',
      notFound: 'Not found',
      returnHome: 'Return to Home',
    },
    scannedZines: {
      title: 'Scanned Zines',
      description: 'Self-published zines featuring personal narratives, poetry, and artistic expressions.',
    },
  },
  es: {
    nav: {
      about: 'Acerca de Mapping Q',
      history: 'Historia',
      participate: 'Participar',
      learnMore: 'Más Información',
      support: 'Apoyo',
    },
    home: {
      heroTitle: 'Mapping Q: 2020',
      heroText1: 'es una exposición en línea que presenta el trabajo de once jóvenes LGBTQ+ que residen en Arizona. Estas obras reflejan los problemas y experiencias que impactan a los jóvenes LGBTQ+, así como la increíble resiliencia e imaginación creativa que cada artista posee. Su arte responde a temas como el futurismo queer, la interseccionalidad, la visibilidad radical y más. A través de esta exposición virtual, nuestro objetivo es construir comunidad y celebrar las historias y experiencias de los jóvenes LGBTQ+.',
      heroText2: 'Mapping Q es un programa de arte anual que sirve a jóvenes LGBTQ+, creado en colaboración con el Museo de Arte de la Universidad de Arizona y la Fundación de SIDA del Sur de Arizona (SAAF). Desde 2014, el programa ha trabajado para reducir el estigma relacionado con las identidades queer y trans, los cuerpos queer y trans, y la salud mental de los jóvenes. Este año pasado, COVID-19 ha impactado dramáticamente a muchos jóvenes, limitando su capacidad para escapar de una vida hogareña abusiva o que no les brinda apoyo, buscar apoyo de amigos y grupos de pares, o acceder a otras redes sociales y apoyos. Mapping Q respondió a esta crisis expandiendo nuestra asociación para incluir One-n-Ten, el centro de jóvenes LGBTQ+ de Phoenix, permitiéndonos servir a jóvenes que residen en cualquier parte de Arizona. En una serie de nueve talleres virtuales semanales, los participantes exploraron temas de creación artística, autocuidado y reducción de daños.',
      heroText3: 'Mapping Q es posible gracias al apoyo del Fondo de Alianza LGBT&S mantenido en la Fundación Comunitaria del Sur de Arizona. Este programa también es posible gracias al apoyo del Fondo de Extensión Stanley Glickman de la UAMA.',
      heroImageCredit: 'Crédito de imagen: Vanessa S.,',
      heroImageCreditTitle: 'El Público no está Seguro',
      heroImageCreditYear: '2020, medios mixtos en papel',
      exploreArchive: 'Explorar el Archivo',
      archiveDescription: 'Haz clic en cualquier galería para entrar a un espacio virtual 3D y explorar las obras de arte',
      artworks2020: 'Obras de Arte MappingQ 2020',
      artworks2020Description: 'Piezas de arte visual creadas por participantes que exploran temas de identidad, comunidad y resiliencia.',
    },
    gallery: {
      backToArchive: '← Volver al Archivo',
      followArtists: 'Seguir a los Artistas',
      works: 'Obras',
      work: 'Obra',
      of: 'de',
      useArrows: 'Usa los botones de flecha o las flechas del teclado para navegar',
      previous: 'Anterior',
      next: 'Siguiente',
      clickToEnlarge: 'Haz clic para ampliar',
    },
    artworks: {
      backToArtists: '← Volver a los Artistas',
      backToArtworks: '← Volver a las Obras',
      artworks: 'Obras de Arte',
      by: 'por',
    },
    common: {
      loading: 'Cargando...',
      notFound: 'No encontrado',
      returnHome: 'Volver al Inicio',
    },
    scannedZines: {
      title: 'Zines Escaneados',
      description: 'Zines autoeditados que presentan narrativas personales, poesía y expresiones artísticas.',
    },
  },
}

// Helper function to get translation by key path
export function getTranslation(language, key) {
  const keys = key.split('.')
  let value = translations[language]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}

