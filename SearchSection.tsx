import { useState } from 'react'

function SearchSection() {
  const [searchType, setSearchType] = useState('all')
  const [budget, setBudget] = useState('')

  const searchOptions = [
    { id: 'vendre', label: 'À VENDRE', color: 'bg-success' },
    { id: 'louer', label: 'À LOUER', color: 'bg-warning' },
    { id: 'terrain', label: 'TERRAIN', color: 'bg-success' },
    { id: 'neuf', label: 'NEUF', color: 'bg-info' },
  ]

  return (
    <section className="bg-white py-8 lg:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 -mt-20 relative z-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {searchOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSearchType(option.id)}
                className={`flex items-center gap-2 p-3 rounded transition-colors ${
                  searchType === option.id
                    ? 'bg-gray-100'
                    : 'bg-white border border-gray-300'
                }`}
              >
                <div className={`w-3 h-3 rounded ${option.color}`}></div>
                <span className="text-xs font-medium">{option.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="Toutes les villes"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              placeholder="Toutes les types de bien"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              placeholder="Prix min (25-000-000 00)"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          <button className="w-full btn-primary">VOIR PLUS</button>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
