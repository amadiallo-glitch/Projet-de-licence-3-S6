import About from './component/About'
import PropertyGallery from './component/PropertyGallery'
import Newsletter from './components/newletter'
import Footer from '../Footer'
import Hero from '../Hero'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <About />
      <PropertyGallery />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
