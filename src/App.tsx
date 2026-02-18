import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/test'
import Navbar from './components/navbar'
import Card from './components/Card'
import PasswordGenerator from './components/PasswordGenerator'
import CurrencyConverter from './components/CurrencyConverter'

import { Outlet } from 'react-router-dom'
import React from 'react'

const App = () => {
  return (
    <>
    
    <div className='h-screen bg-gray-800'>
    <Navbar/>
    <Outlet />

    </div>

        
    </>
  )
}

export default App