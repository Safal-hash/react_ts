import React from 'react'

const Navbar = () => {
  return (
   <div
      className="w-fit p-1 h-fit sticky z-999 top-2 rounded-4xl bg-transparent gap-4 flex items-center"
    >
     
      <div className="bg-white rounded-full p-1 cursor-pointer">
        <img
          src="./avatar.png"
          alt=""
          className="h-6 w-6 hover:animate-spin transition-all ease-in"
        />
      </div>

      <div
        className="bg-white rounded-2xl p-2 text-xs text-neutral-500 font-[450] hover:text-stone-900 font-inter transition-all ease-in cursor-pointer"
      >
        Components
      </div>
    </div>
  )
}

export default Navbar