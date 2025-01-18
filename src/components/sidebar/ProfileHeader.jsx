import React from 'react'

import ProfileImage from '../../assets/ProfileImage.jpg'


const ProfileHeader = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
        <figure>
            <img src={ProfileImage} alt="Profile Image" width={156} className='rounded-2xl'/>
        </figure>
        <div>
            <h2 className='h2 mb-3 text-center'>Ali Anani</h2>
            <span className='bg-onyx text-white rounded-lg text-sm px-4 py-1 font-light'>Frontend Developer</span>
        </div>
    </div>
  )
}

export default ProfileHeader
