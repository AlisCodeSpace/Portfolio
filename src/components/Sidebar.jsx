import React from 'react'

import ProfileBody from './sidebar/ProfileBody'
import ProfileHeader from './sidebar/ProfileHeader'
import ProfileFooter from './sidebar/ProfileFooter'

const Sidebar = () => {
  return (
    <aside className='w-full'>
       <ProfileHeader />
       <hr className='my-8 bg-jet h-[1px] border-none'/>
       <ProfileBody />
       <ProfileFooter /> 
    </aside>
  )
}

export default Sidebar
