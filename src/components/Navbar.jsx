import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header'>
        
        <NavLink to='./3DPortfolio' className='w-40 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
            <p className='blue-gradient_text text-center'>Song Yang</p>
        </NavLink>
        <nav className=' flex text-lg gap-7 font-medium'>
            <NavLink to='./about' className={({isActive})=> isActive? 'text-blue-500':'text-black-500' }>
                About
            </NavLink>
            <NavLink to='./projects' className={({isActive})=> isActive? 'text-blue-500':'text-black-500' }>
                Project
            </NavLink>
            <NavLink to='./contact' className={({isActive})=> isActive? 'text-blue-500':'text-black-500' }>
                Contact
            </NavLink>

            {/* Download CV Button */}
            <a
                href="https://drive.google.com/uc?export=download&id=1sIESqd-vmOOISjnJYdP-OpBQ880htXCS"
                download
                className='text-black-500 hover:text-blue-500'
            >
                Download CV
            </a>
        </nav>
    </header>
  )
}

export default Navbar