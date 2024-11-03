import { BRAND_LOGOS, HERO_CONTENT } from '../constants'
import heroImage from '../assets/hero.jpg'
import {motion } from 'framer-motion'
import { space } from 'postcss/lib/list'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const fadeInUp = {
  hidden: {opacity: 0, y: 10},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
}

const leftBtn = {
  hidden: { opacity: 0, x: -40, },
  whileHover: { scale: 1.2 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}
const RightBtn = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const fadeIn = {
  hidden: {opacity: 0},
  visible: {opacity: 1, transition: {duration: 0.6}}
}

const staggerZero = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0 } }
}

function HeroSection() {
  return (
    <motion.section 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0 }}
    className="pt-28 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">

        <motion.div 
        variants={fadeInUp}
        className="mb-8 border border-neutral-800 px-3 py-2 rounded-full text-xs">
          {HERO_CONTENT.badgeText}
          
        </motion.div>

        <motion.h1 
        variants={fadeInUp}
        className='text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent text-center pb-4'>
          {HERO_CONTENT.mainHeading.split("\n").map((text, index)=>(
            <span key={index}>
            {text}
            <br />
          </span>
          ))}
        </motion.h1>

        <motion.p
        variants={fadeInUp}
        className='mt-6 text-neutral-400 max-w-xl text-center'>
          {HERO_CONTENT.subHeading}
        </motion.p>

        <motion.div 
        variants={staggerZero}
        className='mt-6 space-x-4'>
          <motion.a variants={leftBtn} whileHover={{scale: 1.05}} href="#" className='inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium'>
            {HERO_CONTENT.callToAction.primary}
          </motion.a>
          <motion.a variants={RightBtn} whileHover={{scale: 1.05}} href="#" className='inline-block border border-gray-500 hover:border-gray-400 text-white py-3 px-6 rounded-lg font-medium'>
            {HERO_CONTENT.callToAction.secondary}
          </motion.a>
        </motion.div>


        <motion.div 
        variants={fadeIn}
        className='py-10'>
          <p className='text-gray-400 text-center mb-8'>
            {HERO_CONTENT.trustedByText}
          </p>

          <motion.div 
          variants = {fadeIn}
          className='flex flex-wrap justify-center gap-8'>
            {BRAND_LOGOS.map((logo, index)=>{
              return (
                <img key={index} src={logo.src} alt="logo" className='h-8' />
              )
            })}
          </motion.div>

          <motion.div 
          variants={fadeInUp} 
          className='mt-12'>
            <img src={heroImage} alt="Streamer Saas Interface" className='w-full rounded-3xl border border-neutral-800 mb-20'/>
          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  )
}

export default HeroSection