import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/test'
import Navbar from './components/navbar'
import Card from './components/Card'
import PasswordGenerator from './components/PasswordGenerator'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
 

  return (
    
    <>
    <div className='h-screen flex flex-col items-center bg-stone-800 text-white/95 font-inter   gap-4  p-4'>
  <Navbar/>

    <CurrencyConverter/>

    </div>
      
  </>
  )
}

export default App
