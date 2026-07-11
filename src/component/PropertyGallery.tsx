import { useState } from 'react'

interface Property {
  id: number
  image: string
  title: string
  location: string
  price: string
  type: string
  beds: number
  baths: number
  area: string
  badge: string
  description: string
}

function PropertyGallery() {
  const [filter, setFilter] = useState('all')
  const [favorites, setFavorites] = useState<number[]>([])

  const properties: Property[] = [
    {
      id: 1,
      image: '/images/property-1.svg',
      title: 'Villa à Ngor',
      location: 'Ngor, DAKAR',
      price: '450 000 000',
      type: 'vendre',
      beds: 4,
      baths: 3,
      area: '350m²',
      badge: 'bg-success',
      description: 'Magnifique villa avec vue sur mer et jardin privatif',
    },
    {
      id: 2,
      image: '/images/property-2.svg',
      title: 'Appartement aux Almadies',
      location: 'Almadies, DAKAR',
      price: '2 500 000',
      type: 'louer',
      beds: 3,
      baths: 2,
      area: '120m²',
      badge: 'bg-warning',
      description: 'Appartement moderne avec terrasse et parking',
    },
    {
      id: 3,
      image: '/images/property-3.svg',
      title: 'Terrain à vendre',
      location: 'Saly, MBOUR',
      price: '25 000 000',
      type: 'terrain',
      beds: 0,
      baths: 0,
      area: '500m²',
      badge: 'bg-success',
      description: 'Terrain bien situé pour construction résidentielle',
    },
    {
      id: 4,
      image: '/images/property-4.svg',
      title: 'Appartement Neuf à Ouakam',
      location: 'Ouakam, DAKAR',
      price: '78 000 000',
      type: 'neuf',
      beds: 2,
      baths: 2,
      area: '90m²',
      badge: 'bg-info',
      description: 'Programme immobilier neuf avec ascenseur et piscine',
    },
  ]

  const filtered = filter === 'all' ? properties : properties.filter((p) => p.type === filter)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-12 lg:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Galerie de Propriétés</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-white border-2 border-gray-300 text-black hover:border-primary'
            }`}
          >
            TOUS
          </button>
          <button
            onClick={() => setFilter('vendre')}
            className={`px-6 py-2 rounded font-medium transition-colors ${
              filter === 'vendre'
                ? 'bg-success text-white'
                : 'bg-white border-2 border-gray-300 text-black hover:border-success'
            }`}
          >
            À VENDRE
          </button>
          <button
            onClick={() => setFilter('louer')}
            className={`px-6 py-2 rounded font-medium transition-colors ${
              filter === 'louer'
                ? 'bg-warning text-white'
                : 'bg-white border-2 border-gray-300 text-black hover:border-warning'
            }`}
          >
            À LOUER
          </button>
          <button
            onClick={() => setFilter('terrain')}
            className={`px-6 py-2 rounded font-medium transition-colors ${
              filter === 'terrain'
                ? 'bg-success text-white'
                : 'bg-white border-2 border-gray-300 text-black hover:border-success'
            }`}
          >
            TERRAINS
          </button>
          <button
            onClick={() => setFilter('neuf')}
            className={`px-6 py-2 rounded font-medium transition-colors ${
              filter === 'neuf'
                ? 'bg-info text-white'
                : 'bg-white border-2 border-gray-300 text-black hover:border-info'
            }`}
          >
            NEUF
          </button>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gray-200 overflow-hidden group">
                <img
                  src={`/images/property-${property.id}.jpg`}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    const remote = property.image
                    const placeholder = 'https://via.placeholder.com/800x600?text=Image+indisponible'
                    if (target.src !== remote && target.src !== placeholder) {
                      target.src = remote
                    } else if (target.src !== placeholder) {
                      target.src = placeholder
                    }
                  }}
                />

                {/* Badge */}
                <div className={`absolute top-4 left-4 ${property.badge} text-white px-3 py-1 rounded text-xs font-bold`}>
                  {property.type.toUpperCase()}
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  {favorites.includes(property.id) ? '❤️' : '🤍'}
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-2">📍 {property.location}</p>
                <p className="text-gray-600 text-xs mb-4">{property.description}</p>

                {/* Property Details */}
                <div className="flex gap-4 text-xs text-gray-600 mb-4">
                  {property.beds > 0 && <span>🛏️ {property.beds} Ch</span>}
                  {property.baths > 0 && <span>🚿 {property.baths} SDB</span>}
                  <span>📐 {property.area}</span>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">
                    {property.price}
                  </span>
                  <button className="bg-primary text-white px-4 py-2 rounded text-xs font-medium hover:bg-orange-600 transition-colors">
                    DÉTAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Aucune propriété trouvée pour ce filtre</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertyGallery
