function ProcessSteps() {
  const steps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Nous discutons de vos besoins et vos objectifs immobiliers',
      details: [
        'Écoute attentive',
        'Analyse du budget',
        'Définition des critères',
      ],
    },
    {
      step: '02',
      title: 'Recherche',
      description: 'Nous cherchons les propriétés qui correspondent à vos besoins',
      details: [
        'Accès à la base de données',
        'Recherche ciblée',
        'Pré-visite virtuelle',
      ],
    },
    {
      step: '03',
      title: 'Visite',
      description: 'Visite des propriétés sélectionnées avec notre expert',
      details: [
        'Rendez-vous programmé',
        'Visite complète',
        'Conseils sur place',
      ],
    },
    {
      step: '04',
      title: 'Négociation',
      description: 'Nous négocions les meilleures conditions pour vous',
      details: [
        'Étude du marché',
        'Propositions équitables',
        'Médiation professionnelle',
      ],
    },
    {
      step: '05',
      title: 'Documentation',
      description: 'Préparation de tous les documents légaux nécessaires',
      details: [
        'Vérification des titres',
        'Documents complets',
        'Conformité légale',
      ],
    },
    {
      step: '06',
      title: 'Finalisation',
      description: 'Signature et remise des clés',
      details: [
        'Signature notariée',
        'Transfert de propriété',
        'Suivi post-vente',
      ],
    },
  ]

  return (
    <section className="py-12 lg:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Notre Processus</h2>
        <p className="text-center text-gray-600 mb-12">
          6 étapes simples pour concrétiser votre projet immobilier
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-primary mb-3">{item.step}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>

              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-12 pt-12 border-t-2 border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-8">Timeline Typique</h3>
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-lg p-6 text-white text-center">
            <p className="text-lg font-bold mb-2">📅 Délai moyen: 2-4 mois</p>
            <p className="text-sm opacity-90">
              Le délai exact dépend du type de propriété et des conditions du marché
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
