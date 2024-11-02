import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'

const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar />
      <HeroSection />
    </main>
  )
}

export default App