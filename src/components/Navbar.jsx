import React from 'react'

import { links } from '../data/links'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='absolute top-0 right-0 left-auto bottom-auto border-l border-b border-jet bg-onyx rounded-bl-2xl py-3 px-5 w-[500px]'>
      <ul className='flex justify-around items-center '>
        {links.map((link, index) => (
            <li key={index}>
                <NavLink to={link.path} className={({isActive}) => `${isActive ? 'text-yellow' : 'text-white'} text-sm transition ease-in-out duration-200 hover:text-light-gray`}>
                    {link.title}
                </NavLink>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
