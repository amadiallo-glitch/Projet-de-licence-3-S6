import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer un email valide')
      return
    }

    console.log('Email inscrit:', email)
    setSubmitted(true)
    setError('')
    setEmail('')

    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-12 lg:py-16 px-4 bg-gradient-to-r from-primary to-orange-600 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Restez Informé</h2>
        <p className="text-lg opacity-90 mb-8">
          Inscrivez-vous à notre newsletter pour recevoir les meilleures annonces immobilières
          et nos conseils d'expert
        </p>

        {submitted ? (
          <div className="bg-white/20 backdrop-blur rounded-lg p-6 inline-block">
            <p className="text-lg font-bold">✅ Inscription confirmée!</p>
            <p className="text-sm opacity-90">Merci de votre intérêt. Vérifiez votre email.</p>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded text-black focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors"
              >
                S'INSCRIRE
              </button>
            </form>

            {error && <p className="text-red-200 mt-3 text-sm">❌ {error}</p>}
          </div>
        )}

        <p className="text-sm opacity-75 mt-4">
          Nous respectons votre vie privée. Désinscription facile à tout moment.
        </p>
      </div>
    </section>
  )
}

export default Newsletter