import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/test'
import Navbar from './components/navbar'
import Card from './components/Card'

function App() {
 

  return (
    
    <>
    <div className='h-screen flex flex-col items-center text-white/95 font-inter   gap-4  p-4'>
  <Navbar/>
   <Card  />
 <Test/>
    </div>
      
  </>
  )
}

export default App
