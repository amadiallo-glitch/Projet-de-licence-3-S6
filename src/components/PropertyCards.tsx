function PropertyCards() {
  const properties = [
    {
      id: 1,
      image: '/images/property-01.svg',
      title: 'Villa à Ngor',
      location: 'Ngor, DAKAR',
      price: '450 000 000',
      type: 'À VENDRE',
      badge: 'bg-success',
    },
    {
      id: 2,
      image: '/images/property-2.svg',
      title: 'Appartement aux Almadies',
      location: 'Almadies, DAKAR',
      price: '2 500 000',
      type: 'À LOUER',
      badge: 'bg-warning',
    },
    {
      id: 3,
      image: '/images/property-1.svg',
      title: 'Terrain à vendre',
      location: 'Saly, MBOUR',
      price: '25 000 000',
      type: 'TERRAIN',
      badge: 'bg-success',
    },
    {
      id: 4,
      image: '/images/property-4.svg',
      title: 'Appartement à Ouakam',
      location: 'Ouakam, DAKAR',
      price: '78 000 000',
      type: 'NEUF',
      badge: 'bg-info',
    },
  ]

  return (
    <section className="py-12 lg:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Derniers biens mis en avant</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    // first fallback to remote Figma url, then to a stable placeholder
                    const remote = property.image.startsWith('/') ? undefined : property.image
                    const placeholder = 'https://via.placeholder.com/800x600?text=Image+indisponible'
                    if (remote && target.src !== remote && target.src !== placeholder) {
                      target.src = remote
                    } else if (target.src !== placeholder) {
                      target.src = placeholder
                    }
                  }}
                />
                <div className={`absolute top-4 left-4 ${property.badge} text-white px-3 py-1 rounded text-xs font-bold`}>
                  {property.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{property.location}</p>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">{property.price}</span>
                  <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertyCards