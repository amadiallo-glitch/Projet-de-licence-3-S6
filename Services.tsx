function Services() {
  const services = [
    {
      id: 1,
      icon: '🏠',
      title: 'Acheter',
      description: 'Trouvez votre future bien.\nMaison, appartement, terrains',
    },
    {
      id: 2,
      icon: '🔑',
      title: 'Louer',
      description: 'Location longue et courte durée\nDes biens vérifiés',
    },
    {
      id: 3,
      icon: '📊',
      title: 'Neuf',
      description: 'Programmes immobiliers neufs\net résidence modernes',
    },
    {
      id: 4,
      icon: '🏞️',
      title: 'Terrain',
      description: 'Terrain à vendre partout\nau Sénégal',
    },
    {
      id: 5,
      icon: '🏢',
      title: 'Bureaux',
      description: 'Bureau à louer\net commerces',
    },
    {
      id: 6,
      icon: '💼',
      title: 'Gestion',
      description: 'Nous gérons, vous percevez\nen toute sérénité',
    },
  ]

  return (
    <section className="py-12 lg:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Nos services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm whitespace-pre-line">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Estimez votre bien immobilier</h3>
              <p className="text-gray-700 mb-6">
                Obtenir une estimation gratuite,<br />
                Connaître votre prix de mise sur le marché!
              </p>
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 rounded font-medium hover:bg-orange-600 transition-colors w-fit">
              ESTIMER MON BIEN
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-dark rounded-lg p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Vous avez un projet immobilier?</h3>
              <p className="text-gray-300 mb-6">
                Parlez-nous de vos projets<br />
                Nos consultants dédiés à vous!
              </p>
            </div>
            <button className="bg-white text-dark px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors w-fit">
              CONTACTEZ-NOUS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
