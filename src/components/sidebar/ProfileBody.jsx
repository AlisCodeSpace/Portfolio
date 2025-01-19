import React from 'react'

import { profileinfo } from '../../data/profile'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const ProfileBody = () => {
  return (
    <ul className='flex flex-col gap-6'>
      {profileinfo.map((item, index) => (
        <li key={index} className='flex items-center gap-2'>
            <Container className='w-12 h-12'>
                <span>{React.createElement(item.icon)}</span>
            </Container>
            <div className='flex flex-col max-w-[150px]'>
                <span className='text-sm text-light-gray'>{item.title}</span>
                {item.title === 'Email' ? <Link to={`mailto:${item.value}?subject=Hello&body=Hi, I wanted to reach out...`}  className='text-sm text-white truncate'>{item.value}</Link> : <p className='text-sm text-white'>{item.value}</p>}
            </div>
        </li>
      ))}
    </ul>
  )
}

export default ProfileBody
