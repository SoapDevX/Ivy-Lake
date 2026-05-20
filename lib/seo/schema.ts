export function hotelSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'The Ivy Lake',
    url: 'https://theivylake.com',
    description: 'A peaceful boutique hotel beside Nuwara Wewa lake in Anuradhapura, Sri Lanka.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Anuradhapura',
      addressLocality: 'Anuradhapura',
      addressRegion: 'North Central Province',
      addressCountry: 'LK',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 8.3114, longitude: 80.4037 },
    telephone: '+94XXXXXXXXX',
    priceRange: '$$',
    starRating: { '@type': 'Rating', ratingValue: '4' },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Garden Café', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Lake View', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
    ],
  }
}
