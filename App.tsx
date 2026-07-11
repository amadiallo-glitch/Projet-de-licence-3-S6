import Header from './components/Header'
import Hero from './components/Hero'
import SearchSection from './components/SearchSection'
import PropertyCards from './components/PropertyCards'
import PropertyGallery from './components/PropertyGallery'
import Benefits from './components/Benefits'
import ProcessSteps from './components/ProcessSteps'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ClientTestimonials from './components/ClientTestimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Newsletter from './components/Newsletter'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SearchSection />
      <PropertyCards />
      <PropertyGallery />
      <Benefits />
      <ProcessSteps />
      <Services />
      <About />
      <Testimonials />
      <ClientTestimonials />
      <FAQ />
      <ContactForm />
      <Newsletter />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
