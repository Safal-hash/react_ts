import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
   <div
      className=" w-full fixed z-999 top-2 rounded-4xl bg-transparent gap-4 flex justify-center items-center"
    >
     
      <div className="bg-white rounded-full p-1 cursor-pointer">
        <NavLink to="/">

       
        <img
          src="avatar.png"
          alt=""
          className="h-6 w-6 hover:animate-spin transition-all ease-in"
        />
         </NavLink>
      </div>

      <div
        className="bg-white rounded-2xl p-2 text-xs text-neutral-500 font-[450] hover:text-stone-900 font-inter transition-all ease-in cursor-pointer"
      >
        <NavLink to="/Card" >
        Components
        </NavLink>

        
        
      </div>

       <div
        className="bg-white rounded-2xl p-2 text-xs text-neutral-500 font-[450] hover:text-stone-900 font-inter transition-all ease-in cursor-pointer"
      >
        <NavLink to="/github" >
        Github
        </NavLink>

        
        
      </div>
    </div>
  )
}

export default Navbar