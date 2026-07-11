import { useState } from 'react'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'ACCUEIL', href: '#' },
    { label: 'ACHETER', href: '#' },
    { label: 'LOUER', href: '#' },
    { label: 'NEUF', href: '#' },
    { label: 'TERRAIN', href: '#' },
    { label: 'BUREAUX', href: '#' },
    { label: 'GESTION', href: '#' },
    { label: 'CONTACT', href: '#' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col cursor-pointer hover:opacity-80 transition-opacity">
          <h1 className="text-2xl font-bold text-black font-gravitas">DËKKALIMMO</h1>
          <p className="text-xs text-gray-600">AGENCE IMMOBILIÈRE</p>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-semibold nav-link transition-all duration-200 ${
                item.label === 'ACCUEIL' ? 'text-primary border-b-2 border-primary pb-1' : 'text-black hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact & Button Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-right text-xs">
            <p className="font-bold text-gray-800">+221764481288</p>
            <p className="text-gray-500 text-xs">Lun-Ven: 8h-18h</p>
          </div>
          <button className="btn-primary text-xs font-bold whitespace-nowrap">ESTIMER BIEN</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-2xl font-bold"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm font-medium text-gray-800 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <hr className="my-3" />
          <p className="text-xs font-bold text-gray-800">📞 +221764481288</p>
          <button className="w-full btn-primary text-sm">ESTIMER MON BIEN</button>
        </div>
      )}
    </header>
  )
}

export default Header
