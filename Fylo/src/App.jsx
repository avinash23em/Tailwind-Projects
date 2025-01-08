import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './assets/components/home'
import Hero from './assets/components/hero'
import { Features } from './assets/components/features'

function App() {
  

  return ( 
   <div className='min-h-screen bg-[#181F2B] dark:bg-black dark:text-white'>
<Home/>
<Hero/>
<Features/>
   </div>
  )
}

export default App
