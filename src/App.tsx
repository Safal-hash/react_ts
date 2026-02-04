import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex justify-center items-center bg-[#161616]'>
   <h1 className='text-3xl text-white/95 font-medium  '>
     Home to all my <span className='text-blue-900 underline cursor-pointer'>Elements</span> and <span className='text-blue-900 underline cursor-pointer'>Components</span>
   </h1>

    </div>
  )
}

export default App
