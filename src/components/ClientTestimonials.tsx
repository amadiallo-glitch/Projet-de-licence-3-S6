function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Mohamed Diallo',
      role: 'Vendeur satisfait',
      message:
        'Excellente agence! Ils ont rapidement trouvé un acheteur pour ma maison. Service professionnel.',
      emoji: '⭐⭐⭐⭐⭐',
    },
    {
      id: 2,
      name: 'Aminata Sarr',
      role: 'Acheteuse',
      message:
        'DEKKALIMMO m\'a aidée à trouver l\'appartement parfait. L\'équipe est très accueillante et efficace.',
      emoji: '⭐⭐⭐⭐⭐',
    },
    {
      id: 3,
      name: 'Omar Ba',
      role: 'Propriétaire locataire',
      message:
        'La gestion locative est impeccable. Ils gèrent tout pour moi, c\'est génial!',
      emoji: '⭐⭐⭐⭐⭐',
    },
    {
      id: 4,
      name: 'Fatou Ndiaye',
      role: 'Investisseur',
      message:
        'Très bon retour sur investissement grâce aux conseils d\'experts de DEKKALIMMO.',
      emoji: '⭐⭐⭐⭐⭐',
    },
  ]

  return (
    <section className="py-12 lg:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Témoignages Clients</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-lg mb-3">{testimonial.emoji}</p>
              <p className="text-gray-600 text-sm mb-4 italic">"{testimonial.message}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
