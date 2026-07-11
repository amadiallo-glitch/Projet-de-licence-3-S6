function Benefits() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Approche Personnalisée',
      description: 'Nous écoutons vos besoins et trouvons la solution adaptée',
    },
    {
      icon: '⚡',
      title: 'Service Rapide',
      description: 'Nous accélérons les processus pour votre gain de temps',
    },
    {
      icon: '💼',
      title: 'Expertise Reconnue',
      description: 'Plus de 15 ans d\'expérience dans l\'immobilier sénégalais',
    },
    {
      icon: 'CMD',
      title: 'Sécurité Garantie',
      description: 'Transactions sécurisées avec documentation complète',
    },
    {
      icon: '💰',
      title: 'Meilleurs Prix',
      description: 'Comparaison de marché pour vous obtenir les meilleures offres',
    },
    {
      icon: '🤝',
      title: 'Support Continu',
      description: 'Notre équipe est là pour vous avant, pendant et après la vente',
    },
  ]

  return (
    <section className="py-12 lg:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Pourquoi DEKKALIMMO?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
