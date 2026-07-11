function Footer() {
  return (
    <footer className="bg-dark text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-8 border-b border-gray-700">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4 font-gravitas">DËKKALIMMO</h3>
            <p className="text-sm text-gray-400">AGENCE IMMOBILIÈRE</p>
            <p className="text-sm text-gray-400 mt-4">
              DËKKALIMMO est votre agence immobilière de référence au Sénégal. Nous vous accompagnons pour acheter, vendre, louer ou gérer vos biens en toute sérénité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acheter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Louer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Neuf</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terrains</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bureaux et commerces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gestion locative</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estimer un bien</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Villes populaires</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Dakar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Almadies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ngor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ouakam</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mermoz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Point E</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Saly</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Somone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Thiés</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Liens utiles</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">A propos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mention légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conditions d'utilisations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-400">
          <p className="mb-2">📍 Dakar, Sénégal</p>
          <p className="mb-2">📞 +221 764481288</p>
          <p>✉️ dekkalimmo@gmail.com</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
          <p>&copy; 2026 DËKKALIMMO. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
