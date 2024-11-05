import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import HowItWorks from './Components/HowItWorks'
import PricingPlans from './Components/PricingPlans'

const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <PricingPlans />
    </main>
  )
}

export default App