import Header from './components/Header'
import Hero from './components/Hero'
import CoursesSection from './components/CoursesSection'
import WhyUsSection from './components/WhyUsSection'
import StatsSection from './components/StatsSection'
import PlacementSection from './components/PlacementSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <CoursesSection />
        <WhyUsSection />
        <StatsSection />
        <PlacementSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App