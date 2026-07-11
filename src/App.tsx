import Header from '../Header'
import Hero from '../Hero'
import SearchSection from '../SearchSection'
import Services from '../Services'
import Footer from '../Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <SearchSection />
      <Services />
      <Footer />
    </div>
  )
}

export default App
