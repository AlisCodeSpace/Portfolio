import React from 'react'
import { Github01Icon, InstagramIcon, Linkedin01Icon } from '../../assets/icons/Icons'
import { Link } from 'react-router-dom'

const ProfileFooter = () => {
  return (
    <div className='flex items-center justify-center gap-5 mt-8'>
      <Link 
        to="https://www.linkedin.com/in/ali-anani-29222b236/" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin01Icon className="text-light-gray"/>
      </Link>

      <Link 
        to="https://github.com/AlisCodeSpace/" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github01Icon className="text-light-gray"/>
      </Link>
      
      <Link 
        to="" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className="text-light-gray"/>
      </Link>
    </div>
  )
}

export default ProfileFooter
