import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import HowItWorks from './Components/HowItWorks'
import PricingPlans from './Components/PricingPlans'
import KeyFeatures from './Components/KeyFeatures'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <PricingPlans />
      <Testimonials/>
      <Footer />
    </main>
  )
}

export default App