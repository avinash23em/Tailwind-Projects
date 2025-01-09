import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './assets/components/home'
import Hero from './assets/components/hero'
import { Features } from './assets/components/features'
import Footer from './assets/components/footer'

function App() {
  

  return ( 
   <div className='relative min-h-screen overflow-hidden'>
   <div className= "fixed inset-0 bg-[#181F2B] dark:bg-black dark:text-white"></div>
   <div className="relative z-10 font-medium text-white">
<Home/>
<Hero/>
<Features/>
<Footer/>
   </div>
   </div>
  )
}

export default App
