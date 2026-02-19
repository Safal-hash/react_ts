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
import Footer from './components/Footer'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import Landingpage from './components/Landingpage'

const App = () => {
  return (

    <div className='min-h-screen bg-gray-700'>   
  <Navbar />
 <Outlet />
 <Footer />
     </div>
        

  )
}

export default App