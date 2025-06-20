import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between  bg-slate-700 text-white py-3'>
      <div className="logo ">
        <span className='font-bold text-xl mx-5'>iTask</span>
      </div>
      <ul className='flex gap-8 mx-8 '>
        <li className='cursor-pointer hover:font-bold transition-all duration-300 '>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-300 '>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
