import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './test'
import Navbar from './navbar'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    
    <div className='h-screen flex flex-col items-center text-white/95 font-inter  gap-4  p-4'>
  <Navbar/>
   <Card/>
    </div>
  )
}

export default App
