function About() {
  const stats = [
    { number: '+500', label: 'Propriétés vendues' },
    { number: '+10K', label: 'Clients satisfaits' },
    { number: '+15', label: 'Années d\'expérience' },
    { number: '+8', label: 'Agences au Sénégal' },
  ]

  const team = [
    {
      name: 'Amadou Diallo',
      role: 'Directeur Général',
      emoji: '👨‍💼',
    },
    {
      name: 'Fatou Sarr',
      role: 'Responsable Ventes',
      emoji: '👩‍💼',
    },
    {
      name: 'Omar Ba',
      role: 'Responsable Locations',
      emoji: '👨‍💼',
    },
    {
      name: 'Mariam Ndiaye',
      role: 'Gestionnaire Locative',
      emoji: '👩‍💼',
    },
  ]

  return (
    <section className="py-12 lg:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="section-title">Qui sommes-nous?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            DEKKALIMMO est l'agence immobilière de référence au Sénégal. Depuis plus de 15 ans,
            nous accompagnons nos clients dans leurs projets immobiliers avec professionnalisme
            et transparence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 py-8 border-y-2 border-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">✨ Notre Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Offrir des solutions immobilières adaptées à chaque client. Nous mettons notre
              expertise au service de votre projet pour vous garantir une transaction sécurisée
              et satisfaisante.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">🎯 Nos Valeurs</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Intégrité et transparence</li>
              <li>✓ Professionnalisme reconnu</li>
              <li>✓ Écoute et conseil</li>
              <li>✓ Efficacité et rapidité</li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Notre Équipe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Pourquoi nous choisir?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">🏆</div>
              <div>
                <h4 className="font-bold mb-2">Expertise Reconnue</h4>
                <p className="text-sm opacity-90">15+ ans d'expérience dans l'immobilier sénégalais</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">🔒</div>
              <div>
                <h4 className="font-bold mb-2">Sécurité Garantie</h4>
                <p className="text-sm opacity-90">Transactions sécurisées avec documentation légale</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">⚡</div>
              <div>
                <h4 className="font-bold mb-2">Service Rapide</h4>
                <p className="text-sm opacity-90">Processus accélérés pour vos transactions</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">💰</div>
              <div>
                <h4 className="font-bold mb-2">Meilleurs Prix</h4>
                <p className="text-sm opacity-90">Comparaison de marché pour les meilleurs deals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
